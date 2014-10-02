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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28872 = (function (f,fn_handler,meta28873){
this.f = f;
this.fn_handler = fn_handler;
this.meta28873 = meta28873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28872.cljs$lang$type = true;
cljs.core.async.t28872.cljs$lang$ctorStr = "cljs.core.async/t28872";
cljs.core.async.t28872.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28872");
});
cljs.core.async.t28872.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28874){var self__ = this;
var _28874__$1 = this;return self__.meta28873;
});
cljs.core.async.t28872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28874,meta28873__$1){var self__ = this;
var _28874__$1 = this;return (new cljs.core.async.t28872(self__.f,self__.fn_handler,meta28873__$1));
});
cljs.core.async.__GT_t28872 = (function __GT_t28872(f__$1,fn_handler__$1,meta28873){return (new cljs.core.async.t28872(f__$1,fn_handler__$1,meta28873));
});
}
return (new cljs.core.async.t28872(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28876 = buff;if(G__28876)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__28876.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28876.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28876);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28876);
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
{var val_28877 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28877);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28877,ret){
return (function (){return fn1.call(null,val_28877);
});})(val_28877,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___28878 = n;var x_28879 = (0);while(true){
if((x_28879 < n__4414__auto___28878))
{(a[x_28879] = (0));
{
var G__28880 = (x_28879 + (1));
x_28879 = G__28880;
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
var G__28881 = (i + (1));
i = G__28881;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t28885 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28885 = (function (flag,alt_flag,meta28886){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28886 = meta28886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28885.cljs$lang$type = true;
cljs.core.async.t28885.cljs$lang$ctorStr = "cljs.core.async/t28885";
cljs.core.async.t28885.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28885");
});})(flag))
;
cljs.core.async.t28885.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t28885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t28885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28887){var self__ = this;
var _28887__$1 = this;return self__.meta28886;
});})(flag))
;
cljs.core.async.t28885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28887,meta28886__$1){var self__ = this;
var _28887__$1 = this;return (new cljs.core.async.t28885(self__.flag,self__.alt_flag,meta28886__$1));
});})(flag))
;
cljs.core.async.__GT_t28885 = ((function (flag){
return (function __GT_t28885(flag__$1,alt_flag__$1,meta28886){return (new cljs.core.async.t28885(flag__$1,alt_flag__$1,meta28886));
});})(flag))
;
}
return (new cljs.core.async.t28885(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t28891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28891 = (function (cb,flag,alt_handler,meta28892){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28892 = meta28892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28891.cljs$lang$type = true;
cljs.core.async.t28891.cljs$lang$ctorStr = "cljs.core.async/t28891";
cljs.core.async.t28891.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28891");
});
cljs.core.async.t28891.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t28891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t28891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28893){var self__ = this;
var _28893__$1 = this;return self__.meta28892;
});
cljs.core.async.t28891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28893,meta28892__$1){var self__ = this;
var _28893__$1 = this;return (new cljs.core.async.t28891(self__.cb,self__.flag,self__.alt_handler,meta28892__$1));
});
cljs.core.async.__GT_t28891 = (function __GT_t28891(cb__$1,flag__$1,alt_handler__$1,meta28892){return (new cljs.core.async.t28891(cb__$1,flag__$1,alt_handler__$1,meta28892));
});
}
return (new cljs.core.async.t28891(cb,flag,alt_handler,null));
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
return (function (p1__28894_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28894_SHARP_,port], null));
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
var G__28895 = (i + (1));
i = G__28895;
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
var alts_BANG___delegate = function (ports,p__28896){var map__28898 = p__28896;var map__28898__$1 = ((cljs.core.seq_QMARK_.call(null,map__28898))?cljs.core.apply.call(null,cljs.core.hash_map,map__28898):map__28898);var opts = map__28898__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__28896 = null;if (arguments.length > 1) {
  p__28896 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__28896);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28899){
var ports = cljs.core.first(arglist__28899);
var p__28896 = cljs.core.rest(arglist__28899);
return alts_BANG___delegate(ports,p__28896);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28907 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28907 = (function (ch,f,map_LT_,meta28908){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28908 = meta28908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28907.cljs$lang$type = true;
cljs.core.async.t28907.cljs$lang$ctorStr = "cljs.core.async/t28907";
cljs.core.async.t28907.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28907");
});
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28910 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28910 = (function (fn1,_,meta28908,ch,f,map_LT_,meta28911){
this.fn1 = fn1;
this._ = _;
this.meta28908 = meta28908;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28911 = meta28911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28910.cljs$lang$type = true;
cljs.core.async.t28910.cljs$lang$ctorStr = "cljs.core.async/t28910";
cljs.core.async.t28910.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28910");
});})(___$1))
;
cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28900_SHARP_){return f1.call(null,(((p1__28900_SHARP_ == null))?null:self__.f.call(null,p1__28900_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28912){var self__ = this;
var _28912__$1 = this;return self__.meta28911;
});})(___$1))
;
cljs.core.async.t28910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28912,meta28911__$1){var self__ = this;
var _28912__$1 = this;return (new cljs.core.async.t28910(self__.fn1,self__._,self__.meta28908,self__.ch,self__.f,self__.map_LT_,meta28911__$1));
});})(___$1))
;
cljs.core.async.__GT_t28910 = ((function (___$1){
return (function __GT_t28910(fn1__$1,___$2,meta28908__$1,ch__$2,f__$2,map_LT___$2,meta28911){return (new cljs.core.async.t28910(fn1__$1,___$2,meta28908__$1,ch__$2,f__$2,map_LT___$2,meta28911));
});})(___$1))
;
}
return (new cljs.core.async.t28910(fn1,___$1,self__.meta28908,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28909){var self__ = this;
var _28909__$1 = this;return self__.meta28908;
});
cljs.core.async.t28907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28909,meta28908__$1){var self__ = this;
var _28909__$1 = this;return (new cljs.core.async.t28907(self__.ch,self__.f,self__.map_LT_,meta28908__$1));
});
cljs.core.async.__GT_t28907 = (function __GT_t28907(ch__$1,f__$1,map_LT___$1,meta28908){return (new cljs.core.async.t28907(ch__$1,f__$1,map_LT___$1,meta28908));
});
}
return (new cljs.core.async.t28907(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28916 = (function (ch,f,map_GT_,meta28917){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28917 = meta28917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28916.cljs$lang$type = true;
cljs.core.async.t28916.cljs$lang$ctorStr = "cljs.core.async/t28916";
cljs.core.async.t28916.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28916");
});
cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28918){var self__ = this;
var _28918__$1 = this;return self__.meta28917;
});
cljs.core.async.t28916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28918,meta28917__$1){var self__ = this;
var _28918__$1 = this;return (new cljs.core.async.t28916(self__.ch,self__.f,self__.map_GT_,meta28917__$1));
});
cljs.core.async.__GT_t28916 = (function __GT_t28916(ch__$1,f__$1,map_GT___$1,meta28917){return (new cljs.core.async.t28916(ch__$1,f__$1,map_GT___$1,meta28917));
});
}
return (new cljs.core.async.t28916(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28922 = (function (ch,p,filter_GT_,meta28923){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28923 = meta28923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28922.cljs$lang$type = true;
cljs.core.async.t28922.cljs$lang$ctorStr = "cljs.core.async/t28922";
cljs.core.async.t28922.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t28922");
});
cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28924){var self__ = this;
var _28924__$1 = this;return self__.meta28923;
});
cljs.core.async.t28922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28924,meta28923__$1){var self__ = this;
var _28924__$1 = this;return (new cljs.core.async.t28922(self__.ch,self__.p,self__.filter_GT_,meta28923__$1));
});
cljs.core.async.__GT_t28922 = (function __GT_t28922(ch__$1,p__$1,filter_GT___$1,meta28923){return (new cljs.core.async.t28922(ch__$1,p__$1,filter_GT___$1,meta28923));
});
}
return (new cljs.core.async.t28922(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___29007 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29007,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29007,out){
return (function (state_28986){var state_val_28987 = (state_28986[(1)]);if((state_val_28987 === (7)))
{var inst_28982 = (state_28986[(2)]);var state_28986__$1 = state_28986;var statearr_28988_29008 = state_28986__$1;(statearr_28988_29008[(2)] = inst_28982);
(statearr_28988_29008[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (1)))
{var state_28986__$1 = state_28986;var statearr_28989_29009 = state_28986__$1;(statearr_28989_29009[(2)] = null);
(statearr_28989_29009[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (4)))
{var inst_28968 = (state_28986[(7)]);var inst_28968__$1 = (state_28986[(2)]);var inst_28969 = (inst_28968__$1 == null);var state_28986__$1 = (function (){var statearr_28990 = state_28986;(statearr_28990[(7)] = inst_28968__$1);
return statearr_28990;
})();if(cljs.core.truth_(inst_28969))
{var statearr_28991_29010 = state_28986__$1;(statearr_28991_29010[(1)] = (5));
} else
{var statearr_28992_29011 = state_28986__$1;(statearr_28992_29011[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (6)))
{var inst_28968 = (state_28986[(7)]);var inst_28973 = p.call(null,inst_28968);var state_28986__$1 = state_28986;if(cljs.core.truth_(inst_28973))
{var statearr_28993_29012 = state_28986__$1;(statearr_28993_29012[(1)] = (8));
} else
{var statearr_28994_29013 = state_28986__$1;(statearr_28994_29013[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (3)))
{var inst_28984 = (state_28986[(2)]);var state_28986__$1 = state_28986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28986__$1,inst_28984);
} else
{if((state_val_28987 === (2)))
{var state_28986__$1 = state_28986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(4),ch);
} else
{if((state_val_28987 === (11)))
{var inst_28976 = (state_28986[(2)]);var state_28986__$1 = state_28986;var statearr_28995_29014 = state_28986__$1;(statearr_28995_29014[(2)] = inst_28976);
(statearr_28995_29014[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (9)))
{var state_28986__$1 = state_28986;var statearr_28996_29015 = state_28986__$1;(statearr_28996_29015[(2)] = null);
(statearr_28996_29015[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (5)))
{var inst_28971 = cljs.core.async.close_BANG_.call(null,out);var state_28986__$1 = state_28986;var statearr_28997_29016 = state_28986__$1;(statearr_28997_29016[(2)] = inst_28971);
(statearr_28997_29016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (10)))
{var inst_28979 = (state_28986[(2)]);var state_28986__$1 = (function (){var statearr_28998 = state_28986;(statearr_28998[(8)] = inst_28979);
return statearr_28998;
})();var statearr_28999_29017 = state_28986__$1;(statearr_28999_29017[(2)] = null);
(statearr_28999_29017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28987 === (8)))
{var inst_28968 = (state_28986[(7)]);var state_28986__$1 = state_28986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28986__$1,(11),out,inst_28968);
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
});})(c__5708__auto___29007,out))
;return ((function (switch__5693__auto__,c__5708__auto___29007,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29003 = [null,null,null,null,null,null,null,null,null];(statearr_29003[(0)] = state_machine__5694__auto__);
(statearr_29003[(1)] = (1));
return statearr_29003;
});
var state_machine__5694__auto____1 = (function (state_28986){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_28986);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29004){if((e29004 instanceof Object))
{var ex__5697__auto__ = e29004;var statearr_29005_29018 = state_28986;(statearr_29005_29018[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28986);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29004;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29019 = state_28986;
state_28986 = G__29019;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_28986){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_28986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29007,out))
})();var state__5710__auto__ = (function (){var statearr_29006 = f__5709__auto__.call(null);(statearr_29006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29007);
return statearr_29006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29007,out))
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
return (function (state_29171){var state_val_29172 = (state_29171[(1)]);if((state_val_29172 === (7)))
{var inst_29167 = (state_29171[(2)]);var state_29171__$1 = state_29171;var statearr_29173_29210 = state_29171__$1;(statearr_29173_29210[(2)] = inst_29167);
(statearr_29173_29210[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (20)))
{var inst_29142 = (state_29171[(7)]);var inst_29153 = (state_29171[(2)]);var inst_29154 = cljs.core.next.call(null,inst_29142);var inst_29128 = inst_29154;var inst_29129 = null;var inst_29130 = (0);var inst_29131 = (0);var state_29171__$1 = (function (){var statearr_29174 = state_29171;(statearr_29174[(8)] = inst_29153);
(statearr_29174[(9)] = inst_29130);
(statearr_29174[(10)] = inst_29128);
(statearr_29174[(11)] = inst_29131);
(statearr_29174[(12)] = inst_29129);
return statearr_29174;
})();var statearr_29175_29211 = state_29171__$1;(statearr_29175_29211[(2)] = null);
(statearr_29175_29211[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (1)))
{var state_29171__$1 = state_29171;var statearr_29176_29212 = state_29171__$1;(statearr_29176_29212[(2)] = null);
(statearr_29176_29212[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (4)))
{var inst_29117 = (state_29171[(13)]);var inst_29117__$1 = (state_29171[(2)]);var inst_29118 = (inst_29117__$1 == null);var state_29171__$1 = (function (){var statearr_29180 = state_29171;(statearr_29180[(13)] = inst_29117__$1);
return statearr_29180;
})();if(cljs.core.truth_(inst_29118))
{var statearr_29181_29213 = state_29171__$1;(statearr_29181_29213[(1)] = (5));
} else
{var statearr_29182_29214 = state_29171__$1;(statearr_29182_29214[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (15)))
{var state_29171__$1 = state_29171;var statearr_29183_29215 = state_29171__$1;(statearr_29183_29215[(2)] = null);
(statearr_29183_29215[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (13)))
{var inst_29130 = (state_29171[(9)]);var inst_29128 = (state_29171[(10)]);var inst_29131 = (state_29171[(11)]);var inst_29129 = (state_29171[(12)]);var inst_29138 = (state_29171[(2)]);var inst_29139 = (inst_29131 + (1));var tmp29177 = inst_29130;var tmp29178 = inst_29128;var tmp29179 = inst_29129;var inst_29128__$1 = tmp29178;var inst_29129__$1 = tmp29179;var inst_29130__$1 = tmp29177;var inst_29131__$1 = inst_29139;var state_29171__$1 = (function (){var statearr_29184 = state_29171;(statearr_29184[(14)] = inst_29138);
(statearr_29184[(9)] = inst_29130__$1);
(statearr_29184[(10)] = inst_29128__$1);
(statearr_29184[(11)] = inst_29131__$1);
(statearr_29184[(12)] = inst_29129__$1);
return statearr_29184;
})();var statearr_29185_29216 = state_29171__$1;(statearr_29185_29216[(2)] = null);
(statearr_29185_29216[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (6)))
{var inst_29117 = (state_29171[(13)]);var inst_29122 = f.call(null,inst_29117);var inst_29127 = cljs.core.seq.call(null,inst_29122);var inst_29128 = inst_29127;var inst_29129 = null;var inst_29130 = (0);var inst_29131 = (0);var state_29171__$1 = (function (){var statearr_29186 = state_29171;(statearr_29186[(9)] = inst_29130);
(statearr_29186[(10)] = inst_29128);
(statearr_29186[(11)] = inst_29131);
(statearr_29186[(12)] = inst_29129);
return statearr_29186;
})();var statearr_29187_29217 = state_29171__$1;(statearr_29187_29217[(2)] = null);
(statearr_29187_29217[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (17)))
{var inst_29142 = (state_29171[(7)]);var inst_29146 = cljs.core.chunk_first.call(null,inst_29142);var inst_29147 = cljs.core.chunk_rest.call(null,inst_29142);var inst_29148 = cljs.core.count.call(null,inst_29146);var inst_29128 = inst_29147;var inst_29129 = inst_29146;var inst_29130 = inst_29148;var inst_29131 = (0);var state_29171__$1 = (function (){var statearr_29188 = state_29171;(statearr_29188[(9)] = inst_29130);
(statearr_29188[(10)] = inst_29128);
(statearr_29188[(11)] = inst_29131);
(statearr_29188[(12)] = inst_29129);
return statearr_29188;
})();var statearr_29189_29218 = state_29171__$1;(statearr_29189_29218[(2)] = null);
(statearr_29189_29218[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (3)))
{var inst_29169 = (state_29171[(2)]);var state_29171__$1 = state_29171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29171__$1,inst_29169);
} else
{if((state_val_29172 === (12)))
{var inst_29162 = (state_29171[(2)]);var state_29171__$1 = state_29171;var statearr_29190_29219 = state_29171__$1;(statearr_29190_29219[(2)] = inst_29162);
(statearr_29190_29219[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (2)))
{var state_29171__$1 = state_29171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29171__$1,(4),in$);
} else
{if((state_val_29172 === (19)))
{var inst_29157 = (state_29171[(2)]);var state_29171__$1 = state_29171;var statearr_29191_29220 = state_29171__$1;(statearr_29191_29220[(2)] = inst_29157);
(statearr_29191_29220[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (11)))
{var inst_29128 = (state_29171[(10)]);var inst_29142 = (state_29171[(7)]);var inst_29142__$1 = cljs.core.seq.call(null,inst_29128);var state_29171__$1 = (function (){var statearr_29192 = state_29171;(statearr_29192[(7)] = inst_29142__$1);
return statearr_29192;
})();if(inst_29142__$1)
{var statearr_29193_29221 = state_29171__$1;(statearr_29193_29221[(1)] = (14));
} else
{var statearr_29194_29222 = state_29171__$1;(statearr_29194_29222[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (9)))
{var inst_29164 = (state_29171[(2)]);var state_29171__$1 = (function (){var statearr_29195 = state_29171;(statearr_29195[(15)] = inst_29164);
return statearr_29195;
})();var statearr_29196_29223 = state_29171__$1;(statearr_29196_29223[(2)] = null);
(statearr_29196_29223[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (5)))
{var inst_29120 = cljs.core.async.close_BANG_.call(null,out);var state_29171__$1 = state_29171;var statearr_29197_29224 = state_29171__$1;(statearr_29197_29224[(2)] = inst_29120);
(statearr_29197_29224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (14)))
{var inst_29142 = (state_29171[(7)]);var inst_29144 = cljs.core.chunked_seq_QMARK_.call(null,inst_29142);var state_29171__$1 = state_29171;if(inst_29144)
{var statearr_29198_29225 = state_29171__$1;(statearr_29198_29225[(1)] = (17));
} else
{var statearr_29199_29226 = state_29171__$1;(statearr_29199_29226[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (16)))
{var inst_29160 = (state_29171[(2)]);var state_29171__$1 = state_29171;var statearr_29200_29227 = state_29171__$1;(statearr_29200_29227[(2)] = inst_29160);
(statearr_29200_29227[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29172 === (10)))
{var inst_29131 = (state_29171[(11)]);var inst_29129 = (state_29171[(12)]);var inst_29136 = cljs.core._nth.call(null,inst_29129,inst_29131);var state_29171__$1 = state_29171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(13),out,inst_29136);
} else
{if((state_val_29172 === (18)))
{var inst_29142 = (state_29171[(7)]);var inst_29151 = cljs.core.first.call(null,inst_29142);var state_29171__$1 = state_29171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29171__$1,(20),out,inst_29151);
} else
{if((state_val_29172 === (8)))
{var inst_29130 = (state_29171[(9)]);var inst_29131 = (state_29171[(11)]);var inst_29133 = (inst_29131 < inst_29130);var inst_29134 = inst_29133;var state_29171__$1 = state_29171;if(cljs.core.truth_(inst_29134))
{var statearr_29201_29228 = state_29171__$1;(statearr_29201_29228[(1)] = (10));
} else
{var statearr_29202_29229 = state_29171__$1;(statearr_29202_29229[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_29206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29206[(0)] = state_machine__5694__auto__);
(statearr_29206[(1)] = (1));
return statearr_29206;
});
var state_machine__5694__auto____1 = (function (state_29171){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29207){if((e29207 instanceof Object))
{var ex__5697__auto__ = e29207;var statearr_29208_29230 = state_29171;(statearr_29208_29230[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29207;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29231 = state_29171;
state_29171 = G__29231;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29171){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_29209 = f__5709__auto__.call(null);(statearr_29209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_29209;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___29312 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29312){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29312){
return (function (state_29291){var state_val_29292 = (state_29291[(1)]);if((state_val_29292 === (7)))
{var inst_29287 = (state_29291[(2)]);var state_29291__$1 = state_29291;var statearr_29293_29313 = state_29291__$1;(statearr_29293_29313[(2)] = inst_29287);
(statearr_29293_29313[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29292 === (1)))
{var state_29291__$1 = state_29291;var statearr_29294_29314 = state_29291__$1;(statearr_29294_29314[(2)] = null);
(statearr_29294_29314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29292 === (4)))
{var inst_29274 = (state_29291[(7)]);var inst_29274__$1 = (state_29291[(2)]);var inst_29275 = (inst_29274__$1 == null);var state_29291__$1 = (function (){var statearr_29295 = state_29291;(statearr_29295[(7)] = inst_29274__$1);
return statearr_29295;
})();if(cljs.core.truth_(inst_29275))
{var statearr_29296_29315 = state_29291__$1;(statearr_29296_29315[(1)] = (5));
} else
{var statearr_29297_29316 = state_29291__$1;(statearr_29297_29316[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29292 === (6)))
{var inst_29274 = (state_29291[(7)]);var state_29291__$1 = state_29291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29291__$1,(11),to,inst_29274);
} else
{if((state_val_29292 === (3)))
{var inst_29289 = (state_29291[(2)]);var state_29291__$1 = state_29291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29291__$1,inst_29289);
} else
{if((state_val_29292 === (2)))
{var state_29291__$1 = state_29291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29291__$1,(4),from);
} else
{if((state_val_29292 === (11)))
{var inst_29284 = (state_29291[(2)]);var state_29291__$1 = (function (){var statearr_29298 = state_29291;(statearr_29298[(8)] = inst_29284);
return statearr_29298;
})();var statearr_29299_29317 = state_29291__$1;(statearr_29299_29317[(2)] = null);
(statearr_29299_29317[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29292 === (9)))
{var state_29291__$1 = state_29291;var statearr_29300_29318 = state_29291__$1;(statearr_29300_29318[(2)] = null);
(statearr_29300_29318[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29292 === (5)))
{var state_29291__$1 = state_29291;if(cljs.core.truth_(close_QMARK_))
{var statearr_29301_29319 = state_29291__$1;(statearr_29301_29319[(1)] = (8));
} else
{var statearr_29302_29320 = state_29291__$1;(statearr_29302_29320[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29292 === (10)))
{var inst_29281 = (state_29291[(2)]);var state_29291__$1 = state_29291;var statearr_29303_29321 = state_29291__$1;(statearr_29303_29321[(2)] = inst_29281);
(statearr_29303_29321[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29292 === (8)))
{var inst_29278 = cljs.core.async.close_BANG_.call(null,to);var state_29291__$1 = state_29291;var statearr_29304_29322 = state_29291__$1;(statearr_29304_29322[(2)] = inst_29278);
(statearr_29304_29322[(1)] = (10));
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
});})(c__5708__auto___29312))
;return ((function (switch__5693__auto__,c__5708__auto___29312){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29308 = [null,null,null,null,null,null,null,null,null];(statearr_29308[(0)] = state_machine__5694__auto__);
(statearr_29308[(1)] = (1));
return statearr_29308;
});
var state_machine__5694__auto____1 = (function (state_29291){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29291);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29309){if((e29309 instanceof Object))
{var ex__5697__auto__ = e29309;var statearr_29310_29323 = state_29291;(statearr_29310_29323[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29291);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29309;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29324 = state_29291;
state_29291 = G__29324;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29291){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29312))
})();var state__5710__auto__ = (function (){var statearr_29311 = f__5709__auto__.call(null);(statearr_29311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29312);
return statearr_29311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29312))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___29411 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___29411,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___29411,tc,fc){
return (function (state_29389){var state_val_29390 = (state_29389[(1)]);if((state_val_29390 === (7)))
{var inst_29385 = (state_29389[(2)]);var state_29389__$1 = state_29389;var statearr_29391_29412 = state_29389__$1;(statearr_29391_29412[(2)] = inst_29385);
(statearr_29391_29412[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (1)))
{var state_29389__$1 = state_29389;var statearr_29392_29413 = state_29389__$1;(statearr_29392_29413[(2)] = null);
(statearr_29392_29413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (4)))
{var inst_29370 = (state_29389[(7)]);var inst_29370__$1 = (state_29389[(2)]);var inst_29371 = (inst_29370__$1 == null);var state_29389__$1 = (function (){var statearr_29393 = state_29389;(statearr_29393[(7)] = inst_29370__$1);
return statearr_29393;
})();if(cljs.core.truth_(inst_29371))
{var statearr_29394_29414 = state_29389__$1;(statearr_29394_29414[(1)] = (5));
} else
{var statearr_29395_29415 = state_29389__$1;(statearr_29395_29415[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (6)))
{var inst_29370 = (state_29389[(7)]);var inst_29376 = p.call(null,inst_29370);var state_29389__$1 = state_29389;if(cljs.core.truth_(inst_29376))
{var statearr_29396_29416 = state_29389__$1;(statearr_29396_29416[(1)] = (9));
} else
{var statearr_29397_29417 = state_29389__$1;(statearr_29397_29417[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (3)))
{var inst_29387 = (state_29389[(2)]);var state_29389__$1 = state_29389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29389__$1,inst_29387);
} else
{if((state_val_29390 === (2)))
{var state_29389__$1 = state_29389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29389__$1,(4),ch);
} else
{if((state_val_29390 === (11)))
{var inst_29370 = (state_29389[(7)]);var inst_29380 = (state_29389[(2)]);var state_29389__$1 = state_29389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29389__$1,(8),inst_29380,inst_29370);
} else
{if((state_val_29390 === (9)))
{var state_29389__$1 = state_29389;var statearr_29398_29418 = state_29389__$1;(statearr_29398_29418[(2)] = tc);
(statearr_29398_29418[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (5)))
{var inst_29373 = cljs.core.async.close_BANG_.call(null,tc);var inst_29374 = cljs.core.async.close_BANG_.call(null,fc);var state_29389__$1 = (function (){var statearr_29399 = state_29389;(statearr_29399[(8)] = inst_29373);
return statearr_29399;
})();var statearr_29400_29419 = state_29389__$1;(statearr_29400_29419[(2)] = inst_29374);
(statearr_29400_29419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (10)))
{var state_29389__$1 = state_29389;var statearr_29401_29420 = state_29389__$1;(statearr_29401_29420[(2)] = fc);
(statearr_29401_29420[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29390 === (8)))
{var inst_29382 = (state_29389[(2)]);var state_29389__$1 = (function (){var statearr_29402 = state_29389;(statearr_29402[(9)] = inst_29382);
return statearr_29402;
})();var statearr_29403_29421 = state_29389__$1;(statearr_29403_29421[(2)] = null);
(statearr_29403_29421[(1)] = (2));
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
});})(c__5708__auto___29411,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___29411,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_29407 = [null,null,null,null,null,null,null,null,null,null];(statearr_29407[(0)] = state_machine__5694__auto__);
(statearr_29407[(1)] = (1));
return statearr_29407;
});
var state_machine__5694__auto____1 = (function (state_29389){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29389);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29408){if((e29408 instanceof Object))
{var ex__5697__auto__ = e29408;var statearr_29409_29422 = state_29389;(statearr_29409_29422[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29408;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29423 = state_29389;
state_29389 = G__29423;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29389){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___29411,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_29410 = f__5709__auto__.call(null);(statearr_29410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___29411);
return statearr_29410;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___29411,tc,fc))
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
return (function (state_29470){var state_val_29471 = (state_29470[(1)]);if((state_val_29471 === (7)))
{var inst_29466 = (state_29470[(2)]);var state_29470__$1 = state_29470;var statearr_29472_29488 = state_29470__$1;(statearr_29472_29488[(2)] = inst_29466);
(statearr_29472_29488[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29471 === (6)))
{var inst_29459 = (state_29470[(7)]);var inst_29456 = (state_29470[(8)]);var inst_29463 = f.call(null,inst_29456,inst_29459);var inst_29456__$1 = inst_29463;var state_29470__$1 = (function (){var statearr_29473 = state_29470;(statearr_29473[(8)] = inst_29456__$1);
return statearr_29473;
})();var statearr_29474_29489 = state_29470__$1;(statearr_29474_29489[(2)] = null);
(statearr_29474_29489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29471 === (5)))
{var inst_29456 = (state_29470[(8)]);var state_29470__$1 = state_29470;var statearr_29475_29490 = state_29470__$1;(statearr_29475_29490[(2)] = inst_29456);
(statearr_29475_29490[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29471 === (4)))
{var inst_29459 = (state_29470[(7)]);var inst_29459__$1 = (state_29470[(2)]);var inst_29460 = (inst_29459__$1 == null);var state_29470__$1 = (function (){var statearr_29476 = state_29470;(statearr_29476[(7)] = inst_29459__$1);
return statearr_29476;
})();if(cljs.core.truth_(inst_29460))
{var statearr_29477_29491 = state_29470__$1;(statearr_29477_29491[(1)] = (5));
} else
{var statearr_29478_29492 = state_29470__$1;(statearr_29478_29492[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29471 === (3)))
{var inst_29468 = (state_29470[(2)]);var state_29470__$1 = state_29470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29470__$1,inst_29468);
} else
{if((state_val_29471 === (2)))
{var state_29470__$1 = state_29470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29470__$1,(4),ch);
} else
{if((state_val_29471 === (1)))
{var inst_29456 = init;var state_29470__$1 = (function (){var statearr_29479 = state_29470;(statearr_29479[(8)] = inst_29456);
return statearr_29479;
})();var statearr_29480_29493 = state_29470__$1;(statearr_29480_29493[(2)] = null);
(statearr_29480_29493[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_29484 = [null,null,null,null,null,null,null,null,null];(statearr_29484[(0)] = state_machine__5694__auto__);
(statearr_29484[(1)] = (1));
return statearr_29484;
});
var state_machine__5694__auto____1 = (function (state_29470){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29470);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29485){if((e29485 instanceof Object))
{var ex__5697__auto__ = e29485;var statearr_29486_29494 = state_29470;(statearr_29486_29494[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29470);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29485;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29495 = state_29470;
state_29470 = G__29495;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29470){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_29487 = f__5709__auto__.call(null);(statearr_29487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_29487;
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
return (function (state_29557){var state_val_29558 = (state_29557[(1)]);if((state_val_29558 === (7)))
{var inst_29538 = (state_29557[(7)]);var inst_29543 = (state_29557[(2)]);var inst_29544 = cljs.core.next.call(null,inst_29538);var inst_29538__$1 = inst_29544;var state_29557__$1 = (function (){var statearr_29559 = state_29557;(statearr_29559[(7)] = inst_29538__$1);
(statearr_29559[(8)] = inst_29543);
return statearr_29559;
})();var statearr_29560_29578 = state_29557__$1;(statearr_29560_29578[(2)] = null);
(statearr_29560_29578[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29558 === (1)))
{var inst_29537 = cljs.core.seq.call(null,coll);var inst_29538 = inst_29537;var state_29557__$1 = (function (){var statearr_29561 = state_29557;(statearr_29561[(7)] = inst_29538);
return statearr_29561;
})();var statearr_29562_29579 = state_29557__$1;(statearr_29562_29579[(2)] = null);
(statearr_29562_29579[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29558 === (4)))
{var inst_29538 = (state_29557[(7)]);var inst_29541 = cljs.core.first.call(null,inst_29538);var state_29557__$1 = state_29557;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29557__$1,(7),ch,inst_29541);
} else
{if((state_val_29558 === (6)))
{var inst_29553 = (state_29557[(2)]);var state_29557__$1 = state_29557;var statearr_29563_29580 = state_29557__$1;(statearr_29563_29580[(2)] = inst_29553);
(statearr_29563_29580[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29558 === (3)))
{var inst_29555 = (state_29557[(2)]);var state_29557__$1 = state_29557;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29557__$1,inst_29555);
} else
{if((state_val_29558 === (2)))
{var inst_29538 = (state_29557[(7)]);var state_29557__$1 = state_29557;if(cljs.core.truth_(inst_29538))
{var statearr_29564_29581 = state_29557__$1;(statearr_29564_29581[(1)] = (4));
} else
{var statearr_29565_29582 = state_29557__$1;(statearr_29565_29582[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29558 === (9)))
{var state_29557__$1 = state_29557;var statearr_29566_29583 = state_29557__$1;(statearr_29566_29583[(2)] = null);
(statearr_29566_29583[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29558 === (5)))
{var state_29557__$1 = state_29557;if(cljs.core.truth_(close_QMARK_))
{var statearr_29567_29584 = state_29557__$1;(statearr_29567_29584[(1)] = (8));
} else
{var statearr_29568_29585 = state_29557__$1;(statearr_29568_29585[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29558 === (10)))
{var inst_29551 = (state_29557[(2)]);var state_29557__$1 = state_29557;var statearr_29569_29586 = state_29557__$1;(statearr_29569_29586[(2)] = inst_29551);
(statearr_29569_29586[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29558 === (8)))
{var inst_29548 = cljs.core.async.close_BANG_.call(null,ch);var state_29557__$1 = state_29557;var statearr_29570_29587 = state_29557__$1;(statearr_29570_29587[(2)] = inst_29548);
(statearr_29570_29587[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_29574 = [null,null,null,null,null,null,null,null,null];(statearr_29574[(0)] = state_machine__5694__auto__);
(statearr_29574[(1)] = (1));
return statearr_29574;
});
var state_machine__5694__auto____1 = (function (state_29557){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29557);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e29575){if((e29575 instanceof Object))
{var ex__5697__auto__ = e29575;var statearr_29576_29588 = state_29557;(statearr_29576_29588[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29557);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e29575;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29589 = state_29557;
state_29557 = G__29589;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29557){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_29577 = f__5709__auto__.call(null);(statearr_29577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_29577;
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
cljs.core.async.Mux = (function (){var obj29591 = {};return obj29591;
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
cljs.core.async.Mult = (function (){var obj29593 = {};return obj29593;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t29817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29817 = (function (cs,ch,mult,meta29818){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29818 = meta29818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29817.cljs$lang$type = true;
cljs.core.async.t29817.cljs$lang$ctorStr = "cljs.core.async/t29817";
cljs.core.async.t29817.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t29817");
});})(cs))
;
cljs.core.async.t29817.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t29817.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t29817.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t29817.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t29817.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t29817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29819){var self__ = this;
var _29819__$1 = this;return self__.meta29818;
});})(cs))
;
cljs.core.async.t29817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29819,meta29818__$1){var self__ = this;
var _29819__$1 = this;return (new cljs.core.async.t29817(self__.cs,self__.ch,self__.mult,meta29818__$1));
});})(cs))
;
cljs.core.async.__GT_t29817 = ((function (cs){
return (function __GT_t29817(cs__$1,ch__$1,mult__$1,meta29818){return (new cljs.core.async.t29817(cs__$1,ch__$1,mult__$1,meta29818));
});})(cs))
;
}
return (new cljs.core.async.t29817(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___30040 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30040,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30040,cs,m,dchan,dctr,done){
return (function (state_29954){var state_val_29955 = (state_29954[(1)]);if((state_val_29955 === (7)))
{var inst_29950 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_29956_30041 = state_29954__$1;(statearr_29956_30041[(2)] = inst_29950);
(statearr_29956_30041[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (20)))
{var inst_29851 = (state_29954[(7)]);var inst_29861 = cljs.core.first.call(null,inst_29851);var inst_29862 = cljs.core.nth.call(null,inst_29861,(0),null);var inst_29863 = cljs.core.nth.call(null,inst_29861,(1),null);var state_29954__$1 = (function (){var statearr_29957 = state_29954;(statearr_29957[(8)] = inst_29862);
return statearr_29957;
})();if(cljs.core.truth_(inst_29863))
{var statearr_29958_30042 = state_29954__$1;(statearr_29958_30042[(1)] = (22));
} else
{var statearr_29959_30043 = state_29954__$1;(statearr_29959_30043[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (27)))
{var inst_29891 = (state_29954[(9)]);var inst_29893 = (state_29954[(10)]);var inst_29898 = cljs.core._nth.call(null,inst_29891,inst_29893);var state_29954__$1 = (function (){var statearr_29960 = state_29954;(statearr_29960[(11)] = inst_29898);
return statearr_29960;
})();var statearr_29961_30044 = state_29954__$1;(statearr_29961_30044[(2)] = null);
(statearr_29961_30044[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (1)))
{var state_29954__$1 = state_29954;var statearr_29962_30045 = state_29954__$1;(statearr_29962_30045[(2)] = null);
(statearr_29962_30045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (24)))
{var inst_29851 = (state_29954[(7)]);var inst_29868 = (state_29954[(2)]);var inst_29869 = cljs.core.next.call(null,inst_29851);var inst_29831 = inst_29869;var inst_29832 = null;var inst_29833 = (0);var inst_29834 = (0);var state_29954__$1 = (function (){var statearr_29963 = state_29954;(statearr_29963[(12)] = inst_29831);
(statearr_29963[(13)] = inst_29832);
(statearr_29963[(14)] = inst_29833);
(statearr_29963[(15)] = inst_29868);
(statearr_29963[(16)] = inst_29834);
return statearr_29963;
})();var statearr_29964_30046 = state_29954__$1;(statearr_29964_30046[(2)] = null);
(statearr_29964_30046[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (39)))
{var inst_29911 = (state_29954[(17)]);var inst_29929 = (state_29954[(2)]);var inst_29930 = cljs.core.next.call(null,inst_29911);var inst_29890 = inst_29930;var inst_29891 = null;var inst_29892 = (0);var inst_29893 = (0);var state_29954__$1 = (function (){var statearr_29968 = state_29954;(statearr_29968[(9)] = inst_29891);
(statearr_29968[(18)] = inst_29929);
(statearr_29968[(19)] = inst_29890);
(statearr_29968[(10)] = inst_29893);
(statearr_29968[(20)] = inst_29892);
return statearr_29968;
})();var statearr_29969_30047 = state_29954__$1;(statearr_29969_30047[(2)] = null);
(statearr_29969_30047[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (4)))
{var inst_29822 = (state_29954[(21)]);var inst_29822__$1 = (state_29954[(2)]);var inst_29823 = (inst_29822__$1 == null);var state_29954__$1 = (function (){var statearr_29970 = state_29954;(statearr_29970[(21)] = inst_29822__$1);
return statearr_29970;
})();if(cljs.core.truth_(inst_29823))
{var statearr_29971_30048 = state_29954__$1;(statearr_29971_30048[(1)] = (5));
} else
{var statearr_29972_30049 = state_29954__$1;(statearr_29972_30049[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (15)))
{var inst_29831 = (state_29954[(12)]);var inst_29832 = (state_29954[(13)]);var inst_29833 = (state_29954[(14)]);var inst_29834 = (state_29954[(16)]);var inst_29847 = (state_29954[(2)]);var inst_29848 = (inst_29834 + (1));var tmp29965 = inst_29831;var tmp29966 = inst_29832;var tmp29967 = inst_29833;var inst_29831__$1 = tmp29965;var inst_29832__$1 = tmp29966;var inst_29833__$1 = tmp29967;var inst_29834__$1 = inst_29848;var state_29954__$1 = (function (){var statearr_29973 = state_29954;(statearr_29973[(12)] = inst_29831__$1);
(statearr_29973[(13)] = inst_29832__$1);
(statearr_29973[(14)] = inst_29833__$1);
(statearr_29973[(22)] = inst_29847);
(statearr_29973[(16)] = inst_29834__$1);
return statearr_29973;
})();var statearr_29974_30050 = state_29954__$1;(statearr_29974_30050[(2)] = null);
(statearr_29974_30050[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (21)))
{var inst_29872 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_29975_30051 = state_29954__$1;(statearr_29975_30051[(2)] = inst_29872);
(statearr_29975_30051[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (31)))
{var inst_29898 = (state_29954[(11)]);var inst_29899 = (state_29954[(2)]);var inst_29900 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29901 = cljs.core.async.untap_STAR_.call(null,m,inst_29898);var state_29954__$1 = (function (){var statearr_29976 = state_29954;(statearr_29976[(23)] = inst_29900);
(statearr_29976[(24)] = inst_29899);
return statearr_29976;
})();var statearr_29977_30052 = state_29954__$1;(statearr_29977_30052[(2)] = inst_29901);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (32)))
{var inst_29822 = (state_29954[(21)]);var inst_29898 = (state_29954[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29954,(31),Object,null,(30));var inst_29905 = cljs.core.async.put_BANG_.call(null,inst_29898,inst_29822,done);var state_29954__$1 = state_29954;var statearr_29978_30053 = state_29954__$1;(statearr_29978_30053[(2)] = inst_29905);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (40)))
{var inst_29920 = (state_29954[(25)]);var inst_29921 = (state_29954[(2)]);var inst_29922 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_29923 = cljs.core.async.untap_STAR_.call(null,m,inst_29920);var state_29954__$1 = (function (){var statearr_29979 = state_29954;(statearr_29979[(26)] = inst_29922);
(statearr_29979[(27)] = inst_29921);
return statearr_29979;
})();var statearr_29980_30054 = state_29954__$1;(statearr_29980_30054[(2)] = inst_29923);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (33)))
{var inst_29911 = (state_29954[(17)]);var inst_29913 = cljs.core.chunked_seq_QMARK_.call(null,inst_29911);var state_29954__$1 = state_29954;if(inst_29913)
{var statearr_29981_30055 = state_29954__$1;(statearr_29981_30055[(1)] = (36));
} else
{var statearr_29982_30056 = state_29954__$1;(statearr_29982_30056[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (13)))
{var inst_29841 = (state_29954[(28)]);var inst_29844 = cljs.core.async.close_BANG_.call(null,inst_29841);var state_29954__$1 = state_29954;var statearr_29983_30057 = state_29954__$1;(statearr_29983_30057[(2)] = inst_29844);
(statearr_29983_30057[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (22)))
{var inst_29862 = (state_29954[(8)]);var inst_29865 = cljs.core.async.close_BANG_.call(null,inst_29862);var state_29954__$1 = state_29954;var statearr_29984_30058 = state_29954__$1;(statearr_29984_30058[(2)] = inst_29865);
(statearr_29984_30058[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (36)))
{var inst_29911 = (state_29954[(17)]);var inst_29915 = cljs.core.chunk_first.call(null,inst_29911);var inst_29916 = cljs.core.chunk_rest.call(null,inst_29911);var inst_29917 = cljs.core.count.call(null,inst_29915);var inst_29890 = inst_29916;var inst_29891 = inst_29915;var inst_29892 = inst_29917;var inst_29893 = (0);var state_29954__$1 = (function (){var statearr_29985 = state_29954;(statearr_29985[(9)] = inst_29891);
(statearr_29985[(19)] = inst_29890);
(statearr_29985[(10)] = inst_29893);
(statearr_29985[(20)] = inst_29892);
return statearr_29985;
})();var statearr_29986_30059 = state_29954__$1;(statearr_29986_30059[(2)] = null);
(statearr_29986_30059[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (41)))
{var inst_29920 = (state_29954[(25)]);var inst_29822 = (state_29954[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29954,(40),Object,null,(39));var inst_29927 = cljs.core.async.put_BANG_.call(null,inst_29920,inst_29822,done);var state_29954__$1 = state_29954;var statearr_29987_30060 = state_29954__$1;(statearr_29987_30060[(2)] = inst_29927);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (43)))
{var state_29954__$1 = state_29954;var statearr_29988_30061 = state_29954__$1;(statearr_29988_30061[(2)] = null);
(statearr_29988_30061[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (29)))
{var inst_29938 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_29989_30062 = state_29954__$1;(statearr_29989_30062[(2)] = inst_29938);
(statearr_29989_30062[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (44)))
{var inst_29947 = (state_29954[(2)]);var state_29954__$1 = (function (){var statearr_29990 = state_29954;(statearr_29990[(29)] = inst_29947);
return statearr_29990;
})();var statearr_29991_30063 = state_29954__$1;(statearr_29991_30063[(2)] = null);
(statearr_29991_30063[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (6)))
{var inst_29882 = (state_29954[(30)]);var inst_29881 = cljs.core.deref.call(null,cs);var inst_29882__$1 = cljs.core.keys.call(null,inst_29881);var inst_29883 = cljs.core.count.call(null,inst_29882__$1);var inst_29884 = cljs.core.reset_BANG_.call(null,dctr,inst_29883);var inst_29889 = cljs.core.seq.call(null,inst_29882__$1);var inst_29890 = inst_29889;var inst_29891 = null;var inst_29892 = (0);var inst_29893 = (0);var state_29954__$1 = (function (){var statearr_29992 = state_29954;(statearr_29992[(9)] = inst_29891);
(statearr_29992[(31)] = inst_29884);
(statearr_29992[(30)] = inst_29882__$1);
(statearr_29992[(19)] = inst_29890);
(statearr_29992[(10)] = inst_29893);
(statearr_29992[(20)] = inst_29892);
return statearr_29992;
})();var statearr_29993_30064 = state_29954__$1;(statearr_29993_30064[(2)] = null);
(statearr_29993_30064[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (28)))
{var inst_29890 = (state_29954[(19)]);var inst_29911 = (state_29954[(17)]);var inst_29911__$1 = cljs.core.seq.call(null,inst_29890);var state_29954__$1 = (function (){var statearr_29994 = state_29954;(statearr_29994[(17)] = inst_29911__$1);
return statearr_29994;
})();if(inst_29911__$1)
{var statearr_29995_30065 = state_29954__$1;(statearr_29995_30065[(1)] = (33));
} else
{var statearr_29996_30066 = state_29954__$1;(statearr_29996_30066[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (25)))
{var inst_29893 = (state_29954[(10)]);var inst_29892 = (state_29954[(20)]);var inst_29895 = (inst_29893 < inst_29892);var inst_29896 = inst_29895;var state_29954__$1 = state_29954;if(cljs.core.truth_(inst_29896))
{var statearr_29997_30067 = state_29954__$1;(statearr_29997_30067[(1)] = (27));
} else
{var statearr_29998_30068 = state_29954__$1;(statearr_29998_30068[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (34)))
{var state_29954__$1 = state_29954;var statearr_29999_30069 = state_29954__$1;(statearr_29999_30069[(2)] = null);
(statearr_29999_30069[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (17)))
{var state_29954__$1 = state_29954;var statearr_30000_30070 = state_29954__$1;(statearr_30000_30070[(2)] = null);
(statearr_30000_30070[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (3)))
{var inst_29952 = (state_29954[(2)]);var state_29954__$1 = state_29954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29954__$1,inst_29952);
} else
{if((state_val_29955 === (12)))
{var inst_29877 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_30001_30071 = state_29954__$1;(statearr_30001_30071[(2)] = inst_29877);
(statearr_30001_30071[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (2)))
{var state_29954__$1 = state_29954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29954__$1,(4),ch);
} else
{if((state_val_29955 === (23)))
{var state_29954__$1 = state_29954;var statearr_30002_30072 = state_29954__$1;(statearr_30002_30072[(2)] = null);
(statearr_30002_30072[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (35)))
{var inst_29936 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_30003_30073 = state_29954__$1;(statearr_30003_30073[(2)] = inst_29936);
(statearr_30003_30073[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (19)))
{var inst_29851 = (state_29954[(7)]);var inst_29855 = cljs.core.chunk_first.call(null,inst_29851);var inst_29856 = cljs.core.chunk_rest.call(null,inst_29851);var inst_29857 = cljs.core.count.call(null,inst_29855);var inst_29831 = inst_29856;var inst_29832 = inst_29855;var inst_29833 = inst_29857;var inst_29834 = (0);var state_29954__$1 = (function (){var statearr_30004 = state_29954;(statearr_30004[(12)] = inst_29831);
(statearr_30004[(13)] = inst_29832);
(statearr_30004[(14)] = inst_29833);
(statearr_30004[(16)] = inst_29834);
return statearr_30004;
})();var statearr_30005_30074 = state_29954__$1;(statearr_30005_30074[(2)] = null);
(statearr_30005_30074[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (11)))
{var inst_29831 = (state_29954[(12)]);var inst_29851 = (state_29954[(7)]);var inst_29851__$1 = cljs.core.seq.call(null,inst_29831);var state_29954__$1 = (function (){var statearr_30006 = state_29954;(statearr_30006[(7)] = inst_29851__$1);
return statearr_30006;
})();if(inst_29851__$1)
{var statearr_30007_30075 = state_29954__$1;(statearr_30007_30075[(1)] = (16));
} else
{var statearr_30008_30076 = state_29954__$1;(statearr_30008_30076[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (9)))
{var inst_29879 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_30009_30077 = state_29954__$1;(statearr_30009_30077[(2)] = inst_29879);
(statearr_30009_30077[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (5)))
{var inst_29829 = cljs.core.deref.call(null,cs);var inst_29830 = cljs.core.seq.call(null,inst_29829);var inst_29831 = inst_29830;var inst_29832 = null;var inst_29833 = (0);var inst_29834 = (0);var state_29954__$1 = (function (){var statearr_30010 = state_29954;(statearr_30010[(12)] = inst_29831);
(statearr_30010[(13)] = inst_29832);
(statearr_30010[(14)] = inst_29833);
(statearr_30010[(16)] = inst_29834);
return statearr_30010;
})();var statearr_30011_30078 = state_29954__$1;(statearr_30011_30078[(2)] = null);
(statearr_30011_30078[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (14)))
{var state_29954__$1 = state_29954;var statearr_30012_30079 = state_29954__$1;(statearr_30012_30079[(2)] = null);
(statearr_30012_30079[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (45)))
{var inst_29944 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_30013_30080 = state_29954__$1;(statearr_30013_30080[(2)] = inst_29944);
(statearr_30013_30080[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (26)))
{var inst_29882 = (state_29954[(30)]);var inst_29940 = (state_29954[(2)]);var inst_29941 = cljs.core.seq.call(null,inst_29882);var state_29954__$1 = (function (){var statearr_30014 = state_29954;(statearr_30014[(32)] = inst_29940);
return statearr_30014;
})();if(inst_29941)
{var statearr_30015_30081 = state_29954__$1;(statearr_30015_30081[(1)] = (42));
} else
{var statearr_30016_30082 = state_29954__$1;(statearr_30016_30082[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (16)))
{var inst_29851 = (state_29954[(7)]);var inst_29853 = cljs.core.chunked_seq_QMARK_.call(null,inst_29851);var state_29954__$1 = state_29954;if(inst_29853)
{var statearr_30020_30083 = state_29954__$1;(statearr_30020_30083[(1)] = (19));
} else
{var statearr_30021_30084 = state_29954__$1;(statearr_30021_30084[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (38)))
{var inst_29933 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_30022_30085 = state_29954__$1;(statearr_30022_30085[(2)] = inst_29933);
(statearr_30022_30085[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (30)))
{var inst_29891 = (state_29954[(9)]);var inst_29890 = (state_29954[(19)]);var inst_29893 = (state_29954[(10)]);var inst_29892 = (state_29954[(20)]);var inst_29907 = (state_29954[(2)]);var inst_29908 = (inst_29893 + (1));var tmp30017 = inst_29891;var tmp30018 = inst_29890;var tmp30019 = inst_29892;var inst_29890__$1 = tmp30018;var inst_29891__$1 = tmp30017;var inst_29892__$1 = tmp30019;var inst_29893__$1 = inst_29908;var state_29954__$1 = (function (){var statearr_30023 = state_29954;(statearr_30023[(9)] = inst_29891__$1);
(statearr_30023[(19)] = inst_29890__$1);
(statearr_30023[(10)] = inst_29893__$1);
(statearr_30023[(33)] = inst_29907);
(statearr_30023[(20)] = inst_29892__$1);
return statearr_30023;
})();var statearr_30024_30086 = state_29954__$1;(statearr_30024_30086[(2)] = null);
(statearr_30024_30086[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (10)))
{var inst_29832 = (state_29954[(13)]);var inst_29834 = (state_29954[(16)]);var inst_29840 = cljs.core._nth.call(null,inst_29832,inst_29834);var inst_29841 = cljs.core.nth.call(null,inst_29840,(0),null);var inst_29842 = cljs.core.nth.call(null,inst_29840,(1),null);var state_29954__$1 = (function (){var statearr_30025 = state_29954;(statearr_30025[(28)] = inst_29841);
return statearr_30025;
})();if(cljs.core.truth_(inst_29842))
{var statearr_30026_30087 = state_29954__$1;(statearr_30026_30087[(1)] = (13));
} else
{var statearr_30027_30088 = state_29954__$1;(statearr_30027_30088[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (18)))
{var inst_29875 = (state_29954[(2)]);var state_29954__$1 = state_29954;var statearr_30028_30089 = state_29954__$1;(statearr_30028_30089[(2)] = inst_29875);
(statearr_30028_30089[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (42)))
{var state_29954__$1 = state_29954;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29954__$1,(45),dchan);
} else
{if((state_val_29955 === (37)))
{var inst_29911 = (state_29954[(17)]);var inst_29920 = cljs.core.first.call(null,inst_29911);var state_29954__$1 = (function (){var statearr_30029 = state_29954;(statearr_30029[(25)] = inst_29920);
return statearr_30029;
})();var statearr_30030_30090 = state_29954__$1;(statearr_30030_30090[(2)] = null);
(statearr_30030_30090[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29955 === (8)))
{var inst_29833 = (state_29954[(14)]);var inst_29834 = (state_29954[(16)]);var inst_29836 = (inst_29834 < inst_29833);var inst_29837 = inst_29836;var state_29954__$1 = state_29954;if(cljs.core.truth_(inst_29837))
{var statearr_30031_30091 = state_29954__$1;(statearr_30031_30091[(1)] = (10));
} else
{var statearr_30032_30092 = state_29954__$1;(statearr_30032_30092[(1)] = (11));
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
});})(c__5708__auto___30040,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___30040,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30036[(0)] = state_machine__5694__auto__);
(statearr_30036[(1)] = (1));
return statearr_30036;
});
var state_machine__5694__auto____1 = (function (state_29954){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_29954);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30037){if((e30037 instanceof Object))
{var ex__5697__auto__ = e30037;var statearr_30038_30093 = state_29954;(statearr_30038_30093[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30037;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30094 = state_29954;
state_29954 = G__30094;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_29954){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_29954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30040,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_30039 = f__5709__auto__.call(null);(statearr_30039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30040);
return statearr_30039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30040,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj30096 = {};return obj30096;
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
;var m = (function (){if(typeof cljs.core.async.t30206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30206 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30207){
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
this.meta30207 = meta30207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30206.cljs$lang$type = true;
cljs.core.async.t30206.cljs$lang$ctorStr = "cljs.core.async/t30206";
cljs.core.async.t30206.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t30206");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t30206.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30208){var self__ = this;
var _30208__$1 = this;return self__.meta30207;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30208,meta30207__$1){var self__ = this;
var _30208__$1 = this;return (new cljs.core.async.t30206(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30207__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t30206 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30206(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30207){return (new cljs.core.async.t30206(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30207));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t30206(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___30315 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30273){var state_val_30274 = (state_30273[(1)]);if((state_val_30274 === (7)))
{var inst_30222 = (state_30273[(7)]);var inst_30227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30222);var state_30273__$1 = state_30273;var statearr_30275_30316 = state_30273__$1;(statearr_30275_30316[(2)] = inst_30227);
(statearr_30275_30316[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (20)))
{var inst_30237 = (state_30273[(8)]);var state_30273__$1 = state_30273;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30273__$1,(23),out,inst_30237);
} else
{if((state_val_30274 === (1)))
{var inst_30212 = (state_30273[(9)]);var inst_30212__$1 = calc_state.call(null);var inst_30213 = cljs.core.seq_QMARK_.call(null,inst_30212__$1);var state_30273__$1 = (function (){var statearr_30276 = state_30273;(statearr_30276[(9)] = inst_30212__$1);
return statearr_30276;
})();if(inst_30213)
{var statearr_30277_30317 = state_30273__$1;(statearr_30277_30317[(1)] = (2));
} else
{var statearr_30278_30318 = state_30273__$1;(statearr_30278_30318[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (4)))
{var inst_30212 = (state_30273[(9)]);var inst_30218 = (state_30273[(2)]);var inst_30219 = cljs.core.get.call(null,inst_30218,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_30220 = cljs.core.get.call(null,inst_30218,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_30221 = cljs.core.get.call(null,inst_30218,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_30222 = inst_30212;var state_30273__$1 = (function (){var statearr_30279 = state_30273;(statearr_30279[(10)] = inst_30219);
(statearr_30279[(11)] = inst_30221);
(statearr_30279[(7)] = inst_30222);
(statearr_30279[(12)] = inst_30220);
return statearr_30279;
})();var statearr_30280_30319 = state_30273__$1;(statearr_30280_30319[(2)] = null);
(statearr_30280_30319[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (15)))
{var state_30273__$1 = state_30273;var statearr_30281_30320 = state_30273__$1;(statearr_30281_30320[(2)] = null);
(statearr_30281_30320[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (21)))
{var state_30273__$1 = state_30273;var statearr_30282_30321 = state_30273__$1;(statearr_30282_30321[(2)] = null);
(statearr_30282_30321[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (13)))
{var inst_30269 = (state_30273[(2)]);var state_30273__$1 = state_30273;var statearr_30283_30322 = state_30273__$1;(statearr_30283_30322[(2)] = inst_30269);
(statearr_30283_30322[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (22)))
{var inst_30230 = (state_30273[(13)]);var inst_30266 = (state_30273[(2)]);var inst_30222 = inst_30230;var state_30273__$1 = (function (){var statearr_30284 = state_30273;(statearr_30284[(14)] = inst_30266);
(statearr_30284[(7)] = inst_30222);
return statearr_30284;
})();var statearr_30285_30323 = state_30273__$1;(statearr_30285_30323[(2)] = null);
(statearr_30285_30323[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (6)))
{var inst_30271 = (state_30273[(2)]);var state_30273__$1 = state_30273;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30273__$1,inst_30271);
} else
{if((state_val_30274 === (17)))
{var inst_30252 = (state_30273[(15)]);var state_30273__$1 = state_30273;var statearr_30286_30324 = state_30273__$1;(statearr_30286_30324[(2)] = inst_30252);
(statearr_30286_30324[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (3)))
{var inst_30212 = (state_30273[(9)]);var state_30273__$1 = state_30273;var statearr_30287_30325 = state_30273__$1;(statearr_30287_30325[(2)] = inst_30212);
(statearr_30287_30325[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (12)))
{var inst_30238 = (state_30273[(16)]);var inst_30252 = (state_30273[(15)]);var inst_30233 = (state_30273[(17)]);var inst_30252__$1 = inst_30233.call(null,inst_30238);var state_30273__$1 = (function (){var statearr_30288 = state_30273;(statearr_30288[(15)] = inst_30252__$1);
return statearr_30288;
})();if(cljs.core.truth_(inst_30252__$1))
{var statearr_30289_30326 = state_30273__$1;(statearr_30289_30326[(1)] = (17));
} else
{var statearr_30290_30327 = state_30273__$1;(statearr_30290_30327[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (2)))
{var inst_30212 = (state_30273[(9)]);var inst_30215 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30212);var state_30273__$1 = state_30273;var statearr_30291_30328 = state_30273__$1;(statearr_30291_30328[(2)] = inst_30215);
(statearr_30291_30328[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (23)))
{var inst_30263 = (state_30273[(2)]);var state_30273__$1 = state_30273;var statearr_30292_30329 = state_30273__$1;(statearr_30292_30329[(2)] = inst_30263);
(statearr_30292_30329[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (19)))
{var inst_30260 = (state_30273[(2)]);var state_30273__$1 = state_30273;if(cljs.core.truth_(inst_30260))
{var statearr_30293_30330 = state_30273__$1;(statearr_30293_30330[(1)] = (20));
} else
{var statearr_30294_30331 = state_30273__$1;(statearr_30294_30331[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (11)))
{var inst_30237 = (state_30273[(8)]);var inst_30243 = (inst_30237 == null);var state_30273__$1 = state_30273;if(cljs.core.truth_(inst_30243))
{var statearr_30295_30332 = state_30273__$1;(statearr_30295_30332[(1)] = (14));
} else
{var statearr_30296_30333 = state_30273__$1;(statearr_30296_30333[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (9)))
{var inst_30230 = (state_30273[(13)]);var inst_30230__$1 = (state_30273[(2)]);var inst_30231 = cljs.core.get.call(null,inst_30230__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_30232 = cljs.core.get.call(null,inst_30230__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_30233 = cljs.core.get.call(null,inst_30230__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_30273__$1 = (function (){var statearr_30297 = state_30273;(statearr_30297[(13)] = inst_30230__$1);
(statearr_30297[(18)] = inst_30232);
(statearr_30297[(17)] = inst_30233);
return statearr_30297;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30273__$1,(10),inst_30231);
} else
{if((state_val_30274 === (5)))
{var inst_30222 = (state_30273[(7)]);var inst_30225 = cljs.core.seq_QMARK_.call(null,inst_30222);var state_30273__$1 = state_30273;if(inst_30225)
{var statearr_30298_30334 = state_30273__$1;(statearr_30298_30334[(1)] = (7));
} else
{var statearr_30299_30335 = state_30273__$1;(statearr_30299_30335[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (14)))
{var inst_30238 = (state_30273[(16)]);var inst_30245 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30238);var state_30273__$1 = state_30273;var statearr_30300_30336 = state_30273__$1;(statearr_30300_30336[(2)] = inst_30245);
(statearr_30300_30336[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (16)))
{var inst_30248 = (state_30273[(2)]);var inst_30249 = calc_state.call(null);var inst_30222 = inst_30249;var state_30273__$1 = (function (){var statearr_30301 = state_30273;(statearr_30301[(7)] = inst_30222);
(statearr_30301[(19)] = inst_30248);
return statearr_30301;
})();var statearr_30302_30337 = state_30273__$1;(statearr_30302_30337[(2)] = null);
(statearr_30302_30337[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (10)))
{var inst_30238 = (state_30273[(16)]);var inst_30237 = (state_30273[(8)]);var inst_30236 = (state_30273[(2)]);var inst_30237__$1 = cljs.core.nth.call(null,inst_30236,(0),null);var inst_30238__$1 = cljs.core.nth.call(null,inst_30236,(1),null);var inst_30239 = (inst_30237__$1 == null);var inst_30240 = cljs.core._EQ_.call(null,inst_30238__$1,change);var inst_30241 = (inst_30239) || (inst_30240);var state_30273__$1 = (function (){var statearr_30303 = state_30273;(statearr_30303[(16)] = inst_30238__$1);
(statearr_30303[(8)] = inst_30237__$1);
return statearr_30303;
})();if(cljs.core.truth_(inst_30241))
{var statearr_30304_30338 = state_30273__$1;(statearr_30304_30338[(1)] = (11));
} else
{var statearr_30305_30339 = state_30273__$1;(statearr_30305_30339[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (18)))
{var inst_30238 = (state_30273[(16)]);var inst_30232 = (state_30273[(18)]);var inst_30233 = (state_30273[(17)]);var inst_30255 = cljs.core.empty_QMARK_.call(null,inst_30233);var inst_30256 = inst_30232.call(null,inst_30238);var inst_30257 = cljs.core.not.call(null,inst_30256);var inst_30258 = (inst_30255) && (inst_30257);var state_30273__$1 = state_30273;var statearr_30306_30340 = state_30273__$1;(statearr_30306_30340[(2)] = inst_30258);
(statearr_30306_30340[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30274 === (8)))
{var inst_30222 = (state_30273[(7)]);var state_30273__$1 = state_30273;var statearr_30307_30341 = state_30273__$1;(statearr_30307_30341[(2)] = inst_30222);
(statearr_30307_30341[(1)] = (9));
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
});})(c__5708__auto___30315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___30315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30311[(0)] = state_machine__5694__auto__);
(statearr_30311[(1)] = (1));
return statearr_30311;
});
var state_machine__5694__auto____1 = (function (state_30273){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30273);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30312){if((e30312 instanceof Object))
{var ex__5697__auto__ = e30312;var statearr_30313_30342 = state_30273;(statearr_30313_30342[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30273);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30312;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30343 = state_30273;
state_30273 = G__30343;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_30314 = f__5709__auto__.call(null);(statearr_30314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30315);
return statearr_30314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj30345 = {};return obj30345;
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
return (function (p1__30346_SHARP_){if(cljs.core.truth_(p1__30346_SHARP_.call(null,topic)))
{return p1__30346_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__30346_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t30471 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30471 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30472){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30472 = meta30472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30471.cljs$lang$type = true;
cljs.core.async.t30471.cljs$lang$ctorStr = "cljs.core.async/t30471";
cljs.core.async.t30471.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t30471");
});})(mults,ensure_mult))
;
cljs.core.async.t30471.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t30471.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t30471.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t30471.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t30471.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t30471.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30471.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t30471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30473){var self__ = this;
var _30473__$1 = this;return self__.meta30472;
});})(mults,ensure_mult))
;
cljs.core.async.t30471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30473,meta30472__$1){var self__ = this;
var _30473__$1 = this;return (new cljs.core.async.t30471(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30472__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t30471 = ((function (mults,ensure_mult){
return (function __GT_t30471(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30472){return (new cljs.core.async.t30471(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30472));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t30471(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___30595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30595,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30595,mults,ensure_mult,p){
return (function (state_30547){var state_val_30548 = (state_30547[(1)]);if((state_val_30548 === (7)))
{var inst_30543 = (state_30547[(2)]);var state_30547__$1 = state_30547;var statearr_30549_30596 = state_30547__$1;(statearr_30549_30596[(2)] = inst_30543);
(statearr_30549_30596[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (20)))
{var state_30547__$1 = state_30547;var statearr_30550_30597 = state_30547__$1;(statearr_30550_30597[(2)] = null);
(statearr_30550_30597[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (1)))
{var state_30547__$1 = state_30547;var statearr_30551_30598 = state_30547__$1;(statearr_30551_30598[(2)] = null);
(statearr_30551_30598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (24)))
{var inst_30476 = (state_30547[(7)]);var inst_30526 = (state_30547[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30547,(23),Object,null,(22));var inst_30533 = cljs.core.async.muxch_STAR_.call(null,inst_30526);var state_30547__$1 = state_30547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30547__$1,(25),inst_30533,inst_30476);
} else
{if((state_val_30548 === (4)))
{var inst_30476 = (state_30547[(7)]);var inst_30476__$1 = (state_30547[(2)]);var inst_30477 = (inst_30476__$1 == null);var state_30547__$1 = (function (){var statearr_30552 = state_30547;(statearr_30552[(7)] = inst_30476__$1);
return statearr_30552;
})();if(cljs.core.truth_(inst_30477))
{var statearr_30553_30599 = state_30547__$1;(statearr_30553_30599[(1)] = (5));
} else
{var statearr_30554_30600 = state_30547__$1;(statearr_30554_30600[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (15)))
{var inst_30518 = (state_30547[(2)]);var state_30547__$1 = state_30547;var statearr_30555_30601 = state_30547__$1;(statearr_30555_30601[(2)] = inst_30518);
(statearr_30555_30601[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (21)))
{var inst_30540 = (state_30547[(2)]);var state_30547__$1 = (function (){var statearr_30556 = state_30547;(statearr_30556[(9)] = inst_30540);
return statearr_30556;
})();var statearr_30557_30602 = state_30547__$1;(statearr_30557_30602[(2)] = null);
(statearr_30557_30602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (13)))
{var inst_30500 = (state_30547[(10)]);var inst_30502 = cljs.core.chunked_seq_QMARK_.call(null,inst_30500);var state_30547__$1 = state_30547;if(inst_30502)
{var statearr_30558_30603 = state_30547__$1;(statearr_30558_30603[(1)] = (16));
} else
{var statearr_30559_30604 = state_30547__$1;(statearr_30559_30604[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (22)))
{var inst_30537 = (state_30547[(2)]);var state_30547__$1 = state_30547;var statearr_30560_30605 = state_30547__$1;(statearr_30560_30605[(2)] = inst_30537);
(statearr_30560_30605[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (6)))
{var inst_30476 = (state_30547[(7)]);var inst_30526 = (state_30547[(8)]);var inst_30524 = (state_30547[(11)]);var inst_30524__$1 = topic_fn.call(null,inst_30476);var inst_30525 = cljs.core.deref.call(null,mults);var inst_30526__$1 = cljs.core.get.call(null,inst_30525,inst_30524__$1);var state_30547__$1 = (function (){var statearr_30561 = state_30547;(statearr_30561[(8)] = inst_30526__$1);
(statearr_30561[(11)] = inst_30524__$1);
return statearr_30561;
})();if(cljs.core.truth_(inst_30526__$1))
{var statearr_30562_30606 = state_30547__$1;(statearr_30562_30606[(1)] = (19));
} else
{var statearr_30563_30607 = state_30547__$1;(statearr_30563_30607[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (25)))
{var inst_30535 = (state_30547[(2)]);var state_30547__$1 = state_30547;var statearr_30564_30608 = state_30547__$1;(statearr_30564_30608[(2)] = inst_30535);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30547__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (17)))
{var inst_30500 = (state_30547[(10)]);var inst_30509 = cljs.core.first.call(null,inst_30500);var inst_30510 = cljs.core.async.muxch_STAR_.call(null,inst_30509);var inst_30511 = cljs.core.async.close_BANG_.call(null,inst_30510);var inst_30512 = cljs.core.next.call(null,inst_30500);var inst_30486 = inst_30512;var inst_30487 = null;var inst_30488 = (0);var inst_30489 = (0);var state_30547__$1 = (function (){var statearr_30565 = state_30547;(statearr_30565[(12)] = inst_30489);
(statearr_30565[(13)] = inst_30488);
(statearr_30565[(14)] = inst_30511);
(statearr_30565[(15)] = inst_30487);
(statearr_30565[(16)] = inst_30486);
return statearr_30565;
})();var statearr_30566_30609 = state_30547__$1;(statearr_30566_30609[(2)] = null);
(statearr_30566_30609[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (3)))
{var inst_30545 = (state_30547[(2)]);var state_30547__$1 = state_30547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30547__$1,inst_30545);
} else
{if((state_val_30548 === (12)))
{var inst_30520 = (state_30547[(2)]);var state_30547__$1 = state_30547;var statearr_30567_30610 = state_30547__$1;(statearr_30567_30610[(2)] = inst_30520);
(statearr_30567_30610[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (2)))
{var state_30547__$1 = state_30547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30547__$1,(4),ch);
} else
{if((state_val_30548 === (23)))
{var inst_30524 = (state_30547[(11)]);var inst_30528 = (state_30547[(2)]);var inst_30529 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30524);var state_30547__$1 = (function (){var statearr_30568 = state_30547;(statearr_30568[(17)] = inst_30528);
return statearr_30568;
})();var statearr_30569_30611 = state_30547__$1;(statearr_30569_30611[(2)] = inst_30529);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30547__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (19)))
{var state_30547__$1 = state_30547;var statearr_30570_30612 = state_30547__$1;(statearr_30570_30612[(2)] = null);
(statearr_30570_30612[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (11)))
{var inst_30500 = (state_30547[(10)]);var inst_30486 = (state_30547[(16)]);var inst_30500__$1 = cljs.core.seq.call(null,inst_30486);var state_30547__$1 = (function (){var statearr_30571 = state_30547;(statearr_30571[(10)] = inst_30500__$1);
return statearr_30571;
})();if(inst_30500__$1)
{var statearr_30572_30613 = state_30547__$1;(statearr_30572_30613[(1)] = (13));
} else
{var statearr_30573_30614 = state_30547__$1;(statearr_30573_30614[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (9)))
{var inst_30522 = (state_30547[(2)]);var state_30547__$1 = state_30547;var statearr_30574_30615 = state_30547__$1;(statearr_30574_30615[(2)] = inst_30522);
(statearr_30574_30615[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (5)))
{var inst_30483 = cljs.core.deref.call(null,mults);var inst_30484 = cljs.core.vals.call(null,inst_30483);var inst_30485 = cljs.core.seq.call(null,inst_30484);var inst_30486 = inst_30485;var inst_30487 = null;var inst_30488 = (0);var inst_30489 = (0);var state_30547__$1 = (function (){var statearr_30575 = state_30547;(statearr_30575[(12)] = inst_30489);
(statearr_30575[(13)] = inst_30488);
(statearr_30575[(15)] = inst_30487);
(statearr_30575[(16)] = inst_30486);
return statearr_30575;
})();var statearr_30576_30616 = state_30547__$1;(statearr_30576_30616[(2)] = null);
(statearr_30576_30616[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (14)))
{var state_30547__$1 = state_30547;var statearr_30580_30617 = state_30547__$1;(statearr_30580_30617[(2)] = null);
(statearr_30580_30617[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (16)))
{var inst_30500 = (state_30547[(10)]);var inst_30504 = cljs.core.chunk_first.call(null,inst_30500);var inst_30505 = cljs.core.chunk_rest.call(null,inst_30500);var inst_30506 = cljs.core.count.call(null,inst_30504);var inst_30486 = inst_30505;var inst_30487 = inst_30504;var inst_30488 = inst_30506;var inst_30489 = (0);var state_30547__$1 = (function (){var statearr_30581 = state_30547;(statearr_30581[(12)] = inst_30489);
(statearr_30581[(13)] = inst_30488);
(statearr_30581[(15)] = inst_30487);
(statearr_30581[(16)] = inst_30486);
return statearr_30581;
})();var statearr_30582_30618 = state_30547__$1;(statearr_30582_30618[(2)] = null);
(statearr_30582_30618[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (10)))
{var inst_30489 = (state_30547[(12)]);var inst_30488 = (state_30547[(13)]);var inst_30487 = (state_30547[(15)]);var inst_30486 = (state_30547[(16)]);var inst_30494 = cljs.core._nth.call(null,inst_30487,inst_30489);var inst_30495 = cljs.core.async.muxch_STAR_.call(null,inst_30494);var inst_30496 = cljs.core.async.close_BANG_.call(null,inst_30495);var inst_30497 = (inst_30489 + (1));var tmp30577 = inst_30488;var tmp30578 = inst_30487;var tmp30579 = inst_30486;var inst_30486__$1 = tmp30579;var inst_30487__$1 = tmp30578;var inst_30488__$1 = tmp30577;var inst_30489__$1 = inst_30497;var state_30547__$1 = (function (){var statearr_30583 = state_30547;(statearr_30583[(12)] = inst_30489__$1);
(statearr_30583[(13)] = inst_30488__$1);
(statearr_30583[(15)] = inst_30487__$1);
(statearr_30583[(18)] = inst_30496);
(statearr_30583[(16)] = inst_30486__$1);
return statearr_30583;
})();var statearr_30584_30619 = state_30547__$1;(statearr_30584_30619[(2)] = null);
(statearr_30584_30619[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (18)))
{var inst_30515 = (state_30547[(2)]);var state_30547__$1 = state_30547;var statearr_30585_30620 = state_30547__$1;(statearr_30585_30620[(2)] = inst_30515);
(statearr_30585_30620[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30548 === (8)))
{var inst_30489 = (state_30547[(12)]);var inst_30488 = (state_30547[(13)]);var inst_30491 = (inst_30489 < inst_30488);var inst_30492 = inst_30491;var state_30547__$1 = state_30547;if(cljs.core.truth_(inst_30492))
{var statearr_30586_30621 = state_30547__$1;(statearr_30586_30621[(1)] = (10));
} else
{var statearr_30587_30622 = state_30547__$1;(statearr_30587_30622[(1)] = (11));
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
});})(c__5708__auto___30595,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___30595,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30591[(0)] = state_machine__5694__auto__);
(statearr_30591[(1)] = (1));
return statearr_30591;
});
var state_machine__5694__auto____1 = (function (state_30547){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30547);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30592){if((e30592 instanceof Object))
{var ex__5697__auto__ = e30592;var statearr_30593_30623 = state_30547;(statearr_30593_30623[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30547);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30592;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30624 = state_30547;
state_30547 = G__30624;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30547){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30595,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_30594 = f__5709__auto__.call(null);(statearr_30594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30595);
return statearr_30594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30595,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___30761 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30761,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30761,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30731){var state_val_30732 = (state_30731[(1)]);if((state_val_30732 === (7)))
{var state_30731__$1 = state_30731;var statearr_30733_30762 = state_30731__$1;(statearr_30733_30762[(2)] = null);
(statearr_30733_30762[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (1)))
{var state_30731__$1 = state_30731;var statearr_30734_30763 = state_30731__$1;(statearr_30734_30763[(2)] = null);
(statearr_30734_30763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (4)))
{var inst_30695 = (state_30731[(7)]);var inst_30697 = (inst_30695 < cnt);var state_30731__$1 = state_30731;if(cljs.core.truth_(inst_30697))
{var statearr_30735_30764 = state_30731__$1;(statearr_30735_30764[(1)] = (6));
} else
{var statearr_30736_30765 = state_30731__$1;(statearr_30736_30765[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (15)))
{var inst_30727 = (state_30731[(2)]);var state_30731__$1 = state_30731;var statearr_30737_30766 = state_30731__$1;(statearr_30737_30766[(2)] = inst_30727);
(statearr_30737_30766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (13)))
{var inst_30720 = cljs.core.async.close_BANG_.call(null,out);var state_30731__$1 = state_30731;var statearr_30738_30767 = state_30731__$1;(statearr_30738_30767[(2)] = inst_30720);
(statearr_30738_30767[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (6)))
{var state_30731__$1 = state_30731;var statearr_30739_30768 = state_30731__$1;(statearr_30739_30768[(2)] = null);
(statearr_30739_30768[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (3)))
{var inst_30729 = (state_30731[(2)]);var state_30731__$1 = state_30731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30731__$1,inst_30729);
} else
{if((state_val_30732 === (12)))
{var inst_30717 = (state_30731[(8)]);var inst_30717__$1 = (state_30731[(2)]);var inst_30718 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30717__$1);var state_30731__$1 = (function (){var statearr_30740 = state_30731;(statearr_30740[(8)] = inst_30717__$1);
return statearr_30740;
})();if(cljs.core.truth_(inst_30718))
{var statearr_30741_30769 = state_30731__$1;(statearr_30741_30769[(1)] = (13));
} else
{var statearr_30742_30770 = state_30731__$1;(statearr_30742_30770[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (2)))
{var inst_30694 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_30695 = (0);var state_30731__$1 = (function (){var statearr_30743 = state_30731;(statearr_30743[(9)] = inst_30694);
(statearr_30743[(7)] = inst_30695);
return statearr_30743;
})();var statearr_30744_30771 = state_30731__$1;(statearr_30744_30771[(2)] = null);
(statearr_30744_30771[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (11)))
{var inst_30695 = (state_30731[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30731,(10),Object,null,(9));var inst_30704 = chs__$1.call(null,inst_30695);var inst_30705 = done.call(null,inst_30695);var inst_30706 = cljs.core.async.take_BANG_.call(null,inst_30704,inst_30705);var state_30731__$1 = state_30731;var statearr_30745_30772 = state_30731__$1;(statearr_30745_30772[(2)] = inst_30706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30731__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (9)))
{var inst_30695 = (state_30731[(7)]);var inst_30708 = (state_30731[(2)]);var inst_30709 = (inst_30695 + (1));var inst_30695__$1 = inst_30709;var state_30731__$1 = (function (){var statearr_30746 = state_30731;(statearr_30746[(10)] = inst_30708);
(statearr_30746[(7)] = inst_30695__$1);
return statearr_30746;
})();var statearr_30747_30773 = state_30731__$1;(statearr_30747_30773[(2)] = null);
(statearr_30747_30773[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (5)))
{var inst_30715 = (state_30731[(2)]);var state_30731__$1 = (function (){var statearr_30748 = state_30731;(statearr_30748[(11)] = inst_30715);
return statearr_30748;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30731__$1,(12),dchan);
} else
{if((state_val_30732 === (14)))
{var inst_30717 = (state_30731[(8)]);var inst_30722 = cljs.core.apply.call(null,f,inst_30717);var state_30731__$1 = state_30731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30731__$1,(16),out,inst_30722);
} else
{if((state_val_30732 === (16)))
{var inst_30724 = (state_30731[(2)]);var state_30731__$1 = (function (){var statearr_30749 = state_30731;(statearr_30749[(12)] = inst_30724);
return statearr_30749;
})();var statearr_30750_30774 = state_30731__$1;(statearr_30750_30774[(2)] = null);
(statearr_30750_30774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (10)))
{var inst_30699 = (state_30731[(2)]);var inst_30700 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_30731__$1 = (function (){var statearr_30751 = state_30731;(statearr_30751[(13)] = inst_30699);
return statearr_30751;
})();var statearr_30752_30775 = state_30731__$1;(statearr_30752_30775[(2)] = inst_30700);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30731__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30732 === (8)))
{var inst_30713 = (state_30731[(2)]);var state_30731__$1 = state_30731;var statearr_30753_30776 = state_30731__$1;(statearr_30753_30776[(2)] = inst_30713);
(statearr_30753_30776[(1)] = (5));
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
});})(c__5708__auto___30761,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___30761,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30757[(0)] = state_machine__5694__auto__);
(statearr_30757[(1)] = (1));
return statearr_30757;
});
var state_machine__5694__auto____1 = (function (state_30731){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30758){if((e30758 instanceof Object))
{var ex__5697__auto__ = e30758;var statearr_30759_30777 = state_30731;(statearr_30759_30777[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30731);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30758;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30778 = state_30731;
state_30731 = G__30778;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30731){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30761,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_30760 = f__5709__auto__.call(null);(statearr_30760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30761);
return statearr_30760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30761,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30886 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30886,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30886,out){
return (function (state_30862){var state_val_30863 = (state_30862[(1)]);if((state_val_30863 === (7)))
{var inst_30841 = (state_30862[(7)]);var inst_30842 = (state_30862[(8)]);var inst_30841__$1 = (state_30862[(2)]);var inst_30842__$1 = cljs.core.nth.call(null,inst_30841__$1,(0),null);var inst_30843 = cljs.core.nth.call(null,inst_30841__$1,(1),null);var inst_30844 = (inst_30842__$1 == null);var state_30862__$1 = (function (){var statearr_30864 = state_30862;(statearr_30864[(7)] = inst_30841__$1);
(statearr_30864[(8)] = inst_30842__$1);
(statearr_30864[(9)] = inst_30843);
return statearr_30864;
})();if(cljs.core.truth_(inst_30844))
{var statearr_30865_30887 = state_30862__$1;(statearr_30865_30887[(1)] = (8));
} else
{var statearr_30866_30888 = state_30862__$1;(statearr_30866_30888[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30863 === (1)))
{var inst_30833 = cljs.core.vec.call(null,chs);var inst_30834 = inst_30833;var state_30862__$1 = (function (){var statearr_30867 = state_30862;(statearr_30867[(10)] = inst_30834);
return statearr_30867;
})();var statearr_30868_30889 = state_30862__$1;(statearr_30868_30889[(2)] = null);
(statearr_30868_30889[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30863 === (4)))
{var inst_30834 = (state_30862[(10)]);var state_30862__$1 = state_30862;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30862__$1,(7),inst_30834);
} else
{if((state_val_30863 === (6)))
{var inst_30858 = (state_30862[(2)]);var state_30862__$1 = state_30862;var statearr_30869_30890 = state_30862__$1;(statearr_30869_30890[(2)] = inst_30858);
(statearr_30869_30890[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30863 === (3)))
{var inst_30860 = (state_30862[(2)]);var state_30862__$1 = state_30862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30862__$1,inst_30860);
} else
{if((state_val_30863 === (2)))
{var inst_30834 = (state_30862[(10)]);var inst_30836 = cljs.core.count.call(null,inst_30834);var inst_30837 = (inst_30836 > (0));var state_30862__$1 = state_30862;if(cljs.core.truth_(inst_30837))
{var statearr_30871_30891 = state_30862__$1;(statearr_30871_30891[(1)] = (4));
} else
{var statearr_30872_30892 = state_30862__$1;(statearr_30872_30892[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30863 === (11)))
{var inst_30834 = (state_30862[(10)]);var inst_30851 = (state_30862[(2)]);var tmp30870 = inst_30834;var inst_30834__$1 = tmp30870;var state_30862__$1 = (function (){var statearr_30873 = state_30862;(statearr_30873[(10)] = inst_30834__$1);
(statearr_30873[(11)] = inst_30851);
return statearr_30873;
})();var statearr_30874_30893 = state_30862__$1;(statearr_30874_30893[(2)] = null);
(statearr_30874_30893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30863 === (9)))
{var inst_30842 = (state_30862[(8)]);var state_30862__$1 = state_30862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30862__$1,(11),out,inst_30842);
} else
{if((state_val_30863 === (5)))
{var inst_30856 = cljs.core.async.close_BANG_.call(null,out);var state_30862__$1 = state_30862;var statearr_30875_30894 = state_30862__$1;(statearr_30875_30894[(2)] = inst_30856);
(statearr_30875_30894[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30863 === (10)))
{var inst_30854 = (state_30862[(2)]);var state_30862__$1 = state_30862;var statearr_30876_30895 = state_30862__$1;(statearr_30876_30895[(2)] = inst_30854);
(statearr_30876_30895[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30863 === (8)))
{var inst_30841 = (state_30862[(7)]);var inst_30842 = (state_30862[(8)]);var inst_30834 = (state_30862[(10)]);var inst_30843 = (state_30862[(9)]);var inst_30846 = (function (){var c = inst_30843;var v = inst_30842;var vec__30839 = inst_30841;var cs = inst_30834;return ((function (c,v,vec__30839,cs,inst_30841,inst_30842,inst_30834,inst_30843,state_val_30863,c__5708__auto___30886,out){
return (function (p1__30779_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__30779_SHARP_);
});
;})(c,v,vec__30839,cs,inst_30841,inst_30842,inst_30834,inst_30843,state_val_30863,c__5708__auto___30886,out))
})();var inst_30847 = cljs.core.filterv.call(null,inst_30846,inst_30834);var inst_30834__$1 = inst_30847;var state_30862__$1 = (function (){var statearr_30877 = state_30862;(statearr_30877[(10)] = inst_30834__$1);
return statearr_30877;
})();var statearr_30878_30896 = state_30862__$1;(statearr_30878_30896[(2)] = null);
(statearr_30878_30896[(1)] = (2));
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
});})(c__5708__auto___30886,out))
;return ((function (switch__5693__auto__,c__5708__auto___30886,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30882 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30882[(0)] = state_machine__5694__auto__);
(statearr_30882[(1)] = (1));
return statearr_30882;
});
var state_machine__5694__auto____1 = (function (state_30862){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30862);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30883){if((e30883 instanceof Object))
{var ex__5697__auto__ = e30883;var statearr_30884_30897 = state_30862;(statearr_30884_30897[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30883;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30898 = state_30862;
state_30862 = G__30898;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30862){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30886,out))
})();var state__5710__auto__ = (function (){var statearr_30885 = f__5709__auto__.call(null);(statearr_30885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30886);
return statearr_30885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30886,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___30991 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___30991,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___30991,out){
return (function (state_30968){var state_val_30969 = (state_30968[(1)]);if((state_val_30969 === (7)))
{var inst_30950 = (state_30968[(7)]);var inst_30950__$1 = (state_30968[(2)]);var inst_30951 = (inst_30950__$1 == null);var inst_30952 = cljs.core.not.call(null,inst_30951);var state_30968__$1 = (function (){var statearr_30970 = state_30968;(statearr_30970[(7)] = inst_30950__$1);
return statearr_30970;
})();if(inst_30952)
{var statearr_30971_30992 = state_30968__$1;(statearr_30971_30992[(1)] = (8));
} else
{var statearr_30972_30993 = state_30968__$1;(statearr_30972_30993[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (1)))
{var inst_30945 = (0);var state_30968__$1 = (function (){var statearr_30973 = state_30968;(statearr_30973[(8)] = inst_30945);
return statearr_30973;
})();var statearr_30974_30994 = state_30968__$1;(statearr_30974_30994[(2)] = null);
(statearr_30974_30994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (4)))
{var state_30968__$1 = state_30968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30968__$1,(7),ch);
} else
{if((state_val_30969 === (6)))
{var inst_30963 = (state_30968[(2)]);var state_30968__$1 = state_30968;var statearr_30975_30995 = state_30968__$1;(statearr_30975_30995[(2)] = inst_30963);
(statearr_30975_30995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (3)))
{var inst_30965 = (state_30968[(2)]);var inst_30966 = cljs.core.async.close_BANG_.call(null,out);var state_30968__$1 = (function (){var statearr_30976 = state_30968;(statearr_30976[(9)] = inst_30965);
return statearr_30976;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30968__$1,inst_30966);
} else
{if((state_val_30969 === (2)))
{var inst_30945 = (state_30968[(8)]);var inst_30947 = (inst_30945 < n);var state_30968__$1 = state_30968;if(cljs.core.truth_(inst_30947))
{var statearr_30977_30996 = state_30968__$1;(statearr_30977_30996[(1)] = (4));
} else
{var statearr_30978_30997 = state_30968__$1;(statearr_30978_30997[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (11)))
{var inst_30945 = (state_30968[(8)]);var inst_30955 = (state_30968[(2)]);var inst_30956 = (inst_30945 + (1));var inst_30945__$1 = inst_30956;var state_30968__$1 = (function (){var statearr_30979 = state_30968;(statearr_30979[(8)] = inst_30945__$1);
(statearr_30979[(10)] = inst_30955);
return statearr_30979;
})();var statearr_30980_30998 = state_30968__$1;(statearr_30980_30998[(2)] = null);
(statearr_30980_30998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (9)))
{var state_30968__$1 = state_30968;var statearr_30981_30999 = state_30968__$1;(statearr_30981_30999[(2)] = null);
(statearr_30981_30999[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (5)))
{var state_30968__$1 = state_30968;var statearr_30982_31000 = state_30968__$1;(statearr_30982_31000[(2)] = null);
(statearr_30982_31000[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (10)))
{var inst_30960 = (state_30968[(2)]);var state_30968__$1 = state_30968;var statearr_30983_31001 = state_30968__$1;(statearr_30983_31001[(2)] = inst_30960);
(statearr_30983_31001[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30969 === (8)))
{var inst_30950 = (state_30968[(7)]);var state_30968__$1 = state_30968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30968__$1,(11),out,inst_30950);
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
});})(c__5708__auto___30991,out))
;return ((function (switch__5693__auto__,c__5708__auto___30991,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_30987 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30987[(0)] = state_machine__5694__auto__);
(statearr_30987[(1)] = (1));
return statearr_30987;
});
var state_machine__5694__auto____1 = (function (state_30968){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_30968);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e30988){if((e30988 instanceof Object))
{var ex__5697__auto__ = e30988;var statearr_30989_31002 = state_30968;(statearr_30989_31002[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30968);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e30988;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31003 = state_30968;
state_30968 = G__31003;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_30968){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_30968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___30991,out))
})();var state__5710__auto__ = (function (){var statearr_30990 = f__5709__auto__.call(null);(statearr_30990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___30991);
return statearr_30990;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___30991,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31100 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31100,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31100,out){
return (function (state_31075){var state_val_31076 = (state_31075[(1)]);if((state_val_31076 === (7)))
{var inst_31070 = (state_31075[(2)]);var state_31075__$1 = state_31075;var statearr_31077_31101 = state_31075__$1;(statearr_31077_31101[(2)] = inst_31070);
(statearr_31077_31101[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31076 === (1)))
{var inst_31052 = null;var state_31075__$1 = (function (){var statearr_31078 = state_31075;(statearr_31078[(7)] = inst_31052);
return statearr_31078;
})();var statearr_31079_31102 = state_31075__$1;(statearr_31079_31102[(2)] = null);
(statearr_31079_31102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31076 === (4)))
{var inst_31055 = (state_31075[(8)]);var inst_31055__$1 = (state_31075[(2)]);var inst_31056 = (inst_31055__$1 == null);var inst_31057 = cljs.core.not.call(null,inst_31056);var state_31075__$1 = (function (){var statearr_31080 = state_31075;(statearr_31080[(8)] = inst_31055__$1);
return statearr_31080;
})();if(inst_31057)
{var statearr_31081_31103 = state_31075__$1;(statearr_31081_31103[(1)] = (5));
} else
{var statearr_31082_31104 = state_31075__$1;(statearr_31082_31104[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31076 === (6)))
{var state_31075__$1 = state_31075;var statearr_31083_31105 = state_31075__$1;(statearr_31083_31105[(2)] = null);
(statearr_31083_31105[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31076 === (3)))
{var inst_31072 = (state_31075[(2)]);var inst_31073 = cljs.core.async.close_BANG_.call(null,out);var state_31075__$1 = (function (){var statearr_31084 = state_31075;(statearr_31084[(9)] = inst_31072);
return statearr_31084;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31075__$1,inst_31073);
} else
{if((state_val_31076 === (2)))
{var state_31075__$1 = state_31075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31075__$1,(4),ch);
} else
{if((state_val_31076 === (11)))
{var inst_31055 = (state_31075[(8)]);var inst_31064 = (state_31075[(2)]);var inst_31052 = inst_31055;var state_31075__$1 = (function (){var statearr_31085 = state_31075;(statearr_31085[(7)] = inst_31052);
(statearr_31085[(10)] = inst_31064);
return statearr_31085;
})();var statearr_31086_31106 = state_31075__$1;(statearr_31086_31106[(2)] = null);
(statearr_31086_31106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31076 === (9)))
{var inst_31055 = (state_31075[(8)]);var state_31075__$1 = state_31075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31075__$1,(11),out,inst_31055);
} else
{if((state_val_31076 === (5)))
{var inst_31052 = (state_31075[(7)]);var inst_31055 = (state_31075[(8)]);var inst_31059 = cljs.core._EQ_.call(null,inst_31055,inst_31052);var state_31075__$1 = state_31075;if(inst_31059)
{var statearr_31088_31107 = state_31075__$1;(statearr_31088_31107[(1)] = (8));
} else
{var statearr_31089_31108 = state_31075__$1;(statearr_31089_31108[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31076 === (10)))
{var inst_31067 = (state_31075[(2)]);var state_31075__$1 = state_31075;var statearr_31090_31109 = state_31075__$1;(statearr_31090_31109[(2)] = inst_31067);
(statearr_31090_31109[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31076 === (8)))
{var inst_31052 = (state_31075[(7)]);var tmp31087 = inst_31052;var inst_31052__$1 = tmp31087;var state_31075__$1 = (function (){var statearr_31091 = state_31075;(statearr_31091[(7)] = inst_31052__$1);
return statearr_31091;
})();var statearr_31092_31110 = state_31075__$1;(statearr_31092_31110[(2)] = null);
(statearr_31092_31110[(1)] = (2));
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
});})(c__5708__auto___31100,out))
;return ((function (switch__5693__auto__,c__5708__auto___31100,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31096 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31096[(0)] = state_machine__5694__auto__);
(statearr_31096[(1)] = (1));
return statearr_31096;
});
var state_machine__5694__auto____1 = (function (state_31075){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31075);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31097){if((e31097 instanceof Object))
{var ex__5697__auto__ = e31097;var statearr_31098_31111 = state_31075;(statearr_31098_31111[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31075);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31097;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31112 = state_31075;
state_31075 = G__31112;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31075){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31100,out))
})();var state__5710__auto__ = (function (){var statearr_31099 = f__5709__auto__.call(null);(statearr_31099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31100);
return statearr_31099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31100,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31247,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31247,out){
return (function (state_31217){var state_val_31218 = (state_31217[(1)]);if((state_val_31218 === (7)))
{var inst_31213 = (state_31217[(2)]);var state_31217__$1 = state_31217;var statearr_31219_31248 = state_31217__$1;(statearr_31219_31248[(2)] = inst_31213);
(statearr_31219_31248[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (1)))
{var inst_31180 = (new Array(n));var inst_31181 = inst_31180;var inst_31182 = (0);var state_31217__$1 = (function (){var statearr_31220 = state_31217;(statearr_31220[(7)] = inst_31181);
(statearr_31220[(8)] = inst_31182);
return statearr_31220;
})();var statearr_31221_31249 = state_31217__$1;(statearr_31221_31249[(2)] = null);
(statearr_31221_31249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (4)))
{var inst_31185 = (state_31217[(9)]);var inst_31185__$1 = (state_31217[(2)]);var inst_31186 = (inst_31185__$1 == null);var inst_31187 = cljs.core.not.call(null,inst_31186);var state_31217__$1 = (function (){var statearr_31222 = state_31217;(statearr_31222[(9)] = inst_31185__$1);
return statearr_31222;
})();if(inst_31187)
{var statearr_31223_31250 = state_31217__$1;(statearr_31223_31250[(1)] = (5));
} else
{var statearr_31224_31251 = state_31217__$1;(statearr_31224_31251[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (15)))
{var inst_31207 = (state_31217[(2)]);var state_31217__$1 = state_31217;var statearr_31225_31252 = state_31217__$1;(statearr_31225_31252[(2)] = inst_31207);
(statearr_31225_31252[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (13)))
{var state_31217__$1 = state_31217;var statearr_31226_31253 = state_31217__$1;(statearr_31226_31253[(2)] = null);
(statearr_31226_31253[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (6)))
{var inst_31182 = (state_31217[(8)]);var inst_31203 = (inst_31182 > (0));var state_31217__$1 = state_31217;if(cljs.core.truth_(inst_31203))
{var statearr_31227_31254 = state_31217__$1;(statearr_31227_31254[(1)] = (12));
} else
{var statearr_31228_31255 = state_31217__$1;(statearr_31228_31255[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (3)))
{var inst_31215 = (state_31217[(2)]);var state_31217__$1 = state_31217;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31217__$1,inst_31215);
} else
{if((state_val_31218 === (12)))
{var inst_31181 = (state_31217[(7)]);var inst_31205 = cljs.core.vec.call(null,inst_31181);var state_31217__$1 = state_31217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31217__$1,(15),out,inst_31205);
} else
{if((state_val_31218 === (2)))
{var state_31217__$1 = state_31217;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31217__$1,(4),ch);
} else
{if((state_val_31218 === (11)))
{var inst_31197 = (state_31217[(2)]);var inst_31198 = (new Array(n));var inst_31181 = inst_31198;var inst_31182 = (0);var state_31217__$1 = (function (){var statearr_31229 = state_31217;(statearr_31229[(7)] = inst_31181);
(statearr_31229[(8)] = inst_31182);
(statearr_31229[(10)] = inst_31197);
return statearr_31229;
})();var statearr_31230_31256 = state_31217__$1;(statearr_31230_31256[(2)] = null);
(statearr_31230_31256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (9)))
{var inst_31181 = (state_31217[(7)]);var inst_31195 = cljs.core.vec.call(null,inst_31181);var state_31217__$1 = state_31217;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31217__$1,(11),out,inst_31195);
} else
{if((state_val_31218 === (5)))
{var inst_31181 = (state_31217[(7)]);var inst_31182 = (state_31217[(8)]);var inst_31190 = (state_31217[(11)]);var inst_31185 = (state_31217[(9)]);var inst_31189 = (inst_31181[inst_31182] = inst_31185);var inst_31190__$1 = (inst_31182 + (1));var inst_31191 = (inst_31190__$1 < n);var state_31217__$1 = (function (){var statearr_31231 = state_31217;(statearr_31231[(11)] = inst_31190__$1);
(statearr_31231[(12)] = inst_31189);
return statearr_31231;
})();if(cljs.core.truth_(inst_31191))
{var statearr_31232_31257 = state_31217__$1;(statearr_31232_31257[(1)] = (8));
} else
{var statearr_31233_31258 = state_31217__$1;(statearr_31233_31258[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (14)))
{var inst_31210 = (state_31217[(2)]);var inst_31211 = cljs.core.async.close_BANG_.call(null,out);var state_31217__$1 = (function (){var statearr_31235 = state_31217;(statearr_31235[(13)] = inst_31210);
return statearr_31235;
})();var statearr_31236_31259 = state_31217__$1;(statearr_31236_31259[(2)] = inst_31211);
(statearr_31236_31259[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (10)))
{var inst_31201 = (state_31217[(2)]);var state_31217__$1 = state_31217;var statearr_31237_31260 = state_31217__$1;(statearr_31237_31260[(2)] = inst_31201);
(statearr_31237_31260[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31218 === (8)))
{var inst_31181 = (state_31217[(7)]);var inst_31190 = (state_31217[(11)]);var tmp31234 = inst_31181;var inst_31181__$1 = tmp31234;var inst_31182 = inst_31190;var state_31217__$1 = (function (){var statearr_31238 = state_31217;(statearr_31238[(7)] = inst_31181__$1);
(statearr_31238[(8)] = inst_31182);
return statearr_31238;
})();var statearr_31239_31261 = state_31217__$1;(statearr_31239_31261[(2)] = null);
(statearr_31239_31261[(1)] = (2));
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
});})(c__5708__auto___31247,out))
;return ((function (switch__5693__auto__,c__5708__auto___31247,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31243[(0)] = state_machine__5694__auto__);
(statearr_31243[(1)] = (1));
return statearr_31243;
});
var state_machine__5694__auto____1 = (function (state_31217){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31217);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31244){if((e31244 instanceof Object))
{var ex__5697__auto__ = e31244;var statearr_31245_31262 = state_31217;(statearr_31245_31262[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31217);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31244;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31263 = state_31217;
state_31217 = G__31263;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31217){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31247,out))
})();var state__5710__auto__ = (function (){var statearr_31246 = f__5709__auto__.call(null);(statearr_31246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31247);
return statearr_31246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31247,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___31406 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___31406,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___31406,out){
return (function (state_31376){var state_val_31377 = (state_31376[(1)]);if((state_val_31377 === (7)))
{var inst_31372 = (state_31376[(2)]);var state_31376__$1 = state_31376;var statearr_31378_31407 = state_31376__$1;(statearr_31378_31407[(2)] = inst_31372);
(statearr_31378_31407[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (1)))
{var inst_31335 = [];var inst_31336 = inst_31335;var inst_31337 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_31376__$1 = (function (){var statearr_31379 = state_31376;(statearr_31379[(7)] = inst_31337);
(statearr_31379[(8)] = inst_31336);
return statearr_31379;
})();var statearr_31380_31408 = state_31376__$1;(statearr_31380_31408[(2)] = null);
(statearr_31380_31408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (4)))
{var inst_31340 = (state_31376[(9)]);var inst_31340__$1 = (state_31376[(2)]);var inst_31341 = (inst_31340__$1 == null);var inst_31342 = cljs.core.not.call(null,inst_31341);var state_31376__$1 = (function (){var statearr_31381 = state_31376;(statearr_31381[(9)] = inst_31340__$1);
return statearr_31381;
})();if(inst_31342)
{var statearr_31382_31409 = state_31376__$1;(statearr_31382_31409[(1)] = (5));
} else
{var statearr_31383_31410 = state_31376__$1;(statearr_31383_31410[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (15)))
{var inst_31366 = (state_31376[(2)]);var state_31376__$1 = state_31376;var statearr_31384_31411 = state_31376__$1;(statearr_31384_31411[(2)] = inst_31366);
(statearr_31384_31411[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (13)))
{var state_31376__$1 = state_31376;var statearr_31385_31412 = state_31376__$1;(statearr_31385_31412[(2)] = null);
(statearr_31385_31412[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (6)))
{var inst_31336 = (state_31376[(8)]);var inst_31361 = inst_31336.length;var inst_31362 = (inst_31361 > (0));var state_31376__$1 = state_31376;if(cljs.core.truth_(inst_31362))
{var statearr_31386_31413 = state_31376__$1;(statearr_31386_31413[(1)] = (12));
} else
{var statearr_31387_31414 = state_31376__$1;(statearr_31387_31414[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (3)))
{var inst_31374 = (state_31376[(2)]);var state_31376__$1 = state_31376;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31376__$1,inst_31374);
} else
{if((state_val_31377 === (12)))
{var inst_31336 = (state_31376[(8)]);var inst_31364 = cljs.core.vec.call(null,inst_31336);var state_31376__$1 = state_31376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31376__$1,(15),out,inst_31364);
} else
{if((state_val_31377 === (2)))
{var state_31376__$1 = state_31376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31376__$1,(4),ch);
} else
{if((state_val_31377 === (11)))
{var inst_31340 = (state_31376[(9)]);var inst_31344 = (state_31376[(10)]);var inst_31354 = (state_31376[(2)]);var inst_31355 = [];var inst_31356 = inst_31355.push(inst_31340);var inst_31336 = inst_31355;var inst_31337 = inst_31344;var state_31376__$1 = (function (){var statearr_31388 = state_31376;(statearr_31388[(11)] = inst_31354);
(statearr_31388[(7)] = inst_31337);
(statearr_31388[(12)] = inst_31356);
(statearr_31388[(8)] = inst_31336);
return statearr_31388;
})();var statearr_31389_31415 = state_31376__$1;(statearr_31389_31415[(2)] = null);
(statearr_31389_31415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (9)))
{var inst_31336 = (state_31376[(8)]);var inst_31352 = cljs.core.vec.call(null,inst_31336);var state_31376__$1 = state_31376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31376__$1,(11),out,inst_31352);
} else
{if((state_val_31377 === (5)))
{var inst_31337 = (state_31376[(7)]);var inst_31340 = (state_31376[(9)]);var inst_31344 = (state_31376[(10)]);var inst_31344__$1 = f.call(null,inst_31340);var inst_31345 = cljs.core._EQ_.call(null,inst_31344__$1,inst_31337);var inst_31346 = cljs.core.keyword_identical_QMARK_.call(null,inst_31337,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_31347 = (inst_31345) || (inst_31346);var state_31376__$1 = (function (){var statearr_31390 = state_31376;(statearr_31390[(10)] = inst_31344__$1);
return statearr_31390;
})();if(cljs.core.truth_(inst_31347))
{var statearr_31391_31416 = state_31376__$1;(statearr_31391_31416[(1)] = (8));
} else
{var statearr_31392_31417 = state_31376__$1;(statearr_31392_31417[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (14)))
{var inst_31369 = (state_31376[(2)]);var inst_31370 = cljs.core.async.close_BANG_.call(null,out);var state_31376__$1 = (function (){var statearr_31394 = state_31376;(statearr_31394[(13)] = inst_31369);
return statearr_31394;
})();var statearr_31395_31418 = state_31376__$1;(statearr_31395_31418[(2)] = inst_31370);
(statearr_31395_31418[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (10)))
{var inst_31359 = (state_31376[(2)]);var state_31376__$1 = state_31376;var statearr_31396_31419 = state_31376__$1;(statearr_31396_31419[(2)] = inst_31359);
(statearr_31396_31419[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31377 === (8)))
{var inst_31340 = (state_31376[(9)]);var inst_31344 = (state_31376[(10)]);var inst_31336 = (state_31376[(8)]);var inst_31349 = inst_31336.push(inst_31340);var tmp31393 = inst_31336;var inst_31336__$1 = tmp31393;var inst_31337 = inst_31344;var state_31376__$1 = (function (){var statearr_31397 = state_31376;(statearr_31397[(7)] = inst_31337);
(statearr_31397[(14)] = inst_31349);
(statearr_31397[(8)] = inst_31336__$1);
return statearr_31397;
})();var statearr_31398_31420 = state_31376__$1;(statearr_31398_31420[(2)] = null);
(statearr_31398_31420[(1)] = (2));
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
});})(c__5708__auto___31406,out))
;return ((function (switch__5693__auto__,c__5708__auto___31406,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31402[(0)] = state_machine__5694__auto__);
(statearr_31402[(1)] = (1));
return statearr_31402;
});
var state_machine__5694__auto____1 = (function (state_31376){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31376);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31403){if((e31403 instanceof Object))
{var ex__5697__auto__ = e31403;var statearr_31404_31421 = state_31376;(statearr_31404_31421[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31376);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31403;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31422 = state_31376;
state_31376 = G__31422;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31376){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___31406,out))
})();var state__5710__auto__ = (function (){var statearr_31405 = f__5709__auto__.call(null);(statearr_31405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___31406);
return statearr_31405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___31406,out))
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
