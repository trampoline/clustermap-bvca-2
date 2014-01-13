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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t30330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30330 = (function (f,fn_handler,meta30331){
this.f = f;
this.fn_handler = fn_handler;
this.meta30331 = meta30331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30330.cljs$lang$type = true;
cljs.core.async.t30330.cljs$lang$ctorStr = "cljs.core.async/t30330";
cljs.core.async.t30330.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30330");
});
cljs.core.async.t30330.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t30330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t30330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30332){var self__ = this;
var _30332__$1 = this;return self__.meta30331;
});
cljs.core.async.t30330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30332,meta30331__$1){var self__ = this;
var _30332__$1 = this;return (new cljs.core.async.t30330(self__.f,self__.fn_handler,meta30331__$1));
});
cljs.core.async.__GT_t30330 = (function __GT_t30330(f__$1,fn_handler__$1,meta30331){return (new cljs.core.async.t30330(f__$1,fn_handler__$1,meta30331));
});
}
return (new cljs.core.async.t30330(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__30334 = buff;if(G__30334)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__30334.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__30334.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30334);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30334);
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
{var val_30335 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_30335);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_30335);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___30336 = n;var x_30337 = 0;while(true){
if((x_30337 < n__4248__auto___30336))
{(a[x_30337] = 0);
{
var G__30338 = (x_30337 + 1);
x_30337 = G__30338;
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
var G__30339 = (i + 1);
i = G__30339;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t30343 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30343 = (function (flag,alt_flag,meta30344){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30344 = meta30344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30343.cljs$lang$type = true;
cljs.core.async.t30343.cljs$lang$ctorStr = "cljs.core.async/t30343";
cljs.core.async.t30343.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30343");
});
cljs.core.async.t30343.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t30343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t30343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30345){var self__ = this;
var _30345__$1 = this;return self__.meta30344;
});
cljs.core.async.t30343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30345,meta30344__$1){var self__ = this;
var _30345__$1 = this;return (new cljs.core.async.t30343(self__.flag,self__.alt_flag,meta30344__$1));
});
cljs.core.async.__GT_t30343 = (function __GT_t30343(flag__$1,alt_flag__$1,meta30344){return (new cljs.core.async.t30343(flag__$1,alt_flag__$1,meta30344));
});
}
return (new cljs.core.async.t30343(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t30349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30349 = (function (cb,flag,alt_handler,meta30350){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30350 = meta30350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30349.cljs$lang$type = true;
cljs.core.async.t30349.cljs$lang$ctorStr = "cljs.core.async/t30349";
cljs.core.async.t30349.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30349");
});
cljs.core.async.t30349.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t30349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t30349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30351){var self__ = this;
var _30351__$1 = this;return self__.meta30350;
});
cljs.core.async.t30349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30351,meta30350__$1){var self__ = this;
var _30351__$1 = this;return (new cljs.core.async.t30349(self__.cb,self__.flag,self__.alt_handler,meta30350__$1));
});
cljs.core.async.__GT_t30349 = (function __GT_t30349(cb__$1,flag__$1,alt_handler__$1,meta30350){return (new cljs.core.async.t30349(cb__$1,flag__$1,alt_handler__$1,meta30350));
});
}
return (new cljs.core.async.t30349(cb,flag,alt_handler,null));
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
return (function (p1__30352_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30352_SHARP_,port], null));
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
var G__30353 = (i + 1);
i = G__30353;
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
var alts_BANG___delegate = function (ports,p__30354){var map__30356 = p__30354;var map__30356__$1 = ((cljs.core.seq_QMARK_.call(null,map__30356))?cljs.core.apply.call(null,cljs.core.hash_map,map__30356):map__30356);var opts = map__30356__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__30354 = null;if (arguments.length > 1) {
  p__30354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__30354);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30357){
var ports = cljs.core.first(arglist__30357);
var p__30354 = cljs.core.rest(arglist__30357);
return alts_BANG___delegate(ports,p__30354);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30365 = (function (ch,f,map_LT_,meta30366){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30366 = meta30366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30365.cljs$lang$type = true;
cljs.core.async.t30365.cljs$lang$ctorStr = "cljs.core.async/t30365";
cljs.core.async.t30365.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30365");
});
cljs.core.async.t30365.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t30365.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30368 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30368 = (function (fn1,_,meta30366,ch,f,map_LT_,meta30369){
this.fn1 = fn1;
this._ = _;
this.meta30366 = meta30366;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30369 = meta30369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30368.cljs$lang$type = true;
cljs.core.async.t30368.cljs$lang$ctorStr = "cljs.core.async/t30368";
cljs.core.async.t30368.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30368");
});
cljs.core.async.t30368.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t30368.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t30368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__30358_SHARP_){return f1.call(null,(((p1__30358_SHARP_ == null))?null:self__.f.call(null,p1__30358_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t30368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30370){var self__ = this;
var _30370__$1 = this;return self__.meta30369;
});
cljs.core.async.t30368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30370,meta30369__$1){var self__ = this;
var _30370__$1 = this;return (new cljs.core.async.t30368(self__.fn1,self__._,self__.meta30366,self__.ch,self__.f,self__.map_LT_,meta30369__$1));
});
cljs.core.async.__GT_t30368 = (function __GT_t30368(fn1__$1,___$2,meta30366__$1,ch__$2,f__$2,map_LT___$2,meta30369){return (new cljs.core.async.t30368(fn1__$1,___$2,meta30366__$1,ch__$2,f__$2,map_LT___$2,meta30369));
});
}
return (new cljs.core.async.t30368(fn1,___$1,self__.meta30366,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t30365.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30367){var self__ = this;
var _30367__$1 = this;return self__.meta30366;
});
cljs.core.async.t30365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30367,meta30366__$1){var self__ = this;
var _30367__$1 = this;return (new cljs.core.async.t30365(self__.ch,self__.f,self__.map_LT_,meta30366__$1));
});
cljs.core.async.__GT_t30365 = (function __GT_t30365(ch__$1,f__$1,map_LT___$1,meta30366){return (new cljs.core.async.t30365(ch__$1,f__$1,map_LT___$1,meta30366));
});
}
return (new cljs.core.async.t30365(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30374 = (function (ch,f,map_GT_,meta30375){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30375 = meta30375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30374.cljs$lang$type = true;
cljs.core.async.t30374.cljs$lang$ctorStr = "cljs.core.async/t30374";
cljs.core.async.t30374.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30374");
});
cljs.core.async.t30374.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t30374.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30374.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30376){var self__ = this;
var _30376__$1 = this;return self__.meta30375;
});
cljs.core.async.t30374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30376,meta30375__$1){var self__ = this;
var _30376__$1 = this;return (new cljs.core.async.t30374(self__.ch,self__.f,self__.map_GT_,meta30375__$1));
});
cljs.core.async.__GT_t30374 = (function __GT_t30374(ch__$1,f__$1,map_GT___$1,meta30375){return (new cljs.core.async.t30374(ch__$1,f__$1,map_GT___$1,meta30375));
});
}
return (new cljs.core.async.t30374(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30380 = (function (ch,p,filter_GT_,meta30381){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30381 = meta30381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30380.cljs$lang$type = true;
cljs.core.async.t30380.cljs$lang$ctorStr = "cljs.core.async/t30380";
cljs.core.async.t30380.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t30380");
});
cljs.core.async.t30380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t30380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30380.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30382){var self__ = this;
var _30382__$1 = this;return self__.meta30381;
});
cljs.core.async.t30380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30382,meta30381__$1){var self__ = this;
var _30382__$1 = this;return (new cljs.core.async.t30380(self__.ch,self__.p,self__.filter_GT_,meta30381__$1));
});
cljs.core.async.__GT_t30380 = (function __GT_t30380(ch__$1,p__$1,filter_GT___$1,meta30381){return (new cljs.core.async.t30380(ch__$1,p__$1,filter_GT___$1,meta30381));
});
}
return (new cljs.core.async.t30380(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___30465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30444){var state_val_30445 = (state_30444[1]);if((state_val_30445 === 1))
{var state_30444__$1 = state_30444;var statearr_30446_30466 = state_30444__$1;(statearr_30446_30466[2] = null);
(statearr_30446_30466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30445 === 2))
{var state_30444__$1 = state_30444;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30444__$1,4,ch);
} else
{if((state_val_30445 === 3))
{var inst_30442 = (state_30444[2]);var state_30444__$1 = state_30444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30444__$1,inst_30442);
} else
{if((state_val_30445 === 4))
{var inst_30426 = (state_30444[7]);var inst_30426__$1 = (state_30444[2]);var inst_30427 = (inst_30426__$1 == null);var state_30444__$1 = (function (){var statearr_30447 = state_30444;(statearr_30447[7] = inst_30426__$1);
return statearr_30447;
})();if(cljs.core.truth_(inst_30427))
{var statearr_30448_30467 = state_30444__$1;(statearr_30448_30467[1] = 5);
} else
{var statearr_30449_30468 = state_30444__$1;(statearr_30449_30468[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30445 === 5))
{var inst_30429 = cljs.core.async.close_BANG_.call(null,out);var state_30444__$1 = state_30444;var statearr_30450_30469 = state_30444__$1;(statearr_30450_30469[2] = inst_30429);
(statearr_30450_30469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30445 === 6))
{var inst_30426 = (state_30444[7]);var inst_30431 = p.call(null,inst_30426);var state_30444__$1 = state_30444;if(cljs.core.truth_(inst_30431))
{var statearr_30451_30470 = state_30444__$1;(statearr_30451_30470[1] = 8);
} else
{var statearr_30452_30471 = state_30444__$1;(statearr_30452_30471[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30445 === 7))
{var inst_30440 = (state_30444[2]);var state_30444__$1 = state_30444;var statearr_30453_30472 = state_30444__$1;(statearr_30453_30472[2] = inst_30440);
(statearr_30453_30472[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30445 === 8))
{var inst_30426 = (state_30444[7]);var state_30444__$1 = state_30444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30444__$1,11,out,inst_30426);
} else
{if((state_val_30445 === 9))
{var state_30444__$1 = state_30444;var statearr_30454_30473 = state_30444__$1;(statearr_30454_30473[2] = null);
(statearr_30454_30473[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30445 === 10))
{var inst_30437 = (state_30444[2]);var state_30444__$1 = (function (){var statearr_30455 = state_30444;(statearr_30455[8] = inst_30437);
return statearr_30455;
})();var statearr_30456_30474 = state_30444__$1;(statearr_30456_30474[2] = null);
(statearr_30456_30474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30445 === 11))
{var inst_30434 = (state_30444[2]);var state_30444__$1 = state_30444;var statearr_30457_30475 = state_30444__$1;(statearr_30457_30475[2] = inst_30434);
(statearr_30457_30475[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_30461 = [null,null,null,null,null,null,null,null,null];(statearr_30461[0] = state_machine__5507__auto__);
(statearr_30461[1] = 1);
return statearr_30461;
});
var state_machine__5507__auto____1 = (function (state_30444){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30444);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30462){if((e30462 instanceof Object))
{var ex__5510__auto__ = e30462;var statearr_30463_30476 = state_30444;(statearr_30463_30476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30477 = state_30444;
state_30444 = G__30477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30444){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30464 = f__5522__auto__.call(null);(statearr_30464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30465);
return statearr_30464;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30629){var state_val_30630 = (state_30629[1]);if((state_val_30630 === 1))
{var state_30629__$1 = state_30629;var statearr_30631_30668 = state_30629__$1;(statearr_30631_30668[2] = null);
(statearr_30631_30668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 2))
{var state_30629__$1 = state_30629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30629__$1,4,in$);
} else
{if((state_val_30630 === 3))
{var inst_30627 = (state_30629[2]);var state_30629__$1 = state_30629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30629__$1,inst_30627);
} else
{if((state_val_30630 === 4))
{var inst_30575 = (state_30629[7]);var inst_30575__$1 = (state_30629[2]);var inst_30576 = (inst_30575__$1 == null);var state_30629__$1 = (function (){var statearr_30632 = state_30629;(statearr_30632[7] = inst_30575__$1);
return statearr_30632;
})();if(cljs.core.truth_(inst_30576))
{var statearr_30633_30669 = state_30629__$1;(statearr_30633_30669[1] = 5);
} else
{var statearr_30634_30670 = state_30629__$1;(statearr_30634_30670[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 5))
{var inst_30578 = cljs.core.async.close_BANG_.call(null,out);var state_30629__$1 = state_30629;var statearr_30635_30671 = state_30629__$1;(statearr_30635_30671[2] = inst_30578);
(statearr_30635_30671[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 6))
{var inst_30575 = (state_30629[7]);var inst_30580 = f.call(null,inst_30575);var inst_30585 = cljs.core.seq.call(null,inst_30580);var inst_30586 = inst_30585;var inst_30587 = null;var inst_30588 = 0;var inst_30589 = 0;var state_30629__$1 = (function (){var statearr_30636 = state_30629;(statearr_30636[8] = inst_30589);
(statearr_30636[9] = inst_30586);
(statearr_30636[10] = inst_30587);
(statearr_30636[11] = inst_30588);
return statearr_30636;
})();var statearr_30637_30672 = state_30629__$1;(statearr_30637_30672[2] = null);
(statearr_30637_30672[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 7))
{var inst_30625 = (state_30629[2]);var state_30629__$1 = state_30629;var statearr_30638_30673 = state_30629__$1;(statearr_30638_30673[2] = inst_30625);
(statearr_30638_30673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 8))
{var inst_30589 = (state_30629[8]);var inst_30588 = (state_30629[11]);var inst_30591 = (inst_30589 < inst_30588);var inst_30592 = inst_30591;var state_30629__$1 = state_30629;if(cljs.core.truth_(inst_30592))
{var statearr_30639_30674 = state_30629__$1;(statearr_30639_30674[1] = 10);
} else
{var statearr_30640_30675 = state_30629__$1;(statearr_30640_30675[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 9))
{var inst_30622 = (state_30629[2]);var state_30629__$1 = (function (){var statearr_30641 = state_30629;(statearr_30641[12] = inst_30622);
return statearr_30641;
})();var statearr_30642_30676 = state_30629__$1;(statearr_30642_30676[2] = null);
(statearr_30642_30676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 10))
{var inst_30589 = (state_30629[8]);var inst_30587 = (state_30629[10]);var inst_30594 = cljs.core._nth.call(null,inst_30587,inst_30589);var state_30629__$1 = state_30629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30629__$1,13,out,inst_30594);
} else
{if((state_val_30630 === 11))
{var inst_30586 = (state_30629[9]);var inst_30600 = (state_30629[13]);var inst_30600__$1 = cljs.core.seq.call(null,inst_30586);var state_30629__$1 = (function (){var statearr_30646 = state_30629;(statearr_30646[13] = inst_30600__$1);
return statearr_30646;
})();if(inst_30600__$1)
{var statearr_30647_30677 = state_30629__$1;(statearr_30647_30677[1] = 14);
} else
{var statearr_30648_30678 = state_30629__$1;(statearr_30648_30678[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 12))
{var inst_30620 = (state_30629[2]);var state_30629__$1 = state_30629;var statearr_30649_30679 = state_30629__$1;(statearr_30649_30679[2] = inst_30620);
(statearr_30649_30679[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 13))
{var inst_30589 = (state_30629[8]);var inst_30586 = (state_30629[9]);var inst_30587 = (state_30629[10]);var inst_30588 = (state_30629[11]);var inst_30596 = (state_30629[2]);var inst_30597 = (inst_30589 + 1);var tmp30643 = inst_30586;var tmp30644 = inst_30587;var tmp30645 = inst_30588;var inst_30586__$1 = tmp30643;var inst_30587__$1 = tmp30644;var inst_30588__$1 = tmp30645;var inst_30589__$1 = inst_30597;var state_30629__$1 = (function (){var statearr_30650 = state_30629;(statearr_30650[8] = inst_30589__$1);
(statearr_30650[14] = inst_30596);
(statearr_30650[9] = inst_30586__$1);
(statearr_30650[10] = inst_30587__$1);
(statearr_30650[11] = inst_30588__$1);
return statearr_30650;
})();var statearr_30651_30680 = state_30629__$1;(statearr_30651_30680[2] = null);
(statearr_30651_30680[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 14))
{var inst_30600 = (state_30629[13]);var inst_30602 = cljs.core.chunked_seq_QMARK_.call(null,inst_30600);var state_30629__$1 = state_30629;if(inst_30602)
{var statearr_30652_30681 = state_30629__$1;(statearr_30652_30681[1] = 17);
} else
{var statearr_30653_30682 = state_30629__$1;(statearr_30653_30682[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 15))
{var state_30629__$1 = state_30629;var statearr_30654_30683 = state_30629__$1;(statearr_30654_30683[2] = null);
(statearr_30654_30683[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 16))
{var inst_30618 = (state_30629[2]);var state_30629__$1 = state_30629;var statearr_30655_30684 = state_30629__$1;(statearr_30655_30684[2] = inst_30618);
(statearr_30655_30684[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 17))
{var inst_30600 = (state_30629[13]);var inst_30604 = cljs.core.chunk_first.call(null,inst_30600);var inst_30605 = cljs.core.chunk_rest.call(null,inst_30600);var inst_30606 = cljs.core.count.call(null,inst_30604);var inst_30586 = inst_30605;var inst_30587 = inst_30604;var inst_30588 = inst_30606;var inst_30589 = 0;var state_30629__$1 = (function (){var statearr_30656 = state_30629;(statearr_30656[8] = inst_30589);
(statearr_30656[9] = inst_30586);
(statearr_30656[10] = inst_30587);
(statearr_30656[11] = inst_30588);
return statearr_30656;
})();var statearr_30657_30685 = state_30629__$1;(statearr_30657_30685[2] = null);
(statearr_30657_30685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 18))
{var inst_30600 = (state_30629[13]);var inst_30609 = cljs.core.first.call(null,inst_30600);var state_30629__$1 = state_30629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30629__$1,20,out,inst_30609);
} else
{if((state_val_30630 === 19))
{var inst_30615 = (state_30629[2]);var state_30629__$1 = state_30629;var statearr_30658_30686 = state_30629__$1;(statearr_30658_30686[2] = inst_30615);
(statearr_30658_30686[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30630 === 20))
{var inst_30600 = (state_30629[13]);var inst_30611 = (state_30629[2]);var inst_30612 = cljs.core.next.call(null,inst_30600);var inst_30586 = inst_30612;var inst_30587 = null;var inst_30588 = 0;var inst_30589 = 0;var state_30629__$1 = (function (){var statearr_30659 = state_30629;(statearr_30659[15] = inst_30611);
(statearr_30659[8] = inst_30589);
(statearr_30659[9] = inst_30586);
(statearr_30659[10] = inst_30587);
(statearr_30659[11] = inst_30588);
return statearr_30659;
})();var statearr_30660_30687 = state_30629__$1;(statearr_30660_30687[2] = null);
(statearr_30660_30687[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_30664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30664[0] = state_machine__5507__auto__);
(statearr_30664[1] = 1);
return statearr_30664;
});
var state_machine__5507__auto____1 = (function (state_30629){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30629);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30665){if((e30665 instanceof Object))
{var ex__5510__auto__ = e30665;var statearr_30666_30688 = state_30629;(statearr_30666_30688[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30689 = state_30629;
state_30629 = G__30689;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30629){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30667 = f__5522__auto__.call(null);(statearr_30667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30667;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___30770 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30749){var state_val_30750 = (state_30749[1]);if((state_val_30750 === 1))
{var state_30749__$1 = state_30749;var statearr_30751_30771 = state_30749__$1;(statearr_30751_30771[2] = null);
(statearr_30751_30771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30750 === 2))
{var state_30749__$1 = state_30749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30749__$1,4,from);
} else
{if((state_val_30750 === 3))
{var inst_30747 = (state_30749[2]);var state_30749__$1 = state_30749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30749__$1,inst_30747);
} else
{if((state_val_30750 === 4))
{var inst_30732 = (state_30749[7]);var inst_30732__$1 = (state_30749[2]);var inst_30733 = (inst_30732__$1 == null);var state_30749__$1 = (function (){var statearr_30752 = state_30749;(statearr_30752[7] = inst_30732__$1);
return statearr_30752;
})();if(cljs.core.truth_(inst_30733))
{var statearr_30753_30772 = state_30749__$1;(statearr_30753_30772[1] = 5);
} else
{var statearr_30754_30773 = state_30749__$1;(statearr_30754_30773[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30750 === 5))
{var state_30749__$1 = state_30749;if(cljs.core.truth_(close_QMARK_))
{var statearr_30755_30774 = state_30749__$1;(statearr_30755_30774[1] = 8);
} else
{var statearr_30756_30775 = state_30749__$1;(statearr_30756_30775[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30750 === 6))
{var inst_30732 = (state_30749[7]);var state_30749__$1 = state_30749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30749__$1,11,to,inst_30732);
} else
{if((state_val_30750 === 7))
{var inst_30745 = (state_30749[2]);var state_30749__$1 = state_30749;var statearr_30757_30776 = state_30749__$1;(statearr_30757_30776[2] = inst_30745);
(statearr_30757_30776[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30750 === 8))
{var inst_30736 = cljs.core.async.close_BANG_.call(null,to);var state_30749__$1 = state_30749;var statearr_30758_30777 = state_30749__$1;(statearr_30758_30777[2] = inst_30736);
(statearr_30758_30777[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30750 === 9))
{var state_30749__$1 = state_30749;var statearr_30759_30778 = state_30749__$1;(statearr_30759_30778[2] = null);
(statearr_30759_30778[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30750 === 10))
{var inst_30739 = (state_30749[2]);var state_30749__$1 = state_30749;var statearr_30760_30779 = state_30749__$1;(statearr_30760_30779[2] = inst_30739);
(statearr_30760_30779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30750 === 11))
{var inst_30742 = (state_30749[2]);var state_30749__$1 = (function (){var statearr_30761 = state_30749;(statearr_30761[8] = inst_30742);
return statearr_30761;
})();var statearr_30762_30780 = state_30749__$1;(statearr_30762_30780[2] = null);
(statearr_30762_30780[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30766 = [null,null,null,null,null,null,null,null,null];(statearr_30766[0] = state_machine__5507__auto__);
(statearr_30766[1] = 1);
return statearr_30766;
});
var state_machine__5507__auto____1 = (function (state_30749){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30767){if((e30767 instanceof Object))
{var ex__5510__auto__ = e30767;var statearr_30768_30781 = state_30749;(statearr_30768_30781[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30782 = state_30749;
state_30749 = G__30782;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30749){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30769 = f__5522__auto__.call(null);(statearr_30769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30770);
return statearr_30769;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___30869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30847){var state_val_30848 = (state_30847[1]);if((state_val_30848 === 1))
{var state_30847__$1 = state_30847;var statearr_30849_30870 = state_30847__$1;(statearr_30849_30870[2] = null);
(statearr_30849_30870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 2))
{var state_30847__$1 = state_30847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30847__$1,4,ch);
} else
{if((state_val_30848 === 3))
{var inst_30845 = (state_30847[2]);var state_30847__$1 = state_30847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30847__$1,inst_30845);
} else
{if((state_val_30848 === 4))
{var inst_30828 = (state_30847[7]);var inst_30828__$1 = (state_30847[2]);var inst_30829 = (inst_30828__$1 == null);var state_30847__$1 = (function (){var statearr_30850 = state_30847;(statearr_30850[7] = inst_30828__$1);
return statearr_30850;
})();if(cljs.core.truth_(inst_30829))
{var statearr_30851_30871 = state_30847__$1;(statearr_30851_30871[1] = 5);
} else
{var statearr_30852_30872 = state_30847__$1;(statearr_30852_30872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 5))
{var inst_30831 = cljs.core.async.close_BANG_.call(null,tc);var inst_30832 = cljs.core.async.close_BANG_.call(null,fc);var state_30847__$1 = (function (){var statearr_30853 = state_30847;(statearr_30853[8] = inst_30831);
return statearr_30853;
})();var statearr_30854_30873 = state_30847__$1;(statearr_30854_30873[2] = inst_30832);
(statearr_30854_30873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 6))
{var inst_30828 = (state_30847[7]);var inst_30834 = p.call(null,inst_30828);var state_30847__$1 = state_30847;if(cljs.core.truth_(inst_30834))
{var statearr_30855_30874 = state_30847__$1;(statearr_30855_30874[1] = 9);
} else
{var statearr_30856_30875 = state_30847__$1;(statearr_30856_30875[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 7))
{var inst_30843 = (state_30847[2]);var state_30847__$1 = state_30847;var statearr_30857_30876 = state_30847__$1;(statearr_30857_30876[2] = inst_30843);
(statearr_30857_30876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 8))
{var inst_30840 = (state_30847[2]);var state_30847__$1 = (function (){var statearr_30858 = state_30847;(statearr_30858[9] = inst_30840);
return statearr_30858;
})();var statearr_30859_30877 = state_30847__$1;(statearr_30859_30877[2] = null);
(statearr_30859_30877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 9))
{var state_30847__$1 = state_30847;var statearr_30860_30878 = state_30847__$1;(statearr_30860_30878[2] = tc);
(statearr_30860_30878[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 10))
{var state_30847__$1 = state_30847;var statearr_30861_30879 = state_30847__$1;(statearr_30861_30879[2] = fc);
(statearr_30861_30879[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30848 === 11))
{var inst_30828 = (state_30847[7]);var inst_30838 = (state_30847[2]);var state_30847__$1 = state_30847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30847__$1,8,inst_30838,inst_30828);
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
var state_machine__5507__auto____0 = (function (){var statearr_30865 = [null,null,null,null,null,null,null,null,null,null];(statearr_30865[0] = state_machine__5507__auto__);
(statearr_30865[1] = 1);
return statearr_30865;
});
var state_machine__5507__auto____1 = (function (state_30847){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30847);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30866){if((e30866 instanceof Object))
{var ex__5510__auto__ = e30866;var statearr_30867_30880 = state_30847;(statearr_30867_30880[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30847);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30881 = state_30847;
state_30847 = G__30881;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30847){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30868 = f__5522__auto__.call(null);(statearr_30868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___30869);
return statearr_30868;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_30928){var state_val_30929 = (state_30928[1]);if((state_val_30929 === 7))
{var inst_30924 = (state_30928[2]);var state_30928__$1 = state_30928;var statearr_30930_30946 = state_30928__$1;(statearr_30930_30946[2] = inst_30924);
(statearr_30930_30946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30929 === 6))
{var inst_30914 = (state_30928[7]);var inst_30917 = (state_30928[8]);var inst_30921 = f.call(null,inst_30914,inst_30917);var inst_30914__$1 = inst_30921;var state_30928__$1 = (function (){var statearr_30931 = state_30928;(statearr_30931[7] = inst_30914__$1);
return statearr_30931;
})();var statearr_30932_30947 = state_30928__$1;(statearr_30932_30947[2] = null);
(statearr_30932_30947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30929 === 5))
{var inst_30914 = (state_30928[7]);var state_30928__$1 = state_30928;var statearr_30933_30948 = state_30928__$1;(statearr_30933_30948[2] = inst_30914);
(statearr_30933_30948[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30929 === 4))
{var inst_30917 = (state_30928[8]);var inst_30917__$1 = (state_30928[2]);var inst_30918 = (inst_30917__$1 == null);var state_30928__$1 = (function (){var statearr_30934 = state_30928;(statearr_30934[8] = inst_30917__$1);
return statearr_30934;
})();if(cljs.core.truth_(inst_30918))
{var statearr_30935_30949 = state_30928__$1;(statearr_30935_30949[1] = 5);
} else
{var statearr_30936_30950 = state_30928__$1;(statearr_30936_30950[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30929 === 3))
{var inst_30926 = (state_30928[2]);var state_30928__$1 = state_30928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30928__$1,inst_30926);
} else
{if((state_val_30929 === 2))
{var state_30928__$1 = state_30928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30928__$1,4,ch);
} else
{if((state_val_30929 === 1))
{var inst_30914 = init;var state_30928__$1 = (function (){var statearr_30937 = state_30928;(statearr_30937[7] = inst_30914);
return statearr_30937;
})();var statearr_30938_30951 = state_30928__$1;(statearr_30938_30951[2] = null);
(statearr_30938_30951[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_30942 = [null,null,null,null,null,null,null,null,null];(statearr_30942[0] = state_machine__5507__auto__);
(statearr_30942[1] = 1);
return statearr_30942;
});
var state_machine__5507__auto____1 = (function (state_30928){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_30928);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e30943){if((e30943 instanceof Object))
{var ex__5510__auto__ = e30943;var statearr_30944_30952 = state_30928;(statearr_30944_30952[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30928);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30953 = state_30928;
state_30928 = G__30953;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_30928){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_30928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_30945 = f__5522__auto__.call(null);(statearr_30945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_30945;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31015){var state_val_31016 = (state_31015[1]);if((state_val_31016 === 1))
{var inst_30995 = cljs.core.seq.call(null,coll);var inst_30996 = inst_30995;var state_31015__$1 = (function (){var statearr_31017 = state_31015;(statearr_31017[7] = inst_30996);
return statearr_31017;
})();var statearr_31018_31036 = state_31015__$1;(statearr_31018_31036[2] = null);
(statearr_31018_31036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31016 === 2))
{var inst_30996 = (state_31015[7]);var state_31015__$1 = state_31015;if(cljs.core.truth_(inst_30996))
{var statearr_31019_31037 = state_31015__$1;(statearr_31019_31037[1] = 4);
} else
{var statearr_31020_31038 = state_31015__$1;(statearr_31020_31038[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31016 === 3))
{var inst_31013 = (state_31015[2]);var state_31015__$1 = state_31015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31015__$1,inst_31013);
} else
{if((state_val_31016 === 4))
{var inst_30996 = (state_31015[7]);var inst_30999 = cljs.core.first.call(null,inst_30996);var state_31015__$1 = state_31015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31015__$1,7,ch,inst_30999);
} else
{if((state_val_31016 === 5))
{var state_31015__$1 = state_31015;if(cljs.core.truth_(close_QMARK_))
{var statearr_31021_31039 = state_31015__$1;(statearr_31021_31039[1] = 8);
} else
{var statearr_31022_31040 = state_31015__$1;(statearr_31022_31040[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31016 === 6))
{var inst_31011 = (state_31015[2]);var state_31015__$1 = state_31015;var statearr_31023_31041 = state_31015__$1;(statearr_31023_31041[2] = inst_31011);
(statearr_31023_31041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31016 === 7))
{var inst_30996 = (state_31015[7]);var inst_31001 = (state_31015[2]);var inst_31002 = cljs.core.next.call(null,inst_30996);var inst_30996__$1 = inst_31002;var state_31015__$1 = (function (){var statearr_31024 = state_31015;(statearr_31024[7] = inst_30996__$1);
(statearr_31024[8] = inst_31001);
return statearr_31024;
})();var statearr_31025_31042 = state_31015__$1;(statearr_31025_31042[2] = null);
(statearr_31025_31042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31016 === 8))
{var inst_31006 = cljs.core.async.close_BANG_.call(null,ch);var state_31015__$1 = state_31015;var statearr_31026_31043 = state_31015__$1;(statearr_31026_31043[2] = inst_31006);
(statearr_31026_31043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31016 === 9))
{var state_31015__$1 = state_31015;var statearr_31027_31044 = state_31015__$1;(statearr_31027_31044[2] = null);
(statearr_31027_31044[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31016 === 10))
{var inst_31009 = (state_31015[2]);var state_31015__$1 = state_31015;var statearr_31028_31045 = state_31015__$1;(statearr_31028_31045[2] = inst_31009);
(statearr_31028_31045[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_31032 = [null,null,null,null,null,null,null,null,null];(statearr_31032[0] = state_machine__5507__auto__);
(statearr_31032[1] = 1);
return statearr_31032;
});
var state_machine__5507__auto____1 = (function (state_31015){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31015);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31033){if((e31033 instanceof Object))
{var ex__5510__auto__ = e31033;var statearr_31034_31046 = state_31015;(statearr_31034_31046[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31047 = state_31015;
state_31015 = G__31047;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31015){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31035 = f__5522__auto__.call(null);(statearr_31035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31035;
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
cljs.core.async.Mux = (function (){var obj31049 = {};return obj31049;
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
cljs.core.async.Mult = (function (){var obj31051 = {};return obj31051;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t31275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31275 = (function (cs,ch,mult,meta31276){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31276 = meta31276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31275.cljs$lang$type = true;
cljs.core.async.t31275.cljs$lang$ctorStr = "cljs.core.async/t31275";
cljs.core.async.t31275.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31275");
});})(cs))
;
cljs.core.async.t31275.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t31275.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t31275.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t31275.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t31275.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t31275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31277){var self__ = this;
var _31277__$1 = this;return self__.meta31276;
});})(cs))
;
cljs.core.async.t31275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31277,meta31276__$1){var self__ = this;
var _31277__$1 = this;return (new cljs.core.async.t31275(self__.cs,self__.ch,self__.mult,meta31276__$1));
});})(cs))
;
cljs.core.async.__GT_t31275 = ((function (cs){
return (function __GT_t31275(cs__$1,ch__$1,mult__$1,meta31276){return (new cljs.core.async.t31275(cs__$1,ch__$1,mult__$1,meta31276));
});})(cs))
;
}
return (new cljs.core.async.t31275(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___31498 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31412){var state_val_31413 = (state_31412[1]);if((state_val_31413 === 32))
{var inst_31356 = (state_31412[7]);var inst_31280 = (state_31412[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31412,31,Object,null,30);var inst_31363 = cljs.core.async.put_BANG_.call(null,inst_31356,inst_31280,done);var state_31412__$1 = state_31412;var statearr_31414_31499 = state_31412__$1;(statearr_31414_31499[2] = inst_31363);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 1))
{var state_31412__$1 = state_31412;var statearr_31415_31500 = state_31412__$1;(statearr_31415_31500[2] = null);
(statearr_31415_31500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 33))
{var inst_31369 = (state_31412[9]);var inst_31371 = cljs.core.chunked_seq_QMARK_.call(null,inst_31369);var state_31412__$1 = state_31412;if(inst_31371)
{var statearr_31416_31501 = state_31412__$1;(statearr_31416_31501[1] = 36);
} else
{var statearr_31417_31502 = state_31412__$1;(statearr_31417_31502[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 2))
{var state_31412__$1 = state_31412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31412__$1,4,ch);
} else
{if((state_val_31413 === 34))
{var state_31412__$1 = state_31412;var statearr_31418_31503 = state_31412__$1;(statearr_31418_31503[2] = null);
(statearr_31418_31503[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 3))
{var inst_31410 = (state_31412[2]);var state_31412__$1 = state_31412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31412__$1,inst_31410);
} else
{if((state_val_31413 === 35))
{var inst_31394 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31419_31504 = state_31412__$1;(statearr_31419_31504[2] = inst_31394);
(statearr_31419_31504[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 4))
{var inst_31280 = (state_31412[8]);var inst_31280__$1 = (state_31412[2]);var inst_31281 = (inst_31280__$1 == null);var state_31412__$1 = (function (){var statearr_31420 = state_31412;(statearr_31420[8] = inst_31280__$1);
return statearr_31420;
})();if(cljs.core.truth_(inst_31281))
{var statearr_31421_31505 = state_31412__$1;(statearr_31421_31505[1] = 5);
} else
{var statearr_31422_31506 = state_31412__$1;(statearr_31422_31506[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 36))
{var inst_31369 = (state_31412[9]);var inst_31373 = cljs.core.chunk_first.call(null,inst_31369);var inst_31374 = cljs.core.chunk_rest.call(null,inst_31369);var inst_31375 = cljs.core.count.call(null,inst_31373);var inst_31348 = inst_31374;var inst_31349 = inst_31373;var inst_31350 = inst_31375;var inst_31351 = 0;var state_31412__$1 = (function (){var statearr_31423 = state_31412;(statearr_31423[10] = inst_31349);
(statearr_31423[11] = inst_31348);
(statearr_31423[12] = inst_31350);
(statearr_31423[13] = inst_31351);
return statearr_31423;
})();var statearr_31424_31507 = state_31412__$1;(statearr_31424_31507[2] = null);
(statearr_31424_31507[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 5))
{var inst_31287 = cljs.core.deref.call(null,cs);var inst_31288 = cljs.core.seq.call(null,inst_31287);var inst_31289 = inst_31288;var inst_31290 = null;var inst_31291 = 0;var inst_31292 = 0;var state_31412__$1 = (function (){var statearr_31425 = state_31412;(statearr_31425[14] = inst_31292);
(statearr_31425[15] = inst_31291);
(statearr_31425[16] = inst_31290);
(statearr_31425[17] = inst_31289);
return statearr_31425;
})();var statearr_31426_31508 = state_31412__$1;(statearr_31426_31508[2] = null);
(statearr_31426_31508[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 37))
{var inst_31369 = (state_31412[9]);var inst_31378 = cljs.core.first.call(null,inst_31369);var state_31412__$1 = (function (){var statearr_31427 = state_31412;(statearr_31427[18] = inst_31378);
return statearr_31427;
})();var statearr_31428_31509 = state_31412__$1;(statearr_31428_31509[2] = null);
(statearr_31428_31509[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 6))
{var inst_31340 = (state_31412[19]);var inst_31339 = cljs.core.deref.call(null,cs);var inst_31340__$1 = cljs.core.keys.call(null,inst_31339);var inst_31341 = cljs.core.count.call(null,inst_31340__$1);var inst_31342 = cljs.core.reset_BANG_.call(null,dctr,inst_31341);var inst_31347 = cljs.core.seq.call(null,inst_31340__$1);var inst_31348 = inst_31347;var inst_31349 = null;var inst_31350 = 0;var inst_31351 = 0;var state_31412__$1 = (function (){var statearr_31429 = state_31412;(statearr_31429[10] = inst_31349);
(statearr_31429[11] = inst_31348);
(statearr_31429[20] = inst_31342);
(statearr_31429[19] = inst_31340__$1);
(statearr_31429[12] = inst_31350);
(statearr_31429[13] = inst_31351);
return statearr_31429;
})();var statearr_31430_31510 = state_31412__$1;(statearr_31430_31510[2] = null);
(statearr_31430_31510[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 38))
{var inst_31391 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31431_31511 = state_31412__$1;(statearr_31431_31511[2] = inst_31391);
(statearr_31431_31511[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 7))
{var inst_31408 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31432_31512 = state_31412__$1;(statearr_31432_31512[2] = inst_31408);
(statearr_31432_31512[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 39))
{var inst_31369 = (state_31412[9]);var inst_31387 = (state_31412[2]);var inst_31388 = cljs.core.next.call(null,inst_31369);var inst_31348 = inst_31388;var inst_31349 = null;var inst_31350 = 0;var inst_31351 = 0;var state_31412__$1 = (function (){var statearr_31433 = state_31412;(statearr_31433[10] = inst_31349);
(statearr_31433[11] = inst_31348);
(statearr_31433[21] = inst_31387);
(statearr_31433[12] = inst_31350);
(statearr_31433[13] = inst_31351);
return statearr_31433;
})();var statearr_31434_31513 = state_31412__$1;(statearr_31434_31513[2] = null);
(statearr_31434_31513[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 8))
{var inst_31292 = (state_31412[14]);var inst_31291 = (state_31412[15]);var inst_31294 = (inst_31292 < inst_31291);var inst_31295 = inst_31294;var state_31412__$1 = state_31412;if(cljs.core.truth_(inst_31295))
{var statearr_31435_31514 = state_31412__$1;(statearr_31435_31514[1] = 10);
} else
{var statearr_31436_31515 = state_31412__$1;(statearr_31436_31515[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 40))
{var inst_31378 = (state_31412[18]);var inst_31379 = (state_31412[2]);var inst_31380 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31381 = cljs.core.async.untap_STAR_.call(null,m,inst_31378);var state_31412__$1 = (function (){var statearr_31437 = state_31412;(statearr_31437[22] = inst_31379);
(statearr_31437[23] = inst_31380);
return statearr_31437;
})();var statearr_31438_31516 = state_31412__$1;(statearr_31438_31516[2] = inst_31381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 9))
{var inst_31337 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31439_31517 = state_31412__$1;(statearr_31439_31517[2] = inst_31337);
(statearr_31439_31517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 41))
{var inst_31378 = (state_31412[18]);var inst_31280 = (state_31412[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31412,40,Object,null,39);var inst_31385 = cljs.core.async.put_BANG_.call(null,inst_31378,inst_31280,done);var state_31412__$1 = state_31412;var statearr_31440_31518 = state_31412__$1;(statearr_31440_31518[2] = inst_31385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 10))
{var inst_31292 = (state_31412[14]);var inst_31290 = (state_31412[16]);var inst_31298 = cljs.core._nth.call(null,inst_31290,inst_31292);var inst_31299 = cljs.core.nth.call(null,inst_31298,0,null);var inst_31300 = cljs.core.nth.call(null,inst_31298,1,null);var state_31412__$1 = (function (){var statearr_31441 = state_31412;(statearr_31441[24] = inst_31299);
return statearr_31441;
})();if(cljs.core.truth_(inst_31300))
{var statearr_31442_31519 = state_31412__$1;(statearr_31442_31519[1] = 13);
} else
{var statearr_31443_31520 = state_31412__$1;(statearr_31443_31520[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 42))
{var state_31412__$1 = state_31412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31412__$1,45,dchan);
} else
{if((state_val_31413 === 11))
{var inst_31309 = (state_31412[25]);var inst_31289 = (state_31412[17]);var inst_31309__$1 = cljs.core.seq.call(null,inst_31289);var state_31412__$1 = (function (){var statearr_31444 = state_31412;(statearr_31444[25] = inst_31309__$1);
return statearr_31444;
})();if(inst_31309__$1)
{var statearr_31445_31521 = state_31412__$1;(statearr_31445_31521[1] = 16);
} else
{var statearr_31446_31522 = state_31412__$1;(statearr_31446_31522[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 43))
{var state_31412__$1 = state_31412;var statearr_31447_31523 = state_31412__$1;(statearr_31447_31523[2] = null);
(statearr_31447_31523[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 12))
{var inst_31335 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31448_31524 = state_31412__$1;(statearr_31448_31524[2] = inst_31335);
(statearr_31448_31524[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 44))
{var inst_31405 = (state_31412[2]);var state_31412__$1 = (function (){var statearr_31449 = state_31412;(statearr_31449[26] = inst_31405);
return statearr_31449;
})();var statearr_31450_31525 = state_31412__$1;(statearr_31450_31525[2] = null);
(statearr_31450_31525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 13))
{var inst_31299 = (state_31412[24]);var inst_31302 = cljs.core.async.close_BANG_.call(null,inst_31299);var state_31412__$1 = state_31412;var statearr_31451_31526 = state_31412__$1;(statearr_31451_31526[2] = inst_31302);
(statearr_31451_31526[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 45))
{var inst_31402 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31455_31527 = state_31412__$1;(statearr_31455_31527[2] = inst_31402);
(statearr_31455_31527[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 14))
{var state_31412__$1 = state_31412;var statearr_31456_31528 = state_31412__$1;(statearr_31456_31528[2] = null);
(statearr_31456_31528[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 15))
{var inst_31292 = (state_31412[14]);var inst_31291 = (state_31412[15]);var inst_31290 = (state_31412[16]);var inst_31289 = (state_31412[17]);var inst_31305 = (state_31412[2]);var inst_31306 = (inst_31292 + 1);var tmp31452 = inst_31291;var tmp31453 = inst_31290;var tmp31454 = inst_31289;var inst_31289__$1 = tmp31454;var inst_31290__$1 = tmp31453;var inst_31291__$1 = tmp31452;var inst_31292__$1 = inst_31306;var state_31412__$1 = (function (){var statearr_31457 = state_31412;(statearr_31457[27] = inst_31305);
(statearr_31457[14] = inst_31292__$1);
(statearr_31457[15] = inst_31291__$1);
(statearr_31457[16] = inst_31290__$1);
(statearr_31457[17] = inst_31289__$1);
return statearr_31457;
})();var statearr_31458_31529 = state_31412__$1;(statearr_31458_31529[2] = null);
(statearr_31458_31529[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 16))
{var inst_31309 = (state_31412[25]);var inst_31311 = cljs.core.chunked_seq_QMARK_.call(null,inst_31309);var state_31412__$1 = state_31412;if(inst_31311)
{var statearr_31459_31530 = state_31412__$1;(statearr_31459_31530[1] = 19);
} else
{var statearr_31460_31531 = state_31412__$1;(statearr_31460_31531[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 17))
{var state_31412__$1 = state_31412;var statearr_31461_31532 = state_31412__$1;(statearr_31461_31532[2] = null);
(statearr_31461_31532[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 18))
{var inst_31333 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31462_31533 = state_31412__$1;(statearr_31462_31533[2] = inst_31333);
(statearr_31462_31533[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 19))
{var inst_31309 = (state_31412[25]);var inst_31313 = cljs.core.chunk_first.call(null,inst_31309);var inst_31314 = cljs.core.chunk_rest.call(null,inst_31309);var inst_31315 = cljs.core.count.call(null,inst_31313);var inst_31289 = inst_31314;var inst_31290 = inst_31313;var inst_31291 = inst_31315;var inst_31292 = 0;var state_31412__$1 = (function (){var statearr_31463 = state_31412;(statearr_31463[14] = inst_31292);
(statearr_31463[15] = inst_31291);
(statearr_31463[16] = inst_31290);
(statearr_31463[17] = inst_31289);
return statearr_31463;
})();var statearr_31464_31534 = state_31412__$1;(statearr_31464_31534[2] = null);
(statearr_31464_31534[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 20))
{var inst_31309 = (state_31412[25]);var inst_31319 = cljs.core.first.call(null,inst_31309);var inst_31320 = cljs.core.nth.call(null,inst_31319,0,null);var inst_31321 = cljs.core.nth.call(null,inst_31319,1,null);var state_31412__$1 = (function (){var statearr_31465 = state_31412;(statearr_31465[28] = inst_31320);
return statearr_31465;
})();if(cljs.core.truth_(inst_31321))
{var statearr_31466_31535 = state_31412__$1;(statearr_31466_31535[1] = 22);
} else
{var statearr_31467_31536 = state_31412__$1;(statearr_31467_31536[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 21))
{var inst_31330 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31468_31537 = state_31412__$1;(statearr_31468_31537[2] = inst_31330);
(statearr_31468_31537[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 22))
{var inst_31320 = (state_31412[28]);var inst_31323 = cljs.core.async.close_BANG_.call(null,inst_31320);var state_31412__$1 = state_31412;var statearr_31469_31538 = state_31412__$1;(statearr_31469_31538[2] = inst_31323);
(statearr_31469_31538[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 23))
{var state_31412__$1 = state_31412;var statearr_31470_31539 = state_31412__$1;(statearr_31470_31539[2] = null);
(statearr_31470_31539[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 24))
{var inst_31309 = (state_31412[25]);var inst_31326 = (state_31412[2]);var inst_31327 = cljs.core.next.call(null,inst_31309);var inst_31289 = inst_31327;var inst_31290 = null;var inst_31291 = 0;var inst_31292 = 0;var state_31412__$1 = (function (){var statearr_31471 = state_31412;(statearr_31471[14] = inst_31292);
(statearr_31471[15] = inst_31291);
(statearr_31471[16] = inst_31290);
(statearr_31471[17] = inst_31289);
(statearr_31471[29] = inst_31326);
return statearr_31471;
})();var statearr_31472_31540 = state_31412__$1;(statearr_31472_31540[2] = null);
(statearr_31472_31540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 25))
{var inst_31350 = (state_31412[12]);var inst_31351 = (state_31412[13]);var inst_31353 = (inst_31351 < inst_31350);var inst_31354 = inst_31353;var state_31412__$1 = state_31412;if(cljs.core.truth_(inst_31354))
{var statearr_31473_31541 = state_31412__$1;(statearr_31473_31541[1] = 27);
} else
{var statearr_31474_31542 = state_31412__$1;(statearr_31474_31542[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 26))
{var inst_31340 = (state_31412[19]);var inst_31398 = (state_31412[2]);var inst_31399 = cljs.core.seq.call(null,inst_31340);var state_31412__$1 = (function (){var statearr_31475 = state_31412;(statearr_31475[30] = inst_31398);
return statearr_31475;
})();if(inst_31399)
{var statearr_31476_31543 = state_31412__$1;(statearr_31476_31543[1] = 42);
} else
{var statearr_31477_31544 = state_31412__$1;(statearr_31477_31544[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 27))
{var inst_31349 = (state_31412[10]);var inst_31351 = (state_31412[13]);var inst_31356 = cljs.core._nth.call(null,inst_31349,inst_31351);var state_31412__$1 = (function (){var statearr_31478 = state_31412;(statearr_31478[7] = inst_31356);
return statearr_31478;
})();var statearr_31479_31545 = state_31412__$1;(statearr_31479_31545[2] = null);
(statearr_31479_31545[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 28))
{var inst_31348 = (state_31412[11]);var inst_31369 = (state_31412[9]);var inst_31369__$1 = cljs.core.seq.call(null,inst_31348);var state_31412__$1 = (function (){var statearr_31483 = state_31412;(statearr_31483[9] = inst_31369__$1);
return statearr_31483;
})();if(inst_31369__$1)
{var statearr_31484_31546 = state_31412__$1;(statearr_31484_31546[1] = 33);
} else
{var statearr_31485_31547 = state_31412__$1;(statearr_31485_31547[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 29))
{var inst_31396 = (state_31412[2]);var state_31412__$1 = state_31412;var statearr_31486_31548 = state_31412__$1;(statearr_31486_31548[2] = inst_31396);
(statearr_31486_31548[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 30))
{var inst_31349 = (state_31412[10]);var inst_31348 = (state_31412[11]);var inst_31350 = (state_31412[12]);var inst_31351 = (state_31412[13]);var inst_31365 = (state_31412[2]);var inst_31366 = (inst_31351 + 1);var tmp31480 = inst_31349;var tmp31481 = inst_31348;var tmp31482 = inst_31350;var inst_31348__$1 = tmp31481;var inst_31349__$1 = tmp31480;var inst_31350__$1 = tmp31482;var inst_31351__$1 = inst_31366;var state_31412__$1 = (function (){var statearr_31487 = state_31412;(statearr_31487[10] = inst_31349__$1);
(statearr_31487[11] = inst_31348__$1);
(statearr_31487[12] = inst_31350__$1);
(statearr_31487[31] = inst_31365);
(statearr_31487[13] = inst_31351__$1);
return statearr_31487;
})();var statearr_31488_31549 = state_31412__$1;(statearr_31488_31549[2] = null);
(statearr_31488_31549[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31413 === 31))
{var inst_31356 = (state_31412[7]);var inst_31357 = (state_31412[2]);var inst_31358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31359 = cljs.core.async.untap_STAR_.call(null,m,inst_31356);var state_31412__$1 = (function (){var statearr_31489 = state_31412;(statearr_31489[32] = inst_31357);
(statearr_31489[33] = inst_31358);
return statearr_31489;
})();var statearr_31490_31550 = state_31412__$1;(statearr_31490_31550[2] = inst_31359);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31412__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_31494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31494[0] = state_machine__5507__auto__);
(statearr_31494[1] = 1);
return statearr_31494;
});
var state_machine__5507__auto____1 = (function (state_31412){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31495){if((e31495 instanceof Object))
{var ex__5510__auto__ = e31495;var statearr_31496_31551 = state_31412;(statearr_31496_31551[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31552 = state_31412;
state_31412 = G__31552;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31412){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31497 = f__5522__auto__.call(null);(statearr_31497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31498);
return statearr_31497;
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
cljs.core.async.Mix = (function (){var obj31554 = {};return obj31554;
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
;var m = (function (){if(typeof cljs.core.async.t31664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31664 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31665){
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
this.meta31665 = meta31665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31664.cljs$lang$type = true;
cljs.core.async.t31664.cljs$lang$ctorStr = "cljs.core.async/t31664";
cljs.core.async.t31664.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31664");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31666){var self__ = this;
var _31666__$1 = this;return self__.meta31665;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31666,meta31665__$1){var self__ = this;
var _31666__$1 = this;return (new cljs.core.async.t31664(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31665__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31664 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31664(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31665){return (new cljs.core.async.t31664(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31665));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31664(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___31773 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31731){var state_val_31732 = (state_31731[1]);if((state_val_31732 === 1))
{var inst_31670 = (state_31731[7]);var inst_31670__$1 = calc_state.call(null);var inst_31671 = cljs.core.seq_QMARK_.call(null,inst_31670__$1);var state_31731__$1 = (function (){var statearr_31733 = state_31731;(statearr_31733[7] = inst_31670__$1);
return statearr_31733;
})();if(inst_31671)
{var statearr_31734_31774 = state_31731__$1;(statearr_31734_31774[1] = 2);
} else
{var statearr_31735_31775 = state_31731__$1;(statearr_31735_31775[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 2))
{var inst_31670 = (state_31731[7]);var inst_31673 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31670);var state_31731__$1 = state_31731;var statearr_31736_31776 = state_31731__$1;(statearr_31736_31776[2] = inst_31673);
(statearr_31736_31776[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 3))
{var inst_31670 = (state_31731[7]);var state_31731__$1 = state_31731;var statearr_31737_31777 = state_31731__$1;(statearr_31737_31777[2] = inst_31670);
(statearr_31737_31777[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 4))
{var inst_31670 = (state_31731[7]);var inst_31676 = (state_31731[2]);var inst_31677 = cljs.core.get.call(null,inst_31676,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31678 = cljs.core.get.call(null,inst_31676,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31679 = cljs.core.get.call(null,inst_31676,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31680 = inst_31670;var state_31731__$1 = (function (){var statearr_31738 = state_31731;(statearr_31738[8] = inst_31679);
(statearr_31738[9] = inst_31678);
(statearr_31738[10] = inst_31677);
(statearr_31738[11] = inst_31680);
return statearr_31738;
})();var statearr_31739_31778 = state_31731__$1;(statearr_31739_31778[2] = null);
(statearr_31739_31778[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 5))
{var inst_31680 = (state_31731[11]);var inst_31683 = cljs.core.seq_QMARK_.call(null,inst_31680);var state_31731__$1 = state_31731;if(inst_31683)
{var statearr_31740_31779 = state_31731__$1;(statearr_31740_31779[1] = 7);
} else
{var statearr_31741_31780 = state_31731__$1;(statearr_31741_31780[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 6))
{var inst_31729 = (state_31731[2]);var state_31731__$1 = state_31731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31731__$1,inst_31729);
} else
{if((state_val_31732 === 7))
{var inst_31680 = (state_31731[11]);var inst_31685 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31680);var state_31731__$1 = state_31731;var statearr_31742_31781 = state_31731__$1;(statearr_31742_31781[2] = inst_31685);
(statearr_31742_31781[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 8))
{var inst_31680 = (state_31731[11]);var state_31731__$1 = state_31731;var statearr_31743_31782 = state_31731__$1;(statearr_31743_31782[2] = inst_31680);
(statearr_31743_31782[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 9))
{var inst_31688 = (state_31731[12]);var inst_31688__$1 = (state_31731[2]);var inst_31689 = cljs.core.get.call(null,inst_31688__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31690 = cljs.core.get.call(null,inst_31688__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31691 = cljs.core.get.call(null,inst_31688__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31731__$1 = (function (){var statearr_31744 = state_31731;(statearr_31744[13] = inst_31690);
(statearr_31744[14] = inst_31691);
(statearr_31744[12] = inst_31688__$1);
return statearr_31744;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31731__$1,10,inst_31689);
} else
{if((state_val_31732 === 10))
{var inst_31696 = (state_31731[15]);var inst_31695 = (state_31731[16]);var inst_31694 = (state_31731[2]);var inst_31695__$1 = cljs.core.nth.call(null,inst_31694,0,null);var inst_31696__$1 = cljs.core.nth.call(null,inst_31694,1,null);var inst_31697 = (inst_31695__$1 == null);var inst_31698 = cljs.core._EQ_.call(null,inst_31696__$1,change);var inst_31699 = (inst_31697) || (inst_31698);var state_31731__$1 = (function (){var statearr_31745 = state_31731;(statearr_31745[15] = inst_31696__$1);
(statearr_31745[16] = inst_31695__$1);
return statearr_31745;
})();if(cljs.core.truth_(inst_31699))
{var statearr_31746_31783 = state_31731__$1;(statearr_31746_31783[1] = 11);
} else
{var statearr_31747_31784 = state_31731__$1;(statearr_31747_31784[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 11))
{var inst_31695 = (state_31731[16]);var inst_31701 = (inst_31695 == null);var state_31731__$1 = state_31731;if(cljs.core.truth_(inst_31701))
{var statearr_31748_31785 = state_31731__$1;(statearr_31748_31785[1] = 14);
} else
{var statearr_31749_31786 = state_31731__$1;(statearr_31749_31786[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 12))
{var inst_31691 = (state_31731[14]);var inst_31696 = (state_31731[15]);var inst_31710 = (state_31731[17]);var inst_31710__$1 = inst_31691.call(null,inst_31696);var state_31731__$1 = (function (){var statearr_31750 = state_31731;(statearr_31750[17] = inst_31710__$1);
return statearr_31750;
})();if(cljs.core.truth_(inst_31710__$1))
{var statearr_31751_31787 = state_31731__$1;(statearr_31751_31787[1] = 17);
} else
{var statearr_31752_31788 = state_31731__$1;(statearr_31752_31788[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 13))
{var inst_31727 = (state_31731[2]);var state_31731__$1 = state_31731;var statearr_31753_31789 = state_31731__$1;(statearr_31753_31789[2] = inst_31727);
(statearr_31753_31789[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 14))
{var inst_31696 = (state_31731[15]);var inst_31703 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31696);var state_31731__$1 = state_31731;var statearr_31754_31790 = state_31731__$1;(statearr_31754_31790[2] = inst_31703);
(statearr_31754_31790[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 15))
{var state_31731__$1 = state_31731;var statearr_31755_31791 = state_31731__$1;(statearr_31755_31791[2] = null);
(statearr_31755_31791[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 16))
{var inst_31706 = (state_31731[2]);var inst_31707 = calc_state.call(null);var inst_31680 = inst_31707;var state_31731__$1 = (function (){var statearr_31756 = state_31731;(statearr_31756[18] = inst_31706);
(statearr_31756[11] = inst_31680);
return statearr_31756;
})();var statearr_31757_31792 = state_31731__$1;(statearr_31757_31792[2] = null);
(statearr_31757_31792[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 17))
{var inst_31710 = (state_31731[17]);var state_31731__$1 = state_31731;var statearr_31758_31793 = state_31731__$1;(statearr_31758_31793[2] = inst_31710);
(statearr_31758_31793[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 18))
{var inst_31690 = (state_31731[13]);var inst_31691 = (state_31731[14]);var inst_31696 = (state_31731[15]);var inst_31713 = cljs.core.empty_QMARK_.call(null,inst_31691);var inst_31714 = inst_31690.call(null,inst_31696);var inst_31715 = cljs.core.not.call(null,inst_31714);var inst_31716 = (inst_31713) && (inst_31715);var state_31731__$1 = state_31731;var statearr_31759_31794 = state_31731__$1;(statearr_31759_31794[2] = inst_31716);
(statearr_31759_31794[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 19))
{var inst_31718 = (state_31731[2]);var state_31731__$1 = state_31731;if(cljs.core.truth_(inst_31718))
{var statearr_31760_31795 = state_31731__$1;(statearr_31760_31795[1] = 20);
} else
{var statearr_31761_31796 = state_31731__$1;(statearr_31761_31796[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 20))
{var inst_31695 = (state_31731[16]);var state_31731__$1 = state_31731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31731__$1,23,out,inst_31695);
} else
{if((state_val_31732 === 21))
{var state_31731__$1 = state_31731;var statearr_31762_31797 = state_31731__$1;(statearr_31762_31797[2] = null);
(statearr_31762_31797[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 22))
{var inst_31688 = (state_31731[12]);var inst_31724 = (state_31731[2]);var inst_31680 = inst_31688;var state_31731__$1 = (function (){var statearr_31763 = state_31731;(statearr_31763[19] = inst_31724);
(statearr_31763[11] = inst_31680);
return statearr_31763;
})();var statearr_31764_31798 = state_31731__$1;(statearr_31764_31798[2] = null);
(statearr_31764_31798[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31732 === 23))
{var inst_31721 = (state_31731[2]);var state_31731__$1 = state_31731;var statearr_31765_31799 = state_31731__$1;(statearr_31765_31799[2] = inst_31721);
(statearr_31765_31799[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_31769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31769[0] = state_machine__5507__auto__);
(statearr_31769[1] = 1);
return statearr_31769;
});
var state_machine__5507__auto____1 = (function (state_31731){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31770){if((e31770 instanceof Object))
{var ex__5510__auto__ = e31770;var statearr_31771_31800 = state_31731;(statearr_31771_31800[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31731);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31801 = state_31731;
state_31731 = G__31801;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31731){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31772 = f__5522__auto__.call(null);(statearr_31772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31773);
return statearr_31772;
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
cljs.core.async.Pub = (function (){var obj31803 = {};return obj31803;
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
return (function (p1__31804_SHARP_){if(cljs.core.truth_(p1__31804_SHARP_.call(null,topic)))
{return p1__31804_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31804_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t31929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31929 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta31930){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta31930 = meta31930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31929.cljs$lang$type = true;
cljs.core.async.t31929.cljs$lang$ctorStr = "cljs.core.async/t31929";
cljs.core.async.t31929.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31929");
});})(mults,ensure_mult))
;
cljs.core.async.t31929.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t31929.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t31929.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t31929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t31929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t31929.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t31929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31931){var self__ = this;
var _31931__$1 = this;return self__.meta31930;
});})(mults,ensure_mult))
;
cljs.core.async.t31929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31931,meta31930__$1){var self__ = this;
var _31931__$1 = this;return (new cljs.core.async.t31929(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta31930__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t31929 = ((function (mults,ensure_mult){
return (function __GT_t31929(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31930){return (new cljs.core.async.t31929(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta31930));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t31929(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___32053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32005){var state_val_32006 = (state_32005[1]);if((state_val_32006 === 1))
{var state_32005__$1 = state_32005;var statearr_32007_32054 = state_32005__$1;(statearr_32007_32054[2] = null);
(statearr_32007_32054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 2))
{var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32005__$1,4,ch);
} else
{if((state_val_32006 === 3))
{var inst_32003 = (state_32005[2]);var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32005__$1,inst_32003);
} else
{if((state_val_32006 === 4))
{var inst_31934 = (state_32005[7]);var inst_31934__$1 = (state_32005[2]);var inst_31935 = (inst_31934__$1 == null);var state_32005__$1 = (function (){var statearr_32008 = state_32005;(statearr_32008[7] = inst_31934__$1);
return statearr_32008;
})();if(cljs.core.truth_(inst_31935))
{var statearr_32009_32055 = state_32005__$1;(statearr_32009_32055[1] = 5);
} else
{var statearr_32010_32056 = state_32005__$1;(statearr_32010_32056[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 5))
{var inst_31941 = cljs.core.deref.call(null,mults);var inst_31942 = cljs.core.vals.call(null,inst_31941);var inst_31943 = cljs.core.seq.call(null,inst_31942);var inst_31944 = inst_31943;var inst_31945 = null;var inst_31946 = 0;var inst_31947 = 0;var state_32005__$1 = (function (){var statearr_32011 = state_32005;(statearr_32011[8] = inst_31945);
(statearr_32011[9] = inst_31944);
(statearr_32011[10] = inst_31946);
(statearr_32011[11] = inst_31947);
return statearr_32011;
})();var statearr_32012_32057 = state_32005__$1;(statearr_32012_32057[2] = null);
(statearr_32012_32057[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 6))
{var inst_31934 = (state_32005[7]);var inst_31982 = (state_32005[12]);var inst_31984 = (state_32005[13]);var inst_31982__$1 = topic_fn.call(null,inst_31934);var inst_31983 = cljs.core.deref.call(null,mults);var inst_31984__$1 = cljs.core.get.call(null,inst_31983,inst_31982__$1);var state_32005__$1 = (function (){var statearr_32013 = state_32005;(statearr_32013[12] = inst_31982__$1);
(statearr_32013[13] = inst_31984__$1);
return statearr_32013;
})();if(cljs.core.truth_(inst_31984__$1))
{var statearr_32014_32058 = state_32005__$1;(statearr_32014_32058[1] = 19);
} else
{var statearr_32015_32059 = state_32005__$1;(statearr_32015_32059[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 7))
{var inst_32001 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32016_32060 = state_32005__$1;(statearr_32016_32060[2] = inst_32001);
(statearr_32016_32060[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 8))
{var inst_31946 = (state_32005[10]);var inst_31947 = (state_32005[11]);var inst_31949 = (inst_31947 < inst_31946);var inst_31950 = inst_31949;var state_32005__$1 = state_32005;if(cljs.core.truth_(inst_31950))
{var statearr_32020_32061 = state_32005__$1;(statearr_32020_32061[1] = 10);
} else
{var statearr_32021_32062 = state_32005__$1;(statearr_32021_32062[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 9))
{var inst_31980 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32022_32063 = state_32005__$1;(statearr_32022_32063[2] = inst_31980);
(statearr_32022_32063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 10))
{var inst_31945 = (state_32005[8]);var inst_31944 = (state_32005[9]);var inst_31946 = (state_32005[10]);var inst_31947 = (state_32005[11]);var inst_31952 = cljs.core._nth.call(null,inst_31945,inst_31947);var inst_31953 = cljs.core.async.muxch_STAR_.call(null,inst_31952);var inst_31954 = cljs.core.async.close_BANG_.call(null,inst_31953);var inst_31955 = (inst_31947 + 1);var tmp32017 = inst_31945;var tmp32018 = inst_31944;var tmp32019 = inst_31946;var inst_31944__$1 = tmp32018;var inst_31945__$1 = tmp32017;var inst_31946__$1 = tmp32019;var inst_31947__$1 = inst_31955;var state_32005__$1 = (function (){var statearr_32023 = state_32005;(statearr_32023[8] = inst_31945__$1);
(statearr_32023[9] = inst_31944__$1);
(statearr_32023[10] = inst_31946__$1);
(statearr_32023[11] = inst_31947__$1);
(statearr_32023[14] = inst_31954);
return statearr_32023;
})();var statearr_32024_32064 = state_32005__$1;(statearr_32024_32064[2] = null);
(statearr_32024_32064[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 11))
{var inst_31944 = (state_32005[9]);var inst_31958 = (state_32005[15]);var inst_31958__$1 = cljs.core.seq.call(null,inst_31944);var state_32005__$1 = (function (){var statearr_32025 = state_32005;(statearr_32025[15] = inst_31958__$1);
return statearr_32025;
})();if(inst_31958__$1)
{var statearr_32026_32065 = state_32005__$1;(statearr_32026_32065[1] = 13);
} else
{var statearr_32027_32066 = state_32005__$1;(statearr_32027_32066[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 12))
{var inst_31978 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32028_32067 = state_32005__$1;(statearr_32028_32067[2] = inst_31978);
(statearr_32028_32067[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 13))
{var inst_31958 = (state_32005[15]);var inst_31960 = cljs.core.chunked_seq_QMARK_.call(null,inst_31958);var state_32005__$1 = state_32005;if(inst_31960)
{var statearr_32029_32068 = state_32005__$1;(statearr_32029_32068[1] = 16);
} else
{var statearr_32030_32069 = state_32005__$1;(statearr_32030_32069[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 14))
{var state_32005__$1 = state_32005;var statearr_32031_32070 = state_32005__$1;(statearr_32031_32070[2] = null);
(statearr_32031_32070[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 15))
{var inst_31976 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32032_32071 = state_32005__$1;(statearr_32032_32071[2] = inst_31976);
(statearr_32032_32071[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 16))
{var inst_31958 = (state_32005[15]);var inst_31962 = cljs.core.chunk_first.call(null,inst_31958);var inst_31963 = cljs.core.chunk_rest.call(null,inst_31958);var inst_31964 = cljs.core.count.call(null,inst_31962);var inst_31944 = inst_31963;var inst_31945 = inst_31962;var inst_31946 = inst_31964;var inst_31947 = 0;var state_32005__$1 = (function (){var statearr_32033 = state_32005;(statearr_32033[8] = inst_31945);
(statearr_32033[9] = inst_31944);
(statearr_32033[10] = inst_31946);
(statearr_32033[11] = inst_31947);
return statearr_32033;
})();var statearr_32034_32072 = state_32005__$1;(statearr_32034_32072[2] = null);
(statearr_32034_32072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 17))
{var inst_31958 = (state_32005[15]);var inst_31967 = cljs.core.first.call(null,inst_31958);var inst_31968 = cljs.core.async.muxch_STAR_.call(null,inst_31967);var inst_31969 = cljs.core.async.close_BANG_.call(null,inst_31968);var inst_31970 = cljs.core.next.call(null,inst_31958);var inst_31944 = inst_31970;var inst_31945 = null;var inst_31946 = 0;var inst_31947 = 0;var state_32005__$1 = (function (){var statearr_32035 = state_32005;(statearr_32035[8] = inst_31945);
(statearr_32035[9] = inst_31944);
(statearr_32035[10] = inst_31946);
(statearr_32035[11] = inst_31947);
(statearr_32035[16] = inst_31969);
return statearr_32035;
})();var statearr_32036_32073 = state_32005__$1;(statearr_32036_32073[2] = null);
(statearr_32036_32073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 18))
{var inst_31973 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32037_32074 = state_32005__$1;(statearr_32037_32074[2] = inst_31973);
(statearr_32037_32074[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 19))
{var state_32005__$1 = state_32005;var statearr_32038_32075 = state_32005__$1;(statearr_32038_32075[2] = null);
(statearr_32038_32075[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 20))
{var state_32005__$1 = state_32005;var statearr_32039_32076 = state_32005__$1;(statearr_32039_32076[2] = null);
(statearr_32039_32076[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 21))
{var inst_31998 = (state_32005[2]);var state_32005__$1 = (function (){var statearr_32040 = state_32005;(statearr_32040[17] = inst_31998);
return statearr_32040;
})();var statearr_32041_32077 = state_32005__$1;(statearr_32041_32077[2] = null);
(statearr_32041_32077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 22))
{var inst_31995 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32042_32078 = state_32005__$1;(statearr_32042_32078[2] = inst_31995);
(statearr_32042_32078[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 23))
{var inst_31982 = (state_32005[12]);var inst_31986 = (state_32005[2]);var inst_31987 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31982);var state_32005__$1 = (function (){var statearr_32043 = state_32005;(statearr_32043[18] = inst_31986);
return statearr_32043;
})();var statearr_32044_32079 = state_32005__$1;(statearr_32044_32079[2] = inst_31987);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32005__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32006 === 24))
{var inst_31934 = (state_32005[7]);var inst_31984 = (state_32005[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32005,23,Object,null,22);var inst_31991 = cljs.core.async.muxch_STAR_.call(null,inst_31984);var state_32005__$1 = state_32005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32005__$1,25,inst_31991,inst_31934);
} else
{if((state_val_32006 === 25))
{var inst_31993 = (state_32005[2]);var state_32005__$1 = state_32005;var statearr_32045_32080 = state_32005__$1;(statearr_32045_32080[2] = inst_31993);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32005__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_32049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32049[0] = state_machine__5507__auto__);
(statearr_32049[1] = 1);
return statearr_32049;
});
var state_machine__5507__auto____1 = (function (state_32005){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32050){if((e32050 instanceof Object))
{var ex__5510__auto__ = e32050;var statearr_32051_32081 = state_32005;(statearr_32051_32081[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32082 = state_32005;
state_32005 = G__32082;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32005){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32052 = f__5522__auto__.call(null);(statearr_32052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32053);
return statearr_32052;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___32219 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32189){var state_val_32190 = (state_32189[1]);if((state_val_32190 === 1))
{var state_32189__$1 = state_32189;var statearr_32191_32220 = state_32189__$1;(statearr_32191_32220[2] = null);
(statearr_32191_32220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 2))
{var inst_32152 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32153 = 0;var state_32189__$1 = (function (){var statearr_32192 = state_32189;(statearr_32192[7] = inst_32152);
(statearr_32192[8] = inst_32153);
return statearr_32192;
})();var statearr_32193_32221 = state_32189__$1;(statearr_32193_32221[2] = null);
(statearr_32193_32221[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 3))
{var inst_32187 = (state_32189[2]);var state_32189__$1 = state_32189;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32189__$1,inst_32187);
} else
{if((state_val_32190 === 4))
{var inst_32153 = (state_32189[8]);var inst_32155 = (inst_32153 < cnt);var state_32189__$1 = state_32189;if(cljs.core.truth_(inst_32155))
{var statearr_32194_32222 = state_32189__$1;(statearr_32194_32222[1] = 6);
} else
{var statearr_32195_32223 = state_32189__$1;(statearr_32195_32223[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 5))
{var inst_32173 = (state_32189[2]);var state_32189__$1 = (function (){var statearr_32196 = state_32189;(statearr_32196[9] = inst_32173);
return statearr_32196;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32189__$1,12,dchan);
} else
{if((state_val_32190 === 6))
{var state_32189__$1 = state_32189;var statearr_32197_32224 = state_32189__$1;(statearr_32197_32224[2] = null);
(statearr_32197_32224[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 7))
{var state_32189__$1 = state_32189;var statearr_32198_32225 = state_32189__$1;(statearr_32198_32225[2] = null);
(statearr_32198_32225[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 8))
{var inst_32171 = (state_32189[2]);var state_32189__$1 = state_32189;var statearr_32199_32226 = state_32189__$1;(statearr_32199_32226[2] = inst_32171);
(statearr_32199_32226[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 9))
{var inst_32153 = (state_32189[8]);var inst_32166 = (state_32189[2]);var inst_32167 = (inst_32153 + 1);var inst_32153__$1 = inst_32167;var state_32189__$1 = (function (){var statearr_32200 = state_32189;(statearr_32200[8] = inst_32153__$1);
(statearr_32200[10] = inst_32166);
return statearr_32200;
})();var statearr_32201_32227 = state_32189__$1;(statearr_32201_32227[2] = null);
(statearr_32201_32227[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 10))
{var inst_32157 = (state_32189[2]);var inst_32158 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_32189__$1 = (function (){var statearr_32202 = state_32189;(statearr_32202[11] = inst_32157);
return statearr_32202;
})();var statearr_32203_32228 = state_32189__$1;(statearr_32203_32228[2] = inst_32158);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32189__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 11))
{var inst_32153 = (state_32189[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32189,10,Object,null,9);var inst_32162 = chs__$1.call(null,inst_32153);var inst_32163 = done.call(null,inst_32153);var inst_32164 = cljs.core.async.take_BANG_.call(null,inst_32162,inst_32163);var state_32189__$1 = state_32189;var statearr_32204_32229 = state_32189__$1;(statearr_32204_32229[2] = inst_32164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32189__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 12))
{var inst_32175 = (state_32189[12]);var inst_32175__$1 = (state_32189[2]);var inst_32176 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32175__$1);var state_32189__$1 = (function (){var statearr_32205 = state_32189;(statearr_32205[12] = inst_32175__$1);
return statearr_32205;
})();if(cljs.core.truth_(inst_32176))
{var statearr_32206_32230 = state_32189__$1;(statearr_32206_32230[1] = 13);
} else
{var statearr_32207_32231 = state_32189__$1;(statearr_32207_32231[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 13))
{var inst_32178 = cljs.core.async.close_BANG_.call(null,out);var state_32189__$1 = state_32189;var statearr_32208_32232 = state_32189__$1;(statearr_32208_32232[2] = inst_32178);
(statearr_32208_32232[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 14))
{var inst_32175 = (state_32189[12]);var inst_32180 = cljs.core.apply.call(null,f,inst_32175);var state_32189__$1 = state_32189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32189__$1,16,out,inst_32180);
} else
{if((state_val_32190 === 15))
{var inst_32185 = (state_32189[2]);var state_32189__$1 = state_32189;var statearr_32209_32233 = state_32189__$1;(statearr_32209_32233[2] = inst_32185);
(statearr_32209_32233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32190 === 16))
{var inst_32182 = (state_32189[2]);var state_32189__$1 = (function (){var statearr_32210 = state_32189;(statearr_32210[13] = inst_32182);
return statearr_32210;
})();var statearr_32211_32234 = state_32189__$1;(statearr_32211_32234[2] = null);
(statearr_32211_32234[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32215[0] = state_machine__5507__auto__);
(statearr_32215[1] = 1);
return statearr_32215;
});
var state_machine__5507__auto____1 = (function (state_32189){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32189);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32216){if((e32216 instanceof Object))
{var ex__5510__auto__ = e32216;var statearr_32217_32235 = state_32189;(statearr_32217_32235[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32189);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32236 = state_32189;
state_32189 = G__32236;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32189){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32218 = f__5522__auto__.call(null);(statearr_32218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32219);
return statearr_32218;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32320){var state_val_32321 = (state_32320[1]);if((state_val_32321 === 1))
{var inst_32291 = cljs.core.vec.call(null,chs);var inst_32292 = inst_32291;var state_32320__$1 = (function (){var statearr_32322 = state_32320;(statearr_32322[7] = inst_32292);
return statearr_32322;
})();var statearr_32323_32345 = state_32320__$1;(statearr_32323_32345[2] = null);
(statearr_32323_32345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32321 === 2))
{var inst_32292 = (state_32320[7]);var inst_32294 = cljs.core.count.call(null,inst_32292);var inst_32295 = (inst_32294 > 0);var state_32320__$1 = state_32320;if(cljs.core.truth_(inst_32295))
{var statearr_32324_32346 = state_32320__$1;(statearr_32324_32346[1] = 4);
} else
{var statearr_32325_32347 = state_32320__$1;(statearr_32325_32347[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32321 === 3))
{var inst_32318 = (state_32320[2]);var state_32320__$1 = state_32320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32320__$1,inst_32318);
} else
{if((state_val_32321 === 4))
{var inst_32292 = (state_32320[7]);var state_32320__$1 = state_32320;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32320__$1,7,inst_32292);
} else
{if((state_val_32321 === 5))
{var inst_32314 = cljs.core.async.close_BANG_.call(null,out);var state_32320__$1 = state_32320;var statearr_32326_32348 = state_32320__$1;(statearr_32326_32348[2] = inst_32314);
(statearr_32326_32348[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32321 === 6))
{var inst_32316 = (state_32320[2]);var state_32320__$1 = state_32320;var statearr_32327_32349 = state_32320__$1;(statearr_32327_32349[2] = inst_32316);
(statearr_32327_32349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32321 === 7))
{var inst_32300 = (state_32320[8]);var inst_32299 = (state_32320[9]);var inst_32299__$1 = (state_32320[2]);var inst_32300__$1 = cljs.core.nth.call(null,inst_32299__$1,0,null);var inst_32301 = cljs.core.nth.call(null,inst_32299__$1,1,null);var inst_32302 = (inst_32300__$1 == null);var state_32320__$1 = (function (){var statearr_32328 = state_32320;(statearr_32328[10] = inst_32301);
(statearr_32328[8] = inst_32300__$1);
(statearr_32328[9] = inst_32299__$1);
return statearr_32328;
})();if(cljs.core.truth_(inst_32302))
{var statearr_32329_32350 = state_32320__$1;(statearr_32329_32350[1] = 8);
} else
{var statearr_32330_32351 = state_32320__$1;(statearr_32330_32351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32321 === 8))
{var inst_32301 = (state_32320[10]);var inst_32300 = (state_32320[8]);var inst_32299 = (state_32320[9]);var inst_32292 = (state_32320[7]);var inst_32304 = (function (){var c = inst_32301;var v = inst_32300;var vec__32297 = inst_32299;var cs = inst_32292;return ((function (c,v,vec__32297,cs,inst_32301,inst_32300,inst_32299,inst_32292,state_val_32321){
return (function (p1__32237_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__32237_SHARP_);
});
;})(c,v,vec__32297,cs,inst_32301,inst_32300,inst_32299,inst_32292,state_val_32321))
})();var inst_32305 = cljs.core.filterv.call(null,inst_32304,inst_32292);var inst_32292__$1 = inst_32305;var state_32320__$1 = (function (){var statearr_32331 = state_32320;(statearr_32331[7] = inst_32292__$1);
return statearr_32331;
})();var statearr_32332_32352 = state_32320__$1;(statearr_32332_32352[2] = null);
(statearr_32332_32352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32321 === 9))
{var inst_32300 = (state_32320[8]);var state_32320__$1 = state_32320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32320__$1,11,out,inst_32300);
} else
{if((state_val_32321 === 10))
{var inst_32312 = (state_32320[2]);var state_32320__$1 = state_32320;var statearr_32334_32353 = state_32320__$1;(statearr_32334_32353[2] = inst_32312);
(statearr_32334_32353[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32321 === 11))
{var inst_32292 = (state_32320[7]);var inst_32309 = (state_32320[2]);var tmp32333 = inst_32292;var inst_32292__$1 = tmp32333;var state_32320__$1 = (function (){var statearr_32335 = state_32320;(statearr_32335[7] = inst_32292__$1);
(statearr_32335[11] = inst_32309);
return statearr_32335;
})();var statearr_32336_32354 = state_32320__$1;(statearr_32336_32354[2] = null);
(statearr_32336_32354[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32340 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32340[0] = state_machine__5507__auto__);
(statearr_32340[1] = 1);
return statearr_32340;
});
var state_machine__5507__auto____1 = (function (state_32320){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32341){if((e32341 instanceof Object))
{var ex__5510__auto__ = e32341;var statearr_32342_32355 = state_32320;(statearr_32342_32355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32356 = state_32320;
state_32320 = G__32356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32320){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32343 = f__5522__auto__.call(null);(statearr_32343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32344);
return statearr_32343;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32426){var state_val_32427 = (state_32426[1]);if((state_val_32427 === 1))
{var inst_32403 = 0;var state_32426__$1 = (function (){var statearr_32428 = state_32426;(statearr_32428[7] = inst_32403);
return statearr_32428;
})();var statearr_32429_32450 = state_32426__$1;(statearr_32429_32450[2] = null);
(statearr_32429_32450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 2))
{var inst_32403 = (state_32426[7]);var inst_32405 = (inst_32403 < n);var state_32426__$1 = state_32426;if(cljs.core.truth_(inst_32405))
{var statearr_32430_32451 = state_32426__$1;(statearr_32430_32451[1] = 4);
} else
{var statearr_32431_32452 = state_32426__$1;(statearr_32431_32452[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 3))
{var inst_32423 = (state_32426[2]);var inst_32424 = cljs.core.async.close_BANG_.call(null,out);var state_32426__$1 = (function (){var statearr_32432 = state_32426;(statearr_32432[8] = inst_32423);
return statearr_32432;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32426__$1,inst_32424);
} else
{if((state_val_32427 === 4))
{var state_32426__$1 = state_32426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32426__$1,7,ch);
} else
{if((state_val_32427 === 5))
{var state_32426__$1 = state_32426;var statearr_32433_32453 = state_32426__$1;(statearr_32433_32453[2] = null);
(statearr_32433_32453[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 6))
{var inst_32421 = (state_32426[2]);var state_32426__$1 = state_32426;var statearr_32434_32454 = state_32426__$1;(statearr_32434_32454[2] = inst_32421);
(statearr_32434_32454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 7))
{var inst_32408 = (state_32426[9]);var inst_32408__$1 = (state_32426[2]);var inst_32409 = (inst_32408__$1 == null);var inst_32410 = cljs.core.not.call(null,inst_32409);var state_32426__$1 = (function (){var statearr_32435 = state_32426;(statearr_32435[9] = inst_32408__$1);
return statearr_32435;
})();if(inst_32410)
{var statearr_32436_32455 = state_32426__$1;(statearr_32436_32455[1] = 8);
} else
{var statearr_32437_32456 = state_32426__$1;(statearr_32437_32456[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 8))
{var inst_32408 = (state_32426[9]);var state_32426__$1 = state_32426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32426__$1,11,out,inst_32408);
} else
{if((state_val_32427 === 9))
{var state_32426__$1 = state_32426;var statearr_32438_32457 = state_32426__$1;(statearr_32438_32457[2] = null);
(statearr_32438_32457[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 10))
{var inst_32418 = (state_32426[2]);var state_32426__$1 = state_32426;var statearr_32439_32458 = state_32426__$1;(statearr_32439_32458[2] = inst_32418);
(statearr_32439_32458[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32427 === 11))
{var inst_32403 = (state_32426[7]);var inst_32413 = (state_32426[2]);var inst_32414 = (inst_32403 + 1);var inst_32403__$1 = inst_32414;var state_32426__$1 = (function (){var statearr_32440 = state_32426;(statearr_32440[10] = inst_32413);
(statearr_32440[7] = inst_32403__$1);
return statearr_32440;
})();var statearr_32441_32459 = state_32426__$1;(statearr_32441_32459[2] = null);
(statearr_32441_32459[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32445 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32445[0] = state_machine__5507__auto__);
(statearr_32445[1] = 1);
return statearr_32445;
});
var state_machine__5507__auto____1 = (function (state_32426){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32426);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32446){if((e32446 instanceof Object))
{var ex__5510__auto__ = e32446;var statearr_32447_32460 = state_32426;(statearr_32447_32460[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32461 = state_32426;
state_32426 = G__32461;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32426){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32448 = f__5522__auto__.call(null);(statearr_32448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32449);
return statearr_32448;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32558 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32533){var state_val_32534 = (state_32533[1]);if((state_val_32534 === 1))
{var inst_32510 = null;var state_32533__$1 = (function (){var statearr_32535 = state_32533;(statearr_32535[7] = inst_32510);
return statearr_32535;
})();var statearr_32536_32559 = state_32533__$1;(statearr_32536_32559[2] = null);
(statearr_32536_32559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32534 === 2))
{var state_32533__$1 = state_32533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32533__$1,4,ch);
} else
{if((state_val_32534 === 3))
{var inst_32530 = (state_32533[2]);var inst_32531 = cljs.core.async.close_BANG_.call(null,out);var state_32533__$1 = (function (){var statearr_32537 = state_32533;(statearr_32537[8] = inst_32530);
return statearr_32537;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32533__$1,inst_32531);
} else
{if((state_val_32534 === 4))
{var inst_32513 = (state_32533[9]);var inst_32513__$1 = (state_32533[2]);var inst_32514 = (inst_32513__$1 == null);var inst_32515 = cljs.core.not.call(null,inst_32514);var state_32533__$1 = (function (){var statearr_32538 = state_32533;(statearr_32538[9] = inst_32513__$1);
return statearr_32538;
})();if(inst_32515)
{var statearr_32539_32560 = state_32533__$1;(statearr_32539_32560[1] = 5);
} else
{var statearr_32540_32561 = state_32533__$1;(statearr_32540_32561[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32534 === 5))
{var inst_32510 = (state_32533[7]);var inst_32513 = (state_32533[9]);var inst_32517 = cljs.core._EQ_.call(null,inst_32513,inst_32510);var state_32533__$1 = state_32533;if(inst_32517)
{var statearr_32541_32562 = state_32533__$1;(statearr_32541_32562[1] = 8);
} else
{var statearr_32542_32563 = state_32533__$1;(statearr_32542_32563[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32534 === 6))
{var state_32533__$1 = state_32533;var statearr_32544_32564 = state_32533__$1;(statearr_32544_32564[2] = null);
(statearr_32544_32564[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32534 === 7))
{var inst_32528 = (state_32533[2]);var state_32533__$1 = state_32533;var statearr_32545_32565 = state_32533__$1;(statearr_32545_32565[2] = inst_32528);
(statearr_32545_32565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32534 === 8))
{var inst_32510 = (state_32533[7]);var tmp32543 = inst_32510;var inst_32510__$1 = tmp32543;var state_32533__$1 = (function (){var statearr_32546 = state_32533;(statearr_32546[7] = inst_32510__$1);
return statearr_32546;
})();var statearr_32547_32566 = state_32533__$1;(statearr_32547_32566[2] = null);
(statearr_32547_32566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32534 === 9))
{var inst_32513 = (state_32533[9]);var state_32533__$1 = state_32533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32533__$1,11,out,inst_32513);
} else
{if((state_val_32534 === 10))
{var inst_32525 = (state_32533[2]);var state_32533__$1 = state_32533;var statearr_32548_32567 = state_32533__$1;(statearr_32548_32567[2] = inst_32525);
(statearr_32548_32567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32534 === 11))
{var inst_32513 = (state_32533[9]);var inst_32522 = (state_32533[2]);var inst_32510 = inst_32513;var state_32533__$1 = (function (){var statearr_32549 = state_32533;(statearr_32549[10] = inst_32522);
(statearr_32549[7] = inst_32510);
return statearr_32549;
})();var statearr_32550_32568 = state_32533__$1;(statearr_32550_32568[2] = null);
(statearr_32550_32568[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32554 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_32554[0] = state_machine__5507__auto__);
(statearr_32554[1] = 1);
return statearr_32554;
});
var state_machine__5507__auto____1 = (function (state_32533){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32533);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32555){if((e32555 instanceof Object))
{var ex__5510__auto__ = e32555;var statearr_32556_32569 = state_32533;(statearr_32556_32569[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32570 = state_32533;
state_32533 = G__32570;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32533){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32557 = f__5522__auto__.call(null);(statearr_32557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32558);
return statearr_32557;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32705 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32675){var state_val_32676 = (state_32675[1]);if((state_val_32676 === 1))
{var inst_32638 = (new Array(n));var inst_32639 = inst_32638;var inst_32640 = 0;var state_32675__$1 = (function (){var statearr_32677 = state_32675;(statearr_32677[7] = inst_32639);
(statearr_32677[8] = inst_32640);
return statearr_32677;
})();var statearr_32678_32706 = state_32675__$1;(statearr_32678_32706[2] = null);
(statearr_32678_32706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 2))
{var state_32675__$1 = state_32675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32675__$1,4,ch);
} else
{if((state_val_32676 === 3))
{var inst_32673 = (state_32675[2]);var state_32675__$1 = state_32675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32675__$1,inst_32673);
} else
{if((state_val_32676 === 4))
{var inst_32643 = (state_32675[9]);var inst_32643__$1 = (state_32675[2]);var inst_32644 = (inst_32643__$1 == null);var inst_32645 = cljs.core.not.call(null,inst_32644);var state_32675__$1 = (function (){var statearr_32679 = state_32675;(statearr_32679[9] = inst_32643__$1);
return statearr_32679;
})();if(inst_32645)
{var statearr_32680_32707 = state_32675__$1;(statearr_32680_32707[1] = 5);
} else
{var statearr_32681_32708 = state_32675__$1;(statearr_32681_32708[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 5))
{var inst_32639 = (state_32675[7]);var inst_32648 = (state_32675[10]);var inst_32643 = (state_32675[9]);var inst_32640 = (state_32675[8]);var inst_32647 = (inst_32639[inst_32640] = inst_32643);var inst_32648__$1 = (inst_32640 + 1);var inst_32649 = (inst_32648__$1 < n);var state_32675__$1 = (function (){var statearr_32682 = state_32675;(statearr_32682[11] = inst_32647);
(statearr_32682[10] = inst_32648__$1);
return statearr_32682;
})();if(cljs.core.truth_(inst_32649))
{var statearr_32683_32709 = state_32675__$1;(statearr_32683_32709[1] = 8);
} else
{var statearr_32684_32710 = state_32675__$1;(statearr_32684_32710[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 6))
{var inst_32640 = (state_32675[8]);var inst_32661 = (inst_32640 > 0);var state_32675__$1 = state_32675;if(cljs.core.truth_(inst_32661))
{var statearr_32686_32711 = state_32675__$1;(statearr_32686_32711[1] = 12);
} else
{var statearr_32687_32712 = state_32675__$1;(statearr_32687_32712[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 7))
{var inst_32671 = (state_32675[2]);var state_32675__$1 = state_32675;var statearr_32688_32713 = state_32675__$1;(statearr_32688_32713[2] = inst_32671);
(statearr_32688_32713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 8))
{var inst_32639 = (state_32675[7]);var inst_32648 = (state_32675[10]);var tmp32685 = inst_32639;var inst_32639__$1 = tmp32685;var inst_32640 = inst_32648;var state_32675__$1 = (function (){var statearr_32689 = state_32675;(statearr_32689[7] = inst_32639__$1);
(statearr_32689[8] = inst_32640);
return statearr_32689;
})();var statearr_32690_32714 = state_32675__$1;(statearr_32690_32714[2] = null);
(statearr_32690_32714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 9))
{var inst_32639 = (state_32675[7]);var inst_32653 = cljs.core.vec.call(null,inst_32639);var state_32675__$1 = state_32675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32675__$1,11,out,inst_32653);
} else
{if((state_val_32676 === 10))
{var inst_32659 = (state_32675[2]);var state_32675__$1 = state_32675;var statearr_32691_32715 = state_32675__$1;(statearr_32691_32715[2] = inst_32659);
(statearr_32691_32715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 11))
{var inst_32655 = (state_32675[2]);var inst_32656 = (new Array(n));var inst_32639 = inst_32656;var inst_32640 = 0;var state_32675__$1 = (function (){var statearr_32692 = state_32675;(statearr_32692[7] = inst_32639);
(statearr_32692[12] = inst_32655);
(statearr_32692[8] = inst_32640);
return statearr_32692;
})();var statearr_32693_32716 = state_32675__$1;(statearr_32693_32716[2] = null);
(statearr_32693_32716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 12))
{var inst_32639 = (state_32675[7]);var inst_32663 = cljs.core.vec.call(null,inst_32639);var state_32675__$1 = state_32675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32675__$1,15,out,inst_32663);
} else
{if((state_val_32676 === 13))
{var state_32675__$1 = state_32675;var statearr_32694_32717 = state_32675__$1;(statearr_32694_32717[2] = null);
(statearr_32694_32717[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 14))
{var inst_32668 = (state_32675[2]);var inst_32669 = cljs.core.async.close_BANG_.call(null,out);var state_32675__$1 = (function (){var statearr_32695 = state_32675;(statearr_32695[13] = inst_32668);
return statearr_32695;
})();var statearr_32696_32718 = state_32675__$1;(statearr_32696_32718[2] = inst_32669);
(statearr_32696_32718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32676 === 15))
{var inst_32665 = (state_32675[2]);var state_32675__$1 = state_32675;var statearr_32697_32719 = state_32675__$1;(statearr_32697_32719[2] = inst_32665);
(statearr_32697_32719[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32701[0] = state_machine__5507__auto__);
(statearr_32701[1] = 1);
return statearr_32701;
});
var state_machine__5507__auto____1 = (function (state_32675){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32675);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32702){if((e32702 instanceof Object))
{var ex__5510__auto__ = e32702;var statearr_32703_32720 = state_32675;(statearr_32703_32720[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32721 = state_32675;
state_32675 = G__32721;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32704 = f__5522__auto__.call(null);(statearr_32704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32705);
return statearr_32704;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32834){var state_val_32835 = (state_32834[1]);if((state_val_32835 === 1))
{var inst_32793 = [];var inst_32794 = inst_32793;var inst_32795 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32834__$1 = (function (){var statearr_32836 = state_32834;(statearr_32836[7] = inst_32795);
(statearr_32836[8] = inst_32794);
return statearr_32836;
})();var statearr_32837_32865 = state_32834__$1;(statearr_32837_32865[2] = null);
(statearr_32837_32865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 2))
{var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32834__$1,4,ch);
} else
{if((state_val_32835 === 3))
{var inst_32832 = (state_32834[2]);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32834__$1,inst_32832);
} else
{if((state_val_32835 === 4))
{var inst_32798 = (state_32834[9]);var inst_32798__$1 = (state_32834[2]);var inst_32799 = (inst_32798__$1 == null);var inst_32800 = cljs.core.not.call(null,inst_32799);var state_32834__$1 = (function (){var statearr_32838 = state_32834;(statearr_32838[9] = inst_32798__$1);
return statearr_32838;
})();if(inst_32800)
{var statearr_32839_32866 = state_32834__$1;(statearr_32839_32866[1] = 5);
} else
{var statearr_32840_32867 = state_32834__$1;(statearr_32840_32867[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 5))
{var inst_32795 = (state_32834[7]);var inst_32802 = (state_32834[10]);var inst_32798 = (state_32834[9]);var inst_32802__$1 = f.call(null,inst_32798);var inst_32803 = cljs.core._EQ_.call(null,inst_32802__$1,inst_32795);var inst_32804 = cljs.core.keyword_identical_QMARK_.call(null,inst_32795,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32805 = (inst_32803) || (inst_32804);var state_32834__$1 = (function (){var statearr_32841 = state_32834;(statearr_32841[10] = inst_32802__$1);
return statearr_32841;
})();if(cljs.core.truth_(inst_32805))
{var statearr_32842_32868 = state_32834__$1;(statearr_32842_32868[1] = 8);
} else
{var statearr_32843_32869 = state_32834__$1;(statearr_32843_32869[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 6))
{var inst_32794 = (state_32834[8]);var inst_32819 = inst_32794.length;var inst_32820 = (inst_32819 > 0);var state_32834__$1 = state_32834;if(cljs.core.truth_(inst_32820))
{var statearr_32845_32870 = state_32834__$1;(statearr_32845_32870[1] = 12);
} else
{var statearr_32846_32871 = state_32834__$1;(statearr_32846_32871[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 7))
{var inst_32830 = (state_32834[2]);var state_32834__$1 = state_32834;var statearr_32847_32872 = state_32834__$1;(statearr_32847_32872[2] = inst_32830);
(statearr_32847_32872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 8))
{var inst_32794 = (state_32834[8]);var inst_32802 = (state_32834[10]);var inst_32798 = (state_32834[9]);var inst_32807 = inst_32794.push(inst_32798);var tmp32844 = inst_32794;var inst_32794__$1 = tmp32844;var inst_32795 = inst_32802;var state_32834__$1 = (function (){var statearr_32848 = state_32834;(statearr_32848[7] = inst_32795);
(statearr_32848[8] = inst_32794__$1);
(statearr_32848[11] = inst_32807);
return statearr_32848;
})();var statearr_32849_32873 = state_32834__$1;(statearr_32849_32873[2] = null);
(statearr_32849_32873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 9))
{var inst_32794 = (state_32834[8]);var inst_32810 = cljs.core.vec.call(null,inst_32794);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32834__$1,11,out,inst_32810);
} else
{if((state_val_32835 === 10))
{var inst_32817 = (state_32834[2]);var state_32834__$1 = state_32834;var statearr_32850_32874 = state_32834__$1;(statearr_32850_32874[2] = inst_32817);
(statearr_32850_32874[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 11))
{var inst_32802 = (state_32834[10]);var inst_32798 = (state_32834[9]);var inst_32812 = (state_32834[2]);var inst_32813 = [];var inst_32814 = inst_32813.push(inst_32798);var inst_32794 = inst_32813;var inst_32795 = inst_32802;var state_32834__$1 = (function (){var statearr_32851 = state_32834;(statearr_32851[7] = inst_32795);
(statearr_32851[8] = inst_32794);
(statearr_32851[12] = inst_32812);
(statearr_32851[13] = inst_32814);
return statearr_32851;
})();var statearr_32852_32875 = state_32834__$1;(statearr_32852_32875[2] = null);
(statearr_32852_32875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 12))
{var inst_32794 = (state_32834[8]);var inst_32822 = cljs.core.vec.call(null,inst_32794);var state_32834__$1 = state_32834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32834__$1,15,out,inst_32822);
} else
{if((state_val_32835 === 13))
{var state_32834__$1 = state_32834;var statearr_32853_32876 = state_32834__$1;(statearr_32853_32876[2] = null);
(statearr_32853_32876[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 14))
{var inst_32827 = (state_32834[2]);var inst_32828 = cljs.core.async.close_BANG_.call(null,out);var state_32834__$1 = (function (){var statearr_32854 = state_32834;(statearr_32854[14] = inst_32827);
return statearr_32854;
})();var statearr_32855_32877 = state_32834__$1;(statearr_32855_32877[2] = inst_32828);
(statearr_32855_32877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32835 === 15))
{var inst_32824 = (state_32834[2]);var state_32834__$1 = state_32834;var statearr_32856_32878 = state_32834__$1;(statearr_32856_32878[2] = inst_32824);
(statearr_32856_32878[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_32860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32860[0] = state_machine__5507__auto__);
(statearr_32860[1] = 1);
return statearr_32860;
});
var state_machine__5507__auto____1 = (function (state_32834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32834);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32861){if((e32861 instanceof Object))
{var ex__5510__auto__ = e32861;var statearr_32862_32879 = state_32834;(statearr_32862_32879[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32880 = state_32834;
state_32834 = G__32880;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32863 = f__5522__auto__.call(null);(statearr_32863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32864);
return statearr_32863;
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
