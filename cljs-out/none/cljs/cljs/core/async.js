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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13997 = (function (f,fn_handler,meta13998){
this.f = f;
this.fn_handler = fn_handler;
this.meta13998 = meta13998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13997.cljs$lang$type = true;
cljs.core.async.t13997.cljs$lang$ctorStr = "cljs.core.async/t13997";
cljs.core.async.t13997.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t13997");
});
cljs.core.async.t13997.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13999){var self__ = this;
var _13999__$1 = this;return self__.meta13998;
});
cljs.core.async.t13997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13999,meta13998__$1){var self__ = this;
var _13999__$1 = this;return (new cljs.core.async.t13997(self__.f,self__.fn_handler,meta13998__$1));
});
cljs.core.async.__GT_t13997 = (function __GT_t13997(f__$1,fn_handler__$1,meta13998){return (new cljs.core.async.t13997(f__$1,fn_handler__$1,meta13998));
});
}
return (new cljs.core.async.t13997(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14001 = buff;if(G__14001)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__14001.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14001.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14001);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14001);
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
{var val_14002 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14002);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14002);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___14003 = n;var x_14004 = 0;while(true){
if((x_14004 < n__4289__auto___14003))
{(a[x_14004] = 0);
{
var G__14005 = (x_14004 + 1);
x_14004 = G__14005;
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
var G__14006 = (i + 1);
i = G__14006;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14010 = (function (flag,alt_flag,meta14011){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14011 = meta14011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14010.cljs$lang$type = true;
cljs.core.async.t14010.cljs$lang$ctorStr = "cljs.core.async/t14010";
cljs.core.async.t14010.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14010");
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14012){var self__ = this;
var _14012__$1 = this;return self__.meta14011;
});
cljs.core.async.t14010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14012,meta14011__$1){var self__ = this;
var _14012__$1 = this;return (new cljs.core.async.t14010(self__.flag,self__.alt_flag,meta14011__$1));
});
cljs.core.async.__GT_t14010 = (function __GT_t14010(flag__$1,alt_flag__$1,meta14011){return (new cljs.core.async.t14010(flag__$1,alt_flag__$1,meta14011));
});
}
return (new cljs.core.async.t14010(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14016 = (function (cb,flag,alt_handler,meta14017){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14017 = meta14017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14016.cljs$lang$type = true;
cljs.core.async.t14016.cljs$lang$ctorStr = "cljs.core.async/t14016";
cljs.core.async.t14016.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14016");
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14018){var self__ = this;
var _14018__$1 = this;return self__.meta14017;
});
cljs.core.async.t14016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14018,meta14017__$1){var self__ = this;
var _14018__$1 = this;return (new cljs.core.async.t14016(self__.cb,self__.flag,self__.alt_handler,meta14017__$1));
});
cljs.core.async.__GT_t14016 = (function __GT_t14016(cb__$1,flag__$1,alt_handler__$1,meta14017){return (new cljs.core.async.t14016(cb__$1,flag__$1,alt_handler__$1,meta14017));
});
}
return (new cljs.core.async.t14016(cb,flag,alt_handler,null));
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
return (function (p1__14019_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14019_SHARP_,port], null));
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
var G__14020 = (i + 1);
i = G__14020;
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
var alts_BANG___delegate = function (ports,p__14021){var map__14023 = p__14021;var map__14023__$1 = ((cljs.core.seq_QMARK_.call(null,map__14023))?cljs.core.apply.call(null,cljs.core.hash_map,map__14023):map__14023);var opts = map__14023__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14021 = null;if (arguments.length > 1) {
  p__14021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14021);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14024){
var ports = cljs.core.first(arglist__14024);
var p__14021 = cljs.core.rest(arglist__14024);
return alts_BANG___delegate(ports,p__14021);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14032 = (function (ch,f,map_LT_,meta14033){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14033 = meta14033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14032.cljs$lang$type = true;
cljs.core.async.t14032.cljs$lang$ctorStr = "cljs.core.async/t14032";
cljs.core.async.t14032.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14032");
});
cljs.core.async.t14032.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14032.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14032.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14032.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14035 = (function (fn1,_,meta14033,ch,f,map_LT_,meta14036){
this.fn1 = fn1;
this._ = _;
this.meta14033 = meta14033;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14036 = meta14036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14035.cljs$lang$type = true;
cljs.core.async.t14035.cljs$lang$ctorStr = "cljs.core.async/t14035";
cljs.core.async.t14035.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14035");
});
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14025_SHARP_){return f1.call(null,(((p1__14025_SHARP_ == null))?null:self__.f.call(null,p1__14025_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14037){var self__ = this;
var _14037__$1 = this;return self__.meta14036;
});
cljs.core.async.t14035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14037,meta14036__$1){var self__ = this;
var _14037__$1 = this;return (new cljs.core.async.t14035(self__.fn1,self__._,self__.meta14033,self__.ch,self__.f,self__.map_LT_,meta14036__$1));
});
cljs.core.async.__GT_t14035 = (function __GT_t14035(fn1__$1,___$2,meta14033__$1,ch__$2,f__$2,map_LT___$2,meta14036){return (new cljs.core.async.t14035(fn1__$1,___$2,meta14033__$1,ch__$2,f__$2,map_LT___$2,meta14036));
});
}
return (new cljs.core.async.t14035(fn1,___$1,self__.meta14033,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14032.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14032.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14034){var self__ = this;
var _14034__$1 = this;return self__.meta14033;
});
cljs.core.async.t14032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14034,meta14033__$1){var self__ = this;
var _14034__$1 = this;return (new cljs.core.async.t14032(self__.ch,self__.f,self__.map_LT_,meta14033__$1));
});
cljs.core.async.__GT_t14032 = (function __GT_t14032(ch__$1,f__$1,map_LT___$1,meta14033){return (new cljs.core.async.t14032(ch__$1,f__$1,map_LT___$1,meta14033));
});
}
return (new cljs.core.async.t14032(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14041 = (function (ch,f,map_GT_,meta14042){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14042 = meta14042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14041.cljs$lang$type = true;
cljs.core.async.t14041.cljs$lang$ctorStr = "cljs.core.async/t14041";
cljs.core.async.t14041.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14041");
});
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14043){var self__ = this;
var _14043__$1 = this;return self__.meta14042;
});
cljs.core.async.t14041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14043,meta14042__$1){var self__ = this;
var _14043__$1 = this;return (new cljs.core.async.t14041(self__.ch,self__.f,self__.map_GT_,meta14042__$1));
});
cljs.core.async.__GT_t14041 = (function __GT_t14041(ch__$1,f__$1,map_GT___$1,meta14042){return (new cljs.core.async.t14041(ch__$1,f__$1,map_GT___$1,meta14042));
});
}
return (new cljs.core.async.t14041(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14047 = (function (ch,p,filter_GT_,meta14048){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14048 = meta14048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14047.cljs$lang$type = true;
cljs.core.async.t14047.cljs$lang$ctorStr = "cljs.core.async/t14047";
cljs.core.async.t14047.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14047");
});
cljs.core.async.t14047.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14047.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14047.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14049){var self__ = this;
var _14049__$1 = this;return self__.meta14048;
});
cljs.core.async.t14047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14049,meta14048__$1){var self__ = this;
var _14049__$1 = this;return (new cljs.core.async.t14047(self__.ch,self__.p,self__.filter_GT_,meta14048__$1));
});
cljs.core.async.__GT_t14047 = (function __GT_t14047(ch__$1,p__$1,filter_GT___$1,meta14048){return (new cljs.core.async.t14047(ch__$1,p__$1,filter_GT___$1,meta14048));
});
}
return (new cljs.core.async.t14047(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14132 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14111){var state_val_14112 = (state_14111[1]);if((state_val_14112 === 1))
{var state_14111__$1 = state_14111;var statearr_14113_14133 = state_14111__$1;(statearr_14113_14133[2] = null);
(statearr_14113_14133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 2))
{var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14111__$1,4,ch);
} else
{if((state_val_14112 === 3))
{var inst_14109 = (state_14111[2]);var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14111__$1,inst_14109);
} else
{if((state_val_14112 === 4))
{var inst_14093 = (state_14111[7]);var inst_14093__$1 = (state_14111[2]);var inst_14094 = (inst_14093__$1 == null);var state_14111__$1 = (function (){var statearr_14114 = state_14111;(statearr_14114[7] = inst_14093__$1);
return statearr_14114;
})();if(cljs.core.truth_(inst_14094))
{var statearr_14115_14134 = state_14111__$1;(statearr_14115_14134[1] = 5);
} else
{var statearr_14116_14135 = state_14111__$1;(statearr_14116_14135[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 5))
{var inst_14096 = cljs.core.async.close_BANG_.call(null,out);var state_14111__$1 = state_14111;var statearr_14117_14136 = state_14111__$1;(statearr_14117_14136[2] = inst_14096);
(statearr_14117_14136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 6))
{var inst_14093 = (state_14111[7]);var inst_14098 = p.call(null,inst_14093);var state_14111__$1 = state_14111;if(cljs.core.truth_(inst_14098))
{var statearr_14118_14137 = state_14111__$1;(statearr_14118_14137[1] = 8);
} else
{var statearr_14119_14138 = state_14111__$1;(statearr_14119_14138[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 7))
{var inst_14107 = (state_14111[2]);var state_14111__$1 = state_14111;var statearr_14120_14139 = state_14111__$1;(statearr_14120_14139[2] = inst_14107);
(statearr_14120_14139[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 8))
{var inst_14093 = (state_14111[7]);var state_14111__$1 = state_14111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14111__$1,11,out,inst_14093);
} else
{if((state_val_14112 === 9))
{var state_14111__$1 = state_14111;var statearr_14121_14140 = state_14111__$1;(statearr_14121_14140[2] = null);
(statearr_14121_14140[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 10))
{var inst_14104 = (state_14111[2]);var state_14111__$1 = (function (){var statearr_14122 = state_14111;(statearr_14122[8] = inst_14104);
return statearr_14122;
})();var statearr_14123_14141 = state_14111__$1;(statearr_14123_14141[2] = null);
(statearr_14123_14141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14112 === 11))
{var inst_14101 = (state_14111[2]);var state_14111__$1 = state_14111;var statearr_14124_14142 = state_14111__$1;(statearr_14124_14142[2] = inst_14101);
(statearr_14124_14142[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_14128 = [null,null,null,null,null,null,null,null,null];(statearr_14128[0] = state_machine__5548__auto__);
(statearr_14128[1] = 1);
return statearr_14128;
});
var state_machine__5548__auto____1 = (function (state_14111){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14129){if((e14129 instanceof Object))
{var ex__5551__auto__ = e14129;var statearr_14130_14143 = state_14111;(statearr_14130_14143[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14144 = state_14111;
state_14111 = G__14144;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14111){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14131 = f__5563__auto__.call(null);(statearr_14131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14132);
return statearr_14131;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14296){var state_val_14297 = (state_14296[1]);if((state_val_14297 === 1))
{var state_14296__$1 = state_14296;var statearr_14298_14335 = state_14296__$1;(statearr_14298_14335[2] = null);
(statearr_14298_14335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 2))
{var state_14296__$1 = state_14296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14296__$1,4,in$);
} else
{if((state_val_14297 === 3))
{var inst_14294 = (state_14296[2]);var state_14296__$1 = state_14296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14296__$1,inst_14294);
} else
{if((state_val_14297 === 4))
{var inst_14242 = (state_14296[7]);var inst_14242__$1 = (state_14296[2]);var inst_14243 = (inst_14242__$1 == null);var state_14296__$1 = (function (){var statearr_14299 = state_14296;(statearr_14299[7] = inst_14242__$1);
return statearr_14299;
})();if(cljs.core.truth_(inst_14243))
{var statearr_14300_14336 = state_14296__$1;(statearr_14300_14336[1] = 5);
} else
{var statearr_14301_14337 = state_14296__$1;(statearr_14301_14337[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 5))
{var inst_14245 = cljs.core.async.close_BANG_.call(null,out);var state_14296__$1 = state_14296;var statearr_14302_14338 = state_14296__$1;(statearr_14302_14338[2] = inst_14245);
(statearr_14302_14338[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 6))
{var inst_14242 = (state_14296[7]);var inst_14247 = f.call(null,inst_14242);var inst_14252 = cljs.core.seq.call(null,inst_14247);var inst_14253 = inst_14252;var inst_14254 = null;var inst_14255 = 0;var inst_14256 = 0;var state_14296__$1 = (function (){var statearr_14303 = state_14296;(statearr_14303[8] = inst_14255);
(statearr_14303[9] = inst_14256);
(statearr_14303[10] = inst_14253);
(statearr_14303[11] = inst_14254);
return statearr_14303;
})();var statearr_14304_14339 = state_14296__$1;(statearr_14304_14339[2] = null);
(statearr_14304_14339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 7))
{var inst_14292 = (state_14296[2]);var state_14296__$1 = state_14296;var statearr_14305_14340 = state_14296__$1;(statearr_14305_14340[2] = inst_14292);
(statearr_14305_14340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 8))
{var inst_14255 = (state_14296[8]);var inst_14256 = (state_14296[9]);var inst_14258 = (inst_14256 < inst_14255);var inst_14259 = inst_14258;var state_14296__$1 = state_14296;if(cljs.core.truth_(inst_14259))
{var statearr_14306_14341 = state_14296__$1;(statearr_14306_14341[1] = 10);
} else
{var statearr_14307_14342 = state_14296__$1;(statearr_14307_14342[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 9))
{var inst_14289 = (state_14296[2]);var state_14296__$1 = (function (){var statearr_14308 = state_14296;(statearr_14308[12] = inst_14289);
return statearr_14308;
})();var statearr_14309_14343 = state_14296__$1;(statearr_14309_14343[2] = null);
(statearr_14309_14343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 10))
{var inst_14256 = (state_14296[9]);var inst_14254 = (state_14296[11]);var inst_14261 = cljs.core._nth.call(null,inst_14254,inst_14256);var state_14296__$1 = state_14296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14296__$1,13,out,inst_14261);
} else
{if((state_val_14297 === 11))
{var inst_14253 = (state_14296[10]);var inst_14267 = (state_14296[13]);var inst_14267__$1 = cljs.core.seq.call(null,inst_14253);var state_14296__$1 = (function (){var statearr_14313 = state_14296;(statearr_14313[13] = inst_14267__$1);
return statearr_14313;
})();if(inst_14267__$1)
{var statearr_14314_14344 = state_14296__$1;(statearr_14314_14344[1] = 14);
} else
{var statearr_14315_14345 = state_14296__$1;(statearr_14315_14345[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 12))
{var inst_14287 = (state_14296[2]);var state_14296__$1 = state_14296;var statearr_14316_14346 = state_14296__$1;(statearr_14316_14346[2] = inst_14287);
(statearr_14316_14346[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 13))
{var inst_14255 = (state_14296[8]);var inst_14256 = (state_14296[9]);var inst_14253 = (state_14296[10]);var inst_14254 = (state_14296[11]);var inst_14263 = (state_14296[2]);var inst_14264 = (inst_14256 + 1);var tmp14310 = inst_14255;var tmp14311 = inst_14253;var tmp14312 = inst_14254;var inst_14253__$1 = tmp14311;var inst_14254__$1 = tmp14312;var inst_14255__$1 = tmp14310;var inst_14256__$1 = inst_14264;var state_14296__$1 = (function (){var statearr_14317 = state_14296;(statearr_14317[8] = inst_14255__$1);
(statearr_14317[9] = inst_14256__$1);
(statearr_14317[10] = inst_14253__$1);
(statearr_14317[11] = inst_14254__$1);
(statearr_14317[14] = inst_14263);
return statearr_14317;
})();var statearr_14318_14347 = state_14296__$1;(statearr_14318_14347[2] = null);
(statearr_14318_14347[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 14))
{var inst_14267 = (state_14296[13]);var inst_14269 = cljs.core.chunked_seq_QMARK_.call(null,inst_14267);var state_14296__$1 = state_14296;if(inst_14269)
{var statearr_14319_14348 = state_14296__$1;(statearr_14319_14348[1] = 17);
} else
{var statearr_14320_14349 = state_14296__$1;(statearr_14320_14349[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 15))
{var state_14296__$1 = state_14296;var statearr_14321_14350 = state_14296__$1;(statearr_14321_14350[2] = null);
(statearr_14321_14350[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 16))
{var inst_14285 = (state_14296[2]);var state_14296__$1 = state_14296;var statearr_14322_14351 = state_14296__$1;(statearr_14322_14351[2] = inst_14285);
(statearr_14322_14351[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 17))
{var inst_14267 = (state_14296[13]);var inst_14271 = cljs.core.chunk_first.call(null,inst_14267);var inst_14272 = cljs.core.chunk_rest.call(null,inst_14267);var inst_14273 = cljs.core.count.call(null,inst_14271);var inst_14253 = inst_14272;var inst_14254 = inst_14271;var inst_14255 = inst_14273;var inst_14256 = 0;var state_14296__$1 = (function (){var statearr_14323 = state_14296;(statearr_14323[8] = inst_14255);
(statearr_14323[9] = inst_14256);
(statearr_14323[10] = inst_14253);
(statearr_14323[11] = inst_14254);
return statearr_14323;
})();var statearr_14324_14352 = state_14296__$1;(statearr_14324_14352[2] = null);
(statearr_14324_14352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 18))
{var inst_14267 = (state_14296[13]);var inst_14276 = cljs.core.first.call(null,inst_14267);var state_14296__$1 = state_14296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14296__$1,20,out,inst_14276);
} else
{if((state_val_14297 === 19))
{var inst_14282 = (state_14296[2]);var state_14296__$1 = state_14296;var statearr_14325_14353 = state_14296__$1;(statearr_14325_14353[2] = inst_14282);
(statearr_14325_14353[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14297 === 20))
{var inst_14267 = (state_14296[13]);var inst_14278 = (state_14296[2]);var inst_14279 = cljs.core.next.call(null,inst_14267);var inst_14253 = inst_14279;var inst_14254 = null;var inst_14255 = 0;var inst_14256 = 0;var state_14296__$1 = (function (){var statearr_14326 = state_14296;(statearr_14326[8] = inst_14255);
(statearr_14326[9] = inst_14256);
(statearr_14326[10] = inst_14253);
(statearr_14326[11] = inst_14254);
(statearr_14326[15] = inst_14278);
return statearr_14326;
})();var statearr_14327_14354 = state_14296__$1;(statearr_14327_14354[2] = null);
(statearr_14327_14354[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_14331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14331[0] = state_machine__5548__auto__);
(statearr_14331[1] = 1);
return statearr_14331;
});
var state_machine__5548__auto____1 = (function (state_14296){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14296);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14332){if((e14332 instanceof Object))
{var ex__5551__auto__ = e14332;var statearr_14333_14355 = state_14296;(statearr_14333_14355[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14356 = state_14296;
state_14296 = G__14356;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14296){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14334 = f__5563__auto__.call(null);(statearr_14334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14334;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___14437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14416){var state_val_14417 = (state_14416[1]);if((state_val_14417 === 1))
{var state_14416__$1 = state_14416;var statearr_14418_14438 = state_14416__$1;(statearr_14418_14438[2] = null);
(statearr_14418_14438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14417 === 2))
{var state_14416__$1 = state_14416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14416__$1,4,from);
} else
{if((state_val_14417 === 3))
{var inst_14414 = (state_14416[2]);var state_14416__$1 = state_14416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14416__$1,inst_14414);
} else
{if((state_val_14417 === 4))
{var inst_14399 = (state_14416[7]);var inst_14399__$1 = (state_14416[2]);var inst_14400 = (inst_14399__$1 == null);var state_14416__$1 = (function (){var statearr_14419 = state_14416;(statearr_14419[7] = inst_14399__$1);
return statearr_14419;
})();if(cljs.core.truth_(inst_14400))
{var statearr_14420_14439 = state_14416__$1;(statearr_14420_14439[1] = 5);
} else
{var statearr_14421_14440 = state_14416__$1;(statearr_14421_14440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14417 === 5))
{var state_14416__$1 = state_14416;if(cljs.core.truth_(close_QMARK_))
{var statearr_14422_14441 = state_14416__$1;(statearr_14422_14441[1] = 8);
} else
{var statearr_14423_14442 = state_14416__$1;(statearr_14423_14442[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14417 === 6))
{var inst_14399 = (state_14416[7]);var state_14416__$1 = state_14416;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14416__$1,11,to,inst_14399);
} else
{if((state_val_14417 === 7))
{var inst_14412 = (state_14416[2]);var state_14416__$1 = state_14416;var statearr_14424_14443 = state_14416__$1;(statearr_14424_14443[2] = inst_14412);
(statearr_14424_14443[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14417 === 8))
{var inst_14403 = cljs.core.async.close_BANG_.call(null,to);var state_14416__$1 = state_14416;var statearr_14425_14444 = state_14416__$1;(statearr_14425_14444[2] = inst_14403);
(statearr_14425_14444[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14417 === 9))
{var state_14416__$1 = state_14416;var statearr_14426_14445 = state_14416__$1;(statearr_14426_14445[2] = null);
(statearr_14426_14445[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14417 === 10))
{var inst_14406 = (state_14416[2]);var state_14416__$1 = state_14416;var statearr_14427_14446 = state_14416__$1;(statearr_14427_14446[2] = inst_14406);
(statearr_14427_14446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14417 === 11))
{var inst_14409 = (state_14416[2]);var state_14416__$1 = (function (){var statearr_14428 = state_14416;(statearr_14428[8] = inst_14409);
return statearr_14428;
})();var statearr_14429_14447 = state_14416__$1;(statearr_14429_14447[2] = null);
(statearr_14429_14447[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14433 = [null,null,null,null,null,null,null,null,null];(statearr_14433[0] = state_machine__5548__auto__);
(statearr_14433[1] = 1);
return statearr_14433;
});
var state_machine__5548__auto____1 = (function (state_14416){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14416);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14434){if((e14434 instanceof Object))
{var ex__5551__auto__ = e14434;var statearr_14435_14448 = state_14416;(statearr_14435_14448[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14449 = state_14416;
state_14416 = G__14449;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14416){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14436 = f__5563__auto__.call(null);(statearr_14436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14437);
return statearr_14436;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___14536 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14514){var state_val_14515 = (state_14514[1]);if((state_val_14515 === 1))
{var state_14514__$1 = state_14514;var statearr_14516_14537 = state_14514__$1;(statearr_14516_14537[2] = null);
(statearr_14516_14537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 2))
{var state_14514__$1 = state_14514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14514__$1,4,ch);
} else
{if((state_val_14515 === 3))
{var inst_14512 = (state_14514[2]);var state_14514__$1 = state_14514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14514__$1,inst_14512);
} else
{if((state_val_14515 === 4))
{var inst_14495 = (state_14514[7]);var inst_14495__$1 = (state_14514[2]);var inst_14496 = (inst_14495__$1 == null);var state_14514__$1 = (function (){var statearr_14517 = state_14514;(statearr_14517[7] = inst_14495__$1);
return statearr_14517;
})();if(cljs.core.truth_(inst_14496))
{var statearr_14518_14538 = state_14514__$1;(statearr_14518_14538[1] = 5);
} else
{var statearr_14519_14539 = state_14514__$1;(statearr_14519_14539[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 5))
{var inst_14498 = cljs.core.async.close_BANG_.call(null,tc);var inst_14499 = cljs.core.async.close_BANG_.call(null,fc);var state_14514__$1 = (function (){var statearr_14520 = state_14514;(statearr_14520[8] = inst_14498);
return statearr_14520;
})();var statearr_14521_14540 = state_14514__$1;(statearr_14521_14540[2] = inst_14499);
(statearr_14521_14540[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 6))
{var inst_14495 = (state_14514[7]);var inst_14501 = p.call(null,inst_14495);var state_14514__$1 = state_14514;if(cljs.core.truth_(inst_14501))
{var statearr_14522_14541 = state_14514__$1;(statearr_14522_14541[1] = 9);
} else
{var statearr_14523_14542 = state_14514__$1;(statearr_14523_14542[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 7))
{var inst_14510 = (state_14514[2]);var state_14514__$1 = state_14514;var statearr_14524_14543 = state_14514__$1;(statearr_14524_14543[2] = inst_14510);
(statearr_14524_14543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 8))
{var inst_14507 = (state_14514[2]);var state_14514__$1 = (function (){var statearr_14525 = state_14514;(statearr_14525[9] = inst_14507);
return statearr_14525;
})();var statearr_14526_14544 = state_14514__$1;(statearr_14526_14544[2] = null);
(statearr_14526_14544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 9))
{var state_14514__$1 = state_14514;var statearr_14527_14545 = state_14514__$1;(statearr_14527_14545[2] = tc);
(statearr_14527_14545[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 10))
{var state_14514__$1 = state_14514;var statearr_14528_14546 = state_14514__$1;(statearr_14528_14546[2] = fc);
(statearr_14528_14546[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14515 === 11))
{var inst_14495 = (state_14514[7]);var inst_14505 = (state_14514[2]);var state_14514__$1 = state_14514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14514__$1,8,inst_14505,inst_14495);
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
var state_machine__5548__auto____0 = (function (){var statearr_14532 = [null,null,null,null,null,null,null,null,null,null];(statearr_14532[0] = state_machine__5548__auto__);
(statearr_14532[1] = 1);
return statearr_14532;
});
var state_machine__5548__auto____1 = (function (state_14514){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14533){if((e14533 instanceof Object))
{var ex__5551__auto__ = e14533;var statearr_14534_14547 = state_14514;(statearr_14534_14547[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14548 = state_14514;
state_14514 = G__14548;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14514){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14535 = f__5563__auto__.call(null);(statearr_14535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14536);
return statearr_14535;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14595){var state_val_14596 = (state_14595[1]);if((state_val_14596 === 7))
{var inst_14591 = (state_14595[2]);var state_14595__$1 = state_14595;var statearr_14597_14613 = state_14595__$1;(statearr_14597_14613[2] = inst_14591);
(statearr_14597_14613[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 6))
{var inst_14584 = (state_14595[7]);var inst_14581 = (state_14595[8]);var inst_14588 = f.call(null,inst_14581,inst_14584);var inst_14581__$1 = inst_14588;var state_14595__$1 = (function (){var statearr_14598 = state_14595;(statearr_14598[8] = inst_14581__$1);
return statearr_14598;
})();var statearr_14599_14614 = state_14595__$1;(statearr_14599_14614[2] = null);
(statearr_14599_14614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 5))
{var inst_14581 = (state_14595[8]);var state_14595__$1 = state_14595;var statearr_14600_14615 = state_14595__$1;(statearr_14600_14615[2] = inst_14581);
(statearr_14600_14615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 4))
{var inst_14584 = (state_14595[7]);var inst_14584__$1 = (state_14595[2]);var inst_14585 = (inst_14584__$1 == null);var state_14595__$1 = (function (){var statearr_14601 = state_14595;(statearr_14601[7] = inst_14584__$1);
return statearr_14601;
})();if(cljs.core.truth_(inst_14585))
{var statearr_14602_14616 = state_14595__$1;(statearr_14602_14616[1] = 5);
} else
{var statearr_14603_14617 = state_14595__$1;(statearr_14603_14617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14596 === 3))
{var inst_14593 = (state_14595[2]);var state_14595__$1 = state_14595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14595__$1,inst_14593);
} else
{if((state_val_14596 === 2))
{var state_14595__$1 = state_14595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14595__$1,4,ch);
} else
{if((state_val_14596 === 1))
{var inst_14581 = init;var state_14595__$1 = (function (){var statearr_14604 = state_14595;(statearr_14604[8] = inst_14581);
return statearr_14604;
})();var statearr_14605_14618 = state_14595__$1;(statearr_14605_14618[2] = null);
(statearr_14605_14618[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14609 = [null,null,null,null,null,null,null,null,null];(statearr_14609[0] = state_machine__5548__auto__);
(statearr_14609[1] = 1);
return statearr_14609;
});
var state_machine__5548__auto____1 = (function (state_14595){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14595);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14610){if((e14610 instanceof Object))
{var ex__5551__auto__ = e14610;var statearr_14611_14619 = state_14595;(statearr_14611_14619[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14595);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14620 = state_14595;
state_14595 = G__14620;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14595){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14612 = f__5563__auto__.call(null);(statearr_14612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14612;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14682){var state_val_14683 = (state_14682[1]);if((state_val_14683 === 1))
{var inst_14662 = cljs.core.seq.call(null,coll);var inst_14663 = inst_14662;var state_14682__$1 = (function (){var statearr_14684 = state_14682;(statearr_14684[7] = inst_14663);
return statearr_14684;
})();var statearr_14685_14703 = state_14682__$1;(statearr_14685_14703[2] = null);
(statearr_14685_14703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14683 === 2))
{var inst_14663 = (state_14682[7]);var state_14682__$1 = state_14682;if(cljs.core.truth_(inst_14663))
{var statearr_14686_14704 = state_14682__$1;(statearr_14686_14704[1] = 4);
} else
{var statearr_14687_14705 = state_14682__$1;(statearr_14687_14705[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14683 === 3))
{var inst_14680 = (state_14682[2]);var state_14682__$1 = state_14682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14682__$1,inst_14680);
} else
{if((state_val_14683 === 4))
{var inst_14663 = (state_14682[7]);var inst_14666 = cljs.core.first.call(null,inst_14663);var state_14682__$1 = state_14682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14682__$1,7,ch,inst_14666);
} else
{if((state_val_14683 === 5))
{var state_14682__$1 = state_14682;if(cljs.core.truth_(close_QMARK_))
{var statearr_14688_14706 = state_14682__$1;(statearr_14688_14706[1] = 8);
} else
{var statearr_14689_14707 = state_14682__$1;(statearr_14689_14707[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14683 === 6))
{var inst_14678 = (state_14682[2]);var state_14682__$1 = state_14682;var statearr_14690_14708 = state_14682__$1;(statearr_14690_14708[2] = inst_14678);
(statearr_14690_14708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14683 === 7))
{var inst_14663 = (state_14682[7]);var inst_14668 = (state_14682[2]);var inst_14669 = cljs.core.next.call(null,inst_14663);var inst_14663__$1 = inst_14669;var state_14682__$1 = (function (){var statearr_14691 = state_14682;(statearr_14691[7] = inst_14663__$1);
(statearr_14691[8] = inst_14668);
return statearr_14691;
})();var statearr_14692_14709 = state_14682__$1;(statearr_14692_14709[2] = null);
(statearr_14692_14709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14683 === 8))
{var inst_14673 = cljs.core.async.close_BANG_.call(null,ch);var state_14682__$1 = state_14682;var statearr_14693_14710 = state_14682__$1;(statearr_14693_14710[2] = inst_14673);
(statearr_14693_14710[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14683 === 9))
{var state_14682__$1 = state_14682;var statearr_14694_14711 = state_14682__$1;(statearr_14694_14711[2] = null);
(statearr_14694_14711[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14683 === 10))
{var inst_14676 = (state_14682[2]);var state_14682__$1 = state_14682;var statearr_14695_14712 = state_14682__$1;(statearr_14695_14712[2] = inst_14676);
(statearr_14695_14712[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_14699 = [null,null,null,null,null,null,null,null,null];(statearr_14699[0] = state_machine__5548__auto__);
(statearr_14699[1] = 1);
return statearr_14699;
});
var state_machine__5548__auto____1 = (function (state_14682){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14682);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14700){if((e14700 instanceof Object))
{var ex__5551__auto__ = e14700;var statearr_14701_14713 = state_14682;(statearr_14701_14713[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14714 = state_14682;
state_14682 = G__14714;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14682){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14702 = f__5563__auto__.call(null);(statearr_14702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14702;
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
cljs.core.async.Mux = (function (){var obj14716 = {};return obj14716;
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
cljs.core.async.Mult = (function (){var obj14718 = {};return obj14718;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14942 = (function (cs,ch,mult,meta14943){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14943 = meta14943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14942.cljs$lang$type = true;
cljs.core.async.t14942.cljs$lang$ctorStr = "cljs.core.async/t14942";
cljs.core.async.t14942.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14942");
});})(cs))
;
cljs.core.async.t14942.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14942.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14942.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14942.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14942.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14944){var self__ = this;
var _14944__$1 = this;return self__.meta14943;
});})(cs))
;
cljs.core.async.t14942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14944,meta14943__$1){var self__ = this;
var _14944__$1 = this;return (new cljs.core.async.t14942(self__.cs,self__.ch,self__.mult,meta14943__$1));
});})(cs))
;
cljs.core.async.__GT_t14942 = ((function (cs){
return (function __GT_t14942(cs__$1,ch__$1,mult__$1,meta14943){return (new cljs.core.async.t14942(cs__$1,ch__$1,mult__$1,meta14943));
});})(cs))
;
}
return (new cljs.core.async.t14942(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___15165 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15079){var state_val_15080 = (state_15079[1]);if((state_val_15080 === 32))
{var inst_14947 = (state_15079[7]);var inst_15023 = (state_15079[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15079,31,Object,null,30);var inst_15030 = cljs.core.async.put_BANG_.call(null,inst_15023,inst_14947,done);var state_15079__$1 = state_15079;var statearr_15081_15166 = state_15079__$1;(statearr_15081_15166[2] = inst_15030);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15079__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 1))
{var state_15079__$1 = state_15079;var statearr_15082_15167 = state_15079__$1;(statearr_15082_15167[2] = null);
(statearr_15082_15167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 33))
{var inst_15036 = (state_15079[9]);var inst_15038 = cljs.core.chunked_seq_QMARK_.call(null,inst_15036);var state_15079__$1 = state_15079;if(inst_15038)
{var statearr_15083_15168 = state_15079__$1;(statearr_15083_15168[1] = 36);
} else
{var statearr_15084_15169 = state_15079__$1;(statearr_15084_15169[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 2))
{var state_15079__$1 = state_15079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15079__$1,4,ch);
} else
{if((state_val_15080 === 34))
{var state_15079__$1 = state_15079;var statearr_15085_15170 = state_15079__$1;(statearr_15085_15170[2] = null);
(statearr_15085_15170[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 3))
{var inst_15077 = (state_15079[2]);var state_15079__$1 = state_15079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15079__$1,inst_15077);
} else
{if((state_val_15080 === 35))
{var inst_15061 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15086_15171 = state_15079__$1;(statearr_15086_15171[2] = inst_15061);
(statearr_15086_15171[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 4))
{var inst_14947 = (state_15079[7]);var inst_14947__$1 = (state_15079[2]);var inst_14948 = (inst_14947__$1 == null);var state_15079__$1 = (function (){var statearr_15087 = state_15079;(statearr_15087[7] = inst_14947__$1);
return statearr_15087;
})();if(cljs.core.truth_(inst_14948))
{var statearr_15088_15172 = state_15079__$1;(statearr_15088_15172[1] = 5);
} else
{var statearr_15089_15173 = state_15079__$1;(statearr_15089_15173[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 36))
{var inst_15036 = (state_15079[9]);var inst_15040 = cljs.core.chunk_first.call(null,inst_15036);var inst_15041 = cljs.core.chunk_rest.call(null,inst_15036);var inst_15042 = cljs.core.count.call(null,inst_15040);var inst_15015 = inst_15041;var inst_15016 = inst_15040;var inst_15017 = inst_15042;var inst_15018 = 0;var state_15079__$1 = (function (){var statearr_15090 = state_15079;(statearr_15090[10] = inst_15015);
(statearr_15090[11] = inst_15018);
(statearr_15090[12] = inst_15017);
(statearr_15090[13] = inst_15016);
return statearr_15090;
})();var statearr_15091_15174 = state_15079__$1;(statearr_15091_15174[2] = null);
(statearr_15091_15174[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 5))
{var inst_14954 = cljs.core.deref.call(null,cs);var inst_14955 = cljs.core.seq.call(null,inst_14954);var inst_14956 = inst_14955;var inst_14957 = null;var inst_14958 = 0;var inst_14959 = 0;var state_15079__$1 = (function (){var statearr_15092 = state_15079;(statearr_15092[14] = inst_14956);
(statearr_15092[15] = inst_14957);
(statearr_15092[16] = inst_14959);
(statearr_15092[17] = inst_14958);
return statearr_15092;
})();var statearr_15093_15175 = state_15079__$1;(statearr_15093_15175[2] = null);
(statearr_15093_15175[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 37))
{var inst_15036 = (state_15079[9]);var inst_15045 = cljs.core.first.call(null,inst_15036);var state_15079__$1 = (function (){var statearr_15094 = state_15079;(statearr_15094[18] = inst_15045);
return statearr_15094;
})();var statearr_15095_15176 = state_15079__$1;(statearr_15095_15176[2] = null);
(statearr_15095_15176[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 6))
{var inst_15007 = (state_15079[19]);var inst_15006 = cljs.core.deref.call(null,cs);var inst_15007__$1 = cljs.core.keys.call(null,inst_15006);var inst_15008 = cljs.core.count.call(null,inst_15007__$1);var inst_15009 = cljs.core.reset_BANG_.call(null,dctr,inst_15008);var inst_15014 = cljs.core.seq.call(null,inst_15007__$1);var inst_15015 = inst_15014;var inst_15016 = null;var inst_15017 = 0;var inst_15018 = 0;var state_15079__$1 = (function (){var statearr_15096 = state_15079;(statearr_15096[10] = inst_15015);
(statearr_15096[20] = inst_15009);
(statearr_15096[11] = inst_15018);
(statearr_15096[12] = inst_15017);
(statearr_15096[13] = inst_15016);
(statearr_15096[19] = inst_15007__$1);
return statearr_15096;
})();var statearr_15097_15177 = state_15079__$1;(statearr_15097_15177[2] = null);
(statearr_15097_15177[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 38))
{var inst_15058 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15098_15178 = state_15079__$1;(statearr_15098_15178[2] = inst_15058);
(statearr_15098_15178[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 7))
{var inst_15075 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15099_15179 = state_15079__$1;(statearr_15099_15179[2] = inst_15075);
(statearr_15099_15179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 39))
{var inst_15036 = (state_15079[9]);var inst_15054 = (state_15079[2]);var inst_15055 = cljs.core.next.call(null,inst_15036);var inst_15015 = inst_15055;var inst_15016 = null;var inst_15017 = 0;var inst_15018 = 0;var state_15079__$1 = (function (){var statearr_15100 = state_15079;(statearr_15100[10] = inst_15015);
(statearr_15100[21] = inst_15054);
(statearr_15100[11] = inst_15018);
(statearr_15100[12] = inst_15017);
(statearr_15100[13] = inst_15016);
return statearr_15100;
})();var statearr_15101_15180 = state_15079__$1;(statearr_15101_15180[2] = null);
(statearr_15101_15180[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 8))
{var inst_14959 = (state_15079[16]);var inst_14958 = (state_15079[17]);var inst_14961 = (inst_14959 < inst_14958);var inst_14962 = inst_14961;var state_15079__$1 = state_15079;if(cljs.core.truth_(inst_14962))
{var statearr_15102_15181 = state_15079__$1;(statearr_15102_15181[1] = 10);
} else
{var statearr_15103_15182 = state_15079__$1;(statearr_15103_15182[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 40))
{var inst_15045 = (state_15079[18]);var inst_15046 = (state_15079[2]);var inst_15047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15048 = cljs.core.async.untap_STAR_.call(null,m,inst_15045);var state_15079__$1 = (function (){var statearr_15104 = state_15079;(statearr_15104[22] = inst_15047);
(statearr_15104[23] = inst_15046);
return statearr_15104;
})();var statearr_15105_15183 = state_15079__$1;(statearr_15105_15183[2] = inst_15048);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15079__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 9))
{var inst_15004 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15106_15184 = state_15079__$1;(statearr_15106_15184[2] = inst_15004);
(statearr_15106_15184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 41))
{var inst_14947 = (state_15079[7]);var inst_15045 = (state_15079[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15079,40,Object,null,39);var inst_15052 = cljs.core.async.put_BANG_.call(null,inst_15045,inst_14947,done);var state_15079__$1 = state_15079;var statearr_15107_15185 = state_15079__$1;(statearr_15107_15185[2] = inst_15052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15079__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 10))
{var inst_14957 = (state_15079[15]);var inst_14959 = (state_15079[16]);var inst_14965 = cljs.core._nth.call(null,inst_14957,inst_14959);var inst_14966 = cljs.core.nth.call(null,inst_14965,0,null);var inst_14967 = cljs.core.nth.call(null,inst_14965,1,null);var state_15079__$1 = (function (){var statearr_15108 = state_15079;(statearr_15108[24] = inst_14966);
return statearr_15108;
})();if(cljs.core.truth_(inst_14967))
{var statearr_15109_15186 = state_15079__$1;(statearr_15109_15186[1] = 13);
} else
{var statearr_15110_15187 = state_15079__$1;(statearr_15110_15187[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 42))
{var state_15079__$1 = state_15079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15079__$1,45,dchan);
} else
{if((state_val_15080 === 11))
{var inst_14956 = (state_15079[14]);var inst_14976 = (state_15079[25]);var inst_14976__$1 = cljs.core.seq.call(null,inst_14956);var state_15079__$1 = (function (){var statearr_15111 = state_15079;(statearr_15111[25] = inst_14976__$1);
return statearr_15111;
})();if(inst_14976__$1)
{var statearr_15112_15188 = state_15079__$1;(statearr_15112_15188[1] = 16);
} else
{var statearr_15113_15189 = state_15079__$1;(statearr_15113_15189[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 43))
{var state_15079__$1 = state_15079;var statearr_15114_15190 = state_15079__$1;(statearr_15114_15190[2] = null);
(statearr_15114_15190[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 12))
{var inst_15002 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15115_15191 = state_15079__$1;(statearr_15115_15191[2] = inst_15002);
(statearr_15115_15191[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 44))
{var inst_15072 = (state_15079[2]);var state_15079__$1 = (function (){var statearr_15116 = state_15079;(statearr_15116[26] = inst_15072);
return statearr_15116;
})();var statearr_15117_15192 = state_15079__$1;(statearr_15117_15192[2] = null);
(statearr_15117_15192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 13))
{var inst_14966 = (state_15079[24]);var inst_14969 = cljs.core.async.close_BANG_.call(null,inst_14966);var state_15079__$1 = state_15079;var statearr_15118_15193 = state_15079__$1;(statearr_15118_15193[2] = inst_14969);
(statearr_15118_15193[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 45))
{var inst_15069 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15122_15194 = state_15079__$1;(statearr_15122_15194[2] = inst_15069);
(statearr_15122_15194[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 14))
{var state_15079__$1 = state_15079;var statearr_15123_15195 = state_15079__$1;(statearr_15123_15195[2] = null);
(statearr_15123_15195[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 15))
{var inst_14956 = (state_15079[14]);var inst_14957 = (state_15079[15]);var inst_14959 = (state_15079[16]);var inst_14958 = (state_15079[17]);var inst_14972 = (state_15079[2]);var inst_14973 = (inst_14959 + 1);var tmp15119 = inst_14956;var tmp15120 = inst_14957;var tmp15121 = inst_14958;var inst_14956__$1 = tmp15119;var inst_14957__$1 = tmp15120;var inst_14958__$1 = tmp15121;var inst_14959__$1 = inst_14973;var state_15079__$1 = (function (){var statearr_15124 = state_15079;(statearr_15124[27] = inst_14972);
(statearr_15124[14] = inst_14956__$1);
(statearr_15124[15] = inst_14957__$1);
(statearr_15124[16] = inst_14959__$1);
(statearr_15124[17] = inst_14958__$1);
return statearr_15124;
})();var statearr_15125_15196 = state_15079__$1;(statearr_15125_15196[2] = null);
(statearr_15125_15196[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 16))
{var inst_14976 = (state_15079[25]);var inst_14978 = cljs.core.chunked_seq_QMARK_.call(null,inst_14976);var state_15079__$1 = state_15079;if(inst_14978)
{var statearr_15126_15197 = state_15079__$1;(statearr_15126_15197[1] = 19);
} else
{var statearr_15127_15198 = state_15079__$1;(statearr_15127_15198[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 17))
{var state_15079__$1 = state_15079;var statearr_15128_15199 = state_15079__$1;(statearr_15128_15199[2] = null);
(statearr_15128_15199[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 18))
{var inst_15000 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15129_15200 = state_15079__$1;(statearr_15129_15200[2] = inst_15000);
(statearr_15129_15200[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 19))
{var inst_14976 = (state_15079[25]);var inst_14980 = cljs.core.chunk_first.call(null,inst_14976);var inst_14981 = cljs.core.chunk_rest.call(null,inst_14976);var inst_14982 = cljs.core.count.call(null,inst_14980);var inst_14956 = inst_14981;var inst_14957 = inst_14980;var inst_14958 = inst_14982;var inst_14959 = 0;var state_15079__$1 = (function (){var statearr_15130 = state_15079;(statearr_15130[14] = inst_14956);
(statearr_15130[15] = inst_14957);
(statearr_15130[16] = inst_14959);
(statearr_15130[17] = inst_14958);
return statearr_15130;
})();var statearr_15131_15201 = state_15079__$1;(statearr_15131_15201[2] = null);
(statearr_15131_15201[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 20))
{var inst_14976 = (state_15079[25]);var inst_14986 = cljs.core.first.call(null,inst_14976);var inst_14987 = cljs.core.nth.call(null,inst_14986,0,null);var inst_14988 = cljs.core.nth.call(null,inst_14986,1,null);var state_15079__$1 = (function (){var statearr_15132 = state_15079;(statearr_15132[28] = inst_14987);
return statearr_15132;
})();if(cljs.core.truth_(inst_14988))
{var statearr_15133_15202 = state_15079__$1;(statearr_15133_15202[1] = 22);
} else
{var statearr_15134_15203 = state_15079__$1;(statearr_15134_15203[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 21))
{var inst_14997 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15135_15204 = state_15079__$1;(statearr_15135_15204[2] = inst_14997);
(statearr_15135_15204[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 22))
{var inst_14987 = (state_15079[28]);var inst_14990 = cljs.core.async.close_BANG_.call(null,inst_14987);var state_15079__$1 = state_15079;var statearr_15136_15205 = state_15079__$1;(statearr_15136_15205[2] = inst_14990);
(statearr_15136_15205[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 23))
{var state_15079__$1 = state_15079;var statearr_15137_15206 = state_15079__$1;(statearr_15137_15206[2] = null);
(statearr_15137_15206[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 24))
{var inst_14976 = (state_15079[25]);var inst_14993 = (state_15079[2]);var inst_14994 = cljs.core.next.call(null,inst_14976);var inst_14956 = inst_14994;var inst_14957 = null;var inst_14958 = 0;var inst_14959 = 0;var state_15079__$1 = (function (){var statearr_15138 = state_15079;(statearr_15138[14] = inst_14956);
(statearr_15138[15] = inst_14957);
(statearr_15138[16] = inst_14959);
(statearr_15138[17] = inst_14958);
(statearr_15138[29] = inst_14993);
return statearr_15138;
})();var statearr_15139_15207 = state_15079__$1;(statearr_15139_15207[2] = null);
(statearr_15139_15207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 25))
{var inst_15018 = (state_15079[11]);var inst_15017 = (state_15079[12]);var inst_15020 = (inst_15018 < inst_15017);var inst_15021 = inst_15020;var state_15079__$1 = state_15079;if(cljs.core.truth_(inst_15021))
{var statearr_15140_15208 = state_15079__$1;(statearr_15140_15208[1] = 27);
} else
{var statearr_15141_15209 = state_15079__$1;(statearr_15141_15209[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 26))
{var inst_15007 = (state_15079[19]);var inst_15065 = (state_15079[2]);var inst_15066 = cljs.core.seq.call(null,inst_15007);var state_15079__$1 = (function (){var statearr_15142 = state_15079;(statearr_15142[30] = inst_15065);
return statearr_15142;
})();if(inst_15066)
{var statearr_15143_15210 = state_15079__$1;(statearr_15143_15210[1] = 42);
} else
{var statearr_15144_15211 = state_15079__$1;(statearr_15144_15211[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 27))
{var inst_15018 = (state_15079[11]);var inst_15016 = (state_15079[13]);var inst_15023 = cljs.core._nth.call(null,inst_15016,inst_15018);var state_15079__$1 = (function (){var statearr_15145 = state_15079;(statearr_15145[8] = inst_15023);
return statearr_15145;
})();var statearr_15146_15212 = state_15079__$1;(statearr_15146_15212[2] = null);
(statearr_15146_15212[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 28))
{var inst_15015 = (state_15079[10]);var inst_15036 = (state_15079[9]);var inst_15036__$1 = cljs.core.seq.call(null,inst_15015);var state_15079__$1 = (function (){var statearr_15150 = state_15079;(statearr_15150[9] = inst_15036__$1);
return statearr_15150;
})();if(inst_15036__$1)
{var statearr_15151_15213 = state_15079__$1;(statearr_15151_15213[1] = 33);
} else
{var statearr_15152_15214 = state_15079__$1;(statearr_15152_15214[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 29))
{var inst_15063 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15153_15215 = state_15079__$1;(statearr_15153_15215[2] = inst_15063);
(statearr_15153_15215[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 30))
{var inst_15015 = (state_15079[10]);var inst_15018 = (state_15079[11]);var inst_15017 = (state_15079[12]);var inst_15016 = (state_15079[13]);var inst_15032 = (state_15079[2]);var inst_15033 = (inst_15018 + 1);var tmp15147 = inst_15015;var tmp15148 = inst_15017;var tmp15149 = inst_15016;var inst_15015__$1 = tmp15147;var inst_15016__$1 = tmp15149;var inst_15017__$1 = tmp15148;var inst_15018__$1 = inst_15033;var state_15079__$1 = (function (){var statearr_15154 = state_15079;(statearr_15154[10] = inst_15015__$1);
(statearr_15154[11] = inst_15018__$1);
(statearr_15154[12] = inst_15017__$1);
(statearr_15154[13] = inst_15016__$1);
(statearr_15154[31] = inst_15032);
return statearr_15154;
})();var statearr_15155_15216 = state_15079__$1;(statearr_15155_15216[2] = null);
(statearr_15155_15216[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 31))
{var inst_15023 = (state_15079[8]);var inst_15024 = (state_15079[2]);var inst_15025 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15026 = cljs.core.async.untap_STAR_.call(null,m,inst_15023);var state_15079__$1 = (function (){var statearr_15156 = state_15079;(statearr_15156[32] = inst_15025);
(statearr_15156[33] = inst_15024);
return statearr_15156;
})();var statearr_15157_15217 = state_15079__$1;(statearr_15157_15217[2] = inst_15026);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15079__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15161[0] = state_machine__5548__auto__);
(statearr_15161[1] = 1);
return statearr_15161;
});
var state_machine__5548__auto____1 = (function (state_15079){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15162){if((e15162 instanceof Object))
{var ex__5551__auto__ = e15162;var statearr_15163_15218 = state_15079;(statearr_15163_15218[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15219 = state_15079;
state_15079 = G__15219;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15079){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15164 = f__5563__auto__.call(null);(statearr_15164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15165);
return statearr_15164;
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
cljs.core.async.Mix = (function (){var obj15221 = {};return obj15221;
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
;var m = (function (){if(typeof cljs.core.async.t15331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15331 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15332){
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
this.meta15332 = meta15332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15331.cljs$lang$type = true;
cljs.core.async.t15331.cljs$lang$ctorStr = "cljs.core.async/t15331";
cljs.core.async.t15331.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15331");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15331.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15333){var self__ = this;
var _15333__$1 = this;return self__.meta15332;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15333,meta15332__$1){var self__ = this;
var _15333__$1 = this;return (new cljs.core.async.t15331(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15332__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15331 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15331(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15332){return (new cljs.core.async.t15331(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15332));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15331(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___15440 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15398){var state_val_15399 = (state_15398[1]);if((state_val_15399 === 1))
{var inst_15337 = (state_15398[7]);var inst_15337__$1 = calc_state.call(null);var inst_15338 = cljs.core.seq_QMARK_.call(null,inst_15337__$1);var state_15398__$1 = (function (){var statearr_15400 = state_15398;(statearr_15400[7] = inst_15337__$1);
return statearr_15400;
})();if(inst_15338)
{var statearr_15401_15441 = state_15398__$1;(statearr_15401_15441[1] = 2);
} else
{var statearr_15402_15442 = state_15398__$1;(statearr_15402_15442[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 2))
{var inst_15337 = (state_15398[7]);var inst_15340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15337);var state_15398__$1 = state_15398;var statearr_15403_15443 = state_15398__$1;(statearr_15403_15443[2] = inst_15340);
(statearr_15403_15443[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 3))
{var inst_15337 = (state_15398[7]);var state_15398__$1 = state_15398;var statearr_15404_15444 = state_15398__$1;(statearr_15404_15444[2] = inst_15337);
(statearr_15404_15444[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 4))
{var inst_15337 = (state_15398[7]);var inst_15343 = (state_15398[2]);var inst_15344 = cljs.core.get.call(null,inst_15343,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15345 = cljs.core.get.call(null,inst_15343,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15346 = cljs.core.get.call(null,inst_15343,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15347 = inst_15337;var state_15398__$1 = (function (){var statearr_15405 = state_15398;(statearr_15405[8] = inst_15347);
(statearr_15405[9] = inst_15346);
(statearr_15405[10] = inst_15344);
(statearr_15405[11] = inst_15345);
return statearr_15405;
})();var statearr_15406_15445 = state_15398__$1;(statearr_15406_15445[2] = null);
(statearr_15406_15445[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 5))
{var inst_15347 = (state_15398[8]);var inst_15350 = cljs.core.seq_QMARK_.call(null,inst_15347);var state_15398__$1 = state_15398;if(inst_15350)
{var statearr_15407_15446 = state_15398__$1;(statearr_15407_15446[1] = 7);
} else
{var statearr_15408_15447 = state_15398__$1;(statearr_15408_15447[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 6))
{var inst_15396 = (state_15398[2]);var state_15398__$1 = state_15398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15398__$1,inst_15396);
} else
{if((state_val_15399 === 7))
{var inst_15347 = (state_15398[8]);var inst_15352 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15347);var state_15398__$1 = state_15398;var statearr_15409_15448 = state_15398__$1;(statearr_15409_15448[2] = inst_15352);
(statearr_15409_15448[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 8))
{var inst_15347 = (state_15398[8]);var state_15398__$1 = state_15398;var statearr_15410_15449 = state_15398__$1;(statearr_15410_15449[2] = inst_15347);
(statearr_15410_15449[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 9))
{var inst_15355 = (state_15398[12]);var inst_15355__$1 = (state_15398[2]);var inst_15356 = cljs.core.get.call(null,inst_15355__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15357 = cljs.core.get.call(null,inst_15355__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15358 = cljs.core.get.call(null,inst_15355__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15398__$1 = (function (){var statearr_15411 = state_15398;(statearr_15411[12] = inst_15355__$1);
(statearr_15411[13] = inst_15358);
(statearr_15411[14] = inst_15357);
return statearr_15411;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15398__$1,10,inst_15356);
} else
{if((state_val_15399 === 10))
{var inst_15363 = (state_15398[15]);var inst_15362 = (state_15398[16]);var inst_15361 = (state_15398[2]);var inst_15362__$1 = cljs.core.nth.call(null,inst_15361,0,null);var inst_15363__$1 = cljs.core.nth.call(null,inst_15361,1,null);var inst_15364 = (inst_15362__$1 == null);var inst_15365 = cljs.core._EQ_.call(null,inst_15363__$1,change);var inst_15366 = (inst_15364) || (inst_15365);var state_15398__$1 = (function (){var statearr_15412 = state_15398;(statearr_15412[15] = inst_15363__$1);
(statearr_15412[16] = inst_15362__$1);
return statearr_15412;
})();if(cljs.core.truth_(inst_15366))
{var statearr_15413_15450 = state_15398__$1;(statearr_15413_15450[1] = 11);
} else
{var statearr_15414_15451 = state_15398__$1;(statearr_15414_15451[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 11))
{var inst_15362 = (state_15398[16]);var inst_15368 = (inst_15362 == null);var state_15398__$1 = state_15398;if(cljs.core.truth_(inst_15368))
{var statearr_15415_15452 = state_15398__$1;(statearr_15415_15452[1] = 14);
} else
{var statearr_15416_15453 = state_15398__$1;(statearr_15416_15453[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 12))
{var inst_15377 = (state_15398[17]);var inst_15358 = (state_15398[13]);var inst_15363 = (state_15398[15]);var inst_15377__$1 = inst_15358.call(null,inst_15363);var state_15398__$1 = (function (){var statearr_15417 = state_15398;(statearr_15417[17] = inst_15377__$1);
return statearr_15417;
})();if(cljs.core.truth_(inst_15377__$1))
{var statearr_15418_15454 = state_15398__$1;(statearr_15418_15454[1] = 17);
} else
{var statearr_15419_15455 = state_15398__$1;(statearr_15419_15455[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 13))
{var inst_15394 = (state_15398[2]);var state_15398__$1 = state_15398;var statearr_15420_15456 = state_15398__$1;(statearr_15420_15456[2] = inst_15394);
(statearr_15420_15456[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 14))
{var inst_15363 = (state_15398[15]);var inst_15370 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15363);var state_15398__$1 = state_15398;var statearr_15421_15457 = state_15398__$1;(statearr_15421_15457[2] = inst_15370);
(statearr_15421_15457[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 15))
{var state_15398__$1 = state_15398;var statearr_15422_15458 = state_15398__$1;(statearr_15422_15458[2] = null);
(statearr_15422_15458[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 16))
{var inst_15373 = (state_15398[2]);var inst_15374 = calc_state.call(null);var inst_15347 = inst_15374;var state_15398__$1 = (function (){var statearr_15423 = state_15398;(statearr_15423[8] = inst_15347);
(statearr_15423[18] = inst_15373);
return statearr_15423;
})();var statearr_15424_15459 = state_15398__$1;(statearr_15424_15459[2] = null);
(statearr_15424_15459[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 17))
{var inst_15377 = (state_15398[17]);var state_15398__$1 = state_15398;var statearr_15425_15460 = state_15398__$1;(statearr_15425_15460[2] = inst_15377);
(statearr_15425_15460[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 18))
{var inst_15358 = (state_15398[13]);var inst_15363 = (state_15398[15]);var inst_15357 = (state_15398[14]);var inst_15380 = cljs.core.empty_QMARK_.call(null,inst_15358);var inst_15381 = inst_15357.call(null,inst_15363);var inst_15382 = cljs.core.not.call(null,inst_15381);var inst_15383 = (inst_15380) && (inst_15382);var state_15398__$1 = state_15398;var statearr_15426_15461 = state_15398__$1;(statearr_15426_15461[2] = inst_15383);
(statearr_15426_15461[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 19))
{var inst_15385 = (state_15398[2]);var state_15398__$1 = state_15398;if(cljs.core.truth_(inst_15385))
{var statearr_15427_15462 = state_15398__$1;(statearr_15427_15462[1] = 20);
} else
{var statearr_15428_15463 = state_15398__$1;(statearr_15428_15463[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 20))
{var inst_15362 = (state_15398[16]);var state_15398__$1 = state_15398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15398__$1,23,out,inst_15362);
} else
{if((state_val_15399 === 21))
{var state_15398__$1 = state_15398;var statearr_15429_15464 = state_15398__$1;(statearr_15429_15464[2] = null);
(statearr_15429_15464[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 22))
{var inst_15355 = (state_15398[12]);var inst_15391 = (state_15398[2]);var inst_15347 = inst_15355;var state_15398__$1 = (function (){var statearr_15430 = state_15398;(statearr_15430[8] = inst_15347);
(statearr_15430[19] = inst_15391);
return statearr_15430;
})();var statearr_15431_15465 = state_15398__$1;(statearr_15431_15465[2] = null);
(statearr_15431_15465[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15399 === 23))
{var inst_15388 = (state_15398[2]);var state_15398__$1 = state_15398;var statearr_15432_15466 = state_15398__$1;(statearr_15432_15466[2] = inst_15388);
(statearr_15432_15466[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_15436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15436[0] = state_machine__5548__auto__);
(statearr_15436[1] = 1);
return statearr_15436;
});
var state_machine__5548__auto____1 = (function (state_15398){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15398);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15437){if((e15437 instanceof Object))
{var ex__5551__auto__ = e15437;var statearr_15438_15467 = state_15398;(statearr_15438_15467[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15468 = state_15398;
state_15398 = G__15468;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15398){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15439 = f__5563__auto__.call(null);(statearr_15439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15440);
return statearr_15439;
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
cljs.core.async.Pub = (function (){var obj15470 = {};return obj15470;
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
return (function (p1__15471_SHARP_){if(cljs.core.truth_(p1__15471_SHARP_.call(null,topic)))
{return p1__15471_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15471_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15596 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15597){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15597 = meta15597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15596.cljs$lang$type = true;
cljs.core.async.t15596.cljs$lang$ctorStr = "cljs.core.async/t15596";
cljs.core.async.t15596.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15596");
});})(mults,ensure_mult))
;
cljs.core.async.t15596.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15596.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15596.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15596.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15596.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15598){var self__ = this;
var _15598__$1 = this;return self__.meta15597;
});})(mults,ensure_mult))
;
cljs.core.async.t15596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15598,meta15597__$1){var self__ = this;
var _15598__$1 = this;return (new cljs.core.async.t15596(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15597__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15596 = ((function (mults,ensure_mult){
return (function __GT_t15596(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15597){return (new cljs.core.async.t15596(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15597));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15596(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___15720 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15672){var state_val_15673 = (state_15672[1]);if((state_val_15673 === 1))
{var state_15672__$1 = state_15672;var statearr_15674_15721 = state_15672__$1;(statearr_15674_15721[2] = null);
(statearr_15674_15721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 2))
{var state_15672__$1 = state_15672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15672__$1,4,ch);
} else
{if((state_val_15673 === 3))
{var inst_15670 = (state_15672[2]);var state_15672__$1 = state_15672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15672__$1,inst_15670);
} else
{if((state_val_15673 === 4))
{var inst_15601 = (state_15672[7]);var inst_15601__$1 = (state_15672[2]);var inst_15602 = (inst_15601__$1 == null);var state_15672__$1 = (function (){var statearr_15675 = state_15672;(statearr_15675[7] = inst_15601__$1);
return statearr_15675;
})();if(cljs.core.truth_(inst_15602))
{var statearr_15676_15722 = state_15672__$1;(statearr_15676_15722[1] = 5);
} else
{var statearr_15677_15723 = state_15672__$1;(statearr_15677_15723[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 5))
{var inst_15608 = cljs.core.deref.call(null,mults);var inst_15609 = cljs.core.vals.call(null,inst_15608);var inst_15610 = cljs.core.seq.call(null,inst_15609);var inst_15611 = inst_15610;var inst_15612 = null;var inst_15613 = 0;var inst_15614 = 0;var state_15672__$1 = (function (){var statearr_15678 = state_15672;(statearr_15678[8] = inst_15614);
(statearr_15678[9] = inst_15613);
(statearr_15678[10] = inst_15612);
(statearr_15678[11] = inst_15611);
return statearr_15678;
})();var statearr_15679_15724 = state_15672__$1;(statearr_15679_15724[2] = null);
(statearr_15679_15724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 6))
{var inst_15651 = (state_15672[12]);var inst_15649 = (state_15672[13]);var inst_15601 = (state_15672[7]);var inst_15649__$1 = topic_fn.call(null,inst_15601);var inst_15650 = cljs.core.deref.call(null,mults);var inst_15651__$1 = cljs.core.get.call(null,inst_15650,inst_15649__$1);var state_15672__$1 = (function (){var statearr_15680 = state_15672;(statearr_15680[12] = inst_15651__$1);
(statearr_15680[13] = inst_15649__$1);
return statearr_15680;
})();if(cljs.core.truth_(inst_15651__$1))
{var statearr_15681_15725 = state_15672__$1;(statearr_15681_15725[1] = 19);
} else
{var statearr_15682_15726 = state_15672__$1;(statearr_15682_15726[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 7))
{var inst_15668 = (state_15672[2]);var state_15672__$1 = state_15672;var statearr_15683_15727 = state_15672__$1;(statearr_15683_15727[2] = inst_15668);
(statearr_15683_15727[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 8))
{var inst_15614 = (state_15672[8]);var inst_15613 = (state_15672[9]);var inst_15616 = (inst_15614 < inst_15613);var inst_15617 = inst_15616;var state_15672__$1 = state_15672;if(cljs.core.truth_(inst_15617))
{var statearr_15687_15728 = state_15672__$1;(statearr_15687_15728[1] = 10);
} else
{var statearr_15688_15729 = state_15672__$1;(statearr_15688_15729[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 9))
{var inst_15647 = (state_15672[2]);var state_15672__$1 = state_15672;var statearr_15689_15730 = state_15672__$1;(statearr_15689_15730[2] = inst_15647);
(statearr_15689_15730[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 10))
{var inst_15614 = (state_15672[8]);var inst_15613 = (state_15672[9]);var inst_15612 = (state_15672[10]);var inst_15611 = (state_15672[11]);var inst_15619 = cljs.core._nth.call(null,inst_15612,inst_15614);var inst_15620 = cljs.core.async.muxch_STAR_.call(null,inst_15619);var inst_15621 = cljs.core.async.close_BANG_.call(null,inst_15620);var inst_15622 = (inst_15614 + 1);var tmp15684 = inst_15613;var tmp15685 = inst_15612;var tmp15686 = inst_15611;var inst_15611__$1 = tmp15686;var inst_15612__$1 = tmp15685;var inst_15613__$1 = tmp15684;var inst_15614__$1 = inst_15622;var state_15672__$1 = (function (){var statearr_15690 = state_15672;(statearr_15690[8] = inst_15614__$1);
(statearr_15690[14] = inst_15621);
(statearr_15690[9] = inst_15613__$1);
(statearr_15690[10] = inst_15612__$1);
(statearr_15690[11] = inst_15611__$1);
return statearr_15690;
})();var statearr_15691_15731 = state_15672__$1;(statearr_15691_15731[2] = null);
(statearr_15691_15731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 11))
{var inst_15611 = (state_15672[11]);var inst_15625 = (state_15672[15]);var inst_15625__$1 = cljs.core.seq.call(null,inst_15611);var state_15672__$1 = (function (){var statearr_15692 = state_15672;(statearr_15692[15] = inst_15625__$1);
return statearr_15692;
})();if(inst_15625__$1)
{var statearr_15693_15732 = state_15672__$1;(statearr_15693_15732[1] = 13);
} else
{var statearr_15694_15733 = state_15672__$1;(statearr_15694_15733[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 12))
{var inst_15645 = (state_15672[2]);var state_15672__$1 = state_15672;var statearr_15695_15734 = state_15672__$1;(statearr_15695_15734[2] = inst_15645);
(statearr_15695_15734[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 13))
{var inst_15625 = (state_15672[15]);var inst_15627 = cljs.core.chunked_seq_QMARK_.call(null,inst_15625);var state_15672__$1 = state_15672;if(inst_15627)
{var statearr_15696_15735 = state_15672__$1;(statearr_15696_15735[1] = 16);
} else
{var statearr_15697_15736 = state_15672__$1;(statearr_15697_15736[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 14))
{var state_15672__$1 = state_15672;var statearr_15698_15737 = state_15672__$1;(statearr_15698_15737[2] = null);
(statearr_15698_15737[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 15))
{var inst_15643 = (state_15672[2]);var state_15672__$1 = state_15672;var statearr_15699_15738 = state_15672__$1;(statearr_15699_15738[2] = inst_15643);
(statearr_15699_15738[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 16))
{var inst_15625 = (state_15672[15]);var inst_15629 = cljs.core.chunk_first.call(null,inst_15625);var inst_15630 = cljs.core.chunk_rest.call(null,inst_15625);var inst_15631 = cljs.core.count.call(null,inst_15629);var inst_15611 = inst_15630;var inst_15612 = inst_15629;var inst_15613 = inst_15631;var inst_15614 = 0;var state_15672__$1 = (function (){var statearr_15700 = state_15672;(statearr_15700[8] = inst_15614);
(statearr_15700[9] = inst_15613);
(statearr_15700[10] = inst_15612);
(statearr_15700[11] = inst_15611);
return statearr_15700;
})();var statearr_15701_15739 = state_15672__$1;(statearr_15701_15739[2] = null);
(statearr_15701_15739[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 17))
{var inst_15625 = (state_15672[15]);var inst_15634 = cljs.core.first.call(null,inst_15625);var inst_15635 = cljs.core.async.muxch_STAR_.call(null,inst_15634);var inst_15636 = cljs.core.async.close_BANG_.call(null,inst_15635);var inst_15637 = cljs.core.next.call(null,inst_15625);var inst_15611 = inst_15637;var inst_15612 = null;var inst_15613 = 0;var inst_15614 = 0;var state_15672__$1 = (function (){var statearr_15702 = state_15672;(statearr_15702[8] = inst_15614);
(statearr_15702[9] = inst_15613);
(statearr_15702[10] = inst_15612);
(statearr_15702[11] = inst_15611);
(statearr_15702[16] = inst_15636);
return statearr_15702;
})();var statearr_15703_15740 = state_15672__$1;(statearr_15703_15740[2] = null);
(statearr_15703_15740[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 18))
{var inst_15640 = (state_15672[2]);var state_15672__$1 = state_15672;var statearr_15704_15741 = state_15672__$1;(statearr_15704_15741[2] = inst_15640);
(statearr_15704_15741[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 19))
{var state_15672__$1 = state_15672;var statearr_15705_15742 = state_15672__$1;(statearr_15705_15742[2] = null);
(statearr_15705_15742[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 20))
{var state_15672__$1 = state_15672;var statearr_15706_15743 = state_15672__$1;(statearr_15706_15743[2] = null);
(statearr_15706_15743[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 21))
{var inst_15665 = (state_15672[2]);var state_15672__$1 = (function (){var statearr_15707 = state_15672;(statearr_15707[17] = inst_15665);
return statearr_15707;
})();var statearr_15708_15744 = state_15672__$1;(statearr_15708_15744[2] = null);
(statearr_15708_15744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 22))
{var inst_15662 = (state_15672[2]);var state_15672__$1 = state_15672;var statearr_15709_15745 = state_15672__$1;(statearr_15709_15745[2] = inst_15662);
(statearr_15709_15745[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 23))
{var inst_15649 = (state_15672[13]);var inst_15653 = (state_15672[2]);var inst_15654 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15649);var state_15672__$1 = (function (){var statearr_15710 = state_15672;(statearr_15710[18] = inst_15653);
return statearr_15710;
})();var statearr_15711_15746 = state_15672__$1;(statearr_15711_15746[2] = inst_15654);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15672__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15673 === 24))
{var inst_15651 = (state_15672[12]);var inst_15601 = (state_15672[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15672,23,Object,null,22);var inst_15658 = cljs.core.async.muxch_STAR_.call(null,inst_15651);var state_15672__$1 = state_15672;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15672__$1,25,inst_15658,inst_15601);
} else
{if((state_val_15673 === 25))
{var inst_15660 = (state_15672[2]);var state_15672__$1 = state_15672;var statearr_15712_15747 = state_15672__$1;(statearr_15712_15747[2] = inst_15660);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15672__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15716[0] = state_machine__5548__auto__);
(statearr_15716[1] = 1);
return statearr_15716;
});
var state_machine__5548__auto____1 = (function (state_15672){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15672);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15717){if((e15717 instanceof Object))
{var ex__5551__auto__ = e15717;var statearr_15718_15748 = state_15672;(statearr_15718_15748[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15749 = state_15672;
state_15672 = G__15749;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15672){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15719 = f__5563__auto__.call(null);(statearr_15719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15720);
return statearr_15719;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___15886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15856){var state_val_15857 = (state_15856[1]);if((state_val_15857 === 1))
{var state_15856__$1 = state_15856;var statearr_15858_15887 = state_15856__$1;(statearr_15858_15887[2] = null);
(statearr_15858_15887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 2))
{var inst_15819 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15820 = 0;var state_15856__$1 = (function (){var statearr_15859 = state_15856;(statearr_15859[7] = inst_15820);
(statearr_15859[8] = inst_15819);
return statearr_15859;
})();var statearr_15860_15888 = state_15856__$1;(statearr_15860_15888[2] = null);
(statearr_15860_15888[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 3))
{var inst_15854 = (state_15856[2]);var state_15856__$1 = state_15856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15856__$1,inst_15854);
} else
{if((state_val_15857 === 4))
{var inst_15820 = (state_15856[7]);var inst_15822 = (inst_15820 < cnt);var state_15856__$1 = state_15856;if(cljs.core.truth_(inst_15822))
{var statearr_15861_15889 = state_15856__$1;(statearr_15861_15889[1] = 6);
} else
{var statearr_15862_15890 = state_15856__$1;(statearr_15862_15890[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 5))
{var inst_15840 = (state_15856[2]);var state_15856__$1 = (function (){var statearr_15863 = state_15856;(statearr_15863[9] = inst_15840);
return statearr_15863;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15856__$1,12,dchan);
} else
{if((state_val_15857 === 6))
{var state_15856__$1 = state_15856;var statearr_15864_15891 = state_15856__$1;(statearr_15864_15891[2] = null);
(statearr_15864_15891[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 7))
{var state_15856__$1 = state_15856;var statearr_15865_15892 = state_15856__$1;(statearr_15865_15892[2] = null);
(statearr_15865_15892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 8))
{var inst_15838 = (state_15856[2]);var state_15856__$1 = state_15856;var statearr_15866_15893 = state_15856__$1;(statearr_15866_15893[2] = inst_15838);
(statearr_15866_15893[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 9))
{var inst_15820 = (state_15856[7]);var inst_15833 = (state_15856[2]);var inst_15834 = (inst_15820 + 1);var inst_15820__$1 = inst_15834;var state_15856__$1 = (function (){var statearr_15867 = state_15856;(statearr_15867[7] = inst_15820__$1);
(statearr_15867[10] = inst_15833);
return statearr_15867;
})();var statearr_15868_15894 = state_15856__$1;(statearr_15868_15894[2] = null);
(statearr_15868_15894[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 10))
{var inst_15824 = (state_15856[2]);var inst_15825 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15856__$1 = (function (){var statearr_15869 = state_15856;(statearr_15869[11] = inst_15824);
return statearr_15869;
})();var statearr_15870_15895 = state_15856__$1;(statearr_15870_15895[2] = inst_15825);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15856__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 11))
{var inst_15820 = (state_15856[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15856,10,Object,null,9);var inst_15829 = chs__$1.call(null,inst_15820);var inst_15830 = done.call(null,inst_15820);var inst_15831 = cljs.core.async.take_BANG_.call(null,inst_15829,inst_15830);var state_15856__$1 = state_15856;var statearr_15871_15896 = state_15856__$1;(statearr_15871_15896[2] = inst_15831);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15856__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 12))
{var inst_15842 = (state_15856[12]);var inst_15842__$1 = (state_15856[2]);var inst_15843 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15842__$1);var state_15856__$1 = (function (){var statearr_15872 = state_15856;(statearr_15872[12] = inst_15842__$1);
return statearr_15872;
})();if(cljs.core.truth_(inst_15843))
{var statearr_15873_15897 = state_15856__$1;(statearr_15873_15897[1] = 13);
} else
{var statearr_15874_15898 = state_15856__$1;(statearr_15874_15898[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 13))
{var inst_15845 = cljs.core.async.close_BANG_.call(null,out);var state_15856__$1 = state_15856;var statearr_15875_15899 = state_15856__$1;(statearr_15875_15899[2] = inst_15845);
(statearr_15875_15899[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 14))
{var inst_15842 = (state_15856[12]);var inst_15847 = cljs.core.apply.call(null,f,inst_15842);var state_15856__$1 = state_15856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15856__$1,16,out,inst_15847);
} else
{if((state_val_15857 === 15))
{var inst_15852 = (state_15856[2]);var state_15856__$1 = state_15856;var statearr_15876_15900 = state_15856__$1;(statearr_15876_15900[2] = inst_15852);
(statearr_15876_15900[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15857 === 16))
{var inst_15849 = (state_15856[2]);var state_15856__$1 = (function (){var statearr_15877 = state_15856;(statearr_15877[13] = inst_15849);
return statearr_15877;
})();var statearr_15878_15901 = state_15856__$1;(statearr_15878_15901[2] = null);
(statearr_15878_15901[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_15882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15882[0] = state_machine__5548__auto__);
(statearr_15882[1] = 1);
return statearr_15882;
});
var state_machine__5548__auto____1 = (function (state_15856){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15856);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15883){if((e15883 instanceof Object))
{var ex__5551__auto__ = e15883;var statearr_15884_15902 = state_15856;(statearr_15884_15902[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15903 = state_15856;
state_15856 = G__15903;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15856){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15885 = f__5563__auto__.call(null);(statearr_15885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15886);
return statearr_15885;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16011 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15987){var state_val_15988 = (state_15987[1]);if((state_val_15988 === 1))
{var inst_15958 = cljs.core.vec.call(null,chs);var inst_15959 = inst_15958;var state_15987__$1 = (function (){var statearr_15989 = state_15987;(statearr_15989[7] = inst_15959);
return statearr_15989;
})();var statearr_15990_16012 = state_15987__$1;(statearr_15990_16012[2] = null);
(statearr_15990_16012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15988 === 2))
{var inst_15959 = (state_15987[7]);var inst_15961 = cljs.core.count.call(null,inst_15959);var inst_15962 = (inst_15961 > 0);var state_15987__$1 = state_15987;if(cljs.core.truth_(inst_15962))
{var statearr_15991_16013 = state_15987__$1;(statearr_15991_16013[1] = 4);
} else
{var statearr_15992_16014 = state_15987__$1;(statearr_15992_16014[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15988 === 3))
{var inst_15985 = (state_15987[2]);var state_15987__$1 = state_15987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15987__$1,inst_15985);
} else
{if((state_val_15988 === 4))
{var inst_15959 = (state_15987[7]);var state_15987__$1 = state_15987;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15987__$1,7,inst_15959);
} else
{if((state_val_15988 === 5))
{var inst_15981 = cljs.core.async.close_BANG_.call(null,out);var state_15987__$1 = state_15987;var statearr_15993_16015 = state_15987__$1;(statearr_15993_16015[2] = inst_15981);
(statearr_15993_16015[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15988 === 6))
{var inst_15983 = (state_15987[2]);var state_15987__$1 = state_15987;var statearr_15994_16016 = state_15987__$1;(statearr_15994_16016[2] = inst_15983);
(statearr_15994_16016[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15988 === 7))
{var inst_15966 = (state_15987[8]);var inst_15967 = (state_15987[9]);var inst_15966__$1 = (state_15987[2]);var inst_15967__$1 = cljs.core.nth.call(null,inst_15966__$1,0,null);var inst_15968 = cljs.core.nth.call(null,inst_15966__$1,1,null);var inst_15969 = (inst_15967__$1 == null);var state_15987__$1 = (function (){var statearr_15995 = state_15987;(statearr_15995[8] = inst_15966__$1);
(statearr_15995[9] = inst_15967__$1);
(statearr_15995[10] = inst_15968);
return statearr_15995;
})();if(cljs.core.truth_(inst_15969))
{var statearr_15996_16017 = state_15987__$1;(statearr_15996_16017[1] = 8);
} else
{var statearr_15997_16018 = state_15987__$1;(statearr_15997_16018[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15988 === 8))
{var inst_15959 = (state_15987[7]);var inst_15966 = (state_15987[8]);var inst_15967 = (state_15987[9]);var inst_15968 = (state_15987[10]);var inst_15971 = (function (){var c = inst_15968;var v = inst_15967;var vec__15964 = inst_15966;var cs = inst_15959;return ((function (c,v,vec__15964,cs,inst_15959,inst_15966,inst_15967,inst_15968,state_val_15988){
return (function (p1__15904_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15904_SHARP_);
});
;})(c,v,vec__15964,cs,inst_15959,inst_15966,inst_15967,inst_15968,state_val_15988))
})();var inst_15972 = cljs.core.filterv.call(null,inst_15971,inst_15959);var inst_15959__$1 = inst_15972;var state_15987__$1 = (function (){var statearr_15998 = state_15987;(statearr_15998[7] = inst_15959__$1);
return statearr_15998;
})();var statearr_15999_16019 = state_15987__$1;(statearr_15999_16019[2] = null);
(statearr_15999_16019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15988 === 9))
{var inst_15967 = (state_15987[9]);var state_15987__$1 = state_15987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15987__$1,11,out,inst_15967);
} else
{if((state_val_15988 === 10))
{var inst_15979 = (state_15987[2]);var state_15987__$1 = state_15987;var statearr_16001_16020 = state_15987__$1;(statearr_16001_16020[2] = inst_15979);
(statearr_16001_16020[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15988 === 11))
{var inst_15959 = (state_15987[7]);var inst_15976 = (state_15987[2]);var tmp16000 = inst_15959;var inst_15959__$1 = tmp16000;var state_15987__$1 = (function (){var statearr_16002 = state_15987;(statearr_16002[7] = inst_15959__$1);
(statearr_16002[11] = inst_15976);
return statearr_16002;
})();var statearr_16003_16021 = state_15987__$1;(statearr_16003_16021[2] = null);
(statearr_16003_16021[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16007 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16007[0] = state_machine__5548__auto__);
(statearr_16007[1] = 1);
return statearr_16007;
});
var state_machine__5548__auto____1 = (function (state_15987){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15987);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16008){if((e16008 instanceof Object))
{var ex__5551__auto__ = e16008;var statearr_16009_16022 = state_15987;(statearr_16009_16022[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16023 = state_15987;
state_15987 = G__16023;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15987){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16010 = f__5563__auto__.call(null);(statearr_16010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16011);
return statearr_16010;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16116 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16093){var state_val_16094 = (state_16093[1]);if((state_val_16094 === 1))
{var inst_16070 = 0;var state_16093__$1 = (function (){var statearr_16095 = state_16093;(statearr_16095[7] = inst_16070);
return statearr_16095;
})();var statearr_16096_16117 = state_16093__$1;(statearr_16096_16117[2] = null);
(statearr_16096_16117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16094 === 2))
{var inst_16070 = (state_16093[7]);var inst_16072 = (inst_16070 < n);var state_16093__$1 = state_16093;if(cljs.core.truth_(inst_16072))
{var statearr_16097_16118 = state_16093__$1;(statearr_16097_16118[1] = 4);
} else
{var statearr_16098_16119 = state_16093__$1;(statearr_16098_16119[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16094 === 3))
{var inst_16090 = (state_16093[2]);var inst_16091 = cljs.core.async.close_BANG_.call(null,out);var state_16093__$1 = (function (){var statearr_16099 = state_16093;(statearr_16099[8] = inst_16090);
return statearr_16099;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16093__$1,inst_16091);
} else
{if((state_val_16094 === 4))
{var state_16093__$1 = state_16093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16093__$1,7,ch);
} else
{if((state_val_16094 === 5))
{var state_16093__$1 = state_16093;var statearr_16100_16120 = state_16093__$1;(statearr_16100_16120[2] = null);
(statearr_16100_16120[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16094 === 6))
{var inst_16088 = (state_16093[2]);var state_16093__$1 = state_16093;var statearr_16101_16121 = state_16093__$1;(statearr_16101_16121[2] = inst_16088);
(statearr_16101_16121[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16094 === 7))
{var inst_16075 = (state_16093[9]);var inst_16075__$1 = (state_16093[2]);var inst_16076 = (inst_16075__$1 == null);var inst_16077 = cljs.core.not.call(null,inst_16076);var state_16093__$1 = (function (){var statearr_16102 = state_16093;(statearr_16102[9] = inst_16075__$1);
return statearr_16102;
})();if(inst_16077)
{var statearr_16103_16122 = state_16093__$1;(statearr_16103_16122[1] = 8);
} else
{var statearr_16104_16123 = state_16093__$1;(statearr_16104_16123[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16094 === 8))
{var inst_16075 = (state_16093[9]);var state_16093__$1 = state_16093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16093__$1,11,out,inst_16075);
} else
{if((state_val_16094 === 9))
{var state_16093__$1 = state_16093;var statearr_16105_16124 = state_16093__$1;(statearr_16105_16124[2] = null);
(statearr_16105_16124[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16094 === 10))
{var inst_16085 = (state_16093[2]);var state_16093__$1 = state_16093;var statearr_16106_16125 = state_16093__$1;(statearr_16106_16125[2] = inst_16085);
(statearr_16106_16125[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16094 === 11))
{var inst_16070 = (state_16093[7]);var inst_16080 = (state_16093[2]);var inst_16081 = (inst_16070 + 1);var inst_16070__$1 = inst_16081;var state_16093__$1 = (function (){var statearr_16107 = state_16093;(statearr_16107[10] = inst_16080);
(statearr_16107[7] = inst_16070__$1);
return statearr_16107;
})();var statearr_16108_16126 = state_16093__$1;(statearr_16108_16126[2] = null);
(statearr_16108_16126[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16112 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16112[0] = state_machine__5548__auto__);
(statearr_16112[1] = 1);
return statearr_16112;
});
var state_machine__5548__auto____1 = (function (state_16093){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16093);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16113){if((e16113 instanceof Object))
{var ex__5551__auto__ = e16113;var statearr_16114_16127 = state_16093;(statearr_16114_16127[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16128 = state_16093;
state_16093 = G__16128;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16093){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16115 = f__5563__auto__.call(null);(statearr_16115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16116);
return statearr_16115;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16200){var state_val_16201 = (state_16200[1]);if((state_val_16201 === 1))
{var inst_16177 = null;var state_16200__$1 = (function (){var statearr_16202 = state_16200;(statearr_16202[7] = inst_16177);
return statearr_16202;
})();var statearr_16203_16226 = state_16200__$1;(statearr_16203_16226[2] = null);
(statearr_16203_16226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 2))
{var state_16200__$1 = state_16200;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16200__$1,4,ch);
} else
{if((state_val_16201 === 3))
{var inst_16197 = (state_16200[2]);var inst_16198 = cljs.core.async.close_BANG_.call(null,out);var state_16200__$1 = (function (){var statearr_16204 = state_16200;(statearr_16204[8] = inst_16197);
return statearr_16204;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16200__$1,inst_16198);
} else
{if((state_val_16201 === 4))
{var inst_16180 = (state_16200[9]);var inst_16180__$1 = (state_16200[2]);var inst_16181 = (inst_16180__$1 == null);var inst_16182 = cljs.core.not.call(null,inst_16181);var state_16200__$1 = (function (){var statearr_16205 = state_16200;(statearr_16205[9] = inst_16180__$1);
return statearr_16205;
})();if(inst_16182)
{var statearr_16206_16227 = state_16200__$1;(statearr_16206_16227[1] = 5);
} else
{var statearr_16207_16228 = state_16200__$1;(statearr_16207_16228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 5))
{var inst_16180 = (state_16200[9]);var inst_16177 = (state_16200[7]);var inst_16184 = cljs.core._EQ_.call(null,inst_16180,inst_16177);var state_16200__$1 = state_16200;if(inst_16184)
{var statearr_16208_16229 = state_16200__$1;(statearr_16208_16229[1] = 8);
} else
{var statearr_16209_16230 = state_16200__$1;(statearr_16209_16230[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 6))
{var state_16200__$1 = state_16200;var statearr_16211_16231 = state_16200__$1;(statearr_16211_16231[2] = null);
(statearr_16211_16231[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 7))
{var inst_16195 = (state_16200[2]);var state_16200__$1 = state_16200;var statearr_16212_16232 = state_16200__$1;(statearr_16212_16232[2] = inst_16195);
(statearr_16212_16232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 8))
{var inst_16177 = (state_16200[7]);var tmp16210 = inst_16177;var inst_16177__$1 = tmp16210;var state_16200__$1 = (function (){var statearr_16213 = state_16200;(statearr_16213[7] = inst_16177__$1);
return statearr_16213;
})();var statearr_16214_16233 = state_16200__$1;(statearr_16214_16233[2] = null);
(statearr_16214_16233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 9))
{var inst_16180 = (state_16200[9]);var state_16200__$1 = state_16200;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16200__$1,11,out,inst_16180);
} else
{if((state_val_16201 === 10))
{var inst_16192 = (state_16200[2]);var state_16200__$1 = state_16200;var statearr_16215_16234 = state_16200__$1;(statearr_16215_16234[2] = inst_16192);
(statearr_16215_16234[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16201 === 11))
{var inst_16180 = (state_16200[9]);var inst_16189 = (state_16200[2]);var inst_16177 = inst_16180;var state_16200__$1 = (function (){var statearr_16216 = state_16200;(statearr_16216[10] = inst_16189);
(statearr_16216[7] = inst_16177);
return statearr_16216;
})();var statearr_16217_16235 = state_16200__$1;(statearr_16217_16235[2] = null);
(statearr_16217_16235[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16221 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16221[0] = state_machine__5548__auto__);
(statearr_16221[1] = 1);
return statearr_16221;
});
var state_machine__5548__auto____1 = (function (state_16200){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16200);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16222){if((e16222 instanceof Object))
{var ex__5551__auto__ = e16222;var statearr_16223_16236 = state_16200;(statearr_16223_16236[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16200);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16237 = state_16200;
state_16200 = G__16237;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16200){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16224 = f__5563__auto__.call(null);(statearr_16224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16225);
return statearr_16224;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16372 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16342){var state_val_16343 = (state_16342[1]);if((state_val_16343 === 1))
{var inst_16305 = (new Array(n));var inst_16306 = inst_16305;var inst_16307 = 0;var state_16342__$1 = (function (){var statearr_16344 = state_16342;(statearr_16344[7] = inst_16307);
(statearr_16344[8] = inst_16306);
return statearr_16344;
})();var statearr_16345_16373 = state_16342__$1;(statearr_16345_16373[2] = null);
(statearr_16345_16373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 2))
{var state_16342__$1 = state_16342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16342__$1,4,ch);
} else
{if((state_val_16343 === 3))
{var inst_16340 = (state_16342[2]);var state_16342__$1 = state_16342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16342__$1,inst_16340);
} else
{if((state_val_16343 === 4))
{var inst_16310 = (state_16342[9]);var inst_16310__$1 = (state_16342[2]);var inst_16311 = (inst_16310__$1 == null);var inst_16312 = cljs.core.not.call(null,inst_16311);var state_16342__$1 = (function (){var statearr_16346 = state_16342;(statearr_16346[9] = inst_16310__$1);
return statearr_16346;
})();if(inst_16312)
{var statearr_16347_16374 = state_16342__$1;(statearr_16347_16374[1] = 5);
} else
{var statearr_16348_16375 = state_16342__$1;(statearr_16348_16375[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 5))
{var inst_16307 = (state_16342[7]);var inst_16315 = (state_16342[10]);var inst_16310 = (state_16342[9]);var inst_16306 = (state_16342[8]);var inst_16314 = (inst_16306[inst_16307] = inst_16310);var inst_16315__$1 = (inst_16307 + 1);var inst_16316 = (inst_16315__$1 < n);var state_16342__$1 = (function (){var statearr_16349 = state_16342;(statearr_16349[10] = inst_16315__$1);
(statearr_16349[11] = inst_16314);
return statearr_16349;
})();if(cljs.core.truth_(inst_16316))
{var statearr_16350_16376 = state_16342__$1;(statearr_16350_16376[1] = 8);
} else
{var statearr_16351_16377 = state_16342__$1;(statearr_16351_16377[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 6))
{var inst_16307 = (state_16342[7]);var inst_16328 = (inst_16307 > 0);var state_16342__$1 = state_16342;if(cljs.core.truth_(inst_16328))
{var statearr_16353_16378 = state_16342__$1;(statearr_16353_16378[1] = 12);
} else
{var statearr_16354_16379 = state_16342__$1;(statearr_16354_16379[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 7))
{var inst_16338 = (state_16342[2]);var state_16342__$1 = state_16342;var statearr_16355_16380 = state_16342__$1;(statearr_16355_16380[2] = inst_16338);
(statearr_16355_16380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 8))
{var inst_16315 = (state_16342[10]);var inst_16306 = (state_16342[8]);var tmp16352 = inst_16306;var inst_16306__$1 = tmp16352;var inst_16307 = inst_16315;var state_16342__$1 = (function (){var statearr_16356 = state_16342;(statearr_16356[7] = inst_16307);
(statearr_16356[8] = inst_16306__$1);
return statearr_16356;
})();var statearr_16357_16381 = state_16342__$1;(statearr_16357_16381[2] = null);
(statearr_16357_16381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 9))
{var inst_16306 = (state_16342[8]);var inst_16320 = cljs.core.vec.call(null,inst_16306);var state_16342__$1 = state_16342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16342__$1,11,out,inst_16320);
} else
{if((state_val_16343 === 10))
{var inst_16326 = (state_16342[2]);var state_16342__$1 = state_16342;var statearr_16358_16382 = state_16342__$1;(statearr_16358_16382[2] = inst_16326);
(statearr_16358_16382[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 11))
{var inst_16322 = (state_16342[2]);var inst_16323 = (new Array(n));var inst_16306 = inst_16323;var inst_16307 = 0;var state_16342__$1 = (function (){var statearr_16359 = state_16342;(statearr_16359[7] = inst_16307);
(statearr_16359[8] = inst_16306);
(statearr_16359[12] = inst_16322);
return statearr_16359;
})();var statearr_16360_16383 = state_16342__$1;(statearr_16360_16383[2] = null);
(statearr_16360_16383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 12))
{var inst_16306 = (state_16342[8]);var inst_16330 = cljs.core.vec.call(null,inst_16306);var state_16342__$1 = state_16342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16342__$1,15,out,inst_16330);
} else
{if((state_val_16343 === 13))
{var state_16342__$1 = state_16342;var statearr_16361_16384 = state_16342__$1;(statearr_16361_16384[2] = null);
(statearr_16361_16384[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 14))
{var inst_16335 = (state_16342[2]);var inst_16336 = cljs.core.async.close_BANG_.call(null,out);var state_16342__$1 = (function (){var statearr_16362 = state_16342;(statearr_16362[13] = inst_16335);
return statearr_16362;
})();var statearr_16363_16385 = state_16342__$1;(statearr_16363_16385[2] = inst_16336);
(statearr_16363_16385[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16343 === 15))
{var inst_16332 = (state_16342[2]);var state_16342__$1 = state_16342;var statearr_16364_16386 = state_16342__$1;(statearr_16364_16386[2] = inst_16332);
(statearr_16364_16386[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16368[0] = state_machine__5548__auto__);
(statearr_16368[1] = 1);
return statearr_16368;
});
var state_machine__5548__auto____1 = (function (state_16342){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16342);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16369){if((e16369 instanceof Object))
{var ex__5551__auto__ = e16369;var statearr_16370_16387 = state_16342;(statearr_16370_16387[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16388 = state_16342;
state_16342 = G__16388;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16342){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16371 = f__5563__auto__.call(null);(statearr_16371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16372);
return statearr_16371;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16531 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16501){var state_val_16502 = (state_16501[1]);if((state_val_16502 === 1))
{var inst_16460 = [];var inst_16461 = inst_16460;var inst_16462 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16501__$1 = (function (){var statearr_16503 = state_16501;(statearr_16503[7] = inst_16461);
(statearr_16503[8] = inst_16462);
return statearr_16503;
})();var statearr_16504_16532 = state_16501__$1;(statearr_16504_16532[2] = null);
(statearr_16504_16532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 2))
{var state_16501__$1 = state_16501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16501__$1,4,ch);
} else
{if((state_val_16502 === 3))
{var inst_16499 = (state_16501[2]);var state_16501__$1 = state_16501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16501__$1,inst_16499);
} else
{if((state_val_16502 === 4))
{var inst_16465 = (state_16501[9]);var inst_16465__$1 = (state_16501[2]);var inst_16466 = (inst_16465__$1 == null);var inst_16467 = cljs.core.not.call(null,inst_16466);var state_16501__$1 = (function (){var statearr_16505 = state_16501;(statearr_16505[9] = inst_16465__$1);
return statearr_16505;
})();if(inst_16467)
{var statearr_16506_16533 = state_16501__$1;(statearr_16506_16533[1] = 5);
} else
{var statearr_16507_16534 = state_16501__$1;(statearr_16507_16534[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 5))
{var inst_16465 = (state_16501[9]);var inst_16462 = (state_16501[8]);var inst_16469 = (state_16501[10]);var inst_16469__$1 = f.call(null,inst_16465);var inst_16470 = cljs.core._EQ_.call(null,inst_16469__$1,inst_16462);var inst_16471 = cljs.core.keyword_identical_QMARK_.call(null,inst_16462,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16472 = (inst_16470) || (inst_16471);var state_16501__$1 = (function (){var statearr_16508 = state_16501;(statearr_16508[10] = inst_16469__$1);
return statearr_16508;
})();if(cljs.core.truth_(inst_16472))
{var statearr_16509_16535 = state_16501__$1;(statearr_16509_16535[1] = 8);
} else
{var statearr_16510_16536 = state_16501__$1;(statearr_16510_16536[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 6))
{var inst_16461 = (state_16501[7]);var inst_16486 = inst_16461.length;var inst_16487 = (inst_16486 > 0);var state_16501__$1 = state_16501;if(cljs.core.truth_(inst_16487))
{var statearr_16512_16537 = state_16501__$1;(statearr_16512_16537[1] = 12);
} else
{var statearr_16513_16538 = state_16501__$1;(statearr_16513_16538[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 7))
{var inst_16497 = (state_16501[2]);var state_16501__$1 = state_16501;var statearr_16514_16539 = state_16501__$1;(statearr_16514_16539[2] = inst_16497);
(statearr_16514_16539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 8))
{var inst_16465 = (state_16501[9]);var inst_16461 = (state_16501[7]);var inst_16469 = (state_16501[10]);var inst_16474 = inst_16461.push(inst_16465);var tmp16511 = inst_16461;var inst_16461__$1 = tmp16511;var inst_16462 = inst_16469;var state_16501__$1 = (function (){var statearr_16515 = state_16501;(statearr_16515[7] = inst_16461__$1);
(statearr_16515[8] = inst_16462);
(statearr_16515[11] = inst_16474);
return statearr_16515;
})();var statearr_16516_16540 = state_16501__$1;(statearr_16516_16540[2] = null);
(statearr_16516_16540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 9))
{var inst_16461 = (state_16501[7]);var inst_16477 = cljs.core.vec.call(null,inst_16461);var state_16501__$1 = state_16501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16501__$1,11,out,inst_16477);
} else
{if((state_val_16502 === 10))
{var inst_16484 = (state_16501[2]);var state_16501__$1 = state_16501;var statearr_16517_16541 = state_16501__$1;(statearr_16517_16541[2] = inst_16484);
(statearr_16517_16541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 11))
{var inst_16465 = (state_16501[9]);var inst_16469 = (state_16501[10]);var inst_16479 = (state_16501[2]);var inst_16480 = [];var inst_16481 = inst_16480.push(inst_16465);var inst_16461 = inst_16480;var inst_16462 = inst_16469;var state_16501__$1 = (function (){var statearr_16518 = state_16501;(statearr_16518[7] = inst_16461);
(statearr_16518[8] = inst_16462);
(statearr_16518[12] = inst_16479);
(statearr_16518[13] = inst_16481);
return statearr_16518;
})();var statearr_16519_16542 = state_16501__$1;(statearr_16519_16542[2] = null);
(statearr_16519_16542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 12))
{var inst_16461 = (state_16501[7]);var inst_16489 = cljs.core.vec.call(null,inst_16461);var state_16501__$1 = state_16501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16501__$1,15,out,inst_16489);
} else
{if((state_val_16502 === 13))
{var state_16501__$1 = state_16501;var statearr_16520_16543 = state_16501__$1;(statearr_16520_16543[2] = null);
(statearr_16520_16543[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 14))
{var inst_16494 = (state_16501[2]);var inst_16495 = cljs.core.async.close_BANG_.call(null,out);var state_16501__$1 = (function (){var statearr_16521 = state_16501;(statearr_16521[14] = inst_16494);
return statearr_16521;
})();var statearr_16522_16544 = state_16501__$1;(statearr_16522_16544[2] = inst_16495);
(statearr_16522_16544[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16502 === 15))
{var inst_16491 = (state_16501[2]);var state_16501__$1 = state_16501;var statearr_16523_16545 = state_16501__$1;(statearr_16523_16545[2] = inst_16491);
(statearr_16523_16545[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16527[0] = state_machine__5548__auto__);
(statearr_16527[1] = 1);
return statearr_16527;
});
var state_machine__5548__auto____1 = (function (state_16501){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16501);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16528){if((e16528 instanceof Object))
{var ex__5551__auto__ = e16528;var statearr_16529_16546 = state_16501;(statearr_16529_16546[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16547 = state_16501;
state_16501 = G__16547;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16501){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16530 = f__5563__auto__.call(null);(statearr_16530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16531);
return statearr_16530;
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

//# sourceMappingURL=async.js.map