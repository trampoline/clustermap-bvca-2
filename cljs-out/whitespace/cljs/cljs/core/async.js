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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33384 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33384 = (function (f,fn_handler,meta33385){
this.f = f;
this.fn_handler = fn_handler;
this.meta33385 = meta33385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33384.cljs$lang$type = true;
cljs.core.async.t33384.cljs$lang$ctorStr = "cljs.core.async/t33384";
cljs.core.async.t33384.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33384");
});
cljs.core.async.t33384.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33386){var self__ = this;
var _33386__$1 = this;return self__.meta33385;
});
cljs.core.async.t33384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33386,meta33385__$1){var self__ = this;
var _33386__$1 = this;return (new cljs.core.async.t33384(self__.f,self__.fn_handler,meta33385__$1));
});
cljs.core.async.__GT_t33384 = (function __GT_t33384(f__$1,fn_handler__$1,meta33385){return (new cljs.core.async.t33384(f__$1,fn_handler__$1,meta33385));
});
}
return (new cljs.core.async.t33384(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33388 = buff;if(G__33388)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33388.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33388.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33388);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33388);
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
{var val_33389 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33389);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33389);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33390 = n;var x_33391 = 0;while(true){
if((x_33391 < n__4248__auto___33390))
{(a[x_33391] = 0);
{
var G__33392 = (x_33391 + 1);
x_33391 = G__33392;
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
var G__33393 = (i + 1);
i = G__33393;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33397 = (function (flag,alt_flag,meta33398){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33398 = meta33398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33397.cljs$lang$type = true;
cljs.core.async.t33397.cljs$lang$ctorStr = "cljs.core.async/t33397";
cljs.core.async.t33397.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33397");
});
cljs.core.async.t33397.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33399){var self__ = this;
var _33399__$1 = this;return self__.meta33398;
});
cljs.core.async.t33397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33399,meta33398__$1){var self__ = this;
var _33399__$1 = this;return (new cljs.core.async.t33397(self__.flag,self__.alt_flag,meta33398__$1));
});
cljs.core.async.__GT_t33397 = (function __GT_t33397(flag__$1,alt_flag__$1,meta33398){return (new cljs.core.async.t33397(flag__$1,alt_flag__$1,meta33398));
});
}
return (new cljs.core.async.t33397(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33403 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33403 = (function (cb,flag,alt_handler,meta33404){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33404 = meta33404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33403.cljs$lang$type = true;
cljs.core.async.t33403.cljs$lang$ctorStr = "cljs.core.async/t33403";
cljs.core.async.t33403.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33403");
});
cljs.core.async.t33403.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33405){var self__ = this;
var _33405__$1 = this;return self__.meta33404;
});
cljs.core.async.t33403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33405,meta33404__$1){var self__ = this;
var _33405__$1 = this;return (new cljs.core.async.t33403(self__.cb,self__.flag,self__.alt_handler,meta33404__$1));
});
cljs.core.async.__GT_t33403 = (function __GT_t33403(cb__$1,flag__$1,alt_handler__$1,meta33404){return (new cljs.core.async.t33403(cb__$1,flag__$1,alt_handler__$1,meta33404));
});
}
return (new cljs.core.async.t33403(cb,flag,alt_handler,null));
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
return (function (p1__33406_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33406_SHARP_,port], null));
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
var G__33407 = (i + 1);
i = G__33407;
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
var alts_BANG___delegate = function (ports,p__33408){var map__33410 = p__33408;var map__33410__$1 = ((cljs.core.seq_QMARK_.call(null,map__33410))?cljs.core.apply.call(null,cljs.core.hash_map,map__33410):map__33410);var opts = map__33410__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33408 = null;if (arguments.length > 1) {
  p__33408 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33408);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33411){
var ports = cljs.core.first(arglist__33411);
var p__33408 = cljs.core.rest(arglist__33411);
return alts_BANG___delegate(ports,p__33408);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33419 = (function (ch,f,map_LT_,meta33420){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33420 = meta33420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33419.cljs$lang$type = true;
cljs.core.async.t33419.cljs$lang$ctorStr = "cljs.core.async/t33419";
cljs.core.async.t33419.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33419");
});
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33422 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33422 = (function (fn1,_,meta33420,ch,f,map_LT_,meta33423){
this.fn1 = fn1;
this._ = _;
this.meta33420 = meta33420;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33423 = meta33423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33422.cljs$lang$type = true;
cljs.core.async.t33422.cljs$lang$ctorStr = "cljs.core.async/t33422";
cljs.core.async.t33422.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33422");
});
cljs.core.async.t33422.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33422.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33412_SHARP_){return f1.call(null,(((p1__33412_SHARP_ == null))?null:self__.f.call(null,p1__33412_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33424){var self__ = this;
var _33424__$1 = this;return self__.meta33423;
});
cljs.core.async.t33422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33424,meta33423__$1){var self__ = this;
var _33424__$1 = this;return (new cljs.core.async.t33422(self__.fn1,self__._,self__.meta33420,self__.ch,self__.f,self__.map_LT_,meta33423__$1));
});
cljs.core.async.__GT_t33422 = (function __GT_t33422(fn1__$1,___$2,meta33420__$1,ch__$2,f__$2,map_LT___$2,meta33423){return (new cljs.core.async.t33422(fn1__$1,___$2,meta33420__$1,ch__$2,f__$2,map_LT___$2,meta33423));
});
}
return (new cljs.core.async.t33422(fn1,___$1,self__.meta33420,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33421){var self__ = this;
var _33421__$1 = this;return self__.meta33420;
});
cljs.core.async.t33419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33421,meta33420__$1){var self__ = this;
var _33421__$1 = this;return (new cljs.core.async.t33419(self__.ch,self__.f,self__.map_LT_,meta33420__$1));
});
cljs.core.async.__GT_t33419 = (function __GT_t33419(ch__$1,f__$1,map_LT___$1,meta33420){return (new cljs.core.async.t33419(ch__$1,f__$1,map_LT___$1,meta33420));
});
}
return (new cljs.core.async.t33419(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33428 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33428 = (function (ch,f,map_GT_,meta33429){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33429 = meta33429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33428.cljs$lang$type = true;
cljs.core.async.t33428.cljs$lang$ctorStr = "cljs.core.async/t33428";
cljs.core.async.t33428.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33428");
});
cljs.core.async.t33428.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33428.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33428.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33430){var self__ = this;
var _33430__$1 = this;return self__.meta33429;
});
cljs.core.async.t33428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33430,meta33429__$1){var self__ = this;
var _33430__$1 = this;return (new cljs.core.async.t33428(self__.ch,self__.f,self__.map_GT_,meta33429__$1));
});
cljs.core.async.__GT_t33428 = (function __GT_t33428(ch__$1,f__$1,map_GT___$1,meta33429){return (new cljs.core.async.t33428(ch__$1,f__$1,map_GT___$1,meta33429));
});
}
return (new cljs.core.async.t33428(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33434 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33434 = (function (ch,p,filter_GT_,meta33435){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33435 = meta33435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33434.cljs$lang$type = true;
cljs.core.async.t33434.cljs$lang$ctorStr = "cljs.core.async/t33434";
cljs.core.async.t33434.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33434");
});
cljs.core.async.t33434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33434.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33436){var self__ = this;
var _33436__$1 = this;return self__.meta33435;
});
cljs.core.async.t33434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33436,meta33435__$1){var self__ = this;
var _33436__$1 = this;return (new cljs.core.async.t33434(self__.ch,self__.p,self__.filter_GT_,meta33435__$1));
});
cljs.core.async.__GT_t33434 = (function __GT_t33434(ch__$1,p__$1,filter_GT___$1,meta33435){return (new cljs.core.async.t33434(ch__$1,p__$1,filter_GT___$1,meta33435));
});
}
return (new cljs.core.async.t33434(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33519 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33498){var state_val_33499 = (state_33498[1]);if((state_val_33499 === 1))
{var state_33498__$1 = state_33498;var statearr_33500_33520 = state_33498__$1;(statearr_33500_33520[2] = null);
(statearr_33500_33520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33499 === 2))
{var state_33498__$1 = state_33498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33498__$1,4,ch);
} else
{if((state_val_33499 === 3))
{var inst_33496 = (state_33498[2]);var state_33498__$1 = state_33498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33498__$1,inst_33496);
} else
{if((state_val_33499 === 4))
{var inst_33480 = (state_33498[7]);var inst_33480__$1 = (state_33498[2]);var inst_33481 = (inst_33480__$1 == null);var state_33498__$1 = (function (){var statearr_33501 = state_33498;(statearr_33501[7] = inst_33480__$1);
return statearr_33501;
})();if(cljs.core.truth_(inst_33481))
{var statearr_33502_33521 = state_33498__$1;(statearr_33502_33521[1] = 5);
} else
{var statearr_33503_33522 = state_33498__$1;(statearr_33503_33522[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33499 === 5))
{var inst_33483 = cljs.core.async.close_BANG_.call(null,out);var state_33498__$1 = state_33498;var statearr_33504_33523 = state_33498__$1;(statearr_33504_33523[2] = inst_33483);
(statearr_33504_33523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33499 === 6))
{var inst_33480 = (state_33498[7]);var inst_33485 = p.call(null,inst_33480);var state_33498__$1 = state_33498;if(cljs.core.truth_(inst_33485))
{var statearr_33505_33524 = state_33498__$1;(statearr_33505_33524[1] = 8);
} else
{var statearr_33506_33525 = state_33498__$1;(statearr_33506_33525[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33499 === 7))
{var inst_33494 = (state_33498[2]);var state_33498__$1 = state_33498;var statearr_33507_33526 = state_33498__$1;(statearr_33507_33526[2] = inst_33494);
(statearr_33507_33526[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33499 === 8))
{var inst_33480 = (state_33498[7]);var state_33498__$1 = state_33498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33498__$1,11,out,inst_33480);
} else
{if((state_val_33499 === 9))
{var state_33498__$1 = state_33498;var statearr_33508_33527 = state_33498__$1;(statearr_33508_33527[2] = null);
(statearr_33508_33527[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33499 === 10))
{var inst_33491 = (state_33498[2]);var state_33498__$1 = (function (){var statearr_33509 = state_33498;(statearr_33509[8] = inst_33491);
return statearr_33509;
})();var statearr_33510_33528 = state_33498__$1;(statearr_33510_33528[2] = null);
(statearr_33510_33528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33499 === 11))
{var inst_33488 = (state_33498[2]);var state_33498__$1 = state_33498;var statearr_33511_33529 = state_33498__$1;(statearr_33511_33529[2] = inst_33488);
(statearr_33511_33529[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33515 = [null,null,null,null,null,null,null,null,null];(statearr_33515[0] = state_machine__5507__auto__);
(statearr_33515[1] = 1);
return statearr_33515;
});
var state_machine__5507__auto____1 = (function (state_33498){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33516){if((e33516 instanceof Object))
{var ex__5510__auto__ = e33516;var statearr_33517_33530 = state_33498;(statearr_33517_33530[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33516;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33531 = state_33498;
state_33498 = G__33531;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33498){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33518 = f__5522__auto__.call(null);(statearr_33518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33519);
return statearr_33518;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33683){var state_val_33684 = (state_33683[1]);if((state_val_33684 === 1))
{var state_33683__$1 = state_33683;var statearr_33685_33722 = state_33683__$1;(statearr_33685_33722[2] = null);
(statearr_33685_33722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 2))
{var state_33683__$1 = state_33683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33683__$1,4,in$);
} else
{if((state_val_33684 === 3))
{var inst_33681 = (state_33683[2]);var state_33683__$1 = state_33683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33683__$1,inst_33681);
} else
{if((state_val_33684 === 4))
{var inst_33629 = (state_33683[7]);var inst_33629__$1 = (state_33683[2]);var inst_33630 = (inst_33629__$1 == null);var state_33683__$1 = (function (){var statearr_33686 = state_33683;(statearr_33686[7] = inst_33629__$1);
return statearr_33686;
})();if(cljs.core.truth_(inst_33630))
{var statearr_33687_33723 = state_33683__$1;(statearr_33687_33723[1] = 5);
} else
{var statearr_33688_33724 = state_33683__$1;(statearr_33688_33724[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 5))
{var inst_33632 = cljs.core.async.close_BANG_.call(null,out);var state_33683__$1 = state_33683;var statearr_33689_33725 = state_33683__$1;(statearr_33689_33725[2] = inst_33632);
(statearr_33689_33725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 6))
{var inst_33629 = (state_33683[7]);var inst_33634 = f.call(null,inst_33629);var inst_33639 = cljs.core.seq.call(null,inst_33634);var inst_33640 = inst_33639;var inst_33641 = null;var inst_33642 = 0;var inst_33643 = 0;var state_33683__$1 = (function (){var statearr_33690 = state_33683;(statearr_33690[8] = inst_33642);
(statearr_33690[9] = inst_33641);
(statearr_33690[10] = inst_33640);
(statearr_33690[11] = inst_33643);
return statearr_33690;
})();var statearr_33691_33726 = state_33683__$1;(statearr_33691_33726[2] = null);
(statearr_33691_33726[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 7))
{var inst_33679 = (state_33683[2]);var state_33683__$1 = state_33683;var statearr_33692_33727 = state_33683__$1;(statearr_33692_33727[2] = inst_33679);
(statearr_33692_33727[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 8))
{var inst_33642 = (state_33683[8]);var inst_33643 = (state_33683[11]);var inst_33645 = (inst_33643 < inst_33642);var inst_33646 = inst_33645;var state_33683__$1 = state_33683;if(cljs.core.truth_(inst_33646))
{var statearr_33693_33728 = state_33683__$1;(statearr_33693_33728[1] = 10);
} else
{var statearr_33694_33729 = state_33683__$1;(statearr_33694_33729[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 9))
{var inst_33676 = (state_33683[2]);var state_33683__$1 = (function (){var statearr_33695 = state_33683;(statearr_33695[12] = inst_33676);
return statearr_33695;
})();var statearr_33696_33730 = state_33683__$1;(statearr_33696_33730[2] = null);
(statearr_33696_33730[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 10))
{var inst_33641 = (state_33683[9]);var inst_33643 = (state_33683[11]);var inst_33648 = cljs.core._nth.call(null,inst_33641,inst_33643);var state_33683__$1 = state_33683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33683__$1,13,out,inst_33648);
} else
{if((state_val_33684 === 11))
{var inst_33640 = (state_33683[10]);var inst_33654 = (state_33683[13]);var inst_33654__$1 = cljs.core.seq.call(null,inst_33640);var state_33683__$1 = (function (){var statearr_33700 = state_33683;(statearr_33700[13] = inst_33654__$1);
return statearr_33700;
})();if(inst_33654__$1)
{var statearr_33701_33731 = state_33683__$1;(statearr_33701_33731[1] = 14);
} else
{var statearr_33702_33732 = state_33683__$1;(statearr_33702_33732[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 12))
{var inst_33674 = (state_33683[2]);var state_33683__$1 = state_33683;var statearr_33703_33733 = state_33683__$1;(statearr_33703_33733[2] = inst_33674);
(statearr_33703_33733[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 13))
{var inst_33642 = (state_33683[8]);var inst_33641 = (state_33683[9]);var inst_33640 = (state_33683[10]);var inst_33643 = (state_33683[11]);var inst_33650 = (state_33683[2]);var inst_33651 = (inst_33643 + 1);var tmp33697 = inst_33642;var tmp33698 = inst_33641;var tmp33699 = inst_33640;var inst_33640__$1 = tmp33699;var inst_33641__$1 = tmp33698;var inst_33642__$1 = tmp33697;var inst_33643__$1 = inst_33651;var state_33683__$1 = (function (){var statearr_33704 = state_33683;(statearr_33704[8] = inst_33642__$1);
(statearr_33704[9] = inst_33641__$1);
(statearr_33704[10] = inst_33640__$1);
(statearr_33704[11] = inst_33643__$1);
(statearr_33704[14] = inst_33650);
return statearr_33704;
})();var statearr_33705_33734 = state_33683__$1;(statearr_33705_33734[2] = null);
(statearr_33705_33734[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 14))
{var inst_33654 = (state_33683[13]);var inst_33656 = cljs.core.chunked_seq_QMARK_.call(null,inst_33654);var state_33683__$1 = state_33683;if(inst_33656)
{var statearr_33706_33735 = state_33683__$1;(statearr_33706_33735[1] = 17);
} else
{var statearr_33707_33736 = state_33683__$1;(statearr_33707_33736[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 15))
{var state_33683__$1 = state_33683;var statearr_33708_33737 = state_33683__$1;(statearr_33708_33737[2] = null);
(statearr_33708_33737[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 16))
{var inst_33672 = (state_33683[2]);var state_33683__$1 = state_33683;var statearr_33709_33738 = state_33683__$1;(statearr_33709_33738[2] = inst_33672);
(statearr_33709_33738[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 17))
{var inst_33654 = (state_33683[13]);var inst_33658 = cljs.core.chunk_first.call(null,inst_33654);var inst_33659 = cljs.core.chunk_rest.call(null,inst_33654);var inst_33660 = cljs.core.count.call(null,inst_33658);var inst_33640 = inst_33659;var inst_33641 = inst_33658;var inst_33642 = inst_33660;var inst_33643 = 0;var state_33683__$1 = (function (){var statearr_33710 = state_33683;(statearr_33710[8] = inst_33642);
(statearr_33710[9] = inst_33641);
(statearr_33710[10] = inst_33640);
(statearr_33710[11] = inst_33643);
return statearr_33710;
})();var statearr_33711_33739 = state_33683__$1;(statearr_33711_33739[2] = null);
(statearr_33711_33739[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 18))
{var inst_33654 = (state_33683[13]);var inst_33663 = cljs.core.first.call(null,inst_33654);var state_33683__$1 = state_33683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33683__$1,20,out,inst_33663);
} else
{if((state_val_33684 === 19))
{var inst_33669 = (state_33683[2]);var state_33683__$1 = state_33683;var statearr_33712_33740 = state_33683__$1;(statearr_33712_33740[2] = inst_33669);
(statearr_33712_33740[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33684 === 20))
{var inst_33654 = (state_33683[13]);var inst_33665 = (state_33683[2]);var inst_33666 = cljs.core.next.call(null,inst_33654);var inst_33640 = inst_33666;var inst_33641 = null;var inst_33642 = 0;var inst_33643 = 0;var state_33683__$1 = (function (){var statearr_33713 = state_33683;(statearr_33713[8] = inst_33642);
(statearr_33713[9] = inst_33641);
(statearr_33713[10] = inst_33640);
(statearr_33713[15] = inst_33665);
(statearr_33713[11] = inst_33643);
return statearr_33713;
})();var statearr_33714_33741 = state_33683__$1;(statearr_33714_33741[2] = null);
(statearr_33714_33741[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33718[0] = state_machine__5507__auto__);
(statearr_33718[1] = 1);
return statearr_33718;
});
var state_machine__5507__auto____1 = (function (state_33683){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33683);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33719){if((e33719 instanceof Object))
{var ex__5510__auto__ = e33719;var statearr_33720_33742 = state_33683;(statearr_33720_33742[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33743 = state_33683;
state_33683 = G__33743;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33683){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33721 = f__5522__auto__.call(null);(statearr_33721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33721;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33803){var state_val_33804 = (state_33803[1]);if((state_val_33804 === 1))
{var state_33803__$1 = state_33803;var statearr_33805_33825 = state_33803__$1;(statearr_33805_33825[2] = null);
(statearr_33805_33825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33804 === 2))
{var state_33803__$1 = state_33803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33803__$1,4,from);
} else
{if((state_val_33804 === 3))
{var inst_33801 = (state_33803[2]);var state_33803__$1 = state_33803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33803__$1,inst_33801);
} else
{if((state_val_33804 === 4))
{var inst_33786 = (state_33803[7]);var inst_33786__$1 = (state_33803[2]);var inst_33787 = (inst_33786__$1 == null);var state_33803__$1 = (function (){var statearr_33806 = state_33803;(statearr_33806[7] = inst_33786__$1);
return statearr_33806;
})();if(cljs.core.truth_(inst_33787))
{var statearr_33807_33826 = state_33803__$1;(statearr_33807_33826[1] = 5);
} else
{var statearr_33808_33827 = state_33803__$1;(statearr_33808_33827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33804 === 5))
{var state_33803__$1 = state_33803;if(cljs.core.truth_(close_QMARK_))
{var statearr_33809_33828 = state_33803__$1;(statearr_33809_33828[1] = 8);
} else
{var statearr_33810_33829 = state_33803__$1;(statearr_33810_33829[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33804 === 6))
{var inst_33786 = (state_33803[7]);var state_33803__$1 = state_33803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33803__$1,11,to,inst_33786);
} else
{if((state_val_33804 === 7))
{var inst_33799 = (state_33803[2]);var state_33803__$1 = state_33803;var statearr_33811_33830 = state_33803__$1;(statearr_33811_33830[2] = inst_33799);
(statearr_33811_33830[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33804 === 8))
{var inst_33790 = cljs.core.async.close_BANG_.call(null,to);var state_33803__$1 = state_33803;var statearr_33812_33831 = state_33803__$1;(statearr_33812_33831[2] = inst_33790);
(statearr_33812_33831[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33804 === 9))
{var state_33803__$1 = state_33803;var statearr_33813_33832 = state_33803__$1;(statearr_33813_33832[2] = null);
(statearr_33813_33832[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33804 === 10))
{var inst_33793 = (state_33803[2]);var state_33803__$1 = state_33803;var statearr_33814_33833 = state_33803__$1;(statearr_33814_33833[2] = inst_33793);
(statearr_33814_33833[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33804 === 11))
{var inst_33796 = (state_33803[2]);var state_33803__$1 = (function (){var statearr_33815 = state_33803;(statearr_33815[8] = inst_33796);
return statearr_33815;
})();var statearr_33816_33834 = state_33803__$1;(statearr_33816_33834[2] = null);
(statearr_33816_33834[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33820 = [null,null,null,null,null,null,null,null,null];(statearr_33820[0] = state_machine__5507__auto__);
(statearr_33820[1] = 1);
return statearr_33820;
});
var state_machine__5507__auto____1 = (function (state_33803){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33821){if((e33821 instanceof Object))
{var ex__5510__auto__ = e33821;var statearr_33822_33835 = state_33803;(statearr_33822_33835[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33836 = state_33803;
state_33803 = G__33836;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33803){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33823 = f__5522__auto__.call(null);(statearr_33823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33824);
return statearr_33823;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33923 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33901){var state_val_33902 = (state_33901[1]);if((state_val_33902 === 1))
{var state_33901__$1 = state_33901;var statearr_33903_33924 = state_33901__$1;(statearr_33903_33924[2] = null);
(statearr_33903_33924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 2))
{var state_33901__$1 = state_33901;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33901__$1,4,ch);
} else
{if((state_val_33902 === 3))
{var inst_33899 = (state_33901[2]);var state_33901__$1 = state_33901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33901__$1,inst_33899);
} else
{if((state_val_33902 === 4))
{var inst_33882 = (state_33901[7]);var inst_33882__$1 = (state_33901[2]);var inst_33883 = (inst_33882__$1 == null);var state_33901__$1 = (function (){var statearr_33904 = state_33901;(statearr_33904[7] = inst_33882__$1);
return statearr_33904;
})();if(cljs.core.truth_(inst_33883))
{var statearr_33905_33925 = state_33901__$1;(statearr_33905_33925[1] = 5);
} else
{var statearr_33906_33926 = state_33901__$1;(statearr_33906_33926[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 5))
{var inst_33885 = cljs.core.async.close_BANG_.call(null,tc);var inst_33886 = cljs.core.async.close_BANG_.call(null,fc);var state_33901__$1 = (function (){var statearr_33907 = state_33901;(statearr_33907[8] = inst_33885);
return statearr_33907;
})();var statearr_33908_33927 = state_33901__$1;(statearr_33908_33927[2] = inst_33886);
(statearr_33908_33927[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 6))
{var inst_33882 = (state_33901[7]);var inst_33888 = p.call(null,inst_33882);var state_33901__$1 = state_33901;if(cljs.core.truth_(inst_33888))
{var statearr_33909_33928 = state_33901__$1;(statearr_33909_33928[1] = 9);
} else
{var statearr_33910_33929 = state_33901__$1;(statearr_33910_33929[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 7))
{var inst_33897 = (state_33901[2]);var state_33901__$1 = state_33901;var statearr_33911_33930 = state_33901__$1;(statearr_33911_33930[2] = inst_33897);
(statearr_33911_33930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 8))
{var inst_33894 = (state_33901[2]);var state_33901__$1 = (function (){var statearr_33912 = state_33901;(statearr_33912[9] = inst_33894);
return statearr_33912;
})();var statearr_33913_33931 = state_33901__$1;(statearr_33913_33931[2] = null);
(statearr_33913_33931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 9))
{var state_33901__$1 = state_33901;var statearr_33914_33932 = state_33901__$1;(statearr_33914_33932[2] = tc);
(statearr_33914_33932[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 10))
{var state_33901__$1 = state_33901;var statearr_33915_33933 = state_33901__$1;(statearr_33915_33933[2] = fc);
(statearr_33915_33933[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 11))
{var inst_33882 = (state_33901[7]);var inst_33892 = (state_33901[2]);var state_33901__$1 = state_33901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33901__$1,8,inst_33892,inst_33882);
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
var state_machine__5507__auto____0 = (function (){var statearr_33919 = [null,null,null,null,null,null,null,null,null,null];(statearr_33919[0] = state_machine__5507__auto__);
(statearr_33919[1] = 1);
return statearr_33919;
});
var state_machine__5507__auto____1 = (function (state_33901){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33920){if((e33920 instanceof Object))
{var ex__5510__auto__ = e33920;var statearr_33921_33934 = state_33901;(statearr_33921_33934[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33935 = state_33901;
state_33901 = G__33935;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33901){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33922 = f__5522__auto__.call(null);(statearr_33922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33923);
return statearr_33922;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33982){var state_val_33983 = (state_33982[1]);if((state_val_33983 === 7))
{var inst_33978 = (state_33982[2]);var state_33982__$1 = state_33982;var statearr_33984_34000 = state_33982__$1;(statearr_33984_34000[2] = inst_33978);
(statearr_33984_34000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 6))
{var inst_33968 = (state_33982[7]);var inst_33971 = (state_33982[8]);var inst_33975 = f.call(null,inst_33968,inst_33971);var inst_33968__$1 = inst_33975;var state_33982__$1 = (function (){var statearr_33985 = state_33982;(statearr_33985[7] = inst_33968__$1);
return statearr_33985;
})();var statearr_33986_34001 = state_33982__$1;(statearr_33986_34001[2] = null);
(statearr_33986_34001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 5))
{var inst_33968 = (state_33982[7]);var state_33982__$1 = state_33982;var statearr_33987_34002 = state_33982__$1;(statearr_33987_34002[2] = inst_33968);
(statearr_33987_34002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 4))
{var inst_33971 = (state_33982[8]);var inst_33971__$1 = (state_33982[2]);var inst_33972 = (inst_33971__$1 == null);var state_33982__$1 = (function (){var statearr_33988 = state_33982;(statearr_33988[8] = inst_33971__$1);
return statearr_33988;
})();if(cljs.core.truth_(inst_33972))
{var statearr_33989_34003 = state_33982__$1;(statearr_33989_34003[1] = 5);
} else
{var statearr_33990_34004 = state_33982__$1;(statearr_33990_34004[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33983 === 3))
{var inst_33980 = (state_33982[2]);var state_33982__$1 = state_33982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33982__$1,inst_33980);
} else
{if((state_val_33983 === 2))
{var state_33982__$1 = state_33982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33982__$1,4,ch);
} else
{if((state_val_33983 === 1))
{var inst_33968 = init;var state_33982__$1 = (function (){var statearr_33991 = state_33982;(statearr_33991[7] = inst_33968);
return statearr_33991;
})();var statearr_33992_34005 = state_33982__$1;(statearr_33992_34005[2] = null);
(statearr_33992_34005[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33996 = [null,null,null,null,null,null,null,null,null];(statearr_33996[0] = state_machine__5507__auto__);
(statearr_33996[1] = 1);
return statearr_33996;
});
var state_machine__5507__auto____1 = (function (state_33982){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33982);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33997){if((e33997 instanceof Object))
{var ex__5510__auto__ = e33997;var statearr_33998_34006 = state_33982;(statearr_33998_34006[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34007 = state_33982;
state_33982 = G__34007;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33982){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33999 = f__5522__auto__.call(null);(statearr_33999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33999;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34069){var state_val_34070 = (state_34069[1]);if((state_val_34070 === 1))
{var inst_34049 = cljs.core.seq.call(null,coll);var inst_34050 = inst_34049;var state_34069__$1 = (function (){var statearr_34071 = state_34069;(statearr_34071[7] = inst_34050);
return statearr_34071;
})();var statearr_34072_34090 = state_34069__$1;(statearr_34072_34090[2] = null);
(statearr_34072_34090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34070 === 2))
{var inst_34050 = (state_34069[7]);var state_34069__$1 = state_34069;if(cljs.core.truth_(inst_34050))
{var statearr_34073_34091 = state_34069__$1;(statearr_34073_34091[1] = 4);
} else
{var statearr_34074_34092 = state_34069__$1;(statearr_34074_34092[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34070 === 3))
{var inst_34067 = (state_34069[2]);var state_34069__$1 = state_34069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34069__$1,inst_34067);
} else
{if((state_val_34070 === 4))
{var inst_34050 = (state_34069[7]);var inst_34053 = cljs.core.first.call(null,inst_34050);var state_34069__$1 = state_34069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34069__$1,7,ch,inst_34053);
} else
{if((state_val_34070 === 5))
{var state_34069__$1 = state_34069;if(cljs.core.truth_(close_QMARK_))
{var statearr_34075_34093 = state_34069__$1;(statearr_34075_34093[1] = 8);
} else
{var statearr_34076_34094 = state_34069__$1;(statearr_34076_34094[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34070 === 6))
{var inst_34065 = (state_34069[2]);var state_34069__$1 = state_34069;var statearr_34077_34095 = state_34069__$1;(statearr_34077_34095[2] = inst_34065);
(statearr_34077_34095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34070 === 7))
{var inst_34050 = (state_34069[7]);var inst_34055 = (state_34069[2]);var inst_34056 = cljs.core.next.call(null,inst_34050);var inst_34050__$1 = inst_34056;var state_34069__$1 = (function (){var statearr_34078 = state_34069;(statearr_34078[8] = inst_34055);
(statearr_34078[7] = inst_34050__$1);
return statearr_34078;
})();var statearr_34079_34096 = state_34069__$1;(statearr_34079_34096[2] = null);
(statearr_34079_34096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34070 === 8))
{var inst_34060 = cljs.core.async.close_BANG_.call(null,ch);var state_34069__$1 = state_34069;var statearr_34080_34097 = state_34069__$1;(statearr_34080_34097[2] = inst_34060);
(statearr_34080_34097[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34070 === 9))
{var state_34069__$1 = state_34069;var statearr_34081_34098 = state_34069__$1;(statearr_34081_34098[2] = null);
(statearr_34081_34098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34070 === 10))
{var inst_34063 = (state_34069[2]);var state_34069__$1 = state_34069;var statearr_34082_34099 = state_34069__$1;(statearr_34082_34099[2] = inst_34063);
(statearr_34082_34099[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_34086 = [null,null,null,null,null,null,null,null,null];(statearr_34086[0] = state_machine__5507__auto__);
(statearr_34086[1] = 1);
return statearr_34086;
});
var state_machine__5507__auto____1 = (function (state_34069){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34069);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34087){if((e34087 instanceof Object))
{var ex__5510__auto__ = e34087;var statearr_34088_34100 = state_34069;(statearr_34088_34100[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34101 = state_34069;
state_34069 = G__34101;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34069){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34089 = f__5522__auto__.call(null);(statearr_34089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34089;
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
cljs.core.async.Mux = (function (){var obj34103 = {};return obj34103;
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
cljs.core.async.Mult = (function (){var obj34105 = {};return obj34105;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34329 = (function (cs,ch,mult,meta34330){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34330 = meta34330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34329.cljs$lang$type = true;
cljs.core.async.t34329.cljs$lang$ctorStr = "cljs.core.async/t34329";
cljs.core.async.t34329.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34329");
});})(cs))
;
cljs.core.async.t34329.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34329.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34329.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34329.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34329.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34331){var self__ = this;
var _34331__$1 = this;return self__.meta34330;
});})(cs))
;
cljs.core.async.t34329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34331,meta34330__$1){var self__ = this;
var _34331__$1 = this;return (new cljs.core.async.t34329(self__.cs,self__.ch,self__.mult,meta34330__$1));
});})(cs))
;
cljs.core.async.__GT_t34329 = ((function (cs){
return (function __GT_t34329(cs__$1,ch__$1,mult__$1,meta34330){return (new cljs.core.async.t34329(cs__$1,ch__$1,mult__$1,meta34330));
});})(cs))
;
}
return (new cljs.core.async.t34329(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34552 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34466){var state_val_34467 = (state_34466[1]);if((state_val_34467 === 32))
{var inst_34334 = (state_34466[7]);var inst_34410 = (state_34466[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34466,31,Object,null,30);var inst_34417 = cljs.core.async.put_BANG_.call(null,inst_34410,inst_34334,done);var state_34466__$1 = state_34466;var statearr_34468_34553 = state_34466__$1;(statearr_34468_34553[2] = inst_34417);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34466__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 1))
{var state_34466__$1 = state_34466;var statearr_34469_34554 = state_34466__$1;(statearr_34469_34554[2] = null);
(statearr_34469_34554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 33))
{var inst_34423 = (state_34466[9]);var inst_34425 = cljs.core.chunked_seq_QMARK_.call(null,inst_34423);var state_34466__$1 = state_34466;if(inst_34425)
{var statearr_34470_34555 = state_34466__$1;(statearr_34470_34555[1] = 36);
} else
{var statearr_34471_34556 = state_34466__$1;(statearr_34471_34556[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 2))
{var state_34466__$1 = state_34466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34466__$1,4,ch);
} else
{if((state_val_34467 === 34))
{var state_34466__$1 = state_34466;var statearr_34472_34557 = state_34466__$1;(statearr_34472_34557[2] = null);
(statearr_34472_34557[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 3))
{var inst_34464 = (state_34466[2]);var state_34466__$1 = state_34466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34466__$1,inst_34464);
} else
{if((state_val_34467 === 35))
{var inst_34448 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34473_34558 = state_34466__$1;(statearr_34473_34558[2] = inst_34448);
(statearr_34473_34558[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 4))
{var inst_34334 = (state_34466[7]);var inst_34334__$1 = (state_34466[2]);var inst_34335 = (inst_34334__$1 == null);var state_34466__$1 = (function (){var statearr_34474 = state_34466;(statearr_34474[7] = inst_34334__$1);
return statearr_34474;
})();if(cljs.core.truth_(inst_34335))
{var statearr_34475_34559 = state_34466__$1;(statearr_34475_34559[1] = 5);
} else
{var statearr_34476_34560 = state_34466__$1;(statearr_34476_34560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 36))
{var inst_34423 = (state_34466[9]);var inst_34427 = cljs.core.chunk_first.call(null,inst_34423);var inst_34428 = cljs.core.chunk_rest.call(null,inst_34423);var inst_34429 = cljs.core.count.call(null,inst_34427);var inst_34402 = inst_34428;var inst_34403 = inst_34427;var inst_34404 = inst_34429;var inst_34405 = 0;var state_34466__$1 = (function (){var statearr_34477 = state_34466;(statearr_34477[10] = inst_34402);
(statearr_34477[11] = inst_34403);
(statearr_34477[12] = inst_34404);
(statearr_34477[13] = inst_34405);
return statearr_34477;
})();var statearr_34478_34561 = state_34466__$1;(statearr_34478_34561[2] = null);
(statearr_34478_34561[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 5))
{var inst_34341 = cljs.core.deref.call(null,cs);var inst_34342 = cljs.core.seq.call(null,inst_34341);var inst_34343 = inst_34342;var inst_34344 = null;var inst_34345 = 0;var inst_34346 = 0;var state_34466__$1 = (function (){var statearr_34479 = state_34466;(statearr_34479[14] = inst_34346);
(statearr_34479[15] = inst_34345);
(statearr_34479[16] = inst_34344);
(statearr_34479[17] = inst_34343);
return statearr_34479;
})();var statearr_34480_34562 = state_34466__$1;(statearr_34480_34562[2] = null);
(statearr_34480_34562[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 37))
{var inst_34423 = (state_34466[9]);var inst_34432 = cljs.core.first.call(null,inst_34423);var state_34466__$1 = (function (){var statearr_34481 = state_34466;(statearr_34481[18] = inst_34432);
return statearr_34481;
})();var statearr_34482_34563 = state_34466__$1;(statearr_34482_34563[2] = null);
(statearr_34482_34563[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 6))
{var inst_34394 = (state_34466[19]);var inst_34393 = cljs.core.deref.call(null,cs);var inst_34394__$1 = cljs.core.keys.call(null,inst_34393);var inst_34395 = cljs.core.count.call(null,inst_34394__$1);var inst_34396 = cljs.core.reset_BANG_.call(null,dctr,inst_34395);var inst_34401 = cljs.core.seq.call(null,inst_34394__$1);var inst_34402 = inst_34401;var inst_34403 = null;var inst_34404 = 0;var inst_34405 = 0;var state_34466__$1 = (function (){var statearr_34483 = state_34466;(statearr_34483[10] = inst_34402);
(statearr_34483[11] = inst_34403);
(statearr_34483[12] = inst_34404);
(statearr_34483[13] = inst_34405);
(statearr_34483[20] = inst_34396);
(statearr_34483[19] = inst_34394__$1);
return statearr_34483;
})();var statearr_34484_34564 = state_34466__$1;(statearr_34484_34564[2] = null);
(statearr_34484_34564[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 38))
{var inst_34445 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34485_34565 = state_34466__$1;(statearr_34485_34565[2] = inst_34445);
(statearr_34485_34565[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 7))
{var inst_34462 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34486_34566 = state_34466__$1;(statearr_34486_34566[2] = inst_34462);
(statearr_34486_34566[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 39))
{var inst_34423 = (state_34466[9]);var inst_34441 = (state_34466[2]);var inst_34442 = cljs.core.next.call(null,inst_34423);var inst_34402 = inst_34442;var inst_34403 = null;var inst_34404 = 0;var inst_34405 = 0;var state_34466__$1 = (function (){var statearr_34487 = state_34466;(statearr_34487[21] = inst_34441);
(statearr_34487[10] = inst_34402);
(statearr_34487[11] = inst_34403);
(statearr_34487[12] = inst_34404);
(statearr_34487[13] = inst_34405);
return statearr_34487;
})();var statearr_34488_34567 = state_34466__$1;(statearr_34488_34567[2] = null);
(statearr_34488_34567[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 8))
{var inst_34346 = (state_34466[14]);var inst_34345 = (state_34466[15]);var inst_34348 = (inst_34346 < inst_34345);var inst_34349 = inst_34348;var state_34466__$1 = state_34466;if(cljs.core.truth_(inst_34349))
{var statearr_34489_34568 = state_34466__$1;(statearr_34489_34568[1] = 10);
} else
{var statearr_34490_34569 = state_34466__$1;(statearr_34490_34569[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 40))
{var inst_34432 = (state_34466[18]);var inst_34433 = (state_34466[2]);var inst_34434 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34435 = cljs.core.async.untap_STAR_.call(null,m,inst_34432);var state_34466__$1 = (function (){var statearr_34491 = state_34466;(statearr_34491[22] = inst_34434);
(statearr_34491[23] = inst_34433);
return statearr_34491;
})();var statearr_34492_34570 = state_34466__$1;(statearr_34492_34570[2] = inst_34435);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34466__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 9))
{var inst_34391 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34493_34571 = state_34466__$1;(statearr_34493_34571[2] = inst_34391);
(statearr_34493_34571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 41))
{var inst_34334 = (state_34466[7]);var inst_34432 = (state_34466[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34466,40,Object,null,39);var inst_34439 = cljs.core.async.put_BANG_.call(null,inst_34432,inst_34334,done);var state_34466__$1 = state_34466;var statearr_34494_34572 = state_34466__$1;(statearr_34494_34572[2] = inst_34439);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34466__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 10))
{var inst_34346 = (state_34466[14]);var inst_34344 = (state_34466[16]);var inst_34352 = cljs.core._nth.call(null,inst_34344,inst_34346);var inst_34353 = cljs.core.nth.call(null,inst_34352,0,null);var inst_34354 = cljs.core.nth.call(null,inst_34352,1,null);var state_34466__$1 = (function (){var statearr_34495 = state_34466;(statearr_34495[24] = inst_34353);
return statearr_34495;
})();if(cljs.core.truth_(inst_34354))
{var statearr_34496_34573 = state_34466__$1;(statearr_34496_34573[1] = 13);
} else
{var statearr_34497_34574 = state_34466__$1;(statearr_34497_34574[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 42))
{var state_34466__$1 = state_34466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34466__$1,45,dchan);
} else
{if((state_val_34467 === 11))
{var inst_34363 = (state_34466[25]);var inst_34343 = (state_34466[17]);var inst_34363__$1 = cljs.core.seq.call(null,inst_34343);var state_34466__$1 = (function (){var statearr_34498 = state_34466;(statearr_34498[25] = inst_34363__$1);
return statearr_34498;
})();if(inst_34363__$1)
{var statearr_34499_34575 = state_34466__$1;(statearr_34499_34575[1] = 16);
} else
{var statearr_34500_34576 = state_34466__$1;(statearr_34500_34576[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 43))
{var state_34466__$1 = state_34466;var statearr_34501_34577 = state_34466__$1;(statearr_34501_34577[2] = null);
(statearr_34501_34577[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 12))
{var inst_34389 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34502_34578 = state_34466__$1;(statearr_34502_34578[2] = inst_34389);
(statearr_34502_34578[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 44))
{var inst_34459 = (state_34466[2]);var state_34466__$1 = (function (){var statearr_34503 = state_34466;(statearr_34503[26] = inst_34459);
return statearr_34503;
})();var statearr_34504_34579 = state_34466__$1;(statearr_34504_34579[2] = null);
(statearr_34504_34579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 13))
{var inst_34353 = (state_34466[24]);var inst_34356 = cljs.core.async.close_BANG_.call(null,inst_34353);var state_34466__$1 = state_34466;var statearr_34505_34580 = state_34466__$1;(statearr_34505_34580[2] = inst_34356);
(statearr_34505_34580[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 45))
{var inst_34456 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34509_34581 = state_34466__$1;(statearr_34509_34581[2] = inst_34456);
(statearr_34509_34581[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 14))
{var state_34466__$1 = state_34466;var statearr_34510_34582 = state_34466__$1;(statearr_34510_34582[2] = null);
(statearr_34510_34582[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 15))
{var inst_34346 = (state_34466[14]);var inst_34345 = (state_34466[15]);var inst_34344 = (state_34466[16]);var inst_34343 = (state_34466[17]);var inst_34359 = (state_34466[2]);var inst_34360 = (inst_34346 + 1);var tmp34506 = inst_34345;var tmp34507 = inst_34344;var tmp34508 = inst_34343;var inst_34343__$1 = tmp34508;var inst_34344__$1 = tmp34507;var inst_34345__$1 = tmp34506;var inst_34346__$1 = inst_34360;var state_34466__$1 = (function (){var statearr_34511 = state_34466;(statearr_34511[27] = inst_34359);
(statearr_34511[14] = inst_34346__$1);
(statearr_34511[15] = inst_34345__$1);
(statearr_34511[16] = inst_34344__$1);
(statearr_34511[17] = inst_34343__$1);
return statearr_34511;
})();var statearr_34512_34583 = state_34466__$1;(statearr_34512_34583[2] = null);
(statearr_34512_34583[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 16))
{var inst_34363 = (state_34466[25]);var inst_34365 = cljs.core.chunked_seq_QMARK_.call(null,inst_34363);var state_34466__$1 = state_34466;if(inst_34365)
{var statearr_34513_34584 = state_34466__$1;(statearr_34513_34584[1] = 19);
} else
{var statearr_34514_34585 = state_34466__$1;(statearr_34514_34585[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 17))
{var state_34466__$1 = state_34466;var statearr_34515_34586 = state_34466__$1;(statearr_34515_34586[2] = null);
(statearr_34515_34586[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 18))
{var inst_34387 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34516_34587 = state_34466__$1;(statearr_34516_34587[2] = inst_34387);
(statearr_34516_34587[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 19))
{var inst_34363 = (state_34466[25]);var inst_34367 = cljs.core.chunk_first.call(null,inst_34363);var inst_34368 = cljs.core.chunk_rest.call(null,inst_34363);var inst_34369 = cljs.core.count.call(null,inst_34367);var inst_34343 = inst_34368;var inst_34344 = inst_34367;var inst_34345 = inst_34369;var inst_34346 = 0;var state_34466__$1 = (function (){var statearr_34517 = state_34466;(statearr_34517[14] = inst_34346);
(statearr_34517[15] = inst_34345);
(statearr_34517[16] = inst_34344);
(statearr_34517[17] = inst_34343);
return statearr_34517;
})();var statearr_34518_34588 = state_34466__$1;(statearr_34518_34588[2] = null);
(statearr_34518_34588[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 20))
{var inst_34363 = (state_34466[25]);var inst_34373 = cljs.core.first.call(null,inst_34363);var inst_34374 = cljs.core.nth.call(null,inst_34373,0,null);var inst_34375 = cljs.core.nth.call(null,inst_34373,1,null);var state_34466__$1 = (function (){var statearr_34519 = state_34466;(statearr_34519[28] = inst_34374);
return statearr_34519;
})();if(cljs.core.truth_(inst_34375))
{var statearr_34520_34589 = state_34466__$1;(statearr_34520_34589[1] = 22);
} else
{var statearr_34521_34590 = state_34466__$1;(statearr_34521_34590[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 21))
{var inst_34384 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34522_34591 = state_34466__$1;(statearr_34522_34591[2] = inst_34384);
(statearr_34522_34591[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 22))
{var inst_34374 = (state_34466[28]);var inst_34377 = cljs.core.async.close_BANG_.call(null,inst_34374);var state_34466__$1 = state_34466;var statearr_34523_34592 = state_34466__$1;(statearr_34523_34592[2] = inst_34377);
(statearr_34523_34592[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 23))
{var state_34466__$1 = state_34466;var statearr_34524_34593 = state_34466__$1;(statearr_34524_34593[2] = null);
(statearr_34524_34593[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 24))
{var inst_34363 = (state_34466[25]);var inst_34380 = (state_34466[2]);var inst_34381 = cljs.core.next.call(null,inst_34363);var inst_34343 = inst_34381;var inst_34344 = null;var inst_34345 = 0;var inst_34346 = 0;var state_34466__$1 = (function (){var statearr_34525 = state_34466;(statearr_34525[29] = inst_34380);
(statearr_34525[14] = inst_34346);
(statearr_34525[15] = inst_34345);
(statearr_34525[16] = inst_34344);
(statearr_34525[17] = inst_34343);
return statearr_34525;
})();var statearr_34526_34594 = state_34466__$1;(statearr_34526_34594[2] = null);
(statearr_34526_34594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 25))
{var inst_34404 = (state_34466[12]);var inst_34405 = (state_34466[13]);var inst_34407 = (inst_34405 < inst_34404);var inst_34408 = inst_34407;var state_34466__$1 = state_34466;if(cljs.core.truth_(inst_34408))
{var statearr_34527_34595 = state_34466__$1;(statearr_34527_34595[1] = 27);
} else
{var statearr_34528_34596 = state_34466__$1;(statearr_34528_34596[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 26))
{var inst_34394 = (state_34466[19]);var inst_34452 = (state_34466[2]);var inst_34453 = cljs.core.seq.call(null,inst_34394);var state_34466__$1 = (function (){var statearr_34529 = state_34466;(statearr_34529[30] = inst_34452);
return statearr_34529;
})();if(inst_34453)
{var statearr_34530_34597 = state_34466__$1;(statearr_34530_34597[1] = 42);
} else
{var statearr_34531_34598 = state_34466__$1;(statearr_34531_34598[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 27))
{var inst_34403 = (state_34466[11]);var inst_34405 = (state_34466[13]);var inst_34410 = cljs.core._nth.call(null,inst_34403,inst_34405);var state_34466__$1 = (function (){var statearr_34532 = state_34466;(statearr_34532[8] = inst_34410);
return statearr_34532;
})();var statearr_34533_34599 = state_34466__$1;(statearr_34533_34599[2] = null);
(statearr_34533_34599[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 28))
{var inst_34402 = (state_34466[10]);var inst_34423 = (state_34466[9]);var inst_34423__$1 = cljs.core.seq.call(null,inst_34402);var state_34466__$1 = (function (){var statearr_34537 = state_34466;(statearr_34537[9] = inst_34423__$1);
return statearr_34537;
})();if(inst_34423__$1)
{var statearr_34538_34600 = state_34466__$1;(statearr_34538_34600[1] = 33);
} else
{var statearr_34539_34601 = state_34466__$1;(statearr_34539_34601[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 29))
{var inst_34450 = (state_34466[2]);var state_34466__$1 = state_34466;var statearr_34540_34602 = state_34466__$1;(statearr_34540_34602[2] = inst_34450);
(statearr_34540_34602[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 30))
{var inst_34402 = (state_34466[10]);var inst_34403 = (state_34466[11]);var inst_34404 = (state_34466[12]);var inst_34405 = (state_34466[13]);var inst_34419 = (state_34466[2]);var inst_34420 = (inst_34405 + 1);var tmp34534 = inst_34402;var tmp34535 = inst_34403;var tmp34536 = inst_34404;var inst_34402__$1 = tmp34534;var inst_34403__$1 = tmp34535;var inst_34404__$1 = tmp34536;var inst_34405__$1 = inst_34420;var state_34466__$1 = (function (){var statearr_34541 = state_34466;(statearr_34541[31] = inst_34419);
(statearr_34541[10] = inst_34402__$1);
(statearr_34541[11] = inst_34403__$1);
(statearr_34541[12] = inst_34404__$1);
(statearr_34541[13] = inst_34405__$1);
return statearr_34541;
})();var statearr_34542_34603 = state_34466__$1;(statearr_34542_34603[2] = null);
(statearr_34542_34603[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34467 === 31))
{var inst_34410 = (state_34466[8]);var inst_34411 = (state_34466[2]);var inst_34412 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34413 = cljs.core.async.untap_STAR_.call(null,m,inst_34410);var state_34466__$1 = (function (){var statearr_34543 = state_34466;(statearr_34543[32] = inst_34412);
(statearr_34543[33] = inst_34411);
return statearr_34543;
})();var statearr_34544_34604 = state_34466__$1;(statearr_34544_34604[2] = inst_34413);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34466__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34548[0] = state_machine__5507__auto__);
(statearr_34548[1] = 1);
return statearr_34548;
});
var state_machine__5507__auto____1 = (function (state_34466){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34466);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34549){if((e34549 instanceof Object))
{var ex__5510__auto__ = e34549;var statearr_34550_34605 = state_34466;(statearr_34550_34605[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34606 = state_34466;
state_34466 = G__34606;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34466){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34551 = f__5522__auto__.call(null);(statearr_34551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34552);
return statearr_34551;
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
cljs.core.async.Mix = (function (){var obj34608 = {};return obj34608;
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
;var m = (function (){if(typeof cljs.core.async.t34718 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34718 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34719){
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
this.meta34719 = meta34719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34718.cljs$lang$type = true;
cljs.core.async.t34718.cljs$lang$ctorStr = "cljs.core.async/t34718";
cljs.core.async.t34718.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34718");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34718.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34720){var self__ = this;
var _34720__$1 = this;return self__.meta34719;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34720,meta34719__$1){var self__ = this;
var _34720__$1 = this;return (new cljs.core.async.t34718(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34719__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34718 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34718(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34719){return (new cljs.core.async.t34718(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34719));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34718(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34785){var state_val_34786 = (state_34785[1]);if((state_val_34786 === 1))
{var inst_34724 = (state_34785[7]);var inst_34724__$1 = calc_state.call(null);var inst_34725 = cljs.core.seq_QMARK_.call(null,inst_34724__$1);var state_34785__$1 = (function (){var statearr_34787 = state_34785;(statearr_34787[7] = inst_34724__$1);
return statearr_34787;
})();if(inst_34725)
{var statearr_34788_34828 = state_34785__$1;(statearr_34788_34828[1] = 2);
} else
{var statearr_34789_34829 = state_34785__$1;(statearr_34789_34829[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 2))
{var inst_34724 = (state_34785[7]);var inst_34727 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34724);var state_34785__$1 = state_34785;var statearr_34790_34830 = state_34785__$1;(statearr_34790_34830[2] = inst_34727);
(statearr_34790_34830[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 3))
{var inst_34724 = (state_34785[7]);var state_34785__$1 = state_34785;var statearr_34791_34831 = state_34785__$1;(statearr_34791_34831[2] = inst_34724);
(statearr_34791_34831[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 4))
{var inst_34724 = (state_34785[7]);var inst_34730 = (state_34785[2]);var inst_34731 = cljs.core.get.call(null,inst_34730,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34732 = cljs.core.get.call(null,inst_34730,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34733 = cljs.core.get.call(null,inst_34730,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34734 = inst_34724;var state_34785__$1 = (function (){var statearr_34792 = state_34785;(statearr_34792[8] = inst_34731);
(statearr_34792[9] = inst_34732);
(statearr_34792[10] = inst_34733);
(statearr_34792[11] = inst_34734);
return statearr_34792;
})();var statearr_34793_34832 = state_34785__$1;(statearr_34793_34832[2] = null);
(statearr_34793_34832[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 5))
{var inst_34734 = (state_34785[11]);var inst_34737 = cljs.core.seq_QMARK_.call(null,inst_34734);var state_34785__$1 = state_34785;if(inst_34737)
{var statearr_34794_34833 = state_34785__$1;(statearr_34794_34833[1] = 7);
} else
{var statearr_34795_34834 = state_34785__$1;(statearr_34795_34834[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 6))
{var inst_34783 = (state_34785[2]);var state_34785__$1 = state_34785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34785__$1,inst_34783);
} else
{if((state_val_34786 === 7))
{var inst_34734 = (state_34785[11]);var inst_34739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34734);var state_34785__$1 = state_34785;var statearr_34796_34835 = state_34785__$1;(statearr_34796_34835[2] = inst_34739);
(statearr_34796_34835[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 8))
{var inst_34734 = (state_34785[11]);var state_34785__$1 = state_34785;var statearr_34797_34836 = state_34785__$1;(statearr_34797_34836[2] = inst_34734);
(statearr_34797_34836[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 9))
{var inst_34742 = (state_34785[12]);var inst_34742__$1 = (state_34785[2]);var inst_34743 = cljs.core.get.call(null,inst_34742__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34744 = cljs.core.get.call(null,inst_34742__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34745 = cljs.core.get.call(null,inst_34742__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34785__$1 = (function (){var statearr_34798 = state_34785;(statearr_34798[13] = inst_34744);
(statearr_34798[14] = inst_34745);
(statearr_34798[12] = inst_34742__$1);
return statearr_34798;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34785__$1,10,inst_34743);
} else
{if((state_val_34786 === 10))
{var inst_34749 = (state_34785[15]);var inst_34750 = (state_34785[16]);var inst_34748 = (state_34785[2]);var inst_34749__$1 = cljs.core.nth.call(null,inst_34748,0,null);var inst_34750__$1 = cljs.core.nth.call(null,inst_34748,1,null);var inst_34751 = (inst_34749__$1 == null);var inst_34752 = cljs.core._EQ_.call(null,inst_34750__$1,change);var inst_34753 = (inst_34751) || (inst_34752);var state_34785__$1 = (function (){var statearr_34799 = state_34785;(statearr_34799[15] = inst_34749__$1);
(statearr_34799[16] = inst_34750__$1);
return statearr_34799;
})();if(cljs.core.truth_(inst_34753))
{var statearr_34800_34837 = state_34785__$1;(statearr_34800_34837[1] = 11);
} else
{var statearr_34801_34838 = state_34785__$1;(statearr_34801_34838[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 11))
{var inst_34749 = (state_34785[15]);var inst_34755 = (inst_34749 == null);var state_34785__$1 = state_34785;if(cljs.core.truth_(inst_34755))
{var statearr_34802_34839 = state_34785__$1;(statearr_34802_34839[1] = 14);
} else
{var statearr_34803_34840 = state_34785__$1;(statearr_34803_34840[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 12))
{var inst_34764 = (state_34785[17]);var inst_34745 = (state_34785[14]);var inst_34750 = (state_34785[16]);var inst_34764__$1 = inst_34745.call(null,inst_34750);var state_34785__$1 = (function (){var statearr_34804 = state_34785;(statearr_34804[17] = inst_34764__$1);
return statearr_34804;
})();if(cljs.core.truth_(inst_34764__$1))
{var statearr_34805_34841 = state_34785__$1;(statearr_34805_34841[1] = 17);
} else
{var statearr_34806_34842 = state_34785__$1;(statearr_34806_34842[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 13))
{var inst_34781 = (state_34785[2]);var state_34785__$1 = state_34785;var statearr_34807_34843 = state_34785__$1;(statearr_34807_34843[2] = inst_34781);
(statearr_34807_34843[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 14))
{var inst_34750 = (state_34785[16]);var inst_34757 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34750);var state_34785__$1 = state_34785;var statearr_34808_34844 = state_34785__$1;(statearr_34808_34844[2] = inst_34757);
(statearr_34808_34844[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 15))
{var state_34785__$1 = state_34785;var statearr_34809_34845 = state_34785__$1;(statearr_34809_34845[2] = null);
(statearr_34809_34845[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 16))
{var inst_34760 = (state_34785[2]);var inst_34761 = calc_state.call(null);var inst_34734 = inst_34761;var state_34785__$1 = (function (){var statearr_34810 = state_34785;(statearr_34810[18] = inst_34760);
(statearr_34810[11] = inst_34734);
return statearr_34810;
})();var statearr_34811_34846 = state_34785__$1;(statearr_34811_34846[2] = null);
(statearr_34811_34846[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 17))
{var inst_34764 = (state_34785[17]);var state_34785__$1 = state_34785;var statearr_34812_34847 = state_34785__$1;(statearr_34812_34847[2] = inst_34764);
(statearr_34812_34847[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 18))
{var inst_34744 = (state_34785[13]);var inst_34745 = (state_34785[14]);var inst_34750 = (state_34785[16]);var inst_34767 = cljs.core.empty_QMARK_.call(null,inst_34745);var inst_34768 = inst_34744.call(null,inst_34750);var inst_34769 = cljs.core.not.call(null,inst_34768);var inst_34770 = (inst_34767) && (inst_34769);var state_34785__$1 = state_34785;var statearr_34813_34848 = state_34785__$1;(statearr_34813_34848[2] = inst_34770);
(statearr_34813_34848[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 19))
{var inst_34772 = (state_34785[2]);var state_34785__$1 = state_34785;if(cljs.core.truth_(inst_34772))
{var statearr_34814_34849 = state_34785__$1;(statearr_34814_34849[1] = 20);
} else
{var statearr_34815_34850 = state_34785__$1;(statearr_34815_34850[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 20))
{var inst_34749 = (state_34785[15]);var state_34785__$1 = state_34785;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34785__$1,23,out,inst_34749);
} else
{if((state_val_34786 === 21))
{var state_34785__$1 = state_34785;var statearr_34816_34851 = state_34785__$1;(statearr_34816_34851[2] = null);
(statearr_34816_34851[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 22))
{var inst_34742 = (state_34785[12]);var inst_34778 = (state_34785[2]);var inst_34734 = inst_34742;var state_34785__$1 = (function (){var statearr_34817 = state_34785;(statearr_34817[11] = inst_34734);
(statearr_34817[19] = inst_34778);
return statearr_34817;
})();var statearr_34818_34852 = state_34785__$1;(statearr_34818_34852[2] = null);
(statearr_34818_34852[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34786 === 23))
{var inst_34775 = (state_34785[2]);var state_34785__$1 = state_34785;var statearr_34819_34853 = state_34785__$1;(statearr_34819_34853[2] = inst_34775);
(statearr_34819_34853[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34823[0] = state_machine__5507__auto__);
(statearr_34823[1] = 1);
return statearr_34823;
});
var state_machine__5507__auto____1 = (function (state_34785){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34785);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34824){if((e34824 instanceof Object))
{var ex__5510__auto__ = e34824;var statearr_34825_34854 = state_34785;(statearr_34825_34854[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34855 = state_34785;
state_34785 = G__34855;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34785){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34826 = f__5522__auto__.call(null);(statearr_34826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34827);
return statearr_34826;
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
cljs.core.async.Pub = (function (){var obj34857 = {};return obj34857;
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
return (function (p1__34858_SHARP_){if(cljs.core.truth_(p1__34858_SHARP_.call(null,topic)))
{return p1__34858_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34983 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34983 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34984){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34984 = meta34984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34983.cljs$lang$type = true;
cljs.core.async.t34983.cljs$lang$ctorStr = "cljs.core.async/t34983";
cljs.core.async.t34983.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34983");
});})(mults,ensure_mult))
;
cljs.core.async.t34983.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34983.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34983.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34983.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34983.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34983.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34985){var self__ = this;
var _34985__$1 = this;return self__.meta34984;
});})(mults,ensure_mult))
;
cljs.core.async.t34983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34985,meta34984__$1){var self__ = this;
var _34985__$1 = this;return (new cljs.core.async.t34983(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34984__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34983 = ((function (mults,ensure_mult){
return (function __GT_t34983(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34984){return (new cljs.core.async.t34983(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34984));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34983(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___35107 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35059){var state_val_35060 = (state_35059[1]);if((state_val_35060 === 1))
{var state_35059__$1 = state_35059;var statearr_35061_35108 = state_35059__$1;(statearr_35061_35108[2] = null);
(statearr_35061_35108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 2))
{var state_35059__$1 = state_35059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35059__$1,4,ch);
} else
{if((state_val_35060 === 3))
{var inst_35057 = (state_35059[2]);var state_35059__$1 = state_35059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35059__$1,inst_35057);
} else
{if((state_val_35060 === 4))
{var inst_34988 = (state_35059[7]);var inst_34988__$1 = (state_35059[2]);var inst_34989 = (inst_34988__$1 == null);var state_35059__$1 = (function (){var statearr_35062 = state_35059;(statearr_35062[7] = inst_34988__$1);
return statearr_35062;
})();if(cljs.core.truth_(inst_34989))
{var statearr_35063_35109 = state_35059__$1;(statearr_35063_35109[1] = 5);
} else
{var statearr_35064_35110 = state_35059__$1;(statearr_35064_35110[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 5))
{var inst_34995 = cljs.core.deref.call(null,mults);var inst_34996 = cljs.core.vals.call(null,inst_34995);var inst_34997 = cljs.core.seq.call(null,inst_34996);var inst_34998 = inst_34997;var inst_34999 = null;var inst_35000 = 0;var inst_35001 = 0;var state_35059__$1 = (function (){var statearr_35065 = state_35059;(statearr_35065[8] = inst_34998);
(statearr_35065[9] = inst_34999);
(statearr_35065[10] = inst_35001);
(statearr_35065[11] = inst_35000);
return statearr_35065;
})();var statearr_35066_35111 = state_35059__$1;(statearr_35066_35111[2] = null);
(statearr_35066_35111[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 6))
{var inst_34988 = (state_35059[7]);var inst_35038 = (state_35059[12]);var inst_35036 = (state_35059[13]);var inst_35036__$1 = topic_fn.call(null,inst_34988);var inst_35037 = cljs.core.deref.call(null,mults);var inst_35038__$1 = cljs.core.get.call(null,inst_35037,inst_35036__$1);var state_35059__$1 = (function (){var statearr_35067 = state_35059;(statearr_35067[12] = inst_35038__$1);
(statearr_35067[13] = inst_35036__$1);
return statearr_35067;
})();if(cljs.core.truth_(inst_35038__$1))
{var statearr_35068_35112 = state_35059__$1;(statearr_35068_35112[1] = 19);
} else
{var statearr_35069_35113 = state_35059__$1;(statearr_35069_35113[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 7))
{var inst_35055 = (state_35059[2]);var state_35059__$1 = state_35059;var statearr_35070_35114 = state_35059__$1;(statearr_35070_35114[2] = inst_35055);
(statearr_35070_35114[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 8))
{var inst_35001 = (state_35059[10]);var inst_35000 = (state_35059[11]);var inst_35003 = (inst_35001 < inst_35000);var inst_35004 = inst_35003;var state_35059__$1 = state_35059;if(cljs.core.truth_(inst_35004))
{var statearr_35074_35115 = state_35059__$1;(statearr_35074_35115[1] = 10);
} else
{var statearr_35075_35116 = state_35059__$1;(statearr_35075_35116[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 9))
{var inst_35034 = (state_35059[2]);var state_35059__$1 = state_35059;var statearr_35076_35117 = state_35059__$1;(statearr_35076_35117[2] = inst_35034);
(statearr_35076_35117[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 10))
{var inst_34998 = (state_35059[8]);var inst_34999 = (state_35059[9]);var inst_35001 = (state_35059[10]);var inst_35000 = (state_35059[11]);var inst_35006 = cljs.core._nth.call(null,inst_34999,inst_35001);var inst_35007 = cljs.core.async.muxch_STAR_.call(null,inst_35006);var inst_35008 = cljs.core.async.close_BANG_.call(null,inst_35007);var inst_35009 = (inst_35001 + 1);var tmp35071 = inst_34998;var tmp35072 = inst_34999;var tmp35073 = inst_35000;var inst_34998__$1 = tmp35071;var inst_34999__$1 = tmp35072;var inst_35000__$1 = tmp35073;var inst_35001__$1 = inst_35009;var state_35059__$1 = (function (){var statearr_35077 = state_35059;(statearr_35077[14] = inst_35008);
(statearr_35077[8] = inst_34998__$1);
(statearr_35077[9] = inst_34999__$1);
(statearr_35077[10] = inst_35001__$1);
(statearr_35077[11] = inst_35000__$1);
return statearr_35077;
})();var statearr_35078_35118 = state_35059__$1;(statearr_35078_35118[2] = null);
(statearr_35078_35118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 11))
{var inst_35012 = (state_35059[15]);var inst_34998 = (state_35059[8]);var inst_35012__$1 = cljs.core.seq.call(null,inst_34998);var state_35059__$1 = (function (){var statearr_35079 = state_35059;(statearr_35079[15] = inst_35012__$1);
return statearr_35079;
})();if(inst_35012__$1)
{var statearr_35080_35119 = state_35059__$1;(statearr_35080_35119[1] = 13);
} else
{var statearr_35081_35120 = state_35059__$1;(statearr_35081_35120[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 12))
{var inst_35032 = (state_35059[2]);var state_35059__$1 = state_35059;var statearr_35082_35121 = state_35059__$1;(statearr_35082_35121[2] = inst_35032);
(statearr_35082_35121[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 13))
{var inst_35012 = (state_35059[15]);var inst_35014 = cljs.core.chunked_seq_QMARK_.call(null,inst_35012);var state_35059__$1 = state_35059;if(inst_35014)
{var statearr_35083_35122 = state_35059__$1;(statearr_35083_35122[1] = 16);
} else
{var statearr_35084_35123 = state_35059__$1;(statearr_35084_35123[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 14))
{var state_35059__$1 = state_35059;var statearr_35085_35124 = state_35059__$1;(statearr_35085_35124[2] = null);
(statearr_35085_35124[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 15))
{var inst_35030 = (state_35059[2]);var state_35059__$1 = state_35059;var statearr_35086_35125 = state_35059__$1;(statearr_35086_35125[2] = inst_35030);
(statearr_35086_35125[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 16))
{var inst_35012 = (state_35059[15]);var inst_35016 = cljs.core.chunk_first.call(null,inst_35012);var inst_35017 = cljs.core.chunk_rest.call(null,inst_35012);var inst_35018 = cljs.core.count.call(null,inst_35016);var inst_34998 = inst_35017;var inst_34999 = inst_35016;var inst_35000 = inst_35018;var inst_35001 = 0;var state_35059__$1 = (function (){var statearr_35087 = state_35059;(statearr_35087[8] = inst_34998);
(statearr_35087[9] = inst_34999);
(statearr_35087[10] = inst_35001);
(statearr_35087[11] = inst_35000);
return statearr_35087;
})();var statearr_35088_35126 = state_35059__$1;(statearr_35088_35126[2] = null);
(statearr_35088_35126[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 17))
{var inst_35012 = (state_35059[15]);var inst_35021 = cljs.core.first.call(null,inst_35012);var inst_35022 = cljs.core.async.muxch_STAR_.call(null,inst_35021);var inst_35023 = cljs.core.async.close_BANG_.call(null,inst_35022);var inst_35024 = cljs.core.next.call(null,inst_35012);var inst_34998 = inst_35024;var inst_34999 = null;var inst_35000 = 0;var inst_35001 = 0;var state_35059__$1 = (function (){var statearr_35089 = state_35059;(statearr_35089[16] = inst_35023);
(statearr_35089[8] = inst_34998);
(statearr_35089[9] = inst_34999);
(statearr_35089[10] = inst_35001);
(statearr_35089[11] = inst_35000);
return statearr_35089;
})();var statearr_35090_35127 = state_35059__$1;(statearr_35090_35127[2] = null);
(statearr_35090_35127[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 18))
{var inst_35027 = (state_35059[2]);var state_35059__$1 = state_35059;var statearr_35091_35128 = state_35059__$1;(statearr_35091_35128[2] = inst_35027);
(statearr_35091_35128[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 19))
{var state_35059__$1 = state_35059;var statearr_35092_35129 = state_35059__$1;(statearr_35092_35129[2] = null);
(statearr_35092_35129[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 20))
{var state_35059__$1 = state_35059;var statearr_35093_35130 = state_35059__$1;(statearr_35093_35130[2] = null);
(statearr_35093_35130[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 21))
{var inst_35052 = (state_35059[2]);var state_35059__$1 = (function (){var statearr_35094 = state_35059;(statearr_35094[17] = inst_35052);
return statearr_35094;
})();var statearr_35095_35131 = state_35059__$1;(statearr_35095_35131[2] = null);
(statearr_35095_35131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 22))
{var inst_35049 = (state_35059[2]);var state_35059__$1 = state_35059;var statearr_35096_35132 = state_35059__$1;(statearr_35096_35132[2] = inst_35049);
(statearr_35096_35132[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 23))
{var inst_35036 = (state_35059[13]);var inst_35040 = (state_35059[2]);var inst_35041 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35036);var state_35059__$1 = (function (){var statearr_35097 = state_35059;(statearr_35097[18] = inst_35040);
return statearr_35097;
})();var statearr_35098_35133 = state_35059__$1;(statearr_35098_35133[2] = inst_35041);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35059__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35060 === 24))
{var inst_34988 = (state_35059[7]);var inst_35038 = (state_35059[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35059,23,Object,null,22);var inst_35045 = cljs.core.async.muxch_STAR_.call(null,inst_35038);var state_35059__$1 = state_35059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35059__$1,25,inst_35045,inst_34988);
} else
{if((state_val_35060 === 25))
{var inst_35047 = (state_35059[2]);var state_35059__$1 = state_35059;var statearr_35099_35134 = state_35059__$1;(statearr_35099_35134[2] = inst_35047);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35059__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35103[0] = state_machine__5507__auto__);
(statearr_35103[1] = 1);
return statearr_35103;
});
var state_machine__5507__auto____1 = (function (state_35059){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35059);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35104){if((e35104 instanceof Object))
{var ex__5510__auto__ = e35104;var statearr_35105_35135 = state_35059;(statearr_35105_35135[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35059);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35136 = state_35059;
state_35059 = G__35136;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35059){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35106 = f__5522__auto__.call(null);(statearr_35106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35107);
return statearr_35106;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___35273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35243){var state_val_35244 = (state_35243[1]);if((state_val_35244 === 1))
{var state_35243__$1 = state_35243;var statearr_35245_35274 = state_35243__$1;(statearr_35245_35274[2] = null);
(statearr_35245_35274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 2))
{var inst_35206 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35207 = 0;var state_35243__$1 = (function (){var statearr_35246 = state_35243;(statearr_35246[7] = inst_35206);
(statearr_35246[8] = inst_35207);
return statearr_35246;
})();var statearr_35247_35275 = state_35243__$1;(statearr_35247_35275[2] = null);
(statearr_35247_35275[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 3))
{var inst_35241 = (state_35243[2]);var state_35243__$1 = state_35243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35243__$1,inst_35241);
} else
{if((state_val_35244 === 4))
{var inst_35207 = (state_35243[8]);var inst_35209 = (inst_35207 < cnt);var state_35243__$1 = state_35243;if(cljs.core.truth_(inst_35209))
{var statearr_35248_35276 = state_35243__$1;(statearr_35248_35276[1] = 6);
} else
{var statearr_35249_35277 = state_35243__$1;(statearr_35249_35277[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 5))
{var inst_35227 = (state_35243[2]);var state_35243__$1 = (function (){var statearr_35250 = state_35243;(statearr_35250[9] = inst_35227);
return statearr_35250;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35243__$1,12,dchan);
} else
{if((state_val_35244 === 6))
{var state_35243__$1 = state_35243;var statearr_35251_35278 = state_35243__$1;(statearr_35251_35278[2] = null);
(statearr_35251_35278[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 7))
{var state_35243__$1 = state_35243;var statearr_35252_35279 = state_35243__$1;(statearr_35252_35279[2] = null);
(statearr_35252_35279[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 8))
{var inst_35225 = (state_35243[2]);var state_35243__$1 = state_35243;var statearr_35253_35280 = state_35243__$1;(statearr_35253_35280[2] = inst_35225);
(statearr_35253_35280[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 9))
{var inst_35207 = (state_35243[8]);var inst_35220 = (state_35243[2]);var inst_35221 = (inst_35207 + 1);var inst_35207__$1 = inst_35221;var state_35243__$1 = (function (){var statearr_35254 = state_35243;(statearr_35254[10] = inst_35220);
(statearr_35254[8] = inst_35207__$1);
return statearr_35254;
})();var statearr_35255_35281 = state_35243__$1;(statearr_35255_35281[2] = null);
(statearr_35255_35281[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 10))
{var inst_35211 = (state_35243[2]);var inst_35212 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35243__$1 = (function (){var statearr_35256 = state_35243;(statearr_35256[11] = inst_35211);
return statearr_35256;
})();var statearr_35257_35282 = state_35243__$1;(statearr_35257_35282[2] = inst_35212);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35243__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 11))
{var inst_35207 = (state_35243[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35243,10,Object,null,9);var inst_35216 = chs__$1.call(null,inst_35207);var inst_35217 = done.call(null,inst_35207);var inst_35218 = cljs.core.async.take_BANG_.call(null,inst_35216,inst_35217);var state_35243__$1 = state_35243;var statearr_35258_35283 = state_35243__$1;(statearr_35258_35283[2] = inst_35218);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35243__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 12))
{var inst_35229 = (state_35243[12]);var inst_35229__$1 = (state_35243[2]);var inst_35230 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35229__$1);var state_35243__$1 = (function (){var statearr_35259 = state_35243;(statearr_35259[12] = inst_35229__$1);
return statearr_35259;
})();if(cljs.core.truth_(inst_35230))
{var statearr_35260_35284 = state_35243__$1;(statearr_35260_35284[1] = 13);
} else
{var statearr_35261_35285 = state_35243__$1;(statearr_35261_35285[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 13))
{var inst_35232 = cljs.core.async.close_BANG_.call(null,out);var state_35243__$1 = state_35243;var statearr_35262_35286 = state_35243__$1;(statearr_35262_35286[2] = inst_35232);
(statearr_35262_35286[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 14))
{var inst_35229 = (state_35243[12]);var inst_35234 = cljs.core.apply.call(null,f,inst_35229);var state_35243__$1 = state_35243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35243__$1,16,out,inst_35234);
} else
{if((state_val_35244 === 15))
{var inst_35239 = (state_35243[2]);var state_35243__$1 = state_35243;var statearr_35263_35287 = state_35243__$1;(statearr_35263_35287[2] = inst_35239);
(statearr_35263_35287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35244 === 16))
{var inst_35236 = (state_35243[2]);var state_35243__$1 = (function (){var statearr_35264 = state_35243;(statearr_35264[13] = inst_35236);
return statearr_35264;
})();var statearr_35265_35288 = state_35243__$1;(statearr_35265_35288[2] = null);
(statearr_35265_35288[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35269[0] = state_machine__5507__auto__);
(statearr_35269[1] = 1);
return statearr_35269;
});
var state_machine__5507__auto____1 = (function (state_35243){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35243);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35270){if((e35270 instanceof Object))
{var ex__5510__auto__ = e35270;var statearr_35271_35289 = state_35243;(statearr_35271_35289[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35243);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35290 = state_35243;
state_35243 = G__35290;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35243){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35272 = f__5522__auto__.call(null);(statearr_35272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35273);
return statearr_35272;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35374){var state_val_35375 = (state_35374[1]);if((state_val_35375 === 1))
{var inst_35345 = cljs.core.vec.call(null,chs);var inst_35346 = inst_35345;var state_35374__$1 = (function (){var statearr_35376 = state_35374;(statearr_35376[7] = inst_35346);
return statearr_35376;
})();var statearr_35377_35399 = state_35374__$1;(statearr_35377_35399[2] = null);
(statearr_35377_35399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35375 === 2))
{var inst_35346 = (state_35374[7]);var inst_35348 = cljs.core.count.call(null,inst_35346);var inst_35349 = (inst_35348 > 0);var state_35374__$1 = state_35374;if(cljs.core.truth_(inst_35349))
{var statearr_35378_35400 = state_35374__$1;(statearr_35378_35400[1] = 4);
} else
{var statearr_35379_35401 = state_35374__$1;(statearr_35379_35401[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35375 === 3))
{var inst_35372 = (state_35374[2]);var state_35374__$1 = state_35374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35374__$1,inst_35372);
} else
{if((state_val_35375 === 4))
{var inst_35346 = (state_35374[7]);var state_35374__$1 = state_35374;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35374__$1,7,inst_35346);
} else
{if((state_val_35375 === 5))
{var inst_35368 = cljs.core.async.close_BANG_.call(null,out);var state_35374__$1 = state_35374;var statearr_35380_35402 = state_35374__$1;(statearr_35380_35402[2] = inst_35368);
(statearr_35380_35402[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35375 === 6))
{var inst_35370 = (state_35374[2]);var state_35374__$1 = state_35374;var statearr_35381_35403 = state_35374__$1;(statearr_35381_35403[2] = inst_35370);
(statearr_35381_35403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35375 === 7))
{var inst_35353 = (state_35374[8]);var inst_35354 = (state_35374[9]);var inst_35353__$1 = (state_35374[2]);var inst_35354__$1 = cljs.core.nth.call(null,inst_35353__$1,0,null);var inst_35355 = cljs.core.nth.call(null,inst_35353__$1,1,null);var inst_35356 = (inst_35354__$1 == null);var state_35374__$1 = (function (){var statearr_35382 = state_35374;(statearr_35382[8] = inst_35353__$1);
(statearr_35382[9] = inst_35354__$1);
(statearr_35382[10] = inst_35355);
return statearr_35382;
})();if(cljs.core.truth_(inst_35356))
{var statearr_35383_35404 = state_35374__$1;(statearr_35383_35404[1] = 8);
} else
{var statearr_35384_35405 = state_35374__$1;(statearr_35384_35405[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35375 === 8))
{var inst_35346 = (state_35374[7]);var inst_35353 = (state_35374[8]);var inst_35354 = (state_35374[9]);var inst_35355 = (state_35374[10]);var inst_35358 = (function (){var c = inst_35355;var v = inst_35354;var vec__35351 = inst_35353;var cs = inst_35346;return ((function (c,v,vec__35351,cs,inst_35346,inst_35353,inst_35354,inst_35355,state_val_35375){
return (function (p1__35291_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35291_SHARP_);
});
;})(c,v,vec__35351,cs,inst_35346,inst_35353,inst_35354,inst_35355,state_val_35375))
})();var inst_35359 = cljs.core.filterv.call(null,inst_35358,inst_35346);var inst_35346__$1 = inst_35359;var state_35374__$1 = (function (){var statearr_35385 = state_35374;(statearr_35385[7] = inst_35346__$1);
return statearr_35385;
})();var statearr_35386_35406 = state_35374__$1;(statearr_35386_35406[2] = null);
(statearr_35386_35406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35375 === 9))
{var inst_35354 = (state_35374[9]);var state_35374__$1 = state_35374;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35374__$1,11,out,inst_35354);
} else
{if((state_val_35375 === 10))
{var inst_35366 = (state_35374[2]);var state_35374__$1 = state_35374;var statearr_35388_35407 = state_35374__$1;(statearr_35388_35407[2] = inst_35366);
(statearr_35388_35407[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35375 === 11))
{var inst_35346 = (state_35374[7]);var inst_35363 = (state_35374[2]);var tmp35387 = inst_35346;var inst_35346__$1 = tmp35387;var state_35374__$1 = (function (){var statearr_35389 = state_35374;(statearr_35389[7] = inst_35346__$1);
(statearr_35389[11] = inst_35363);
return statearr_35389;
})();var statearr_35390_35408 = state_35374__$1;(statearr_35390_35408[2] = null);
(statearr_35390_35408[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35394 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35394[0] = state_machine__5507__auto__);
(statearr_35394[1] = 1);
return statearr_35394;
});
var state_machine__5507__auto____1 = (function (state_35374){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35374);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35395){if((e35395 instanceof Object))
{var ex__5510__auto__ = e35395;var statearr_35396_35409 = state_35374;(statearr_35396_35409[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35410 = state_35374;
state_35374 = G__35410;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35374){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35397 = f__5522__auto__.call(null);(statearr_35397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35398);
return statearr_35397;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35480){var state_val_35481 = (state_35480[1]);if((state_val_35481 === 1))
{var inst_35457 = 0;var state_35480__$1 = (function (){var statearr_35482 = state_35480;(statearr_35482[7] = inst_35457);
return statearr_35482;
})();var statearr_35483_35504 = state_35480__$1;(statearr_35483_35504[2] = null);
(statearr_35483_35504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35481 === 2))
{var inst_35457 = (state_35480[7]);var inst_35459 = (inst_35457 < n);var state_35480__$1 = state_35480;if(cljs.core.truth_(inst_35459))
{var statearr_35484_35505 = state_35480__$1;(statearr_35484_35505[1] = 4);
} else
{var statearr_35485_35506 = state_35480__$1;(statearr_35485_35506[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35481 === 3))
{var inst_35477 = (state_35480[2]);var inst_35478 = cljs.core.async.close_BANG_.call(null,out);var state_35480__$1 = (function (){var statearr_35486 = state_35480;(statearr_35486[8] = inst_35477);
return statearr_35486;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35480__$1,inst_35478);
} else
{if((state_val_35481 === 4))
{var state_35480__$1 = state_35480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35480__$1,7,ch);
} else
{if((state_val_35481 === 5))
{var state_35480__$1 = state_35480;var statearr_35487_35507 = state_35480__$1;(statearr_35487_35507[2] = null);
(statearr_35487_35507[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35481 === 6))
{var inst_35475 = (state_35480[2]);var state_35480__$1 = state_35480;var statearr_35488_35508 = state_35480__$1;(statearr_35488_35508[2] = inst_35475);
(statearr_35488_35508[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35481 === 7))
{var inst_35462 = (state_35480[9]);var inst_35462__$1 = (state_35480[2]);var inst_35463 = (inst_35462__$1 == null);var inst_35464 = cljs.core.not.call(null,inst_35463);var state_35480__$1 = (function (){var statearr_35489 = state_35480;(statearr_35489[9] = inst_35462__$1);
return statearr_35489;
})();if(inst_35464)
{var statearr_35490_35509 = state_35480__$1;(statearr_35490_35509[1] = 8);
} else
{var statearr_35491_35510 = state_35480__$1;(statearr_35491_35510[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35481 === 8))
{var inst_35462 = (state_35480[9]);var state_35480__$1 = state_35480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35480__$1,11,out,inst_35462);
} else
{if((state_val_35481 === 9))
{var state_35480__$1 = state_35480;var statearr_35492_35511 = state_35480__$1;(statearr_35492_35511[2] = null);
(statearr_35492_35511[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35481 === 10))
{var inst_35472 = (state_35480[2]);var state_35480__$1 = state_35480;var statearr_35493_35512 = state_35480__$1;(statearr_35493_35512[2] = inst_35472);
(statearr_35493_35512[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35481 === 11))
{var inst_35457 = (state_35480[7]);var inst_35467 = (state_35480[2]);var inst_35468 = (inst_35457 + 1);var inst_35457__$1 = inst_35468;var state_35480__$1 = (function (){var statearr_35494 = state_35480;(statearr_35494[10] = inst_35467);
(statearr_35494[7] = inst_35457__$1);
return statearr_35494;
})();var statearr_35495_35513 = state_35480__$1;(statearr_35495_35513[2] = null);
(statearr_35495_35513[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35499 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35499[0] = state_machine__5507__auto__);
(statearr_35499[1] = 1);
return statearr_35499;
});
var state_machine__5507__auto____1 = (function (state_35480){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35480);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35500){if((e35500 instanceof Object))
{var ex__5510__auto__ = e35500;var statearr_35501_35514 = state_35480;(statearr_35501_35514[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35515 = state_35480;
state_35480 = G__35515;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35480){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35502 = f__5522__auto__.call(null);(statearr_35502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35503);
return statearr_35502;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35612 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35587){var state_val_35588 = (state_35587[1]);if((state_val_35588 === 1))
{var inst_35564 = null;var state_35587__$1 = (function (){var statearr_35589 = state_35587;(statearr_35589[7] = inst_35564);
return statearr_35589;
})();var statearr_35590_35613 = state_35587__$1;(statearr_35590_35613[2] = null);
(statearr_35590_35613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35588 === 2))
{var state_35587__$1 = state_35587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35587__$1,4,ch);
} else
{if((state_val_35588 === 3))
{var inst_35584 = (state_35587[2]);var inst_35585 = cljs.core.async.close_BANG_.call(null,out);var state_35587__$1 = (function (){var statearr_35591 = state_35587;(statearr_35591[8] = inst_35584);
return statearr_35591;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35587__$1,inst_35585);
} else
{if((state_val_35588 === 4))
{var inst_35567 = (state_35587[9]);var inst_35567__$1 = (state_35587[2]);var inst_35568 = (inst_35567__$1 == null);var inst_35569 = cljs.core.not.call(null,inst_35568);var state_35587__$1 = (function (){var statearr_35592 = state_35587;(statearr_35592[9] = inst_35567__$1);
return statearr_35592;
})();if(inst_35569)
{var statearr_35593_35614 = state_35587__$1;(statearr_35593_35614[1] = 5);
} else
{var statearr_35594_35615 = state_35587__$1;(statearr_35594_35615[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35588 === 5))
{var inst_35567 = (state_35587[9]);var inst_35564 = (state_35587[7]);var inst_35571 = cljs.core._EQ_.call(null,inst_35567,inst_35564);var state_35587__$1 = state_35587;if(inst_35571)
{var statearr_35595_35616 = state_35587__$1;(statearr_35595_35616[1] = 8);
} else
{var statearr_35596_35617 = state_35587__$1;(statearr_35596_35617[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35588 === 6))
{var state_35587__$1 = state_35587;var statearr_35598_35618 = state_35587__$1;(statearr_35598_35618[2] = null);
(statearr_35598_35618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35588 === 7))
{var inst_35582 = (state_35587[2]);var state_35587__$1 = state_35587;var statearr_35599_35619 = state_35587__$1;(statearr_35599_35619[2] = inst_35582);
(statearr_35599_35619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35588 === 8))
{var inst_35564 = (state_35587[7]);var tmp35597 = inst_35564;var inst_35564__$1 = tmp35597;var state_35587__$1 = (function (){var statearr_35600 = state_35587;(statearr_35600[7] = inst_35564__$1);
return statearr_35600;
})();var statearr_35601_35620 = state_35587__$1;(statearr_35601_35620[2] = null);
(statearr_35601_35620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35588 === 9))
{var inst_35567 = (state_35587[9]);var state_35587__$1 = state_35587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35587__$1,11,out,inst_35567);
} else
{if((state_val_35588 === 10))
{var inst_35579 = (state_35587[2]);var state_35587__$1 = state_35587;var statearr_35602_35621 = state_35587__$1;(statearr_35602_35621[2] = inst_35579);
(statearr_35602_35621[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35588 === 11))
{var inst_35567 = (state_35587[9]);var inst_35576 = (state_35587[2]);var inst_35564 = inst_35567;var state_35587__$1 = (function (){var statearr_35603 = state_35587;(statearr_35603[10] = inst_35576);
(statearr_35603[7] = inst_35564);
return statearr_35603;
})();var statearr_35604_35622 = state_35587__$1;(statearr_35604_35622[2] = null);
(statearr_35604_35622[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35608 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35608[0] = state_machine__5507__auto__);
(statearr_35608[1] = 1);
return statearr_35608;
});
var state_machine__5507__auto____1 = (function (state_35587){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35609){if((e35609 instanceof Object))
{var ex__5510__auto__ = e35609;var statearr_35610_35623 = state_35587;(statearr_35610_35623[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35609;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35624 = state_35587;
state_35587 = G__35624;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35587){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35611 = f__5522__auto__.call(null);(statearr_35611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35612);
return statearr_35611;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35759 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35729){var state_val_35730 = (state_35729[1]);if((state_val_35730 === 1))
{var inst_35692 = (new Array(n));var inst_35693 = inst_35692;var inst_35694 = 0;var state_35729__$1 = (function (){var statearr_35731 = state_35729;(statearr_35731[7] = inst_35694);
(statearr_35731[8] = inst_35693);
return statearr_35731;
})();var statearr_35732_35760 = state_35729__$1;(statearr_35732_35760[2] = null);
(statearr_35732_35760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 2))
{var state_35729__$1 = state_35729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35729__$1,4,ch);
} else
{if((state_val_35730 === 3))
{var inst_35727 = (state_35729[2]);var state_35729__$1 = state_35729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35729__$1,inst_35727);
} else
{if((state_val_35730 === 4))
{var inst_35697 = (state_35729[9]);var inst_35697__$1 = (state_35729[2]);var inst_35698 = (inst_35697__$1 == null);var inst_35699 = cljs.core.not.call(null,inst_35698);var state_35729__$1 = (function (){var statearr_35733 = state_35729;(statearr_35733[9] = inst_35697__$1);
return statearr_35733;
})();if(inst_35699)
{var statearr_35734_35761 = state_35729__$1;(statearr_35734_35761[1] = 5);
} else
{var statearr_35735_35762 = state_35729__$1;(statearr_35735_35762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 5))
{var inst_35694 = (state_35729[7]);var inst_35693 = (state_35729[8]);var inst_35697 = (state_35729[9]);var inst_35702 = (state_35729[10]);var inst_35701 = (inst_35693[inst_35694] = inst_35697);var inst_35702__$1 = (inst_35694 + 1);var inst_35703 = (inst_35702__$1 < n);var state_35729__$1 = (function (){var statearr_35736 = state_35729;(statearr_35736[11] = inst_35701);
(statearr_35736[10] = inst_35702__$1);
return statearr_35736;
})();if(cljs.core.truth_(inst_35703))
{var statearr_35737_35763 = state_35729__$1;(statearr_35737_35763[1] = 8);
} else
{var statearr_35738_35764 = state_35729__$1;(statearr_35738_35764[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 6))
{var inst_35694 = (state_35729[7]);var inst_35715 = (inst_35694 > 0);var state_35729__$1 = state_35729;if(cljs.core.truth_(inst_35715))
{var statearr_35740_35765 = state_35729__$1;(statearr_35740_35765[1] = 12);
} else
{var statearr_35741_35766 = state_35729__$1;(statearr_35741_35766[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 7))
{var inst_35725 = (state_35729[2]);var state_35729__$1 = state_35729;var statearr_35742_35767 = state_35729__$1;(statearr_35742_35767[2] = inst_35725);
(statearr_35742_35767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 8))
{var inst_35693 = (state_35729[8]);var inst_35702 = (state_35729[10]);var tmp35739 = inst_35693;var inst_35693__$1 = tmp35739;var inst_35694 = inst_35702;var state_35729__$1 = (function (){var statearr_35743 = state_35729;(statearr_35743[7] = inst_35694);
(statearr_35743[8] = inst_35693__$1);
return statearr_35743;
})();var statearr_35744_35768 = state_35729__$1;(statearr_35744_35768[2] = null);
(statearr_35744_35768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 9))
{var inst_35693 = (state_35729[8]);var inst_35707 = cljs.core.vec.call(null,inst_35693);var state_35729__$1 = state_35729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35729__$1,11,out,inst_35707);
} else
{if((state_val_35730 === 10))
{var inst_35713 = (state_35729[2]);var state_35729__$1 = state_35729;var statearr_35745_35769 = state_35729__$1;(statearr_35745_35769[2] = inst_35713);
(statearr_35745_35769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 11))
{var inst_35709 = (state_35729[2]);var inst_35710 = (new Array(n));var inst_35693 = inst_35710;var inst_35694 = 0;var state_35729__$1 = (function (){var statearr_35746 = state_35729;(statearr_35746[7] = inst_35694);
(statearr_35746[8] = inst_35693);
(statearr_35746[12] = inst_35709);
return statearr_35746;
})();var statearr_35747_35770 = state_35729__$1;(statearr_35747_35770[2] = null);
(statearr_35747_35770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 12))
{var inst_35693 = (state_35729[8]);var inst_35717 = cljs.core.vec.call(null,inst_35693);var state_35729__$1 = state_35729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35729__$1,15,out,inst_35717);
} else
{if((state_val_35730 === 13))
{var state_35729__$1 = state_35729;var statearr_35748_35771 = state_35729__$1;(statearr_35748_35771[2] = null);
(statearr_35748_35771[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 14))
{var inst_35722 = (state_35729[2]);var inst_35723 = cljs.core.async.close_BANG_.call(null,out);var state_35729__$1 = (function (){var statearr_35749 = state_35729;(statearr_35749[13] = inst_35722);
return statearr_35749;
})();var statearr_35750_35772 = state_35729__$1;(statearr_35750_35772[2] = inst_35723);
(statearr_35750_35772[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35730 === 15))
{var inst_35719 = (state_35729[2]);var state_35729__$1 = state_35729;var statearr_35751_35773 = state_35729__$1;(statearr_35751_35773[2] = inst_35719);
(statearr_35751_35773[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35755[0] = state_machine__5507__auto__);
(statearr_35755[1] = 1);
return statearr_35755;
});
var state_machine__5507__auto____1 = (function (state_35729){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35729);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35756){if((e35756 instanceof Object))
{var ex__5510__auto__ = e35756;var statearr_35757_35774 = state_35729;(statearr_35757_35774[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35729);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35775 = state_35729;
state_35729 = G__35775;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35729){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35758 = f__5522__auto__.call(null);(statearr_35758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35759);
return statearr_35758;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35918 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35888){var state_val_35889 = (state_35888[1]);if((state_val_35889 === 1))
{var inst_35847 = [];var inst_35848 = inst_35847;var inst_35849 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35888__$1 = (function (){var statearr_35890 = state_35888;(statearr_35890[7] = inst_35848);
(statearr_35890[8] = inst_35849);
return statearr_35890;
})();var statearr_35891_35919 = state_35888__$1;(statearr_35891_35919[2] = null);
(statearr_35891_35919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 2))
{var state_35888__$1 = state_35888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35888__$1,4,ch);
} else
{if((state_val_35889 === 3))
{var inst_35886 = (state_35888[2]);var state_35888__$1 = state_35888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35888__$1,inst_35886);
} else
{if((state_val_35889 === 4))
{var inst_35852 = (state_35888[9]);var inst_35852__$1 = (state_35888[2]);var inst_35853 = (inst_35852__$1 == null);var inst_35854 = cljs.core.not.call(null,inst_35853);var state_35888__$1 = (function (){var statearr_35892 = state_35888;(statearr_35892[9] = inst_35852__$1);
return statearr_35892;
})();if(inst_35854)
{var statearr_35893_35920 = state_35888__$1;(statearr_35893_35920[1] = 5);
} else
{var statearr_35894_35921 = state_35888__$1;(statearr_35894_35921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 5))
{var inst_35856 = (state_35888[10]);var inst_35852 = (state_35888[9]);var inst_35849 = (state_35888[8]);var inst_35856__$1 = f.call(null,inst_35852);var inst_35857 = cljs.core._EQ_.call(null,inst_35856__$1,inst_35849);var inst_35858 = cljs.core.keyword_identical_QMARK_.call(null,inst_35849,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35859 = (inst_35857) || (inst_35858);var state_35888__$1 = (function (){var statearr_35895 = state_35888;(statearr_35895[10] = inst_35856__$1);
return statearr_35895;
})();if(cljs.core.truth_(inst_35859))
{var statearr_35896_35922 = state_35888__$1;(statearr_35896_35922[1] = 8);
} else
{var statearr_35897_35923 = state_35888__$1;(statearr_35897_35923[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 6))
{var inst_35848 = (state_35888[7]);var inst_35873 = inst_35848.length;var inst_35874 = (inst_35873 > 0);var state_35888__$1 = state_35888;if(cljs.core.truth_(inst_35874))
{var statearr_35899_35924 = state_35888__$1;(statearr_35899_35924[1] = 12);
} else
{var statearr_35900_35925 = state_35888__$1;(statearr_35900_35925[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 7))
{var inst_35884 = (state_35888[2]);var state_35888__$1 = state_35888;var statearr_35901_35926 = state_35888__$1;(statearr_35901_35926[2] = inst_35884);
(statearr_35901_35926[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 8))
{var inst_35856 = (state_35888[10]);var inst_35852 = (state_35888[9]);var inst_35848 = (state_35888[7]);var inst_35861 = inst_35848.push(inst_35852);var tmp35898 = inst_35848;var inst_35848__$1 = tmp35898;var inst_35849 = inst_35856;var state_35888__$1 = (function (){var statearr_35902 = state_35888;(statearr_35902[11] = inst_35861);
(statearr_35902[7] = inst_35848__$1);
(statearr_35902[8] = inst_35849);
return statearr_35902;
})();var statearr_35903_35927 = state_35888__$1;(statearr_35903_35927[2] = null);
(statearr_35903_35927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 9))
{var inst_35848 = (state_35888[7]);var inst_35864 = cljs.core.vec.call(null,inst_35848);var state_35888__$1 = state_35888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35888__$1,11,out,inst_35864);
} else
{if((state_val_35889 === 10))
{var inst_35871 = (state_35888[2]);var state_35888__$1 = state_35888;var statearr_35904_35928 = state_35888__$1;(statearr_35904_35928[2] = inst_35871);
(statearr_35904_35928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 11))
{var inst_35856 = (state_35888[10]);var inst_35852 = (state_35888[9]);var inst_35866 = (state_35888[2]);var inst_35867 = [];var inst_35868 = inst_35867.push(inst_35852);var inst_35848 = inst_35867;var inst_35849 = inst_35856;var state_35888__$1 = (function (){var statearr_35905 = state_35888;(statearr_35905[7] = inst_35848);
(statearr_35905[8] = inst_35849);
(statearr_35905[12] = inst_35866);
(statearr_35905[13] = inst_35868);
return statearr_35905;
})();var statearr_35906_35929 = state_35888__$1;(statearr_35906_35929[2] = null);
(statearr_35906_35929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 12))
{var inst_35848 = (state_35888[7]);var inst_35876 = cljs.core.vec.call(null,inst_35848);var state_35888__$1 = state_35888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35888__$1,15,out,inst_35876);
} else
{if((state_val_35889 === 13))
{var state_35888__$1 = state_35888;var statearr_35907_35930 = state_35888__$1;(statearr_35907_35930[2] = null);
(statearr_35907_35930[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 14))
{var inst_35881 = (state_35888[2]);var inst_35882 = cljs.core.async.close_BANG_.call(null,out);var state_35888__$1 = (function (){var statearr_35908 = state_35888;(statearr_35908[14] = inst_35881);
return statearr_35908;
})();var statearr_35909_35931 = state_35888__$1;(statearr_35909_35931[2] = inst_35882);
(statearr_35909_35931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35889 === 15))
{var inst_35878 = (state_35888[2]);var state_35888__$1 = state_35888;var statearr_35910_35932 = state_35888__$1;(statearr_35910_35932[2] = inst_35878);
(statearr_35910_35932[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35914[0] = state_machine__5507__auto__);
(statearr_35914[1] = 1);
return statearr_35914;
});
var state_machine__5507__auto____1 = (function (state_35888){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35888);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35915){if((e35915 instanceof Object))
{var ex__5510__auto__ = e35915;var statearr_35916_35933 = state_35888;(statearr_35916_35933[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35915;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35934 = state_35888;
state_35888 = G__35934;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35888){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35917 = f__5522__auto__.call(null);(statearr_35917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35918);
return statearr_35917;
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
