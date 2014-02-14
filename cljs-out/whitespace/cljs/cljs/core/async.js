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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34370 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34370 = (function (f,fn_handler,meta34371){
this.f = f;
this.fn_handler = fn_handler;
this.meta34371 = meta34371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34370.cljs$lang$type = true;
cljs.core.async.t34370.cljs$lang$ctorStr = "cljs.core.async/t34370";
cljs.core.async.t34370.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34370");
});
cljs.core.async.t34370.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34372){var self__ = this;
var _34372__$1 = this;return self__.meta34371;
});
cljs.core.async.t34370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34372,meta34371__$1){var self__ = this;
var _34372__$1 = this;return (new cljs.core.async.t34370(self__.f,self__.fn_handler,meta34371__$1));
});
cljs.core.async.__GT_t34370 = (function __GT_t34370(f__$1,fn_handler__$1,meta34371){return (new cljs.core.async.t34370(f__$1,fn_handler__$1,meta34371));
});
}
return (new cljs.core.async.t34370(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34374 = buff;if(G__34374)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34374.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34374.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34374);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34374);
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
{var val_34375 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34375);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34375);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34376 = n;var x_34377 = 0;while(true){
if((x_34377 < n__4248__auto___34376))
{(a[x_34377] = 0);
{
var G__34378 = (x_34377 + 1);
x_34377 = G__34378;
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
var G__34379 = (i + 1);
i = G__34379;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34383 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34383 = (function (flag,alt_flag,meta34384){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34384 = meta34384;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34383.cljs$lang$type = true;
cljs.core.async.t34383.cljs$lang$ctorStr = "cljs.core.async/t34383";
cljs.core.async.t34383.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34383");
});
cljs.core.async.t34383.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34385){var self__ = this;
var _34385__$1 = this;return self__.meta34384;
});
cljs.core.async.t34383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34385,meta34384__$1){var self__ = this;
var _34385__$1 = this;return (new cljs.core.async.t34383(self__.flag,self__.alt_flag,meta34384__$1));
});
cljs.core.async.__GT_t34383 = (function __GT_t34383(flag__$1,alt_flag__$1,meta34384){return (new cljs.core.async.t34383(flag__$1,alt_flag__$1,meta34384));
});
}
return (new cljs.core.async.t34383(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34389 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34389 = (function (cb,flag,alt_handler,meta34390){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34390 = meta34390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34389.cljs$lang$type = true;
cljs.core.async.t34389.cljs$lang$ctorStr = "cljs.core.async/t34389";
cljs.core.async.t34389.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34389");
});
cljs.core.async.t34389.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34391){var self__ = this;
var _34391__$1 = this;return self__.meta34390;
});
cljs.core.async.t34389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34391,meta34390__$1){var self__ = this;
var _34391__$1 = this;return (new cljs.core.async.t34389(self__.cb,self__.flag,self__.alt_handler,meta34390__$1));
});
cljs.core.async.__GT_t34389 = (function __GT_t34389(cb__$1,flag__$1,alt_handler__$1,meta34390){return (new cljs.core.async.t34389(cb__$1,flag__$1,alt_handler__$1,meta34390));
});
}
return (new cljs.core.async.t34389(cb,flag,alt_handler,null));
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
return (function (p1__34392_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34392_SHARP_,port], null));
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
var G__34393 = (i + 1);
i = G__34393;
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
var alts_BANG___delegate = function (ports,p__34394){var map__34396 = p__34394;var map__34396__$1 = ((cljs.core.seq_QMARK_.call(null,map__34396))?cljs.core.apply.call(null,cljs.core.hash_map,map__34396):map__34396);var opts = map__34396__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34394 = null;if (arguments.length > 1) {
  p__34394 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34394);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34397){
var ports = cljs.core.first(arglist__34397);
var p__34394 = cljs.core.rest(arglist__34397);
return alts_BANG___delegate(ports,p__34394);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34405 = (function (ch,f,map_LT_,meta34406){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34406 = meta34406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34405.cljs$lang$type = true;
cljs.core.async.t34405.cljs$lang$ctorStr = "cljs.core.async/t34405";
cljs.core.async.t34405.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34405");
});
cljs.core.async.t34405.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34405.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34408 = (function (fn1,_,meta34406,ch,f,map_LT_,meta34409){
this.fn1 = fn1;
this._ = _;
this.meta34406 = meta34406;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34409 = meta34409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34408.cljs$lang$type = true;
cljs.core.async.t34408.cljs$lang$ctorStr = "cljs.core.async/t34408";
cljs.core.async.t34408.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34408");
});
cljs.core.async.t34408.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34408.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34398_SHARP_){return f1.call(null,(((p1__34398_SHARP_ == null))?null:self__.f.call(null,p1__34398_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34410){var self__ = this;
var _34410__$1 = this;return self__.meta34409;
});
cljs.core.async.t34408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34410,meta34409__$1){var self__ = this;
var _34410__$1 = this;return (new cljs.core.async.t34408(self__.fn1,self__._,self__.meta34406,self__.ch,self__.f,self__.map_LT_,meta34409__$1));
});
cljs.core.async.__GT_t34408 = (function __GT_t34408(fn1__$1,___$2,meta34406__$1,ch__$2,f__$2,map_LT___$2,meta34409){return (new cljs.core.async.t34408(fn1__$1,___$2,meta34406__$1,ch__$2,f__$2,map_LT___$2,meta34409));
});
}
return (new cljs.core.async.t34408(fn1,___$1,self__.meta34406,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34405.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34407){var self__ = this;
var _34407__$1 = this;return self__.meta34406;
});
cljs.core.async.t34405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34407,meta34406__$1){var self__ = this;
var _34407__$1 = this;return (new cljs.core.async.t34405(self__.ch,self__.f,self__.map_LT_,meta34406__$1));
});
cljs.core.async.__GT_t34405 = (function __GT_t34405(ch__$1,f__$1,map_LT___$1,meta34406){return (new cljs.core.async.t34405(ch__$1,f__$1,map_LT___$1,meta34406));
});
}
return (new cljs.core.async.t34405(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34414 = (function (ch,f,map_GT_,meta34415){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34415 = meta34415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34414.cljs$lang$type = true;
cljs.core.async.t34414.cljs$lang$ctorStr = "cljs.core.async/t34414";
cljs.core.async.t34414.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34414");
});
cljs.core.async.t34414.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34414.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34414.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34416){var self__ = this;
var _34416__$1 = this;return self__.meta34415;
});
cljs.core.async.t34414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34416,meta34415__$1){var self__ = this;
var _34416__$1 = this;return (new cljs.core.async.t34414(self__.ch,self__.f,self__.map_GT_,meta34415__$1));
});
cljs.core.async.__GT_t34414 = (function __GT_t34414(ch__$1,f__$1,map_GT___$1,meta34415){return (new cljs.core.async.t34414(ch__$1,f__$1,map_GT___$1,meta34415));
});
}
return (new cljs.core.async.t34414(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34420 = (function (ch,p,filter_GT_,meta34421){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34421 = meta34421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34420.cljs$lang$type = true;
cljs.core.async.t34420.cljs$lang$ctorStr = "cljs.core.async/t34420";
cljs.core.async.t34420.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34420");
});
cljs.core.async.t34420.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34420.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34420.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34422){var self__ = this;
var _34422__$1 = this;return self__.meta34421;
});
cljs.core.async.t34420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34422,meta34421__$1){var self__ = this;
var _34422__$1 = this;return (new cljs.core.async.t34420(self__.ch,self__.p,self__.filter_GT_,meta34421__$1));
});
cljs.core.async.__GT_t34420 = (function __GT_t34420(ch__$1,p__$1,filter_GT___$1,meta34421){return (new cljs.core.async.t34420(ch__$1,p__$1,filter_GT___$1,meta34421));
});
}
return (new cljs.core.async.t34420(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34505 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34484){var state_val_34485 = (state_34484[1]);if((state_val_34485 === 1))
{var state_34484__$1 = state_34484;var statearr_34486_34506 = state_34484__$1;(statearr_34486_34506[2] = null);
(statearr_34486_34506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 2))
{var state_34484__$1 = state_34484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34484__$1,4,ch);
} else
{if((state_val_34485 === 3))
{var inst_34482 = (state_34484[2]);var state_34484__$1 = state_34484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34484__$1,inst_34482);
} else
{if((state_val_34485 === 4))
{var inst_34466 = (state_34484[7]);var inst_34466__$1 = (state_34484[2]);var inst_34467 = (inst_34466__$1 == null);var state_34484__$1 = (function (){var statearr_34487 = state_34484;(statearr_34487[7] = inst_34466__$1);
return statearr_34487;
})();if(cljs.core.truth_(inst_34467))
{var statearr_34488_34507 = state_34484__$1;(statearr_34488_34507[1] = 5);
} else
{var statearr_34489_34508 = state_34484__$1;(statearr_34489_34508[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 5))
{var inst_34469 = cljs.core.async.close_BANG_.call(null,out);var state_34484__$1 = state_34484;var statearr_34490_34509 = state_34484__$1;(statearr_34490_34509[2] = inst_34469);
(statearr_34490_34509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 6))
{var inst_34466 = (state_34484[7]);var inst_34471 = p.call(null,inst_34466);var state_34484__$1 = state_34484;if(cljs.core.truth_(inst_34471))
{var statearr_34491_34510 = state_34484__$1;(statearr_34491_34510[1] = 8);
} else
{var statearr_34492_34511 = state_34484__$1;(statearr_34492_34511[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 7))
{var inst_34480 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34493_34512 = state_34484__$1;(statearr_34493_34512[2] = inst_34480);
(statearr_34493_34512[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 8))
{var inst_34466 = (state_34484[7]);var state_34484__$1 = state_34484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34484__$1,11,out,inst_34466);
} else
{if((state_val_34485 === 9))
{var state_34484__$1 = state_34484;var statearr_34494_34513 = state_34484__$1;(statearr_34494_34513[2] = null);
(statearr_34494_34513[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 10))
{var inst_34477 = (state_34484[2]);var state_34484__$1 = (function (){var statearr_34495 = state_34484;(statearr_34495[8] = inst_34477);
return statearr_34495;
})();var statearr_34496_34514 = state_34484__$1;(statearr_34496_34514[2] = null);
(statearr_34496_34514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 11))
{var inst_34474 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34497_34515 = state_34484__$1;(statearr_34497_34515[2] = inst_34474);
(statearr_34497_34515[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34501 = [null,null,null,null,null,null,null,null,null];(statearr_34501[0] = state_machine__5507__auto__);
(statearr_34501[1] = 1);
return statearr_34501;
});
var state_machine__5507__auto____1 = (function (state_34484){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34484);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34502){if((e34502 instanceof Object))
{var ex__5510__auto__ = e34502;var statearr_34503_34516 = state_34484;(statearr_34503_34516[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34517 = state_34484;
state_34484 = G__34517;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34504 = f__5522__auto__.call(null);(statearr_34504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34505);
return statearr_34504;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34669){var state_val_34670 = (state_34669[1]);if((state_val_34670 === 1))
{var state_34669__$1 = state_34669;var statearr_34671_34708 = state_34669__$1;(statearr_34671_34708[2] = null);
(statearr_34671_34708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 2))
{var state_34669__$1 = state_34669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34669__$1,4,in$);
} else
{if((state_val_34670 === 3))
{var inst_34667 = (state_34669[2]);var state_34669__$1 = state_34669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34669__$1,inst_34667);
} else
{if((state_val_34670 === 4))
{var inst_34615 = (state_34669[7]);var inst_34615__$1 = (state_34669[2]);var inst_34616 = (inst_34615__$1 == null);var state_34669__$1 = (function (){var statearr_34672 = state_34669;(statearr_34672[7] = inst_34615__$1);
return statearr_34672;
})();if(cljs.core.truth_(inst_34616))
{var statearr_34673_34709 = state_34669__$1;(statearr_34673_34709[1] = 5);
} else
{var statearr_34674_34710 = state_34669__$1;(statearr_34674_34710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 5))
{var inst_34618 = cljs.core.async.close_BANG_.call(null,out);var state_34669__$1 = state_34669;var statearr_34675_34711 = state_34669__$1;(statearr_34675_34711[2] = inst_34618);
(statearr_34675_34711[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 6))
{var inst_34615 = (state_34669[7]);var inst_34620 = f.call(null,inst_34615);var inst_34625 = cljs.core.seq.call(null,inst_34620);var inst_34626 = inst_34625;var inst_34627 = null;var inst_34628 = 0;var inst_34629 = 0;var state_34669__$1 = (function (){var statearr_34676 = state_34669;(statearr_34676[8] = inst_34627);
(statearr_34676[9] = inst_34626);
(statearr_34676[10] = inst_34629);
(statearr_34676[11] = inst_34628);
return statearr_34676;
})();var statearr_34677_34712 = state_34669__$1;(statearr_34677_34712[2] = null);
(statearr_34677_34712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 7))
{var inst_34665 = (state_34669[2]);var state_34669__$1 = state_34669;var statearr_34678_34713 = state_34669__$1;(statearr_34678_34713[2] = inst_34665);
(statearr_34678_34713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 8))
{var inst_34629 = (state_34669[10]);var inst_34628 = (state_34669[11]);var inst_34631 = (inst_34629 < inst_34628);var inst_34632 = inst_34631;var state_34669__$1 = state_34669;if(cljs.core.truth_(inst_34632))
{var statearr_34679_34714 = state_34669__$1;(statearr_34679_34714[1] = 10);
} else
{var statearr_34680_34715 = state_34669__$1;(statearr_34680_34715[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 9))
{var inst_34662 = (state_34669[2]);var state_34669__$1 = (function (){var statearr_34681 = state_34669;(statearr_34681[12] = inst_34662);
return statearr_34681;
})();var statearr_34682_34716 = state_34669__$1;(statearr_34682_34716[2] = null);
(statearr_34682_34716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 10))
{var inst_34627 = (state_34669[8]);var inst_34629 = (state_34669[10]);var inst_34634 = cljs.core._nth.call(null,inst_34627,inst_34629);var state_34669__$1 = state_34669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34669__$1,13,out,inst_34634);
} else
{if((state_val_34670 === 11))
{var inst_34626 = (state_34669[9]);var inst_34640 = (state_34669[13]);var inst_34640__$1 = cljs.core.seq.call(null,inst_34626);var state_34669__$1 = (function (){var statearr_34686 = state_34669;(statearr_34686[13] = inst_34640__$1);
return statearr_34686;
})();if(inst_34640__$1)
{var statearr_34687_34717 = state_34669__$1;(statearr_34687_34717[1] = 14);
} else
{var statearr_34688_34718 = state_34669__$1;(statearr_34688_34718[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 12))
{var inst_34660 = (state_34669[2]);var state_34669__$1 = state_34669;var statearr_34689_34719 = state_34669__$1;(statearr_34689_34719[2] = inst_34660);
(statearr_34689_34719[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 13))
{var inst_34627 = (state_34669[8]);var inst_34626 = (state_34669[9]);var inst_34629 = (state_34669[10]);var inst_34628 = (state_34669[11]);var inst_34636 = (state_34669[2]);var inst_34637 = (inst_34629 + 1);var tmp34683 = inst_34627;var tmp34684 = inst_34626;var tmp34685 = inst_34628;var inst_34626__$1 = tmp34684;var inst_34627__$1 = tmp34683;var inst_34628__$1 = tmp34685;var inst_34629__$1 = inst_34637;var state_34669__$1 = (function (){var statearr_34690 = state_34669;(statearr_34690[8] = inst_34627__$1);
(statearr_34690[9] = inst_34626__$1);
(statearr_34690[10] = inst_34629__$1);
(statearr_34690[11] = inst_34628__$1);
(statearr_34690[14] = inst_34636);
return statearr_34690;
})();var statearr_34691_34720 = state_34669__$1;(statearr_34691_34720[2] = null);
(statearr_34691_34720[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 14))
{var inst_34640 = (state_34669[13]);var inst_34642 = cljs.core.chunked_seq_QMARK_.call(null,inst_34640);var state_34669__$1 = state_34669;if(inst_34642)
{var statearr_34692_34721 = state_34669__$1;(statearr_34692_34721[1] = 17);
} else
{var statearr_34693_34722 = state_34669__$1;(statearr_34693_34722[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 15))
{var state_34669__$1 = state_34669;var statearr_34694_34723 = state_34669__$1;(statearr_34694_34723[2] = null);
(statearr_34694_34723[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 16))
{var inst_34658 = (state_34669[2]);var state_34669__$1 = state_34669;var statearr_34695_34724 = state_34669__$1;(statearr_34695_34724[2] = inst_34658);
(statearr_34695_34724[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 17))
{var inst_34640 = (state_34669[13]);var inst_34644 = cljs.core.chunk_first.call(null,inst_34640);var inst_34645 = cljs.core.chunk_rest.call(null,inst_34640);var inst_34646 = cljs.core.count.call(null,inst_34644);var inst_34626 = inst_34645;var inst_34627 = inst_34644;var inst_34628 = inst_34646;var inst_34629 = 0;var state_34669__$1 = (function (){var statearr_34696 = state_34669;(statearr_34696[8] = inst_34627);
(statearr_34696[9] = inst_34626);
(statearr_34696[10] = inst_34629);
(statearr_34696[11] = inst_34628);
return statearr_34696;
})();var statearr_34697_34725 = state_34669__$1;(statearr_34697_34725[2] = null);
(statearr_34697_34725[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 18))
{var inst_34640 = (state_34669[13]);var inst_34649 = cljs.core.first.call(null,inst_34640);var state_34669__$1 = state_34669;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34669__$1,20,out,inst_34649);
} else
{if((state_val_34670 === 19))
{var inst_34655 = (state_34669[2]);var state_34669__$1 = state_34669;var statearr_34698_34726 = state_34669__$1;(statearr_34698_34726[2] = inst_34655);
(statearr_34698_34726[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34670 === 20))
{var inst_34640 = (state_34669[13]);var inst_34651 = (state_34669[2]);var inst_34652 = cljs.core.next.call(null,inst_34640);var inst_34626 = inst_34652;var inst_34627 = null;var inst_34628 = 0;var inst_34629 = 0;var state_34669__$1 = (function (){var statearr_34699 = state_34669;(statearr_34699[15] = inst_34651);
(statearr_34699[8] = inst_34627);
(statearr_34699[9] = inst_34626);
(statearr_34699[10] = inst_34629);
(statearr_34699[11] = inst_34628);
return statearr_34699;
})();var statearr_34700_34727 = state_34669__$1;(statearr_34700_34727[2] = null);
(statearr_34700_34727[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_34704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34704[0] = state_machine__5507__auto__);
(statearr_34704[1] = 1);
return statearr_34704;
});
var state_machine__5507__auto____1 = (function (state_34669){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34669);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34705){if((e34705 instanceof Object))
{var ex__5510__auto__ = e34705;var statearr_34706_34728 = state_34669;(statearr_34706_34728[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34729 = state_34669;
state_34669 = G__34729;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34669){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34707 = f__5522__auto__.call(null);(statearr_34707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34707;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34810 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34789){var state_val_34790 = (state_34789[1]);if((state_val_34790 === 1))
{var state_34789__$1 = state_34789;var statearr_34791_34811 = state_34789__$1;(statearr_34791_34811[2] = null);
(statearr_34791_34811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34790 === 2))
{var state_34789__$1 = state_34789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34789__$1,4,from);
} else
{if((state_val_34790 === 3))
{var inst_34787 = (state_34789[2]);var state_34789__$1 = state_34789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34789__$1,inst_34787);
} else
{if((state_val_34790 === 4))
{var inst_34772 = (state_34789[7]);var inst_34772__$1 = (state_34789[2]);var inst_34773 = (inst_34772__$1 == null);var state_34789__$1 = (function (){var statearr_34792 = state_34789;(statearr_34792[7] = inst_34772__$1);
return statearr_34792;
})();if(cljs.core.truth_(inst_34773))
{var statearr_34793_34812 = state_34789__$1;(statearr_34793_34812[1] = 5);
} else
{var statearr_34794_34813 = state_34789__$1;(statearr_34794_34813[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34790 === 5))
{var state_34789__$1 = state_34789;if(cljs.core.truth_(close_QMARK_))
{var statearr_34795_34814 = state_34789__$1;(statearr_34795_34814[1] = 8);
} else
{var statearr_34796_34815 = state_34789__$1;(statearr_34796_34815[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34790 === 6))
{var inst_34772 = (state_34789[7]);var state_34789__$1 = state_34789;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34789__$1,11,to,inst_34772);
} else
{if((state_val_34790 === 7))
{var inst_34785 = (state_34789[2]);var state_34789__$1 = state_34789;var statearr_34797_34816 = state_34789__$1;(statearr_34797_34816[2] = inst_34785);
(statearr_34797_34816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34790 === 8))
{var inst_34776 = cljs.core.async.close_BANG_.call(null,to);var state_34789__$1 = state_34789;var statearr_34798_34817 = state_34789__$1;(statearr_34798_34817[2] = inst_34776);
(statearr_34798_34817[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34790 === 9))
{var state_34789__$1 = state_34789;var statearr_34799_34818 = state_34789__$1;(statearr_34799_34818[2] = null);
(statearr_34799_34818[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34790 === 10))
{var inst_34779 = (state_34789[2]);var state_34789__$1 = state_34789;var statearr_34800_34819 = state_34789__$1;(statearr_34800_34819[2] = inst_34779);
(statearr_34800_34819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34790 === 11))
{var inst_34782 = (state_34789[2]);var state_34789__$1 = (function (){var statearr_34801 = state_34789;(statearr_34801[8] = inst_34782);
return statearr_34801;
})();var statearr_34802_34820 = state_34789__$1;(statearr_34802_34820[2] = null);
(statearr_34802_34820[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34806 = [null,null,null,null,null,null,null,null,null];(statearr_34806[0] = state_machine__5507__auto__);
(statearr_34806[1] = 1);
return statearr_34806;
});
var state_machine__5507__auto____1 = (function (state_34789){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34789);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34807){if((e34807 instanceof Object))
{var ex__5510__auto__ = e34807;var statearr_34808_34821 = state_34789;(statearr_34808_34821[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34822 = state_34789;
state_34789 = G__34822;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34789){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34809 = f__5522__auto__.call(null);(statearr_34809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34810);
return statearr_34809;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34909 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34887){var state_val_34888 = (state_34887[1]);if((state_val_34888 === 1))
{var state_34887__$1 = state_34887;var statearr_34889_34910 = state_34887__$1;(statearr_34889_34910[2] = null);
(statearr_34889_34910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 2))
{var state_34887__$1 = state_34887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34887__$1,4,ch);
} else
{if((state_val_34888 === 3))
{var inst_34885 = (state_34887[2]);var state_34887__$1 = state_34887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34887__$1,inst_34885);
} else
{if((state_val_34888 === 4))
{var inst_34868 = (state_34887[7]);var inst_34868__$1 = (state_34887[2]);var inst_34869 = (inst_34868__$1 == null);var state_34887__$1 = (function (){var statearr_34890 = state_34887;(statearr_34890[7] = inst_34868__$1);
return statearr_34890;
})();if(cljs.core.truth_(inst_34869))
{var statearr_34891_34911 = state_34887__$1;(statearr_34891_34911[1] = 5);
} else
{var statearr_34892_34912 = state_34887__$1;(statearr_34892_34912[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 5))
{var inst_34871 = cljs.core.async.close_BANG_.call(null,tc);var inst_34872 = cljs.core.async.close_BANG_.call(null,fc);var state_34887__$1 = (function (){var statearr_34893 = state_34887;(statearr_34893[8] = inst_34871);
return statearr_34893;
})();var statearr_34894_34913 = state_34887__$1;(statearr_34894_34913[2] = inst_34872);
(statearr_34894_34913[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 6))
{var inst_34868 = (state_34887[7]);var inst_34874 = p.call(null,inst_34868);var state_34887__$1 = state_34887;if(cljs.core.truth_(inst_34874))
{var statearr_34895_34914 = state_34887__$1;(statearr_34895_34914[1] = 9);
} else
{var statearr_34896_34915 = state_34887__$1;(statearr_34896_34915[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 7))
{var inst_34883 = (state_34887[2]);var state_34887__$1 = state_34887;var statearr_34897_34916 = state_34887__$1;(statearr_34897_34916[2] = inst_34883);
(statearr_34897_34916[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 8))
{var inst_34880 = (state_34887[2]);var state_34887__$1 = (function (){var statearr_34898 = state_34887;(statearr_34898[9] = inst_34880);
return statearr_34898;
})();var statearr_34899_34917 = state_34887__$1;(statearr_34899_34917[2] = null);
(statearr_34899_34917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 9))
{var state_34887__$1 = state_34887;var statearr_34900_34918 = state_34887__$1;(statearr_34900_34918[2] = tc);
(statearr_34900_34918[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 10))
{var state_34887__$1 = state_34887;var statearr_34901_34919 = state_34887__$1;(statearr_34901_34919[2] = fc);
(statearr_34901_34919[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34888 === 11))
{var inst_34868 = (state_34887[7]);var inst_34878 = (state_34887[2]);var state_34887__$1 = state_34887;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34887__$1,8,inst_34878,inst_34868);
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
var state_machine__5507__auto____0 = (function (){var statearr_34905 = [null,null,null,null,null,null,null,null,null,null];(statearr_34905[0] = state_machine__5507__auto__);
(statearr_34905[1] = 1);
return statearr_34905;
});
var state_machine__5507__auto____1 = (function (state_34887){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34906){if((e34906 instanceof Object))
{var ex__5510__auto__ = e34906;var statearr_34907_34920 = state_34887;(statearr_34907_34920[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34887);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34921 = state_34887;
state_34887 = G__34921;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34887){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34908 = f__5522__auto__.call(null);(statearr_34908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34909);
return statearr_34908;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34968){var state_val_34969 = (state_34968[1]);if((state_val_34969 === 7))
{var inst_34964 = (state_34968[2]);var state_34968__$1 = state_34968;var statearr_34970_34986 = state_34968__$1;(statearr_34970_34986[2] = inst_34964);
(statearr_34970_34986[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34969 === 6))
{var inst_34954 = (state_34968[7]);var inst_34957 = (state_34968[8]);var inst_34961 = f.call(null,inst_34954,inst_34957);var inst_34954__$1 = inst_34961;var state_34968__$1 = (function (){var statearr_34971 = state_34968;(statearr_34971[7] = inst_34954__$1);
return statearr_34971;
})();var statearr_34972_34987 = state_34968__$1;(statearr_34972_34987[2] = null);
(statearr_34972_34987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34969 === 5))
{var inst_34954 = (state_34968[7]);var state_34968__$1 = state_34968;var statearr_34973_34988 = state_34968__$1;(statearr_34973_34988[2] = inst_34954);
(statearr_34973_34988[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34969 === 4))
{var inst_34957 = (state_34968[8]);var inst_34957__$1 = (state_34968[2]);var inst_34958 = (inst_34957__$1 == null);var state_34968__$1 = (function (){var statearr_34974 = state_34968;(statearr_34974[8] = inst_34957__$1);
return statearr_34974;
})();if(cljs.core.truth_(inst_34958))
{var statearr_34975_34989 = state_34968__$1;(statearr_34975_34989[1] = 5);
} else
{var statearr_34976_34990 = state_34968__$1;(statearr_34976_34990[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34969 === 3))
{var inst_34966 = (state_34968[2]);var state_34968__$1 = state_34968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34968__$1,inst_34966);
} else
{if((state_val_34969 === 2))
{var state_34968__$1 = state_34968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34968__$1,4,ch);
} else
{if((state_val_34969 === 1))
{var inst_34954 = init;var state_34968__$1 = (function (){var statearr_34977 = state_34968;(statearr_34977[7] = inst_34954);
return statearr_34977;
})();var statearr_34978_34991 = state_34968__$1;(statearr_34978_34991[2] = null);
(statearr_34978_34991[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34982 = [null,null,null,null,null,null,null,null,null];(statearr_34982[0] = state_machine__5507__auto__);
(statearr_34982[1] = 1);
return statearr_34982;
});
var state_machine__5507__auto____1 = (function (state_34968){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34968);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34983){if((e34983 instanceof Object))
{var ex__5510__auto__ = e34983;var statearr_34984_34992 = state_34968;(statearr_34984_34992[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34993 = state_34968;
state_34968 = G__34993;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34968){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34985 = f__5522__auto__.call(null);(statearr_34985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34985;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35055){var state_val_35056 = (state_35055[1]);if((state_val_35056 === 1))
{var inst_35035 = cljs.core.seq.call(null,coll);var inst_35036 = inst_35035;var state_35055__$1 = (function (){var statearr_35057 = state_35055;(statearr_35057[7] = inst_35036);
return statearr_35057;
})();var statearr_35058_35076 = state_35055__$1;(statearr_35058_35076[2] = null);
(statearr_35058_35076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 2))
{var inst_35036 = (state_35055[7]);var state_35055__$1 = state_35055;if(cljs.core.truth_(inst_35036))
{var statearr_35059_35077 = state_35055__$1;(statearr_35059_35077[1] = 4);
} else
{var statearr_35060_35078 = state_35055__$1;(statearr_35060_35078[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 3))
{var inst_35053 = (state_35055[2]);var state_35055__$1 = state_35055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35055__$1,inst_35053);
} else
{if((state_val_35056 === 4))
{var inst_35036 = (state_35055[7]);var inst_35039 = cljs.core.first.call(null,inst_35036);var state_35055__$1 = state_35055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35055__$1,7,ch,inst_35039);
} else
{if((state_val_35056 === 5))
{var state_35055__$1 = state_35055;if(cljs.core.truth_(close_QMARK_))
{var statearr_35061_35079 = state_35055__$1;(statearr_35061_35079[1] = 8);
} else
{var statearr_35062_35080 = state_35055__$1;(statearr_35062_35080[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 6))
{var inst_35051 = (state_35055[2]);var state_35055__$1 = state_35055;var statearr_35063_35081 = state_35055__$1;(statearr_35063_35081[2] = inst_35051);
(statearr_35063_35081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 7))
{var inst_35036 = (state_35055[7]);var inst_35041 = (state_35055[2]);var inst_35042 = cljs.core.next.call(null,inst_35036);var inst_35036__$1 = inst_35042;var state_35055__$1 = (function (){var statearr_35064 = state_35055;(statearr_35064[8] = inst_35041);
(statearr_35064[7] = inst_35036__$1);
return statearr_35064;
})();var statearr_35065_35082 = state_35055__$1;(statearr_35065_35082[2] = null);
(statearr_35065_35082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 8))
{var inst_35046 = cljs.core.async.close_BANG_.call(null,ch);var state_35055__$1 = state_35055;var statearr_35066_35083 = state_35055__$1;(statearr_35066_35083[2] = inst_35046);
(statearr_35066_35083[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 9))
{var state_35055__$1 = state_35055;var statearr_35067_35084 = state_35055__$1;(statearr_35067_35084[2] = null);
(statearr_35067_35084[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 10))
{var inst_35049 = (state_35055[2]);var state_35055__$1 = state_35055;var statearr_35068_35085 = state_35055__$1;(statearr_35068_35085[2] = inst_35049);
(statearr_35068_35085[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35072 = [null,null,null,null,null,null,null,null,null];(statearr_35072[0] = state_machine__5507__auto__);
(statearr_35072[1] = 1);
return statearr_35072;
});
var state_machine__5507__auto____1 = (function (state_35055){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35055);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35073){if((e35073 instanceof Object))
{var ex__5510__auto__ = e35073;var statearr_35074_35086 = state_35055;(statearr_35074_35086[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35087 = state_35055;
state_35055 = G__35087;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35055){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35075 = f__5522__auto__.call(null);(statearr_35075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35075;
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
cljs.core.async.Mux = (function (){var obj35089 = {};return obj35089;
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
cljs.core.async.Mult = (function (){var obj35091 = {};return obj35091;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35315 = (function (cs,ch,mult,meta35316){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35316 = meta35316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35315.cljs$lang$type = true;
cljs.core.async.t35315.cljs$lang$ctorStr = "cljs.core.async/t35315";
cljs.core.async.t35315.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35315");
});})(cs))
;
cljs.core.async.t35315.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35315.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35315.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35315.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35315.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35315.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35317){var self__ = this;
var _35317__$1 = this;return self__.meta35316;
});})(cs))
;
cljs.core.async.t35315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35317,meta35316__$1){var self__ = this;
var _35317__$1 = this;return (new cljs.core.async.t35315(self__.cs,self__.ch,self__.mult,meta35316__$1));
});})(cs))
;
cljs.core.async.__GT_t35315 = ((function (cs){
return (function __GT_t35315(cs__$1,ch__$1,mult__$1,meta35316){return (new cljs.core.async.t35315(cs__$1,ch__$1,mult__$1,meta35316));
});})(cs))
;
}
return (new cljs.core.async.t35315(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___35538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35452){var state_val_35453 = (state_35452[1]);if((state_val_35453 === 32))
{var inst_35396 = (state_35452[7]);var inst_35320 = (state_35452[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35452,31,Object,null,30);var inst_35403 = cljs.core.async.put_BANG_.call(null,inst_35396,inst_35320,done);var state_35452__$1 = state_35452;var statearr_35454_35539 = state_35452__$1;(statearr_35454_35539[2] = inst_35403);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 1))
{var state_35452__$1 = state_35452;var statearr_35455_35540 = state_35452__$1;(statearr_35455_35540[2] = null);
(statearr_35455_35540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 33))
{var inst_35409 = (state_35452[9]);var inst_35411 = cljs.core.chunked_seq_QMARK_.call(null,inst_35409);var state_35452__$1 = state_35452;if(inst_35411)
{var statearr_35456_35541 = state_35452__$1;(statearr_35456_35541[1] = 36);
} else
{var statearr_35457_35542 = state_35452__$1;(statearr_35457_35542[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 2))
{var state_35452__$1 = state_35452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35452__$1,4,ch);
} else
{if((state_val_35453 === 34))
{var state_35452__$1 = state_35452;var statearr_35458_35543 = state_35452__$1;(statearr_35458_35543[2] = null);
(statearr_35458_35543[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 3))
{var inst_35450 = (state_35452[2]);var state_35452__$1 = state_35452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35452__$1,inst_35450);
} else
{if((state_val_35453 === 35))
{var inst_35434 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35459_35544 = state_35452__$1;(statearr_35459_35544[2] = inst_35434);
(statearr_35459_35544[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 4))
{var inst_35320 = (state_35452[8]);var inst_35320__$1 = (state_35452[2]);var inst_35321 = (inst_35320__$1 == null);var state_35452__$1 = (function (){var statearr_35460 = state_35452;(statearr_35460[8] = inst_35320__$1);
return statearr_35460;
})();if(cljs.core.truth_(inst_35321))
{var statearr_35461_35545 = state_35452__$1;(statearr_35461_35545[1] = 5);
} else
{var statearr_35462_35546 = state_35452__$1;(statearr_35462_35546[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 36))
{var inst_35409 = (state_35452[9]);var inst_35413 = cljs.core.chunk_first.call(null,inst_35409);var inst_35414 = cljs.core.chunk_rest.call(null,inst_35409);var inst_35415 = cljs.core.count.call(null,inst_35413);var inst_35388 = inst_35414;var inst_35389 = inst_35413;var inst_35390 = inst_35415;var inst_35391 = 0;var state_35452__$1 = (function (){var statearr_35463 = state_35452;(statearr_35463[10] = inst_35389);
(statearr_35463[11] = inst_35388);
(statearr_35463[12] = inst_35390);
(statearr_35463[13] = inst_35391);
return statearr_35463;
})();var statearr_35464_35547 = state_35452__$1;(statearr_35464_35547[2] = null);
(statearr_35464_35547[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 5))
{var inst_35327 = cljs.core.deref.call(null,cs);var inst_35328 = cljs.core.seq.call(null,inst_35327);var inst_35329 = inst_35328;var inst_35330 = null;var inst_35331 = 0;var inst_35332 = 0;var state_35452__$1 = (function (){var statearr_35465 = state_35452;(statearr_35465[14] = inst_35331);
(statearr_35465[15] = inst_35332);
(statearr_35465[16] = inst_35330);
(statearr_35465[17] = inst_35329);
return statearr_35465;
})();var statearr_35466_35548 = state_35452__$1;(statearr_35466_35548[2] = null);
(statearr_35466_35548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 37))
{var inst_35409 = (state_35452[9]);var inst_35418 = cljs.core.first.call(null,inst_35409);var state_35452__$1 = (function (){var statearr_35467 = state_35452;(statearr_35467[18] = inst_35418);
return statearr_35467;
})();var statearr_35468_35549 = state_35452__$1;(statearr_35468_35549[2] = null);
(statearr_35468_35549[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 6))
{var inst_35380 = (state_35452[19]);var inst_35379 = cljs.core.deref.call(null,cs);var inst_35380__$1 = cljs.core.keys.call(null,inst_35379);var inst_35381 = cljs.core.count.call(null,inst_35380__$1);var inst_35382 = cljs.core.reset_BANG_.call(null,dctr,inst_35381);var inst_35387 = cljs.core.seq.call(null,inst_35380__$1);var inst_35388 = inst_35387;var inst_35389 = null;var inst_35390 = 0;var inst_35391 = 0;var state_35452__$1 = (function (){var statearr_35469 = state_35452;(statearr_35469[10] = inst_35389);
(statearr_35469[11] = inst_35388);
(statearr_35469[12] = inst_35390);
(statearr_35469[19] = inst_35380__$1);
(statearr_35469[20] = inst_35382);
(statearr_35469[13] = inst_35391);
return statearr_35469;
})();var statearr_35470_35550 = state_35452__$1;(statearr_35470_35550[2] = null);
(statearr_35470_35550[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 38))
{var inst_35431 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35471_35551 = state_35452__$1;(statearr_35471_35551[2] = inst_35431);
(statearr_35471_35551[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 7))
{var inst_35448 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35472_35552 = state_35452__$1;(statearr_35472_35552[2] = inst_35448);
(statearr_35472_35552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 39))
{var inst_35409 = (state_35452[9]);var inst_35427 = (state_35452[2]);var inst_35428 = cljs.core.next.call(null,inst_35409);var inst_35388 = inst_35428;var inst_35389 = null;var inst_35390 = 0;var inst_35391 = 0;var state_35452__$1 = (function (){var statearr_35473 = state_35452;(statearr_35473[10] = inst_35389);
(statearr_35473[11] = inst_35388);
(statearr_35473[12] = inst_35390);
(statearr_35473[13] = inst_35391);
(statearr_35473[21] = inst_35427);
return statearr_35473;
})();var statearr_35474_35553 = state_35452__$1;(statearr_35474_35553[2] = null);
(statearr_35474_35553[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 8))
{var inst_35331 = (state_35452[14]);var inst_35332 = (state_35452[15]);var inst_35334 = (inst_35332 < inst_35331);var inst_35335 = inst_35334;var state_35452__$1 = state_35452;if(cljs.core.truth_(inst_35335))
{var statearr_35475_35554 = state_35452__$1;(statearr_35475_35554[1] = 10);
} else
{var statearr_35476_35555 = state_35452__$1;(statearr_35476_35555[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 40))
{var inst_35418 = (state_35452[18]);var inst_35419 = (state_35452[2]);var inst_35420 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35421 = cljs.core.async.untap_STAR_.call(null,m,inst_35418);var state_35452__$1 = (function (){var statearr_35477 = state_35452;(statearr_35477[22] = inst_35420);
(statearr_35477[23] = inst_35419);
return statearr_35477;
})();var statearr_35478_35556 = state_35452__$1;(statearr_35478_35556[2] = inst_35421);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 9))
{var inst_35377 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35479_35557 = state_35452__$1;(statearr_35479_35557[2] = inst_35377);
(statearr_35479_35557[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 41))
{var inst_35320 = (state_35452[8]);var inst_35418 = (state_35452[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35452,40,Object,null,39);var inst_35425 = cljs.core.async.put_BANG_.call(null,inst_35418,inst_35320,done);var state_35452__$1 = state_35452;var statearr_35480_35558 = state_35452__$1;(statearr_35480_35558[2] = inst_35425);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 10))
{var inst_35332 = (state_35452[15]);var inst_35330 = (state_35452[16]);var inst_35338 = cljs.core._nth.call(null,inst_35330,inst_35332);var inst_35339 = cljs.core.nth.call(null,inst_35338,0,null);var inst_35340 = cljs.core.nth.call(null,inst_35338,1,null);var state_35452__$1 = (function (){var statearr_35481 = state_35452;(statearr_35481[24] = inst_35339);
return statearr_35481;
})();if(cljs.core.truth_(inst_35340))
{var statearr_35482_35559 = state_35452__$1;(statearr_35482_35559[1] = 13);
} else
{var statearr_35483_35560 = state_35452__$1;(statearr_35483_35560[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 42))
{var state_35452__$1 = state_35452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35452__$1,45,dchan);
} else
{if((state_val_35453 === 11))
{var inst_35329 = (state_35452[17]);var inst_35349 = (state_35452[25]);var inst_35349__$1 = cljs.core.seq.call(null,inst_35329);var state_35452__$1 = (function (){var statearr_35484 = state_35452;(statearr_35484[25] = inst_35349__$1);
return statearr_35484;
})();if(inst_35349__$1)
{var statearr_35485_35561 = state_35452__$1;(statearr_35485_35561[1] = 16);
} else
{var statearr_35486_35562 = state_35452__$1;(statearr_35486_35562[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 43))
{var state_35452__$1 = state_35452;var statearr_35487_35563 = state_35452__$1;(statearr_35487_35563[2] = null);
(statearr_35487_35563[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 12))
{var inst_35375 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35488_35564 = state_35452__$1;(statearr_35488_35564[2] = inst_35375);
(statearr_35488_35564[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 44))
{var inst_35445 = (state_35452[2]);var state_35452__$1 = (function (){var statearr_35489 = state_35452;(statearr_35489[26] = inst_35445);
return statearr_35489;
})();var statearr_35490_35565 = state_35452__$1;(statearr_35490_35565[2] = null);
(statearr_35490_35565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 13))
{var inst_35339 = (state_35452[24]);var inst_35342 = cljs.core.async.close_BANG_.call(null,inst_35339);var state_35452__$1 = state_35452;var statearr_35491_35566 = state_35452__$1;(statearr_35491_35566[2] = inst_35342);
(statearr_35491_35566[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 45))
{var inst_35442 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35495_35567 = state_35452__$1;(statearr_35495_35567[2] = inst_35442);
(statearr_35495_35567[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 14))
{var state_35452__$1 = state_35452;var statearr_35496_35568 = state_35452__$1;(statearr_35496_35568[2] = null);
(statearr_35496_35568[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 15))
{var inst_35331 = (state_35452[14]);var inst_35332 = (state_35452[15]);var inst_35330 = (state_35452[16]);var inst_35329 = (state_35452[17]);var inst_35345 = (state_35452[2]);var inst_35346 = (inst_35332 + 1);var tmp35492 = inst_35331;var tmp35493 = inst_35330;var tmp35494 = inst_35329;var inst_35329__$1 = tmp35494;var inst_35330__$1 = tmp35493;var inst_35331__$1 = tmp35492;var inst_35332__$1 = inst_35346;var state_35452__$1 = (function (){var statearr_35497 = state_35452;(statearr_35497[14] = inst_35331__$1);
(statearr_35497[15] = inst_35332__$1);
(statearr_35497[16] = inst_35330__$1);
(statearr_35497[27] = inst_35345);
(statearr_35497[17] = inst_35329__$1);
return statearr_35497;
})();var statearr_35498_35569 = state_35452__$1;(statearr_35498_35569[2] = null);
(statearr_35498_35569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 16))
{var inst_35349 = (state_35452[25]);var inst_35351 = cljs.core.chunked_seq_QMARK_.call(null,inst_35349);var state_35452__$1 = state_35452;if(inst_35351)
{var statearr_35499_35570 = state_35452__$1;(statearr_35499_35570[1] = 19);
} else
{var statearr_35500_35571 = state_35452__$1;(statearr_35500_35571[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 17))
{var state_35452__$1 = state_35452;var statearr_35501_35572 = state_35452__$1;(statearr_35501_35572[2] = null);
(statearr_35501_35572[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 18))
{var inst_35373 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35502_35573 = state_35452__$1;(statearr_35502_35573[2] = inst_35373);
(statearr_35502_35573[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 19))
{var inst_35349 = (state_35452[25]);var inst_35353 = cljs.core.chunk_first.call(null,inst_35349);var inst_35354 = cljs.core.chunk_rest.call(null,inst_35349);var inst_35355 = cljs.core.count.call(null,inst_35353);var inst_35329 = inst_35354;var inst_35330 = inst_35353;var inst_35331 = inst_35355;var inst_35332 = 0;var state_35452__$1 = (function (){var statearr_35503 = state_35452;(statearr_35503[14] = inst_35331);
(statearr_35503[15] = inst_35332);
(statearr_35503[16] = inst_35330);
(statearr_35503[17] = inst_35329);
return statearr_35503;
})();var statearr_35504_35574 = state_35452__$1;(statearr_35504_35574[2] = null);
(statearr_35504_35574[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 20))
{var inst_35349 = (state_35452[25]);var inst_35359 = cljs.core.first.call(null,inst_35349);var inst_35360 = cljs.core.nth.call(null,inst_35359,0,null);var inst_35361 = cljs.core.nth.call(null,inst_35359,1,null);var state_35452__$1 = (function (){var statearr_35505 = state_35452;(statearr_35505[28] = inst_35360);
return statearr_35505;
})();if(cljs.core.truth_(inst_35361))
{var statearr_35506_35575 = state_35452__$1;(statearr_35506_35575[1] = 22);
} else
{var statearr_35507_35576 = state_35452__$1;(statearr_35507_35576[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 21))
{var inst_35370 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35508_35577 = state_35452__$1;(statearr_35508_35577[2] = inst_35370);
(statearr_35508_35577[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 22))
{var inst_35360 = (state_35452[28]);var inst_35363 = cljs.core.async.close_BANG_.call(null,inst_35360);var state_35452__$1 = state_35452;var statearr_35509_35578 = state_35452__$1;(statearr_35509_35578[2] = inst_35363);
(statearr_35509_35578[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 23))
{var state_35452__$1 = state_35452;var statearr_35510_35579 = state_35452__$1;(statearr_35510_35579[2] = null);
(statearr_35510_35579[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 24))
{var inst_35349 = (state_35452[25]);var inst_35366 = (state_35452[2]);var inst_35367 = cljs.core.next.call(null,inst_35349);var inst_35329 = inst_35367;var inst_35330 = null;var inst_35331 = 0;var inst_35332 = 0;var state_35452__$1 = (function (){var statearr_35511 = state_35452;(statearr_35511[14] = inst_35331);
(statearr_35511[15] = inst_35332);
(statearr_35511[16] = inst_35330);
(statearr_35511[17] = inst_35329);
(statearr_35511[29] = inst_35366);
return statearr_35511;
})();var statearr_35512_35580 = state_35452__$1;(statearr_35512_35580[2] = null);
(statearr_35512_35580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 25))
{var inst_35390 = (state_35452[12]);var inst_35391 = (state_35452[13]);var inst_35393 = (inst_35391 < inst_35390);var inst_35394 = inst_35393;var state_35452__$1 = state_35452;if(cljs.core.truth_(inst_35394))
{var statearr_35513_35581 = state_35452__$1;(statearr_35513_35581[1] = 27);
} else
{var statearr_35514_35582 = state_35452__$1;(statearr_35514_35582[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 26))
{var inst_35380 = (state_35452[19]);var inst_35438 = (state_35452[2]);var inst_35439 = cljs.core.seq.call(null,inst_35380);var state_35452__$1 = (function (){var statearr_35515 = state_35452;(statearr_35515[30] = inst_35438);
return statearr_35515;
})();if(inst_35439)
{var statearr_35516_35583 = state_35452__$1;(statearr_35516_35583[1] = 42);
} else
{var statearr_35517_35584 = state_35452__$1;(statearr_35517_35584[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 27))
{var inst_35389 = (state_35452[10]);var inst_35391 = (state_35452[13]);var inst_35396 = cljs.core._nth.call(null,inst_35389,inst_35391);var state_35452__$1 = (function (){var statearr_35518 = state_35452;(statearr_35518[7] = inst_35396);
return statearr_35518;
})();var statearr_35519_35585 = state_35452__$1;(statearr_35519_35585[2] = null);
(statearr_35519_35585[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 28))
{var inst_35388 = (state_35452[11]);var inst_35409 = (state_35452[9]);var inst_35409__$1 = cljs.core.seq.call(null,inst_35388);var state_35452__$1 = (function (){var statearr_35523 = state_35452;(statearr_35523[9] = inst_35409__$1);
return statearr_35523;
})();if(inst_35409__$1)
{var statearr_35524_35586 = state_35452__$1;(statearr_35524_35586[1] = 33);
} else
{var statearr_35525_35587 = state_35452__$1;(statearr_35525_35587[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 29))
{var inst_35436 = (state_35452[2]);var state_35452__$1 = state_35452;var statearr_35526_35588 = state_35452__$1;(statearr_35526_35588[2] = inst_35436);
(statearr_35526_35588[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 30))
{var inst_35389 = (state_35452[10]);var inst_35388 = (state_35452[11]);var inst_35390 = (state_35452[12]);var inst_35391 = (state_35452[13]);var inst_35405 = (state_35452[2]);var inst_35406 = (inst_35391 + 1);var tmp35520 = inst_35389;var tmp35521 = inst_35388;var tmp35522 = inst_35390;var inst_35388__$1 = tmp35521;var inst_35389__$1 = tmp35520;var inst_35390__$1 = tmp35522;var inst_35391__$1 = inst_35406;var state_35452__$1 = (function (){var statearr_35527 = state_35452;(statearr_35527[10] = inst_35389__$1);
(statearr_35527[11] = inst_35388__$1);
(statearr_35527[12] = inst_35390__$1);
(statearr_35527[31] = inst_35405);
(statearr_35527[13] = inst_35391__$1);
return statearr_35527;
})();var statearr_35528_35589 = state_35452__$1;(statearr_35528_35589[2] = null);
(statearr_35528_35589[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35453 === 31))
{var inst_35396 = (state_35452[7]);var inst_35397 = (state_35452[2]);var inst_35398 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35399 = cljs.core.async.untap_STAR_.call(null,m,inst_35396);var state_35452__$1 = (function (){var statearr_35529 = state_35452;(statearr_35529[32] = inst_35397);
(statearr_35529[33] = inst_35398);
return statearr_35529;
})();var statearr_35530_35590 = state_35452__$1;(statearr_35530_35590[2] = inst_35399);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35534[0] = state_machine__5507__auto__);
(statearr_35534[1] = 1);
return statearr_35534;
});
var state_machine__5507__auto____1 = (function (state_35452){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35452);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35535){if((e35535 instanceof Object))
{var ex__5510__auto__ = e35535;var statearr_35536_35591 = state_35452;(statearr_35536_35591[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35592 = state_35452;
state_35452 = G__35592;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35452){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35537 = f__5522__auto__.call(null);(statearr_35537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35538);
return statearr_35537;
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
cljs.core.async.Mix = (function (){var obj35594 = {};return obj35594;
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
;var m = (function (){if(typeof cljs.core.async.t35704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35704 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35705){
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
this.meta35705 = meta35705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35704.cljs$lang$type = true;
cljs.core.async.t35704.cljs$lang$ctorStr = "cljs.core.async/t35704";
cljs.core.async.t35704.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35704");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35704.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35706){var self__ = this;
var _35706__$1 = this;return self__.meta35705;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35706,meta35705__$1){var self__ = this;
var _35706__$1 = this;return (new cljs.core.async.t35704(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35705__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35704 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35704(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35705){return (new cljs.core.async.t35704(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35705));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35704(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35813 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35771){var state_val_35772 = (state_35771[1]);if((state_val_35772 === 1))
{var inst_35710 = (state_35771[7]);var inst_35710__$1 = calc_state.call(null);var inst_35711 = cljs.core.seq_QMARK_.call(null,inst_35710__$1);var state_35771__$1 = (function (){var statearr_35773 = state_35771;(statearr_35773[7] = inst_35710__$1);
return statearr_35773;
})();if(inst_35711)
{var statearr_35774_35814 = state_35771__$1;(statearr_35774_35814[1] = 2);
} else
{var statearr_35775_35815 = state_35771__$1;(statearr_35775_35815[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 2))
{var inst_35710 = (state_35771[7]);var inst_35713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35710);var state_35771__$1 = state_35771;var statearr_35776_35816 = state_35771__$1;(statearr_35776_35816[2] = inst_35713);
(statearr_35776_35816[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 3))
{var inst_35710 = (state_35771[7]);var state_35771__$1 = state_35771;var statearr_35777_35817 = state_35771__$1;(statearr_35777_35817[2] = inst_35710);
(statearr_35777_35817[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 4))
{var inst_35710 = (state_35771[7]);var inst_35716 = (state_35771[2]);var inst_35717 = cljs.core.get.call(null,inst_35716,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35718 = cljs.core.get.call(null,inst_35716,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35719 = cljs.core.get.call(null,inst_35716,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35720 = inst_35710;var state_35771__$1 = (function (){var statearr_35778 = state_35771;(statearr_35778[8] = inst_35718);
(statearr_35778[9] = inst_35717);
(statearr_35778[10] = inst_35719);
(statearr_35778[11] = inst_35720);
return statearr_35778;
})();var statearr_35779_35818 = state_35771__$1;(statearr_35779_35818[2] = null);
(statearr_35779_35818[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 5))
{var inst_35720 = (state_35771[11]);var inst_35723 = cljs.core.seq_QMARK_.call(null,inst_35720);var state_35771__$1 = state_35771;if(inst_35723)
{var statearr_35780_35819 = state_35771__$1;(statearr_35780_35819[1] = 7);
} else
{var statearr_35781_35820 = state_35771__$1;(statearr_35781_35820[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 6))
{var inst_35769 = (state_35771[2]);var state_35771__$1 = state_35771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35771__$1,inst_35769);
} else
{if((state_val_35772 === 7))
{var inst_35720 = (state_35771[11]);var inst_35725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35720);var state_35771__$1 = state_35771;var statearr_35782_35821 = state_35771__$1;(statearr_35782_35821[2] = inst_35725);
(statearr_35782_35821[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 8))
{var inst_35720 = (state_35771[11]);var state_35771__$1 = state_35771;var statearr_35783_35822 = state_35771__$1;(statearr_35783_35822[2] = inst_35720);
(statearr_35783_35822[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 9))
{var inst_35728 = (state_35771[12]);var inst_35728__$1 = (state_35771[2]);var inst_35729 = cljs.core.get.call(null,inst_35728__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35730 = cljs.core.get.call(null,inst_35728__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35731 = cljs.core.get.call(null,inst_35728__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35771__$1 = (function (){var statearr_35784 = state_35771;(statearr_35784[13] = inst_35731);
(statearr_35784[14] = inst_35730);
(statearr_35784[12] = inst_35728__$1);
return statearr_35784;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35771__$1,10,inst_35729);
} else
{if((state_val_35772 === 10))
{var inst_35735 = (state_35771[15]);var inst_35736 = (state_35771[16]);var inst_35734 = (state_35771[2]);var inst_35735__$1 = cljs.core.nth.call(null,inst_35734,0,null);var inst_35736__$1 = cljs.core.nth.call(null,inst_35734,1,null);var inst_35737 = (inst_35735__$1 == null);var inst_35738 = cljs.core._EQ_.call(null,inst_35736__$1,change);var inst_35739 = (inst_35737) || (inst_35738);var state_35771__$1 = (function (){var statearr_35785 = state_35771;(statearr_35785[15] = inst_35735__$1);
(statearr_35785[16] = inst_35736__$1);
return statearr_35785;
})();if(cljs.core.truth_(inst_35739))
{var statearr_35786_35823 = state_35771__$1;(statearr_35786_35823[1] = 11);
} else
{var statearr_35787_35824 = state_35771__$1;(statearr_35787_35824[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 11))
{var inst_35735 = (state_35771[15]);var inst_35741 = (inst_35735 == null);var state_35771__$1 = state_35771;if(cljs.core.truth_(inst_35741))
{var statearr_35788_35825 = state_35771__$1;(statearr_35788_35825[1] = 14);
} else
{var statearr_35789_35826 = state_35771__$1;(statearr_35789_35826[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 12))
{var inst_35736 = (state_35771[16]);var inst_35731 = (state_35771[13]);var inst_35750 = (state_35771[17]);var inst_35750__$1 = inst_35731.call(null,inst_35736);var state_35771__$1 = (function (){var statearr_35790 = state_35771;(statearr_35790[17] = inst_35750__$1);
return statearr_35790;
})();if(cljs.core.truth_(inst_35750__$1))
{var statearr_35791_35827 = state_35771__$1;(statearr_35791_35827[1] = 17);
} else
{var statearr_35792_35828 = state_35771__$1;(statearr_35792_35828[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 13))
{var inst_35767 = (state_35771[2]);var state_35771__$1 = state_35771;var statearr_35793_35829 = state_35771__$1;(statearr_35793_35829[2] = inst_35767);
(statearr_35793_35829[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 14))
{var inst_35736 = (state_35771[16]);var inst_35743 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35736);var state_35771__$1 = state_35771;var statearr_35794_35830 = state_35771__$1;(statearr_35794_35830[2] = inst_35743);
(statearr_35794_35830[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 15))
{var state_35771__$1 = state_35771;var statearr_35795_35831 = state_35771__$1;(statearr_35795_35831[2] = null);
(statearr_35795_35831[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 16))
{var inst_35746 = (state_35771[2]);var inst_35747 = calc_state.call(null);var inst_35720 = inst_35747;var state_35771__$1 = (function (){var statearr_35796 = state_35771;(statearr_35796[11] = inst_35720);
(statearr_35796[18] = inst_35746);
return statearr_35796;
})();var statearr_35797_35832 = state_35771__$1;(statearr_35797_35832[2] = null);
(statearr_35797_35832[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 17))
{var inst_35750 = (state_35771[17]);var state_35771__$1 = state_35771;var statearr_35798_35833 = state_35771__$1;(statearr_35798_35833[2] = inst_35750);
(statearr_35798_35833[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 18))
{var inst_35736 = (state_35771[16]);var inst_35731 = (state_35771[13]);var inst_35730 = (state_35771[14]);var inst_35753 = cljs.core.empty_QMARK_.call(null,inst_35731);var inst_35754 = inst_35730.call(null,inst_35736);var inst_35755 = cljs.core.not.call(null,inst_35754);var inst_35756 = (inst_35753) && (inst_35755);var state_35771__$1 = state_35771;var statearr_35799_35834 = state_35771__$1;(statearr_35799_35834[2] = inst_35756);
(statearr_35799_35834[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 19))
{var inst_35758 = (state_35771[2]);var state_35771__$1 = state_35771;if(cljs.core.truth_(inst_35758))
{var statearr_35800_35835 = state_35771__$1;(statearr_35800_35835[1] = 20);
} else
{var statearr_35801_35836 = state_35771__$1;(statearr_35801_35836[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 20))
{var inst_35735 = (state_35771[15]);var state_35771__$1 = state_35771;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35771__$1,23,out,inst_35735);
} else
{if((state_val_35772 === 21))
{var state_35771__$1 = state_35771;var statearr_35802_35837 = state_35771__$1;(statearr_35802_35837[2] = null);
(statearr_35802_35837[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 22))
{var inst_35728 = (state_35771[12]);var inst_35764 = (state_35771[2]);var inst_35720 = inst_35728;var state_35771__$1 = (function (){var statearr_35803 = state_35771;(statearr_35803[11] = inst_35720);
(statearr_35803[19] = inst_35764);
return statearr_35803;
})();var statearr_35804_35838 = state_35771__$1;(statearr_35804_35838[2] = null);
(statearr_35804_35838[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35772 === 23))
{var inst_35761 = (state_35771[2]);var state_35771__$1 = state_35771;var statearr_35805_35839 = state_35771__$1;(statearr_35805_35839[2] = inst_35761);
(statearr_35805_35839[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_35809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35809[0] = state_machine__5507__auto__);
(statearr_35809[1] = 1);
return statearr_35809;
});
var state_machine__5507__auto____1 = (function (state_35771){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35771);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35810){if((e35810 instanceof Object))
{var ex__5510__auto__ = e35810;var statearr_35811_35840 = state_35771;(statearr_35811_35840[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35771);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35841 = state_35771;
state_35771 = G__35841;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35771){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35812 = f__5522__auto__.call(null);(statearr_35812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35813);
return statearr_35812;
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
cljs.core.async.Pub = (function (){var obj35843 = {};return obj35843;
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
return (function (p1__35844_SHARP_){if(cljs.core.truth_(p1__35844_SHARP_.call(null,topic)))
{return p1__35844_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35844_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35969 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35970){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35970 = meta35970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35969.cljs$lang$type = true;
cljs.core.async.t35969.cljs$lang$ctorStr = "cljs.core.async/t35969";
cljs.core.async.t35969.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35969");
});})(mults,ensure_mult))
;
cljs.core.async.t35969.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35969.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35969.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35969.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35969.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35971){var self__ = this;
var _35971__$1 = this;return self__.meta35970;
});})(mults,ensure_mult))
;
cljs.core.async.t35969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35971,meta35970__$1){var self__ = this;
var _35971__$1 = this;return (new cljs.core.async.t35969(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35970__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35969 = ((function (mults,ensure_mult){
return (function __GT_t35969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35970){return (new cljs.core.async.t35969(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35970));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35969(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36093 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36045){var state_val_36046 = (state_36045[1]);if((state_val_36046 === 1))
{var state_36045__$1 = state_36045;var statearr_36047_36094 = state_36045__$1;(statearr_36047_36094[2] = null);
(statearr_36047_36094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 2))
{var state_36045__$1 = state_36045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36045__$1,4,ch);
} else
{if((state_val_36046 === 3))
{var inst_36043 = (state_36045[2]);var state_36045__$1 = state_36045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36045__$1,inst_36043);
} else
{if((state_val_36046 === 4))
{var inst_35974 = (state_36045[7]);var inst_35974__$1 = (state_36045[2]);var inst_35975 = (inst_35974__$1 == null);var state_36045__$1 = (function (){var statearr_36048 = state_36045;(statearr_36048[7] = inst_35974__$1);
return statearr_36048;
})();if(cljs.core.truth_(inst_35975))
{var statearr_36049_36095 = state_36045__$1;(statearr_36049_36095[1] = 5);
} else
{var statearr_36050_36096 = state_36045__$1;(statearr_36050_36096[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 5))
{var inst_35981 = cljs.core.deref.call(null,mults);var inst_35982 = cljs.core.vals.call(null,inst_35981);var inst_35983 = cljs.core.seq.call(null,inst_35982);var inst_35984 = inst_35983;var inst_35985 = null;var inst_35986 = 0;var inst_35987 = 0;var state_36045__$1 = (function (){var statearr_36051 = state_36045;(statearr_36051[8] = inst_35985);
(statearr_36051[9] = inst_35984);
(statearr_36051[10] = inst_35986);
(statearr_36051[11] = inst_35987);
return statearr_36051;
})();var statearr_36052_36097 = state_36045__$1;(statearr_36052_36097[2] = null);
(statearr_36052_36097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 6))
{var inst_36024 = (state_36045[12]);var inst_36022 = (state_36045[13]);var inst_35974 = (state_36045[7]);var inst_36022__$1 = topic_fn.call(null,inst_35974);var inst_36023 = cljs.core.deref.call(null,mults);var inst_36024__$1 = cljs.core.get.call(null,inst_36023,inst_36022__$1);var state_36045__$1 = (function (){var statearr_36053 = state_36045;(statearr_36053[12] = inst_36024__$1);
(statearr_36053[13] = inst_36022__$1);
return statearr_36053;
})();if(cljs.core.truth_(inst_36024__$1))
{var statearr_36054_36098 = state_36045__$1;(statearr_36054_36098[1] = 19);
} else
{var statearr_36055_36099 = state_36045__$1;(statearr_36055_36099[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 7))
{var inst_36041 = (state_36045[2]);var state_36045__$1 = state_36045;var statearr_36056_36100 = state_36045__$1;(statearr_36056_36100[2] = inst_36041);
(statearr_36056_36100[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 8))
{var inst_35986 = (state_36045[10]);var inst_35987 = (state_36045[11]);var inst_35989 = (inst_35987 < inst_35986);var inst_35990 = inst_35989;var state_36045__$1 = state_36045;if(cljs.core.truth_(inst_35990))
{var statearr_36060_36101 = state_36045__$1;(statearr_36060_36101[1] = 10);
} else
{var statearr_36061_36102 = state_36045__$1;(statearr_36061_36102[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 9))
{var inst_36020 = (state_36045[2]);var state_36045__$1 = state_36045;var statearr_36062_36103 = state_36045__$1;(statearr_36062_36103[2] = inst_36020);
(statearr_36062_36103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 10))
{var inst_35985 = (state_36045[8]);var inst_35984 = (state_36045[9]);var inst_35986 = (state_36045[10]);var inst_35987 = (state_36045[11]);var inst_35992 = cljs.core._nth.call(null,inst_35985,inst_35987);var inst_35993 = cljs.core.async.muxch_STAR_.call(null,inst_35992);var inst_35994 = cljs.core.async.close_BANG_.call(null,inst_35993);var inst_35995 = (inst_35987 + 1);var tmp36057 = inst_35985;var tmp36058 = inst_35984;var tmp36059 = inst_35986;var inst_35984__$1 = tmp36058;var inst_35985__$1 = tmp36057;var inst_35986__$1 = tmp36059;var inst_35987__$1 = inst_35995;var state_36045__$1 = (function (){var statearr_36063 = state_36045;(statearr_36063[8] = inst_35985__$1);
(statearr_36063[9] = inst_35984__$1);
(statearr_36063[10] = inst_35986__$1);
(statearr_36063[11] = inst_35987__$1);
(statearr_36063[14] = inst_35994);
return statearr_36063;
})();var statearr_36064_36104 = state_36045__$1;(statearr_36064_36104[2] = null);
(statearr_36064_36104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 11))
{var inst_35984 = (state_36045[9]);var inst_35998 = (state_36045[15]);var inst_35998__$1 = cljs.core.seq.call(null,inst_35984);var state_36045__$1 = (function (){var statearr_36065 = state_36045;(statearr_36065[15] = inst_35998__$1);
return statearr_36065;
})();if(inst_35998__$1)
{var statearr_36066_36105 = state_36045__$1;(statearr_36066_36105[1] = 13);
} else
{var statearr_36067_36106 = state_36045__$1;(statearr_36067_36106[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 12))
{var inst_36018 = (state_36045[2]);var state_36045__$1 = state_36045;var statearr_36068_36107 = state_36045__$1;(statearr_36068_36107[2] = inst_36018);
(statearr_36068_36107[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 13))
{var inst_35998 = (state_36045[15]);var inst_36000 = cljs.core.chunked_seq_QMARK_.call(null,inst_35998);var state_36045__$1 = state_36045;if(inst_36000)
{var statearr_36069_36108 = state_36045__$1;(statearr_36069_36108[1] = 16);
} else
{var statearr_36070_36109 = state_36045__$1;(statearr_36070_36109[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 14))
{var state_36045__$1 = state_36045;var statearr_36071_36110 = state_36045__$1;(statearr_36071_36110[2] = null);
(statearr_36071_36110[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 15))
{var inst_36016 = (state_36045[2]);var state_36045__$1 = state_36045;var statearr_36072_36111 = state_36045__$1;(statearr_36072_36111[2] = inst_36016);
(statearr_36072_36111[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 16))
{var inst_35998 = (state_36045[15]);var inst_36002 = cljs.core.chunk_first.call(null,inst_35998);var inst_36003 = cljs.core.chunk_rest.call(null,inst_35998);var inst_36004 = cljs.core.count.call(null,inst_36002);var inst_35984 = inst_36003;var inst_35985 = inst_36002;var inst_35986 = inst_36004;var inst_35987 = 0;var state_36045__$1 = (function (){var statearr_36073 = state_36045;(statearr_36073[8] = inst_35985);
(statearr_36073[9] = inst_35984);
(statearr_36073[10] = inst_35986);
(statearr_36073[11] = inst_35987);
return statearr_36073;
})();var statearr_36074_36112 = state_36045__$1;(statearr_36074_36112[2] = null);
(statearr_36074_36112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 17))
{var inst_35998 = (state_36045[15]);var inst_36007 = cljs.core.first.call(null,inst_35998);var inst_36008 = cljs.core.async.muxch_STAR_.call(null,inst_36007);var inst_36009 = cljs.core.async.close_BANG_.call(null,inst_36008);var inst_36010 = cljs.core.next.call(null,inst_35998);var inst_35984 = inst_36010;var inst_35985 = null;var inst_35986 = 0;var inst_35987 = 0;var state_36045__$1 = (function (){var statearr_36075 = state_36045;(statearr_36075[8] = inst_35985);
(statearr_36075[9] = inst_35984);
(statearr_36075[16] = inst_36009);
(statearr_36075[10] = inst_35986);
(statearr_36075[11] = inst_35987);
return statearr_36075;
})();var statearr_36076_36113 = state_36045__$1;(statearr_36076_36113[2] = null);
(statearr_36076_36113[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 18))
{var inst_36013 = (state_36045[2]);var state_36045__$1 = state_36045;var statearr_36077_36114 = state_36045__$1;(statearr_36077_36114[2] = inst_36013);
(statearr_36077_36114[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 19))
{var state_36045__$1 = state_36045;var statearr_36078_36115 = state_36045__$1;(statearr_36078_36115[2] = null);
(statearr_36078_36115[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 20))
{var state_36045__$1 = state_36045;var statearr_36079_36116 = state_36045__$1;(statearr_36079_36116[2] = null);
(statearr_36079_36116[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 21))
{var inst_36038 = (state_36045[2]);var state_36045__$1 = (function (){var statearr_36080 = state_36045;(statearr_36080[17] = inst_36038);
return statearr_36080;
})();var statearr_36081_36117 = state_36045__$1;(statearr_36081_36117[2] = null);
(statearr_36081_36117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 22))
{var inst_36035 = (state_36045[2]);var state_36045__$1 = state_36045;var statearr_36082_36118 = state_36045__$1;(statearr_36082_36118[2] = inst_36035);
(statearr_36082_36118[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 23))
{var inst_36022 = (state_36045[13]);var inst_36026 = (state_36045[2]);var inst_36027 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36022);var state_36045__$1 = (function (){var statearr_36083 = state_36045;(statearr_36083[18] = inst_36026);
return statearr_36083;
})();var statearr_36084_36119 = state_36045__$1;(statearr_36084_36119[2] = inst_36027);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36045__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36046 === 24))
{var inst_36024 = (state_36045[12]);var inst_35974 = (state_36045[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36045,23,Object,null,22);var inst_36031 = cljs.core.async.muxch_STAR_.call(null,inst_36024);var state_36045__$1 = state_36045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36045__$1,25,inst_36031,inst_35974);
} else
{if((state_val_36046 === 25))
{var inst_36033 = (state_36045[2]);var state_36045__$1 = state_36045;var statearr_36085_36120 = state_36045__$1;(statearr_36085_36120[2] = inst_36033);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36045__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36089[0] = state_machine__5507__auto__);
(statearr_36089[1] = 1);
return statearr_36089;
});
var state_machine__5507__auto____1 = (function (state_36045){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36045);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36090){if((e36090 instanceof Object))
{var ex__5510__auto__ = e36090;var statearr_36091_36121 = state_36045;(statearr_36091_36121[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36090;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36122 = state_36045;
state_36045 = G__36122;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36045){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36092 = f__5522__auto__.call(null);(statearr_36092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36093);
return statearr_36092;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36259 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36229){var state_val_36230 = (state_36229[1]);if((state_val_36230 === 1))
{var state_36229__$1 = state_36229;var statearr_36231_36260 = state_36229__$1;(statearr_36231_36260[2] = null);
(statearr_36231_36260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 2))
{var inst_36192 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36193 = 0;var state_36229__$1 = (function (){var statearr_36232 = state_36229;(statearr_36232[7] = inst_36192);
(statearr_36232[8] = inst_36193);
return statearr_36232;
})();var statearr_36233_36261 = state_36229__$1;(statearr_36233_36261[2] = null);
(statearr_36233_36261[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 3))
{var inst_36227 = (state_36229[2]);var state_36229__$1 = state_36229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36229__$1,inst_36227);
} else
{if((state_val_36230 === 4))
{var inst_36193 = (state_36229[8]);var inst_36195 = (inst_36193 < cnt);var state_36229__$1 = state_36229;if(cljs.core.truth_(inst_36195))
{var statearr_36234_36262 = state_36229__$1;(statearr_36234_36262[1] = 6);
} else
{var statearr_36235_36263 = state_36229__$1;(statearr_36235_36263[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 5))
{var inst_36213 = (state_36229[2]);var state_36229__$1 = (function (){var statearr_36236 = state_36229;(statearr_36236[9] = inst_36213);
return statearr_36236;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36229__$1,12,dchan);
} else
{if((state_val_36230 === 6))
{var state_36229__$1 = state_36229;var statearr_36237_36264 = state_36229__$1;(statearr_36237_36264[2] = null);
(statearr_36237_36264[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 7))
{var state_36229__$1 = state_36229;var statearr_36238_36265 = state_36229__$1;(statearr_36238_36265[2] = null);
(statearr_36238_36265[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 8))
{var inst_36211 = (state_36229[2]);var state_36229__$1 = state_36229;var statearr_36239_36266 = state_36229__$1;(statearr_36239_36266[2] = inst_36211);
(statearr_36239_36266[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 9))
{var inst_36193 = (state_36229[8]);var inst_36206 = (state_36229[2]);var inst_36207 = (inst_36193 + 1);var inst_36193__$1 = inst_36207;var state_36229__$1 = (function (){var statearr_36240 = state_36229;(statearr_36240[8] = inst_36193__$1);
(statearr_36240[10] = inst_36206);
return statearr_36240;
})();var statearr_36241_36267 = state_36229__$1;(statearr_36241_36267[2] = null);
(statearr_36241_36267[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 10))
{var inst_36197 = (state_36229[2]);var inst_36198 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36229__$1 = (function (){var statearr_36242 = state_36229;(statearr_36242[11] = inst_36197);
return statearr_36242;
})();var statearr_36243_36268 = state_36229__$1;(statearr_36243_36268[2] = inst_36198);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36229__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 11))
{var inst_36193 = (state_36229[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36229,10,Object,null,9);var inst_36202 = chs__$1.call(null,inst_36193);var inst_36203 = done.call(null,inst_36193);var inst_36204 = cljs.core.async.take_BANG_.call(null,inst_36202,inst_36203);var state_36229__$1 = state_36229;var statearr_36244_36269 = state_36229__$1;(statearr_36244_36269[2] = inst_36204);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36229__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 12))
{var inst_36215 = (state_36229[12]);var inst_36215__$1 = (state_36229[2]);var inst_36216 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36215__$1);var state_36229__$1 = (function (){var statearr_36245 = state_36229;(statearr_36245[12] = inst_36215__$1);
return statearr_36245;
})();if(cljs.core.truth_(inst_36216))
{var statearr_36246_36270 = state_36229__$1;(statearr_36246_36270[1] = 13);
} else
{var statearr_36247_36271 = state_36229__$1;(statearr_36247_36271[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 13))
{var inst_36218 = cljs.core.async.close_BANG_.call(null,out);var state_36229__$1 = state_36229;var statearr_36248_36272 = state_36229__$1;(statearr_36248_36272[2] = inst_36218);
(statearr_36248_36272[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 14))
{var inst_36215 = (state_36229[12]);var inst_36220 = cljs.core.apply.call(null,f,inst_36215);var state_36229__$1 = state_36229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36229__$1,16,out,inst_36220);
} else
{if((state_val_36230 === 15))
{var inst_36225 = (state_36229[2]);var state_36229__$1 = state_36229;var statearr_36249_36273 = state_36229__$1;(statearr_36249_36273[2] = inst_36225);
(statearr_36249_36273[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36230 === 16))
{var inst_36222 = (state_36229[2]);var state_36229__$1 = (function (){var statearr_36250 = state_36229;(statearr_36250[13] = inst_36222);
return statearr_36250;
})();var statearr_36251_36274 = state_36229__$1;(statearr_36251_36274[2] = null);
(statearr_36251_36274[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36255[0] = state_machine__5507__auto__);
(statearr_36255[1] = 1);
return statearr_36255;
});
var state_machine__5507__auto____1 = (function (state_36229){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36229);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36256){if((e36256 instanceof Object))
{var ex__5510__auto__ = e36256;var statearr_36257_36275 = state_36229;(statearr_36257_36275[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36229);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36276 = state_36229;
state_36229 = G__36276;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36229){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36258 = f__5522__auto__.call(null);(statearr_36258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36259);
return statearr_36258;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36360){var state_val_36361 = (state_36360[1]);if((state_val_36361 === 1))
{var inst_36331 = cljs.core.vec.call(null,chs);var inst_36332 = inst_36331;var state_36360__$1 = (function (){var statearr_36362 = state_36360;(statearr_36362[7] = inst_36332);
return statearr_36362;
})();var statearr_36363_36385 = state_36360__$1;(statearr_36363_36385[2] = null);
(statearr_36363_36385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36361 === 2))
{var inst_36332 = (state_36360[7]);var inst_36334 = cljs.core.count.call(null,inst_36332);var inst_36335 = (inst_36334 > 0);var state_36360__$1 = state_36360;if(cljs.core.truth_(inst_36335))
{var statearr_36364_36386 = state_36360__$1;(statearr_36364_36386[1] = 4);
} else
{var statearr_36365_36387 = state_36360__$1;(statearr_36365_36387[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36361 === 3))
{var inst_36358 = (state_36360[2]);var state_36360__$1 = state_36360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36360__$1,inst_36358);
} else
{if((state_val_36361 === 4))
{var inst_36332 = (state_36360[7]);var state_36360__$1 = state_36360;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36360__$1,7,inst_36332);
} else
{if((state_val_36361 === 5))
{var inst_36354 = cljs.core.async.close_BANG_.call(null,out);var state_36360__$1 = state_36360;var statearr_36366_36388 = state_36360__$1;(statearr_36366_36388[2] = inst_36354);
(statearr_36366_36388[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36361 === 6))
{var inst_36356 = (state_36360[2]);var state_36360__$1 = state_36360;var statearr_36367_36389 = state_36360__$1;(statearr_36367_36389[2] = inst_36356);
(statearr_36367_36389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36361 === 7))
{var inst_36340 = (state_36360[8]);var inst_36339 = (state_36360[9]);var inst_36339__$1 = (state_36360[2]);var inst_36340__$1 = cljs.core.nth.call(null,inst_36339__$1,0,null);var inst_36341 = cljs.core.nth.call(null,inst_36339__$1,1,null);var inst_36342 = (inst_36340__$1 == null);var state_36360__$1 = (function (){var statearr_36368 = state_36360;(statearr_36368[10] = inst_36341);
(statearr_36368[8] = inst_36340__$1);
(statearr_36368[9] = inst_36339__$1);
return statearr_36368;
})();if(cljs.core.truth_(inst_36342))
{var statearr_36369_36390 = state_36360__$1;(statearr_36369_36390[1] = 8);
} else
{var statearr_36370_36391 = state_36360__$1;(statearr_36370_36391[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36361 === 8))
{var inst_36341 = (state_36360[10]);var inst_36340 = (state_36360[8]);var inst_36339 = (state_36360[9]);var inst_36332 = (state_36360[7]);var inst_36344 = (function (){var c = inst_36341;var v = inst_36340;var vec__36337 = inst_36339;var cs = inst_36332;return ((function (c,v,vec__36337,cs,inst_36341,inst_36340,inst_36339,inst_36332,state_val_36361){
return (function (p1__36277_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36277_SHARP_);
});
;})(c,v,vec__36337,cs,inst_36341,inst_36340,inst_36339,inst_36332,state_val_36361))
})();var inst_36345 = cljs.core.filterv.call(null,inst_36344,inst_36332);var inst_36332__$1 = inst_36345;var state_36360__$1 = (function (){var statearr_36371 = state_36360;(statearr_36371[7] = inst_36332__$1);
return statearr_36371;
})();var statearr_36372_36392 = state_36360__$1;(statearr_36372_36392[2] = null);
(statearr_36372_36392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36361 === 9))
{var inst_36340 = (state_36360[8]);var state_36360__$1 = state_36360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36360__$1,11,out,inst_36340);
} else
{if((state_val_36361 === 10))
{var inst_36352 = (state_36360[2]);var state_36360__$1 = state_36360;var statearr_36374_36393 = state_36360__$1;(statearr_36374_36393[2] = inst_36352);
(statearr_36374_36393[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36361 === 11))
{var inst_36332 = (state_36360[7]);var inst_36349 = (state_36360[2]);var tmp36373 = inst_36332;var inst_36332__$1 = tmp36373;var state_36360__$1 = (function (){var statearr_36375 = state_36360;(statearr_36375[11] = inst_36349);
(statearr_36375[7] = inst_36332__$1);
return statearr_36375;
})();var statearr_36376_36394 = state_36360__$1;(statearr_36376_36394[2] = null);
(statearr_36376_36394[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36380 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36380[0] = state_machine__5507__auto__);
(statearr_36380[1] = 1);
return statearr_36380;
});
var state_machine__5507__auto____1 = (function (state_36360){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36381){if((e36381 instanceof Object))
{var ex__5510__auto__ = e36381;var statearr_36382_36395 = state_36360;(statearr_36382_36395[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36396 = state_36360;
state_36360 = G__36396;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36360){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36383 = f__5522__auto__.call(null);(statearr_36383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36384);
return statearr_36383;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36489 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36466){var state_val_36467 = (state_36466[1]);if((state_val_36467 === 1))
{var inst_36443 = 0;var state_36466__$1 = (function (){var statearr_36468 = state_36466;(statearr_36468[7] = inst_36443);
return statearr_36468;
})();var statearr_36469_36490 = state_36466__$1;(statearr_36469_36490[2] = null);
(statearr_36469_36490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36467 === 2))
{var inst_36443 = (state_36466[7]);var inst_36445 = (inst_36443 < n);var state_36466__$1 = state_36466;if(cljs.core.truth_(inst_36445))
{var statearr_36470_36491 = state_36466__$1;(statearr_36470_36491[1] = 4);
} else
{var statearr_36471_36492 = state_36466__$1;(statearr_36471_36492[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36467 === 3))
{var inst_36463 = (state_36466[2]);var inst_36464 = cljs.core.async.close_BANG_.call(null,out);var state_36466__$1 = (function (){var statearr_36472 = state_36466;(statearr_36472[8] = inst_36463);
return statearr_36472;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36466__$1,inst_36464);
} else
{if((state_val_36467 === 4))
{var state_36466__$1 = state_36466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36466__$1,7,ch);
} else
{if((state_val_36467 === 5))
{var state_36466__$1 = state_36466;var statearr_36473_36493 = state_36466__$1;(statearr_36473_36493[2] = null);
(statearr_36473_36493[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36467 === 6))
{var inst_36461 = (state_36466[2]);var state_36466__$1 = state_36466;var statearr_36474_36494 = state_36466__$1;(statearr_36474_36494[2] = inst_36461);
(statearr_36474_36494[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36467 === 7))
{var inst_36448 = (state_36466[9]);var inst_36448__$1 = (state_36466[2]);var inst_36449 = (inst_36448__$1 == null);var inst_36450 = cljs.core.not.call(null,inst_36449);var state_36466__$1 = (function (){var statearr_36475 = state_36466;(statearr_36475[9] = inst_36448__$1);
return statearr_36475;
})();if(inst_36450)
{var statearr_36476_36495 = state_36466__$1;(statearr_36476_36495[1] = 8);
} else
{var statearr_36477_36496 = state_36466__$1;(statearr_36477_36496[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36467 === 8))
{var inst_36448 = (state_36466[9]);var state_36466__$1 = state_36466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36466__$1,11,out,inst_36448);
} else
{if((state_val_36467 === 9))
{var state_36466__$1 = state_36466;var statearr_36478_36497 = state_36466__$1;(statearr_36478_36497[2] = null);
(statearr_36478_36497[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36467 === 10))
{var inst_36458 = (state_36466[2]);var state_36466__$1 = state_36466;var statearr_36479_36498 = state_36466__$1;(statearr_36479_36498[2] = inst_36458);
(statearr_36479_36498[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36467 === 11))
{var inst_36443 = (state_36466[7]);var inst_36453 = (state_36466[2]);var inst_36454 = (inst_36443 + 1);var inst_36443__$1 = inst_36454;var state_36466__$1 = (function (){var statearr_36480 = state_36466;(statearr_36480[7] = inst_36443__$1);
(statearr_36480[10] = inst_36453);
return statearr_36480;
})();var statearr_36481_36499 = state_36466__$1;(statearr_36481_36499[2] = null);
(statearr_36481_36499[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36485 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36485[0] = state_machine__5507__auto__);
(statearr_36485[1] = 1);
return statearr_36485;
});
var state_machine__5507__auto____1 = (function (state_36466){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36486){if((e36486 instanceof Object))
{var ex__5510__auto__ = e36486;var statearr_36487_36500 = state_36466;(statearr_36487_36500[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36486;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36501 = state_36466;
state_36466 = G__36501;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36466){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36488 = f__5522__auto__.call(null);(statearr_36488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36489);
return statearr_36488;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36598 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36573){var state_val_36574 = (state_36573[1]);if((state_val_36574 === 1))
{var inst_36550 = null;var state_36573__$1 = (function (){var statearr_36575 = state_36573;(statearr_36575[7] = inst_36550);
return statearr_36575;
})();var statearr_36576_36599 = state_36573__$1;(statearr_36576_36599[2] = null);
(statearr_36576_36599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36574 === 2))
{var state_36573__$1 = state_36573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36573__$1,4,ch);
} else
{if((state_val_36574 === 3))
{var inst_36570 = (state_36573[2]);var inst_36571 = cljs.core.async.close_BANG_.call(null,out);var state_36573__$1 = (function (){var statearr_36577 = state_36573;(statearr_36577[8] = inst_36570);
return statearr_36577;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36573__$1,inst_36571);
} else
{if((state_val_36574 === 4))
{var inst_36553 = (state_36573[9]);var inst_36553__$1 = (state_36573[2]);var inst_36554 = (inst_36553__$1 == null);var inst_36555 = cljs.core.not.call(null,inst_36554);var state_36573__$1 = (function (){var statearr_36578 = state_36573;(statearr_36578[9] = inst_36553__$1);
return statearr_36578;
})();if(inst_36555)
{var statearr_36579_36600 = state_36573__$1;(statearr_36579_36600[1] = 5);
} else
{var statearr_36580_36601 = state_36573__$1;(statearr_36580_36601[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36574 === 5))
{var inst_36553 = (state_36573[9]);var inst_36550 = (state_36573[7]);var inst_36557 = cljs.core._EQ_.call(null,inst_36553,inst_36550);var state_36573__$1 = state_36573;if(inst_36557)
{var statearr_36581_36602 = state_36573__$1;(statearr_36581_36602[1] = 8);
} else
{var statearr_36582_36603 = state_36573__$1;(statearr_36582_36603[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36574 === 6))
{var state_36573__$1 = state_36573;var statearr_36584_36604 = state_36573__$1;(statearr_36584_36604[2] = null);
(statearr_36584_36604[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36574 === 7))
{var inst_36568 = (state_36573[2]);var state_36573__$1 = state_36573;var statearr_36585_36605 = state_36573__$1;(statearr_36585_36605[2] = inst_36568);
(statearr_36585_36605[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36574 === 8))
{var inst_36550 = (state_36573[7]);var tmp36583 = inst_36550;var inst_36550__$1 = tmp36583;var state_36573__$1 = (function (){var statearr_36586 = state_36573;(statearr_36586[7] = inst_36550__$1);
return statearr_36586;
})();var statearr_36587_36606 = state_36573__$1;(statearr_36587_36606[2] = null);
(statearr_36587_36606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36574 === 9))
{var inst_36553 = (state_36573[9]);var state_36573__$1 = state_36573;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36573__$1,11,out,inst_36553);
} else
{if((state_val_36574 === 10))
{var inst_36565 = (state_36573[2]);var state_36573__$1 = state_36573;var statearr_36588_36607 = state_36573__$1;(statearr_36588_36607[2] = inst_36565);
(statearr_36588_36607[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36574 === 11))
{var inst_36553 = (state_36573[9]);var inst_36562 = (state_36573[2]);var inst_36550 = inst_36553;var state_36573__$1 = (function (){var statearr_36589 = state_36573;(statearr_36589[7] = inst_36550);
(statearr_36589[10] = inst_36562);
return statearr_36589;
})();var statearr_36590_36608 = state_36573__$1;(statearr_36590_36608[2] = null);
(statearr_36590_36608[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36594 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36594[0] = state_machine__5507__auto__);
(statearr_36594[1] = 1);
return statearr_36594;
});
var state_machine__5507__auto____1 = (function (state_36573){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36573);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36595){if((e36595 instanceof Object))
{var ex__5510__auto__ = e36595;var statearr_36596_36609 = state_36573;(statearr_36596_36609[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36573);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36610 = state_36573;
state_36573 = G__36610;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36573){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36597 = f__5522__auto__.call(null);(statearr_36597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36598);
return statearr_36597;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36745 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36715){var state_val_36716 = (state_36715[1]);if((state_val_36716 === 1))
{var inst_36678 = (new Array(n));var inst_36679 = inst_36678;var inst_36680 = 0;var state_36715__$1 = (function (){var statearr_36717 = state_36715;(statearr_36717[7] = inst_36680);
(statearr_36717[8] = inst_36679);
return statearr_36717;
})();var statearr_36718_36746 = state_36715__$1;(statearr_36718_36746[2] = null);
(statearr_36718_36746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 2))
{var state_36715__$1 = state_36715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36715__$1,4,ch);
} else
{if((state_val_36716 === 3))
{var inst_36713 = (state_36715[2]);var state_36715__$1 = state_36715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36715__$1,inst_36713);
} else
{if((state_val_36716 === 4))
{var inst_36683 = (state_36715[9]);var inst_36683__$1 = (state_36715[2]);var inst_36684 = (inst_36683__$1 == null);var inst_36685 = cljs.core.not.call(null,inst_36684);var state_36715__$1 = (function (){var statearr_36719 = state_36715;(statearr_36719[9] = inst_36683__$1);
return statearr_36719;
})();if(inst_36685)
{var statearr_36720_36747 = state_36715__$1;(statearr_36720_36747[1] = 5);
} else
{var statearr_36721_36748 = state_36715__$1;(statearr_36721_36748[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 5))
{var inst_36683 = (state_36715[9]);var inst_36680 = (state_36715[7]);var inst_36679 = (state_36715[8]);var inst_36688 = (state_36715[10]);var inst_36687 = (inst_36679[inst_36680] = inst_36683);var inst_36688__$1 = (inst_36680 + 1);var inst_36689 = (inst_36688__$1 < n);var state_36715__$1 = (function (){var statearr_36722 = state_36715;(statearr_36722[10] = inst_36688__$1);
(statearr_36722[11] = inst_36687);
return statearr_36722;
})();if(cljs.core.truth_(inst_36689))
{var statearr_36723_36749 = state_36715__$1;(statearr_36723_36749[1] = 8);
} else
{var statearr_36724_36750 = state_36715__$1;(statearr_36724_36750[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 6))
{var inst_36680 = (state_36715[7]);var inst_36701 = (inst_36680 > 0);var state_36715__$1 = state_36715;if(cljs.core.truth_(inst_36701))
{var statearr_36726_36751 = state_36715__$1;(statearr_36726_36751[1] = 12);
} else
{var statearr_36727_36752 = state_36715__$1;(statearr_36727_36752[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 7))
{var inst_36711 = (state_36715[2]);var state_36715__$1 = state_36715;var statearr_36728_36753 = state_36715__$1;(statearr_36728_36753[2] = inst_36711);
(statearr_36728_36753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 8))
{var inst_36679 = (state_36715[8]);var inst_36688 = (state_36715[10]);var tmp36725 = inst_36679;var inst_36679__$1 = tmp36725;var inst_36680 = inst_36688;var state_36715__$1 = (function (){var statearr_36729 = state_36715;(statearr_36729[7] = inst_36680);
(statearr_36729[8] = inst_36679__$1);
return statearr_36729;
})();var statearr_36730_36754 = state_36715__$1;(statearr_36730_36754[2] = null);
(statearr_36730_36754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 9))
{var inst_36679 = (state_36715[8]);var inst_36693 = cljs.core.vec.call(null,inst_36679);var state_36715__$1 = state_36715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36715__$1,11,out,inst_36693);
} else
{if((state_val_36716 === 10))
{var inst_36699 = (state_36715[2]);var state_36715__$1 = state_36715;var statearr_36731_36755 = state_36715__$1;(statearr_36731_36755[2] = inst_36699);
(statearr_36731_36755[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 11))
{var inst_36695 = (state_36715[2]);var inst_36696 = (new Array(n));var inst_36679 = inst_36696;var inst_36680 = 0;var state_36715__$1 = (function (){var statearr_36732 = state_36715;(statearr_36732[7] = inst_36680);
(statearr_36732[12] = inst_36695);
(statearr_36732[8] = inst_36679);
return statearr_36732;
})();var statearr_36733_36756 = state_36715__$1;(statearr_36733_36756[2] = null);
(statearr_36733_36756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 12))
{var inst_36679 = (state_36715[8]);var inst_36703 = cljs.core.vec.call(null,inst_36679);var state_36715__$1 = state_36715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36715__$1,15,out,inst_36703);
} else
{if((state_val_36716 === 13))
{var state_36715__$1 = state_36715;var statearr_36734_36757 = state_36715__$1;(statearr_36734_36757[2] = null);
(statearr_36734_36757[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 14))
{var inst_36708 = (state_36715[2]);var inst_36709 = cljs.core.async.close_BANG_.call(null,out);var state_36715__$1 = (function (){var statearr_36735 = state_36715;(statearr_36735[13] = inst_36708);
return statearr_36735;
})();var statearr_36736_36758 = state_36715__$1;(statearr_36736_36758[2] = inst_36709);
(statearr_36736_36758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 15))
{var inst_36705 = (state_36715[2]);var state_36715__$1 = state_36715;var statearr_36737_36759 = state_36715__$1;(statearr_36737_36759[2] = inst_36705);
(statearr_36737_36759[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36741[0] = state_machine__5507__auto__);
(statearr_36741[1] = 1);
return statearr_36741;
});
var state_machine__5507__auto____1 = (function (state_36715){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36715);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36742){if((e36742 instanceof Object))
{var ex__5510__auto__ = e36742;var statearr_36743_36760 = state_36715;(statearr_36743_36760[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36761 = state_36715;
state_36715 = G__36761;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36715){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36744 = f__5522__auto__.call(null);(statearr_36744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36745);
return statearr_36744;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36904 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36874){var state_val_36875 = (state_36874[1]);if((state_val_36875 === 1))
{var inst_36833 = [];var inst_36834 = inst_36833;var inst_36835 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36874__$1 = (function (){var statearr_36876 = state_36874;(statearr_36876[7] = inst_36834);
(statearr_36876[8] = inst_36835);
return statearr_36876;
})();var statearr_36877_36905 = state_36874__$1;(statearr_36877_36905[2] = null);
(statearr_36877_36905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 2))
{var state_36874__$1 = state_36874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36874__$1,4,ch);
} else
{if((state_val_36875 === 3))
{var inst_36872 = (state_36874[2]);var state_36874__$1 = state_36874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36874__$1,inst_36872);
} else
{if((state_val_36875 === 4))
{var inst_36838 = (state_36874[9]);var inst_36838__$1 = (state_36874[2]);var inst_36839 = (inst_36838__$1 == null);var inst_36840 = cljs.core.not.call(null,inst_36839);var state_36874__$1 = (function (){var statearr_36878 = state_36874;(statearr_36878[9] = inst_36838__$1);
return statearr_36878;
})();if(inst_36840)
{var statearr_36879_36906 = state_36874__$1;(statearr_36879_36906[1] = 5);
} else
{var statearr_36880_36907 = state_36874__$1;(statearr_36880_36907[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 5))
{var inst_36838 = (state_36874[9]);var inst_36842 = (state_36874[10]);var inst_36835 = (state_36874[8]);var inst_36842__$1 = f.call(null,inst_36838);var inst_36843 = cljs.core._EQ_.call(null,inst_36842__$1,inst_36835);var inst_36844 = cljs.core.keyword_identical_QMARK_.call(null,inst_36835,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36845 = (inst_36843) || (inst_36844);var state_36874__$1 = (function (){var statearr_36881 = state_36874;(statearr_36881[10] = inst_36842__$1);
return statearr_36881;
})();if(cljs.core.truth_(inst_36845))
{var statearr_36882_36908 = state_36874__$1;(statearr_36882_36908[1] = 8);
} else
{var statearr_36883_36909 = state_36874__$1;(statearr_36883_36909[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 6))
{var inst_36834 = (state_36874[7]);var inst_36859 = inst_36834.length;var inst_36860 = (inst_36859 > 0);var state_36874__$1 = state_36874;if(cljs.core.truth_(inst_36860))
{var statearr_36885_36910 = state_36874__$1;(statearr_36885_36910[1] = 12);
} else
{var statearr_36886_36911 = state_36874__$1;(statearr_36886_36911[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 7))
{var inst_36870 = (state_36874[2]);var state_36874__$1 = state_36874;var statearr_36887_36912 = state_36874__$1;(statearr_36887_36912[2] = inst_36870);
(statearr_36887_36912[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 8))
{var inst_36838 = (state_36874[9]);var inst_36842 = (state_36874[10]);var inst_36834 = (state_36874[7]);var inst_36847 = inst_36834.push(inst_36838);var tmp36884 = inst_36834;var inst_36834__$1 = tmp36884;var inst_36835 = inst_36842;var state_36874__$1 = (function (){var statearr_36888 = state_36874;(statearr_36888[11] = inst_36847);
(statearr_36888[7] = inst_36834__$1);
(statearr_36888[8] = inst_36835);
return statearr_36888;
})();var statearr_36889_36913 = state_36874__$1;(statearr_36889_36913[2] = null);
(statearr_36889_36913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 9))
{var inst_36834 = (state_36874[7]);var inst_36850 = cljs.core.vec.call(null,inst_36834);var state_36874__$1 = state_36874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36874__$1,11,out,inst_36850);
} else
{if((state_val_36875 === 10))
{var inst_36857 = (state_36874[2]);var state_36874__$1 = state_36874;var statearr_36890_36914 = state_36874__$1;(statearr_36890_36914[2] = inst_36857);
(statearr_36890_36914[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 11))
{var inst_36838 = (state_36874[9]);var inst_36842 = (state_36874[10]);var inst_36852 = (state_36874[2]);var inst_36853 = [];var inst_36854 = inst_36853.push(inst_36838);var inst_36834 = inst_36853;var inst_36835 = inst_36842;var state_36874__$1 = (function (){var statearr_36891 = state_36874;(statearr_36891[12] = inst_36854);
(statearr_36891[13] = inst_36852);
(statearr_36891[7] = inst_36834);
(statearr_36891[8] = inst_36835);
return statearr_36891;
})();var statearr_36892_36915 = state_36874__$1;(statearr_36892_36915[2] = null);
(statearr_36892_36915[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 12))
{var inst_36834 = (state_36874[7]);var inst_36862 = cljs.core.vec.call(null,inst_36834);var state_36874__$1 = state_36874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36874__$1,15,out,inst_36862);
} else
{if((state_val_36875 === 13))
{var state_36874__$1 = state_36874;var statearr_36893_36916 = state_36874__$1;(statearr_36893_36916[2] = null);
(statearr_36893_36916[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 14))
{var inst_36867 = (state_36874[2]);var inst_36868 = cljs.core.async.close_BANG_.call(null,out);var state_36874__$1 = (function (){var statearr_36894 = state_36874;(statearr_36894[14] = inst_36867);
return statearr_36894;
})();var statearr_36895_36917 = state_36874__$1;(statearr_36895_36917[2] = inst_36868);
(statearr_36895_36917[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36875 === 15))
{var inst_36864 = (state_36874[2]);var state_36874__$1 = state_36874;var statearr_36896_36918 = state_36874__$1;(statearr_36896_36918[2] = inst_36864);
(statearr_36896_36918[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36900[0] = state_machine__5507__auto__);
(statearr_36900[1] = 1);
return statearr_36900;
});
var state_machine__5507__auto____1 = (function (state_36874){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36874);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36901){if((e36901 instanceof Object))
{var ex__5510__auto__ = e36901;var statearr_36902_36919 = state_36874;(statearr_36902_36919[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36874);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36920 = state_36874;
state_36874 = G__36920;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36874){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36903 = f__5522__auto__.call(null);(statearr_36903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36904);
return statearr_36903;
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
