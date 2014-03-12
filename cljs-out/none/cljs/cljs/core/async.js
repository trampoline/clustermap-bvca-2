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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25026 = (function (f,fn_handler,meta25027){
this.f = f;
this.fn_handler = fn_handler;
this.meta25027 = meta25027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25026.cljs$lang$type = true;
cljs.core.async.t25026.cljs$lang$ctorStr = "cljs.core.async/t25026";
cljs.core.async.t25026.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25026");
});
cljs.core.async.t25026.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25028){var self__ = this;
var _25028__$1 = this;return self__.meta25027;
});
cljs.core.async.t25026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25028,meta25027__$1){var self__ = this;
var _25028__$1 = this;return (new cljs.core.async.t25026(self__.f,self__.fn_handler,meta25027__$1));
});
cljs.core.async.__GT_t25026 = (function __GT_t25026(f__$1,fn_handler__$1,meta25027){return (new cljs.core.async.t25026(f__$1,fn_handler__$1,meta25027));
});
}
return (new cljs.core.async.t25026(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25030 = buff;if(G__25030)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__25030.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25030.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25030);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25030);
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
{var val_25031 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_25031);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_25031);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___25032 = n;var x_25033 = 0;while(true){
if((x_25033 < n__4289__auto___25032))
{(a[x_25033] = 0);
{
var G__25034 = (x_25033 + 1);
x_25033 = G__25034;
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
var G__25035 = (i + 1);
i = G__25035;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25039 = (function (flag,alt_flag,meta25040){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25040 = meta25040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25039.cljs$lang$type = true;
cljs.core.async.t25039.cljs$lang$ctorStr = "cljs.core.async/t25039";
cljs.core.async.t25039.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25039");
});
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t25039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t25039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25041){var self__ = this;
var _25041__$1 = this;return self__.meta25040;
});
cljs.core.async.t25039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25041,meta25040__$1){var self__ = this;
var _25041__$1 = this;return (new cljs.core.async.t25039(self__.flag,self__.alt_flag,meta25040__$1));
});
cljs.core.async.__GT_t25039 = (function __GT_t25039(flag__$1,alt_flag__$1,meta25040){return (new cljs.core.async.t25039(flag__$1,alt_flag__$1,meta25040));
});
}
return (new cljs.core.async.t25039(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25045 = (function (cb,flag,alt_handler,meta25046){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25046 = meta25046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25045.cljs$lang$type = true;
cljs.core.async.t25045.cljs$lang$ctorStr = "cljs.core.async/t25045";
cljs.core.async.t25045.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25045");
});
cljs.core.async.t25045.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25047){var self__ = this;
var _25047__$1 = this;return self__.meta25046;
});
cljs.core.async.t25045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25047,meta25046__$1){var self__ = this;
var _25047__$1 = this;return (new cljs.core.async.t25045(self__.cb,self__.flag,self__.alt_handler,meta25046__$1));
});
cljs.core.async.__GT_t25045 = (function __GT_t25045(cb__$1,flag__$1,alt_handler__$1,meta25046){return (new cljs.core.async.t25045(cb__$1,flag__$1,alt_handler__$1,meta25046));
});
}
return (new cljs.core.async.t25045(cb,flag,alt_handler,null));
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
return (function (p1__25048_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25048_SHARP_,port], null));
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
var G__25049 = (i + 1);
i = G__25049;
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
var alts_BANG___delegate = function (ports,p__25050){var map__25052 = p__25050;var map__25052__$1 = ((cljs.core.seq_QMARK_.call(null,map__25052))?cljs.core.apply.call(null,cljs.core.hash_map,map__25052):map__25052);var opts = map__25052__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__25050 = null;if (arguments.length > 1) {
  p__25050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25050);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__25053){
var ports = cljs.core.first(arglist__25053);
var p__25050 = cljs.core.rest(arglist__25053);
return alts_BANG___delegate(ports,p__25050);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t25061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25061 = (function (ch,f,map_LT_,meta25062){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25062 = meta25062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25061.cljs$lang$type = true;
cljs.core.async.t25061.cljs$lang$ctorStr = "cljs.core.async/t25061";
cljs.core.async.t25061.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25061");
});
cljs.core.async.t25061.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t25061.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t25064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25064 = (function (fn1,_,meta25062,ch,f,map_LT_,meta25065){
this.fn1 = fn1;
this._ = _;
this.meta25062 = meta25062;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta25065 = meta25065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25064.cljs$lang$type = true;
cljs.core.async.t25064.cljs$lang$ctorStr = "cljs.core.async/t25064";
cljs.core.async.t25064.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25064");
});
cljs.core.async.t25064.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t25064.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t25064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__25054_SHARP_){return f1.call(null,(((p1__25054_SHARP_ == null))?null:self__.f.call(null,p1__25054_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t25064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25066){var self__ = this;
var _25066__$1 = this;return self__.meta25065;
});
cljs.core.async.t25064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25066,meta25065__$1){var self__ = this;
var _25066__$1 = this;return (new cljs.core.async.t25064(self__.fn1,self__._,self__.meta25062,self__.ch,self__.f,self__.map_LT_,meta25065__$1));
});
cljs.core.async.__GT_t25064 = (function __GT_t25064(fn1__$1,___$2,meta25062__$1,ch__$2,f__$2,map_LT___$2,meta25065){return (new cljs.core.async.t25064(fn1__$1,___$2,meta25062__$1,ch__$2,f__$2,map_LT___$2,meta25065));
});
}
return (new cljs.core.async.t25064(fn1,___$1,self__.meta25062,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t25061.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25063){var self__ = this;
var _25063__$1 = this;return self__.meta25062;
});
cljs.core.async.t25061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25063,meta25062__$1){var self__ = this;
var _25063__$1 = this;return (new cljs.core.async.t25061(self__.ch,self__.f,self__.map_LT_,meta25062__$1));
});
cljs.core.async.__GT_t25061 = (function __GT_t25061(ch__$1,f__$1,map_LT___$1,meta25062){return (new cljs.core.async.t25061(ch__$1,f__$1,map_LT___$1,meta25062));
});
}
return (new cljs.core.async.t25061(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t25070 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25070 = (function (ch,f,map_GT_,meta25071){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta25071 = meta25071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25070.cljs$lang$type = true;
cljs.core.async.t25070.cljs$lang$ctorStr = "cljs.core.async/t25070";
cljs.core.async.t25070.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25070");
});
cljs.core.async.t25070.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t25070.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25070.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25072){var self__ = this;
var _25072__$1 = this;return self__.meta25071;
});
cljs.core.async.t25070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25072,meta25071__$1){var self__ = this;
var _25072__$1 = this;return (new cljs.core.async.t25070(self__.ch,self__.f,self__.map_GT_,meta25071__$1));
});
cljs.core.async.__GT_t25070 = (function __GT_t25070(ch__$1,f__$1,map_GT___$1,meta25071){return (new cljs.core.async.t25070(ch__$1,f__$1,map_GT___$1,meta25071));
});
}
return (new cljs.core.async.t25070(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t25076 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25076 = (function (ch,p,filter_GT_,meta25077){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta25077 = meta25077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25076.cljs$lang$type = true;
cljs.core.async.t25076.cljs$lang$ctorStr = "cljs.core.async/t25076";
cljs.core.async.t25076.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25076");
});
cljs.core.async.t25076.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t25076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t25076.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t25076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t25076.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t25076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t25076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25078){var self__ = this;
var _25078__$1 = this;return self__.meta25077;
});
cljs.core.async.t25076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25078,meta25077__$1){var self__ = this;
var _25078__$1 = this;return (new cljs.core.async.t25076(self__.ch,self__.p,self__.filter_GT_,meta25077__$1));
});
cljs.core.async.__GT_t25076 = (function __GT_t25076(ch__$1,p__$1,filter_GT___$1,meta25077){return (new cljs.core.async.t25076(ch__$1,p__$1,filter_GT___$1,meta25077));
});
}
return (new cljs.core.async.t25076(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___25161 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25140){var state_val_25141 = (state_25140[1]);if((state_val_25141 === 1))
{var state_25140__$1 = state_25140;var statearr_25142_25162 = state_25140__$1;(statearr_25142_25162[2] = null);
(statearr_25142_25162[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25141 === 2))
{var state_25140__$1 = state_25140;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25140__$1,4,ch);
} else
{if((state_val_25141 === 3))
{var inst_25138 = (state_25140[2]);var state_25140__$1 = state_25140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25140__$1,inst_25138);
} else
{if((state_val_25141 === 4))
{var inst_25122 = (state_25140[7]);var inst_25122__$1 = (state_25140[2]);var inst_25123 = (inst_25122__$1 == null);var state_25140__$1 = (function (){var statearr_25143 = state_25140;(statearr_25143[7] = inst_25122__$1);
return statearr_25143;
})();if(cljs.core.truth_(inst_25123))
{var statearr_25144_25163 = state_25140__$1;(statearr_25144_25163[1] = 5);
} else
{var statearr_25145_25164 = state_25140__$1;(statearr_25145_25164[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25141 === 5))
{var inst_25125 = cljs.core.async.close_BANG_.call(null,out);var state_25140__$1 = state_25140;var statearr_25146_25165 = state_25140__$1;(statearr_25146_25165[2] = inst_25125);
(statearr_25146_25165[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25141 === 6))
{var inst_25122 = (state_25140[7]);var inst_25127 = p.call(null,inst_25122);var state_25140__$1 = state_25140;if(cljs.core.truth_(inst_25127))
{var statearr_25147_25166 = state_25140__$1;(statearr_25147_25166[1] = 8);
} else
{var statearr_25148_25167 = state_25140__$1;(statearr_25148_25167[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25141 === 7))
{var inst_25136 = (state_25140[2]);var state_25140__$1 = state_25140;var statearr_25149_25168 = state_25140__$1;(statearr_25149_25168[2] = inst_25136);
(statearr_25149_25168[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25141 === 8))
{var inst_25122 = (state_25140[7]);var state_25140__$1 = state_25140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25140__$1,11,out,inst_25122);
} else
{if((state_val_25141 === 9))
{var state_25140__$1 = state_25140;var statearr_25150_25169 = state_25140__$1;(statearr_25150_25169[2] = null);
(statearr_25150_25169[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25141 === 10))
{var inst_25133 = (state_25140[2]);var state_25140__$1 = (function (){var statearr_25151 = state_25140;(statearr_25151[8] = inst_25133);
return statearr_25151;
})();var statearr_25152_25170 = state_25140__$1;(statearr_25152_25170[2] = null);
(statearr_25152_25170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25141 === 11))
{var inst_25130 = (state_25140[2]);var state_25140__$1 = state_25140;var statearr_25153_25171 = state_25140__$1;(statearr_25153_25171[2] = inst_25130);
(statearr_25153_25171[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_25157 = [null,null,null,null,null,null,null,null,null];(statearr_25157[0] = state_machine__5548__auto__);
(statearr_25157[1] = 1);
return statearr_25157;
});
var state_machine__5548__auto____1 = (function (state_25140){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25140);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25158){if((e25158 instanceof Object))
{var ex__5551__auto__ = e25158;var statearr_25159_25172 = state_25140;(statearr_25159_25172[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25140);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25173 = state_25140;
state_25140 = G__25173;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25140){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25160 = f__5563__auto__.call(null);(statearr_25160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25161);
return statearr_25160;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25325){var state_val_25326 = (state_25325[1]);if((state_val_25326 === 1))
{var state_25325__$1 = state_25325;var statearr_25327_25364 = state_25325__$1;(statearr_25327_25364[2] = null);
(statearr_25327_25364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 2))
{var state_25325__$1 = state_25325;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25325__$1,4,in$);
} else
{if((state_val_25326 === 3))
{var inst_25323 = (state_25325[2]);var state_25325__$1 = state_25325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25325__$1,inst_25323);
} else
{if((state_val_25326 === 4))
{var inst_25271 = (state_25325[7]);var inst_25271__$1 = (state_25325[2]);var inst_25272 = (inst_25271__$1 == null);var state_25325__$1 = (function (){var statearr_25328 = state_25325;(statearr_25328[7] = inst_25271__$1);
return statearr_25328;
})();if(cljs.core.truth_(inst_25272))
{var statearr_25329_25365 = state_25325__$1;(statearr_25329_25365[1] = 5);
} else
{var statearr_25330_25366 = state_25325__$1;(statearr_25330_25366[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 5))
{var inst_25274 = cljs.core.async.close_BANG_.call(null,out);var state_25325__$1 = state_25325;var statearr_25331_25367 = state_25325__$1;(statearr_25331_25367[2] = inst_25274);
(statearr_25331_25367[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 6))
{var inst_25271 = (state_25325[7]);var inst_25276 = f.call(null,inst_25271);var inst_25281 = cljs.core.seq.call(null,inst_25276);var inst_25282 = inst_25281;var inst_25283 = null;var inst_25284 = 0;var inst_25285 = 0;var state_25325__$1 = (function (){var statearr_25332 = state_25325;(statearr_25332[8] = inst_25283);
(statearr_25332[9] = inst_25282);
(statearr_25332[10] = inst_25285);
(statearr_25332[11] = inst_25284);
return statearr_25332;
})();var statearr_25333_25368 = state_25325__$1;(statearr_25333_25368[2] = null);
(statearr_25333_25368[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 7))
{var inst_25321 = (state_25325[2]);var state_25325__$1 = state_25325;var statearr_25334_25369 = state_25325__$1;(statearr_25334_25369[2] = inst_25321);
(statearr_25334_25369[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 8))
{var inst_25285 = (state_25325[10]);var inst_25284 = (state_25325[11]);var inst_25287 = (inst_25285 < inst_25284);var inst_25288 = inst_25287;var state_25325__$1 = state_25325;if(cljs.core.truth_(inst_25288))
{var statearr_25335_25370 = state_25325__$1;(statearr_25335_25370[1] = 10);
} else
{var statearr_25336_25371 = state_25325__$1;(statearr_25336_25371[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 9))
{var inst_25318 = (state_25325[2]);var state_25325__$1 = (function (){var statearr_25337 = state_25325;(statearr_25337[12] = inst_25318);
return statearr_25337;
})();var statearr_25338_25372 = state_25325__$1;(statearr_25338_25372[2] = null);
(statearr_25338_25372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 10))
{var inst_25283 = (state_25325[8]);var inst_25285 = (state_25325[10]);var inst_25290 = cljs.core._nth.call(null,inst_25283,inst_25285);var state_25325__$1 = state_25325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25325__$1,13,out,inst_25290);
} else
{if((state_val_25326 === 11))
{var inst_25296 = (state_25325[13]);var inst_25282 = (state_25325[9]);var inst_25296__$1 = cljs.core.seq.call(null,inst_25282);var state_25325__$1 = (function (){var statearr_25342 = state_25325;(statearr_25342[13] = inst_25296__$1);
return statearr_25342;
})();if(inst_25296__$1)
{var statearr_25343_25373 = state_25325__$1;(statearr_25343_25373[1] = 14);
} else
{var statearr_25344_25374 = state_25325__$1;(statearr_25344_25374[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 12))
{var inst_25316 = (state_25325[2]);var state_25325__$1 = state_25325;var statearr_25345_25375 = state_25325__$1;(statearr_25345_25375[2] = inst_25316);
(statearr_25345_25375[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 13))
{var inst_25283 = (state_25325[8]);var inst_25282 = (state_25325[9]);var inst_25285 = (state_25325[10]);var inst_25284 = (state_25325[11]);var inst_25292 = (state_25325[2]);var inst_25293 = (inst_25285 + 1);var tmp25339 = inst_25283;var tmp25340 = inst_25282;var tmp25341 = inst_25284;var inst_25282__$1 = tmp25340;var inst_25283__$1 = tmp25339;var inst_25284__$1 = tmp25341;var inst_25285__$1 = inst_25293;var state_25325__$1 = (function (){var statearr_25346 = state_25325;(statearr_25346[14] = inst_25292);
(statearr_25346[8] = inst_25283__$1);
(statearr_25346[9] = inst_25282__$1);
(statearr_25346[10] = inst_25285__$1);
(statearr_25346[11] = inst_25284__$1);
return statearr_25346;
})();var statearr_25347_25376 = state_25325__$1;(statearr_25347_25376[2] = null);
(statearr_25347_25376[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 14))
{var inst_25296 = (state_25325[13]);var inst_25298 = cljs.core.chunked_seq_QMARK_.call(null,inst_25296);var state_25325__$1 = state_25325;if(inst_25298)
{var statearr_25348_25377 = state_25325__$1;(statearr_25348_25377[1] = 17);
} else
{var statearr_25349_25378 = state_25325__$1;(statearr_25349_25378[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 15))
{var state_25325__$1 = state_25325;var statearr_25350_25379 = state_25325__$1;(statearr_25350_25379[2] = null);
(statearr_25350_25379[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 16))
{var inst_25314 = (state_25325[2]);var state_25325__$1 = state_25325;var statearr_25351_25380 = state_25325__$1;(statearr_25351_25380[2] = inst_25314);
(statearr_25351_25380[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 17))
{var inst_25296 = (state_25325[13]);var inst_25300 = cljs.core.chunk_first.call(null,inst_25296);var inst_25301 = cljs.core.chunk_rest.call(null,inst_25296);var inst_25302 = cljs.core.count.call(null,inst_25300);var inst_25282 = inst_25301;var inst_25283 = inst_25300;var inst_25284 = inst_25302;var inst_25285 = 0;var state_25325__$1 = (function (){var statearr_25352 = state_25325;(statearr_25352[8] = inst_25283);
(statearr_25352[9] = inst_25282);
(statearr_25352[10] = inst_25285);
(statearr_25352[11] = inst_25284);
return statearr_25352;
})();var statearr_25353_25381 = state_25325__$1;(statearr_25353_25381[2] = null);
(statearr_25353_25381[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 18))
{var inst_25296 = (state_25325[13]);var inst_25305 = cljs.core.first.call(null,inst_25296);var state_25325__$1 = state_25325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25325__$1,20,out,inst_25305);
} else
{if((state_val_25326 === 19))
{var inst_25311 = (state_25325[2]);var state_25325__$1 = state_25325;var statearr_25354_25382 = state_25325__$1;(statearr_25354_25382[2] = inst_25311);
(statearr_25354_25382[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25326 === 20))
{var inst_25296 = (state_25325[13]);var inst_25307 = (state_25325[2]);var inst_25308 = cljs.core.next.call(null,inst_25296);var inst_25282 = inst_25308;var inst_25283 = null;var inst_25284 = 0;var inst_25285 = 0;var state_25325__$1 = (function (){var statearr_25355 = state_25325;(statearr_25355[8] = inst_25283);
(statearr_25355[9] = inst_25282);
(statearr_25355[10] = inst_25285);
(statearr_25355[15] = inst_25307);
(statearr_25355[11] = inst_25284);
return statearr_25355;
})();var statearr_25356_25383 = state_25325__$1;(statearr_25356_25383[2] = null);
(statearr_25356_25383[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_25360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25360[0] = state_machine__5548__auto__);
(statearr_25360[1] = 1);
return statearr_25360;
});
var state_machine__5548__auto____1 = (function (state_25325){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25325);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25361){if((e25361 instanceof Object))
{var ex__5551__auto__ = e25361;var statearr_25362_25384 = state_25325;(statearr_25362_25384[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25325);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25385 = state_25325;
state_25325 = G__25385;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25325){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25363 = f__5563__auto__.call(null);(statearr_25363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25363;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___25466 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25445){var state_val_25446 = (state_25445[1]);if((state_val_25446 === 1))
{var state_25445__$1 = state_25445;var statearr_25447_25467 = state_25445__$1;(statearr_25447_25467[2] = null);
(statearr_25447_25467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25446 === 2))
{var state_25445__$1 = state_25445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25445__$1,4,from);
} else
{if((state_val_25446 === 3))
{var inst_25443 = (state_25445[2]);var state_25445__$1 = state_25445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25445__$1,inst_25443);
} else
{if((state_val_25446 === 4))
{var inst_25428 = (state_25445[7]);var inst_25428__$1 = (state_25445[2]);var inst_25429 = (inst_25428__$1 == null);var state_25445__$1 = (function (){var statearr_25448 = state_25445;(statearr_25448[7] = inst_25428__$1);
return statearr_25448;
})();if(cljs.core.truth_(inst_25429))
{var statearr_25449_25468 = state_25445__$1;(statearr_25449_25468[1] = 5);
} else
{var statearr_25450_25469 = state_25445__$1;(statearr_25450_25469[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25446 === 5))
{var state_25445__$1 = state_25445;if(cljs.core.truth_(close_QMARK_))
{var statearr_25451_25470 = state_25445__$1;(statearr_25451_25470[1] = 8);
} else
{var statearr_25452_25471 = state_25445__$1;(statearr_25452_25471[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25446 === 6))
{var inst_25428 = (state_25445[7]);var state_25445__$1 = state_25445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25445__$1,11,to,inst_25428);
} else
{if((state_val_25446 === 7))
{var inst_25441 = (state_25445[2]);var state_25445__$1 = state_25445;var statearr_25453_25472 = state_25445__$1;(statearr_25453_25472[2] = inst_25441);
(statearr_25453_25472[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25446 === 8))
{var inst_25432 = cljs.core.async.close_BANG_.call(null,to);var state_25445__$1 = state_25445;var statearr_25454_25473 = state_25445__$1;(statearr_25454_25473[2] = inst_25432);
(statearr_25454_25473[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25446 === 9))
{var state_25445__$1 = state_25445;var statearr_25455_25474 = state_25445__$1;(statearr_25455_25474[2] = null);
(statearr_25455_25474[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25446 === 10))
{var inst_25435 = (state_25445[2]);var state_25445__$1 = state_25445;var statearr_25456_25475 = state_25445__$1;(statearr_25456_25475[2] = inst_25435);
(statearr_25456_25475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25446 === 11))
{var inst_25438 = (state_25445[2]);var state_25445__$1 = (function (){var statearr_25457 = state_25445;(statearr_25457[8] = inst_25438);
return statearr_25457;
})();var statearr_25458_25476 = state_25445__$1;(statearr_25458_25476[2] = null);
(statearr_25458_25476[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_25462 = [null,null,null,null,null,null,null,null,null];(statearr_25462[0] = state_machine__5548__auto__);
(statearr_25462[1] = 1);
return statearr_25462;
});
var state_machine__5548__auto____1 = (function (state_25445){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25463){if((e25463 instanceof Object))
{var ex__5551__auto__ = e25463;var statearr_25464_25477 = state_25445;(statearr_25464_25477[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25478 = state_25445;
state_25445 = G__25478;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25445){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25465 = f__5563__auto__.call(null);(statearr_25465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25466);
return statearr_25465;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___25565 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25543){var state_val_25544 = (state_25543[1]);if((state_val_25544 === 1))
{var state_25543__$1 = state_25543;var statearr_25545_25566 = state_25543__$1;(statearr_25545_25566[2] = null);
(statearr_25545_25566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 2))
{var state_25543__$1 = state_25543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25543__$1,4,ch);
} else
{if((state_val_25544 === 3))
{var inst_25541 = (state_25543[2]);var state_25543__$1 = state_25543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25543__$1,inst_25541);
} else
{if((state_val_25544 === 4))
{var inst_25524 = (state_25543[7]);var inst_25524__$1 = (state_25543[2]);var inst_25525 = (inst_25524__$1 == null);var state_25543__$1 = (function (){var statearr_25546 = state_25543;(statearr_25546[7] = inst_25524__$1);
return statearr_25546;
})();if(cljs.core.truth_(inst_25525))
{var statearr_25547_25567 = state_25543__$1;(statearr_25547_25567[1] = 5);
} else
{var statearr_25548_25568 = state_25543__$1;(statearr_25548_25568[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 5))
{var inst_25527 = cljs.core.async.close_BANG_.call(null,tc);var inst_25528 = cljs.core.async.close_BANG_.call(null,fc);var state_25543__$1 = (function (){var statearr_25549 = state_25543;(statearr_25549[8] = inst_25527);
return statearr_25549;
})();var statearr_25550_25569 = state_25543__$1;(statearr_25550_25569[2] = inst_25528);
(statearr_25550_25569[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 6))
{var inst_25524 = (state_25543[7]);var inst_25530 = p.call(null,inst_25524);var state_25543__$1 = state_25543;if(cljs.core.truth_(inst_25530))
{var statearr_25551_25570 = state_25543__$1;(statearr_25551_25570[1] = 9);
} else
{var statearr_25552_25571 = state_25543__$1;(statearr_25552_25571[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 7))
{var inst_25539 = (state_25543[2]);var state_25543__$1 = state_25543;var statearr_25553_25572 = state_25543__$1;(statearr_25553_25572[2] = inst_25539);
(statearr_25553_25572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 8))
{var inst_25536 = (state_25543[2]);var state_25543__$1 = (function (){var statearr_25554 = state_25543;(statearr_25554[9] = inst_25536);
return statearr_25554;
})();var statearr_25555_25573 = state_25543__$1;(statearr_25555_25573[2] = null);
(statearr_25555_25573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 9))
{var state_25543__$1 = state_25543;var statearr_25556_25574 = state_25543__$1;(statearr_25556_25574[2] = tc);
(statearr_25556_25574[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 10))
{var state_25543__$1 = state_25543;var statearr_25557_25575 = state_25543__$1;(statearr_25557_25575[2] = fc);
(statearr_25557_25575[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 11))
{var inst_25524 = (state_25543[7]);var inst_25534 = (state_25543[2]);var state_25543__$1 = state_25543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25543__$1,8,inst_25534,inst_25524);
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
var state_machine__5548__auto____0 = (function (){var statearr_25561 = [null,null,null,null,null,null,null,null,null,null];(statearr_25561[0] = state_machine__5548__auto__);
(statearr_25561[1] = 1);
return statearr_25561;
});
var state_machine__5548__auto____1 = (function (state_25543){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25543);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25562){if((e25562 instanceof Object))
{var ex__5551__auto__ = e25562;var statearr_25563_25576 = state_25543;(statearr_25563_25576[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25562;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25577 = state_25543;
state_25543 = G__25577;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25543){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25564 = f__5563__auto__.call(null);(statearr_25564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25565);
return statearr_25564;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25624){var state_val_25625 = (state_25624[1]);if((state_val_25625 === 7))
{var inst_25620 = (state_25624[2]);var state_25624__$1 = state_25624;var statearr_25626_25642 = state_25624__$1;(statearr_25626_25642[2] = inst_25620);
(statearr_25626_25642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25625 === 6))
{var inst_25613 = (state_25624[7]);var inst_25610 = (state_25624[8]);var inst_25617 = f.call(null,inst_25610,inst_25613);var inst_25610__$1 = inst_25617;var state_25624__$1 = (function (){var statearr_25627 = state_25624;(statearr_25627[8] = inst_25610__$1);
return statearr_25627;
})();var statearr_25628_25643 = state_25624__$1;(statearr_25628_25643[2] = null);
(statearr_25628_25643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25625 === 5))
{var inst_25610 = (state_25624[8]);var state_25624__$1 = state_25624;var statearr_25629_25644 = state_25624__$1;(statearr_25629_25644[2] = inst_25610);
(statearr_25629_25644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25625 === 4))
{var inst_25613 = (state_25624[7]);var inst_25613__$1 = (state_25624[2]);var inst_25614 = (inst_25613__$1 == null);var state_25624__$1 = (function (){var statearr_25630 = state_25624;(statearr_25630[7] = inst_25613__$1);
return statearr_25630;
})();if(cljs.core.truth_(inst_25614))
{var statearr_25631_25645 = state_25624__$1;(statearr_25631_25645[1] = 5);
} else
{var statearr_25632_25646 = state_25624__$1;(statearr_25632_25646[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25625 === 3))
{var inst_25622 = (state_25624[2]);var state_25624__$1 = state_25624;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25624__$1,inst_25622);
} else
{if((state_val_25625 === 2))
{var state_25624__$1 = state_25624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25624__$1,4,ch);
} else
{if((state_val_25625 === 1))
{var inst_25610 = init;var state_25624__$1 = (function (){var statearr_25633 = state_25624;(statearr_25633[8] = inst_25610);
return statearr_25633;
})();var statearr_25634_25647 = state_25624__$1;(statearr_25634_25647[2] = null);
(statearr_25634_25647[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_25638 = [null,null,null,null,null,null,null,null,null];(statearr_25638[0] = state_machine__5548__auto__);
(statearr_25638[1] = 1);
return statearr_25638;
});
var state_machine__5548__auto____1 = (function (state_25624){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25624);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25639){if((e25639 instanceof Object))
{var ex__5551__auto__ = e25639;var statearr_25640_25648 = state_25624;(statearr_25640_25648[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25624);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25649 = state_25624;
state_25624 = G__25649;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25624){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25641 = f__5563__auto__.call(null);(statearr_25641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25641;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25711){var state_val_25712 = (state_25711[1]);if((state_val_25712 === 1))
{var inst_25691 = cljs.core.seq.call(null,coll);var inst_25692 = inst_25691;var state_25711__$1 = (function (){var statearr_25713 = state_25711;(statearr_25713[7] = inst_25692);
return statearr_25713;
})();var statearr_25714_25732 = state_25711__$1;(statearr_25714_25732[2] = null);
(statearr_25714_25732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25712 === 2))
{var inst_25692 = (state_25711[7]);var state_25711__$1 = state_25711;if(cljs.core.truth_(inst_25692))
{var statearr_25715_25733 = state_25711__$1;(statearr_25715_25733[1] = 4);
} else
{var statearr_25716_25734 = state_25711__$1;(statearr_25716_25734[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25712 === 3))
{var inst_25709 = (state_25711[2]);var state_25711__$1 = state_25711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25711__$1,inst_25709);
} else
{if((state_val_25712 === 4))
{var inst_25692 = (state_25711[7]);var inst_25695 = cljs.core.first.call(null,inst_25692);var state_25711__$1 = state_25711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25711__$1,7,ch,inst_25695);
} else
{if((state_val_25712 === 5))
{var state_25711__$1 = state_25711;if(cljs.core.truth_(close_QMARK_))
{var statearr_25717_25735 = state_25711__$1;(statearr_25717_25735[1] = 8);
} else
{var statearr_25718_25736 = state_25711__$1;(statearr_25718_25736[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25712 === 6))
{var inst_25707 = (state_25711[2]);var state_25711__$1 = state_25711;var statearr_25719_25737 = state_25711__$1;(statearr_25719_25737[2] = inst_25707);
(statearr_25719_25737[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25712 === 7))
{var inst_25692 = (state_25711[7]);var inst_25697 = (state_25711[2]);var inst_25698 = cljs.core.next.call(null,inst_25692);var inst_25692__$1 = inst_25698;var state_25711__$1 = (function (){var statearr_25720 = state_25711;(statearr_25720[7] = inst_25692__$1);
(statearr_25720[8] = inst_25697);
return statearr_25720;
})();var statearr_25721_25738 = state_25711__$1;(statearr_25721_25738[2] = null);
(statearr_25721_25738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25712 === 8))
{var inst_25702 = cljs.core.async.close_BANG_.call(null,ch);var state_25711__$1 = state_25711;var statearr_25722_25739 = state_25711__$1;(statearr_25722_25739[2] = inst_25702);
(statearr_25722_25739[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25712 === 9))
{var state_25711__$1 = state_25711;var statearr_25723_25740 = state_25711__$1;(statearr_25723_25740[2] = null);
(statearr_25723_25740[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25712 === 10))
{var inst_25705 = (state_25711[2]);var state_25711__$1 = state_25711;var statearr_25724_25741 = state_25711__$1;(statearr_25724_25741[2] = inst_25705);
(statearr_25724_25741[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_25728 = [null,null,null,null,null,null,null,null,null];(statearr_25728[0] = state_machine__5548__auto__);
(statearr_25728[1] = 1);
return statearr_25728;
});
var state_machine__5548__auto____1 = (function (state_25711){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25711);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25729){if((e25729 instanceof Object))
{var ex__5551__auto__ = e25729;var statearr_25730_25742 = state_25711;(statearr_25730_25742[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25743 = state_25711;
state_25711 = G__25743;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25711){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25731 = f__5563__auto__.call(null);(statearr_25731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25731;
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
cljs.core.async.Mux = (function (){var obj25745 = {};return obj25745;
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
cljs.core.async.Mult = (function (){var obj25747 = {};return obj25747;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25971 = (function (cs,ch,mult,meta25972){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25972 = meta25972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25971.cljs$lang$type = true;
cljs.core.async.t25971.cljs$lang$ctorStr = "cljs.core.async/t25971";
cljs.core.async.t25971.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25971");
});})(cs))
;
cljs.core.async.t25971.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25971.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25971.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25971.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25971.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25973){var self__ = this;
var _25973__$1 = this;return self__.meta25972;
});})(cs))
;
cljs.core.async.t25971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25973,meta25972__$1){var self__ = this;
var _25973__$1 = this;return (new cljs.core.async.t25971(self__.cs,self__.ch,self__.mult,meta25972__$1));
});})(cs))
;
cljs.core.async.__GT_t25971 = ((function (cs){
return (function __GT_t25971(cs__$1,ch__$1,mult__$1,meta25972){return (new cljs.core.async.t25971(cs__$1,ch__$1,mult__$1,meta25972));
});})(cs))
;
}
return (new cljs.core.async.t25971(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___26194 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26108){var state_val_26109 = (state_26108[1]);if((state_val_26109 === 32))
{var inst_25976 = (state_26108[7]);var inst_26052 = (state_26108[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26108,31,Object,null,30);var inst_26059 = cljs.core.async.put_BANG_.call(null,inst_26052,inst_25976,done);var state_26108__$1 = state_26108;var statearr_26110_26195 = state_26108__$1;(statearr_26110_26195[2] = inst_26059);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 1))
{var state_26108__$1 = state_26108;var statearr_26111_26196 = state_26108__$1;(statearr_26111_26196[2] = null);
(statearr_26111_26196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 33))
{var inst_26065 = (state_26108[9]);var inst_26067 = cljs.core.chunked_seq_QMARK_.call(null,inst_26065);var state_26108__$1 = state_26108;if(inst_26067)
{var statearr_26112_26197 = state_26108__$1;(statearr_26112_26197[1] = 36);
} else
{var statearr_26113_26198 = state_26108__$1;(statearr_26113_26198[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 2))
{var state_26108__$1 = state_26108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26108__$1,4,ch);
} else
{if((state_val_26109 === 34))
{var state_26108__$1 = state_26108;var statearr_26114_26199 = state_26108__$1;(statearr_26114_26199[2] = null);
(statearr_26114_26199[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 3))
{var inst_26106 = (state_26108[2]);var state_26108__$1 = state_26108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26108__$1,inst_26106);
} else
{if((state_val_26109 === 35))
{var inst_26090 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26115_26200 = state_26108__$1;(statearr_26115_26200[2] = inst_26090);
(statearr_26115_26200[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 4))
{var inst_25976 = (state_26108[7]);var inst_25976__$1 = (state_26108[2]);var inst_25977 = (inst_25976__$1 == null);var state_26108__$1 = (function (){var statearr_26116 = state_26108;(statearr_26116[7] = inst_25976__$1);
return statearr_26116;
})();if(cljs.core.truth_(inst_25977))
{var statearr_26117_26201 = state_26108__$1;(statearr_26117_26201[1] = 5);
} else
{var statearr_26118_26202 = state_26108__$1;(statearr_26118_26202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 36))
{var inst_26065 = (state_26108[9]);var inst_26069 = cljs.core.chunk_first.call(null,inst_26065);var inst_26070 = cljs.core.chunk_rest.call(null,inst_26065);var inst_26071 = cljs.core.count.call(null,inst_26069);var inst_26044 = inst_26070;var inst_26045 = inst_26069;var inst_26046 = inst_26071;var inst_26047 = 0;var state_26108__$1 = (function (){var statearr_26119 = state_26108;(statearr_26119[10] = inst_26047);
(statearr_26119[11] = inst_26045);
(statearr_26119[12] = inst_26046);
(statearr_26119[13] = inst_26044);
return statearr_26119;
})();var statearr_26120_26203 = state_26108__$1;(statearr_26120_26203[2] = null);
(statearr_26120_26203[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 5))
{var inst_25983 = cljs.core.deref.call(null,cs);var inst_25984 = cljs.core.seq.call(null,inst_25983);var inst_25985 = inst_25984;var inst_25986 = null;var inst_25987 = 0;var inst_25988 = 0;var state_26108__$1 = (function (){var statearr_26121 = state_26108;(statearr_26121[14] = inst_25986);
(statearr_26121[15] = inst_25985);
(statearr_26121[16] = inst_25987);
(statearr_26121[17] = inst_25988);
return statearr_26121;
})();var statearr_26122_26204 = state_26108__$1;(statearr_26122_26204[2] = null);
(statearr_26122_26204[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 37))
{var inst_26065 = (state_26108[9]);var inst_26074 = cljs.core.first.call(null,inst_26065);var state_26108__$1 = (function (){var statearr_26123 = state_26108;(statearr_26123[18] = inst_26074);
return statearr_26123;
})();var statearr_26124_26205 = state_26108__$1;(statearr_26124_26205[2] = null);
(statearr_26124_26205[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 6))
{var inst_26036 = (state_26108[19]);var inst_26035 = cljs.core.deref.call(null,cs);var inst_26036__$1 = cljs.core.keys.call(null,inst_26035);var inst_26037 = cljs.core.count.call(null,inst_26036__$1);var inst_26038 = cljs.core.reset_BANG_.call(null,dctr,inst_26037);var inst_26043 = cljs.core.seq.call(null,inst_26036__$1);var inst_26044 = inst_26043;var inst_26045 = null;var inst_26046 = 0;var inst_26047 = 0;var state_26108__$1 = (function (){var statearr_26125 = state_26108;(statearr_26125[20] = inst_26038);
(statearr_26125[19] = inst_26036__$1);
(statearr_26125[10] = inst_26047);
(statearr_26125[11] = inst_26045);
(statearr_26125[12] = inst_26046);
(statearr_26125[13] = inst_26044);
return statearr_26125;
})();var statearr_26126_26206 = state_26108__$1;(statearr_26126_26206[2] = null);
(statearr_26126_26206[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 38))
{var inst_26087 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26127_26207 = state_26108__$1;(statearr_26127_26207[2] = inst_26087);
(statearr_26127_26207[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 7))
{var inst_26104 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26128_26208 = state_26108__$1;(statearr_26128_26208[2] = inst_26104);
(statearr_26128_26208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 39))
{var inst_26065 = (state_26108[9]);var inst_26083 = (state_26108[2]);var inst_26084 = cljs.core.next.call(null,inst_26065);var inst_26044 = inst_26084;var inst_26045 = null;var inst_26046 = 0;var inst_26047 = 0;var state_26108__$1 = (function (){var statearr_26129 = state_26108;(statearr_26129[21] = inst_26083);
(statearr_26129[10] = inst_26047);
(statearr_26129[11] = inst_26045);
(statearr_26129[12] = inst_26046);
(statearr_26129[13] = inst_26044);
return statearr_26129;
})();var statearr_26130_26209 = state_26108__$1;(statearr_26130_26209[2] = null);
(statearr_26130_26209[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 8))
{var inst_25987 = (state_26108[16]);var inst_25988 = (state_26108[17]);var inst_25990 = (inst_25988 < inst_25987);var inst_25991 = inst_25990;var state_26108__$1 = state_26108;if(cljs.core.truth_(inst_25991))
{var statearr_26131_26210 = state_26108__$1;(statearr_26131_26210[1] = 10);
} else
{var statearr_26132_26211 = state_26108__$1;(statearr_26132_26211[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 40))
{var inst_26074 = (state_26108[18]);var inst_26075 = (state_26108[2]);var inst_26076 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26077 = cljs.core.async.untap_STAR_.call(null,m,inst_26074);var state_26108__$1 = (function (){var statearr_26133 = state_26108;(statearr_26133[22] = inst_26075);
(statearr_26133[23] = inst_26076);
return statearr_26133;
})();var statearr_26134_26212 = state_26108__$1;(statearr_26134_26212[2] = inst_26077);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 9))
{var inst_26033 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26135_26213 = state_26108__$1;(statearr_26135_26213[2] = inst_26033);
(statearr_26135_26213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 41))
{var inst_25976 = (state_26108[7]);var inst_26074 = (state_26108[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26108,40,Object,null,39);var inst_26081 = cljs.core.async.put_BANG_.call(null,inst_26074,inst_25976,done);var state_26108__$1 = state_26108;var statearr_26136_26214 = state_26108__$1;(statearr_26136_26214[2] = inst_26081);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 10))
{var inst_25986 = (state_26108[14]);var inst_25988 = (state_26108[17]);var inst_25994 = cljs.core._nth.call(null,inst_25986,inst_25988);var inst_25995 = cljs.core.nth.call(null,inst_25994,0,null);var inst_25996 = cljs.core.nth.call(null,inst_25994,1,null);var state_26108__$1 = (function (){var statearr_26137 = state_26108;(statearr_26137[24] = inst_25995);
return statearr_26137;
})();if(cljs.core.truth_(inst_25996))
{var statearr_26138_26215 = state_26108__$1;(statearr_26138_26215[1] = 13);
} else
{var statearr_26139_26216 = state_26108__$1;(statearr_26139_26216[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 42))
{var state_26108__$1 = state_26108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26108__$1,45,dchan);
} else
{if((state_val_26109 === 11))
{var inst_25985 = (state_26108[15]);var inst_26005 = (state_26108[25]);var inst_26005__$1 = cljs.core.seq.call(null,inst_25985);var state_26108__$1 = (function (){var statearr_26140 = state_26108;(statearr_26140[25] = inst_26005__$1);
return statearr_26140;
})();if(inst_26005__$1)
{var statearr_26141_26217 = state_26108__$1;(statearr_26141_26217[1] = 16);
} else
{var statearr_26142_26218 = state_26108__$1;(statearr_26142_26218[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 43))
{var state_26108__$1 = state_26108;var statearr_26143_26219 = state_26108__$1;(statearr_26143_26219[2] = null);
(statearr_26143_26219[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 12))
{var inst_26031 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26144_26220 = state_26108__$1;(statearr_26144_26220[2] = inst_26031);
(statearr_26144_26220[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 44))
{var inst_26101 = (state_26108[2]);var state_26108__$1 = (function (){var statearr_26145 = state_26108;(statearr_26145[26] = inst_26101);
return statearr_26145;
})();var statearr_26146_26221 = state_26108__$1;(statearr_26146_26221[2] = null);
(statearr_26146_26221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 13))
{var inst_25995 = (state_26108[24]);var inst_25998 = cljs.core.async.close_BANG_.call(null,inst_25995);var state_26108__$1 = state_26108;var statearr_26147_26222 = state_26108__$1;(statearr_26147_26222[2] = inst_25998);
(statearr_26147_26222[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 45))
{var inst_26098 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26151_26223 = state_26108__$1;(statearr_26151_26223[2] = inst_26098);
(statearr_26151_26223[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 14))
{var state_26108__$1 = state_26108;var statearr_26152_26224 = state_26108__$1;(statearr_26152_26224[2] = null);
(statearr_26152_26224[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 15))
{var inst_25986 = (state_26108[14]);var inst_25985 = (state_26108[15]);var inst_25987 = (state_26108[16]);var inst_25988 = (state_26108[17]);var inst_26001 = (state_26108[2]);var inst_26002 = (inst_25988 + 1);var tmp26148 = inst_25986;var tmp26149 = inst_25985;var tmp26150 = inst_25987;var inst_25985__$1 = tmp26149;var inst_25986__$1 = tmp26148;var inst_25987__$1 = tmp26150;var inst_25988__$1 = inst_26002;var state_26108__$1 = (function (){var statearr_26153 = state_26108;(statearr_26153[14] = inst_25986__$1);
(statearr_26153[15] = inst_25985__$1);
(statearr_26153[27] = inst_26001);
(statearr_26153[16] = inst_25987__$1);
(statearr_26153[17] = inst_25988__$1);
return statearr_26153;
})();var statearr_26154_26225 = state_26108__$1;(statearr_26154_26225[2] = null);
(statearr_26154_26225[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 16))
{var inst_26005 = (state_26108[25]);var inst_26007 = cljs.core.chunked_seq_QMARK_.call(null,inst_26005);var state_26108__$1 = state_26108;if(inst_26007)
{var statearr_26155_26226 = state_26108__$1;(statearr_26155_26226[1] = 19);
} else
{var statearr_26156_26227 = state_26108__$1;(statearr_26156_26227[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 17))
{var state_26108__$1 = state_26108;var statearr_26157_26228 = state_26108__$1;(statearr_26157_26228[2] = null);
(statearr_26157_26228[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 18))
{var inst_26029 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26158_26229 = state_26108__$1;(statearr_26158_26229[2] = inst_26029);
(statearr_26158_26229[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 19))
{var inst_26005 = (state_26108[25]);var inst_26009 = cljs.core.chunk_first.call(null,inst_26005);var inst_26010 = cljs.core.chunk_rest.call(null,inst_26005);var inst_26011 = cljs.core.count.call(null,inst_26009);var inst_25985 = inst_26010;var inst_25986 = inst_26009;var inst_25987 = inst_26011;var inst_25988 = 0;var state_26108__$1 = (function (){var statearr_26159 = state_26108;(statearr_26159[14] = inst_25986);
(statearr_26159[15] = inst_25985);
(statearr_26159[16] = inst_25987);
(statearr_26159[17] = inst_25988);
return statearr_26159;
})();var statearr_26160_26230 = state_26108__$1;(statearr_26160_26230[2] = null);
(statearr_26160_26230[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 20))
{var inst_26005 = (state_26108[25]);var inst_26015 = cljs.core.first.call(null,inst_26005);var inst_26016 = cljs.core.nth.call(null,inst_26015,0,null);var inst_26017 = cljs.core.nth.call(null,inst_26015,1,null);var state_26108__$1 = (function (){var statearr_26161 = state_26108;(statearr_26161[28] = inst_26016);
return statearr_26161;
})();if(cljs.core.truth_(inst_26017))
{var statearr_26162_26231 = state_26108__$1;(statearr_26162_26231[1] = 22);
} else
{var statearr_26163_26232 = state_26108__$1;(statearr_26163_26232[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 21))
{var inst_26026 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26164_26233 = state_26108__$1;(statearr_26164_26233[2] = inst_26026);
(statearr_26164_26233[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 22))
{var inst_26016 = (state_26108[28]);var inst_26019 = cljs.core.async.close_BANG_.call(null,inst_26016);var state_26108__$1 = state_26108;var statearr_26165_26234 = state_26108__$1;(statearr_26165_26234[2] = inst_26019);
(statearr_26165_26234[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 23))
{var state_26108__$1 = state_26108;var statearr_26166_26235 = state_26108__$1;(statearr_26166_26235[2] = null);
(statearr_26166_26235[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 24))
{var inst_26005 = (state_26108[25]);var inst_26022 = (state_26108[2]);var inst_26023 = cljs.core.next.call(null,inst_26005);var inst_25985 = inst_26023;var inst_25986 = null;var inst_25987 = 0;var inst_25988 = 0;var state_26108__$1 = (function (){var statearr_26167 = state_26108;(statearr_26167[14] = inst_25986);
(statearr_26167[15] = inst_25985);
(statearr_26167[29] = inst_26022);
(statearr_26167[16] = inst_25987);
(statearr_26167[17] = inst_25988);
return statearr_26167;
})();var statearr_26168_26236 = state_26108__$1;(statearr_26168_26236[2] = null);
(statearr_26168_26236[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 25))
{var inst_26047 = (state_26108[10]);var inst_26046 = (state_26108[12]);var inst_26049 = (inst_26047 < inst_26046);var inst_26050 = inst_26049;var state_26108__$1 = state_26108;if(cljs.core.truth_(inst_26050))
{var statearr_26169_26237 = state_26108__$1;(statearr_26169_26237[1] = 27);
} else
{var statearr_26170_26238 = state_26108__$1;(statearr_26170_26238[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 26))
{var inst_26036 = (state_26108[19]);var inst_26094 = (state_26108[2]);var inst_26095 = cljs.core.seq.call(null,inst_26036);var state_26108__$1 = (function (){var statearr_26171 = state_26108;(statearr_26171[30] = inst_26094);
return statearr_26171;
})();if(inst_26095)
{var statearr_26172_26239 = state_26108__$1;(statearr_26172_26239[1] = 42);
} else
{var statearr_26173_26240 = state_26108__$1;(statearr_26173_26240[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 27))
{var inst_26047 = (state_26108[10]);var inst_26045 = (state_26108[11]);var inst_26052 = cljs.core._nth.call(null,inst_26045,inst_26047);var state_26108__$1 = (function (){var statearr_26174 = state_26108;(statearr_26174[8] = inst_26052);
return statearr_26174;
})();var statearr_26175_26241 = state_26108__$1;(statearr_26175_26241[2] = null);
(statearr_26175_26241[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 28))
{var inst_26065 = (state_26108[9]);var inst_26044 = (state_26108[13]);var inst_26065__$1 = cljs.core.seq.call(null,inst_26044);var state_26108__$1 = (function (){var statearr_26179 = state_26108;(statearr_26179[9] = inst_26065__$1);
return statearr_26179;
})();if(inst_26065__$1)
{var statearr_26180_26242 = state_26108__$1;(statearr_26180_26242[1] = 33);
} else
{var statearr_26181_26243 = state_26108__$1;(statearr_26181_26243[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 29))
{var inst_26092 = (state_26108[2]);var state_26108__$1 = state_26108;var statearr_26182_26244 = state_26108__$1;(statearr_26182_26244[2] = inst_26092);
(statearr_26182_26244[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 30))
{var inst_26047 = (state_26108[10]);var inst_26045 = (state_26108[11]);var inst_26046 = (state_26108[12]);var inst_26044 = (state_26108[13]);var inst_26061 = (state_26108[2]);var inst_26062 = (inst_26047 + 1);var tmp26176 = inst_26045;var tmp26177 = inst_26046;var tmp26178 = inst_26044;var inst_26044__$1 = tmp26178;var inst_26045__$1 = tmp26176;var inst_26046__$1 = tmp26177;var inst_26047__$1 = inst_26062;var state_26108__$1 = (function (){var statearr_26183 = state_26108;(statearr_26183[10] = inst_26047__$1);
(statearr_26183[11] = inst_26045__$1);
(statearr_26183[12] = inst_26046__$1);
(statearr_26183[13] = inst_26044__$1);
(statearr_26183[31] = inst_26061);
return statearr_26183;
})();var statearr_26184_26245 = state_26108__$1;(statearr_26184_26245[2] = null);
(statearr_26184_26245[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26109 === 31))
{var inst_26052 = (state_26108[8]);var inst_26053 = (state_26108[2]);var inst_26054 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_26055 = cljs.core.async.untap_STAR_.call(null,m,inst_26052);var state_26108__$1 = (function (){var statearr_26185 = state_26108;(statearr_26185[32] = inst_26053);
(statearr_26185[33] = inst_26054);
return statearr_26185;
})();var statearr_26186_26246 = state_26108__$1;(statearr_26186_26246[2] = inst_26055);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_26190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26190[0] = state_machine__5548__auto__);
(statearr_26190[1] = 1);
return statearr_26190;
});
var state_machine__5548__auto____1 = (function (state_26108){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26108);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26191){if((e26191 instanceof Object))
{var ex__5551__auto__ = e26191;var statearr_26192_26247 = state_26108;(statearr_26192_26247[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26248 = state_26108;
state_26108 = G__26248;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26108){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26193 = f__5563__auto__.call(null);(statearr_26193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26194);
return statearr_26193;
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
cljs.core.async.Mix = (function (){var obj26250 = {};return obj26250;
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
;var m = (function (){if(typeof cljs.core.async.t26360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26360 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26361){
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
this.meta26361 = meta26361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26360.cljs$lang$type = true;
cljs.core.async.t26360.cljs$lang$ctorStr = "cljs.core.async/t26360";
cljs.core.async.t26360.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26360");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26360.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26362){var self__ = this;
var _26362__$1 = this;return self__.meta26361;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26362,meta26361__$1){var self__ = this;
var _26362__$1 = this;return (new cljs.core.async.t26360(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26361__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26360 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26360(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26361){return (new cljs.core.async.t26360(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26361));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26360(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___26469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26427){var state_val_26428 = (state_26427[1]);if((state_val_26428 === 1))
{var inst_26366 = (state_26427[7]);var inst_26366__$1 = calc_state.call(null);var inst_26367 = cljs.core.seq_QMARK_.call(null,inst_26366__$1);var state_26427__$1 = (function (){var statearr_26429 = state_26427;(statearr_26429[7] = inst_26366__$1);
return statearr_26429;
})();if(inst_26367)
{var statearr_26430_26470 = state_26427__$1;(statearr_26430_26470[1] = 2);
} else
{var statearr_26431_26471 = state_26427__$1;(statearr_26431_26471[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 2))
{var inst_26366 = (state_26427[7]);var inst_26369 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26366);var state_26427__$1 = state_26427;var statearr_26432_26472 = state_26427__$1;(statearr_26432_26472[2] = inst_26369);
(statearr_26432_26472[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 3))
{var inst_26366 = (state_26427[7]);var state_26427__$1 = state_26427;var statearr_26433_26473 = state_26427__$1;(statearr_26433_26473[2] = inst_26366);
(statearr_26433_26473[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 4))
{var inst_26366 = (state_26427[7]);var inst_26372 = (state_26427[2]);var inst_26373 = cljs.core.get.call(null,inst_26372,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26374 = cljs.core.get.call(null,inst_26372,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26375 = cljs.core.get.call(null,inst_26372,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26376 = inst_26366;var state_26427__$1 = (function (){var statearr_26434 = state_26427;(statearr_26434[8] = inst_26375);
(statearr_26434[9] = inst_26376);
(statearr_26434[10] = inst_26374);
(statearr_26434[11] = inst_26373);
return statearr_26434;
})();var statearr_26435_26474 = state_26427__$1;(statearr_26435_26474[2] = null);
(statearr_26435_26474[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 5))
{var inst_26376 = (state_26427[9]);var inst_26379 = cljs.core.seq_QMARK_.call(null,inst_26376);var state_26427__$1 = state_26427;if(inst_26379)
{var statearr_26436_26475 = state_26427__$1;(statearr_26436_26475[1] = 7);
} else
{var statearr_26437_26476 = state_26427__$1;(statearr_26437_26476[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 6))
{var inst_26425 = (state_26427[2]);var state_26427__$1 = state_26427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26427__$1,inst_26425);
} else
{if((state_val_26428 === 7))
{var inst_26376 = (state_26427[9]);var inst_26381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26376);var state_26427__$1 = state_26427;var statearr_26438_26477 = state_26427__$1;(statearr_26438_26477[2] = inst_26381);
(statearr_26438_26477[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 8))
{var inst_26376 = (state_26427[9]);var state_26427__$1 = state_26427;var statearr_26439_26478 = state_26427__$1;(statearr_26439_26478[2] = inst_26376);
(statearr_26439_26478[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 9))
{var inst_26384 = (state_26427[12]);var inst_26384__$1 = (state_26427[2]);var inst_26385 = cljs.core.get.call(null,inst_26384__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26386 = cljs.core.get.call(null,inst_26384__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26387 = cljs.core.get.call(null,inst_26384__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26427__$1 = (function (){var statearr_26440 = state_26427;(statearr_26440[13] = inst_26386);
(statearr_26440[14] = inst_26387);
(statearr_26440[12] = inst_26384__$1);
return statearr_26440;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26427__$1,10,inst_26385);
} else
{if((state_val_26428 === 10))
{var inst_26391 = (state_26427[15]);var inst_26392 = (state_26427[16]);var inst_26390 = (state_26427[2]);var inst_26391__$1 = cljs.core.nth.call(null,inst_26390,0,null);var inst_26392__$1 = cljs.core.nth.call(null,inst_26390,1,null);var inst_26393 = (inst_26391__$1 == null);var inst_26394 = cljs.core._EQ_.call(null,inst_26392__$1,change);var inst_26395 = (inst_26393) || (inst_26394);var state_26427__$1 = (function (){var statearr_26441 = state_26427;(statearr_26441[15] = inst_26391__$1);
(statearr_26441[16] = inst_26392__$1);
return statearr_26441;
})();if(cljs.core.truth_(inst_26395))
{var statearr_26442_26479 = state_26427__$1;(statearr_26442_26479[1] = 11);
} else
{var statearr_26443_26480 = state_26427__$1;(statearr_26443_26480[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 11))
{var inst_26391 = (state_26427[15]);var inst_26397 = (inst_26391 == null);var state_26427__$1 = state_26427;if(cljs.core.truth_(inst_26397))
{var statearr_26444_26481 = state_26427__$1;(statearr_26444_26481[1] = 14);
} else
{var statearr_26445_26482 = state_26427__$1;(statearr_26445_26482[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 12))
{var inst_26387 = (state_26427[14]);var inst_26392 = (state_26427[16]);var inst_26406 = (state_26427[17]);var inst_26406__$1 = inst_26387.call(null,inst_26392);var state_26427__$1 = (function (){var statearr_26446 = state_26427;(statearr_26446[17] = inst_26406__$1);
return statearr_26446;
})();if(cljs.core.truth_(inst_26406__$1))
{var statearr_26447_26483 = state_26427__$1;(statearr_26447_26483[1] = 17);
} else
{var statearr_26448_26484 = state_26427__$1;(statearr_26448_26484[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 13))
{var inst_26423 = (state_26427[2]);var state_26427__$1 = state_26427;var statearr_26449_26485 = state_26427__$1;(statearr_26449_26485[2] = inst_26423);
(statearr_26449_26485[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 14))
{var inst_26392 = (state_26427[16]);var inst_26399 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26392);var state_26427__$1 = state_26427;var statearr_26450_26486 = state_26427__$1;(statearr_26450_26486[2] = inst_26399);
(statearr_26450_26486[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 15))
{var state_26427__$1 = state_26427;var statearr_26451_26487 = state_26427__$1;(statearr_26451_26487[2] = null);
(statearr_26451_26487[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 16))
{var inst_26402 = (state_26427[2]);var inst_26403 = calc_state.call(null);var inst_26376 = inst_26403;var state_26427__$1 = (function (){var statearr_26452 = state_26427;(statearr_26452[9] = inst_26376);
(statearr_26452[18] = inst_26402);
return statearr_26452;
})();var statearr_26453_26488 = state_26427__$1;(statearr_26453_26488[2] = null);
(statearr_26453_26488[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 17))
{var inst_26406 = (state_26427[17]);var state_26427__$1 = state_26427;var statearr_26454_26489 = state_26427__$1;(statearr_26454_26489[2] = inst_26406);
(statearr_26454_26489[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 18))
{var inst_26386 = (state_26427[13]);var inst_26387 = (state_26427[14]);var inst_26392 = (state_26427[16]);var inst_26409 = cljs.core.empty_QMARK_.call(null,inst_26387);var inst_26410 = inst_26386.call(null,inst_26392);var inst_26411 = cljs.core.not.call(null,inst_26410);var inst_26412 = (inst_26409) && (inst_26411);var state_26427__$1 = state_26427;var statearr_26455_26490 = state_26427__$1;(statearr_26455_26490[2] = inst_26412);
(statearr_26455_26490[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 19))
{var inst_26414 = (state_26427[2]);var state_26427__$1 = state_26427;if(cljs.core.truth_(inst_26414))
{var statearr_26456_26491 = state_26427__$1;(statearr_26456_26491[1] = 20);
} else
{var statearr_26457_26492 = state_26427__$1;(statearr_26457_26492[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 20))
{var inst_26391 = (state_26427[15]);var state_26427__$1 = state_26427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26427__$1,23,out,inst_26391);
} else
{if((state_val_26428 === 21))
{var state_26427__$1 = state_26427;var statearr_26458_26493 = state_26427__$1;(statearr_26458_26493[2] = null);
(statearr_26458_26493[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 22))
{var inst_26384 = (state_26427[12]);var inst_26420 = (state_26427[2]);var inst_26376 = inst_26384;var state_26427__$1 = (function (){var statearr_26459 = state_26427;(statearr_26459[19] = inst_26420);
(statearr_26459[9] = inst_26376);
return statearr_26459;
})();var statearr_26460_26494 = state_26427__$1;(statearr_26460_26494[2] = null);
(statearr_26460_26494[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26428 === 23))
{var inst_26417 = (state_26427[2]);var state_26427__$1 = state_26427;var statearr_26461_26495 = state_26427__$1;(statearr_26461_26495[2] = inst_26417);
(statearr_26461_26495[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_26465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26465[0] = state_machine__5548__auto__);
(statearr_26465[1] = 1);
return statearr_26465;
});
var state_machine__5548__auto____1 = (function (state_26427){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26466){if((e26466 instanceof Object))
{var ex__5551__auto__ = e26466;var statearr_26467_26496 = state_26427;(statearr_26467_26496[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26497 = state_26427;
state_26427 = G__26497;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26427){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26468 = f__5563__auto__.call(null);(statearr_26468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26469);
return statearr_26468;
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
cljs.core.async.Pub = (function (){var obj26499 = {};return obj26499;
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
return (function (p1__26500_SHARP_){if(cljs.core.truth_(p1__26500_SHARP_.call(null,topic)))
{return p1__26500_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26500_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26625 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26626){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26626 = meta26626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26625.cljs$lang$type = true;
cljs.core.async.t26625.cljs$lang$ctorStr = "cljs.core.async/t26625";
cljs.core.async.t26625.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26625");
});})(mults,ensure_mult))
;
cljs.core.async.t26625.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26625.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26625.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26625.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26625.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26627){var self__ = this;
var _26627__$1 = this;return self__.meta26626;
});})(mults,ensure_mult))
;
cljs.core.async.t26625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26627,meta26626__$1){var self__ = this;
var _26627__$1 = this;return (new cljs.core.async.t26625(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26626__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26625 = ((function (mults,ensure_mult){
return (function __GT_t26625(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26626){return (new cljs.core.async.t26625(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26626));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26625(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___26749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26701){var state_val_26702 = (state_26701[1]);if((state_val_26702 === 1))
{var state_26701__$1 = state_26701;var statearr_26703_26750 = state_26701__$1;(statearr_26703_26750[2] = null);
(statearr_26703_26750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 2))
{var state_26701__$1 = state_26701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,4,ch);
} else
{if((state_val_26702 === 3))
{var inst_26699 = (state_26701[2]);var state_26701__$1 = state_26701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26701__$1,inst_26699);
} else
{if((state_val_26702 === 4))
{var inst_26630 = (state_26701[7]);var inst_26630__$1 = (state_26701[2]);var inst_26631 = (inst_26630__$1 == null);var state_26701__$1 = (function (){var statearr_26704 = state_26701;(statearr_26704[7] = inst_26630__$1);
return statearr_26704;
})();if(cljs.core.truth_(inst_26631))
{var statearr_26705_26751 = state_26701__$1;(statearr_26705_26751[1] = 5);
} else
{var statearr_26706_26752 = state_26701__$1;(statearr_26706_26752[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 5))
{var inst_26637 = cljs.core.deref.call(null,mults);var inst_26638 = cljs.core.vals.call(null,inst_26637);var inst_26639 = cljs.core.seq.call(null,inst_26638);var inst_26640 = inst_26639;var inst_26641 = null;var inst_26642 = 0;var inst_26643 = 0;var state_26701__$1 = (function (){var statearr_26707 = state_26701;(statearr_26707[8] = inst_26641);
(statearr_26707[9] = inst_26642);
(statearr_26707[10] = inst_26640);
(statearr_26707[11] = inst_26643);
return statearr_26707;
})();var statearr_26708_26753 = state_26701__$1;(statearr_26708_26753[2] = null);
(statearr_26708_26753[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 6))
{var inst_26678 = (state_26701[12]);var inst_26630 = (state_26701[7]);var inst_26680 = (state_26701[13]);var inst_26678__$1 = topic_fn.call(null,inst_26630);var inst_26679 = cljs.core.deref.call(null,mults);var inst_26680__$1 = cljs.core.get.call(null,inst_26679,inst_26678__$1);var state_26701__$1 = (function (){var statearr_26709 = state_26701;(statearr_26709[12] = inst_26678__$1);
(statearr_26709[13] = inst_26680__$1);
return statearr_26709;
})();if(cljs.core.truth_(inst_26680__$1))
{var statearr_26710_26754 = state_26701__$1;(statearr_26710_26754[1] = 19);
} else
{var statearr_26711_26755 = state_26701__$1;(statearr_26711_26755[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 7))
{var inst_26697 = (state_26701[2]);var state_26701__$1 = state_26701;var statearr_26712_26756 = state_26701__$1;(statearr_26712_26756[2] = inst_26697);
(statearr_26712_26756[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 8))
{var inst_26642 = (state_26701[9]);var inst_26643 = (state_26701[11]);var inst_26645 = (inst_26643 < inst_26642);var inst_26646 = inst_26645;var state_26701__$1 = state_26701;if(cljs.core.truth_(inst_26646))
{var statearr_26716_26757 = state_26701__$1;(statearr_26716_26757[1] = 10);
} else
{var statearr_26717_26758 = state_26701__$1;(statearr_26717_26758[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 9))
{var inst_26676 = (state_26701[2]);var state_26701__$1 = state_26701;var statearr_26718_26759 = state_26701__$1;(statearr_26718_26759[2] = inst_26676);
(statearr_26718_26759[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 10))
{var inst_26641 = (state_26701[8]);var inst_26642 = (state_26701[9]);var inst_26640 = (state_26701[10]);var inst_26643 = (state_26701[11]);var inst_26648 = cljs.core._nth.call(null,inst_26641,inst_26643);var inst_26649 = cljs.core.async.muxch_STAR_.call(null,inst_26648);var inst_26650 = cljs.core.async.close_BANG_.call(null,inst_26649);var inst_26651 = (inst_26643 + 1);var tmp26713 = inst_26641;var tmp26714 = inst_26642;var tmp26715 = inst_26640;var inst_26640__$1 = tmp26715;var inst_26641__$1 = tmp26713;var inst_26642__$1 = tmp26714;var inst_26643__$1 = inst_26651;var state_26701__$1 = (function (){var statearr_26719 = state_26701;(statearr_26719[8] = inst_26641__$1);
(statearr_26719[9] = inst_26642__$1);
(statearr_26719[10] = inst_26640__$1);
(statearr_26719[14] = inst_26650);
(statearr_26719[11] = inst_26643__$1);
return statearr_26719;
})();var statearr_26720_26760 = state_26701__$1;(statearr_26720_26760[2] = null);
(statearr_26720_26760[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 11))
{var inst_26640 = (state_26701[10]);var inst_26654 = (state_26701[15]);var inst_26654__$1 = cljs.core.seq.call(null,inst_26640);var state_26701__$1 = (function (){var statearr_26721 = state_26701;(statearr_26721[15] = inst_26654__$1);
return statearr_26721;
})();if(inst_26654__$1)
{var statearr_26722_26761 = state_26701__$1;(statearr_26722_26761[1] = 13);
} else
{var statearr_26723_26762 = state_26701__$1;(statearr_26723_26762[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 12))
{var inst_26674 = (state_26701[2]);var state_26701__$1 = state_26701;var statearr_26724_26763 = state_26701__$1;(statearr_26724_26763[2] = inst_26674);
(statearr_26724_26763[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 13))
{var inst_26654 = (state_26701[15]);var inst_26656 = cljs.core.chunked_seq_QMARK_.call(null,inst_26654);var state_26701__$1 = state_26701;if(inst_26656)
{var statearr_26725_26764 = state_26701__$1;(statearr_26725_26764[1] = 16);
} else
{var statearr_26726_26765 = state_26701__$1;(statearr_26726_26765[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 14))
{var state_26701__$1 = state_26701;var statearr_26727_26766 = state_26701__$1;(statearr_26727_26766[2] = null);
(statearr_26727_26766[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 15))
{var inst_26672 = (state_26701[2]);var state_26701__$1 = state_26701;var statearr_26728_26767 = state_26701__$1;(statearr_26728_26767[2] = inst_26672);
(statearr_26728_26767[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 16))
{var inst_26654 = (state_26701[15]);var inst_26658 = cljs.core.chunk_first.call(null,inst_26654);var inst_26659 = cljs.core.chunk_rest.call(null,inst_26654);var inst_26660 = cljs.core.count.call(null,inst_26658);var inst_26640 = inst_26659;var inst_26641 = inst_26658;var inst_26642 = inst_26660;var inst_26643 = 0;var state_26701__$1 = (function (){var statearr_26729 = state_26701;(statearr_26729[8] = inst_26641);
(statearr_26729[9] = inst_26642);
(statearr_26729[10] = inst_26640);
(statearr_26729[11] = inst_26643);
return statearr_26729;
})();var statearr_26730_26768 = state_26701__$1;(statearr_26730_26768[2] = null);
(statearr_26730_26768[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 17))
{var inst_26654 = (state_26701[15]);var inst_26663 = cljs.core.first.call(null,inst_26654);var inst_26664 = cljs.core.async.muxch_STAR_.call(null,inst_26663);var inst_26665 = cljs.core.async.close_BANG_.call(null,inst_26664);var inst_26666 = cljs.core.next.call(null,inst_26654);var inst_26640 = inst_26666;var inst_26641 = null;var inst_26642 = 0;var inst_26643 = 0;var state_26701__$1 = (function (){var statearr_26731 = state_26701;(statearr_26731[16] = inst_26665);
(statearr_26731[8] = inst_26641);
(statearr_26731[9] = inst_26642);
(statearr_26731[10] = inst_26640);
(statearr_26731[11] = inst_26643);
return statearr_26731;
})();var statearr_26732_26769 = state_26701__$1;(statearr_26732_26769[2] = null);
(statearr_26732_26769[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 18))
{var inst_26669 = (state_26701[2]);var state_26701__$1 = state_26701;var statearr_26733_26770 = state_26701__$1;(statearr_26733_26770[2] = inst_26669);
(statearr_26733_26770[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 19))
{var state_26701__$1 = state_26701;var statearr_26734_26771 = state_26701__$1;(statearr_26734_26771[2] = null);
(statearr_26734_26771[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 20))
{var state_26701__$1 = state_26701;var statearr_26735_26772 = state_26701__$1;(statearr_26735_26772[2] = null);
(statearr_26735_26772[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 21))
{var inst_26694 = (state_26701[2]);var state_26701__$1 = (function (){var statearr_26736 = state_26701;(statearr_26736[17] = inst_26694);
return statearr_26736;
})();var statearr_26737_26773 = state_26701__$1;(statearr_26737_26773[2] = null);
(statearr_26737_26773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 22))
{var inst_26691 = (state_26701[2]);var state_26701__$1 = state_26701;var statearr_26738_26774 = state_26701__$1;(statearr_26738_26774[2] = inst_26691);
(statearr_26738_26774[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 23))
{var inst_26678 = (state_26701[12]);var inst_26682 = (state_26701[2]);var inst_26683 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26678);var state_26701__$1 = (function (){var statearr_26739 = state_26701;(statearr_26739[18] = inst_26682);
return statearr_26739;
})();var statearr_26740_26775 = state_26701__$1;(statearr_26740_26775[2] = inst_26683);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26701__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26702 === 24))
{var inst_26630 = (state_26701[7]);var inst_26680 = (state_26701[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26701,23,Object,null,22);var inst_26687 = cljs.core.async.muxch_STAR_.call(null,inst_26680);var state_26701__$1 = state_26701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26701__$1,25,inst_26687,inst_26630);
} else
{if((state_val_26702 === 25))
{var inst_26689 = (state_26701[2]);var state_26701__$1 = state_26701;var statearr_26741_26776 = state_26701__$1;(statearr_26741_26776[2] = inst_26689);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26701__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_26745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26745[0] = state_machine__5548__auto__);
(statearr_26745[1] = 1);
return statearr_26745;
});
var state_machine__5548__auto____1 = (function (state_26701){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26701);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26746){if((e26746 instanceof Object))
{var ex__5551__auto__ = e26746;var statearr_26747_26777 = state_26701;(statearr_26747_26777[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26701);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26778 = state_26701;
state_26701 = G__26778;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26701){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26748 = f__5563__auto__.call(null);(statearr_26748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26749);
return statearr_26748;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___26915 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26885){var state_val_26886 = (state_26885[1]);if((state_val_26886 === 1))
{var state_26885__$1 = state_26885;var statearr_26887_26916 = state_26885__$1;(statearr_26887_26916[2] = null);
(statearr_26887_26916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 2))
{var inst_26848 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26849 = 0;var state_26885__$1 = (function (){var statearr_26888 = state_26885;(statearr_26888[7] = inst_26849);
(statearr_26888[8] = inst_26848);
return statearr_26888;
})();var statearr_26889_26917 = state_26885__$1;(statearr_26889_26917[2] = null);
(statearr_26889_26917[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 3))
{var inst_26883 = (state_26885[2]);var state_26885__$1 = state_26885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26885__$1,inst_26883);
} else
{if((state_val_26886 === 4))
{var inst_26849 = (state_26885[7]);var inst_26851 = (inst_26849 < cnt);var state_26885__$1 = state_26885;if(cljs.core.truth_(inst_26851))
{var statearr_26890_26918 = state_26885__$1;(statearr_26890_26918[1] = 6);
} else
{var statearr_26891_26919 = state_26885__$1;(statearr_26891_26919[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 5))
{var inst_26869 = (state_26885[2]);var state_26885__$1 = (function (){var statearr_26892 = state_26885;(statearr_26892[9] = inst_26869);
return statearr_26892;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26885__$1,12,dchan);
} else
{if((state_val_26886 === 6))
{var state_26885__$1 = state_26885;var statearr_26893_26920 = state_26885__$1;(statearr_26893_26920[2] = null);
(statearr_26893_26920[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 7))
{var state_26885__$1 = state_26885;var statearr_26894_26921 = state_26885__$1;(statearr_26894_26921[2] = null);
(statearr_26894_26921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 8))
{var inst_26867 = (state_26885[2]);var state_26885__$1 = state_26885;var statearr_26895_26922 = state_26885__$1;(statearr_26895_26922[2] = inst_26867);
(statearr_26895_26922[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 9))
{var inst_26849 = (state_26885[7]);var inst_26862 = (state_26885[2]);var inst_26863 = (inst_26849 + 1);var inst_26849__$1 = inst_26863;var state_26885__$1 = (function (){var statearr_26896 = state_26885;(statearr_26896[10] = inst_26862);
(statearr_26896[7] = inst_26849__$1);
return statearr_26896;
})();var statearr_26897_26923 = state_26885__$1;(statearr_26897_26923[2] = null);
(statearr_26897_26923[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 10))
{var inst_26853 = (state_26885[2]);var inst_26854 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26885__$1 = (function (){var statearr_26898 = state_26885;(statearr_26898[11] = inst_26853);
return statearr_26898;
})();var statearr_26899_26924 = state_26885__$1;(statearr_26899_26924[2] = inst_26854);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26885__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 11))
{var inst_26849 = (state_26885[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26885,10,Object,null,9);var inst_26858 = chs__$1.call(null,inst_26849);var inst_26859 = done.call(null,inst_26849);var inst_26860 = cljs.core.async.take_BANG_.call(null,inst_26858,inst_26859);var state_26885__$1 = state_26885;var statearr_26900_26925 = state_26885__$1;(statearr_26900_26925[2] = inst_26860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26885__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 12))
{var inst_26871 = (state_26885[12]);var inst_26871__$1 = (state_26885[2]);var inst_26872 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26871__$1);var state_26885__$1 = (function (){var statearr_26901 = state_26885;(statearr_26901[12] = inst_26871__$1);
return statearr_26901;
})();if(cljs.core.truth_(inst_26872))
{var statearr_26902_26926 = state_26885__$1;(statearr_26902_26926[1] = 13);
} else
{var statearr_26903_26927 = state_26885__$1;(statearr_26903_26927[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 13))
{var inst_26874 = cljs.core.async.close_BANG_.call(null,out);var state_26885__$1 = state_26885;var statearr_26904_26928 = state_26885__$1;(statearr_26904_26928[2] = inst_26874);
(statearr_26904_26928[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 14))
{var inst_26871 = (state_26885[12]);var inst_26876 = cljs.core.apply.call(null,f,inst_26871);var state_26885__$1 = state_26885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26885__$1,16,out,inst_26876);
} else
{if((state_val_26886 === 15))
{var inst_26881 = (state_26885[2]);var state_26885__$1 = state_26885;var statearr_26905_26929 = state_26885__$1;(statearr_26905_26929[2] = inst_26881);
(statearr_26905_26929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26886 === 16))
{var inst_26878 = (state_26885[2]);var state_26885__$1 = (function (){var statearr_26906 = state_26885;(statearr_26906[13] = inst_26878);
return statearr_26906;
})();var statearr_26907_26930 = state_26885__$1;(statearr_26907_26930[2] = null);
(statearr_26907_26930[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_26911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26911[0] = state_machine__5548__auto__);
(statearr_26911[1] = 1);
return statearr_26911;
});
var state_machine__5548__auto____1 = (function (state_26885){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26912){if((e26912 instanceof Object))
{var ex__5551__auto__ = e26912;var statearr_26913_26931 = state_26885;(statearr_26913_26931[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26932 = state_26885;
state_26885 = G__26932;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26885){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26914 = f__5563__auto__.call(null);(statearr_26914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26915);
return statearr_26914;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27040 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27016){var state_val_27017 = (state_27016[1]);if((state_val_27017 === 1))
{var inst_26987 = cljs.core.vec.call(null,chs);var inst_26988 = inst_26987;var state_27016__$1 = (function (){var statearr_27018 = state_27016;(statearr_27018[7] = inst_26988);
return statearr_27018;
})();var statearr_27019_27041 = state_27016__$1;(statearr_27019_27041[2] = null);
(statearr_27019_27041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27017 === 2))
{var inst_26988 = (state_27016[7]);var inst_26990 = cljs.core.count.call(null,inst_26988);var inst_26991 = (inst_26990 > 0);var state_27016__$1 = state_27016;if(cljs.core.truth_(inst_26991))
{var statearr_27020_27042 = state_27016__$1;(statearr_27020_27042[1] = 4);
} else
{var statearr_27021_27043 = state_27016__$1;(statearr_27021_27043[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27017 === 3))
{var inst_27014 = (state_27016[2]);var state_27016__$1 = state_27016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27016__$1,inst_27014);
} else
{if((state_val_27017 === 4))
{var inst_26988 = (state_27016[7]);var state_27016__$1 = state_27016;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27016__$1,7,inst_26988);
} else
{if((state_val_27017 === 5))
{var inst_27010 = cljs.core.async.close_BANG_.call(null,out);var state_27016__$1 = state_27016;var statearr_27022_27044 = state_27016__$1;(statearr_27022_27044[2] = inst_27010);
(statearr_27022_27044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27017 === 6))
{var inst_27012 = (state_27016[2]);var state_27016__$1 = state_27016;var statearr_27023_27045 = state_27016__$1;(statearr_27023_27045[2] = inst_27012);
(statearr_27023_27045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27017 === 7))
{var inst_26996 = (state_27016[8]);var inst_26995 = (state_27016[9]);var inst_26995__$1 = (state_27016[2]);var inst_26996__$1 = cljs.core.nth.call(null,inst_26995__$1,0,null);var inst_26997 = cljs.core.nth.call(null,inst_26995__$1,1,null);var inst_26998 = (inst_26996__$1 == null);var state_27016__$1 = (function (){var statearr_27024 = state_27016;(statearr_27024[10] = inst_26997);
(statearr_27024[8] = inst_26996__$1);
(statearr_27024[9] = inst_26995__$1);
return statearr_27024;
})();if(cljs.core.truth_(inst_26998))
{var statearr_27025_27046 = state_27016__$1;(statearr_27025_27046[1] = 8);
} else
{var statearr_27026_27047 = state_27016__$1;(statearr_27026_27047[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27017 === 8))
{var inst_26988 = (state_27016[7]);var inst_26997 = (state_27016[10]);var inst_26996 = (state_27016[8]);var inst_26995 = (state_27016[9]);var inst_27000 = (function (){var c = inst_26997;var v = inst_26996;var vec__26993 = inst_26995;var cs = inst_26988;return ((function (c,v,vec__26993,cs,inst_26988,inst_26997,inst_26996,inst_26995,state_val_27017){
return (function (p1__26933_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26933_SHARP_);
});
;})(c,v,vec__26993,cs,inst_26988,inst_26997,inst_26996,inst_26995,state_val_27017))
})();var inst_27001 = cljs.core.filterv.call(null,inst_27000,inst_26988);var inst_26988__$1 = inst_27001;var state_27016__$1 = (function (){var statearr_27027 = state_27016;(statearr_27027[7] = inst_26988__$1);
return statearr_27027;
})();var statearr_27028_27048 = state_27016__$1;(statearr_27028_27048[2] = null);
(statearr_27028_27048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27017 === 9))
{var inst_26996 = (state_27016[8]);var state_27016__$1 = state_27016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27016__$1,11,out,inst_26996);
} else
{if((state_val_27017 === 10))
{var inst_27008 = (state_27016[2]);var state_27016__$1 = state_27016;var statearr_27030_27049 = state_27016__$1;(statearr_27030_27049[2] = inst_27008);
(statearr_27030_27049[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27017 === 11))
{var inst_26988 = (state_27016[7]);var inst_27005 = (state_27016[2]);var tmp27029 = inst_26988;var inst_26988__$1 = tmp27029;var state_27016__$1 = (function (){var statearr_27031 = state_27016;(statearr_27031[7] = inst_26988__$1);
(statearr_27031[11] = inst_27005);
return statearr_27031;
})();var statearr_27032_27050 = state_27016__$1;(statearr_27032_27050[2] = null);
(statearr_27032_27050[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27036 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27036[0] = state_machine__5548__auto__);
(statearr_27036[1] = 1);
return statearr_27036;
});
var state_machine__5548__auto____1 = (function (state_27016){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27037){if((e27037 instanceof Object))
{var ex__5551__auto__ = e27037;var statearr_27038_27051 = state_27016;(statearr_27038_27051[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27052 = state_27016;
state_27016 = G__27052;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27016){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27039 = f__5563__auto__.call(null);(statearr_27039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27040);
return statearr_27039;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27145 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27122){var state_val_27123 = (state_27122[1]);if((state_val_27123 === 1))
{var inst_27099 = 0;var state_27122__$1 = (function (){var statearr_27124 = state_27122;(statearr_27124[7] = inst_27099);
return statearr_27124;
})();var statearr_27125_27146 = state_27122__$1;(statearr_27125_27146[2] = null);
(statearr_27125_27146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27123 === 2))
{var inst_27099 = (state_27122[7]);var inst_27101 = (inst_27099 < n);var state_27122__$1 = state_27122;if(cljs.core.truth_(inst_27101))
{var statearr_27126_27147 = state_27122__$1;(statearr_27126_27147[1] = 4);
} else
{var statearr_27127_27148 = state_27122__$1;(statearr_27127_27148[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27123 === 3))
{var inst_27119 = (state_27122[2]);var inst_27120 = cljs.core.async.close_BANG_.call(null,out);var state_27122__$1 = (function (){var statearr_27128 = state_27122;(statearr_27128[8] = inst_27119);
return statearr_27128;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27122__$1,inst_27120);
} else
{if((state_val_27123 === 4))
{var state_27122__$1 = state_27122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27122__$1,7,ch);
} else
{if((state_val_27123 === 5))
{var state_27122__$1 = state_27122;var statearr_27129_27149 = state_27122__$1;(statearr_27129_27149[2] = null);
(statearr_27129_27149[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27123 === 6))
{var inst_27117 = (state_27122[2]);var state_27122__$1 = state_27122;var statearr_27130_27150 = state_27122__$1;(statearr_27130_27150[2] = inst_27117);
(statearr_27130_27150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27123 === 7))
{var inst_27104 = (state_27122[9]);var inst_27104__$1 = (state_27122[2]);var inst_27105 = (inst_27104__$1 == null);var inst_27106 = cljs.core.not.call(null,inst_27105);var state_27122__$1 = (function (){var statearr_27131 = state_27122;(statearr_27131[9] = inst_27104__$1);
return statearr_27131;
})();if(inst_27106)
{var statearr_27132_27151 = state_27122__$1;(statearr_27132_27151[1] = 8);
} else
{var statearr_27133_27152 = state_27122__$1;(statearr_27133_27152[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27123 === 8))
{var inst_27104 = (state_27122[9]);var state_27122__$1 = state_27122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27122__$1,11,out,inst_27104);
} else
{if((state_val_27123 === 9))
{var state_27122__$1 = state_27122;var statearr_27134_27153 = state_27122__$1;(statearr_27134_27153[2] = null);
(statearr_27134_27153[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27123 === 10))
{var inst_27114 = (state_27122[2]);var state_27122__$1 = state_27122;var statearr_27135_27154 = state_27122__$1;(statearr_27135_27154[2] = inst_27114);
(statearr_27135_27154[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27123 === 11))
{var inst_27099 = (state_27122[7]);var inst_27109 = (state_27122[2]);var inst_27110 = (inst_27099 + 1);var inst_27099__$1 = inst_27110;var state_27122__$1 = (function (){var statearr_27136 = state_27122;(statearr_27136[10] = inst_27109);
(statearr_27136[7] = inst_27099__$1);
return statearr_27136;
})();var statearr_27137_27155 = state_27122__$1;(statearr_27137_27155[2] = null);
(statearr_27137_27155[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27141 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27141[0] = state_machine__5548__auto__);
(statearr_27141[1] = 1);
return statearr_27141;
});
var state_machine__5548__auto____1 = (function (state_27122){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27122);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27142){if((e27142 instanceof Object))
{var ex__5551__auto__ = e27142;var statearr_27143_27156 = state_27122;(statearr_27143_27156[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27122);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27157 = state_27122;
state_27122 = G__27157;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27122){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27144 = f__5563__auto__.call(null);(statearr_27144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27145);
return statearr_27144;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27254 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27229){var state_val_27230 = (state_27229[1]);if((state_val_27230 === 1))
{var inst_27206 = null;var state_27229__$1 = (function (){var statearr_27231 = state_27229;(statearr_27231[7] = inst_27206);
return statearr_27231;
})();var statearr_27232_27255 = state_27229__$1;(statearr_27232_27255[2] = null);
(statearr_27232_27255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27230 === 2))
{var state_27229__$1 = state_27229;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27229__$1,4,ch);
} else
{if((state_val_27230 === 3))
{var inst_27226 = (state_27229[2]);var inst_27227 = cljs.core.async.close_BANG_.call(null,out);var state_27229__$1 = (function (){var statearr_27233 = state_27229;(statearr_27233[8] = inst_27226);
return statearr_27233;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27229__$1,inst_27227);
} else
{if((state_val_27230 === 4))
{var inst_27209 = (state_27229[9]);var inst_27209__$1 = (state_27229[2]);var inst_27210 = (inst_27209__$1 == null);var inst_27211 = cljs.core.not.call(null,inst_27210);var state_27229__$1 = (function (){var statearr_27234 = state_27229;(statearr_27234[9] = inst_27209__$1);
return statearr_27234;
})();if(inst_27211)
{var statearr_27235_27256 = state_27229__$1;(statearr_27235_27256[1] = 5);
} else
{var statearr_27236_27257 = state_27229__$1;(statearr_27236_27257[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27230 === 5))
{var inst_27206 = (state_27229[7]);var inst_27209 = (state_27229[9]);var inst_27213 = cljs.core._EQ_.call(null,inst_27209,inst_27206);var state_27229__$1 = state_27229;if(inst_27213)
{var statearr_27237_27258 = state_27229__$1;(statearr_27237_27258[1] = 8);
} else
{var statearr_27238_27259 = state_27229__$1;(statearr_27238_27259[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27230 === 6))
{var state_27229__$1 = state_27229;var statearr_27240_27260 = state_27229__$1;(statearr_27240_27260[2] = null);
(statearr_27240_27260[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27230 === 7))
{var inst_27224 = (state_27229[2]);var state_27229__$1 = state_27229;var statearr_27241_27261 = state_27229__$1;(statearr_27241_27261[2] = inst_27224);
(statearr_27241_27261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27230 === 8))
{var inst_27206 = (state_27229[7]);var tmp27239 = inst_27206;var inst_27206__$1 = tmp27239;var state_27229__$1 = (function (){var statearr_27242 = state_27229;(statearr_27242[7] = inst_27206__$1);
return statearr_27242;
})();var statearr_27243_27262 = state_27229__$1;(statearr_27243_27262[2] = null);
(statearr_27243_27262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27230 === 9))
{var inst_27209 = (state_27229[9]);var state_27229__$1 = state_27229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27229__$1,11,out,inst_27209);
} else
{if((state_val_27230 === 10))
{var inst_27221 = (state_27229[2]);var state_27229__$1 = state_27229;var statearr_27244_27263 = state_27229__$1;(statearr_27244_27263[2] = inst_27221);
(statearr_27244_27263[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27230 === 11))
{var inst_27209 = (state_27229[9]);var inst_27218 = (state_27229[2]);var inst_27206 = inst_27209;var state_27229__$1 = (function (){var statearr_27245 = state_27229;(statearr_27245[7] = inst_27206);
(statearr_27245[10] = inst_27218);
return statearr_27245;
})();var statearr_27246_27264 = state_27229__$1;(statearr_27246_27264[2] = null);
(statearr_27246_27264[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_27250 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27250[0] = state_machine__5548__auto__);
(statearr_27250[1] = 1);
return statearr_27250;
});
var state_machine__5548__auto____1 = (function (state_27229){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27229);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27251){if((e27251 instanceof Object))
{var ex__5551__auto__ = e27251;var statearr_27252_27265 = state_27229;(statearr_27252_27265[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27229);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27266 = state_27229;
state_27229 = G__27266;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27229){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27253 = f__5563__auto__.call(null);(statearr_27253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27254);
return statearr_27253;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27371){var state_val_27372 = (state_27371[1]);if((state_val_27372 === 1))
{var inst_27334 = (new Array(n));var inst_27335 = inst_27334;var inst_27336 = 0;var state_27371__$1 = (function (){var statearr_27373 = state_27371;(statearr_27373[7] = inst_27335);
(statearr_27373[8] = inst_27336);
return statearr_27373;
})();var statearr_27374_27402 = state_27371__$1;(statearr_27374_27402[2] = null);
(statearr_27374_27402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 2))
{var state_27371__$1 = state_27371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27371__$1,4,ch);
} else
{if((state_val_27372 === 3))
{var inst_27369 = (state_27371[2]);var state_27371__$1 = state_27371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27371__$1,inst_27369);
} else
{if((state_val_27372 === 4))
{var inst_27339 = (state_27371[9]);var inst_27339__$1 = (state_27371[2]);var inst_27340 = (inst_27339__$1 == null);var inst_27341 = cljs.core.not.call(null,inst_27340);var state_27371__$1 = (function (){var statearr_27375 = state_27371;(statearr_27375[9] = inst_27339__$1);
return statearr_27375;
})();if(inst_27341)
{var statearr_27376_27403 = state_27371__$1;(statearr_27376_27403[1] = 5);
} else
{var statearr_27377_27404 = state_27371__$1;(statearr_27377_27404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 5))
{var inst_27335 = (state_27371[7]);var inst_27344 = (state_27371[10]);var inst_27339 = (state_27371[9]);var inst_27336 = (state_27371[8]);var inst_27343 = (inst_27335[inst_27336] = inst_27339);var inst_27344__$1 = (inst_27336 + 1);var inst_27345 = (inst_27344__$1 < n);var state_27371__$1 = (function (){var statearr_27378 = state_27371;(statearr_27378[11] = inst_27343);
(statearr_27378[10] = inst_27344__$1);
return statearr_27378;
})();if(cljs.core.truth_(inst_27345))
{var statearr_27379_27405 = state_27371__$1;(statearr_27379_27405[1] = 8);
} else
{var statearr_27380_27406 = state_27371__$1;(statearr_27380_27406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 6))
{var inst_27336 = (state_27371[8]);var inst_27357 = (inst_27336 > 0);var state_27371__$1 = state_27371;if(cljs.core.truth_(inst_27357))
{var statearr_27382_27407 = state_27371__$1;(statearr_27382_27407[1] = 12);
} else
{var statearr_27383_27408 = state_27371__$1;(statearr_27383_27408[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 7))
{var inst_27367 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27384_27409 = state_27371__$1;(statearr_27384_27409[2] = inst_27367);
(statearr_27384_27409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 8))
{var inst_27335 = (state_27371[7]);var inst_27344 = (state_27371[10]);var tmp27381 = inst_27335;var inst_27335__$1 = tmp27381;var inst_27336 = inst_27344;var state_27371__$1 = (function (){var statearr_27385 = state_27371;(statearr_27385[7] = inst_27335__$1);
(statearr_27385[8] = inst_27336);
return statearr_27385;
})();var statearr_27386_27410 = state_27371__$1;(statearr_27386_27410[2] = null);
(statearr_27386_27410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 9))
{var inst_27335 = (state_27371[7]);var inst_27349 = cljs.core.vec.call(null,inst_27335);var state_27371__$1 = state_27371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27371__$1,11,out,inst_27349);
} else
{if((state_val_27372 === 10))
{var inst_27355 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27387_27411 = state_27371__$1;(statearr_27387_27411[2] = inst_27355);
(statearr_27387_27411[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 11))
{var inst_27351 = (state_27371[2]);var inst_27352 = (new Array(n));var inst_27335 = inst_27352;var inst_27336 = 0;var state_27371__$1 = (function (){var statearr_27388 = state_27371;(statearr_27388[12] = inst_27351);
(statearr_27388[7] = inst_27335);
(statearr_27388[8] = inst_27336);
return statearr_27388;
})();var statearr_27389_27412 = state_27371__$1;(statearr_27389_27412[2] = null);
(statearr_27389_27412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 12))
{var inst_27335 = (state_27371[7]);var inst_27359 = cljs.core.vec.call(null,inst_27335);var state_27371__$1 = state_27371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27371__$1,15,out,inst_27359);
} else
{if((state_val_27372 === 13))
{var state_27371__$1 = state_27371;var statearr_27390_27413 = state_27371__$1;(statearr_27390_27413[2] = null);
(statearr_27390_27413[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 14))
{var inst_27364 = (state_27371[2]);var inst_27365 = cljs.core.async.close_BANG_.call(null,out);var state_27371__$1 = (function (){var statearr_27391 = state_27371;(statearr_27391[13] = inst_27364);
return statearr_27391;
})();var statearr_27392_27414 = state_27371__$1;(statearr_27392_27414[2] = inst_27365);
(statearr_27392_27414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27372 === 15))
{var inst_27361 = (state_27371[2]);var state_27371__$1 = state_27371;var statearr_27393_27415 = state_27371__$1;(statearr_27393_27415[2] = inst_27361);
(statearr_27393_27415[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_27397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27397[0] = state_machine__5548__auto__);
(statearr_27397[1] = 1);
return statearr_27397;
});
var state_machine__5548__auto____1 = (function (state_27371){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27398){if((e27398 instanceof Object))
{var ex__5551__auto__ = e27398;var statearr_27399_27416 = state_27371;(statearr_27399_27416[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27417 = state_27371;
state_27371 = G__27417;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27371){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27400 = f__5563__auto__.call(null);(statearr_27400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27401);
return statearr_27400;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27560 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27530){var state_val_27531 = (state_27530[1]);if((state_val_27531 === 1))
{var inst_27489 = [];var inst_27490 = inst_27489;var inst_27491 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27530__$1 = (function (){var statearr_27532 = state_27530;(statearr_27532[7] = inst_27490);
(statearr_27532[8] = inst_27491);
return statearr_27532;
})();var statearr_27533_27561 = state_27530__$1;(statearr_27533_27561[2] = null);
(statearr_27533_27561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 2))
{var state_27530__$1 = state_27530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27530__$1,4,ch);
} else
{if((state_val_27531 === 3))
{var inst_27528 = (state_27530[2]);var state_27530__$1 = state_27530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27530__$1,inst_27528);
} else
{if((state_val_27531 === 4))
{var inst_27494 = (state_27530[9]);var inst_27494__$1 = (state_27530[2]);var inst_27495 = (inst_27494__$1 == null);var inst_27496 = cljs.core.not.call(null,inst_27495);var state_27530__$1 = (function (){var statearr_27534 = state_27530;(statearr_27534[9] = inst_27494__$1);
return statearr_27534;
})();if(inst_27496)
{var statearr_27535_27562 = state_27530__$1;(statearr_27535_27562[1] = 5);
} else
{var statearr_27536_27563 = state_27530__$1;(statearr_27536_27563[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 5))
{var inst_27491 = (state_27530[8]);var inst_27498 = (state_27530[10]);var inst_27494 = (state_27530[9]);var inst_27498__$1 = f.call(null,inst_27494);var inst_27499 = cljs.core._EQ_.call(null,inst_27498__$1,inst_27491);var inst_27500 = cljs.core.keyword_identical_QMARK_.call(null,inst_27491,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27501 = (inst_27499) || (inst_27500);var state_27530__$1 = (function (){var statearr_27537 = state_27530;(statearr_27537[10] = inst_27498__$1);
return statearr_27537;
})();if(cljs.core.truth_(inst_27501))
{var statearr_27538_27564 = state_27530__$1;(statearr_27538_27564[1] = 8);
} else
{var statearr_27539_27565 = state_27530__$1;(statearr_27539_27565[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 6))
{var inst_27490 = (state_27530[7]);var inst_27515 = inst_27490.length;var inst_27516 = (inst_27515 > 0);var state_27530__$1 = state_27530;if(cljs.core.truth_(inst_27516))
{var statearr_27541_27566 = state_27530__$1;(statearr_27541_27566[1] = 12);
} else
{var statearr_27542_27567 = state_27530__$1;(statearr_27542_27567[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 7))
{var inst_27526 = (state_27530[2]);var state_27530__$1 = state_27530;var statearr_27543_27568 = state_27530__$1;(statearr_27543_27568[2] = inst_27526);
(statearr_27543_27568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 8))
{var inst_27490 = (state_27530[7]);var inst_27498 = (state_27530[10]);var inst_27494 = (state_27530[9]);var inst_27503 = inst_27490.push(inst_27494);var tmp27540 = inst_27490;var inst_27490__$1 = tmp27540;var inst_27491 = inst_27498;var state_27530__$1 = (function (){var statearr_27544 = state_27530;(statearr_27544[7] = inst_27490__$1);
(statearr_27544[8] = inst_27491);
(statearr_27544[11] = inst_27503);
return statearr_27544;
})();var statearr_27545_27569 = state_27530__$1;(statearr_27545_27569[2] = null);
(statearr_27545_27569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 9))
{var inst_27490 = (state_27530[7]);var inst_27506 = cljs.core.vec.call(null,inst_27490);var state_27530__$1 = state_27530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27530__$1,11,out,inst_27506);
} else
{if((state_val_27531 === 10))
{var inst_27513 = (state_27530[2]);var state_27530__$1 = state_27530;var statearr_27546_27570 = state_27530__$1;(statearr_27546_27570[2] = inst_27513);
(statearr_27546_27570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 11))
{var inst_27498 = (state_27530[10]);var inst_27494 = (state_27530[9]);var inst_27508 = (state_27530[2]);var inst_27509 = [];var inst_27510 = inst_27509.push(inst_27494);var inst_27490 = inst_27509;var inst_27491 = inst_27498;var state_27530__$1 = (function (){var statearr_27547 = state_27530;(statearr_27547[12] = inst_27510);
(statearr_27547[7] = inst_27490);
(statearr_27547[8] = inst_27491);
(statearr_27547[13] = inst_27508);
return statearr_27547;
})();var statearr_27548_27571 = state_27530__$1;(statearr_27548_27571[2] = null);
(statearr_27548_27571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 12))
{var inst_27490 = (state_27530[7]);var inst_27518 = cljs.core.vec.call(null,inst_27490);var state_27530__$1 = state_27530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27530__$1,15,out,inst_27518);
} else
{if((state_val_27531 === 13))
{var state_27530__$1 = state_27530;var statearr_27549_27572 = state_27530__$1;(statearr_27549_27572[2] = null);
(statearr_27549_27572[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 14))
{var inst_27523 = (state_27530[2]);var inst_27524 = cljs.core.async.close_BANG_.call(null,out);var state_27530__$1 = (function (){var statearr_27550 = state_27530;(statearr_27550[14] = inst_27523);
return statearr_27550;
})();var statearr_27551_27573 = state_27530__$1;(statearr_27551_27573[2] = inst_27524);
(statearr_27551_27573[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27531 === 15))
{var inst_27520 = (state_27530[2]);var state_27530__$1 = state_27530;var statearr_27552_27574 = state_27530__$1;(statearr_27552_27574[2] = inst_27520);
(statearr_27552_27574[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_27556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27556[0] = state_machine__5548__auto__);
(statearr_27556[1] = 1);
return statearr_27556;
});
var state_machine__5548__auto____1 = (function (state_27530){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27530);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27557){if((e27557 instanceof Object))
{var ex__5551__auto__ = e27557;var statearr_27558_27575 = state_27530;(statearr_27558_27575[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27576 = state_27530;
state_27530 = G__27576;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27530){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27559 = f__5563__auto__.call(null);(statearr_27559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27560);
return statearr_27559;
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