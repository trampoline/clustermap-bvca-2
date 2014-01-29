// Compiled by ClojureScript 0.0-2138
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13021 = (function (f,fn_handler,meta13022){
this.f = f;
this.fn_handler = fn_handler;
this.meta13022 = meta13022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13021.cljs$lang$type = true;
cljs.core.async.t13021.cljs$lang$ctorStr = "cljs.core.async/t13021";
cljs.core.async.t13021.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13021");
});
cljs.core.async.t13021.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13023){var self__ = this;
var _13023__$1 = this;return self__.meta13022;
});
cljs.core.async.t13021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13023,meta13022__$1){var self__ = this;
var _13023__$1 = this;return (new cljs.core.async.t13021(self__.f,self__.fn_handler,meta13022__$1));
});
cljs.core.async.__GT_t13021 = (function __GT_t13021(f__$1,fn_handler__$1,meta13022){return (new cljs.core.async.t13021(f__$1,fn_handler__$1,meta13022));
});
}
return (new cljs.core.async.t13021(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13025 = buff;if(G__13025)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13025.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13025.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13025);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13025);
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
{var val_13026 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13026);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13026);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13027 = n;var x_13028 = 0;while(true){
if((x_13028 < n__4248__auto___13027))
{(a[x_13028] = 0);
{
var G__13029 = (x_13028 + 1);
x_13028 = G__13029;
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
var G__13030 = (i + 1);
i = G__13030;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13034 = (function (flag,alt_flag,meta13035){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13035 = meta13035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13034.cljs$lang$type = true;
cljs.core.async.t13034.cljs$lang$ctorStr = "cljs.core.async/t13034";
cljs.core.async.t13034.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13034");
});
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13036){var self__ = this;
var _13036__$1 = this;return self__.meta13035;
});
cljs.core.async.t13034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13036,meta13035__$1){var self__ = this;
var _13036__$1 = this;return (new cljs.core.async.t13034(self__.flag,self__.alt_flag,meta13035__$1));
});
cljs.core.async.__GT_t13034 = (function __GT_t13034(flag__$1,alt_flag__$1,meta13035){return (new cljs.core.async.t13034(flag__$1,alt_flag__$1,meta13035));
});
}
return (new cljs.core.async.t13034(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13040 = (function (cb,flag,alt_handler,meta13041){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13041 = meta13041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13040.cljs$lang$type = true;
cljs.core.async.t13040.cljs$lang$ctorStr = "cljs.core.async/t13040";
cljs.core.async.t13040.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13040");
});
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13042){var self__ = this;
var _13042__$1 = this;return self__.meta13041;
});
cljs.core.async.t13040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13042,meta13041__$1){var self__ = this;
var _13042__$1 = this;return (new cljs.core.async.t13040(self__.cb,self__.flag,self__.alt_handler,meta13041__$1));
});
cljs.core.async.__GT_t13040 = (function __GT_t13040(cb__$1,flag__$1,alt_handler__$1,meta13041){return (new cljs.core.async.t13040(cb__$1,flag__$1,alt_handler__$1,meta13041));
});
}
return (new cljs.core.async.t13040(cb,flag,alt_handler,null));
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
return (function (p1__13043_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13043_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13044 = (i + 1);
i = G__13044;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
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
var alts_BANG___delegate = function (ports,p__13045){var map__13047 = p__13045;var map__13047__$1 = ((cljs.core.seq_QMARK_.call(null,map__13047))?cljs.core.apply.call(null,cljs.core.hash_map,map__13047):map__13047);var opts = map__13047__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13045 = null;if (arguments.length > 1) {
  p__13045 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13045);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13048){
var ports = cljs.core.first(arglist__13048);
var p__13045 = cljs.core.rest(arglist__13048);
return alts_BANG___delegate(ports,p__13045);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13056 = (function (ch,f,map_LT_,meta13057){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13057 = meta13057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13056.cljs$lang$type = true;
cljs.core.async.t13056.cljs$lang$ctorStr = "cljs.core.async/t13056";
cljs.core.async.t13056.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13056");
});
cljs.core.async.t13056.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13056.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13059 = (function (fn1,_,meta13057,ch,f,map_LT_,meta13060){
this.fn1 = fn1;
this._ = _;
this.meta13057 = meta13057;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13060 = meta13060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13059.cljs$lang$type = true;
cljs.core.async.t13059.cljs$lang$ctorStr = "cljs.core.async/t13059";
cljs.core.async.t13059.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13059");
});
cljs.core.async.t13059.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13059.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13049_SHARP_){return f1.call(null,(((p1__13049_SHARP_ == null))?null:self__.f.call(null,p1__13049_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13061){var self__ = this;
var _13061__$1 = this;return self__.meta13060;
});
cljs.core.async.t13059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13061,meta13060__$1){var self__ = this;
var _13061__$1 = this;return (new cljs.core.async.t13059(self__.fn1,self__._,self__.meta13057,self__.ch,self__.f,self__.map_LT_,meta13060__$1));
});
cljs.core.async.__GT_t13059 = (function __GT_t13059(fn1__$1,___$2,meta13057__$1,ch__$2,f__$2,map_LT___$2,meta13060){return (new cljs.core.async.t13059(fn1__$1,___$2,meta13057__$1,ch__$2,f__$2,map_LT___$2,meta13060));
});
}
return (new cljs.core.async.t13059(fn1,___$1,self__.meta13057,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13056.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13058){var self__ = this;
var _13058__$1 = this;return self__.meta13057;
});
cljs.core.async.t13056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13058,meta13057__$1){var self__ = this;
var _13058__$1 = this;return (new cljs.core.async.t13056(self__.ch,self__.f,self__.map_LT_,meta13057__$1));
});
cljs.core.async.__GT_t13056 = (function __GT_t13056(ch__$1,f__$1,map_LT___$1,meta13057){return (new cljs.core.async.t13056(ch__$1,f__$1,map_LT___$1,meta13057));
});
}
return (new cljs.core.async.t13056(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13065 = (function (ch,f,map_GT_,meta13066){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13066 = meta13066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13065.cljs$lang$type = true;
cljs.core.async.t13065.cljs$lang$ctorStr = "cljs.core.async/t13065";
cljs.core.async.t13065.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13065");
});
cljs.core.async.t13065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13065.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13067){var self__ = this;
var _13067__$1 = this;return self__.meta13066;
});
cljs.core.async.t13065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13067,meta13066__$1){var self__ = this;
var _13067__$1 = this;return (new cljs.core.async.t13065(self__.ch,self__.f,self__.map_GT_,meta13066__$1));
});
cljs.core.async.__GT_t13065 = (function __GT_t13065(ch__$1,f__$1,map_GT___$1,meta13066){return (new cljs.core.async.t13065(ch__$1,f__$1,map_GT___$1,meta13066));
});
}
return (new cljs.core.async.t13065(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13071 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13071 = (function (ch,p,filter_GT_,meta13072){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13072 = meta13072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13071.cljs$lang$type = true;
cljs.core.async.t13071.cljs$lang$ctorStr = "cljs.core.async/t13071";
cljs.core.async.t13071.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13071");
});
cljs.core.async.t13071.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13071.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13071.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13073){var self__ = this;
var _13073__$1 = this;return self__.meta13072;
});
cljs.core.async.t13071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13073,meta13072__$1){var self__ = this;
var _13073__$1 = this;return (new cljs.core.async.t13071(self__.ch,self__.p,self__.filter_GT_,meta13072__$1));
});
cljs.core.async.__GT_t13071 = (function __GT_t13071(ch__$1,p__$1,filter_GT___$1,meta13072){return (new cljs.core.async.t13071(ch__$1,p__$1,filter_GT___$1,meta13072));
});
}
return (new cljs.core.async.t13071(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13156 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13135){var state_val_13136 = (state_13135[1]);if((state_val_13136 === 1))
{var state_13135__$1 = state_13135;var statearr_13137_13157 = state_13135__$1;(statearr_13137_13157[2] = null);
(statearr_13137_13157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 2))
{var state_13135__$1 = state_13135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13135__$1,4,ch);
} else
{if((state_val_13136 === 3))
{var inst_13133 = (state_13135[2]);var state_13135__$1 = state_13135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13135__$1,inst_13133);
} else
{if((state_val_13136 === 4))
{var inst_13117 = (state_13135[7]);var inst_13117__$1 = (state_13135[2]);var inst_13118 = (inst_13117__$1 == null);var state_13135__$1 = (function (){var statearr_13138 = state_13135;(statearr_13138[7] = inst_13117__$1);
return statearr_13138;
})();if(cljs.core.truth_(inst_13118))
{var statearr_13139_13158 = state_13135__$1;(statearr_13139_13158[1] = 5);
} else
{var statearr_13140_13159 = state_13135__$1;(statearr_13140_13159[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 5))
{var inst_13120 = cljs.core.async.close_BANG_.call(null,out);var state_13135__$1 = state_13135;var statearr_13141_13160 = state_13135__$1;(statearr_13141_13160[2] = inst_13120);
(statearr_13141_13160[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 6))
{var inst_13117 = (state_13135[7]);var inst_13122 = p.call(null,inst_13117);var state_13135__$1 = state_13135;if(cljs.core.truth_(inst_13122))
{var statearr_13142_13161 = state_13135__$1;(statearr_13142_13161[1] = 8);
} else
{var statearr_13143_13162 = state_13135__$1;(statearr_13143_13162[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 7))
{var inst_13131 = (state_13135[2]);var state_13135__$1 = state_13135;var statearr_13144_13163 = state_13135__$1;(statearr_13144_13163[2] = inst_13131);
(statearr_13144_13163[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 8))
{var inst_13117 = (state_13135[7]);var state_13135__$1 = state_13135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13135__$1,11,out,inst_13117);
} else
{if((state_val_13136 === 9))
{var state_13135__$1 = state_13135;var statearr_13145_13164 = state_13135__$1;(statearr_13145_13164[2] = null);
(statearr_13145_13164[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 10))
{var inst_13128 = (state_13135[2]);var state_13135__$1 = (function (){var statearr_13146 = state_13135;(statearr_13146[8] = inst_13128);
return statearr_13146;
})();var statearr_13147_13165 = state_13135__$1;(statearr_13147_13165[2] = null);
(statearr_13147_13165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13136 === 11))
{var inst_13125 = (state_13135[2]);var state_13135__$1 = state_13135;var statearr_13148_13166 = state_13135__$1;(statearr_13148_13166[2] = inst_13125);
(statearr_13148_13166[1] = 10);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13152 = [null,null,null,null,null,null,null,null,null];(statearr_13152[0] = state_machine__5507__auto__);
(statearr_13152[1] = 1);
return statearr_13152;
});
var state_machine__5507__auto____1 = (function (state_13135){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13135);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13153){if((e13153 instanceof Object))
{var ex__5510__auto__ = e13153;var statearr_13154_13167 = state_13135;(statearr_13154_13167[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13168 = state_13135;
state_13135 = G__13168;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13135){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13155 = f__5522__auto__.call(null);(statearr_13155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13156);
return statearr_13155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13320){var state_val_13321 = (state_13320[1]);if((state_val_13321 === 1))
{var state_13320__$1 = state_13320;var statearr_13322_13359 = state_13320__$1;(statearr_13322_13359[2] = null);
(statearr_13322_13359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 2))
{var state_13320__$1 = state_13320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13320__$1,4,in$);
} else
{if((state_val_13321 === 3))
{var inst_13318 = (state_13320[2]);var state_13320__$1 = state_13320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13320__$1,inst_13318);
} else
{if((state_val_13321 === 4))
{var inst_13266 = (state_13320[7]);var inst_13266__$1 = (state_13320[2]);var inst_13267 = (inst_13266__$1 == null);var state_13320__$1 = (function (){var statearr_13323 = state_13320;(statearr_13323[7] = inst_13266__$1);
return statearr_13323;
})();if(cljs.core.truth_(inst_13267))
{var statearr_13324_13360 = state_13320__$1;(statearr_13324_13360[1] = 5);
} else
{var statearr_13325_13361 = state_13320__$1;(statearr_13325_13361[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 5))
{var inst_13269 = cljs.core.async.close_BANG_.call(null,out);var state_13320__$1 = state_13320;var statearr_13326_13362 = state_13320__$1;(statearr_13326_13362[2] = inst_13269);
(statearr_13326_13362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 6))
{var inst_13266 = (state_13320[7]);var inst_13271 = f.call(null,inst_13266);var inst_13276 = cljs.core.seq.call(null,inst_13271);var inst_13277 = inst_13276;var inst_13278 = null;var inst_13279 = 0;var inst_13280 = 0;var state_13320__$1 = (function (){var statearr_13327 = state_13320;(statearr_13327[8] = inst_13277);
(statearr_13327[9] = inst_13279);
(statearr_13327[10] = inst_13278);
(statearr_13327[11] = inst_13280);
return statearr_13327;
})();var statearr_13328_13363 = state_13320__$1;(statearr_13328_13363[2] = null);
(statearr_13328_13363[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 7))
{var inst_13316 = (state_13320[2]);var state_13320__$1 = state_13320;var statearr_13329_13364 = state_13320__$1;(statearr_13329_13364[2] = inst_13316);
(statearr_13329_13364[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 8))
{var inst_13279 = (state_13320[9]);var inst_13280 = (state_13320[11]);var inst_13282 = (inst_13280 < inst_13279);var inst_13283 = inst_13282;var state_13320__$1 = state_13320;if(cljs.core.truth_(inst_13283))
{var statearr_13330_13365 = state_13320__$1;(statearr_13330_13365[1] = 10);
} else
{var statearr_13331_13366 = state_13320__$1;(statearr_13331_13366[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 9))
{var inst_13313 = (state_13320[2]);var state_13320__$1 = (function (){var statearr_13332 = state_13320;(statearr_13332[12] = inst_13313);
return statearr_13332;
})();var statearr_13333_13367 = state_13320__$1;(statearr_13333_13367[2] = null);
(statearr_13333_13367[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 10))
{var inst_13278 = (state_13320[10]);var inst_13280 = (state_13320[11]);var inst_13285 = cljs.core._nth.call(null,inst_13278,inst_13280);var state_13320__$1 = state_13320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13320__$1,13,out,inst_13285);
} else
{if((state_val_13321 === 11))
{var inst_13277 = (state_13320[8]);var inst_13291 = (state_13320[13]);var inst_13291__$1 = cljs.core.seq.call(null,inst_13277);var state_13320__$1 = (function (){var statearr_13337 = state_13320;(statearr_13337[13] = inst_13291__$1);
return statearr_13337;
})();if(inst_13291__$1)
{var statearr_13338_13368 = state_13320__$1;(statearr_13338_13368[1] = 14);
} else
{var statearr_13339_13369 = state_13320__$1;(statearr_13339_13369[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 12))
{var inst_13311 = (state_13320[2]);var state_13320__$1 = state_13320;var statearr_13340_13370 = state_13320__$1;(statearr_13340_13370[2] = inst_13311);
(statearr_13340_13370[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 13))
{var inst_13277 = (state_13320[8]);var inst_13279 = (state_13320[9]);var inst_13278 = (state_13320[10]);var inst_13280 = (state_13320[11]);var inst_13287 = (state_13320[2]);var inst_13288 = (inst_13280 + 1);var tmp13334 = inst_13277;var tmp13335 = inst_13279;var tmp13336 = inst_13278;var inst_13277__$1 = tmp13334;var inst_13278__$1 = tmp13336;var inst_13279__$1 = tmp13335;var inst_13280__$1 = inst_13288;var state_13320__$1 = (function (){var statearr_13341 = state_13320;(statearr_13341[8] = inst_13277__$1);
(statearr_13341[14] = inst_13287);
(statearr_13341[9] = inst_13279__$1);
(statearr_13341[10] = inst_13278__$1);
(statearr_13341[11] = inst_13280__$1);
return statearr_13341;
})();var statearr_13342_13371 = state_13320__$1;(statearr_13342_13371[2] = null);
(statearr_13342_13371[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 14))
{var inst_13291 = (state_13320[13]);var inst_13293 = cljs.core.chunked_seq_QMARK_.call(null,inst_13291);var state_13320__$1 = state_13320;if(inst_13293)
{var statearr_13343_13372 = state_13320__$1;(statearr_13343_13372[1] = 17);
} else
{var statearr_13344_13373 = state_13320__$1;(statearr_13344_13373[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 15))
{var state_13320__$1 = state_13320;var statearr_13345_13374 = state_13320__$1;(statearr_13345_13374[2] = null);
(statearr_13345_13374[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 16))
{var inst_13309 = (state_13320[2]);var state_13320__$1 = state_13320;var statearr_13346_13375 = state_13320__$1;(statearr_13346_13375[2] = inst_13309);
(statearr_13346_13375[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 17))
{var inst_13291 = (state_13320[13]);var inst_13295 = cljs.core.chunk_first.call(null,inst_13291);var inst_13296 = cljs.core.chunk_rest.call(null,inst_13291);var inst_13297 = cljs.core.count.call(null,inst_13295);var inst_13277 = inst_13296;var inst_13278 = inst_13295;var inst_13279 = inst_13297;var inst_13280 = 0;var state_13320__$1 = (function (){var statearr_13347 = state_13320;(statearr_13347[8] = inst_13277);
(statearr_13347[9] = inst_13279);
(statearr_13347[10] = inst_13278);
(statearr_13347[11] = inst_13280);
return statearr_13347;
})();var statearr_13348_13376 = state_13320__$1;(statearr_13348_13376[2] = null);
(statearr_13348_13376[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 18))
{var inst_13291 = (state_13320[13]);var inst_13300 = cljs.core.first.call(null,inst_13291);var state_13320__$1 = state_13320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13320__$1,20,out,inst_13300);
} else
{if((state_val_13321 === 19))
{var inst_13306 = (state_13320[2]);var state_13320__$1 = state_13320;var statearr_13349_13377 = state_13320__$1;(statearr_13349_13377[2] = inst_13306);
(statearr_13349_13377[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13321 === 20))
{var inst_13291 = (state_13320[13]);var inst_13302 = (state_13320[2]);var inst_13303 = cljs.core.next.call(null,inst_13291);var inst_13277 = inst_13303;var inst_13278 = null;var inst_13279 = 0;var inst_13280 = 0;var state_13320__$1 = (function (){var statearr_13350 = state_13320;(statearr_13350[8] = inst_13277);
(statearr_13350[9] = inst_13279);
(statearr_13350[10] = inst_13278);
(statearr_13350[11] = inst_13280);
(statearr_13350[15] = inst_13302);
return statearr_13350;
})();var statearr_13351_13378 = state_13320__$1;(statearr_13351_13378[2] = null);
(statearr_13351_13378[1] = 8);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13355[0] = state_machine__5507__auto__);
(statearr_13355[1] = 1);
return statearr_13355;
});
var state_machine__5507__auto____1 = (function (state_13320){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13356){if((e13356 instanceof Object))
{var ex__5510__auto__ = e13356;var statearr_13357_13379 = state_13320;(statearr_13357_13379[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13380 = state_13320;
state_13320 = G__13380;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13320){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13358 = f__5522__auto__.call(null);(statearr_13358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13461 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13440){var state_val_13441 = (state_13440[1]);if((state_val_13441 === 1))
{var state_13440__$1 = state_13440;var statearr_13442_13462 = state_13440__$1;(statearr_13442_13462[2] = null);
(statearr_13442_13462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13441 === 2))
{var state_13440__$1 = state_13440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13440__$1,4,from);
} else
{if((state_val_13441 === 3))
{var inst_13438 = (state_13440[2]);var state_13440__$1 = state_13440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13440__$1,inst_13438);
} else
{if((state_val_13441 === 4))
{var inst_13423 = (state_13440[7]);var inst_13423__$1 = (state_13440[2]);var inst_13424 = (inst_13423__$1 == null);var state_13440__$1 = (function (){var statearr_13443 = state_13440;(statearr_13443[7] = inst_13423__$1);
return statearr_13443;
})();if(cljs.core.truth_(inst_13424))
{var statearr_13444_13463 = state_13440__$1;(statearr_13444_13463[1] = 5);
} else
{var statearr_13445_13464 = state_13440__$1;(statearr_13445_13464[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13441 === 5))
{var state_13440__$1 = state_13440;if(cljs.core.truth_(close_QMARK_))
{var statearr_13446_13465 = state_13440__$1;(statearr_13446_13465[1] = 8);
} else
{var statearr_13447_13466 = state_13440__$1;(statearr_13447_13466[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13441 === 6))
{var inst_13423 = (state_13440[7]);var state_13440__$1 = state_13440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13440__$1,11,to,inst_13423);
} else
{if((state_val_13441 === 7))
{var inst_13436 = (state_13440[2]);var state_13440__$1 = state_13440;var statearr_13448_13467 = state_13440__$1;(statearr_13448_13467[2] = inst_13436);
(statearr_13448_13467[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13441 === 8))
{var inst_13427 = cljs.core.async.close_BANG_.call(null,to);var state_13440__$1 = state_13440;var statearr_13449_13468 = state_13440__$1;(statearr_13449_13468[2] = inst_13427);
(statearr_13449_13468[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13441 === 9))
{var state_13440__$1 = state_13440;var statearr_13450_13469 = state_13440__$1;(statearr_13450_13469[2] = null);
(statearr_13450_13469[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13441 === 10))
{var inst_13430 = (state_13440[2]);var state_13440__$1 = state_13440;var statearr_13451_13470 = state_13440__$1;(statearr_13451_13470[2] = inst_13430);
(statearr_13451_13470[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13441 === 11))
{var inst_13433 = (state_13440[2]);var state_13440__$1 = (function (){var statearr_13452 = state_13440;(statearr_13452[8] = inst_13433);
return statearr_13452;
})();var statearr_13453_13471 = state_13440__$1;(statearr_13453_13471[2] = null);
(statearr_13453_13471[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13457 = [null,null,null,null,null,null,null,null,null];(statearr_13457[0] = state_machine__5507__auto__);
(statearr_13457[1] = 1);
return statearr_13457;
});
var state_machine__5507__auto____1 = (function (state_13440){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13440);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13458){if((e13458 instanceof Object))
{var ex__5510__auto__ = e13458;var statearr_13459_13472 = state_13440;(statearr_13459_13472[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13473 = state_13440;
state_13440 = G__13473;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13440){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13460 = f__5522__auto__.call(null);(statearr_13460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13461);
return statearr_13460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13560 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13538){var state_val_13539 = (state_13538[1]);if((state_val_13539 === 1))
{var state_13538__$1 = state_13538;var statearr_13540_13561 = state_13538__$1;(statearr_13540_13561[2] = null);
(statearr_13540_13561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 2))
{var state_13538__$1 = state_13538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13538__$1,4,ch);
} else
{if((state_val_13539 === 3))
{var inst_13536 = (state_13538[2]);var state_13538__$1 = state_13538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13538__$1,inst_13536);
} else
{if((state_val_13539 === 4))
{var inst_13519 = (state_13538[7]);var inst_13519__$1 = (state_13538[2]);var inst_13520 = (inst_13519__$1 == null);var state_13538__$1 = (function (){var statearr_13541 = state_13538;(statearr_13541[7] = inst_13519__$1);
return statearr_13541;
})();if(cljs.core.truth_(inst_13520))
{var statearr_13542_13562 = state_13538__$1;(statearr_13542_13562[1] = 5);
} else
{var statearr_13543_13563 = state_13538__$1;(statearr_13543_13563[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 5))
{var inst_13522 = cljs.core.async.close_BANG_.call(null,tc);var inst_13523 = cljs.core.async.close_BANG_.call(null,fc);var state_13538__$1 = (function (){var statearr_13544 = state_13538;(statearr_13544[8] = inst_13522);
return statearr_13544;
})();var statearr_13545_13564 = state_13538__$1;(statearr_13545_13564[2] = inst_13523);
(statearr_13545_13564[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 6))
{var inst_13519 = (state_13538[7]);var inst_13525 = p.call(null,inst_13519);var state_13538__$1 = state_13538;if(cljs.core.truth_(inst_13525))
{var statearr_13546_13565 = state_13538__$1;(statearr_13546_13565[1] = 9);
} else
{var statearr_13547_13566 = state_13538__$1;(statearr_13547_13566[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 7))
{var inst_13534 = (state_13538[2]);var state_13538__$1 = state_13538;var statearr_13548_13567 = state_13538__$1;(statearr_13548_13567[2] = inst_13534);
(statearr_13548_13567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 8))
{var inst_13531 = (state_13538[2]);var state_13538__$1 = (function (){var statearr_13549 = state_13538;(statearr_13549[9] = inst_13531);
return statearr_13549;
})();var statearr_13550_13568 = state_13538__$1;(statearr_13550_13568[2] = null);
(statearr_13550_13568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 9))
{var state_13538__$1 = state_13538;var statearr_13551_13569 = state_13538__$1;(statearr_13551_13569[2] = tc);
(statearr_13551_13569[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 10))
{var state_13538__$1 = state_13538;var statearr_13552_13570 = state_13538__$1;(statearr_13552_13570[2] = fc);
(statearr_13552_13570[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13539 === 11))
{var inst_13519 = (state_13538[7]);var inst_13529 = (state_13538[2]);var state_13538__$1 = state_13538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13538__$1,8,inst_13529,inst_13519);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13556 = [null,null,null,null,null,null,null,null,null,null];(statearr_13556[0] = state_machine__5507__auto__);
(statearr_13556[1] = 1);
return statearr_13556;
});
var state_machine__5507__auto____1 = (function (state_13538){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13538);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13557){if((e13557 instanceof Object))
{var ex__5510__auto__ = e13557;var statearr_13558_13571 = state_13538;(statearr_13558_13571[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13538);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13572 = state_13538;
state_13538 = G__13572;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13538){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13559 = f__5522__auto__.call(null);(statearr_13559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13560);
return statearr_13559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13619){var state_val_13620 = (state_13619[1]);if((state_val_13620 === 7))
{var inst_13615 = (state_13619[2]);var state_13619__$1 = state_13619;var statearr_13621_13637 = state_13619__$1;(statearr_13621_13637[2] = inst_13615);
(statearr_13621_13637[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13620 === 6))
{var inst_13605 = (state_13619[7]);var inst_13608 = (state_13619[8]);var inst_13612 = f.call(null,inst_13605,inst_13608);var inst_13605__$1 = inst_13612;var state_13619__$1 = (function (){var statearr_13622 = state_13619;(statearr_13622[7] = inst_13605__$1);
return statearr_13622;
})();var statearr_13623_13638 = state_13619__$1;(statearr_13623_13638[2] = null);
(statearr_13623_13638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13620 === 5))
{var inst_13605 = (state_13619[7]);var state_13619__$1 = state_13619;var statearr_13624_13639 = state_13619__$1;(statearr_13624_13639[2] = inst_13605);
(statearr_13624_13639[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13620 === 4))
{var inst_13608 = (state_13619[8]);var inst_13608__$1 = (state_13619[2]);var inst_13609 = (inst_13608__$1 == null);var state_13619__$1 = (function (){var statearr_13625 = state_13619;(statearr_13625[8] = inst_13608__$1);
return statearr_13625;
})();if(cljs.core.truth_(inst_13609))
{var statearr_13626_13640 = state_13619__$1;(statearr_13626_13640[1] = 5);
} else
{var statearr_13627_13641 = state_13619__$1;(statearr_13627_13641[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13620 === 3))
{var inst_13617 = (state_13619[2]);var state_13619__$1 = state_13619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13619__$1,inst_13617);
} else
{if((state_val_13620 === 2))
{var state_13619__$1 = state_13619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13619__$1,4,ch);
} else
{if((state_val_13620 === 1))
{var inst_13605 = init;var state_13619__$1 = (function (){var statearr_13628 = state_13619;(statearr_13628[7] = inst_13605);
return statearr_13628;
})();var statearr_13629_13642 = state_13619__$1;(statearr_13629_13642[2] = null);
(statearr_13629_13642[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13633 = [null,null,null,null,null,null,null,null,null];(statearr_13633[0] = state_machine__5507__auto__);
(statearr_13633[1] = 1);
return statearr_13633;
});
var state_machine__5507__auto____1 = (function (state_13619){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13619);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13634){if((e13634 instanceof Object))
{var ex__5510__auto__ = e13634;var statearr_13635_13643 = state_13619;(statearr_13635_13643[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13619);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13644 = state_13619;
state_13619 = G__13644;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13619){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13636 = f__5522__auto__.call(null);(statearr_13636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13706){var state_val_13707 = (state_13706[1]);if((state_val_13707 === 1))
{var inst_13686 = cljs.core.seq.call(null,coll);var inst_13687 = inst_13686;var state_13706__$1 = (function (){var statearr_13708 = state_13706;(statearr_13708[7] = inst_13687);
return statearr_13708;
})();var statearr_13709_13727 = state_13706__$1;(statearr_13709_13727[2] = null);
(statearr_13709_13727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 2))
{var inst_13687 = (state_13706[7]);var state_13706__$1 = state_13706;if(cljs.core.truth_(inst_13687))
{var statearr_13710_13728 = state_13706__$1;(statearr_13710_13728[1] = 4);
} else
{var statearr_13711_13729 = state_13706__$1;(statearr_13711_13729[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 3))
{var inst_13704 = (state_13706[2]);var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13706__$1,inst_13704);
} else
{if((state_val_13707 === 4))
{var inst_13687 = (state_13706[7]);var inst_13690 = cljs.core.first.call(null,inst_13687);var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13706__$1,7,ch,inst_13690);
} else
{if((state_val_13707 === 5))
{var state_13706__$1 = state_13706;if(cljs.core.truth_(close_QMARK_))
{var statearr_13712_13730 = state_13706__$1;(statearr_13712_13730[1] = 8);
} else
{var statearr_13713_13731 = state_13706__$1;(statearr_13713_13731[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 6))
{var inst_13702 = (state_13706[2]);var state_13706__$1 = state_13706;var statearr_13714_13732 = state_13706__$1;(statearr_13714_13732[2] = inst_13702);
(statearr_13714_13732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 7))
{var inst_13687 = (state_13706[7]);var inst_13692 = (state_13706[2]);var inst_13693 = cljs.core.next.call(null,inst_13687);var inst_13687__$1 = inst_13693;var state_13706__$1 = (function (){var statearr_13715 = state_13706;(statearr_13715[7] = inst_13687__$1);
(statearr_13715[8] = inst_13692);
return statearr_13715;
})();var statearr_13716_13733 = state_13706__$1;(statearr_13716_13733[2] = null);
(statearr_13716_13733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 8))
{var inst_13697 = cljs.core.async.close_BANG_.call(null,ch);var state_13706__$1 = state_13706;var statearr_13717_13734 = state_13706__$1;(statearr_13717_13734[2] = inst_13697);
(statearr_13717_13734[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 9))
{var state_13706__$1 = state_13706;var statearr_13718_13735 = state_13706__$1;(statearr_13718_13735[2] = null);
(statearr_13718_13735[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 10))
{var inst_13700 = (state_13706[2]);var state_13706__$1 = state_13706;var statearr_13719_13736 = state_13706__$1;(statearr_13719_13736[2] = inst_13700);
(statearr_13719_13736[1] = 6);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13723 = [null,null,null,null,null,null,null,null,null];(statearr_13723[0] = state_machine__5507__auto__);
(statearr_13723[1] = 1);
return statearr_13723;
});
var state_machine__5507__auto____1 = (function (state_13706){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13706);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13724){if((e13724 instanceof Object))
{var ex__5510__auto__ = e13724;var statearr_13725_13737 = state_13706;(statearr_13725_13737[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13738 = state_13706;
state_13706 = G__13738;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13706){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13726 = f__5522__auto__.call(null);(statearr_13726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.Mux = (function (){var obj13740 = {};return obj13740;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13742 = {};return obj13742;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13966 = (function (cs,ch,mult,meta13967){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13967 = meta13967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13966.cljs$lang$type = true;
cljs.core.async.t13966.cljs$lang$ctorStr = "cljs.core.async/t13966";
cljs.core.async.t13966.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13966");
});})(cs))
;
cljs.core.async.t13966.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13966.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13966.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13966.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13966.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13968){var self__ = this;
var _13968__$1 = this;return self__.meta13967;
});})(cs))
;
cljs.core.async.t13966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13968,meta13967__$1){var self__ = this;
var _13968__$1 = this;return (new cljs.core.async.t13966(self__.cs,self__.ch,self__.mult,meta13967__$1));
});})(cs))
;
cljs.core.async.__GT_t13966 = ((function (cs){
return (function __GT_t13966(cs__$1,ch__$1,mult__$1,meta13967){return (new cljs.core.async.t13966(cs__$1,ch__$1,mult__$1,meta13967));
});})(cs))
;
}
return (new cljs.core.async.t13966(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14189 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14103){var state_val_14104 = (state_14103[1]);if((state_val_14104 === 32))
{var inst_14047 = (state_14103[7]);var inst_13971 = (state_14103[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14103,31,Object,null,30);var inst_14054 = cljs.core.async.put_BANG_.call(null,inst_14047,inst_13971,done);var state_14103__$1 = state_14103;var statearr_14105_14190 = state_14103__$1;(statearr_14105_14190[2] = inst_14054);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14103__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 1))
{var state_14103__$1 = state_14103;var statearr_14106_14191 = state_14103__$1;(statearr_14106_14191[2] = null);
(statearr_14106_14191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 33))
{var inst_14060 = (state_14103[9]);var inst_14062 = cljs.core.chunked_seq_QMARK_.call(null,inst_14060);var state_14103__$1 = state_14103;if(inst_14062)
{var statearr_14107_14192 = state_14103__$1;(statearr_14107_14192[1] = 36);
} else
{var statearr_14108_14193 = state_14103__$1;(statearr_14108_14193[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 2))
{var state_14103__$1 = state_14103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14103__$1,4,ch);
} else
{if((state_val_14104 === 34))
{var state_14103__$1 = state_14103;var statearr_14109_14194 = state_14103__$1;(statearr_14109_14194[2] = null);
(statearr_14109_14194[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 3))
{var inst_14101 = (state_14103[2]);var state_14103__$1 = state_14103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14103__$1,inst_14101);
} else
{if((state_val_14104 === 35))
{var inst_14085 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14110_14195 = state_14103__$1;(statearr_14110_14195[2] = inst_14085);
(statearr_14110_14195[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 4))
{var inst_13971 = (state_14103[8]);var inst_13971__$1 = (state_14103[2]);var inst_13972 = (inst_13971__$1 == null);var state_14103__$1 = (function (){var statearr_14111 = state_14103;(statearr_14111[8] = inst_13971__$1);
return statearr_14111;
})();if(cljs.core.truth_(inst_13972))
{var statearr_14112_14196 = state_14103__$1;(statearr_14112_14196[1] = 5);
} else
{var statearr_14113_14197 = state_14103__$1;(statearr_14113_14197[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 36))
{var inst_14060 = (state_14103[9]);var inst_14064 = cljs.core.chunk_first.call(null,inst_14060);var inst_14065 = cljs.core.chunk_rest.call(null,inst_14060);var inst_14066 = cljs.core.count.call(null,inst_14064);var inst_14039 = inst_14065;var inst_14040 = inst_14064;var inst_14041 = inst_14066;var inst_14042 = 0;var state_14103__$1 = (function (){var statearr_14114 = state_14103;(statearr_14114[10] = inst_14041);
(statearr_14114[11] = inst_14040);
(statearr_14114[12] = inst_14042);
(statearr_14114[13] = inst_14039);
return statearr_14114;
})();var statearr_14115_14198 = state_14103__$1;(statearr_14115_14198[2] = null);
(statearr_14115_14198[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 5))
{var inst_13978 = cljs.core.deref.call(null,cs);var inst_13979 = cljs.core.seq.call(null,inst_13978);var inst_13980 = inst_13979;var inst_13981 = null;var inst_13982 = 0;var inst_13983 = 0;var state_14103__$1 = (function (){var statearr_14116 = state_14103;(statearr_14116[14] = inst_13983);
(statearr_14116[15] = inst_13982);
(statearr_14116[16] = inst_13980);
(statearr_14116[17] = inst_13981);
return statearr_14116;
})();var statearr_14117_14199 = state_14103__$1;(statearr_14117_14199[2] = null);
(statearr_14117_14199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 37))
{var inst_14060 = (state_14103[9]);var inst_14069 = cljs.core.first.call(null,inst_14060);var state_14103__$1 = (function (){var statearr_14118 = state_14103;(statearr_14118[18] = inst_14069);
return statearr_14118;
})();var statearr_14119_14200 = state_14103__$1;(statearr_14119_14200[2] = null);
(statearr_14119_14200[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 6))
{var inst_14031 = (state_14103[19]);var inst_14030 = cljs.core.deref.call(null,cs);var inst_14031__$1 = cljs.core.keys.call(null,inst_14030);var inst_14032 = cljs.core.count.call(null,inst_14031__$1);var inst_14033 = cljs.core.reset_BANG_.call(null,dctr,inst_14032);var inst_14038 = cljs.core.seq.call(null,inst_14031__$1);var inst_14039 = inst_14038;var inst_14040 = null;var inst_14041 = 0;var inst_14042 = 0;var state_14103__$1 = (function (){var statearr_14120 = state_14103;(statearr_14120[10] = inst_14041);
(statearr_14120[11] = inst_14040);
(statearr_14120[12] = inst_14042);
(statearr_14120[13] = inst_14039);
(statearr_14120[20] = inst_14033);
(statearr_14120[19] = inst_14031__$1);
return statearr_14120;
})();var statearr_14121_14201 = state_14103__$1;(statearr_14121_14201[2] = null);
(statearr_14121_14201[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 38))
{var inst_14082 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14122_14202 = state_14103__$1;(statearr_14122_14202[2] = inst_14082);
(statearr_14122_14202[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 7))
{var inst_14099 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14123_14203 = state_14103__$1;(statearr_14123_14203[2] = inst_14099);
(statearr_14123_14203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 39))
{var inst_14060 = (state_14103[9]);var inst_14078 = (state_14103[2]);var inst_14079 = cljs.core.next.call(null,inst_14060);var inst_14039 = inst_14079;var inst_14040 = null;var inst_14041 = 0;var inst_14042 = 0;var state_14103__$1 = (function (){var statearr_14124 = state_14103;(statearr_14124[10] = inst_14041);
(statearr_14124[11] = inst_14040);
(statearr_14124[12] = inst_14042);
(statearr_14124[13] = inst_14039);
(statearr_14124[21] = inst_14078);
return statearr_14124;
})();var statearr_14125_14204 = state_14103__$1;(statearr_14125_14204[2] = null);
(statearr_14125_14204[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 8))
{var inst_13983 = (state_14103[14]);var inst_13982 = (state_14103[15]);var inst_13985 = (inst_13983 < inst_13982);var inst_13986 = inst_13985;var state_14103__$1 = state_14103;if(cljs.core.truth_(inst_13986))
{var statearr_14126_14205 = state_14103__$1;(statearr_14126_14205[1] = 10);
} else
{var statearr_14127_14206 = state_14103__$1;(statearr_14127_14206[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 40))
{var inst_14069 = (state_14103[18]);var inst_14070 = (state_14103[2]);var inst_14071 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14072 = cljs.core.async.untap_STAR_.call(null,m,inst_14069);var state_14103__$1 = (function (){var statearr_14128 = state_14103;(statearr_14128[22] = inst_14070);
(statearr_14128[23] = inst_14071);
return statearr_14128;
})();var statearr_14129_14207 = state_14103__$1;(statearr_14129_14207[2] = inst_14072);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14103__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 9))
{var inst_14028 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14130_14208 = state_14103__$1;(statearr_14130_14208[2] = inst_14028);
(statearr_14130_14208[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 41))
{var inst_14069 = (state_14103[18]);var inst_13971 = (state_14103[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14103,40,Object,null,39);var inst_14076 = cljs.core.async.put_BANG_.call(null,inst_14069,inst_13971,done);var state_14103__$1 = state_14103;var statearr_14131_14209 = state_14103__$1;(statearr_14131_14209[2] = inst_14076);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14103__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 10))
{var inst_13983 = (state_14103[14]);var inst_13981 = (state_14103[17]);var inst_13989 = cljs.core._nth.call(null,inst_13981,inst_13983);var inst_13990 = cljs.core.nth.call(null,inst_13989,0,null);var inst_13991 = cljs.core.nth.call(null,inst_13989,1,null);var state_14103__$1 = (function (){var statearr_14132 = state_14103;(statearr_14132[24] = inst_13990);
return statearr_14132;
})();if(cljs.core.truth_(inst_13991))
{var statearr_14133_14210 = state_14103__$1;(statearr_14133_14210[1] = 13);
} else
{var statearr_14134_14211 = state_14103__$1;(statearr_14134_14211[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 42))
{var state_14103__$1 = state_14103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14103__$1,45,dchan);
} else
{if((state_val_14104 === 11))
{var inst_14000 = (state_14103[25]);var inst_13980 = (state_14103[16]);var inst_14000__$1 = cljs.core.seq.call(null,inst_13980);var state_14103__$1 = (function (){var statearr_14135 = state_14103;(statearr_14135[25] = inst_14000__$1);
return statearr_14135;
})();if(inst_14000__$1)
{var statearr_14136_14212 = state_14103__$1;(statearr_14136_14212[1] = 16);
} else
{var statearr_14137_14213 = state_14103__$1;(statearr_14137_14213[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 43))
{var state_14103__$1 = state_14103;var statearr_14138_14214 = state_14103__$1;(statearr_14138_14214[2] = null);
(statearr_14138_14214[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 12))
{var inst_14026 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14139_14215 = state_14103__$1;(statearr_14139_14215[2] = inst_14026);
(statearr_14139_14215[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 44))
{var inst_14096 = (state_14103[2]);var state_14103__$1 = (function (){var statearr_14140 = state_14103;(statearr_14140[26] = inst_14096);
return statearr_14140;
})();var statearr_14141_14216 = state_14103__$1;(statearr_14141_14216[2] = null);
(statearr_14141_14216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 13))
{var inst_13990 = (state_14103[24]);var inst_13993 = cljs.core.async.close_BANG_.call(null,inst_13990);var state_14103__$1 = state_14103;var statearr_14142_14217 = state_14103__$1;(statearr_14142_14217[2] = inst_13993);
(statearr_14142_14217[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 45))
{var inst_14093 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14146_14218 = state_14103__$1;(statearr_14146_14218[2] = inst_14093);
(statearr_14146_14218[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 14))
{var state_14103__$1 = state_14103;var statearr_14147_14219 = state_14103__$1;(statearr_14147_14219[2] = null);
(statearr_14147_14219[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 15))
{var inst_13983 = (state_14103[14]);var inst_13982 = (state_14103[15]);var inst_13980 = (state_14103[16]);var inst_13981 = (state_14103[17]);var inst_13996 = (state_14103[2]);var inst_13997 = (inst_13983 + 1);var tmp14143 = inst_13982;var tmp14144 = inst_13980;var tmp14145 = inst_13981;var inst_13980__$1 = tmp14144;var inst_13981__$1 = tmp14145;var inst_13982__$1 = tmp14143;var inst_13983__$1 = inst_13997;var state_14103__$1 = (function (){var statearr_14148 = state_14103;(statearr_14148[27] = inst_13996);
(statearr_14148[14] = inst_13983__$1);
(statearr_14148[15] = inst_13982__$1);
(statearr_14148[16] = inst_13980__$1);
(statearr_14148[17] = inst_13981__$1);
return statearr_14148;
})();var statearr_14149_14220 = state_14103__$1;(statearr_14149_14220[2] = null);
(statearr_14149_14220[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 16))
{var inst_14000 = (state_14103[25]);var inst_14002 = cljs.core.chunked_seq_QMARK_.call(null,inst_14000);var state_14103__$1 = state_14103;if(inst_14002)
{var statearr_14150_14221 = state_14103__$1;(statearr_14150_14221[1] = 19);
} else
{var statearr_14151_14222 = state_14103__$1;(statearr_14151_14222[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 17))
{var state_14103__$1 = state_14103;var statearr_14152_14223 = state_14103__$1;(statearr_14152_14223[2] = null);
(statearr_14152_14223[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 18))
{var inst_14024 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14153_14224 = state_14103__$1;(statearr_14153_14224[2] = inst_14024);
(statearr_14153_14224[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 19))
{var inst_14000 = (state_14103[25]);var inst_14004 = cljs.core.chunk_first.call(null,inst_14000);var inst_14005 = cljs.core.chunk_rest.call(null,inst_14000);var inst_14006 = cljs.core.count.call(null,inst_14004);var inst_13980 = inst_14005;var inst_13981 = inst_14004;var inst_13982 = inst_14006;var inst_13983 = 0;var state_14103__$1 = (function (){var statearr_14154 = state_14103;(statearr_14154[14] = inst_13983);
(statearr_14154[15] = inst_13982);
(statearr_14154[16] = inst_13980);
(statearr_14154[17] = inst_13981);
return statearr_14154;
})();var statearr_14155_14225 = state_14103__$1;(statearr_14155_14225[2] = null);
(statearr_14155_14225[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 20))
{var inst_14000 = (state_14103[25]);var inst_14010 = cljs.core.first.call(null,inst_14000);var inst_14011 = cljs.core.nth.call(null,inst_14010,0,null);var inst_14012 = cljs.core.nth.call(null,inst_14010,1,null);var state_14103__$1 = (function (){var statearr_14156 = state_14103;(statearr_14156[28] = inst_14011);
return statearr_14156;
})();if(cljs.core.truth_(inst_14012))
{var statearr_14157_14226 = state_14103__$1;(statearr_14157_14226[1] = 22);
} else
{var statearr_14158_14227 = state_14103__$1;(statearr_14158_14227[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 21))
{var inst_14021 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14159_14228 = state_14103__$1;(statearr_14159_14228[2] = inst_14021);
(statearr_14159_14228[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 22))
{var inst_14011 = (state_14103[28]);var inst_14014 = cljs.core.async.close_BANG_.call(null,inst_14011);var state_14103__$1 = state_14103;var statearr_14160_14229 = state_14103__$1;(statearr_14160_14229[2] = inst_14014);
(statearr_14160_14229[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 23))
{var state_14103__$1 = state_14103;var statearr_14161_14230 = state_14103__$1;(statearr_14161_14230[2] = null);
(statearr_14161_14230[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 24))
{var inst_14000 = (state_14103[25]);var inst_14017 = (state_14103[2]);var inst_14018 = cljs.core.next.call(null,inst_14000);var inst_13980 = inst_14018;var inst_13981 = null;var inst_13982 = 0;var inst_13983 = 0;var state_14103__$1 = (function (){var statearr_14162 = state_14103;(statearr_14162[29] = inst_14017);
(statearr_14162[14] = inst_13983);
(statearr_14162[15] = inst_13982);
(statearr_14162[16] = inst_13980);
(statearr_14162[17] = inst_13981);
return statearr_14162;
})();var statearr_14163_14231 = state_14103__$1;(statearr_14163_14231[2] = null);
(statearr_14163_14231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 25))
{var inst_14041 = (state_14103[10]);var inst_14042 = (state_14103[12]);var inst_14044 = (inst_14042 < inst_14041);var inst_14045 = inst_14044;var state_14103__$1 = state_14103;if(cljs.core.truth_(inst_14045))
{var statearr_14164_14232 = state_14103__$1;(statearr_14164_14232[1] = 27);
} else
{var statearr_14165_14233 = state_14103__$1;(statearr_14165_14233[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 26))
{var inst_14031 = (state_14103[19]);var inst_14089 = (state_14103[2]);var inst_14090 = cljs.core.seq.call(null,inst_14031);var state_14103__$1 = (function (){var statearr_14166 = state_14103;(statearr_14166[30] = inst_14089);
return statearr_14166;
})();if(inst_14090)
{var statearr_14167_14234 = state_14103__$1;(statearr_14167_14234[1] = 42);
} else
{var statearr_14168_14235 = state_14103__$1;(statearr_14168_14235[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 27))
{var inst_14040 = (state_14103[11]);var inst_14042 = (state_14103[12]);var inst_14047 = cljs.core._nth.call(null,inst_14040,inst_14042);var state_14103__$1 = (function (){var statearr_14169 = state_14103;(statearr_14169[7] = inst_14047);
return statearr_14169;
})();var statearr_14170_14236 = state_14103__$1;(statearr_14170_14236[2] = null);
(statearr_14170_14236[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 28))
{var inst_14060 = (state_14103[9]);var inst_14039 = (state_14103[13]);var inst_14060__$1 = cljs.core.seq.call(null,inst_14039);var state_14103__$1 = (function (){var statearr_14174 = state_14103;(statearr_14174[9] = inst_14060__$1);
return statearr_14174;
})();if(inst_14060__$1)
{var statearr_14175_14237 = state_14103__$1;(statearr_14175_14237[1] = 33);
} else
{var statearr_14176_14238 = state_14103__$1;(statearr_14176_14238[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 29))
{var inst_14087 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14177_14239 = state_14103__$1;(statearr_14177_14239[2] = inst_14087);
(statearr_14177_14239[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 30))
{var inst_14041 = (state_14103[10]);var inst_14040 = (state_14103[11]);var inst_14042 = (state_14103[12]);var inst_14039 = (state_14103[13]);var inst_14056 = (state_14103[2]);var inst_14057 = (inst_14042 + 1);var tmp14171 = inst_14041;var tmp14172 = inst_14040;var tmp14173 = inst_14039;var inst_14039__$1 = tmp14173;var inst_14040__$1 = tmp14172;var inst_14041__$1 = tmp14171;var inst_14042__$1 = inst_14057;var state_14103__$1 = (function (){var statearr_14178 = state_14103;(statearr_14178[10] = inst_14041__$1);
(statearr_14178[11] = inst_14040__$1);
(statearr_14178[12] = inst_14042__$1);
(statearr_14178[31] = inst_14056);
(statearr_14178[13] = inst_14039__$1);
return statearr_14178;
})();var statearr_14179_14240 = state_14103__$1;(statearr_14179_14240[2] = null);
(statearr_14179_14240[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 31))
{var inst_14047 = (state_14103[7]);var inst_14048 = (state_14103[2]);var inst_14049 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14050 = cljs.core.async.untap_STAR_.call(null,m,inst_14047);var state_14103__$1 = (function (){var statearr_14180 = state_14103;(statearr_14180[32] = inst_14049);
(statearr_14180[33] = inst_14048);
return statearr_14180;
})();var statearr_14181_14241 = state_14103__$1;(statearr_14181_14241[2] = inst_14050);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14103__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14185[0] = state_machine__5507__auto__);
(statearr_14185[1] = 1);
return statearr_14185;
});
var state_machine__5507__auto____1 = (function (state_14103){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14103);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14186){if((e14186 instanceof Object))
{var ex__5510__auto__ = e14186;var statearr_14187_14242 = state_14103;(statearr_14187_14242[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14243 = state_14103;
state_14103 = G__14243;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14103){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14188 = f__5522__auto__.call(null);(statearr_14188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14189);
return statearr_14188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.Mix = (function (){var obj14245 = {};return obj14245;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t14355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14355 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14356){
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
this.meta14356 = meta14356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14355.cljs$lang$type = true;
cljs.core.async.t14355.cljs$lang$ctorStr = "cljs.core.async/t14355";
cljs.core.async.t14355.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14355");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14355.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14357){var self__ = this;
var _14357__$1 = this;return self__.meta14356;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14357,meta14356__$1){var self__ = this;
var _14357__$1 = this;return (new cljs.core.async.t14355(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14356__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14355 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14355(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14356){return (new cljs.core.async.t14355(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14356));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14355(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14464 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14422){var state_val_14423 = (state_14422[1]);if((state_val_14423 === 1))
{var inst_14361 = (state_14422[7]);var inst_14361__$1 = calc_state.call(null);var inst_14362 = cljs.core.seq_QMARK_.call(null,inst_14361__$1);var state_14422__$1 = (function (){var statearr_14424 = state_14422;(statearr_14424[7] = inst_14361__$1);
return statearr_14424;
})();if(inst_14362)
{var statearr_14425_14465 = state_14422__$1;(statearr_14425_14465[1] = 2);
} else
{var statearr_14426_14466 = state_14422__$1;(statearr_14426_14466[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 2))
{var inst_14361 = (state_14422[7]);var inst_14364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14361);var state_14422__$1 = state_14422;var statearr_14427_14467 = state_14422__$1;(statearr_14427_14467[2] = inst_14364);
(statearr_14427_14467[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 3))
{var inst_14361 = (state_14422[7]);var state_14422__$1 = state_14422;var statearr_14428_14468 = state_14422__$1;(statearr_14428_14468[2] = inst_14361);
(statearr_14428_14468[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 4))
{var inst_14361 = (state_14422[7]);var inst_14367 = (state_14422[2]);var inst_14368 = cljs.core.get.call(null,inst_14367,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14369 = cljs.core.get.call(null,inst_14367,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14370 = cljs.core.get.call(null,inst_14367,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14371 = inst_14361;var state_14422__$1 = (function (){var statearr_14429 = state_14422;(statearr_14429[8] = inst_14371);
(statearr_14429[9] = inst_14369);
(statearr_14429[10] = inst_14370);
(statearr_14429[11] = inst_14368);
return statearr_14429;
})();var statearr_14430_14469 = state_14422__$1;(statearr_14430_14469[2] = null);
(statearr_14430_14469[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 5))
{var inst_14371 = (state_14422[8]);var inst_14374 = cljs.core.seq_QMARK_.call(null,inst_14371);var state_14422__$1 = state_14422;if(inst_14374)
{var statearr_14431_14470 = state_14422__$1;(statearr_14431_14470[1] = 7);
} else
{var statearr_14432_14471 = state_14422__$1;(statearr_14432_14471[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 6))
{var inst_14420 = (state_14422[2]);var state_14422__$1 = state_14422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14422__$1,inst_14420);
} else
{if((state_val_14423 === 7))
{var inst_14371 = (state_14422[8]);var inst_14376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14371);var state_14422__$1 = state_14422;var statearr_14433_14472 = state_14422__$1;(statearr_14433_14472[2] = inst_14376);
(statearr_14433_14472[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 8))
{var inst_14371 = (state_14422[8]);var state_14422__$1 = state_14422;var statearr_14434_14473 = state_14422__$1;(statearr_14434_14473[2] = inst_14371);
(statearr_14434_14473[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 9))
{var inst_14379 = (state_14422[12]);var inst_14379__$1 = (state_14422[2]);var inst_14380 = cljs.core.get.call(null,inst_14379__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14381 = cljs.core.get.call(null,inst_14379__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14382 = cljs.core.get.call(null,inst_14379__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14422__$1 = (function (){var statearr_14435 = state_14422;(statearr_14435[12] = inst_14379__$1);
(statearr_14435[13] = inst_14382);
(statearr_14435[14] = inst_14381);
return statearr_14435;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14422__$1,10,inst_14380);
} else
{if((state_val_14423 === 10))
{var inst_14387 = (state_14422[15]);var inst_14386 = (state_14422[16]);var inst_14385 = (state_14422[2]);var inst_14386__$1 = cljs.core.nth.call(null,inst_14385,0,null);var inst_14387__$1 = cljs.core.nth.call(null,inst_14385,1,null);var inst_14388 = (inst_14386__$1 == null);var inst_14389 = cljs.core._EQ_.call(null,inst_14387__$1,change);var inst_14390 = (inst_14388) || (inst_14389);var state_14422__$1 = (function (){var statearr_14436 = state_14422;(statearr_14436[15] = inst_14387__$1);
(statearr_14436[16] = inst_14386__$1);
return statearr_14436;
})();if(cljs.core.truth_(inst_14390))
{var statearr_14437_14474 = state_14422__$1;(statearr_14437_14474[1] = 11);
} else
{var statearr_14438_14475 = state_14422__$1;(statearr_14438_14475[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 11))
{var inst_14386 = (state_14422[16]);var inst_14392 = (inst_14386 == null);var state_14422__$1 = state_14422;if(cljs.core.truth_(inst_14392))
{var statearr_14439_14476 = state_14422__$1;(statearr_14439_14476[1] = 14);
} else
{var statearr_14440_14477 = state_14422__$1;(statearr_14440_14477[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 12))
{var inst_14401 = (state_14422[17]);var inst_14387 = (state_14422[15]);var inst_14382 = (state_14422[13]);var inst_14401__$1 = inst_14382.call(null,inst_14387);var state_14422__$1 = (function (){var statearr_14441 = state_14422;(statearr_14441[17] = inst_14401__$1);
return statearr_14441;
})();if(cljs.core.truth_(inst_14401__$1))
{var statearr_14442_14478 = state_14422__$1;(statearr_14442_14478[1] = 17);
} else
{var statearr_14443_14479 = state_14422__$1;(statearr_14443_14479[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 13))
{var inst_14418 = (state_14422[2]);var state_14422__$1 = state_14422;var statearr_14444_14480 = state_14422__$1;(statearr_14444_14480[2] = inst_14418);
(statearr_14444_14480[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 14))
{var inst_14387 = (state_14422[15]);var inst_14394 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14387);var state_14422__$1 = state_14422;var statearr_14445_14481 = state_14422__$1;(statearr_14445_14481[2] = inst_14394);
(statearr_14445_14481[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 15))
{var state_14422__$1 = state_14422;var statearr_14446_14482 = state_14422__$1;(statearr_14446_14482[2] = null);
(statearr_14446_14482[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 16))
{var inst_14397 = (state_14422[2]);var inst_14398 = calc_state.call(null);var inst_14371 = inst_14398;var state_14422__$1 = (function (){var statearr_14447 = state_14422;(statearr_14447[8] = inst_14371);
(statearr_14447[18] = inst_14397);
return statearr_14447;
})();var statearr_14448_14483 = state_14422__$1;(statearr_14448_14483[2] = null);
(statearr_14448_14483[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 17))
{var inst_14401 = (state_14422[17]);var state_14422__$1 = state_14422;var statearr_14449_14484 = state_14422__$1;(statearr_14449_14484[2] = inst_14401);
(statearr_14449_14484[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 18))
{var inst_14387 = (state_14422[15]);var inst_14382 = (state_14422[13]);var inst_14381 = (state_14422[14]);var inst_14404 = cljs.core.empty_QMARK_.call(null,inst_14382);var inst_14405 = inst_14381.call(null,inst_14387);var inst_14406 = cljs.core.not.call(null,inst_14405);var inst_14407 = (inst_14404) && (inst_14406);var state_14422__$1 = state_14422;var statearr_14450_14485 = state_14422__$1;(statearr_14450_14485[2] = inst_14407);
(statearr_14450_14485[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 19))
{var inst_14409 = (state_14422[2]);var state_14422__$1 = state_14422;if(cljs.core.truth_(inst_14409))
{var statearr_14451_14486 = state_14422__$1;(statearr_14451_14486[1] = 20);
} else
{var statearr_14452_14487 = state_14422__$1;(statearr_14452_14487[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 20))
{var inst_14386 = (state_14422[16]);var state_14422__$1 = state_14422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14422__$1,23,out,inst_14386);
} else
{if((state_val_14423 === 21))
{var state_14422__$1 = state_14422;var statearr_14453_14488 = state_14422__$1;(statearr_14453_14488[2] = null);
(statearr_14453_14488[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 22))
{var inst_14379 = (state_14422[12]);var inst_14415 = (state_14422[2]);var inst_14371 = inst_14379;var state_14422__$1 = (function (){var statearr_14454 = state_14422;(statearr_14454[8] = inst_14371);
(statearr_14454[19] = inst_14415);
return statearr_14454;
})();var statearr_14455_14489 = state_14422__$1;(statearr_14455_14489[2] = null);
(statearr_14455_14489[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14423 === 23))
{var inst_14412 = (state_14422[2]);var state_14422__$1 = state_14422;var statearr_14456_14490 = state_14422__$1;(statearr_14456_14490[2] = inst_14412);
(statearr_14456_14490[1] = 22);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14460[0] = state_machine__5507__auto__);
(statearr_14460[1] = 1);
return statearr_14460;
});
var state_machine__5507__auto____1 = (function (state_14422){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14422);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14461){if((e14461 instanceof Object))
{var ex__5510__auto__ = e14461;var statearr_14462_14491 = state_14422;(statearr_14462_14491[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14492 = state_14422;
state_14422 = G__14492;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14422){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14463 = f__5522__auto__.call(null);(statearr_14463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14464);
return statearr_14463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
cljs.core.async.Pub = (function (){var obj14494 = {};return obj14494;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__14495_SHARP_){if(cljs.core.truth_(p1__14495_SHARP_.call(null,topic)))
{return p1__14495_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14495_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14620 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14620 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14621){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14621 = meta14621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14620.cljs$lang$type = true;
cljs.core.async.t14620.cljs$lang$ctorStr = "cljs.core.async/t14620";
cljs.core.async.t14620.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14620");
});})(mults,ensure_mult))
;
cljs.core.async.t14620.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14620.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14620.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14620.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14622){var self__ = this;
var _14622__$1 = this;return self__.meta14621;
});})(mults,ensure_mult))
;
cljs.core.async.t14620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14622,meta14621__$1){var self__ = this;
var _14622__$1 = this;return (new cljs.core.async.t14620(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14621__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14620 = ((function (mults,ensure_mult){
return (function __GT_t14620(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14621){return (new cljs.core.async.t14620(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14621));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14620(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14696){var state_val_14697 = (state_14696[1]);if((state_val_14697 === 1))
{var state_14696__$1 = state_14696;var statearr_14698_14745 = state_14696__$1;(statearr_14698_14745[2] = null);
(statearr_14698_14745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 2))
{var state_14696__$1 = state_14696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14696__$1,4,ch);
} else
{if((state_val_14697 === 3))
{var inst_14694 = (state_14696[2]);var state_14696__$1 = state_14696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14696__$1,inst_14694);
} else
{if((state_val_14697 === 4))
{var inst_14625 = (state_14696[7]);var inst_14625__$1 = (state_14696[2]);var inst_14626 = (inst_14625__$1 == null);var state_14696__$1 = (function (){var statearr_14699 = state_14696;(statearr_14699[7] = inst_14625__$1);
return statearr_14699;
})();if(cljs.core.truth_(inst_14626))
{var statearr_14700_14746 = state_14696__$1;(statearr_14700_14746[1] = 5);
} else
{var statearr_14701_14747 = state_14696__$1;(statearr_14701_14747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 5))
{var inst_14632 = cljs.core.deref.call(null,mults);var inst_14633 = cljs.core.vals.call(null,inst_14632);var inst_14634 = cljs.core.seq.call(null,inst_14633);var inst_14635 = inst_14634;var inst_14636 = null;var inst_14637 = 0;var inst_14638 = 0;var state_14696__$1 = (function (){var statearr_14702 = state_14696;(statearr_14702[8] = inst_14635);
(statearr_14702[9] = inst_14636);
(statearr_14702[10] = inst_14637);
(statearr_14702[11] = inst_14638);
return statearr_14702;
})();var statearr_14703_14748 = state_14696__$1;(statearr_14703_14748[2] = null);
(statearr_14703_14748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 6))
{var inst_14625 = (state_14696[7]);var inst_14675 = (state_14696[12]);var inst_14673 = (state_14696[13]);var inst_14673__$1 = topic_fn.call(null,inst_14625);var inst_14674 = cljs.core.deref.call(null,mults);var inst_14675__$1 = cljs.core.get.call(null,inst_14674,inst_14673__$1);var state_14696__$1 = (function (){var statearr_14704 = state_14696;(statearr_14704[12] = inst_14675__$1);
(statearr_14704[13] = inst_14673__$1);
return statearr_14704;
})();if(cljs.core.truth_(inst_14675__$1))
{var statearr_14705_14749 = state_14696__$1;(statearr_14705_14749[1] = 19);
} else
{var statearr_14706_14750 = state_14696__$1;(statearr_14706_14750[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 7))
{var inst_14692 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14707_14751 = state_14696__$1;(statearr_14707_14751[2] = inst_14692);
(statearr_14707_14751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 8))
{var inst_14637 = (state_14696[10]);var inst_14638 = (state_14696[11]);var inst_14640 = (inst_14638 < inst_14637);var inst_14641 = inst_14640;var state_14696__$1 = state_14696;if(cljs.core.truth_(inst_14641))
{var statearr_14711_14752 = state_14696__$1;(statearr_14711_14752[1] = 10);
} else
{var statearr_14712_14753 = state_14696__$1;(statearr_14712_14753[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 9))
{var inst_14671 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14713_14754 = state_14696__$1;(statearr_14713_14754[2] = inst_14671);
(statearr_14713_14754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 10))
{var inst_14635 = (state_14696[8]);var inst_14636 = (state_14696[9]);var inst_14637 = (state_14696[10]);var inst_14638 = (state_14696[11]);var inst_14643 = cljs.core._nth.call(null,inst_14636,inst_14638);var inst_14644 = cljs.core.async.muxch_STAR_.call(null,inst_14643);var inst_14645 = cljs.core.async.close_BANG_.call(null,inst_14644);var inst_14646 = (inst_14638 + 1);var tmp14708 = inst_14635;var tmp14709 = inst_14636;var tmp14710 = inst_14637;var inst_14635__$1 = tmp14708;var inst_14636__$1 = tmp14709;var inst_14637__$1 = tmp14710;var inst_14638__$1 = inst_14646;var state_14696__$1 = (function (){var statearr_14714 = state_14696;(statearr_14714[8] = inst_14635__$1);
(statearr_14714[14] = inst_14645);
(statearr_14714[9] = inst_14636__$1);
(statearr_14714[10] = inst_14637__$1);
(statearr_14714[11] = inst_14638__$1);
return statearr_14714;
})();var statearr_14715_14755 = state_14696__$1;(statearr_14715_14755[2] = null);
(statearr_14715_14755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 11))
{var inst_14649 = (state_14696[15]);var inst_14635 = (state_14696[8]);var inst_14649__$1 = cljs.core.seq.call(null,inst_14635);var state_14696__$1 = (function (){var statearr_14716 = state_14696;(statearr_14716[15] = inst_14649__$1);
return statearr_14716;
})();if(inst_14649__$1)
{var statearr_14717_14756 = state_14696__$1;(statearr_14717_14756[1] = 13);
} else
{var statearr_14718_14757 = state_14696__$1;(statearr_14718_14757[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 12))
{var inst_14669 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14719_14758 = state_14696__$1;(statearr_14719_14758[2] = inst_14669);
(statearr_14719_14758[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 13))
{var inst_14649 = (state_14696[15]);var inst_14651 = cljs.core.chunked_seq_QMARK_.call(null,inst_14649);var state_14696__$1 = state_14696;if(inst_14651)
{var statearr_14720_14759 = state_14696__$1;(statearr_14720_14759[1] = 16);
} else
{var statearr_14721_14760 = state_14696__$1;(statearr_14721_14760[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 14))
{var state_14696__$1 = state_14696;var statearr_14722_14761 = state_14696__$1;(statearr_14722_14761[2] = null);
(statearr_14722_14761[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 15))
{var inst_14667 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14723_14762 = state_14696__$1;(statearr_14723_14762[2] = inst_14667);
(statearr_14723_14762[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 16))
{var inst_14649 = (state_14696[15]);var inst_14653 = cljs.core.chunk_first.call(null,inst_14649);var inst_14654 = cljs.core.chunk_rest.call(null,inst_14649);var inst_14655 = cljs.core.count.call(null,inst_14653);var inst_14635 = inst_14654;var inst_14636 = inst_14653;var inst_14637 = inst_14655;var inst_14638 = 0;var state_14696__$1 = (function (){var statearr_14724 = state_14696;(statearr_14724[8] = inst_14635);
(statearr_14724[9] = inst_14636);
(statearr_14724[10] = inst_14637);
(statearr_14724[11] = inst_14638);
return statearr_14724;
})();var statearr_14725_14763 = state_14696__$1;(statearr_14725_14763[2] = null);
(statearr_14725_14763[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 17))
{var inst_14649 = (state_14696[15]);var inst_14658 = cljs.core.first.call(null,inst_14649);var inst_14659 = cljs.core.async.muxch_STAR_.call(null,inst_14658);var inst_14660 = cljs.core.async.close_BANG_.call(null,inst_14659);var inst_14661 = cljs.core.next.call(null,inst_14649);var inst_14635 = inst_14661;var inst_14636 = null;var inst_14637 = 0;var inst_14638 = 0;var state_14696__$1 = (function (){var statearr_14726 = state_14696;(statearr_14726[8] = inst_14635);
(statearr_14726[9] = inst_14636);
(statearr_14726[10] = inst_14637);
(statearr_14726[11] = inst_14638);
(statearr_14726[16] = inst_14660);
return statearr_14726;
})();var statearr_14727_14764 = state_14696__$1;(statearr_14727_14764[2] = null);
(statearr_14727_14764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 18))
{var inst_14664 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14728_14765 = state_14696__$1;(statearr_14728_14765[2] = inst_14664);
(statearr_14728_14765[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 19))
{var state_14696__$1 = state_14696;var statearr_14729_14766 = state_14696__$1;(statearr_14729_14766[2] = null);
(statearr_14729_14766[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 20))
{var state_14696__$1 = state_14696;var statearr_14730_14767 = state_14696__$1;(statearr_14730_14767[2] = null);
(statearr_14730_14767[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 21))
{var inst_14689 = (state_14696[2]);var state_14696__$1 = (function (){var statearr_14731 = state_14696;(statearr_14731[17] = inst_14689);
return statearr_14731;
})();var statearr_14732_14768 = state_14696__$1;(statearr_14732_14768[2] = null);
(statearr_14732_14768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 22))
{var inst_14686 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14733_14769 = state_14696__$1;(statearr_14733_14769[2] = inst_14686);
(statearr_14733_14769[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 23))
{var inst_14673 = (state_14696[13]);var inst_14677 = (state_14696[2]);var inst_14678 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14673);var state_14696__$1 = (function (){var statearr_14734 = state_14696;(statearr_14734[18] = inst_14677);
return statearr_14734;
})();var statearr_14735_14770 = state_14696__$1;(statearr_14735_14770[2] = inst_14678);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14696__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 24))
{var inst_14625 = (state_14696[7]);var inst_14675 = (state_14696[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14696,23,Object,null,22);var inst_14682 = cljs.core.async.muxch_STAR_.call(null,inst_14675);var state_14696__$1 = state_14696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14696__$1,25,inst_14682,inst_14625);
} else
{if((state_val_14697 === 25))
{var inst_14684 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14736_14771 = state_14696__$1;(statearr_14736_14771[2] = inst_14684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14696__$1);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14740[0] = state_machine__5507__auto__);
(statearr_14740[1] = 1);
return statearr_14740;
});
var state_machine__5507__auto____1 = (function (state_14696){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14696);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14741){if((e14741 instanceof Object))
{var ex__5510__auto__ = e14741;var statearr_14742_14772 = state_14696;(statearr_14742_14772[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14773 = state_14696;
state_14696 = G__14773;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14696){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14743 = f__5522__auto__.call(null);(statearr_14743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14744);
return statearr_14743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14910 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14880){var state_val_14881 = (state_14880[1]);if((state_val_14881 === 1))
{var state_14880__$1 = state_14880;var statearr_14882_14911 = state_14880__$1;(statearr_14882_14911[2] = null);
(statearr_14882_14911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 2))
{var inst_14843 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14844 = 0;var state_14880__$1 = (function (){var statearr_14883 = state_14880;(statearr_14883[7] = inst_14844);
(statearr_14883[8] = inst_14843);
return statearr_14883;
})();var statearr_14884_14912 = state_14880__$1;(statearr_14884_14912[2] = null);
(statearr_14884_14912[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 3))
{var inst_14878 = (state_14880[2]);var state_14880__$1 = state_14880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14880__$1,inst_14878);
} else
{if((state_val_14881 === 4))
{var inst_14844 = (state_14880[7]);var inst_14846 = (inst_14844 < cnt);var state_14880__$1 = state_14880;if(cljs.core.truth_(inst_14846))
{var statearr_14885_14913 = state_14880__$1;(statearr_14885_14913[1] = 6);
} else
{var statearr_14886_14914 = state_14880__$1;(statearr_14886_14914[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 5))
{var inst_14864 = (state_14880[2]);var state_14880__$1 = (function (){var statearr_14887 = state_14880;(statearr_14887[9] = inst_14864);
return statearr_14887;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14880__$1,12,dchan);
} else
{if((state_val_14881 === 6))
{var state_14880__$1 = state_14880;var statearr_14888_14915 = state_14880__$1;(statearr_14888_14915[2] = null);
(statearr_14888_14915[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 7))
{var state_14880__$1 = state_14880;var statearr_14889_14916 = state_14880__$1;(statearr_14889_14916[2] = null);
(statearr_14889_14916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 8))
{var inst_14862 = (state_14880[2]);var state_14880__$1 = state_14880;var statearr_14890_14917 = state_14880__$1;(statearr_14890_14917[2] = inst_14862);
(statearr_14890_14917[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 9))
{var inst_14844 = (state_14880[7]);var inst_14857 = (state_14880[2]);var inst_14858 = (inst_14844 + 1);var inst_14844__$1 = inst_14858;var state_14880__$1 = (function (){var statearr_14891 = state_14880;(statearr_14891[7] = inst_14844__$1);
(statearr_14891[10] = inst_14857);
return statearr_14891;
})();var statearr_14892_14918 = state_14880__$1;(statearr_14892_14918[2] = null);
(statearr_14892_14918[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 10))
{var inst_14848 = (state_14880[2]);var inst_14849 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14880__$1 = (function (){var statearr_14893 = state_14880;(statearr_14893[11] = inst_14848);
return statearr_14893;
})();var statearr_14894_14919 = state_14880__$1;(statearr_14894_14919[2] = inst_14849);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14880__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 11))
{var inst_14844 = (state_14880[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14880,10,Object,null,9);var inst_14853 = chs__$1.call(null,inst_14844);var inst_14854 = done.call(null,inst_14844);var inst_14855 = cljs.core.async.take_BANG_.call(null,inst_14853,inst_14854);var state_14880__$1 = state_14880;var statearr_14895_14920 = state_14880__$1;(statearr_14895_14920[2] = inst_14855);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14880__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 12))
{var inst_14866 = (state_14880[12]);var inst_14866__$1 = (state_14880[2]);var inst_14867 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14866__$1);var state_14880__$1 = (function (){var statearr_14896 = state_14880;(statearr_14896[12] = inst_14866__$1);
return statearr_14896;
})();if(cljs.core.truth_(inst_14867))
{var statearr_14897_14921 = state_14880__$1;(statearr_14897_14921[1] = 13);
} else
{var statearr_14898_14922 = state_14880__$1;(statearr_14898_14922[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 13))
{var inst_14869 = cljs.core.async.close_BANG_.call(null,out);var state_14880__$1 = state_14880;var statearr_14899_14923 = state_14880__$1;(statearr_14899_14923[2] = inst_14869);
(statearr_14899_14923[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 14))
{var inst_14866 = (state_14880[12]);var inst_14871 = cljs.core.apply.call(null,f,inst_14866);var state_14880__$1 = state_14880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14880__$1,16,out,inst_14871);
} else
{if((state_val_14881 === 15))
{var inst_14876 = (state_14880[2]);var state_14880__$1 = state_14880;var statearr_14900_14924 = state_14880__$1;(statearr_14900_14924[2] = inst_14876);
(statearr_14900_14924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14881 === 16))
{var inst_14873 = (state_14880[2]);var state_14880__$1 = (function (){var statearr_14901 = state_14880;(statearr_14901[13] = inst_14873);
return statearr_14901;
})();var statearr_14902_14925 = state_14880__$1;(statearr_14902_14925[2] = null);
(statearr_14902_14925[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14906[0] = state_machine__5507__auto__);
(statearr_14906[1] = 1);
return statearr_14906;
});
var state_machine__5507__auto____1 = (function (state_14880){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14907){if((e14907 instanceof Object))
{var ex__5510__auto__ = e14907;var statearr_14908_14926 = state_14880;(statearr_14908_14926[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14927 = state_14880;
state_14880 = G__14927;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14880){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14909 = f__5522__auto__.call(null);(statearr_14909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14910);
return statearr_14909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15011){var state_val_15012 = (state_15011[1]);if((state_val_15012 === 1))
{var inst_14982 = cljs.core.vec.call(null,chs);var inst_14983 = inst_14982;var state_15011__$1 = (function (){var statearr_15013 = state_15011;(statearr_15013[7] = inst_14983);
return statearr_15013;
})();var statearr_15014_15036 = state_15011__$1;(statearr_15014_15036[2] = null);
(statearr_15014_15036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 2))
{var inst_14983 = (state_15011[7]);var inst_14985 = cljs.core.count.call(null,inst_14983);var inst_14986 = (inst_14985 > 0);var state_15011__$1 = state_15011;if(cljs.core.truth_(inst_14986))
{var statearr_15015_15037 = state_15011__$1;(statearr_15015_15037[1] = 4);
} else
{var statearr_15016_15038 = state_15011__$1;(statearr_15016_15038[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 3))
{var inst_15009 = (state_15011[2]);var state_15011__$1 = state_15011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15011__$1,inst_15009);
} else
{if((state_val_15012 === 4))
{var inst_14983 = (state_15011[7]);var state_15011__$1 = state_15011;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15011__$1,7,inst_14983);
} else
{if((state_val_15012 === 5))
{var inst_15005 = cljs.core.async.close_BANG_.call(null,out);var state_15011__$1 = state_15011;var statearr_15017_15039 = state_15011__$1;(statearr_15017_15039[2] = inst_15005);
(statearr_15017_15039[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 6))
{var inst_15007 = (state_15011[2]);var state_15011__$1 = state_15011;var statearr_15018_15040 = state_15011__$1;(statearr_15018_15040[2] = inst_15007);
(statearr_15018_15040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 7))
{var inst_14990 = (state_15011[8]);var inst_14991 = (state_15011[9]);var inst_14990__$1 = (state_15011[2]);var inst_14991__$1 = cljs.core.nth.call(null,inst_14990__$1,0,null);var inst_14992 = cljs.core.nth.call(null,inst_14990__$1,1,null);var inst_14993 = (inst_14991__$1 == null);var state_15011__$1 = (function (){var statearr_15019 = state_15011;(statearr_15019[10] = inst_14992);
(statearr_15019[8] = inst_14990__$1);
(statearr_15019[9] = inst_14991__$1);
return statearr_15019;
})();if(cljs.core.truth_(inst_14993))
{var statearr_15020_15041 = state_15011__$1;(statearr_15020_15041[1] = 8);
} else
{var statearr_15021_15042 = state_15011__$1;(statearr_15021_15042[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 8))
{var inst_14992 = (state_15011[10]);var inst_14990 = (state_15011[8]);var inst_14991 = (state_15011[9]);var inst_14983 = (state_15011[7]);var inst_14995 = (function (){var c = inst_14992;var v = inst_14991;var vec__14988 = inst_14990;var cs = inst_14983;return ((function (c,v,vec__14988,cs,inst_14992,inst_14990,inst_14991,inst_14983,state_val_15012){
return (function (p1__14928_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14928_SHARP_);
});
;})(c,v,vec__14988,cs,inst_14992,inst_14990,inst_14991,inst_14983,state_val_15012))
})();var inst_14996 = cljs.core.filterv.call(null,inst_14995,inst_14983);var inst_14983__$1 = inst_14996;var state_15011__$1 = (function (){var statearr_15022 = state_15011;(statearr_15022[7] = inst_14983__$1);
return statearr_15022;
})();var statearr_15023_15043 = state_15011__$1;(statearr_15023_15043[2] = null);
(statearr_15023_15043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 9))
{var inst_14991 = (state_15011[9]);var state_15011__$1 = state_15011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15011__$1,11,out,inst_14991);
} else
{if((state_val_15012 === 10))
{var inst_15003 = (state_15011[2]);var state_15011__$1 = state_15011;var statearr_15025_15044 = state_15011__$1;(statearr_15025_15044[2] = inst_15003);
(statearr_15025_15044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15012 === 11))
{var inst_14983 = (state_15011[7]);var inst_15000 = (state_15011[2]);var tmp15024 = inst_14983;var inst_14983__$1 = tmp15024;var state_15011__$1 = (function (){var statearr_15026 = state_15011;(statearr_15026[11] = inst_15000);
(statearr_15026[7] = inst_14983__$1);
return statearr_15026;
})();var statearr_15027_15045 = state_15011__$1;(statearr_15027_15045[2] = null);
(statearr_15027_15045[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15031 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15031[0] = state_machine__5507__auto__);
(statearr_15031[1] = 1);
return statearr_15031;
});
var state_machine__5507__auto____1 = (function (state_15011){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15032){if((e15032 instanceof Object))
{var ex__5510__auto__ = e15032;var statearr_15033_15046 = state_15011;(statearr_15033_15046[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15047 = state_15011;
state_15011 = G__15047;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15011){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15034 = f__5522__auto__.call(null);(statearr_15034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15035);
return statearr_15034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15140 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15117){var state_val_15118 = (state_15117[1]);if((state_val_15118 === 1))
{var inst_15094 = 0;var state_15117__$1 = (function (){var statearr_15119 = state_15117;(statearr_15119[7] = inst_15094);
return statearr_15119;
})();var statearr_15120_15141 = state_15117__$1;(statearr_15120_15141[2] = null);
(statearr_15120_15141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15118 === 2))
{var inst_15094 = (state_15117[7]);var inst_15096 = (inst_15094 < n);var state_15117__$1 = state_15117;if(cljs.core.truth_(inst_15096))
{var statearr_15121_15142 = state_15117__$1;(statearr_15121_15142[1] = 4);
} else
{var statearr_15122_15143 = state_15117__$1;(statearr_15122_15143[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15118 === 3))
{var inst_15114 = (state_15117[2]);var inst_15115 = cljs.core.async.close_BANG_.call(null,out);var state_15117__$1 = (function (){var statearr_15123 = state_15117;(statearr_15123[8] = inst_15114);
return statearr_15123;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15117__$1,inst_15115);
} else
{if((state_val_15118 === 4))
{var state_15117__$1 = state_15117;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15117__$1,7,ch);
} else
{if((state_val_15118 === 5))
{var state_15117__$1 = state_15117;var statearr_15124_15144 = state_15117__$1;(statearr_15124_15144[2] = null);
(statearr_15124_15144[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15118 === 6))
{var inst_15112 = (state_15117[2]);var state_15117__$1 = state_15117;var statearr_15125_15145 = state_15117__$1;(statearr_15125_15145[2] = inst_15112);
(statearr_15125_15145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15118 === 7))
{var inst_15099 = (state_15117[9]);var inst_15099__$1 = (state_15117[2]);var inst_15100 = (inst_15099__$1 == null);var inst_15101 = cljs.core.not.call(null,inst_15100);var state_15117__$1 = (function (){var statearr_15126 = state_15117;(statearr_15126[9] = inst_15099__$1);
return statearr_15126;
})();if(inst_15101)
{var statearr_15127_15146 = state_15117__$1;(statearr_15127_15146[1] = 8);
} else
{var statearr_15128_15147 = state_15117__$1;(statearr_15128_15147[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15118 === 8))
{var inst_15099 = (state_15117[9]);var state_15117__$1 = state_15117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15117__$1,11,out,inst_15099);
} else
{if((state_val_15118 === 9))
{var state_15117__$1 = state_15117;var statearr_15129_15148 = state_15117__$1;(statearr_15129_15148[2] = null);
(statearr_15129_15148[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15118 === 10))
{var inst_15109 = (state_15117[2]);var state_15117__$1 = state_15117;var statearr_15130_15149 = state_15117__$1;(statearr_15130_15149[2] = inst_15109);
(statearr_15130_15149[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15118 === 11))
{var inst_15094 = (state_15117[7]);var inst_15104 = (state_15117[2]);var inst_15105 = (inst_15094 + 1);var inst_15094__$1 = inst_15105;var state_15117__$1 = (function (){var statearr_15131 = state_15117;(statearr_15131[10] = inst_15104);
(statearr_15131[7] = inst_15094__$1);
return statearr_15131;
})();var statearr_15132_15150 = state_15117__$1;(statearr_15132_15150[2] = null);
(statearr_15132_15150[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15136 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15136[0] = state_machine__5507__auto__);
(statearr_15136[1] = 1);
return statearr_15136;
});
var state_machine__5507__auto____1 = (function (state_15117){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15117);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15137){if((e15137 instanceof Object))
{var ex__5510__auto__ = e15137;var statearr_15138_15151 = state_15117;(statearr_15138_15151[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15117);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15152 = state_15117;
state_15117 = G__15152;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15117){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15139 = f__5522__auto__.call(null);(statearr_15139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15140);
return statearr_15139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15249 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15224){var state_val_15225 = (state_15224[1]);if((state_val_15225 === 1))
{var inst_15201 = null;var state_15224__$1 = (function (){var statearr_15226 = state_15224;(statearr_15226[7] = inst_15201);
return statearr_15226;
})();var statearr_15227_15250 = state_15224__$1;(statearr_15227_15250[2] = null);
(statearr_15227_15250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15225 === 2))
{var state_15224__$1 = state_15224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15224__$1,4,ch);
} else
{if((state_val_15225 === 3))
{var inst_15221 = (state_15224[2]);var inst_15222 = cljs.core.async.close_BANG_.call(null,out);var state_15224__$1 = (function (){var statearr_15228 = state_15224;(statearr_15228[8] = inst_15221);
return statearr_15228;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15224__$1,inst_15222);
} else
{if((state_val_15225 === 4))
{var inst_15204 = (state_15224[9]);var inst_15204__$1 = (state_15224[2]);var inst_15205 = (inst_15204__$1 == null);var inst_15206 = cljs.core.not.call(null,inst_15205);var state_15224__$1 = (function (){var statearr_15229 = state_15224;(statearr_15229[9] = inst_15204__$1);
return statearr_15229;
})();if(inst_15206)
{var statearr_15230_15251 = state_15224__$1;(statearr_15230_15251[1] = 5);
} else
{var statearr_15231_15252 = state_15224__$1;(statearr_15231_15252[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15225 === 5))
{var inst_15204 = (state_15224[9]);var inst_15201 = (state_15224[7]);var inst_15208 = cljs.core._EQ_.call(null,inst_15204,inst_15201);var state_15224__$1 = state_15224;if(inst_15208)
{var statearr_15232_15253 = state_15224__$1;(statearr_15232_15253[1] = 8);
} else
{var statearr_15233_15254 = state_15224__$1;(statearr_15233_15254[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15225 === 6))
{var state_15224__$1 = state_15224;var statearr_15235_15255 = state_15224__$1;(statearr_15235_15255[2] = null);
(statearr_15235_15255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15225 === 7))
{var inst_15219 = (state_15224[2]);var state_15224__$1 = state_15224;var statearr_15236_15256 = state_15224__$1;(statearr_15236_15256[2] = inst_15219);
(statearr_15236_15256[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15225 === 8))
{var inst_15201 = (state_15224[7]);var tmp15234 = inst_15201;var inst_15201__$1 = tmp15234;var state_15224__$1 = (function (){var statearr_15237 = state_15224;(statearr_15237[7] = inst_15201__$1);
return statearr_15237;
})();var statearr_15238_15257 = state_15224__$1;(statearr_15238_15257[2] = null);
(statearr_15238_15257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15225 === 9))
{var inst_15204 = (state_15224[9]);var state_15224__$1 = state_15224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15224__$1,11,out,inst_15204);
} else
{if((state_val_15225 === 10))
{var inst_15216 = (state_15224[2]);var state_15224__$1 = state_15224;var statearr_15239_15258 = state_15224__$1;(statearr_15239_15258[2] = inst_15216);
(statearr_15239_15258[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15225 === 11))
{var inst_15204 = (state_15224[9]);var inst_15213 = (state_15224[2]);var inst_15201 = inst_15204;var state_15224__$1 = (function (){var statearr_15240 = state_15224;(statearr_15240[10] = inst_15213);
(statearr_15240[7] = inst_15201);
return statearr_15240;
})();var statearr_15241_15259 = state_15224__$1;(statearr_15241_15259[2] = null);
(statearr_15241_15259[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15245 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15245[0] = state_machine__5507__auto__);
(statearr_15245[1] = 1);
return statearr_15245;
});
var state_machine__5507__auto____1 = (function (state_15224){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15246){if((e15246 instanceof Object))
{var ex__5510__auto__ = e15246;var statearr_15247_15260 = state_15224;(statearr_15247_15260[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15261 = state_15224;
state_15224 = G__15261;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15224){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15248 = f__5522__auto__.call(null);(statearr_15248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15249);
return statearr_15248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15366){var state_val_15367 = (state_15366[1]);if((state_val_15367 === 1))
{var inst_15329 = (new Array(n));var inst_15330 = inst_15329;var inst_15331 = 0;var state_15366__$1 = (function (){var statearr_15368 = state_15366;(statearr_15368[7] = inst_15331);
(statearr_15368[8] = inst_15330);
return statearr_15368;
})();var statearr_15369_15397 = state_15366__$1;(statearr_15369_15397[2] = null);
(statearr_15369_15397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 2))
{var state_15366__$1 = state_15366;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15366__$1,4,ch);
} else
{if((state_val_15367 === 3))
{var inst_15364 = (state_15366[2]);var state_15366__$1 = state_15366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15366__$1,inst_15364);
} else
{if((state_val_15367 === 4))
{var inst_15334 = (state_15366[9]);var inst_15334__$1 = (state_15366[2]);var inst_15335 = (inst_15334__$1 == null);var inst_15336 = cljs.core.not.call(null,inst_15335);var state_15366__$1 = (function (){var statearr_15370 = state_15366;(statearr_15370[9] = inst_15334__$1);
return statearr_15370;
})();if(inst_15336)
{var statearr_15371_15398 = state_15366__$1;(statearr_15371_15398[1] = 5);
} else
{var statearr_15372_15399 = state_15366__$1;(statearr_15372_15399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 5))
{var inst_15334 = (state_15366[9]);var inst_15331 = (state_15366[7]);var inst_15339 = (state_15366[10]);var inst_15330 = (state_15366[8]);var inst_15338 = (inst_15330[inst_15331] = inst_15334);var inst_15339__$1 = (inst_15331 + 1);var inst_15340 = (inst_15339__$1 < n);var state_15366__$1 = (function (){var statearr_15373 = state_15366;(statearr_15373[10] = inst_15339__$1);
(statearr_15373[11] = inst_15338);
return statearr_15373;
})();if(cljs.core.truth_(inst_15340))
{var statearr_15374_15400 = state_15366__$1;(statearr_15374_15400[1] = 8);
} else
{var statearr_15375_15401 = state_15366__$1;(statearr_15375_15401[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 6))
{var inst_15331 = (state_15366[7]);var inst_15352 = (inst_15331 > 0);var state_15366__$1 = state_15366;if(cljs.core.truth_(inst_15352))
{var statearr_15377_15402 = state_15366__$1;(statearr_15377_15402[1] = 12);
} else
{var statearr_15378_15403 = state_15366__$1;(statearr_15378_15403[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 7))
{var inst_15362 = (state_15366[2]);var state_15366__$1 = state_15366;var statearr_15379_15404 = state_15366__$1;(statearr_15379_15404[2] = inst_15362);
(statearr_15379_15404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 8))
{var inst_15339 = (state_15366[10]);var inst_15330 = (state_15366[8]);var tmp15376 = inst_15330;var inst_15330__$1 = tmp15376;var inst_15331 = inst_15339;var state_15366__$1 = (function (){var statearr_15380 = state_15366;(statearr_15380[7] = inst_15331);
(statearr_15380[8] = inst_15330__$1);
return statearr_15380;
})();var statearr_15381_15405 = state_15366__$1;(statearr_15381_15405[2] = null);
(statearr_15381_15405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 9))
{var inst_15330 = (state_15366[8]);var inst_15344 = cljs.core.vec.call(null,inst_15330);var state_15366__$1 = state_15366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15366__$1,11,out,inst_15344);
} else
{if((state_val_15367 === 10))
{var inst_15350 = (state_15366[2]);var state_15366__$1 = state_15366;var statearr_15382_15406 = state_15366__$1;(statearr_15382_15406[2] = inst_15350);
(statearr_15382_15406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 11))
{var inst_15346 = (state_15366[2]);var inst_15347 = (new Array(n));var inst_15330 = inst_15347;var inst_15331 = 0;var state_15366__$1 = (function (){var statearr_15383 = state_15366;(statearr_15383[7] = inst_15331);
(statearr_15383[8] = inst_15330);
(statearr_15383[12] = inst_15346);
return statearr_15383;
})();var statearr_15384_15407 = state_15366__$1;(statearr_15384_15407[2] = null);
(statearr_15384_15407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 12))
{var inst_15330 = (state_15366[8]);var inst_15354 = cljs.core.vec.call(null,inst_15330);var state_15366__$1 = state_15366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15366__$1,15,out,inst_15354);
} else
{if((state_val_15367 === 13))
{var state_15366__$1 = state_15366;var statearr_15385_15408 = state_15366__$1;(statearr_15385_15408[2] = null);
(statearr_15385_15408[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 14))
{var inst_15359 = (state_15366[2]);var inst_15360 = cljs.core.async.close_BANG_.call(null,out);var state_15366__$1 = (function (){var statearr_15386 = state_15366;(statearr_15386[13] = inst_15359);
return statearr_15386;
})();var statearr_15387_15409 = state_15366__$1;(statearr_15387_15409[2] = inst_15360);
(statearr_15387_15409[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15367 === 15))
{var inst_15356 = (state_15366[2]);var state_15366__$1 = state_15366;var statearr_15388_15410 = state_15366__$1;(statearr_15388_15410[2] = inst_15356);
(statearr_15388_15410[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15392[0] = state_machine__5507__auto__);
(statearr_15392[1] = 1);
return statearr_15392;
});
var state_machine__5507__auto____1 = (function (state_15366){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15366);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15393){if((e15393 instanceof Object))
{var ex__5510__auto__ = e15393;var statearr_15394_15411 = state_15366;(statearr_15394_15411[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15412 = state_15366;
state_15366 = G__15412;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15366){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15395 = f__5522__auto__.call(null);(statearr_15395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15396);
return statearr_15395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15525){var state_val_15526 = (state_15525[1]);if((state_val_15526 === 1))
{var inst_15484 = [];var inst_15485 = inst_15484;var inst_15486 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15525__$1 = (function (){var statearr_15527 = state_15525;(statearr_15527[7] = inst_15485);
(statearr_15527[8] = inst_15486);
return statearr_15527;
})();var statearr_15528_15556 = state_15525__$1;(statearr_15528_15556[2] = null);
(statearr_15528_15556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 2))
{var state_15525__$1 = state_15525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15525__$1,4,ch);
} else
{if((state_val_15526 === 3))
{var inst_15523 = (state_15525[2]);var state_15525__$1 = state_15525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15525__$1,inst_15523);
} else
{if((state_val_15526 === 4))
{var inst_15489 = (state_15525[9]);var inst_15489__$1 = (state_15525[2]);var inst_15490 = (inst_15489__$1 == null);var inst_15491 = cljs.core.not.call(null,inst_15490);var state_15525__$1 = (function (){var statearr_15529 = state_15525;(statearr_15529[9] = inst_15489__$1);
return statearr_15529;
})();if(inst_15491)
{var statearr_15530_15557 = state_15525__$1;(statearr_15530_15557[1] = 5);
} else
{var statearr_15531_15558 = state_15525__$1;(statearr_15531_15558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 5))
{var inst_15493 = (state_15525[10]);var inst_15489 = (state_15525[9]);var inst_15486 = (state_15525[8]);var inst_15493__$1 = f.call(null,inst_15489);var inst_15494 = cljs.core._EQ_.call(null,inst_15493__$1,inst_15486);var inst_15495 = cljs.core.keyword_identical_QMARK_.call(null,inst_15486,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15496 = (inst_15494) || (inst_15495);var state_15525__$1 = (function (){var statearr_15532 = state_15525;(statearr_15532[10] = inst_15493__$1);
return statearr_15532;
})();if(cljs.core.truth_(inst_15496))
{var statearr_15533_15559 = state_15525__$1;(statearr_15533_15559[1] = 8);
} else
{var statearr_15534_15560 = state_15525__$1;(statearr_15534_15560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 6))
{var inst_15485 = (state_15525[7]);var inst_15510 = inst_15485.length;var inst_15511 = (inst_15510 > 0);var state_15525__$1 = state_15525;if(cljs.core.truth_(inst_15511))
{var statearr_15536_15561 = state_15525__$1;(statearr_15536_15561[1] = 12);
} else
{var statearr_15537_15562 = state_15525__$1;(statearr_15537_15562[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 7))
{var inst_15521 = (state_15525[2]);var state_15525__$1 = state_15525;var statearr_15538_15563 = state_15525__$1;(statearr_15538_15563[2] = inst_15521);
(statearr_15538_15563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 8))
{var inst_15493 = (state_15525[10]);var inst_15489 = (state_15525[9]);var inst_15485 = (state_15525[7]);var inst_15498 = inst_15485.push(inst_15489);var tmp15535 = inst_15485;var inst_15485__$1 = tmp15535;var inst_15486 = inst_15493;var state_15525__$1 = (function (){var statearr_15539 = state_15525;(statearr_15539[11] = inst_15498);
(statearr_15539[7] = inst_15485__$1);
(statearr_15539[8] = inst_15486);
return statearr_15539;
})();var statearr_15540_15564 = state_15525__$1;(statearr_15540_15564[2] = null);
(statearr_15540_15564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 9))
{var inst_15485 = (state_15525[7]);var inst_15501 = cljs.core.vec.call(null,inst_15485);var state_15525__$1 = state_15525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15525__$1,11,out,inst_15501);
} else
{if((state_val_15526 === 10))
{var inst_15508 = (state_15525[2]);var state_15525__$1 = state_15525;var statearr_15541_15565 = state_15525__$1;(statearr_15541_15565[2] = inst_15508);
(statearr_15541_15565[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 11))
{var inst_15493 = (state_15525[10]);var inst_15489 = (state_15525[9]);var inst_15503 = (state_15525[2]);var inst_15504 = [];var inst_15505 = inst_15504.push(inst_15489);var inst_15485 = inst_15504;var inst_15486 = inst_15493;var state_15525__$1 = (function (){var statearr_15542 = state_15525;(statearr_15542[12] = inst_15503);
(statearr_15542[7] = inst_15485);
(statearr_15542[8] = inst_15486);
(statearr_15542[13] = inst_15505);
return statearr_15542;
})();var statearr_15543_15566 = state_15525__$1;(statearr_15543_15566[2] = null);
(statearr_15543_15566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 12))
{var inst_15485 = (state_15525[7]);var inst_15513 = cljs.core.vec.call(null,inst_15485);var state_15525__$1 = state_15525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15525__$1,15,out,inst_15513);
} else
{if((state_val_15526 === 13))
{var state_15525__$1 = state_15525;var statearr_15544_15567 = state_15525__$1;(statearr_15544_15567[2] = null);
(statearr_15544_15567[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 14))
{var inst_15518 = (state_15525[2]);var inst_15519 = cljs.core.async.close_BANG_.call(null,out);var state_15525__$1 = (function (){var statearr_15545 = state_15525;(statearr_15545[14] = inst_15518);
return statearr_15545;
})();var statearr_15546_15568 = state_15525__$1;(statearr_15546_15568[2] = inst_15519);
(statearr_15546_15568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15526 === 15))
{var inst_15515 = (state_15525[2]);var state_15525__$1 = state_15525;var statearr_15547_15569 = state_15525__$1;(statearr_15547_15569[2] = inst_15515);
(statearr_15547_15569[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15551[0] = state_machine__5507__auto__);
(statearr_15551[1] = 1);
return statearr_15551;
});
var state_machine__5507__auto____1 = (function (state_15525){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15552){if((e15552 instanceof Object))
{var ex__5510__auto__ = e15552;var statearr_15553_15570 = state_15525;(statearr_15553_15570[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15571 = state_15525;
state_15525 = G__15571;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15525){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15554 = f__5522__auto__.call(null);(statearr_15554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15555);
return statearr_15554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
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