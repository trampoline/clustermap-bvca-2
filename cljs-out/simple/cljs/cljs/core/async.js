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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14085 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14085 = (function (f,fn_handler,meta14086){
this.f = f;
this.fn_handler = fn_handler;
this.meta14086 = meta14086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14085.cljs$lang$type = true;
cljs.core.async.t14085.cljs$lang$ctorStr = "cljs.core.async/t14085";
cljs.core.async.t14085.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14085");
});
cljs.core.async.t14085.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14087){var self__ = this;
var _14087__$1 = this;return self__.meta14086;
});
cljs.core.async.t14085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14087,meta14086__$1){var self__ = this;
var _14087__$1 = this;return (new cljs.core.async.t14085(self__.f,self__.fn_handler,meta14086__$1));
});
cljs.core.async.__GT_t14085 = (function __GT_t14085(f__$1,fn_handler__$1,meta14086){return (new cljs.core.async.t14085(f__$1,fn_handler__$1,meta14086));
});
}
return (new cljs.core.async.t14085(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14089 = buff;if(G__14089)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__14089.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14089.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14089);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14089);
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
{var val_14090 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14090);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14090);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___14091 = n;var x_14092 = 0;while(true){
if((x_14092 < n__4289__auto___14091))
{(a[x_14092] = 0);
{
var G__14093 = (x_14092 + 1);
x_14092 = G__14093;
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
var G__14094 = (i + 1);
i = G__14094;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14098 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14098 = (function (flag,alt_flag,meta14099){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14099 = meta14099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14098.cljs$lang$type = true;
cljs.core.async.t14098.cljs$lang$ctorStr = "cljs.core.async/t14098";
cljs.core.async.t14098.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14098");
});
cljs.core.async.t14098.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14100){var self__ = this;
var _14100__$1 = this;return self__.meta14099;
});
cljs.core.async.t14098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14100,meta14099__$1){var self__ = this;
var _14100__$1 = this;return (new cljs.core.async.t14098(self__.flag,self__.alt_flag,meta14099__$1));
});
cljs.core.async.__GT_t14098 = (function __GT_t14098(flag__$1,alt_flag__$1,meta14099){return (new cljs.core.async.t14098(flag__$1,alt_flag__$1,meta14099));
});
}
return (new cljs.core.async.t14098(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14104 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14104 = (function (cb,flag,alt_handler,meta14105){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14105 = meta14105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14104.cljs$lang$type = true;
cljs.core.async.t14104.cljs$lang$ctorStr = "cljs.core.async/t14104";
cljs.core.async.t14104.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14104");
});
cljs.core.async.t14104.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14106){var self__ = this;
var _14106__$1 = this;return self__.meta14105;
});
cljs.core.async.t14104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14106,meta14105__$1){var self__ = this;
var _14106__$1 = this;return (new cljs.core.async.t14104(self__.cb,self__.flag,self__.alt_handler,meta14105__$1));
});
cljs.core.async.__GT_t14104 = (function __GT_t14104(cb__$1,flag__$1,alt_handler__$1,meta14105){return (new cljs.core.async.t14104(cb__$1,flag__$1,alt_handler__$1,meta14105));
});
}
return (new cljs.core.async.t14104(cb,flag,alt_handler,null));
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
return (function (p1__14107_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14107_SHARP_,port], null));
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
var G__14108 = (i + 1);
i = G__14108;
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
var alts_BANG___delegate = function (ports,p__14109){var map__14111 = p__14109;var map__14111__$1 = ((cljs.core.seq_QMARK_.call(null,map__14111))?cljs.core.apply.call(null,cljs.core.hash_map,map__14111):map__14111);var opts = map__14111__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14109 = null;if (arguments.length > 1) {
  p__14109 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14109);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14112){
var ports = cljs.core.first(arglist__14112);
var p__14109 = cljs.core.rest(arglist__14112);
return alts_BANG___delegate(ports,p__14109);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14120 = (function (ch,f,map_LT_,meta14121){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14121 = meta14121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14120.cljs$lang$type = true;
cljs.core.async.t14120.cljs$lang$ctorStr = "cljs.core.async/t14120";
cljs.core.async.t14120.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14120");
});
cljs.core.async.t14120.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14120.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14123 = (function (fn1,_,meta14121,ch,f,map_LT_,meta14124){
this.fn1 = fn1;
this._ = _;
this.meta14121 = meta14121;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14124 = meta14124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14123.cljs$lang$type = true;
cljs.core.async.t14123.cljs$lang$ctorStr = "cljs.core.async/t14123";
cljs.core.async.t14123.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14123");
});
cljs.core.async.t14123.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14123.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14113_SHARP_){return f1.call(null,(((p1__14113_SHARP_ == null))?null:self__.f.call(null,p1__14113_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14125){var self__ = this;
var _14125__$1 = this;return self__.meta14124;
});
cljs.core.async.t14123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14125,meta14124__$1){var self__ = this;
var _14125__$1 = this;return (new cljs.core.async.t14123(self__.fn1,self__._,self__.meta14121,self__.ch,self__.f,self__.map_LT_,meta14124__$1));
});
cljs.core.async.__GT_t14123 = (function __GT_t14123(fn1__$1,___$2,meta14121__$1,ch__$2,f__$2,map_LT___$2,meta14124){return (new cljs.core.async.t14123(fn1__$1,___$2,meta14121__$1,ch__$2,f__$2,map_LT___$2,meta14124));
});
}
return (new cljs.core.async.t14123(fn1,___$1,self__.meta14121,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14120.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14122){var self__ = this;
var _14122__$1 = this;return self__.meta14121;
});
cljs.core.async.t14120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14122,meta14121__$1){var self__ = this;
var _14122__$1 = this;return (new cljs.core.async.t14120(self__.ch,self__.f,self__.map_LT_,meta14121__$1));
});
cljs.core.async.__GT_t14120 = (function __GT_t14120(ch__$1,f__$1,map_LT___$1,meta14121){return (new cljs.core.async.t14120(ch__$1,f__$1,map_LT___$1,meta14121));
});
}
return (new cljs.core.async.t14120(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14129 = (function (ch,f,map_GT_,meta14130){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14130 = meta14130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14129.cljs$lang$type = true;
cljs.core.async.t14129.cljs$lang$ctorStr = "cljs.core.async/t14129";
cljs.core.async.t14129.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14129");
});
cljs.core.async.t14129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14129.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14131){var self__ = this;
var _14131__$1 = this;return self__.meta14130;
});
cljs.core.async.t14129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14131,meta14130__$1){var self__ = this;
var _14131__$1 = this;return (new cljs.core.async.t14129(self__.ch,self__.f,self__.map_GT_,meta14130__$1));
});
cljs.core.async.__GT_t14129 = (function __GT_t14129(ch__$1,f__$1,map_GT___$1,meta14130){return (new cljs.core.async.t14129(ch__$1,f__$1,map_GT___$1,meta14130));
});
}
return (new cljs.core.async.t14129(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14135 = (function (ch,p,filter_GT_,meta14136){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14136 = meta14136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14135.cljs$lang$type = true;
cljs.core.async.t14135.cljs$lang$ctorStr = "cljs.core.async/t14135";
cljs.core.async.t14135.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14135");
});
cljs.core.async.t14135.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14135.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14135.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14137){var self__ = this;
var _14137__$1 = this;return self__.meta14136;
});
cljs.core.async.t14135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14137,meta14136__$1){var self__ = this;
var _14137__$1 = this;return (new cljs.core.async.t14135(self__.ch,self__.p,self__.filter_GT_,meta14136__$1));
});
cljs.core.async.__GT_t14135 = (function __GT_t14135(ch__$1,p__$1,filter_GT___$1,meta14136){return (new cljs.core.async.t14135(ch__$1,p__$1,filter_GT___$1,meta14136));
});
}
return (new cljs.core.async.t14135(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14199){var state_val_14200 = (state_14199[1]);if((state_val_14200 === 1))
{var state_14199__$1 = state_14199;var statearr_14201_14221 = state_14199__$1;(statearr_14201_14221[2] = null);
(statearr_14201_14221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 2))
{var state_14199__$1 = state_14199;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14199__$1,4,ch);
} else
{if((state_val_14200 === 3))
{var inst_14197 = (state_14199[2]);var state_14199__$1 = state_14199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14199__$1,inst_14197);
} else
{if((state_val_14200 === 4))
{var inst_14181 = (state_14199[7]);var inst_14181__$1 = (state_14199[2]);var inst_14182 = (inst_14181__$1 == null);var state_14199__$1 = (function (){var statearr_14202 = state_14199;(statearr_14202[7] = inst_14181__$1);
return statearr_14202;
})();if(cljs.core.truth_(inst_14182))
{var statearr_14203_14222 = state_14199__$1;(statearr_14203_14222[1] = 5);
} else
{var statearr_14204_14223 = state_14199__$1;(statearr_14204_14223[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 5))
{var inst_14184 = cljs.core.async.close_BANG_.call(null,out);var state_14199__$1 = state_14199;var statearr_14205_14224 = state_14199__$1;(statearr_14205_14224[2] = inst_14184);
(statearr_14205_14224[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 6))
{var inst_14181 = (state_14199[7]);var inst_14186 = p.call(null,inst_14181);var state_14199__$1 = state_14199;if(cljs.core.truth_(inst_14186))
{var statearr_14206_14225 = state_14199__$1;(statearr_14206_14225[1] = 8);
} else
{var statearr_14207_14226 = state_14199__$1;(statearr_14207_14226[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 7))
{var inst_14195 = (state_14199[2]);var state_14199__$1 = state_14199;var statearr_14208_14227 = state_14199__$1;(statearr_14208_14227[2] = inst_14195);
(statearr_14208_14227[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 8))
{var inst_14181 = (state_14199[7]);var state_14199__$1 = state_14199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14199__$1,11,out,inst_14181);
} else
{if((state_val_14200 === 9))
{var state_14199__$1 = state_14199;var statearr_14209_14228 = state_14199__$1;(statearr_14209_14228[2] = null);
(statearr_14209_14228[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 10))
{var inst_14192 = (state_14199[2]);var state_14199__$1 = (function (){var statearr_14210 = state_14199;(statearr_14210[8] = inst_14192);
return statearr_14210;
})();var statearr_14211_14229 = state_14199__$1;(statearr_14211_14229[2] = null);
(statearr_14211_14229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14200 === 11))
{var inst_14189 = (state_14199[2]);var state_14199__$1 = state_14199;var statearr_14212_14230 = state_14199__$1;(statearr_14212_14230[2] = inst_14189);
(statearr_14212_14230[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_14216 = [null,null,null,null,null,null,null,null,null];(statearr_14216[0] = state_machine__5548__auto__);
(statearr_14216[1] = 1);
return statearr_14216;
});
var state_machine__5548__auto____1 = (function (state_14199){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14199);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14217){if((e14217 instanceof Object))
{var ex__5551__auto__ = e14217;var statearr_14218_14231 = state_14199;(statearr_14218_14231[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14232 = state_14199;
state_14199 = G__14232;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14199){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14219 = f__5563__auto__.call(null);(statearr_14219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14220);
return statearr_14219;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14384){var state_val_14385 = (state_14384[1]);if((state_val_14385 === 1))
{var state_14384__$1 = state_14384;var statearr_14386_14423 = state_14384__$1;(statearr_14386_14423[2] = null);
(statearr_14386_14423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 2))
{var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14384__$1,4,in$);
} else
{if((state_val_14385 === 3))
{var inst_14382 = (state_14384[2]);var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14384__$1,inst_14382);
} else
{if((state_val_14385 === 4))
{var inst_14330 = (state_14384[7]);var inst_14330__$1 = (state_14384[2]);var inst_14331 = (inst_14330__$1 == null);var state_14384__$1 = (function (){var statearr_14387 = state_14384;(statearr_14387[7] = inst_14330__$1);
return statearr_14387;
})();if(cljs.core.truth_(inst_14331))
{var statearr_14388_14424 = state_14384__$1;(statearr_14388_14424[1] = 5);
} else
{var statearr_14389_14425 = state_14384__$1;(statearr_14389_14425[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 5))
{var inst_14333 = cljs.core.async.close_BANG_.call(null,out);var state_14384__$1 = state_14384;var statearr_14390_14426 = state_14384__$1;(statearr_14390_14426[2] = inst_14333);
(statearr_14390_14426[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 6))
{var inst_14330 = (state_14384[7]);var inst_14335 = f.call(null,inst_14330);var inst_14340 = cljs.core.seq.call(null,inst_14335);var inst_14341 = inst_14340;var inst_14342 = null;var inst_14343 = 0;var inst_14344 = 0;var state_14384__$1 = (function (){var statearr_14391 = state_14384;(statearr_14391[8] = inst_14343);
(statearr_14391[9] = inst_14344);
(statearr_14391[10] = inst_14341);
(statearr_14391[11] = inst_14342);
return statearr_14391;
})();var statearr_14392_14427 = state_14384__$1;(statearr_14392_14427[2] = null);
(statearr_14392_14427[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 7))
{var inst_14380 = (state_14384[2]);var state_14384__$1 = state_14384;var statearr_14393_14428 = state_14384__$1;(statearr_14393_14428[2] = inst_14380);
(statearr_14393_14428[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 8))
{var inst_14343 = (state_14384[8]);var inst_14344 = (state_14384[9]);var inst_14346 = (inst_14344 < inst_14343);var inst_14347 = inst_14346;var state_14384__$1 = state_14384;if(cljs.core.truth_(inst_14347))
{var statearr_14394_14429 = state_14384__$1;(statearr_14394_14429[1] = 10);
} else
{var statearr_14395_14430 = state_14384__$1;(statearr_14395_14430[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 9))
{var inst_14377 = (state_14384[2]);var state_14384__$1 = (function (){var statearr_14396 = state_14384;(statearr_14396[12] = inst_14377);
return statearr_14396;
})();var statearr_14397_14431 = state_14384__$1;(statearr_14397_14431[2] = null);
(statearr_14397_14431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 10))
{var inst_14344 = (state_14384[9]);var inst_14342 = (state_14384[11]);var inst_14349 = cljs.core._nth.call(null,inst_14342,inst_14344);var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14384__$1,13,out,inst_14349);
} else
{if((state_val_14385 === 11))
{var inst_14341 = (state_14384[10]);var inst_14355 = (state_14384[13]);var inst_14355__$1 = cljs.core.seq.call(null,inst_14341);var state_14384__$1 = (function (){var statearr_14401 = state_14384;(statearr_14401[13] = inst_14355__$1);
return statearr_14401;
})();if(inst_14355__$1)
{var statearr_14402_14432 = state_14384__$1;(statearr_14402_14432[1] = 14);
} else
{var statearr_14403_14433 = state_14384__$1;(statearr_14403_14433[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 12))
{var inst_14375 = (state_14384[2]);var state_14384__$1 = state_14384;var statearr_14404_14434 = state_14384__$1;(statearr_14404_14434[2] = inst_14375);
(statearr_14404_14434[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 13))
{var inst_14343 = (state_14384[8]);var inst_14344 = (state_14384[9]);var inst_14341 = (state_14384[10]);var inst_14342 = (state_14384[11]);var inst_14351 = (state_14384[2]);var inst_14352 = (inst_14344 + 1);var tmp14398 = inst_14343;var tmp14399 = inst_14341;var tmp14400 = inst_14342;var inst_14341__$1 = tmp14399;var inst_14342__$1 = tmp14400;var inst_14343__$1 = tmp14398;var inst_14344__$1 = inst_14352;var state_14384__$1 = (function (){var statearr_14405 = state_14384;(statearr_14405[8] = inst_14343__$1);
(statearr_14405[9] = inst_14344__$1);
(statearr_14405[10] = inst_14341__$1);
(statearr_14405[11] = inst_14342__$1);
(statearr_14405[14] = inst_14351);
return statearr_14405;
})();var statearr_14406_14435 = state_14384__$1;(statearr_14406_14435[2] = null);
(statearr_14406_14435[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 14))
{var inst_14355 = (state_14384[13]);var inst_14357 = cljs.core.chunked_seq_QMARK_.call(null,inst_14355);var state_14384__$1 = state_14384;if(inst_14357)
{var statearr_14407_14436 = state_14384__$1;(statearr_14407_14436[1] = 17);
} else
{var statearr_14408_14437 = state_14384__$1;(statearr_14408_14437[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 15))
{var state_14384__$1 = state_14384;var statearr_14409_14438 = state_14384__$1;(statearr_14409_14438[2] = null);
(statearr_14409_14438[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 16))
{var inst_14373 = (state_14384[2]);var state_14384__$1 = state_14384;var statearr_14410_14439 = state_14384__$1;(statearr_14410_14439[2] = inst_14373);
(statearr_14410_14439[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 17))
{var inst_14355 = (state_14384[13]);var inst_14359 = cljs.core.chunk_first.call(null,inst_14355);var inst_14360 = cljs.core.chunk_rest.call(null,inst_14355);var inst_14361 = cljs.core.count.call(null,inst_14359);var inst_14341 = inst_14360;var inst_14342 = inst_14359;var inst_14343 = inst_14361;var inst_14344 = 0;var state_14384__$1 = (function (){var statearr_14411 = state_14384;(statearr_14411[8] = inst_14343);
(statearr_14411[9] = inst_14344);
(statearr_14411[10] = inst_14341);
(statearr_14411[11] = inst_14342);
return statearr_14411;
})();var statearr_14412_14440 = state_14384__$1;(statearr_14412_14440[2] = null);
(statearr_14412_14440[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 18))
{var inst_14355 = (state_14384[13]);var inst_14364 = cljs.core.first.call(null,inst_14355);var state_14384__$1 = state_14384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14384__$1,20,out,inst_14364);
} else
{if((state_val_14385 === 19))
{var inst_14370 = (state_14384[2]);var state_14384__$1 = state_14384;var statearr_14413_14441 = state_14384__$1;(statearr_14413_14441[2] = inst_14370);
(statearr_14413_14441[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14385 === 20))
{var inst_14355 = (state_14384[13]);var inst_14366 = (state_14384[2]);var inst_14367 = cljs.core.next.call(null,inst_14355);var inst_14341 = inst_14367;var inst_14342 = null;var inst_14343 = 0;var inst_14344 = 0;var state_14384__$1 = (function (){var statearr_14414 = state_14384;(statearr_14414[15] = inst_14366);
(statearr_14414[8] = inst_14343);
(statearr_14414[9] = inst_14344);
(statearr_14414[10] = inst_14341);
(statearr_14414[11] = inst_14342);
return statearr_14414;
})();var statearr_14415_14442 = state_14384__$1;(statearr_14415_14442[2] = null);
(statearr_14415_14442[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_14419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14419[0] = state_machine__5548__auto__);
(statearr_14419[1] = 1);
return statearr_14419;
});
var state_machine__5548__auto____1 = (function (state_14384){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14384);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14420){if((e14420 instanceof Object))
{var ex__5551__auto__ = e14420;var statearr_14421_14443 = state_14384;(statearr_14421_14443[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14444 = state_14384;
state_14384 = G__14444;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14384){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14422 = f__5563__auto__.call(null);(statearr_14422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14422;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___14525 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14504){var state_val_14505 = (state_14504[1]);if((state_val_14505 === 1))
{var state_14504__$1 = state_14504;var statearr_14506_14526 = state_14504__$1;(statearr_14506_14526[2] = null);
(statearr_14506_14526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 2))
{var state_14504__$1 = state_14504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14504__$1,4,from);
} else
{if((state_val_14505 === 3))
{var inst_14502 = (state_14504[2]);var state_14504__$1 = state_14504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14504__$1,inst_14502);
} else
{if((state_val_14505 === 4))
{var inst_14487 = (state_14504[7]);var inst_14487__$1 = (state_14504[2]);var inst_14488 = (inst_14487__$1 == null);var state_14504__$1 = (function (){var statearr_14507 = state_14504;(statearr_14507[7] = inst_14487__$1);
return statearr_14507;
})();if(cljs.core.truth_(inst_14488))
{var statearr_14508_14527 = state_14504__$1;(statearr_14508_14527[1] = 5);
} else
{var statearr_14509_14528 = state_14504__$1;(statearr_14509_14528[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 5))
{var state_14504__$1 = state_14504;if(cljs.core.truth_(close_QMARK_))
{var statearr_14510_14529 = state_14504__$1;(statearr_14510_14529[1] = 8);
} else
{var statearr_14511_14530 = state_14504__$1;(statearr_14511_14530[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 6))
{var inst_14487 = (state_14504[7]);var state_14504__$1 = state_14504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14504__$1,11,to,inst_14487);
} else
{if((state_val_14505 === 7))
{var inst_14500 = (state_14504[2]);var state_14504__$1 = state_14504;var statearr_14512_14531 = state_14504__$1;(statearr_14512_14531[2] = inst_14500);
(statearr_14512_14531[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 8))
{var inst_14491 = cljs.core.async.close_BANG_.call(null,to);var state_14504__$1 = state_14504;var statearr_14513_14532 = state_14504__$1;(statearr_14513_14532[2] = inst_14491);
(statearr_14513_14532[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 9))
{var state_14504__$1 = state_14504;var statearr_14514_14533 = state_14504__$1;(statearr_14514_14533[2] = null);
(statearr_14514_14533[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 10))
{var inst_14494 = (state_14504[2]);var state_14504__$1 = state_14504;var statearr_14515_14534 = state_14504__$1;(statearr_14515_14534[2] = inst_14494);
(statearr_14515_14534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14505 === 11))
{var inst_14497 = (state_14504[2]);var state_14504__$1 = (function (){var statearr_14516 = state_14504;(statearr_14516[8] = inst_14497);
return statearr_14516;
})();var statearr_14517_14535 = state_14504__$1;(statearr_14517_14535[2] = null);
(statearr_14517_14535[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14521 = [null,null,null,null,null,null,null,null,null];(statearr_14521[0] = state_machine__5548__auto__);
(statearr_14521[1] = 1);
return statearr_14521;
});
var state_machine__5548__auto____1 = (function (state_14504){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14504);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14522){if((e14522 instanceof Object))
{var ex__5551__auto__ = e14522;var statearr_14523_14536 = state_14504;(statearr_14523_14536[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14537 = state_14504;
state_14504 = G__14537;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14504){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14524 = f__5563__auto__.call(null);(statearr_14524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14525);
return statearr_14524;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___14624 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14602){var state_val_14603 = (state_14602[1]);if((state_val_14603 === 1))
{var state_14602__$1 = state_14602;var statearr_14604_14625 = state_14602__$1;(statearr_14604_14625[2] = null);
(statearr_14604_14625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 2))
{var state_14602__$1 = state_14602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14602__$1,4,ch);
} else
{if((state_val_14603 === 3))
{var inst_14600 = (state_14602[2]);var state_14602__$1 = state_14602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14602__$1,inst_14600);
} else
{if((state_val_14603 === 4))
{var inst_14583 = (state_14602[7]);var inst_14583__$1 = (state_14602[2]);var inst_14584 = (inst_14583__$1 == null);var state_14602__$1 = (function (){var statearr_14605 = state_14602;(statearr_14605[7] = inst_14583__$1);
return statearr_14605;
})();if(cljs.core.truth_(inst_14584))
{var statearr_14606_14626 = state_14602__$1;(statearr_14606_14626[1] = 5);
} else
{var statearr_14607_14627 = state_14602__$1;(statearr_14607_14627[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 5))
{var inst_14586 = cljs.core.async.close_BANG_.call(null,tc);var inst_14587 = cljs.core.async.close_BANG_.call(null,fc);var state_14602__$1 = (function (){var statearr_14608 = state_14602;(statearr_14608[8] = inst_14586);
return statearr_14608;
})();var statearr_14609_14628 = state_14602__$1;(statearr_14609_14628[2] = inst_14587);
(statearr_14609_14628[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 6))
{var inst_14583 = (state_14602[7]);var inst_14589 = p.call(null,inst_14583);var state_14602__$1 = state_14602;if(cljs.core.truth_(inst_14589))
{var statearr_14610_14629 = state_14602__$1;(statearr_14610_14629[1] = 9);
} else
{var statearr_14611_14630 = state_14602__$1;(statearr_14611_14630[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 7))
{var inst_14598 = (state_14602[2]);var state_14602__$1 = state_14602;var statearr_14612_14631 = state_14602__$1;(statearr_14612_14631[2] = inst_14598);
(statearr_14612_14631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 8))
{var inst_14595 = (state_14602[2]);var state_14602__$1 = (function (){var statearr_14613 = state_14602;(statearr_14613[9] = inst_14595);
return statearr_14613;
})();var statearr_14614_14632 = state_14602__$1;(statearr_14614_14632[2] = null);
(statearr_14614_14632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 9))
{var state_14602__$1 = state_14602;var statearr_14615_14633 = state_14602__$1;(statearr_14615_14633[2] = tc);
(statearr_14615_14633[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 10))
{var state_14602__$1 = state_14602;var statearr_14616_14634 = state_14602__$1;(statearr_14616_14634[2] = fc);
(statearr_14616_14634[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14603 === 11))
{var inst_14583 = (state_14602[7]);var inst_14593 = (state_14602[2]);var state_14602__$1 = state_14602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14602__$1,8,inst_14593,inst_14583);
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
var state_machine__5548__auto____0 = (function (){var statearr_14620 = [null,null,null,null,null,null,null,null,null,null];(statearr_14620[0] = state_machine__5548__auto__);
(statearr_14620[1] = 1);
return statearr_14620;
});
var state_machine__5548__auto____1 = (function (state_14602){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14621){if((e14621 instanceof Object))
{var ex__5551__auto__ = e14621;var statearr_14622_14635 = state_14602;(statearr_14622_14635[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14636 = state_14602;
state_14602 = G__14636;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14602){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14623 = f__5563__auto__.call(null);(statearr_14623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14624);
return statearr_14623;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14683){var state_val_14684 = (state_14683[1]);if((state_val_14684 === 7))
{var inst_14679 = (state_14683[2]);var state_14683__$1 = state_14683;var statearr_14685_14701 = state_14683__$1;(statearr_14685_14701[2] = inst_14679);
(statearr_14685_14701[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14684 === 6))
{var inst_14669 = (state_14683[7]);var inst_14672 = (state_14683[8]);var inst_14676 = f.call(null,inst_14669,inst_14672);var inst_14669__$1 = inst_14676;var state_14683__$1 = (function (){var statearr_14686 = state_14683;(statearr_14686[7] = inst_14669__$1);
return statearr_14686;
})();var statearr_14687_14702 = state_14683__$1;(statearr_14687_14702[2] = null);
(statearr_14687_14702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14684 === 5))
{var inst_14669 = (state_14683[7]);var state_14683__$1 = state_14683;var statearr_14688_14703 = state_14683__$1;(statearr_14688_14703[2] = inst_14669);
(statearr_14688_14703[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14684 === 4))
{var inst_14672 = (state_14683[8]);var inst_14672__$1 = (state_14683[2]);var inst_14673 = (inst_14672__$1 == null);var state_14683__$1 = (function (){var statearr_14689 = state_14683;(statearr_14689[8] = inst_14672__$1);
return statearr_14689;
})();if(cljs.core.truth_(inst_14673))
{var statearr_14690_14704 = state_14683__$1;(statearr_14690_14704[1] = 5);
} else
{var statearr_14691_14705 = state_14683__$1;(statearr_14691_14705[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14684 === 3))
{var inst_14681 = (state_14683[2]);var state_14683__$1 = state_14683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14683__$1,inst_14681);
} else
{if((state_val_14684 === 2))
{var state_14683__$1 = state_14683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14683__$1,4,ch);
} else
{if((state_val_14684 === 1))
{var inst_14669 = init;var state_14683__$1 = (function (){var statearr_14692 = state_14683;(statearr_14692[7] = inst_14669);
return statearr_14692;
})();var statearr_14693_14706 = state_14683__$1;(statearr_14693_14706[2] = null);
(statearr_14693_14706[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14697 = [null,null,null,null,null,null,null,null,null];(statearr_14697[0] = state_machine__5548__auto__);
(statearr_14697[1] = 1);
return statearr_14697;
});
var state_machine__5548__auto____1 = (function (state_14683){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14683);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14698){if((e14698 instanceof Object))
{var ex__5551__auto__ = e14698;var statearr_14699_14707 = state_14683;(statearr_14699_14707[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14708 = state_14683;
state_14683 = G__14708;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14683){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14700 = f__5563__auto__.call(null);(statearr_14700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14700;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14770){var state_val_14771 = (state_14770[1]);if((state_val_14771 === 1))
{var inst_14750 = cljs.core.seq.call(null,coll);var inst_14751 = inst_14750;var state_14770__$1 = (function (){var statearr_14772 = state_14770;(statearr_14772[7] = inst_14751);
return statearr_14772;
})();var statearr_14773_14791 = state_14770__$1;(statearr_14773_14791[2] = null);
(statearr_14773_14791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14771 === 2))
{var inst_14751 = (state_14770[7]);var state_14770__$1 = state_14770;if(cljs.core.truth_(inst_14751))
{var statearr_14774_14792 = state_14770__$1;(statearr_14774_14792[1] = 4);
} else
{var statearr_14775_14793 = state_14770__$1;(statearr_14775_14793[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14771 === 3))
{var inst_14768 = (state_14770[2]);var state_14770__$1 = state_14770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14770__$1,inst_14768);
} else
{if((state_val_14771 === 4))
{var inst_14751 = (state_14770[7]);var inst_14754 = cljs.core.first.call(null,inst_14751);var state_14770__$1 = state_14770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14770__$1,7,ch,inst_14754);
} else
{if((state_val_14771 === 5))
{var state_14770__$1 = state_14770;if(cljs.core.truth_(close_QMARK_))
{var statearr_14776_14794 = state_14770__$1;(statearr_14776_14794[1] = 8);
} else
{var statearr_14777_14795 = state_14770__$1;(statearr_14777_14795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14771 === 6))
{var inst_14766 = (state_14770[2]);var state_14770__$1 = state_14770;var statearr_14778_14796 = state_14770__$1;(statearr_14778_14796[2] = inst_14766);
(statearr_14778_14796[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14771 === 7))
{var inst_14751 = (state_14770[7]);var inst_14756 = (state_14770[2]);var inst_14757 = cljs.core.next.call(null,inst_14751);var inst_14751__$1 = inst_14757;var state_14770__$1 = (function (){var statearr_14779 = state_14770;(statearr_14779[8] = inst_14756);
(statearr_14779[7] = inst_14751__$1);
return statearr_14779;
})();var statearr_14780_14797 = state_14770__$1;(statearr_14780_14797[2] = null);
(statearr_14780_14797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14771 === 8))
{var inst_14761 = cljs.core.async.close_BANG_.call(null,ch);var state_14770__$1 = state_14770;var statearr_14781_14798 = state_14770__$1;(statearr_14781_14798[2] = inst_14761);
(statearr_14781_14798[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14771 === 9))
{var state_14770__$1 = state_14770;var statearr_14782_14799 = state_14770__$1;(statearr_14782_14799[2] = null);
(statearr_14782_14799[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14771 === 10))
{var inst_14764 = (state_14770[2]);var state_14770__$1 = state_14770;var statearr_14783_14800 = state_14770__$1;(statearr_14783_14800[2] = inst_14764);
(statearr_14783_14800[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_14787 = [null,null,null,null,null,null,null,null,null];(statearr_14787[0] = state_machine__5548__auto__);
(statearr_14787[1] = 1);
return statearr_14787;
});
var state_machine__5548__auto____1 = (function (state_14770){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14770);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14788){if((e14788 instanceof Object))
{var ex__5551__auto__ = e14788;var statearr_14789_14801 = state_14770;(statearr_14789_14801[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14802 = state_14770;
state_14770 = G__14802;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14770){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14790 = f__5563__auto__.call(null);(statearr_14790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14790;
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
cljs.core.async.Mux = (function (){var obj14804 = {};return obj14804;
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
cljs.core.async.Mult = (function (){var obj14806 = {};return obj14806;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15030 = (function (cs,ch,mult,meta15031){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15031 = meta15031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15030.cljs$lang$type = true;
cljs.core.async.t15030.cljs$lang$ctorStr = "cljs.core.async/t15030";
cljs.core.async.t15030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15030");
});})(cs))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15030.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15032){var self__ = this;
var _15032__$1 = this;return self__.meta15031;
});})(cs))
;
cljs.core.async.t15030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15032,meta15031__$1){var self__ = this;
var _15032__$1 = this;return (new cljs.core.async.t15030(self__.cs,self__.ch,self__.mult,meta15031__$1));
});})(cs))
;
cljs.core.async.__GT_t15030 = ((function (cs){
return (function __GT_t15030(cs__$1,ch__$1,mult__$1,meta15031){return (new cljs.core.async.t15030(cs__$1,ch__$1,mult__$1,meta15031));
});})(cs))
;
}
return (new cljs.core.async.t15030(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___15253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15167){var state_val_15168 = (state_15167[1]);if((state_val_15168 === 32))
{var inst_15111 = (state_15167[7]);var inst_15035 = (state_15167[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15167,31,Object,null,30);var inst_15118 = cljs.core.async.put_BANG_.call(null,inst_15111,inst_15035,done);var state_15167__$1 = state_15167;var statearr_15169_15254 = state_15167__$1;(statearr_15169_15254[2] = inst_15118);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15167__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 1))
{var state_15167__$1 = state_15167;var statearr_15170_15255 = state_15167__$1;(statearr_15170_15255[2] = null);
(statearr_15170_15255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 33))
{var inst_15124 = (state_15167[9]);var inst_15126 = cljs.core.chunked_seq_QMARK_.call(null,inst_15124);var state_15167__$1 = state_15167;if(inst_15126)
{var statearr_15171_15256 = state_15167__$1;(statearr_15171_15256[1] = 36);
} else
{var statearr_15172_15257 = state_15167__$1;(statearr_15172_15257[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 2))
{var state_15167__$1 = state_15167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15167__$1,4,ch);
} else
{if((state_val_15168 === 34))
{var state_15167__$1 = state_15167;var statearr_15173_15258 = state_15167__$1;(statearr_15173_15258[2] = null);
(statearr_15173_15258[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 3))
{var inst_15165 = (state_15167[2]);var state_15167__$1 = state_15167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15167__$1,inst_15165);
} else
{if((state_val_15168 === 35))
{var inst_15149 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15174_15259 = state_15167__$1;(statearr_15174_15259[2] = inst_15149);
(statearr_15174_15259[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 4))
{var inst_15035 = (state_15167[8]);var inst_15035__$1 = (state_15167[2]);var inst_15036 = (inst_15035__$1 == null);var state_15167__$1 = (function (){var statearr_15175 = state_15167;(statearr_15175[8] = inst_15035__$1);
return statearr_15175;
})();if(cljs.core.truth_(inst_15036))
{var statearr_15176_15260 = state_15167__$1;(statearr_15176_15260[1] = 5);
} else
{var statearr_15177_15261 = state_15167__$1;(statearr_15177_15261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 36))
{var inst_15124 = (state_15167[9]);var inst_15128 = cljs.core.chunk_first.call(null,inst_15124);var inst_15129 = cljs.core.chunk_rest.call(null,inst_15124);var inst_15130 = cljs.core.count.call(null,inst_15128);var inst_15103 = inst_15129;var inst_15104 = inst_15128;var inst_15105 = inst_15130;var inst_15106 = 0;var state_15167__$1 = (function (){var statearr_15178 = state_15167;(statearr_15178[10] = inst_15106);
(statearr_15178[11] = inst_15105);
(statearr_15178[12] = inst_15104);
(statearr_15178[13] = inst_15103);
return statearr_15178;
})();var statearr_15179_15262 = state_15167__$1;(statearr_15179_15262[2] = null);
(statearr_15179_15262[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 5))
{var inst_15042 = cljs.core.deref.call(null,cs);var inst_15043 = cljs.core.seq.call(null,inst_15042);var inst_15044 = inst_15043;var inst_15045 = null;var inst_15046 = 0;var inst_15047 = 0;var state_15167__$1 = (function (){var statearr_15180 = state_15167;(statearr_15180[14] = inst_15047);
(statearr_15180[15] = inst_15045);
(statearr_15180[16] = inst_15046);
(statearr_15180[17] = inst_15044);
return statearr_15180;
})();var statearr_15181_15263 = state_15167__$1;(statearr_15181_15263[2] = null);
(statearr_15181_15263[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 37))
{var inst_15124 = (state_15167[9]);var inst_15133 = cljs.core.first.call(null,inst_15124);var state_15167__$1 = (function (){var statearr_15182 = state_15167;(statearr_15182[18] = inst_15133);
return statearr_15182;
})();var statearr_15183_15264 = state_15167__$1;(statearr_15183_15264[2] = null);
(statearr_15183_15264[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 6))
{var inst_15095 = (state_15167[19]);var inst_15094 = cljs.core.deref.call(null,cs);var inst_15095__$1 = cljs.core.keys.call(null,inst_15094);var inst_15096 = cljs.core.count.call(null,inst_15095__$1);var inst_15097 = cljs.core.reset_BANG_.call(null,dctr,inst_15096);var inst_15102 = cljs.core.seq.call(null,inst_15095__$1);var inst_15103 = inst_15102;var inst_15104 = null;var inst_15105 = 0;var inst_15106 = 0;var state_15167__$1 = (function (){var statearr_15184 = state_15167;(statearr_15184[20] = inst_15097);
(statearr_15184[10] = inst_15106);
(statearr_15184[11] = inst_15105);
(statearr_15184[12] = inst_15104);
(statearr_15184[13] = inst_15103);
(statearr_15184[19] = inst_15095__$1);
return statearr_15184;
})();var statearr_15185_15265 = state_15167__$1;(statearr_15185_15265[2] = null);
(statearr_15185_15265[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 38))
{var inst_15146 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15186_15266 = state_15167__$1;(statearr_15186_15266[2] = inst_15146);
(statearr_15186_15266[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 7))
{var inst_15163 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15187_15267 = state_15167__$1;(statearr_15187_15267[2] = inst_15163);
(statearr_15187_15267[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 39))
{var inst_15124 = (state_15167[9]);var inst_15142 = (state_15167[2]);var inst_15143 = cljs.core.next.call(null,inst_15124);var inst_15103 = inst_15143;var inst_15104 = null;var inst_15105 = 0;var inst_15106 = 0;var state_15167__$1 = (function (){var statearr_15188 = state_15167;(statearr_15188[10] = inst_15106);
(statearr_15188[11] = inst_15105);
(statearr_15188[12] = inst_15104);
(statearr_15188[13] = inst_15103);
(statearr_15188[21] = inst_15142);
return statearr_15188;
})();var statearr_15189_15268 = state_15167__$1;(statearr_15189_15268[2] = null);
(statearr_15189_15268[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 8))
{var inst_15047 = (state_15167[14]);var inst_15046 = (state_15167[16]);var inst_15049 = (inst_15047 < inst_15046);var inst_15050 = inst_15049;var state_15167__$1 = state_15167;if(cljs.core.truth_(inst_15050))
{var statearr_15190_15269 = state_15167__$1;(statearr_15190_15269[1] = 10);
} else
{var statearr_15191_15270 = state_15167__$1;(statearr_15191_15270[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 40))
{var inst_15133 = (state_15167[18]);var inst_15134 = (state_15167[2]);var inst_15135 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15136 = cljs.core.async.untap_STAR_.call(null,m,inst_15133);var state_15167__$1 = (function (){var statearr_15192 = state_15167;(statearr_15192[22] = inst_15135);
(statearr_15192[23] = inst_15134);
return statearr_15192;
})();var statearr_15193_15271 = state_15167__$1;(statearr_15193_15271[2] = inst_15136);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15167__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 9))
{var inst_15092 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15194_15272 = state_15167__$1;(statearr_15194_15272[2] = inst_15092);
(statearr_15194_15272[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 41))
{var inst_15133 = (state_15167[18]);var inst_15035 = (state_15167[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15167,40,Object,null,39);var inst_15140 = cljs.core.async.put_BANG_.call(null,inst_15133,inst_15035,done);var state_15167__$1 = state_15167;var statearr_15195_15273 = state_15167__$1;(statearr_15195_15273[2] = inst_15140);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15167__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 10))
{var inst_15047 = (state_15167[14]);var inst_15045 = (state_15167[15]);var inst_15053 = cljs.core._nth.call(null,inst_15045,inst_15047);var inst_15054 = cljs.core.nth.call(null,inst_15053,0,null);var inst_15055 = cljs.core.nth.call(null,inst_15053,1,null);var state_15167__$1 = (function (){var statearr_15196 = state_15167;(statearr_15196[24] = inst_15054);
return statearr_15196;
})();if(cljs.core.truth_(inst_15055))
{var statearr_15197_15274 = state_15167__$1;(statearr_15197_15274[1] = 13);
} else
{var statearr_15198_15275 = state_15167__$1;(statearr_15198_15275[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 42))
{var state_15167__$1 = state_15167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15167__$1,45,dchan);
} else
{if((state_val_15168 === 11))
{var inst_15064 = (state_15167[25]);var inst_15044 = (state_15167[17]);var inst_15064__$1 = cljs.core.seq.call(null,inst_15044);var state_15167__$1 = (function (){var statearr_15199 = state_15167;(statearr_15199[25] = inst_15064__$1);
return statearr_15199;
})();if(inst_15064__$1)
{var statearr_15200_15276 = state_15167__$1;(statearr_15200_15276[1] = 16);
} else
{var statearr_15201_15277 = state_15167__$1;(statearr_15201_15277[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 43))
{var state_15167__$1 = state_15167;var statearr_15202_15278 = state_15167__$1;(statearr_15202_15278[2] = null);
(statearr_15202_15278[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 12))
{var inst_15090 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15203_15279 = state_15167__$1;(statearr_15203_15279[2] = inst_15090);
(statearr_15203_15279[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 44))
{var inst_15160 = (state_15167[2]);var state_15167__$1 = (function (){var statearr_15204 = state_15167;(statearr_15204[26] = inst_15160);
return statearr_15204;
})();var statearr_15205_15280 = state_15167__$1;(statearr_15205_15280[2] = null);
(statearr_15205_15280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 13))
{var inst_15054 = (state_15167[24]);var inst_15057 = cljs.core.async.close_BANG_.call(null,inst_15054);var state_15167__$1 = state_15167;var statearr_15206_15281 = state_15167__$1;(statearr_15206_15281[2] = inst_15057);
(statearr_15206_15281[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 45))
{var inst_15157 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15210_15282 = state_15167__$1;(statearr_15210_15282[2] = inst_15157);
(statearr_15210_15282[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 14))
{var state_15167__$1 = state_15167;var statearr_15211_15283 = state_15167__$1;(statearr_15211_15283[2] = null);
(statearr_15211_15283[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 15))
{var inst_15047 = (state_15167[14]);var inst_15045 = (state_15167[15]);var inst_15046 = (state_15167[16]);var inst_15044 = (state_15167[17]);var inst_15060 = (state_15167[2]);var inst_15061 = (inst_15047 + 1);var tmp15207 = inst_15045;var tmp15208 = inst_15046;var tmp15209 = inst_15044;var inst_15044__$1 = tmp15209;var inst_15045__$1 = tmp15207;var inst_15046__$1 = tmp15208;var inst_15047__$1 = inst_15061;var state_15167__$1 = (function (){var statearr_15212 = state_15167;(statearr_15212[27] = inst_15060);
(statearr_15212[14] = inst_15047__$1);
(statearr_15212[15] = inst_15045__$1);
(statearr_15212[16] = inst_15046__$1);
(statearr_15212[17] = inst_15044__$1);
return statearr_15212;
})();var statearr_15213_15284 = state_15167__$1;(statearr_15213_15284[2] = null);
(statearr_15213_15284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 16))
{var inst_15064 = (state_15167[25]);var inst_15066 = cljs.core.chunked_seq_QMARK_.call(null,inst_15064);var state_15167__$1 = state_15167;if(inst_15066)
{var statearr_15214_15285 = state_15167__$1;(statearr_15214_15285[1] = 19);
} else
{var statearr_15215_15286 = state_15167__$1;(statearr_15215_15286[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 17))
{var state_15167__$1 = state_15167;var statearr_15216_15287 = state_15167__$1;(statearr_15216_15287[2] = null);
(statearr_15216_15287[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 18))
{var inst_15088 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15217_15288 = state_15167__$1;(statearr_15217_15288[2] = inst_15088);
(statearr_15217_15288[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 19))
{var inst_15064 = (state_15167[25]);var inst_15068 = cljs.core.chunk_first.call(null,inst_15064);var inst_15069 = cljs.core.chunk_rest.call(null,inst_15064);var inst_15070 = cljs.core.count.call(null,inst_15068);var inst_15044 = inst_15069;var inst_15045 = inst_15068;var inst_15046 = inst_15070;var inst_15047 = 0;var state_15167__$1 = (function (){var statearr_15218 = state_15167;(statearr_15218[14] = inst_15047);
(statearr_15218[15] = inst_15045);
(statearr_15218[16] = inst_15046);
(statearr_15218[17] = inst_15044);
return statearr_15218;
})();var statearr_15219_15289 = state_15167__$1;(statearr_15219_15289[2] = null);
(statearr_15219_15289[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 20))
{var inst_15064 = (state_15167[25]);var inst_15074 = cljs.core.first.call(null,inst_15064);var inst_15075 = cljs.core.nth.call(null,inst_15074,0,null);var inst_15076 = cljs.core.nth.call(null,inst_15074,1,null);var state_15167__$1 = (function (){var statearr_15220 = state_15167;(statearr_15220[28] = inst_15075);
return statearr_15220;
})();if(cljs.core.truth_(inst_15076))
{var statearr_15221_15290 = state_15167__$1;(statearr_15221_15290[1] = 22);
} else
{var statearr_15222_15291 = state_15167__$1;(statearr_15222_15291[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 21))
{var inst_15085 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15223_15292 = state_15167__$1;(statearr_15223_15292[2] = inst_15085);
(statearr_15223_15292[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 22))
{var inst_15075 = (state_15167[28]);var inst_15078 = cljs.core.async.close_BANG_.call(null,inst_15075);var state_15167__$1 = state_15167;var statearr_15224_15293 = state_15167__$1;(statearr_15224_15293[2] = inst_15078);
(statearr_15224_15293[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 23))
{var state_15167__$1 = state_15167;var statearr_15225_15294 = state_15167__$1;(statearr_15225_15294[2] = null);
(statearr_15225_15294[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 24))
{var inst_15064 = (state_15167[25]);var inst_15081 = (state_15167[2]);var inst_15082 = cljs.core.next.call(null,inst_15064);var inst_15044 = inst_15082;var inst_15045 = null;var inst_15046 = 0;var inst_15047 = 0;var state_15167__$1 = (function (){var statearr_15226 = state_15167;(statearr_15226[29] = inst_15081);
(statearr_15226[14] = inst_15047);
(statearr_15226[15] = inst_15045);
(statearr_15226[16] = inst_15046);
(statearr_15226[17] = inst_15044);
return statearr_15226;
})();var statearr_15227_15295 = state_15167__$1;(statearr_15227_15295[2] = null);
(statearr_15227_15295[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 25))
{var inst_15106 = (state_15167[10]);var inst_15105 = (state_15167[11]);var inst_15108 = (inst_15106 < inst_15105);var inst_15109 = inst_15108;var state_15167__$1 = state_15167;if(cljs.core.truth_(inst_15109))
{var statearr_15228_15296 = state_15167__$1;(statearr_15228_15296[1] = 27);
} else
{var statearr_15229_15297 = state_15167__$1;(statearr_15229_15297[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 26))
{var inst_15095 = (state_15167[19]);var inst_15153 = (state_15167[2]);var inst_15154 = cljs.core.seq.call(null,inst_15095);var state_15167__$1 = (function (){var statearr_15230 = state_15167;(statearr_15230[30] = inst_15153);
return statearr_15230;
})();if(inst_15154)
{var statearr_15231_15298 = state_15167__$1;(statearr_15231_15298[1] = 42);
} else
{var statearr_15232_15299 = state_15167__$1;(statearr_15232_15299[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 27))
{var inst_15106 = (state_15167[10]);var inst_15104 = (state_15167[12]);var inst_15111 = cljs.core._nth.call(null,inst_15104,inst_15106);var state_15167__$1 = (function (){var statearr_15233 = state_15167;(statearr_15233[7] = inst_15111);
return statearr_15233;
})();var statearr_15234_15300 = state_15167__$1;(statearr_15234_15300[2] = null);
(statearr_15234_15300[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 28))
{var inst_15103 = (state_15167[13]);var inst_15124 = (state_15167[9]);var inst_15124__$1 = cljs.core.seq.call(null,inst_15103);var state_15167__$1 = (function (){var statearr_15238 = state_15167;(statearr_15238[9] = inst_15124__$1);
return statearr_15238;
})();if(inst_15124__$1)
{var statearr_15239_15301 = state_15167__$1;(statearr_15239_15301[1] = 33);
} else
{var statearr_15240_15302 = state_15167__$1;(statearr_15240_15302[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 29))
{var inst_15151 = (state_15167[2]);var state_15167__$1 = state_15167;var statearr_15241_15303 = state_15167__$1;(statearr_15241_15303[2] = inst_15151);
(statearr_15241_15303[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 30))
{var inst_15106 = (state_15167[10]);var inst_15105 = (state_15167[11]);var inst_15104 = (state_15167[12]);var inst_15103 = (state_15167[13]);var inst_15120 = (state_15167[2]);var inst_15121 = (inst_15106 + 1);var tmp15235 = inst_15105;var tmp15236 = inst_15104;var tmp15237 = inst_15103;var inst_15103__$1 = tmp15237;var inst_15104__$1 = tmp15236;var inst_15105__$1 = tmp15235;var inst_15106__$1 = inst_15121;var state_15167__$1 = (function (){var statearr_15242 = state_15167;(statearr_15242[10] = inst_15106__$1);
(statearr_15242[11] = inst_15105__$1);
(statearr_15242[12] = inst_15104__$1);
(statearr_15242[13] = inst_15103__$1);
(statearr_15242[31] = inst_15120);
return statearr_15242;
})();var statearr_15243_15304 = state_15167__$1;(statearr_15243_15304[2] = null);
(statearr_15243_15304[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15168 === 31))
{var inst_15111 = (state_15167[7]);var inst_15112 = (state_15167[2]);var inst_15113 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15114 = cljs.core.async.untap_STAR_.call(null,m,inst_15111);var state_15167__$1 = (function (){var statearr_15244 = state_15167;(statearr_15244[32] = inst_15113);
(statearr_15244[33] = inst_15112);
return statearr_15244;
})();var statearr_15245_15305 = state_15167__$1;(statearr_15245_15305[2] = inst_15114);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15167__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15249[0] = state_machine__5548__auto__);
(statearr_15249[1] = 1);
return statearr_15249;
});
var state_machine__5548__auto____1 = (function (state_15167){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15167);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15250){if((e15250 instanceof Object))
{var ex__5551__auto__ = e15250;var statearr_15251_15306 = state_15167;(statearr_15251_15306[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15167);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15307 = state_15167;
state_15167 = G__15307;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15167){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15252 = f__5563__auto__.call(null);(statearr_15252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15253);
return statearr_15252;
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
cljs.core.async.Mix = (function (){var obj15309 = {};return obj15309;
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
;var m = (function (){if(typeof cljs.core.async.t15419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15419 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15420){
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
this.meta15420 = meta15420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15419.cljs$lang$type = true;
cljs.core.async.t15419.cljs$lang$ctorStr = "cljs.core.async/t15419";
cljs.core.async.t15419.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15419");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15419.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15419.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15421){var self__ = this;
var _15421__$1 = this;return self__.meta15420;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15421,meta15420__$1){var self__ = this;
var _15421__$1 = this;return (new cljs.core.async.t15419(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15420__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15419 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15419(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15420){return (new cljs.core.async.t15419(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15420));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15419(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___15528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15486){var state_val_15487 = (state_15486[1]);if((state_val_15487 === 1))
{var inst_15425 = (state_15486[7]);var inst_15425__$1 = calc_state.call(null);var inst_15426 = cljs.core.seq_QMARK_.call(null,inst_15425__$1);var state_15486__$1 = (function (){var statearr_15488 = state_15486;(statearr_15488[7] = inst_15425__$1);
return statearr_15488;
})();if(inst_15426)
{var statearr_15489_15529 = state_15486__$1;(statearr_15489_15529[1] = 2);
} else
{var statearr_15490_15530 = state_15486__$1;(statearr_15490_15530[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 2))
{var inst_15425 = (state_15486[7]);var inst_15428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15425);var state_15486__$1 = state_15486;var statearr_15491_15531 = state_15486__$1;(statearr_15491_15531[2] = inst_15428);
(statearr_15491_15531[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 3))
{var inst_15425 = (state_15486[7]);var state_15486__$1 = state_15486;var statearr_15492_15532 = state_15486__$1;(statearr_15492_15532[2] = inst_15425);
(statearr_15492_15532[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 4))
{var inst_15425 = (state_15486[7]);var inst_15431 = (state_15486[2]);var inst_15432 = cljs.core.get.call(null,inst_15431,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15433 = cljs.core.get.call(null,inst_15431,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15434 = cljs.core.get.call(null,inst_15431,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15435 = inst_15425;var state_15486__$1 = (function (){var statearr_15493 = state_15486;(statearr_15493[8] = inst_15432);
(statearr_15493[9] = inst_15433);
(statearr_15493[10] = inst_15435);
(statearr_15493[11] = inst_15434);
return statearr_15493;
})();var statearr_15494_15533 = state_15486__$1;(statearr_15494_15533[2] = null);
(statearr_15494_15533[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 5))
{var inst_15435 = (state_15486[10]);var inst_15438 = cljs.core.seq_QMARK_.call(null,inst_15435);var state_15486__$1 = state_15486;if(inst_15438)
{var statearr_15495_15534 = state_15486__$1;(statearr_15495_15534[1] = 7);
} else
{var statearr_15496_15535 = state_15486__$1;(statearr_15496_15535[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 6))
{var inst_15484 = (state_15486[2]);var state_15486__$1 = state_15486;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15486__$1,inst_15484);
} else
{if((state_val_15487 === 7))
{var inst_15435 = (state_15486[10]);var inst_15440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15435);var state_15486__$1 = state_15486;var statearr_15497_15536 = state_15486__$1;(statearr_15497_15536[2] = inst_15440);
(statearr_15497_15536[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 8))
{var inst_15435 = (state_15486[10]);var state_15486__$1 = state_15486;var statearr_15498_15537 = state_15486__$1;(statearr_15498_15537[2] = inst_15435);
(statearr_15498_15537[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 9))
{var inst_15443 = (state_15486[12]);var inst_15443__$1 = (state_15486[2]);var inst_15444 = cljs.core.get.call(null,inst_15443__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15445 = cljs.core.get.call(null,inst_15443__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15446 = cljs.core.get.call(null,inst_15443__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15486__$1 = (function (){var statearr_15499 = state_15486;(statearr_15499[13] = inst_15446);
(statearr_15499[14] = inst_15445);
(statearr_15499[12] = inst_15443__$1);
return statearr_15499;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15486__$1,10,inst_15444);
} else
{if((state_val_15487 === 10))
{var inst_15451 = (state_15486[15]);var inst_15450 = (state_15486[16]);var inst_15449 = (state_15486[2]);var inst_15450__$1 = cljs.core.nth.call(null,inst_15449,0,null);var inst_15451__$1 = cljs.core.nth.call(null,inst_15449,1,null);var inst_15452 = (inst_15450__$1 == null);var inst_15453 = cljs.core._EQ_.call(null,inst_15451__$1,change);var inst_15454 = (inst_15452) || (inst_15453);var state_15486__$1 = (function (){var statearr_15500 = state_15486;(statearr_15500[15] = inst_15451__$1);
(statearr_15500[16] = inst_15450__$1);
return statearr_15500;
})();if(cljs.core.truth_(inst_15454))
{var statearr_15501_15538 = state_15486__$1;(statearr_15501_15538[1] = 11);
} else
{var statearr_15502_15539 = state_15486__$1;(statearr_15502_15539[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 11))
{var inst_15450 = (state_15486[16]);var inst_15456 = (inst_15450 == null);var state_15486__$1 = state_15486;if(cljs.core.truth_(inst_15456))
{var statearr_15503_15540 = state_15486__$1;(statearr_15503_15540[1] = 14);
} else
{var statearr_15504_15541 = state_15486__$1;(statearr_15504_15541[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 12))
{var inst_15451 = (state_15486[15]);var inst_15465 = (state_15486[17]);var inst_15446 = (state_15486[13]);var inst_15465__$1 = inst_15446.call(null,inst_15451);var state_15486__$1 = (function (){var statearr_15505 = state_15486;(statearr_15505[17] = inst_15465__$1);
return statearr_15505;
})();if(cljs.core.truth_(inst_15465__$1))
{var statearr_15506_15542 = state_15486__$1;(statearr_15506_15542[1] = 17);
} else
{var statearr_15507_15543 = state_15486__$1;(statearr_15507_15543[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 13))
{var inst_15482 = (state_15486[2]);var state_15486__$1 = state_15486;var statearr_15508_15544 = state_15486__$1;(statearr_15508_15544[2] = inst_15482);
(statearr_15508_15544[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 14))
{var inst_15451 = (state_15486[15]);var inst_15458 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15451);var state_15486__$1 = state_15486;var statearr_15509_15545 = state_15486__$1;(statearr_15509_15545[2] = inst_15458);
(statearr_15509_15545[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 15))
{var state_15486__$1 = state_15486;var statearr_15510_15546 = state_15486__$1;(statearr_15510_15546[2] = null);
(statearr_15510_15546[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 16))
{var inst_15461 = (state_15486[2]);var inst_15462 = calc_state.call(null);var inst_15435 = inst_15462;var state_15486__$1 = (function (){var statearr_15511 = state_15486;(statearr_15511[18] = inst_15461);
(statearr_15511[10] = inst_15435);
return statearr_15511;
})();var statearr_15512_15547 = state_15486__$1;(statearr_15512_15547[2] = null);
(statearr_15512_15547[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 17))
{var inst_15465 = (state_15486[17]);var state_15486__$1 = state_15486;var statearr_15513_15548 = state_15486__$1;(statearr_15513_15548[2] = inst_15465);
(statearr_15513_15548[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 18))
{var inst_15451 = (state_15486[15]);var inst_15446 = (state_15486[13]);var inst_15445 = (state_15486[14]);var inst_15468 = cljs.core.empty_QMARK_.call(null,inst_15446);var inst_15469 = inst_15445.call(null,inst_15451);var inst_15470 = cljs.core.not.call(null,inst_15469);var inst_15471 = (inst_15468) && (inst_15470);var state_15486__$1 = state_15486;var statearr_15514_15549 = state_15486__$1;(statearr_15514_15549[2] = inst_15471);
(statearr_15514_15549[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 19))
{var inst_15473 = (state_15486[2]);var state_15486__$1 = state_15486;if(cljs.core.truth_(inst_15473))
{var statearr_15515_15550 = state_15486__$1;(statearr_15515_15550[1] = 20);
} else
{var statearr_15516_15551 = state_15486__$1;(statearr_15516_15551[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 20))
{var inst_15450 = (state_15486[16]);var state_15486__$1 = state_15486;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15486__$1,23,out,inst_15450);
} else
{if((state_val_15487 === 21))
{var state_15486__$1 = state_15486;var statearr_15517_15552 = state_15486__$1;(statearr_15517_15552[2] = null);
(statearr_15517_15552[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 22))
{var inst_15443 = (state_15486[12]);var inst_15479 = (state_15486[2]);var inst_15435 = inst_15443;var state_15486__$1 = (function (){var statearr_15518 = state_15486;(statearr_15518[19] = inst_15479);
(statearr_15518[10] = inst_15435);
return statearr_15518;
})();var statearr_15519_15553 = state_15486__$1;(statearr_15519_15553[2] = null);
(statearr_15519_15553[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15487 === 23))
{var inst_15476 = (state_15486[2]);var state_15486__$1 = state_15486;var statearr_15520_15554 = state_15486__$1;(statearr_15520_15554[2] = inst_15476);
(statearr_15520_15554[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_15524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15524[0] = state_machine__5548__auto__);
(statearr_15524[1] = 1);
return statearr_15524;
});
var state_machine__5548__auto____1 = (function (state_15486){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15486);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15525){if((e15525 instanceof Object))
{var ex__5551__auto__ = e15525;var statearr_15526_15555 = state_15486;(statearr_15526_15555[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15486);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15556 = state_15486;
state_15486 = G__15556;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15527 = f__5563__auto__.call(null);(statearr_15527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15528);
return statearr_15527;
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
cljs.core.async.Pub = (function (){var obj15558 = {};return obj15558;
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
return (function (p1__15559_SHARP_){if(cljs.core.truth_(p1__15559_SHARP_.call(null,topic)))
{return p1__15559_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15559_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15684 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15684 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15685){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15685 = meta15685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15684.cljs$lang$type = true;
cljs.core.async.t15684.cljs$lang$ctorStr = "cljs.core.async/t15684";
cljs.core.async.t15684.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15684");
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15686){var self__ = this;
var _15686__$1 = this;return self__.meta15685;
});})(mults,ensure_mult))
;
cljs.core.async.t15684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15686,meta15685__$1){var self__ = this;
var _15686__$1 = this;return (new cljs.core.async.t15684(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15685__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15684 = ((function (mults,ensure_mult){
return (function __GT_t15684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15685){return (new cljs.core.async.t15684(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15685));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15684(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___15808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15760){var state_val_15761 = (state_15760[1]);if((state_val_15761 === 1))
{var state_15760__$1 = state_15760;var statearr_15762_15809 = state_15760__$1;(statearr_15762_15809[2] = null);
(statearr_15762_15809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 2))
{var state_15760__$1 = state_15760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15760__$1,4,ch);
} else
{if((state_val_15761 === 3))
{var inst_15758 = (state_15760[2]);var state_15760__$1 = state_15760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15760__$1,inst_15758);
} else
{if((state_val_15761 === 4))
{var inst_15689 = (state_15760[7]);var inst_15689__$1 = (state_15760[2]);var inst_15690 = (inst_15689__$1 == null);var state_15760__$1 = (function (){var statearr_15763 = state_15760;(statearr_15763[7] = inst_15689__$1);
return statearr_15763;
})();if(cljs.core.truth_(inst_15690))
{var statearr_15764_15810 = state_15760__$1;(statearr_15764_15810[1] = 5);
} else
{var statearr_15765_15811 = state_15760__$1;(statearr_15765_15811[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 5))
{var inst_15696 = cljs.core.deref.call(null,mults);var inst_15697 = cljs.core.vals.call(null,inst_15696);var inst_15698 = cljs.core.seq.call(null,inst_15697);var inst_15699 = inst_15698;var inst_15700 = null;var inst_15701 = 0;var inst_15702 = 0;var state_15760__$1 = (function (){var statearr_15766 = state_15760;(statearr_15766[8] = inst_15701);
(statearr_15766[9] = inst_15700);
(statearr_15766[10] = inst_15699);
(statearr_15766[11] = inst_15702);
return statearr_15766;
})();var statearr_15767_15812 = state_15760__$1;(statearr_15767_15812[2] = null);
(statearr_15767_15812[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 6))
{var inst_15737 = (state_15760[12]);var inst_15689 = (state_15760[7]);var inst_15739 = (state_15760[13]);var inst_15737__$1 = topic_fn.call(null,inst_15689);var inst_15738 = cljs.core.deref.call(null,mults);var inst_15739__$1 = cljs.core.get.call(null,inst_15738,inst_15737__$1);var state_15760__$1 = (function (){var statearr_15768 = state_15760;(statearr_15768[12] = inst_15737__$1);
(statearr_15768[13] = inst_15739__$1);
return statearr_15768;
})();if(cljs.core.truth_(inst_15739__$1))
{var statearr_15769_15813 = state_15760__$1;(statearr_15769_15813[1] = 19);
} else
{var statearr_15770_15814 = state_15760__$1;(statearr_15770_15814[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 7))
{var inst_15756 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15771_15815 = state_15760__$1;(statearr_15771_15815[2] = inst_15756);
(statearr_15771_15815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 8))
{var inst_15701 = (state_15760[8]);var inst_15702 = (state_15760[11]);var inst_15704 = (inst_15702 < inst_15701);var inst_15705 = inst_15704;var state_15760__$1 = state_15760;if(cljs.core.truth_(inst_15705))
{var statearr_15775_15816 = state_15760__$1;(statearr_15775_15816[1] = 10);
} else
{var statearr_15776_15817 = state_15760__$1;(statearr_15776_15817[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 9))
{var inst_15735 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15777_15818 = state_15760__$1;(statearr_15777_15818[2] = inst_15735);
(statearr_15777_15818[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 10))
{var inst_15701 = (state_15760[8]);var inst_15700 = (state_15760[9]);var inst_15699 = (state_15760[10]);var inst_15702 = (state_15760[11]);var inst_15707 = cljs.core._nth.call(null,inst_15700,inst_15702);var inst_15708 = cljs.core.async.muxch_STAR_.call(null,inst_15707);var inst_15709 = cljs.core.async.close_BANG_.call(null,inst_15708);var inst_15710 = (inst_15702 + 1);var tmp15772 = inst_15701;var tmp15773 = inst_15700;var tmp15774 = inst_15699;var inst_15699__$1 = tmp15774;var inst_15700__$1 = tmp15773;var inst_15701__$1 = tmp15772;var inst_15702__$1 = inst_15710;var state_15760__$1 = (function (){var statearr_15778 = state_15760;(statearr_15778[14] = inst_15709);
(statearr_15778[8] = inst_15701__$1);
(statearr_15778[9] = inst_15700__$1);
(statearr_15778[10] = inst_15699__$1);
(statearr_15778[11] = inst_15702__$1);
return statearr_15778;
})();var statearr_15779_15819 = state_15760__$1;(statearr_15779_15819[2] = null);
(statearr_15779_15819[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 11))
{var inst_15699 = (state_15760[10]);var inst_15713 = (state_15760[15]);var inst_15713__$1 = cljs.core.seq.call(null,inst_15699);var state_15760__$1 = (function (){var statearr_15780 = state_15760;(statearr_15780[15] = inst_15713__$1);
return statearr_15780;
})();if(inst_15713__$1)
{var statearr_15781_15820 = state_15760__$1;(statearr_15781_15820[1] = 13);
} else
{var statearr_15782_15821 = state_15760__$1;(statearr_15782_15821[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 12))
{var inst_15733 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15783_15822 = state_15760__$1;(statearr_15783_15822[2] = inst_15733);
(statearr_15783_15822[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 13))
{var inst_15713 = (state_15760[15]);var inst_15715 = cljs.core.chunked_seq_QMARK_.call(null,inst_15713);var state_15760__$1 = state_15760;if(inst_15715)
{var statearr_15784_15823 = state_15760__$1;(statearr_15784_15823[1] = 16);
} else
{var statearr_15785_15824 = state_15760__$1;(statearr_15785_15824[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 14))
{var state_15760__$1 = state_15760;var statearr_15786_15825 = state_15760__$1;(statearr_15786_15825[2] = null);
(statearr_15786_15825[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 15))
{var inst_15731 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15787_15826 = state_15760__$1;(statearr_15787_15826[2] = inst_15731);
(statearr_15787_15826[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 16))
{var inst_15713 = (state_15760[15]);var inst_15717 = cljs.core.chunk_first.call(null,inst_15713);var inst_15718 = cljs.core.chunk_rest.call(null,inst_15713);var inst_15719 = cljs.core.count.call(null,inst_15717);var inst_15699 = inst_15718;var inst_15700 = inst_15717;var inst_15701 = inst_15719;var inst_15702 = 0;var state_15760__$1 = (function (){var statearr_15788 = state_15760;(statearr_15788[8] = inst_15701);
(statearr_15788[9] = inst_15700);
(statearr_15788[10] = inst_15699);
(statearr_15788[11] = inst_15702);
return statearr_15788;
})();var statearr_15789_15827 = state_15760__$1;(statearr_15789_15827[2] = null);
(statearr_15789_15827[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 17))
{var inst_15713 = (state_15760[15]);var inst_15722 = cljs.core.first.call(null,inst_15713);var inst_15723 = cljs.core.async.muxch_STAR_.call(null,inst_15722);var inst_15724 = cljs.core.async.close_BANG_.call(null,inst_15723);var inst_15725 = cljs.core.next.call(null,inst_15713);var inst_15699 = inst_15725;var inst_15700 = null;var inst_15701 = 0;var inst_15702 = 0;var state_15760__$1 = (function (){var statearr_15790 = state_15760;(statearr_15790[8] = inst_15701);
(statearr_15790[9] = inst_15700);
(statearr_15790[16] = inst_15724);
(statearr_15790[10] = inst_15699);
(statearr_15790[11] = inst_15702);
return statearr_15790;
})();var statearr_15791_15828 = state_15760__$1;(statearr_15791_15828[2] = null);
(statearr_15791_15828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 18))
{var inst_15728 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15792_15829 = state_15760__$1;(statearr_15792_15829[2] = inst_15728);
(statearr_15792_15829[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 19))
{var state_15760__$1 = state_15760;var statearr_15793_15830 = state_15760__$1;(statearr_15793_15830[2] = null);
(statearr_15793_15830[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 20))
{var state_15760__$1 = state_15760;var statearr_15794_15831 = state_15760__$1;(statearr_15794_15831[2] = null);
(statearr_15794_15831[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 21))
{var inst_15753 = (state_15760[2]);var state_15760__$1 = (function (){var statearr_15795 = state_15760;(statearr_15795[17] = inst_15753);
return statearr_15795;
})();var statearr_15796_15832 = state_15760__$1;(statearr_15796_15832[2] = null);
(statearr_15796_15832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 22))
{var inst_15750 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15797_15833 = state_15760__$1;(statearr_15797_15833[2] = inst_15750);
(statearr_15797_15833[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 23))
{var inst_15737 = (state_15760[12]);var inst_15741 = (state_15760[2]);var inst_15742 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15737);var state_15760__$1 = (function (){var statearr_15798 = state_15760;(statearr_15798[18] = inst_15741);
return statearr_15798;
})();var statearr_15799_15834 = state_15760__$1;(statearr_15799_15834[2] = inst_15742);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15761 === 24))
{var inst_15689 = (state_15760[7]);var inst_15739 = (state_15760[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15760,23,Object,null,22);var inst_15746 = cljs.core.async.muxch_STAR_.call(null,inst_15739);var state_15760__$1 = state_15760;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15760__$1,25,inst_15746,inst_15689);
} else
{if((state_val_15761 === 25))
{var inst_15748 = (state_15760[2]);var state_15760__$1 = state_15760;var statearr_15800_15835 = state_15760__$1;(statearr_15800_15835[2] = inst_15748);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15760__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15804[0] = state_machine__5548__auto__);
(statearr_15804[1] = 1);
return statearr_15804;
});
var state_machine__5548__auto____1 = (function (state_15760){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15760);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15805){if((e15805 instanceof Object))
{var ex__5551__auto__ = e15805;var statearr_15806_15836 = state_15760;(statearr_15806_15836[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15805;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15837 = state_15760;
state_15760 = G__15837;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15760){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15807 = f__5563__auto__.call(null);(statearr_15807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15808);
return statearr_15807;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___15974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15944){var state_val_15945 = (state_15944[1]);if((state_val_15945 === 1))
{var state_15944__$1 = state_15944;var statearr_15946_15975 = state_15944__$1;(statearr_15946_15975[2] = null);
(statearr_15946_15975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 2))
{var inst_15907 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15908 = 0;var state_15944__$1 = (function (){var statearr_15947 = state_15944;(statearr_15947[7] = inst_15907);
(statearr_15947[8] = inst_15908);
return statearr_15947;
})();var statearr_15948_15976 = state_15944__$1;(statearr_15948_15976[2] = null);
(statearr_15948_15976[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 3))
{var inst_15942 = (state_15944[2]);var state_15944__$1 = state_15944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15944__$1,inst_15942);
} else
{if((state_val_15945 === 4))
{var inst_15908 = (state_15944[8]);var inst_15910 = (inst_15908 < cnt);var state_15944__$1 = state_15944;if(cljs.core.truth_(inst_15910))
{var statearr_15949_15977 = state_15944__$1;(statearr_15949_15977[1] = 6);
} else
{var statearr_15950_15978 = state_15944__$1;(statearr_15950_15978[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 5))
{var inst_15928 = (state_15944[2]);var state_15944__$1 = (function (){var statearr_15951 = state_15944;(statearr_15951[9] = inst_15928);
return statearr_15951;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15944__$1,12,dchan);
} else
{if((state_val_15945 === 6))
{var state_15944__$1 = state_15944;var statearr_15952_15979 = state_15944__$1;(statearr_15952_15979[2] = null);
(statearr_15952_15979[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 7))
{var state_15944__$1 = state_15944;var statearr_15953_15980 = state_15944__$1;(statearr_15953_15980[2] = null);
(statearr_15953_15980[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 8))
{var inst_15926 = (state_15944[2]);var state_15944__$1 = state_15944;var statearr_15954_15981 = state_15944__$1;(statearr_15954_15981[2] = inst_15926);
(statearr_15954_15981[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 9))
{var inst_15908 = (state_15944[8]);var inst_15921 = (state_15944[2]);var inst_15922 = (inst_15908 + 1);var inst_15908__$1 = inst_15922;var state_15944__$1 = (function (){var statearr_15955 = state_15944;(statearr_15955[8] = inst_15908__$1);
(statearr_15955[10] = inst_15921);
return statearr_15955;
})();var statearr_15956_15982 = state_15944__$1;(statearr_15956_15982[2] = null);
(statearr_15956_15982[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 10))
{var inst_15912 = (state_15944[2]);var inst_15913 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15944__$1 = (function (){var statearr_15957 = state_15944;(statearr_15957[11] = inst_15912);
return statearr_15957;
})();var statearr_15958_15983 = state_15944__$1;(statearr_15958_15983[2] = inst_15913);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15944__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 11))
{var inst_15908 = (state_15944[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15944,10,Object,null,9);var inst_15917 = chs__$1.call(null,inst_15908);var inst_15918 = done.call(null,inst_15908);var inst_15919 = cljs.core.async.take_BANG_.call(null,inst_15917,inst_15918);var state_15944__$1 = state_15944;var statearr_15959_15984 = state_15944__$1;(statearr_15959_15984[2] = inst_15919);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15944__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 12))
{var inst_15930 = (state_15944[12]);var inst_15930__$1 = (state_15944[2]);var inst_15931 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15930__$1);var state_15944__$1 = (function (){var statearr_15960 = state_15944;(statearr_15960[12] = inst_15930__$1);
return statearr_15960;
})();if(cljs.core.truth_(inst_15931))
{var statearr_15961_15985 = state_15944__$1;(statearr_15961_15985[1] = 13);
} else
{var statearr_15962_15986 = state_15944__$1;(statearr_15962_15986[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 13))
{var inst_15933 = cljs.core.async.close_BANG_.call(null,out);var state_15944__$1 = state_15944;var statearr_15963_15987 = state_15944__$1;(statearr_15963_15987[2] = inst_15933);
(statearr_15963_15987[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 14))
{var inst_15930 = (state_15944[12]);var inst_15935 = cljs.core.apply.call(null,f,inst_15930);var state_15944__$1 = state_15944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15944__$1,16,out,inst_15935);
} else
{if((state_val_15945 === 15))
{var inst_15940 = (state_15944[2]);var state_15944__$1 = state_15944;var statearr_15964_15988 = state_15944__$1;(statearr_15964_15988[2] = inst_15940);
(statearr_15964_15988[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15945 === 16))
{var inst_15937 = (state_15944[2]);var state_15944__$1 = (function (){var statearr_15965 = state_15944;(statearr_15965[13] = inst_15937);
return statearr_15965;
})();var statearr_15966_15989 = state_15944__$1;(statearr_15966_15989[2] = null);
(statearr_15966_15989[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_15970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15970[0] = state_machine__5548__auto__);
(statearr_15970[1] = 1);
return statearr_15970;
});
var state_machine__5548__auto____1 = (function (state_15944){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15944);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15971){if((e15971 instanceof Object))
{var ex__5551__auto__ = e15971;var statearr_15972_15990 = state_15944;(statearr_15972_15990[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15944);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15991 = state_15944;
state_15944 = G__15991;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15944){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15973 = f__5563__auto__.call(null);(statearr_15973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15974);
return statearr_15973;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16075){var state_val_16076 = (state_16075[1]);if((state_val_16076 === 1))
{var inst_16046 = cljs.core.vec.call(null,chs);var inst_16047 = inst_16046;var state_16075__$1 = (function (){var statearr_16077 = state_16075;(statearr_16077[7] = inst_16047);
return statearr_16077;
})();var statearr_16078_16100 = state_16075__$1;(statearr_16078_16100[2] = null);
(statearr_16078_16100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16076 === 2))
{var inst_16047 = (state_16075[7]);var inst_16049 = cljs.core.count.call(null,inst_16047);var inst_16050 = (inst_16049 > 0);var state_16075__$1 = state_16075;if(cljs.core.truth_(inst_16050))
{var statearr_16079_16101 = state_16075__$1;(statearr_16079_16101[1] = 4);
} else
{var statearr_16080_16102 = state_16075__$1;(statearr_16080_16102[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16076 === 3))
{var inst_16073 = (state_16075[2]);var state_16075__$1 = state_16075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16075__$1,inst_16073);
} else
{if((state_val_16076 === 4))
{var inst_16047 = (state_16075[7]);var state_16075__$1 = state_16075;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16075__$1,7,inst_16047);
} else
{if((state_val_16076 === 5))
{var inst_16069 = cljs.core.async.close_BANG_.call(null,out);var state_16075__$1 = state_16075;var statearr_16081_16103 = state_16075__$1;(statearr_16081_16103[2] = inst_16069);
(statearr_16081_16103[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16076 === 6))
{var inst_16071 = (state_16075[2]);var state_16075__$1 = state_16075;var statearr_16082_16104 = state_16075__$1;(statearr_16082_16104[2] = inst_16071);
(statearr_16082_16104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16076 === 7))
{var inst_16054 = (state_16075[8]);var inst_16055 = (state_16075[9]);var inst_16054__$1 = (state_16075[2]);var inst_16055__$1 = cljs.core.nth.call(null,inst_16054__$1,0,null);var inst_16056 = cljs.core.nth.call(null,inst_16054__$1,1,null);var inst_16057 = (inst_16055__$1 == null);var state_16075__$1 = (function (){var statearr_16083 = state_16075;(statearr_16083[8] = inst_16054__$1);
(statearr_16083[10] = inst_16056);
(statearr_16083[9] = inst_16055__$1);
return statearr_16083;
})();if(cljs.core.truth_(inst_16057))
{var statearr_16084_16105 = state_16075__$1;(statearr_16084_16105[1] = 8);
} else
{var statearr_16085_16106 = state_16075__$1;(statearr_16085_16106[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16076 === 8))
{var inst_16047 = (state_16075[7]);var inst_16054 = (state_16075[8]);var inst_16056 = (state_16075[10]);var inst_16055 = (state_16075[9]);var inst_16059 = (function (){var c = inst_16056;var v = inst_16055;var vec__16052 = inst_16054;var cs = inst_16047;return ((function (c,v,vec__16052,cs,inst_16047,inst_16054,inst_16056,inst_16055,state_val_16076){
return (function (p1__15992_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15992_SHARP_);
});
;})(c,v,vec__16052,cs,inst_16047,inst_16054,inst_16056,inst_16055,state_val_16076))
})();var inst_16060 = cljs.core.filterv.call(null,inst_16059,inst_16047);var inst_16047__$1 = inst_16060;var state_16075__$1 = (function (){var statearr_16086 = state_16075;(statearr_16086[7] = inst_16047__$1);
return statearr_16086;
})();var statearr_16087_16107 = state_16075__$1;(statearr_16087_16107[2] = null);
(statearr_16087_16107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16076 === 9))
{var inst_16055 = (state_16075[9]);var state_16075__$1 = state_16075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16075__$1,11,out,inst_16055);
} else
{if((state_val_16076 === 10))
{var inst_16067 = (state_16075[2]);var state_16075__$1 = state_16075;var statearr_16089_16108 = state_16075__$1;(statearr_16089_16108[2] = inst_16067);
(statearr_16089_16108[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16076 === 11))
{var inst_16047 = (state_16075[7]);var inst_16064 = (state_16075[2]);var tmp16088 = inst_16047;var inst_16047__$1 = tmp16088;var state_16075__$1 = (function (){var statearr_16090 = state_16075;(statearr_16090[11] = inst_16064);
(statearr_16090[7] = inst_16047__$1);
return statearr_16090;
})();var statearr_16091_16109 = state_16075__$1;(statearr_16091_16109[2] = null);
(statearr_16091_16109[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16095 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16095[0] = state_machine__5548__auto__);
(statearr_16095[1] = 1);
return statearr_16095;
});
var state_machine__5548__auto____1 = (function (state_16075){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16075);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16096){if((e16096 instanceof Object))
{var ex__5551__auto__ = e16096;var statearr_16097_16110 = state_16075;(statearr_16097_16110[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16075);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16111 = state_16075;
state_16075 = G__16111;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16075){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16098 = f__5563__auto__.call(null);(statearr_16098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16099);
return statearr_16098;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16204 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16181){var state_val_16182 = (state_16181[1]);if((state_val_16182 === 1))
{var inst_16158 = 0;var state_16181__$1 = (function (){var statearr_16183 = state_16181;(statearr_16183[7] = inst_16158);
return statearr_16183;
})();var statearr_16184_16205 = state_16181__$1;(statearr_16184_16205[2] = null);
(statearr_16184_16205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 2))
{var inst_16158 = (state_16181[7]);var inst_16160 = (inst_16158 < n);var state_16181__$1 = state_16181;if(cljs.core.truth_(inst_16160))
{var statearr_16185_16206 = state_16181__$1;(statearr_16185_16206[1] = 4);
} else
{var statearr_16186_16207 = state_16181__$1;(statearr_16186_16207[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 3))
{var inst_16178 = (state_16181[2]);var inst_16179 = cljs.core.async.close_BANG_.call(null,out);var state_16181__$1 = (function (){var statearr_16187 = state_16181;(statearr_16187[8] = inst_16178);
return statearr_16187;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16181__$1,inst_16179);
} else
{if((state_val_16182 === 4))
{var state_16181__$1 = state_16181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16181__$1,7,ch);
} else
{if((state_val_16182 === 5))
{var state_16181__$1 = state_16181;var statearr_16188_16208 = state_16181__$1;(statearr_16188_16208[2] = null);
(statearr_16188_16208[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 6))
{var inst_16176 = (state_16181[2]);var state_16181__$1 = state_16181;var statearr_16189_16209 = state_16181__$1;(statearr_16189_16209[2] = inst_16176);
(statearr_16189_16209[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 7))
{var inst_16163 = (state_16181[9]);var inst_16163__$1 = (state_16181[2]);var inst_16164 = (inst_16163__$1 == null);var inst_16165 = cljs.core.not.call(null,inst_16164);var state_16181__$1 = (function (){var statearr_16190 = state_16181;(statearr_16190[9] = inst_16163__$1);
return statearr_16190;
})();if(inst_16165)
{var statearr_16191_16210 = state_16181__$1;(statearr_16191_16210[1] = 8);
} else
{var statearr_16192_16211 = state_16181__$1;(statearr_16192_16211[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 8))
{var inst_16163 = (state_16181[9]);var state_16181__$1 = state_16181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16181__$1,11,out,inst_16163);
} else
{if((state_val_16182 === 9))
{var state_16181__$1 = state_16181;var statearr_16193_16212 = state_16181__$1;(statearr_16193_16212[2] = null);
(statearr_16193_16212[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 10))
{var inst_16173 = (state_16181[2]);var state_16181__$1 = state_16181;var statearr_16194_16213 = state_16181__$1;(statearr_16194_16213[2] = inst_16173);
(statearr_16194_16213[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 11))
{var inst_16158 = (state_16181[7]);var inst_16168 = (state_16181[2]);var inst_16169 = (inst_16158 + 1);var inst_16158__$1 = inst_16169;var state_16181__$1 = (function (){var statearr_16195 = state_16181;(statearr_16195[7] = inst_16158__$1);
(statearr_16195[10] = inst_16168);
return statearr_16195;
})();var statearr_16196_16214 = state_16181__$1;(statearr_16196_16214[2] = null);
(statearr_16196_16214[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16200 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16200[0] = state_machine__5548__auto__);
(statearr_16200[1] = 1);
return statearr_16200;
});
var state_machine__5548__auto____1 = (function (state_16181){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16181);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16201){if((e16201 instanceof Object))
{var ex__5551__auto__ = e16201;var statearr_16202_16215 = state_16181;(statearr_16202_16215[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16216 = state_16181;
state_16181 = G__16216;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16181){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16203 = f__5563__auto__.call(null);(statearr_16203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16204);
return statearr_16203;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16313 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16288){var state_val_16289 = (state_16288[1]);if((state_val_16289 === 1))
{var inst_16265 = null;var state_16288__$1 = (function (){var statearr_16290 = state_16288;(statearr_16290[7] = inst_16265);
return statearr_16290;
})();var statearr_16291_16314 = state_16288__$1;(statearr_16291_16314[2] = null);
(statearr_16291_16314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16289 === 2))
{var state_16288__$1 = state_16288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16288__$1,4,ch);
} else
{if((state_val_16289 === 3))
{var inst_16285 = (state_16288[2]);var inst_16286 = cljs.core.async.close_BANG_.call(null,out);var state_16288__$1 = (function (){var statearr_16292 = state_16288;(statearr_16292[8] = inst_16285);
return statearr_16292;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16288__$1,inst_16286);
} else
{if((state_val_16289 === 4))
{var inst_16268 = (state_16288[9]);var inst_16268__$1 = (state_16288[2]);var inst_16269 = (inst_16268__$1 == null);var inst_16270 = cljs.core.not.call(null,inst_16269);var state_16288__$1 = (function (){var statearr_16293 = state_16288;(statearr_16293[9] = inst_16268__$1);
return statearr_16293;
})();if(inst_16270)
{var statearr_16294_16315 = state_16288__$1;(statearr_16294_16315[1] = 5);
} else
{var statearr_16295_16316 = state_16288__$1;(statearr_16295_16316[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16289 === 5))
{var inst_16268 = (state_16288[9]);var inst_16265 = (state_16288[7]);var inst_16272 = cljs.core._EQ_.call(null,inst_16268,inst_16265);var state_16288__$1 = state_16288;if(inst_16272)
{var statearr_16296_16317 = state_16288__$1;(statearr_16296_16317[1] = 8);
} else
{var statearr_16297_16318 = state_16288__$1;(statearr_16297_16318[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16289 === 6))
{var state_16288__$1 = state_16288;var statearr_16299_16319 = state_16288__$1;(statearr_16299_16319[2] = null);
(statearr_16299_16319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16289 === 7))
{var inst_16283 = (state_16288[2]);var state_16288__$1 = state_16288;var statearr_16300_16320 = state_16288__$1;(statearr_16300_16320[2] = inst_16283);
(statearr_16300_16320[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16289 === 8))
{var inst_16265 = (state_16288[7]);var tmp16298 = inst_16265;var inst_16265__$1 = tmp16298;var state_16288__$1 = (function (){var statearr_16301 = state_16288;(statearr_16301[7] = inst_16265__$1);
return statearr_16301;
})();var statearr_16302_16321 = state_16288__$1;(statearr_16302_16321[2] = null);
(statearr_16302_16321[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16289 === 9))
{var inst_16268 = (state_16288[9]);var state_16288__$1 = state_16288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16288__$1,11,out,inst_16268);
} else
{if((state_val_16289 === 10))
{var inst_16280 = (state_16288[2]);var state_16288__$1 = state_16288;var statearr_16303_16322 = state_16288__$1;(statearr_16303_16322[2] = inst_16280);
(statearr_16303_16322[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16289 === 11))
{var inst_16268 = (state_16288[9]);var inst_16277 = (state_16288[2]);var inst_16265 = inst_16268;var state_16288__$1 = (function (){var statearr_16304 = state_16288;(statearr_16304[7] = inst_16265);
(statearr_16304[10] = inst_16277);
return statearr_16304;
})();var statearr_16305_16323 = state_16288__$1;(statearr_16305_16323[2] = null);
(statearr_16305_16323[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16309 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16309[0] = state_machine__5548__auto__);
(statearr_16309[1] = 1);
return statearr_16309;
});
var state_machine__5548__auto____1 = (function (state_16288){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16288);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16310){if((e16310 instanceof Object))
{var ex__5551__auto__ = e16310;var statearr_16311_16324 = state_16288;(statearr_16311_16324[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16325 = state_16288;
state_16288 = G__16325;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16288){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16312 = f__5563__auto__.call(null);(statearr_16312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16313);
return statearr_16312;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16430){var state_val_16431 = (state_16430[1]);if((state_val_16431 === 1))
{var inst_16393 = (new Array(n));var inst_16394 = inst_16393;var inst_16395 = 0;var state_16430__$1 = (function (){var statearr_16432 = state_16430;(statearr_16432[7] = inst_16395);
(statearr_16432[8] = inst_16394);
return statearr_16432;
})();var statearr_16433_16461 = state_16430__$1;(statearr_16433_16461[2] = null);
(statearr_16433_16461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 2))
{var state_16430__$1 = state_16430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16430__$1,4,ch);
} else
{if((state_val_16431 === 3))
{var inst_16428 = (state_16430[2]);var state_16430__$1 = state_16430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16430__$1,inst_16428);
} else
{if((state_val_16431 === 4))
{var inst_16398 = (state_16430[9]);var inst_16398__$1 = (state_16430[2]);var inst_16399 = (inst_16398__$1 == null);var inst_16400 = cljs.core.not.call(null,inst_16399);var state_16430__$1 = (function (){var statearr_16434 = state_16430;(statearr_16434[9] = inst_16398__$1);
return statearr_16434;
})();if(inst_16400)
{var statearr_16435_16462 = state_16430__$1;(statearr_16435_16462[1] = 5);
} else
{var statearr_16436_16463 = state_16430__$1;(statearr_16436_16463[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 5))
{var inst_16398 = (state_16430[9]);var inst_16395 = (state_16430[7]);var inst_16394 = (state_16430[8]);var inst_16403 = (state_16430[10]);var inst_16402 = (inst_16394[inst_16395] = inst_16398);var inst_16403__$1 = (inst_16395 + 1);var inst_16404 = (inst_16403__$1 < n);var state_16430__$1 = (function (){var statearr_16437 = state_16430;(statearr_16437[10] = inst_16403__$1);
(statearr_16437[11] = inst_16402);
return statearr_16437;
})();if(cljs.core.truth_(inst_16404))
{var statearr_16438_16464 = state_16430__$1;(statearr_16438_16464[1] = 8);
} else
{var statearr_16439_16465 = state_16430__$1;(statearr_16439_16465[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 6))
{var inst_16395 = (state_16430[7]);var inst_16416 = (inst_16395 > 0);var state_16430__$1 = state_16430;if(cljs.core.truth_(inst_16416))
{var statearr_16441_16466 = state_16430__$1;(statearr_16441_16466[1] = 12);
} else
{var statearr_16442_16467 = state_16430__$1;(statearr_16442_16467[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 7))
{var inst_16426 = (state_16430[2]);var state_16430__$1 = state_16430;var statearr_16443_16468 = state_16430__$1;(statearr_16443_16468[2] = inst_16426);
(statearr_16443_16468[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 8))
{var inst_16394 = (state_16430[8]);var inst_16403 = (state_16430[10]);var tmp16440 = inst_16394;var inst_16394__$1 = tmp16440;var inst_16395 = inst_16403;var state_16430__$1 = (function (){var statearr_16444 = state_16430;(statearr_16444[7] = inst_16395);
(statearr_16444[8] = inst_16394__$1);
return statearr_16444;
})();var statearr_16445_16469 = state_16430__$1;(statearr_16445_16469[2] = null);
(statearr_16445_16469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 9))
{var inst_16394 = (state_16430[8]);var inst_16408 = cljs.core.vec.call(null,inst_16394);var state_16430__$1 = state_16430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16430__$1,11,out,inst_16408);
} else
{if((state_val_16431 === 10))
{var inst_16414 = (state_16430[2]);var state_16430__$1 = state_16430;var statearr_16446_16470 = state_16430__$1;(statearr_16446_16470[2] = inst_16414);
(statearr_16446_16470[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 11))
{var inst_16410 = (state_16430[2]);var inst_16411 = (new Array(n));var inst_16394 = inst_16411;var inst_16395 = 0;var state_16430__$1 = (function (){var statearr_16447 = state_16430;(statearr_16447[7] = inst_16395);
(statearr_16447[8] = inst_16394);
(statearr_16447[12] = inst_16410);
return statearr_16447;
})();var statearr_16448_16471 = state_16430__$1;(statearr_16448_16471[2] = null);
(statearr_16448_16471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 12))
{var inst_16394 = (state_16430[8]);var inst_16418 = cljs.core.vec.call(null,inst_16394);var state_16430__$1 = state_16430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16430__$1,15,out,inst_16418);
} else
{if((state_val_16431 === 13))
{var state_16430__$1 = state_16430;var statearr_16449_16472 = state_16430__$1;(statearr_16449_16472[2] = null);
(statearr_16449_16472[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 14))
{var inst_16423 = (state_16430[2]);var inst_16424 = cljs.core.async.close_BANG_.call(null,out);var state_16430__$1 = (function (){var statearr_16450 = state_16430;(statearr_16450[13] = inst_16423);
return statearr_16450;
})();var statearr_16451_16473 = state_16430__$1;(statearr_16451_16473[2] = inst_16424);
(statearr_16451_16473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16431 === 15))
{var inst_16420 = (state_16430[2]);var state_16430__$1 = state_16430;var statearr_16452_16474 = state_16430__$1;(statearr_16452_16474[2] = inst_16420);
(statearr_16452_16474[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16456[0] = state_machine__5548__auto__);
(statearr_16456[1] = 1);
return statearr_16456;
});
var state_machine__5548__auto____1 = (function (state_16430){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16457){if((e16457 instanceof Object))
{var ex__5551__auto__ = e16457;var statearr_16458_16475 = state_16430;(statearr_16458_16475[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16476 = state_16430;
state_16430 = G__16476;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16430){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16459 = f__5563__auto__.call(null);(statearr_16459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16460);
return statearr_16459;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16619 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16589){var state_val_16590 = (state_16589[1]);if((state_val_16590 === 1))
{var inst_16548 = [];var inst_16549 = inst_16548;var inst_16550 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16589__$1 = (function (){var statearr_16591 = state_16589;(statearr_16591[7] = inst_16549);
(statearr_16591[8] = inst_16550);
return statearr_16591;
})();var statearr_16592_16620 = state_16589__$1;(statearr_16592_16620[2] = null);
(statearr_16592_16620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 2))
{var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16589__$1,4,ch);
} else
{if((state_val_16590 === 3))
{var inst_16587 = (state_16589[2]);var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16589__$1,inst_16587);
} else
{if((state_val_16590 === 4))
{var inst_16553 = (state_16589[9]);var inst_16553__$1 = (state_16589[2]);var inst_16554 = (inst_16553__$1 == null);var inst_16555 = cljs.core.not.call(null,inst_16554);var state_16589__$1 = (function (){var statearr_16593 = state_16589;(statearr_16593[9] = inst_16553__$1);
return statearr_16593;
})();if(inst_16555)
{var statearr_16594_16621 = state_16589__$1;(statearr_16594_16621[1] = 5);
} else
{var statearr_16595_16622 = state_16589__$1;(statearr_16595_16622[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 5))
{var inst_16557 = (state_16589[10]);var inst_16553 = (state_16589[9]);var inst_16550 = (state_16589[8]);var inst_16557__$1 = f.call(null,inst_16553);var inst_16558 = cljs.core._EQ_.call(null,inst_16557__$1,inst_16550);var inst_16559 = cljs.core.keyword_identical_QMARK_.call(null,inst_16550,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16560 = (inst_16558) || (inst_16559);var state_16589__$1 = (function (){var statearr_16596 = state_16589;(statearr_16596[10] = inst_16557__$1);
return statearr_16596;
})();if(cljs.core.truth_(inst_16560))
{var statearr_16597_16623 = state_16589__$1;(statearr_16597_16623[1] = 8);
} else
{var statearr_16598_16624 = state_16589__$1;(statearr_16598_16624[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 6))
{var inst_16549 = (state_16589[7]);var inst_16574 = inst_16549.length;var inst_16575 = (inst_16574 > 0);var state_16589__$1 = state_16589;if(cljs.core.truth_(inst_16575))
{var statearr_16600_16625 = state_16589__$1;(statearr_16600_16625[1] = 12);
} else
{var statearr_16601_16626 = state_16589__$1;(statearr_16601_16626[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 7))
{var inst_16585 = (state_16589[2]);var state_16589__$1 = state_16589;var statearr_16602_16627 = state_16589__$1;(statearr_16602_16627[2] = inst_16585);
(statearr_16602_16627[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 8))
{var inst_16549 = (state_16589[7]);var inst_16557 = (state_16589[10]);var inst_16553 = (state_16589[9]);var inst_16562 = inst_16549.push(inst_16553);var tmp16599 = inst_16549;var inst_16549__$1 = tmp16599;var inst_16550 = inst_16557;var state_16589__$1 = (function (){var statearr_16603 = state_16589;(statearr_16603[7] = inst_16549__$1);
(statearr_16603[8] = inst_16550);
(statearr_16603[11] = inst_16562);
return statearr_16603;
})();var statearr_16604_16628 = state_16589__$1;(statearr_16604_16628[2] = null);
(statearr_16604_16628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 9))
{var inst_16549 = (state_16589[7]);var inst_16565 = cljs.core.vec.call(null,inst_16549);var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16589__$1,11,out,inst_16565);
} else
{if((state_val_16590 === 10))
{var inst_16572 = (state_16589[2]);var state_16589__$1 = state_16589;var statearr_16605_16629 = state_16589__$1;(statearr_16605_16629[2] = inst_16572);
(statearr_16605_16629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 11))
{var inst_16557 = (state_16589[10]);var inst_16553 = (state_16589[9]);var inst_16567 = (state_16589[2]);var inst_16568 = [];var inst_16569 = inst_16568.push(inst_16553);var inst_16549 = inst_16568;var inst_16550 = inst_16557;var state_16589__$1 = (function (){var statearr_16606 = state_16589;(statearr_16606[7] = inst_16549);
(statearr_16606[8] = inst_16550);
(statearr_16606[12] = inst_16569);
(statearr_16606[13] = inst_16567);
return statearr_16606;
})();var statearr_16607_16630 = state_16589__$1;(statearr_16607_16630[2] = null);
(statearr_16607_16630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 12))
{var inst_16549 = (state_16589[7]);var inst_16577 = cljs.core.vec.call(null,inst_16549);var state_16589__$1 = state_16589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16589__$1,15,out,inst_16577);
} else
{if((state_val_16590 === 13))
{var state_16589__$1 = state_16589;var statearr_16608_16631 = state_16589__$1;(statearr_16608_16631[2] = null);
(statearr_16608_16631[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 14))
{var inst_16582 = (state_16589[2]);var inst_16583 = cljs.core.async.close_BANG_.call(null,out);var state_16589__$1 = (function (){var statearr_16609 = state_16589;(statearr_16609[14] = inst_16582);
return statearr_16609;
})();var statearr_16610_16632 = state_16589__$1;(statearr_16610_16632[2] = inst_16583);
(statearr_16610_16632[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16590 === 15))
{var inst_16579 = (state_16589[2]);var state_16589__$1 = state_16589;var statearr_16611_16633 = state_16589__$1;(statearr_16611_16633[2] = inst_16579);
(statearr_16611_16633[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16615[0] = state_machine__5548__auto__);
(statearr_16615[1] = 1);
return statearr_16615;
});
var state_machine__5548__auto____1 = (function (state_16589){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16589);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16616){if((e16616 instanceof Object))
{var ex__5551__auto__ = e16616;var statearr_16617_16634 = state_16589;(statearr_16617_16634[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16635 = state_16589;
state_16589 = G__16635;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16589){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16618 = f__5563__auto__.call(null);(statearr_16618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16619);
return statearr_16618;
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
