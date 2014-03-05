// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14089 = (function (f,fn_handler,meta14090){
this.f = f;
this.fn_handler = fn_handler;
this.meta14090 = meta14090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14089.cljs$lang$type = true;
cljs.core.async.t14089.cljs$lang$ctorStr = "cljs.core.async/t14089";
cljs.core.async.t14089.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14089");
});
cljs.core.async.t14089.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14091){var self__ = this;
var _14091__$1 = this;return self__.meta14090;
});
cljs.core.async.t14089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14091,meta14090__$1){var self__ = this;
var _14091__$1 = this;return (new cljs.core.async.t14089(self__.f,self__.fn_handler,meta14090__$1));
});
cljs.core.async.__GT_t14089 = (function __GT_t14089(f__$1,fn_handler__$1,meta14090){return (new cljs.core.async.t14089(f__$1,fn_handler__$1,meta14090));
});
}
return (new cljs.core.async.t14089(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14093 = buff;if(G__14093)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__14093.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14093.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14093);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14093);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
{var val_14094 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14094);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14094);
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___14095 = n;var x_14096 = 0;while(true){
if((x_14096 < n__4289__auto___14095))
{(a[x_14096] = 0);
{
var G__14097 = (x_14096 + 1);
x_14096 = G__14097;
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
var G__14098 = (i + 1);
i = G__14098;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14102 = (function (flag,alt_flag,meta14103){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14103 = meta14103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14102.cljs$lang$type = true;
cljs.core.async.t14102.cljs$lang$ctorStr = "cljs.core.async/t14102";
cljs.core.async.t14102.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14102");
});
cljs.core.async.t14102.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14104){var self__ = this;
var _14104__$1 = this;return self__.meta14103;
});
cljs.core.async.t14102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14104,meta14103__$1){var self__ = this;
var _14104__$1 = this;return (new cljs.core.async.t14102(self__.flag,self__.alt_flag,meta14103__$1));
});
cljs.core.async.__GT_t14102 = (function __GT_t14102(flag__$1,alt_flag__$1,meta14103){return (new cljs.core.async.t14102(flag__$1,alt_flag__$1,meta14103));
});
}
return (new cljs.core.async.t14102(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14108 = (function (cb,flag,alt_handler,meta14109){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14109 = meta14109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14108.cljs$lang$type = true;
cljs.core.async.t14108.cljs$lang$ctorStr = "cljs.core.async/t14108";
cljs.core.async.t14108.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14108");
});
cljs.core.async.t14108.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14110){var self__ = this;
var _14110__$1 = this;return self__.meta14109;
});
cljs.core.async.t14108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14110,meta14109__$1){var self__ = this;
var _14110__$1 = this;return (new cljs.core.async.t14108(self__.cb,self__.flag,self__.alt_handler,meta14109__$1));
});
cljs.core.async.__GT_t14108 = (function __GT_t14108(cb__$1,flag__$1,alt_handler__$1,meta14109){return (new cljs.core.async.t14108(cb__$1,flag__$1,alt_handler__$1,meta14109));
});
}
return (new cljs.core.async.t14108(cb,flag,alt_handler,null));
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
return (function (p1__14111_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14111_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14112 = (i + 1);
i = G__14112;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__14113){var map__14115 = p__14113;var map__14115__$1 = ((cljs.core.seq_QMARK_.call(null,map__14115))?cljs.core.apply.call(null,cljs.core.hash_map,map__14115):map__14115);var opts = map__14115__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14113 = null;if (arguments.length > 1) {
  p__14113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14113);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14116){
var ports = cljs.core.first(arglist__14116);
var p__14113 = cljs.core.rest(arglist__14116);
return alts_BANG___delegate(ports,p__14113);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14124 = (function (ch,f,map_LT_,meta14125){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14125 = meta14125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14124.cljs$lang$type = true;
cljs.core.async.t14124.cljs$lang$ctorStr = "cljs.core.async/t14124";
cljs.core.async.t14124.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14124");
});
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14127 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14127 = (function (fn1,_,meta14125,ch,f,map_LT_,meta14128){
this.fn1 = fn1;
this._ = _;
this.meta14125 = meta14125;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14128 = meta14128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14127.cljs$lang$type = true;
cljs.core.async.t14127.cljs$lang$ctorStr = "cljs.core.async/t14127";
cljs.core.async.t14127.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14127");
});
cljs.core.async.t14127.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14127.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14117_SHARP_){return f1.call(null,(((p1__14117_SHARP_ == null))?null:self__.f.call(null,p1__14117_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14129){var self__ = this;
var _14129__$1 = this;return self__.meta14128;
});
cljs.core.async.t14127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14129,meta14128__$1){var self__ = this;
var _14129__$1 = this;return (new cljs.core.async.t14127(self__.fn1,self__._,self__.meta14125,self__.ch,self__.f,self__.map_LT_,meta14128__$1));
});
cljs.core.async.__GT_t14127 = (function __GT_t14127(fn1__$1,___$2,meta14125__$1,ch__$2,f__$2,map_LT___$2,meta14128){return (new cljs.core.async.t14127(fn1__$1,___$2,meta14125__$1,ch__$2,f__$2,map_LT___$2,meta14128));
});
}
return (new cljs.core.async.t14127(fn1,___$1,self__.meta14125,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14126){var self__ = this;
var _14126__$1 = this;return self__.meta14125;
});
cljs.core.async.t14124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14126,meta14125__$1){var self__ = this;
var _14126__$1 = this;return (new cljs.core.async.t14124(self__.ch,self__.f,self__.map_LT_,meta14125__$1));
});
cljs.core.async.__GT_t14124 = (function __GT_t14124(ch__$1,f__$1,map_LT___$1,meta14125){return (new cljs.core.async.t14124(ch__$1,f__$1,map_LT___$1,meta14125));
});
}
return (new cljs.core.async.t14124(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14133 = (function (ch,f,map_GT_,meta14134){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14134 = meta14134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14133.cljs$lang$type = true;
cljs.core.async.t14133.cljs$lang$ctorStr = "cljs.core.async/t14133";
cljs.core.async.t14133.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14133");
});
cljs.core.async.t14133.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14133.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14133.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14135){var self__ = this;
var _14135__$1 = this;return self__.meta14134;
});
cljs.core.async.t14133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14135,meta14134__$1){var self__ = this;
var _14135__$1 = this;return (new cljs.core.async.t14133(self__.ch,self__.f,self__.map_GT_,meta14134__$1));
});
cljs.core.async.__GT_t14133 = (function __GT_t14133(ch__$1,f__$1,map_GT___$1,meta14134){return (new cljs.core.async.t14133(ch__$1,f__$1,map_GT___$1,meta14134));
});
}
return (new cljs.core.async.t14133(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14139 = (function (ch,p,filter_GT_,meta14140){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14140 = meta14140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14139.cljs$lang$type = true;
cljs.core.async.t14139.cljs$lang$ctorStr = "cljs.core.async/t14139";
cljs.core.async.t14139.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14139");
});
cljs.core.async.t14139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14139.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14141){var self__ = this;
var _14141__$1 = this;return self__.meta14140;
});
cljs.core.async.t14139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14141,meta14140__$1){var self__ = this;
var _14141__$1 = this;return (new cljs.core.async.t14139(self__.ch,self__.p,self__.filter_GT_,meta14140__$1));
});
cljs.core.async.__GT_t14139 = (function __GT_t14139(ch__$1,p__$1,filter_GT___$1,meta14140){return (new cljs.core.async.t14139(ch__$1,p__$1,filter_GT___$1,meta14140));
});
}
return (new cljs.core.async.t14139(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14224 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14203){var state_val_14204 = (state_14203[1]);if((state_val_14204 === 1))
{var state_14203__$1 = state_14203;var statearr_14205_14225 = state_14203__$1;(statearr_14205_14225[2] = null);
(statearr_14205_14225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14204 === 2))
{var state_14203__$1 = state_14203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14203__$1,4,ch);
} else
{if((state_val_14204 === 3))
{var inst_14201 = (state_14203[2]);var state_14203__$1 = state_14203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14203__$1,inst_14201);
} else
{if((state_val_14204 === 4))
{var inst_14185 = (state_14203[7]);var inst_14185__$1 = (state_14203[2]);var inst_14186 = (inst_14185__$1 == null);var state_14203__$1 = (function (){var statearr_14206 = state_14203;(statearr_14206[7] = inst_14185__$1);
return statearr_14206;
})();if(cljs.core.truth_(inst_14186))
{var statearr_14207_14226 = state_14203__$1;(statearr_14207_14226[1] = 5);
} else
{var statearr_14208_14227 = state_14203__$1;(statearr_14208_14227[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14204 === 5))
{var inst_14188 = cljs.core.async.close_BANG_.call(null,out);var state_14203__$1 = state_14203;var statearr_14209_14228 = state_14203__$1;(statearr_14209_14228[2] = inst_14188);
(statearr_14209_14228[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14204 === 6))
{var inst_14185 = (state_14203[7]);var inst_14190 = p.call(null,inst_14185);var state_14203__$1 = state_14203;if(cljs.core.truth_(inst_14190))
{var statearr_14210_14229 = state_14203__$1;(statearr_14210_14229[1] = 8);
} else
{var statearr_14211_14230 = state_14203__$1;(statearr_14211_14230[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14204 === 7))
{var inst_14199 = (state_14203[2]);var state_14203__$1 = state_14203;var statearr_14212_14231 = state_14203__$1;(statearr_14212_14231[2] = inst_14199);
(statearr_14212_14231[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14204 === 8))
{var inst_14185 = (state_14203[7]);var state_14203__$1 = state_14203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14203__$1,11,out,inst_14185);
} else
{if((state_val_14204 === 9))
{var state_14203__$1 = state_14203;var statearr_14213_14232 = state_14203__$1;(statearr_14213_14232[2] = null);
(statearr_14213_14232[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14204 === 10))
{var inst_14196 = (state_14203[2]);var state_14203__$1 = (function (){var statearr_14214 = state_14203;(statearr_14214[8] = inst_14196);
return statearr_14214;
})();var statearr_14215_14233 = state_14203__$1;(statearr_14215_14233[2] = null);
(statearr_14215_14233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14204 === 11))
{var inst_14193 = (state_14203[2]);var state_14203__$1 = state_14203;var statearr_14216_14234 = state_14203__$1;(statearr_14216_14234[2] = inst_14193);
(statearr_14216_14234[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14220 = [null,null,null,null,null,null,null,null,null];(statearr_14220[0] = state_machine__5548__auto__);
(statearr_14220[1] = 1);
return statearr_14220;
});
var state_machine__5548__auto____1 = (function (state_14203){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14203);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14221){if((e14221 instanceof Object))
{var ex__5551__auto__ = e14221;var statearr_14222_14235 = state_14203;(statearr_14222_14235[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14236 = state_14203;
state_14203 = G__14236;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14203){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14223 = f__5563__auto__.call(null);(statearr_14223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14224);
return statearr_14223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14388){var state_val_14389 = (state_14388[1]);if((state_val_14389 === 1))
{var state_14388__$1 = state_14388;var statearr_14390_14427 = state_14388__$1;(statearr_14390_14427[2] = null);
(statearr_14390_14427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 2))
{var state_14388__$1 = state_14388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14388__$1,4,in$);
} else
{if((state_val_14389 === 3))
{var inst_14386 = (state_14388[2]);var state_14388__$1 = state_14388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14388__$1,inst_14386);
} else
{if((state_val_14389 === 4))
{var inst_14334 = (state_14388[7]);var inst_14334__$1 = (state_14388[2]);var inst_14335 = (inst_14334__$1 == null);var state_14388__$1 = (function (){var statearr_14391 = state_14388;(statearr_14391[7] = inst_14334__$1);
return statearr_14391;
})();if(cljs.core.truth_(inst_14335))
{var statearr_14392_14428 = state_14388__$1;(statearr_14392_14428[1] = 5);
} else
{var statearr_14393_14429 = state_14388__$1;(statearr_14393_14429[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 5))
{var inst_14337 = cljs.core.async.close_BANG_.call(null,out);var state_14388__$1 = state_14388;var statearr_14394_14430 = state_14388__$1;(statearr_14394_14430[2] = inst_14337);
(statearr_14394_14430[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 6))
{var inst_14334 = (state_14388[7]);var inst_14339 = f.call(null,inst_14334);var inst_14344 = cljs.core.seq.call(null,inst_14339);var inst_14345 = inst_14344;var inst_14346 = null;var inst_14347 = 0;var inst_14348 = 0;var state_14388__$1 = (function (){var statearr_14395 = state_14388;(statearr_14395[8] = inst_14348);
(statearr_14395[9] = inst_14347);
(statearr_14395[10] = inst_14346);
(statearr_14395[11] = inst_14345);
return statearr_14395;
})();var statearr_14396_14431 = state_14388__$1;(statearr_14396_14431[2] = null);
(statearr_14396_14431[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 7))
{var inst_14384 = (state_14388[2]);var state_14388__$1 = state_14388;var statearr_14397_14432 = state_14388__$1;(statearr_14397_14432[2] = inst_14384);
(statearr_14397_14432[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 8))
{var inst_14348 = (state_14388[8]);var inst_14347 = (state_14388[9]);var inst_14350 = (inst_14348 < inst_14347);var inst_14351 = inst_14350;var state_14388__$1 = state_14388;if(cljs.core.truth_(inst_14351))
{var statearr_14398_14433 = state_14388__$1;(statearr_14398_14433[1] = 10);
} else
{var statearr_14399_14434 = state_14388__$1;(statearr_14399_14434[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 9))
{var inst_14381 = (state_14388[2]);var state_14388__$1 = (function (){var statearr_14400 = state_14388;(statearr_14400[12] = inst_14381);
return statearr_14400;
})();var statearr_14401_14435 = state_14388__$1;(statearr_14401_14435[2] = null);
(statearr_14401_14435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 10))
{var inst_14348 = (state_14388[8]);var inst_14346 = (state_14388[10]);var inst_14353 = cljs.core._nth.call(null,inst_14346,inst_14348);var state_14388__$1 = state_14388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14388__$1,13,out,inst_14353);
} else
{if((state_val_14389 === 11))
{var inst_14359 = (state_14388[13]);var inst_14345 = (state_14388[11]);var inst_14359__$1 = cljs.core.seq.call(null,inst_14345);var state_14388__$1 = (function (){var statearr_14405 = state_14388;(statearr_14405[13] = inst_14359__$1);
return statearr_14405;
})();if(inst_14359__$1)
{var statearr_14406_14436 = state_14388__$1;(statearr_14406_14436[1] = 14);
} else
{var statearr_14407_14437 = state_14388__$1;(statearr_14407_14437[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 12))
{var inst_14379 = (state_14388[2]);var state_14388__$1 = state_14388;var statearr_14408_14438 = state_14388__$1;(statearr_14408_14438[2] = inst_14379);
(statearr_14408_14438[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 13))
{var inst_14348 = (state_14388[8]);var inst_14347 = (state_14388[9]);var inst_14346 = (state_14388[10]);var inst_14345 = (state_14388[11]);var inst_14355 = (state_14388[2]);var inst_14356 = (inst_14348 + 1);var tmp14402 = inst_14347;var tmp14403 = inst_14346;var tmp14404 = inst_14345;var inst_14345__$1 = tmp14404;var inst_14346__$1 = tmp14403;var inst_14347__$1 = tmp14402;var inst_14348__$1 = inst_14356;var state_14388__$1 = (function (){var statearr_14409 = state_14388;(statearr_14409[14] = inst_14355);
(statearr_14409[8] = inst_14348__$1);
(statearr_14409[9] = inst_14347__$1);
(statearr_14409[10] = inst_14346__$1);
(statearr_14409[11] = inst_14345__$1);
return statearr_14409;
})();var statearr_14410_14439 = state_14388__$1;(statearr_14410_14439[2] = null);
(statearr_14410_14439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 14))
{var inst_14359 = (state_14388[13]);var inst_14361 = cljs.core.chunked_seq_QMARK_.call(null,inst_14359);var state_14388__$1 = state_14388;if(inst_14361)
{var statearr_14411_14440 = state_14388__$1;(statearr_14411_14440[1] = 17);
} else
{var statearr_14412_14441 = state_14388__$1;(statearr_14412_14441[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 15))
{var state_14388__$1 = state_14388;var statearr_14413_14442 = state_14388__$1;(statearr_14413_14442[2] = null);
(statearr_14413_14442[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 16))
{var inst_14377 = (state_14388[2]);var state_14388__$1 = state_14388;var statearr_14414_14443 = state_14388__$1;(statearr_14414_14443[2] = inst_14377);
(statearr_14414_14443[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 17))
{var inst_14359 = (state_14388[13]);var inst_14363 = cljs.core.chunk_first.call(null,inst_14359);var inst_14364 = cljs.core.chunk_rest.call(null,inst_14359);var inst_14365 = cljs.core.count.call(null,inst_14363);var inst_14345 = inst_14364;var inst_14346 = inst_14363;var inst_14347 = inst_14365;var inst_14348 = 0;var state_14388__$1 = (function (){var statearr_14415 = state_14388;(statearr_14415[8] = inst_14348);
(statearr_14415[9] = inst_14347);
(statearr_14415[10] = inst_14346);
(statearr_14415[11] = inst_14345);
return statearr_14415;
})();var statearr_14416_14444 = state_14388__$1;(statearr_14416_14444[2] = null);
(statearr_14416_14444[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 18))
{var inst_14359 = (state_14388[13]);var inst_14368 = cljs.core.first.call(null,inst_14359);var state_14388__$1 = state_14388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14388__$1,20,out,inst_14368);
} else
{if((state_val_14389 === 19))
{var inst_14374 = (state_14388[2]);var state_14388__$1 = state_14388;var statearr_14417_14445 = state_14388__$1;(statearr_14417_14445[2] = inst_14374);
(statearr_14417_14445[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14389 === 20))
{var inst_14359 = (state_14388[13]);var inst_14370 = (state_14388[2]);var inst_14371 = cljs.core.next.call(null,inst_14359);var inst_14345 = inst_14371;var inst_14346 = null;var inst_14347 = 0;var inst_14348 = 0;var state_14388__$1 = (function (){var statearr_14418 = state_14388;(statearr_14418[15] = inst_14370);
(statearr_14418[8] = inst_14348);
(statearr_14418[9] = inst_14347);
(statearr_14418[10] = inst_14346);
(statearr_14418[11] = inst_14345);
return statearr_14418;
})();var statearr_14419_14446 = state_14388__$1;(statearr_14419_14446[2] = null);
(statearr_14419_14446[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14423[0] = state_machine__5548__auto__);
(statearr_14423[1] = 1);
return statearr_14423;
});
var state_machine__5548__auto____1 = (function (state_14388){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14388);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14424){if((e14424 instanceof Object))
{var ex__5551__auto__ = e14424;var statearr_14425_14447 = state_14388;(statearr_14425_14447[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14448 = state_14388;
state_14388 = G__14448;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14388){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14426 = f__5563__auto__.call(null);(statearr_14426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14426;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___14529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14508){var state_val_14509 = (state_14508[1]);if((state_val_14509 === 1))
{var state_14508__$1 = state_14508;var statearr_14510_14530 = state_14508__$1;(statearr_14510_14530[2] = null);
(statearr_14510_14530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 2))
{var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14508__$1,4,from);
} else
{if((state_val_14509 === 3))
{var inst_14506 = (state_14508[2]);var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14508__$1,inst_14506);
} else
{if((state_val_14509 === 4))
{var inst_14491 = (state_14508[7]);var inst_14491__$1 = (state_14508[2]);var inst_14492 = (inst_14491__$1 == null);var state_14508__$1 = (function (){var statearr_14511 = state_14508;(statearr_14511[7] = inst_14491__$1);
return statearr_14511;
})();if(cljs.core.truth_(inst_14492))
{var statearr_14512_14531 = state_14508__$1;(statearr_14512_14531[1] = 5);
} else
{var statearr_14513_14532 = state_14508__$1;(statearr_14513_14532[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 5))
{var state_14508__$1 = state_14508;if(cljs.core.truth_(close_QMARK_))
{var statearr_14514_14533 = state_14508__$1;(statearr_14514_14533[1] = 8);
} else
{var statearr_14515_14534 = state_14508__$1;(statearr_14515_14534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 6))
{var inst_14491 = (state_14508[7]);var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14508__$1,11,to,inst_14491);
} else
{if((state_val_14509 === 7))
{var inst_14504 = (state_14508[2]);var state_14508__$1 = state_14508;var statearr_14516_14535 = state_14508__$1;(statearr_14516_14535[2] = inst_14504);
(statearr_14516_14535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 8))
{var inst_14495 = cljs.core.async.close_BANG_.call(null,to);var state_14508__$1 = state_14508;var statearr_14517_14536 = state_14508__$1;(statearr_14517_14536[2] = inst_14495);
(statearr_14517_14536[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 9))
{var state_14508__$1 = state_14508;var statearr_14518_14537 = state_14508__$1;(statearr_14518_14537[2] = null);
(statearr_14518_14537[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 10))
{var inst_14498 = (state_14508[2]);var state_14508__$1 = state_14508;var statearr_14519_14538 = state_14508__$1;(statearr_14519_14538[2] = inst_14498);
(statearr_14519_14538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 11))
{var inst_14501 = (state_14508[2]);var state_14508__$1 = (function (){var statearr_14520 = state_14508;(statearr_14520[8] = inst_14501);
return statearr_14520;
})();var statearr_14521_14539 = state_14508__$1;(statearr_14521_14539[2] = null);
(statearr_14521_14539[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14525 = [null,null,null,null,null,null,null,null,null];(statearr_14525[0] = state_machine__5548__auto__);
(statearr_14525[1] = 1);
return statearr_14525;
});
var state_machine__5548__auto____1 = (function (state_14508){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14526){if((e14526 instanceof Object))
{var ex__5551__auto__ = e14526;var statearr_14527_14540 = state_14508;(statearr_14527_14540[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14541 = state_14508;
state_14508 = G__14541;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14508){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14528 = f__5563__auto__.call(null);(statearr_14528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14529);
return statearr_14528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___14628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14606){var state_val_14607 = (state_14606[1]);if((state_val_14607 === 1))
{var state_14606__$1 = state_14606;var statearr_14608_14629 = state_14606__$1;(statearr_14608_14629[2] = null);
(statearr_14608_14629[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 2))
{var state_14606__$1 = state_14606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14606__$1,4,ch);
} else
{if((state_val_14607 === 3))
{var inst_14604 = (state_14606[2]);var state_14606__$1 = state_14606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14606__$1,inst_14604);
} else
{if((state_val_14607 === 4))
{var inst_14587 = (state_14606[7]);var inst_14587__$1 = (state_14606[2]);var inst_14588 = (inst_14587__$1 == null);var state_14606__$1 = (function (){var statearr_14609 = state_14606;(statearr_14609[7] = inst_14587__$1);
return statearr_14609;
})();if(cljs.core.truth_(inst_14588))
{var statearr_14610_14630 = state_14606__$1;(statearr_14610_14630[1] = 5);
} else
{var statearr_14611_14631 = state_14606__$1;(statearr_14611_14631[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 5))
{var inst_14590 = cljs.core.async.close_BANG_.call(null,tc);var inst_14591 = cljs.core.async.close_BANG_.call(null,fc);var state_14606__$1 = (function (){var statearr_14612 = state_14606;(statearr_14612[8] = inst_14590);
return statearr_14612;
})();var statearr_14613_14632 = state_14606__$1;(statearr_14613_14632[2] = inst_14591);
(statearr_14613_14632[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 6))
{var inst_14587 = (state_14606[7]);var inst_14593 = p.call(null,inst_14587);var state_14606__$1 = state_14606;if(cljs.core.truth_(inst_14593))
{var statearr_14614_14633 = state_14606__$1;(statearr_14614_14633[1] = 9);
} else
{var statearr_14615_14634 = state_14606__$1;(statearr_14615_14634[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 7))
{var inst_14602 = (state_14606[2]);var state_14606__$1 = state_14606;var statearr_14616_14635 = state_14606__$1;(statearr_14616_14635[2] = inst_14602);
(statearr_14616_14635[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 8))
{var inst_14599 = (state_14606[2]);var state_14606__$1 = (function (){var statearr_14617 = state_14606;(statearr_14617[9] = inst_14599);
return statearr_14617;
})();var statearr_14618_14636 = state_14606__$1;(statearr_14618_14636[2] = null);
(statearr_14618_14636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 9))
{var state_14606__$1 = state_14606;var statearr_14619_14637 = state_14606__$1;(statearr_14619_14637[2] = tc);
(statearr_14619_14637[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 10))
{var state_14606__$1 = state_14606;var statearr_14620_14638 = state_14606__$1;(statearr_14620_14638[2] = fc);
(statearr_14620_14638[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14607 === 11))
{var inst_14587 = (state_14606[7]);var inst_14597 = (state_14606[2]);var state_14606__$1 = state_14606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14606__$1,8,inst_14597,inst_14587);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14624 = [null,null,null,null,null,null,null,null,null,null];(statearr_14624[0] = state_machine__5548__auto__);
(statearr_14624[1] = 1);
return statearr_14624;
});
var state_machine__5548__auto____1 = (function (state_14606){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14606);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14625){if((e14625 instanceof Object))
{var ex__5551__auto__ = e14625;var statearr_14626_14639 = state_14606;(statearr_14626_14639[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14640 = state_14606;
state_14606 = G__14640;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14606){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14627 = f__5563__auto__.call(null);(statearr_14627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14628);
return statearr_14627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14687){var state_val_14688 = (state_14687[1]);if((state_val_14688 === 7))
{var inst_14683 = (state_14687[2]);var state_14687__$1 = state_14687;var statearr_14689_14705 = state_14687__$1;(statearr_14689_14705[2] = inst_14683);
(statearr_14689_14705[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 6))
{var inst_14676 = (state_14687[7]);var inst_14673 = (state_14687[8]);var inst_14680 = f.call(null,inst_14673,inst_14676);var inst_14673__$1 = inst_14680;var state_14687__$1 = (function (){var statearr_14690 = state_14687;(statearr_14690[8] = inst_14673__$1);
return statearr_14690;
})();var statearr_14691_14706 = state_14687__$1;(statearr_14691_14706[2] = null);
(statearr_14691_14706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 5))
{var inst_14673 = (state_14687[8]);var state_14687__$1 = state_14687;var statearr_14692_14707 = state_14687__$1;(statearr_14692_14707[2] = inst_14673);
(statearr_14692_14707[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 4))
{var inst_14676 = (state_14687[7]);var inst_14676__$1 = (state_14687[2]);var inst_14677 = (inst_14676__$1 == null);var state_14687__$1 = (function (){var statearr_14693 = state_14687;(statearr_14693[7] = inst_14676__$1);
return statearr_14693;
})();if(cljs.core.truth_(inst_14677))
{var statearr_14694_14708 = state_14687__$1;(statearr_14694_14708[1] = 5);
} else
{var statearr_14695_14709 = state_14687__$1;(statearr_14695_14709[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14688 === 3))
{var inst_14685 = (state_14687[2]);var state_14687__$1 = state_14687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14687__$1,inst_14685);
} else
{if((state_val_14688 === 2))
{var state_14687__$1 = state_14687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14687__$1,4,ch);
} else
{if((state_val_14688 === 1))
{var inst_14673 = init;var state_14687__$1 = (function (){var statearr_14696 = state_14687;(statearr_14696[8] = inst_14673);
return statearr_14696;
})();var statearr_14697_14710 = state_14687__$1;(statearr_14697_14710[2] = null);
(statearr_14697_14710[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14701 = [null,null,null,null,null,null,null,null,null];(statearr_14701[0] = state_machine__5548__auto__);
(statearr_14701[1] = 1);
return statearr_14701;
});
var state_machine__5548__auto____1 = (function (state_14687){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14702){if((e14702 instanceof Object))
{var ex__5551__auto__ = e14702;var statearr_14703_14711 = state_14687;(statearr_14703_14711[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14712 = state_14687;
state_14687 = G__14712;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14687){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14704 = f__5563__auto__.call(null);(statearr_14704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14704;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14774){var state_val_14775 = (state_14774[1]);if((state_val_14775 === 1))
{var inst_14754 = cljs.core.seq.call(null,coll);var inst_14755 = inst_14754;var state_14774__$1 = (function (){var statearr_14776 = state_14774;(statearr_14776[7] = inst_14755);
return statearr_14776;
})();var statearr_14777_14795 = state_14774__$1;(statearr_14777_14795[2] = null);
(statearr_14777_14795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 2))
{var inst_14755 = (state_14774[7]);var state_14774__$1 = state_14774;if(cljs.core.truth_(inst_14755))
{var statearr_14778_14796 = state_14774__$1;(statearr_14778_14796[1] = 4);
} else
{var statearr_14779_14797 = state_14774__$1;(statearr_14779_14797[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 3))
{var inst_14772 = (state_14774[2]);var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14774__$1,inst_14772);
} else
{if((state_val_14775 === 4))
{var inst_14755 = (state_14774[7]);var inst_14758 = cljs.core.first.call(null,inst_14755);var state_14774__$1 = state_14774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14774__$1,7,ch,inst_14758);
} else
{if((state_val_14775 === 5))
{var state_14774__$1 = state_14774;if(cljs.core.truth_(close_QMARK_))
{var statearr_14780_14798 = state_14774__$1;(statearr_14780_14798[1] = 8);
} else
{var statearr_14781_14799 = state_14774__$1;(statearr_14781_14799[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 6))
{var inst_14770 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14782_14800 = state_14774__$1;(statearr_14782_14800[2] = inst_14770);
(statearr_14782_14800[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 7))
{var inst_14755 = (state_14774[7]);var inst_14760 = (state_14774[2]);var inst_14761 = cljs.core.next.call(null,inst_14755);var inst_14755__$1 = inst_14761;var state_14774__$1 = (function (){var statearr_14783 = state_14774;(statearr_14783[8] = inst_14760);
(statearr_14783[7] = inst_14755__$1);
return statearr_14783;
})();var statearr_14784_14801 = state_14774__$1;(statearr_14784_14801[2] = null);
(statearr_14784_14801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 8))
{var inst_14765 = cljs.core.async.close_BANG_.call(null,ch);var state_14774__$1 = state_14774;var statearr_14785_14802 = state_14774__$1;(statearr_14785_14802[2] = inst_14765);
(statearr_14785_14802[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 9))
{var state_14774__$1 = state_14774;var statearr_14786_14803 = state_14774__$1;(statearr_14786_14803[2] = null);
(statearr_14786_14803[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14775 === 10))
{var inst_14768 = (state_14774[2]);var state_14774__$1 = state_14774;var statearr_14787_14804 = state_14774__$1;(statearr_14787_14804[2] = inst_14768);
(statearr_14787_14804[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14791 = [null,null,null,null,null,null,null,null,null];(statearr_14791[0] = state_machine__5548__auto__);
(statearr_14791[1] = 1);
return statearr_14791;
});
var state_machine__5548__auto____1 = (function (state_14774){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14792){if((e14792 instanceof Object))
{var ex__5551__auto__ = e14792;var statearr_14793_14805 = state_14774;(statearr_14793_14805[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14806 = state_14774;
state_14774 = G__14806;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14774){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14794 = f__5563__auto__.call(null);(statearr_14794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj14808 = {};return obj14808;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14810 = {};return obj14810;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15034 = (function (cs,ch,mult,meta15035){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15035 = meta15035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15034.cljs$lang$type = true;
cljs.core.async.t15034.cljs$lang$ctorStr = "cljs.core.async/t15034";
cljs.core.async.t15034.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15034");
});})(cs))
;
cljs.core.async.t15034.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15034.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15034.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15034.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15034.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15036){var self__ = this;
var _15036__$1 = this;return self__.meta15035;
});})(cs))
;
cljs.core.async.t15034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15036,meta15035__$1){var self__ = this;
var _15036__$1 = this;return (new cljs.core.async.t15034(self__.cs,self__.ch,self__.mult,meta15035__$1));
});})(cs))
;
cljs.core.async.__GT_t15034 = ((function (cs){
return (function __GT_t15034(cs__$1,ch__$1,mult__$1,meta15035){return (new cljs.core.async.t15034(cs__$1,ch__$1,mult__$1,meta15035));
});})(cs))
;
}
return (new cljs.core.async.t15034(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___15257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15171){var state_val_15172 = (state_15171[1]);if((state_val_15172 === 32))
{var inst_15039 = (state_15171[7]);var inst_15115 = (state_15171[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15171,31,Object,null,30);var inst_15122 = cljs.core.async.put_BANG_.call(null,inst_15115,inst_15039,done);var state_15171__$1 = state_15171;var statearr_15173_15258 = state_15171__$1;(statearr_15173_15258[2] = inst_15122);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15171__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 1))
{var state_15171__$1 = state_15171;var statearr_15174_15259 = state_15171__$1;(statearr_15174_15259[2] = null);
(statearr_15174_15259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 33))
{var inst_15128 = (state_15171[9]);var inst_15130 = cljs.core.chunked_seq_QMARK_.call(null,inst_15128);var state_15171__$1 = state_15171;if(inst_15130)
{var statearr_15175_15260 = state_15171__$1;(statearr_15175_15260[1] = 36);
} else
{var statearr_15176_15261 = state_15171__$1;(statearr_15176_15261[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 2))
{var state_15171__$1 = state_15171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15171__$1,4,ch);
} else
{if((state_val_15172 === 34))
{var state_15171__$1 = state_15171;var statearr_15177_15262 = state_15171__$1;(statearr_15177_15262[2] = null);
(statearr_15177_15262[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 3))
{var inst_15169 = (state_15171[2]);var state_15171__$1 = state_15171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15171__$1,inst_15169);
} else
{if((state_val_15172 === 35))
{var inst_15153 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15178_15263 = state_15171__$1;(statearr_15178_15263[2] = inst_15153);
(statearr_15178_15263[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 4))
{var inst_15039 = (state_15171[7]);var inst_15039__$1 = (state_15171[2]);var inst_15040 = (inst_15039__$1 == null);var state_15171__$1 = (function (){var statearr_15179 = state_15171;(statearr_15179[7] = inst_15039__$1);
return statearr_15179;
})();if(cljs.core.truth_(inst_15040))
{var statearr_15180_15264 = state_15171__$1;(statearr_15180_15264[1] = 5);
} else
{var statearr_15181_15265 = state_15171__$1;(statearr_15181_15265[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 36))
{var inst_15128 = (state_15171[9]);var inst_15132 = cljs.core.chunk_first.call(null,inst_15128);var inst_15133 = cljs.core.chunk_rest.call(null,inst_15128);var inst_15134 = cljs.core.count.call(null,inst_15132);var inst_15107 = inst_15133;var inst_15108 = inst_15132;var inst_15109 = inst_15134;var inst_15110 = 0;var state_15171__$1 = (function (){var statearr_15182 = state_15171;(statearr_15182[10] = inst_15107);
(statearr_15182[11] = inst_15110);
(statearr_15182[12] = inst_15108);
(statearr_15182[13] = inst_15109);
return statearr_15182;
})();var statearr_15183_15266 = state_15171__$1;(statearr_15183_15266[2] = null);
(statearr_15183_15266[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 5))
{var inst_15046 = cljs.core.deref.call(null,cs);var inst_15047 = cljs.core.seq.call(null,inst_15046);var inst_15048 = inst_15047;var inst_15049 = null;var inst_15050 = 0;var inst_15051 = 0;var state_15171__$1 = (function (){var statearr_15184 = state_15171;(statearr_15184[14] = inst_15049);
(statearr_15184[15] = inst_15048);
(statearr_15184[16] = inst_15050);
(statearr_15184[17] = inst_15051);
return statearr_15184;
})();var statearr_15185_15267 = state_15171__$1;(statearr_15185_15267[2] = null);
(statearr_15185_15267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 37))
{var inst_15128 = (state_15171[9]);var inst_15137 = cljs.core.first.call(null,inst_15128);var state_15171__$1 = (function (){var statearr_15186 = state_15171;(statearr_15186[18] = inst_15137);
return statearr_15186;
})();var statearr_15187_15268 = state_15171__$1;(statearr_15187_15268[2] = null);
(statearr_15187_15268[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 6))
{var inst_15099 = (state_15171[19]);var inst_15098 = cljs.core.deref.call(null,cs);var inst_15099__$1 = cljs.core.keys.call(null,inst_15098);var inst_15100 = cljs.core.count.call(null,inst_15099__$1);var inst_15101 = cljs.core.reset_BANG_.call(null,dctr,inst_15100);var inst_15106 = cljs.core.seq.call(null,inst_15099__$1);var inst_15107 = inst_15106;var inst_15108 = null;var inst_15109 = 0;var inst_15110 = 0;var state_15171__$1 = (function (){var statearr_15188 = state_15171;(statearr_15188[10] = inst_15107);
(statearr_15188[19] = inst_15099__$1);
(statearr_15188[20] = inst_15101);
(statearr_15188[11] = inst_15110);
(statearr_15188[12] = inst_15108);
(statearr_15188[13] = inst_15109);
return statearr_15188;
})();var statearr_15189_15269 = state_15171__$1;(statearr_15189_15269[2] = null);
(statearr_15189_15269[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 38))
{var inst_15150 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15190_15270 = state_15171__$1;(statearr_15190_15270[2] = inst_15150);
(statearr_15190_15270[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 7))
{var inst_15167 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15191_15271 = state_15171__$1;(statearr_15191_15271[2] = inst_15167);
(statearr_15191_15271[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 39))
{var inst_15128 = (state_15171[9]);var inst_15146 = (state_15171[2]);var inst_15147 = cljs.core.next.call(null,inst_15128);var inst_15107 = inst_15147;var inst_15108 = null;var inst_15109 = 0;var inst_15110 = 0;var state_15171__$1 = (function (){var statearr_15192 = state_15171;(statearr_15192[10] = inst_15107);
(statearr_15192[21] = inst_15146);
(statearr_15192[11] = inst_15110);
(statearr_15192[12] = inst_15108);
(statearr_15192[13] = inst_15109);
return statearr_15192;
})();var statearr_15193_15272 = state_15171__$1;(statearr_15193_15272[2] = null);
(statearr_15193_15272[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 8))
{var inst_15050 = (state_15171[16]);var inst_15051 = (state_15171[17]);var inst_15053 = (inst_15051 < inst_15050);var inst_15054 = inst_15053;var state_15171__$1 = state_15171;if(cljs.core.truth_(inst_15054))
{var statearr_15194_15273 = state_15171__$1;(statearr_15194_15273[1] = 10);
} else
{var statearr_15195_15274 = state_15171__$1;(statearr_15195_15274[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 40))
{var inst_15137 = (state_15171[18]);var inst_15138 = (state_15171[2]);var inst_15139 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15140 = cljs.core.async.untap_STAR_.call(null,m,inst_15137);var state_15171__$1 = (function (){var statearr_15196 = state_15171;(statearr_15196[22] = inst_15139);
(statearr_15196[23] = inst_15138);
return statearr_15196;
})();var statearr_15197_15275 = state_15171__$1;(statearr_15197_15275[2] = inst_15140);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15171__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 9))
{var inst_15096 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15198_15276 = state_15171__$1;(statearr_15198_15276[2] = inst_15096);
(statearr_15198_15276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 41))
{var inst_15137 = (state_15171[18]);var inst_15039 = (state_15171[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15171,40,Object,null,39);var inst_15144 = cljs.core.async.put_BANG_.call(null,inst_15137,inst_15039,done);var state_15171__$1 = state_15171;var statearr_15199_15277 = state_15171__$1;(statearr_15199_15277[2] = inst_15144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15171__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 10))
{var inst_15049 = (state_15171[14]);var inst_15051 = (state_15171[17]);var inst_15057 = cljs.core._nth.call(null,inst_15049,inst_15051);var inst_15058 = cljs.core.nth.call(null,inst_15057,0,null);var inst_15059 = cljs.core.nth.call(null,inst_15057,1,null);var state_15171__$1 = (function (){var statearr_15200 = state_15171;(statearr_15200[24] = inst_15058);
return statearr_15200;
})();if(cljs.core.truth_(inst_15059))
{var statearr_15201_15278 = state_15171__$1;(statearr_15201_15278[1] = 13);
} else
{var statearr_15202_15279 = state_15171__$1;(statearr_15202_15279[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 42))
{var state_15171__$1 = state_15171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15171__$1,45,dchan);
} else
{if((state_val_15172 === 11))
{var inst_15068 = (state_15171[25]);var inst_15048 = (state_15171[15]);var inst_15068__$1 = cljs.core.seq.call(null,inst_15048);var state_15171__$1 = (function (){var statearr_15203 = state_15171;(statearr_15203[25] = inst_15068__$1);
return statearr_15203;
})();if(inst_15068__$1)
{var statearr_15204_15280 = state_15171__$1;(statearr_15204_15280[1] = 16);
} else
{var statearr_15205_15281 = state_15171__$1;(statearr_15205_15281[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 43))
{var state_15171__$1 = state_15171;var statearr_15206_15282 = state_15171__$1;(statearr_15206_15282[2] = null);
(statearr_15206_15282[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 12))
{var inst_15094 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15207_15283 = state_15171__$1;(statearr_15207_15283[2] = inst_15094);
(statearr_15207_15283[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 44))
{var inst_15164 = (state_15171[2]);var state_15171__$1 = (function (){var statearr_15208 = state_15171;(statearr_15208[26] = inst_15164);
return statearr_15208;
})();var statearr_15209_15284 = state_15171__$1;(statearr_15209_15284[2] = null);
(statearr_15209_15284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 13))
{var inst_15058 = (state_15171[24]);var inst_15061 = cljs.core.async.close_BANG_.call(null,inst_15058);var state_15171__$1 = state_15171;var statearr_15210_15285 = state_15171__$1;(statearr_15210_15285[2] = inst_15061);
(statearr_15210_15285[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 45))
{var inst_15161 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15214_15286 = state_15171__$1;(statearr_15214_15286[2] = inst_15161);
(statearr_15214_15286[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 14))
{var state_15171__$1 = state_15171;var statearr_15215_15287 = state_15171__$1;(statearr_15215_15287[2] = null);
(statearr_15215_15287[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 15))
{var inst_15049 = (state_15171[14]);var inst_15048 = (state_15171[15]);var inst_15050 = (state_15171[16]);var inst_15051 = (state_15171[17]);var inst_15064 = (state_15171[2]);var inst_15065 = (inst_15051 + 1);var tmp15211 = inst_15049;var tmp15212 = inst_15048;var tmp15213 = inst_15050;var inst_15048__$1 = tmp15212;var inst_15049__$1 = tmp15211;var inst_15050__$1 = tmp15213;var inst_15051__$1 = inst_15065;var state_15171__$1 = (function (){var statearr_15216 = state_15171;(statearr_15216[27] = inst_15064);
(statearr_15216[14] = inst_15049__$1);
(statearr_15216[15] = inst_15048__$1);
(statearr_15216[16] = inst_15050__$1);
(statearr_15216[17] = inst_15051__$1);
return statearr_15216;
})();var statearr_15217_15288 = state_15171__$1;(statearr_15217_15288[2] = null);
(statearr_15217_15288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 16))
{var inst_15068 = (state_15171[25]);var inst_15070 = cljs.core.chunked_seq_QMARK_.call(null,inst_15068);var state_15171__$1 = state_15171;if(inst_15070)
{var statearr_15218_15289 = state_15171__$1;(statearr_15218_15289[1] = 19);
} else
{var statearr_15219_15290 = state_15171__$1;(statearr_15219_15290[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 17))
{var state_15171__$1 = state_15171;var statearr_15220_15291 = state_15171__$1;(statearr_15220_15291[2] = null);
(statearr_15220_15291[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 18))
{var inst_15092 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15221_15292 = state_15171__$1;(statearr_15221_15292[2] = inst_15092);
(statearr_15221_15292[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 19))
{var inst_15068 = (state_15171[25]);var inst_15072 = cljs.core.chunk_first.call(null,inst_15068);var inst_15073 = cljs.core.chunk_rest.call(null,inst_15068);var inst_15074 = cljs.core.count.call(null,inst_15072);var inst_15048 = inst_15073;var inst_15049 = inst_15072;var inst_15050 = inst_15074;var inst_15051 = 0;var state_15171__$1 = (function (){var statearr_15222 = state_15171;(statearr_15222[14] = inst_15049);
(statearr_15222[15] = inst_15048);
(statearr_15222[16] = inst_15050);
(statearr_15222[17] = inst_15051);
return statearr_15222;
})();var statearr_15223_15293 = state_15171__$1;(statearr_15223_15293[2] = null);
(statearr_15223_15293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 20))
{var inst_15068 = (state_15171[25]);var inst_15078 = cljs.core.first.call(null,inst_15068);var inst_15079 = cljs.core.nth.call(null,inst_15078,0,null);var inst_15080 = cljs.core.nth.call(null,inst_15078,1,null);var state_15171__$1 = (function (){var statearr_15224 = state_15171;(statearr_15224[28] = inst_15079);
return statearr_15224;
})();if(cljs.core.truth_(inst_15080))
{var statearr_15225_15294 = state_15171__$1;(statearr_15225_15294[1] = 22);
} else
{var statearr_15226_15295 = state_15171__$1;(statearr_15226_15295[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 21))
{var inst_15089 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15227_15296 = state_15171__$1;(statearr_15227_15296[2] = inst_15089);
(statearr_15227_15296[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 22))
{var inst_15079 = (state_15171[28]);var inst_15082 = cljs.core.async.close_BANG_.call(null,inst_15079);var state_15171__$1 = state_15171;var statearr_15228_15297 = state_15171__$1;(statearr_15228_15297[2] = inst_15082);
(statearr_15228_15297[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 23))
{var state_15171__$1 = state_15171;var statearr_15229_15298 = state_15171__$1;(statearr_15229_15298[2] = null);
(statearr_15229_15298[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 24))
{var inst_15068 = (state_15171[25]);var inst_15085 = (state_15171[2]);var inst_15086 = cljs.core.next.call(null,inst_15068);var inst_15048 = inst_15086;var inst_15049 = null;var inst_15050 = 0;var inst_15051 = 0;var state_15171__$1 = (function (){var statearr_15230 = state_15171;(statearr_15230[14] = inst_15049);
(statearr_15230[15] = inst_15048);
(statearr_15230[16] = inst_15050);
(statearr_15230[17] = inst_15051);
(statearr_15230[29] = inst_15085);
return statearr_15230;
})();var statearr_15231_15299 = state_15171__$1;(statearr_15231_15299[2] = null);
(statearr_15231_15299[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 25))
{var inst_15110 = (state_15171[11]);var inst_15109 = (state_15171[13]);var inst_15112 = (inst_15110 < inst_15109);var inst_15113 = inst_15112;var state_15171__$1 = state_15171;if(cljs.core.truth_(inst_15113))
{var statearr_15232_15300 = state_15171__$1;(statearr_15232_15300[1] = 27);
} else
{var statearr_15233_15301 = state_15171__$1;(statearr_15233_15301[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 26))
{var inst_15099 = (state_15171[19]);var inst_15157 = (state_15171[2]);var inst_15158 = cljs.core.seq.call(null,inst_15099);var state_15171__$1 = (function (){var statearr_15234 = state_15171;(statearr_15234[30] = inst_15157);
return statearr_15234;
})();if(inst_15158)
{var statearr_15235_15302 = state_15171__$1;(statearr_15235_15302[1] = 42);
} else
{var statearr_15236_15303 = state_15171__$1;(statearr_15236_15303[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 27))
{var inst_15110 = (state_15171[11]);var inst_15108 = (state_15171[12]);var inst_15115 = cljs.core._nth.call(null,inst_15108,inst_15110);var state_15171__$1 = (function (){var statearr_15237 = state_15171;(statearr_15237[8] = inst_15115);
return statearr_15237;
})();var statearr_15238_15304 = state_15171__$1;(statearr_15238_15304[2] = null);
(statearr_15238_15304[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 28))
{var inst_15107 = (state_15171[10]);var inst_15128 = (state_15171[9]);var inst_15128__$1 = cljs.core.seq.call(null,inst_15107);var state_15171__$1 = (function (){var statearr_15242 = state_15171;(statearr_15242[9] = inst_15128__$1);
return statearr_15242;
})();if(inst_15128__$1)
{var statearr_15243_15305 = state_15171__$1;(statearr_15243_15305[1] = 33);
} else
{var statearr_15244_15306 = state_15171__$1;(statearr_15244_15306[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 29))
{var inst_15155 = (state_15171[2]);var state_15171__$1 = state_15171;var statearr_15245_15307 = state_15171__$1;(statearr_15245_15307[2] = inst_15155);
(statearr_15245_15307[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 30))
{var inst_15107 = (state_15171[10]);var inst_15110 = (state_15171[11]);var inst_15108 = (state_15171[12]);var inst_15109 = (state_15171[13]);var inst_15124 = (state_15171[2]);var inst_15125 = (inst_15110 + 1);var tmp15239 = inst_15107;var tmp15240 = inst_15108;var tmp15241 = inst_15109;var inst_15107__$1 = tmp15239;var inst_15108__$1 = tmp15240;var inst_15109__$1 = tmp15241;var inst_15110__$1 = inst_15125;var state_15171__$1 = (function (){var statearr_15246 = state_15171;(statearr_15246[10] = inst_15107__$1);
(statearr_15246[11] = inst_15110__$1);
(statearr_15246[31] = inst_15124);
(statearr_15246[12] = inst_15108__$1);
(statearr_15246[13] = inst_15109__$1);
return statearr_15246;
})();var statearr_15247_15308 = state_15171__$1;(statearr_15247_15308[2] = null);
(statearr_15247_15308[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15172 === 31))
{var inst_15115 = (state_15171[8]);var inst_15116 = (state_15171[2]);var inst_15117 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15118 = cljs.core.async.untap_STAR_.call(null,m,inst_15115);var state_15171__$1 = (function (){var statearr_15248 = state_15171;(statearr_15248[32] = inst_15117);
(statearr_15248[33] = inst_15116);
return statearr_15248;
})();var statearr_15249_15309 = state_15171__$1;(statearr_15249_15309[2] = inst_15118);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15171__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15253[0] = state_machine__5548__auto__);
(statearr_15253[1] = 1);
return statearr_15253;
});
var state_machine__5548__auto____1 = (function (state_15171){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15254){if((e15254 instanceof Object))
{var ex__5551__auto__ = e15254;var statearr_15255_15310 = state_15171;(statearr_15255_15310[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15311 = state_15171;
state_15171 = G__15311;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15171){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15256 = f__5563__auto__.call(null);(statearr_15256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15257);
return statearr_15256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj15313 = {};return obj15313;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t15423 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15423 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15424){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta15424 = meta15424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15423.cljs$lang$type = true;
cljs.core.async.t15423.cljs$lang$ctorStr = "cljs.core.async/t15423";
cljs.core.async.t15423.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15423");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15423.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15425){var self__ = this;
var _15425__$1 = this;return self__.meta15424;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15425,meta15424__$1){var self__ = this;
var _15425__$1 = this;return (new cljs.core.async.t15423(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15424__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15423 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15423(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15424){return (new cljs.core.async.t15423(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15424));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15423(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___15532 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15490){var state_val_15491 = (state_15490[1]);if((state_val_15491 === 1))
{var inst_15429 = (state_15490[7]);var inst_15429__$1 = calc_state.call(null);var inst_15430 = cljs.core.seq_QMARK_.call(null,inst_15429__$1);var state_15490__$1 = (function (){var statearr_15492 = state_15490;(statearr_15492[7] = inst_15429__$1);
return statearr_15492;
})();if(inst_15430)
{var statearr_15493_15533 = state_15490__$1;(statearr_15493_15533[1] = 2);
} else
{var statearr_15494_15534 = state_15490__$1;(statearr_15494_15534[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 2))
{var inst_15429 = (state_15490[7]);var inst_15432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15429);var state_15490__$1 = state_15490;var statearr_15495_15535 = state_15490__$1;(statearr_15495_15535[2] = inst_15432);
(statearr_15495_15535[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 3))
{var inst_15429 = (state_15490[7]);var state_15490__$1 = state_15490;var statearr_15496_15536 = state_15490__$1;(statearr_15496_15536[2] = inst_15429);
(statearr_15496_15536[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 4))
{var inst_15429 = (state_15490[7]);var inst_15435 = (state_15490[2]);var inst_15436 = cljs.core.get.call(null,inst_15435,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15437 = cljs.core.get.call(null,inst_15435,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15438 = cljs.core.get.call(null,inst_15435,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15439 = inst_15429;var state_15490__$1 = (function (){var statearr_15497 = state_15490;(statearr_15497[8] = inst_15438);
(statearr_15497[9] = inst_15439);
(statearr_15497[10] = inst_15437);
(statearr_15497[11] = inst_15436);
return statearr_15497;
})();var statearr_15498_15537 = state_15490__$1;(statearr_15498_15537[2] = null);
(statearr_15498_15537[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 5))
{var inst_15439 = (state_15490[9]);var inst_15442 = cljs.core.seq_QMARK_.call(null,inst_15439);var state_15490__$1 = state_15490;if(inst_15442)
{var statearr_15499_15538 = state_15490__$1;(statearr_15499_15538[1] = 7);
} else
{var statearr_15500_15539 = state_15490__$1;(statearr_15500_15539[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 6))
{var inst_15488 = (state_15490[2]);var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15490__$1,inst_15488);
} else
{if((state_val_15491 === 7))
{var inst_15439 = (state_15490[9]);var inst_15444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15439);var state_15490__$1 = state_15490;var statearr_15501_15540 = state_15490__$1;(statearr_15501_15540[2] = inst_15444);
(statearr_15501_15540[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 8))
{var inst_15439 = (state_15490[9]);var state_15490__$1 = state_15490;var statearr_15502_15541 = state_15490__$1;(statearr_15502_15541[2] = inst_15439);
(statearr_15502_15541[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 9))
{var inst_15447 = (state_15490[12]);var inst_15447__$1 = (state_15490[2]);var inst_15448 = cljs.core.get.call(null,inst_15447__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15449 = cljs.core.get.call(null,inst_15447__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15450 = cljs.core.get.call(null,inst_15447__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15490__$1 = (function (){var statearr_15503 = state_15490;(statearr_15503[13] = inst_15450);
(statearr_15503[14] = inst_15449);
(statearr_15503[12] = inst_15447__$1);
return statearr_15503;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15490__$1,10,inst_15448);
} else
{if((state_val_15491 === 10))
{var inst_15454 = (state_15490[15]);var inst_15455 = (state_15490[16]);var inst_15453 = (state_15490[2]);var inst_15454__$1 = cljs.core.nth.call(null,inst_15453,0,null);var inst_15455__$1 = cljs.core.nth.call(null,inst_15453,1,null);var inst_15456 = (inst_15454__$1 == null);var inst_15457 = cljs.core._EQ_.call(null,inst_15455__$1,change);var inst_15458 = (inst_15456) || (inst_15457);var state_15490__$1 = (function (){var statearr_15504 = state_15490;(statearr_15504[15] = inst_15454__$1);
(statearr_15504[16] = inst_15455__$1);
return statearr_15504;
})();if(cljs.core.truth_(inst_15458))
{var statearr_15505_15542 = state_15490__$1;(statearr_15505_15542[1] = 11);
} else
{var statearr_15506_15543 = state_15490__$1;(statearr_15506_15543[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 11))
{var inst_15454 = (state_15490[15]);var inst_15460 = (inst_15454 == null);var state_15490__$1 = state_15490;if(cljs.core.truth_(inst_15460))
{var statearr_15507_15544 = state_15490__$1;(statearr_15507_15544[1] = 14);
} else
{var statearr_15508_15545 = state_15490__$1;(statearr_15508_15545[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 12))
{var inst_15455 = (state_15490[16]);var inst_15469 = (state_15490[17]);var inst_15450 = (state_15490[13]);var inst_15469__$1 = inst_15450.call(null,inst_15455);var state_15490__$1 = (function (){var statearr_15509 = state_15490;(statearr_15509[17] = inst_15469__$1);
return statearr_15509;
})();if(cljs.core.truth_(inst_15469__$1))
{var statearr_15510_15546 = state_15490__$1;(statearr_15510_15546[1] = 17);
} else
{var statearr_15511_15547 = state_15490__$1;(statearr_15511_15547[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 13))
{var inst_15486 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15512_15548 = state_15490__$1;(statearr_15512_15548[2] = inst_15486);
(statearr_15512_15548[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 14))
{var inst_15455 = (state_15490[16]);var inst_15462 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15455);var state_15490__$1 = state_15490;var statearr_15513_15549 = state_15490__$1;(statearr_15513_15549[2] = inst_15462);
(statearr_15513_15549[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 15))
{var state_15490__$1 = state_15490;var statearr_15514_15550 = state_15490__$1;(statearr_15514_15550[2] = null);
(statearr_15514_15550[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 16))
{var inst_15465 = (state_15490[2]);var inst_15466 = calc_state.call(null);var inst_15439 = inst_15466;var state_15490__$1 = (function (){var statearr_15515 = state_15490;(statearr_15515[18] = inst_15465);
(statearr_15515[9] = inst_15439);
return statearr_15515;
})();var statearr_15516_15551 = state_15490__$1;(statearr_15516_15551[2] = null);
(statearr_15516_15551[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 17))
{var inst_15469 = (state_15490[17]);var state_15490__$1 = state_15490;var statearr_15517_15552 = state_15490__$1;(statearr_15517_15552[2] = inst_15469);
(statearr_15517_15552[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 18))
{var inst_15455 = (state_15490[16]);var inst_15450 = (state_15490[13]);var inst_15449 = (state_15490[14]);var inst_15472 = cljs.core.empty_QMARK_.call(null,inst_15450);var inst_15473 = inst_15449.call(null,inst_15455);var inst_15474 = cljs.core.not.call(null,inst_15473);var inst_15475 = (inst_15472) && (inst_15474);var state_15490__$1 = state_15490;var statearr_15518_15553 = state_15490__$1;(statearr_15518_15553[2] = inst_15475);
(statearr_15518_15553[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 19))
{var inst_15477 = (state_15490[2]);var state_15490__$1 = state_15490;if(cljs.core.truth_(inst_15477))
{var statearr_15519_15554 = state_15490__$1;(statearr_15519_15554[1] = 20);
} else
{var statearr_15520_15555 = state_15490__$1;(statearr_15520_15555[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 20))
{var inst_15454 = (state_15490[15]);var state_15490__$1 = state_15490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15490__$1,23,out,inst_15454);
} else
{if((state_val_15491 === 21))
{var state_15490__$1 = state_15490;var statearr_15521_15556 = state_15490__$1;(statearr_15521_15556[2] = null);
(statearr_15521_15556[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 22))
{var inst_15447 = (state_15490[12]);var inst_15483 = (state_15490[2]);var inst_15439 = inst_15447;var state_15490__$1 = (function (){var statearr_15522 = state_15490;(statearr_15522[9] = inst_15439);
(statearr_15522[19] = inst_15483);
return statearr_15522;
})();var statearr_15523_15557 = state_15490__$1;(statearr_15523_15557[2] = null);
(statearr_15523_15557[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15491 === 23))
{var inst_15480 = (state_15490[2]);var state_15490__$1 = state_15490;var statearr_15524_15558 = state_15490__$1;(statearr_15524_15558[2] = inst_15480);
(statearr_15524_15558[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15528[0] = state_machine__5548__auto__);
(statearr_15528[1] = 1);
return statearr_15528;
});
var state_machine__5548__auto____1 = (function (state_15490){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15529){if((e15529 instanceof Object))
{var ex__5551__auto__ = e15529;var statearr_15530_15559 = state_15490;(statearr_15530_15559[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15560 = state_15490;
state_15490 = G__15560;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15490){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15531 = f__5563__auto__.call(null);(statearr_15531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15532);
return statearr_15531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj15562 = {};return obj15562;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__15563_SHARP_){if(cljs.core.truth_(p1__15563_SHARP_.call(null,topic)))
{return p1__15563_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15563_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15688 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15689){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15689 = meta15689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15688.cljs$lang$type = true;
cljs.core.async.t15688.cljs$lang$ctorStr = "cljs.core.async/t15688";
cljs.core.async.t15688.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15688");
});})(mults,ensure_mult))
;
cljs.core.async.t15688.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15688.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15688.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15688.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15690){var self__ = this;
var _15690__$1 = this;return self__.meta15689;
});})(mults,ensure_mult))
;
cljs.core.async.t15688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15690,meta15689__$1){var self__ = this;
var _15690__$1 = this;return (new cljs.core.async.t15688(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15689__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15688 = ((function (mults,ensure_mult){
return (function __GT_t15688(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15689){return (new cljs.core.async.t15688(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15689));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15688(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___15812 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15764){var state_val_15765 = (state_15764[1]);if((state_val_15765 === 1))
{var state_15764__$1 = state_15764;var statearr_15766_15813 = state_15764__$1;(statearr_15766_15813[2] = null);
(statearr_15766_15813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 2))
{var state_15764__$1 = state_15764;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15764__$1,4,ch);
} else
{if((state_val_15765 === 3))
{var inst_15762 = (state_15764[2]);var state_15764__$1 = state_15764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15764__$1,inst_15762);
} else
{if((state_val_15765 === 4))
{var inst_15693 = (state_15764[7]);var inst_15693__$1 = (state_15764[2]);var inst_15694 = (inst_15693__$1 == null);var state_15764__$1 = (function (){var statearr_15767 = state_15764;(statearr_15767[7] = inst_15693__$1);
return statearr_15767;
})();if(cljs.core.truth_(inst_15694))
{var statearr_15768_15814 = state_15764__$1;(statearr_15768_15814[1] = 5);
} else
{var statearr_15769_15815 = state_15764__$1;(statearr_15769_15815[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 5))
{var inst_15700 = cljs.core.deref.call(null,mults);var inst_15701 = cljs.core.vals.call(null,inst_15700);var inst_15702 = cljs.core.seq.call(null,inst_15701);var inst_15703 = inst_15702;var inst_15704 = null;var inst_15705 = 0;var inst_15706 = 0;var state_15764__$1 = (function (){var statearr_15770 = state_15764;(statearr_15770[8] = inst_15706);
(statearr_15770[9] = inst_15703);
(statearr_15770[10] = inst_15704);
(statearr_15770[11] = inst_15705);
return statearr_15770;
})();var statearr_15771_15816 = state_15764__$1;(statearr_15771_15816[2] = null);
(statearr_15771_15816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 6))
{var inst_15693 = (state_15764[7]);var inst_15743 = (state_15764[12]);var inst_15741 = (state_15764[13]);var inst_15741__$1 = topic_fn.call(null,inst_15693);var inst_15742 = cljs.core.deref.call(null,mults);var inst_15743__$1 = cljs.core.get.call(null,inst_15742,inst_15741__$1);var state_15764__$1 = (function (){var statearr_15772 = state_15764;(statearr_15772[12] = inst_15743__$1);
(statearr_15772[13] = inst_15741__$1);
return statearr_15772;
})();if(cljs.core.truth_(inst_15743__$1))
{var statearr_15773_15817 = state_15764__$1;(statearr_15773_15817[1] = 19);
} else
{var statearr_15774_15818 = state_15764__$1;(statearr_15774_15818[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 7))
{var inst_15760 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15775_15819 = state_15764__$1;(statearr_15775_15819[2] = inst_15760);
(statearr_15775_15819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 8))
{var inst_15706 = (state_15764[8]);var inst_15705 = (state_15764[11]);var inst_15708 = (inst_15706 < inst_15705);var inst_15709 = inst_15708;var state_15764__$1 = state_15764;if(cljs.core.truth_(inst_15709))
{var statearr_15779_15820 = state_15764__$1;(statearr_15779_15820[1] = 10);
} else
{var statearr_15780_15821 = state_15764__$1;(statearr_15780_15821[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 9))
{var inst_15739 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15781_15822 = state_15764__$1;(statearr_15781_15822[2] = inst_15739);
(statearr_15781_15822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 10))
{var inst_15706 = (state_15764[8]);var inst_15703 = (state_15764[9]);var inst_15704 = (state_15764[10]);var inst_15705 = (state_15764[11]);var inst_15711 = cljs.core._nth.call(null,inst_15704,inst_15706);var inst_15712 = cljs.core.async.muxch_STAR_.call(null,inst_15711);var inst_15713 = cljs.core.async.close_BANG_.call(null,inst_15712);var inst_15714 = (inst_15706 + 1);var tmp15776 = inst_15703;var tmp15777 = inst_15704;var tmp15778 = inst_15705;var inst_15703__$1 = tmp15776;var inst_15704__$1 = tmp15777;var inst_15705__$1 = tmp15778;var inst_15706__$1 = inst_15714;var state_15764__$1 = (function (){var statearr_15782 = state_15764;(statearr_15782[8] = inst_15706__$1);
(statearr_15782[14] = inst_15713);
(statearr_15782[9] = inst_15703__$1);
(statearr_15782[10] = inst_15704__$1);
(statearr_15782[11] = inst_15705__$1);
return statearr_15782;
})();var statearr_15783_15823 = state_15764__$1;(statearr_15783_15823[2] = null);
(statearr_15783_15823[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 11))
{var inst_15717 = (state_15764[15]);var inst_15703 = (state_15764[9]);var inst_15717__$1 = cljs.core.seq.call(null,inst_15703);var state_15764__$1 = (function (){var statearr_15784 = state_15764;(statearr_15784[15] = inst_15717__$1);
return statearr_15784;
})();if(inst_15717__$1)
{var statearr_15785_15824 = state_15764__$1;(statearr_15785_15824[1] = 13);
} else
{var statearr_15786_15825 = state_15764__$1;(statearr_15786_15825[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 12))
{var inst_15737 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15787_15826 = state_15764__$1;(statearr_15787_15826[2] = inst_15737);
(statearr_15787_15826[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 13))
{var inst_15717 = (state_15764[15]);var inst_15719 = cljs.core.chunked_seq_QMARK_.call(null,inst_15717);var state_15764__$1 = state_15764;if(inst_15719)
{var statearr_15788_15827 = state_15764__$1;(statearr_15788_15827[1] = 16);
} else
{var statearr_15789_15828 = state_15764__$1;(statearr_15789_15828[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 14))
{var state_15764__$1 = state_15764;var statearr_15790_15829 = state_15764__$1;(statearr_15790_15829[2] = null);
(statearr_15790_15829[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 15))
{var inst_15735 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15791_15830 = state_15764__$1;(statearr_15791_15830[2] = inst_15735);
(statearr_15791_15830[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 16))
{var inst_15717 = (state_15764[15]);var inst_15721 = cljs.core.chunk_first.call(null,inst_15717);var inst_15722 = cljs.core.chunk_rest.call(null,inst_15717);var inst_15723 = cljs.core.count.call(null,inst_15721);var inst_15703 = inst_15722;var inst_15704 = inst_15721;var inst_15705 = inst_15723;var inst_15706 = 0;var state_15764__$1 = (function (){var statearr_15792 = state_15764;(statearr_15792[8] = inst_15706);
(statearr_15792[9] = inst_15703);
(statearr_15792[10] = inst_15704);
(statearr_15792[11] = inst_15705);
return statearr_15792;
})();var statearr_15793_15831 = state_15764__$1;(statearr_15793_15831[2] = null);
(statearr_15793_15831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 17))
{var inst_15717 = (state_15764[15]);var inst_15726 = cljs.core.first.call(null,inst_15717);var inst_15727 = cljs.core.async.muxch_STAR_.call(null,inst_15726);var inst_15728 = cljs.core.async.close_BANG_.call(null,inst_15727);var inst_15729 = cljs.core.next.call(null,inst_15717);var inst_15703 = inst_15729;var inst_15704 = null;var inst_15705 = 0;var inst_15706 = 0;var state_15764__$1 = (function (){var statearr_15794 = state_15764;(statearr_15794[8] = inst_15706);
(statearr_15794[16] = inst_15728);
(statearr_15794[9] = inst_15703);
(statearr_15794[10] = inst_15704);
(statearr_15794[11] = inst_15705);
return statearr_15794;
})();var statearr_15795_15832 = state_15764__$1;(statearr_15795_15832[2] = null);
(statearr_15795_15832[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 18))
{var inst_15732 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15796_15833 = state_15764__$1;(statearr_15796_15833[2] = inst_15732);
(statearr_15796_15833[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 19))
{var state_15764__$1 = state_15764;var statearr_15797_15834 = state_15764__$1;(statearr_15797_15834[2] = null);
(statearr_15797_15834[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 20))
{var state_15764__$1 = state_15764;var statearr_15798_15835 = state_15764__$1;(statearr_15798_15835[2] = null);
(statearr_15798_15835[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 21))
{var inst_15757 = (state_15764[2]);var state_15764__$1 = (function (){var statearr_15799 = state_15764;(statearr_15799[17] = inst_15757);
return statearr_15799;
})();var statearr_15800_15836 = state_15764__$1;(statearr_15800_15836[2] = null);
(statearr_15800_15836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 22))
{var inst_15754 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15801_15837 = state_15764__$1;(statearr_15801_15837[2] = inst_15754);
(statearr_15801_15837[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 23))
{var inst_15741 = (state_15764[13]);var inst_15745 = (state_15764[2]);var inst_15746 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15741);var state_15764__$1 = (function (){var statearr_15802 = state_15764;(statearr_15802[18] = inst_15745);
return statearr_15802;
})();var statearr_15803_15838 = state_15764__$1;(statearr_15803_15838[2] = inst_15746);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15764__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15765 === 24))
{var inst_15693 = (state_15764[7]);var inst_15743 = (state_15764[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15764,23,Object,null,22);var inst_15750 = cljs.core.async.muxch_STAR_.call(null,inst_15743);var state_15764__$1 = state_15764;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15764__$1,25,inst_15750,inst_15693);
} else
{if((state_val_15765 === 25))
{var inst_15752 = (state_15764[2]);var state_15764__$1 = state_15764;var statearr_15804_15839 = state_15764__$1;(statearr_15804_15839[2] = inst_15752);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15764__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15808[0] = state_machine__5548__auto__);
(statearr_15808[1] = 1);
return statearr_15808;
});
var state_machine__5548__auto____1 = (function (state_15764){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15764);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15809){if((e15809 instanceof Object))
{var ex__5551__auto__ = e15809;var statearr_15810_15840 = state_15764;(statearr_15810_15840[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15764);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15841 = state_15764;
state_15764 = G__15841;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15764){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15811 = f__5563__auto__.call(null);(statearr_15811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15812);
return statearr_15811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
,cljs.core.range.call(null,cnt));var c__5562__auto___15978 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15948){var state_val_15949 = (state_15948[1]);if((state_val_15949 === 1))
{var state_15948__$1 = state_15948;var statearr_15950_15979 = state_15948__$1;(statearr_15950_15979[2] = null);
(statearr_15950_15979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 2))
{var inst_15911 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15912 = 0;var state_15948__$1 = (function (){var statearr_15951 = state_15948;(statearr_15951[7] = inst_15911);
(statearr_15951[8] = inst_15912);
return statearr_15951;
})();var statearr_15952_15980 = state_15948__$1;(statearr_15952_15980[2] = null);
(statearr_15952_15980[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 3))
{var inst_15946 = (state_15948[2]);var state_15948__$1 = state_15948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15948__$1,inst_15946);
} else
{if((state_val_15949 === 4))
{var inst_15912 = (state_15948[8]);var inst_15914 = (inst_15912 < cnt);var state_15948__$1 = state_15948;if(cljs.core.truth_(inst_15914))
{var statearr_15953_15981 = state_15948__$1;(statearr_15953_15981[1] = 6);
} else
{var statearr_15954_15982 = state_15948__$1;(statearr_15954_15982[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 5))
{var inst_15932 = (state_15948[2]);var state_15948__$1 = (function (){var statearr_15955 = state_15948;(statearr_15955[9] = inst_15932);
return statearr_15955;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15948__$1,12,dchan);
} else
{if((state_val_15949 === 6))
{var state_15948__$1 = state_15948;var statearr_15956_15983 = state_15948__$1;(statearr_15956_15983[2] = null);
(statearr_15956_15983[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 7))
{var state_15948__$1 = state_15948;var statearr_15957_15984 = state_15948__$1;(statearr_15957_15984[2] = null);
(statearr_15957_15984[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 8))
{var inst_15930 = (state_15948[2]);var state_15948__$1 = state_15948;var statearr_15958_15985 = state_15948__$1;(statearr_15958_15985[2] = inst_15930);
(statearr_15958_15985[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 9))
{var inst_15912 = (state_15948[8]);var inst_15925 = (state_15948[2]);var inst_15926 = (inst_15912 + 1);var inst_15912__$1 = inst_15926;var state_15948__$1 = (function (){var statearr_15959 = state_15948;(statearr_15959[10] = inst_15925);
(statearr_15959[8] = inst_15912__$1);
return statearr_15959;
})();var statearr_15960_15986 = state_15948__$1;(statearr_15960_15986[2] = null);
(statearr_15960_15986[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 10))
{var inst_15916 = (state_15948[2]);var inst_15917 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15948__$1 = (function (){var statearr_15961 = state_15948;(statearr_15961[11] = inst_15916);
return statearr_15961;
})();var statearr_15962_15987 = state_15948__$1;(statearr_15962_15987[2] = inst_15917);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15948__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 11))
{var inst_15912 = (state_15948[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15948,10,Object,null,9);var inst_15921 = chs__$1.call(null,inst_15912);var inst_15922 = done.call(null,inst_15912);var inst_15923 = cljs.core.async.take_BANG_.call(null,inst_15921,inst_15922);var state_15948__$1 = state_15948;var statearr_15963_15988 = state_15948__$1;(statearr_15963_15988[2] = inst_15923);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15948__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 12))
{var inst_15934 = (state_15948[12]);var inst_15934__$1 = (state_15948[2]);var inst_15935 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15934__$1);var state_15948__$1 = (function (){var statearr_15964 = state_15948;(statearr_15964[12] = inst_15934__$1);
return statearr_15964;
})();if(cljs.core.truth_(inst_15935))
{var statearr_15965_15989 = state_15948__$1;(statearr_15965_15989[1] = 13);
} else
{var statearr_15966_15990 = state_15948__$1;(statearr_15966_15990[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 13))
{var inst_15937 = cljs.core.async.close_BANG_.call(null,out);var state_15948__$1 = state_15948;var statearr_15967_15991 = state_15948__$1;(statearr_15967_15991[2] = inst_15937);
(statearr_15967_15991[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 14))
{var inst_15934 = (state_15948[12]);var inst_15939 = cljs.core.apply.call(null,f,inst_15934);var state_15948__$1 = state_15948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15948__$1,16,out,inst_15939);
} else
{if((state_val_15949 === 15))
{var inst_15944 = (state_15948[2]);var state_15948__$1 = state_15948;var statearr_15968_15992 = state_15948__$1;(statearr_15968_15992[2] = inst_15944);
(statearr_15968_15992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15949 === 16))
{var inst_15941 = (state_15948[2]);var state_15948__$1 = (function (){var statearr_15969 = state_15948;(statearr_15969[13] = inst_15941);
return statearr_15969;
})();var statearr_15970_15993 = state_15948__$1;(statearr_15970_15993[2] = null);
(statearr_15970_15993[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15974[0] = state_machine__5548__auto__);
(statearr_15974[1] = 1);
return statearr_15974;
});
var state_machine__5548__auto____1 = (function (state_15948){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15948);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15975){if((e15975 instanceof Object))
{var ex__5551__auto__ = e15975;var statearr_15976_15994 = state_15948;(statearr_15976_15994[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15995 = state_15948;
state_15948 = G__15995;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15948){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15977 = f__5563__auto__.call(null);(statearr_15977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15978);
return statearr_15977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16103 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16079){var state_val_16080 = (state_16079[1]);if((state_val_16080 === 1))
{var inst_16050 = cljs.core.vec.call(null,chs);var inst_16051 = inst_16050;var state_16079__$1 = (function (){var statearr_16081 = state_16079;(statearr_16081[7] = inst_16051);
return statearr_16081;
})();var statearr_16082_16104 = state_16079__$1;(statearr_16082_16104[2] = null);
(statearr_16082_16104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16080 === 2))
{var inst_16051 = (state_16079[7]);var inst_16053 = cljs.core.count.call(null,inst_16051);var inst_16054 = (inst_16053 > 0);var state_16079__$1 = state_16079;if(cljs.core.truth_(inst_16054))
{var statearr_16083_16105 = state_16079__$1;(statearr_16083_16105[1] = 4);
} else
{var statearr_16084_16106 = state_16079__$1;(statearr_16084_16106[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16080 === 3))
{var inst_16077 = (state_16079[2]);var state_16079__$1 = state_16079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16079__$1,inst_16077);
} else
{if((state_val_16080 === 4))
{var inst_16051 = (state_16079[7]);var state_16079__$1 = state_16079;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16079__$1,7,inst_16051);
} else
{if((state_val_16080 === 5))
{var inst_16073 = cljs.core.async.close_BANG_.call(null,out);var state_16079__$1 = state_16079;var statearr_16085_16107 = state_16079__$1;(statearr_16085_16107[2] = inst_16073);
(statearr_16085_16107[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16080 === 6))
{var inst_16075 = (state_16079[2]);var state_16079__$1 = state_16079;var statearr_16086_16108 = state_16079__$1;(statearr_16086_16108[2] = inst_16075);
(statearr_16086_16108[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16080 === 7))
{var inst_16059 = (state_16079[8]);var inst_16058 = (state_16079[9]);var inst_16058__$1 = (state_16079[2]);var inst_16059__$1 = cljs.core.nth.call(null,inst_16058__$1,0,null);var inst_16060 = cljs.core.nth.call(null,inst_16058__$1,1,null);var inst_16061 = (inst_16059__$1 == null);var state_16079__$1 = (function (){var statearr_16087 = state_16079;(statearr_16087[10] = inst_16060);
(statearr_16087[8] = inst_16059__$1);
(statearr_16087[9] = inst_16058__$1);
return statearr_16087;
})();if(cljs.core.truth_(inst_16061))
{var statearr_16088_16109 = state_16079__$1;(statearr_16088_16109[1] = 8);
} else
{var statearr_16089_16110 = state_16079__$1;(statearr_16089_16110[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16080 === 8))
{var inst_16051 = (state_16079[7]);var inst_16060 = (state_16079[10]);var inst_16059 = (state_16079[8]);var inst_16058 = (state_16079[9]);var inst_16063 = (function (){var c = inst_16060;var v = inst_16059;var vec__16056 = inst_16058;var cs = inst_16051;return ((function (c,v,vec__16056,cs,inst_16051,inst_16060,inst_16059,inst_16058,state_val_16080){
return (function (p1__15996_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15996_SHARP_);
});
;})(c,v,vec__16056,cs,inst_16051,inst_16060,inst_16059,inst_16058,state_val_16080))
})();var inst_16064 = cljs.core.filterv.call(null,inst_16063,inst_16051);var inst_16051__$1 = inst_16064;var state_16079__$1 = (function (){var statearr_16090 = state_16079;(statearr_16090[7] = inst_16051__$1);
return statearr_16090;
})();var statearr_16091_16111 = state_16079__$1;(statearr_16091_16111[2] = null);
(statearr_16091_16111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16080 === 9))
{var inst_16059 = (state_16079[8]);var state_16079__$1 = state_16079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16079__$1,11,out,inst_16059);
} else
{if((state_val_16080 === 10))
{var inst_16071 = (state_16079[2]);var state_16079__$1 = state_16079;var statearr_16093_16112 = state_16079__$1;(statearr_16093_16112[2] = inst_16071);
(statearr_16093_16112[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16080 === 11))
{var inst_16051 = (state_16079[7]);var inst_16068 = (state_16079[2]);var tmp16092 = inst_16051;var inst_16051__$1 = tmp16092;var state_16079__$1 = (function (){var statearr_16094 = state_16079;(statearr_16094[11] = inst_16068);
(statearr_16094[7] = inst_16051__$1);
return statearr_16094;
})();var statearr_16095_16113 = state_16079__$1;(statearr_16095_16113[2] = null);
(statearr_16095_16113[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16099 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16099[0] = state_machine__5548__auto__);
(statearr_16099[1] = 1);
return statearr_16099;
});
var state_machine__5548__auto____1 = (function (state_16079){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16100){if((e16100 instanceof Object))
{var ex__5551__auto__ = e16100;var statearr_16101_16114 = state_16079;(statearr_16101_16114[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16115 = state_16079;
state_16079 = G__16115;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16079){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16102 = f__5563__auto__.call(null);(statearr_16102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16103);
return statearr_16102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16208 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16185){var state_val_16186 = (state_16185[1]);if((state_val_16186 === 1))
{var inst_16162 = 0;var state_16185__$1 = (function (){var statearr_16187 = state_16185;(statearr_16187[7] = inst_16162);
return statearr_16187;
})();var statearr_16188_16209 = state_16185__$1;(statearr_16188_16209[2] = null);
(statearr_16188_16209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16186 === 2))
{var inst_16162 = (state_16185[7]);var inst_16164 = (inst_16162 < n);var state_16185__$1 = state_16185;if(cljs.core.truth_(inst_16164))
{var statearr_16189_16210 = state_16185__$1;(statearr_16189_16210[1] = 4);
} else
{var statearr_16190_16211 = state_16185__$1;(statearr_16190_16211[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16186 === 3))
{var inst_16182 = (state_16185[2]);var inst_16183 = cljs.core.async.close_BANG_.call(null,out);var state_16185__$1 = (function (){var statearr_16191 = state_16185;(statearr_16191[8] = inst_16182);
return statearr_16191;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16185__$1,inst_16183);
} else
{if((state_val_16186 === 4))
{var state_16185__$1 = state_16185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16185__$1,7,ch);
} else
{if((state_val_16186 === 5))
{var state_16185__$1 = state_16185;var statearr_16192_16212 = state_16185__$1;(statearr_16192_16212[2] = null);
(statearr_16192_16212[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16186 === 6))
{var inst_16180 = (state_16185[2]);var state_16185__$1 = state_16185;var statearr_16193_16213 = state_16185__$1;(statearr_16193_16213[2] = inst_16180);
(statearr_16193_16213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16186 === 7))
{var inst_16167 = (state_16185[9]);var inst_16167__$1 = (state_16185[2]);var inst_16168 = (inst_16167__$1 == null);var inst_16169 = cljs.core.not.call(null,inst_16168);var state_16185__$1 = (function (){var statearr_16194 = state_16185;(statearr_16194[9] = inst_16167__$1);
return statearr_16194;
})();if(inst_16169)
{var statearr_16195_16214 = state_16185__$1;(statearr_16195_16214[1] = 8);
} else
{var statearr_16196_16215 = state_16185__$1;(statearr_16196_16215[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16186 === 8))
{var inst_16167 = (state_16185[9]);var state_16185__$1 = state_16185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16185__$1,11,out,inst_16167);
} else
{if((state_val_16186 === 9))
{var state_16185__$1 = state_16185;var statearr_16197_16216 = state_16185__$1;(statearr_16197_16216[2] = null);
(statearr_16197_16216[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16186 === 10))
{var inst_16177 = (state_16185[2]);var state_16185__$1 = state_16185;var statearr_16198_16217 = state_16185__$1;(statearr_16198_16217[2] = inst_16177);
(statearr_16198_16217[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16186 === 11))
{var inst_16162 = (state_16185[7]);var inst_16172 = (state_16185[2]);var inst_16173 = (inst_16162 + 1);var inst_16162__$1 = inst_16173;var state_16185__$1 = (function (){var statearr_16199 = state_16185;(statearr_16199[10] = inst_16172);
(statearr_16199[7] = inst_16162__$1);
return statearr_16199;
})();var statearr_16200_16218 = state_16185__$1;(statearr_16200_16218[2] = null);
(statearr_16200_16218[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16204 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16204[0] = state_machine__5548__auto__);
(statearr_16204[1] = 1);
return statearr_16204;
});
var state_machine__5548__auto____1 = (function (state_16185){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16185);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16205){if((e16205 instanceof Object))
{var ex__5551__auto__ = e16205;var statearr_16206_16219 = state_16185;(statearr_16206_16219[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16185);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16220 = state_16185;
state_16185 = G__16220;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16185){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16207 = f__5563__auto__.call(null);(statearr_16207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16208);
return statearr_16207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16317 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16292){var state_val_16293 = (state_16292[1]);if((state_val_16293 === 1))
{var inst_16269 = null;var state_16292__$1 = (function (){var statearr_16294 = state_16292;(statearr_16294[7] = inst_16269);
return statearr_16294;
})();var statearr_16295_16318 = state_16292__$1;(statearr_16295_16318[2] = null);
(statearr_16295_16318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16293 === 2))
{var state_16292__$1 = state_16292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16292__$1,4,ch);
} else
{if((state_val_16293 === 3))
{var inst_16289 = (state_16292[2]);var inst_16290 = cljs.core.async.close_BANG_.call(null,out);var state_16292__$1 = (function (){var statearr_16296 = state_16292;(statearr_16296[8] = inst_16289);
return statearr_16296;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16292__$1,inst_16290);
} else
{if((state_val_16293 === 4))
{var inst_16272 = (state_16292[9]);var inst_16272__$1 = (state_16292[2]);var inst_16273 = (inst_16272__$1 == null);var inst_16274 = cljs.core.not.call(null,inst_16273);var state_16292__$1 = (function (){var statearr_16297 = state_16292;(statearr_16297[9] = inst_16272__$1);
return statearr_16297;
})();if(inst_16274)
{var statearr_16298_16319 = state_16292__$1;(statearr_16298_16319[1] = 5);
} else
{var statearr_16299_16320 = state_16292__$1;(statearr_16299_16320[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16293 === 5))
{var inst_16269 = (state_16292[7]);var inst_16272 = (state_16292[9]);var inst_16276 = cljs.core._EQ_.call(null,inst_16272,inst_16269);var state_16292__$1 = state_16292;if(inst_16276)
{var statearr_16300_16321 = state_16292__$1;(statearr_16300_16321[1] = 8);
} else
{var statearr_16301_16322 = state_16292__$1;(statearr_16301_16322[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16293 === 6))
{var state_16292__$1 = state_16292;var statearr_16303_16323 = state_16292__$1;(statearr_16303_16323[2] = null);
(statearr_16303_16323[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16293 === 7))
{var inst_16287 = (state_16292[2]);var state_16292__$1 = state_16292;var statearr_16304_16324 = state_16292__$1;(statearr_16304_16324[2] = inst_16287);
(statearr_16304_16324[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16293 === 8))
{var inst_16269 = (state_16292[7]);var tmp16302 = inst_16269;var inst_16269__$1 = tmp16302;var state_16292__$1 = (function (){var statearr_16305 = state_16292;(statearr_16305[7] = inst_16269__$1);
return statearr_16305;
})();var statearr_16306_16325 = state_16292__$1;(statearr_16306_16325[2] = null);
(statearr_16306_16325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16293 === 9))
{var inst_16272 = (state_16292[9]);var state_16292__$1 = state_16292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16292__$1,11,out,inst_16272);
} else
{if((state_val_16293 === 10))
{var inst_16284 = (state_16292[2]);var state_16292__$1 = state_16292;var statearr_16307_16326 = state_16292__$1;(statearr_16307_16326[2] = inst_16284);
(statearr_16307_16326[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16293 === 11))
{var inst_16272 = (state_16292[9]);var inst_16281 = (state_16292[2]);var inst_16269 = inst_16272;var state_16292__$1 = (function (){var statearr_16308 = state_16292;(statearr_16308[7] = inst_16269);
(statearr_16308[10] = inst_16281);
return statearr_16308;
})();var statearr_16309_16327 = state_16292__$1;(statearr_16309_16327[2] = null);
(statearr_16309_16327[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16313 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16313[0] = state_machine__5548__auto__);
(statearr_16313[1] = 1);
return statearr_16313;
});
var state_machine__5548__auto____1 = (function (state_16292){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16292);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16314){if((e16314 instanceof Object))
{var ex__5551__auto__ = e16314;var statearr_16315_16328 = state_16292;(statearr_16315_16328[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16292);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16329 = state_16292;
state_16292 = G__16329;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16292){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16316 = f__5563__auto__.call(null);(statearr_16316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16317);
return statearr_16316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16464 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16434){var state_val_16435 = (state_16434[1]);if((state_val_16435 === 1))
{var inst_16397 = (new Array(n));var inst_16398 = inst_16397;var inst_16399 = 0;var state_16434__$1 = (function (){var statearr_16436 = state_16434;(statearr_16436[7] = inst_16398);
(statearr_16436[8] = inst_16399);
return statearr_16436;
})();var statearr_16437_16465 = state_16434__$1;(statearr_16437_16465[2] = null);
(statearr_16437_16465[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 2))
{var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16434__$1,4,ch);
} else
{if((state_val_16435 === 3))
{var inst_16432 = (state_16434[2]);var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16434__$1,inst_16432);
} else
{if((state_val_16435 === 4))
{var inst_16402 = (state_16434[9]);var inst_16402__$1 = (state_16434[2]);var inst_16403 = (inst_16402__$1 == null);var inst_16404 = cljs.core.not.call(null,inst_16403);var state_16434__$1 = (function (){var statearr_16438 = state_16434;(statearr_16438[9] = inst_16402__$1);
return statearr_16438;
})();if(inst_16404)
{var statearr_16439_16466 = state_16434__$1;(statearr_16439_16466[1] = 5);
} else
{var statearr_16440_16467 = state_16434__$1;(statearr_16440_16467[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 5))
{var inst_16398 = (state_16434[7]);var inst_16399 = (state_16434[8]);var inst_16407 = (state_16434[10]);var inst_16402 = (state_16434[9]);var inst_16406 = (inst_16398[inst_16399] = inst_16402);var inst_16407__$1 = (inst_16399 + 1);var inst_16408 = (inst_16407__$1 < n);var state_16434__$1 = (function (){var statearr_16441 = state_16434;(statearr_16441[11] = inst_16406);
(statearr_16441[10] = inst_16407__$1);
return statearr_16441;
})();if(cljs.core.truth_(inst_16408))
{var statearr_16442_16468 = state_16434__$1;(statearr_16442_16468[1] = 8);
} else
{var statearr_16443_16469 = state_16434__$1;(statearr_16443_16469[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 6))
{var inst_16399 = (state_16434[8]);var inst_16420 = (inst_16399 > 0);var state_16434__$1 = state_16434;if(cljs.core.truth_(inst_16420))
{var statearr_16445_16470 = state_16434__$1;(statearr_16445_16470[1] = 12);
} else
{var statearr_16446_16471 = state_16434__$1;(statearr_16446_16471[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 7))
{var inst_16430 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16447_16472 = state_16434__$1;(statearr_16447_16472[2] = inst_16430);
(statearr_16447_16472[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 8))
{var inst_16398 = (state_16434[7]);var inst_16407 = (state_16434[10]);var tmp16444 = inst_16398;var inst_16398__$1 = tmp16444;var inst_16399 = inst_16407;var state_16434__$1 = (function (){var statearr_16448 = state_16434;(statearr_16448[7] = inst_16398__$1);
(statearr_16448[8] = inst_16399);
return statearr_16448;
})();var statearr_16449_16473 = state_16434__$1;(statearr_16449_16473[2] = null);
(statearr_16449_16473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 9))
{var inst_16398 = (state_16434[7]);var inst_16412 = cljs.core.vec.call(null,inst_16398);var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16434__$1,11,out,inst_16412);
} else
{if((state_val_16435 === 10))
{var inst_16418 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16450_16474 = state_16434__$1;(statearr_16450_16474[2] = inst_16418);
(statearr_16450_16474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 11))
{var inst_16414 = (state_16434[2]);var inst_16415 = (new Array(n));var inst_16398 = inst_16415;var inst_16399 = 0;var state_16434__$1 = (function (){var statearr_16451 = state_16434;(statearr_16451[7] = inst_16398);
(statearr_16451[8] = inst_16399);
(statearr_16451[12] = inst_16414);
return statearr_16451;
})();var statearr_16452_16475 = state_16434__$1;(statearr_16452_16475[2] = null);
(statearr_16452_16475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 12))
{var inst_16398 = (state_16434[7]);var inst_16422 = cljs.core.vec.call(null,inst_16398);var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16434__$1,15,out,inst_16422);
} else
{if((state_val_16435 === 13))
{var state_16434__$1 = state_16434;var statearr_16453_16476 = state_16434__$1;(statearr_16453_16476[2] = null);
(statearr_16453_16476[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 14))
{var inst_16427 = (state_16434[2]);var inst_16428 = cljs.core.async.close_BANG_.call(null,out);var state_16434__$1 = (function (){var statearr_16454 = state_16434;(statearr_16454[13] = inst_16427);
return statearr_16454;
})();var statearr_16455_16477 = state_16434__$1;(statearr_16455_16477[2] = inst_16428);
(statearr_16455_16477[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16435 === 15))
{var inst_16424 = (state_16434[2]);var state_16434__$1 = state_16434;var statearr_16456_16478 = state_16434__$1;(statearr_16456_16478[2] = inst_16424);
(statearr_16456_16478[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16460[0] = state_machine__5548__auto__);
(statearr_16460[1] = 1);
return statearr_16460;
});
var state_machine__5548__auto____1 = (function (state_16434){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16434);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16461){if((e16461 instanceof Object))
{var ex__5551__auto__ = e16461;var statearr_16462_16479 = state_16434;(statearr_16462_16479[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16480 = state_16434;
state_16434 = G__16480;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16434){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16463 = f__5563__auto__.call(null);(statearr_16463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16464);
return statearr_16463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16593){var state_val_16594 = (state_16593[1]);if((state_val_16594 === 1))
{var inst_16552 = [];var inst_16553 = inst_16552;var inst_16554 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16593__$1 = (function (){var statearr_16595 = state_16593;(statearr_16595[7] = inst_16554);
(statearr_16595[8] = inst_16553);
return statearr_16595;
})();var statearr_16596_16624 = state_16593__$1;(statearr_16596_16624[2] = null);
(statearr_16596_16624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 2))
{var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16593__$1,4,ch);
} else
{if((state_val_16594 === 3))
{var inst_16591 = (state_16593[2]);var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16593__$1,inst_16591);
} else
{if((state_val_16594 === 4))
{var inst_16557 = (state_16593[9]);var inst_16557__$1 = (state_16593[2]);var inst_16558 = (inst_16557__$1 == null);var inst_16559 = cljs.core.not.call(null,inst_16558);var state_16593__$1 = (function (){var statearr_16597 = state_16593;(statearr_16597[9] = inst_16557__$1);
return statearr_16597;
})();if(inst_16559)
{var statearr_16598_16625 = state_16593__$1;(statearr_16598_16625[1] = 5);
} else
{var statearr_16599_16626 = state_16593__$1;(statearr_16599_16626[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 5))
{var inst_16557 = (state_16593[9]);var inst_16554 = (state_16593[7]);var inst_16561 = (state_16593[10]);var inst_16561__$1 = f.call(null,inst_16557);var inst_16562 = cljs.core._EQ_.call(null,inst_16561__$1,inst_16554);var inst_16563 = cljs.core.keyword_identical_QMARK_.call(null,inst_16554,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16564 = (inst_16562) || (inst_16563);var state_16593__$1 = (function (){var statearr_16600 = state_16593;(statearr_16600[10] = inst_16561__$1);
return statearr_16600;
})();if(cljs.core.truth_(inst_16564))
{var statearr_16601_16627 = state_16593__$1;(statearr_16601_16627[1] = 8);
} else
{var statearr_16602_16628 = state_16593__$1;(statearr_16602_16628[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 6))
{var inst_16553 = (state_16593[8]);var inst_16578 = inst_16553.length;var inst_16579 = (inst_16578 > 0);var state_16593__$1 = state_16593;if(cljs.core.truth_(inst_16579))
{var statearr_16604_16629 = state_16593__$1;(statearr_16604_16629[1] = 12);
} else
{var statearr_16605_16630 = state_16593__$1;(statearr_16605_16630[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 7))
{var inst_16589 = (state_16593[2]);var state_16593__$1 = state_16593;var statearr_16606_16631 = state_16593__$1;(statearr_16606_16631[2] = inst_16589);
(statearr_16606_16631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 8))
{var inst_16557 = (state_16593[9]);var inst_16553 = (state_16593[8]);var inst_16561 = (state_16593[10]);var inst_16566 = inst_16553.push(inst_16557);var tmp16603 = inst_16553;var inst_16553__$1 = tmp16603;var inst_16554 = inst_16561;var state_16593__$1 = (function (){var statearr_16607 = state_16593;(statearr_16607[7] = inst_16554);
(statearr_16607[8] = inst_16553__$1);
(statearr_16607[11] = inst_16566);
return statearr_16607;
})();var statearr_16608_16632 = state_16593__$1;(statearr_16608_16632[2] = null);
(statearr_16608_16632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 9))
{var inst_16553 = (state_16593[8]);var inst_16569 = cljs.core.vec.call(null,inst_16553);var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16593__$1,11,out,inst_16569);
} else
{if((state_val_16594 === 10))
{var inst_16576 = (state_16593[2]);var state_16593__$1 = state_16593;var statearr_16609_16633 = state_16593__$1;(statearr_16609_16633[2] = inst_16576);
(statearr_16609_16633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 11))
{var inst_16557 = (state_16593[9]);var inst_16561 = (state_16593[10]);var inst_16571 = (state_16593[2]);var inst_16572 = [];var inst_16573 = inst_16572.push(inst_16557);var inst_16553 = inst_16572;var inst_16554 = inst_16561;var state_16593__$1 = (function (){var statearr_16610 = state_16593;(statearr_16610[7] = inst_16554);
(statearr_16610[8] = inst_16553);
(statearr_16610[12] = inst_16571);
(statearr_16610[13] = inst_16573);
return statearr_16610;
})();var statearr_16611_16634 = state_16593__$1;(statearr_16611_16634[2] = null);
(statearr_16611_16634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 12))
{var inst_16553 = (state_16593[8]);var inst_16581 = cljs.core.vec.call(null,inst_16553);var state_16593__$1 = state_16593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16593__$1,15,out,inst_16581);
} else
{if((state_val_16594 === 13))
{var state_16593__$1 = state_16593;var statearr_16612_16635 = state_16593__$1;(statearr_16612_16635[2] = null);
(statearr_16612_16635[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 14))
{var inst_16586 = (state_16593[2]);var inst_16587 = cljs.core.async.close_BANG_.call(null,out);var state_16593__$1 = (function (){var statearr_16613 = state_16593;(statearr_16613[14] = inst_16586);
return statearr_16613;
})();var statearr_16614_16636 = state_16593__$1;(statearr_16614_16636[2] = inst_16587);
(statearr_16614_16636[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16594 === 15))
{var inst_16583 = (state_16593[2]);var state_16593__$1 = state_16593;var statearr_16615_16637 = state_16593__$1;(statearr_16615_16637[2] = inst_16583);
(statearr_16615_16637[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16619[0] = state_machine__5548__auto__);
(statearr_16619[1] = 1);
return statearr_16619;
});
var state_machine__5548__auto____1 = (function (state_16593){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16593);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16620){if((e16620 instanceof Object))
{var ex__5551__auto__ = e16620;var statearr_16621_16638 = state_16593;(statearr_16621_16638[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16639 = state_16593;
state_16593 = G__16639;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16593){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16622 = f__5563__auto__.call(null);(statearr_16622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16623);
return statearr_16622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
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
