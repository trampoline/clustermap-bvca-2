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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12304 = (function (f,fn_handler,meta12305){
this.f = f;
this.fn_handler = fn_handler;
this.meta12305 = meta12305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12304.cljs$lang$type = true;
cljs.core.async.t12304.cljs$lang$ctorStr = "cljs.core.async/t12304";
cljs.core.async.t12304.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12304");
});
cljs.core.async.t12304.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12306){var self__ = this;
var _12306__$1 = this;return self__.meta12305;
});
cljs.core.async.t12304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12306,meta12305__$1){var self__ = this;
var _12306__$1 = this;return (new cljs.core.async.t12304(self__.f,self__.fn_handler,meta12305__$1));
});
cljs.core.async.__GT_t12304 = (function __GT_t12304(f__$1,fn_handler__$1,meta12305){return (new cljs.core.async.t12304(f__$1,fn_handler__$1,meta12305));
});
}
return (new cljs.core.async.t12304(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12308 = buff;if(G__12308)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12308.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12308.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12308);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12308);
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
{var val_12309 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12309);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12309);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12310 = n;var x_12311 = 0;while(true){
if((x_12311 < n__4248__auto___12310))
{(a[x_12311] = 0);
{
var G__12312 = (x_12311 + 1);
x_12311 = G__12312;
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
var G__12313 = (i + 1);
i = G__12313;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12317 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12317 = (function (flag,alt_flag,meta12318){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12318 = meta12318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12317.cljs$lang$type = true;
cljs.core.async.t12317.cljs$lang$ctorStr = "cljs.core.async/t12317";
cljs.core.async.t12317.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12317");
});
cljs.core.async.t12317.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12319){var self__ = this;
var _12319__$1 = this;return self__.meta12318;
});
cljs.core.async.t12317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12319,meta12318__$1){var self__ = this;
var _12319__$1 = this;return (new cljs.core.async.t12317(self__.flag,self__.alt_flag,meta12318__$1));
});
cljs.core.async.__GT_t12317 = (function __GT_t12317(flag__$1,alt_flag__$1,meta12318){return (new cljs.core.async.t12317(flag__$1,alt_flag__$1,meta12318));
});
}
return (new cljs.core.async.t12317(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12323 = (function (cb,flag,alt_handler,meta12324){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12324 = meta12324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12323.cljs$lang$type = true;
cljs.core.async.t12323.cljs$lang$ctorStr = "cljs.core.async/t12323";
cljs.core.async.t12323.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12323");
});
cljs.core.async.t12323.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12325){var self__ = this;
var _12325__$1 = this;return self__.meta12324;
});
cljs.core.async.t12323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12325,meta12324__$1){var self__ = this;
var _12325__$1 = this;return (new cljs.core.async.t12323(self__.cb,self__.flag,self__.alt_handler,meta12324__$1));
});
cljs.core.async.__GT_t12323 = (function __GT_t12323(cb__$1,flag__$1,alt_handler__$1,meta12324){return (new cljs.core.async.t12323(cb__$1,flag__$1,alt_handler__$1,meta12324));
});
}
return (new cljs.core.async.t12323(cb,flag,alt_handler,null));
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
return (function (p1__12326_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12326_SHARP_,port], null));
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
var G__12327 = (i + 1);
i = G__12327;
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
var alts_BANG___delegate = function (ports,p__12328){var map__12330 = p__12328;var map__12330__$1 = ((cljs.core.seq_QMARK_.call(null,map__12330))?cljs.core.apply.call(null,cljs.core.hash_map,map__12330):map__12330);var opts = map__12330__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12328 = null;if (arguments.length > 1) {
  p__12328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12328);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12331){
var ports = cljs.core.first(arglist__12331);
var p__12328 = cljs.core.rest(arglist__12331);
return alts_BANG___delegate(ports,p__12328);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12339 = (function (ch,f,map_LT_,meta12340){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12340 = meta12340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12339.cljs$lang$type = true;
cljs.core.async.t12339.cljs$lang$ctorStr = "cljs.core.async/t12339";
cljs.core.async.t12339.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12339");
});
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12342 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12342 = (function (fn1,_,meta12340,ch,f,map_LT_,meta12343){
this.fn1 = fn1;
this._ = _;
this.meta12340 = meta12340;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12343 = meta12343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12342.cljs$lang$type = true;
cljs.core.async.t12342.cljs$lang$ctorStr = "cljs.core.async/t12342";
cljs.core.async.t12342.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12342");
});
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12332_SHARP_){return f1.call(null,(((p1__12332_SHARP_ == null))?null:self__.f.call(null,p1__12332_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12344){var self__ = this;
var _12344__$1 = this;return self__.meta12343;
});
cljs.core.async.t12342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12344,meta12343__$1){var self__ = this;
var _12344__$1 = this;return (new cljs.core.async.t12342(self__.fn1,self__._,self__.meta12340,self__.ch,self__.f,self__.map_LT_,meta12343__$1));
});
cljs.core.async.__GT_t12342 = (function __GT_t12342(fn1__$1,___$2,meta12340__$1,ch__$2,f__$2,map_LT___$2,meta12343){return (new cljs.core.async.t12342(fn1__$1,___$2,meta12340__$1,ch__$2,f__$2,map_LT___$2,meta12343));
});
}
return (new cljs.core.async.t12342(fn1,___$1,self__.meta12340,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12341){var self__ = this;
var _12341__$1 = this;return self__.meta12340;
});
cljs.core.async.t12339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12341,meta12340__$1){var self__ = this;
var _12341__$1 = this;return (new cljs.core.async.t12339(self__.ch,self__.f,self__.map_LT_,meta12340__$1));
});
cljs.core.async.__GT_t12339 = (function __GT_t12339(ch__$1,f__$1,map_LT___$1,meta12340){return (new cljs.core.async.t12339(ch__$1,f__$1,map_LT___$1,meta12340));
});
}
return (new cljs.core.async.t12339(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12348 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12348 = (function (ch,f,map_GT_,meta12349){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12349 = meta12349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12348.cljs$lang$type = true;
cljs.core.async.t12348.cljs$lang$ctorStr = "cljs.core.async/t12348";
cljs.core.async.t12348.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12348");
});
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12350){var self__ = this;
var _12350__$1 = this;return self__.meta12349;
});
cljs.core.async.t12348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12350,meta12349__$1){var self__ = this;
var _12350__$1 = this;return (new cljs.core.async.t12348(self__.ch,self__.f,self__.map_GT_,meta12349__$1));
});
cljs.core.async.__GT_t12348 = (function __GT_t12348(ch__$1,f__$1,map_GT___$1,meta12349){return (new cljs.core.async.t12348(ch__$1,f__$1,map_GT___$1,meta12349));
});
}
return (new cljs.core.async.t12348(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12354 = (function (ch,p,filter_GT_,meta12355){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12355 = meta12355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12354.cljs$lang$type = true;
cljs.core.async.t12354.cljs$lang$ctorStr = "cljs.core.async/t12354";
cljs.core.async.t12354.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12354");
});
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12356){var self__ = this;
var _12356__$1 = this;return self__.meta12355;
});
cljs.core.async.t12354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12356,meta12355__$1){var self__ = this;
var _12356__$1 = this;return (new cljs.core.async.t12354(self__.ch,self__.p,self__.filter_GT_,meta12355__$1));
});
cljs.core.async.__GT_t12354 = (function __GT_t12354(ch__$1,p__$1,filter_GT___$1,meta12355){return (new cljs.core.async.t12354(ch__$1,p__$1,filter_GT___$1,meta12355));
});
}
return (new cljs.core.async.t12354(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12439 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12418){var state_val_12419 = (state_12418[1]);if((state_val_12419 === 1))
{var state_12418__$1 = state_12418;var statearr_12420_12440 = state_12418__$1;(statearr_12420_12440[2] = null);
(statearr_12420_12440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 2))
{var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12418__$1,4,ch);
} else
{if((state_val_12419 === 3))
{var inst_12416 = (state_12418[2]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12418__$1,inst_12416);
} else
{if((state_val_12419 === 4))
{var inst_12400 = (state_12418[7]);var inst_12400__$1 = (state_12418[2]);var inst_12401 = (inst_12400__$1 == null);var state_12418__$1 = (function (){var statearr_12421 = state_12418;(statearr_12421[7] = inst_12400__$1);
return statearr_12421;
})();if(cljs.core.truth_(inst_12401))
{var statearr_12422_12441 = state_12418__$1;(statearr_12422_12441[1] = 5);
} else
{var statearr_12423_12442 = state_12418__$1;(statearr_12423_12442[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 5))
{var inst_12403 = cljs.core.async.close_BANG_.call(null,out);var state_12418__$1 = state_12418;var statearr_12424_12443 = state_12418__$1;(statearr_12424_12443[2] = inst_12403);
(statearr_12424_12443[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 6))
{var inst_12400 = (state_12418[7]);var inst_12405 = p.call(null,inst_12400);var state_12418__$1 = state_12418;if(cljs.core.truth_(inst_12405))
{var statearr_12425_12444 = state_12418__$1;(statearr_12425_12444[1] = 8);
} else
{var statearr_12426_12445 = state_12418__$1;(statearr_12426_12445[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 7))
{var inst_12414 = (state_12418[2]);var state_12418__$1 = state_12418;var statearr_12427_12446 = state_12418__$1;(statearr_12427_12446[2] = inst_12414);
(statearr_12427_12446[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 8))
{var inst_12400 = (state_12418[7]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12418__$1,11,out,inst_12400);
} else
{if((state_val_12419 === 9))
{var state_12418__$1 = state_12418;var statearr_12428_12447 = state_12418__$1;(statearr_12428_12447[2] = null);
(statearr_12428_12447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 10))
{var inst_12411 = (state_12418[2]);var state_12418__$1 = (function (){var statearr_12429 = state_12418;(statearr_12429[8] = inst_12411);
return statearr_12429;
})();var statearr_12430_12448 = state_12418__$1;(statearr_12430_12448[2] = null);
(statearr_12430_12448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12419 === 11))
{var inst_12408 = (state_12418[2]);var state_12418__$1 = state_12418;var statearr_12431_12449 = state_12418__$1;(statearr_12431_12449[2] = inst_12408);
(statearr_12431_12449[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12435 = [null,null,null,null,null,null,null,null,null];(statearr_12435[0] = state_machine__5507__auto__);
(statearr_12435[1] = 1);
return statearr_12435;
});
var state_machine__5507__auto____1 = (function (state_12418){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12436){if((e12436 instanceof Object))
{var ex__5510__auto__ = e12436;var statearr_12437_12450 = state_12418;(statearr_12437_12450[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12451 = state_12418;
state_12418 = G__12451;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12418){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12438 = f__5522__auto__.call(null);(statearr_12438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12439);
return statearr_12438;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12603){var state_val_12604 = (state_12603[1]);if((state_val_12604 === 1))
{var state_12603__$1 = state_12603;var statearr_12605_12642 = state_12603__$1;(statearr_12605_12642[2] = null);
(statearr_12605_12642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 2))
{var state_12603__$1 = state_12603;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12603__$1,4,in$);
} else
{if((state_val_12604 === 3))
{var inst_12601 = (state_12603[2]);var state_12603__$1 = state_12603;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12603__$1,inst_12601);
} else
{if((state_val_12604 === 4))
{var inst_12549 = (state_12603[7]);var inst_12549__$1 = (state_12603[2]);var inst_12550 = (inst_12549__$1 == null);var state_12603__$1 = (function (){var statearr_12606 = state_12603;(statearr_12606[7] = inst_12549__$1);
return statearr_12606;
})();if(cljs.core.truth_(inst_12550))
{var statearr_12607_12643 = state_12603__$1;(statearr_12607_12643[1] = 5);
} else
{var statearr_12608_12644 = state_12603__$1;(statearr_12608_12644[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 5))
{var inst_12552 = cljs.core.async.close_BANG_.call(null,out);var state_12603__$1 = state_12603;var statearr_12609_12645 = state_12603__$1;(statearr_12609_12645[2] = inst_12552);
(statearr_12609_12645[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 6))
{var inst_12549 = (state_12603[7]);var inst_12554 = f.call(null,inst_12549);var inst_12559 = cljs.core.seq.call(null,inst_12554);var inst_12560 = inst_12559;var inst_12561 = null;var inst_12562 = 0;var inst_12563 = 0;var state_12603__$1 = (function (){var statearr_12610 = state_12603;(statearr_12610[8] = inst_12561);
(statearr_12610[9] = inst_12562);
(statearr_12610[10] = inst_12560);
(statearr_12610[11] = inst_12563);
return statearr_12610;
})();var statearr_12611_12646 = state_12603__$1;(statearr_12611_12646[2] = null);
(statearr_12611_12646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 7))
{var inst_12599 = (state_12603[2]);var state_12603__$1 = state_12603;var statearr_12612_12647 = state_12603__$1;(statearr_12612_12647[2] = inst_12599);
(statearr_12612_12647[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 8))
{var inst_12562 = (state_12603[9]);var inst_12563 = (state_12603[11]);var inst_12565 = (inst_12563 < inst_12562);var inst_12566 = inst_12565;var state_12603__$1 = state_12603;if(cljs.core.truth_(inst_12566))
{var statearr_12613_12648 = state_12603__$1;(statearr_12613_12648[1] = 10);
} else
{var statearr_12614_12649 = state_12603__$1;(statearr_12614_12649[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 9))
{var inst_12596 = (state_12603[2]);var state_12603__$1 = (function (){var statearr_12615 = state_12603;(statearr_12615[12] = inst_12596);
return statearr_12615;
})();var statearr_12616_12650 = state_12603__$1;(statearr_12616_12650[2] = null);
(statearr_12616_12650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 10))
{var inst_12561 = (state_12603[8]);var inst_12563 = (state_12603[11]);var inst_12568 = cljs.core._nth.call(null,inst_12561,inst_12563);var state_12603__$1 = state_12603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12603__$1,13,out,inst_12568);
} else
{if((state_val_12604 === 11))
{var inst_12560 = (state_12603[10]);var inst_12574 = (state_12603[13]);var inst_12574__$1 = cljs.core.seq.call(null,inst_12560);var state_12603__$1 = (function (){var statearr_12620 = state_12603;(statearr_12620[13] = inst_12574__$1);
return statearr_12620;
})();if(inst_12574__$1)
{var statearr_12621_12651 = state_12603__$1;(statearr_12621_12651[1] = 14);
} else
{var statearr_12622_12652 = state_12603__$1;(statearr_12622_12652[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 12))
{var inst_12594 = (state_12603[2]);var state_12603__$1 = state_12603;var statearr_12623_12653 = state_12603__$1;(statearr_12623_12653[2] = inst_12594);
(statearr_12623_12653[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 13))
{var inst_12561 = (state_12603[8]);var inst_12562 = (state_12603[9]);var inst_12560 = (state_12603[10]);var inst_12563 = (state_12603[11]);var inst_12570 = (state_12603[2]);var inst_12571 = (inst_12563 + 1);var tmp12617 = inst_12561;var tmp12618 = inst_12562;var tmp12619 = inst_12560;var inst_12560__$1 = tmp12619;var inst_12561__$1 = tmp12617;var inst_12562__$1 = tmp12618;var inst_12563__$1 = inst_12571;var state_12603__$1 = (function (){var statearr_12624 = state_12603;(statearr_12624[8] = inst_12561__$1);
(statearr_12624[9] = inst_12562__$1);
(statearr_12624[10] = inst_12560__$1);
(statearr_12624[14] = inst_12570);
(statearr_12624[11] = inst_12563__$1);
return statearr_12624;
})();var statearr_12625_12654 = state_12603__$1;(statearr_12625_12654[2] = null);
(statearr_12625_12654[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 14))
{var inst_12574 = (state_12603[13]);var inst_12576 = cljs.core.chunked_seq_QMARK_.call(null,inst_12574);var state_12603__$1 = state_12603;if(inst_12576)
{var statearr_12626_12655 = state_12603__$1;(statearr_12626_12655[1] = 17);
} else
{var statearr_12627_12656 = state_12603__$1;(statearr_12627_12656[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 15))
{var state_12603__$1 = state_12603;var statearr_12628_12657 = state_12603__$1;(statearr_12628_12657[2] = null);
(statearr_12628_12657[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 16))
{var inst_12592 = (state_12603[2]);var state_12603__$1 = state_12603;var statearr_12629_12658 = state_12603__$1;(statearr_12629_12658[2] = inst_12592);
(statearr_12629_12658[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 17))
{var inst_12574 = (state_12603[13]);var inst_12578 = cljs.core.chunk_first.call(null,inst_12574);var inst_12579 = cljs.core.chunk_rest.call(null,inst_12574);var inst_12580 = cljs.core.count.call(null,inst_12578);var inst_12560 = inst_12579;var inst_12561 = inst_12578;var inst_12562 = inst_12580;var inst_12563 = 0;var state_12603__$1 = (function (){var statearr_12630 = state_12603;(statearr_12630[8] = inst_12561);
(statearr_12630[9] = inst_12562);
(statearr_12630[10] = inst_12560);
(statearr_12630[11] = inst_12563);
return statearr_12630;
})();var statearr_12631_12659 = state_12603__$1;(statearr_12631_12659[2] = null);
(statearr_12631_12659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 18))
{var inst_12574 = (state_12603[13]);var inst_12583 = cljs.core.first.call(null,inst_12574);var state_12603__$1 = state_12603;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12603__$1,20,out,inst_12583);
} else
{if((state_val_12604 === 19))
{var inst_12589 = (state_12603[2]);var state_12603__$1 = state_12603;var statearr_12632_12660 = state_12603__$1;(statearr_12632_12660[2] = inst_12589);
(statearr_12632_12660[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12604 === 20))
{var inst_12574 = (state_12603[13]);var inst_12585 = (state_12603[2]);var inst_12586 = cljs.core.next.call(null,inst_12574);var inst_12560 = inst_12586;var inst_12561 = null;var inst_12562 = 0;var inst_12563 = 0;var state_12603__$1 = (function (){var statearr_12633 = state_12603;(statearr_12633[15] = inst_12585);
(statearr_12633[8] = inst_12561);
(statearr_12633[9] = inst_12562);
(statearr_12633[10] = inst_12560);
(statearr_12633[11] = inst_12563);
return statearr_12633;
})();var statearr_12634_12661 = state_12603__$1;(statearr_12634_12661[2] = null);
(statearr_12634_12661[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12638[0] = state_machine__5507__auto__);
(statearr_12638[1] = 1);
return statearr_12638;
});
var state_machine__5507__auto____1 = (function (state_12603){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12603);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12639){if((e12639 instanceof Object))
{var ex__5510__auto__ = e12639;var statearr_12640_12662 = state_12603;(statearr_12640_12662[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12603);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12639;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12663 = state_12603;
state_12603 = G__12663;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12603){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12641 = f__5522__auto__.call(null);(statearr_12641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12641;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12723){var state_val_12724 = (state_12723[1]);if((state_val_12724 === 1))
{var state_12723__$1 = state_12723;var statearr_12725_12745 = state_12723__$1;(statearr_12725_12745[2] = null);
(statearr_12725_12745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12724 === 2))
{var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12723__$1,4,from);
} else
{if((state_val_12724 === 3))
{var inst_12721 = (state_12723[2]);var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12723__$1,inst_12721);
} else
{if((state_val_12724 === 4))
{var inst_12706 = (state_12723[7]);var inst_12706__$1 = (state_12723[2]);var inst_12707 = (inst_12706__$1 == null);var state_12723__$1 = (function (){var statearr_12726 = state_12723;(statearr_12726[7] = inst_12706__$1);
return statearr_12726;
})();if(cljs.core.truth_(inst_12707))
{var statearr_12727_12746 = state_12723__$1;(statearr_12727_12746[1] = 5);
} else
{var statearr_12728_12747 = state_12723__$1;(statearr_12728_12747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12724 === 5))
{var state_12723__$1 = state_12723;if(cljs.core.truth_(close_QMARK_))
{var statearr_12729_12748 = state_12723__$1;(statearr_12729_12748[1] = 8);
} else
{var statearr_12730_12749 = state_12723__$1;(statearr_12730_12749[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12724 === 6))
{var inst_12706 = (state_12723[7]);var state_12723__$1 = state_12723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12723__$1,11,to,inst_12706);
} else
{if((state_val_12724 === 7))
{var inst_12719 = (state_12723[2]);var state_12723__$1 = state_12723;var statearr_12731_12750 = state_12723__$1;(statearr_12731_12750[2] = inst_12719);
(statearr_12731_12750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12724 === 8))
{var inst_12710 = cljs.core.async.close_BANG_.call(null,to);var state_12723__$1 = state_12723;var statearr_12732_12751 = state_12723__$1;(statearr_12732_12751[2] = inst_12710);
(statearr_12732_12751[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12724 === 9))
{var state_12723__$1 = state_12723;var statearr_12733_12752 = state_12723__$1;(statearr_12733_12752[2] = null);
(statearr_12733_12752[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12724 === 10))
{var inst_12713 = (state_12723[2]);var state_12723__$1 = state_12723;var statearr_12734_12753 = state_12723__$1;(statearr_12734_12753[2] = inst_12713);
(statearr_12734_12753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12724 === 11))
{var inst_12716 = (state_12723[2]);var state_12723__$1 = (function (){var statearr_12735 = state_12723;(statearr_12735[8] = inst_12716);
return statearr_12735;
})();var statearr_12736_12754 = state_12723__$1;(statearr_12736_12754[2] = null);
(statearr_12736_12754[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12740 = [null,null,null,null,null,null,null,null,null];(statearr_12740[0] = state_machine__5507__auto__);
(statearr_12740[1] = 1);
return statearr_12740;
});
var state_machine__5507__auto____1 = (function (state_12723){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12723);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12741){if((e12741 instanceof Object))
{var ex__5510__auto__ = e12741;var statearr_12742_12755 = state_12723;(statearr_12742_12755[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12756 = state_12723;
state_12723 = G__12756;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12723){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12743 = f__5522__auto__.call(null);(statearr_12743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12744);
return statearr_12743;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12843 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12821){var state_val_12822 = (state_12821[1]);if((state_val_12822 === 1))
{var state_12821__$1 = state_12821;var statearr_12823_12844 = state_12821__$1;(statearr_12823_12844[2] = null);
(statearr_12823_12844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 2))
{var state_12821__$1 = state_12821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12821__$1,4,ch);
} else
{if((state_val_12822 === 3))
{var inst_12819 = (state_12821[2]);var state_12821__$1 = state_12821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12821__$1,inst_12819);
} else
{if((state_val_12822 === 4))
{var inst_12802 = (state_12821[7]);var inst_12802__$1 = (state_12821[2]);var inst_12803 = (inst_12802__$1 == null);var state_12821__$1 = (function (){var statearr_12824 = state_12821;(statearr_12824[7] = inst_12802__$1);
return statearr_12824;
})();if(cljs.core.truth_(inst_12803))
{var statearr_12825_12845 = state_12821__$1;(statearr_12825_12845[1] = 5);
} else
{var statearr_12826_12846 = state_12821__$1;(statearr_12826_12846[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 5))
{var inst_12805 = cljs.core.async.close_BANG_.call(null,tc);var inst_12806 = cljs.core.async.close_BANG_.call(null,fc);var state_12821__$1 = (function (){var statearr_12827 = state_12821;(statearr_12827[8] = inst_12805);
return statearr_12827;
})();var statearr_12828_12847 = state_12821__$1;(statearr_12828_12847[2] = inst_12806);
(statearr_12828_12847[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 6))
{var inst_12802 = (state_12821[7]);var inst_12808 = p.call(null,inst_12802);var state_12821__$1 = state_12821;if(cljs.core.truth_(inst_12808))
{var statearr_12829_12848 = state_12821__$1;(statearr_12829_12848[1] = 9);
} else
{var statearr_12830_12849 = state_12821__$1;(statearr_12830_12849[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 7))
{var inst_12817 = (state_12821[2]);var state_12821__$1 = state_12821;var statearr_12831_12850 = state_12821__$1;(statearr_12831_12850[2] = inst_12817);
(statearr_12831_12850[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 8))
{var inst_12814 = (state_12821[2]);var state_12821__$1 = (function (){var statearr_12832 = state_12821;(statearr_12832[9] = inst_12814);
return statearr_12832;
})();var statearr_12833_12851 = state_12821__$1;(statearr_12833_12851[2] = null);
(statearr_12833_12851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 9))
{var state_12821__$1 = state_12821;var statearr_12834_12852 = state_12821__$1;(statearr_12834_12852[2] = tc);
(statearr_12834_12852[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 10))
{var state_12821__$1 = state_12821;var statearr_12835_12853 = state_12821__$1;(statearr_12835_12853[2] = fc);
(statearr_12835_12853[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12822 === 11))
{var inst_12802 = (state_12821[7]);var inst_12812 = (state_12821[2]);var state_12821__$1 = state_12821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12821__$1,8,inst_12812,inst_12802);
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
var state_machine__5507__auto____0 = (function (){var statearr_12839 = [null,null,null,null,null,null,null,null,null,null];(statearr_12839[0] = state_machine__5507__auto__);
(statearr_12839[1] = 1);
return statearr_12839;
});
var state_machine__5507__auto____1 = (function (state_12821){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12821);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12840){if((e12840 instanceof Object))
{var ex__5510__auto__ = e12840;var statearr_12841_12854 = state_12821;(statearr_12841_12854[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12840;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12855 = state_12821;
state_12821 = G__12855;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12821){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12842 = f__5522__auto__.call(null);(statearr_12842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12843);
return statearr_12842;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12902){var state_val_12903 = (state_12902[1]);if((state_val_12903 === 7))
{var inst_12898 = (state_12902[2]);var state_12902__$1 = state_12902;var statearr_12904_12920 = state_12902__$1;(statearr_12904_12920[2] = inst_12898);
(statearr_12904_12920[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12903 === 6))
{var inst_12888 = (state_12902[7]);var inst_12891 = (state_12902[8]);var inst_12895 = f.call(null,inst_12888,inst_12891);var inst_12888__$1 = inst_12895;var state_12902__$1 = (function (){var statearr_12905 = state_12902;(statearr_12905[7] = inst_12888__$1);
return statearr_12905;
})();var statearr_12906_12921 = state_12902__$1;(statearr_12906_12921[2] = null);
(statearr_12906_12921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12903 === 5))
{var inst_12888 = (state_12902[7]);var state_12902__$1 = state_12902;var statearr_12907_12922 = state_12902__$1;(statearr_12907_12922[2] = inst_12888);
(statearr_12907_12922[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12903 === 4))
{var inst_12891 = (state_12902[8]);var inst_12891__$1 = (state_12902[2]);var inst_12892 = (inst_12891__$1 == null);var state_12902__$1 = (function (){var statearr_12908 = state_12902;(statearr_12908[8] = inst_12891__$1);
return statearr_12908;
})();if(cljs.core.truth_(inst_12892))
{var statearr_12909_12923 = state_12902__$1;(statearr_12909_12923[1] = 5);
} else
{var statearr_12910_12924 = state_12902__$1;(statearr_12910_12924[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12903 === 3))
{var inst_12900 = (state_12902[2]);var state_12902__$1 = state_12902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12902__$1,inst_12900);
} else
{if((state_val_12903 === 2))
{var state_12902__$1 = state_12902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12902__$1,4,ch);
} else
{if((state_val_12903 === 1))
{var inst_12888 = init;var state_12902__$1 = (function (){var statearr_12911 = state_12902;(statearr_12911[7] = inst_12888);
return statearr_12911;
})();var statearr_12912_12925 = state_12902__$1;(statearr_12912_12925[2] = null);
(statearr_12912_12925[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12916 = [null,null,null,null,null,null,null,null,null];(statearr_12916[0] = state_machine__5507__auto__);
(statearr_12916[1] = 1);
return statearr_12916;
});
var state_machine__5507__auto____1 = (function (state_12902){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12902);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12917){if((e12917 instanceof Object))
{var ex__5510__auto__ = e12917;var statearr_12918_12926 = state_12902;(statearr_12918_12926[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12927 = state_12902;
state_12902 = G__12927;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12902){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12919 = f__5522__auto__.call(null);(statearr_12919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12919;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12989){var state_val_12990 = (state_12989[1]);if((state_val_12990 === 1))
{var inst_12969 = cljs.core.seq.call(null,coll);var inst_12970 = inst_12969;var state_12989__$1 = (function (){var statearr_12991 = state_12989;(statearr_12991[7] = inst_12970);
return statearr_12991;
})();var statearr_12992_13010 = state_12989__$1;(statearr_12992_13010[2] = null);
(statearr_12992_13010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 2))
{var inst_12970 = (state_12989[7]);var state_12989__$1 = state_12989;if(cljs.core.truth_(inst_12970))
{var statearr_12993_13011 = state_12989__$1;(statearr_12993_13011[1] = 4);
} else
{var statearr_12994_13012 = state_12989__$1;(statearr_12994_13012[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 3))
{var inst_12987 = (state_12989[2]);var state_12989__$1 = state_12989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12989__$1,inst_12987);
} else
{if((state_val_12990 === 4))
{var inst_12970 = (state_12989[7]);var inst_12973 = cljs.core.first.call(null,inst_12970);var state_12989__$1 = state_12989;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12989__$1,7,ch,inst_12973);
} else
{if((state_val_12990 === 5))
{var state_12989__$1 = state_12989;if(cljs.core.truth_(close_QMARK_))
{var statearr_12995_13013 = state_12989__$1;(statearr_12995_13013[1] = 8);
} else
{var statearr_12996_13014 = state_12989__$1;(statearr_12996_13014[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 6))
{var inst_12985 = (state_12989[2]);var state_12989__$1 = state_12989;var statearr_12997_13015 = state_12989__$1;(statearr_12997_13015[2] = inst_12985);
(statearr_12997_13015[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 7))
{var inst_12970 = (state_12989[7]);var inst_12975 = (state_12989[2]);var inst_12976 = cljs.core.next.call(null,inst_12970);var inst_12970__$1 = inst_12976;var state_12989__$1 = (function (){var statearr_12998 = state_12989;(statearr_12998[8] = inst_12975);
(statearr_12998[7] = inst_12970__$1);
return statearr_12998;
})();var statearr_12999_13016 = state_12989__$1;(statearr_12999_13016[2] = null);
(statearr_12999_13016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 8))
{var inst_12980 = cljs.core.async.close_BANG_.call(null,ch);var state_12989__$1 = state_12989;var statearr_13000_13017 = state_12989__$1;(statearr_13000_13017[2] = inst_12980);
(statearr_13000_13017[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 9))
{var state_12989__$1 = state_12989;var statearr_13001_13018 = state_12989__$1;(statearr_13001_13018[2] = null);
(statearr_13001_13018[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12990 === 10))
{var inst_12983 = (state_12989[2]);var state_12989__$1 = state_12989;var statearr_13002_13019 = state_12989__$1;(statearr_13002_13019[2] = inst_12983);
(statearr_13002_13019[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13006 = [null,null,null,null,null,null,null,null,null];(statearr_13006[0] = state_machine__5507__auto__);
(statearr_13006[1] = 1);
return statearr_13006;
});
var state_machine__5507__auto____1 = (function (state_12989){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12989);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13007){if((e13007 instanceof Object))
{var ex__5510__auto__ = e13007;var statearr_13008_13020 = state_12989;(statearr_13008_13020[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12989);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13021 = state_12989;
state_12989 = G__13021;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12989){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13009 = f__5522__auto__.call(null);(statearr_13009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13009;
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
cljs.core.async.Mux = (function (){var obj13023 = {};return obj13023;
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
cljs.core.async.Mult = (function (){var obj13025 = {};return obj13025;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13249 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13249 = (function (cs,ch,mult,meta13250){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13250 = meta13250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13249.cljs$lang$type = true;
cljs.core.async.t13249.cljs$lang$ctorStr = "cljs.core.async/t13249";
cljs.core.async.t13249.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13249");
});})(cs))
;
cljs.core.async.t13249.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13249.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13249.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13249.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13249.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13251){var self__ = this;
var _13251__$1 = this;return self__.meta13250;
});})(cs))
;
cljs.core.async.t13249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13251,meta13250__$1){var self__ = this;
var _13251__$1 = this;return (new cljs.core.async.t13249(self__.cs,self__.ch,self__.mult,meta13250__$1));
});})(cs))
;
cljs.core.async.__GT_t13249 = ((function (cs){
return (function __GT_t13249(cs__$1,ch__$1,mult__$1,meta13250){return (new cljs.core.async.t13249(cs__$1,ch__$1,mult__$1,meta13250));
});})(cs))
;
}
return (new cljs.core.async.t13249(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13386){var state_val_13387 = (state_13386[1]);if((state_val_13387 === 32))
{var inst_13254 = (state_13386[7]);var inst_13330 = (state_13386[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13386,31,Object,null,30);var inst_13337 = cljs.core.async.put_BANG_.call(null,inst_13330,inst_13254,done);var state_13386__$1 = state_13386;var statearr_13388_13473 = state_13386__$1;(statearr_13388_13473[2] = inst_13337);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 1))
{var state_13386__$1 = state_13386;var statearr_13389_13474 = state_13386__$1;(statearr_13389_13474[2] = null);
(statearr_13389_13474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 33))
{var inst_13343 = (state_13386[9]);var inst_13345 = cljs.core.chunked_seq_QMARK_.call(null,inst_13343);var state_13386__$1 = state_13386;if(inst_13345)
{var statearr_13390_13475 = state_13386__$1;(statearr_13390_13475[1] = 36);
} else
{var statearr_13391_13476 = state_13386__$1;(statearr_13391_13476[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 2))
{var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13386__$1,4,ch);
} else
{if((state_val_13387 === 34))
{var state_13386__$1 = state_13386;var statearr_13392_13477 = state_13386__$1;(statearr_13392_13477[2] = null);
(statearr_13392_13477[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 3))
{var inst_13384 = (state_13386[2]);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13386__$1,inst_13384);
} else
{if((state_val_13387 === 35))
{var inst_13368 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13393_13478 = state_13386__$1;(statearr_13393_13478[2] = inst_13368);
(statearr_13393_13478[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 4))
{var inst_13254 = (state_13386[7]);var inst_13254__$1 = (state_13386[2]);var inst_13255 = (inst_13254__$1 == null);var state_13386__$1 = (function (){var statearr_13394 = state_13386;(statearr_13394[7] = inst_13254__$1);
return statearr_13394;
})();if(cljs.core.truth_(inst_13255))
{var statearr_13395_13479 = state_13386__$1;(statearr_13395_13479[1] = 5);
} else
{var statearr_13396_13480 = state_13386__$1;(statearr_13396_13480[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 36))
{var inst_13343 = (state_13386[9]);var inst_13347 = cljs.core.chunk_first.call(null,inst_13343);var inst_13348 = cljs.core.chunk_rest.call(null,inst_13343);var inst_13349 = cljs.core.count.call(null,inst_13347);var inst_13322 = inst_13348;var inst_13323 = inst_13347;var inst_13324 = inst_13349;var inst_13325 = 0;var state_13386__$1 = (function (){var statearr_13397 = state_13386;(statearr_13397[10] = inst_13325);
(statearr_13397[11] = inst_13324);
(statearr_13397[12] = inst_13323);
(statearr_13397[13] = inst_13322);
return statearr_13397;
})();var statearr_13398_13481 = state_13386__$1;(statearr_13398_13481[2] = null);
(statearr_13398_13481[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 5))
{var inst_13261 = cljs.core.deref.call(null,cs);var inst_13262 = cljs.core.seq.call(null,inst_13261);var inst_13263 = inst_13262;var inst_13264 = null;var inst_13265 = 0;var inst_13266 = 0;var state_13386__$1 = (function (){var statearr_13399 = state_13386;(statearr_13399[14] = inst_13265);
(statearr_13399[15] = inst_13266);
(statearr_13399[16] = inst_13263);
(statearr_13399[17] = inst_13264);
return statearr_13399;
})();var statearr_13400_13482 = state_13386__$1;(statearr_13400_13482[2] = null);
(statearr_13400_13482[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 37))
{var inst_13343 = (state_13386[9]);var inst_13352 = cljs.core.first.call(null,inst_13343);var state_13386__$1 = (function (){var statearr_13401 = state_13386;(statearr_13401[18] = inst_13352);
return statearr_13401;
})();var statearr_13402_13483 = state_13386__$1;(statearr_13402_13483[2] = null);
(statearr_13402_13483[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 6))
{var inst_13314 = (state_13386[19]);var inst_13313 = cljs.core.deref.call(null,cs);var inst_13314__$1 = cljs.core.keys.call(null,inst_13313);var inst_13315 = cljs.core.count.call(null,inst_13314__$1);var inst_13316 = cljs.core.reset_BANG_.call(null,dctr,inst_13315);var inst_13321 = cljs.core.seq.call(null,inst_13314__$1);var inst_13322 = inst_13321;var inst_13323 = null;var inst_13324 = 0;var inst_13325 = 0;var state_13386__$1 = (function (){var statearr_13403 = state_13386;(statearr_13403[10] = inst_13325);
(statearr_13403[11] = inst_13324);
(statearr_13403[20] = inst_13316);
(statearr_13403[12] = inst_13323);
(statearr_13403[13] = inst_13322);
(statearr_13403[19] = inst_13314__$1);
return statearr_13403;
})();var statearr_13404_13484 = state_13386__$1;(statearr_13404_13484[2] = null);
(statearr_13404_13484[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 38))
{var inst_13365 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13405_13485 = state_13386__$1;(statearr_13405_13485[2] = inst_13365);
(statearr_13405_13485[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 7))
{var inst_13382 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13406_13486 = state_13386__$1;(statearr_13406_13486[2] = inst_13382);
(statearr_13406_13486[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 39))
{var inst_13343 = (state_13386[9]);var inst_13361 = (state_13386[2]);var inst_13362 = cljs.core.next.call(null,inst_13343);var inst_13322 = inst_13362;var inst_13323 = null;var inst_13324 = 0;var inst_13325 = 0;var state_13386__$1 = (function (){var statearr_13407 = state_13386;(statearr_13407[10] = inst_13325);
(statearr_13407[11] = inst_13324);
(statearr_13407[12] = inst_13323);
(statearr_13407[13] = inst_13322);
(statearr_13407[21] = inst_13361);
return statearr_13407;
})();var statearr_13408_13487 = state_13386__$1;(statearr_13408_13487[2] = null);
(statearr_13408_13487[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 8))
{var inst_13265 = (state_13386[14]);var inst_13266 = (state_13386[15]);var inst_13268 = (inst_13266 < inst_13265);var inst_13269 = inst_13268;var state_13386__$1 = state_13386;if(cljs.core.truth_(inst_13269))
{var statearr_13409_13488 = state_13386__$1;(statearr_13409_13488[1] = 10);
} else
{var statearr_13410_13489 = state_13386__$1;(statearr_13410_13489[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 40))
{var inst_13352 = (state_13386[18]);var inst_13353 = (state_13386[2]);var inst_13354 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13355 = cljs.core.async.untap_STAR_.call(null,m,inst_13352);var state_13386__$1 = (function (){var statearr_13411 = state_13386;(statearr_13411[22] = inst_13353);
(statearr_13411[23] = inst_13354);
return statearr_13411;
})();var statearr_13412_13490 = state_13386__$1;(statearr_13412_13490[2] = inst_13355);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 9))
{var inst_13311 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13413_13491 = state_13386__$1;(statearr_13413_13491[2] = inst_13311);
(statearr_13413_13491[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 41))
{var inst_13352 = (state_13386[18]);var inst_13254 = (state_13386[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13386,40,Object,null,39);var inst_13359 = cljs.core.async.put_BANG_.call(null,inst_13352,inst_13254,done);var state_13386__$1 = state_13386;var statearr_13414_13492 = state_13386__$1;(statearr_13414_13492[2] = inst_13359);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 10))
{var inst_13266 = (state_13386[15]);var inst_13264 = (state_13386[17]);var inst_13272 = cljs.core._nth.call(null,inst_13264,inst_13266);var inst_13273 = cljs.core.nth.call(null,inst_13272,0,null);var inst_13274 = cljs.core.nth.call(null,inst_13272,1,null);var state_13386__$1 = (function (){var statearr_13415 = state_13386;(statearr_13415[24] = inst_13273);
return statearr_13415;
})();if(cljs.core.truth_(inst_13274))
{var statearr_13416_13493 = state_13386__$1;(statearr_13416_13493[1] = 13);
} else
{var statearr_13417_13494 = state_13386__$1;(statearr_13417_13494[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 42))
{var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13386__$1,45,dchan);
} else
{if((state_val_13387 === 11))
{var inst_13283 = (state_13386[25]);var inst_13263 = (state_13386[16]);var inst_13283__$1 = cljs.core.seq.call(null,inst_13263);var state_13386__$1 = (function (){var statearr_13418 = state_13386;(statearr_13418[25] = inst_13283__$1);
return statearr_13418;
})();if(inst_13283__$1)
{var statearr_13419_13495 = state_13386__$1;(statearr_13419_13495[1] = 16);
} else
{var statearr_13420_13496 = state_13386__$1;(statearr_13420_13496[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 43))
{var state_13386__$1 = state_13386;var statearr_13421_13497 = state_13386__$1;(statearr_13421_13497[2] = null);
(statearr_13421_13497[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 12))
{var inst_13309 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13422_13498 = state_13386__$1;(statearr_13422_13498[2] = inst_13309);
(statearr_13422_13498[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 44))
{var inst_13379 = (state_13386[2]);var state_13386__$1 = (function (){var statearr_13423 = state_13386;(statearr_13423[26] = inst_13379);
return statearr_13423;
})();var statearr_13424_13499 = state_13386__$1;(statearr_13424_13499[2] = null);
(statearr_13424_13499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 13))
{var inst_13273 = (state_13386[24]);var inst_13276 = cljs.core.async.close_BANG_.call(null,inst_13273);var state_13386__$1 = state_13386;var statearr_13425_13500 = state_13386__$1;(statearr_13425_13500[2] = inst_13276);
(statearr_13425_13500[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 45))
{var inst_13376 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13429_13501 = state_13386__$1;(statearr_13429_13501[2] = inst_13376);
(statearr_13429_13501[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 14))
{var state_13386__$1 = state_13386;var statearr_13430_13502 = state_13386__$1;(statearr_13430_13502[2] = null);
(statearr_13430_13502[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 15))
{var inst_13265 = (state_13386[14]);var inst_13266 = (state_13386[15]);var inst_13263 = (state_13386[16]);var inst_13264 = (state_13386[17]);var inst_13279 = (state_13386[2]);var inst_13280 = (inst_13266 + 1);var tmp13426 = inst_13265;var tmp13427 = inst_13263;var tmp13428 = inst_13264;var inst_13263__$1 = tmp13427;var inst_13264__$1 = tmp13428;var inst_13265__$1 = tmp13426;var inst_13266__$1 = inst_13280;var state_13386__$1 = (function (){var statearr_13431 = state_13386;(statearr_13431[27] = inst_13279);
(statearr_13431[14] = inst_13265__$1);
(statearr_13431[15] = inst_13266__$1);
(statearr_13431[16] = inst_13263__$1);
(statearr_13431[17] = inst_13264__$1);
return statearr_13431;
})();var statearr_13432_13503 = state_13386__$1;(statearr_13432_13503[2] = null);
(statearr_13432_13503[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 16))
{var inst_13283 = (state_13386[25]);var inst_13285 = cljs.core.chunked_seq_QMARK_.call(null,inst_13283);var state_13386__$1 = state_13386;if(inst_13285)
{var statearr_13433_13504 = state_13386__$1;(statearr_13433_13504[1] = 19);
} else
{var statearr_13434_13505 = state_13386__$1;(statearr_13434_13505[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 17))
{var state_13386__$1 = state_13386;var statearr_13435_13506 = state_13386__$1;(statearr_13435_13506[2] = null);
(statearr_13435_13506[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 18))
{var inst_13307 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13436_13507 = state_13386__$1;(statearr_13436_13507[2] = inst_13307);
(statearr_13436_13507[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 19))
{var inst_13283 = (state_13386[25]);var inst_13287 = cljs.core.chunk_first.call(null,inst_13283);var inst_13288 = cljs.core.chunk_rest.call(null,inst_13283);var inst_13289 = cljs.core.count.call(null,inst_13287);var inst_13263 = inst_13288;var inst_13264 = inst_13287;var inst_13265 = inst_13289;var inst_13266 = 0;var state_13386__$1 = (function (){var statearr_13437 = state_13386;(statearr_13437[14] = inst_13265);
(statearr_13437[15] = inst_13266);
(statearr_13437[16] = inst_13263);
(statearr_13437[17] = inst_13264);
return statearr_13437;
})();var statearr_13438_13508 = state_13386__$1;(statearr_13438_13508[2] = null);
(statearr_13438_13508[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 20))
{var inst_13283 = (state_13386[25]);var inst_13293 = cljs.core.first.call(null,inst_13283);var inst_13294 = cljs.core.nth.call(null,inst_13293,0,null);var inst_13295 = cljs.core.nth.call(null,inst_13293,1,null);var state_13386__$1 = (function (){var statearr_13439 = state_13386;(statearr_13439[28] = inst_13294);
return statearr_13439;
})();if(cljs.core.truth_(inst_13295))
{var statearr_13440_13509 = state_13386__$1;(statearr_13440_13509[1] = 22);
} else
{var statearr_13441_13510 = state_13386__$1;(statearr_13441_13510[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 21))
{var inst_13304 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13442_13511 = state_13386__$1;(statearr_13442_13511[2] = inst_13304);
(statearr_13442_13511[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 22))
{var inst_13294 = (state_13386[28]);var inst_13297 = cljs.core.async.close_BANG_.call(null,inst_13294);var state_13386__$1 = state_13386;var statearr_13443_13512 = state_13386__$1;(statearr_13443_13512[2] = inst_13297);
(statearr_13443_13512[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 23))
{var state_13386__$1 = state_13386;var statearr_13444_13513 = state_13386__$1;(statearr_13444_13513[2] = null);
(statearr_13444_13513[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 24))
{var inst_13283 = (state_13386[25]);var inst_13300 = (state_13386[2]);var inst_13301 = cljs.core.next.call(null,inst_13283);var inst_13263 = inst_13301;var inst_13264 = null;var inst_13265 = 0;var inst_13266 = 0;var state_13386__$1 = (function (){var statearr_13445 = state_13386;(statearr_13445[29] = inst_13300);
(statearr_13445[14] = inst_13265);
(statearr_13445[15] = inst_13266);
(statearr_13445[16] = inst_13263);
(statearr_13445[17] = inst_13264);
return statearr_13445;
})();var statearr_13446_13514 = state_13386__$1;(statearr_13446_13514[2] = null);
(statearr_13446_13514[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 25))
{var inst_13325 = (state_13386[10]);var inst_13324 = (state_13386[11]);var inst_13327 = (inst_13325 < inst_13324);var inst_13328 = inst_13327;var state_13386__$1 = state_13386;if(cljs.core.truth_(inst_13328))
{var statearr_13447_13515 = state_13386__$1;(statearr_13447_13515[1] = 27);
} else
{var statearr_13448_13516 = state_13386__$1;(statearr_13448_13516[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 26))
{var inst_13314 = (state_13386[19]);var inst_13372 = (state_13386[2]);var inst_13373 = cljs.core.seq.call(null,inst_13314);var state_13386__$1 = (function (){var statearr_13449 = state_13386;(statearr_13449[30] = inst_13372);
return statearr_13449;
})();if(inst_13373)
{var statearr_13450_13517 = state_13386__$1;(statearr_13450_13517[1] = 42);
} else
{var statearr_13451_13518 = state_13386__$1;(statearr_13451_13518[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 27))
{var inst_13325 = (state_13386[10]);var inst_13323 = (state_13386[12]);var inst_13330 = cljs.core._nth.call(null,inst_13323,inst_13325);var state_13386__$1 = (function (){var statearr_13452 = state_13386;(statearr_13452[8] = inst_13330);
return statearr_13452;
})();var statearr_13453_13519 = state_13386__$1;(statearr_13453_13519[2] = null);
(statearr_13453_13519[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 28))
{var inst_13322 = (state_13386[13]);var inst_13343 = (state_13386[9]);var inst_13343__$1 = cljs.core.seq.call(null,inst_13322);var state_13386__$1 = (function (){var statearr_13457 = state_13386;(statearr_13457[9] = inst_13343__$1);
return statearr_13457;
})();if(inst_13343__$1)
{var statearr_13458_13520 = state_13386__$1;(statearr_13458_13520[1] = 33);
} else
{var statearr_13459_13521 = state_13386__$1;(statearr_13459_13521[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 29))
{var inst_13370 = (state_13386[2]);var state_13386__$1 = state_13386;var statearr_13460_13522 = state_13386__$1;(statearr_13460_13522[2] = inst_13370);
(statearr_13460_13522[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 30))
{var inst_13325 = (state_13386[10]);var inst_13324 = (state_13386[11]);var inst_13323 = (state_13386[12]);var inst_13322 = (state_13386[13]);var inst_13339 = (state_13386[2]);var inst_13340 = (inst_13325 + 1);var tmp13454 = inst_13324;var tmp13455 = inst_13323;var tmp13456 = inst_13322;var inst_13322__$1 = tmp13456;var inst_13323__$1 = tmp13455;var inst_13324__$1 = tmp13454;var inst_13325__$1 = inst_13340;var state_13386__$1 = (function (){var statearr_13461 = state_13386;(statearr_13461[10] = inst_13325__$1);
(statearr_13461[11] = inst_13324__$1);
(statearr_13461[12] = inst_13323__$1);
(statearr_13461[13] = inst_13322__$1);
(statearr_13461[31] = inst_13339);
return statearr_13461;
})();var statearr_13462_13523 = state_13386__$1;(statearr_13462_13523[2] = null);
(statearr_13462_13523[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13387 === 31))
{var inst_13330 = (state_13386[8]);var inst_13331 = (state_13386[2]);var inst_13332 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13333 = cljs.core.async.untap_STAR_.call(null,m,inst_13330);var state_13386__$1 = (function (){var statearr_13463 = state_13386;(statearr_13463[32] = inst_13331);
(statearr_13463[33] = inst_13332);
return statearr_13463;
})();var statearr_13464_13524 = state_13386__$1;(statearr_13464_13524[2] = inst_13333);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13468[0] = state_machine__5507__auto__);
(statearr_13468[1] = 1);
return statearr_13468;
});
var state_machine__5507__auto____1 = (function (state_13386){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13386);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13469){if((e13469 instanceof Object))
{var ex__5510__auto__ = e13469;var statearr_13470_13525 = state_13386;(statearr_13470_13525[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13526 = state_13386;
state_13386 = G__13526;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13386){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13471 = f__5522__auto__.call(null);(statearr_13471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13472);
return statearr_13471;
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
cljs.core.async.Mix = (function (){var obj13528 = {};return obj13528;
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
;var m = (function (){if(typeof cljs.core.async.t13638 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13638 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13639){
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
this.meta13639 = meta13639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13638.cljs$lang$type = true;
cljs.core.async.t13638.cljs$lang$ctorStr = "cljs.core.async/t13638";
cljs.core.async.t13638.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13638");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13638.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13640){var self__ = this;
var _13640__$1 = this;return self__.meta13639;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13640,meta13639__$1){var self__ = this;
var _13640__$1 = this;return (new cljs.core.async.t13638(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13639__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13638 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13638(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13639){return (new cljs.core.async.t13638(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13639));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13638(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13747 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13705){var state_val_13706 = (state_13705[1]);if((state_val_13706 === 1))
{var inst_13644 = (state_13705[7]);var inst_13644__$1 = calc_state.call(null);var inst_13645 = cljs.core.seq_QMARK_.call(null,inst_13644__$1);var state_13705__$1 = (function (){var statearr_13707 = state_13705;(statearr_13707[7] = inst_13644__$1);
return statearr_13707;
})();if(inst_13645)
{var statearr_13708_13748 = state_13705__$1;(statearr_13708_13748[1] = 2);
} else
{var statearr_13709_13749 = state_13705__$1;(statearr_13709_13749[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 2))
{var inst_13644 = (state_13705[7]);var inst_13647 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13644);var state_13705__$1 = state_13705;var statearr_13710_13750 = state_13705__$1;(statearr_13710_13750[2] = inst_13647);
(statearr_13710_13750[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 3))
{var inst_13644 = (state_13705[7]);var state_13705__$1 = state_13705;var statearr_13711_13751 = state_13705__$1;(statearr_13711_13751[2] = inst_13644);
(statearr_13711_13751[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 4))
{var inst_13644 = (state_13705[7]);var inst_13650 = (state_13705[2]);var inst_13651 = cljs.core.get.call(null,inst_13650,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13652 = cljs.core.get.call(null,inst_13650,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13653 = cljs.core.get.call(null,inst_13650,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13654 = inst_13644;var state_13705__$1 = (function (){var statearr_13712 = state_13705;(statearr_13712[8] = inst_13651);
(statearr_13712[9] = inst_13654);
(statearr_13712[10] = inst_13653);
(statearr_13712[11] = inst_13652);
return statearr_13712;
})();var statearr_13713_13752 = state_13705__$1;(statearr_13713_13752[2] = null);
(statearr_13713_13752[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 5))
{var inst_13654 = (state_13705[9]);var inst_13657 = cljs.core.seq_QMARK_.call(null,inst_13654);var state_13705__$1 = state_13705;if(inst_13657)
{var statearr_13714_13753 = state_13705__$1;(statearr_13714_13753[1] = 7);
} else
{var statearr_13715_13754 = state_13705__$1;(statearr_13715_13754[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 6))
{var inst_13703 = (state_13705[2]);var state_13705__$1 = state_13705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13705__$1,inst_13703);
} else
{if((state_val_13706 === 7))
{var inst_13654 = (state_13705[9]);var inst_13659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13654);var state_13705__$1 = state_13705;var statearr_13716_13755 = state_13705__$1;(statearr_13716_13755[2] = inst_13659);
(statearr_13716_13755[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 8))
{var inst_13654 = (state_13705[9]);var state_13705__$1 = state_13705;var statearr_13717_13756 = state_13705__$1;(statearr_13717_13756[2] = inst_13654);
(statearr_13717_13756[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 9))
{var inst_13662 = (state_13705[12]);var inst_13662__$1 = (state_13705[2]);var inst_13663 = cljs.core.get.call(null,inst_13662__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13664 = cljs.core.get.call(null,inst_13662__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13665 = cljs.core.get.call(null,inst_13662__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13705__$1 = (function (){var statearr_13718 = state_13705;(statearr_13718[13] = inst_13665);
(statearr_13718[14] = inst_13664);
(statearr_13718[12] = inst_13662__$1);
return statearr_13718;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13705__$1,10,inst_13663);
} else
{if((state_val_13706 === 10))
{var inst_13670 = (state_13705[15]);var inst_13669 = (state_13705[16]);var inst_13668 = (state_13705[2]);var inst_13669__$1 = cljs.core.nth.call(null,inst_13668,0,null);var inst_13670__$1 = cljs.core.nth.call(null,inst_13668,1,null);var inst_13671 = (inst_13669__$1 == null);var inst_13672 = cljs.core._EQ_.call(null,inst_13670__$1,change);var inst_13673 = (inst_13671) || (inst_13672);var state_13705__$1 = (function (){var statearr_13719 = state_13705;(statearr_13719[15] = inst_13670__$1);
(statearr_13719[16] = inst_13669__$1);
return statearr_13719;
})();if(cljs.core.truth_(inst_13673))
{var statearr_13720_13757 = state_13705__$1;(statearr_13720_13757[1] = 11);
} else
{var statearr_13721_13758 = state_13705__$1;(statearr_13721_13758[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 11))
{var inst_13669 = (state_13705[16]);var inst_13675 = (inst_13669 == null);var state_13705__$1 = state_13705;if(cljs.core.truth_(inst_13675))
{var statearr_13722_13759 = state_13705__$1;(statearr_13722_13759[1] = 14);
} else
{var statearr_13723_13760 = state_13705__$1;(statearr_13723_13760[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 12))
{var inst_13670 = (state_13705[15]);var inst_13684 = (state_13705[17]);var inst_13665 = (state_13705[13]);var inst_13684__$1 = inst_13665.call(null,inst_13670);var state_13705__$1 = (function (){var statearr_13724 = state_13705;(statearr_13724[17] = inst_13684__$1);
return statearr_13724;
})();if(cljs.core.truth_(inst_13684__$1))
{var statearr_13725_13761 = state_13705__$1;(statearr_13725_13761[1] = 17);
} else
{var statearr_13726_13762 = state_13705__$1;(statearr_13726_13762[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 13))
{var inst_13701 = (state_13705[2]);var state_13705__$1 = state_13705;var statearr_13727_13763 = state_13705__$1;(statearr_13727_13763[2] = inst_13701);
(statearr_13727_13763[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 14))
{var inst_13670 = (state_13705[15]);var inst_13677 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13670);var state_13705__$1 = state_13705;var statearr_13728_13764 = state_13705__$1;(statearr_13728_13764[2] = inst_13677);
(statearr_13728_13764[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 15))
{var state_13705__$1 = state_13705;var statearr_13729_13765 = state_13705__$1;(statearr_13729_13765[2] = null);
(statearr_13729_13765[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 16))
{var inst_13680 = (state_13705[2]);var inst_13681 = calc_state.call(null);var inst_13654 = inst_13681;var state_13705__$1 = (function (){var statearr_13730 = state_13705;(statearr_13730[18] = inst_13680);
(statearr_13730[9] = inst_13654);
return statearr_13730;
})();var statearr_13731_13766 = state_13705__$1;(statearr_13731_13766[2] = null);
(statearr_13731_13766[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 17))
{var inst_13684 = (state_13705[17]);var state_13705__$1 = state_13705;var statearr_13732_13767 = state_13705__$1;(statearr_13732_13767[2] = inst_13684);
(statearr_13732_13767[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 18))
{var inst_13670 = (state_13705[15]);var inst_13665 = (state_13705[13]);var inst_13664 = (state_13705[14]);var inst_13687 = cljs.core.empty_QMARK_.call(null,inst_13665);var inst_13688 = inst_13664.call(null,inst_13670);var inst_13689 = cljs.core.not.call(null,inst_13688);var inst_13690 = (inst_13687) && (inst_13689);var state_13705__$1 = state_13705;var statearr_13733_13768 = state_13705__$1;(statearr_13733_13768[2] = inst_13690);
(statearr_13733_13768[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 19))
{var inst_13692 = (state_13705[2]);var state_13705__$1 = state_13705;if(cljs.core.truth_(inst_13692))
{var statearr_13734_13769 = state_13705__$1;(statearr_13734_13769[1] = 20);
} else
{var statearr_13735_13770 = state_13705__$1;(statearr_13735_13770[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 20))
{var inst_13669 = (state_13705[16]);var state_13705__$1 = state_13705;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13705__$1,23,out,inst_13669);
} else
{if((state_val_13706 === 21))
{var state_13705__$1 = state_13705;var statearr_13736_13771 = state_13705__$1;(statearr_13736_13771[2] = null);
(statearr_13736_13771[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 22))
{var inst_13662 = (state_13705[12]);var inst_13698 = (state_13705[2]);var inst_13654 = inst_13662;var state_13705__$1 = (function (){var statearr_13737 = state_13705;(statearr_13737[19] = inst_13698);
(statearr_13737[9] = inst_13654);
return statearr_13737;
})();var statearr_13738_13772 = state_13705__$1;(statearr_13738_13772[2] = null);
(statearr_13738_13772[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 23))
{var inst_13695 = (state_13705[2]);var state_13705__$1 = state_13705;var statearr_13739_13773 = state_13705__$1;(statearr_13739_13773[2] = inst_13695);
(statearr_13739_13773[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13743[0] = state_machine__5507__auto__);
(statearr_13743[1] = 1);
return statearr_13743;
});
var state_machine__5507__auto____1 = (function (state_13705){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13705);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13744){if((e13744 instanceof Object))
{var ex__5510__auto__ = e13744;var statearr_13745_13774 = state_13705;(statearr_13745_13774[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13705);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13744;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13775 = state_13705;
state_13705 = G__13775;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13705){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13746 = f__5522__auto__.call(null);(statearr_13746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13747);
return statearr_13746;
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
cljs.core.async.Pub = (function (){var obj13777 = {};return obj13777;
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
return (function (p1__13778_SHARP_){if(cljs.core.truth_(p1__13778_SHARP_.call(null,topic)))
{return p1__13778_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13778_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13903 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13903 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13904){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13904 = meta13904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13903.cljs$lang$type = true;
cljs.core.async.t13903.cljs$lang$ctorStr = "cljs.core.async/t13903";
cljs.core.async.t13903.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13903");
});})(mults,ensure_mult))
;
cljs.core.async.t13903.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13903.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13903.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13903.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13903.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13905){var self__ = this;
var _13905__$1 = this;return self__.meta13904;
});})(mults,ensure_mult))
;
cljs.core.async.t13903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13905,meta13904__$1){var self__ = this;
var _13905__$1 = this;return (new cljs.core.async.t13903(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13904__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13903 = ((function (mults,ensure_mult){
return (function __GT_t13903(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13904){return (new cljs.core.async.t13903(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13904));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13903(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14027 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13979){var state_val_13980 = (state_13979[1]);if((state_val_13980 === 1))
{var state_13979__$1 = state_13979;var statearr_13981_14028 = state_13979__$1;(statearr_13981_14028[2] = null);
(statearr_13981_14028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 2))
{var state_13979__$1 = state_13979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13979__$1,4,ch);
} else
{if((state_val_13980 === 3))
{var inst_13977 = (state_13979[2]);var state_13979__$1 = state_13979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13979__$1,inst_13977);
} else
{if((state_val_13980 === 4))
{var inst_13908 = (state_13979[7]);var inst_13908__$1 = (state_13979[2]);var inst_13909 = (inst_13908__$1 == null);var state_13979__$1 = (function (){var statearr_13982 = state_13979;(statearr_13982[7] = inst_13908__$1);
return statearr_13982;
})();if(cljs.core.truth_(inst_13909))
{var statearr_13983_14029 = state_13979__$1;(statearr_13983_14029[1] = 5);
} else
{var statearr_13984_14030 = state_13979__$1;(statearr_13984_14030[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 5))
{var inst_13915 = cljs.core.deref.call(null,mults);var inst_13916 = cljs.core.vals.call(null,inst_13915);var inst_13917 = cljs.core.seq.call(null,inst_13916);var inst_13918 = inst_13917;var inst_13919 = null;var inst_13920 = 0;var inst_13921 = 0;var state_13979__$1 = (function (){var statearr_13985 = state_13979;(statearr_13985[8] = inst_13920);
(statearr_13985[9] = inst_13919);
(statearr_13985[10] = inst_13921);
(statearr_13985[11] = inst_13918);
return statearr_13985;
})();var statearr_13986_14031 = state_13979__$1;(statearr_13986_14031[2] = null);
(statearr_13986_14031[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 6))
{var inst_13956 = (state_13979[12]);var inst_13908 = (state_13979[7]);var inst_13958 = (state_13979[13]);var inst_13956__$1 = topic_fn.call(null,inst_13908);var inst_13957 = cljs.core.deref.call(null,mults);var inst_13958__$1 = cljs.core.get.call(null,inst_13957,inst_13956__$1);var state_13979__$1 = (function (){var statearr_13987 = state_13979;(statearr_13987[12] = inst_13956__$1);
(statearr_13987[13] = inst_13958__$1);
return statearr_13987;
})();if(cljs.core.truth_(inst_13958__$1))
{var statearr_13988_14032 = state_13979__$1;(statearr_13988_14032[1] = 19);
} else
{var statearr_13989_14033 = state_13979__$1;(statearr_13989_14033[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 7))
{var inst_13975 = (state_13979[2]);var state_13979__$1 = state_13979;var statearr_13990_14034 = state_13979__$1;(statearr_13990_14034[2] = inst_13975);
(statearr_13990_14034[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 8))
{var inst_13920 = (state_13979[8]);var inst_13921 = (state_13979[10]);var inst_13923 = (inst_13921 < inst_13920);var inst_13924 = inst_13923;var state_13979__$1 = state_13979;if(cljs.core.truth_(inst_13924))
{var statearr_13994_14035 = state_13979__$1;(statearr_13994_14035[1] = 10);
} else
{var statearr_13995_14036 = state_13979__$1;(statearr_13995_14036[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 9))
{var inst_13954 = (state_13979[2]);var state_13979__$1 = state_13979;var statearr_13996_14037 = state_13979__$1;(statearr_13996_14037[2] = inst_13954);
(statearr_13996_14037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 10))
{var inst_13920 = (state_13979[8]);var inst_13919 = (state_13979[9]);var inst_13921 = (state_13979[10]);var inst_13918 = (state_13979[11]);var inst_13926 = cljs.core._nth.call(null,inst_13919,inst_13921);var inst_13927 = cljs.core.async.muxch_STAR_.call(null,inst_13926);var inst_13928 = cljs.core.async.close_BANG_.call(null,inst_13927);var inst_13929 = (inst_13921 + 1);var tmp13991 = inst_13920;var tmp13992 = inst_13919;var tmp13993 = inst_13918;var inst_13918__$1 = tmp13993;var inst_13919__$1 = tmp13992;var inst_13920__$1 = tmp13991;var inst_13921__$1 = inst_13929;var state_13979__$1 = (function (){var statearr_13997 = state_13979;(statearr_13997[14] = inst_13928);
(statearr_13997[8] = inst_13920__$1);
(statearr_13997[9] = inst_13919__$1);
(statearr_13997[10] = inst_13921__$1);
(statearr_13997[11] = inst_13918__$1);
return statearr_13997;
})();var statearr_13998_14038 = state_13979__$1;(statearr_13998_14038[2] = null);
(statearr_13998_14038[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 11))
{var inst_13932 = (state_13979[15]);var inst_13918 = (state_13979[11]);var inst_13932__$1 = cljs.core.seq.call(null,inst_13918);var state_13979__$1 = (function (){var statearr_13999 = state_13979;(statearr_13999[15] = inst_13932__$1);
return statearr_13999;
})();if(inst_13932__$1)
{var statearr_14000_14039 = state_13979__$1;(statearr_14000_14039[1] = 13);
} else
{var statearr_14001_14040 = state_13979__$1;(statearr_14001_14040[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 12))
{var inst_13952 = (state_13979[2]);var state_13979__$1 = state_13979;var statearr_14002_14041 = state_13979__$1;(statearr_14002_14041[2] = inst_13952);
(statearr_14002_14041[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 13))
{var inst_13932 = (state_13979[15]);var inst_13934 = cljs.core.chunked_seq_QMARK_.call(null,inst_13932);var state_13979__$1 = state_13979;if(inst_13934)
{var statearr_14003_14042 = state_13979__$1;(statearr_14003_14042[1] = 16);
} else
{var statearr_14004_14043 = state_13979__$1;(statearr_14004_14043[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 14))
{var state_13979__$1 = state_13979;var statearr_14005_14044 = state_13979__$1;(statearr_14005_14044[2] = null);
(statearr_14005_14044[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 15))
{var inst_13950 = (state_13979[2]);var state_13979__$1 = state_13979;var statearr_14006_14045 = state_13979__$1;(statearr_14006_14045[2] = inst_13950);
(statearr_14006_14045[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 16))
{var inst_13932 = (state_13979[15]);var inst_13936 = cljs.core.chunk_first.call(null,inst_13932);var inst_13937 = cljs.core.chunk_rest.call(null,inst_13932);var inst_13938 = cljs.core.count.call(null,inst_13936);var inst_13918 = inst_13937;var inst_13919 = inst_13936;var inst_13920 = inst_13938;var inst_13921 = 0;var state_13979__$1 = (function (){var statearr_14007 = state_13979;(statearr_14007[8] = inst_13920);
(statearr_14007[9] = inst_13919);
(statearr_14007[10] = inst_13921);
(statearr_14007[11] = inst_13918);
return statearr_14007;
})();var statearr_14008_14046 = state_13979__$1;(statearr_14008_14046[2] = null);
(statearr_14008_14046[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 17))
{var inst_13932 = (state_13979[15]);var inst_13941 = cljs.core.first.call(null,inst_13932);var inst_13942 = cljs.core.async.muxch_STAR_.call(null,inst_13941);var inst_13943 = cljs.core.async.close_BANG_.call(null,inst_13942);var inst_13944 = cljs.core.next.call(null,inst_13932);var inst_13918 = inst_13944;var inst_13919 = null;var inst_13920 = 0;var inst_13921 = 0;var state_13979__$1 = (function (){var statearr_14009 = state_13979;(statearr_14009[16] = inst_13943);
(statearr_14009[8] = inst_13920);
(statearr_14009[9] = inst_13919);
(statearr_14009[10] = inst_13921);
(statearr_14009[11] = inst_13918);
return statearr_14009;
})();var statearr_14010_14047 = state_13979__$1;(statearr_14010_14047[2] = null);
(statearr_14010_14047[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 18))
{var inst_13947 = (state_13979[2]);var state_13979__$1 = state_13979;var statearr_14011_14048 = state_13979__$1;(statearr_14011_14048[2] = inst_13947);
(statearr_14011_14048[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 19))
{var state_13979__$1 = state_13979;var statearr_14012_14049 = state_13979__$1;(statearr_14012_14049[2] = null);
(statearr_14012_14049[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 20))
{var state_13979__$1 = state_13979;var statearr_14013_14050 = state_13979__$1;(statearr_14013_14050[2] = null);
(statearr_14013_14050[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 21))
{var inst_13972 = (state_13979[2]);var state_13979__$1 = (function (){var statearr_14014 = state_13979;(statearr_14014[17] = inst_13972);
return statearr_14014;
})();var statearr_14015_14051 = state_13979__$1;(statearr_14015_14051[2] = null);
(statearr_14015_14051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 22))
{var inst_13969 = (state_13979[2]);var state_13979__$1 = state_13979;var statearr_14016_14052 = state_13979__$1;(statearr_14016_14052[2] = inst_13969);
(statearr_14016_14052[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 23))
{var inst_13956 = (state_13979[12]);var inst_13960 = (state_13979[2]);var inst_13961 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13956);var state_13979__$1 = (function (){var statearr_14017 = state_13979;(statearr_14017[18] = inst_13960);
return statearr_14017;
})();var statearr_14018_14053 = state_13979__$1;(statearr_14018_14053[2] = inst_13961);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13979__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13980 === 24))
{var inst_13908 = (state_13979[7]);var inst_13958 = (state_13979[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13979,23,Object,null,22);var inst_13965 = cljs.core.async.muxch_STAR_.call(null,inst_13958);var state_13979__$1 = state_13979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13979__$1,25,inst_13965,inst_13908);
} else
{if((state_val_13980 === 25))
{var inst_13967 = (state_13979[2]);var state_13979__$1 = state_13979;var statearr_14019_14054 = state_13979__$1;(statearr_14019_14054[2] = inst_13967);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13979__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14023[0] = state_machine__5507__auto__);
(statearr_14023[1] = 1);
return statearr_14023;
});
var state_machine__5507__auto____1 = (function (state_13979){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14024){if((e14024 instanceof Object))
{var ex__5510__auto__ = e14024;var statearr_14025_14055 = state_13979;(statearr_14025_14055[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14056 = state_13979;
state_13979 = G__14056;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13979){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14026 = f__5522__auto__.call(null);(statearr_14026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14027);
return statearr_14026;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14163){var state_val_14164 = (state_14163[1]);if((state_val_14164 === 1))
{var state_14163__$1 = state_14163;var statearr_14165_14194 = state_14163__$1;(statearr_14165_14194[2] = null);
(statearr_14165_14194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 2))
{var inst_14126 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14127 = 0;var state_14163__$1 = (function (){var statearr_14166 = state_14163;(statearr_14166[7] = inst_14127);
(statearr_14166[8] = inst_14126);
return statearr_14166;
})();var statearr_14167_14195 = state_14163__$1;(statearr_14167_14195[2] = null);
(statearr_14167_14195[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 3))
{var inst_14161 = (state_14163[2]);var state_14163__$1 = state_14163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14163__$1,inst_14161);
} else
{if((state_val_14164 === 4))
{var inst_14127 = (state_14163[7]);var inst_14129 = (inst_14127 < cnt);var state_14163__$1 = state_14163;if(cljs.core.truth_(inst_14129))
{var statearr_14168_14196 = state_14163__$1;(statearr_14168_14196[1] = 6);
} else
{var statearr_14169_14197 = state_14163__$1;(statearr_14169_14197[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 5))
{var inst_14147 = (state_14163[2]);var state_14163__$1 = (function (){var statearr_14170 = state_14163;(statearr_14170[9] = inst_14147);
return statearr_14170;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14163__$1,12,dchan);
} else
{if((state_val_14164 === 6))
{var state_14163__$1 = state_14163;var statearr_14171_14198 = state_14163__$1;(statearr_14171_14198[2] = null);
(statearr_14171_14198[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 7))
{var state_14163__$1 = state_14163;var statearr_14172_14199 = state_14163__$1;(statearr_14172_14199[2] = null);
(statearr_14172_14199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 8))
{var inst_14145 = (state_14163[2]);var state_14163__$1 = state_14163;var statearr_14173_14200 = state_14163__$1;(statearr_14173_14200[2] = inst_14145);
(statearr_14173_14200[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 9))
{var inst_14127 = (state_14163[7]);var inst_14140 = (state_14163[2]);var inst_14141 = (inst_14127 + 1);var inst_14127__$1 = inst_14141;var state_14163__$1 = (function (){var statearr_14174 = state_14163;(statearr_14174[7] = inst_14127__$1);
(statearr_14174[10] = inst_14140);
return statearr_14174;
})();var statearr_14175_14201 = state_14163__$1;(statearr_14175_14201[2] = null);
(statearr_14175_14201[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 10))
{var inst_14131 = (state_14163[2]);var inst_14132 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14163__$1 = (function (){var statearr_14176 = state_14163;(statearr_14176[11] = inst_14131);
return statearr_14176;
})();var statearr_14177_14202 = state_14163__$1;(statearr_14177_14202[2] = inst_14132);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14163__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 11))
{var inst_14127 = (state_14163[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14163,10,Object,null,9);var inst_14136 = chs__$1.call(null,inst_14127);var inst_14137 = done.call(null,inst_14127);var inst_14138 = cljs.core.async.take_BANG_.call(null,inst_14136,inst_14137);var state_14163__$1 = state_14163;var statearr_14178_14203 = state_14163__$1;(statearr_14178_14203[2] = inst_14138);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14163__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 12))
{var inst_14149 = (state_14163[12]);var inst_14149__$1 = (state_14163[2]);var inst_14150 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14149__$1);var state_14163__$1 = (function (){var statearr_14179 = state_14163;(statearr_14179[12] = inst_14149__$1);
return statearr_14179;
})();if(cljs.core.truth_(inst_14150))
{var statearr_14180_14204 = state_14163__$1;(statearr_14180_14204[1] = 13);
} else
{var statearr_14181_14205 = state_14163__$1;(statearr_14181_14205[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 13))
{var inst_14152 = cljs.core.async.close_BANG_.call(null,out);var state_14163__$1 = state_14163;var statearr_14182_14206 = state_14163__$1;(statearr_14182_14206[2] = inst_14152);
(statearr_14182_14206[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 14))
{var inst_14149 = (state_14163[12]);var inst_14154 = cljs.core.apply.call(null,f,inst_14149);var state_14163__$1 = state_14163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14163__$1,16,out,inst_14154);
} else
{if((state_val_14164 === 15))
{var inst_14159 = (state_14163[2]);var state_14163__$1 = state_14163;var statearr_14183_14207 = state_14163__$1;(statearr_14183_14207[2] = inst_14159);
(statearr_14183_14207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14164 === 16))
{var inst_14156 = (state_14163[2]);var state_14163__$1 = (function (){var statearr_14184 = state_14163;(statearr_14184[13] = inst_14156);
return statearr_14184;
})();var statearr_14185_14208 = state_14163__$1;(statearr_14185_14208[2] = null);
(statearr_14185_14208[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14189[0] = state_machine__5507__auto__);
(statearr_14189[1] = 1);
return statearr_14189;
});
var state_machine__5507__auto____1 = (function (state_14163){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14163);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14190){if((e14190 instanceof Object))
{var ex__5510__auto__ = e14190;var statearr_14191_14209 = state_14163;(statearr_14191_14209[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14210 = state_14163;
state_14163 = G__14210;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14163){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14192 = f__5522__auto__.call(null);(statearr_14192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14193);
return statearr_14192;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14318 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14294){var state_val_14295 = (state_14294[1]);if((state_val_14295 === 1))
{var inst_14265 = cljs.core.vec.call(null,chs);var inst_14266 = inst_14265;var state_14294__$1 = (function (){var statearr_14296 = state_14294;(statearr_14296[7] = inst_14266);
return statearr_14296;
})();var statearr_14297_14319 = state_14294__$1;(statearr_14297_14319[2] = null);
(statearr_14297_14319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 2))
{var inst_14266 = (state_14294[7]);var inst_14268 = cljs.core.count.call(null,inst_14266);var inst_14269 = (inst_14268 > 0);var state_14294__$1 = state_14294;if(cljs.core.truth_(inst_14269))
{var statearr_14298_14320 = state_14294__$1;(statearr_14298_14320[1] = 4);
} else
{var statearr_14299_14321 = state_14294__$1;(statearr_14299_14321[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 3))
{var inst_14292 = (state_14294[2]);var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14294__$1,inst_14292);
} else
{if((state_val_14295 === 4))
{var inst_14266 = (state_14294[7]);var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14294__$1,7,inst_14266);
} else
{if((state_val_14295 === 5))
{var inst_14288 = cljs.core.async.close_BANG_.call(null,out);var state_14294__$1 = state_14294;var statearr_14300_14322 = state_14294__$1;(statearr_14300_14322[2] = inst_14288);
(statearr_14300_14322[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 6))
{var inst_14290 = (state_14294[2]);var state_14294__$1 = state_14294;var statearr_14301_14323 = state_14294__$1;(statearr_14301_14323[2] = inst_14290);
(statearr_14301_14323[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 7))
{var inst_14274 = (state_14294[8]);var inst_14273 = (state_14294[9]);var inst_14273__$1 = (state_14294[2]);var inst_14274__$1 = cljs.core.nth.call(null,inst_14273__$1,0,null);var inst_14275 = cljs.core.nth.call(null,inst_14273__$1,1,null);var inst_14276 = (inst_14274__$1 == null);var state_14294__$1 = (function (){var statearr_14302 = state_14294;(statearr_14302[10] = inst_14275);
(statearr_14302[8] = inst_14274__$1);
(statearr_14302[9] = inst_14273__$1);
return statearr_14302;
})();if(cljs.core.truth_(inst_14276))
{var statearr_14303_14324 = state_14294__$1;(statearr_14303_14324[1] = 8);
} else
{var statearr_14304_14325 = state_14294__$1;(statearr_14304_14325[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 8))
{var inst_14266 = (state_14294[7]);var inst_14275 = (state_14294[10]);var inst_14274 = (state_14294[8]);var inst_14273 = (state_14294[9]);var inst_14278 = (function (){var c = inst_14275;var v = inst_14274;var vec__14271 = inst_14273;var cs = inst_14266;return ((function (c,v,vec__14271,cs,inst_14266,inst_14275,inst_14274,inst_14273,state_val_14295){
return (function (p1__14211_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14211_SHARP_);
});
;})(c,v,vec__14271,cs,inst_14266,inst_14275,inst_14274,inst_14273,state_val_14295))
})();var inst_14279 = cljs.core.filterv.call(null,inst_14278,inst_14266);var inst_14266__$1 = inst_14279;var state_14294__$1 = (function (){var statearr_14305 = state_14294;(statearr_14305[7] = inst_14266__$1);
return statearr_14305;
})();var statearr_14306_14326 = state_14294__$1;(statearr_14306_14326[2] = null);
(statearr_14306_14326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 9))
{var inst_14274 = (state_14294[8]);var state_14294__$1 = state_14294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14294__$1,11,out,inst_14274);
} else
{if((state_val_14295 === 10))
{var inst_14286 = (state_14294[2]);var state_14294__$1 = state_14294;var statearr_14308_14327 = state_14294__$1;(statearr_14308_14327[2] = inst_14286);
(statearr_14308_14327[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14295 === 11))
{var inst_14266 = (state_14294[7]);var inst_14283 = (state_14294[2]);var tmp14307 = inst_14266;var inst_14266__$1 = tmp14307;var state_14294__$1 = (function (){var statearr_14309 = state_14294;(statearr_14309[11] = inst_14283);
(statearr_14309[7] = inst_14266__$1);
return statearr_14309;
})();var statearr_14310_14328 = state_14294__$1;(statearr_14310_14328[2] = null);
(statearr_14310_14328[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14314 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14314[0] = state_machine__5507__auto__);
(statearr_14314[1] = 1);
return statearr_14314;
});
var state_machine__5507__auto____1 = (function (state_14294){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14294);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14315){if((e14315 instanceof Object))
{var ex__5510__auto__ = e14315;var statearr_14316_14329 = state_14294;(statearr_14316_14329[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14330 = state_14294;
state_14294 = G__14330;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14317 = f__5522__auto__.call(null);(statearr_14317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14318);
return statearr_14317;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14400){var state_val_14401 = (state_14400[1]);if((state_val_14401 === 1))
{var inst_14377 = 0;var state_14400__$1 = (function (){var statearr_14402 = state_14400;(statearr_14402[7] = inst_14377);
return statearr_14402;
})();var statearr_14403_14424 = state_14400__$1;(statearr_14403_14424[2] = null);
(statearr_14403_14424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14401 === 2))
{var inst_14377 = (state_14400[7]);var inst_14379 = (inst_14377 < n);var state_14400__$1 = state_14400;if(cljs.core.truth_(inst_14379))
{var statearr_14404_14425 = state_14400__$1;(statearr_14404_14425[1] = 4);
} else
{var statearr_14405_14426 = state_14400__$1;(statearr_14405_14426[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14401 === 3))
{var inst_14397 = (state_14400[2]);var inst_14398 = cljs.core.async.close_BANG_.call(null,out);var state_14400__$1 = (function (){var statearr_14406 = state_14400;(statearr_14406[8] = inst_14397);
return statearr_14406;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14400__$1,inst_14398);
} else
{if((state_val_14401 === 4))
{var state_14400__$1 = state_14400;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14400__$1,7,ch);
} else
{if((state_val_14401 === 5))
{var state_14400__$1 = state_14400;var statearr_14407_14427 = state_14400__$1;(statearr_14407_14427[2] = null);
(statearr_14407_14427[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14401 === 6))
{var inst_14395 = (state_14400[2]);var state_14400__$1 = state_14400;var statearr_14408_14428 = state_14400__$1;(statearr_14408_14428[2] = inst_14395);
(statearr_14408_14428[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14401 === 7))
{var inst_14382 = (state_14400[9]);var inst_14382__$1 = (state_14400[2]);var inst_14383 = (inst_14382__$1 == null);var inst_14384 = cljs.core.not.call(null,inst_14383);var state_14400__$1 = (function (){var statearr_14409 = state_14400;(statearr_14409[9] = inst_14382__$1);
return statearr_14409;
})();if(inst_14384)
{var statearr_14410_14429 = state_14400__$1;(statearr_14410_14429[1] = 8);
} else
{var statearr_14411_14430 = state_14400__$1;(statearr_14411_14430[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14401 === 8))
{var inst_14382 = (state_14400[9]);var state_14400__$1 = state_14400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14400__$1,11,out,inst_14382);
} else
{if((state_val_14401 === 9))
{var state_14400__$1 = state_14400;var statearr_14412_14431 = state_14400__$1;(statearr_14412_14431[2] = null);
(statearr_14412_14431[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14401 === 10))
{var inst_14392 = (state_14400[2]);var state_14400__$1 = state_14400;var statearr_14413_14432 = state_14400__$1;(statearr_14413_14432[2] = inst_14392);
(statearr_14413_14432[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14401 === 11))
{var inst_14377 = (state_14400[7]);var inst_14387 = (state_14400[2]);var inst_14388 = (inst_14377 + 1);var inst_14377__$1 = inst_14388;var state_14400__$1 = (function (){var statearr_14414 = state_14400;(statearr_14414[7] = inst_14377__$1);
(statearr_14414[10] = inst_14387);
return statearr_14414;
})();var statearr_14415_14433 = state_14400__$1;(statearr_14415_14433[2] = null);
(statearr_14415_14433[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14419 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14419[0] = state_machine__5507__auto__);
(statearr_14419[1] = 1);
return statearr_14419;
});
var state_machine__5507__auto____1 = (function (state_14400){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14400);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14420){if((e14420 instanceof Object))
{var ex__5510__auto__ = e14420;var statearr_14421_14434 = state_14400;(statearr_14421_14434[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14400);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14435 = state_14400;
state_14400 = G__14435;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14400){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14422 = f__5522__auto__.call(null);(statearr_14422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14423);
return statearr_14422;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14532 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14507){var state_val_14508 = (state_14507[1]);if((state_val_14508 === 1))
{var inst_14484 = null;var state_14507__$1 = (function (){var statearr_14509 = state_14507;(statearr_14509[7] = inst_14484);
return statearr_14509;
})();var statearr_14510_14533 = state_14507__$1;(statearr_14510_14533[2] = null);
(statearr_14510_14533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 2))
{var state_14507__$1 = state_14507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14507__$1,4,ch);
} else
{if((state_val_14508 === 3))
{var inst_14504 = (state_14507[2]);var inst_14505 = cljs.core.async.close_BANG_.call(null,out);var state_14507__$1 = (function (){var statearr_14511 = state_14507;(statearr_14511[8] = inst_14504);
return statearr_14511;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14507__$1,inst_14505);
} else
{if((state_val_14508 === 4))
{var inst_14487 = (state_14507[9]);var inst_14487__$1 = (state_14507[2]);var inst_14488 = (inst_14487__$1 == null);var inst_14489 = cljs.core.not.call(null,inst_14488);var state_14507__$1 = (function (){var statearr_14512 = state_14507;(statearr_14512[9] = inst_14487__$1);
return statearr_14512;
})();if(inst_14489)
{var statearr_14513_14534 = state_14507__$1;(statearr_14513_14534[1] = 5);
} else
{var statearr_14514_14535 = state_14507__$1;(statearr_14514_14535[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 5))
{var inst_14487 = (state_14507[9]);var inst_14484 = (state_14507[7]);var inst_14491 = cljs.core._EQ_.call(null,inst_14487,inst_14484);var state_14507__$1 = state_14507;if(inst_14491)
{var statearr_14515_14536 = state_14507__$1;(statearr_14515_14536[1] = 8);
} else
{var statearr_14516_14537 = state_14507__$1;(statearr_14516_14537[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 6))
{var state_14507__$1 = state_14507;var statearr_14518_14538 = state_14507__$1;(statearr_14518_14538[2] = null);
(statearr_14518_14538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 7))
{var inst_14502 = (state_14507[2]);var state_14507__$1 = state_14507;var statearr_14519_14539 = state_14507__$1;(statearr_14519_14539[2] = inst_14502);
(statearr_14519_14539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 8))
{var inst_14484 = (state_14507[7]);var tmp14517 = inst_14484;var inst_14484__$1 = tmp14517;var state_14507__$1 = (function (){var statearr_14520 = state_14507;(statearr_14520[7] = inst_14484__$1);
return statearr_14520;
})();var statearr_14521_14540 = state_14507__$1;(statearr_14521_14540[2] = null);
(statearr_14521_14540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 9))
{var inst_14487 = (state_14507[9]);var state_14507__$1 = state_14507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14507__$1,11,out,inst_14487);
} else
{if((state_val_14508 === 10))
{var inst_14499 = (state_14507[2]);var state_14507__$1 = state_14507;var statearr_14522_14541 = state_14507__$1;(statearr_14522_14541[2] = inst_14499);
(statearr_14522_14541[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 11))
{var inst_14487 = (state_14507[9]);var inst_14496 = (state_14507[2]);var inst_14484 = inst_14487;var state_14507__$1 = (function (){var statearr_14523 = state_14507;(statearr_14523[7] = inst_14484);
(statearr_14523[10] = inst_14496);
return statearr_14523;
})();var statearr_14524_14542 = state_14507__$1;(statearr_14524_14542[2] = null);
(statearr_14524_14542[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14528 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14528[0] = state_machine__5507__auto__);
(statearr_14528[1] = 1);
return statearr_14528;
});
var state_machine__5507__auto____1 = (function (state_14507){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14529){if((e14529 instanceof Object))
{var ex__5510__auto__ = e14529;var statearr_14530_14543 = state_14507;(statearr_14530_14543[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14544 = state_14507;
state_14507 = G__14544;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14507){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14531 = f__5522__auto__.call(null);(statearr_14531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14532);
return statearr_14531;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14649){var state_val_14650 = (state_14649[1]);if((state_val_14650 === 1))
{var inst_14612 = (new Array(n));var inst_14613 = inst_14612;var inst_14614 = 0;var state_14649__$1 = (function (){var statearr_14651 = state_14649;(statearr_14651[7] = inst_14613);
(statearr_14651[8] = inst_14614);
return statearr_14651;
})();var statearr_14652_14680 = state_14649__$1;(statearr_14652_14680[2] = null);
(statearr_14652_14680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 2))
{var state_14649__$1 = state_14649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14649__$1,4,ch);
} else
{if((state_val_14650 === 3))
{var inst_14647 = (state_14649[2]);var state_14649__$1 = state_14649;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14649__$1,inst_14647);
} else
{if((state_val_14650 === 4))
{var inst_14617 = (state_14649[9]);var inst_14617__$1 = (state_14649[2]);var inst_14618 = (inst_14617__$1 == null);var inst_14619 = cljs.core.not.call(null,inst_14618);var state_14649__$1 = (function (){var statearr_14653 = state_14649;(statearr_14653[9] = inst_14617__$1);
return statearr_14653;
})();if(inst_14619)
{var statearr_14654_14681 = state_14649__$1;(statearr_14654_14681[1] = 5);
} else
{var statearr_14655_14682 = state_14649__$1;(statearr_14655_14682[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 5))
{var inst_14617 = (state_14649[9]);var inst_14613 = (state_14649[7]);var inst_14622 = (state_14649[10]);var inst_14614 = (state_14649[8]);var inst_14621 = (inst_14613[inst_14614] = inst_14617);var inst_14622__$1 = (inst_14614 + 1);var inst_14623 = (inst_14622__$1 < n);var state_14649__$1 = (function (){var statearr_14656 = state_14649;(statearr_14656[10] = inst_14622__$1);
(statearr_14656[11] = inst_14621);
return statearr_14656;
})();if(cljs.core.truth_(inst_14623))
{var statearr_14657_14683 = state_14649__$1;(statearr_14657_14683[1] = 8);
} else
{var statearr_14658_14684 = state_14649__$1;(statearr_14658_14684[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 6))
{var inst_14614 = (state_14649[8]);var inst_14635 = (inst_14614 > 0);var state_14649__$1 = state_14649;if(cljs.core.truth_(inst_14635))
{var statearr_14660_14685 = state_14649__$1;(statearr_14660_14685[1] = 12);
} else
{var statearr_14661_14686 = state_14649__$1;(statearr_14661_14686[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 7))
{var inst_14645 = (state_14649[2]);var state_14649__$1 = state_14649;var statearr_14662_14687 = state_14649__$1;(statearr_14662_14687[2] = inst_14645);
(statearr_14662_14687[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 8))
{var inst_14613 = (state_14649[7]);var inst_14622 = (state_14649[10]);var tmp14659 = inst_14613;var inst_14613__$1 = tmp14659;var inst_14614 = inst_14622;var state_14649__$1 = (function (){var statearr_14663 = state_14649;(statearr_14663[7] = inst_14613__$1);
(statearr_14663[8] = inst_14614);
return statearr_14663;
})();var statearr_14664_14688 = state_14649__$1;(statearr_14664_14688[2] = null);
(statearr_14664_14688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 9))
{var inst_14613 = (state_14649[7]);var inst_14627 = cljs.core.vec.call(null,inst_14613);var state_14649__$1 = state_14649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14649__$1,11,out,inst_14627);
} else
{if((state_val_14650 === 10))
{var inst_14633 = (state_14649[2]);var state_14649__$1 = state_14649;var statearr_14665_14689 = state_14649__$1;(statearr_14665_14689[2] = inst_14633);
(statearr_14665_14689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 11))
{var inst_14629 = (state_14649[2]);var inst_14630 = (new Array(n));var inst_14613 = inst_14630;var inst_14614 = 0;var state_14649__$1 = (function (){var statearr_14666 = state_14649;(statearr_14666[12] = inst_14629);
(statearr_14666[7] = inst_14613);
(statearr_14666[8] = inst_14614);
return statearr_14666;
})();var statearr_14667_14690 = state_14649__$1;(statearr_14667_14690[2] = null);
(statearr_14667_14690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 12))
{var inst_14613 = (state_14649[7]);var inst_14637 = cljs.core.vec.call(null,inst_14613);var state_14649__$1 = state_14649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14649__$1,15,out,inst_14637);
} else
{if((state_val_14650 === 13))
{var state_14649__$1 = state_14649;var statearr_14668_14691 = state_14649__$1;(statearr_14668_14691[2] = null);
(statearr_14668_14691[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 14))
{var inst_14642 = (state_14649[2]);var inst_14643 = cljs.core.async.close_BANG_.call(null,out);var state_14649__$1 = (function (){var statearr_14669 = state_14649;(statearr_14669[13] = inst_14642);
return statearr_14669;
})();var statearr_14670_14692 = state_14649__$1;(statearr_14670_14692[2] = inst_14643);
(statearr_14670_14692[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14650 === 15))
{var inst_14639 = (state_14649[2]);var state_14649__$1 = state_14649;var statearr_14671_14693 = state_14649__$1;(statearr_14671_14693[2] = inst_14639);
(statearr_14671_14693[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14675[0] = state_machine__5507__auto__);
(statearr_14675[1] = 1);
return statearr_14675;
});
var state_machine__5507__auto____1 = (function (state_14649){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14649);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14676){if((e14676 instanceof Object))
{var ex__5510__auto__ = e14676;var statearr_14677_14694 = state_14649;(statearr_14677_14694[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14649);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14695 = state_14649;
state_14649 = G__14695;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14649){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14678 = f__5522__auto__.call(null);(statearr_14678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14679);
return statearr_14678;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14838 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14808){var state_val_14809 = (state_14808[1]);if((state_val_14809 === 1))
{var inst_14767 = [];var inst_14768 = inst_14767;var inst_14769 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14808__$1 = (function (){var statearr_14810 = state_14808;(statearr_14810[7] = inst_14768);
(statearr_14810[8] = inst_14769);
return statearr_14810;
})();var statearr_14811_14839 = state_14808__$1;(statearr_14811_14839[2] = null);
(statearr_14811_14839[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 2))
{var state_14808__$1 = state_14808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14808__$1,4,ch);
} else
{if((state_val_14809 === 3))
{var inst_14806 = (state_14808[2]);var state_14808__$1 = state_14808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14808__$1,inst_14806);
} else
{if((state_val_14809 === 4))
{var inst_14772 = (state_14808[9]);var inst_14772__$1 = (state_14808[2]);var inst_14773 = (inst_14772__$1 == null);var inst_14774 = cljs.core.not.call(null,inst_14773);var state_14808__$1 = (function (){var statearr_14812 = state_14808;(statearr_14812[9] = inst_14772__$1);
return statearr_14812;
})();if(inst_14774)
{var statearr_14813_14840 = state_14808__$1;(statearr_14813_14840[1] = 5);
} else
{var statearr_14814_14841 = state_14808__$1;(statearr_14814_14841[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 5))
{var inst_14776 = (state_14808[10]);var inst_14769 = (state_14808[8]);var inst_14772 = (state_14808[9]);var inst_14776__$1 = f.call(null,inst_14772);var inst_14777 = cljs.core._EQ_.call(null,inst_14776__$1,inst_14769);var inst_14778 = cljs.core.keyword_identical_QMARK_.call(null,inst_14769,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14779 = (inst_14777) || (inst_14778);var state_14808__$1 = (function (){var statearr_14815 = state_14808;(statearr_14815[10] = inst_14776__$1);
return statearr_14815;
})();if(cljs.core.truth_(inst_14779))
{var statearr_14816_14842 = state_14808__$1;(statearr_14816_14842[1] = 8);
} else
{var statearr_14817_14843 = state_14808__$1;(statearr_14817_14843[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 6))
{var inst_14768 = (state_14808[7]);var inst_14793 = inst_14768.length;var inst_14794 = (inst_14793 > 0);var state_14808__$1 = state_14808;if(cljs.core.truth_(inst_14794))
{var statearr_14819_14844 = state_14808__$1;(statearr_14819_14844[1] = 12);
} else
{var statearr_14820_14845 = state_14808__$1;(statearr_14820_14845[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 7))
{var inst_14804 = (state_14808[2]);var state_14808__$1 = state_14808;var statearr_14821_14846 = state_14808__$1;(statearr_14821_14846[2] = inst_14804);
(statearr_14821_14846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 8))
{var inst_14776 = (state_14808[10]);var inst_14768 = (state_14808[7]);var inst_14772 = (state_14808[9]);var inst_14781 = inst_14768.push(inst_14772);var tmp14818 = inst_14768;var inst_14768__$1 = tmp14818;var inst_14769 = inst_14776;var state_14808__$1 = (function (){var statearr_14822 = state_14808;(statearr_14822[7] = inst_14768__$1);
(statearr_14822[8] = inst_14769);
(statearr_14822[11] = inst_14781);
return statearr_14822;
})();var statearr_14823_14847 = state_14808__$1;(statearr_14823_14847[2] = null);
(statearr_14823_14847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 9))
{var inst_14768 = (state_14808[7]);var inst_14784 = cljs.core.vec.call(null,inst_14768);var state_14808__$1 = state_14808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14808__$1,11,out,inst_14784);
} else
{if((state_val_14809 === 10))
{var inst_14791 = (state_14808[2]);var state_14808__$1 = state_14808;var statearr_14824_14848 = state_14808__$1;(statearr_14824_14848[2] = inst_14791);
(statearr_14824_14848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 11))
{var inst_14776 = (state_14808[10]);var inst_14772 = (state_14808[9]);var inst_14786 = (state_14808[2]);var inst_14787 = [];var inst_14788 = inst_14787.push(inst_14772);var inst_14768 = inst_14787;var inst_14769 = inst_14776;var state_14808__$1 = (function (){var statearr_14825 = state_14808;(statearr_14825[7] = inst_14768);
(statearr_14825[8] = inst_14769);
(statearr_14825[12] = inst_14788);
(statearr_14825[13] = inst_14786);
return statearr_14825;
})();var statearr_14826_14849 = state_14808__$1;(statearr_14826_14849[2] = null);
(statearr_14826_14849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 12))
{var inst_14768 = (state_14808[7]);var inst_14796 = cljs.core.vec.call(null,inst_14768);var state_14808__$1 = state_14808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14808__$1,15,out,inst_14796);
} else
{if((state_val_14809 === 13))
{var state_14808__$1 = state_14808;var statearr_14827_14850 = state_14808__$1;(statearr_14827_14850[2] = null);
(statearr_14827_14850[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 14))
{var inst_14801 = (state_14808[2]);var inst_14802 = cljs.core.async.close_BANG_.call(null,out);var state_14808__$1 = (function (){var statearr_14828 = state_14808;(statearr_14828[14] = inst_14801);
return statearr_14828;
})();var statearr_14829_14851 = state_14808__$1;(statearr_14829_14851[2] = inst_14802);
(statearr_14829_14851[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14809 === 15))
{var inst_14798 = (state_14808[2]);var state_14808__$1 = state_14808;var statearr_14830_14852 = state_14808__$1;(statearr_14830_14852[2] = inst_14798);
(statearr_14830_14852[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14834[0] = state_machine__5507__auto__);
(statearr_14834[1] = 1);
return statearr_14834;
});
var state_machine__5507__auto____1 = (function (state_14808){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14835){if((e14835 instanceof Object))
{var ex__5510__auto__ = e14835;var statearr_14836_14853 = state_14808;(statearr_14836_14853[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14854 = state_14808;
state_14808 = G__14854;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14808){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14837 = f__5522__auto__.call(null);(statearr_14837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14838);
return statearr_14837;
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