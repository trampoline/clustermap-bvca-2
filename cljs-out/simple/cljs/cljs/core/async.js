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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14065 = (function (f,fn_handler,meta14066){
this.f = f;
this.fn_handler = fn_handler;
this.meta14066 = meta14066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14065.cljs$lang$type = true;
cljs.core.async.t14065.cljs$lang$ctorStr = "cljs.core.async/t14065";
cljs.core.async.t14065.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14065");
});
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14067){var self__ = this;
var _14067__$1 = this;return self__.meta14066;
});
cljs.core.async.t14065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14067,meta14066__$1){var self__ = this;
var _14067__$1 = this;return (new cljs.core.async.t14065(self__.f,self__.fn_handler,meta14066__$1));
});
cljs.core.async.__GT_t14065 = (function __GT_t14065(f__$1,fn_handler__$1,meta14066){return (new cljs.core.async.t14065(f__$1,fn_handler__$1,meta14066));
});
}
return (new cljs.core.async.t14065(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14069 = buff;if(G__14069)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__14069.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14069);
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
{var val_14070 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14070);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14070);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___14071 = n;var x_14072 = 0;while(true){
if((x_14072 < n__4289__auto___14071))
{(a[x_14072] = 0);
{
var G__14073 = (x_14072 + 1);
x_14072 = G__14073;
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
var G__14074 = (i + 1);
i = G__14074;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14078 = (function (flag,alt_flag,meta14079){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14079 = meta14079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14078.cljs$lang$type = true;
cljs.core.async.t14078.cljs$lang$ctorStr = "cljs.core.async/t14078";
cljs.core.async.t14078.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14078");
});
cljs.core.async.t14078.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14080){var self__ = this;
var _14080__$1 = this;return self__.meta14079;
});
cljs.core.async.t14078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14080,meta14079__$1){var self__ = this;
var _14080__$1 = this;return (new cljs.core.async.t14078(self__.flag,self__.alt_flag,meta14079__$1));
});
cljs.core.async.__GT_t14078 = (function __GT_t14078(flag__$1,alt_flag__$1,meta14079){return (new cljs.core.async.t14078(flag__$1,alt_flag__$1,meta14079));
});
}
return (new cljs.core.async.t14078(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14084 = (function (cb,flag,alt_handler,meta14085){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14085 = meta14085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14084.cljs$lang$type = true;
cljs.core.async.t14084.cljs$lang$ctorStr = "cljs.core.async/t14084";
cljs.core.async.t14084.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14084");
});
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14086){var self__ = this;
var _14086__$1 = this;return self__.meta14085;
});
cljs.core.async.t14084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14086,meta14085__$1){var self__ = this;
var _14086__$1 = this;return (new cljs.core.async.t14084(self__.cb,self__.flag,self__.alt_handler,meta14085__$1));
});
cljs.core.async.__GT_t14084 = (function __GT_t14084(cb__$1,flag__$1,alt_handler__$1,meta14085){return (new cljs.core.async.t14084(cb__$1,flag__$1,alt_handler__$1,meta14085));
});
}
return (new cljs.core.async.t14084(cb,flag,alt_handler,null));
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
return (function (p1__14087_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14087_SHARP_,port], null));
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
var G__14088 = (i + 1);
i = G__14088;
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
var alts_BANG___delegate = function (ports,p__14089){var map__14091 = p__14089;var map__14091__$1 = ((cljs.core.seq_QMARK_.call(null,map__14091))?cljs.core.apply.call(null,cljs.core.hash_map,map__14091):map__14091);var opts = map__14091__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14089 = null;if (arguments.length > 1) {
  p__14089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14089);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14092){
var ports = cljs.core.first(arglist__14092);
var p__14089 = cljs.core.rest(arglist__14092);
return alts_BANG___delegate(ports,p__14089);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14100 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14100 = (function (ch,f,map_LT_,meta14101){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14101 = meta14101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14100.cljs$lang$type = true;
cljs.core.async.t14100.cljs$lang$ctorStr = "cljs.core.async/t14100";
cljs.core.async.t14100.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14100");
});
cljs.core.async.t14100.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14100.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14103 = (function (fn1,_,meta14101,ch,f,map_LT_,meta14104){
this.fn1 = fn1;
this._ = _;
this.meta14101 = meta14101;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14104 = meta14104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14103.cljs$lang$type = true;
cljs.core.async.t14103.cljs$lang$ctorStr = "cljs.core.async/t14103";
cljs.core.async.t14103.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14103");
});
cljs.core.async.t14103.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14103.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14093_SHARP_){return f1.call(null,(((p1__14093_SHARP_ == null))?null:self__.f.call(null,p1__14093_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14105){var self__ = this;
var _14105__$1 = this;return self__.meta14104;
});
cljs.core.async.t14103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14105,meta14104__$1){var self__ = this;
var _14105__$1 = this;return (new cljs.core.async.t14103(self__.fn1,self__._,self__.meta14101,self__.ch,self__.f,self__.map_LT_,meta14104__$1));
});
cljs.core.async.__GT_t14103 = (function __GT_t14103(fn1__$1,___$2,meta14101__$1,ch__$2,f__$2,map_LT___$2,meta14104){return (new cljs.core.async.t14103(fn1__$1,___$2,meta14101__$1,ch__$2,f__$2,map_LT___$2,meta14104));
});
}
return (new cljs.core.async.t14103(fn1,___$1,self__.meta14101,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14100.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14102){var self__ = this;
var _14102__$1 = this;return self__.meta14101;
});
cljs.core.async.t14100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14102,meta14101__$1){var self__ = this;
var _14102__$1 = this;return (new cljs.core.async.t14100(self__.ch,self__.f,self__.map_LT_,meta14101__$1));
});
cljs.core.async.__GT_t14100 = (function __GT_t14100(ch__$1,f__$1,map_LT___$1,meta14101){return (new cljs.core.async.t14100(ch__$1,f__$1,map_LT___$1,meta14101));
});
}
return (new cljs.core.async.t14100(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14109 = (function (ch,f,map_GT_,meta14110){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14110 = meta14110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14109.cljs$lang$type = true;
cljs.core.async.t14109.cljs$lang$ctorStr = "cljs.core.async/t14109";
cljs.core.async.t14109.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14109");
});
cljs.core.async.t14109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14109.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14111){var self__ = this;
var _14111__$1 = this;return self__.meta14110;
});
cljs.core.async.t14109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14111,meta14110__$1){var self__ = this;
var _14111__$1 = this;return (new cljs.core.async.t14109(self__.ch,self__.f,self__.map_GT_,meta14110__$1));
});
cljs.core.async.__GT_t14109 = (function __GT_t14109(ch__$1,f__$1,map_GT___$1,meta14110){return (new cljs.core.async.t14109(ch__$1,f__$1,map_GT___$1,meta14110));
});
}
return (new cljs.core.async.t14109(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14115 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14115 = (function (ch,p,filter_GT_,meta14116){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14116 = meta14116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14115.cljs$lang$type = true;
cljs.core.async.t14115.cljs$lang$ctorStr = "cljs.core.async/t14115";
cljs.core.async.t14115.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14115");
});
cljs.core.async.t14115.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14115.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14115.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14115.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14115.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14115.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14117){var self__ = this;
var _14117__$1 = this;return self__.meta14116;
});
cljs.core.async.t14115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14117,meta14116__$1){var self__ = this;
var _14117__$1 = this;return (new cljs.core.async.t14115(self__.ch,self__.p,self__.filter_GT_,meta14116__$1));
});
cljs.core.async.__GT_t14115 = (function __GT_t14115(ch__$1,p__$1,filter_GT___$1,meta14116){return (new cljs.core.async.t14115(ch__$1,p__$1,filter_GT___$1,meta14116));
});
}
return (new cljs.core.async.t14115(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14200 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14179){var state_val_14180 = (state_14179[1]);if((state_val_14180 === 1))
{var state_14179__$1 = state_14179;var statearr_14181_14201 = state_14179__$1;(statearr_14181_14201[2] = null);
(statearr_14181_14201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 2))
{var state_14179__$1 = state_14179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14179__$1,4,ch);
} else
{if((state_val_14180 === 3))
{var inst_14177 = (state_14179[2]);var state_14179__$1 = state_14179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14179__$1,inst_14177);
} else
{if((state_val_14180 === 4))
{var inst_14161 = (state_14179[7]);var inst_14161__$1 = (state_14179[2]);var inst_14162 = (inst_14161__$1 == null);var state_14179__$1 = (function (){var statearr_14182 = state_14179;(statearr_14182[7] = inst_14161__$1);
return statearr_14182;
})();if(cljs.core.truth_(inst_14162))
{var statearr_14183_14202 = state_14179__$1;(statearr_14183_14202[1] = 5);
} else
{var statearr_14184_14203 = state_14179__$1;(statearr_14184_14203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 5))
{var inst_14164 = cljs.core.async.close_BANG_.call(null,out);var state_14179__$1 = state_14179;var statearr_14185_14204 = state_14179__$1;(statearr_14185_14204[2] = inst_14164);
(statearr_14185_14204[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 6))
{var inst_14161 = (state_14179[7]);var inst_14166 = p.call(null,inst_14161);var state_14179__$1 = state_14179;if(cljs.core.truth_(inst_14166))
{var statearr_14186_14205 = state_14179__$1;(statearr_14186_14205[1] = 8);
} else
{var statearr_14187_14206 = state_14179__$1;(statearr_14187_14206[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 7))
{var inst_14175 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14188_14207 = state_14179__$1;(statearr_14188_14207[2] = inst_14175);
(statearr_14188_14207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 8))
{var inst_14161 = (state_14179[7]);var state_14179__$1 = state_14179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14179__$1,11,out,inst_14161);
} else
{if((state_val_14180 === 9))
{var state_14179__$1 = state_14179;var statearr_14189_14208 = state_14179__$1;(statearr_14189_14208[2] = null);
(statearr_14189_14208[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 10))
{var inst_14172 = (state_14179[2]);var state_14179__$1 = (function (){var statearr_14190 = state_14179;(statearr_14190[8] = inst_14172);
return statearr_14190;
})();var statearr_14191_14209 = state_14179__$1;(statearr_14191_14209[2] = null);
(statearr_14191_14209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 11))
{var inst_14169 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14192_14210 = state_14179__$1;(statearr_14192_14210[2] = inst_14169);
(statearr_14192_14210[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_14196 = [null,null,null,null,null,null,null,null,null];(statearr_14196[0] = state_machine__5548__auto__);
(statearr_14196[1] = 1);
return statearr_14196;
});
var state_machine__5548__auto____1 = (function (state_14179){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14197){if((e14197 instanceof Object))
{var ex__5551__auto__ = e14197;var statearr_14198_14211 = state_14179;(statearr_14198_14211[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14212 = state_14179;
state_14179 = G__14212;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14179){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14199 = f__5563__auto__.call(null);(statearr_14199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14200);
return statearr_14199;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14364){var state_val_14365 = (state_14364[1]);if((state_val_14365 === 1))
{var state_14364__$1 = state_14364;var statearr_14366_14403 = state_14364__$1;(statearr_14366_14403[2] = null);
(statearr_14366_14403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 2))
{var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14364__$1,4,in$);
} else
{if((state_val_14365 === 3))
{var inst_14362 = (state_14364[2]);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14364__$1,inst_14362);
} else
{if((state_val_14365 === 4))
{var inst_14310 = (state_14364[7]);var inst_14310__$1 = (state_14364[2]);var inst_14311 = (inst_14310__$1 == null);var state_14364__$1 = (function (){var statearr_14367 = state_14364;(statearr_14367[7] = inst_14310__$1);
return statearr_14367;
})();if(cljs.core.truth_(inst_14311))
{var statearr_14368_14404 = state_14364__$1;(statearr_14368_14404[1] = 5);
} else
{var statearr_14369_14405 = state_14364__$1;(statearr_14369_14405[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 5))
{var inst_14313 = cljs.core.async.close_BANG_.call(null,out);var state_14364__$1 = state_14364;var statearr_14370_14406 = state_14364__$1;(statearr_14370_14406[2] = inst_14313);
(statearr_14370_14406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 6))
{var inst_14310 = (state_14364[7]);var inst_14315 = f.call(null,inst_14310);var inst_14320 = cljs.core.seq.call(null,inst_14315);var inst_14321 = inst_14320;var inst_14322 = null;var inst_14323 = 0;var inst_14324 = 0;var state_14364__$1 = (function (){var statearr_14371 = state_14364;(statearr_14371[8] = inst_14321);
(statearr_14371[9] = inst_14322);
(statearr_14371[10] = inst_14324);
(statearr_14371[11] = inst_14323);
return statearr_14371;
})();var statearr_14372_14407 = state_14364__$1;(statearr_14372_14407[2] = null);
(statearr_14372_14407[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 7))
{var inst_14360 = (state_14364[2]);var state_14364__$1 = state_14364;var statearr_14373_14408 = state_14364__$1;(statearr_14373_14408[2] = inst_14360);
(statearr_14373_14408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 8))
{var inst_14324 = (state_14364[10]);var inst_14323 = (state_14364[11]);var inst_14326 = (inst_14324 < inst_14323);var inst_14327 = inst_14326;var state_14364__$1 = state_14364;if(cljs.core.truth_(inst_14327))
{var statearr_14374_14409 = state_14364__$1;(statearr_14374_14409[1] = 10);
} else
{var statearr_14375_14410 = state_14364__$1;(statearr_14375_14410[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 9))
{var inst_14357 = (state_14364[2]);var state_14364__$1 = (function (){var statearr_14376 = state_14364;(statearr_14376[12] = inst_14357);
return statearr_14376;
})();var statearr_14377_14411 = state_14364__$1;(statearr_14377_14411[2] = null);
(statearr_14377_14411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 10))
{var inst_14322 = (state_14364[9]);var inst_14324 = (state_14364[10]);var inst_14329 = cljs.core._nth.call(null,inst_14322,inst_14324);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14364__$1,13,out,inst_14329);
} else
{if((state_val_14365 === 11))
{var inst_14321 = (state_14364[8]);var inst_14335 = (state_14364[13]);var inst_14335__$1 = cljs.core.seq.call(null,inst_14321);var state_14364__$1 = (function (){var statearr_14381 = state_14364;(statearr_14381[13] = inst_14335__$1);
return statearr_14381;
})();if(inst_14335__$1)
{var statearr_14382_14412 = state_14364__$1;(statearr_14382_14412[1] = 14);
} else
{var statearr_14383_14413 = state_14364__$1;(statearr_14383_14413[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 12))
{var inst_14355 = (state_14364[2]);var state_14364__$1 = state_14364;var statearr_14384_14414 = state_14364__$1;(statearr_14384_14414[2] = inst_14355);
(statearr_14384_14414[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 13))
{var inst_14321 = (state_14364[8]);var inst_14322 = (state_14364[9]);var inst_14324 = (state_14364[10]);var inst_14323 = (state_14364[11]);var inst_14331 = (state_14364[2]);var inst_14332 = (inst_14324 + 1);var tmp14378 = inst_14321;var tmp14379 = inst_14322;var tmp14380 = inst_14323;var inst_14321__$1 = tmp14378;var inst_14322__$1 = tmp14379;var inst_14323__$1 = tmp14380;var inst_14324__$1 = inst_14332;var state_14364__$1 = (function (){var statearr_14385 = state_14364;(statearr_14385[8] = inst_14321__$1);
(statearr_14385[9] = inst_14322__$1);
(statearr_14385[14] = inst_14331);
(statearr_14385[10] = inst_14324__$1);
(statearr_14385[11] = inst_14323__$1);
return statearr_14385;
})();var statearr_14386_14415 = state_14364__$1;(statearr_14386_14415[2] = null);
(statearr_14386_14415[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 14))
{var inst_14335 = (state_14364[13]);var inst_14337 = cljs.core.chunked_seq_QMARK_.call(null,inst_14335);var state_14364__$1 = state_14364;if(inst_14337)
{var statearr_14387_14416 = state_14364__$1;(statearr_14387_14416[1] = 17);
} else
{var statearr_14388_14417 = state_14364__$1;(statearr_14388_14417[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 15))
{var state_14364__$1 = state_14364;var statearr_14389_14418 = state_14364__$1;(statearr_14389_14418[2] = null);
(statearr_14389_14418[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 16))
{var inst_14353 = (state_14364[2]);var state_14364__$1 = state_14364;var statearr_14390_14419 = state_14364__$1;(statearr_14390_14419[2] = inst_14353);
(statearr_14390_14419[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 17))
{var inst_14335 = (state_14364[13]);var inst_14339 = cljs.core.chunk_first.call(null,inst_14335);var inst_14340 = cljs.core.chunk_rest.call(null,inst_14335);var inst_14341 = cljs.core.count.call(null,inst_14339);var inst_14321 = inst_14340;var inst_14322 = inst_14339;var inst_14323 = inst_14341;var inst_14324 = 0;var state_14364__$1 = (function (){var statearr_14391 = state_14364;(statearr_14391[8] = inst_14321);
(statearr_14391[9] = inst_14322);
(statearr_14391[10] = inst_14324);
(statearr_14391[11] = inst_14323);
return statearr_14391;
})();var statearr_14392_14420 = state_14364__$1;(statearr_14392_14420[2] = null);
(statearr_14392_14420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 18))
{var inst_14335 = (state_14364[13]);var inst_14344 = cljs.core.first.call(null,inst_14335);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14364__$1,20,out,inst_14344);
} else
{if((state_val_14365 === 19))
{var inst_14350 = (state_14364[2]);var state_14364__$1 = state_14364;var statearr_14393_14421 = state_14364__$1;(statearr_14393_14421[2] = inst_14350);
(statearr_14393_14421[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14365 === 20))
{var inst_14335 = (state_14364[13]);var inst_14346 = (state_14364[2]);var inst_14347 = cljs.core.next.call(null,inst_14335);var inst_14321 = inst_14347;var inst_14322 = null;var inst_14323 = 0;var inst_14324 = 0;var state_14364__$1 = (function (){var statearr_14394 = state_14364;(statearr_14394[8] = inst_14321);
(statearr_14394[9] = inst_14322);
(statearr_14394[10] = inst_14324);
(statearr_14394[11] = inst_14323);
(statearr_14394[15] = inst_14346);
return statearr_14394;
})();var statearr_14395_14422 = state_14364__$1;(statearr_14395_14422[2] = null);
(statearr_14395_14422[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_14399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14399[0] = state_machine__5548__auto__);
(statearr_14399[1] = 1);
return statearr_14399;
});
var state_machine__5548__auto____1 = (function (state_14364){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14364);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14400){if((e14400 instanceof Object))
{var ex__5551__auto__ = e14400;var statearr_14401_14423 = state_14364;(statearr_14401_14423[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14364);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14424 = state_14364;
state_14364 = G__14424;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14364){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14402 = f__5563__auto__.call(null);(statearr_14402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14402;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___14505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14484){var state_val_14485 = (state_14484[1]);if((state_val_14485 === 1))
{var state_14484__$1 = state_14484;var statearr_14486_14506 = state_14484__$1;(statearr_14486_14506[2] = null);
(statearr_14486_14506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14485 === 2))
{var state_14484__$1 = state_14484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14484__$1,4,from);
} else
{if((state_val_14485 === 3))
{var inst_14482 = (state_14484[2]);var state_14484__$1 = state_14484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14484__$1,inst_14482);
} else
{if((state_val_14485 === 4))
{var inst_14467 = (state_14484[7]);var inst_14467__$1 = (state_14484[2]);var inst_14468 = (inst_14467__$1 == null);var state_14484__$1 = (function (){var statearr_14487 = state_14484;(statearr_14487[7] = inst_14467__$1);
return statearr_14487;
})();if(cljs.core.truth_(inst_14468))
{var statearr_14488_14507 = state_14484__$1;(statearr_14488_14507[1] = 5);
} else
{var statearr_14489_14508 = state_14484__$1;(statearr_14489_14508[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14485 === 5))
{var state_14484__$1 = state_14484;if(cljs.core.truth_(close_QMARK_))
{var statearr_14490_14509 = state_14484__$1;(statearr_14490_14509[1] = 8);
} else
{var statearr_14491_14510 = state_14484__$1;(statearr_14491_14510[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14485 === 6))
{var inst_14467 = (state_14484[7]);var state_14484__$1 = state_14484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14484__$1,11,to,inst_14467);
} else
{if((state_val_14485 === 7))
{var inst_14480 = (state_14484[2]);var state_14484__$1 = state_14484;var statearr_14492_14511 = state_14484__$1;(statearr_14492_14511[2] = inst_14480);
(statearr_14492_14511[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14485 === 8))
{var inst_14471 = cljs.core.async.close_BANG_.call(null,to);var state_14484__$1 = state_14484;var statearr_14493_14512 = state_14484__$1;(statearr_14493_14512[2] = inst_14471);
(statearr_14493_14512[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14485 === 9))
{var state_14484__$1 = state_14484;var statearr_14494_14513 = state_14484__$1;(statearr_14494_14513[2] = null);
(statearr_14494_14513[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14485 === 10))
{var inst_14474 = (state_14484[2]);var state_14484__$1 = state_14484;var statearr_14495_14514 = state_14484__$1;(statearr_14495_14514[2] = inst_14474);
(statearr_14495_14514[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14485 === 11))
{var inst_14477 = (state_14484[2]);var state_14484__$1 = (function (){var statearr_14496 = state_14484;(statearr_14496[8] = inst_14477);
return statearr_14496;
})();var statearr_14497_14515 = state_14484__$1;(statearr_14497_14515[2] = null);
(statearr_14497_14515[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14501 = [null,null,null,null,null,null,null,null,null];(statearr_14501[0] = state_machine__5548__auto__);
(statearr_14501[1] = 1);
return statearr_14501;
});
var state_machine__5548__auto____1 = (function (state_14484){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14484);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14502){if((e14502 instanceof Object))
{var ex__5551__auto__ = e14502;var statearr_14503_14516 = state_14484;(statearr_14503_14516[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14517 = state_14484;
state_14484 = G__14517;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14484){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14504 = f__5563__auto__.call(null);(statearr_14504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14505);
return statearr_14504;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___14604 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14582){var state_val_14583 = (state_14582[1]);if((state_val_14583 === 1))
{var state_14582__$1 = state_14582;var statearr_14584_14605 = state_14582__$1;(statearr_14584_14605[2] = null);
(statearr_14584_14605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 2))
{var state_14582__$1 = state_14582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14582__$1,4,ch);
} else
{if((state_val_14583 === 3))
{var inst_14580 = (state_14582[2]);var state_14582__$1 = state_14582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14582__$1,inst_14580);
} else
{if((state_val_14583 === 4))
{var inst_14563 = (state_14582[7]);var inst_14563__$1 = (state_14582[2]);var inst_14564 = (inst_14563__$1 == null);var state_14582__$1 = (function (){var statearr_14585 = state_14582;(statearr_14585[7] = inst_14563__$1);
return statearr_14585;
})();if(cljs.core.truth_(inst_14564))
{var statearr_14586_14606 = state_14582__$1;(statearr_14586_14606[1] = 5);
} else
{var statearr_14587_14607 = state_14582__$1;(statearr_14587_14607[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 5))
{var inst_14566 = cljs.core.async.close_BANG_.call(null,tc);var inst_14567 = cljs.core.async.close_BANG_.call(null,fc);var state_14582__$1 = (function (){var statearr_14588 = state_14582;(statearr_14588[8] = inst_14566);
return statearr_14588;
})();var statearr_14589_14608 = state_14582__$1;(statearr_14589_14608[2] = inst_14567);
(statearr_14589_14608[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 6))
{var inst_14563 = (state_14582[7]);var inst_14569 = p.call(null,inst_14563);var state_14582__$1 = state_14582;if(cljs.core.truth_(inst_14569))
{var statearr_14590_14609 = state_14582__$1;(statearr_14590_14609[1] = 9);
} else
{var statearr_14591_14610 = state_14582__$1;(statearr_14591_14610[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 7))
{var inst_14578 = (state_14582[2]);var state_14582__$1 = state_14582;var statearr_14592_14611 = state_14582__$1;(statearr_14592_14611[2] = inst_14578);
(statearr_14592_14611[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 8))
{var inst_14575 = (state_14582[2]);var state_14582__$1 = (function (){var statearr_14593 = state_14582;(statearr_14593[9] = inst_14575);
return statearr_14593;
})();var statearr_14594_14612 = state_14582__$1;(statearr_14594_14612[2] = null);
(statearr_14594_14612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 9))
{var state_14582__$1 = state_14582;var statearr_14595_14613 = state_14582__$1;(statearr_14595_14613[2] = tc);
(statearr_14595_14613[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 10))
{var state_14582__$1 = state_14582;var statearr_14596_14614 = state_14582__$1;(statearr_14596_14614[2] = fc);
(statearr_14596_14614[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14583 === 11))
{var inst_14563 = (state_14582[7]);var inst_14573 = (state_14582[2]);var state_14582__$1 = state_14582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14582__$1,8,inst_14573,inst_14563);
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
var state_machine__5548__auto____0 = (function (){var statearr_14600 = [null,null,null,null,null,null,null,null,null,null];(statearr_14600[0] = state_machine__5548__auto__);
(statearr_14600[1] = 1);
return statearr_14600;
});
var state_machine__5548__auto____1 = (function (state_14582){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14601){if((e14601 instanceof Object))
{var ex__5551__auto__ = e14601;var statearr_14602_14615 = state_14582;(statearr_14602_14615[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14616 = state_14582;
state_14582 = G__14616;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14582){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14603 = f__5563__auto__.call(null);(statearr_14603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14604);
return statearr_14603;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14663){var state_val_14664 = (state_14663[1]);if((state_val_14664 === 7))
{var inst_14659 = (state_14663[2]);var state_14663__$1 = state_14663;var statearr_14665_14681 = state_14663__$1;(statearr_14665_14681[2] = inst_14659);
(statearr_14665_14681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 6))
{var inst_14649 = (state_14663[7]);var inst_14652 = (state_14663[8]);var inst_14656 = f.call(null,inst_14649,inst_14652);var inst_14649__$1 = inst_14656;var state_14663__$1 = (function (){var statearr_14666 = state_14663;(statearr_14666[7] = inst_14649__$1);
return statearr_14666;
})();var statearr_14667_14682 = state_14663__$1;(statearr_14667_14682[2] = null);
(statearr_14667_14682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 5))
{var inst_14649 = (state_14663[7]);var state_14663__$1 = state_14663;var statearr_14668_14683 = state_14663__$1;(statearr_14668_14683[2] = inst_14649);
(statearr_14668_14683[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 4))
{var inst_14652 = (state_14663[8]);var inst_14652__$1 = (state_14663[2]);var inst_14653 = (inst_14652__$1 == null);var state_14663__$1 = (function (){var statearr_14669 = state_14663;(statearr_14669[8] = inst_14652__$1);
return statearr_14669;
})();if(cljs.core.truth_(inst_14653))
{var statearr_14670_14684 = state_14663__$1;(statearr_14670_14684[1] = 5);
} else
{var statearr_14671_14685 = state_14663__$1;(statearr_14671_14685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14664 === 3))
{var inst_14661 = (state_14663[2]);var state_14663__$1 = state_14663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14663__$1,inst_14661);
} else
{if((state_val_14664 === 2))
{var state_14663__$1 = state_14663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14663__$1,4,ch);
} else
{if((state_val_14664 === 1))
{var inst_14649 = init;var state_14663__$1 = (function (){var statearr_14672 = state_14663;(statearr_14672[7] = inst_14649);
return statearr_14672;
})();var statearr_14673_14686 = state_14663__$1;(statearr_14673_14686[2] = null);
(statearr_14673_14686[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_14677 = [null,null,null,null,null,null,null,null,null];(statearr_14677[0] = state_machine__5548__auto__);
(statearr_14677[1] = 1);
return statearr_14677;
});
var state_machine__5548__auto____1 = (function (state_14663){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14678){if((e14678 instanceof Object))
{var ex__5551__auto__ = e14678;var statearr_14679_14687 = state_14663;(statearr_14679_14687[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14688 = state_14663;
state_14663 = G__14688;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14663){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14680 = f__5563__auto__.call(null);(statearr_14680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14680;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14750){var state_val_14751 = (state_14750[1]);if((state_val_14751 === 1))
{var inst_14730 = cljs.core.seq.call(null,coll);var inst_14731 = inst_14730;var state_14750__$1 = (function (){var statearr_14752 = state_14750;(statearr_14752[7] = inst_14731);
return statearr_14752;
})();var statearr_14753_14771 = state_14750__$1;(statearr_14753_14771[2] = null);
(statearr_14753_14771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 2))
{var inst_14731 = (state_14750[7]);var state_14750__$1 = state_14750;if(cljs.core.truth_(inst_14731))
{var statearr_14754_14772 = state_14750__$1;(statearr_14754_14772[1] = 4);
} else
{var statearr_14755_14773 = state_14750__$1;(statearr_14755_14773[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 3))
{var inst_14748 = (state_14750[2]);var state_14750__$1 = state_14750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14750__$1,inst_14748);
} else
{if((state_val_14751 === 4))
{var inst_14731 = (state_14750[7]);var inst_14734 = cljs.core.first.call(null,inst_14731);var state_14750__$1 = state_14750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14750__$1,7,ch,inst_14734);
} else
{if((state_val_14751 === 5))
{var state_14750__$1 = state_14750;if(cljs.core.truth_(close_QMARK_))
{var statearr_14756_14774 = state_14750__$1;(statearr_14756_14774[1] = 8);
} else
{var statearr_14757_14775 = state_14750__$1;(statearr_14757_14775[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 6))
{var inst_14746 = (state_14750[2]);var state_14750__$1 = state_14750;var statearr_14758_14776 = state_14750__$1;(statearr_14758_14776[2] = inst_14746);
(statearr_14758_14776[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 7))
{var inst_14731 = (state_14750[7]);var inst_14736 = (state_14750[2]);var inst_14737 = cljs.core.next.call(null,inst_14731);var inst_14731__$1 = inst_14737;var state_14750__$1 = (function (){var statearr_14759 = state_14750;(statearr_14759[7] = inst_14731__$1);
(statearr_14759[8] = inst_14736);
return statearr_14759;
})();var statearr_14760_14777 = state_14750__$1;(statearr_14760_14777[2] = null);
(statearr_14760_14777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 8))
{var inst_14741 = cljs.core.async.close_BANG_.call(null,ch);var state_14750__$1 = state_14750;var statearr_14761_14778 = state_14750__$1;(statearr_14761_14778[2] = inst_14741);
(statearr_14761_14778[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 9))
{var state_14750__$1 = state_14750;var statearr_14762_14779 = state_14750__$1;(statearr_14762_14779[2] = null);
(statearr_14762_14779[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14751 === 10))
{var inst_14744 = (state_14750[2]);var state_14750__$1 = state_14750;var statearr_14763_14780 = state_14750__$1;(statearr_14763_14780[2] = inst_14744);
(statearr_14763_14780[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_14767 = [null,null,null,null,null,null,null,null,null];(statearr_14767[0] = state_machine__5548__auto__);
(statearr_14767[1] = 1);
return statearr_14767;
});
var state_machine__5548__auto____1 = (function (state_14750){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14750);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14768){if((e14768 instanceof Object))
{var ex__5551__auto__ = e14768;var statearr_14769_14781 = state_14750;(statearr_14769_14781[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14750);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14768;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14782 = state_14750;
state_14750 = G__14782;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14750){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14770 = f__5563__auto__.call(null);(statearr_14770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14770;
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
cljs.core.async.Mux = (function (){var obj14784 = {};return obj14784;
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
cljs.core.async.Mult = (function (){var obj14786 = {};return obj14786;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15010 = (function (cs,ch,mult,meta15011){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15011 = meta15011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15010.cljs$lang$type = true;
cljs.core.async.t15010.cljs$lang$ctorStr = "cljs.core.async/t15010";
cljs.core.async.t15010.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15010");
});})(cs))
;
cljs.core.async.t15010.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15010.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15010.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15010.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15010.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15010.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15012){var self__ = this;
var _15012__$1 = this;return self__.meta15011;
});})(cs))
;
cljs.core.async.t15010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15012,meta15011__$1){var self__ = this;
var _15012__$1 = this;return (new cljs.core.async.t15010(self__.cs,self__.ch,self__.mult,meta15011__$1));
});})(cs))
;
cljs.core.async.__GT_t15010 = ((function (cs){
return (function __GT_t15010(cs__$1,ch__$1,mult__$1,meta15011){return (new cljs.core.async.t15010(cs__$1,ch__$1,mult__$1,meta15011));
});})(cs))
;
}
return (new cljs.core.async.t15010(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___15233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15147){var state_val_15148 = (state_15147[1]);if((state_val_15148 === 32))
{var inst_15015 = (state_15147[7]);var inst_15091 = (state_15147[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15147,31,Object,null,30);var inst_15098 = cljs.core.async.put_BANG_.call(null,inst_15091,inst_15015,done);var state_15147__$1 = state_15147;var statearr_15149_15234 = state_15147__$1;(statearr_15149_15234[2] = inst_15098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 1))
{var state_15147__$1 = state_15147;var statearr_15150_15235 = state_15147__$1;(statearr_15150_15235[2] = null);
(statearr_15150_15235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 33))
{var inst_15104 = (state_15147[9]);var inst_15106 = cljs.core.chunked_seq_QMARK_.call(null,inst_15104);var state_15147__$1 = state_15147;if(inst_15106)
{var statearr_15151_15236 = state_15147__$1;(statearr_15151_15236[1] = 36);
} else
{var statearr_15152_15237 = state_15147__$1;(statearr_15152_15237[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 2))
{var state_15147__$1 = state_15147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15147__$1,4,ch);
} else
{if((state_val_15148 === 34))
{var state_15147__$1 = state_15147;var statearr_15153_15238 = state_15147__$1;(statearr_15153_15238[2] = null);
(statearr_15153_15238[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 3))
{var inst_15145 = (state_15147[2]);var state_15147__$1 = state_15147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15147__$1,inst_15145);
} else
{if((state_val_15148 === 35))
{var inst_15129 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15154_15239 = state_15147__$1;(statearr_15154_15239[2] = inst_15129);
(statearr_15154_15239[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 4))
{var inst_15015 = (state_15147[7]);var inst_15015__$1 = (state_15147[2]);var inst_15016 = (inst_15015__$1 == null);var state_15147__$1 = (function (){var statearr_15155 = state_15147;(statearr_15155[7] = inst_15015__$1);
return statearr_15155;
})();if(cljs.core.truth_(inst_15016))
{var statearr_15156_15240 = state_15147__$1;(statearr_15156_15240[1] = 5);
} else
{var statearr_15157_15241 = state_15147__$1;(statearr_15157_15241[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 36))
{var inst_15104 = (state_15147[9]);var inst_15108 = cljs.core.chunk_first.call(null,inst_15104);var inst_15109 = cljs.core.chunk_rest.call(null,inst_15104);var inst_15110 = cljs.core.count.call(null,inst_15108);var inst_15083 = inst_15109;var inst_15084 = inst_15108;var inst_15085 = inst_15110;var inst_15086 = 0;var state_15147__$1 = (function (){var statearr_15158 = state_15147;(statearr_15158[10] = inst_15083);
(statearr_15158[11] = inst_15084);
(statearr_15158[12] = inst_15086);
(statearr_15158[13] = inst_15085);
return statearr_15158;
})();var statearr_15159_15242 = state_15147__$1;(statearr_15159_15242[2] = null);
(statearr_15159_15242[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 5))
{var inst_15022 = cljs.core.deref.call(null,cs);var inst_15023 = cljs.core.seq.call(null,inst_15022);var inst_15024 = inst_15023;var inst_15025 = null;var inst_15026 = 0;var inst_15027 = 0;var state_15147__$1 = (function (){var statearr_15160 = state_15147;(statearr_15160[14] = inst_15027);
(statearr_15160[15] = inst_15025);
(statearr_15160[16] = inst_15026);
(statearr_15160[17] = inst_15024);
return statearr_15160;
})();var statearr_15161_15243 = state_15147__$1;(statearr_15161_15243[2] = null);
(statearr_15161_15243[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 37))
{var inst_15104 = (state_15147[9]);var inst_15113 = cljs.core.first.call(null,inst_15104);var state_15147__$1 = (function (){var statearr_15162 = state_15147;(statearr_15162[18] = inst_15113);
return statearr_15162;
})();var statearr_15163_15244 = state_15147__$1;(statearr_15163_15244[2] = null);
(statearr_15163_15244[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 6))
{var inst_15075 = (state_15147[19]);var inst_15074 = cljs.core.deref.call(null,cs);var inst_15075__$1 = cljs.core.keys.call(null,inst_15074);var inst_15076 = cljs.core.count.call(null,inst_15075__$1);var inst_15077 = cljs.core.reset_BANG_.call(null,dctr,inst_15076);var inst_15082 = cljs.core.seq.call(null,inst_15075__$1);var inst_15083 = inst_15082;var inst_15084 = null;var inst_15085 = 0;var inst_15086 = 0;var state_15147__$1 = (function (){var statearr_15164 = state_15147;(statearr_15164[10] = inst_15083);
(statearr_15164[11] = inst_15084);
(statearr_15164[19] = inst_15075__$1);
(statearr_15164[20] = inst_15077);
(statearr_15164[12] = inst_15086);
(statearr_15164[13] = inst_15085);
return statearr_15164;
})();var statearr_15165_15245 = state_15147__$1;(statearr_15165_15245[2] = null);
(statearr_15165_15245[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 38))
{var inst_15126 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15166_15246 = state_15147__$1;(statearr_15166_15246[2] = inst_15126);
(statearr_15166_15246[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 7))
{var inst_15143 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15167_15247 = state_15147__$1;(statearr_15167_15247[2] = inst_15143);
(statearr_15167_15247[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 39))
{var inst_15104 = (state_15147[9]);var inst_15122 = (state_15147[2]);var inst_15123 = cljs.core.next.call(null,inst_15104);var inst_15083 = inst_15123;var inst_15084 = null;var inst_15085 = 0;var inst_15086 = 0;var state_15147__$1 = (function (){var statearr_15168 = state_15147;(statearr_15168[10] = inst_15083);
(statearr_15168[11] = inst_15084);
(statearr_15168[21] = inst_15122);
(statearr_15168[12] = inst_15086);
(statearr_15168[13] = inst_15085);
return statearr_15168;
})();var statearr_15169_15248 = state_15147__$1;(statearr_15169_15248[2] = null);
(statearr_15169_15248[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 8))
{var inst_15027 = (state_15147[14]);var inst_15026 = (state_15147[16]);var inst_15029 = (inst_15027 < inst_15026);var inst_15030 = inst_15029;var state_15147__$1 = state_15147;if(cljs.core.truth_(inst_15030))
{var statearr_15170_15249 = state_15147__$1;(statearr_15170_15249[1] = 10);
} else
{var statearr_15171_15250 = state_15147__$1;(statearr_15171_15250[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 40))
{var inst_15113 = (state_15147[18]);var inst_15114 = (state_15147[2]);var inst_15115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15116 = cljs.core.async.untap_STAR_.call(null,m,inst_15113);var state_15147__$1 = (function (){var statearr_15172 = state_15147;(statearr_15172[22] = inst_15114);
(statearr_15172[23] = inst_15115);
return statearr_15172;
})();var statearr_15173_15251 = state_15147__$1;(statearr_15173_15251[2] = inst_15116);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 9))
{var inst_15072 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15174_15252 = state_15147__$1;(statearr_15174_15252[2] = inst_15072);
(statearr_15174_15252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 41))
{var inst_15015 = (state_15147[7]);var inst_15113 = (state_15147[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15147,40,Object,null,39);var inst_15120 = cljs.core.async.put_BANG_.call(null,inst_15113,inst_15015,done);var state_15147__$1 = state_15147;var statearr_15175_15253 = state_15147__$1;(statearr_15175_15253[2] = inst_15120);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 10))
{var inst_15027 = (state_15147[14]);var inst_15025 = (state_15147[15]);var inst_15033 = cljs.core._nth.call(null,inst_15025,inst_15027);var inst_15034 = cljs.core.nth.call(null,inst_15033,0,null);var inst_15035 = cljs.core.nth.call(null,inst_15033,1,null);var state_15147__$1 = (function (){var statearr_15176 = state_15147;(statearr_15176[24] = inst_15034);
return statearr_15176;
})();if(cljs.core.truth_(inst_15035))
{var statearr_15177_15254 = state_15147__$1;(statearr_15177_15254[1] = 13);
} else
{var statearr_15178_15255 = state_15147__$1;(statearr_15178_15255[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 42))
{var state_15147__$1 = state_15147;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15147__$1,45,dchan);
} else
{if((state_val_15148 === 11))
{var inst_15024 = (state_15147[17]);var inst_15044 = (state_15147[25]);var inst_15044__$1 = cljs.core.seq.call(null,inst_15024);var state_15147__$1 = (function (){var statearr_15179 = state_15147;(statearr_15179[25] = inst_15044__$1);
return statearr_15179;
})();if(inst_15044__$1)
{var statearr_15180_15256 = state_15147__$1;(statearr_15180_15256[1] = 16);
} else
{var statearr_15181_15257 = state_15147__$1;(statearr_15181_15257[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 43))
{var state_15147__$1 = state_15147;var statearr_15182_15258 = state_15147__$1;(statearr_15182_15258[2] = null);
(statearr_15182_15258[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 12))
{var inst_15070 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15183_15259 = state_15147__$1;(statearr_15183_15259[2] = inst_15070);
(statearr_15183_15259[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 44))
{var inst_15140 = (state_15147[2]);var state_15147__$1 = (function (){var statearr_15184 = state_15147;(statearr_15184[26] = inst_15140);
return statearr_15184;
})();var statearr_15185_15260 = state_15147__$1;(statearr_15185_15260[2] = null);
(statearr_15185_15260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 13))
{var inst_15034 = (state_15147[24]);var inst_15037 = cljs.core.async.close_BANG_.call(null,inst_15034);var state_15147__$1 = state_15147;var statearr_15186_15261 = state_15147__$1;(statearr_15186_15261[2] = inst_15037);
(statearr_15186_15261[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 45))
{var inst_15137 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15190_15262 = state_15147__$1;(statearr_15190_15262[2] = inst_15137);
(statearr_15190_15262[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 14))
{var state_15147__$1 = state_15147;var statearr_15191_15263 = state_15147__$1;(statearr_15191_15263[2] = null);
(statearr_15191_15263[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 15))
{var inst_15027 = (state_15147[14]);var inst_15025 = (state_15147[15]);var inst_15026 = (state_15147[16]);var inst_15024 = (state_15147[17]);var inst_15040 = (state_15147[2]);var inst_15041 = (inst_15027 + 1);var tmp15187 = inst_15025;var tmp15188 = inst_15026;var tmp15189 = inst_15024;var inst_15024__$1 = tmp15189;var inst_15025__$1 = tmp15187;var inst_15026__$1 = tmp15188;var inst_15027__$1 = inst_15041;var state_15147__$1 = (function (){var statearr_15192 = state_15147;(statearr_15192[27] = inst_15040);
(statearr_15192[14] = inst_15027__$1);
(statearr_15192[15] = inst_15025__$1);
(statearr_15192[16] = inst_15026__$1);
(statearr_15192[17] = inst_15024__$1);
return statearr_15192;
})();var statearr_15193_15264 = state_15147__$1;(statearr_15193_15264[2] = null);
(statearr_15193_15264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 16))
{var inst_15044 = (state_15147[25]);var inst_15046 = cljs.core.chunked_seq_QMARK_.call(null,inst_15044);var state_15147__$1 = state_15147;if(inst_15046)
{var statearr_15194_15265 = state_15147__$1;(statearr_15194_15265[1] = 19);
} else
{var statearr_15195_15266 = state_15147__$1;(statearr_15195_15266[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 17))
{var state_15147__$1 = state_15147;var statearr_15196_15267 = state_15147__$1;(statearr_15196_15267[2] = null);
(statearr_15196_15267[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 18))
{var inst_15068 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15197_15268 = state_15147__$1;(statearr_15197_15268[2] = inst_15068);
(statearr_15197_15268[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 19))
{var inst_15044 = (state_15147[25]);var inst_15048 = cljs.core.chunk_first.call(null,inst_15044);var inst_15049 = cljs.core.chunk_rest.call(null,inst_15044);var inst_15050 = cljs.core.count.call(null,inst_15048);var inst_15024 = inst_15049;var inst_15025 = inst_15048;var inst_15026 = inst_15050;var inst_15027 = 0;var state_15147__$1 = (function (){var statearr_15198 = state_15147;(statearr_15198[14] = inst_15027);
(statearr_15198[15] = inst_15025);
(statearr_15198[16] = inst_15026);
(statearr_15198[17] = inst_15024);
return statearr_15198;
})();var statearr_15199_15269 = state_15147__$1;(statearr_15199_15269[2] = null);
(statearr_15199_15269[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 20))
{var inst_15044 = (state_15147[25]);var inst_15054 = cljs.core.first.call(null,inst_15044);var inst_15055 = cljs.core.nth.call(null,inst_15054,0,null);var inst_15056 = cljs.core.nth.call(null,inst_15054,1,null);var state_15147__$1 = (function (){var statearr_15200 = state_15147;(statearr_15200[28] = inst_15055);
return statearr_15200;
})();if(cljs.core.truth_(inst_15056))
{var statearr_15201_15270 = state_15147__$1;(statearr_15201_15270[1] = 22);
} else
{var statearr_15202_15271 = state_15147__$1;(statearr_15202_15271[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 21))
{var inst_15065 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15203_15272 = state_15147__$1;(statearr_15203_15272[2] = inst_15065);
(statearr_15203_15272[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 22))
{var inst_15055 = (state_15147[28]);var inst_15058 = cljs.core.async.close_BANG_.call(null,inst_15055);var state_15147__$1 = state_15147;var statearr_15204_15273 = state_15147__$1;(statearr_15204_15273[2] = inst_15058);
(statearr_15204_15273[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 23))
{var state_15147__$1 = state_15147;var statearr_15205_15274 = state_15147__$1;(statearr_15205_15274[2] = null);
(statearr_15205_15274[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 24))
{var inst_15044 = (state_15147[25]);var inst_15061 = (state_15147[2]);var inst_15062 = cljs.core.next.call(null,inst_15044);var inst_15024 = inst_15062;var inst_15025 = null;var inst_15026 = 0;var inst_15027 = 0;var state_15147__$1 = (function (){var statearr_15206 = state_15147;(statearr_15206[14] = inst_15027);
(statearr_15206[15] = inst_15025);
(statearr_15206[16] = inst_15026);
(statearr_15206[17] = inst_15024);
(statearr_15206[29] = inst_15061);
return statearr_15206;
})();var statearr_15207_15275 = state_15147__$1;(statearr_15207_15275[2] = null);
(statearr_15207_15275[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 25))
{var inst_15086 = (state_15147[12]);var inst_15085 = (state_15147[13]);var inst_15088 = (inst_15086 < inst_15085);var inst_15089 = inst_15088;var state_15147__$1 = state_15147;if(cljs.core.truth_(inst_15089))
{var statearr_15208_15276 = state_15147__$1;(statearr_15208_15276[1] = 27);
} else
{var statearr_15209_15277 = state_15147__$1;(statearr_15209_15277[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 26))
{var inst_15075 = (state_15147[19]);var inst_15133 = (state_15147[2]);var inst_15134 = cljs.core.seq.call(null,inst_15075);var state_15147__$1 = (function (){var statearr_15210 = state_15147;(statearr_15210[30] = inst_15133);
return statearr_15210;
})();if(inst_15134)
{var statearr_15211_15278 = state_15147__$1;(statearr_15211_15278[1] = 42);
} else
{var statearr_15212_15279 = state_15147__$1;(statearr_15212_15279[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 27))
{var inst_15084 = (state_15147[11]);var inst_15086 = (state_15147[12]);var inst_15091 = cljs.core._nth.call(null,inst_15084,inst_15086);var state_15147__$1 = (function (){var statearr_15213 = state_15147;(statearr_15213[8] = inst_15091);
return statearr_15213;
})();var statearr_15214_15280 = state_15147__$1;(statearr_15214_15280[2] = null);
(statearr_15214_15280[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 28))
{var inst_15083 = (state_15147[10]);var inst_15104 = (state_15147[9]);var inst_15104__$1 = cljs.core.seq.call(null,inst_15083);var state_15147__$1 = (function (){var statearr_15218 = state_15147;(statearr_15218[9] = inst_15104__$1);
return statearr_15218;
})();if(inst_15104__$1)
{var statearr_15219_15281 = state_15147__$1;(statearr_15219_15281[1] = 33);
} else
{var statearr_15220_15282 = state_15147__$1;(statearr_15220_15282[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 29))
{var inst_15131 = (state_15147[2]);var state_15147__$1 = state_15147;var statearr_15221_15283 = state_15147__$1;(statearr_15221_15283[2] = inst_15131);
(statearr_15221_15283[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 30))
{var inst_15083 = (state_15147[10]);var inst_15084 = (state_15147[11]);var inst_15086 = (state_15147[12]);var inst_15085 = (state_15147[13]);var inst_15100 = (state_15147[2]);var inst_15101 = (inst_15086 + 1);var tmp15215 = inst_15083;var tmp15216 = inst_15084;var tmp15217 = inst_15085;var inst_15083__$1 = tmp15215;var inst_15084__$1 = tmp15216;var inst_15085__$1 = tmp15217;var inst_15086__$1 = inst_15101;var state_15147__$1 = (function (){var statearr_15222 = state_15147;(statearr_15222[10] = inst_15083__$1);
(statearr_15222[11] = inst_15084__$1);
(statearr_15222[31] = inst_15100);
(statearr_15222[12] = inst_15086__$1);
(statearr_15222[13] = inst_15085__$1);
return statearr_15222;
})();var statearr_15223_15284 = state_15147__$1;(statearr_15223_15284[2] = null);
(statearr_15223_15284[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15148 === 31))
{var inst_15091 = (state_15147[8]);var inst_15092 = (state_15147[2]);var inst_15093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15094 = cljs.core.async.untap_STAR_.call(null,m,inst_15091);var state_15147__$1 = (function (){var statearr_15224 = state_15147;(statearr_15224[32] = inst_15092);
(statearr_15224[33] = inst_15093);
return statearr_15224;
})();var statearr_15225_15285 = state_15147__$1;(statearr_15225_15285[2] = inst_15094);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15229[0] = state_machine__5548__auto__);
(statearr_15229[1] = 1);
return statearr_15229;
});
var state_machine__5548__auto____1 = (function (state_15147){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15147);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15230){if((e15230 instanceof Object))
{var ex__5551__auto__ = e15230;var statearr_15231_15286 = state_15147;(statearr_15231_15286[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15287 = state_15147;
state_15147 = G__15287;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15147){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15232 = f__5563__auto__.call(null);(statearr_15232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15233);
return statearr_15232;
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
cljs.core.async.Mix = (function (){var obj15289 = {};return obj15289;
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
;var m = (function (){if(typeof cljs.core.async.t15399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15399 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15400){
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
this.meta15400 = meta15400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15399.cljs$lang$type = true;
cljs.core.async.t15399.cljs$lang$ctorStr = "cljs.core.async/t15399";
cljs.core.async.t15399.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15399");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15399.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15401){var self__ = this;
var _15401__$1 = this;return self__.meta15400;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15401,meta15400__$1){var self__ = this;
var _15401__$1 = this;return (new cljs.core.async.t15399(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15400__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15399 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15399(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15400){return (new cljs.core.async.t15399(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15400));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15399(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___15508 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15466){var state_val_15467 = (state_15466[1]);if((state_val_15467 === 1))
{var inst_15405 = (state_15466[7]);var inst_15405__$1 = calc_state.call(null);var inst_15406 = cljs.core.seq_QMARK_.call(null,inst_15405__$1);var state_15466__$1 = (function (){var statearr_15468 = state_15466;(statearr_15468[7] = inst_15405__$1);
return statearr_15468;
})();if(inst_15406)
{var statearr_15469_15509 = state_15466__$1;(statearr_15469_15509[1] = 2);
} else
{var statearr_15470_15510 = state_15466__$1;(statearr_15470_15510[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 2))
{var inst_15405 = (state_15466[7]);var inst_15408 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15405);var state_15466__$1 = state_15466;var statearr_15471_15511 = state_15466__$1;(statearr_15471_15511[2] = inst_15408);
(statearr_15471_15511[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 3))
{var inst_15405 = (state_15466[7]);var state_15466__$1 = state_15466;var statearr_15472_15512 = state_15466__$1;(statearr_15472_15512[2] = inst_15405);
(statearr_15472_15512[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 4))
{var inst_15405 = (state_15466[7]);var inst_15411 = (state_15466[2]);var inst_15412 = cljs.core.get.call(null,inst_15411,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15413 = cljs.core.get.call(null,inst_15411,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15414 = cljs.core.get.call(null,inst_15411,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15415 = inst_15405;var state_15466__$1 = (function (){var statearr_15473 = state_15466;(statearr_15473[8] = inst_15415);
(statearr_15473[9] = inst_15414);
(statearr_15473[10] = inst_15413);
(statearr_15473[11] = inst_15412);
return statearr_15473;
})();var statearr_15474_15513 = state_15466__$1;(statearr_15474_15513[2] = null);
(statearr_15474_15513[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 5))
{var inst_15415 = (state_15466[8]);var inst_15418 = cljs.core.seq_QMARK_.call(null,inst_15415);var state_15466__$1 = state_15466;if(inst_15418)
{var statearr_15475_15514 = state_15466__$1;(statearr_15475_15514[1] = 7);
} else
{var statearr_15476_15515 = state_15466__$1;(statearr_15476_15515[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 6))
{var inst_15464 = (state_15466[2]);var state_15466__$1 = state_15466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15466__$1,inst_15464);
} else
{if((state_val_15467 === 7))
{var inst_15415 = (state_15466[8]);var inst_15420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15415);var state_15466__$1 = state_15466;var statearr_15477_15516 = state_15466__$1;(statearr_15477_15516[2] = inst_15420);
(statearr_15477_15516[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 8))
{var inst_15415 = (state_15466[8]);var state_15466__$1 = state_15466;var statearr_15478_15517 = state_15466__$1;(statearr_15478_15517[2] = inst_15415);
(statearr_15478_15517[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 9))
{var inst_15423 = (state_15466[12]);var inst_15423__$1 = (state_15466[2]);var inst_15424 = cljs.core.get.call(null,inst_15423__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15425 = cljs.core.get.call(null,inst_15423__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15426 = cljs.core.get.call(null,inst_15423__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15466__$1 = (function (){var statearr_15479 = state_15466;(statearr_15479[13] = inst_15426);
(statearr_15479[14] = inst_15425);
(statearr_15479[12] = inst_15423__$1);
return statearr_15479;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15466__$1,10,inst_15424);
} else
{if((state_val_15467 === 10))
{var inst_15430 = (state_15466[15]);var inst_15431 = (state_15466[16]);var inst_15429 = (state_15466[2]);var inst_15430__$1 = cljs.core.nth.call(null,inst_15429,0,null);var inst_15431__$1 = cljs.core.nth.call(null,inst_15429,1,null);var inst_15432 = (inst_15430__$1 == null);var inst_15433 = cljs.core._EQ_.call(null,inst_15431__$1,change);var inst_15434 = (inst_15432) || (inst_15433);var state_15466__$1 = (function (){var statearr_15480 = state_15466;(statearr_15480[15] = inst_15430__$1);
(statearr_15480[16] = inst_15431__$1);
return statearr_15480;
})();if(cljs.core.truth_(inst_15434))
{var statearr_15481_15518 = state_15466__$1;(statearr_15481_15518[1] = 11);
} else
{var statearr_15482_15519 = state_15466__$1;(statearr_15482_15519[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 11))
{var inst_15430 = (state_15466[15]);var inst_15436 = (inst_15430 == null);var state_15466__$1 = state_15466;if(cljs.core.truth_(inst_15436))
{var statearr_15483_15520 = state_15466__$1;(statearr_15483_15520[1] = 14);
} else
{var statearr_15484_15521 = state_15466__$1;(statearr_15484_15521[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 12))
{var inst_15426 = (state_15466[13]);var inst_15431 = (state_15466[16]);var inst_15445 = (state_15466[17]);var inst_15445__$1 = inst_15426.call(null,inst_15431);var state_15466__$1 = (function (){var statearr_15485 = state_15466;(statearr_15485[17] = inst_15445__$1);
return statearr_15485;
})();if(cljs.core.truth_(inst_15445__$1))
{var statearr_15486_15522 = state_15466__$1;(statearr_15486_15522[1] = 17);
} else
{var statearr_15487_15523 = state_15466__$1;(statearr_15487_15523[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 13))
{var inst_15462 = (state_15466[2]);var state_15466__$1 = state_15466;var statearr_15488_15524 = state_15466__$1;(statearr_15488_15524[2] = inst_15462);
(statearr_15488_15524[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 14))
{var inst_15431 = (state_15466[16]);var inst_15438 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15431);var state_15466__$1 = state_15466;var statearr_15489_15525 = state_15466__$1;(statearr_15489_15525[2] = inst_15438);
(statearr_15489_15525[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 15))
{var state_15466__$1 = state_15466;var statearr_15490_15526 = state_15466__$1;(statearr_15490_15526[2] = null);
(statearr_15490_15526[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 16))
{var inst_15441 = (state_15466[2]);var inst_15442 = calc_state.call(null);var inst_15415 = inst_15442;var state_15466__$1 = (function (){var statearr_15491 = state_15466;(statearr_15491[8] = inst_15415);
(statearr_15491[18] = inst_15441);
return statearr_15491;
})();var statearr_15492_15527 = state_15466__$1;(statearr_15492_15527[2] = null);
(statearr_15492_15527[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 17))
{var inst_15445 = (state_15466[17]);var state_15466__$1 = state_15466;var statearr_15493_15528 = state_15466__$1;(statearr_15493_15528[2] = inst_15445);
(statearr_15493_15528[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 18))
{var inst_15426 = (state_15466[13]);var inst_15425 = (state_15466[14]);var inst_15431 = (state_15466[16]);var inst_15448 = cljs.core.empty_QMARK_.call(null,inst_15426);var inst_15449 = inst_15425.call(null,inst_15431);var inst_15450 = cljs.core.not.call(null,inst_15449);var inst_15451 = (inst_15448) && (inst_15450);var state_15466__$1 = state_15466;var statearr_15494_15529 = state_15466__$1;(statearr_15494_15529[2] = inst_15451);
(statearr_15494_15529[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 19))
{var inst_15453 = (state_15466[2]);var state_15466__$1 = state_15466;if(cljs.core.truth_(inst_15453))
{var statearr_15495_15530 = state_15466__$1;(statearr_15495_15530[1] = 20);
} else
{var statearr_15496_15531 = state_15466__$1;(statearr_15496_15531[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 20))
{var inst_15430 = (state_15466[15]);var state_15466__$1 = state_15466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15466__$1,23,out,inst_15430);
} else
{if((state_val_15467 === 21))
{var state_15466__$1 = state_15466;var statearr_15497_15532 = state_15466__$1;(statearr_15497_15532[2] = null);
(statearr_15497_15532[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 22))
{var inst_15423 = (state_15466[12]);var inst_15459 = (state_15466[2]);var inst_15415 = inst_15423;var state_15466__$1 = (function (){var statearr_15498 = state_15466;(statearr_15498[19] = inst_15459);
(statearr_15498[8] = inst_15415);
return statearr_15498;
})();var statearr_15499_15533 = state_15466__$1;(statearr_15499_15533[2] = null);
(statearr_15499_15533[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15467 === 23))
{var inst_15456 = (state_15466[2]);var state_15466__$1 = state_15466;var statearr_15500_15534 = state_15466__$1;(statearr_15500_15534[2] = inst_15456);
(statearr_15500_15534[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_15504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15504[0] = state_machine__5548__auto__);
(statearr_15504[1] = 1);
return statearr_15504;
});
var state_machine__5548__auto____1 = (function (state_15466){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15505){if((e15505 instanceof Object))
{var ex__5551__auto__ = e15505;var statearr_15506_15535 = state_15466;(statearr_15506_15535[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15536 = state_15466;
state_15466 = G__15536;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15466){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15507 = f__5563__auto__.call(null);(statearr_15507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15508);
return statearr_15507;
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
cljs.core.async.Pub = (function (){var obj15538 = {};return obj15538;
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
return (function (p1__15539_SHARP_){if(cljs.core.truth_(p1__15539_SHARP_.call(null,topic)))
{return p1__15539_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15539_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15664 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15665){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15665 = meta15665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15664.cljs$lang$type = true;
cljs.core.async.t15664.cljs$lang$ctorStr = "cljs.core.async/t15664";
cljs.core.async.t15664.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15664");
});})(mults,ensure_mult))
;
cljs.core.async.t15664.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15664.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15664.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15664.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15666){var self__ = this;
var _15666__$1 = this;return self__.meta15665;
});})(mults,ensure_mult))
;
cljs.core.async.t15664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15666,meta15665__$1){var self__ = this;
var _15666__$1 = this;return (new cljs.core.async.t15664(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15665__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15664 = ((function (mults,ensure_mult){
return (function __GT_t15664(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15665){return (new cljs.core.async.t15664(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15665));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15664(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___15788 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15740){var state_val_15741 = (state_15740[1]);if((state_val_15741 === 1))
{var state_15740__$1 = state_15740;var statearr_15742_15789 = state_15740__$1;(statearr_15742_15789[2] = null);
(statearr_15742_15789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 2))
{var state_15740__$1 = state_15740;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15740__$1,4,ch);
} else
{if((state_val_15741 === 3))
{var inst_15738 = (state_15740[2]);var state_15740__$1 = state_15740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15740__$1,inst_15738);
} else
{if((state_val_15741 === 4))
{var inst_15669 = (state_15740[7]);var inst_15669__$1 = (state_15740[2]);var inst_15670 = (inst_15669__$1 == null);var state_15740__$1 = (function (){var statearr_15743 = state_15740;(statearr_15743[7] = inst_15669__$1);
return statearr_15743;
})();if(cljs.core.truth_(inst_15670))
{var statearr_15744_15790 = state_15740__$1;(statearr_15744_15790[1] = 5);
} else
{var statearr_15745_15791 = state_15740__$1;(statearr_15745_15791[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 5))
{var inst_15676 = cljs.core.deref.call(null,mults);var inst_15677 = cljs.core.vals.call(null,inst_15676);var inst_15678 = cljs.core.seq.call(null,inst_15677);var inst_15679 = inst_15678;var inst_15680 = null;var inst_15681 = 0;var inst_15682 = 0;var state_15740__$1 = (function (){var statearr_15746 = state_15740;(statearr_15746[8] = inst_15679);
(statearr_15746[9] = inst_15680);
(statearr_15746[10] = inst_15682);
(statearr_15746[11] = inst_15681);
return statearr_15746;
})();var statearr_15747_15792 = state_15740__$1;(statearr_15747_15792[2] = null);
(statearr_15747_15792[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 6))
{var inst_15717 = (state_15740[12]);var inst_15719 = (state_15740[13]);var inst_15669 = (state_15740[7]);var inst_15717__$1 = topic_fn.call(null,inst_15669);var inst_15718 = cljs.core.deref.call(null,mults);var inst_15719__$1 = cljs.core.get.call(null,inst_15718,inst_15717__$1);var state_15740__$1 = (function (){var statearr_15748 = state_15740;(statearr_15748[12] = inst_15717__$1);
(statearr_15748[13] = inst_15719__$1);
return statearr_15748;
})();if(cljs.core.truth_(inst_15719__$1))
{var statearr_15749_15793 = state_15740__$1;(statearr_15749_15793[1] = 19);
} else
{var statearr_15750_15794 = state_15740__$1;(statearr_15750_15794[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 7))
{var inst_15736 = (state_15740[2]);var state_15740__$1 = state_15740;var statearr_15751_15795 = state_15740__$1;(statearr_15751_15795[2] = inst_15736);
(statearr_15751_15795[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 8))
{var inst_15682 = (state_15740[10]);var inst_15681 = (state_15740[11]);var inst_15684 = (inst_15682 < inst_15681);var inst_15685 = inst_15684;var state_15740__$1 = state_15740;if(cljs.core.truth_(inst_15685))
{var statearr_15755_15796 = state_15740__$1;(statearr_15755_15796[1] = 10);
} else
{var statearr_15756_15797 = state_15740__$1;(statearr_15756_15797[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 9))
{var inst_15715 = (state_15740[2]);var state_15740__$1 = state_15740;var statearr_15757_15798 = state_15740__$1;(statearr_15757_15798[2] = inst_15715);
(statearr_15757_15798[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 10))
{var inst_15679 = (state_15740[8]);var inst_15680 = (state_15740[9]);var inst_15682 = (state_15740[10]);var inst_15681 = (state_15740[11]);var inst_15687 = cljs.core._nth.call(null,inst_15680,inst_15682);var inst_15688 = cljs.core.async.muxch_STAR_.call(null,inst_15687);var inst_15689 = cljs.core.async.close_BANG_.call(null,inst_15688);var inst_15690 = (inst_15682 + 1);var tmp15752 = inst_15679;var tmp15753 = inst_15680;var tmp15754 = inst_15681;var inst_15679__$1 = tmp15752;var inst_15680__$1 = tmp15753;var inst_15681__$1 = tmp15754;var inst_15682__$1 = inst_15690;var state_15740__$1 = (function (){var statearr_15758 = state_15740;(statearr_15758[14] = inst_15689);
(statearr_15758[8] = inst_15679__$1);
(statearr_15758[9] = inst_15680__$1);
(statearr_15758[10] = inst_15682__$1);
(statearr_15758[11] = inst_15681__$1);
return statearr_15758;
})();var statearr_15759_15799 = state_15740__$1;(statearr_15759_15799[2] = null);
(statearr_15759_15799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 11))
{var inst_15693 = (state_15740[15]);var inst_15679 = (state_15740[8]);var inst_15693__$1 = cljs.core.seq.call(null,inst_15679);var state_15740__$1 = (function (){var statearr_15760 = state_15740;(statearr_15760[15] = inst_15693__$1);
return statearr_15760;
})();if(inst_15693__$1)
{var statearr_15761_15800 = state_15740__$1;(statearr_15761_15800[1] = 13);
} else
{var statearr_15762_15801 = state_15740__$1;(statearr_15762_15801[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 12))
{var inst_15713 = (state_15740[2]);var state_15740__$1 = state_15740;var statearr_15763_15802 = state_15740__$1;(statearr_15763_15802[2] = inst_15713);
(statearr_15763_15802[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 13))
{var inst_15693 = (state_15740[15]);var inst_15695 = cljs.core.chunked_seq_QMARK_.call(null,inst_15693);var state_15740__$1 = state_15740;if(inst_15695)
{var statearr_15764_15803 = state_15740__$1;(statearr_15764_15803[1] = 16);
} else
{var statearr_15765_15804 = state_15740__$1;(statearr_15765_15804[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 14))
{var state_15740__$1 = state_15740;var statearr_15766_15805 = state_15740__$1;(statearr_15766_15805[2] = null);
(statearr_15766_15805[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 15))
{var inst_15711 = (state_15740[2]);var state_15740__$1 = state_15740;var statearr_15767_15806 = state_15740__$1;(statearr_15767_15806[2] = inst_15711);
(statearr_15767_15806[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 16))
{var inst_15693 = (state_15740[15]);var inst_15697 = cljs.core.chunk_first.call(null,inst_15693);var inst_15698 = cljs.core.chunk_rest.call(null,inst_15693);var inst_15699 = cljs.core.count.call(null,inst_15697);var inst_15679 = inst_15698;var inst_15680 = inst_15697;var inst_15681 = inst_15699;var inst_15682 = 0;var state_15740__$1 = (function (){var statearr_15768 = state_15740;(statearr_15768[8] = inst_15679);
(statearr_15768[9] = inst_15680);
(statearr_15768[10] = inst_15682);
(statearr_15768[11] = inst_15681);
return statearr_15768;
})();var statearr_15769_15807 = state_15740__$1;(statearr_15769_15807[2] = null);
(statearr_15769_15807[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 17))
{var inst_15693 = (state_15740[15]);var inst_15702 = cljs.core.first.call(null,inst_15693);var inst_15703 = cljs.core.async.muxch_STAR_.call(null,inst_15702);var inst_15704 = cljs.core.async.close_BANG_.call(null,inst_15703);var inst_15705 = cljs.core.next.call(null,inst_15693);var inst_15679 = inst_15705;var inst_15680 = null;var inst_15681 = 0;var inst_15682 = 0;var state_15740__$1 = (function (){var statearr_15770 = state_15740;(statearr_15770[8] = inst_15679);
(statearr_15770[9] = inst_15680);
(statearr_15770[10] = inst_15682);
(statearr_15770[16] = inst_15704);
(statearr_15770[11] = inst_15681);
return statearr_15770;
})();var statearr_15771_15808 = state_15740__$1;(statearr_15771_15808[2] = null);
(statearr_15771_15808[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 18))
{var inst_15708 = (state_15740[2]);var state_15740__$1 = state_15740;var statearr_15772_15809 = state_15740__$1;(statearr_15772_15809[2] = inst_15708);
(statearr_15772_15809[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 19))
{var state_15740__$1 = state_15740;var statearr_15773_15810 = state_15740__$1;(statearr_15773_15810[2] = null);
(statearr_15773_15810[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 20))
{var state_15740__$1 = state_15740;var statearr_15774_15811 = state_15740__$1;(statearr_15774_15811[2] = null);
(statearr_15774_15811[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 21))
{var inst_15733 = (state_15740[2]);var state_15740__$1 = (function (){var statearr_15775 = state_15740;(statearr_15775[17] = inst_15733);
return statearr_15775;
})();var statearr_15776_15812 = state_15740__$1;(statearr_15776_15812[2] = null);
(statearr_15776_15812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 22))
{var inst_15730 = (state_15740[2]);var state_15740__$1 = state_15740;var statearr_15777_15813 = state_15740__$1;(statearr_15777_15813[2] = inst_15730);
(statearr_15777_15813[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 23))
{var inst_15717 = (state_15740[12]);var inst_15721 = (state_15740[2]);var inst_15722 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15717);var state_15740__$1 = (function (){var statearr_15778 = state_15740;(statearr_15778[18] = inst_15721);
return statearr_15778;
})();var statearr_15779_15814 = state_15740__$1;(statearr_15779_15814[2] = inst_15722);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15740__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15741 === 24))
{var inst_15719 = (state_15740[13]);var inst_15669 = (state_15740[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15740,23,Object,null,22);var inst_15726 = cljs.core.async.muxch_STAR_.call(null,inst_15719);var state_15740__$1 = state_15740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15740__$1,25,inst_15726,inst_15669);
} else
{if((state_val_15741 === 25))
{var inst_15728 = (state_15740[2]);var state_15740__$1 = state_15740;var statearr_15780_15815 = state_15740__$1;(statearr_15780_15815[2] = inst_15728);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15740__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_15784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15784[0] = state_machine__5548__auto__);
(statearr_15784[1] = 1);
return statearr_15784;
});
var state_machine__5548__auto____1 = (function (state_15740){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15740);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15785){if((e15785 instanceof Object))
{var ex__5551__auto__ = e15785;var statearr_15786_15816 = state_15740;(statearr_15786_15816[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15740);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15817 = state_15740;
state_15740 = G__15817;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15740){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15787 = f__5563__auto__.call(null);(statearr_15787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15788);
return statearr_15787;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___15954 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15924){var state_val_15925 = (state_15924[1]);if((state_val_15925 === 1))
{var state_15924__$1 = state_15924;var statearr_15926_15955 = state_15924__$1;(statearr_15926_15955[2] = null);
(statearr_15926_15955[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 2))
{var inst_15887 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15888 = 0;var state_15924__$1 = (function (){var statearr_15927 = state_15924;(statearr_15927[7] = inst_15888);
(statearr_15927[8] = inst_15887);
return statearr_15927;
})();var statearr_15928_15956 = state_15924__$1;(statearr_15928_15956[2] = null);
(statearr_15928_15956[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 3))
{var inst_15922 = (state_15924[2]);var state_15924__$1 = state_15924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15924__$1,inst_15922);
} else
{if((state_val_15925 === 4))
{var inst_15888 = (state_15924[7]);var inst_15890 = (inst_15888 < cnt);var state_15924__$1 = state_15924;if(cljs.core.truth_(inst_15890))
{var statearr_15929_15957 = state_15924__$1;(statearr_15929_15957[1] = 6);
} else
{var statearr_15930_15958 = state_15924__$1;(statearr_15930_15958[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 5))
{var inst_15908 = (state_15924[2]);var state_15924__$1 = (function (){var statearr_15931 = state_15924;(statearr_15931[9] = inst_15908);
return statearr_15931;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15924__$1,12,dchan);
} else
{if((state_val_15925 === 6))
{var state_15924__$1 = state_15924;var statearr_15932_15959 = state_15924__$1;(statearr_15932_15959[2] = null);
(statearr_15932_15959[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 7))
{var state_15924__$1 = state_15924;var statearr_15933_15960 = state_15924__$1;(statearr_15933_15960[2] = null);
(statearr_15933_15960[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 8))
{var inst_15906 = (state_15924[2]);var state_15924__$1 = state_15924;var statearr_15934_15961 = state_15924__$1;(statearr_15934_15961[2] = inst_15906);
(statearr_15934_15961[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 9))
{var inst_15888 = (state_15924[7]);var inst_15901 = (state_15924[2]);var inst_15902 = (inst_15888 + 1);var inst_15888__$1 = inst_15902;var state_15924__$1 = (function (){var statearr_15935 = state_15924;(statearr_15935[7] = inst_15888__$1);
(statearr_15935[10] = inst_15901);
return statearr_15935;
})();var statearr_15936_15962 = state_15924__$1;(statearr_15936_15962[2] = null);
(statearr_15936_15962[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 10))
{var inst_15892 = (state_15924[2]);var inst_15893 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15924__$1 = (function (){var statearr_15937 = state_15924;(statearr_15937[11] = inst_15892);
return statearr_15937;
})();var statearr_15938_15963 = state_15924__$1;(statearr_15938_15963[2] = inst_15893);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15924__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 11))
{var inst_15888 = (state_15924[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15924,10,Object,null,9);var inst_15897 = chs__$1.call(null,inst_15888);var inst_15898 = done.call(null,inst_15888);var inst_15899 = cljs.core.async.take_BANG_.call(null,inst_15897,inst_15898);var state_15924__$1 = state_15924;var statearr_15939_15964 = state_15924__$1;(statearr_15939_15964[2] = inst_15899);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15924__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 12))
{var inst_15910 = (state_15924[12]);var inst_15910__$1 = (state_15924[2]);var inst_15911 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15910__$1);var state_15924__$1 = (function (){var statearr_15940 = state_15924;(statearr_15940[12] = inst_15910__$1);
return statearr_15940;
})();if(cljs.core.truth_(inst_15911))
{var statearr_15941_15965 = state_15924__$1;(statearr_15941_15965[1] = 13);
} else
{var statearr_15942_15966 = state_15924__$1;(statearr_15942_15966[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 13))
{var inst_15913 = cljs.core.async.close_BANG_.call(null,out);var state_15924__$1 = state_15924;var statearr_15943_15967 = state_15924__$1;(statearr_15943_15967[2] = inst_15913);
(statearr_15943_15967[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 14))
{var inst_15910 = (state_15924[12]);var inst_15915 = cljs.core.apply.call(null,f,inst_15910);var state_15924__$1 = state_15924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15924__$1,16,out,inst_15915);
} else
{if((state_val_15925 === 15))
{var inst_15920 = (state_15924[2]);var state_15924__$1 = state_15924;var statearr_15944_15968 = state_15924__$1;(statearr_15944_15968[2] = inst_15920);
(statearr_15944_15968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15925 === 16))
{var inst_15917 = (state_15924[2]);var state_15924__$1 = (function (){var statearr_15945 = state_15924;(statearr_15945[13] = inst_15917);
return statearr_15945;
})();var statearr_15946_15969 = state_15924__$1;(statearr_15946_15969[2] = null);
(statearr_15946_15969[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_15950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15950[0] = state_machine__5548__auto__);
(statearr_15950[1] = 1);
return statearr_15950;
});
var state_machine__5548__auto____1 = (function (state_15924){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15924);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15951){if((e15951 instanceof Object))
{var ex__5551__auto__ = e15951;var statearr_15952_15970 = state_15924;(statearr_15952_15970[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15951;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15971 = state_15924;
state_15924 = G__15971;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15924){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15953 = f__5563__auto__.call(null);(statearr_15953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15954);
return statearr_15953;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16055){var state_val_16056 = (state_16055[1]);if((state_val_16056 === 1))
{var inst_16026 = cljs.core.vec.call(null,chs);var inst_16027 = inst_16026;var state_16055__$1 = (function (){var statearr_16057 = state_16055;(statearr_16057[7] = inst_16027);
return statearr_16057;
})();var statearr_16058_16080 = state_16055__$1;(statearr_16058_16080[2] = null);
(statearr_16058_16080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 2))
{var inst_16027 = (state_16055[7]);var inst_16029 = cljs.core.count.call(null,inst_16027);var inst_16030 = (inst_16029 > 0);var state_16055__$1 = state_16055;if(cljs.core.truth_(inst_16030))
{var statearr_16059_16081 = state_16055__$1;(statearr_16059_16081[1] = 4);
} else
{var statearr_16060_16082 = state_16055__$1;(statearr_16060_16082[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 3))
{var inst_16053 = (state_16055[2]);var state_16055__$1 = state_16055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16055__$1,inst_16053);
} else
{if((state_val_16056 === 4))
{var inst_16027 = (state_16055[7]);var state_16055__$1 = state_16055;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16055__$1,7,inst_16027);
} else
{if((state_val_16056 === 5))
{var inst_16049 = cljs.core.async.close_BANG_.call(null,out);var state_16055__$1 = state_16055;var statearr_16061_16083 = state_16055__$1;(statearr_16061_16083[2] = inst_16049);
(statearr_16061_16083[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 6))
{var inst_16051 = (state_16055[2]);var state_16055__$1 = state_16055;var statearr_16062_16084 = state_16055__$1;(statearr_16062_16084[2] = inst_16051);
(statearr_16062_16084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 7))
{var inst_16035 = (state_16055[8]);var inst_16034 = (state_16055[9]);var inst_16034__$1 = (state_16055[2]);var inst_16035__$1 = cljs.core.nth.call(null,inst_16034__$1,0,null);var inst_16036 = cljs.core.nth.call(null,inst_16034__$1,1,null);var inst_16037 = (inst_16035__$1 == null);var state_16055__$1 = (function (){var statearr_16063 = state_16055;(statearr_16063[8] = inst_16035__$1);
(statearr_16063[10] = inst_16036);
(statearr_16063[9] = inst_16034__$1);
return statearr_16063;
})();if(cljs.core.truth_(inst_16037))
{var statearr_16064_16085 = state_16055__$1;(statearr_16064_16085[1] = 8);
} else
{var statearr_16065_16086 = state_16055__$1;(statearr_16065_16086[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 8))
{var inst_16027 = (state_16055[7]);var inst_16035 = (state_16055[8]);var inst_16036 = (state_16055[10]);var inst_16034 = (state_16055[9]);var inst_16039 = (function (){var c = inst_16036;var v = inst_16035;var vec__16032 = inst_16034;var cs = inst_16027;return ((function (c,v,vec__16032,cs,inst_16027,inst_16035,inst_16036,inst_16034,state_val_16056){
return (function (p1__15972_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15972_SHARP_);
});
;})(c,v,vec__16032,cs,inst_16027,inst_16035,inst_16036,inst_16034,state_val_16056))
})();var inst_16040 = cljs.core.filterv.call(null,inst_16039,inst_16027);var inst_16027__$1 = inst_16040;var state_16055__$1 = (function (){var statearr_16066 = state_16055;(statearr_16066[7] = inst_16027__$1);
return statearr_16066;
})();var statearr_16067_16087 = state_16055__$1;(statearr_16067_16087[2] = null);
(statearr_16067_16087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 9))
{var inst_16035 = (state_16055[8]);var state_16055__$1 = state_16055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16055__$1,11,out,inst_16035);
} else
{if((state_val_16056 === 10))
{var inst_16047 = (state_16055[2]);var state_16055__$1 = state_16055;var statearr_16069_16088 = state_16055__$1;(statearr_16069_16088[2] = inst_16047);
(statearr_16069_16088[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16056 === 11))
{var inst_16027 = (state_16055[7]);var inst_16044 = (state_16055[2]);var tmp16068 = inst_16027;var inst_16027__$1 = tmp16068;var state_16055__$1 = (function (){var statearr_16070 = state_16055;(statearr_16070[7] = inst_16027__$1);
(statearr_16070[11] = inst_16044);
return statearr_16070;
})();var statearr_16071_16089 = state_16055__$1;(statearr_16071_16089[2] = null);
(statearr_16071_16089[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16075 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16075[0] = state_machine__5548__auto__);
(statearr_16075[1] = 1);
return statearr_16075;
});
var state_machine__5548__auto____1 = (function (state_16055){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16055);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16076){if((e16076 instanceof Object))
{var ex__5551__auto__ = e16076;var statearr_16077_16090 = state_16055;(statearr_16077_16090[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16091 = state_16055;
state_16055 = G__16091;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16055){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16078 = f__5563__auto__.call(null);(statearr_16078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16079);
return statearr_16078;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16184 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16161){var state_val_16162 = (state_16161[1]);if((state_val_16162 === 1))
{var inst_16138 = 0;var state_16161__$1 = (function (){var statearr_16163 = state_16161;(statearr_16163[7] = inst_16138);
return statearr_16163;
})();var statearr_16164_16185 = state_16161__$1;(statearr_16164_16185[2] = null);
(statearr_16164_16185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 2))
{var inst_16138 = (state_16161[7]);var inst_16140 = (inst_16138 < n);var state_16161__$1 = state_16161;if(cljs.core.truth_(inst_16140))
{var statearr_16165_16186 = state_16161__$1;(statearr_16165_16186[1] = 4);
} else
{var statearr_16166_16187 = state_16161__$1;(statearr_16166_16187[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 3))
{var inst_16158 = (state_16161[2]);var inst_16159 = cljs.core.async.close_BANG_.call(null,out);var state_16161__$1 = (function (){var statearr_16167 = state_16161;(statearr_16167[8] = inst_16158);
return statearr_16167;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16161__$1,inst_16159);
} else
{if((state_val_16162 === 4))
{var state_16161__$1 = state_16161;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16161__$1,7,ch);
} else
{if((state_val_16162 === 5))
{var state_16161__$1 = state_16161;var statearr_16168_16188 = state_16161__$1;(statearr_16168_16188[2] = null);
(statearr_16168_16188[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 6))
{var inst_16156 = (state_16161[2]);var state_16161__$1 = state_16161;var statearr_16169_16189 = state_16161__$1;(statearr_16169_16189[2] = inst_16156);
(statearr_16169_16189[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 7))
{var inst_16143 = (state_16161[9]);var inst_16143__$1 = (state_16161[2]);var inst_16144 = (inst_16143__$1 == null);var inst_16145 = cljs.core.not.call(null,inst_16144);var state_16161__$1 = (function (){var statearr_16170 = state_16161;(statearr_16170[9] = inst_16143__$1);
return statearr_16170;
})();if(inst_16145)
{var statearr_16171_16190 = state_16161__$1;(statearr_16171_16190[1] = 8);
} else
{var statearr_16172_16191 = state_16161__$1;(statearr_16172_16191[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 8))
{var inst_16143 = (state_16161[9]);var state_16161__$1 = state_16161;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16161__$1,11,out,inst_16143);
} else
{if((state_val_16162 === 9))
{var state_16161__$1 = state_16161;var statearr_16173_16192 = state_16161__$1;(statearr_16173_16192[2] = null);
(statearr_16173_16192[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 10))
{var inst_16153 = (state_16161[2]);var state_16161__$1 = state_16161;var statearr_16174_16193 = state_16161__$1;(statearr_16174_16193[2] = inst_16153);
(statearr_16174_16193[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16162 === 11))
{var inst_16138 = (state_16161[7]);var inst_16148 = (state_16161[2]);var inst_16149 = (inst_16138 + 1);var inst_16138__$1 = inst_16149;var state_16161__$1 = (function (){var statearr_16175 = state_16161;(statearr_16175[10] = inst_16148);
(statearr_16175[7] = inst_16138__$1);
return statearr_16175;
})();var statearr_16176_16194 = state_16161__$1;(statearr_16176_16194[2] = null);
(statearr_16176_16194[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16180 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16180[0] = state_machine__5548__auto__);
(statearr_16180[1] = 1);
return statearr_16180;
});
var state_machine__5548__auto____1 = (function (state_16161){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16161);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16181){if((e16181 instanceof Object))
{var ex__5551__auto__ = e16181;var statearr_16182_16195 = state_16161;(statearr_16182_16195[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16161);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16196 = state_16161;
state_16161 = G__16196;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16161){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16183 = f__5563__auto__.call(null);(statearr_16183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16184);
return statearr_16183;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16268){var state_val_16269 = (state_16268[1]);if((state_val_16269 === 1))
{var inst_16245 = null;var state_16268__$1 = (function (){var statearr_16270 = state_16268;(statearr_16270[7] = inst_16245);
return statearr_16270;
})();var statearr_16271_16294 = state_16268__$1;(statearr_16271_16294[2] = null);
(statearr_16271_16294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16269 === 2))
{var state_16268__$1 = state_16268;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16268__$1,4,ch);
} else
{if((state_val_16269 === 3))
{var inst_16265 = (state_16268[2]);var inst_16266 = cljs.core.async.close_BANG_.call(null,out);var state_16268__$1 = (function (){var statearr_16272 = state_16268;(statearr_16272[8] = inst_16265);
return statearr_16272;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16268__$1,inst_16266);
} else
{if((state_val_16269 === 4))
{var inst_16248 = (state_16268[9]);var inst_16248__$1 = (state_16268[2]);var inst_16249 = (inst_16248__$1 == null);var inst_16250 = cljs.core.not.call(null,inst_16249);var state_16268__$1 = (function (){var statearr_16273 = state_16268;(statearr_16273[9] = inst_16248__$1);
return statearr_16273;
})();if(inst_16250)
{var statearr_16274_16295 = state_16268__$1;(statearr_16274_16295[1] = 5);
} else
{var statearr_16275_16296 = state_16268__$1;(statearr_16275_16296[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16269 === 5))
{var inst_16245 = (state_16268[7]);var inst_16248 = (state_16268[9]);var inst_16252 = cljs.core._EQ_.call(null,inst_16248,inst_16245);var state_16268__$1 = state_16268;if(inst_16252)
{var statearr_16276_16297 = state_16268__$1;(statearr_16276_16297[1] = 8);
} else
{var statearr_16277_16298 = state_16268__$1;(statearr_16277_16298[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16269 === 6))
{var state_16268__$1 = state_16268;var statearr_16279_16299 = state_16268__$1;(statearr_16279_16299[2] = null);
(statearr_16279_16299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16269 === 7))
{var inst_16263 = (state_16268[2]);var state_16268__$1 = state_16268;var statearr_16280_16300 = state_16268__$1;(statearr_16280_16300[2] = inst_16263);
(statearr_16280_16300[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16269 === 8))
{var inst_16245 = (state_16268[7]);var tmp16278 = inst_16245;var inst_16245__$1 = tmp16278;var state_16268__$1 = (function (){var statearr_16281 = state_16268;(statearr_16281[7] = inst_16245__$1);
return statearr_16281;
})();var statearr_16282_16301 = state_16268__$1;(statearr_16282_16301[2] = null);
(statearr_16282_16301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16269 === 9))
{var inst_16248 = (state_16268[9]);var state_16268__$1 = state_16268;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16268__$1,11,out,inst_16248);
} else
{if((state_val_16269 === 10))
{var inst_16260 = (state_16268[2]);var state_16268__$1 = state_16268;var statearr_16283_16302 = state_16268__$1;(statearr_16283_16302[2] = inst_16260);
(statearr_16283_16302[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16269 === 11))
{var inst_16248 = (state_16268[9]);var inst_16257 = (state_16268[2]);var inst_16245 = inst_16248;var state_16268__$1 = (function (){var statearr_16284 = state_16268;(statearr_16284[7] = inst_16245);
(statearr_16284[10] = inst_16257);
return statearr_16284;
})();var statearr_16285_16303 = state_16268__$1;(statearr_16285_16303[2] = null);
(statearr_16285_16303[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_16289 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16289[0] = state_machine__5548__auto__);
(statearr_16289[1] = 1);
return statearr_16289;
});
var state_machine__5548__auto____1 = (function (state_16268){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16268);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16290){if((e16290 instanceof Object))
{var ex__5551__auto__ = e16290;var statearr_16291_16304 = state_16268;(statearr_16291_16304[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16268);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16305 = state_16268;
state_16268 = G__16305;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16268){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16292 = f__5563__auto__.call(null);(statearr_16292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16293);
return statearr_16292;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16440 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16410){var state_val_16411 = (state_16410[1]);if((state_val_16411 === 1))
{var inst_16373 = (new Array(n));var inst_16374 = inst_16373;var inst_16375 = 0;var state_16410__$1 = (function (){var statearr_16412 = state_16410;(statearr_16412[7] = inst_16375);
(statearr_16412[8] = inst_16374);
return statearr_16412;
})();var statearr_16413_16441 = state_16410__$1;(statearr_16413_16441[2] = null);
(statearr_16413_16441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 2))
{var state_16410__$1 = state_16410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16410__$1,4,ch);
} else
{if((state_val_16411 === 3))
{var inst_16408 = (state_16410[2]);var state_16410__$1 = state_16410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16410__$1,inst_16408);
} else
{if((state_val_16411 === 4))
{var inst_16378 = (state_16410[9]);var inst_16378__$1 = (state_16410[2]);var inst_16379 = (inst_16378__$1 == null);var inst_16380 = cljs.core.not.call(null,inst_16379);var state_16410__$1 = (function (){var statearr_16414 = state_16410;(statearr_16414[9] = inst_16378__$1);
return statearr_16414;
})();if(inst_16380)
{var statearr_16415_16442 = state_16410__$1;(statearr_16415_16442[1] = 5);
} else
{var statearr_16416_16443 = state_16410__$1;(statearr_16416_16443[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 5))
{var inst_16383 = (state_16410[10]);var inst_16378 = (state_16410[9]);var inst_16375 = (state_16410[7]);var inst_16374 = (state_16410[8]);var inst_16382 = (inst_16374[inst_16375] = inst_16378);var inst_16383__$1 = (inst_16375 + 1);var inst_16384 = (inst_16383__$1 < n);var state_16410__$1 = (function (){var statearr_16417 = state_16410;(statearr_16417[10] = inst_16383__$1);
(statearr_16417[11] = inst_16382);
return statearr_16417;
})();if(cljs.core.truth_(inst_16384))
{var statearr_16418_16444 = state_16410__$1;(statearr_16418_16444[1] = 8);
} else
{var statearr_16419_16445 = state_16410__$1;(statearr_16419_16445[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 6))
{var inst_16375 = (state_16410[7]);var inst_16396 = (inst_16375 > 0);var state_16410__$1 = state_16410;if(cljs.core.truth_(inst_16396))
{var statearr_16421_16446 = state_16410__$1;(statearr_16421_16446[1] = 12);
} else
{var statearr_16422_16447 = state_16410__$1;(statearr_16422_16447[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 7))
{var inst_16406 = (state_16410[2]);var state_16410__$1 = state_16410;var statearr_16423_16448 = state_16410__$1;(statearr_16423_16448[2] = inst_16406);
(statearr_16423_16448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 8))
{var inst_16383 = (state_16410[10]);var inst_16374 = (state_16410[8]);var tmp16420 = inst_16374;var inst_16374__$1 = tmp16420;var inst_16375 = inst_16383;var state_16410__$1 = (function (){var statearr_16424 = state_16410;(statearr_16424[7] = inst_16375);
(statearr_16424[8] = inst_16374__$1);
return statearr_16424;
})();var statearr_16425_16449 = state_16410__$1;(statearr_16425_16449[2] = null);
(statearr_16425_16449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 9))
{var inst_16374 = (state_16410[8]);var inst_16388 = cljs.core.vec.call(null,inst_16374);var state_16410__$1 = state_16410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16410__$1,11,out,inst_16388);
} else
{if((state_val_16411 === 10))
{var inst_16394 = (state_16410[2]);var state_16410__$1 = state_16410;var statearr_16426_16450 = state_16410__$1;(statearr_16426_16450[2] = inst_16394);
(statearr_16426_16450[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 11))
{var inst_16390 = (state_16410[2]);var inst_16391 = (new Array(n));var inst_16374 = inst_16391;var inst_16375 = 0;var state_16410__$1 = (function (){var statearr_16427 = state_16410;(statearr_16427[12] = inst_16390);
(statearr_16427[7] = inst_16375);
(statearr_16427[8] = inst_16374);
return statearr_16427;
})();var statearr_16428_16451 = state_16410__$1;(statearr_16428_16451[2] = null);
(statearr_16428_16451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 12))
{var inst_16374 = (state_16410[8]);var inst_16398 = cljs.core.vec.call(null,inst_16374);var state_16410__$1 = state_16410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16410__$1,15,out,inst_16398);
} else
{if((state_val_16411 === 13))
{var state_16410__$1 = state_16410;var statearr_16429_16452 = state_16410__$1;(statearr_16429_16452[2] = null);
(statearr_16429_16452[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 14))
{var inst_16403 = (state_16410[2]);var inst_16404 = cljs.core.async.close_BANG_.call(null,out);var state_16410__$1 = (function (){var statearr_16430 = state_16410;(statearr_16430[13] = inst_16403);
return statearr_16430;
})();var statearr_16431_16453 = state_16410__$1;(statearr_16431_16453[2] = inst_16404);
(statearr_16431_16453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16411 === 15))
{var inst_16400 = (state_16410[2]);var state_16410__$1 = state_16410;var statearr_16432_16454 = state_16410__$1;(statearr_16432_16454[2] = inst_16400);
(statearr_16432_16454[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16436[0] = state_machine__5548__auto__);
(statearr_16436[1] = 1);
return statearr_16436;
});
var state_machine__5548__auto____1 = (function (state_16410){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16410);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16437){if((e16437 instanceof Object))
{var ex__5551__auto__ = e16437;var statearr_16438_16455 = state_16410;(statearr_16438_16455[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16456 = state_16410;
state_16410 = G__16456;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16410){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16439 = f__5563__auto__.call(null);(statearr_16439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16440);
return statearr_16439;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16599 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16569){var state_val_16570 = (state_16569[1]);if((state_val_16570 === 1))
{var inst_16528 = [];var inst_16529 = inst_16528;var inst_16530 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16569__$1 = (function (){var statearr_16571 = state_16569;(statearr_16571[7] = inst_16529);
(statearr_16571[8] = inst_16530);
return statearr_16571;
})();var statearr_16572_16600 = state_16569__$1;(statearr_16572_16600[2] = null);
(statearr_16572_16600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 2))
{var state_16569__$1 = state_16569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16569__$1,4,ch);
} else
{if((state_val_16570 === 3))
{var inst_16567 = (state_16569[2]);var state_16569__$1 = state_16569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16569__$1,inst_16567);
} else
{if((state_val_16570 === 4))
{var inst_16533 = (state_16569[9]);var inst_16533__$1 = (state_16569[2]);var inst_16534 = (inst_16533__$1 == null);var inst_16535 = cljs.core.not.call(null,inst_16534);var state_16569__$1 = (function (){var statearr_16573 = state_16569;(statearr_16573[9] = inst_16533__$1);
return statearr_16573;
})();if(inst_16535)
{var statearr_16574_16601 = state_16569__$1;(statearr_16574_16601[1] = 5);
} else
{var statearr_16575_16602 = state_16569__$1;(statearr_16575_16602[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 5))
{var inst_16537 = (state_16569[10]);var inst_16533 = (state_16569[9]);var inst_16530 = (state_16569[8]);var inst_16537__$1 = f.call(null,inst_16533);var inst_16538 = cljs.core._EQ_.call(null,inst_16537__$1,inst_16530);var inst_16539 = cljs.core.keyword_identical_QMARK_.call(null,inst_16530,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16540 = (inst_16538) || (inst_16539);var state_16569__$1 = (function (){var statearr_16576 = state_16569;(statearr_16576[10] = inst_16537__$1);
return statearr_16576;
})();if(cljs.core.truth_(inst_16540))
{var statearr_16577_16603 = state_16569__$1;(statearr_16577_16603[1] = 8);
} else
{var statearr_16578_16604 = state_16569__$1;(statearr_16578_16604[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 6))
{var inst_16529 = (state_16569[7]);var inst_16554 = inst_16529.length;var inst_16555 = (inst_16554 > 0);var state_16569__$1 = state_16569;if(cljs.core.truth_(inst_16555))
{var statearr_16580_16605 = state_16569__$1;(statearr_16580_16605[1] = 12);
} else
{var statearr_16581_16606 = state_16569__$1;(statearr_16581_16606[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 7))
{var inst_16565 = (state_16569[2]);var state_16569__$1 = state_16569;var statearr_16582_16607 = state_16569__$1;(statearr_16582_16607[2] = inst_16565);
(statearr_16582_16607[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 8))
{var inst_16537 = (state_16569[10]);var inst_16529 = (state_16569[7]);var inst_16533 = (state_16569[9]);var inst_16542 = inst_16529.push(inst_16533);var tmp16579 = inst_16529;var inst_16529__$1 = tmp16579;var inst_16530 = inst_16537;var state_16569__$1 = (function (){var statearr_16583 = state_16569;(statearr_16583[11] = inst_16542);
(statearr_16583[7] = inst_16529__$1);
(statearr_16583[8] = inst_16530);
return statearr_16583;
})();var statearr_16584_16608 = state_16569__$1;(statearr_16584_16608[2] = null);
(statearr_16584_16608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 9))
{var inst_16529 = (state_16569[7]);var inst_16545 = cljs.core.vec.call(null,inst_16529);var state_16569__$1 = state_16569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16569__$1,11,out,inst_16545);
} else
{if((state_val_16570 === 10))
{var inst_16552 = (state_16569[2]);var state_16569__$1 = state_16569;var statearr_16585_16609 = state_16569__$1;(statearr_16585_16609[2] = inst_16552);
(statearr_16585_16609[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 11))
{var inst_16537 = (state_16569[10]);var inst_16533 = (state_16569[9]);var inst_16547 = (state_16569[2]);var inst_16548 = [];var inst_16549 = inst_16548.push(inst_16533);var inst_16529 = inst_16548;var inst_16530 = inst_16537;var state_16569__$1 = (function (){var statearr_16586 = state_16569;(statearr_16586[12] = inst_16549);
(statearr_16586[13] = inst_16547);
(statearr_16586[7] = inst_16529);
(statearr_16586[8] = inst_16530);
return statearr_16586;
})();var statearr_16587_16610 = state_16569__$1;(statearr_16587_16610[2] = null);
(statearr_16587_16610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 12))
{var inst_16529 = (state_16569[7]);var inst_16557 = cljs.core.vec.call(null,inst_16529);var state_16569__$1 = state_16569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16569__$1,15,out,inst_16557);
} else
{if((state_val_16570 === 13))
{var state_16569__$1 = state_16569;var statearr_16588_16611 = state_16569__$1;(statearr_16588_16611[2] = null);
(statearr_16588_16611[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 14))
{var inst_16562 = (state_16569[2]);var inst_16563 = cljs.core.async.close_BANG_.call(null,out);var state_16569__$1 = (function (){var statearr_16589 = state_16569;(statearr_16589[14] = inst_16562);
return statearr_16589;
})();var statearr_16590_16612 = state_16569__$1;(statearr_16590_16612[2] = inst_16563);
(statearr_16590_16612[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16570 === 15))
{var inst_16559 = (state_16569[2]);var state_16569__$1 = state_16569;var statearr_16591_16613 = state_16569__$1;(statearr_16591_16613[2] = inst_16559);
(statearr_16591_16613[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_16595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16595[0] = state_machine__5548__auto__);
(statearr_16595[1] = 1);
return statearr_16595;
});
var state_machine__5548__auto____1 = (function (state_16569){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16596){if((e16596 instanceof Object))
{var ex__5551__auto__ = e16596;var statearr_16597_16614 = state_16569;(statearr_16597_16614[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16615 = state_16569;
state_16569 = G__16615;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16569){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16598 = f__5563__auto__.call(null);(statearr_16598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16599);
return statearr_16598;
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
