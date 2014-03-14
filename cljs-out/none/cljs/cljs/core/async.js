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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25002 = (function (f,fn_handler,meta25003){
this.f = f;
this.fn_handler = fn_handler;
this.meta25003 = meta25003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25002.cljs$lang$type = true;
cljs.core.async.t25002.cljs$lang$ctorStr = "cljs.core.async/t25002";
cljs.core.async.t25002.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25002");
});
cljs.core.async.t25002.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25004){var self__ = this;
var _25004__$1 = this;return self__.meta25003;
});
cljs.core.async.t25002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25004,meta25003__$1){var self__ = this;
var _25004__$1 = this;return (new cljs.core.async.t25002(self__.f,self__.fn_handler,meta25003__$1));
});
cljs.core.async.__GT_t25002 = (function __GT_t25002(f__$1,fn_handler__$1,meta25003){return (new cljs.core.async.t25002(f__$1,fn_handler__$1,meta25003));
});
}
return (new cljs.core.async.t25002(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25006 = buff;if(G__25006)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__25006.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25006.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25006);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25006);
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
{var val_25007 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25007);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25007);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___25008 = n;var x_25009 = 0;while(true){
if((x_25009 < n__4289__auto___25008))
{(a[x_25009] = 0);
{
var G__25010 = (x_25009 + 1);
x_25009 = G__25010;
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
var G__25011 = (i + 1);
i = G__25011;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25015 = (function (flag,alt_flag,meta25016){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25016 = meta25016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25015.cljs$lang$type = true;
cljs.core.async.t25015.cljs$lang$ctorStr = "cljs.core.async/t25015";
cljs.core.async.t25015.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25015");
});
cljs.core.async.t25015.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25017){var self__ = this;
var _25017__$1 = this;return self__.meta25016;
});
cljs.core.async.t25015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25017,meta25016__$1){var self__ = this;
var _25017__$1 = this;return (new cljs.core.async.t25015(self__.flag,self__.alt_flag,meta25016__$1));
});
cljs.core.async.__GT_t25015 = (function __GT_t25015(flag__$1,alt_flag__$1,meta25016){return (new cljs.core.async.t25015(flag__$1,alt_flag__$1,meta25016));
});
}
return (new cljs.core.async.t25015(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25021 = (function (cb,flag,alt_handler,meta25022){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25022 = meta25022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25021.cljs$lang$type = true;
cljs.core.async.t25021.cljs$lang$ctorStr = "cljs.core.async/t25021";
cljs.core.async.t25021.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25021");
});
cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25023){var self__ = this;
var _25023__$1 = this;return self__.meta25022;
});
cljs.core.async.t25021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25023,meta25022__$1){var self__ = this;
var _25023__$1 = this;return (new cljs.core.async.t25021(self__.cb,self__.flag,self__.alt_handler,meta25022__$1));
});
cljs.core.async.__GT_t25021 = (function __GT_t25021(cb__$1,flag__$1,alt_handler__$1,meta25022){return (new cljs.core.async.t25021(cb__$1,flag__$1,alt_handler__$1,meta25022));
});
}
return (new cljs.core.async.t25021(cb,flag,alt_handler,null));
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
return (function (p1__25024_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25024_SHARP_,port], null));
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
var G__25025 = (i + 1);
i = G__25025;
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
var alts_BANG___delegate = function (ports,p__25026){var map__25028 = p__25026;var map__25028__$1 = ((cljs.core.seq_QMARK_.call(null,map__25028))?cljs.core.apply.call(null,cljs.core.hash_map,map__25028):map__25028);var opts = map__25028__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25026 = null;if (arguments.length > 1) {
  p__25026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25026);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25029){
var ports = cljs.core.first(arglist__25029);
var p__25026 = cljs.core.rest(arglist__25029);
return alts_BANG___delegate(ports,p__25026);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25037 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25037 = (function (ch,f,map_LT_,meta25038){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25038 = meta25038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25037.cljs$lang$type = true;
cljs.core.async.t25037.cljs$lang$ctorStr = "cljs.core.async/t25037";
cljs.core.async.t25037.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25037");
});
cljs.core.async.t25037.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25037.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25040 = (function (fn1,_,meta25038,ch,f,map_LT_,meta25041){
this.fn1 = fn1;
this._ = _;
this.meta25038 = meta25038;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25041 = meta25041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25040.cljs$lang$type = true;
cljs.core.async.t25040.cljs$lang$ctorStr = "cljs.core.async/t25040";
cljs.core.async.t25040.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25040");
});
cljs.core.async.t25040.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25040.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25030_SHARP_){return f1.call(null,(((p1__25030_SHARP_ == null))?null:self__.f.call(null,p1__25030_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25042){var self__ = this;
var _25042__$1 = this;return self__.meta25041;
});
cljs.core.async.t25040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25042,meta25041__$1){var self__ = this;
var _25042__$1 = this;return (new cljs.core.async.t25040(self__.fn1,self__._,self__.meta25038,self__.ch,self__.f,self__.map_LT_,meta25041__$1));
});
cljs.core.async.__GT_t25040 = (function __GT_t25040(fn1__$1,___$2,meta25038__$1,ch__$2,f__$2,map_LT___$2,meta25041){return (new cljs.core.async.t25040(fn1__$1,___$2,meta25038__$1,ch__$2,f__$2,map_LT___$2,meta25041));
});
}
return (new cljs.core.async.t25040(fn1,___$1,self__.meta25038,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25037.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25039){var self__ = this;
var _25039__$1 = this;return self__.meta25038;
});
cljs.core.async.t25037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25039,meta25038__$1){var self__ = this;
var _25039__$1 = this;return (new cljs.core.async.t25037(self__.ch,self__.f,self__.map_LT_,meta25038__$1));
});
cljs.core.async.__GT_t25037 = (function __GT_t25037(ch__$1,f__$1,map_LT___$1,meta25038){return (new cljs.core.async.t25037(ch__$1,f__$1,map_LT___$1,meta25038));
});
}
return (new cljs.core.async.t25037(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25046 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25046 = (function (ch,f,map_GT_,meta25047){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25047 = meta25047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25046.cljs$lang$type = true;
cljs.core.async.t25046.cljs$lang$ctorStr = "cljs.core.async/t25046";
cljs.core.async.t25046.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25046");
});
cljs.core.async.t25046.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25046.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25046.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25048){var self__ = this;
var _25048__$1 = this;return self__.meta25047;
});
cljs.core.async.t25046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25048,meta25047__$1){var self__ = this;
var _25048__$1 = this;return (new cljs.core.async.t25046(self__.ch,self__.f,self__.map_GT_,meta25047__$1));
});
cljs.core.async.__GT_t25046 = (function __GT_t25046(ch__$1,f__$1,map_GT___$1,meta25047){return (new cljs.core.async.t25046(ch__$1,f__$1,map_GT___$1,meta25047));
});
}
return (new cljs.core.async.t25046(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25052 = (function (ch,p,filter_GT_,meta25053){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25053 = meta25053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25052.cljs$lang$type = true;
cljs.core.async.t25052.cljs$lang$ctorStr = "cljs.core.async/t25052";
cljs.core.async.t25052.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25052");
});
cljs.core.async.t25052.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25052.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25052.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25054){var self__ = this;
var _25054__$1 = this;return self__.meta25053;
});
cljs.core.async.t25052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25054,meta25053__$1){var self__ = this;
var _25054__$1 = this;return (new cljs.core.async.t25052(self__.ch,self__.p,self__.filter_GT_,meta25053__$1));
});
cljs.core.async.__GT_t25052 = (function __GT_t25052(ch__$1,p__$1,filter_GT___$1,meta25053){return (new cljs.core.async.t25052(ch__$1,p__$1,filter_GT___$1,meta25053));
});
}
return (new cljs.core.async.t25052(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___25137 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25116){var state_val_25117 = (state_25116[1]);if((state_val_25117 === 1))
{var state_25116__$1 = state_25116;var statearr_25118_25138 = state_25116__$1;(statearr_25118_25138[2] = null);
(statearr_25118_25138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25117 === 2))
{var state_25116__$1 = state_25116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25116__$1,4,ch);
} else
{if((state_val_25117 === 3))
{var inst_25114 = (state_25116[2]);var state_25116__$1 = state_25116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25116__$1,inst_25114);
} else
{if((state_val_25117 === 4))
{var inst_25098 = (state_25116[7]);var inst_25098__$1 = (state_25116[2]);var inst_25099 = (inst_25098__$1 == null);var state_25116__$1 = (function (){var statearr_25119 = state_25116;(statearr_25119[7] = inst_25098__$1);
return statearr_25119;
})();if(cljs.core.truth_(inst_25099))
{var statearr_25120_25139 = state_25116__$1;(statearr_25120_25139[1] = 5);
} else
{var statearr_25121_25140 = state_25116__$1;(statearr_25121_25140[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25117 === 5))
{var inst_25101 = cljs.core.async.close_BANG_.call(null,out);var state_25116__$1 = state_25116;var statearr_25122_25141 = state_25116__$1;(statearr_25122_25141[2] = inst_25101);
(statearr_25122_25141[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25117 === 6))
{var inst_25098 = (state_25116[7]);var inst_25103 = p.call(null,inst_25098);var state_25116__$1 = state_25116;if(cljs.core.truth_(inst_25103))
{var statearr_25123_25142 = state_25116__$1;(statearr_25123_25142[1] = 8);
} else
{var statearr_25124_25143 = state_25116__$1;(statearr_25124_25143[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25117 === 7))
{var inst_25112 = (state_25116[2]);var state_25116__$1 = state_25116;var statearr_25125_25144 = state_25116__$1;(statearr_25125_25144[2] = inst_25112);
(statearr_25125_25144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25117 === 8))
{var inst_25098 = (state_25116[7]);var state_25116__$1 = state_25116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25116__$1,11,out,inst_25098);
} else
{if((state_val_25117 === 9))
{var state_25116__$1 = state_25116;var statearr_25126_25145 = state_25116__$1;(statearr_25126_25145[2] = null);
(statearr_25126_25145[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25117 === 10))
{var inst_25109 = (state_25116[2]);var state_25116__$1 = (function (){var statearr_25127 = state_25116;(statearr_25127[8] = inst_25109);
return statearr_25127;
})();var statearr_25128_25146 = state_25116__$1;(statearr_25128_25146[2] = null);
(statearr_25128_25146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25117 === 11))
{var inst_25106 = (state_25116[2]);var state_25116__$1 = state_25116;var statearr_25129_25147 = state_25116__$1;(statearr_25129_25147[2] = inst_25106);
(statearr_25129_25147[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_25133 = [null,null,null,null,null,null,null,null,null];(statearr_25133[0] = state_machine__5548__auto__);
(statearr_25133[1] = 1);
return statearr_25133;
});
var state_machine__5548__auto____1 = (function (state_25116){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25116);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25134){if((e25134 instanceof Object))
{var ex__5551__auto__ = e25134;var statearr_25135_25148 = state_25116;(statearr_25135_25148[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25116);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25149 = state_25116;
state_25116 = G__25149;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25116){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25136 = f__5563__auto__.call(null);(statearr_25136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25137);
return statearr_25136;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25301){var state_val_25302 = (state_25301[1]);if((state_val_25302 === 1))
{var state_25301__$1 = state_25301;var statearr_25303_25340 = state_25301__$1;(statearr_25303_25340[2] = null);
(statearr_25303_25340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 2))
{var state_25301__$1 = state_25301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25301__$1,4,in$);
} else
{if((state_val_25302 === 3))
{var inst_25299 = (state_25301[2]);var state_25301__$1 = state_25301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25301__$1,inst_25299);
} else
{if((state_val_25302 === 4))
{var inst_25247 = (state_25301[7]);var inst_25247__$1 = (state_25301[2]);var inst_25248 = (inst_25247__$1 == null);var state_25301__$1 = (function (){var statearr_25304 = state_25301;(statearr_25304[7] = inst_25247__$1);
return statearr_25304;
})();if(cljs.core.truth_(inst_25248))
{var statearr_25305_25341 = state_25301__$1;(statearr_25305_25341[1] = 5);
} else
{var statearr_25306_25342 = state_25301__$1;(statearr_25306_25342[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 5))
{var inst_25250 = cljs.core.async.close_BANG_.call(null,out);var state_25301__$1 = state_25301;var statearr_25307_25343 = state_25301__$1;(statearr_25307_25343[2] = inst_25250);
(statearr_25307_25343[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 6))
{var inst_25247 = (state_25301[7]);var inst_25252 = f.call(null,inst_25247);var inst_25257 = cljs.core.seq.call(null,inst_25252);var inst_25258 = inst_25257;var inst_25259 = null;var inst_25260 = 0;var inst_25261 = 0;var state_25301__$1 = (function (){var statearr_25308 = state_25301;(statearr_25308[8] = inst_25261);
(statearr_25308[9] = inst_25259);
(statearr_25308[10] = inst_25260);
(statearr_25308[11] = inst_25258);
return statearr_25308;
})();var statearr_25309_25344 = state_25301__$1;(statearr_25309_25344[2] = null);
(statearr_25309_25344[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 7))
{var inst_25297 = (state_25301[2]);var state_25301__$1 = state_25301;var statearr_25310_25345 = state_25301__$1;(statearr_25310_25345[2] = inst_25297);
(statearr_25310_25345[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 8))
{var inst_25261 = (state_25301[8]);var inst_25260 = (state_25301[10]);var inst_25263 = (inst_25261 < inst_25260);var inst_25264 = inst_25263;var state_25301__$1 = state_25301;if(cljs.core.truth_(inst_25264))
{var statearr_25311_25346 = state_25301__$1;(statearr_25311_25346[1] = 10);
} else
{var statearr_25312_25347 = state_25301__$1;(statearr_25312_25347[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 9))
{var inst_25294 = (state_25301[2]);var state_25301__$1 = (function (){var statearr_25313 = state_25301;(statearr_25313[12] = inst_25294);
return statearr_25313;
})();var statearr_25314_25348 = state_25301__$1;(statearr_25314_25348[2] = null);
(statearr_25314_25348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 10))
{var inst_25261 = (state_25301[8]);var inst_25259 = (state_25301[9]);var inst_25266 = cljs.core._nth.call(null,inst_25259,inst_25261);var state_25301__$1 = state_25301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25301__$1,13,out,inst_25266);
} else
{if((state_val_25302 === 11))
{var inst_25258 = (state_25301[11]);var inst_25272 = (state_25301[13]);var inst_25272__$1 = cljs.core.seq.call(null,inst_25258);var state_25301__$1 = (function (){var statearr_25318 = state_25301;(statearr_25318[13] = inst_25272__$1);
return statearr_25318;
})();if(inst_25272__$1)
{var statearr_25319_25349 = state_25301__$1;(statearr_25319_25349[1] = 14);
} else
{var statearr_25320_25350 = state_25301__$1;(statearr_25320_25350[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 12))
{var inst_25292 = (state_25301[2]);var state_25301__$1 = state_25301;var statearr_25321_25351 = state_25301__$1;(statearr_25321_25351[2] = inst_25292);
(statearr_25321_25351[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 13))
{var inst_25261 = (state_25301[8]);var inst_25259 = (state_25301[9]);var inst_25260 = (state_25301[10]);var inst_25258 = (state_25301[11]);var inst_25268 = (state_25301[2]);var inst_25269 = (inst_25261 + 1);var tmp25315 = inst_25259;var tmp25316 = inst_25260;var tmp25317 = inst_25258;var inst_25258__$1 = tmp25317;var inst_25259__$1 = tmp25315;var inst_25260__$1 = tmp25316;var inst_25261__$1 = inst_25269;var state_25301__$1 = (function (){var statearr_25322 = state_25301;(statearr_25322[14] = inst_25268);
(statearr_25322[8] = inst_25261__$1);
(statearr_25322[9] = inst_25259__$1);
(statearr_25322[10] = inst_25260__$1);
(statearr_25322[11] = inst_25258__$1);
return statearr_25322;
})();var statearr_25323_25352 = state_25301__$1;(statearr_25323_25352[2] = null);
(statearr_25323_25352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 14))
{var inst_25272 = (state_25301[13]);var inst_25274 = cljs.core.chunked_seq_QMARK_.call(null,inst_25272);var state_25301__$1 = state_25301;if(inst_25274)
{var statearr_25324_25353 = state_25301__$1;(statearr_25324_25353[1] = 17);
} else
{var statearr_25325_25354 = state_25301__$1;(statearr_25325_25354[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 15))
{var state_25301__$1 = state_25301;var statearr_25326_25355 = state_25301__$1;(statearr_25326_25355[2] = null);
(statearr_25326_25355[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 16))
{var inst_25290 = (state_25301[2]);var state_25301__$1 = state_25301;var statearr_25327_25356 = state_25301__$1;(statearr_25327_25356[2] = inst_25290);
(statearr_25327_25356[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 17))
{var inst_25272 = (state_25301[13]);var inst_25276 = cljs.core.chunk_first.call(null,inst_25272);var inst_25277 = cljs.core.chunk_rest.call(null,inst_25272);var inst_25278 = cljs.core.count.call(null,inst_25276);var inst_25258 = inst_25277;var inst_25259 = inst_25276;var inst_25260 = inst_25278;var inst_25261 = 0;var state_25301__$1 = (function (){var statearr_25328 = state_25301;(statearr_25328[8] = inst_25261);
(statearr_25328[9] = inst_25259);
(statearr_25328[10] = inst_25260);
(statearr_25328[11] = inst_25258);
return statearr_25328;
})();var statearr_25329_25357 = state_25301__$1;(statearr_25329_25357[2] = null);
(statearr_25329_25357[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 18))
{var inst_25272 = (state_25301[13]);var inst_25281 = cljs.core.first.call(null,inst_25272);var state_25301__$1 = state_25301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25301__$1,20,out,inst_25281);
} else
{if((state_val_25302 === 19))
{var inst_25287 = (state_25301[2]);var state_25301__$1 = state_25301;var statearr_25330_25358 = state_25301__$1;(statearr_25330_25358[2] = inst_25287);
(statearr_25330_25358[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25302 === 20))
{var inst_25272 = (state_25301[13]);var inst_25283 = (state_25301[2]);var inst_25284 = cljs.core.next.call(null,inst_25272);var inst_25258 = inst_25284;var inst_25259 = null;var inst_25260 = 0;var inst_25261 = 0;var state_25301__$1 = (function (){var statearr_25331 = state_25301;(statearr_25331[8] = inst_25261);
(statearr_25331[9] = inst_25259);
(statearr_25331[10] = inst_25260);
(statearr_25331[11] = inst_25258);
(statearr_25331[15] = inst_25283);
return statearr_25331;
})();var statearr_25332_25359 = state_25301__$1;(statearr_25332_25359[2] = null);
(statearr_25332_25359[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_25336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25336[0] = state_machine__5548__auto__);
(statearr_25336[1] = 1);
return statearr_25336;
});
var state_machine__5548__auto____1 = (function (state_25301){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25301);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25337){if((e25337 instanceof Object))
{var ex__5551__auto__ = e25337;var statearr_25338_25360 = state_25301;(statearr_25338_25360[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25361 = state_25301;
state_25301 = G__25361;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25339 = f__5563__auto__.call(null);(statearr_25339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25339;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___25442 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25421){var state_val_25422 = (state_25421[1]);if((state_val_25422 === 1))
{var state_25421__$1 = state_25421;var statearr_25423_25443 = state_25421__$1;(statearr_25423_25443[2] = null);
(statearr_25423_25443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25422 === 2))
{var state_25421__$1 = state_25421;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25421__$1,4,from);
} else
{if((state_val_25422 === 3))
{var inst_25419 = (state_25421[2]);var state_25421__$1 = state_25421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25421__$1,inst_25419);
} else
{if((state_val_25422 === 4))
{var inst_25404 = (state_25421[7]);var inst_25404__$1 = (state_25421[2]);var inst_25405 = (inst_25404__$1 == null);var state_25421__$1 = (function (){var statearr_25424 = state_25421;(statearr_25424[7] = inst_25404__$1);
return statearr_25424;
})();if(cljs.core.truth_(inst_25405))
{var statearr_25425_25444 = state_25421__$1;(statearr_25425_25444[1] = 5);
} else
{var statearr_25426_25445 = state_25421__$1;(statearr_25426_25445[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25422 === 5))
{var state_25421__$1 = state_25421;if(cljs.core.truth_(close_QMARK_))
{var statearr_25427_25446 = state_25421__$1;(statearr_25427_25446[1] = 8);
} else
{var statearr_25428_25447 = state_25421__$1;(statearr_25428_25447[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25422 === 6))
{var inst_25404 = (state_25421[7]);var state_25421__$1 = state_25421;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25421__$1,11,to,inst_25404);
} else
{if((state_val_25422 === 7))
{var inst_25417 = (state_25421[2]);var state_25421__$1 = state_25421;var statearr_25429_25448 = state_25421__$1;(statearr_25429_25448[2] = inst_25417);
(statearr_25429_25448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25422 === 8))
{var inst_25408 = cljs.core.async.close_BANG_.call(null,to);var state_25421__$1 = state_25421;var statearr_25430_25449 = state_25421__$1;(statearr_25430_25449[2] = inst_25408);
(statearr_25430_25449[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25422 === 9))
{var state_25421__$1 = state_25421;var statearr_25431_25450 = state_25421__$1;(statearr_25431_25450[2] = null);
(statearr_25431_25450[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25422 === 10))
{var inst_25411 = (state_25421[2]);var state_25421__$1 = state_25421;var statearr_25432_25451 = state_25421__$1;(statearr_25432_25451[2] = inst_25411);
(statearr_25432_25451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25422 === 11))
{var inst_25414 = (state_25421[2]);var state_25421__$1 = (function (){var statearr_25433 = state_25421;(statearr_25433[8] = inst_25414);
return statearr_25433;
})();var statearr_25434_25452 = state_25421__$1;(statearr_25434_25452[2] = null);
(statearr_25434_25452[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_25438 = [null,null,null,null,null,null,null,null,null];(statearr_25438[0] = state_machine__5548__auto__);
(statearr_25438[1] = 1);
return statearr_25438;
});
var state_machine__5548__auto____1 = (function (state_25421){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25421);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25439){if((e25439 instanceof Object))
{var ex__5551__auto__ = e25439;var statearr_25440_25453 = state_25421;(statearr_25440_25453[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25454 = state_25421;
state_25421 = G__25454;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25421){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25441 = f__5563__auto__.call(null);(statearr_25441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25442);
return statearr_25441;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___25541 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25519){var state_val_25520 = (state_25519[1]);if((state_val_25520 === 1))
{var state_25519__$1 = state_25519;var statearr_25521_25542 = state_25519__$1;(statearr_25521_25542[2] = null);
(statearr_25521_25542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 2))
{var state_25519__$1 = state_25519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25519__$1,4,ch);
} else
{if((state_val_25520 === 3))
{var inst_25517 = (state_25519[2]);var state_25519__$1 = state_25519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25519__$1,inst_25517);
} else
{if((state_val_25520 === 4))
{var inst_25500 = (state_25519[7]);var inst_25500__$1 = (state_25519[2]);var inst_25501 = (inst_25500__$1 == null);var state_25519__$1 = (function (){var statearr_25522 = state_25519;(statearr_25522[7] = inst_25500__$1);
return statearr_25522;
})();if(cljs.core.truth_(inst_25501))
{var statearr_25523_25543 = state_25519__$1;(statearr_25523_25543[1] = 5);
} else
{var statearr_25524_25544 = state_25519__$1;(statearr_25524_25544[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 5))
{var inst_25503 = cljs.core.async.close_BANG_.call(null,tc);var inst_25504 = cljs.core.async.close_BANG_.call(null,fc);var state_25519__$1 = (function (){var statearr_25525 = state_25519;(statearr_25525[8] = inst_25503);
return statearr_25525;
})();var statearr_25526_25545 = state_25519__$1;(statearr_25526_25545[2] = inst_25504);
(statearr_25526_25545[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 6))
{var inst_25500 = (state_25519[7]);var inst_25506 = p.call(null,inst_25500);var state_25519__$1 = state_25519;if(cljs.core.truth_(inst_25506))
{var statearr_25527_25546 = state_25519__$1;(statearr_25527_25546[1] = 9);
} else
{var statearr_25528_25547 = state_25519__$1;(statearr_25528_25547[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 7))
{var inst_25515 = (state_25519[2]);var state_25519__$1 = state_25519;var statearr_25529_25548 = state_25519__$1;(statearr_25529_25548[2] = inst_25515);
(statearr_25529_25548[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 8))
{var inst_25512 = (state_25519[2]);var state_25519__$1 = (function (){var statearr_25530 = state_25519;(statearr_25530[9] = inst_25512);
return statearr_25530;
})();var statearr_25531_25549 = state_25519__$1;(statearr_25531_25549[2] = null);
(statearr_25531_25549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 9))
{var state_25519__$1 = state_25519;var statearr_25532_25550 = state_25519__$1;(statearr_25532_25550[2] = tc);
(statearr_25532_25550[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 10))
{var state_25519__$1 = state_25519;var statearr_25533_25551 = state_25519__$1;(statearr_25533_25551[2] = fc);
(statearr_25533_25551[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25520 === 11))
{var inst_25500 = (state_25519[7]);var inst_25510 = (state_25519[2]);var state_25519__$1 = state_25519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25519__$1,8,inst_25510,inst_25500);
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
var state_machine__5548__auto____0 = (function (){var statearr_25537 = [null,null,null,null,null,null,null,null,null,null];(statearr_25537[0] = state_machine__5548__auto__);
(statearr_25537[1] = 1);
return statearr_25537;
});
var state_machine__5548__auto____1 = (function (state_25519){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25519);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25538){if((e25538 instanceof Object))
{var ex__5551__auto__ = e25538;var statearr_25539_25552 = state_25519;(statearr_25539_25552[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25538;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25553 = state_25519;
state_25519 = G__25553;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25519){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25540 = f__5563__auto__.call(null);(statearr_25540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25541);
return statearr_25540;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25600){var state_val_25601 = (state_25600[1]);if((state_val_25601 === 7))
{var inst_25596 = (state_25600[2]);var state_25600__$1 = state_25600;var statearr_25602_25618 = state_25600__$1;(statearr_25602_25618[2] = inst_25596);
(statearr_25602_25618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25601 === 6))
{var inst_25589 = (state_25600[7]);var inst_25586 = (state_25600[8]);var inst_25593 = f.call(null,inst_25586,inst_25589);var inst_25586__$1 = inst_25593;var state_25600__$1 = (function (){var statearr_25603 = state_25600;(statearr_25603[8] = inst_25586__$1);
return statearr_25603;
})();var statearr_25604_25619 = state_25600__$1;(statearr_25604_25619[2] = null);
(statearr_25604_25619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25601 === 5))
{var inst_25586 = (state_25600[8]);var state_25600__$1 = state_25600;var statearr_25605_25620 = state_25600__$1;(statearr_25605_25620[2] = inst_25586);
(statearr_25605_25620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25601 === 4))
{var inst_25589 = (state_25600[7]);var inst_25589__$1 = (state_25600[2]);var inst_25590 = (inst_25589__$1 == null);var state_25600__$1 = (function (){var statearr_25606 = state_25600;(statearr_25606[7] = inst_25589__$1);
return statearr_25606;
})();if(cljs.core.truth_(inst_25590))
{var statearr_25607_25621 = state_25600__$1;(statearr_25607_25621[1] = 5);
} else
{var statearr_25608_25622 = state_25600__$1;(statearr_25608_25622[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25601 === 3))
{var inst_25598 = (state_25600[2]);var state_25600__$1 = state_25600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25600__$1,inst_25598);
} else
{if((state_val_25601 === 2))
{var state_25600__$1 = state_25600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25600__$1,4,ch);
} else
{if((state_val_25601 === 1))
{var inst_25586 = init;var state_25600__$1 = (function (){var statearr_25609 = state_25600;(statearr_25609[8] = inst_25586);
return statearr_25609;
})();var statearr_25610_25623 = state_25600__$1;(statearr_25610_25623[2] = null);
(statearr_25610_25623[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_25614 = [null,null,null,null,null,null,null,null,null];(statearr_25614[0] = state_machine__5548__auto__);
(statearr_25614[1] = 1);
return statearr_25614;
});
var state_machine__5548__auto____1 = (function (state_25600){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25600);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25615){if((e25615 instanceof Object))
{var ex__5551__auto__ = e25615;var statearr_25616_25624 = state_25600;(statearr_25616_25624[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25600);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25615;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25625 = state_25600;
state_25600 = G__25625;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25600){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25617 = f__5563__auto__.call(null);(statearr_25617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25617;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25687){var state_val_25688 = (state_25687[1]);if((state_val_25688 === 1))
{var inst_25667 = cljs.core.seq.call(null,coll);var inst_25668 = inst_25667;var state_25687__$1 = (function (){var statearr_25689 = state_25687;(statearr_25689[7] = inst_25668);
return statearr_25689;
})();var statearr_25690_25708 = state_25687__$1;(statearr_25690_25708[2] = null);
(statearr_25690_25708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25688 === 2))
{var inst_25668 = (state_25687[7]);var state_25687__$1 = state_25687;if(cljs.core.truth_(inst_25668))
{var statearr_25691_25709 = state_25687__$1;(statearr_25691_25709[1] = 4);
} else
{var statearr_25692_25710 = state_25687__$1;(statearr_25692_25710[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25688 === 3))
{var inst_25685 = (state_25687[2]);var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25687__$1,inst_25685);
} else
{if((state_val_25688 === 4))
{var inst_25668 = (state_25687[7]);var inst_25671 = cljs.core.first.call(null,inst_25668);var state_25687__$1 = state_25687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25687__$1,7,ch,inst_25671);
} else
{if((state_val_25688 === 5))
{var state_25687__$1 = state_25687;if(cljs.core.truth_(close_QMARK_))
{var statearr_25693_25711 = state_25687__$1;(statearr_25693_25711[1] = 8);
} else
{var statearr_25694_25712 = state_25687__$1;(statearr_25694_25712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25688 === 6))
{var inst_25683 = (state_25687[2]);var state_25687__$1 = state_25687;var statearr_25695_25713 = state_25687__$1;(statearr_25695_25713[2] = inst_25683);
(statearr_25695_25713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25688 === 7))
{var inst_25668 = (state_25687[7]);var inst_25673 = (state_25687[2]);var inst_25674 = cljs.core.next.call(null,inst_25668);var inst_25668__$1 = inst_25674;var state_25687__$1 = (function (){var statearr_25696 = state_25687;(statearr_25696[8] = inst_25673);
(statearr_25696[7] = inst_25668__$1);
return statearr_25696;
})();var statearr_25697_25714 = state_25687__$1;(statearr_25697_25714[2] = null);
(statearr_25697_25714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25688 === 8))
{var inst_25678 = cljs.core.async.close_BANG_.call(null,ch);var state_25687__$1 = state_25687;var statearr_25698_25715 = state_25687__$1;(statearr_25698_25715[2] = inst_25678);
(statearr_25698_25715[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25688 === 9))
{var state_25687__$1 = state_25687;var statearr_25699_25716 = state_25687__$1;(statearr_25699_25716[2] = null);
(statearr_25699_25716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25688 === 10))
{var inst_25681 = (state_25687[2]);var state_25687__$1 = state_25687;var statearr_25700_25717 = state_25687__$1;(statearr_25700_25717[2] = inst_25681);
(statearr_25700_25717[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_25704 = [null,null,null,null,null,null,null,null,null];(statearr_25704[0] = state_machine__5548__auto__);
(statearr_25704[1] = 1);
return statearr_25704;
});
var state_machine__5548__auto____1 = (function (state_25687){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25705){if((e25705 instanceof Object))
{var ex__5551__auto__ = e25705;var statearr_25706_25718 = state_25687;(statearr_25706_25718[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25719 = state_25687;
state_25687 = G__25719;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25687){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25707 = f__5563__auto__.call(null);(statearr_25707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25707;
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
cljs.core.async.Mux = (function (){var obj25721 = {};return obj25721;
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
cljs.core.async.Mult = (function (){var obj25723 = {};return obj25723;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25947 = (function (cs,ch,mult,meta25948){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25948 = meta25948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25947.cljs$lang$type = true;
cljs.core.async.t25947.cljs$lang$ctorStr = "cljs.core.async/t25947";
cljs.core.async.t25947.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25947");
});})(cs))
;
cljs.core.async.t25947.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25947.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25947.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25947.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25947.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25949){var self__ = this;
var _25949__$1 = this;return self__.meta25948;
});})(cs))
;
cljs.core.async.t25947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25949,meta25948__$1){var self__ = this;
var _25949__$1 = this;return (new cljs.core.async.t25947(self__.cs,self__.ch,self__.mult,meta25948__$1));
});})(cs))
;
cljs.core.async.__GT_t25947 = ((function (cs){
return (function __GT_t25947(cs__$1,ch__$1,mult__$1,meta25948){return (new cljs.core.async.t25947(cs__$1,ch__$1,mult__$1,meta25948));
});})(cs))
;
}
return (new cljs.core.async.t25947(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___26170 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26084){var state_val_26085 = (state_26084[1]);if((state_val_26085 === 32))
{var inst_26028 = (state_26084[7]);var inst_25952 = (state_26084[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26084,31,Object,null,30);var inst_26035 = cljs.core.async.put_BANG_.call(null,inst_26028,inst_25952,done);var state_26084__$1 = state_26084;var statearr_26086_26171 = state_26084__$1;(statearr_26086_26171[2] = inst_26035);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 1))
{var state_26084__$1 = state_26084;var statearr_26087_26172 = state_26084__$1;(statearr_26087_26172[2] = null);
(statearr_26087_26172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 33))
{var inst_26041 = (state_26084[9]);var inst_26043 = cljs.core.chunked_seq_QMARK_.call(null,inst_26041);var state_26084__$1 = state_26084;if(inst_26043)
{var statearr_26088_26173 = state_26084__$1;(statearr_26088_26173[1] = 36);
} else
{var statearr_26089_26174 = state_26084__$1;(statearr_26089_26174[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 2))
{var state_26084__$1 = state_26084;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26084__$1,4,ch);
} else
{if((state_val_26085 === 34))
{var state_26084__$1 = state_26084;var statearr_26090_26175 = state_26084__$1;(statearr_26090_26175[2] = null);
(statearr_26090_26175[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 3))
{var inst_26082 = (state_26084[2]);var state_26084__$1 = state_26084;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26084__$1,inst_26082);
} else
{if((state_val_26085 === 35))
{var inst_26066 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26091_26176 = state_26084__$1;(statearr_26091_26176[2] = inst_26066);
(statearr_26091_26176[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 4))
{var inst_25952 = (state_26084[8]);var inst_25952__$1 = (state_26084[2]);var inst_25953 = (inst_25952__$1 == null);var state_26084__$1 = (function (){var statearr_26092 = state_26084;(statearr_26092[8] = inst_25952__$1);
return statearr_26092;
})();if(cljs.core.truth_(inst_25953))
{var statearr_26093_26177 = state_26084__$1;(statearr_26093_26177[1] = 5);
} else
{var statearr_26094_26178 = state_26084__$1;(statearr_26094_26178[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 36))
{var inst_26041 = (state_26084[9]);var inst_26045 = cljs.core.chunk_first.call(null,inst_26041);var inst_26046 = cljs.core.chunk_rest.call(null,inst_26041);var inst_26047 = cljs.core.count.call(null,inst_26045);var inst_26020 = inst_26046;var inst_26021 = inst_26045;var inst_26022 = inst_26047;var inst_26023 = 0;var state_26084__$1 = (function (){var statearr_26095 = state_26084;(statearr_26095[10] = inst_26023);
(statearr_26095[11] = inst_26020);
(statearr_26095[12] = inst_26022);
(statearr_26095[13] = inst_26021);
return statearr_26095;
})();var statearr_26096_26179 = state_26084__$1;(statearr_26096_26179[2] = null);
(statearr_26096_26179[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 5))
{var inst_25959 = cljs.core.deref.call(null,cs);var inst_25960 = cljs.core.seq.call(null,inst_25959);var inst_25961 = inst_25960;var inst_25962 = null;var inst_25963 = 0;var inst_25964 = 0;var state_26084__$1 = (function (){var statearr_26097 = state_26084;(statearr_26097[14] = inst_25964);
(statearr_26097[15] = inst_25963);
(statearr_26097[16] = inst_25962);
(statearr_26097[17] = inst_25961);
return statearr_26097;
})();var statearr_26098_26180 = state_26084__$1;(statearr_26098_26180[2] = null);
(statearr_26098_26180[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 37))
{var inst_26041 = (state_26084[9]);var inst_26050 = cljs.core.first.call(null,inst_26041);var state_26084__$1 = (function (){var statearr_26099 = state_26084;(statearr_26099[18] = inst_26050);
return statearr_26099;
})();var statearr_26100_26181 = state_26084__$1;(statearr_26100_26181[2] = null);
(statearr_26100_26181[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 6))
{var inst_26012 = (state_26084[19]);var inst_26011 = cljs.core.deref.call(null,cs);var inst_26012__$1 = cljs.core.keys.call(null,inst_26011);var inst_26013 = cljs.core.count.call(null,inst_26012__$1);var inst_26014 = cljs.core.reset_BANG_.call(null,dctr,inst_26013);var inst_26019 = cljs.core.seq.call(null,inst_26012__$1);var inst_26020 = inst_26019;var inst_26021 = null;var inst_26022 = 0;var inst_26023 = 0;var state_26084__$1 = (function (){var statearr_26101 = state_26084;(statearr_26101[10] = inst_26023);
(statearr_26101[11] = inst_26020);
(statearr_26101[12] = inst_26022);
(statearr_26101[13] = inst_26021);
(statearr_26101[20] = inst_26014);
(statearr_26101[19] = inst_26012__$1);
return statearr_26101;
})();var statearr_26102_26182 = state_26084__$1;(statearr_26102_26182[2] = null);
(statearr_26102_26182[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 38))
{var inst_26063 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26103_26183 = state_26084__$1;(statearr_26103_26183[2] = inst_26063);
(statearr_26103_26183[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 7))
{var inst_26080 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26104_26184 = state_26084__$1;(statearr_26104_26184[2] = inst_26080);
(statearr_26104_26184[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 39))
{var inst_26041 = (state_26084[9]);var inst_26059 = (state_26084[2]);var inst_26060 = cljs.core.next.call(null,inst_26041);var inst_26020 = inst_26060;var inst_26021 = null;var inst_26022 = 0;var inst_26023 = 0;var state_26084__$1 = (function (){var statearr_26105 = state_26084;(statearr_26105[10] = inst_26023);
(statearr_26105[11] = inst_26020);
(statearr_26105[12] = inst_26022);
(statearr_26105[13] = inst_26021);
(statearr_26105[21] = inst_26059);
return statearr_26105;
})();var statearr_26106_26185 = state_26084__$1;(statearr_26106_26185[2] = null);
(statearr_26106_26185[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 8))
{var inst_25964 = (state_26084[14]);var inst_25963 = (state_26084[15]);var inst_25966 = (inst_25964 < inst_25963);var inst_25967 = inst_25966;var state_26084__$1 = state_26084;if(cljs.core.truth_(inst_25967))
{var statearr_26107_26186 = state_26084__$1;(statearr_26107_26186[1] = 10);
} else
{var statearr_26108_26187 = state_26084__$1;(statearr_26108_26187[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 40))
{var inst_26050 = (state_26084[18]);var inst_26051 = (state_26084[2]);var inst_26052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26053 = cljs.core.async.untap_STAR_.call(null,m,inst_26050);var state_26084__$1 = (function (){var statearr_26109 = state_26084;(statearr_26109[22] = inst_26051);
(statearr_26109[23] = inst_26052);
return statearr_26109;
})();var statearr_26110_26188 = state_26084__$1;(statearr_26110_26188[2] = inst_26053);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 9))
{var inst_26009 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26111_26189 = state_26084__$1;(statearr_26111_26189[2] = inst_26009);
(statearr_26111_26189[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 41))
{var inst_26050 = (state_26084[18]);var inst_25952 = (state_26084[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26084,40,Object,null,39);var inst_26057 = cljs.core.async.put_BANG_.call(null,inst_26050,inst_25952,done);var state_26084__$1 = state_26084;var statearr_26112_26190 = state_26084__$1;(statearr_26112_26190[2] = inst_26057);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 10))
{var inst_25964 = (state_26084[14]);var inst_25962 = (state_26084[16]);var inst_25970 = cljs.core._nth.call(null,inst_25962,inst_25964);var inst_25971 = cljs.core.nth.call(null,inst_25970,0,null);var inst_25972 = cljs.core.nth.call(null,inst_25970,1,null);var state_26084__$1 = (function (){var statearr_26113 = state_26084;(statearr_26113[24] = inst_25971);
return statearr_26113;
})();if(cljs.core.truth_(inst_25972))
{var statearr_26114_26191 = state_26084__$1;(statearr_26114_26191[1] = 13);
} else
{var statearr_26115_26192 = state_26084__$1;(statearr_26115_26192[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 42))
{var state_26084__$1 = state_26084;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26084__$1,45,dchan);
} else
{if((state_val_26085 === 11))
{var inst_25981 = (state_26084[25]);var inst_25961 = (state_26084[17]);var inst_25981__$1 = cljs.core.seq.call(null,inst_25961);var state_26084__$1 = (function (){var statearr_26116 = state_26084;(statearr_26116[25] = inst_25981__$1);
return statearr_26116;
})();if(inst_25981__$1)
{var statearr_26117_26193 = state_26084__$1;(statearr_26117_26193[1] = 16);
} else
{var statearr_26118_26194 = state_26084__$1;(statearr_26118_26194[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 43))
{var state_26084__$1 = state_26084;var statearr_26119_26195 = state_26084__$1;(statearr_26119_26195[2] = null);
(statearr_26119_26195[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 12))
{var inst_26007 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26120_26196 = state_26084__$1;(statearr_26120_26196[2] = inst_26007);
(statearr_26120_26196[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 44))
{var inst_26077 = (state_26084[2]);var state_26084__$1 = (function (){var statearr_26121 = state_26084;(statearr_26121[26] = inst_26077);
return statearr_26121;
})();var statearr_26122_26197 = state_26084__$1;(statearr_26122_26197[2] = null);
(statearr_26122_26197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 13))
{var inst_25971 = (state_26084[24]);var inst_25974 = cljs.core.async.close_BANG_.call(null,inst_25971);var state_26084__$1 = state_26084;var statearr_26123_26198 = state_26084__$1;(statearr_26123_26198[2] = inst_25974);
(statearr_26123_26198[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 45))
{var inst_26074 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26127_26199 = state_26084__$1;(statearr_26127_26199[2] = inst_26074);
(statearr_26127_26199[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 14))
{var state_26084__$1 = state_26084;var statearr_26128_26200 = state_26084__$1;(statearr_26128_26200[2] = null);
(statearr_26128_26200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 15))
{var inst_25964 = (state_26084[14]);var inst_25963 = (state_26084[15]);var inst_25962 = (state_26084[16]);var inst_25961 = (state_26084[17]);var inst_25977 = (state_26084[2]);var inst_25978 = (inst_25964 + 1);var tmp26124 = inst_25963;var tmp26125 = inst_25962;var tmp26126 = inst_25961;var inst_25961__$1 = tmp26126;var inst_25962__$1 = tmp26125;var inst_25963__$1 = tmp26124;var inst_25964__$1 = inst_25978;var state_26084__$1 = (function (){var statearr_26129 = state_26084;(statearr_26129[27] = inst_25977);
(statearr_26129[14] = inst_25964__$1);
(statearr_26129[15] = inst_25963__$1);
(statearr_26129[16] = inst_25962__$1);
(statearr_26129[17] = inst_25961__$1);
return statearr_26129;
})();var statearr_26130_26201 = state_26084__$1;(statearr_26130_26201[2] = null);
(statearr_26130_26201[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 16))
{var inst_25981 = (state_26084[25]);var inst_25983 = cljs.core.chunked_seq_QMARK_.call(null,inst_25981);var state_26084__$1 = state_26084;if(inst_25983)
{var statearr_26131_26202 = state_26084__$1;(statearr_26131_26202[1] = 19);
} else
{var statearr_26132_26203 = state_26084__$1;(statearr_26132_26203[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 17))
{var state_26084__$1 = state_26084;var statearr_26133_26204 = state_26084__$1;(statearr_26133_26204[2] = null);
(statearr_26133_26204[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 18))
{var inst_26005 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26134_26205 = state_26084__$1;(statearr_26134_26205[2] = inst_26005);
(statearr_26134_26205[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 19))
{var inst_25981 = (state_26084[25]);var inst_25985 = cljs.core.chunk_first.call(null,inst_25981);var inst_25986 = cljs.core.chunk_rest.call(null,inst_25981);var inst_25987 = cljs.core.count.call(null,inst_25985);var inst_25961 = inst_25986;var inst_25962 = inst_25985;var inst_25963 = inst_25987;var inst_25964 = 0;var state_26084__$1 = (function (){var statearr_26135 = state_26084;(statearr_26135[14] = inst_25964);
(statearr_26135[15] = inst_25963);
(statearr_26135[16] = inst_25962);
(statearr_26135[17] = inst_25961);
return statearr_26135;
})();var statearr_26136_26206 = state_26084__$1;(statearr_26136_26206[2] = null);
(statearr_26136_26206[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 20))
{var inst_25981 = (state_26084[25]);var inst_25991 = cljs.core.first.call(null,inst_25981);var inst_25992 = cljs.core.nth.call(null,inst_25991,0,null);var inst_25993 = cljs.core.nth.call(null,inst_25991,1,null);var state_26084__$1 = (function (){var statearr_26137 = state_26084;(statearr_26137[28] = inst_25992);
return statearr_26137;
})();if(cljs.core.truth_(inst_25993))
{var statearr_26138_26207 = state_26084__$1;(statearr_26138_26207[1] = 22);
} else
{var statearr_26139_26208 = state_26084__$1;(statearr_26139_26208[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 21))
{var inst_26002 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26140_26209 = state_26084__$1;(statearr_26140_26209[2] = inst_26002);
(statearr_26140_26209[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 22))
{var inst_25992 = (state_26084[28]);var inst_25995 = cljs.core.async.close_BANG_.call(null,inst_25992);var state_26084__$1 = state_26084;var statearr_26141_26210 = state_26084__$1;(statearr_26141_26210[2] = inst_25995);
(statearr_26141_26210[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 23))
{var state_26084__$1 = state_26084;var statearr_26142_26211 = state_26084__$1;(statearr_26142_26211[2] = null);
(statearr_26142_26211[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 24))
{var inst_25981 = (state_26084[25]);var inst_25998 = (state_26084[2]);var inst_25999 = cljs.core.next.call(null,inst_25981);var inst_25961 = inst_25999;var inst_25962 = null;var inst_25963 = 0;var inst_25964 = 0;var state_26084__$1 = (function (){var statearr_26143 = state_26084;(statearr_26143[29] = inst_25998);
(statearr_26143[14] = inst_25964);
(statearr_26143[15] = inst_25963);
(statearr_26143[16] = inst_25962);
(statearr_26143[17] = inst_25961);
return statearr_26143;
})();var statearr_26144_26212 = state_26084__$1;(statearr_26144_26212[2] = null);
(statearr_26144_26212[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 25))
{var inst_26023 = (state_26084[10]);var inst_26022 = (state_26084[12]);var inst_26025 = (inst_26023 < inst_26022);var inst_26026 = inst_26025;var state_26084__$1 = state_26084;if(cljs.core.truth_(inst_26026))
{var statearr_26145_26213 = state_26084__$1;(statearr_26145_26213[1] = 27);
} else
{var statearr_26146_26214 = state_26084__$1;(statearr_26146_26214[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 26))
{var inst_26012 = (state_26084[19]);var inst_26070 = (state_26084[2]);var inst_26071 = cljs.core.seq.call(null,inst_26012);var state_26084__$1 = (function (){var statearr_26147 = state_26084;(statearr_26147[30] = inst_26070);
return statearr_26147;
})();if(inst_26071)
{var statearr_26148_26215 = state_26084__$1;(statearr_26148_26215[1] = 42);
} else
{var statearr_26149_26216 = state_26084__$1;(statearr_26149_26216[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 27))
{var inst_26023 = (state_26084[10]);var inst_26021 = (state_26084[13]);var inst_26028 = cljs.core._nth.call(null,inst_26021,inst_26023);var state_26084__$1 = (function (){var statearr_26150 = state_26084;(statearr_26150[7] = inst_26028);
return statearr_26150;
})();var statearr_26151_26217 = state_26084__$1;(statearr_26151_26217[2] = null);
(statearr_26151_26217[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 28))
{var inst_26020 = (state_26084[11]);var inst_26041 = (state_26084[9]);var inst_26041__$1 = cljs.core.seq.call(null,inst_26020);var state_26084__$1 = (function (){var statearr_26155 = state_26084;(statearr_26155[9] = inst_26041__$1);
return statearr_26155;
})();if(inst_26041__$1)
{var statearr_26156_26218 = state_26084__$1;(statearr_26156_26218[1] = 33);
} else
{var statearr_26157_26219 = state_26084__$1;(statearr_26157_26219[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 29))
{var inst_26068 = (state_26084[2]);var state_26084__$1 = state_26084;var statearr_26158_26220 = state_26084__$1;(statearr_26158_26220[2] = inst_26068);
(statearr_26158_26220[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 30))
{var inst_26023 = (state_26084[10]);var inst_26020 = (state_26084[11]);var inst_26022 = (state_26084[12]);var inst_26021 = (state_26084[13]);var inst_26037 = (state_26084[2]);var inst_26038 = (inst_26023 + 1);var tmp26152 = inst_26020;var tmp26153 = inst_26022;var tmp26154 = inst_26021;var inst_26020__$1 = tmp26152;var inst_26021__$1 = tmp26154;var inst_26022__$1 = tmp26153;var inst_26023__$1 = inst_26038;var state_26084__$1 = (function (){var statearr_26159 = state_26084;(statearr_26159[10] = inst_26023__$1);
(statearr_26159[11] = inst_26020__$1);
(statearr_26159[12] = inst_26022__$1);
(statearr_26159[13] = inst_26021__$1);
(statearr_26159[31] = inst_26037);
return statearr_26159;
})();var statearr_26160_26221 = state_26084__$1;(statearr_26160_26221[2] = null);
(statearr_26160_26221[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26085 === 31))
{var inst_26028 = (state_26084[7]);var inst_26029 = (state_26084[2]);var inst_26030 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26031 = cljs.core.async.untap_STAR_.call(null,m,inst_26028);var state_26084__$1 = (function (){var statearr_26161 = state_26084;(statearr_26161[32] = inst_26029);
(statearr_26161[33] = inst_26030);
return statearr_26161;
})();var statearr_26162_26222 = state_26084__$1;(statearr_26162_26222[2] = inst_26031);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_26166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26166[0] = state_machine__5548__auto__);
(statearr_26166[1] = 1);
return statearr_26166;
});
var state_machine__5548__auto____1 = (function (state_26084){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26084);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26167){if((e26167 instanceof Object))
{var ex__5551__auto__ = e26167;var statearr_26168_26223 = state_26084;(statearr_26168_26223[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26084);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26167;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26224 = state_26084;
state_26084 = G__26224;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26084){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26169 = f__5563__auto__.call(null);(statearr_26169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26170);
return statearr_26169;
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
cljs.core.async.Mix = (function (){var obj26226 = {};return obj26226;
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
;var m = (function (){if(typeof cljs.core.async.t26336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26336 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26337){
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
this.meta26337 = meta26337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26336.cljs$lang$type = true;
cljs.core.async.t26336.cljs$lang$ctorStr = "cljs.core.async/t26336";
cljs.core.async.t26336.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26336");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26336.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26338){var self__ = this;
var _26338__$1 = this;return self__.meta26337;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26338,meta26337__$1){var self__ = this;
var _26338__$1 = this;return (new cljs.core.async.t26336(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26337__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26336 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26336(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26337){return (new cljs.core.async.t26336(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26337));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26336(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___26445 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26403){var state_val_26404 = (state_26403[1]);if((state_val_26404 === 1))
{var inst_26342 = (state_26403[7]);var inst_26342__$1 = calc_state.call(null);var inst_26343 = cljs.core.seq_QMARK_.call(null,inst_26342__$1);var state_26403__$1 = (function (){var statearr_26405 = state_26403;(statearr_26405[7] = inst_26342__$1);
return statearr_26405;
})();if(inst_26343)
{var statearr_26406_26446 = state_26403__$1;(statearr_26406_26446[1] = 2);
} else
{var statearr_26407_26447 = state_26403__$1;(statearr_26407_26447[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 2))
{var inst_26342 = (state_26403[7]);var inst_26345 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26342);var state_26403__$1 = state_26403;var statearr_26408_26448 = state_26403__$1;(statearr_26408_26448[2] = inst_26345);
(statearr_26408_26448[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 3))
{var inst_26342 = (state_26403[7]);var state_26403__$1 = state_26403;var statearr_26409_26449 = state_26403__$1;(statearr_26409_26449[2] = inst_26342);
(statearr_26409_26449[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 4))
{var inst_26342 = (state_26403[7]);var inst_26348 = (state_26403[2]);var inst_26349 = cljs.core.get.call(null,inst_26348,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26350 = cljs.core.get.call(null,inst_26348,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26351 = cljs.core.get.call(null,inst_26348,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26352 = inst_26342;var state_26403__$1 = (function (){var statearr_26410 = state_26403;(statearr_26410[8] = inst_26349);
(statearr_26410[9] = inst_26350);
(statearr_26410[10] = inst_26352);
(statearr_26410[11] = inst_26351);
return statearr_26410;
})();var statearr_26411_26450 = state_26403__$1;(statearr_26411_26450[2] = null);
(statearr_26411_26450[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 5))
{var inst_26352 = (state_26403[10]);var inst_26355 = cljs.core.seq_QMARK_.call(null,inst_26352);var state_26403__$1 = state_26403;if(inst_26355)
{var statearr_26412_26451 = state_26403__$1;(statearr_26412_26451[1] = 7);
} else
{var statearr_26413_26452 = state_26403__$1;(statearr_26413_26452[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 6))
{var inst_26401 = (state_26403[2]);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26403__$1,inst_26401);
} else
{if((state_val_26404 === 7))
{var inst_26352 = (state_26403[10]);var inst_26357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26352);var state_26403__$1 = state_26403;var statearr_26414_26453 = state_26403__$1;(statearr_26414_26453[2] = inst_26357);
(statearr_26414_26453[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 8))
{var inst_26352 = (state_26403[10]);var state_26403__$1 = state_26403;var statearr_26415_26454 = state_26403__$1;(statearr_26415_26454[2] = inst_26352);
(statearr_26415_26454[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 9))
{var inst_26360 = (state_26403[12]);var inst_26360__$1 = (state_26403[2]);var inst_26361 = cljs.core.get.call(null,inst_26360__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26362 = cljs.core.get.call(null,inst_26360__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26363 = cljs.core.get.call(null,inst_26360__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26403__$1 = (function (){var statearr_26416 = state_26403;(statearr_26416[12] = inst_26360__$1);
(statearr_26416[13] = inst_26363);
(statearr_26416[14] = inst_26362);
return statearr_26416;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26403__$1,10,inst_26361);
} else
{if((state_val_26404 === 10))
{var inst_26367 = (state_26403[15]);var inst_26368 = (state_26403[16]);var inst_26366 = (state_26403[2]);var inst_26367__$1 = cljs.core.nth.call(null,inst_26366,0,null);var inst_26368__$1 = cljs.core.nth.call(null,inst_26366,1,null);var inst_26369 = (inst_26367__$1 == null);var inst_26370 = cljs.core._EQ_.call(null,inst_26368__$1,change);var inst_26371 = (inst_26369) || (inst_26370);var state_26403__$1 = (function (){var statearr_26417 = state_26403;(statearr_26417[15] = inst_26367__$1);
(statearr_26417[16] = inst_26368__$1);
return statearr_26417;
})();if(cljs.core.truth_(inst_26371))
{var statearr_26418_26455 = state_26403__$1;(statearr_26418_26455[1] = 11);
} else
{var statearr_26419_26456 = state_26403__$1;(statearr_26419_26456[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 11))
{var inst_26367 = (state_26403[15]);var inst_26373 = (inst_26367 == null);var state_26403__$1 = state_26403;if(cljs.core.truth_(inst_26373))
{var statearr_26420_26457 = state_26403__$1;(statearr_26420_26457[1] = 14);
} else
{var statearr_26421_26458 = state_26403__$1;(statearr_26421_26458[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 12))
{var inst_26382 = (state_26403[17]);var inst_26363 = (state_26403[13]);var inst_26368 = (state_26403[16]);var inst_26382__$1 = inst_26363.call(null,inst_26368);var state_26403__$1 = (function (){var statearr_26422 = state_26403;(statearr_26422[17] = inst_26382__$1);
return statearr_26422;
})();if(cljs.core.truth_(inst_26382__$1))
{var statearr_26423_26459 = state_26403__$1;(statearr_26423_26459[1] = 17);
} else
{var statearr_26424_26460 = state_26403__$1;(statearr_26424_26460[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 13))
{var inst_26399 = (state_26403[2]);var state_26403__$1 = state_26403;var statearr_26425_26461 = state_26403__$1;(statearr_26425_26461[2] = inst_26399);
(statearr_26425_26461[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 14))
{var inst_26368 = (state_26403[16]);var inst_26375 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26368);var state_26403__$1 = state_26403;var statearr_26426_26462 = state_26403__$1;(statearr_26426_26462[2] = inst_26375);
(statearr_26426_26462[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 15))
{var state_26403__$1 = state_26403;var statearr_26427_26463 = state_26403__$1;(statearr_26427_26463[2] = null);
(statearr_26427_26463[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 16))
{var inst_26378 = (state_26403[2]);var inst_26379 = calc_state.call(null);var inst_26352 = inst_26379;var state_26403__$1 = (function (){var statearr_26428 = state_26403;(statearr_26428[10] = inst_26352);
(statearr_26428[18] = inst_26378);
return statearr_26428;
})();var statearr_26429_26464 = state_26403__$1;(statearr_26429_26464[2] = null);
(statearr_26429_26464[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 17))
{var inst_26382 = (state_26403[17]);var state_26403__$1 = state_26403;var statearr_26430_26465 = state_26403__$1;(statearr_26430_26465[2] = inst_26382);
(statearr_26430_26465[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 18))
{var inst_26363 = (state_26403[13]);var inst_26362 = (state_26403[14]);var inst_26368 = (state_26403[16]);var inst_26385 = cljs.core.empty_QMARK_.call(null,inst_26363);var inst_26386 = inst_26362.call(null,inst_26368);var inst_26387 = cljs.core.not.call(null,inst_26386);var inst_26388 = (inst_26385) && (inst_26387);var state_26403__$1 = state_26403;var statearr_26431_26466 = state_26403__$1;(statearr_26431_26466[2] = inst_26388);
(statearr_26431_26466[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 19))
{var inst_26390 = (state_26403[2]);var state_26403__$1 = state_26403;if(cljs.core.truth_(inst_26390))
{var statearr_26432_26467 = state_26403__$1;(statearr_26432_26467[1] = 20);
} else
{var statearr_26433_26468 = state_26403__$1;(statearr_26433_26468[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 20))
{var inst_26367 = (state_26403[15]);var state_26403__$1 = state_26403;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26403__$1,23,out,inst_26367);
} else
{if((state_val_26404 === 21))
{var state_26403__$1 = state_26403;var statearr_26434_26469 = state_26403__$1;(statearr_26434_26469[2] = null);
(statearr_26434_26469[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 22))
{var inst_26360 = (state_26403[12]);var inst_26396 = (state_26403[2]);var inst_26352 = inst_26360;var state_26403__$1 = (function (){var statearr_26435 = state_26403;(statearr_26435[10] = inst_26352);
(statearr_26435[19] = inst_26396);
return statearr_26435;
})();var statearr_26436_26470 = state_26403__$1;(statearr_26436_26470[2] = null);
(statearr_26436_26470[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26404 === 23))
{var inst_26393 = (state_26403[2]);var state_26403__$1 = state_26403;var statearr_26437_26471 = state_26403__$1;(statearr_26437_26471[2] = inst_26393);
(statearr_26437_26471[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_26441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26441[0] = state_machine__5548__auto__);
(statearr_26441[1] = 1);
return statearr_26441;
});
var state_machine__5548__auto____1 = (function (state_26403){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26403);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26442){if((e26442 instanceof Object))
{var ex__5551__auto__ = e26442;var statearr_26443_26472 = state_26403;(statearr_26443_26472[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26403);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26473 = state_26403;
state_26403 = G__26473;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26403){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26444 = f__5563__auto__.call(null);(statearr_26444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26445);
return statearr_26444;
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
cljs.core.async.Pub = (function (){var obj26475 = {};return obj26475;
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
return (function (p1__26476_SHARP_){if(cljs.core.truth_(p1__26476_SHARP_.call(null,topic)))
{return p1__26476_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26476_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26601 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26601 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26602){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26602 = meta26602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26601.cljs$lang$type = true;
cljs.core.async.t26601.cljs$lang$ctorStr = "cljs.core.async/t26601";
cljs.core.async.t26601.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26601");
});})(mults,ensure_mult))
;
cljs.core.async.t26601.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26601.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26601.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26601.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26601.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26601.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26603){var self__ = this;
var _26603__$1 = this;return self__.meta26602;
});})(mults,ensure_mult))
;
cljs.core.async.t26601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26603,meta26602__$1){var self__ = this;
var _26603__$1 = this;return (new cljs.core.async.t26601(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26602__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26601 = ((function (mults,ensure_mult){
return (function __GT_t26601(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26602){return (new cljs.core.async.t26601(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26602));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26601(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___26725 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26677){var state_val_26678 = (state_26677[1]);if((state_val_26678 === 1))
{var state_26677__$1 = state_26677;var statearr_26679_26726 = state_26677__$1;(statearr_26679_26726[2] = null);
(statearr_26679_26726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 2))
{var state_26677__$1 = state_26677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26677__$1,4,ch);
} else
{if((state_val_26678 === 3))
{var inst_26675 = (state_26677[2]);var state_26677__$1 = state_26677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26677__$1,inst_26675);
} else
{if((state_val_26678 === 4))
{var inst_26606 = (state_26677[7]);var inst_26606__$1 = (state_26677[2]);var inst_26607 = (inst_26606__$1 == null);var state_26677__$1 = (function (){var statearr_26680 = state_26677;(statearr_26680[7] = inst_26606__$1);
return statearr_26680;
})();if(cljs.core.truth_(inst_26607))
{var statearr_26681_26727 = state_26677__$1;(statearr_26681_26727[1] = 5);
} else
{var statearr_26682_26728 = state_26677__$1;(statearr_26682_26728[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 5))
{var inst_26613 = cljs.core.deref.call(null,mults);var inst_26614 = cljs.core.vals.call(null,inst_26613);var inst_26615 = cljs.core.seq.call(null,inst_26614);var inst_26616 = inst_26615;var inst_26617 = null;var inst_26618 = 0;var inst_26619 = 0;var state_26677__$1 = (function (){var statearr_26683 = state_26677;(statearr_26683[8] = inst_26616);
(statearr_26683[9] = inst_26617);
(statearr_26683[10] = inst_26619);
(statearr_26683[11] = inst_26618);
return statearr_26683;
})();var statearr_26684_26729 = state_26677__$1;(statearr_26684_26729[2] = null);
(statearr_26684_26729[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 6))
{var inst_26656 = (state_26677[12]);var inst_26606 = (state_26677[7]);var inst_26654 = (state_26677[13]);var inst_26654__$1 = topic_fn.call(null,inst_26606);var inst_26655 = cljs.core.deref.call(null,mults);var inst_26656__$1 = cljs.core.get.call(null,inst_26655,inst_26654__$1);var state_26677__$1 = (function (){var statearr_26685 = state_26677;(statearr_26685[12] = inst_26656__$1);
(statearr_26685[13] = inst_26654__$1);
return statearr_26685;
})();if(cljs.core.truth_(inst_26656__$1))
{var statearr_26686_26730 = state_26677__$1;(statearr_26686_26730[1] = 19);
} else
{var statearr_26687_26731 = state_26677__$1;(statearr_26687_26731[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 7))
{var inst_26673 = (state_26677[2]);var state_26677__$1 = state_26677;var statearr_26688_26732 = state_26677__$1;(statearr_26688_26732[2] = inst_26673);
(statearr_26688_26732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 8))
{var inst_26619 = (state_26677[10]);var inst_26618 = (state_26677[11]);var inst_26621 = (inst_26619 < inst_26618);var inst_26622 = inst_26621;var state_26677__$1 = state_26677;if(cljs.core.truth_(inst_26622))
{var statearr_26692_26733 = state_26677__$1;(statearr_26692_26733[1] = 10);
} else
{var statearr_26693_26734 = state_26677__$1;(statearr_26693_26734[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 9))
{var inst_26652 = (state_26677[2]);var state_26677__$1 = state_26677;var statearr_26694_26735 = state_26677__$1;(statearr_26694_26735[2] = inst_26652);
(statearr_26694_26735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 10))
{var inst_26616 = (state_26677[8]);var inst_26617 = (state_26677[9]);var inst_26619 = (state_26677[10]);var inst_26618 = (state_26677[11]);var inst_26624 = cljs.core._nth.call(null,inst_26617,inst_26619);var inst_26625 = cljs.core.async.muxch_STAR_.call(null,inst_26624);var inst_26626 = cljs.core.async.close_BANG_.call(null,inst_26625);var inst_26627 = (inst_26619 + 1);var tmp26689 = inst_26616;var tmp26690 = inst_26617;var tmp26691 = inst_26618;var inst_26616__$1 = tmp26689;var inst_26617__$1 = tmp26690;var inst_26618__$1 = tmp26691;var inst_26619__$1 = inst_26627;var state_26677__$1 = (function (){var statearr_26695 = state_26677;(statearr_26695[14] = inst_26626);
(statearr_26695[8] = inst_26616__$1);
(statearr_26695[9] = inst_26617__$1);
(statearr_26695[10] = inst_26619__$1);
(statearr_26695[11] = inst_26618__$1);
return statearr_26695;
})();var statearr_26696_26736 = state_26677__$1;(statearr_26696_26736[2] = null);
(statearr_26696_26736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 11))
{var inst_26630 = (state_26677[15]);var inst_26616 = (state_26677[8]);var inst_26630__$1 = cljs.core.seq.call(null,inst_26616);var state_26677__$1 = (function (){var statearr_26697 = state_26677;(statearr_26697[15] = inst_26630__$1);
return statearr_26697;
})();if(inst_26630__$1)
{var statearr_26698_26737 = state_26677__$1;(statearr_26698_26737[1] = 13);
} else
{var statearr_26699_26738 = state_26677__$1;(statearr_26699_26738[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 12))
{var inst_26650 = (state_26677[2]);var state_26677__$1 = state_26677;var statearr_26700_26739 = state_26677__$1;(statearr_26700_26739[2] = inst_26650);
(statearr_26700_26739[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 13))
{var inst_26630 = (state_26677[15]);var inst_26632 = cljs.core.chunked_seq_QMARK_.call(null,inst_26630);var state_26677__$1 = state_26677;if(inst_26632)
{var statearr_26701_26740 = state_26677__$1;(statearr_26701_26740[1] = 16);
} else
{var statearr_26702_26741 = state_26677__$1;(statearr_26702_26741[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 14))
{var state_26677__$1 = state_26677;var statearr_26703_26742 = state_26677__$1;(statearr_26703_26742[2] = null);
(statearr_26703_26742[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 15))
{var inst_26648 = (state_26677[2]);var state_26677__$1 = state_26677;var statearr_26704_26743 = state_26677__$1;(statearr_26704_26743[2] = inst_26648);
(statearr_26704_26743[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 16))
{var inst_26630 = (state_26677[15]);var inst_26634 = cljs.core.chunk_first.call(null,inst_26630);var inst_26635 = cljs.core.chunk_rest.call(null,inst_26630);var inst_26636 = cljs.core.count.call(null,inst_26634);var inst_26616 = inst_26635;var inst_26617 = inst_26634;var inst_26618 = inst_26636;var inst_26619 = 0;var state_26677__$1 = (function (){var statearr_26705 = state_26677;(statearr_26705[8] = inst_26616);
(statearr_26705[9] = inst_26617);
(statearr_26705[10] = inst_26619);
(statearr_26705[11] = inst_26618);
return statearr_26705;
})();var statearr_26706_26744 = state_26677__$1;(statearr_26706_26744[2] = null);
(statearr_26706_26744[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 17))
{var inst_26630 = (state_26677[15]);var inst_26639 = cljs.core.first.call(null,inst_26630);var inst_26640 = cljs.core.async.muxch_STAR_.call(null,inst_26639);var inst_26641 = cljs.core.async.close_BANG_.call(null,inst_26640);var inst_26642 = cljs.core.next.call(null,inst_26630);var inst_26616 = inst_26642;var inst_26617 = null;var inst_26618 = 0;var inst_26619 = 0;var state_26677__$1 = (function (){var statearr_26707 = state_26677;(statearr_26707[8] = inst_26616);
(statearr_26707[9] = inst_26617);
(statearr_26707[16] = inst_26641);
(statearr_26707[10] = inst_26619);
(statearr_26707[11] = inst_26618);
return statearr_26707;
})();var statearr_26708_26745 = state_26677__$1;(statearr_26708_26745[2] = null);
(statearr_26708_26745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 18))
{var inst_26645 = (state_26677[2]);var state_26677__$1 = state_26677;var statearr_26709_26746 = state_26677__$1;(statearr_26709_26746[2] = inst_26645);
(statearr_26709_26746[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 19))
{var state_26677__$1 = state_26677;var statearr_26710_26747 = state_26677__$1;(statearr_26710_26747[2] = null);
(statearr_26710_26747[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 20))
{var state_26677__$1 = state_26677;var statearr_26711_26748 = state_26677__$1;(statearr_26711_26748[2] = null);
(statearr_26711_26748[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 21))
{var inst_26670 = (state_26677[2]);var state_26677__$1 = (function (){var statearr_26712 = state_26677;(statearr_26712[17] = inst_26670);
return statearr_26712;
})();var statearr_26713_26749 = state_26677__$1;(statearr_26713_26749[2] = null);
(statearr_26713_26749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 22))
{var inst_26667 = (state_26677[2]);var state_26677__$1 = state_26677;var statearr_26714_26750 = state_26677__$1;(statearr_26714_26750[2] = inst_26667);
(statearr_26714_26750[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 23))
{var inst_26654 = (state_26677[13]);var inst_26658 = (state_26677[2]);var inst_26659 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26654);var state_26677__$1 = (function (){var statearr_26715 = state_26677;(statearr_26715[18] = inst_26658);
return statearr_26715;
})();var statearr_26716_26751 = state_26677__$1;(statearr_26716_26751[2] = inst_26659);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26677__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26678 === 24))
{var inst_26656 = (state_26677[12]);var inst_26606 = (state_26677[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26677,23,Object,null,22);var inst_26663 = cljs.core.async.muxch_STAR_.call(null,inst_26656);var state_26677__$1 = state_26677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26677__$1,25,inst_26663,inst_26606);
} else
{if((state_val_26678 === 25))
{var inst_26665 = (state_26677[2]);var state_26677__$1 = state_26677;var statearr_26717_26752 = state_26677__$1;(statearr_26717_26752[2] = inst_26665);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26677__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_26721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26721[0] = state_machine__5548__auto__);
(statearr_26721[1] = 1);
return statearr_26721;
});
var state_machine__5548__auto____1 = (function (state_26677){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26677);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26722){if((e26722 instanceof Object))
{var ex__5551__auto__ = e26722;var statearr_26723_26753 = state_26677;(statearr_26723_26753[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26754 = state_26677;
state_26677 = G__26754;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26677){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26724 = f__5563__auto__.call(null);(statearr_26724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26725);
return statearr_26724;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___26891 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26861){var state_val_26862 = (state_26861[1]);if((state_val_26862 === 1))
{var state_26861__$1 = state_26861;var statearr_26863_26892 = state_26861__$1;(statearr_26863_26892[2] = null);
(statearr_26863_26892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 2))
{var inst_26824 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26825 = 0;var state_26861__$1 = (function (){var statearr_26864 = state_26861;(statearr_26864[7] = inst_26824);
(statearr_26864[8] = inst_26825);
return statearr_26864;
})();var statearr_26865_26893 = state_26861__$1;(statearr_26865_26893[2] = null);
(statearr_26865_26893[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 3))
{var inst_26859 = (state_26861[2]);var state_26861__$1 = state_26861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26861__$1,inst_26859);
} else
{if((state_val_26862 === 4))
{var inst_26825 = (state_26861[8]);var inst_26827 = (inst_26825 < cnt);var state_26861__$1 = state_26861;if(cljs.core.truth_(inst_26827))
{var statearr_26866_26894 = state_26861__$1;(statearr_26866_26894[1] = 6);
} else
{var statearr_26867_26895 = state_26861__$1;(statearr_26867_26895[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 5))
{var inst_26845 = (state_26861[2]);var state_26861__$1 = (function (){var statearr_26868 = state_26861;(statearr_26868[9] = inst_26845);
return statearr_26868;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26861__$1,12,dchan);
} else
{if((state_val_26862 === 6))
{var state_26861__$1 = state_26861;var statearr_26869_26896 = state_26861__$1;(statearr_26869_26896[2] = null);
(statearr_26869_26896[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 7))
{var state_26861__$1 = state_26861;var statearr_26870_26897 = state_26861__$1;(statearr_26870_26897[2] = null);
(statearr_26870_26897[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 8))
{var inst_26843 = (state_26861[2]);var state_26861__$1 = state_26861;var statearr_26871_26898 = state_26861__$1;(statearr_26871_26898[2] = inst_26843);
(statearr_26871_26898[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 9))
{var inst_26825 = (state_26861[8]);var inst_26838 = (state_26861[2]);var inst_26839 = (inst_26825 + 1);var inst_26825__$1 = inst_26839;var state_26861__$1 = (function (){var statearr_26872 = state_26861;(statearr_26872[10] = inst_26838);
(statearr_26872[8] = inst_26825__$1);
return statearr_26872;
})();var statearr_26873_26899 = state_26861__$1;(statearr_26873_26899[2] = null);
(statearr_26873_26899[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 10))
{var inst_26829 = (state_26861[2]);var inst_26830 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26861__$1 = (function (){var statearr_26874 = state_26861;(statearr_26874[11] = inst_26829);
return statearr_26874;
})();var statearr_26875_26900 = state_26861__$1;(statearr_26875_26900[2] = inst_26830);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26861__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 11))
{var inst_26825 = (state_26861[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26861,10,Object,null,9);var inst_26834 = chs__$1.call(null,inst_26825);var inst_26835 = done.call(null,inst_26825);var inst_26836 = cljs.core.async.take_BANG_.call(null,inst_26834,inst_26835);var state_26861__$1 = state_26861;var statearr_26876_26901 = state_26861__$1;(statearr_26876_26901[2] = inst_26836);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26861__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 12))
{var inst_26847 = (state_26861[12]);var inst_26847__$1 = (state_26861[2]);var inst_26848 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26847__$1);var state_26861__$1 = (function (){var statearr_26877 = state_26861;(statearr_26877[12] = inst_26847__$1);
return statearr_26877;
})();if(cljs.core.truth_(inst_26848))
{var statearr_26878_26902 = state_26861__$1;(statearr_26878_26902[1] = 13);
} else
{var statearr_26879_26903 = state_26861__$1;(statearr_26879_26903[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 13))
{var inst_26850 = cljs.core.async.close_BANG_.call(null,out);var state_26861__$1 = state_26861;var statearr_26880_26904 = state_26861__$1;(statearr_26880_26904[2] = inst_26850);
(statearr_26880_26904[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 14))
{var inst_26847 = (state_26861[12]);var inst_26852 = cljs.core.apply.call(null,f,inst_26847);var state_26861__$1 = state_26861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26861__$1,16,out,inst_26852);
} else
{if((state_val_26862 === 15))
{var inst_26857 = (state_26861[2]);var state_26861__$1 = state_26861;var statearr_26881_26905 = state_26861__$1;(statearr_26881_26905[2] = inst_26857);
(statearr_26881_26905[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26862 === 16))
{var inst_26854 = (state_26861[2]);var state_26861__$1 = (function (){var statearr_26882 = state_26861;(statearr_26882[13] = inst_26854);
return statearr_26882;
})();var statearr_26883_26906 = state_26861__$1;(statearr_26883_26906[2] = null);
(statearr_26883_26906[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_26887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26887[0] = state_machine__5548__auto__);
(statearr_26887[1] = 1);
return statearr_26887;
});
var state_machine__5548__auto____1 = (function (state_26861){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26861);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26888){if((e26888 instanceof Object))
{var ex__5551__auto__ = e26888;var statearr_26889_26907 = state_26861;(statearr_26889_26907[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26908 = state_26861;
state_26861 = G__26908;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26861){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26890 = f__5563__auto__.call(null);(statearr_26890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26891);
return statearr_26890;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27016 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26992){var state_val_26993 = (state_26992[1]);if((state_val_26993 === 1))
{var inst_26963 = cljs.core.vec.call(null,chs);var inst_26964 = inst_26963;var state_26992__$1 = (function (){var statearr_26994 = state_26992;(statearr_26994[7] = inst_26964);
return statearr_26994;
})();var statearr_26995_27017 = state_26992__$1;(statearr_26995_27017[2] = null);
(statearr_26995_27017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26993 === 2))
{var inst_26964 = (state_26992[7]);var inst_26966 = cljs.core.count.call(null,inst_26964);var inst_26967 = (inst_26966 > 0);var state_26992__$1 = state_26992;if(cljs.core.truth_(inst_26967))
{var statearr_26996_27018 = state_26992__$1;(statearr_26996_27018[1] = 4);
} else
{var statearr_26997_27019 = state_26992__$1;(statearr_26997_27019[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26993 === 3))
{var inst_26990 = (state_26992[2]);var state_26992__$1 = state_26992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26992__$1,inst_26990);
} else
{if((state_val_26993 === 4))
{var inst_26964 = (state_26992[7]);var state_26992__$1 = state_26992;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26992__$1,7,inst_26964);
} else
{if((state_val_26993 === 5))
{var inst_26986 = cljs.core.async.close_BANG_.call(null,out);var state_26992__$1 = state_26992;var statearr_26998_27020 = state_26992__$1;(statearr_26998_27020[2] = inst_26986);
(statearr_26998_27020[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26993 === 6))
{var inst_26988 = (state_26992[2]);var state_26992__$1 = state_26992;var statearr_26999_27021 = state_26992__$1;(statearr_26999_27021[2] = inst_26988);
(statearr_26999_27021[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26993 === 7))
{var inst_26971 = (state_26992[8]);var inst_26972 = (state_26992[9]);var inst_26971__$1 = (state_26992[2]);var inst_26972__$1 = cljs.core.nth.call(null,inst_26971__$1,0,null);var inst_26973 = cljs.core.nth.call(null,inst_26971__$1,1,null);var inst_26974 = (inst_26972__$1 == null);var state_26992__$1 = (function (){var statearr_27000 = state_26992;(statearr_27000[10] = inst_26973);
(statearr_27000[8] = inst_26971__$1);
(statearr_27000[9] = inst_26972__$1);
return statearr_27000;
})();if(cljs.core.truth_(inst_26974))
{var statearr_27001_27022 = state_26992__$1;(statearr_27001_27022[1] = 8);
} else
{var statearr_27002_27023 = state_26992__$1;(statearr_27002_27023[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26993 === 8))
{var inst_26973 = (state_26992[10]);var inst_26971 = (state_26992[8]);var inst_26972 = (state_26992[9]);var inst_26964 = (state_26992[7]);var inst_26976 = (function (){var c = inst_26973;var v = inst_26972;var vec__26969 = inst_26971;var cs = inst_26964;return ((function (c,v,vec__26969,cs,inst_26973,inst_26971,inst_26972,inst_26964,state_val_26993){
return (function (p1__26909_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26909_SHARP_);
});
;})(c,v,vec__26969,cs,inst_26973,inst_26971,inst_26972,inst_26964,state_val_26993))
})();var inst_26977 = cljs.core.filterv.call(null,inst_26976,inst_26964);var inst_26964__$1 = inst_26977;var state_26992__$1 = (function (){var statearr_27003 = state_26992;(statearr_27003[7] = inst_26964__$1);
return statearr_27003;
})();var statearr_27004_27024 = state_26992__$1;(statearr_27004_27024[2] = null);
(statearr_27004_27024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26993 === 9))
{var inst_26972 = (state_26992[9]);var state_26992__$1 = state_26992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26992__$1,11,out,inst_26972);
} else
{if((state_val_26993 === 10))
{var inst_26984 = (state_26992[2]);var state_26992__$1 = state_26992;var statearr_27006_27025 = state_26992__$1;(statearr_27006_27025[2] = inst_26984);
(statearr_27006_27025[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26993 === 11))
{var inst_26964 = (state_26992[7]);var inst_26981 = (state_26992[2]);var tmp27005 = inst_26964;var inst_26964__$1 = tmp27005;var state_26992__$1 = (function (){var statearr_27007 = state_26992;(statearr_27007[11] = inst_26981);
(statearr_27007[7] = inst_26964__$1);
return statearr_27007;
})();var statearr_27008_27026 = state_26992__$1;(statearr_27008_27026[2] = null);
(statearr_27008_27026[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27012 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27012[0] = state_machine__5548__auto__);
(statearr_27012[1] = 1);
return statearr_27012;
});
var state_machine__5548__auto____1 = (function (state_26992){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26992);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27013){if((e27013 instanceof Object))
{var ex__5551__auto__ = e27013;var statearr_27014_27027 = state_26992;(statearr_27014_27027[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27028 = state_26992;
state_26992 = G__27028;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26992){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27015 = f__5563__auto__.call(null);(statearr_27015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27016);
return statearr_27015;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27098){var state_val_27099 = (state_27098[1]);if((state_val_27099 === 1))
{var inst_27075 = 0;var state_27098__$1 = (function (){var statearr_27100 = state_27098;(statearr_27100[7] = inst_27075);
return statearr_27100;
})();var statearr_27101_27122 = state_27098__$1;(statearr_27101_27122[2] = null);
(statearr_27101_27122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27099 === 2))
{var inst_27075 = (state_27098[7]);var inst_27077 = (inst_27075 < n);var state_27098__$1 = state_27098;if(cljs.core.truth_(inst_27077))
{var statearr_27102_27123 = state_27098__$1;(statearr_27102_27123[1] = 4);
} else
{var statearr_27103_27124 = state_27098__$1;(statearr_27103_27124[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27099 === 3))
{var inst_27095 = (state_27098[2]);var inst_27096 = cljs.core.async.close_BANG_.call(null,out);var state_27098__$1 = (function (){var statearr_27104 = state_27098;(statearr_27104[8] = inst_27095);
return statearr_27104;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27098__$1,inst_27096);
} else
{if((state_val_27099 === 4))
{var state_27098__$1 = state_27098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27098__$1,7,ch);
} else
{if((state_val_27099 === 5))
{var state_27098__$1 = state_27098;var statearr_27105_27125 = state_27098__$1;(statearr_27105_27125[2] = null);
(statearr_27105_27125[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27099 === 6))
{var inst_27093 = (state_27098[2]);var state_27098__$1 = state_27098;var statearr_27106_27126 = state_27098__$1;(statearr_27106_27126[2] = inst_27093);
(statearr_27106_27126[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27099 === 7))
{var inst_27080 = (state_27098[9]);var inst_27080__$1 = (state_27098[2]);var inst_27081 = (inst_27080__$1 == null);var inst_27082 = cljs.core.not.call(null,inst_27081);var state_27098__$1 = (function (){var statearr_27107 = state_27098;(statearr_27107[9] = inst_27080__$1);
return statearr_27107;
})();if(inst_27082)
{var statearr_27108_27127 = state_27098__$1;(statearr_27108_27127[1] = 8);
} else
{var statearr_27109_27128 = state_27098__$1;(statearr_27109_27128[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27099 === 8))
{var inst_27080 = (state_27098[9]);var state_27098__$1 = state_27098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27098__$1,11,out,inst_27080);
} else
{if((state_val_27099 === 9))
{var state_27098__$1 = state_27098;var statearr_27110_27129 = state_27098__$1;(statearr_27110_27129[2] = null);
(statearr_27110_27129[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27099 === 10))
{var inst_27090 = (state_27098[2]);var state_27098__$1 = state_27098;var statearr_27111_27130 = state_27098__$1;(statearr_27111_27130[2] = inst_27090);
(statearr_27111_27130[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27099 === 11))
{var inst_27075 = (state_27098[7]);var inst_27085 = (state_27098[2]);var inst_27086 = (inst_27075 + 1);var inst_27075__$1 = inst_27086;var state_27098__$1 = (function (){var statearr_27112 = state_27098;(statearr_27112[7] = inst_27075__$1);
(statearr_27112[10] = inst_27085);
return statearr_27112;
})();var statearr_27113_27131 = state_27098__$1;(statearr_27113_27131[2] = null);
(statearr_27113_27131[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27117 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27117[0] = state_machine__5548__auto__);
(statearr_27117[1] = 1);
return statearr_27117;
});
var state_machine__5548__auto____1 = (function (state_27098){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27098);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27118){if((e27118 instanceof Object))
{var ex__5551__auto__ = e27118;var statearr_27119_27132 = state_27098;(statearr_27119_27132[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27133 = state_27098;
state_27098 = G__27133;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27098){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27120 = f__5563__auto__.call(null);(statearr_27120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27121);
return statearr_27120;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27230 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27205){var state_val_27206 = (state_27205[1]);if((state_val_27206 === 1))
{var inst_27182 = null;var state_27205__$1 = (function (){var statearr_27207 = state_27205;(statearr_27207[7] = inst_27182);
return statearr_27207;
})();var statearr_27208_27231 = state_27205__$1;(statearr_27208_27231[2] = null);
(statearr_27208_27231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27206 === 2))
{var state_27205__$1 = state_27205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27205__$1,4,ch);
} else
{if((state_val_27206 === 3))
{var inst_27202 = (state_27205[2]);var inst_27203 = cljs.core.async.close_BANG_.call(null,out);var state_27205__$1 = (function (){var statearr_27209 = state_27205;(statearr_27209[8] = inst_27202);
return statearr_27209;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27205__$1,inst_27203);
} else
{if((state_val_27206 === 4))
{var inst_27185 = (state_27205[9]);var inst_27185__$1 = (state_27205[2]);var inst_27186 = (inst_27185__$1 == null);var inst_27187 = cljs.core.not.call(null,inst_27186);var state_27205__$1 = (function (){var statearr_27210 = state_27205;(statearr_27210[9] = inst_27185__$1);
return statearr_27210;
})();if(inst_27187)
{var statearr_27211_27232 = state_27205__$1;(statearr_27211_27232[1] = 5);
} else
{var statearr_27212_27233 = state_27205__$1;(statearr_27212_27233[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27206 === 5))
{var inst_27182 = (state_27205[7]);var inst_27185 = (state_27205[9]);var inst_27189 = cljs.core._EQ_.call(null,inst_27185,inst_27182);var state_27205__$1 = state_27205;if(inst_27189)
{var statearr_27213_27234 = state_27205__$1;(statearr_27213_27234[1] = 8);
} else
{var statearr_27214_27235 = state_27205__$1;(statearr_27214_27235[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27206 === 6))
{var state_27205__$1 = state_27205;var statearr_27216_27236 = state_27205__$1;(statearr_27216_27236[2] = null);
(statearr_27216_27236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27206 === 7))
{var inst_27200 = (state_27205[2]);var state_27205__$1 = state_27205;var statearr_27217_27237 = state_27205__$1;(statearr_27217_27237[2] = inst_27200);
(statearr_27217_27237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27206 === 8))
{var inst_27182 = (state_27205[7]);var tmp27215 = inst_27182;var inst_27182__$1 = tmp27215;var state_27205__$1 = (function (){var statearr_27218 = state_27205;(statearr_27218[7] = inst_27182__$1);
return statearr_27218;
})();var statearr_27219_27238 = state_27205__$1;(statearr_27219_27238[2] = null);
(statearr_27219_27238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27206 === 9))
{var inst_27185 = (state_27205[9]);var state_27205__$1 = state_27205;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27205__$1,11,out,inst_27185);
} else
{if((state_val_27206 === 10))
{var inst_27197 = (state_27205[2]);var state_27205__$1 = state_27205;var statearr_27220_27239 = state_27205__$1;(statearr_27220_27239[2] = inst_27197);
(statearr_27220_27239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27206 === 11))
{var inst_27185 = (state_27205[9]);var inst_27194 = (state_27205[2]);var inst_27182 = inst_27185;var state_27205__$1 = (function (){var statearr_27221 = state_27205;(statearr_27221[7] = inst_27182);
(statearr_27221[10] = inst_27194);
return statearr_27221;
})();var statearr_27222_27240 = state_27205__$1;(statearr_27222_27240[2] = null);
(statearr_27222_27240[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27226 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27226[0] = state_machine__5548__auto__);
(statearr_27226[1] = 1);
return statearr_27226;
});
var state_machine__5548__auto____1 = (function (state_27205){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27205);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27227){if((e27227 instanceof Object))
{var ex__5551__auto__ = e27227;var statearr_27228_27241 = state_27205;(statearr_27228_27241[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27205);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27227;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27242 = state_27205;
state_27205 = G__27242;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27205){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27229 = f__5563__auto__.call(null);(statearr_27229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27230);
return statearr_27229;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27377 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27347){var state_val_27348 = (state_27347[1]);if((state_val_27348 === 1))
{var inst_27310 = (new Array(n));var inst_27311 = inst_27310;var inst_27312 = 0;var state_27347__$1 = (function (){var statearr_27349 = state_27347;(statearr_27349[7] = inst_27312);
(statearr_27349[8] = inst_27311);
return statearr_27349;
})();var statearr_27350_27378 = state_27347__$1;(statearr_27350_27378[2] = null);
(statearr_27350_27378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 2))
{var state_27347__$1 = state_27347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27347__$1,4,ch);
} else
{if((state_val_27348 === 3))
{var inst_27345 = (state_27347[2]);var state_27347__$1 = state_27347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27347__$1,inst_27345);
} else
{if((state_val_27348 === 4))
{var inst_27315 = (state_27347[9]);var inst_27315__$1 = (state_27347[2]);var inst_27316 = (inst_27315__$1 == null);var inst_27317 = cljs.core.not.call(null,inst_27316);var state_27347__$1 = (function (){var statearr_27351 = state_27347;(statearr_27351[9] = inst_27315__$1);
return statearr_27351;
})();if(inst_27317)
{var statearr_27352_27379 = state_27347__$1;(statearr_27352_27379[1] = 5);
} else
{var statearr_27353_27380 = state_27347__$1;(statearr_27353_27380[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 5))
{var inst_27312 = (state_27347[7]);var inst_27311 = (state_27347[8]);var inst_27320 = (state_27347[10]);var inst_27315 = (state_27347[9]);var inst_27319 = (inst_27311[inst_27312] = inst_27315);var inst_27320__$1 = (inst_27312 + 1);var inst_27321 = (inst_27320__$1 < n);var state_27347__$1 = (function (){var statearr_27354 = state_27347;(statearr_27354[11] = inst_27319);
(statearr_27354[10] = inst_27320__$1);
return statearr_27354;
})();if(cljs.core.truth_(inst_27321))
{var statearr_27355_27381 = state_27347__$1;(statearr_27355_27381[1] = 8);
} else
{var statearr_27356_27382 = state_27347__$1;(statearr_27356_27382[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 6))
{var inst_27312 = (state_27347[7]);var inst_27333 = (inst_27312 > 0);var state_27347__$1 = state_27347;if(cljs.core.truth_(inst_27333))
{var statearr_27358_27383 = state_27347__$1;(statearr_27358_27383[1] = 12);
} else
{var statearr_27359_27384 = state_27347__$1;(statearr_27359_27384[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 7))
{var inst_27343 = (state_27347[2]);var state_27347__$1 = state_27347;var statearr_27360_27385 = state_27347__$1;(statearr_27360_27385[2] = inst_27343);
(statearr_27360_27385[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 8))
{var inst_27311 = (state_27347[8]);var inst_27320 = (state_27347[10]);var tmp27357 = inst_27311;var inst_27311__$1 = tmp27357;var inst_27312 = inst_27320;var state_27347__$1 = (function (){var statearr_27361 = state_27347;(statearr_27361[7] = inst_27312);
(statearr_27361[8] = inst_27311__$1);
return statearr_27361;
})();var statearr_27362_27386 = state_27347__$1;(statearr_27362_27386[2] = null);
(statearr_27362_27386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 9))
{var inst_27311 = (state_27347[8]);var inst_27325 = cljs.core.vec.call(null,inst_27311);var state_27347__$1 = state_27347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27347__$1,11,out,inst_27325);
} else
{if((state_val_27348 === 10))
{var inst_27331 = (state_27347[2]);var state_27347__$1 = state_27347;var statearr_27363_27387 = state_27347__$1;(statearr_27363_27387[2] = inst_27331);
(statearr_27363_27387[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 11))
{var inst_27327 = (state_27347[2]);var inst_27328 = (new Array(n));var inst_27311 = inst_27328;var inst_27312 = 0;var state_27347__$1 = (function (){var statearr_27364 = state_27347;(statearr_27364[7] = inst_27312);
(statearr_27364[8] = inst_27311);
(statearr_27364[12] = inst_27327);
return statearr_27364;
})();var statearr_27365_27388 = state_27347__$1;(statearr_27365_27388[2] = null);
(statearr_27365_27388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 12))
{var inst_27311 = (state_27347[8]);var inst_27335 = cljs.core.vec.call(null,inst_27311);var state_27347__$1 = state_27347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27347__$1,15,out,inst_27335);
} else
{if((state_val_27348 === 13))
{var state_27347__$1 = state_27347;var statearr_27366_27389 = state_27347__$1;(statearr_27366_27389[2] = null);
(statearr_27366_27389[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 14))
{var inst_27340 = (state_27347[2]);var inst_27341 = cljs.core.async.close_BANG_.call(null,out);var state_27347__$1 = (function (){var statearr_27367 = state_27347;(statearr_27367[13] = inst_27340);
return statearr_27367;
})();var statearr_27368_27390 = state_27347__$1;(statearr_27368_27390[2] = inst_27341);
(statearr_27368_27390[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27348 === 15))
{var inst_27337 = (state_27347[2]);var state_27347__$1 = state_27347;var statearr_27369_27391 = state_27347__$1;(statearr_27369_27391[2] = inst_27337);
(statearr_27369_27391[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_27373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27373[0] = state_machine__5548__auto__);
(statearr_27373[1] = 1);
return statearr_27373;
});
var state_machine__5548__auto____1 = (function (state_27347){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27347);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27374){if((e27374 instanceof Object))
{var ex__5551__auto__ = e27374;var statearr_27375_27392 = state_27347;(statearr_27375_27392[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27393 = state_27347;
state_27347 = G__27393;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27347){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27376 = f__5563__auto__.call(null);(statearr_27376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27377);
return statearr_27376;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27536 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27506){var state_val_27507 = (state_27506[1]);if((state_val_27507 === 1))
{var inst_27465 = [];var inst_27466 = inst_27465;var inst_27467 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27506__$1 = (function (){var statearr_27508 = state_27506;(statearr_27508[7] = inst_27466);
(statearr_27508[8] = inst_27467);
return statearr_27508;
})();var statearr_27509_27537 = state_27506__$1;(statearr_27509_27537[2] = null);
(statearr_27509_27537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 2))
{var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27506__$1,4,ch);
} else
{if((state_val_27507 === 3))
{var inst_27504 = (state_27506[2]);var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27506__$1,inst_27504);
} else
{if((state_val_27507 === 4))
{var inst_27470 = (state_27506[9]);var inst_27470__$1 = (state_27506[2]);var inst_27471 = (inst_27470__$1 == null);var inst_27472 = cljs.core.not.call(null,inst_27471);var state_27506__$1 = (function (){var statearr_27510 = state_27506;(statearr_27510[9] = inst_27470__$1);
return statearr_27510;
})();if(inst_27472)
{var statearr_27511_27538 = state_27506__$1;(statearr_27511_27538[1] = 5);
} else
{var statearr_27512_27539 = state_27506__$1;(statearr_27512_27539[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 5))
{var inst_27474 = (state_27506[10]);var inst_27467 = (state_27506[8]);var inst_27470 = (state_27506[9]);var inst_27474__$1 = f.call(null,inst_27470);var inst_27475 = cljs.core._EQ_.call(null,inst_27474__$1,inst_27467);var inst_27476 = cljs.core.keyword_identical_QMARK_.call(null,inst_27467,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27477 = (inst_27475) || (inst_27476);var state_27506__$1 = (function (){var statearr_27513 = state_27506;(statearr_27513[10] = inst_27474__$1);
return statearr_27513;
})();if(cljs.core.truth_(inst_27477))
{var statearr_27514_27540 = state_27506__$1;(statearr_27514_27540[1] = 8);
} else
{var statearr_27515_27541 = state_27506__$1;(statearr_27515_27541[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 6))
{var inst_27466 = (state_27506[7]);var inst_27491 = inst_27466.length;var inst_27492 = (inst_27491 > 0);var state_27506__$1 = state_27506;if(cljs.core.truth_(inst_27492))
{var statearr_27517_27542 = state_27506__$1;(statearr_27517_27542[1] = 12);
} else
{var statearr_27518_27543 = state_27506__$1;(statearr_27518_27543[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 7))
{var inst_27502 = (state_27506[2]);var state_27506__$1 = state_27506;var statearr_27519_27544 = state_27506__$1;(statearr_27519_27544[2] = inst_27502);
(statearr_27519_27544[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 8))
{var inst_27474 = (state_27506[10]);var inst_27466 = (state_27506[7]);var inst_27470 = (state_27506[9]);var inst_27479 = inst_27466.push(inst_27470);var tmp27516 = inst_27466;var inst_27466__$1 = tmp27516;var inst_27467 = inst_27474;var state_27506__$1 = (function (){var statearr_27520 = state_27506;(statearr_27520[11] = inst_27479);
(statearr_27520[7] = inst_27466__$1);
(statearr_27520[8] = inst_27467);
return statearr_27520;
})();var statearr_27521_27545 = state_27506__$1;(statearr_27521_27545[2] = null);
(statearr_27521_27545[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 9))
{var inst_27466 = (state_27506[7]);var inst_27482 = cljs.core.vec.call(null,inst_27466);var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,11,out,inst_27482);
} else
{if((state_val_27507 === 10))
{var inst_27489 = (state_27506[2]);var state_27506__$1 = state_27506;var statearr_27522_27546 = state_27506__$1;(statearr_27522_27546[2] = inst_27489);
(statearr_27522_27546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 11))
{var inst_27474 = (state_27506[10]);var inst_27470 = (state_27506[9]);var inst_27484 = (state_27506[2]);var inst_27485 = [];var inst_27486 = inst_27485.push(inst_27470);var inst_27466 = inst_27485;var inst_27467 = inst_27474;var state_27506__$1 = (function (){var statearr_27523 = state_27506;(statearr_27523[12] = inst_27486);
(statearr_27523[13] = inst_27484);
(statearr_27523[7] = inst_27466);
(statearr_27523[8] = inst_27467);
return statearr_27523;
})();var statearr_27524_27547 = state_27506__$1;(statearr_27524_27547[2] = null);
(statearr_27524_27547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 12))
{var inst_27466 = (state_27506[7]);var inst_27494 = cljs.core.vec.call(null,inst_27466);var state_27506__$1 = state_27506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27506__$1,15,out,inst_27494);
} else
{if((state_val_27507 === 13))
{var state_27506__$1 = state_27506;var statearr_27525_27548 = state_27506__$1;(statearr_27525_27548[2] = null);
(statearr_27525_27548[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 14))
{var inst_27499 = (state_27506[2]);var inst_27500 = cljs.core.async.close_BANG_.call(null,out);var state_27506__$1 = (function (){var statearr_27526 = state_27506;(statearr_27526[14] = inst_27499);
return statearr_27526;
})();var statearr_27527_27549 = state_27506__$1;(statearr_27527_27549[2] = inst_27500);
(statearr_27527_27549[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27507 === 15))
{var inst_27496 = (state_27506[2]);var state_27506__$1 = state_27506;var statearr_27528_27550 = state_27506__$1;(statearr_27528_27550[2] = inst_27496);
(statearr_27528_27550[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_27532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27532[0] = state_machine__5548__auto__);
(statearr_27532[1] = 1);
return statearr_27532;
});
var state_machine__5548__auto____1 = (function (state_27506){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27506);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27533){if((e27533 instanceof Object))
{var ex__5551__auto__ = e27533;var statearr_27534_27551 = state_27506;(statearr_27534_27551[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27552 = state_27506;
state_27506 = G__27552;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27506){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27535 = f__5563__auto__.call(null);(statearr_27535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27536);
return statearr_27535;
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