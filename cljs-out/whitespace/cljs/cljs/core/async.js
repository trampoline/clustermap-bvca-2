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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34334 = (function (f,fn_handler,meta34335){
this.f = f;
this.fn_handler = fn_handler;
this.meta34335 = meta34335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34334.cljs$lang$type = true;
cljs.core.async.t34334.cljs$lang$ctorStr = "cljs.core.async/t34334";
cljs.core.async.t34334.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34334");
});
cljs.core.async.t34334.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34336){var self__ = this;
var _34336__$1 = this;return self__.meta34335;
});
cljs.core.async.t34334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34336,meta34335__$1){var self__ = this;
var _34336__$1 = this;return (new cljs.core.async.t34334(self__.f,self__.fn_handler,meta34335__$1));
});
cljs.core.async.__GT_t34334 = (function __GT_t34334(f__$1,fn_handler__$1,meta34335){return (new cljs.core.async.t34334(f__$1,fn_handler__$1,meta34335));
});
}
return (new cljs.core.async.t34334(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34338 = buff;if(G__34338)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34338.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34338.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34338);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34338);
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
{var val_34339 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34339);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34339);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34340 = n;var x_34341 = 0;while(true){
if((x_34341 < n__4248__auto___34340))
{(a[x_34341] = 0);
{
var G__34342 = (x_34341 + 1);
x_34341 = G__34342;
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
var G__34343 = (i + 1);
i = G__34343;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34347 = (function (flag,alt_flag,meta34348){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34348 = meta34348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34347.cljs$lang$type = true;
cljs.core.async.t34347.cljs$lang$ctorStr = "cljs.core.async/t34347";
cljs.core.async.t34347.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34347");
});
cljs.core.async.t34347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34349){var self__ = this;
var _34349__$1 = this;return self__.meta34348;
});
cljs.core.async.t34347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34349,meta34348__$1){var self__ = this;
var _34349__$1 = this;return (new cljs.core.async.t34347(self__.flag,self__.alt_flag,meta34348__$1));
});
cljs.core.async.__GT_t34347 = (function __GT_t34347(flag__$1,alt_flag__$1,meta34348){return (new cljs.core.async.t34347(flag__$1,alt_flag__$1,meta34348));
});
}
return (new cljs.core.async.t34347(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34353 = (function (cb,flag,alt_handler,meta34354){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34354 = meta34354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34353.cljs$lang$type = true;
cljs.core.async.t34353.cljs$lang$ctorStr = "cljs.core.async/t34353";
cljs.core.async.t34353.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34353");
});
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34355){var self__ = this;
var _34355__$1 = this;return self__.meta34354;
});
cljs.core.async.t34353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34355,meta34354__$1){var self__ = this;
var _34355__$1 = this;return (new cljs.core.async.t34353(self__.cb,self__.flag,self__.alt_handler,meta34354__$1));
});
cljs.core.async.__GT_t34353 = (function __GT_t34353(cb__$1,flag__$1,alt_handler__$1,meta34354){return (new cljs.core.async.t34353(cb__$1,flag__$1,alt_handler__$1,meta34354));
});
}
return (new cljs.core.async.t34353(cb,flag,alt_handler,null));
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
return (function (p1__34356_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34356_SHARP_,port], null));
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
var G__34357 = (i + 1);
i = G__34357;
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
var alts_BANG___delegate = function (ports,p__34358){var map__34360 = p__34358;var map__34360__$1 = ((cljs.core.seq_QMARK_.call(null,map__34360))?cljs.core.apply.call(null,cljs.core.hash_map,map__34360):map__34360);var opts = map__34360__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34358 = null;if (arguments.length > 1) {
  p__34358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34358);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34361){
var ports = cljs.core.first(arglist__34361);
var p__34358 = cljs.core.rest(arglist__34361);
return alts_BANG___delegate(ports,p__34358);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34369 = (function (ch,f,map_LT_,meta34370){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34370 = meta34370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34369.cljs$lang$type = true;
cljs.core.async.t34369.cljs$lang$ctorStr = "cljs.core.async/t34369";
cljs.core.async.t34369.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34369");
});
cljs.core.async.t34369.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34369.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34372 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34372 = (function (fn1,_,meta34370,ch,f,map_LT_,meta34373){
this.fn1 = fn1;
this._ = _;
this.meta34370 = meta34370;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34373 = meta34373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34372.cljs$lang$type = true;
cljs.core.async.t34372.cljs$lang$ctorStr = "cljs.core.async/t34372";
cljs.core.async.t34372.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34372");
});
cljs.core.async.t34372.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34372.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34362_SHARP_){return f1.call(null,(((p1__34362_SHARP_ == null))?null:self__.f.call(null,p1__34362_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34374){var self__ = this;
var _34374__$1 = this;return self__.meta34373;
});
cljs.core.async.t34372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34374,meta34373__$1){var self__ = this;
var _34374__$1 = this;return (new cljs.core.async.t34372(self__.fn1,self__._,self__.meta34370,self__.ch,self__.f,self__.map_LT_,meta34373__$1));
});
cljs.core.async.__GT_t34372 = (function __GT_t34372(fn1__$1,___$2,meta34370__$1,ch__$2,f__$2,map_LT___$2,meta34373){return (new cljs.core.async.t34372(fn1__$1,___$2,meta34370__$1,ch__$2,f__$2,map_LT___$2,meta34373));
});
}
return (new cljs.core.async.t34372(fn1,___$1,self__.meta34370,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34369.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34371){var self__ = this;
var _34371__$1 = this;return self__.meta34370;
});
cljs.core.async.t34369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34371,meta34370__$1){var self__ = this;
var _34371__$1 = this;return (new cljs.core.async.t34369(self__.ch,self__.f,self__.map_LT_,meta34370__$1));
});
cljs.core.async.__GT_t34369 = (function __GT_t34369(ch__$1,f__$1,map_LT___$1,meta34370){return (new cljs.core.async.t34369(ch__$1,f__$1,map_LT___$1,meta34370));
});
}
return (new cljs.core.async.t34369(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34378 = (function (ch,f,map_GT_,meta34379){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34379 = meta34379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34378.cljs$lang$type = true;
cljs.core.async.t34378.cljs$lang$ctorStr = "cljs.core.async/t34378";
cljs.core.async.t34378.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34378");
});
cljs.core.async.t34378.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34378.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34378.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34380){var self__ = this;
var _34380__$1 = this;return self__.meta34379;
});
cljs.core.async.t34378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34380,meta34379__$1){var self__ = this;
var _34380__$1 = this;return (new cljs.core.async.t34378(self__.ch,self__.f,self__.map_GT_,meta34379__$1));
});
cljs.core.async.__GT_t34378 = (function __GT_t34378(ch__$1,f__$1,map_GT___$1,meta34379){return (new cljs.core.async.t34378(ch__$1,f__$1,map_GT___$1,meta34379));
});
}
return (new cljs.core.async.t34378(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34384 = (function (ch,p,filter_GT_,meta34385){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34385 = meta34385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34384.cljs$lang$type = true;
cljs.core.async.t34384.cljs$lang$ctorStr = "cljs.core.async/t34384";
cljs.core.async.t34384.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34384");
});
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34386){var self__ = this;
var _34386__$1 = this;return self__.meta34385;
});
cljs.core.async.t34384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34386,meta34385__$1){var self__ = this;
var _34386__$1 = this;return (new cljs.core.async.t34384(self__.ch,self__.p,self__.filter_GT_,meta34385__$1));
});
cljs.core.async.__GT_t34384 = (function __GT_t34384(ch__$1,p__$1,filter_GT___$1,meta34385){return (new cljs.core.async.t34384(ch__$1,p__$1,filter_GT___$1,meta34385));
});
}
return (new cljs.core.async.t34384(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34448){var state_val_34449 = (state_34448[1]);if((state_val_34449 === 1))
{var state_34448__$1 = state_34448;var statearr_34450_34470 = state_34448__$1;(statearr_34450_34470[2] = null);
(statearr_34450_34470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34449 === 2))
{var state_34448__$1 = state_34448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34448__$1,4,ch);
} else
{if((state_val_34449 === 3))
{var inst_34446 = (state_34448[2]);var state_34448__$1 = state_34448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34448__$1,inst_34446);
} else
{if((state_val_34449 === 4))
{var inst_34430 = (state_34448[7]);var inst_34430__$1 = (state_34448[2]);var inst_34431 = (inst_34430__$1 == null);var state_34448__$1 = (function (){var statearr_34451 = state_34448;(statearr_34451[7] = inst_34430__$1);
return statearr_34451;
})();if(cljs.core.truth_(inst_34431))
{var statearr_34452_34471 = state_34448__$1;(statearr_34452_34471[1] = 5);
} else
{var statearr_34453_34472 = state_34448__$1;(statearr_34453_34472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34449 === 5))
{var inst_34433 = cljs.core.async.close_BANG_.call(null,out);var state_34448__$1 = state_34448;var statearr_34454_34473 = state_34448__$1;(statearr_34454_34473[2] = inst_34433);
(statearr_34454_34473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34449 === 6))
{var inst_34430 = (state_34448[7]);var inst_34435 = p.call(null,inst_34430);var state_34448__$1 = state_34448;if(cljs.core.truth_(inst_34435))
{var statearr_34455_34474 = state_34448__$1;(statearr_34455_34474[1] = 8);
} else
{var statearr_34456_34475 = state_34448__$1;(statearr_34456_34475[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34449 === 7))
{var inst_34444 = (state_34448[2]);var state_34448__$1 = state_34448;var statearr_34457_34476 = state_34448__$1;(statearr_34457_34476[2] = inst_34444);
(statearr_34457_34476[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34449 === 8))
{var inst_34430 = (state_34448[7]);var state_34448__$1 = state_34448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34448__$1,11,out,inst_34430);
} else
{if((state_val_34449 === 9))
{var state_34448__$1 = state_34448;var statearr_34458_34477 = state_34448__$1;(statearr_34458_34477[2] = null);
(statearr_34458_34477[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34449 === 10))
{var inst_34441 = (state_34448[2]);var state_34448__$1 = (function (){var statearr_34459 = state_34448;(statearr_34459[8] = inst_34441);
return statearr_34459;
})();var statearr_34460_34478 = state_34448__$1;(statearr_34460_34478[2] = null);
(statearr_34460_34478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34449 === 11))
{var inst_34438 = (state_34448[2]);var state_34448__$1 = state_34448;var statearr_34461_34479 = state_34448__$1;(statearr_34461_34479[2] = inst_34438);
(statearr_34461_34479[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34465 = [null,null,null,null,null,null,null,null,null];(statearr_34465[0] = state_machine__5507__auto__);
(statearr_34465[1] = 1);
return statearr_34465;
});
var state_machine__5507__auto____1 = (function (state_34448){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34466){if((e34466 instanceof Object))
{var ex__5510__auto__ = e34466;var statearr_34467_34480 = state_34448;(statearr_34467_34480[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34481 = state_34448;
state_34448 = G__34481;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34448){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34468 = f__5522__auto__.call(null);(statearr_34468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34469);
return statearr_34468;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34633){var state_val_34634 = (state_34633[1]);if((state_val_34634 === 1))
{var state_34633__$1 = state_34633;var statearr_34635_34672 = state_34633__$1;(statearr_34635_34672[2] = null);
(statearr_34635_34672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 2))
{var state_34633__$1 = state_34633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34633__$1,4,in$);
} else
{if((state_val_34634 === 3))
{var inst_34631 = (state_34633[2]);var state_34633__$1 = state_34633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34633__$1,inst_34631);
} else
{if((state_val_34634 === 4))
{var inst_34579 = (state_34633[7]);var inst_34579__$1 = (state_34633[2]);var inst_34580 = (inst_34579__$1 == null);var state_34633__$1 = (function (){var statearr_34636 = state_34633;(statearr_34636[7] = inst_34579__$1);
return statearr_34636;
})();if(cljs.core.truth_(inst_34580))
{var statearr_34637_34673 = state_34633__$1;(statearr_34637_34673[1] = 5);
} else
{var statearr_34638_34674 = state_34633__$1;(statearr_34638_34674[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 5))
{var inst_34582 = cljs.core.async.close_BANG_.call(null,out);var state_34633__$1 = state_34633;var statearr_34639_34675 = state_34633__$1;(statearr_34639_34675[2] = inst_34582);
(statearr_34639_34675[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 6))
{var inst_34579 = (state_34633[7]);var inst_34584 = f.call(null,inst_34579);var inst_34589 = cljs.core.seq.call(null,inst_34584);var inst_34590 = inst_34589;var inst_34591 = null;var inst_34592 = 0;var inst_34593 = 0;var state_34633__$1 = (function (){var statearr_34640 = state_34633;(statearr_34640[8] = inst_34592);
(statearr_34640[9] = inst_34593);
(statearr_34640[10] = inst_34591);
(statearr_34640[11] = inst_34590);
return statearr_34640;
})();var statearr_34641_34676 = state_34633__$1;(statearr_34641_34676[2] = null);
(statearr_34641_34676[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 7))
{var inst_34629 = (state_34633[2]);var state_34633__$1 = state_34633;var statearr_34642_34677 = state_34633__$1;(statearr_34642_34677[2] = inst_34629);
(statearr_34642_34677[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 8))
{var inst_34592 = (state_34633[8]);var inst_34593 = (state_34633[9]);var inst_34595 = (inst_34593 < inst_34592);var inst_34596 = inst_34595;var state_34633__$1 = state_34633;if(cljs.core.truth_(inst_34596))
{var statearr_34643_34678 = state_34633__$1;(statearr_34643_34678[1] = 10);
} else
{var statearr_34644_34679 = state_34633__$1;(statearr_34644_34679[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 9))
{var inst_34626 = (state_34633[2]);var state_34633__$1 = (function (){var statearr_34645 = state_34633;(statearr_34645[12] = inst_34626);
return statearr_34645;
})();var statearr_34646_34680 = state_34633__$1;(statearr_34646_34680[2] = null);
(statearr_34646_34680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 10))
{var inst_34593 = (state_34633[9]);var inst_34591 = (state_34633[10]);var inst_34598 = cljs.core._nth.call(null,inst_34591,inst_34593);var state_34633__$1 = state_34633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34633__$1,13,out,inst_34598);
} else
{if((state_val_34634 === 11))
{var inst_34604 = (state_34633[13]);var inst_34590 = (state_34633[11]);var inst_34604__$1 = cljs.core.seq.call(null,inst_34590);var state_34633__$1 = (function (){var statearr_34650 = state_34633;(statearr_34650[13] = inst_34604__$1);
return statearr_34650;
})();if(inst_34604__$1)
{var statearr_34651_34681 = state_34633__$1;(statearr_34651_34681[1] = 14);
} else
{var statearr_34652_34682 = state_34633__$1;(statearr_34652_34682[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 12))
{var inst_34624 = (state_34633[2]);var state_34633__$1 = state_34633;var statearr_34653_34683 = state_34633__$1;(statearr_34653_34683[2] = inst_34624);
(statearr_34653_34683[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 13))
{var inst_34592 = (state_34633[8]);var inst_34593 = (state_34633[9]);var inst_34591 = (state_34633[10]);var inst_34590 = (state_34633[11]);var inst_34600 = (state_34633[2]);var inst_34601 = (inst_34593 + 1);var tmp34647 = inst_34592;var tmp34648 = inst_34591;var tmp34649 = inst_34590;var inst_34590__$1 = tmp34649;var inst_34591__$1 = tmp34648;var inst_34592__$1 = tmp34647;var inst_34593__$1 = inst_34601;var state_34633__$1 = (function (){var statearr_34654 = state_34633;(statearr_34654[14] = inst_34600);
(statearr_34654[8] = inst_34592__$1);
(statearr_34654[9] = inst_34593__$1);
(statearr_34654[10] = inst_34591__$1);
(statearr_34654[11] = inst_34590__$1);
return statearr_34654;
})();var statearr_34655_34684 = state_34633__$1;(statearr_34655_34684[2] = null);
(statearr_34655_34684[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 14))
{var inst_34604 = (state_34633[13]);var inst_34606 = cljs.core.chunked_seq_QMARK_.call(null,inst_34604);var state_34633__$1 = state_34633;if(inst_34606)
{var statearr_34656_34685 = state_34633__$1;(statearr_34656_34685[1] = 17);
} else
{var statearr_34657_34686 = state_34633__$1;(statearr_34657_34686[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 15))
{var state_34633__$1 = state_34633;var statearr_34658_34687 = state_34633__$1;(statearr_34658_34687[2] = null);
(statearr_34658_34687[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 16))
{var inst_34622 = (state_34633[2]);var state_34633__$1 = state_34633;var statearr_34659_34688 = state_34633__$1;(statearr_34659_34688[2] = inst_34622);
(statearr_34659_34688[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 17))
{var inst_34604 = (state_34633[13]);var inst_34608 = cljs.core.chunk_first.call(null,inst_34604);var inst_34609 = cljs.core.chunk_rest.call(null,inst_34604);var inst_34610 = cljs.core.count.call(null,inst_34608);var inst_34590 = inst_34609;var inst_34591 = inst_34608;var inst_34592 = inst_34610;var inst_34593 = 0;var state_34633__$1 = (function (){var statearr_34660 = state_34633;(statearr_34660[8] = inst_34592);
(statearr_34660[9] = inst_34593);
(statearr_34660[10] = inst_34591);
(statearr_34660[11] = inst_34590);
return statearr_34660;
})();var statearr_34661_34689 = state_34633__$1;(statearr_34661_34689[2] = null);
(statearr_34661_34689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 18))
{var inst_34604 = (state_34633[13]);var inst_34613 = cljs.core.first.call(null,inst_34604);var state_34633__$1 = state_34633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34633__$1,20,out,inst_34613);
} else
{if((state_val_34634 === 19))
{var inst_34619 = (state_34633[2]);var state_34633__$1 = state_34633;var statearr_34662_34690 = state_34633__$1;(statearr_34662_34690[2] = inst_34619);
(statearr_34662_34690[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34634 === 20))
{var inst_34604 = (state_34633[13]);var inst_34615 = (state_34633[2]);var inst_34616 = cljs.core.next.call(null,inst_34604);var inst_34590 = inst_34616;var inst_34591 = null;var inst_34592 = 0;var inst_34593 = 0;var state_34633__$1 = (function (){var statearr_34663 = state_34633;(statearr_34663[15] = inst_34615);
(statearr_34663[8] = inst_34592);
(statearr_34663[9] = inst_34593);
(statearr_34663[10] = inst_34591);
(statearr_34663[11] = inst_34590);
return statearr_34663;
})();var statearr_34664_34691 = state_34633__$1;(statearr_34664_34691[2] = null);
(statearr_34664_34691[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_34668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34668[0] = state_machine__5507__auto__);
(statearr_34668[1] = 1);
return statearr_34668;
});
var state_machine__5507__auto____1 = (function (state_34633){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34633);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34669){if((e34669 instanceof Object))
{var ex__5510__auto__ = e34669;var statearr_34670_34692 = state_34633;(statearr_34670_34692[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34693 = state_34633;
state_34633 = G__34693;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34633){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34671 = f__5522__auto__.call(null);(statearr_34671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34671;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34774 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34753){var state_val_34754 = (state_34753[1]);if((state_val_34754 === 1))
{var state_34753__$1 = state_34753;var statearr_34755_34775 = state_34753__$1;(statearr_34755_34775[2] = null);
(statearr_34755_34775[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34754 === 2))
{var state_34753__$1 = state_34753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34753__$1,4,from);
} else
{if((state_val_34754 === 3))
{var inst_34751 = (state_34753[2]);var state_34753__$1 = state_34753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34753__$1,inst_34751);
} else
{if((state_val_34754 === 4))
{var inst_34736 = (state_34753[7]);var inst_34736__$1 = (state_34753[2]);var inst_34737 = (inst_34736__$1 == null);var state_34753__$1 = (function (){var statearr_34756 = state_34753;(statearr_34756[7] = inst_34736__$1);
return statearr_34756;
})();if(cljs.core.truth_(inst_34737))
{var statearr_34757_34776 = state_34753__$1;(statearr_34757_34776[1] = 5);
} else
{var statearr_34758_34777 = state_34753__$1;(statearr_34758_34777[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34754 === 5))
{var state_34753__$1 = state_34753;if(cljs.core.truth_(close_QMARK_))
{var statearr_34759_34778 = state_34753__$1;(statearr_34759_34778[1] = 8);
} else
{var statearr_34760_34779 = state_34753__$1;(statearr_34760_34779[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34754 === 6))
{var inst_34736 = (state_34753[7]);var state_34753__$1 = state_34753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34753__$1,11,to,inst_34736);
} else
{if((state_val_34754 === 7))
{var inst_34749 = (state_34753[2]);var state_34753__$1 = state_34753;var statearr_34761_34780 = state_34753__$1;(statearr_34761_34780[2] = inst_34749);
(statearr_34761_34780[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34754 === 8))
{var inst_34740 = cljs.core.async.close_BANG_.call(null,to);var state_34753__$1 = state_34753;var statearr_34762_34781 = state_34753__$1;(statearr_34762_34781[2] = inst_34740);
(statearr_34762_34781[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34754 === 9))
{var state_34753__$1 = state_34753;var statearr_34763_34782 = state_34753__$1;(statearr_34763_34782[2] = null);
(statearr_34763_34782[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34754 === 10))
{var inst_34743 = (state_34753[2]);var state_34753__$1 = state_34753;var statearr_34764_34783 = state_34753__$1;(statearr_34764_34783[2] = inst_34743);
(statearr_34764_34783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34754 === 11))
{var inst_34746 = (state_34753[2]);var state_34753__$1 = (function (){var statearr_34765 = state_34753;(statearr_34765[8] = inst_34746);
return statearr_34765;
})();var statearr_34766_34784 = state_34753__$1;(statearr_34766_34784[2] = null);
(statearr_34766_34784[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34770 = [null,null,null,null,null,null,null,null,null];(statearr_34770[0] = state_machine__5507__auto__);
(statearr_34770[1] = 1);
return statearr_34770;
});
var state_machine__5507__auto____1 = (function (state_34753){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34753);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object))
{var ex__5510__auto__ = e34771;var statearr_34772_34785 = state_34753;(statearr_34772_34785[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34786 = state_34753;
state_34753 = G__34786;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34753){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34773 = f__5522__auto__.call(null);(statearr_34773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34774);
return statearr_34773;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34873 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34851){var state_val_34852 = (state_34851[1]);if((state_val_34852 === 1))
{var state_34851__$1 = state_34851;var statearr_34853_34874 = state_34851__$1;(statearr_34853_34874[2] = null);
(statearr_34853_34874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 2))
{var state_34851__$1 = state_34851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34851__$1,4,ch);
} else
{if((state_val_34852 === 3))
{var inst_34849 = (state_34851[2]);var state_34851__$1 = state_34851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34851__$1,inst_34849);
} else
{if((state_val_34852 === 4))
{var inst_34832 = (state_34851[7]);var inst_34832__$1 = (state_34851[2]);var inst_34833 = (inst_34832__$1 == null);var state_34851__$1 = (function (){var statearr_34854 = state_34851;(statearr_34854[7] = inst_34832__$1);
return statearr_34854;
})();if(cljs.core.truth_(inst_34833))
{var statearr_34855_34875 = state_34851__$1;(statearr_34855_34875[1] = 5);
} else
{var statearr_34856_34876 = state_34851__$1;(statearr_34856_34876[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 5))
{var inst_34835 = cljs.core.async.close_BANG_.call(null,tc);var inst_34836 = cljs.core.async.close_BANG_.call(null,fc);var state_34851__$1 = (function (){var statearr_34857 = state_34851;(statearr_34857[8] = inst_34835);
return statearr_34857;
})();var statearr_34858_34877 = state_34851__$1;(statearr_34858_34877[2] = inst_34836);
(statearr_34858_34877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 6))
{var inst_34832 = (state_34851[7]);var inst_34838 = p.call(null,inst_34832);var state_34851__$1 = state_34851;if(cljs.core.truth_(inst_34838))
{var statearr_34859_34878 = state_34851__$1;(statearr_34859_34878[1] = 9);
} else
{var statearr_34860_34879 = state_34851__$1;(statearr_34860_34879[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 7))
{var inst_34847 = (state_34851[2]);var state_34851__$1 = state_34851;var statearr_34861_34880 = state_34851__$1;(statearr_34861_34880[2] = inst_34847);
(statearr_34861_34880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 8))
{var inst_34844 = (state_34851[2]);var state_34851__$1 = (function (){var statearr_34862 = state_34851;(statearr_34862[9] = inst_34844);
return statearr_34862;
})();var statearr_34863_34881 = state_34851__$1;(statearr_34863_34881[2] = null);
(statearr_34863_34881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 9))
{var state_34851__$1 = state_34851;var statearr_34864_34882 = state_34851__$1;(statearr_34864_34882[2] = tc);
(statearr_34864_34882[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 10))
{var state_34851__$1 = state_34851;var statearr_34865_34883 = state_34851__$1;(statearr_34865_34883[2] = fc);
(statearr_34865_34883[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34852 === 11))
{var inst_34832 = (state_34851[7]);var inst_34842 = (state_34851[2]);var state_34851__$1 = state_34851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34851__$1,8,inst_34842,inst_34832);
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
var state_machine__5507__auto____0 = (function (){var statearr_34869 = [null,null,null,null,null,null,null,null,null,null];(statearr_34869[0] = state_machine__5507__auto__);
(statearr_34869[1] = 1);
return statearr_34869;
});
var state_machine__5507__auto____1 = (function (state_34851){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34851);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34870){if((e34870 instanceof Object))
{var ex__5510__auto__ = e34870;var statearr_34871_34884 = state_34851;(statearr_34871_34884[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34885 = state_34851;
state_34851 = G__34885;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34851){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34872 = f__5522__auto__.call(null);(statearr_34872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34873);
return statearr_34872;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34932){var state_val_34933 = (state_34932[1]);if((state_val_34933 === 7))
{var inst_34928 = (state_34932[2]);var state_34932__$1 = state_34932;var statearr_34934_34950 = state_34932__$1;(statearr_34934_34950[2] = inst_34928);
(statearr_34934_34950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34933 === 6))
{var inst_34921 = (state_34932[7]);var inst_34918 = (state_34932[8]);var inst_34925 = f.call(null,inst_34918,inst_34921);var inst_34918__$1 = inst_34925;var state_34932__$1 = (function (){var statearr_34935 = state_34932;(statearr_34935[8] = inst_34918__$1);
return statearr_34935;
})();var statearr_34936_34951 = state_34932__$1;(statearr_34936_34951[2] = null);
(statearr_34936_34951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34933 === 5))
{var inst_34918 = (state_34932[8]);var state_34932__$1 = state_34932;var statearr_34937_34952 = state_34932__$1;(statearr_34937_34952[2] = inst_34918);
(statearr_34937_34952[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34933 === 4))
{var inst_34921 = (state_34932[7]);var inst_34921__$1 = (state_34932[2]);var inst_34922 = (inst_34921__$1 == null);var state_34932__$1 = (function (){var statearr_34938 = state_34932;(statearr_34938[7] = inst_34921__$1);
return statearr_34938;
})();if(cljs.core.truth_(inst_34922))
{var statearr_34939_34953 = state_34932__$1;(statearr_34939_34953[1] = 5);
} else
{var statearr_34940_34954 = state_34932__$1;(statearr_34940_34954[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34933 === 3))
{var inst_34930 = (state_34932[2]);var state_34932__$1 = state_34932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34932__$1,inst_34930);
} else
{if((state_val_34933 === 2))
{var state_34932__$1 = state_34932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34932__$1,4,ch);
} else
{if((state_val_34933 === 1))
{var inst_34918 = init;var state_34932__$1 = (function (){var statearr_34941 = state_34932;(statearr_34941[8] = inst_34918);
return statearr_34941;
})();var statearr_34942_34955 = state_34932__$1;(statearr_34942_34955[2] = null);
(statearr_34942_34955[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34946 = [null,null,null,null,null,null,null,null,null];(statearr_34946[0] = state_machine__5507__auto__);
(statearr_34946[1] = 1);
return statearr_34946;
});
var state_machine__5507__auto____1 = (function (state_34932){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34932);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34947){if((e34947 instanceof Object))
{var ex__5510__auto__ = e34947;var statearr_34948_34956 = state_34932;(statearr_34948_34956[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34957 = state_34932;
state_34932 = G__34957;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34932){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34949 = f__5522__auto__.call(null);(statearr_34949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34949;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35019){var state_val_35020 = (state_35019[1]);if((state_val_35020 === 1))
{var inst_34999 = cljs.core.seq.call(null,coll);var inst_35000 = inst_34999;var state_35019__$1 = (function (){var statearr_35021 = state_35019;(statearr_35021[7] = inst_35000);
return statearr_35021;
})();var statearr_35022_35040 = state_35019__$1;(statearr_35022_35040[2] = null);
(statearr_35022_35040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35020 === 2))
{var inst_35000 = (state_35019[7]);var state_35019__$1 = state_35019;if(cljs.core.truth_(inst_35000))
{var statearr_35023_35041 = state_35019__$1;(statearr_35023_35041[1] = 4);
} else
{var statearr_35024_35042 = state_35019__$1;(statearr_35024_35042[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35020 === 3))
{var inst_35017 = (state_35019[2]);var state_35019__$1 = state_35019;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35019__$1,inst_35017);
} else
{if((state_val_35020 === 4))
{var inst_35000 = (state_35019[7]);var inst_35003 = cljs.core.first.call(null,inst_35000);var state_35019__$1 = state_35019;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35019__$1,7,ch,inst_35003);
} else
{if((state_val_35020 === 5))
{var state_35019__$1 = state_35019;if(cljs.core.truth_(close_QMARK_))
{var statearr_35025_35043 = state_35019__$1;(statearr_35025_35043[1] = 8);
} else
{var statearr_35026_35044 = state_35019__$1;(statearr_35026_35044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35020 === 6))
{var inst_35015 = (state_35019[2]);var state_35019__$1 = state_35019;var statearr_35027_35045 = state_35019__$1;(statearr_35027_35045[2] = inst_35015);
(statearr_35027_35045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35020 === 7))
{var inst_35000 = (state_35019[7]);var inst_35005 = (state_35019[2]);var inst_35006 = cljs.core.next.call(null,inst_35000);var inst_35000__$1 = inst_35006;var state_35019__$1 = (function (){var statearr_35028 = state_35019;(statearr_35028[8] = inst_35005);
(statearr_35028[7] = inst_35000__$1);
return statearr_35028;
})();var statearr_35029_35046 = state_35019__$1;(statearr_35029_35046[2] = null);
(statearr_35029_35046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35020 === 8))
{var inst_35010 = cljs.core.async.close_BANG_.call(null,ch);var state_35019__$1 = state_35019;var statearr_35030_35047 = state_35019__$1;(statearr_35030_35047[2] = inst_35010);
(statearr_35030_35047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35020 === 9))
{var state_35019__$1 = state_35019;var statearr_35031_35048 = state_35019__$1;(statearr_35031_35048[2] = null);
(statearr_35031_35048[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35020 === 10))
{var inst_35013 = (state_35019[2]);var state_35019__$1 = state_35019;var statearr_35032_35049 = state_35019__$1;(statearr_35032_35049[2] = inst_35013);
(statearr_35032_35049[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35036 = [null,null,null,null,null,null,null,null,null];(statearr_35036[0] = state_machine__5507__auto__);
(statearr_35036[1] = 1);
return statearr_35036;
});
var state_machine__5507__auto____1 = (function (state_35019){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35019);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35037){if((e35037 instanceof Object))
{var ex__5510__auto__ = e35037;var statearr_35038_35050 = state_35019;(statearr_35038_35050[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35019);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35051 = state_35019;
state_35019 = G__35051;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35019){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35039 = f__5522__auto__.call(null);(statearr_35039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35039;
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
cljs.core.async.Mux = (function (){var obj35053 = {};return obj35053;
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
cljs.core.async.Mult = (function (){var obj35055 = {};return obj35055;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35279 = (function (cs,ch,mult,meta35280){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35280 = meta35280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35279.cljs$lang$type = true;
cljs.core.async.t35279.cljs$lang$ctorStr = "cljs.core.async/t35279";
cljs.core.async.t35279.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35279");
});})(cs))
;
cljs.core.async.t35279.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35279.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35279.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35279.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35279.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35281){var self__ = this;
var _35281__$1 = this;return self__.meta35280;
});})(cs))
;
cljs.core.async.t35279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35281,meta35280__$1){var self__ = this;
var _35281__$1 = this;return (new cljs.core.async.t35279(self__.cs,self__.ch,self__.mult,meta35280__$1));
});})(cs))
;
cljs.core.async.__GT_t35279 = ((function (cs){
return (function __GT_t35279(cs__$1,ch__$1,mult__$1,meta35280){return (new cljs.core.async.t35279(cs__$1,ch__$1,mult__$1,meta35280));
});})(cs))
;
}
return (new cljs.core.async.t35279(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___35502 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35416){var state_val_35417 = (state_35416[1]);if((state_val_35417 === 32))
{var inst_35284 = (state_35416[7]);var inst_35360 = (state_35416[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35416,31,Object,null,30);var inst_35367 = cljs.core.async.put_BANG_.call(null,inst_35360,inst_35284,done);var state_35416__$1 = state_35416;var statearr_35418_35503 = state_35416__$1;(statearr_35418_35503[2] = inst_35367);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35416__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 1))
{var state_35416__$1 = state_35416;var statearr_35419_35504 = state_35416__$1;(statearr_35419_35504[2] = null);
(statearr_35419_35504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 33))
{var inst_35373 = (state_35416[9]);var inst_35375 = cljs.core.chunked_seq_QMARK_.call(null,inst_35373);var state_35416__$1 = state_35416;if(inst_35375)
{var statearr_35420_35505 = state_35416__$1;(statearr_35420_35505[1] = 36);
} else
{var statearr_35421_35506 = state_35416__$1;(statearr_35421_35506[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 2))
{var state_35416__$1 = state_35416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35416__$1,4,ch);
} else
{if((state_val_35417 === 34))
{var state_35416__$1 = state_35416;var statearr_35422_35507 = state_35416__$1;(statearr_35422_35507[2] = null);
(statearr_35422_35507[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 3))
{var inst_35414 = (state_35416[2]);var state_35416__$1 = state_35416;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35416__$1,inst_35414);
} else
{if((state_val_35417 === 35))
{var inst_35398 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35423_35508 = state_35416__$1;(statearr_35423_35508[2] = inst_35398);
(statearr_35423_35508[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 4))
{var inst_35284 = (state_35416[7]);var inst_35284__$1 = (state_35416[2]);var inst_35285 = (inst_35284__$1 == null);var state_35416__$1 = (function (){var statearr_35424 = state_35416;(statearr_35424[7] = inst_35284__$1);
return statearr_35424;
})();if(cljs.core.truth_(inst_35285))
{var statearr_35425_35509 = state_35416__$1;(statearr_35425_35509[1] = 5);
} else
{var statearr_35426_35510 = state_35416__$1;(statearr_35426_35510[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 36))
{var inst_35373 = (state_35416[9]);var inst_35377 = cljs.core.chunk_first.call(null,inst_35373);var inst_35378 = cljs.core.chunk_rest.call(null,inst_35373);var inst_35379 = cljs.core.count.call(null,inst_35377);var inst_35352 = inst_35378;var inst_35353 = inst_35377;var inst_35354 = inst_35379;var inst_35355 = 0;var state_35416__$1 = (function (){var statearr_35427 = state_35416;(statearr_35427[10] = inst_35353);
(statearr_35427[11] = inst_35354);
(statearr_35427[12] = inst_35352);
(statearr_35427[13] = inst_35355);
return statearr_35427;
})();var statearr_35428_35511 = state_35416__$1;(statearr_35428_35511[2] = null);
(statearr_35428_35511[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 5))
{var inst_35291 = cljs.core.deref.call(null,cs);var inst_35292 = cljs.core.seq.call(null,inst_35291);var inst_35293 = inst_35292;var inst_35294 = null;var inst_35295 = 0;var inst_35296 = 0;var state_35416__$1 = (function (){var statearr_35429 = state_35416;(statearr_35429[14] = inst_35296);
(statearr_35429[15] = inst_35293);
(statearr_35429[16] = inst_35295);
(statearr_35429[17] = inst_35294);
return statearr_35429;
})();var statearr_35430_35512 = state_35416__$1;(statearr_35430_35512[2] = null);
(statearr_35430_35512[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 37))
{var inst_35373 = (state_35416[9]);var inst_35382 = cljs.core.first.call(null,inst_35373);var state_35416__$1 = (function (){var statearr_35431 = state_35416;(statearr_35431[18] = inst_35382);
return statearr_35431;
})();var statearr_35432_35513 = state_35416__$1;(statearr_35432_35513[2] = null);
(statearr_35432_35513[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 6))
{var inst_35344 = (state_35416[19]);var inst_35343 = cljs.core.deref.call(null,cs);var inst_35344__$1 = cljs.core.keys.call(null,inst_35343);var inst_35345 = cljs.core.count.call(null,inst_35344__$1);var inst_35346 = cljs.core.reset_BANG_.call(null,dctr,inst_35345);var inst_35351 = cljs.core.seq.call(null,inst_35344__$1);var inst_35352 = inst_35351;var inst_35353 = null;var inst_35354 = 0;var inst_35355 = 0;var state_35416__$1 = (function (){var statearr_35433 = state_35416;(statearr_35433[20] = inst_35346);
(statearr_35433[19] = inst_35344__$1);
(statearr_35433[10] = inst_35353);
(statearr_35433[11] = inst_35354);
(statearr_35433[12] = inst_35352);
(statearr_35433[13] = inst_35355);
return statearr_35433;
})();var statearr_35434_35514 = state_35416__$1;(statearr_35434_35514[2] = null);
(statearr_35434_35514[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 38))
{var inst_35395 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35435_35515 = state_35416__$1;(statearr_35435_35515[2] = inst_35395);
(statearr_35435_35515[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 7))
{var inst_35412 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35436_35516 = state_35416__$1;(statearr_35436_35516[2] = inst_35412);
(statearr_35436_35516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 39))
{var inst_35373 = (state_35416[9]);var inst_35391 = (state_35416[2]);var inst_35392 = cljs.core.next.call(null,inst_35373);var inst_35352 = inst_35392;var inst_35353 = null;var inst_35354 = 0;var inst_35355 = 0;var state_35416__$1 = (function (){var statearr_35437 = state_35416;(statearr_35437[10] = inst_35353);
(statearr_35437[11] = inst_35354);
(statearr_35437[12] = inst_35352);
(statearr_35437[21] = inst_35391);
(statearr_35437[13] = inst_35355);
return statearr_35437;
})();var statearr_35438_35517 = state_35416__$1;(statearr_35438_35517[2] = null);
(statearr_35438_35517[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 8))
{var inst_35296 = (state_35416[14]);var inst_35295 = (state_35416[16]);var inst_35298 = (inst_35296 < inst_35295);var inst_35299 = inst_35298;var state_35416__$1 = state_35416;if(cljs.core.truth_(inst_35299))
{var statearr_35439_35518 = state_35416__$1;(statearr_35439_35518[1] = 10);
} else
{var statearr_35440_35519 = state_35416__$1;(statearr_35440_35519[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 40))
{var inst_35382 = (state_35416[18]);var inst_35383 = (state_35416[2]);var inst_35384 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35385 = cljs.core.async.untap_STAR_.call(null,m,inst_35382);var state_35416__$1 = (function (){var statearr_35441 = state_35416;(statearr_35441[22] = inst_35384);
(statearr_35441[23] = inst_35383);
return statearr_35441;
})();var statearr_35442_35520 = state_35416__$1;(statearr_35442_35520[2] = inst_35385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35416__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 9))
{var inst_35341 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35443_35521 = state_35416__$1;(statearr_35443_35521[2] = inst_35341);
(statearr_35443_35521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 41))
{var inst_35382 = (state_35416[18]);var inst_35284 = (state_35416[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35416,40,Object,null,39);var inst_35389 = cljs.core.async.put_BANG_.call(null,inst_35382,inst_35284,done);var state_35416__$1 = state_35416;var statearr_35444_35522 = state_35416__$1;(statearr_35444_35522[2] = inst_35389);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35416__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 10))
{var inst_35296 = (state_35416[14]);var inst_35294 = (state_35416[17]);var inst_35302 = cljs.core._nth.call(null,inst_35294,inst_35296);var inst_35303 = cljs.core.nth.call(null,inst_35302,0,null);var inst_35304 = cljs.core.nth.call(null,inst_35302,1,null);var state_35416__$1 = (function (){var statearr_35445 = state_35416;(statearr_35445[24] = inst_35303);
return statearr_35445;
})();if(cljs.core.truth_(inst_35304))
{var statearr_35446_35523 = state_35416__$1;(statearr_35446_35523[1] = 13);
} else
{var statearr_35447_35524 = state_35416__$1;(statearr_35447_35524[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 42))
{var state_35416__$1 = state_35416;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35416__$1,45,dchan);
} else
{if((state_val_35417 === 11))
{var inst_35293 = (state_35416[15]);var inst_35313 = (state_35416[25]);var inst_35313__$1 = cljs.core.seq.call(null,inst_35293);var state_35416__$1 = (function (){var statearr_35448 = state_35416;(statearr_35448[25] = inst_35313__$1);
return statearr_35448;
})();if(inst_35313__$1)
{var statearr_35449_35525 = state_35416__$1;(statearr_35449_35525[1] = 16);
} else
{var statearr_35450_35526 = state_35416__$1;(statearr_35450_35526[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 43))
{var state_35416__$1 = state_35416;var statearr_35451_35527 = state_35416__$1;(statearr_35451_35527[2] = null);
(statearr_35451_35527[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 12))
{var inst_35339 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35452_35528 = state_35416__$1;(statearr_35452_35528[2] = inst_35339);
(statearr_35452_35528[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 44))
{var inst_35409 = (state_35416[2]);var state_35416__$1 = (function (){var statearr_35453 = state_35416;(statearr_35453[26] = inst_35409);
return statearr_35453;
})();var statearr_35454_35529 = state_35416__$1;(statearr_35454_35529[2] = null);
(statearr_35454_35529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 13))
{var inst_35303 = (state_35416[24]);var inst_35306 = cljs.core.async.close_BANG_.call(null,inst_35303);var state_35416__$1 = state_35416;var statearr_35455_35530 = state_35416__$1;(statearr_35455_35530[2] = inst_35306);
(statearr_35455_35530[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 45))
{var inst_35406 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35459_35531 = state_35416__$1;(statearr_35459_35531[2] = inst_35406);
(statearr_35459_35531[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 14))
{var state_35416__$1 = state_35416;var statearr_35460_35532 = state_35416__$1;(statearr_35460_35532[2] = null);
(statearr_35460_35532[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 15))
{var inst_35296 = (state_35416[14]);var inst_35293 = (state_35416[15]);var inst_35295 = (state_35416[16]);var inst_35294 = (state_35416[17]);var inst_35309 = (state_35416[2]);var inst_35310 = (inst_35296 + 1);var tmp35456 = inst_35293;var tmp35457 = inst_35295;var tmp35458 = inst_35294;var inst_35293__$1 = tmp35456;var inst_35294__$1 = tmp35458;var inst_35295__$1 = tmp35457;var inst_35296__$1 = inst_35310;var state_35416__$1 = (function (){var statearr_35461 = state_35416;(statearr_35461[27] = inst_35309);
(statearr_35461[14] = inst_35296__$1);
(statearr_35461[15] = inst_35293__$1);
(statearr_35461[16] = inst_35295__$1);
(statearr_35461[17] = inst_35294__$1);
return statearr_35461;
})();var statearr_35462_35533 = state_35416__$1;(statearr_35462_35533[2] = null);
(statearr_35462_35533[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 16))
{var inst_35313 = (state_35416[25]);var inst_35315 = cljs.core.chunked_seq_QMARK_.call(null,inst_35313);var state_35416__$1 = state_35416;if(inst_35315)
{var statearr_35463_35534 = state_35416__$1;(statearr_35463_35534[1] = 19);
} else
{var statearr_35464_35535 = state_35416__$1;(statearr_35464_35535[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 17))
{var state_35416__$1 = state_35416;var statearr_35465_35536 = state_35416__$1;(statearr_35465_35536[2] = null);
(statearr_35465_35536[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 18))
{var inst_35337 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35466_35537 = state_35416__$1;(statearr_35466_35537[2] = inst_35337);
(statearr_35466_35537[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 19))
{var inst_35313 = (state_35416[25]);var inst_35317 = cljs.core.chunk_first.call(null,inst_35313);var inst_35318 = cljs.core.chunk_rest.call(null,inst_35313);var inst_35319 = cljs.core.count.call(null,inst_35317);var inst_35293 = inst_35318;var inst_35294 = inst_35317;var inst_35295 = inst_35319;var inst_35296 = 0;var state_35416__$1 = (function (){var statearr_35467 = state_35416;(statearr_35467[14] = inst_35296);
(statearr_35467[15] = inst_35293);
(statearr_35467[16] = inst_35295);
(statearr_35467[17] = inst_35294);
return statearr_35467;
})();var statearr_35468_35538 = state_35416__$1;(statearr_35468_35538[2] = null);
(statearr_35468_35538[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 20))
{var inst_35313 = (state_35416[25]);var inst_35323 = cljs.core.first.call(null,inst_35313);var inst_35324 = cljs.core.nth.call(null,inst_35323,0,null);var inst_35325 = cljs.core.nth.call(null,inst_35323,1,null);var state_35416__$1 = (function (){var statearr_35469 = state_35416;(statearr_35469[28] = inst_35324);
return statearr_35469;
})();if(cljs.core.truth_(inst_35325))
{var statearr_35470_35539 = state_35416__$1;(statearr_35470_35539[1] = 22);
} else
{var statearr_35471_35540 = state_35416__$1;(statearr_35471_35540[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 21))
{var inst_35334 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35472_35541 = state_35416__$1;(statearr_35472_35541[2] = inst_35334);
(statearr_35472_35541[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 22))
{var inst_35324 = (state_35416[28]);var inst_35327 = cljs.core.async.close_BANG_.call(null,inst_35324);var state_35416__$1 = state_35416;var statearr_35473_35542 = state_35416__$1;(statearr_35473_35542[2] = inst_35327);
(statearr_35473_35542[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 23))
{var state_35416__$1 = state_35416;var statearr_35474_35543 = state_35416__$1;(statearr_35474_35543[2] = null);
(statearr_35474_35543[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 24))
{var inst_35313 = (state_35416[25]);var inst_35330 = (state_35416[2]);var inst_35331 = cljs.core.next.call(null,inst_35313);var inst_35293 = inst_35331;var inst_35294 = null;var inst_35295 = 0;var inst_35296 = 0;var state_35416__$1 = (function (){var statearr_35475 = state_35416;(statearr_35475[14] = inst_35296);
(statearr_35475[29] = inst_35330);
(statearr_35475[15] = inst_35293);
(statearr_35475[16] = inst_35295);
(statearr_35475[17] = inst_35294);
return statearr_35475;
})();var statearr_35476_35544 = state_35416__$1;(statearr_35476_35544[2] = null);
(statearr_35476_35544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 25))
{var inst_35354 = (state_35416[11]);var inst_35355 = (state_35416[13]);var inst_35357 = (inst_35355 < inst_35354);var inst_35358 = inst_35357;var state_35416__$1 = state_35416;if(cljs.core.truth_(inst_35358))
{var statearr_35477_35545 = state_35416__$1;(statearr_35477_35545[1] = 27);
} else
{var statearr_35478_35546 = state_35416__$1;(statearr_35478_35546[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 26))
{var inst_35344 = (state_35416[19]);var inst_35402 = (state_35416[2]);var inst_35403 = cljs.core.seq.call(null,inst_35344);var state_35416__$1 = (function (){var statearr_35479 = state_35416;(statearr_35479[30] = inst_35402);
return statearr_35479;
})();if(inst_35403)
{var statearr_35480_35547 = state_35416__$1;(statearr_35480_35547[1] = 42);
} else
{var statearr_35481_35548 = state_35416__$1;(statearr_35481_35548[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 27))
{var inst_35353 = (state_35416[10]);var inst_35355 = (state_35416[13]);var inst_35360 = cljs.core._nth.call(null,inst_35353,inst_35355);var state_35416__$1 = (function (){var statearr_35482 = state_35416;(statearr_35482[8] = inst_35360);
return statearr_35482;
})();var statearr_35483_35549 = state_35416__$1;(statearr_35483_35549[2] = null);
(statearr_35483_35549[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 28))
{var inst_35373 = (state_35416[9]);var inst_35352 = (state_35416[12]);var inst_35373__$1 = cljs.core.seq.call(null,inst_35352);var state_35416__$1 = (function (){var statearr_35487 = state_35416;(statearr_35487[9] = inst_35373__$1);
return statearr_35487;
})();if(inst_35373__$1)
{var statearr_35488_35550 = state_35416__$1;(statearr_35488_35550[1] = 33);
} else
{var statearr_35489_35551 = state_35416__$1;(statearr_35489_35551[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 29))
{var inst_35400 = (state_35416[2]);var state_35416__$1 = state_35416;var statearr_35490_35552 = state_35416__$1;(statearr_35490_35552[2] = inst_35400);
(statearr_35490_35552[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 30))
{var inst_35353 = (state_35416[10]);var inst_35354 = (state_35416[11]);var inst_35352 = (state_35416[12]);var inst_35355 = (state_35416[13]);var inst_35369 = (state_35416[2]);var inst_35370 = (inst_35355 + 1);var tmp35484 = inst_35353;var tmp35485 = inst_35354;var tmp35486 = inst_35352;var inst_35352__$1 = tmp35486;var inst_35353__$1 = tmp35484;var inst_35354__$1 = tmp35485;var inst_35355__$1 = inst_35370;var state_35416__$1 = (function (){var statearr_35491 = state_35416;(statearr_35491[10] = inst_35353__$1);
(statearr_35491[11] = inst_35354__$1);
(statearr_35491[12] = inst_35352__$1);
(statearr_35491[31] = inst_35369);
(statearr_35491[13] = inst_35355__$1);
return statearr_35491;
})();var statearr_35492_35553 = state_35416__$1;(statearr_35492_35553[2] = null);
(statearr_35492_35553[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35417 === 31))
{var inst_35360 = (state_35416[8]);var inst_35361 = (state_35416[2]);var inst_35362 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35363 = cljs.core.async.untap_STAR_.call(null,m,inst_35360);var state_35416__$1 = (function (){var statearr_35493 = state_35416;(statearr_35493[32] = inst_35362);
(statearr_35493[33] = inst_35361);
return statearr_35493;
})();var statearr_35494_35554 = state_35416__$1;(statearr_35494_35554[2] = inst_35363);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35416__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35498[0] = state_machine__5507__auto__);
(statearr_35498[1] = 1);
return statearr_35498;
});
var state_machine__5507__auto____1 = (function (state_35416){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35416);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35499){if((e35499 instanceof Object))
{var ex__5510__auto__ = e35499;var statearr_35500_35555 = state_35416;(statearr_35500_35555[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35416);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35556 = state_35416;
state_35416 = G__35556;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35416){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35501 = f__5522__auto__.call(null);(statearr_35501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35502);
return statearr_35501;
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
cljs.core.async.Mix = (function (){var obj35558 = {};return obj35558;
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
;var m = (function (){if(typeof cljs.core.async.t35668 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35668 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35669){
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
this.meta35669 = meta35669;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35668.cljs$lang$type = true;
cljs.core.async.t35668.cljs$lang$ctorStr = "cljs.core.async/t35668";
cljs.core.async.t35668.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35668");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35668.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35668.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35670){var self__ = this;
var _35670__$1 = this;return self__.meta35669;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35670,meta35669__$1){var self__ = this;
var _35670__$1 = this;return (new cljs.core.async.t35668(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35669__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35668 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35668(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35669){return (new cljs.core.async.t35668(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35669));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35668(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35777 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35735){var state_val_35736 = (state_35735[1]);if((state_val_35736 === 1))
{var inst_35674 = (state_35735[7]);var inst_35674__$1 = calc_state.call(null);var inst_35675 = cljs.core.seq_QMARK_.call(null,inst_35674__$1);var state_35735__$1 = (function (){var statearr_35737 = state_35735;(statearr_35737[7] = inst_35674__$1);
return statearr_35737;
})();if(inst_35675)
{var statearr_35738_35778 = state_35735__$1;(statearr_35738_35778[1] = 2);
} else
{var statearr_35739_35779 = state_35735__$1;(statearr_35739_35779[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 2))
{var inst_35674 = (state_35735[7]);var inst_35677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35674);var state_35735__$1 = state_35735;var statearr_35740_35780 = state_35735__$1;(statearr_35740_35780[2] = inst_35677);
(statearr_35740_35780[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 3))
{var inst_35674 = (state_35735[7]);var state_35735__$1 = state_35735;var statearr_35741_35781 = state_35735__$1;(statearr_35741_35781[2] = inst_35674);
(statearr_35741_35781[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 4))
{var inst_35674 = (state_35735[7]);var inst_35680 = (state_35735[2]);var inst_35681 = cljs.core.get.call(null,inst_35680,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35682 = cljs.core.get.call(null,inst_35680,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35683 = cljs.core.get.call(null,inst_35680,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35684 = inst_35674;var state_35735__$1 = (function (){var statearr_35742 = state_35735;(statearr_35742[8] = inst_35683);
(statearr_35742[9] = inst_35684);
(statearr_35742[10] = inst_35681);
(statearr_35742[11] = inst_35682);
return statearr_35742;
})();var statearr_35743_35782 = state_35735__$1;(statearr_35743_35782[2] = null);
(statearr_35743_35782[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 5))
{var inst_35684 = (state_35735[9]);var inst_35687 = cljs.core.seq_QMARK_.call(null,inst_35684);var state_35735__$1 = state_35735;if(inst_35687)
{var statearr_35744_35783 = state_35735__$1;(statearr_35744_35783[1] = 7);
} else
{var statearr_35745_35784 = state_35735__$1;(statearr_35745_35784[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 6))
{var inst_35733 = (state_35735[2]);var state_35735__$1 = state_35735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35735__$1,inst_35733);
} else
{if((state_val_35736 === 7))
{var inst_35684 = (state_35735[9]);var inst_35689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35684);var state_35735__$1 = state_35735;var statearr_35746_35785 = state_35735__$1;(statearr_35746_35785[2] = inst_35689);
(statearr_35746_35785[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 8))
{var inst_35684 = (state_35735[9]);var state_35735__$1 = state_35735;var statearr_35747_35786 = state_35735__$1;(statearr_35747_35786[2] = inst_35684);
(statearr_35747_35786[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 9))
{var inst_35692 = (state_35735[12]);var inst_35692__$1 = (state_35735[2]);var inst_35693 = cljs.core.get.call(null,inst_35692__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35694 = cljs.core.get.call(null,inst_35692__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35695 = cljs.core.get.call(null,inst_35692__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35735__$1 = (function (){var statearr_35748 = state_35735;(statearr_35748[13] = inst_35694);
(statearr_35748[14] = inst_35695);
(statearr_35748[12] = inst_35692__$1);
return statearr_35748;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35735__$1,10,inst_35693);
} else
{if((state_val_35736 === 10))
{var inst_35699 = (state_35735[15]);var inst_35700 = (state_35735[16]);var inst_35698 = (state_35735[2]);var inst_35699__$1 = cljs.core.nth.call(null,inst_35698,0,null);var inst_35700__$1 = cljs.core.nth.call(null,inst_35698,1,null);var inst_35701 = (inst_35699__$1 == null);var inst_35702 = cljs.core._EQ_.call(null,inst_35700__$1,change);var inst_35703 = (inst_35701) || (inst_35702);var state_35735__$1 = (function (){var statearr_35749 = state_35735;(statearr_35749[15] = inst_35699__$1);
(statearr_35749[16] = inst_35700__$1);
return statearr_35749;
})();if(cljs.core.truth_(inst_35703))
{var statearr_35750_35787 = state_35735__$1;(statearr_35750_35787[1] = 11);
} else
{var statearr_35751_35788 = state_35735__$1;(statearr_35751_35788[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 11))
{var inst_35699 = (state_35735[15]);var inst_35705 = (inst_35699 == null);var state_35735__$1 = state_35735;if(cljs.core.truth_(inst_35705))
{var statearr_35752_35789 = state_35735__$1;(statearr_35752_35789[1] = 14);
} else
{var statearr_35753_35790 = state_35735__$1;(statearr_35753_35790[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 12))
{var inst_35695 = (state_35735[14]);var inst_35714 = (state_35735[17]);var inst_35700 = (state_35735[16]);var inst_35714__$1 = inst_35695.call(null,inst_35700);var state_35735__$1 = (function (){var statearr_35754 = state_35735;(statearr_35754[17] = inst_35714__$1);
return statearr_35754;
})();if(cljs.core.truth_(inst_35714__$1))
{var statearr_35755_35791 = state_35735__$1;(statearr_35755_35791[1] = 17);
} else
{var statearr_35756_35792 = state_35735__$1;(statearr_35756_35792[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 13))
{var inst_35731 = (state_35735[2]);var state_35735__$1 = state_35735;var statearr_35757_35793 = state_35735__$1;(statearr_35757_35793[2] = inst_35731);
(statearr_35757_35793[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 14))
{var inst_35700 = (state_35735[16]);var inst_35707 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35700);var state_35735__$1 = state_35735;var statearr_35758_35794 = state_35735__$1;(statearr_35758_35794[2] = inst_35707);
(statearr_35758_35794[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 15))
{var state_35735__$1 = state_35735;var statearr_35759_35795 = state_35735__$1;(statearr_35759_35795[2] = null);
(statearr_35759_35795[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 16))
{var inst_35710 = (state_35735[2]);var inst_35711 = calc_state.call(null);var inst_35684 = inst_35711;var state_35735__$1 = (function (){var statearr_35760 = state_35735;(statearr_35760[9] = inst_35684);
(statearr_35760[18] = inst_35710);
return statearr_35760;
})();var statearr_35761_35796 = state_35735__$1;(statearr_35761_35796[2] = null);
(statearr_35761_35796[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 17))
{var inst_35714 = (state_35735[17]);var state_35735__$1 = state_35735;var statearr_35762_35797 = state_35735__$1;(statearr_35762_35797[2] = inst_35714);
(statearr_35762_35797[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 18))
{var inst_35694 = (state_35735[13]);var inst_35695 = (state_35735[14]);var inst_35700 = (state_35735[16]);var inst_35717 = cljs.core.empty_QMARK_.call(null,inst_35695);var inst_35718 = inst_35694.call(null,inst_35700);var inst_35719 = cljs.core.not.call(null,inst_35718);var inst_35720 = (inst_35717) && (inst_35719);var state_35735__$1 = state_35735;var statearr_35763_35798 = state_35735__$1;(statearr_35763_35798[2] = inst_35720);
(statearr_35763_35798[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 19))
{var inst_35722 = (state_35735[2]);var state_35735__$1 = state_35735;if(cljs.core.truth_(inst_35722))
{var statearr_35764_35799 = state_35735__$1;(statearr_35764_35799[1] = 20);
} else
{var statearr_35765_35800 = state_35735__$1;(statearr_35765_35800[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 20))
{var inst_35699 = (state_35735[15]);var state_35735__$1 = state_35735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35735__$1,23,out,inst_35699);
} else
{if((state_val_35736 === 21))
{var state_35735__$1 = state_35735;var statearr_35766_35801 = state_35735__$1;(statearr_35766_35801[2] = null);
(statearr_35766_35801[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 22))
{var inst_35692 = (state_35735[12]);var inst_35728 = (state_35735[2]);var inst_35684 = inst_35692;var state_35735__$1 = (function (){var statearr_35767 = state_35735;(statearr_35767[19] = inst_35728);
(statearr_35767[9] = inst_35684);
return statearr_35767;
})();var statearr_35768_35802 = state_35735__$1;(statearr_35768_35802[2] = null);
(statearr_35768_35802[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35736 === 23))
{var inst_35725 = (state_35735[2]);var state_35735__$1 = state_35735;var statearr_35769_35803 = state_35735__$1;(statearr_35769_35803[2] = inst_35725);
(statearr_35769_35803[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_35773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35773[0] = state_machine__5507__auto__);
(statearr_35773[1] = 1);
return statearr_35773;
});
var state_machine__5507__auto____1 = (function (state_35735){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35735);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35774){if((e35774 instanceof Object))
{var ex__5510__auto__ = e35774;var statearr_35775_35804 = state_35735;(statearr_35775_35804[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35735);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35774;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35805 = state_35735;
state_35735 = G__35805;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35735){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35776 = f__5522__auto__.call(null);(statearr_35776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35777);
return statearr_35776;
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
cljs.core.async.Pub = (function (){var obj35807 = {};return obj35807;
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
return (function (p1__35808_SHARP_){if(cljs.core.truth_(p1__35808_SHARP_.call(null,topic)))
{return p1__35808_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35808_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35933 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35934){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35934 = meta35934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35933.cljs$lang$type = true;
cljs.core.async.t35933.cljs$lang$ctorStr = "cljs.core.async/t35933";
cljs.core.async.t35933.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35933");
});})(mults,ensure_mult))
;
cljs.core.async.t35933.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35933.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35933.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35933.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35933.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35935){var self__ = this;
var _35935__$1 = this;return self__.meta35934;
});})(mults,ensure_mult))
;
cljs.core.async.t35933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35935,meta35934__$1){var self__ = this;
var _35935__$1 = this;return (new cljs.core.async.t35933(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35934__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35933 = ((function (mults,ensure_mult){
return (function __GT_t35933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35934){return (new cljs.core.async.t35933(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35934));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35933(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36057 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36009){var state_val_36010 = (state_36009[1]);if((state_val_36010 === 1))
{var state_36009__$1 = state_36009;var statearr_36011_36058 = state_36009__$1;(statearr_36011_36058[2] = null);
(statearr_36011_36058[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 2))
{var state_36009__$1 = state_36009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36009__$1,4,ch);
} else
{if((state_val_36010 === 3))
{var inst_36007 = (state_36009[2]);var state_36009__$1 = state_36009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36009__$1,inst_36007);
} else
{if((state_val_36010 === 4))
{var inst_35938 = (state_36009[7]);var inst_35938__$1 = (state_36009[2]);var inst_35939 = (inst_35938__$1 == null);var state_36009__$1 = (function (){var statearr_36012 = state_36009;(statearr_36012[7] = inst_35938__$1);
return statearr_36012;
})();if(cljs.core.truth_(inst_35939))
{var statearr_36013_36059 = state_36009__$1;(statearr_36013_36059[1] = 5);
} else
{var statearr_36014_36060 = state_36009__$1;(statearr_36014_36060[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 5))
{var inst_35945 = cljs.core.deref.call(null,mults);var inst_35946 = cljs.core.vals.call(null,inst_35945);var inst_35947 = cljs.core.seq.call(null,inst_35946);var inst_35948 = inst_35947;var inst_35949 = null;var inst_35950 = 0;var inst_35951 = 0;var state_36009__$1 = (function (){var statearr_36015 = state_36009;(statearr_36015[8] = inst_35949);
(statearr_36015[9] = inst_35948);
(statearr_36015[10] = inst_35951);
(statearr_36015[11] = inst_35950);
return statearr_36015;
})();var statearr_36016_36061 = state_36009__$1;(statearr_36016_36061[2] = null);
(statearr_36016_36061[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 6))
{var inst_35938 = (state_36009[7]);var inst_35986 = (state_36009[12]);var inst_35988 = (state_36009[13]);var inst_35986__$1 = topic_fn.call(null,inst_35938);var inst_35987 = cljs.core.deref.call(null,mults);var inst_35988__$1 = cljs.core.get.call(null,inst_35987,inst_35986__$1);var state_36009__$1 = (function (){var statearr_36017 = state_36009;(statearr_36017[12] = inst_35986__$1);
(statearr_36017[13] = inst_35988__$1);
return statearr_36017;
})();if(cljs.core.truth_(inst_35988__$1))
{var statearr_36018_36062 = state_36009__$1;(statearr_36018_36062[1] = 19);
} else
{var statearr_36019_36063 = state_36009__$1;(statearr_36019_36063[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 7))
{var inst_36005 = (state_36009[2]);var state_36009__$1 = state_36009;var statearr_36020_36064 = state_36009__$1;(statearr_36020_36064[2] = inst_36005);
(statearr_36020_36064[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 8))
{var inst_35951 = (state_36009[10]);var inst_35950 = (state_36009[11]);var inst_35953 = (inst_35951 < inst_35950);var inst_35954 = inst_35953;var state_36009__$1 = state_36009;if(cljs.core.truth_(inst_35954))
{var statearr_36024_36065 = state_36009__$1;(statearr_36024_36065[1] = 10);
} else
{var statearr_36025_36066 = state_36009__$1;(statearr_36025_36066[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 9))
{var inst_35984 = (state_36009[2]);var state_36009__$1 = state_36009;var statearr_36026_36067 = state_36009__$1;(statearr_36026_36067[2] = inst_35984);
(statearr_36026_36067[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 10))
{var inst_35949 = (state_36009[8]);var inst_35948 = (state_36009[9]);var inst_35951 = (state_36009[10]);var inst_35950 = (state_36009[11]);var inst_35956 = cljs.core._nth.call(null,inst_35949,inst_35951);var inst_35957 = cljs.core.async.muxch_STAR_.call(null,inst_35956);var inst_35958 = cljs.core.async.close_BANG_.call(null,inst_35957);var inst_35959 = (inst_35951 + 1);var tmp36021 = inst_35949;var tmp36022 = inst_35948;var tmp36023 = inst_35950;var inst_35948__$1 = tmp36022;var inst_35949__$1 = tmp36021;var inst_35950__$1 = tmp36023;var inst_35951__$1 = inst_35959;var state_36009__$1 = (function (){var statearr_36027 = state_36009;(statearr_36027[8] = inst_35949__$1);
(statearr_36027[9] = inst_35948__$1);
(statearr_36027[14] = inst_35958);
(statearr_36027[10] = inst_35951__$1);
(statearr_36027[11] = inst_35950__$1);
return statearr_36027;
})();var statearr_36028_36068 = state_36009__$1;(statearr_36028_36068[2] = null);
(statearr_36028_36068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 11))
{var inst_35948 = (state_36009[9]);var inst_35962 = (state_36009[15]);var inst_35962__$1 = cljs.core.seq.call(null,inst_35948);var state_36009__$1 = (function (){var statearr_36029 = state_36009;(statearr_36029[15] = inst_35962__$1);
return statearr_36029;
})();if(inst_35962__$1)
{var statearr_36030_36069 = state_36009__$1;(statearr_36030_36069[1] = 13);
} else
{var statearr_36031_36070 = state_36009__$1;(statearr_36031_36070[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 12))
{var inst_35982 = (state_36009[2]);var state_36009__$1 = state_36009;var statearr_36032_36071 = state_36009__$1;(statearr_36032_36071[2] = inst_35982);
(statearr_36032_36071[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 13))
{var inst_35962 = (state_36009[15]);var inst_35964 = cljs.core.chunked_seq_QMARK_.call(null,inst_35962);var state_36009__$1 = state_36009;if(inst_35964)
{var statearr_36033_36072 = state_36009__$1;(statearr_36033_36072[1] = 16);
} else
{var statearr_36034_36073 = state_36009__$1;(statearr_36034_36073[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 14))
{var state_36009__$1 = state_36009;var statearr_36035_36074 = state_36009__$1;(statearr_36035_36074[2] = null);
(statearr_36035_36074[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 15))
{var inst_35980 = (state_36009[2]);var state_36009__$1 = state_36009;var statearr_36036_36075 = state_36009__$1;(statearr_36036_36075[2] = inst_35980);
(statearr_36036_36075[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 16))
{var inst_35962 = (state_36009[15]);var inst_35966 = cljs.core.chunk_first.call(null,inst_35962);var inst_35967 = cljs.core.chunk_rest.call(null,inst_35962);var inst_35968 = cljs.core.count.call(null,inst_35966);var inst_35948 = inst_35967;var inst_35949 = inst_35966;var inst_35950 = inst_35968;var inst_35951 = 0;var state_36009__$1 = (function (){var statearr_36037 = state_36009;(statearr_36037[8] = inst_35949);
(statearr_36037[9] = inst_35948);
(statearr_36037[10] = inst_35951);
(statearr_36037[11] = inst_35950);
return statearr_36037;
})();var statearr_36038_36076 = state_36009__$1;(statearr_36038_36076[2] = null);
(statearr_36038_36076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 17))
{var inst_35962 = (state_36009[15]);var inst_35971 = cljs.core.first.call(null,inst_35962);var inst_35972 = cljs.core.async.muxch_STAR_.call(null,inst_35971);var inst_35973 = cljs.core.async.close_BANG_.call(null,inst_35972);var inst_35974 = cljs.core.next.call(null,inst_35962);var inst_35948 = inst_35974;var inst_35949 = null;var inst_35950 = 0;var inst_35951 = 0;var state_36009__$1 = (function (){var statearr_36039 = state_36009;(statearr_36039[8] = inst_35949);
(statearr_36039[9] = inst_35948);
(statearr_36039[16] = inst_35973);
(statearr_36039[10] = inst_35951);
(statearr_36039[11] = inst_35950);
return statearr_36039;
})();var statearr_36040_36077 = state_36009__$1;(statearr_36040_36077[2] = null);
(statearr_36040_36077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 18))
{var inst_35977 = (state_36009[2]);var state_36009__$1 = state_36009;var statearr_36041_36078 = state_36009__$1;(statearr_36041_36078[2] = inst_35977);
(statearr_36041_36078[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 19))
{var state_36009__$1 = state_36009;var statearr_36042_36079 = state_36009__$1;(statearr_36042_36079[2] = null);
(statearr_36042_36079[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 20))
{var state_36009__$1 = state_36009;var statearr_36043_36080 = state_36009__$1;(statearr_36043_36080[2] = null);
(statearr_36043_36080[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 21))
{var inst_36002 = (state_36009[2]);var state_36009__$1 = (function (){var statearr_36044 = state_36009;(statearr_36044[17] = inst_36002);
return statearr_36044;
})();var statearr_36045_36081 = state_36009__$1;(statearr_36045_36081[2] = null);
(statearr_36045_36081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 22))
{var inst_35999 = (state_36009[2]);var state_36009__$1 = state_36009;var statearr_36046_36082 = state_36009__$1;(statearr_36046_36082[2] = inst_35999);
(statearr_36046_36082[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 23))
{var inst_35986 = (state_36009[12]);var inst_35990 = (state_36009[2]);var inst_35991 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35986);var state_36009__$1 = (function (){var statearr_36047 = state_36009;(statearr_36047[18] = inst_35990);
return statearr_36047;
})();var statearr_36048_36083 = state_36009__$1;(statearr_36048_36083[2] = inst_35991);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36009__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36010 === 24))
{var inst_35938 = (state_36009[7]);var inst_35988 = (state_36009[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36009,23,Object,null,22);var inst_35995 = cljs.core.async.muxch_STAR_.call(null,inst_35988);var state_36009__$1 = state_36009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36009__$1,25,inst_35995,inst_35938);
} else
{if((state_val_36010 === 25))
{var inst_35997 = (state_36009[2]);var state_36009__$1 = state_36009;var statearr_36049_36084 = state_36009__$1;(statearr_36049_36084[2] = inst_35997);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36009__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36053[0] = state_machine__5507__auto__);
(statearr_36053[1] = 1);
return statearr_36053;
});
var state_machine__5507__auto____1 = (function (state_36009){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36009);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36054){if((e36054 instanceof Object))
{var ex__5510__auto__ = e36054;var statearr_36055_36085 = state_36009;(statearr_36055_36085[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36086 = state_36009;
state_36009 = G__36086;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36009){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36056 = f__5522__auto__.call(null);(statearr_36056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36057);
return statearr_36056;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36193){var state_val_36194 = (state_36193[1]);if((state_val_36194 === 1))
{var state_36193__$1 = state_36193;var statearr_36195_36224 = state_36193__$1;(statearr_36195_36224[2] = null);
(statearr_36195_36224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 2))
{var inst_36156 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36157 = 0;var state_36193__$1 = (function (){var statearr_36196 = state_36193;(statearr_36196[7] = inst_36156);
(statearr_36196[8] = inst_36157);
return statearr_36196;
})();var statearr_36197_36225 = state_36193__$1;(statearr_36197_36225[2] = null);
(statearr_36197_36225[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 3))
{var inst_36191 = (state_36193[2]);var state_36193__$1 = state_36193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36193__$1,inst_36191);
} else
{if((state_val_36194 === 4))
{var inst_36157 = (state_36193[8]);var inst_36159 = (inst_36157 < cnt);var state_36193__$1 = state_36193;if(cljs.core.truth_(inst_36159))
{var statearr_36198_36226 = state_36193__$1;(statearr_36198_36226[1] = 6);
} else
{var statearr_36199_36227 = state_36193__$1;(statearr_36199_36227[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 5))
{var inst_36177 = (state_36193[2]);var state_36193__$1 = (function (){var statearr_36200 = state_36193;(statearr_36200[9] = inst_36177);
return statearr_36200;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36193__$1,12,dchan);
} else
{if((state_val_36194 === 6))
{var state_36193__$1 = state_36193;var statearr_36201_36228 = state_36193__$1;(statearr_36201_36228[2] = null);
(statearr_36201_36228[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 7))
{var state_36193__$1 = state_36193;var statearr_36202_36229 = state_36193__$1;(statearr_36202_36229[2] = null);
(statearr_36202_36229[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 8))
{var inst_36175 = (state_36193[2]);var state_36193__$1 = state_36193;var statearr_36203_36230 = state_36193__$1;(statearr_36203_36230[2] = inst_36175);
(statearr_36203_36230[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 9))
{var inst_36157 = (state_36193[8]);var inst_36170 = (state_36193[2]);var inst_36171 = (inst_36157 + 1);var inst_36157__$1 = inst_36171;var state_36193__$1 = (function (){var statearr_36204 = state_36193;(statearr_36204[10] = inst_36170);
(statearr_36204[8] = inst_36157__$1);
return statearr_36204;
})();var statearr_36205_36231 = state_36193__$1;(statearr_36205_36231[2] = null);
(statearr_36205_36231[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 10))
{var inst_36161 = (state_36193[2]);var inst_36162 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36193__$1 = (function (){var statearr_36206 = state_36193;(statearr_36206[11] = inst_36161);
return statearr_36206;
})();var statearr_36207_36232 = state_36193__$1;(statearr_36207_36232[2] = inst_36162);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 11))
{var inst_36157 = (state_36193[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36193,10,Object,null,9);var inst_36166 = chs__$1.call(null,inst_36157);var inst_36167 = done.call(null,inst_36157);var inst_36168 = cljs.core.async.take_BANG_.call(null,inst_36166,inst_36167);var state_36193__$1 = state_36193;var statearr_36208_36233 = state_36193__$1;(statearr_36208_36233[2] = inst_36168);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36193__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 12))
{var inst_36179 = (state_36193[12]);var inst_36179__$1 = (state_36193[2]);var inst_36180 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36179__$1);var state_36193__$1 = (function (){var statearr_36209 = state_36193;(statearr_36209[12] = inst_36179__$1);
return statearr_36209;
})();if(cljs.core.truth_(inst_36180))
{var statearr_36210_36234 = state_36193__$1;(statearr_36210_36234[1] = 13);
} else
{var statearr_36211_36235 = state_36193__$1;(statearr_36211_36235[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 13))
{var inst_36182 = cljs.core.async.close_BANG_.call(null,out);var state_36193__$1 = state_36193;var statearr_36212_36236 = state_36193__$1;(statearr_36212_36236[2] = inst_36182);
(statearr_36212_36236[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 14))
{var inst_36179 = (state_36193[12]);var inst_36184 = cljs.core.apply.call(null,f,inst_36179);var state_36193__$1 = state_36193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36193__$1,16,out,inst_36184);
} else
{if((state_val_36194 === 15))
{var inst_36189 = (state_36193[2]);var state_36193__$1 = state_36193;var statearr_36213_36237 = state_36193__$1;(statearr_36213_36237[2] = inst_36189);
(statearr_36213_36237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36194 === 16))
{var inst_36186 = (state_36193[2]);var state_36193__$1 = (function (){var statearr_36214 = state_36193;(statearr_36214[13] = inst_36186);
return statearr_36214;
})();var statearr_36215_36238 = state_36193__$1;(statearr_36215_36238[2] = null);
(statearr_36215_36238[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36219[0] = state_machine__5507__auto__);
(statearr_36219[1] = 1);
return statearr_36219;
});
var state_machine__5507__auto____1 = (function (state_36193){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36193);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36220){if((e36220 instanceof Object))
{var ex__5510__auto__ = e36220;var statearr_36221_36239 = state_36193;(statearr_36221_36239[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36240 = state_36193;
state_36193 = G__36240;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36193){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36222 = f__5522__auto__.call(null);(statearr_36222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36223);
return statearr_36222;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36324){var state_val_36325 = (state_36324[1]);if((state_val_36325 === 1))
{var inst_36295 = cljs.core.vec.call(null,chs);var inst_36296 = inst_36295;var state_36324__$1 = (function (){var statearr_36326 = state_36324;(statearr_36326[7] = inst_36296);
return statearr_36326;
})();var statearr_36327_36349 = state_36324__$1;(statearr_36327_36349[2] = null);
(statearr_36327_36349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36325 === 2))
{var inst_36296 = (state_36324[7]);var inst_36298 = cljs.core.count.call(null,inst_36296);var inst_36299 = (inst_36298 > 0);var state_36324__$1 = state_36324;if(cljs.core.truth_(inst_36299))
{var statearr_36328_36350 = state_36324__$1;(statearr_36328_36350[1] = 4);
} else
{var statearr_36329_36351 = state_36324__$1;(statearr_36329_36351[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36325 === 3))
{var inst_36322 = (state_36324[2]);var state_36324__$1 = state_36324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36324__$1,inst_36322);
} else
{if((state_val_36325 === 4))
{var inst_36296 = (state_36324[7]);var state_36324__$1 = state_36324;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36324__$1,7,inst_36296);
} else
{if((state_val_36325 === 5))
{var inst_36318 = cljs.core.async.close_BANG_.call(null,out);var state_36324__$1 = state_36324;var statearr_36330_36352 = state_36324__$1;(statearr_36330_36352[2] = inst_36318);
(statearr_36330_36352[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36325 === 6))
{var inst_36320 = (state_36324[2]);var state_36324__$1 = state_36324;var statearr_36331_36353 = state_36324__$1;(statearr_36331_36353[2] = inst_36320);
(statearr_36331_36353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36325 === 7))
{var inst_36304 = (state_36324[8]);var inst_36303 = (state_36324[9]);var inst_36303__$1 = (state_36324[2]);var inst_36304__$1 = cljs.core.nth.call(null,inst_36303__$1,0,null);var inst_36305 = cljs.core.nth.call(null,inst_36303__$1,1,null);var inst_36306 = (inst_36304__$1 == null);var state_36324__$1 = (function (){var statearr_36332 = state_36324;(statearr_36332[10] = inst_36305);
(statearr_36332[8] = inst_36304__$1);
(statearr_36332[9] = inst_36303__$1);
return statearr_36332;
})();if(cljs.core.truth_(inst_36306))
{var statearr_36333_36354 = state_36324__$1;(statearr_36333_36354[1] = 8);
} else
{var statearr_36334_36355 = state_36324__$1;(statearr_36334_36355[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36325 === 8))
{var inst_36305 = (state_36324[10]);var inst_36304 = (state_36324[8]);var inst_36303 = (state_36324[9]);var inst_36296 = (state_36324[7]);var inst_36308 = (function (){var c = inst_36305;var v = inst_36304;var vec__36301 = inst_36303;var cs = inst_36296;return ((function (c,v,vec__36301,cs,inst_36305,inst_36304,inst_36303,inst_36296,state_val_36325){
return (function (p1__36241_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36241_SHARP_);
});
;})(c,v,vec__36301,cs,inst_36305,inst_36304,inst_36303,inst_36296,state_val_36325))
})();var inst_36309 = cljs.core.filterv.call(null,inst_36308,inst_36296);var inst_36296__$1 = inst_36309;var state_36324__$1 = (function (){var statearr_36335 = state_36324;(statearr_36335[7] = inst_36296__$1);
return statearr_36335;
})();var statearr_36336_36356 = state_36324__$1;(statearr_36336_36356[2] = null);
(statearr_36336_36356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36325 === 9))
{var inst_36304 = (state_36324[8]);var state_36324__$1 = state_36324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36324__$1,11,out,inst_36304);
} else
{if((state_val_36325 === 10))
{var inst_36316 = (state_36324[2]);var state_36324__$1 = state_36324;var statearr_36338_36357 = state_36324__$1;(statearr_36338_36357[2] = inst_36316);
(statearr_36338_36357[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36325 === 11))
{var inst_36296 = (state_36324[7]);var inst_36313 = (state_36324[2]);var tmp36337 = inst_36296;var inst_36296__$1 = tmp36337;var state_36324__$1 = (function (){var statearr_36339 = state_36324;(statearr_36339[11] = inst_36313);
(statearr_36339[7] = inst_36296__$1);
return statearr_36339;
})();var statearr_36340_36358 = state_36324__$1;(statearr_36340_36358[2] = null);
(statearr_36340_36358[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36344 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36344[0] = state_machine__5507__auto__);
(statearr_36344[1] = 1);
return statearr_36344;
});
var state_machine__5507__auto____1 = (function (state_36324){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36324);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36345){if((e36345 instanceof Object))
{var ex__5510__auto__ = e36345;var statearr_36346_36359 = state_36324;(statearr_36346_36359[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36360 = state_36324;
state_36324 = G__36360;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36324){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36347 = f__5522__auto__.call(null);(statearr_36347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36348);
return statearr_36347;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36453 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36430){var state_val_36431 = (state_36430[1]);if((state_val_36431 === 1))
{var inst_36407 = 0;var state_36430__$1 = (function (){var statearr_36432 = state_36430;(statearr_36432[7] = inst_36407);
return statearr_36432;
})();var statearr_36433_36454 = state_36430__$1;(statearr_36433_36454[2] = null);
(statearr_36433_36454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36431 === 2))
{var inst_36407 = (state_36430[7]);var inst_36409 = (inst_36407 < n);var state_36430__$1 = state_36430;if(cljs.core.truth_(inst_36409))
{var statearr_36434_36455 = state_36430__$1;(statearr_36434_36455[1] = 4);
} else
{var statearr_36435_36456 = state_36430__$1;(statearr_36435_36456[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36431 === 3))
{var inst_36427 = (state_36430[2]);var inst_36428 = cljs.core.async.close_BANG_.call(null,out);var state_36430__$1 = (function (){var statearr_36436 = state_36430;(statearr_36436[8] = inst_36427);
return statearr_36436;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36430__$1,inst_36428);
} else
{if((state_val_36431 === 4))
{var state_36430__$1 = state_36430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36430__$1,7,ch);
} else
{if((state_val_36431 === 5))
{var state_36430__$1 = state_36430;var statearr_36437_36457 = state_36430__$1;(statearr_36437_36457[2] = null);
(statearr_36437_36457[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36431 === 6))
{var inst_36425 = (state_36430[2]);var state_36430__$1 = state_36430;var statearr_36438_36458 = state_36430__$1;(statearr_36438_36458[2] = inst_36425);
(statearr_36438_36458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36431 === 7))
{var inst_36412 = (state_36430[9]);var inst_36412__$1 = (state_36430[2]);var inst_36413 = (inst_36412__$1 == null);var inst_36414 = cljs.core.not.call(null,inst_36413);var state_36430__$1 = (function (){var statearr_36439 = state_36430;(statearr_36439[9] = inst_36412__$1);
return statearr_36439;
})();if(inst_36414)
{var statearr_36440_36459 = state_36430__$1;(statearr_36440_36459[1] = 8);
} else
{var statearr_36441_36460 = state_36430__$1;(statearr_36441_36460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36431 === 8))
{var inst_36412 = (state_36430[9]);var state_36430__$1 = state_36430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36430__$1,11,out,inst_36412);
} else
{if((state_val_36431 === 9))
{var state_36430__$1 = state_36430;var statearr_36442_36461 = state_36430__$1;(statearr_36442_36461[2] = null);
(statearr_36442_36461[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36431 === 10))
{var inst_36422 = (state_36430[2]);var state_36430__$1 = state_36430;var statearr_36443_36462 = state_36430__$1;(statearr_36443_36462[2] = inst_36422);
(statearr_36443_36462[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36431 === 11))
{var inst_36407 = (state_36430[7]);var inst_36417 = (state_36430[2]);var inst_36418 = (inst_36407 + 1);var inst_36407__$1 = inst_36418;var state_36430__$1 = (function (){var statearr_36444 = state_36430;(statearr_36444[10] = inst_36417);
(statearr_36444[7] = inst_36407__$1);
return statearr_36444;
})();var statearr_36445_36463 = state_36430__$1;(statearr_36445_36463[2] = null);
(statearr_36445_36463[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36449 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36449[0] = state_machine__5507__auto__);
(statearr_36449[1] = 1);
return statearr_36449;
});
var state_machine__5507__auto____1 = (function (state_36430){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36450){if((e36450 instanceof Object))
{var ex__5510__auto__ = e36450;var statearr_36451_36464 = state_36430;(statearr_36451_36464[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36465 = state_36430;
state_36430 = G__36465;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36430){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36452 = f__5522__auto__.call(null);(statearr_36452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36453);
return statearr_36452;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36537){var state_val_36538 = (state_36537[1]);if((state_val_36538 === 1))
{var inst_36514 = null;var state_36537__$1 = (function (){var statearr_36539 = state_36537;(statearr_36539[7] = inst_36514);
return statearr_36539;
})();var statearr_36540_36563 = state_36537__$1;(statearr_36540_36563[2] = null);
(statearr_36540_36563[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36538 === 2))
{var state_36537__$1 = state_36537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36537__$1,4,ch);
} else
{if((state_val_36538 === 3))
{var inst_36534 = (state_36537[2]);var inst_36535 = cljs.core.async.close_BANG_.call(null,out);var state_36537__$1 = (function (){var statearr_36541 = state_36537;(statearr_36541[8] = inst_36534);
return statearr_36541;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36537__$1,inst_36535);
} else
{if((state_val_36538 === 4))
{var inst_36517 = (state_36537[9]);var inst_36517__$1 = (state_36537[2]);var inst_36518 = (inst_36517__$1 == null);var inst_36519 = cljs.core.not.call(null,inst_36518);var state_36537__$1 = (function (){var statearr_36542 = state_36537;(statearr_36542[9] = inst_36517__$1);
return statearr_36542;
})();if(inst_36519)
{var statearr_36543_36564 = state_36537__$1;(statearr_36543_36564[1] = 5);
} else
{var statearr_36544_36565 = state_36537__$1;(statearr_36544_36565[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36538 === 5))
{var inst_36514 = (state_36537[7]);var inst_36517 = (state_36537[9]);var inst_36521 = cljs.core._EQ_.call(null,inst_36517,inst_36514);var state_36537__$1 = state_36537;if(inst_36521)
{var statearr_36545_36566 = state_36537__$1;(statearr_36545_36566[1] = 8);
} else
{var statearr_36546_36567 = state_36537__$1;(statearr_36546_36567[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36538 === 6))
{var state_36537__$1 = state_36537;var statearr_36548_36568 = state_36537__$1;(statearr_36548_36568[2] = null);
(statearr_36548_36568[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36538 === 7))
{var inst_36532 = (state_36537[2]);var state_36537__$1 = state_36537;var statearr_36549_36569 = state_36537__$1;(statearr_36549_36569[2] = inst_36532);
(statearr_36549_36569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36538 === 8))
{var inst_36514 = (state_36537[7]);var tmp36547 = inst_36514;var inst_36514__$1 = tmp36547;var state_36537__$1 = (function (){var statearr_36550 = state_36537;(statearr_36550[7] = inst_36514__$1);
return statearr_36550;
})();var statearr_36551_36570 = state_36537__$1;(statearr_36551_36570[2] = null);
(statearr_36551_36570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36538 === 9))
{var inst_36517 = (state_36537[9]);var state_36537__$1 = state_36537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36537__$1,11,out,inst_36517);
} else
{if((state_val_36538 === 10))
{var inst_36529 = (state_36537[2]);var state_36537__$1 = state_36537;var statearr_36552_36571 = state_36537__$1;(statearr_36552_36571[2] = inst_36529);
(statearr_36552_36571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36538 === 11))
{var inst_36517 = (state_36537[9]);var inst_36526 = (state_36537[2]);var inst_36514 = inst_36517;var state_36537__$1 = (function (){var statearr_36553 = state_36537;(statearr_36553[10] = inst_36526);
(statearr_36553[7] = inst_36514);
return statearr_36553;
})();var statearr_36554_36572 = state_36537__$1;(statearr_36554_36572[2] = null);
(statearr_36554_36572[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36558 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36558[0] = state_machine__5507__auto__);
(statearr_36558[1] = 1);
return statearr_36558;
});
var state_machine__5507__auto____1 = (function (state_36537){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36537);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36559){if((e36559 instanceof Object))
{var ex__5510__auto__ = e36559;var statearr_36560_36573 = state_36537;(statearr_36560_36573[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36574 = state_36537;
state_36537 = G__36574;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36537){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36561 = f__5522__auto__.call(null);(statearr_36561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36562);
return statearr_36561;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36679){var state_val_36680 = (state_36679[1]);if((state_val_36680 === 1))
{var inst_36642 = (new Array(n));var inst_36643 = inst_36642;var inst_36644 = 0;var state_36679__$1 = (function (){var statearr_36681 = state_36679;(statearr_36681[7] = inst_36644);
(statearr_36681[8] = inst_36643);
return statearr_36681;
})();var statearr_36682_36710 = state_36679__$1;(statearr_36682_36710[2] = null);
(statearr_36682_36710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 2))
{var state_36679__$1 = state_36679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,4,ch);
} else
{if((state_val_36680 === 3))
{var inst_36677 = (state_36679[2]);var state_36679__$1 = state_36679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36679__$1,inst_36677);
} else
{if((state_val_36680 === 4))
{var inst_36647 = (state_36679[9]);var inst_36647__$1 = (state_36679[2]);var inst_36648 = (inst_36647__$1 == null);var inst_36649 = cljs.core.not.call(null,inst_36648);var state_36679__$1 = (function (){var statearr_36683 = state_36679;(statearr_36683[9] = inst_36647__$1);
return statearr_36683;
})();if(inst_36649)
{var statearr_36684_36711 = state_36679__$1;(statearr_36684_36711[1] = 5);
} else
{var statearr_36685_36712 = state_36679__$1;(statearr_36685_36712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 5))
{var inst_36647 = (state_36679[9]);var inst_36652 = (state_36679[10]);var inst_36644 = (state_36679[7]);var inst_36643 = (state_36679[8]);var inst_36651 = (inst_36643[inst_36644] = inst_36647);var inst_36652__$1 = (inst_36644 + 1);var inst_36653 = (inst_36652__$1 < n);var state_36679__$1 = (function (){var statearr_36686 = state_36679;(statearr_36686[11] = inst_36651);
(statearr_36686[10] = inst_36652__$1);
return statearr_36686;
})();if(cljs.core.truth_(inst_36653))
{var statearr_36687_36713 = state_36679__$1;(statearr_36687_36713[1] = 8);
} else
{var statearr_36688_36714 = state_36679__$1;(statearr_36688_36714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 6))
{var inst_36644 = (state_36679[7]);var inst_36665 = (inst_36644 > 0);var state_36679__$1 = state_36679;if(cljs.core.truth_(inst_36665))
{var statearr_36690_36715 = state_36679__$1;(statearr_36690_36715[1] = 12);
} else
{var statearr_36691_36716 = state_36679__$1;(statearr_36691_36716[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 7))
{var inst_36675 = (state_36679[2]);var state_36679__$1 = state_36679;var statearr_36692_36717 = state_36679__$1;(statearr_36692_36717[2] = inst_36675);
(statearr_36692_36717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 8))
{var inst_36652 = (state_36679[10]);var inst_36643 = (state_36679[8]);var tmp36689 = inst_36643;var inst_36643__$1 = tmp36689;var inst_36644 = inst_36652;var state_36679__$1 = (function (){var statearr_36693 = state_36679;(statearr_36693[7] = inst_36644);
(statearr_36693[8] = inst_36643__$1);
return statearr_36693;
})();var statearr_36694_36718 = state_36679__$1;(statearr_36694_36718[2] = null);
(statearr_36694_36718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 9))
{var inst_36643 = (state_36679[8]);var inst_36657 = cljs.core.vec.call(null,inst_36643);var state_36679__$1 = state_36679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36679__$1,11,out,inst_36657);
} else
{if((state_val_36680 === 10))
{var inst_36663 = (state_36679[2]);var state_36679__$1 = state_36679;var statearr_36695_36719 = state_36679__$1;(statearr_36695_36719[2] = inst_36663);
(statearr_36695_36719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 11))
{var inst_36659 = (state_36679[2]);var inst_36660 = (new Array(n));var inst_36643 = inst_36660;var inst_36644 = 0;var state_36679__$1 = (function (){var statearr_36696 = state_36679;(statearr_36696[12] = inst_36659);
(statearr_36696[7] = inst_36644);
(statearr_36696[8] = inst_36643);
return statearr_36696;
})();var statearr_36697_36720 = state_36679__$1;(statearr_36697_36720[2] = null);
(statearr_36697_36720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 12))
{var inst_36643 = (state_36679[8]);var inst_36667 = cljs.core.vec.call(null,inst_36643);var state_36679__$1 = state_36679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36679__$1,15,out,inst_36667);
} else
{if((state_val_36680 === 13))
{var state_36679__$1 = state_36679;var statearr_36698_36721 = state_36679__$1;(statearr_36698_36721[2] = null);
(statearr_36698_36721[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 14))
{var inst_36672 = (state_36679[2]);var inst_36673 = cljs.core.async.close_BANG_.call(null,out);var state_36679__$1 = (function (){var statearr_36699 = state_36679;(statearr_36699[13] = inst_36672);
return statearr_36699;
})();var statearr_36700_36722 = state_36679__$1;(statearr_36700_36722[2] = inst_36673);
(statearr_36700_36722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36680 === 15))
{var inst_36669 = (state_36679[2]);var state_36679__$1 = state_36679;var statearr_36701_36723 = state_36679__$1;(statearr_36701_36723[2] = inst_36669);
(statearr_36701_36723[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36705[0] = state_machine__5507__auto__);
(statearr_36705[1] = 1);
return statearr_36705;
});
var state_machine__5507__auto____1 = (function (state_36679){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36706){if((e36706 instanceof Object))
{var ex__5510__auto__ = e36706;var statearr_36707_36724 = state_36679;(statearr_36707_36724[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36679);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36725 = state_36679;
state_36679 = G__36725;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36708 = f__5522__auto__.call(null);(statearr_36708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36709);
return statearr_36708;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36868 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36838){var state_val_36839 = (state_36838[1]);if((state_val_36839 === 1))
{var inst_36797 = [];var inst_36798 = inst_36797;var inst_36799 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36838__$1 = (function (){var statearr_36840 = state_36838;(statearr_36840[7] = inst_36799);
(statearr_36840[8] = inst_36798);
return statearr_36840;
})();var statearr_36841_36869 = state_36838__$1;(statearr_36841_36869[2] = null);
(statearr_36841_36869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 2))
{var state_36838__$1 = state_36838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36838__$1,4,ch);
} else
{if((state_val_36839 === 3))
{var inst_36836 = (state_36838[2]);var state_36838__$1 = state_36838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36838__$1,inst_36836);
} else
{if((state_val_36839 === 4))
{var inst_36802 = (state_36838[9]);var inst_36802__$1 = (state_36838[2]);var inst_36803 = (inst_36802__$1 == null);var inst_36804 = cljs.core.not.call(null,inst_36803);var state_36838__$1 = (function (){var statearr_36842 = state_36838;(statearr_36842[9] = inst_36802__$1);
return statearr_36842;
})();if(inst_36804)
{var statearr_36843_36870 = state_36838__$1;(statearr_36843_36870[1] = 5);
} else
{var statearr_36844_36871 = state_36838__$1;(statearr_36844_36871[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 5))
{var inst_36799 = (state_36838[7]);var inst_36806 = (state_36838[10]);var inst_36802 = (state_36838[9]);var inst_36806__$1 = f.call(null,inst_36802);var inst_36807 = cljs.core._EQ_.call(null,inst_36806__$1,inst_36799);var inst_36808 = cljs.core.keyword_identical_QMARK_.call(null,inst_36799,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36809 = (inst_36807) || (inst_36808);var state_36838__$1 = (function (){var statearr_36845 = state_36838;(statearr_36845[10] = inst_36806__$1);
return statearr_36845;
})();if(cljs.core.truth_(inst_36809))
{var statearr_36846_36872 = state_36838__$1;(statearr_36846_36872[1] = 8);
} else
{var statearr_36847_36873 = state_36838__$1;(statearr_36847_36873[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 6))
{var inst_36798 = (state_36838[8]);var inst_36823 = inst_36798.length;var inst_36824 = (inst_36823 > 0);var state_36838__$1 = state_36838;if(cljs.core.truth_(inst_36824))
{var statearr_36849_36874 = state_36838__$1;(statearr_36849_36874[1] = 12);
} else
{var statearr_36850_36875 = state_36838__$1;(statearr_36850_36875[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 7))
{var inst_36834 = (state_36838[2]);var state_36838__$1 = state_36838;var statearr_36851_36876 = state_36838__$1;(statearr_36851_36876[2] = inst_36834);
(statearr_36851_36876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 8))
{var inst_36798 = (state_36838[8]);var inst_36806 = (state_36838[10]);var inst_36802 = (state_36838[9]);var inst_36811 = inst_36798.push(inst_36802);var tmp36848 = inst_36798;var inst_36798__$1 = tmp36848;var inst_36799 = inst_36806;var state_36838__$1 = (function (){var statearr_36852 = state_36838;(statearr_36852[7] = inst_36799);
(statearr_36852[8] = inst_36798__$1);
(statearr_36852[11] = inst_36811);
return statearr_36852;
})();var statearr_36853_36877 = state_36838__$1;(statearr_36853_36877[2] = null);
(statearr_36853_36877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 9))
{var inst_36798 = (state_36838[8]);var inst_36814 = cljs.core.vec.call(null,inst_36798);var state_36838__$1 = state_36838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36838__$1,11,out,inst_36814);
} else
{if((state_val_36839 === 10))
{var inst_36821 = (state_36838[2]);var state_36838__$1 = state_36838;var statearr_36854_36878 = state_36838__$1;(statearr_36854_36878[2] = inst_36821);
(statearr_36854_36878[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 11))
{var inst_36806 = (state_36838[10]);var inst_36802 = (state_36838[9]);var inst_36816 = (state_36838[2]);var inst_36817 = [];var inst_36818 = inst_36817.push(inst_36802);var inst_36798 = inst_36817;var inst_36799 = inst_36806;var state_36838__$1 = (function (){var statearr_36855 = state_36838;(statearr_36855[7] = inst_36799);
(statearr_36855[8] = inst_36798);
(statearr_36855[12] = inst_36816);
(statearr_36855[13] = inst_36818);
return statearr_36855;
})();var statearr_36856_36879 = state_36838__$1;(statearr_36856_36879[2] = null);
(statearr_36856_36879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 12))
{var inst_36798 = (state_36838[8]);var inst_36826 = cljs.core.vec.call(null,inst_36798);var state_36838__$1 = state_36838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36838__$1,15,out,inst_36826);
} else
{if((state_val_36839 === 13))
{var state_36838__$1 = state_36838;var statearr_36857_36880 = state_36838__$1;(statearr_36857_36880[2] = null);
(statearr_36857_36880[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 14))
{var inst_36831 = (state_36838[2]);var inst_36832 = cljs.core.async.close_BANG_.call(null,out);var state_36838__$1 = (function (){var statearr_36858 = state_36838;(statearr_36858[14] = inst_36831);
return statearr_36858;
})();var statearr_36859_36881 = state_36838__$1;(statearr_36859_36881[2] = inst_36832);
(statearr_36859_36881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36839 === 15))
{var inst_36828 = (state_36838[2]);var state_36838__$1 = state_36838;var statearr_36860_36882 = state_36838__$1;(statearr_36860_36882[2] = inst_36828);
(statearr_36860_36882[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36864[0] = state_machine__5507__auto__);
(statearr_36864[1] = 1);
return statearr_36864;
});
var state_machine__5507__auto____1 = (function (state_36838){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36838);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36865){if((e36865 instanceof Object))
{var ex__5510__auto__ = e36865;var statearr_36866_36883 = state_36838;(statearr_36866_36883[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36884 = state_36838;
state_36838 = G__36884;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36838){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36867 = f__5522__auto__.call(null);(statearr_36867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36868);
return statearr_36867;
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
