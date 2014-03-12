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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t46956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46956 = (function (f,fn_handler,meta46957){
this.f = f;
this.fn_handler = fn_handler;
this.meta46957 = meta46957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46956.cljs$lang$type = true;
cljs.core.async.t46956.cljs$lang$ctorStr = "cljs.core.async/t46956";
cljs.core.async.t46956.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46956");
});
cljs.core.async.t46956.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t46956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t46956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46958){var self__ = this;
var _46958__$1 = this;return self__.meta46957;
});
cljs.core.async.t46956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46958,meta46957__$1){var self__ = this;
var _46958__$1 = this;return (new cljs.core.async.t46956(self__.f,self__.fn_handler,meta46957__$1));
});
cljs.core.async.__GT_t46956 = (function __GT_t46956(f__$1,fn_handler__$1,meta46957){return (new cljs.core.async.t46956(f__$1,fn_handler__$1,meta46957));
});
}
return (new cljs.core.async.t46956(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__46960 = buff;if(G__46960)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__46960.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__46960.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__46960);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__46960);
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
{var val_46961 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_46961);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_46961);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___46962 = n;var x_46963 = 0;while(true){
if((x_46963 < n__4289__auto___46962))
{(a[x_46963] = 0);
{
var G__46964 = (x_46963 + 1);
x_46963 = G__46964;
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
var G__46965 = (i + 1);
i = G__46965;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t46969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46969 = (function (flag,alt_flag,meta46970){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta46970 = meta46970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46969.cljs$lang$type = true;
cljs.core.async.t46969.cljs$lang$ctorStr = "cljs.core.async/t46969";
cljs.core.async.t46969.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46969");
});
cljs.core.async.t46969.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46969.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t46969.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t46969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46971){var self__ = this;
var _46971__$1 = this;return self__.meta46970;
});
cljs.core.async.t46969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46971,meta46970__$1){var self__ = this;
var _46971__$1 = this;return (new cljs.core.async.t46969(self__.flag,self__.alt_flag,meta46970__$1));
});
cljs.core.async.__GT_t46969 = (function __GT_t46969(flag__$1,alt_flag__$1,meta46970){return (new cljs.core.async.t46969(flag__$1,alt_flag__$1,meta46970));
});
}
return (new cljs.core.async.t46969(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t46975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46975 = (function (cb,flag,alt_handler,meta46976){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta46976 = meta46976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46975.cljs$lang$type = true;
cljs.core.async.t46975.cljs$lang$ctorStr = "cljs.core.async/t46975";
cljs.core.async.t46975.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46975");
});
cljs.core.async.t46975.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t46975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t46975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46977){var self__ = this;
var _46977__$1 = this;return self__.meta46976;
});
cljs.core.async.t46975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46977,meta46976__$1){var self__ = this;
var _46977__$1 = this;return (new cljs.core.async.t46975(self__.cb,self__.flag,self__.alt_handler,meta46976__$1));
});
cljs.core.async.__GT_t46975 = (function __GT_t46975(cb__$1,flag__$1,alt_handler__$1,meta46976){return (new cljs.core.async.t46975(cb__$1,flag__$1,alt_handler__$1,meta46976));
});
}
return (new cljs.core.async.t46975(cb,flag,alt_handler,null));
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
return (function (p1__46978_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46978_SHARP_,port], null));
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
var G__46979 = (i + 1);
i = G__46979;
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
var alts_BANG___delegate = function (ports,p__46980){var map__46982 = p__46980;var map__46982__$1 = ((cljs.core.seq_QMARK_.call(null,map__46982))?cljs.core.apply.call(null,cljs.core.hash_map,map__46982):map__46982);var opts = map__46982__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__46980 = null;if (arguments.length > 1) {
  p__46980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__46980);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__46983){
var ports = cljs.core.first(arglist__46983);
var p__46980 = cljs.core.rest(arglist__46983);
return alts_BANG___delegate(ports,p__46980);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t46991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46991 = (function (ch,f,map_LT_,meta46992){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46992 = meta46992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46991.cljs$lang$type = true;
cljs.core.async.t46991.cljs$lang$ctorStr = "cljs.core.async/t46991";
cljs.core.async.t46991.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46991");
});
cljs.core.async.t46991.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t46991.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t46994 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46994 = (function (fn1,_,meta46992,ch,f,map_LT_,meta46995){
this.fn1 = fn1;
this._ = _;
this.meta46992 = meta46992;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46995 = meta46995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46994.cljs$lang$type = true;
cljs.core.async.t46994.cljs$lang$ctorStr = "cljs.core.async/t46994";
cljs.core.async.t46994.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46994");
});
cljs.core.async.t46994.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t46994.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t46994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__46984_SHARP_){return f1.call(null,(((p1__46984_SHARP_ == null))?null:self__.f.call(null,p1__46984_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t46994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46996){var self__ = this;
var _46996__$1 = this;return self__.meta46995;
});
cljs.core.async.t46994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46996,meta46995__$1){var self__ = this;
var _46996__$1 = this;return (new cljs.core.async.t46994(self__.fn1,self__._,self__.meta46992,self__.ch,self__.f,self__.map_LT_,meta46995__$1));
});
cljs.core.async.__GT_t46994 = (function __GT_t46994(fn1__$1,___$2,meta46992__$1,ch__$2,f__$2,map_LT___$2,meta46995){return (new cljs.core.async.t46994(fn1__$1,___$2,meta46992__$1,ch__$2,f__$2,map_LT___$2,meta46995));
});
}
return (new cljs.core.async.t46994(fn1,___$1,self__.meta46992,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t46991.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46993){var self__ = this;
var _46993__$1 = this;return self__.meta46992;
});
cljs.core.async.t46991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46993,meta46992__$1){var self__ = this;
var _46993__$1 = this;return (new cljs.core.async.t46991(self__.ch,self__.f,self__.map_LT_,meta46992__$1));
});
cljs.core.async.__GT_t46991 = (function __GT_t46991(ch__$1,f__$1,map_LT___$1,meta46992){return (new cljs.core.async.t46991(ch__$1,f__$1,map_LT___$1,meta46992));
});
}
return (new cljs.core.async.t46991(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t47000 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47000 = (function (ch,f,map_GT_,meta47001){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47001 = meta47001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47000.cljs$lang$type = true;
cljs.core.async.t47000.cljs$lang$ctorStr = "cljs.core.async/t47000";
cljs.core.async.t47000.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47000");
});
cljs.core.async.t47000.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t47000.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47000.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47002){var self__ = this;
var _47002__$1 = this;return self__.meta47001;
});
cljs.core.async.t47000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47002,meta47001__$1){var self__ = this;
var _47002__$1 = this;return (new cljs.core.async.t47000(self__.ch,self__.f,self__.map_GT_,meta47001__$1));
});
cljs.core.async.__GT_t47000 = (function __GT_t47000(ch__$1,f__$1,map_GT___$1,meta47001){return (new cljs.core.async.t47000(ch__$1,f__$1,map_GT___$1,meta47001));
});
}
return (new cljs.core.async.t47000(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t47006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47006 = (function (ch,p,filter_GT_,meta47007){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47007 = meta47007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47006.cljs$lang$type = true;
cljs.core.async.t47006.cljs$lang$ctorStr = "cljs.core.async/t47006";
cljs.core.async.t47006.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47006");
});
cljs.core.async.t47006.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47006.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t47006.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47006.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47006.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47006.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47008){var self__ = this;
var _47008__$1 = this;return self__.meta47007;
});
cljs.core.async.t47006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47008,meta47007__$1){var self__ = this;
var _47008__$1 = this;return (new cljs.core.async.t47006(self__.ch,self__.p,self__.filter_GT_,meta47007__$1));
});
cljs.core.async.__GT_t47006 = (function __GT_t47006(ch__$1,p__$1,filter_GT___$1,meta47007){return (new cljs.core.async.t47006(ch__$1,p__$1,filter_GT___$1,meta47007));
});
}
return (new cljs.core.async.t47006(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___47091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47070){var state_val_47071 = (state_47070[1]);if((state_val_47071 === 1))
{var state_47070__$1 = state_47070;var statearr_47072_47092 = state_47070__$1;(statearr_47072_47092[2] = null);
(statearr_47072_47092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47071 === 2))
{var state_47070__$1 = state_47070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47070__$1,4,ch);
} else
{if((state_val_47071 === 3))
{var inst_47068 = (state_47070[2]);var state_47070__$1 = state_47070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47070__$1,inst_47068);
} else
{if((state_val_47071 === 4))
{var inst_47052 = (state_47070[7]);var inst_47052__$1 = (state_47070[2]);var inst_47053 = (inst_47052__$1 == null);var state_47070__$1 = (function (){var statearr_47073 = state_47070;(statearr_47073[7] = inst_47052__$1);
return statearr_47073;
})();if(cljs.core.truth_(inst_47053))
{var statearr_47074_47093 = state_47070__$1;(statearr_47074_47093[1] = 5);
} else
{var statearr_47075_47094 = state_47070__$1;(statearr_47075_47094[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47071 === 5))
{var inst_47055 = cljs.core.async.close_BANG_.call(null,out);var state_47070__$1 = state_47070;var statearr_47076_47095 = state_47070__$1;(statearr_47076_47095[2] = inst_47055);
(statearr_47076_47095[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47071 === 6))
{var inst_47052 = (state_47070[7]);var inst_47057 = p.call(null,inst_47052);var state_47070__$1 = state_47070;if(cljs.core.truth_(inst_47057))
{var statearr_47077_47096 = state_47070__$1;(statearr_47077_47096[1] = 8);
} else
{var statearr_47078_47097 = state_47070__$1;(statearr_47078_47097[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47071 === 7))
{var inst_47066 = (state_47070[2]);var state_47070__$1 = state_47070;var statearr_47079_47098 = state_47070__$1;(statearr_47079_47098[2] = inst_47066);
(statearr_47079_47098[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47071 === 8))
{var inst_47052 = (state_47070[7]);var state_47070__$1 = state_47070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47070__$1,11,out,inst_47052);
} else
{if((state_val_47071 === 9))
{var state_47070__$1 = state_47070;var statearr_47080_47099 = state_47070__$1;(statearr_47080_47099[2] = null);
(statearr_47080_47099[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47071 === 10))
{var inst_47063 = (state_47070[2]);var state_47070__$1 = (function (){var statearr_47081 = state_47070;(statearr_47081[8] = inst_47063);
return statearr_47081;
})();var statearr_47082_47100 = state_47070__$1;(statearr_47082_47100[2] = null);
(statearr_47082_47100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47071 === 11))
{var inst_47060 = (state_47070[2]);var state_47070__$1 = state_47070;var statearr_47083_47101 = state_47070__$1;(statearr_47083_47101[2] = inst_47060);
(statearr_47083_47101[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_47087 = [null,null,null,null,null,null,null,null,null];(statearr_47087[0] = state_machine__5548__auto__);
(statearr_47087[1] = 1);
return statearr_47087;
});
var state_machine__5548__auto____1 = (function (state_47070){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47070);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47088){if((e47088 instanceof Object))
{var ex__5551__auto__ = e47088;var statearr_47089_47102 = state_47070;(statearr_47089_47102[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47103 = state_47070;
state_47070 = G__47103;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47070){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47090 = f__5563__auto__.call(null);(statearr_47090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47091);
return statearr_47090;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47255){var state_val_47256 = (state_47255[1]);if((state_val_47256 === 1))
{var state_47255__$1 = state_47255;var statearr_47257_47294 = state_47255__$1;(statearr_47257_47294[2] = null);
(statearr_47257_47294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 2))
{var state_47255__$1 = state_47255;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47255__$1,4,in$);
} else
{if((state_val_47256 === 3))
{var inst_47253 = (state_47255[2]);var state_47255__$1 = state_47255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47255__$1,inst_47253);
} else
{if((state_val_47256 === 4))
{var inst_47201 = (state_47255[7]);var inst_47201__$1 = (state_47255[2]);var inst_47202 = (inst_47201__$1 == null);var state_47255__$1 = (function (){var statearr_47258 = state_47255;(statearr_47258[7] = inst_47201__$1);
return statearr_47258;
})();if(cljs.core.truth_(inst_47202))
{var statearr_47259_47295 = state_47255__$1;(statearr_47259_47295[1] = 5);
} else
{var statearr_47260_47296 = state_47255__$1;(statearr_47260_47296[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 5))
{var inst_47204 = cljs.core.async.close_BANG_.call(null,out);var state_47255__$1 = state_47255;var statearr_47261_47297 = state_47255__$1;(statearr_47261_47297[2] = inst_47204);
(statearr_47261_47297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 6))
{var inst_47201 = (state_47255[7]);var inst_47206 = f.call(null,inst_47201);var inst_47211 = cljs.core.seq.call(null,inst_47206);var inst_47212 = inst_47211;var inst_47213 = null;var inst_47214 = 0;var inst_47215 = 0;var state_47255__$1 = (function (){var statearr_47262 = state_47255;(statearr_47262[8] = inst_47212);
(statearr_47262[9] = inst_47215);
(statearr_47262[10] = inst_47214);
(statearr_47262[11] = inst_47213);
return statearr_47262;
})();var statearr_47263_47298 = state_47255__$1;(statearr_47263_47298[2] = null);
(statearr_47263_47298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 7))
{var inst_47251 = (state_47255[2]);var state_47255__$1 = state_47255;var statearr_47264_47299 = state_47255__$1;(statearr_47264_47299[2] = inst_47251);
(statearr_47264_47299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 8))
{var inst_47215 = (state_47255[9]);var inst_47214 = (state_47255[10]);var inst_47217 = (inst_47215 < inst_47214);var inst_47218 = inst_47217;var state_47255__$1 = state_47255;if(cljs.core.truth_(inst_47218))
{var statearr_47265_47300 = state_47255__$1;(statearr_47265_47300[1] = 10);
} else
{var statearr_47266_47301 = state_47255__$1;(statearr_47266_47301[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 9))
{var inst_47248 = (state_47255[2]);var state_47255__$1 = (function (){var statearr_47267 = state_47255;(statearr_47267[12] = inst_47248);
return statearr_47267;
})();var statearr_47268_47302 = state_47255__$1;(statearr_47268_47302[2] = null);
(statearr_47268_47302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 10))
{var inst_47215 = (state_47255[9]);var inst_47213 = (state_47255[11]);var inst_47220 = cljs.core._nth.call(null,inst_47213,inst_47215);var state_47255__$1 = state_47255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47255__$1,13,out,inst_47220);
} else
{if((state_val_47256 === 11))
{var inst_47212 = (state_47255[8]);var inst_47226 = (state_47255[13]);var inst_47226__$1 = cljs.core.seq.call(null,inst_47212);var state_47255__$1 = (function (){var statearr_47272 = state_47255;(statearr_47272[13] = inst_47226__$1);
return statearr_47272;
})();if(inst_47226__$1)
{var statearr_47273_47303 = state_47255__$1;(statearr_47273_47303[1] = 14);
} else
{var statearr_47274_47304 = state_47255__$1;(statearr_47274_47304[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 12))
{var inst_47246 = (state_47255[2]);var state_47255__$1 = state_47255;var statearr_47275_47305 = state_47255__$1;(statearr_47275_47305[2] = inst_47246);
(statearr_47275_47305[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 13))
{var inst_47212 = (state_47255[8]);var inst_47215 = (state_47255[9]);var inst_47214 = (state_47255[10]);var inst_47213 = (state_47255[11]);var inst_47222 = (state_47255[2]);var inst_47223 = (inst_47215 + 1);var tmp47269 = inst_47212;var tmp47270 = inst_47214;var tmp47271 = inst_47213;var inst_47212__$1 = tmp47269;var inst_47213__$1 = tmp47271;var inst_47214__$1 = tmp47270;var inst_47215__$1 = inst_47223;var state_47255__$1 = (function (){var statearr_47276 = state_47255;(statearr_47276[8] = inst_47212__$1);
(statearr_47276[14] = inst_47222);
(statearr_47276[9] = inst_47215__$1);
(statearr_47276[10] = inst_47214__$1);
(statearr_47276[11] = inst_47213__$1);
return statearr_47276;
})();var statearr_47277_47306 = state_47255__$1;(statearr_47277_47306[2] = null);
(statearr_47277_47306[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 14))
{var inst_47226 = (state_47255[13]);var inst_47228 = cljs.core.chunked_seq_QMARK_.call(null,inst_47226);var state_47255__$1 = state_47255;if(inst_47228)
{var statearr_47278_47307 = state_47255__$1;(statearr_47278_47307[1] = 17);
} else
{var statearr_47279_47308 = state_47255__$1;(statearr_47279_47308[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 15))
{var state_47255__$1 = state_47255;var statearr_47280_47309 = state_47255__$1;(statearr_47280_47309[2] = null);
(statearr_47280_47309[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 16))
{var inst_47244 = (state_47255[2]);var state_47255__$1 = state_47255;var statearr_47281_47310 = state_47255__$1;(statearr_47281_47310[2] = inst_47244);
(statearr_47281_47310[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 17))
{var inst_47226 = (state_47255[13]);var inst_47230 = cljs.core.chunk_first.call(null,inst_47226);var inst_47231 = cljs.core.chunk_rest.call(null,inst_47226);var inst_47232 = cljs.core.count.call(null,inst_47230);var inst_47212 = inst_47231;var inst_47213 = inst_47230;var inst_47214 = inst_47232;var inst_47215 = 0;var state_47255__$1 = (function (){var statearr_47282 = state_47255;(statearr_47282[8] = inst_47212);
(statearr_47282[9] = inst_47215);
(statearr_47282[10] = inst_47214);
(statearr_47282[11] = inst_47213);
return statearr_47282;
})();var statearr_47283_47311 = state_47255__$1;(statearr_47283_47311[2] = null);
(statearr_47283_47311[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 18))
{var inst_47226 = (state_47255[13]);var inst_47235 = cljs.core.first.call(null,inst_47226);var state_47255__$1 = state_47255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47255__$1,20,out,inst_47235);
} else
{if((state_val_47256 === 19))
{var inst_47241 = (state_47255[2]);var state_47255__$1 = state_47255;var statearr_47284_47312 = state_47255__$1;(statearr_47284_47312[2] = inst_47241);
(statearr_47284_47312[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47256 === 20))
{var inst_47226 = (state_47255[13]);var inst_47237 = (state_47255[2]);var inst_47238 = cljs.core.next.call(null,inst_47226);var inst_47212 = inst_47238;var inst_47213 = null;var inst_47214 = 0;var inst_47215 = 0;var state_47255__$1 = (function (){var statearr_47285 = state_47255;(statearr_47285[15] = inst_47237);
(statearr_47285[8] = inst_47212);
(statearr_47285[9] = inst_47215);
(statearr_47285[10] = inst_47214);
(statearr_47285[11] = inst_47213);
return statearr_47285;
})();var statearr_47286_47313 = state_47255__$1;(statearr_47286_47313[2] = null);
(statearr_47286_47313[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_47290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47290[0] = state_machine__5548__auto__);
(statearr_47290[1] = 1);
return statearr_47290;
});
var state_machine__5548__auto____1 = (function (state_47255){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47255);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47291){if((e47291 instanceof Object))
{var ex__5551__auto__ = e47291;var statearr_47292_47314 = state_47255;(statearr_47292_47314[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47255);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47315 = state_47255;
state_47255 = G__47315;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47255){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47293 = f__5563__auto__.call(null);(statearr_47293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47293;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___47396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47375){var state_val_47376 = (state_47375[1]);if((state_val_47376 === 1))
{var state_47375__$1 = state_47375;var statearr_47377_47397 = state_47375__$1;(statearr_47377_47397[2] = null);
(statearr_47377_47397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47376 === 2))
{var state_47375__$1 = state_47375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47375__$1,4,from);
} else
{if((state_val_47376 === 3))
{var inst_47373 = (state_47375[2]);var state_47375__$1 = state_47375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47375__$1,inst_47373);
} else
{if((state_val_47376 === 4))
{var inst_47358 = (state_47375[7]);var inst_47358__$1 = (state_47375[2]);var inst_47359 = (inst_47358__$1 == null);var state_47375__$1 = (function (){var statearr_47378 = state_47375;(statearr_47378[7] = inst_47358__$1);
return statearr_47378;
})();if(cljs.core.truth_(inst_47359))
{var statearr_47379_47398 = state_47375__$1;(statearr_47379_47398[1] = 5);
} else
{var statearr_47380_47399 = state_47375__$1;(statearr_47380_47399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47376 === 5))
{var state_47375__$1 = state_47375;if(cljs.core.truth_(close_QMARK_))
{var statearr_47381_47400 = state_47375__$1;(statearr_47381_47400[1] = 8);
} else
{var statearr_47382_47401 = state_47375__$1;(statearr_47382_47401[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47376 === 6))
{var inst_47358 = (state_47375[7]);var state_47375__$1 = state_47375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47375__$1,11,to,inst_47358);
} else
{if((state_val_47376 === 7))
{var inst_47371 = (state_47375[2]);var state_47375__$1 = state_47375;var statearr_47383_47402 = state_47375__$1;(statearr_47383_47402[2] = inst_47371);
(statearr_47383_47402[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47376 === 8))
{var inst_47362 = cljs.core.async.close_BANG_.call(null,to);var state_47375__$1 = state_47375;var statearr_47384_47403 = state_47375__$1;(statearr_47384_47403[2] = inst_47362);
(statearr_47384_47403[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47376 === 9))
{var state_47375__$1 = state_47375;var statearr_47385_47404 = state_47375__$1;(statearr_47385_47404[2] = null);
(statearr_47385_47404[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47376 === 10))
{var inst_47365 = (state_47375[2]);var state_47375__$1 = state_47375;var statearr_47386_47405 = state_47375__$1;(statearr_47386_47405[2] = inst_47365);
(statearr_47386_47405[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47376 === 11))
{var inst_47368 = (state_47375[2]);var state_47375__$1 = (function (){var statearr_47387 = state_47375;(statearr_47387[8] = inst_47368);
return statearr_47387;
})();var statearr_47388_47406 = state_47375__$1;(statearr_47388_47406[2] = null);
(statearr_47388_47406[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_47392 = [null,null,null,null,null,null,null,null,null];(statearr_47392[0] = state_machine__5548__auto__);
(statearr_47392[1] = 1);
return statearr_47392;
});
var state_machine__5548__auto____1 = (function (state_47375){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47375);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47393){if((e47393 instanceof Object))
{var ex__5551__auto__ = e47393;var statearr_47394_47407 = state_47375;(statearr_47394_47407[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47408 = state_47375;
state_47375 = G__47408;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47375){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47395 = f__5563__auto__.call(null);(statearr_47395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47396);
return statearr_47395;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___47495 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47473){var state_val_47474 = (state_47473[1]);if((state_val_47474 === 1))
{var state_47473__$1 = state_47473;var statearr_47475_47496 = state_47473__$1;(statearr_47475_47496[2] = null);
(statearr_47475_47496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 2))
{var state_47473__$1 = state_47473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47473__$1,4,ch);
} else
{if((state_val_47474 === 3))
{var inst_47471 = (state_47473[2]);var state_47473__$1 = state_47473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47473__$1,inst_47471);
} else
{if((state_val_47474 === 4))
{var inst_47454 = (state_47473[7]);var inst_47454__$1 = (state_47473[2]);var inst_47455 = (inst_47454__$1 == null);var state_47473__$1 = (function (){var statearr_47476 = state_47473;(statearr_47476[7] = inst_47454__$1);
return statearr_47476;
})();if(cljs.core.truth_(inst_47455))
{var statearr_47477_47497 = state_47473__$1;(statearr_47477_47497[1] = 5);
} else
{var statearr_47478_47498 = state_47473__$1;(statearr_47478_47498[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 5))
{var inst_47457 = cljs.core.async.close_BANG_.call(null,tc);var inst_47458 = cljs.core.async.close_BANG_.call(null,fc);var state_47473__$1 = (function (){var statearr_47479 = state_47473;(statearr_47479[8] = inst_47457);
return statearr_47479;
})();var statearr_47480_47499 = state_47473__$1;(statearr_47480_47499[2] = inst_47458);
(statearr_47480_47499[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 6))
{var inst_47454 = (state_47473[7]);var inst_47460 = p.call(null,inst_47454);var state_47473__$1 = state_47473;if(cljs.core.truth_(inst_47460))
{var statearr_47481_47500 = state_47473__$1;(statearr_47481_47500[1] = 9);
} else
{var statearr_47482_47501 = state_47473__$1;(statearr_47482_47501[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 7))
{var inst_47469 = (state_47473[2]);var state_47473__$1 = state_47473;var statearr_47483_47502 = state_47473__$1;(statearr_47483_47502[2] = inst_47469);
(statearr_47483_47502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 8))
{var inst_47466 = (state_47473[2]);var state_47473__$1 = (function (){var statearr_47484 = state_47473;(statearr_47484[9] = inst_47466);
return statearr_47484;
})();var statearr_47485_47503 = state_47473__$1;(statearr_47485_47503[2] = null);
(statearr_47485_47503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 9))
{var state_47473__$1 = state_47473;var statearr_47486_47504 = state_47473__$1;(statearr_47486_47504[2] = tc);
(statearr_47486_47504[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 10))
{var state_47473__$1 = state_47473;var statearr_47487_47505 = state_47473__$1;(statearr_47487_47505[2] = fc);
(statearr_47487_47505[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47474 === 11))
{var inst_47454 = (state_47473[7]);var inst_47464 = (state_47473[2]);var state_47473__$1 = state_47473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47473__$1,8,inst_47464,inst_47454);
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
var state_machine__5548__auto____0 = (function (){var statearr_47491 = [null,null,null,null,null,null,null,null,null,null];(statearr_47491[0] = state_machine__5548__auto__);
(statearr_47491[1] = 1);
return statearr_47491;
});
var state_machine__5548__auto____1 = (function (state_47473){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47473);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47492){if((e47492 instanceof Object))
{var ex__5551__auto__ = e47492;var statearr_47493_47506 = state_47473;(statearr_47493_47506[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47473);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47507 = state_47473;
state_47473 = G__47507;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47473){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47494 = f__5563__auto__.call(null);(statearr_47494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47495);
return statearr_47494;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47554){var state_val_47555 = (state_47554[1]);if((state_val_47555 === 7))
{var inst_47550 = (state_47554[2]);var state_47554__$1 = state_47554;var statearr_47556_47572 = state_47554__$1;(statearr_47556_47572[2] = inst_47550);
(statearr_47556_47572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47555 === 6))
{var inst_47543 = (state_47554[7]);var inst_47540 = (state_47554[8]);var inst_47547 = f.call(null,inst_47540,inst_47543);var inst_47540__$1 = inst_47547;var state_47554__$1 = (function (){var statearr_47557 = state_47554;(statearr_47557[8] = inst_47540__$1);
return statearr_47557;
})();var statearr_47558_47573 = state_47554__$1;(statearr_47558_47573[2] = null);
(statearr_47558_47573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47555 === 5))
{var inst_47540 = (state_47554[8]);var state_47554__$1 = state_47554;var statearr_47559_47574 = state_47554__$1;(statearr_47559_47574[2] = inst_47540);
(statearr_47559_47574[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47555 === 4))
{var inst_47543 = (state_47554[7]);var inst_47543__$1 = (state_47554[2]);var inst_47544 = (inst_47543__$1 == null);var state_47554__$1 = (function (){var statearr_47560 = state_47554;(statearr_47560[7] = inst_47543__$1);
return statearr_47560;
})();if(cljs.core.truth_(inst_47544))
{var statearr_47561_47575 = state_47554__$1;(statearr_47561_47575[1] = 5);
} else
{var statearr_47562_47576 = state_47554__$1;(statearr_47562_47576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47555 === 3))
{var inst_47552 = (state_47554[2]);var state_47554__$1 = state_47554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47554__$1,inst_47552);
} else
{if((state_val_47555 === 2))
{var state_47554__$1 = state_47554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47554__$1,4,ch);
} else
{if((state_val_47555 === 1))
{var inst_47540 = init;var state_47554__$1 = (function (){var statearr_47563 = state_47554;(statearr_47563[8] = inst_47540);
return statearr_47563;
})();var statearr_47564_47577 = state_47554__$1;(statearr_47564_47577[2] = null);
(statearr_47564_47577[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_47568 = [null,null,null,null,null,null,null,null,null];(statearr_47568[0] = state_machine__5548__auto__);
(statearr_47568[1] = 1);
return statearr_47568;
});
var state_machine__5548__auto____1 = (function (state_47554){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47569){if((e47569 instanceof Object))
{var ex__5551__auto__ = e47569;var statearr_47570_47578 = state_47554;(statearr_47570_47578[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47579 = state_47554;
state_47554 = G__47579;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47554){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47571 = f__5563__auto__.call(null);(statearr_47571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47571;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47641){var state_val_47642 = (state_47641[1]);if((state_val_47642 === 1))
{var inst_47621 = cljs.core.seq.call(null,coll);var inst_47622 = inst_47621;var state_47641__$1 = (function (){var statearr_47643 = state_47641;(statearr_47643[7] = inst_47622);
return statearr_47643;
})();var statearr_47644_47662 = state_47641__$1;(statearr_47644_47662[2] = null);
(statearr_47644_47662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47642 === 2))
{var inst_47622 = (state_47641[7]);var state_47641__$1 = state_47641;if(cljs.core.truth_(inst_47622))
{var statearr_47645_47663 = state_47641__$1;(statearr_47645_47663[1] = 4);
} else
{var statearr_47646_47664 = state_47641__$1;(statearr_47646_47664[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47642 === 3))
{var inst_47639 = (state_47641[2]);var state_47641__$1 = state_47641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47641__$1,inst_47639);
} else
{if((state_val_47642 === 4))
{var inst_47622 = (state_47641[7]);var inst_47625 = cljs.core.first.call(null,inst_47622);var state_47641__$1 = state_47641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47641__$1,7,ch,inst_47625);
} else
{if((state_val_47642 === 5))
{var state_47641__$1 = state_47641;if(cljs.core.truth_(close_QMARK_))
{var statearr_47647_47665 = state_47641__$1;(statearr_47647_47665[1] = 8);
} else
{var statearr_47648_47666 = state_47641__$1;(statearr_47648_47666[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47642 === 6))
{var inst_47637 = (state_47641[2]);var state_47641__$1 = state_47641;var statearr_47649_47667 = state_47641__$1;(statearr_47649_47667[2] = inst_47637);
(statearr_47649_47667[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47642 === 7))
{var inst_47622 = (state_47641[7]);var inst_47627 = (state_47641[2]);var inst_47628 = cljs.core.next.call(null,inst_47622);var inst_47622__$1 = inst_47628;var state_47641__$1 = (function (){var statearr_47650 = state_47641;(statearr_47650[8] = inst_47627);
(statearr_47650[7] = inst_47622__$1);
return statearr_47650;
})();var statearr_47651_47668 = state_47641__$1;(statearr_47651_47668[2] = null);
(statearr_47651_47668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47642 === 8))
{var inst_47632 = cljs.core.async.close_BANG_.call(null,ch);var state_47641__$1 = state_47641;var statearr_47652_47669 = state_47641__$1;(statearr_47652_47669[2] = inst_47632);
(statearr_47652_47669[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47642 === 9))
{var state_47641__$1 = state_47641;var statearr_47653_47670 = state_47641__$1;(statearr_47653_47670[2] = null);
(statearr_47653_47670[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47642 === 10))
{var inst_47635 = (state_47641[2]);var state_47641__$1 = state_47641;var statearr_47654_47671 = state_47641__$1;(statearr_47654_47671[2] = inst_47635);
(statearr_47654_47671[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_47658 = [null,null,null,null,null,null,null,null,null];(statearr_47658[0] = state_machine__5548__auto__);
(statearr_47658[1] = 1);
return statearr_47658;
});
var state_machine__5548__auto____1 = (function (state_47641){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47641);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47659){if((e47659 instanceof Object))
{var ex__5551__auto__ = e47659;var statearr_47660_47672 = state_47641;(statearr_47660_47672[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47641);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47673 = state_47641;
state_47641 = G__47673;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47641){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47661 = f__5563__auto__.call(null);(statearr_47661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47661;
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
cljs.core.async.Mux = (function (){var obj47675 = {};return obj47675;
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
cljs.core.async.Mult = (function (){var obj47677 = {};return obj47677;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t47901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47901 = (function (cs,ch,mult,meta47902){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta47902 = meta47902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47901.cljs$lang$type = true;
cljs.core.async.t47901.cljs$lang$ctorStr = "cljs.core.async/t47901";
cljs.core.async.t47901.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47901");
});})(cs))
;
cljs.core.async.t47901.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t47901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t47901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t47901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t47901.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t47901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t47901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47903){var self__ = this;
var _47903__$1 = this;return self__.meta47902;
});})(cs))
;
cljs.core.async.t47901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47903,meta47902__$1){var self__ = this;
var _47903__$1 = this;return (new cljs.core.async.t47901(self__.cs,self__.ch,self__.mult,meta47902__$1));
});})(cs))
;
cljs.core.async.__GT_t47901 = ((function (cs){
return (function __GT_t47901(cs__$1,ch__$1,mult__$1,meta47902){return (new cljs.core.async.t47901(cs__$1,ch__$1,mult__$1,meta47902));
});})(cs))
;
}
return (new cljs.core.async.t47901(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___48124 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48038){var state_val_48039 = (state_48038[1]);if((state_val_48039 === 32))
{var inst_47906 = (state_48038[7]);var inst_47982 = (state_48038[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48038,31,Object,null,30);var inst_47989 = cljs.core.async.put_BANG_.call(null,inst_47982,inst_47906,done);var state_48038__$1 = state_48038;var statearr_48040_48125 = state_48038__$1;(statearr_48040_48125[2] = inst_47989);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48038__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 1))
{var state_48038__$1 = state_48038;var statearr_48041_48126 = state_48038__$1;(statearr_48041_48126[2] = null);
(statearr_48041_48126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 33))
{var inst_47995 = (state_48038[9]);var inst_47997 = cljs.core.chunked_seq_QMARK_.call(null,inst_47995);var state_48038__$1 = state_48038;if(inst_47997)
{var statearr_48042_48127 = state_48038__$1;(statearr_48042_48127[1] = 36);
} else
{var statearr_48043_48128 = state_48038__$1;(statearr_48043_48128[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 2))
{var state_48038__$1 = state_48038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48038__$1,4,ch);
} else
{if((state_val_48039 === 34))
{var state_48038__$1 = state_48038;var statearr_48044_48129 = state_48038__$1;(statearr_48044_48129[2] = null);
(statearr_48044_48129[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 3))
{var inst_48036 = (state_48038[2]);var state_48038__$1 = state_48038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48038__$1,inst_48036);
} else
{if((state_val_48039 === 35))
{var inst_48020 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48045_48130 = state_48038__$1;(statearr_48045_48130[2] = inst_48020);
(statearr_48045_48130[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 4))
{var inst_47906 = (state_48038[7]);var inst_47906__$1 = (state_48038[2]);var inst_47907 = (inst_47906__$1 == null);var state_48038__$1 = (function (){var statearr_48046 = state_48038;(statearr_48046[7] = inst_47906__$1);
return statearr_48046;
})();if(cljs.core.truth_(inst_47907))
{var statearr_48047_48131 = state_48038__$1;(statearr_48047_48131[1] = 5);
} else
{var statearr_48048_48132 = state_48038__$1;(statearr_48048_48132[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 36))
{var inst_47995 = (state_48038[9]);var inst_47999 = cljs.core.chunk_first.call(null,inst_47995);var inst_48000 = cljs.core.chunk_rest.call(null,inst_47995);var inst_48001 = cljs.core.count.call(null,inst_47999);var inst_47974 = inst_48000;var inst_47975 = inst_47999;var inst_47976 = inst_48001;var inst_47977 = 0;var state_48038__$1 = (function (){var statearr_48049 = state_48038;(statearr_48049[10] = inst_47976);
(statearr_48049[11] = inst_47977);
(statearr_48049[12] = inst_47975);
(statearr_48049[13] = inst_47974);
return statearr_48049;
})();var statearr_48050_48133 = state_48038__$1;(statearr_48050_48133[2] = null);
(statearr_48050_48133[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 5))
{var inst_47913 = cljs.core.deref.call(null,cs);var inst_47914 = cljs.core.seq.call(null,inst_47913);var inst_47915 = inst_47914;var inst_47916 = null;var inst_47917 = 0;var inst_47918 = 0;var state_48038__$1 = (function (){var statearr_48051 = state_48038;(statearr_48051[14] = inst_47915);
(statearr_48051[15] = inst_47917);
(statearr_48051[16] = inst_47916);
(statearr_48051[17] = inst_47918);
return statearr_48051;
})();var statearr_48052_48134 = state_48038__$1;(statearr_48052_48134[2] = null);
(statearr_48052_48134[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 37))
{var inst_47995 = (state_48038[9]);var inst_48004 = cljs.core.first.call(null,inst_47995);var state_48038__$1 = (function (){var statearr_48053 = state_48038;(statearr_48053[18] = inst_48004);
return statearr_48053;
})();var statearr_48054_48135 = state_48038__$1;(statearr_48054_48135[2] = null);
(statearr_48054_48135[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 6))
{var inst_47966 = (state_48038[19]);var inst_47965 = cljs.core.deref.call(null,cs);var inst_47966__$1 = cljs.core.keys.call(null,inst_47965);var inst_47967 = cljs.core.count.call(null,inst_47966__$1);var inst_47968 = cljs.core.reset_BANG_.call(null,dctr,inst_47967);var inst_47973 = cljs.core.seq.call(null,inst_47966__$1);var inst_47974 = inst_47973;var inst_47975 = null;var inst_47976 = 0;var inst_47977 = 0;var state_48038__$1 = (function (){var statearr_48055 = state_48038;(statearr_48055[10] = inst_47976);
(statearr_48055[11] = inst_47977);
(statearr_48055[12] = inst_47975);
(statearr_48055[13] = inst_47974);
(statearr_48055[19] = inst_47966__$1);
(statearr_48055[20] = inst_47968);
return statearr_48055;
})();var statearr_48056_48136 = state_48038__$1;(statearr_48056_48136[2] = null);
(statearr_48056_48136[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 38))
{var inst_48017 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48057_48137 = state_48038__$1;(statearr_48057_48137[2] = inst_48017);
(statearr_48057_48137[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 7))
{var inst_48034 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48058_48138 = state_48038__$1;(statearr_48058_48138[2] = inst_48034);
(statearr_48058_48138[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 39))
{var inst_47995 = (state_48038[9]);var inst_48013 = (state_48038[2]);var inst_48014 = cljs.core.next.call(null,inst_47995);var inst_47974 = inst_48014;var inst_47975 = null;var inst_47976 = 0;var inst_47977 = 0;var state_48038__$1 = (function (){var statearr_48059 = state_48038;(statearr_48059[21] = inst_48013);
(statearr_48059[10] = inst_47976);
(statearr_48059[11] = inst_47977);
(statearr_48059[12] = inst_47975);
(statearr_48059[13] = inst_47974);
return statearr_48059;
})();var statearr_48060_48139 = state_48038__$1;(statearr_48060_48139[2] = null);
(statearr_48060_48139[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 8))
{var inst_47917 = (state_48038[15]);var inst_47918 = (state_48038[17]);var inst_47920 = (inst_47918 < inst_47917);var inst_47921 = inst_47920;var state_48038__$1 = state_48038;if(cljs.core.truth_(inst_47921))
{var statearr_48061_48140 = state_48038__$1;(statearr_48061_48140[1] = 10);
} else
{var statearr_48062_48141 = state_48038__$1;(statearr_48062_48141[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 40))
{var inst_48004 = (state_48038[18]);var inst_48005 = (state_48038[2]);var inst_48006 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48007 = cljs.core.async.untap_STAR_.call(null,m,inst_48004);var state_48038__$1 = (function (){var statearr_48063 = state_48038;(statearr_48063[22] = inst_48006);
(statearr_48063[23] = inst_48005);
return statearr_48063;
})();var statearr_48064_48142 = state_48038__$1;(statearr_48064_48142[2] = inst_48007);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48038__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 9))
{var inst_47963 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48065_48143 = state_48038__$1;(statearr_48065_48143[2] = inst_47963);
(statearr_48065_48143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 41))
{var inst_48004 = (state_48038[18]);var inst_47906 = (state_48038[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48038,40,Object,null,39);var inst_48011 = cljs.core.async.put_BANG_.call(null,inst_48004,inst_47906,done);var state_48038__$1 = state_48038;var statearr_48066_48144 = state_48038__$1;(statearr_48066_48144[2] = inst_48011);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48038__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 10))
{var inst_47916 = (state_48038[16]);var inst_47918 = (state_48038[17]);var inst_47924 = cljs.core._nth.call(null,inst_47916,inst_47918);var inst_47925 = cljs.core.nth.call(null,inst_47924,0,null);var inst_47926 = cljs.core.nth.call(null,inst_47924,1,null);var state_48038__$1 = (function (){var statearr_48067 = state_48038;(statearr_48067[24] = inst_47925);
return statearr_48067;
})();if(cljs.core.truth_(inst_47926))
{var statearr_48068_48145 = state_48038__$1;(statearr_48068_48145[1] = 13);
} else
{var statearr_48069_48146 = state_48038__$1;(statearr_48069_48146[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 42))
{var state_48038__$1 = state_48038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48038__$1,45,dchan);
} else
{if((state_val_48039 === 11))
{var inst_47935 = (state_48038[25]);var inst_47915 = (state_48038[14]);var inst_47935__$1 = cljs.core.seq.call(null,inst_47915);var state_48038__$1 = (function (){var statearr_48070 = state_48038;(statearr_48070[25] = inst_47935__$1);
return statearr_48070;
})();if(inst_47935__$1)
{var statearr_48071_48147 = state_48038__$1;(statearr_48071_48147[1] = 16);
} else
{var statearr_48072_48148 = state_48038__$1;(statearr_48072_48148[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 43))
{var state_48038__$1 = state_48038;var statearr_48073_48149 = state_48038__$1;(statearr_48073_48149[2] = null);
(statearr_48073_48149[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 12))
{var inst_47961 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48074_48150 = state_48038__$1;(statearr_48074_48150[2] = inst_47961);
(statearr_48074_48150[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 44))
{var inst_48031 = (state_48038[2]);var state_48038__$1 = (function (){var statearr_48075 = state_48038;(statearr_48075[26] = inst_48031);
return statearr_48075;
})();var statearr_48076_48151 = state_48038__$1;(statearr_48076_48151[2] = null);
(statearr_48076_48151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 13))
{var inst_47925 = (state_48038[24]);var inst_47928 = cljs.core.async.close_BANG_.call(null,inst_47925);var state_48038__$1 = state_48038;var statearr_48077_48152 = state_48038__$1;(statearr_48077_48152[2] = inst_47928);
(statearr_48077_48152[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 45))
{var inst_48028 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48081_48153 = state_48038__$1;(statearr_48081_48153[2] = inst_48028);
(statearr_48081_48153[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 14))
{var state_48038__$1 = state_48038;var statearr_48082_48154 = state_48038__$1;(statearr_48082_48154[2] = null);
(statearr_48082_48154[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 15))
{var inst_47915 = (state_48038[14]);var inst_47917 = (state_48038[15]);var inst_47916 = (state_48038[16]);var inst_47918 = (state_48038[17]);var inst_47931 = (state_48038[2]);var inst_47932 = (inst_47918 + 1);var tmp48078 = inst_47915;var tmp48079 = inst_47917;var tmp48080 = inst_47916;var inst_47915__$1 = tmp48078;var inst_47916__$1 = tmp48080;var inst_47917__$1 = tmp48079;var inst_47918__$1 = inst_47932;var state_48038__$1 = (function (){var statearr_48083 = state_48038;(statearr_48083[14] = inst_47915__$1);
(statearr_48083[15] = inst_47917__$1);
(statearr_48083[16] = inst_47916__$1);
(statearr_48083[27] = inst_47931);
(statearr_48083[17] = inst_47918__$1);
return statearr_48083;
})();var statearr_48084_48155 = state_48038__$1;(statearr_48084_48155[2] = null);
(statearr_48084_48155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 16))
{var inst_47935 = (state_48038[25]);var inst_47937 = cljs.core.chunked_seq_QMARK_.call(null,inst_47935);var state_48038__$1 = state_48038;if(inst_47937)
{var statearr_48085_48156 = state_48038__$1;(statearr_48085_48156[1] = 19);
} else
{var statearr_48086_48157 = state_48038__$1;(statearr_48086_48157[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 17))
{var state_48038__$1 = state_48038;var statearr_48087_48158 = state_48038__$1;(statearr_48087_48158[2] = null);
(statearr_48087_48158[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 18))
{var inst_47959 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48088_48159 = state_48038__$1;(statearr_48088_48159[2] = inst_47959);
(statearr_48088_48159[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 19))
{var inst_47935 = (state_48038[25]);var inst_47939 = cljs.core.chunk_first.call(null,inst_47935);var inst_47940 = cljs.core.chunk_rest.call(null,inst_47935);var inst_47941 = cljs.core.count.call(null,inst_47939);var inst_47915 = inst_47940;var inst_47916 = inst_47939;var inst_47917 = inst_47941;var inst_47918 = 0;var state_48038__$1 = (function (){var statearr_48089 = state_48038;(statearr_48089[14] = inst_47915);
(statearr_48089[15] = inst_47917);
(statearr_48089[16] = inst_47916);
(statearr_48089[17] = inst_47918);
return statearr_48089;
})();var statearr_48090_48160 = state_48038__$1;(statearr_48090_48160[2] = null);
(statearr_48090_48160[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 20))
{var inst_47935 = (state_48038[25]);var inst_47945 = cljs.core.first.call(null,inst_47935);var inst_47946 = cljs.core.nth.call(null,inst_47945,0,null);var inst_47947 = cljs.core.nth.call(null,inst_47945,1,null);var state_48038__$1 = (function (){var statearr_48091 = state_48038;(statearr_48091[28] = inst_47946);
return statearr_48091;
})();if(cljs.core.truth_(inst_47947))
{var statearr_48092_48161 = state_48038__$1;(statearr_48092_48161[1] = 22);
} else
{var statearr_48093_48162 = state_48038__$1;(statearr_48093_48162[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 21))
{var inst_47956 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48094_48163 = state_48038__$1;(statearr_48094_48163[2] = inst_47956);
(statearr_48094_48163[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 22))
{var inst_47946 = (state_48038[28]);var inst_47949 = cljs.core.async.close_BANG_.call(null,inst_47946);var state_48038__$1 = state_48038;var statearr_48095_48164 = state_48038__$1;(statearr_48095_48164[2] = inst_47949);
(statearr_48095_48164[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 23))
{var state_48038__$1 = state_48038;var statearr_48096_48165 = state_48038__$1;(statearr_48096_48165[2] = null);
(statearr_48096_48165[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 24))
{var inst_47935 = (state_48038[25]);var inst_47952 = (state_48038[2]);var inst_47953 = cljs.core.next.call(null,inst_47935);var inst_47915 = inst_47953;var inst_47916 = null;var inst_47917 = 0;var inst_47918 = 0;var state_48038__$1 = (function (){var statearr_48097 = state_48038;(statearr_48097[29] = inst_47952);
(statearr_48097[14] = inst_47915);
(statearr_48097[15] = inst_47917);
(statearr_48097[16] = inst_47916);
(statearr_48097[17] = inst_47918);
return statearr_48097;
})();var statearr_48098_48166 = state_48038__$1;(statearr_48098_48166[2] = null);
(statearr_48098_48166[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 25))
{var inst_47976 = (state_48038[10]);var inst_47977 = (state_48038[11]);var inst_47979 = (inst_47977 < inst_47976);var inst_47980 = inst_47979;var state_48038__$1 = state_48038;if(cljs.core.truth_(inst_47980))
{var statearr_48099_48167 = state_48038__$1;(statearr_48099_48167[1] = 27);
} else
{var statearr_48100_48168 = state_48038__$1;(statearr_48100_48168[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 26))
{var inst_47966 = (state_48038[19]);var inst_48024 = (state_48038[2]);var inst_48025 = cljs.core.seq.call(null,inst_47966);var state_48038__$1 = (function (){var statearr_48101 = state_48038;(statearr_48101[30] = inst_48024);
return statearr_48101;
})();if(inst_48025)
{var statearr_48102_48169 = state_48038__$1;(statearr_48102_48169[1] = 42);
} else
{var statearr_48103_48170 = state_48038__$1;(statearr_48103_48170[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 27))
{var inst_47977 = (state_48038[11]);var inst_47975 = (state_48038[12]);var inst_47982 = cljs.core._nth.call(null,inst_47975,inst_47977);var state_48038__$1 = (function (){var statearr_48104 = state_48038;(statearr_48104[8] = inst_47982);
return statearr_48104;
})();var statearr_48105_48171 = state_48038__$1;(statearr_48105_48171[2] = null);
(statearr_48105_48171[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 28))
{var inst_47995 = (state_48038[9]);var inst_47974 = (state_48038[13]);var inst_47995__$1 = cljs.core.seq.call(null,inst_47974);var state_48038__$1 = (function (){var statearr_48109 = state_48038;(statearr_48109[9] = inst_47995__$1);
return statearr_48109;
})();if(inst_47995__$1)
{var statearr_48110_48172 = state_48038__$1;(statearr_48110_48172[1] = 33);
} else
{var statearr_48111_48173 = state_48038__$1;(statearr_48111_48173[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 29))
{var inst_48022 = (state_48038[2]);var state_48038__$1 = state_48038;var statearr_48112_48174 = state_48038__$1;(statearr_48112_48174[2] = inst_48022);
(statearr_48112_48174[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 30))
{var inst_47976 = (state_48038[10]);var inst_47977 = (state_48038[11]);var inst_47975 = (state_48038[12]);var inst_47974 = (state_48038[13]);var inst_47991 = (state_48038[2]);var inst_47992 = (inst_47977 + 1);var tmp48106 = inst_47976;var tmp48107 = inst_47975;var tmp48108 = inst_47974;var inst_47974__$1 = tmp48108;var inst_47975__$1 = tmp48107;var inst_47976__$1 = tmp48106;var inst_47977__$1 = inst_47992;var state_48038__$1 = (function (){var statearr_48113 = state_48038;(statearr_48113[31] = inst_47991);
(statearr_48113[10] = inst_47976__$1);
(statearr_48113[11] = inst_47977__$1);
(statearr_48113[12] = inst_47975__$1);
(statearr_48113[13] = inst_47974__$1);
return statearr_48113;
})();var statearr_48114_48175 = state_48038__$1;(statearr_48114_48175[2] = null);
(statearr_48114_48175[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48039 === 31))
{var inst_47982 = (state_48038[8]);var inst_47983 = (state_48038[2]);var inst_47984 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_47985 = cljs.core.async.untap_STAR_.call(null,m,inst_47982);var state_48038__$1 = (function (){var statearr_48115 = state_48038;(statearr_48115[32] = inst_47984);
(statearr_48115[33] = inst_47983);
return statearr_48115;
})();var statearr_48116_48176 = state_48038__$1;(statearr_48116_48176[2] = inst_47985);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48038__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_48120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48120[0] = state_machine__5548__auto__);
(statearr_48120[1] = 1);
return statearr_48120;
});
var state_machine__5548__auto____1 = (function (state_48038){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48038);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48121){if((e48121 instanceof Object))
{var ex__5551__auto__ = e48121;var statearr_48122_48177 = state_48038;(statearr_48122_48177[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48178 = state_48038;
state_48038 = G__48178;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48038){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48123 = f__5563__auto__.call(null);(statearr_48123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48124);
return statearr_48123;
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
cljs.core.async.Mix = (function (){var obj48180 = {};return obj48180;
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
;var m = (function (){if(typeof cljs.core.async.t48290 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48290 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta48291){
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
this.meta48291 = meta48291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48290.cljs$lang$type = true;
cljs.core.async.t48290.cljs$lang$ctorStr = "cljs.core.async/t48290";
cljs.core.async.t48290.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48290");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48290.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48292){var self__ = this;
var _48292__$1 = this;return self__.meta48291;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48292,meta48291__$1){var self__ = this;
var _48292__$1 = this;return (new cljs.core.async.t48290(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta48291__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48290 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48290(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48291){return (new cljs.core.async.t48290(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48291));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48290(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___48399 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48357){var state_val_48358 = (state_48357[1]);if((state_val_48358 === 1))
{var inst_48296 = (state_48357[7]);var inst_48296__$1 = calc_state.call(null);var inst_48297 = cljs.core.seq_QMARK_.call(null,inst_48296__$1);var state_48357__$1 = (function (){var statearr_48359 = state_48357;(statearr_48359[7] = inst_48296__$1);
return statearr_48359;
})();if(inst_48297)
{var statearr_48360_48400 = state_48357__$1;(statearr_48360_48400[1] = 2);
} else
{var statearr_48361_48401 = state_48357__$1;(statearr_48361_48401[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 2))
{var inst_48296 = (state_48357[7]);var inst_48299 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48296);var state_48357__$1 = state_48357;var statearr_48362_48402 = state_48357__$1;(statearr_48362_48402[2] = inst_48299);
(statearr_48362_48402[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 3))
{var inst_48296 = (state_48357[7]);var state_48357__$1 = state_48357;var statearr_48363_48403 = state_48357__$1;(statearr_48363_48403[2] = inst_48296);
(statearr_48363_48403[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 4))
{var inst_48296 = (state_48357[7]);var inst_48302 = (state_48357[2]);var inst_48303 = cljs.core.get.call(null,inst_48302,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48304 = cljs.core.get.call(null,inst_48302,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48305 = cljs.core.get.call(null,inst_48302,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48306 = inst_48296;var state_48357__$1 = (function (){var statearr_48364 = state_48357;(statearr_48364[8] = inst_48306);
(statearr_48364[9] = inst_48305);
(statearr_48364[10] = inst_48304);
(statearr_48364[11] = inst_48303);
return statearr_48364;
})();var statearr_48365_48404 = state_48357__$1;(statearr_48365_48404[2] = null);
(statearr_48365_48404[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 5))
{var inst_48306 = (state_48357[8]);var inst_48309 = cljs.core.seq_QMARK_.call(null,inst_48306);var state_48357__$1 = state_48357;if(inst_48309)
{var statearr_48366_48405 = state_48357__$1;(statearr_48366_48405[1] = 7);
} else
{var statearr_48367_48406 = state_48357__$1;(statearr_48367_48406[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 6))
{var inst_48355 = (state_48357[2]);var state_48357__$1 = state_48357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48357__$1,inst_48355);
} else
{if((state_val_48358 === 7))
{var inst_48306 = (state_48357[8]);var inst_48311 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48306);var state_48357__$1 = state_48357;var statearr_48368_48407 = state_48357__$1;(statearr_48368_48407[2] = inst_48311);
(statearr_48368_48407[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 8))
{var inst_48306 = (state_48357[8]);var state_48357__$1 = state_48357;var statearr_48369_48408 = state_48357__$1;(statearr_48369_48408[2] = inst_48306);
(statearr_48369_48408[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 9))
{var inst_48314 = (state_48357[12]);var inst_48314__$1 = (state_48357[2]);var inst_48315 = cljs.core.get.call(null,inst_48314__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48316 = cljs.core.get.call(null,inst_48314__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48317 = cljs.core.get.call(null,inst_48314__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_48357__$1 = (function (){var statearr_48370 = state_48357;(statearr_48370[13] = inst_48317);
(statearr_48370[14] = inst_48316);
(statearr_48370[12] = inst_48314__$1);
return statearr_48370;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48357__$1,10,inst_48315);
} else
{if((state_val_48358 === 10))
{var inst_48322 = (state_48357[15]);var inst_48321 = (state_48357[16]);var inst_48320 = (state_48357[2]);var inst_48321__$1 = cljs.core.nth.call(null,inst_48320,0,null);var inst_48322__$1 = cljs.core.nth.call(null,inst_48320,1,null);var inst_48323 = (inst_48321__$1 == null);var inst_48324 = cljs.core._EQ_.call(null,inst_48322__$1,change);var inst_48325 = (inst_48323) || (inst_48324);var state_48357__$1 = (function (){var statearr_48371 = state_48357;(statearr_48371[15] = inst_48322__$1);
(statearr_48371[16] = inst_48321__$1);
return statearr_48371;
})();if(cljs.core.truth_(inst_48325))
{var statearr_48372_48409 = state_48357__$1;(statearr_48372_48409[1] = 11);
} else
{var statearr_48373_48410 = state_48357__$1;(statearr_48373_48410[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 11))
{var inst_48321 = (state_48357[16]);var inst_48327 = (inst_48321 == null);var state_48357__$1 = state_48357;if(cljs.core.truth_(inst_48327))
{var statearr_48374_48411 = state_48357__$1;(statearr_48374_48411[1] = 14);
} else
{var statearr_48375_48412 = state_48357__$1;(statearr_48375_48412[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 12))
{var inst_48322 = (state_48357[15]);var inst_48336 = (state_48357[17]);var inst_48317 = (state_48357[13]);var inst_48336__$1 = inst_48317.call(null,inst_48322);var state_48357__$1 = (function (){var statearr_48376 = state_48357;(statearr_48376[17] = inst_48336__$1);
return statearr_48376;
})();if(cljs.core.truth_(inst_48336__$1))
{var statearr_48377_48413 = state_48357__$1;(statearr_48377_48413[1] = 17);
} else
{var statearr_48378_48414 = state_48357__$1;(statearr_48378_48414[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 13))
{var inst_48353 = (state_48357[2]);var state_48357__$1 = state_48357;var statearr_48379_48415 = state_48357__$1;(statearr_48379_48415[2] = inst_48353);
(statearr_48379_48415[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 14))
{var inst_48322 = (state_48357[15]);var inst_48329 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48322);var state_48357__$1 = state_48357;var statearr_48380_48416 = state_48357__$1;(statearr_48380_48416[2] = inst_48329);
(statearr_48380_48416[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 15))
{var state_48357__$1 = state_48357;var statearr_48381_48417 = state_48357__$1;(statearr_48381_48417[2] = null);
(statearr_48381_48417[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 16))
{var inst_48332 = (state_48357[2]);var inst_48333 = calc_state.call(null);var inst_48306 = inst_48333;var state_48357__$1 = (function (){var statearr_48382 = state_48357;(statearr_48382[18] = inst_48332);
(statearr_48382[8] = inst_48306);
return statearr_48382;
})();var statearr_48383_48418 = state_48357__$1;(statearr_48383_48418[2] = null);
(statearr_48383_48418[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 17))
{var inst_48336 = (state_48357[17]);var state_48357__$1 = state_48357;var statearr_48384_48419 = state_48357__$1;(statearr_48384_48419[2] = inst_48336);
(statearr_48384_48419[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 18))
{var inst_48322 = (state_48357[15]);var inst_48317 = (state_48357[13]);var inst_48316 = (state_48357[14]);var inst_48339 = cljs.core.empty_QMARK_.call(null,inst_48317);var inst_48340 = inst_48316.call(null,inst_48322);var inst_48341 = cljs.core.not.call(null,inst_48340);var inst_48342 = (inst_48339) && (inst_48341);var state_48357__$1 = state_48357;var statearr_48385_48420 = state_48357__$1;(statearr_48385_48420[2] = inst_48342);
(statearr_48385_48420[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 19))
{var inst_48344 = (state_48357[2]);var state_48357__$1 = state_48357;if(cljs.core.truth_(inst_48344))
{var statearr_48386_48421 = state_48357__$1;(statearr_48386_48421[1] = 20);
} else
{var statearr_48387_48422 = state_48357__$1;(statearr_48387_48422[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 20))
{var inst_48321 = (state_48357[16]);var state_48357__$1 = state_48357;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48357__$1,23,out,inst_48321);
} else
{if((state_val_48358 === 21))
{var state_48357__$1 = state_48357;var statearr_48388_48423 = state_48357__$1;(statearr_48388_48423[2] = null);
(statearr_48388_48423[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 22))
{var inst_48314 = (state_48357[12]);var inst_48350 = (state_48357[2]);var inst_48306 = inst_48314;var state_48357__$1 = (function (){var statearr_48389 = state_48357;(statearr_48389[8] = inst_48306);
(statearr_48389[19] = inst_48350);
return statearr_48389;
})();var statearr_48390_48424 = state_48357__$1;(statearr_48390_48424[2] = null);
(statearr_48390_48424[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48358 === 23))
{var inst_48347 = (state_48357[2]);var state_48357__$1 = state_48357;var statearr_48391_48425 = state_48357__$1;(statearr_48391_48425[2] = inst_48347);
(statearr_48391_48425[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_48395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48395[0] = state_machine__5548__auto__);
(statearr_48395[1] = 1);
return statearr_48395;
});
var state_machine__5548__auto____1 = (function (state_48357){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48357);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48396){if((e48396 instanceof Object))
{var ex__5551__auto__ = e48396;var statearr_48397_48426 = state_48357;(statearr_48397_48426[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48357);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48427 = state_48357;
state_48357 = G__48427;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48357){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48398 = f__5563__auto__.call(null);(statearr_48398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48399);
return statearr_48398;
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
cljs.core.async.Pub = (function (){var obj48429 = {};return obj48429;
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
return (function (p1__48430_SHARP_){if(cljs.core.truth_(p1__48430_SHARP_.call(null,topic)))
{return p1__48430_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__48430_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t48555 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48555 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta48556){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta48556 = meta48556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48555.cljs$lang$type = true;
cljs.core.async.t48555.cljs$lang$ctorStr = "cljs.core.async/t48555";
cljs.core.async.t48555.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48555");
});})(mults,ensure_mult))
;
cljs.core.async.t48555.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t48555.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t48555.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t48555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t48555.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t48555.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t48555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48557){var self__ = this;
var _48557__$1 = this;return self__.meta48556;
});})(mults,ensure_mult))
;
cljs.core.async.t48555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48557,meta48556__$1){var self__ = this;
var _48557__$1 = this;return (new cljs.core.async.t48555(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta48556__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t48555 = ((function (mults,ensure_mult){
return (function __GT_t48555(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48556){return (new cljs.core.async.t48555(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48556));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t48555(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___48679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48631){var state_val_48632 = (state_48631[1]);if((state_val_48632 === 1))
{var state_48631__$1 = state_48631;var statearr_48633_48680 = state_48631__$1;(statearr_48633_48680[2] = null);
(statearr_48633_48680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 2))
{var state_48631__$1 = state_48631;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48631__$1,4,ch);
} else
{if((state_val_48632 === 3))
{var inst_48629 = (state_48631[2]);var state_48631__$1 = state_48631;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48631__$1,inst_48629);
} else
{if((state_val_48632 === 4))
{var inst_48560 = (state_48631[7]);var inst_48560__$1 = (state_48631[2]);var inst_48561 = (inst_48560__$1 == null);var state_48631__$1 = (function (){var statearr_48634 = state_48631;(statearr_48634[7] = inst_48560__$1);
return statearr_48634;
})();if(cljs.core.truth_(inst_48561))
{var statearr_48635_48681 = state_48631__$1;(statearr_48635_48681[1] = 5);
} else
{var statearr_48636_48682 = state_48631__$1;(statearr_48636_48682[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 5))
{var inst_48567 = cljs.core.deref.call(null,mults);var inst_48568 = cljs.core.vals.call(null,inst_48567);var inst_48569 = cljs.core.seq.call(null,inst_48568);var inst_48570 = inst_48569;var inst_48571 = null;var inst_48572 = 0;var inst_48573 = 0;var state_48631__$1 = (function (){var statearr_48637 = state_48631;(statearr_48637[8] = inst_48573);
(statearr_48637[9] = inst_48570);
(statearr_48637[10] = inst_48572);
(statearr_48637[11] = inst_48571);
return statearr_48637;
})();var statearr_48638_48683 = state_48631__$1;(statearr_48638_48683[2] = null);
(statearr_48638_48683[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 6))
{var inst_48610 = (state_48631[12]);var inst_48560 = (state_48631[7]);var inst_48608 = (state_48631[13]);var inst_48608__$1 = topic_fn.call(null,inst_48560);var inst_48609 = cljs.core.deref.call(null,mults);var inst_48610__$1 = cljs.core.get.call(null,inst_48609,inst_48608__$1);var state_48631__$1 = (function (){var statearr_48639 = state_48631;(statearr_48639[12] = inst_48610__$1);
(statearr_48639[13] = inst_48608__$1);
return statearr_48639;
})();if(cljs.core.truth_(inst_48610__$1))
{var statearr_48640_48684 = state_48631__$1;(statearr_48640_48684[1] = 19);
} else
{var statearr_48641_48685 = state_48631__$1;(statearr_48641_48685[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 7))
{var inst_48627 = (state_48631[2]);var state_48631__$1 = state_48631;var statearr_48642_48686 = state_48631__$1;(statearr_48642_48686[2] = inst_48627);
(statearr_48642_48686[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 8))
{var inst_48573 = (state_48631[8]);var inst_48572 = (state_48631[10]);var inst_48575 = (inst_48573 < inst_48572);var inst_48576 = inst_48575;var state_48631__$1 = state_48631;if(cljs.core.truth_(inst_48576))
{var statearr_48646_48687 = state_48631__$1;(statearr_48646_48687[1] = 10);
} else
{var statearr_48647_48688 = state_48631__$1;(statearr_48647_48688[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 9))
{var inst_48606 = (state_48631[2]);var state_48631__$1 = state_48631;var statearr_48648_48689 = state_48631__$1;(statearr_48648_48689[2] = inst_48606);
(statearr_48648_48689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 10))
{var inst_48573 = (state_48631[8]);var inst_48570 = (state_48631[9]);var inst_48572 = (state_48631[10]);var inst_48571 = (state_48631[11]);var inst_48578 = cljs.core._nth.call(null,inst_48571,inst_48573);var inst_48579 = cljs.core.async.muxch_STAR_.call(null,inst_48578);var inst_48580 = cljs.core.async.close_BANG_.call(null,inst_48579);var inst_48581 = (inst_48573 + 1);var tmp48643 = inst_48570;var tmp48644 = inst_48572;var tmp48645 = inst_48571;var inst_48570__$1 = tmp48643;var inst_48571__$1 = tmp48645;var inst_48572__$1 = tmp48644;var inst_48573__$1 = inst_48581;var state_48631__$1 = (function (){var statearr_48649 = state_48631;(statearr_48649[8] = inst_48573__$1);
(statearr_48649[9] = inst_48570__$1);
(statearr_48649[10] = inst_48572__$1);
(statearr_48649[11] = inst_48571__$1);
(statearr_48649[14] = inst_48580);
return statearr_48649;
})();var statearr_48650_48690 = state_48631__$1;(statearr_48650_48690[2] = null);
(statearr_48650_48690[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 11))
{var inst_48570 = (state_48631[9]);var inst_48584 = (state_48631[15]);var inst_48584__$1 = cljs.core.seq.call(null,inst_48570);var state_48631__$1 = (function (){var statearr_48651 = state_48631;(statearr_48651[15] = inst_48584__$1);
return statearr_48651;
})();if(inst_48584__$1)
{var statearr_48652_48691 = state_48631__$1;(statearr_48652_48691[1] = 13);
} else
{var statearr_48653_48692 = state_48631__$1;(statearr_48653_48692[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 12))
{var inst_48604 = (state_48631[2]);var state_48631__$1 = state_48631;var statearr_48654_48693 = state_48631__$1;(statearr_48654_48693[2] = inst_48604);
(statearr_48654_48693[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 13))
{var inst_48584 = (state_48631[15]);var inst_48586 = cljs.core.chunked_seq_QMARK_.call(null,inst_48584);var state_48631__$1 = state_48631;if(inst_48586)
{var statearr_48655_48694 = state_48631__$1;(statearr_48655_48694[1] = 16);
} else
{var statearr_48656_48695 = state_48631__$1;(statearr_48656_48695[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 14))
{var state_48631__$1 = state_48631;var statearr_48657_48696 = state_48631__$1;(statearr_48657_48696[2] = null);
(statearr_48657_48696[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 15))
{var inst_48602 = (state_48631[2]);var state_48631__$1 = state_48631;var statearr_48658_48697 = state_48631__$1;(statearr_48658_48697[2] = inst_48602);
(statearr_48658_48697[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 16))
{var inst_48584 = (state_48631[15]);var inst_48588 = cljs.core.chunk_first.call(null,inst_48584);var inst_48589 = cljs.core.chunk_rest.call(null,inst_48584);var inst_48590 = cljs.core.count.call(null,inst_48588);var inst_48570 = inst_48589;var inst_48571 = inst_48588;var inst_48572 = inst_48590;var inst_48573 = 0;var state_48631__$1 = (function (){var statearr_48659 = state_48631;(statearr_48659[8] = inst_48573);
(statearr_48659[9] = inst_48570);
(statearr_48659[10] = inst_48572);
(statearr_48659[11] = inst_48571);
return statearr_48659;
})();var statearr_48660_48698 = state_48631__$1;(statearr_48660_48698[2] = null);
(statearr_48660_48698[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 17))
{var inst_48584 = (state_48631[15]);var inst_48593 = cljs.core.first.call(null,inst_48584);var inst_48594 = cljs.core.async.muxch_STAR_.call(null,inst_48593);var inst_48595 = cljs.core.async.close_BANG_.call(null,inst_48594);var inst_48596 = cljs.core.next.call(null,inst_48584);var inst_48570 = inst_48596;var inst_48571 = null;var inst_48572 = 0;var inst_48573 = 0;var state_48631__$1 = (function (){var statearr_48661 = state_48631;(statearr_48661[8] = inst_48573);
(statearr_48661[9] = inst_48570);
(statearr_48661[10] = inst_48572);
(statearr_48661[11] = inst_48571);
(statearr_48661[16] = inst_48595);
return statearr_48661;
})();var statearr_48662_48699 = state_48631__$1;(statearr_48662_48699[2] = null);
(statearr_48662_48699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 18))
{var inst_48599 = (state_48631[2]);var state_48631__$1 = state_48631;var statearr_48663_48700 = state_48631__$1;(statearr_48663_48700[2] = inst_48599);
(statearr_48663_48700[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 19))
{var state_48631__$1 = state_48631;var statearr_48664_48701 = state_48631__$1;(statearr_48664_48701[2] = null);
(statearr_48664_48701[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 20))
{var state_48631__$1 = state_48631;var statearr_48665_48702 = state_48631__$1;(statearr_48665_48702[2] = null);
(statearr_48665_48702[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 21))
{var inst_48624 = (state_48631[2]);var state_48631__$1 = (function (){var statearr_48666 = state_48631;(statearr_48666[17] = inst_48624);
return statearr_48666;
})();var statearr_48667_48703 = state_48631__$1;(statearr_48667_48703[2] = null);
(statearr_48667_48703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 22))
{var inst_48621 = (state_48631[2]);var state_48631__$1 = state_48631;var statearr_48668_48704 = state_48631__$1;(statearr_48668_48704[2] = inst_48621);
(statearr_48668_48704[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 23))
{var inst_48608 = (state_48631[13]);var inst_48612 = (state_48631[2]);var inst_48613 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48608);var state_48631__$1 = (function (){var statearr_48669 = state_48631;(statearr_48669[18] = inst_48612);
return statearr_48669;
})();var statearr_48670_48705 = state_48631__$1;(statearr_48670_48705[2] = inst_48613);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48631__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48632 === 24))
{var inst_48610 = (state_48631[12]);var inst_48560 = (state_48631[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48631,23,Object,null,22);var inst_48617 = cljs.core.async.muxch_STAR_.call(null,inst_48610);var state_48631__$1 = state_48631;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48631__$1,25,inst_48617,inst_48560);
} else
{if((state_val_48632 === 25))
{var inst_48619 = (state_48631[2]);var state_48631__$1 = state_48631;var statearr_48671_48706 = state_48631__$1;(statearr_48671_48706[2] = inst_48619);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48631__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_48675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48675[0] = state_machine__5548__auto__);
(statearr_48675[1] = 1);
return statearr_48675;
});
var state_machine__5548__auto____1 = (function (state_48631){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48631);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48676){if((e48676 instanceof Object))
{var ex__5551__auto__ = e48676;var statearr_48677_48707 = state_48631;(statearr_48677_48707[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48631);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48708 = state_48631;
state_48631 = G__48708;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48631){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48678 = f__5563__auto__.call(null);(statearr_48678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48679);
return statearr_48678;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___48845 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48815){var state_val_48816 = (state_48815[1]);if((state_val_48816 === 1))
{var state_48815__$1 = state_48815;var statearr_48817_48846 = state_48815__$1;(statearr_48817_48846[2] = null);
(statearr_48817_48846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 2))
{var inst_48778 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_48779 = 0;var state_48815__$1 = (function (){var statearr_48818 = state_48815;(statearr_48818[7] = inst_48778);
(statearr_48818[8] = inst_48779);
return statearr_48818;
})();var statearr_48819_48847 = state_48815__$1;(statearr_48819_48847[2] = null);
(statearr_48819_48847[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 3))
{var inst_48813 = (state_48815[2]);var state_48815__$1 = state_48815;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48815__$1,inst_48813);
} else
{if((state_val_48816 === 4))
{var inst_48779 = (state_48815[8]);var inst_48781 = (inst_48779 < cnt);var state_48815__$1 = state_48815;if(cljs.core.truth_(inst_48781))
{var statearr_48820_48848 = state_48815__$1;(statearr_48820_48848[1] = 6);
} else
{var statearr_48821_48849 = state_48815__$1;(statearr_48821_48849[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 5))
{var inst_48799 = (state_48815[2]);var state_48815__$1 = (function (){var statearr_48822 = state_48815;(statearr_48822[9] = inst_48799);
return statearr_48822;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48815__$1,12,dchan);
} else
{if((state_val_48816 === 6))
{var state_48815__$1 = state_48815;var statearr_48823_48850 = state_48815__$1;(statearr_48823_48850[2] = null);
(statearr_48823_48850[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 7))
{var state_48815__$1 = state_48815;var statearr_48824_48851 = state_48815__$1;(statearr_48824_48851[2] = null);
(statearr_48824_48851[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 8))
{var inst_48797 = (state_48815[2]);var state_48815__$1 = state_48815;var statearr_48825_48852 = state_48815__$1;(statearr_48825_48852[2] = inst_48797);
(statearr_48825_48852[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 9))
{var inst_48779 = (state_48815[8]);var inst_48792 = (state_48815[2]);var inst_48793 = (inst_48779 + 1);var inst_48779__$1 = inst_48793;var state_48815__$1 = (function (){var statearr_48826 = state_48815;(statearr_48826[8] = inst_48779__$1);
(statearr_48826[10] = inst_48792);
return statearr_48826;
})();var statearr_48827_48853 = state_48815__$1;(statearr_48827_48853[2] = null);
(statearr_48827_48853[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 10))
{var inst_48783 = (state_48815[2]);var inst_48784 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_48815__$1 = (function (){var statearr_48828 = state_48815;(statearr_48828[11] = inst_48783);
return statearr_48828;
})();var statearr_48829_48854 = state_48815__$1;(statearr_48829_48854[2] = inst_48784);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48815__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 11))
{var inst_48779 = (state_48815[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48815,10,Object,null,9);var inst_48788 = chs__$1.call(null,inst_48779);var inst_48789 = done.call(null,inst_48779);var inst_48790 = cljs.core.async.take_BANG_.call(null,inst_48788,inst_48789);var state_48815__$1 = state_48815;var statearr_48830_48855 = state_48815__$1;(statearr_48830_48855[2] = inst_48790);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48815__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 12))
{var inst_48801 = (state_48815[12]);var inst_48801__$1 = (state_48815[2]);var inst_48802 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48801__$1);var state_48815__$1 = (function (){var statearr_48831 = state_48815;(statearr_48831[12] = inst_48801__$1);
return statearr_48831;
})();if(cljs.core.truth_(inst_48802))
{var statearr_48832_48856 = state_48815__$1;(statearr_48832_48856[1] = 13);
} else
{var statearr_48833_48857 = state_48815__$1;(statearr_48833_48857[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 13))
{var inst_48804 = cljs.core.async.close_BANG_.call(null,out);var state_48815__$1 = state_48815;var statearr_48834_48858 = state_48815__$1;(statearr_48834_48858[2] = inst_48804);
(statearr_48834_48858[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 14))
{var inst_48801 = (state_48815[12]);var inst_48806 = cljs.core.apply.call(null,f,inst_48801);var state_48815__$1 = state_48815;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48815__$1,16,out,inst_48806);
} else
{if((state_val_48816 === 15))
{var inst_48811 = (state_48815[2]);var state_48815__$1 = state_48815;var statearr_48835_48859 = state_48815__$1;(statearr_48835_48859[2] = inst_48811);
(statearr_48835_48859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48816 === 16))
{var inst_48808 = (state_48815[2]);var state_48815__$1 = (function (){var statearr_48836 = state_48815;(statearr_48836[13] = inst_48808);
return statearr_48836;
})();var statearr_48837_48860 = state_48815__$1;(statearr_48837_48860[2] = null);
(statearr_48837_48860[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_48841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48841[0] = state_machine__5548__auto__);
(statearr_48841[1] = 1);
return statearr_48841;
});
var state_machine__5548__auto____1 = (function (state_48815){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48815);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48842){if((e48842 instanceof Object))
{var ex__5551__auto__ = e48842;var statearr_48843_48861 = state_48815;(statearr_48843_48861[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48815);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48842;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48862 = state_48815;
state_48815 = G__48862;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48815){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48844 = f__5563__auto__.call(null);(statearr_48844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48845);
return statearr_48844;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___48970 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48946){var state_val_48947 = (state_48946[1]);if((state_val_48947 === 1))
{var inst_48917 = cljs.core.vec.call(null,chs);var inst_48918 = inst_48917;var state_48946__$1 = (function (){var statearr_48948 = state_48946;(statearr_48948[7] = inst_48918);
return statearr_48948;
})();var statearr_48949_48971 = state_48946__$1;(statearr_48949_48971[2] = null);
(statearr_48949_48971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48947 === 2))
{var inst_48918 = (state_48946[7]);var inst_48920 = cljs.core.count.call(null,inst_48918);var inst_48921 = (inst_48920 > 0);var state_48946__$1 = state_48946;if(cljs.core.truth_(inst_48921))
{var statearr_48950_48972 = state_48946__$1;(statearr_48950_48972[1] = 4);
} else
{var statearr_48951_48973 = state_48946__$1;(statearr_48951_48973[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48947 === 3))
{var inst_48944 = (state_48946[2]);var state_48946__$1 = state_48946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48946__$1,inst_48944);
} else
{if((state_val_48947 === 4))
{var inst_48918 = (state_48946[7]);var state_48946__$1 = state_48946;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48946__$1,7,inst_48918);
} else
{if((state_val_48947 === 5))
{var inst_48940 = cljs.core.async.close_BANG_.call(null,out);var state_48946__$1 = state_48946;var statearr_48952_48974 = state_48946__$1;(statearr_48952_48974[2] = inst_48940);
(statearr_48952_48974[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48947 === 6))
{var inst_48942 = (state_48946[2]);var state_48946__$1 = state_48946;var statearr_48953_48975 = state_48946__$1;(statearr_48953_48975[2] = inst_48942);
(statearr_48953_48975[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48947 === 7))
{var inst_48925 = (state_48946[8]);var inst_48926 = (state_48946[9]);var inst_48925__$1 = (state_48946[2]);var inst_48926__$1 = cljs.core.nth.call(null,inst_48925__$1,0,null);var inst_48927 = cljs.core.nth.call(null,inst_48925__$1,1,null);var inst_48928 = (inst_48926__$1 == null);var state_48946__$1 = (function (){var statearr_48954 = state_48946;(statearr_48954[8] = inst_48925__$1);
(statearr_48954[10] = inst_48927);
(statearr_48954[9] = inst_48926__$1);
return statearr_48954;
})();if(cljs.core.truth_(inst_48928))
{var statearr_48955_48976 = state_48946__$1;(statearr_48955_48976[1] = 8);
} else
{var statearr_48956_48977 = state_48946__$1;(statearr_48956_48977[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48947 === 8))
{var inst_48925 = (state_48946[8]);var inst_48918 = (state_48946[7]);var inst_48927 = (state_48946[10]);var inst_48926 = (state_48946[9]);var inst_48930 = (function (){var c = inst_48927;var v = inst_48926;var vec__48923 = inst_48925;var cs = inst_48918;return ((function (c,v,vec__48923,cs,inst_48925,inst_48918,inst_48927,inst_48926,state_val_48947){
return (function (p1__48863_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__48863_SHARP_);
});
;})(c,v,vec__48923,cs,inst_48925,inst_48918,inst_48927,inst_48926,state_val_48947))
})();var inst_48931 = cljs.core.filterv.call(null,inst_48930,inst_48918);var inst_48918__$1 = inst_48931;var state_48946__$1 = (function (){var statearr_48957 = state_48946;(statearr_48957[7] = inst_48918__$1);
return statearr_48957;
})();var statearr_48958_48978 = state_48946__$1;(statearr_48958_48978[2] = null);
(statearr_48958_48978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48947 === 9))
{var inst_48926 = (state_48946[9]);var state_48946__$1 = state_48946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48946__$1,11,out,inst_48926);
} else
{if((state_val_48947 === 10))
{var inst_48938 = (state_48946[2]);var state_48946__$1 = state_48946;var statearr_48960_48979 = state_48946__$1;(statearr_48960_48979[2] = inst_48938);
(statearr_48960_48979[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48947 === 11))
{var inst_48918 = (state_48946[7]);var inst_48935 = (state_48946[2]);var tmp48959 = inst_48918;var inst_48918__$1 = tmp48959;var state_48946__$1 = (function (){var statearr_48961 = state_48946;(statearr_48961[7] = inst_48918__$1);
(statearr_48961[11] = inst_48935);
return statearr_48961;
})();var statearr_48962_48980 = state_48946__$1;(statearr_48962_48980[2] = null);
(statearr_48962_48980[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_48966 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48966[0] = state_machine__5548__auto__);
(statearr_48966[1] = 1);
return statearr_48966;
});
var state_machine__5548__auto____1 = (function (state_48946){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48967){if((e48967 instanceof Object))
{var ex__5551__auto__ = e48967;var statearr_48968_48981 = state_48946;(statearr_48968_48981[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48967;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48982 = state_48946;
state_48946 = G__48982;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48946){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48969 = f__5563__auto__.call(null);(statearr_48969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48970);
return statearr_48969;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49052){var state_val_49053 = (state_49052[1]);if((state_val_49053 === 1))
{var inst_49029 = 0;var state_49052__$1 = (function (){var statearr_49054 = state_49052;(statearr_49054[7] = inst_49029);
return statearr_49054;
})();var statearr_49055_49076 = state_49052__$1;(statearr_49055_49076[2] = null);
(statearr_49055_49076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49053 === 2))
{var inst_49029 = (state_49052[7]);var inst_49031 = (inst_49029 < n);var state_49052__$1 = state_49052;if(cljs.core.truth_(inst_49031))
{var statearr_49056_49077 = state_49052__$1;(statearr_49056_49077[1] = 4);
} else
{var statearr_49057_49078 = state_49052__$1;(statearr_49057_49078[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49053 === 3))
{var inst_49049 = (state_49052[2]);var inst_49050 = cljs.core.async.close_BANG_.call(null,out);var state_49052__$1 = (function (){var statearr_49058 = state_49052;(statearr_49058[8] = inst_49049);
return statearr_49058;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49052__$1,inst_49050);
} else
{if((state_val_49053 === 4))
{var state_49052__$1 = state_49052;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49052__$1,7,ch);
} else
{if((state_val_49053 === 5))
{var state_49052__$1 = state_49052;var statearr_49059_49079 = state_49052__$1;(statearr_49059_49079[2] = null);
(statearr_49059_49079[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49053 === 6))
{var inst_49047 = (state_49052[2]);var state_49052__$1 = state_49052;var statearr_49060_49080 = state_49052__$1;(statearr_49060_49080[2] = inst_49047);
(statearr_49060_49080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49053 === 7))
{var inst_49034 = (state_49052[9]);var inst_49034__$1 = (state_49052[2]);var inst_49035 = (inst_49034__$1 == null);var inst_49036 = cljs.core.not.call(null,inst_49035);var state_49052__$1 = (function (){var statearr_49061 = state_49052;(statearr_49061[9] = inst_49034__$1);
return statearr_49061;
})();if(inst_49036)
{var statearr_49062_49081 = state_49052__$1;(statearr_49062_49081[1] = 8);
} else
{var statearr_49063_49082 = state_49052__$1;(statearr_49063_49082[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49053 === 8))
{var inst_49034 = (state_49052[9]);var state_49052__$1 = state_49052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49052__$1,11,out,inst_49034);
} else
{if((state_val_49053 === 9))
{var state_49052__$1 = state_49052;var statearr_49064_49083 = state_49052__$1;(statearr_49064_49083[2] = null);
(statearr_49064_49083[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49053 === 10))
{var inst_49044 = (state_49052[2]);var state_49052__$1 = state_49052;var statearr_49065_49084 = state_49052__$1;(statearr_49065_49084[2] = inst_49044);
(statearr_49065_49084[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49053 === 11))
{var inst_49029 = (state_49052[7]);var inst_49039 = (state_49052[2]);var inst_49040 = (inst_49029 + 1);var inst_49029__$1 = inst_49040;var state_49052__$1 = (function (){var statearr_49066 = state_49052;(statearr_49066[7] = inst_49029__$1);
(statearr_49066[10] = inst_49039);
return statearr_49066;
})();var statearr_49067_49085 = state_49052__$1;(statearr_49067_49085[2] = null);
(statearr_49067_49085[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49071 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49071[0] = state_machine__5548__auto__);
(statearr_49071[1] = 1);
return statearr_49071;
});
var state_machine__5548__auto____1 = (function (state_49052){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49052);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49072){if((e49072 instanceof Object))
{var ex__5551__auto__ = e49072;var statearr_49073_49086 = state_49052;(statearr_49073_49086[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49087 = state_49052;
state_49052 = G__49087;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49052){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49074 = f__5563__auto__.call(null);(statearr_49074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49075);
return statearr_49074;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49184 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49159){var state_val_49160 = (state_49159[1]);if((state_val_49160 === 1))
{var inst_49136 = null;var state_49159__$1 = (function (){var statearr_49161 = state_49159;(statearr_49161[7] = inst_49136);
return statearr_49161;
})();var statearr_49162_49185 = state_49159__$1;(statearr_49162_49185[2] = null);
(statearr_49162_49185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49160 === 2))
{var state_49159__$1 = state_49159;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49159__$1,4,ch);
} else
{if((state_val_49160 === 3))
{var inst_49156 = (state_49159[2]);var inst_49157 = cljs.core.async.close_BANG_.call(null,out);var state_49159__$1 = (function (){var statearr_49163 = state_49159;(statearr_49163[8] = inst_49156);
return statearr_49163;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49159__$1,inst_49157);
} else
{if((state_val_49160 === 4))
{var inst_49139 = (state_49159[9]);var inst_49139__$1 = (state_49159[2]);var inst_49140 = (inst_49139__$1 == null);var inst_49141 = cljs.core.not.call(null,inst_49140);var state_49159__$1 = (function (){var statearr_49164 = state_49159;(statearr_49164[9] = inst_49139__$1);
return statearr_49164;
})();if(inst_49141)
{var statearr_49165_49186 = state_49159__$1;(statearr_49165_49186[1] = 5);
} else
{var statearr_49166_49187 = state_49159__$1;(statearr_49166_49187[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49160 === 5))
{var inst_49136 = (state_49159[7]);var inst_49139 = (state_49159[9]);var inst_49143 = cljs.core._EQ_.call(null,inst_49139,inst_49136);var state_49159__$1 = state_49159;if(inst_49143)
{var statearr_49167_49188 = state_49159__$1;(statearr_49167_49188[1] = 8);
} else
{var statearr_49168_49189 = state_49159__$1;(statearr_49168_49189[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49160 === 6))
{var state_49159__$1 = state_49159;var statearr_49170_49190 = state_49159__$1;(statearr_49170_49190[2] = null);
(statearr_49170_49190[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49160 === 7))
{var inst_49154 = (state_49159[2]);var state_49159__$1 = state_49159;var statearr_49171_49191 = state_49159__$1;(statearr_49171_49191[2] = inst_49154);
(statearr_49171_49191[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49160 === 8))
{var inst_49136 = (state_49159[7]);var tmp49169 = inst_49136;var inst_49136__$1 = tmp49169;var state_49159__$1 = (function (){var statearr_49172 = state_49159;(statearr_49172[7] = inst_49136__$1);
return statearr_49172;
})();var statearr_49173_49192 = state_49159__$1;(statearr_49173_49192[2] = null);
(statearr_49173_49192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49160 === 9))
{var inst_49139 = (state_49159[9]);var state_49159__$1 = state_49159;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49159__$1,11,out,inst_49139);
} else
{if((state_val_49160 === 10))
{var inst_49151 = (state_49159[2]);var state_49159__$1 = state_49159;var statearr_49174_49193 = state_49159__$1;(statearr_49174_49193[2] = inst_49151);
(statearr_49174_49193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49160 === 11))
{var inst_49139 = (state_49159[9]);var inst_49148 = (state_49159[2]);var inst_49136 = inst_49139;var state_49159__$1 = (function (){var statearr_49175 = state_49159;(statearr_49175[7] = inst_49136);
(statearr_49175[10] = inst_49148);
return statearr_49175;
})();var statearr_49176_49194 = state_49159__$1;(statearr_49176_49194[2] = null);
(statearr_49176_49194[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49180 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49180[0] = state_machine__5548__auto__);
(statearr_49180[1] = 1);
return statearr_49180;
});
var state_machine__5548__auto____1 = (function (state_49159){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49159);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49181){if((e49181 instanceof Object))
{var ex__5551__auto__ = e49181;var statearr_49182_49195 = state_49159;(statearr_49182_49195[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49159);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49196 = state_49159;
state_49159 = G__49196;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49159){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49183 = f__5563__auto__.call(null);(statearr_49183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49184);
return statearr_49183;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49331 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49301){var state_val_49302 = (state_49301[1]);if((state_val_49302 === 1))
{var inst_49264 = (new Array(n));var inst_49265 = inst_49264;var inst_49266 = 0;var state_49301__$1 = (function (){var statearr_49303 = state_49301;(statearr_49303[7] = inst_49266);
(statearr_49303[8] = inst_49265);
return statearr_49303;
})();var statearr_49304_49332 = state_49301__$1;(statearr_49304_49332[2] = null);
(statearr_49304_49332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 2))
{var state_49301__$1 = state_49301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49301__$1,4,ch);
} else
{if((state_val_49302 === 3))
{var inst_49299 = (state_49301[2]);var state_49301__$1 = state_49301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49301__$1,inst_49299);
} else
{if((state_val_49302 === 4))
{var inst_49269 = (state_49301[9]);var inst_49269__$1 = (state_49301[2]);var inst_49270 = (inst_49269__$1 == null);var inst_49271 = cljs.core.not.call(null,inst_49270);var state_49301__$1 = (function (){var statearr_49305 = state_49301;(statearr_49305[9] = inst_49269__$1);
return statearr_49305;
})();if(inst_49271)
{var statearr_49306_49333 = state_49301__$1;(statearr_49306_49333[1] = 5);
} else
{var statearr_49307_49334 = state_49301__$1;(statearr_49307_49334[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 5))
{var inst_49269 = (state_49301[9]);var inst_49266 = (state_49301[7]);var inst_49265 = (state_49301[8]);var inst_49274 = (state_49301[10]);var inst_49273 = (inst_49265[inst_49266] = inst_49269);var inst_49274__$1 = (inst_49266 + 1);var inst_49275 = (inst_49274__$1 < n);var state_49301__$1 = (function (){var statearr_49308 = state_49301;(statearr_49308[10] = inst_49274__$1);
(statearr_49308[11] = inst_49273);
return statearr_49308;
})();if(cljs.core.truth_(inst_49275))
{var statearr_49309_49335 = state_49301__$1;(statearr_49309_49335[1] = 8);
} else
{var statearr_49310_49336 = state_49301__$1;(statearr_49310_49336[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 6))
{var inst_49266 = (state_49301[7]);var inst_49287 = (inst_49266 > 0);var state_49301__$1 = state_49301;if(cljs.core.truth_(inst_49287))
{var statearr_49312_49337 = state_49301__$1;(statearr_49312_49337[1] = 12);
} else
{var statearr_49313_49338 = state_49301__$1;(statearr_49313_49338[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 7))
{var inst_49297 = (state_49301[2]);var state_49301__$1 = state_49301;var statearr_49314_49339 = state_49301__$1;(statearr_49314_49339[2] = inst_49297);
(statearr_49314_49339[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 8))
{var inst_49265 = (state_49301[8]);var inst_49274 = (state_49301[10]);var tmp49311 = inst_49265;var inst_49265__$1 = tmp49311;var inst_49266 = inst_49274;var state_49301__$1 = (function (){var statearr_49315 = state_49301;(statearr_49315[7] = inst_49266);
(statearr_49315[8] = inst_49265__$1);
return statearr_49315;
})();var statearr_49316_49340 = state_49301__$1;(statearr_49316_49340[2] = null);
(statearr_49316_49340[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 9))
{var inst_49265 = (state_49301[8]);var inst_49279 = cljs.core.vec.call(null,inst_49265);var state_49301__$1 = state_49301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49301__$1,11,out,inst_49279);
} else
{if((state_val_49302 === 10))
{var inst_49285 = (state_49301[2]);var state_49301__$1 = state_49301;var statearr_49317_49341 = state_49301__$1;(statearr_49317_49341[2] = inst_49285);
(statearr_49317_49341[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 11))
{var inst_49281 = (state_49301[2]);var inst_49282 = (new Array(n));var inst_49265 = inst_49282;var inst_49266 = 0;var state_49301__$1 = (function (){var statearr_49318 = state_49301;(statearr_49318[12] = inst_49281);
(statearr_49318[7] = inst_49266);
(statearr_49318[8] = inst_49265);
return statearr_49318;
})();var statearr_49319_49342 = state_49301__$1;(statearr_49319_49342[2] = null);
(statearr_49319_49342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 12))
{var inst_49265 = (state_49301[8]);var inst_49289 = cljs.core.vec.call(null,inst_49265);var state_49301__$1 = state_49301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49301__$1,15,out,inst_49289);
} else
{if((state_val_49302 === 13))
{var state_49301__$1 = state_49301;var statearr_49320_49343 = state_49301__$1;(statearr_49320_49343[2] = null);
(statearr_49320_49343[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 14))
{var inst_49294 = (state_49301[2]);var inst_49295 = cljs.core.async.close_BANG_.call(null,out);var state_49301__$1 = (function (){var statearr_49321 = state_49301;(statearr_49321[13] = inst_49294);
return statearr_49321;
})();var statearr_49322_49344 = state_49301__$1;(statearr_49322_49344[2] = inst_49295);
(statearr_49322_49344[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49302 === 15))
{var inst_49291 = (state_49301[2]);var state_49301__$1 = state_49301;var statearr_49323_49345 = state_49301__$1;(statearr_49323_49345[2] = inst_49291);
(statearr_49323_49345[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_49327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49327[0] = state_machine__5548__auto__);
(statearr_49327[1] = 1);
return statearr_49327;
});
var state_machine__5548__auto____1 = (function (state_49301){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49301);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49328){if((e49328 instanceof Object))
{var ex__5551__auto__ = e49328;var statearr_49329_49346 = state_49301;(statearr_49329_49346[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49347 = state_49301;
state_49301 = G__49347;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49301){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49330 = f__5563__auto__.call(null);(statearr_49330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49331);
return statearr_49330;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49460){var state_val_49461 = (state_49460[1]);if((state_val_49461 === 1))
{var inst_49419 = [];var inst_49420 = inst_49419;var inst_49421 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_49460__$1 = (function (){var statearr_49462 = state_49460;(statearr_49462[7] = inst_49420);
(statearr_49462[8] = inst_49421);
return statearr_49462;
})();var statearr_49463_49491 = state_49460__$1;(statearr_49463_49491[2] = null);
(statearr_49463_49491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 2))
{var state_49460__$1 = state_49460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49460__$1,4,ch);
} else
{if((state_val_49461 === 3))
{var inst_49458 = (state_49460[2]);var state_49460__$1 = state_49460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49460__$1,inst_49458);
} else
{if((state_val_49461 === 4))
{var inst_49424 = (state_49460[9]);var inst_49424__$1 = (state_49460[2]);var inst_49425 = (inst_49424__$1 == null);var inst_49426 = cljs.core.not.call(null,inst_49425);var state_49460__$1 = (function (){var statearr_49464 = state_49460;(statearr_49464[9] = inst_49424__$1);
return statearr_49464;
})();if(inst_49426)
{var statearr_49465_49492 = state_49460__$1;(statearr_49465_49492[1] = 5);
} else
{var statearr_49466_49493 = state_49460__$1;(statearr_49466_49493[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 5))
{var inst_49424 = (state_49460[9]);var inst_49421 = (state_49460[8]);var inst_49428 = (state_49460[10]);var inst_49428__$1 = f.call(null,inst_49424);var inst_49429 = cljs.core._EQ_.call(null,inst_49428__$1,inst_49421);var inst_49430 = cljs.core.keyword_identical_QMARK_.call(null,inst_49421,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_49431 = (inst_49429) || (inst_49430);var state_49460__$1 = (function (){var statearr_49467 = state_49460;(statearr_49467[10] = inst_49428__$1);
return statearr_49467;
})();if(cljs.core.truth_(inst_49431))
{var statearr_49468_49494 = state_49460__$1;(statearr_49468_49494[1] = 8);
} else
{var statearr_49469_49495 = state_49460__$1;(statearr_49469_49495[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 6))
{var inst_49420 = (state_49460[7]);var inst_49445 = inst_49420.length;var inst_49446 = (inst_49445 > 0);var state_49460__$1 = state_49460;if(cljs.core.truth_(inst_49446))
{var statearr_49471_49496 = state_49460__$1;(statearr_49471_49496[1] = 12);
} else
{var statearr_49472_49497 = state_49460__$1;(statearr_49472_49497[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 7))
{var inst_49456 = (state_49460[2]);var state_49460__$1 = state_49460;var statearr_49473_49498 = state_49460__$1;(statearr_49473_49498[2] = inst_49456);
(statearr_49473_49498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 8))
{var inst_49424 = (state_49460[9]);var inst_49420 = (state_49460[7]);var inst_49428 = (state_49460[10]);var inst_49433 = inst_49420.push(inst_49424);var tmp49470 = inst_49420;var inst_49420__$1 = tmp49470;var inst_49421 = inst_49428;var state_49460__$1 = (function (){var statearr_49474 = state_49460;(statearr_49474[7] = inst_49420__$1);
(statearr_49474[8] = inst_49421);
(statearr_49474[11] = inst_49433);
return statearr_49474;
})();var statearr_49475_49499 = state_49460__$1;(statearr_49475_49499[2] = null);
(statearr_49475_49499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 9))
{var inst_49420 = (state_49460[7]);var inst_49436 = cljs.core.vec.call(null,inst_49420);var state_49460__$1 = state_49460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49460__$1,11,out,inst_49436);
} else
{if((state_val_49461 === 10))
{var inst_49443 = (state_49460[2]);var state_49460__$1 = state_49460;var statearr_49476_49500 = state_49460__$1;(statearr_49476_49500[2] = inst_49443);
(statearr_49476_49500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 11))
{var inst_49424 = (state_49460[9]);var inst_49428 = (state_49460[10]);var inst_49438 = (state_49460[2]);var inst_49439 = [];var inst_49440 = inst_49439.push(inst_49424);var inst_49420 = inst_49439;var inst_49421 = inst_49428;var state_49460__$1 = (function (){var statearr_49477 = state_49460;(statearr_49477[7] = inst_49420);
(statearr_49477[8] = inst_49421);
(statearr_49477[12] = inst_49438);
(statearr_49477[13] = inst_49440);
return statearr_49477;
})();var statearr_49478_49501 = state_49460__$1;(statearr_49478_49501[2] = null);
(statearr_49478_49501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 12))
{var inst_49420 = (state_49460[7]);var inst_49448 = cljs.core.vec.call(null,inst_49420);var state_49460__$1 = state_49460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49460__$1,15,out,inst_49448);
} else
{if((state_val_49461 === 13))
{var state_49460__$1 = state_49460;var statearr_49479_49502 = state_49460__$1;(statearr_49479_49502[2] = null);
(statearr_49479_49502[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 14))
{var inst_49453 = (state_49460[2]);var inst_49454 = cljs.core.async.close_BANG_.call(null,out);var state_49460__$1 = (function (){var statearr_49480 = state_49460;(statearr_49480[14] = inst_49453);
return statearr_49480;
})();var statearr_49481_49503 = state_49460__$1;(statearr_49481_49503[2] = inst_49454);
(statearr_49481_49503[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49461 === 15))
{var inst_49450 = (state_49460[2]);var state_49460__$1 = state_49460;var statearr_49482_49504 = state_49460__$1;(statearr_49482_49504[2] = inst_49450);
(statearr_49482_49504[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_49486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49486[0] = state_machine__5548__auto__);
(statearr_49486[1] = 1);
return statearr_49486;
});
var state_machine__5548__auto____1 = (function (state_49460){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49460);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49487){if((e49487 instanceof Object))
{var ex__5551__auto__ = e49487;var statearr_49488_49505 = state_49460;(statearr_49488_49505[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49460);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49506 = state_49460;
state_49460 = G__49506;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49460){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49489 = f__5563__auto__.call(null);(statearr_49489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49490);
return statearr_49489;
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
