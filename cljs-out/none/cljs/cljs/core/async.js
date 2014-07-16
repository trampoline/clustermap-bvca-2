// Compiled by ClojureScript 0.0-2261
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t50453 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50453 = (function (f,fn_handler,meta50454){
this.f = f;
this.fn_handler = fn_handler;
this.meta50454 = meta50454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50453.cljs$lang$type = true;
cljs.core.async.t50453.cljs$lang$ctorStr = "cljs.core.async/t50453";
cljs.core.async.t50453.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50453");
});
cljs.core.async.t50453.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t50453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t50453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50455){var self__ = this;
var _50455__$1 = this;return self__.meta50454;
});
cljs.core.async.t50453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50455,meta50454__$1){var self__ = this;
var _50455__$1 = this;return (new cljs.core.async.t50453(self__.f,self__.fn_handler,meta50454__$1));
});
cljs.core.async.__GT_t50453 = (function __GT_t50453(f__$1,fn_handler__$1,meta50454){return (new cljs.core.async.t50453(f__$1,fn_handler__$1,meta50454));
});
}
return (new cljs.core.async.t50453(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__50457 = buff;if(G__50457)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__50457.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__50457.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__50457);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__50457);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
{var val_50458 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_50458);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_50458,ret){
return (function (){return fn1.call(null,val_50458);
});})(val_50458,ret))
);
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
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___50459 = n;var x_50460 = (0);while(true){
if((x_50460 < n__4399__auto___50459))
{(a[x_50460] = (0));
{
var G__50461 = (x_50460 + (1));
x_50460 = G__50461;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__50462 = (i + (1));
i = G__50462;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t50466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50466 = (function (flag,alt_flag,meta50467){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta50467 = meta50467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50466.cljs$lang$type = true;
cljs.core.async.t50466.cljs$lang$ctorStr = "cljs.core.async/t50466";
cljs.core.async.t50466.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50466");
});})(flag))
;
cljs.core.async.t50466.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t50466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t50466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50468){var self__ = this;
var _50468__$1 = this;return self__.meta50467;
});})(flag))
;
cljs.core.async.t50466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50468,meta50467__$1){var self__ = this;
var _50468__$1 = this;return (new cljs.core.async.t50466(self__.flag,self__.alt_flag,meta50467__$1));
});})(flag))
;
cljs.core.async.__GT_t50466 = ((function (flag){
return (function __GT_t50466(flag__$1,alt_flag__$1,meta50467){return (new cljs.core.async.t50466(flag__$1,alt_flag__$1,meta50467));
});})(flag))
;
}
return (new cljs.core.async.t50466(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t50472 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50472 = (function (cb,flag,alt_handler,meta50473){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta50473 = meta50473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50472.cljs$lang$type = true;
cljs.core.async.t50472.cljs$lang$ctorStr = "cljs.core.async/t50472";
cljs.core.async.t50472.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50472");
});
cljs.core.async.t50472.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t50472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t50472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50474){var self__ = this;
var _50474__$1 = this;return self__.meta50473;
});
cljs.core.async.t50472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50474,meta50473__$1){var self__ = this;
var _50474__$1 = this;return (new cljs.core.async.t50472(self__.cb,self__.flag,self__.alt_handler,meta50473__$1));
});
cljs.core.async.__GT_t50472 = (function __GT_t50472(cb__$1,flag__$1,alt_handler__$1,meta50473){return (new cljs.core.async.t50472(cb__$1,flag__$1,alt_handler__$1,meta50473));
});
}
return (new cljs.core.async.t50472(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50475_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50475_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__50476 = (i + (1));
i = G__50476;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__50477){var map__50479 = p__50477;var map__50479__$1 = ((cljs.core.seq_QMARK_.call(null,map__50479))?cljs.core.apply.call(null,cljs.core.hash_map,map__50479):map__50479);var opts = map__50479__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__50477 = null;if (arguments.length > 1) {
  p__50477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__50477);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__50480){
var ports = cljs.core.first(arglist__50480);
var p__50477 = cljs.core.rest(arglist__50480);
return alts_BANG___delegate(ports,p__50477);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t50488 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50488 = (function (ch,f,map_LT_,meta50489){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50489 = meta50489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50488.cljs$lang$type = true;
cljs.core.async.t50488.cljs$lang$ctorStr = "cljs.core.async/t50488";
cljs.core.async.t50488.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50488");
});
cljs.core.async.t50488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t50488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t50491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50491 = (function (fn1,_,meta50489,ch,f,map_LT_,meta50492){
this.fn1 = fn1;
this._ = _;
this.meta50489 = meta50489;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50492 = meta50492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50491.cljs$lang$type = true;
cljs.core.async.t50491.cljs$lang$ctorStr = "cljs.core.async/t50491";
cljs.core.async.t50491.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50491");
});})(___$1))
;
cljs.core.async.t50491.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t50491.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t50491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__50481_SHARP_){return f1.call(null,(((p1__50481_SHARP_ == null))?null:self__.f.call(null,p1__50481_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t50491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50493){var self__ = this;
var _50493__$1 = this;return self__.meta50492;
});})(___$1))
;
cljs.core.async.t50491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50493,meta50492__$1){var self__ = this;
var _50493__$1 = this;return (new cljs.core.async.t50491(self__.fn1,self__._,self__.meta50489,self__.ch,self__.f,self__.map_LT_,meta50492__$1));
});})(___$1))
;
cljs.core.async.__GT_t50491 = ((function (___$1){
return (function __GT_t50491(fn1__$1,___$2,meta50489__$1,ch__$2,f__$2,map_LT___$2,meta50492){return (new cljs.core.async.t50491(fn1__$1,___$2,meta50489__$1,ch__$2,f__$2,map_LT___$2,meta50492));
});})(___$1))
;
}
return (new cljs.core.async.t50491(fn1,___$1,self__.meta50489,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t50488.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50490){var self__ = this;
var _50490__$1 = this;return self__.meta50489;
});
cljs.core.async.t50488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50490,meta50489__$1){var self__ = this;
var _50490__$1 = this;return (new cljs.core.async.t50488(self__.ch,self__.f,self__.map_LT_,meta50489__$1));
});
cljs.core.async.__GT_t50488 = (function __GT_t50488(ch__$1,f__$1,map_LT___$1,meta50489){return (new cljs.core.async.t50488(ch__$1,f__$1,map_LT___$1,meta50489));
});
}
return (new cljs.core.async.t50488(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t50497 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50497 = (function (ch,f,map_GT_,meta50498){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta50498 = meta50498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50497.cljs$lang$type = true;
cljs.core.async.t50497.cljs$lang$ctorStr = "cljs.core.async/t50497";
cljs.core.async.t50497.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50497");
});
cljs.core.async.t50497.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t50497.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t50497.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50499){var self__ = this;
var _50499__$1 = this;return self__.meta50498;
});
cljs.core.async.t50497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50499,meta50498__$1){var self__ = this;
var _50499__$1 = this;return (new cljs.core.async.t50497(self__.ch,self__.f,self__.map_GT_,meta50498__$1));
});
cljs.core.async.__GT_t50497 = (function __GT_t50497(ch__$1,f__$1,map_GT___$1,meta50498){return (new cljs.core.async.t50497(ch__$1,f__$1,map_GT___$1,meta50498));
});
}
return (new cljs.core.async.t50497(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t50503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50503 = (function (ch,p,filter_GT_,meta50504){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta50504 = meta50504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50503.cljs$lang$type = true;
cljs.core.async.t50503.cljs$lang$ctorStr = "cljs.core.async/t50503";
cljs.core.async.t50503.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t50503");
});
cljs.core.async.t50503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t50503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t50503.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t50503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50505){var self__ = this;
var _50505__$1 = this;return self__.meta50504;
});
cljs.core.async.t50503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50505,meta50504__$1){var self__ = this;
var _50505__$1 = this;return (new cljs.core.async.t50503(self__.ch,self__.p,self__.filter_GT_,meta50504__$1));
});
cljs.core.async.__GT_t50503 = (function __GT_t50503(ch__$1,p__$1,filter_GT___$1,meta50504){return (new cljs.core.async.t50503(ch__$1,p__$1,filter_GT___$1,meta50504));
});
}
return (new cljs.core.async.t50503(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___50588 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50588,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50588,out){
return (function (state_50567){var state_val_50568 = (state_50567[(1)]);if((state_val_50568 === (7)))
{var inst_50563 = (state_50567[(2)]);var state_50567__$1 = state_50567;var statearr_50569_50589 = state_50567__$1;(statearr_50569_50589[(2)] = inst_50563);
(statearr_50569_50589[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (1)))
{var state_50567__$1 = state_50567;var statearr_50570_50590 = state_50567__$1;(statearr_50570_50590[(2)] = null);
(statearr_50570_50590[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (4)))
{var inst_50549 = (state_50567[(7)]);var inst_50549__$1 = (state_50567[(2)]);var inst_50550 = (inst_50549__$1 == null);var state_50567__$1 = (function (){var statearr_50571 = state_50567;(statearr_50571[(7)] = inst_50549__$1);
return statearr_50571;
})();if(cljs.core.truth_(inst_50550))
{var statearr_50572_50591 = state_50567__$1;(statearr_50572_50591[(1)] = (5));
} else
{var statearr_50573_50592 = state_50567__$1;(statearr_50573_50592[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (6)))
{var inst_50549 = (state_50567[(7)]);var inst_50554 = p.call(null,inst_50549);var state_50567__$1 = state_50567;if(cljs.core.truth_(inst_50554))
{var statearr_50574_50593 = state_50567__$1;(statearr_50574_50593[(1)] = (8));
} else
{var statearr_50575_50594 = state_50567__$1;(statearr_50575_50594[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (3)))
{var inst_50565 = (state_50567[(2)]);var state_50567__$1 = state_50567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50567__$1,inst_50565);
} else
{if((state_val_50568 === (2)))
{var state_50567__$1 = state_50567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50567__$1,(4),ch);
} else
{if((state_val_50568 === (11)))
{var inst_50557 = (state_50567[(2)]);var state_50567__$1 = state_50567;var statearr_50576_50595 = state_50567__$1;(statearr_50576_50595[(2)] = inst_50557);
(statearr_50576_50595[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (9)))
{var state_50567__$1 = state_50567;var statearr_50577_50596 = state_50567__$1;(statearr_50577_50596[(2)] = null);
(statearr_50577_50596[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (5)))
{var inst_50552 = cljs.core.async.close_BANG_.call(null,out);var state_50567__$1 = state_50567;var statearr_50578_50597 = state_50567__$1;(statearr_50578_50597[(2)] = inst_50552);
(statearr_50578_50597[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (10)))
{var inst_50560 = (state_50567[(2)]);var state_50567__$1 = (function (){var statearr_50579 = state_50567;(statearr_50579[(8)] = inst_50560);
return statearr_50579;
})();var statearr_50580_50598 = state_50567__$1;(statearr_50580_50598[(2)] = null);
(statearr_50580_50598[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50568 === (8)))
{var inst_50549 = (state_50567[(7)]);var state_50567__$1 = state_50567;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50567__$1,(11),out,inst_50549);
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
});})(c__5693__auto___50588,out))
;return ((function (switch__5678__auto__,c__5693__auto___50588,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50584 = [null,null,null,null,null,null,null,null,null];(statearr_50584[(0)] = state_machine__5679__auto__);
(statearr_50584[(1)] = (1));
return statearr_50584;
});
var state_machine__5679__auto____1 = (function (state_50567){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50567);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50585){if((e50585 instanceof Object))
{var ex__5682__auto__ = e50585;var statearr_50586_50599 = state_50567;(statearr_50586_50599[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50567);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50600 = state_50567;
state_50567 = G__50600;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50567){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50588,out))
})();var state__5695__auto__ = (function (){var statearr_50587 = f__5694__auto__.call(null);(statearr_50587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50588);
return statearr_50587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50588,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_50752){var state_val_50753 = (state_50752[(1)]);if((state_val_50753 === (7)))
{var inst_50748 = (state_50752[(2)]);var state_50752__$1 = state_50752;var statearr_50754_50791 = state_50752__$1;(statearr_50754_50791[(2)] = inst_50748);
(statearr_50754_50791[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (20)))
{var inst_50723 = (state_50752[(7)]);var inst_50734 = (state_50752[(2)]);var inst_50735 = cljs.core.next.call(null,inst_50723);var inst_50709 = inst_50735;var inst_50710 = null;var inst_50711 = (0);var inst_50712 = (0);var state_50752__$1 = (function (){var statearr_50755 = state_50752;(statearr_50755[(8)] = inst_50711);
(statearr_50755[(9)] = inst_50712);
(statearr_50755[(10)] = inst_50734);
(statearr_50755[(11)] = inst_50710);
(statearr_50755[(12)] = inst_50709);
return statearr_50755;
})();var statearr_50756_50792 = state_50752__$1;(statearr_50756_50792[(2)] = null);
(statearr_50756_50792[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (1)))
{var state_50752__$1 = state_50752;var statearr_50757_50793 = state_50752__$1;(statearr_50757_50793[(2)] = null);
(statearr_50757_50793[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (4)))
{var inst_50698 = (state_50752[(13)]);var inst_50698__$1 = (state_50752[(2)]);var inst_50699 = (inst_50698__$1 == null);var state_50752__$1 = (function (){var statearr_50761 = state_50752;(statearr_50761[(13)] = inst_50698__$1);
return statearr_50761;
})();if(cljs.core.truth_(inst_50699))
{var statearr_50762_50794 = state_50752__$1;(statearr_50762_50794[(1)] = (5));
} else
{var statearr_50763_50795 = state_50752__$1;(statearr_50763_50795[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (15)))
{var state_50752__$1 = state_50752;var statearr_50764_50796 = state_50752__$1;(statearr_50764_50796[(2)] = null);
(statearr_50764_50796[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (13)))
{var inst_50711 = (state_50752[(8)]);var inst_50712 = (state_50752[(9)]);var inst_50710 = (state_50752[(11)]);var inst_50709 = (state_50752[(12)]);var inst_50719 = (state_50752[(2)]);var inst_50720 = (inst_50712 + (1));var tmp50758 = inst_50711;var tmp50759 = inst_50710;var tmp50760 = inst_50709;var inst_50709__$1 = tmp50760;var inst_50710__$1 = tmp50759;var inst_50711__$1 = tmp50758;var inst_50712__$1 = inst_50720;var state_50752__$1 = (function (){var statearr_50765 = state_50752;(statearr_50765[(14)] = inst_50719);
(statearr_50765[(8)] = inst_50711__$1);
(statearr_50765[(9)] = inst_50712__$1);
(statearr_50765[(11)] = inst_50710__$1);
(statearr_50765[(12)] = inst_50709__$1);
return statearr_50765;
})();var statearr_50766_50797 = state_50752__$1;(statearr_50766_50797[(2)] = null);
(statearr_50766_50797[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (6)))
{var inst_50698 = (state_50752[(13)]);var inst_50703 = f.call(null,inst_50698);var inst_50708 = cljs.core.seq.call(null,inst_50703);var inst_50709 = inst_50708;var inst_50710 = null;var inst_50711 = (0);var inst_50712 = (0);var state_50752__$1 = (function (){var statearr_50767 = state_50752;(statearr_50767[(8)] = inst_50711);
(statearr_50767[(9)] = inst_50712);
(statearr_50767[(11)] = inst_50710);
(statearr_50767[(12)] = inst_50709);
return statearr_50767;
})();var statearr_50768_50798 = state_50752__$1;(statearr_50768_50798[(2)] = null);
(statearr_50768_50798[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (17)))
{var inst_50723 = (state_50752[(7)]);var inst_50727 = cljs.core.chunk_first.call(null,inst_50723);var inst_50728 = cljs.core.chunk_rest.call(null,inst_50723);var inst_50729 = cljs.core.count.call(null,inst_50727);var inst_50709 = inst_50728;var inst_50710 = inst_50727;var inst_50711 = inst_50729;var inst_50712 = (0);var state_50752__$1 = (function (){var statearr_50769 = state_50752;(statearr_50769[(8)] = inst_50711);
(statearr_50769[(9)] = inst_50712);
(statearr_50769[(11)] = inst_50710);
(statearr_50769[(12)] = inst_50709);
return statearr_50769;
})();var statearr_50770_50799 = state_50752__$1;(statearr_50770_50799[(2)] = null);
(statearr_50770_50799[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (3)))
{var inst_50750 = (state_50752[(2)]);var state_50752__$1 = state_50752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50752__$1,inst_50750);
} else
{if((state_val_50753 === (12)))
{var inst_50743 = (state_50752[(2)]);var state_50752__$1 = state_50752;var statearr_50771_50800 = state_50752__$1;(statearr_50771_50800[(2)] = inst_50743);
(statearr_50771_50800[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (2)))
{var state_50752__$1 = state_50752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50752__$1,(4),in$);
} else
{if((state_val_50753 === (19)))
{var inst_50738 = (state_50752[(2)]);var state_50752__$1 = state_50752;var statearr_50772_50801 = state_50752__$1;(statearr_50772_50801[(2)] = inst_50738);
(statearr_50772_50801[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (11)))
{var inst_50723 = (state_50752[(7)]);var inst_50709 = (state_50752[(12)]);var inst_50723__$1 = cljs.core.seq.call(null,inst_50709);var state_50752__$1 = (function (){var statearr_50773 = state_50752;(statearr_50773[(7)] = inst_50723__$1);
return statearr_50773;
})();if(inst_50723__$1)
{var statearr_50774_50802 = state_50752__$1;(statearr_50774_50802[(1)] = (14));
} else
{var statearr_50775_50803 = state_50752__$1;(statearr_50775_50803[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (9)))
{var inst_50745 = (state_50752[(2)]);var state_50752__$1 = (function (){var statearr_50776 = state_50752;(statearr_50776[(15)] = inst_50745);
return statearr_50776;
})();var statearr_50777_50804 = state_50752__$1;(statearr_50777_50804[(2)] = null);
(statearr_50777_50804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (5)))
{var inst_50701 = cljs.core.async.close_BANG_.call(null,out);var state_50752__$1 = state_50752;var statearr_50778_50805 = state_50752__$1;(statearr_50778_50805[(2)] = inst_50701);
(statearr_50778_50805[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (14)))
{var inst_50723 = (state_50752[(7)]);var inst_50725 = cljs.core.chunked_seq_QMARK_.call(null,inst_50723);var state_50752__$1 = state_50752;if(inst_50725)
{var statearr_50779_50806 = state_50752__$1;(statearr_50779_50806[(1)] = (17));
} else
{var statearr_50780_50807 = state_50752__$1;(statearr_50780_50807[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (16)))
{var inst_50741 = (state_50752[(2)]);var state_50752__$1 = state_50752;var statearr_50781_50808 = state_50752__$1;(statearr_50781_50808[(2)] = inst_50741);
(statearr_50781_50808[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50753 === (10)))
{var inst_50712 = (state_50752[(9)]);var inst_50710 = (state_50752[(11)]);var inst_50717 = cljs.core._nth.call(null,inst_50710,inst_50712);var state_50752__$1 = state_50752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50752__$1,(13),out,inst_50717);
} else
{if((state_val_50753 === (18)))
{var inst_50723 = (state_50752[(7)]);var inst_50732 = cljs.core.first.call(null,inst_50723);var state_50752__$1 = state_50752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50752__$1,(20),out,inst_50732);
} else
{if((state_val_50753 === (8)))
{var inst_50711 = (state_50752[(8)]);var inst_50712 = (state_50752[(9)]);var inst_50714 = (inst_50712 < inst_50711);var inst_50715 = inst_50714;var state_50752__$1 = state_50752;if(cljs.core.truth_(inst_50715))
{var statearr_50782_50809 = state_50752__$1;(statearr_50782_50809[(1)] = (10));
} else
{var statearr_50783_50810 = state_50752__$1;(statearr_50783_50810[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50787[(0)] = state_machine__5679__auto__);
(statearr_50787[(1)] = (1));
return statearr_50787;
});
var state_machine__5679__auto____1 = (function (state_50752){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50752);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50788){if((e50788 instanceof Object))
{var ex__5682__auto__ = e50788;var statearr_50789_50811 = state_50752;(statearr_50789_50811[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50752);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50812 = state_50752;
state_50752 = G__50812;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50752){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_50790 = f__5694__auto__.call(null);(statearr_50790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_50790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___50893 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50893){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50893){
return (function (state_50872){var state_val_50873 = (state_50872[(1)]);if((state_val_50873 === (7)))
{var inst_50868 = (state_50872[(2)]);var state_50872__$1 = state_50872;var statearr_50874_50894 = state_50872__$1;(statearr_50874_50894[(2)] = inst_50868);
(statearr_50874_50894[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50873 === (1)))
{var state_50872__$1 = state_50872;var statearr_50875_50895 = state_50872__$1;(statearr_50875_50895[(2)] = null);
(statearr_50875_50895[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50873 === (4)))
{var inst_50855 = (state_50872[(7)]);var inst_50855__$1 = (state_50872[(2)]);var inst_50856 = (inst_50855__$1 == null);var state_50872__$1 = (function (){var statearr_50876 = state_50872;(statearr_50876[(7)] = inst_50855__$1);
return statearr_50876;
})();if(cljs.core.truth_(inst_50856))
{var statearr_50877_50896 = state_50872__$1;(statearr_50877_50896[(1)] = (5));
} else
{var statearr_50878_50897 = state_50872__$1;(statearr_50878_50897[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50873 === (6)))
{var inst_50855 = (state_50872[(7)]);var state_50872__$1 = state_50872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50872__$1,(11),to,inst_50855);
} else
{if((state_val_50873 === (3)))
{var inst_50870 = (state_50872[(2)]);var state_50872__$1 = state_50872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50872__$1,inst_50870);
} else
{if((state_val_50873 === (2)))
{var state_50872__$1 = state_50872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50872__$1,(4),from);
} else
{if((state_val_50873 === (11)))
{var inst_50865 = (state_50872[(2)]);var state_50872__$1 = (function (){var statearr_50879 = state_50872;(statearr_50879[(8)] = inst_50865);
return statearr_50879;
})();var statearr_50880_50898 = state_50872__$1;(statearr_50880_50898[(2)] = null);
(statearr_50880_50898[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50873 === (9)))
{var state_50872__$1 = state_50872;var statearr_50881_50899 = state_50872__$1;(statearr_50881_50899[(2)] = null);
(statearr_50881_50899[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50873 === (5)))
{var state_50872__$1 = state_50872;if(cljs.core.truth_(close_QMARK_))
{var statearr_50882_50900 = state_50872__$1;(statearr_50882_50900[(1)] = (8));
} else
{var statearr_50883_50901 = state_50872__$1;(statearr_50883_50901[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50873 === (10)))
{var inst_50862 = (state_50872[(2)]);var state_50872__$1 = state_50872;var statearr_50884_50902 = state_50872__$1;(statearr_50884_50902[(2)] = inst_50862);
(statearr_50884_50902[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50873 === (8)))
{var inst_50859 = cljs.core.async.close_BANG_.call(null,to);var state_50872__$1 = state_50872;var statearr_50885_50903 = state_50872__$1;(statearr_50885_50903[(2)] = inst_50859);
(statearr_50885_50903[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___50893))
;return ((function (switch__5678__auto__,c__5693__auto___50893){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50889 = [null,null,null,null,null,null,null,null,null];(statearr_50889[(0)] = state_machine__5679__auto__);
(statearr_50889[(1)] = (1));
return statearr_50889;
});
var state_machine__5679__auto____1 = (function (state_50872){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50872);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50890){if((e50890 instanceof Object))
{var ex__5682__auto__ = e50890;var statearr_50891_50904 = state_50872;(statearr_50891_50904[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50905 = state_50872;
state_50872 = G__50905;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50872){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50893))
})();var state__5695__auto__ = (function (){var statearr_50892 = f__5694__auto__.call(null);(statearr_50892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50893);
return statearr_50892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50893))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___50992 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50992,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50992,tc,fc){
return (function (state_50970){var state_val_50971 = (state_50970[(1)]);if((state_val_50971 === (7)))
{var inst_50966 = (state_50970[(2)]);var state_50970__$1 = state_50970;var statearr_50972_50993 = state_50970__$1;(statearr_50972_50993[(2)] = inst_50966);
(statearr_50972_50993[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50971 === (1)))
{var state_50970__$1 = state_50970;var statearr_50973_50994 = state_50970__$1;(statearr_50973_50994[(2)] = null);
(statearr_50973_50994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50971 === (4)))
{var inst_50951 = (state_50970[(7)]);var inst_50951__$1 = (state_50970[(2)]);var inst_50952 = (inst_50951__$1 == null);var state_50970__$1 = (function (){var statearr_50974 = state_50970;(statearr_50974[(7)] = inst_50951__$1);
return statearr_50974;
})();if(cljs.core.truth_(inst_50952))
{var statearr_50975_50995 = state_50970__$1;(statearr_50975_50995[(1)] = (5));
} else
{var statearr_50976_50996 = state_50970__$1;(statearr_50976_50996[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50971 === (6)))
{var inst_50951 = (state_50970[(7)]);var inst_50957 = p.call(null,inst_50951);var state_50970__$1 = state_50970;if(cljs.core.truth_(inst_50957))
{var statearr_50977_50997 = state_50970__$1;(statearr_50977_50997[(1)] = (9));
} else
{var statearr_50978_50998 = state_50970__$1;(statearr_50978_50998[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50971 === (3)))
{var inst_50968 = (state_50970[(2)]);var state_50970__$1 = state_50970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50970__$1,inst_50968);
} else
{if((state_val_50971 === (2)))
{var state_50970__$1 = state_50970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50970__$1,(4),ch);
} else
{if((state_val_50971 === (11)))
{var inst_50951 = (state_50970[(7)]);var inst_50961 = (state_50970[(2)]);var state_50970__$1 = state_50970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50970__$1,(8),inst_50961,inst_50951);
} else
{if((state_val_50971 === (9)))
{var state_50970__$1 = state_50970;var statearr_50979_50999 = state_50970__$1;(statearr_50979_50999[(2)] = tc);
(statearr_50979_50999[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50971 === (5)))
{var inst_50954 = cljs.core.async.close_BANG_.call(null,tc);var inst_50955 = cljs.core.async.close_BANG_.call(null,fc);var state_50970__$1 = (function (){var statearr_50980 = state_50970;(statearr_50980[(8)] = inst_50954);
return statearr_50980;
})();var statearr_50981_51000 = state_50970__$1;(statearr_50981_51000[(2)] = inst_50955);
(statearr_50981_51000[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50971 === (10)))
{var state_50970__$1 = state_50970;var statearr_50982_51001 = state_50970__$1;(statearr_50982_51001[(2)] = fc);
(statearr_50982_51001[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50971 === (8)))
{var inst_50963 = (state_50970[(2)]);var state_50970__$1 = (function (){var statearr_50983 = state_50970;(statearr_50983[(9)] = inst_50963);
return statearr_50983;
})();var statearr_50984_51002 = state_50970__$1;(statearr_50984_51002[(2)] = null);
(statearr_50984_51002[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___50992,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___50992,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50988 = [null,null,null,null,null,null,null,null,null,null];(statearr_50988[(0)] = state_machine__5679__auto__);
(statearr_50988[(1)] = (1));
return statearr_50988;
});
var state_machine__5679__auto____1 = (function (state_50970){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50989){if((e50989 instanceof Object))
{var ex__5682__auto__ = e50989;var statearr_50990_51003 = state_50970;(statearr_50990_51003[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51004 = state_50970;
state_50970 = G__51004;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50970){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50992,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_50991 = f__5694__auto__.call(null);(statearr_50991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50992);
return statearr_50991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50992,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_51051){var state_val_51052 = (state_51051[(1)]);if((state_val_51052 === (7)))
{var inst_51047 = (state_51051[(2)]);var state_51051__$1 = state_51051;var statearr_51053_51069 = state_51051__$1;(statearr_51053_51069[(2)] = inst_51047);
(statearr_51053_51069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51052 === (6)))
{var inst_51040 = (state_51051[(7)]);var inst_51037 = (state_51051[(8)]);var inst_51044 = f.call(null,inst_51037,inst_51040);var inst_51037__$1 = inst_51044;var state_51051__$1 = (function (){var statearr_51054 = state_51051;(statearr_51054[(8)] = inst_51037__$1);
return statearr_51054;
})();var statearr_51055_51070 = state_51051__$1;(statearr_51055_51070[(2)] = null);
(statearr_51055_51070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51052 === (5)))
{var inst_51037 = (state_51051[(8)]);var state_51051__$1 = state_51051;var statearr_51056_51071 = state_51051__$1;(statearr_51056_51071[(2)] = inst_51037);
(statearr_51056_51071[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51052 === (4)))
{var inst_51040 = (state_51051[(7)]);var inst_51040__$1 = (state_51051[(2)]);var inst_51041 = (inst_51040__$1 == null);var state_51051__$1 = (function (){var statearr_51057 = state_51051;(statearr_51057[(7)] = inst_51040__$1);
return statearr_51057;
})();if(cljs.core.truth_(inst_51041))
{var statearr_51058_51072 = state_51051__$1;(statearr_51058_51072[(1)] = (5));
} else
{var statearr_51059_51073 = state_51051__$1;(statearr_51059_51073[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51052 === (3)))
{var inst_51049 = (state_51051[(2)]);var state_51051__$1 = state_51051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51051__$1,inst_51049);
} else
{if((state_val_51052 === (2)))
{var state_51051__$1 = state_51051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51051__$1,(4),ch);
} else
{if((state_val_51052 === (1)))
{var inst_51037 = init;var state_51051__$1 = (function (){var statearr_51060 = state_51051;(statearr_51060[(8)] = inst_51037);
return statearr_51060;
})();var statearr_51061_51074 = state_51051__$1;(statearr_51061_51074[(2)] = null);
(statearr_51061_51074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51065 = [null,null,null,null,null,null,null,null,null];(statearr_51065[(0)] = state_machine__5679__auto__);
(statearr_51065[(1)] = (1));
return statearr_51065;
});
var state_machine__5679__auto____1 = (function (state_51051){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51066){if((e51066 instanceof Object))
{var ex__5682__auto__ = e51066;var statearr_51067_51075 = state_51051;(statearr_51067_51075[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51051);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51076 = state_51051;
state_51051 = G__51076;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51051){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51068 = f__5694__auto__.call(null);(statearr_51068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_51138){var state_val_51139 = (state_51138[(1)]);if((state_val_51139 === (7)))
{var inst_51119 = (state_51138[(7)]);var inst_51124 = (state_51138[(2)]);var inst_51125 = cljs.core.next.call(null,inst_51119);var inst_51119__$1 = inst_51125;var state_51138__$1 = (function (){var statearr_51140 = state_51138;(statearr_51140[(8)] = inst_51124);
(statearr_51140[(7)] = inst_51119__$1);
return statearr_51140;
})();var statearr_51141_51159 = state_51138__$1;(statearr_51141_51159[(2)] = null);
(statearr_51141_51159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51139 === (1)))
{var inst_51118 = cljs.core.seq.call(null,coll);var inst_51119 = inst_51118;var state_51138__$1 = (function (){var statearr_51142 = state_51138;(statearr_51142[(7)] = inst_51119);
return statearr_51142;
})();var statearr_51143_51160 = state_51138__$1;(statearr_51143_51160[(2)] = null);
(statearr_51143_51160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51139 === (4)))
{var inst_51119 = (state_51138[(7)]);var inst_51122 = cljs.core.first.call(null,inst_51119);var state_51138__$1 = state_51138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51138__$1,(7),ch,inst_51122);
} else
{if((state_val_51139 === (6)))
{var inst_51134 = (state_51138[(2)]);var state_51138__$1 = state_51138;var statearr_51144_51161 = state_51138__$1;(statearr_51144_51161[(2)] = inst_51134);
(statearr_51144_51161[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51139 === (3)))
{var inst_51136 = (state_51138[(2)]);var state_51138__$1 = state_51138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51138__$1,inst_51136);
} else
{if((state_val_51139 === (2)))
{var inst_51119 = (state_51138[(7)]);var state_51138__$1 = state_51138;if(cljs.core.truth_(inst_51119))
{var statearr_51145_51162 = state_51138__$1;(statearr_51145_51162[(1)] = (4));
} else
{var statearr_51146_51163 = state_51138__$1;(statearr_51146_51163[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51139 === (9)))
{var state_51138__$1 = state_51138;var statearr_51147_51164 = state_51138__$1;(statearr_51147_51164[(2)] = null);
(statearr_51147_51164[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51139 === (5)))
{var state_51138__$1 = state_51138;if(cljs.core.truth_(close_QMARK_))
{var statearr_51148_51165 = state_51138__$1;(statearr_51148_51165[(1)] = (8));
} else
{var statearr_51149_51166 = state_51138__$1;(statearr_51149_51166[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51139 === (10)))
{var inst_51132 = (state_51138[(2)]);var state_51138__$1 = state_51138;var statearr_51150_51167 = state_51138__$1;(statearr_51150_51167[(2)] = inst_51132);
(statearr_51150_51167[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51139 === (8)))
{var inst_51129 = cljs.core.async.close_BANG_.call(null,ch);var state_51138__$1 = state_51138;var statearr_51151_51168 = state_51138__$1;(statearr_51151_51168[(2)] = inst_51129);
(statearr_51151_51168[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51155 = [null,null,null,null,null,null,null,null,null];(statearr_51155[(0)] = state_machine__5679__auto__);
(statearr_51155[(1)] = (1));
return statearr_51155;
});
var state_machine__5679__auto____1 = (function (state_51138){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51138);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51156){if((e51156 instanceof Object))
{var ex__5682__auto__ = e51156;var statearr_51157_51169 = state_51138;(statearr_51157_51169[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51170 = state_51138;
state_51138 = G__51170;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51138){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_51158 = f__5694__auto__.call(null);(statearr_51158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_51158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj51172 = {};return obj51172;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj51174 = {};return obj51174;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t51398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51398 = (function (cs,ch,mult,meta51399){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta51399 = meta51399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51398.cljs$lang$type = true;
cljs.core.async.t51398.cljs$lang$ctorStr = "cljs.core.async/t51398";
cljs.core.async.t51398.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51398");
});})(cs))
;
cljs.core.async.t51398.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t51398.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t51398.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t51398.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t51398.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t51398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t51398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51400){var self__ = this;
var _51400__$1 = this;return self__.meta51399;
});})(cs))
;
cljs.core.async.t51398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51400,meta51399__$1){var self__ = this;
var _51400__$1 = this;return (new cljs.core.async.t51398(self__.cs,self__.ch,self__.mult,meta51399__$1));
});})(cs))
;
cljs.core.async.__GT_t51398 = ((function (cs){
return (function __GT_t51398(cs__$1,ch__$1,mult__$1,meta51399){return (new cljs.core.async.t51398(cs__$1,ch__$1,mult__$1,meta51399));
});})(cs))
;
}
return (new cljs.core.async.t51398(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___51621 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51621,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51621,cs,m,dchan,dctr,done){
return (function (state_51535){var state_val_51536 = (state_51535[(1)]);if((state_val_51536 === (7)))
{var inst_51531 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51537_51622 = state_51535__$1;(statearr_51537_51622[(2)] = inst_51531);
(statearr_51537_51622[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (20)))
{var inst_51432 = (state_51535[(7)]);var inst_51442 = cljs.core.first.call(null,inst_51432);var inst_51443 = cljs.core.nth.call(null,inst_51442,(0),null);var inst_51444 = cljs.core.nth.call(null,inst_51442,(1),null);var state_51535__$1 = (function (){var statearr_51538 = state_51535;(statearr_51538[(8)] = inst_51443);
return statearr_51538;
})();if(cljs.core.truth_(inst_51444))
{var statearr_51539_51623 = state_51535__$1;(statearr_51539_51623[(1)] = (22));
} else
{var statearr_51540_51624 = state_51535__$1;(statearr_51540_51624[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (27)))
{var inst_51474 = (state_51535[(9)]);var inst_51472 = (state_51535[(10)]);var inst_51479 = cljs.core._nth.call(null,inst_51472,inst_51474);var state_51535__$1 = (function (){var statearr_51541 = state_51535;(statearr_51541[(11)] = inst_51479);
return statearr_51541;
})();var statearr_51542_51625 = state_51535__$1;(statearr_51542_51625[(2)] = null);
(statearr_51542_51625[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (1)))
{var state_51535__$1 = state_51535;var statearr_51543_51626 = state_51535__$1;(statearr_51543_51626[(2)] = null);
(statearr_51543_51626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (24)))
{var inst_51432 = (state_51535[(7)]);var inst_51449 = (state_51535[(2)]);var inst_51450 = cljs.core.next.call(null,inst_51432);var inst_51412 = inst_51450;var inst_51413 = null;var inst_51414 = (0);var inst_51415 = (0);var state_51535__$1 = (function (){var statearr_51544 = state_51535;(statearr_51544[(12)] = inst_51412);
(statearr_51544[(13)] = inst_51413);
(statearr_51544[(14)] = inst_51449);
(statearr_51544[(15)] = inst_51415);
(statearr_51544[(16)] = inst_51414);
return statearr_51544;
})();var statearr_51545_51627 = state_51535__$1;(statearr_51545_51627[(2)] = null);
(statearr_51545_51627[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (39)))
{var inst_51492 = (state_51535[(17)]);var inst_51510 = (state_51535[(2)]);var inst_51511 = cljs.core.next.call(null,inst_51492);var inst_51471 = inst_51511;var inst_51472 = null;var inst_51473 = (0);var inst_51474 = (0);var state_51535__$1 = (function (){var statearr_51549 = state_51535;(statearr_51549[(18)] = inst_51473);
(statearr_51549[(9)] = inst_51474);
(statearr_51549[(19)] = inst_51510);
(statearr_51549[(10)] = inst_51472);
(statearr_51549[(20)] = inst_51471);
return statearr_51549;
})();var statearr_51550_51628 = state_51535__$1;(statearr_51550_51628[(2)] = null);
(statearr_51550_51628[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (4)))
{var inst_51403 = (state_51535[(21)]);var inst_51403__$1 = (state_51535[(2)]);var inst_51404 = (inst_51403__$1 == null);var state_51535__$1 = (function (){var statearr_51551 = state_51535;(statearr_51551[(21)] = inst_51403__$1);
return statearr_51551;
})();if(cljs.core.truth_(inst_51404))
{var statearr_51552_51629 = state_51535__$1;(statearr_51552_51629[(1)] = (5));
} else
{var statearr_51553_51630 = state_51535__$1;(statearr_51553_51630[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (15)))
{var inst_51412 = (state_51535[(12)]);var inst_51413 = (state_51535[(13)]);var inst_51415 = (state_51535[(15)]);var inst_51414 = (state_51535[(16)]);var inst_51428 = (state_51535[(2)]);var inst_51429 = (inst_51415 + (1));var tmp51546 = inst_51412;var tmp51547 = inst_51413;var tmp51548 = inst_51414;var inst_51412__$1 = tmp51546;var inst_51413__$1 = tmp51547;var inst_51414__$1 = tmp51548;var inst_51415__$1 = inst_51429;var state_51535__$1 = (function (){var statearr_51554 = state_51535;(statearr_51554[(22)] = inst_51428);
(statearr_51554[(12)] = inst_51412__$1);
(statearr_51554[(13)] = inst_51413__$1);
(statearr_51554[(15)] = inst_51415__$1);
(statearr_51554[(16)] = inst_51414__$1);
return statearr_51554;
})();var statearr_51555_51631 = state_51535__$1;(statearr_51555_51631[(2)] = null);
(statearr_51555_51631[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (21)))
{var inst_51453 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51556_51632 = state_51535__$1;(statearr_51556_51632[(2)] = inst_51453);
(statearr_51556_51632[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (31)))
{var inst_51479 = (state_51535[(11)]);var inst_51480 = (state_51535[(2)]);var inst_51481 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_51482 = cljs.core.async.untap_STAR_.call(null,m,inst_51479);var state_51535__$1 = (function (){var statearr_51557 = state_51535;(statearr_51557[(23)] = inst_51481);
(statearr_51557[(24)] = inst_51480);
return statearr_51557;
})();var statearr_51558_51633 = state_51535__$1;(statearr_51558_51633[(2)] = inst_51482);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51535__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (32)))
{var inst_51403 = (state_51535[(21)]);var inst_51479 = (state_51535[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51535,(31),Object,null,(30));var inst_51486 = cljs.core.async.put_BANG_.call(null,inst_51479,inst_51403,done);var state_51535__$1 = state_51535;var statearr_51559_51634 = state_51535__$1;(statearr_51559_51634[(2)] = inst_51486);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51535__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (40)))
{var inst_51501 = (state_51535[(25)]);var inst_51502 = (state_51535[(2)]);var inst_51503 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_51504 = cljs.core.async.untap_STAR_.call(null,m,inst_51501);var state_51535__$1 = (function (){var statearr_51560 = state_51535;(statearr_51560[(26)] = inst_51502);
(statearr_51560[(27)] = inst_51503);
return statearr_51560;
})();var statearr_51561_51635 = state_51535__$1;(statearr_51561_51635[(2)] = inst_51504);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51535__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (33)))
{var inst_51492 = (state_51535[(17)]);var inst_51494 = cljs.core.chunked_seq_QMARK_.call(null,inst_51492);var state_51535__$1 = state_51535;if(inst_51494)
{var statearr_51562_51636 = state_51535__$1;(statearr_51562_51636[(1)] = (36));
} else
{var statearr_51563_51637 = state_51535__$1;(statearr_51563_51637[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (13)))
{var inst_51422 = (state_51535[(28)]);var inst_51425 = cljs.core.async.close_BANG_.call(null,inst_51422);var state_51535__$1 = state_51535;var statearr_51564_51638 = state_51535__$1;(statearr_51564_51638[(2)] = inst_51425);
(statearr_51564_51638[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (22)))
{var inst_51443 = (state_51535[(8)]);var inst_51446 = cljs.core.async.close_BANG_.call(null,inst_51443);var state_51535__$1 = state_51535;var statearr_51565_51639 = state_51535__$1;(statearr_51565_51639[(2)] = inst_51446);
(statearr_51565_51639[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (36)))
{var inst_51492 = (state_51535[(17)]);var inst_51496 = cljs.core.chunk_first.call(null,inst_51492);var inst_51497 = cljs.core.chunk_rest.call(null,inst_51492);var inst_51498 = cljs.core.count.call(null,inst_51496);var inst_51471 = inst_51497;var inst_51472 = inst_51496;var inst_51473 = inst_51498;var inst_51474 = (0);var state_51535__$1 = (function (){var statearr_51566 = state_51535;(statearr_51566[(18)] = inst_51473);
(statearr_51566[(9)] = inst_51474);
(statearr_51566[(10)] = inst_51472);
(statearr_51566[(20)] = inst_51471);
return statearr_51566;
})();var statearr_51567_51640 = state_51535__$1;(statearr_51567_51640[(2)] = null);
(statearr_51567_51640[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (41)))
{var inst_51403 = (state_51535[(21)]);var inst_51501 = (state_51535[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51535,(40),Object,null,(39));var inst_51508 = cljs.core.async.put_BANG_.call(null,inst_51501,inst_51403,done);var state_51535__$1 = state_51535;var statearr_51568_51641 = state_51535__$1;(statearr_51568_51641[(2)] = inst_51508);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51535__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (43)))
{var state_51535__$1 = state_51535;var statearr_51569_51642 = state_51535__$1;(statearr_51569_51642[(2)] = null);
(statearr_51569_51642[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (29)))
{var inst_51519 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51570_51643 = state_51535__$1;(statearr_51570_51643[(2)] = inst_51519);
(statearr_51570_51643[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (44)))
{var inst_51528 = (state_51535[(2)]);var state_51535__$1 = (function (){var statearr_51571 = state_51535;(statearr_51571[(29)] = inst_51528);
return statearr_51571;
})();var statearr_51572_51644 = state_51535__$1;(statearr_51572_51644[(2)] = null);
(statearr_51572_51644[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (6)))
{var inst_51463 = (state_51535[(30)]);var inst_51462 = cljs.core.deref.call(null,cs);var inst_51463__$1 = cljs.core.keys.call(null,inst_51462);var inst_51464 = cljs.core.count.call(null,inst_51463__$1);var inst_51465 = cljs.core.reset_BANG_.call(null,dctr,inst_51464);var inst_51470 = cljs.core.seq.call(null,inst_51463__$1);var inst_51471 = inst_51470;var inst_51472 = null;var inst_51473 = (0);var inst_51474 = (0);var state_51535__$1 = (function (){var statearr_51573 = state_51535;(statearr_51573[(30)] = inst_51463__$1);
(statearr_51573[(18)] = inst_51473);
(statearr_51573[(9)] = inst_51474);
(statearr_51573[(10)] = inst_51472);
(statearr_51573[(20)] = inst_51471);
(statearr_51573[(31)] = inst_51465);
return statearr_51573;
})();var statearr_51574_51645 = state_51535__$1;(statearr_51574_51645[(2)] = null);
(statearr_51574_51645[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (28)))
{var inst_51492 = (state_51535[(17)]);var inst_51471 = (state_51535[(20)]);var inst_51492__$1 = cljs.core.seq.call(null,inst_51471);var state_51535__$1 = (function (){var statearr_51575 = state_51535;(statearr_51575[(17)] = inst_51492__$1);
return statearr_51575;
})();if(inst_51492__$1)
{var statearr_51576_51646 = state_51535__$1;(statearr_51576_51646[(1)] = (33));
} else
{var statearr_51577_51647 = state_51535__$1;(statearr_51577_51647[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (25)))
{var inst_51473 = (state_51535[(18)]);var inst_51474 = (state_51535[(9)]);var inst_51476 = (inst_51474 < inst_51473);var inst_51477 = inst_51476;var state_51535__$1 = state_51535;if(cljs.core.truth_(inst_51477))
{var statearr_51578_51648 = state_51535__$1;(statearr_51578_51648[(1)] = (27));
} else
{var statearr_51579_51649 = state_51535__$1;(statearr_51579_51649[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (34)))
{var state_51535__$1 = state_51535;var statearr_51580_51650 = state_51535__$1;(statearr_51580_51650[(2)] = null);
(statearr_51580_51650[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (17)))
{var state_51535__$1 = state_51535;var statearr_51581_51651 = state_51535__$1;(statearr_51581_51651[(2)] = null);
(statearr_51581_51651[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (3)))
{var inst_51533 = (state_51535[(2)]);var state_51535__$1 = state_51535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51535__$1,inst_51533);
} else
{if((state_val_51536 === (12)))
{var inst_51458 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51582_51652 = state_51535__$1;(statearr_51582_51652[(2)] = inst_51458);
(statearr_51582_51652[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (2)))
{var state_51535__$1 = state_51535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51535__$1,(4),ch);
} else
{if((state_val_51536 === (23)))
{var state_51535__$1 = state_51535;var statearr_51583_51653 = state_51535__$1;(statearr_51583_51653[(2)] = null);
(statearr_51583_51653[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (35)))
{var inst_51517 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51584_51654 = state_51535__$1;(statearr_51584_51654[(2)] = inst_51517);
(statearr_51584_51654[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (19)))
{var inst_51432 = (state_51535[(7)]);var inst_51436 = cljs.core.chunk_first.call(null,inst_51432);var inst_51437 = cljs.core.chunk_rest.call(null,inst_51432);var inst_51438 = cljs.core.count.call(null,inst_51436);var inst_51412 = inst_51437;var inst_51413 = inst_51436;var inst_51414 = inst_51438;var inst_51415 = (0);var state_51535__$1 = (function (){var statearr_51585 = state_51535;(statearr_51585[(12)] = inst_51412);
(statearr_51585[(13)] = inst_51413);
(statearr_51585[(15)] = inst_51415);
(statearr_51585[(16)] = inst_51414);
return statearr_51585;
})();var statearr_51586_51655 = state_51535__$1;(statearr_51586_51655[(2)] = null);
(statearr_51586_51655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (11)))
{var inst_51412 = (state_51535[(12)]);var inst_51432 = (state_51535[(7)]);var inst_51432__$1 = cljs.core.seq.call(null,inst_51412);var state_51535__$1 = (function (){var statearr_51587 = state_51535;(statearr_51587[(7)] = inst_51432__$1);
return statearr_51587;
})();if(inst_51432__$1)
{var statearr_51588_51656 = state_51535__$1;(statearr_51588_51656[(1)] = (16));
} else
{var statearr_51589_51657 = state_51535__$1;(statearr_51589_51657[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (9)))
{var inst_51460 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51590_51658 = state_51535__$1;(statearr_51590_51658[(2)] = inst_51460);
(statearr_51590_51658[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (5)))
{var inst_51410 = cljs.core.deref.call(null,cs);var inst_51411 = cljs.core.seq.call(null,inst_51410);var inst_51412 = inst_51411;var inst_51413 = null;var inst_51414 = (0);var inst_51415 = (0);var state_51535__$1 = (function (){var statearr_51591 = state_51535;(statearr_51591[(12)] = inst_51412);
(statearr_51591[(13)] = inst_51413);
(statearr_51591[(15)] = inst_51415);
(statearr_51591[(16)] = inst_51414);
return statearr_51591;
})();var statearr_51592_51659 = state_51535__$1;(statearr_51592_51659[(2)] = null);
(statearr_51592_51659[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (14)))
{var state_51535__$1 = state_51535;var statearr_51593_51660 = state_51535__$1;(statearr_51593_51660[(2)] = null);
(statearr_51593_51660[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (45)))
{var inst_51525 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51594_51661 = state_51535__$1;(statearr_51594_51661[(2)] = inst_51525);
(statearr_51594_51661[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (26)))
{var inst_51463 = (state_51535[(30)]);var inst_51521 = (state_51535[(2)]);var inst_51522 = cljs.core.seq.call(null,inst_51463);var state_51535__$1 = (function (){var statearr_51595 = state_51535;(statearr_51595[(32)] = inst_51521);
return statearr_51595;
})();if(inst_51522)
{var statearr_51596_51662 = state_51535__$1;(statearr_51596_51662[(1)] = (42));
} else
{var statearr_51597_51663 = state_51535__$1;(statearr_51597_51663[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (16)))
{var inst_51432 = (state_51535[(7)]);var inst_51434 = cljs.core.chunked_seq_QMARK_.call(null,inst_51432);var state_51535__$1 = state_51535;if(inst_51434)
{var statearr_51601_51664 = state_51535__$1;(statearr_51601_51664[(1)] = (19));
} else
{var statearr_51602_51665 = state_51535__$1;(statearr_51602_51665[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (38)))
{var inst_51514 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51603_51666 = state_51535__$1;(statearr_51603_51666[(2)] = inst_51514);
(statearr_51603_51666[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (30)))
{var inst_51473 = (state_51535[(18)]);var inst_51474 = (state_51535[(9)]);var inst_51472 = (state_51535[(10)]);var inst_51471 = (state_51535[(20)]);var inst_51488 = (state_51535[(2)]);var inst_51489 = (inst_51474 + (1));var tmp51598 = inst_51473;var tmp51599 = inst_51472;var tmp51600 = inst_51471;var inst_51471__$1 = tmp51600;var inst_51472__$1 = tmp51599;var inst_51473__$1 = tmp51598;var inst_51474__$1 = inst_51489;var state_51535__$1 = (function (){var statearr_51604 = state_51535;(statearr_51604[(18)] = inst_51473__$1);
(statearr_51604[(9)] = inst_51474__$1);
(statearr_51604[(33)] = inst_51488);
(statearr_51604[(10)] = inst_51472__$1);
(statearr_51604[(20)] = inst_51471__$1);
return statearr_51604;
})();var statearr_51605_51667 = state_51535__$1;(statearr_51605_51667[(2)] = null);
(statearr_51605_51667[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (10)))
{var inst_51413 = (state_51535[(13)]);var inst_51415 = (state_51535[(15)]);var inst_51421 = cljs.core._nth.call(null,inst_51413,inst_51415);var inst_51422 = cljs.core.nth.call(null,inst_51421,(0),null);var inst_51423 = cljs.core.nth.call(null,inst_51421,(1),null);var state_51535__$1 = (function (){var statearr_51606 = state_51535;(statearr_51606[(28)] = inst_51422);
return statearr_51606;
})();if(cljs.core.truth_(inst_51423))
{var statearr_51607_51668 = state_51535__$1;(statearr_51607_51668[(1)] = (13));
} else
{var statearr_51608_51669 = state_51535__$1;(statearr_51608_51669[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (18)))
{var inst_51456 = (state_51535[(2)]);var state_51535__$1 = state_51535;var statearr_51609_51670 = state_51535__$1;(statearr_51609_51670[(2)] = inst_51456);
(statearr_51609_51670[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (42)))
{var state_51535__$1 = state_51535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51535__$1,(45),dchan);
} else
{if((state_val_51536 === (37)))
{var inst_51492 = (state_51535[(17)]);var inst_51501 = cljs.core.first.call(null,inst_51492);var state_51535__$1 = (function (){var statearr_51610 = state_51535;(statearr_51610[(25)] = inst_51501);
return statearr_51610;
})();var statearr_51611_51671 = state_51535__$1;(statearr_51611_51671[(2)] = null);
(statearr_51611_51671[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51536 === (8)))
{var inst_51415 = (state_51535[(15)]);var inst_51414 = (state_51535[(16)]);var inst_51417 = (inst_51415 < inst_51414);var inst_51418 = inst_51417;var state_51535__$1 = state_51535;if(cljs.core.truth_(inst_51418))
{var statearr_51612_51672 = state_51535__$1;(statearr_51612_51672[(1)] = (10));
} else
{var statearr_51613_51673 = state_51535__$1;(statearr_51613_51673[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___51621,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___51621,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51617[(0)] = state_machine__5679__auto__);
(statearr_51617[(1)] = (1));
return statearr_51617;
});
var state_machine__5679__auto____1 = (function (state_51535){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51618){if((e51618 instanceof Object))
{var ex__5682__auto__ = e51618;var statearr_51619_51674 = state_51535;(statearr_51619_51674[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51535);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51675 = state_51535;
state_51535 = G__51675;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51535){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51621,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_51620 = f__5694__auto__.call(null);(statearr_51620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51621);
return statearr_51620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51621,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj51677 = {};return obj51677;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t51787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51787 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51788){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51788 = meta51788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51787.cljs$lang$type = true;
cljs.core.async.t51787.cljs$lang$ctorStr = "cljs.core.async/t51787";
cljs.core.async.t51787.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t51787");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t51787.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t51787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51789){var self__ = this;
var _51789__$1 = this;return self__.meta51788;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51789,meta51788__$1){var self__ = this;
var _51789__$1 = this;return (new cljs.core.async.t51787(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51788__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t51787 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t51787(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51788){return (new cljs.core.async.t51787(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51788));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t51787(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___51896 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___51896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___51896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51854){var state_val_51855 = (state_51854[(1)]);if((state_val_51855 === (7)))
{var inst_51803 = (state_51854[(7)]);var inst_51808 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51803);var state_51854__$1 = state_51854;var statearr_51856_51897 = state_51854__$1;(statearr_51856_51897[(2)] = inst_51808);
(statearr_51856_51897[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (20)))
{var inst_51818 = (state_51854[(8)]);var state_51854__$1 = state_51854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51854__$1,(23),out,inst_51818);
} else
{if((state_val_51855 === (1)))
{var inst_51793 = (state_51854[(9)]);var inst_51793__$1 = calc_state.call(null);var inst_51794 = cljs.core.seq_QMARK_.call(null,inst_51793__$1);var state_51854__$1 = (function (){var statearr_51857 = state_51854;(statearr_51857[(9)] = inst_51793__$1);
return statearr_51857;
})();if(inst_51794)
{var statearr_51858_51898 = state_51854__$1;(statearr_51858_51898[(1)] = (2));
} else
{var statearr_51859_51899 = state_51854__$1;(statearr_51859_51899[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (4)))
{var inst_51793 = (state_51854[(9)]);var inst_51799 = (state_51854[(2)]);var inst_51800 = cljs.core.get.call(null,inst_51799,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_51801 = cljs.core.get.call(null,inst_51799,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_51802 = cljs.core.get.call(null,inst_51799,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_51803 = inst_51793;var state_51854__$1 = (function (){var statearr_51860 = state_51854;(statearr_51860[(10)] = inst_51802);
(statearr_51860[(7)] = inst_51803);
(statearr_51860[(11)] = inst_51800);
(statearr_51860[(12)] = inst_51801);
return statearr_51860;
})();var statearr_51861_51900 = state_51854__$1;(statearr_51861_51900[(2)] = null);
(statearr_51861_51900[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (15)))
{var state_51854__$1 = state_51854;var statearr_51862_51901 = state_51854__$1;(statearr_51862_51901[(2)] = null);
(statearr_51862_51901[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (21)))
{var state_51854__$1 = state_51854;var statearr_51863_51902 = state_51854__$1;(statearr_51863_51902[(2)] = null);
(statearr_51863_51902[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (13)))
{var inst_51850 = (state_51854[(2)]);var state_51854__$1 = state_51854;var statearr_51864_51903 = state_51854__$1;(statearr_51864_51903[(2)] = inst_51850);
(statearr_51864_51903[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (22)))
{var inst_51811 = (state_51854[(13)]);var inst_51847 = (state_51854[(2)]);var inst_51803 = inst_51811;var state_51854__$1 = (function (){var statearr_51865 = state_51854;(statearr_51865[(14)] = inst_51847);
(statearr_51865[(7)] = inst_51803);
return statearr_51865;
})();var statearr_51866_51904 = state_51854__$1;(statearr_51866_51904[(2)] = null);
(statearr_51866_51904[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (6)))
{var inst_51852 = (state_51854[(2)]);var state_51854__$1 = state_51854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51854__$1,inst_51852);
} else
{if((state_val_51855 === (17)))
{var inst_51833 = (state_51854[(15)]);var state_51854__$1 = state_51854;var statearr_51867_51905 = state_51854__$1;(statearr_51867_51905[(2)] = inst_51833);
(statearr_51867_51905[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (3)))
{var inst_51793 = (state_51854[(9)]);var state_51854__$1 = state_51854;var statearr_51868_51906 = state_51854__$1;(statearr_51868_51906[(2)] = inst_51793);
(statearr_51868_51906[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (12)))
{var inst_51833 = (state_51854[(15)]);var inst_51814 = (state_51854[(16)]);var inst_51819 = (state_51854[(17)]);var inst_51833__$1 = inst_51814.call(null,inst_51819);var state_51854__$1 = (function (){var statearr_51869 = state_51854;(statearr_51869[(15)] = inst_51833__$1);
return statearr_51869;
})();if(cljs.core.truth_(inst_51833__$1))
{var statearr_51870_51907 = state_51854__$1;(statearr_51870_51907[(1)] = (17));
} else
{var statearr_51871_51908 = state_51854__$1;(statearr_51871_51908[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (2)))
{var inst_51793 = (state_51854[(9)]);var inst_51796 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51793);var state_51854__$1 = state_51854;var statearr_51872_51909 = state_51854__$1;(statearr_51872_51909[(2)] = inst_51796);
(statearr_51872_51909[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (23)))
{var inst_51844 = (state_51854[(2)]);var state_51854__$1 = state_51854;var statearr_51873_51910 = state_51854__$1;(statearr_51873_51910[(2)] = inst_51844);
(statearr_51873_51910[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (19)))
{var inst_51841 = (state_51854[(2)]);var state_51854__$1 = state_51854;if(cljs.core.truth_(inst_51841))
{var statearr_51874_51911 = state_51854__$1;(statearr_51874_51911[(1)] = (20));
} else
{var statearr_51875_51912 = state_51854__$1;(statearr_51875_51912[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (11)))
{var inst_51818 = (state_51854[(8)]);var inst_51824 = (inst_51818 == null);var state_51854__$1 = state_51854;if(cljs.core.truth_(inst_51824))
{var statearr_51876_51913 = state_51854__$1;(statearr_51876_51913[(1)] = (14));
} else
{var statearr_51877_51914 = state_51854__$1;(statearr_51877_51914[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (9)))
{var inst_51811 = (state_51854[(13)]);var inst_51811__$1 = (state_51854[(2)]);var inst_51812 = cljs.core.get.call(null,inst_51811__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_51813 = cljs.core.get.call(null,inst_51811__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_51814 = cljs.core.get.call(null,inst_51811__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_51854__$1 = (function (){var statearr_51878 = state_51854;(statearr_51878[(18)] = inst_51813);
(statearr_51878[(13)] = inst_51811__$1);
(statearr_51878[(16)] = inst_51814);
return statearr_51878;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_51854__$1,(10),inst_51812);
} else
{if((state_val_51855 === (5)))
{var inst_51803 = (state_51854[(7)]);var inst_51806 = cljs.core.seq_QMARK_.call(null,inst_51803);var state_51854__$1 = state_51854;if(inst_51806)
{var statearr_51879_51915 = state_51854__$1;(statearr_51879_51915[(1)] = (7));
} else
{var statearr_51880_51916 = state_51854__$1;(statearr_51880_51916[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (14)))
{var inst_51819 = (state_51854[(17)]);var inst_51826 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51819);var state_51854__$1 = state_51854;var statearr_51881_51917 = state_51854__$1;(statearr_51881_51917[(2)] = inst_51826);
(statearr_51881_51917[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (16)))
{var inst_51829 = (state_51854[(2)]);var inst_51830 = calc_state.call(null);var inst_51803 = inst_51830;var state_51854__$1 = (function (){var statearr_51882 = state_51854;(statearr_51882[(7)] = inst_51803);
(statearr_51882[(19)] = inst_51829);
return statearr_51882;
})();var statearr_51883_51918 = state_51854__$1;(statearr_51883_51918[(2)] = null);
(statearr_51883_51918[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (10)))
{var inst_51818 = (state_51854[(8)]);var inst_51819 = (state_51854[(17)]);var inst_51817 = (state_51854[(2)]);var inst_51818__$1 = cljs.core.nth.call(null,inst_51817,(0),null);var inst_51819__$1 = cljs.core.nth.call(null,inst_51817,(1),null);var inst_51820 = (inst_51818__$1 == null);var inst_51821 = cljs.core._EQ_.call(null,inst_51819__$1,change);var inst_51822 = (inst_51820) || (inst_51821);var state_51854__$1 = (function (){var statearr_51884 = state_51854;(statearr_51884[(8)] = inst_51818__$1);
(statearr_51884[(17)] = inst_51819__$1);
return statearr_51884;
})();if(cljs.core.truth_(inst_51822))
{var statearr_51885_51919 = state_51854__$1;(statearr_51885_51919[(1)] = (11));
} else
{var statearr_51886_51920 = state_51854__$1;(statearr_51886_51920[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (18)))
{var inst_51813 = (state_51854[(18)]);var inst_51814 = (state_51854[(16)]);var inst_51819 = (state_51854[(17)]);var inst_51836 = cljs.core.empty_QMARK_.call(null,inst_51814);var inst_51837 = inst_51813.call(null,inst_51819);var inst_51838 = cljs.core.not.call(null,inst_51837);var inst_51839 = (inst_51836) && (inst_51838);var state_51854__$1 = state_51854;var statearr_51887_51921 = state_51854__$1;(statearr_51887_51921[(2)] = inst_51839);
(statearr_51887_51921[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_51855 === (8)))
{var inst_51803 = (state_51854[(7)]);var state_51854__$1 = state_51854;var statearr_51888_51922 = state_51854__$1;(statearr_51888_51922[(2)] = inst_51803);
(statearr_51888_51922[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___51896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___51896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_51892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51892[(0)] = state_machine__5679__auto__);
(statearr_51892[(1)] = (1));
return statearr_51892;
});
var state_machine__5679__auto____1 = (function (state_51854){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_51854);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e51893){if((e51893 instanceof Object))
{var ex__5682__auto__ = e51893;var statearr_51894_51923 = state_51854;(statearr_51894_51923[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e51893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__51924 = state_51854;
state_51854 = G__51924;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_51854){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_51854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___51896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_51895 = f__5694__auto__.call(null);(statearr_51895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___51896);
return statearr_51895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___51896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj51926 = {};return obj51926;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__51927_SHARP_){if(cljs.core.truth_(p1__51927_SHARP_.call(null,topic)))
{return p1__51927_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__51927_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t52052 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52052 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta52053){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta52053 = meta52053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52052.cljs$lang$type = true;
cljs.core.async.t52052.cljs$lang$ctorStr = "cljs.core.async/t52052";
cljs.core.async.t52052.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52052");
});})(mults,ensure_mult))
;
cljs.core.async.t52052.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t52052.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t52052.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t52052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t52052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t52052.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t52052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52054){var self__ = this;
var _52054__$1 = this;return self__.meta52053;
});})(mults,ensure_mult))
;
cljs.core.async.t52052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52054,meta52053__$1){var self__ = this;
var _52054__$1 = this;return (new cljs.core.async.t52052(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta52053__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t52052 = ((function (mults,ensure_mult){
return (function __GT_t52052(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52053){return (new cljs.core.async.t52052(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52053));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t52052(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___52176 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52176,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52176,mults,ensure_mult,p){
return (function (state_52128){var state_val_52129 = (state_52128[(1)]);if((state_val_52129 === (7)))
{var inst_52124 = (state_52128[(2)]);var state_52128__$1 = state_52128;var statearr_52130_52177 = state_52128__$1;(statearr_52130_52177[(2)] = inst_52124);
(statearr_52130_52177[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (20)))
{var state_52128__$1 = state_52128;var statearr_52131_52178 = state_52128__$1;(statearr_52131_52178[(2)] = null);
(statearr_52131_52178[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (1)))
{var state_52128__$1 = state_52128;var statearr_52132_52179 = state_52128__$1;(statearr_52132_52179[(2)] = null);
(statearr_52132_52179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (24)))
{var inst_52107 = (state_52128[(7)]);var inst_52057 = (state_52128[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52128,(23),Object,null,(22));var inst_52114 = cljs.core.async.muxch_STAR_.call(null,inst_52107);var state_52128__$1 = state_52128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52128__$1,(25),inst_52114,inst_52057);
} else
{if((state_val_52129 === (4)))
{var inst_52057 = (state_52128[(8)]);var inst_52057__$1 = (state_52128[(2)]);var inst_52058 = (inst_52057__$1 == null);var state_52128__$1 = (function (){var statearr_52133 = state_52128;(statearr_52133[(8)] = inst_52057__$1);
return statearr_52133;
})();if(cljs.core.truth_(inst_52058))
{var statearr_52134_52180 = state_52128__$1;(statearr_52134_52180[(1)] = (5));
} else
{var statearr_52135_52181 = state_52128__$1;(statearr_52135_52181[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (15)))
{var inst_52099 = (state_52128[(2)]);var state_52128__$1 = state_52128;var statearr_52136_52182 = state_52128__$1;(statearr_52136_52182[(2)] = inst_52099);
(statearr_52136_52182[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (21)))
{var inst_52121 = (state_52128[(2)]);var state_52128__$1 = (function (){var statearr_52137 = state_52128;(statearr_52137[(9)] = inst_52121);
return statearr_52137;
})();var statearr_52138_52183 = state_52128__$1;(statearr_52138_52183[(2)] = null);
(statearr_52138_52183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (13)))
{var inst_52081 = (state_52128[(10)]);var inst_52083 = cljs.core.chunked_seq_QMARK_.call(null,inst_52081);var state_52128__$1 = state_52128;if(inst_52083)
{var statearr_52139_52184 = state_52128__$1;(statearr_52139_52184[(1)] = (16));
} else
{var statearr_52140_52185 = state_52128__$1;(statearr_52140_52185[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (22)))
{var inst_52118 = (state_52128[(2)]);var state_52128__$1 = state_52128;var statearr_52141_52186 = state_52128__$1;(statearr_52141_52186[(2)] = inst_52118);
(statearr_52141_52186[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (6)))
{var inst_52107 = (state_52128[(7)]);var inst_52105 = (state_52128[(11)]);var inst_52057 = (state_52128[(8)]);var inst_52105__$1 = topic_fn.call(null,inst_52057);var inst_52106 = cljs.core.deref.call(null,mults);var inst_52107__$1 = cljs.core.get.call(null,inst_52106,inst_52105__$1);var state_52128__$1 = (function (){var statearr_52142 = state_52128;(statearr_52142[(7)] = inst_52107__$1);
(statearr_52142[(11)] = inst_52105__$1);
return statearr_52142;
})();if(cljs.core.truth_(inst_52107__$1))
{var statearr_52143_52187 = state_52128__$1;(statearr_52143_52187[(1)] = (19));
} else
{var statearr_52144_52188 = state_52128__$1;(statearr_52144_52188[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (25)))
{var inst_52116 = (state_52128[(2)]);var state_52128__$1 = state_52128;var statearr_52145_52189 = state_52128__$1;(statearr_52145_52189[(2)] = inst_52116);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52128__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (17)))
{var inst_52081 = (state_52128[(10)]);var inst_52090 = cljs.core.first.call(null,inst_52081);var inst_52091 = cljs.core.async.muxch_STAR_.call(null,inst_52090);var inst_52092 = cljs.core.async.close_BANG_.call(null,inst_52091);var inst_52093 = cljs.core.next.call(null,inst_52081);var inst_52067 = inst_52093;var inst_52068 = null;var inst_52069 = (0);var inst_52070 = (0);var state_52128__$1 = (function (){var statearr_52146 = state_52128;(statearr_52146[(12)] = inst_52068);
(statearr_52146[(13)] = inst_52092);
(statearr_52146[(14)] = inst_52070);
(statearr_52146[(15)] = inst_52067);
(statearr_52146[(16)] = inst_52069);
return statearr_52146;
})();var statearr_52147_52190 = state_52128__$1;(statearr_52147_52190[(2)] = null);
(statearr_52147_52190[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (3)))
{var inst_52126 = (state_52128[(2)]);var state_52128__$1 = state_52128;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52128__$1,inst_52126);
} else
{if((state_val_52129 === (12)))
{var inst_52101 = (state_52128[(2)]);var state_52128__$1 = state_52128;var statearr_52148_52191 = state_52128__$1;(statearr_52148_52191[(2)] = inst_52101);
(statearr_52148_52191[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (2)))
{var state_52128__$1 = state_52128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52128__$1,(4),ch);
} else
{if((state_val_52129 === (23)))
{var inst_52105 = (state_52128[(11)]);var inst_52109 = (state_52128[(2)]);var inst_52110 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_52105);var state_52128__$1 = (function (){var statearr_52149 = state_52128;(statearr_52149[(17)] = inst_52109);
return statearr_52149;
})();var statearr_52150_52192 = state_52128__$1;(statearr_52150_52192[(2)] = inst_52110);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52128__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (19)))
{var state_52128__$1 = state_52128;var statearr_52151_52193 = state_52128__$1;(statearr_52151_52193[(2)] = null);
(statearr_52151_52193[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (11)))
{var inst_52067 = (state_52128[(15)]);var inst_52081 = (state_52128[(10)]);var inst_52081__$1 = cljs.core.seq.call(null,inst_52067);var state_52128__$1 = (function (){var statearr_52152 = state_52128;(statearr_52152[(10)] = inst_52081__$1);
return statearr_52152;
})();if(inst_52081__$1)
{var statearr_52153_52194 = state_52128__$1;(statearr_52153_52194[(1)] = (13));
} else
{var statearr_52154_52195 = state_52128__$1;(statearr_52154_52195[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (9)))
{var inst_52103 = (state_52128[(2)]);var state_52128__$1 = state_52128;var statearr_52155_52196 = state_52128__$1;(statearr_52155_52196[(2)] = inst_52103);
(statearr_52155_52196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (5)))
{var inst_52064 = cljs.core.deref.call(null,mults);var inst_52065 = cljs.core.vals.call(null,inst_52064);var inst_52066 = cljs.core.seq.call(null,inst_52065);var inst_52067 = inst_52066;var inst_52068 = null;var inst_52069 = (0);var inst_52070 = (0);var state_52128__$1 = (function (){var statearr_52156 = state_52128;(statearr_52156[(12)] = inst_52068);
(statearr_52156[(14)] = inst_52070);
(statearr_52156[(15)] = inst_52067);
(statearr_52156[(16)] = inst_52069);
return statearr_52156;
})();var statearr_52157_52197 = state_52128__$1;(statearr_52157_52197[(2)] = null);
(statearr_52157_52197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (14)))
{var state_52128__$1 = state_52128;var statearr_52161_52198 = state_52128__$1;(statearr_52161_52198[(2)] = null);
(statearr_52161_52198[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (16)))
{var inst_52081 = (state_52128[(10)]);var inst_52085 = cljs.core.chunk_first.call(null,inst_52081);var inst_52086 = cljs.core.chunk_rest.call(null,inst_52081);var inst_52087 = cljs.core.count.call(null,inst_52085);var inst_52067 = inst_52086;var inst_52068 = inst_52085;var inst_52069 = inst_52087;var inst_52070 = (0);var state_52128__$1 = (function (){var statearr_52162 = state_52128;(statearr_52162[(12)] = inst_52068);
(statearr_52162[(14)] = inst_52070);
(statearr_52162[(15)] = inst_52067);
(statearr_52162[(16)] = inst_52069);
return statearr_52162;
})();var statearr_52163_52199 = state_52128__$1;(statearr_52163_52199[(2)] = null);
(statearr_52163_52199[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (10)))
{var inst_52068 = (state_52128[(12)]);var inst_52070 = (state_52128[(14)]);var inst_52067 = (state_52128[(15)]);var inst_52069 = (state_52128[(16)]);var inst_52075 = cljs.core._nth.call(null,inst_52068,inst_52070);var inst_52076 = cljs.core.async.muxch_STAR_.call(null,inst_52075);var inst_52077 = cljs.core.async.close_BANG_.call(null,inst_52076);var inst_52078 = (inst_52070 + (1));var tmp52158 = inst_52068;var tmp52159 = inst_52067;var tmp52160 = inst_52069;var inst_52067__$1 = tmp52159;var inst_52068__$1 = tmp52158;var inst_52069__$1 = tmp52160;var inst_52070__$1 = inst_52078;var state_52128__$1 = (function (){var statearr_52164 = state_52128;(statearr_52164[(18)] = inst_52077);
(statearr_52164[(12)] = inst_52068__$1);
(statearr_52164[(14)] = inst_52070__$1);
(statearr_52164[(15)] = inst_52067__$1);
(statearr_52164[(16)] = inst_52069__$1);
return statearr_52164;
})();var statearr_52165_52200 = state_52128__$1;(statearr_52165_52200[(2)] = null);
(statearr_52165_52200[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (18)))
{var inst_52096 = (state_52128[(2)]);var state_52128__$1 = state_52128;var statearr_52166_52201 = state_52128__$1;(statearr_52166_52201[(2)] = inst_52096);
(statearr_52166_52201[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52129 === (8)))
{var inst_52070 = (state_52128[(14)]);var inst_52069 = (state_52128[(16)]);var inst_52072 = (inst_52070 < inst_52069);var inst_52073 = inst_52072;var state_52128__$1 = state_52128;if(cljs.core.truth_(inst_52073))
{var statearr_52167_52202 = state_52128__$1;(statearr_52167_52202[(1)] = (10));
} else
{var statearr_52168_52203 = state_52128__$1;(statearr_52168_52203[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___52176,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___52176,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52172[(0)] = state_machine__5679__auto__);
(statearr_52172[(1)] = (1));
return statearr_52172;
});
var state_machine__5679__auto____1 = (function (state_52128){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52128);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52173){if((e52173 instanceof Object))
{var ex__5682__auto__ = e52173;var statearr_52174_52204 = state_52128;(statearr_52174_52204[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52205 = state_52128;
state_52128 = G__52205;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52128){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52176,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_52175 = f__5694__auto__.call(null);(statearr_52175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52176);
return statearr_52175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52176,mults,ensure_mult,p))
);
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5693__auto___52342 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_52312){var state_val_52313 = (state_52312[(1)]);if((state_val_52313 === (7)))
{var state_52312__$1 = state_52312;var statearr_52314_52343 = state_52312__$1;(statearr_52314_52343[(2)] = null);
(statearr_52314_52343[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (1)))
{var state_52312__$1 = state_52312;var statearr_52315_52344 = state_52312__$1;(statearr_52315_52344[(2)] = null);
(statearr_52315_52344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (4)))
{var inst_52276 = (state_52312[(7)]);var inst_52278 = (inst_52276 < cnt);var state_52312__$1 = state_52312;if(cljs.core.truth_(inst_52278))
{var statearr_52316_52345 = state_52312__$1;(statearr_52316_52345[(1)] = (6));
} else
{var statearr_52317_52346 = state_52312__$1;(statearr_52317_52346[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (15)))
{var inst_52308 = (state_52312[(2)]);var state_52312__$1 = state_52312;var statearr_52318_52347 = state_52312__$1;(statearr_52318_52347[(2)] = inst_52308);
(statearr_52318_52347[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (13)))
{var inst_52301 = cljs.core.async.close_BANG_.call(null,out);var state_52312__$1 = state_52312;var statearr_52319_52348 = state_52312__$1;(statearr_52319_52348[(2)] = inst_52301);
(statearr_52319_52348[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (6)))
{var state_52312__$1 = state_52312;var statearr_52320_52349 = state_52312__$1;(statearr_52320_52349[(2)] = null);
(statearr_52320_52349[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (3)))
{var inst_52310 = (state_52312[(2)]);var state_52312__$1 = state_52312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52312__$1,inst_52310);
} else
{if((state_val_52313 === (12)))
{var inst_52298 = (state_52312[(8)]);var inst_52298__$1 = (state_52312[(2)]);var inst_52299 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52298__$1);var state_52312__$1 = (function (){var statearr_52321 = state_52312;(statearr_52321[(8)] = inst_52298__$1);
return statearr_52321;
})();if(cljs.core.truth_(inst_52299))
{var statearr_52322_52350 = state_52312__$1;(statearr_52322_52350[(1)] = (13));
} else
{var statearr_52323_52351 = state_52312__$1;(statearr_52323_52351[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (2)))
{var inst_52275 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_52276 = (0);var state_52312__$1 = (function (){var statearr_52324 = state_52312;(statearr_52324[(7)] = inst_52276);
(statearr_52324[(9)] = inst_52275);
return statearr_52324;
})();var statearr_52325_52352 = state_52312__$1;(statearr_52325_52352[(2)] = null);
(statearr_52325_52352[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (11)))
{var inst_52276 = (state_52312[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52312,(10),Object,null,(9));var inst_52285 = chs__$1.call(null,inst_52276);var inst_52286 = done.call(null,inst_52276);var inst_52287 = cljs.core.async.take_BANG_.call(null,inst_52285,inst_52286);var state_52312__$1 = state_52312;var statearr_52326_52353 = state_52312__$1;(statearr_52326_52353[(2)] = inst_52287);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52312__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (9)))
{var inst_52276 = (state_52312[(7)]);var inst_52289 = (state_52312[(2)]);var inst_52290 = (inst_52276 + (1));var inst_52276__$1 = inst_52290;var state_52312__$1 = (function (){var statearr_52327 = state_52312;(statearr_52327[(7)] = inst_52276__$1);
(statearr_52327[(10)] = inst_52289);
return statearr_52327;
})();var statearr_52328_52354 = state_52312__$1;(statearr_52328_52354[(2)] = null);
(statearr_52328_52354[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (5)))
{var inst_52296 = (state_52312[(2)]);var state_52312__$1 = (function (){var statearr_52329 = state_52312;(statearr_52329[(11)] = inst_52296);
return statearr_52329;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52312__$1,(12),dchan);
} else
{if((state_val_52313 === (14)))
{var inst_52298 = (state_52312[(8)]);var inst_52303 = cljs.core.apply.call(null,f,inst_52298);var state_52312__$1 = state_52312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52312__$1,(16),out,inst_52303);
} else
{if((state_val_52313 === (16)))
{var inst_52305 = (state_52312[(2)]);var state_52312__$1 = (function (){var statearr_52330 = state_52312;(statearr_52330[(12)] = inst_52305);
return statearr_52330;
})();var statearr_52331_52355 = state_52312__$1;(statearr_52331_52355[(2)] = null);
(statearr_52331_52355[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (10)))
{var inst_52280 = (state_52312[(2)]);var inst_52281 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_52312__$1 = (function (){var statearr_52332 = state_52312;(statearr_52332[(13)] = inst_52280);
return statearr_52332;
})();var statearr_52333_52356 = state_52312__$1;(statearr_52333_52356[(2)] = inst_52281);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52312__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (8)))
{var inst_52294 = (state_52312[(2)]);var state_52312__$1 = state_52312;var statearr_52334_52357 = state_52312__$1;(statearr_52334_52357[(2)] = inst_52294);
(statearr_52334_52357[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___52342,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___52342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52338[(0)] = state_machine__5679__auto__);
(statearr_52338[(1)] = (1));
return statearr_52338;
});
var state_machine__5679__auto____1 = (function (state_52312){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52312);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52339){if((e52339 instanceof Object))
{var ex__5682__auto__ = e52339;var statearr_52340_52358 = state_52312;(statearr_52340_52358[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52359 = state_52312;
state_52312 = G__52359;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52312){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52342,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_52341 = f__5694__auto__.call(null);(statearr_52341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52342);
return statearr_52341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52342,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52467 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52467,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52467,out){
return (function (state_52443){var state_val_52444 = (state_52443[(1)]);if((state_val_52444 === (7)))
{var inst_52423 = (state_52443[(7)]);var inst_52422 = (state_52443[(8)]);var inst_52422__$1 = (state_52443[(2)]);var inst_52423__$1 = cljs.core.nth.call(null,inst_52422__$1,(0),null);var inst_52424 = cljs.core.nth.call(null,inst_52422__$1,(1),null);var inst_52425 = (inst_52423__$1 == null);var state_52443__$1 = (function (){var statearr_52445 = state_52443;(statearr_52445[(9)] = inst_52424);
(statearr_52445[(7)] = inst_52423__$1);
(statearr_52445[(8)] = inst_52422__$1);
return statearr_52445;
})();if(cljs.core.truth_(inst_52425))
{var statearr_52446_52468 = state_52443__$1;(statearr_52446_52468[(1)] = (8));
} else
{var statearr_52447_52469 = state_52443__$1;(statearr_52447_52469[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52444 === (1)))
{var inst_52414 = cljs.core.vec.call(null,chs);var inst_52415 = inst_52414;var state_52443__$1 = (function (){var statearr_52448 = state_52443;(statearr_52448[(10)] = inst_52415);
return statearr_52448;
})();var statearr_52449_52470 = state_52443__$1;(statearr_52449_52470[(2)] = null);
(statearr_52449_52470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52444 === (4)))
{var inst_52415 = (state_52443[(10)]);var state_52443__$1 = state_52443;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_52443__$1,(7),inst_52415);
} else
{if((state_val_52444 === (6)))
{var inst_52439 = (state_52443[(2)]);var state_52443__$1 = state_52443;var statearr_52450_52471 = state_52443__$1;(statearr_52450_52471[(2)] = inst_52439);
(statearr_52450_52471[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52444 === (3)))
{var inst_52441 = (state_52443[(2)]);var state_52443__$1 = state_52443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52443__$1,inst_52441);
} else
{if((state_val_52444 === (2)))
{var inst_52415 = (state_52443[(10)]);var inst_52417 = cljs.core.count.call(null,inst_52415);var inst_52418 = (inst_52417 > (0));var state_52443__$1 = state_52443;if(cljs.core.truth_(inst_52418))
{var statearr_52452_52472 = state_52443__$1;(statearr_52452_52472[(1)] = (4));
} else
{var statearr_52453_52473 = state_52443__$1;(statearr_52453_52473[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52444 === (11)))
{var inst_52415 = (state_52443[(10)]);var inst_52432 = (state_52443[(2)]);var tmp52451 = inst_52415;var inst_52415__$1 = tmp52451;var state_52443__$1 = (function (){var statearr_52454 = state_52443;(statearr_52454[(10)] = inst_52415__$1);
(statearr_52454[(11)] = inst_52432);
return statearr_52454;
})();var statearr_52455_52474 = state_52443__$1;(statearr_52455_52474[(2)] = null);
(statearr_52455_52474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52444 === (9)))
{var inst_52423 = (state_52443[(7)]);var state_52443__$1 = state_52443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52443__$1,(11),out,inst_52423);
} else
{if((state_val_52444 === (5)))
{var inst_52437 = cljs.core.async.close_BANG_.call(null,out);var state_52443__$1 = state_52443;var statearr_52456_52475 = state_52443__$1;(statearr_52456_52475[(2)] = inst_52437);
(statearr_52456_52475[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52444 === (10)))
{var inst_52435 = (state_52443[(2)]);var state_52443__$1 = state_52443;var statearr_52457_52476 = state_52443__$1;(statearr_52457_52476[(2)] = inst_52435);
(statearr_52457_52476[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52444 === (8)))
{var inst_52424 = (state_52443[(9)]);var inst_52415 = (state_52443[(10)]);var inst_52423 = (state_52443[(7)]);var inst_52422 = (state_52443[(8)]);var inst_52427 = (function (){var c = inst_52424;var v = inst_52423;var vec__52420 = inst_52422;var cs = inst_52415;return ((function (c,v,vec__52420,cs,inst_52424,inst_52415,inst_52423,inst_52422,state_val_52444,c__5693__auto___52467,out){
return (function (p1__52360_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__52360_SHARP_);
});
;})(c,v,vec__52420,cs,inst_52424,inst_52415,inst_52423,inst_52422,state_val_52444,c__5693__auto___52467,out))
})();var inst_52428 = cljs.core.filterv.call(null,inst_52427,inst_52415);var inst_52415__$1 = inst_52428;var state_52443__$1 = (function (){var statearr_52458 = state_52443;(statearr_52458[(10)] = inst_52415__$1);
return statearr_52458;
})();var statearr_52459_52477 = state_52443__$1;(statearr_52459_52477[(2)] = null);
(statearr_52459_52477[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___52467,out))
;return ((function (switch__5678__auto__,c__5693__auto___52467,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52463 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52463[(0)] = state_machine__5679__auto__);
(statearr_52463[(1)] = (1));
return statearr_52463;
});
var state_machine__5679__auto____1 = (function (state_52443){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52443);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52464){if((e52464 instanceof Object))
{var ex__5682__auto__ = e52464;var statearr_52465_52478 = state_52443;(statearr_52465_52478[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52479 = state_52443;
state_52443 = G__52479;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52443){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52467,out))
})();var state__5695__auto__ = (function (){var statearr_52466 = f__5694__auto__.call(null);(statearr_52466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52467);
return statearr_52466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52467,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52572 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52572,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52572,out){
return (function (state_52549){var state_val_52550 = (state_52549[(1)]);if((state_val_52550 === (7)))
{var inst_52531 = (state_52549[(7)]);var inst_52531__$1 = (state_52549[(2)]);var inst_52532 = (inst_52531__$1 == null);var inst_52533 = cljs.core.not.call(null,inst_52532);var state_52549__$1 = (function (){var statearr_52551 = state_52549;(statearr_52551[(7)] = inst_52531__$1);
return statearr_52551;
})();if(inst_52533)
{var statearr_52552_52573 = state_52549__$1;(statearr_52552_52573[(1)] = (8));
} else
{var statearr_52553_52574 = state_52549__$1;(statearr_52553_52574[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (1)))
{var inst_52526 = (0);var state_52549__$1 = (function (){var statearr_52554 = state_52549;(statearr_52554[(8)] = inst_52526);
return statearr_52554;
})();var statearr_52555_52575 = state_52549__$1;(statearr_52555_52575[(2)] = null);
(statearr_52555_52575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (4)))
{var state_52549__$1 = state_52549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52549__$1,(7),ch);
} else
{if((state_val_52550 === (6)))
{var inst_52544 = (state_52549[(2)]);var state_52549__$1 = state_52549;var statearr_52556_52576 = state_52549__$1;(statearr_52556_52576[(2)] = inst_52544);
(statearr_52556_52576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (3)))
{var inst_52546 = (state_52549[(2)]);var inst_52547 = cljs.core.async.close_BANG_.call(null,out);var state_52549__$1 = (function (){var statearr_52557 = state_52549;(statearr_52557[(9)] = inst_52546);
return statearr_52557;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52549__$1,inst_52547);
} else
{if((state_val_52550 === (2)))
{var inst_52526 = (state_52549[(8)]);var inst_52528 = (inst_52526 < n);var state_52549__$1 = state_52549;if(cljs.core.truth_(inst_52528))
{var statearr_52558_52577 = state_52549__$1;(statearr_52558_52577[(1)] = (4));
} else
{var statearr_52559_52578 = state_52549__$1;(statearr_52559_52578[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (11)))
{var inst_52526 = (state_52549[(8)]);var inst_52536 = (state_52549[(2)]);var inst_52537 = (inst_52526 + (1));var inst_52526__$1 = inst_52537;var state_52549__$1 = (function (){var statearr_52560 = state_52549;(statearr_52560[(10)] = inst_52536);
(statearr_52560[(8)] = inst_52526__$1);
return statearr_52560;
})();var statearr_52561_52579 = state_52549__$1;(statearr_52561_52579[(2)] = null);
(statearr_52561_52579[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (9)))
{var state_52549__$1 = state_52549;var statearr_52562_52580 = state_52549__$1;(statearr_52562_52580[(2)] = null);
(statearr_52562_52580[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (5)))
{var state_52549__$1 = state_52549;var statearr_52563_52581 = state_52549__$1;(statearr_52563_52581[(2)] = null);
(statearr_52563_52581[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (10)))
{var inst_52541 = (state_52549[(2)]);var state_52549__$1 = state_52549;var statearr_52564_52582 = state_52549__$1;(statearr_52564_52582[(2)] = inst_52541);
(statearr_52564_52582[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52550 === (8)))
{var inst_52531 = (state_52549[(7)]);var state_52549__$1 = state_52549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52549__$1,(11),out,inst_52531);
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
});})(c__5693__auto___52572,out))
;return ((function (switch__5678__auto__,c__5693__auto___52572,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52568 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_52568[(0)] = state_machine__5679__auto__);
(statearr_52568[(1)] = (1));
return statearr_52568;
});
var state_machine__5679__auto____1 = (function (state_52549){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52549);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52569){if((e52569 instanceof Object))
{var ex__5682__auto__ = e52569;var statearr_52570_52583 = state_52549;(statearr_52570_52583[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52569;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52584 = state_52549;
state_52549 = G__52584;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52549){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52572,out))
})();var state__5695__auto__ = (function (){var statearr_52571 = f__5694__auto__.call(null);(statearr_52571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52572);
return statearr_52571;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52572,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52681 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52681,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52681,out){
return (function (state_52656){var state_val_52657 = (state_52656[(1)]);if((state_val_52657 === (7)))
{var inst_52651 = (state_52656[(2)]);var state_52656__$1 = state_52656;var statearr_52658_52682 = state_52656__$1;(statearr_52658_52682[(2)] = inst_52651);
(statearr_52658_52682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52657 === (1)))
{var inst_52633 = null;var state_52656__$1 = (function (){var statearr_52659 = state_52656;(statearr_52659[(7)] = inst_52633);
return statearr_52659;
})();var statearr_52660_52683 = state_52656__$1;(statearr_52660_52683[(2)] = null);
(statearr_52660_52683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52657 === (4)))
{var inst_52636 = (state_52656[(8)]);var inst_52636__$1 = (state_52656[(2)]);var inst_52637 = (inst_52636__$1 == null);var inst_52638 = cljs.core.not.call(null,inst_52637);var state_52656__$1 = (function (){var statearr_52661 = state_52656;(statearr_52661[(8)] = inst_52636__$1);
return statearr_52661;
})();if(inst_52638)
{var statearr_52662_52684 = state_52656__$1;(statearr_52662_52684[(1)] = (5));
} else
{var statearr_52663_52685 = state_52656__$1;(statearr_52663_52685[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52657 === (6)))
{var state_52656__$1 = state_52656;var statearr_52664_52686 = state_52656__$1;(statearr_52664_52686[(2)] = null);
(statearr_52664_52686[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52657 === (3)))
{var inst_52653 = (state_52656[(2)]);var inst_52654 = cljs.core.async.close_BANG_.call(null,out);var state_52656__$1 = (function (){var statearr_52665 = state_52656;(statearr_52665[(9)] = inst_52653);
return statearr_52665;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52656__$1,inst_52654);
} else
{if((state_val_52657 === (2)))
{var state_52656__$1 = state_52656;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52656__$1,(4),ch);
} else
{if((state_val_52657 === (11)))
{var inst_52636 = (state_52656[(8)]);var inst_52645 = (state_52656[(2)]);var inst_52633 = inst_52636;var state_52656__$1 = (function (){var statearr_52666 = state_52656;(statearr_52666[(7)] = inst_52633);
(statearr_52666[(10)] = inst_52645);
return statearr_52666;
})();var statearr_52667_52687 = state_52656__$1;(statearr_52667_52687[(2)] = null);
(statearr_52667_52687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52657 === (9)))
{var inst_52636 = (state_52656[(8)]);var state_52656__$1 = state_52656;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52656__$1,(11),out,inst_52636);
} else
{if((state_val_52657 === (5)))
{var inst_52633 = (state_52656[(7)]);var inst_52636 = (state_52656[(8)]);var inst_52640 = cljs.core._EQ_.call(null,inst_52636,inst_52633);var state_52656__$1 = state_52656;if(inst_52640)
{var statearr_52669_52688 = state_52656__$1;(statearr_52669_52688[(1)] = (8));
} else
{var statearr_52670_52689 = state_52656__$1;(statearr_52670_52689[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52657 === (10)))
{var inst_52648 = (state_52656[(2)]);var state_52656__$1 = state_52656;var statearr_52671_52690 = state_52656__$1;(statearr_52671_52690[(2)] = inst_52648);
(statearr_52671_52690[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52657 === (8)))
{var inst_52633 = (state_52656[(7)]);var tmp52668 = inst_52633;var inst_52633__$1 = tmp52668;var state_52656__$1 = (function (){var statearr_52672 = state_52656;(statearr_52672[(7)] = inst_52633__$1);
return statearr_52672;
})();var statearr_52673_52691 = state_52656__$1;(statearr_52673_52691[(2)] = null);
(statearr_52673_52691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___52681,out))
;return ((function (switch__5678__auto__,c__5693__auto___52681,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52677 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_52677[(0)] = state_machine__5679__auto__);
(statearr_52677[(1)] = (1));
return statearr_52677;
});
var state_machine__5679__auto____1 = (function (state_52656){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52656);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52678){if((e52678 instanceof Object))
{var ex__5682__auto__ = e52678;var statearr_52679_52692 = state_52656;(statearr_52679_52692[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52693 = state_52656;
state_52656 = G__52693;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52656){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52681,out))
})();var state__5695__auto__ = (function (){var statearr_52680 = f__5694__auto__.call(null);(statearr_52680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52681);
return statearr_52680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52681,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52828 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52828,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52828,out){
return (function (state_52798){var state_val_52799 = (state_52798[(1)]);if((state_val_52799 === (7)))
{var inst_52794 = (state_52798[(2)]);var state_52798__$1 = state_52798;var statearr_52800_52829 = state_52798__$1;(statearr_52800_52829[(2)] = inst_52794);
(statearr_52800_52829[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (1)))
{var inst_52761 = (new Array(n));var inst_52762 = inst_52761;var inst_52763 = (0);var state_52798__$1 = (function (){var statearr_52801 = state_52798;(statearr_52801[(7)] = inst_52762);
(statearr_52801[(8)] = inst_52763);
return statearr_52801;
})();var statearr_52802_52830 = state_52798__$1;(statearr_52802_52830[(2)] = null);
(statearr_52802_52830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (4)))
{var inst_52766 = (state_52798[(9)]);var inst_52766__$1 = (state_52798[(2)]);var inst_52767 = (inst_52766__$1 == null);var inst_52768 = cljs.core.not.call(null,inst_52767);var state_52798__$1 = (function (){var statearr_52803 = state_52798;(statearr_52803[(9)] = inst_52766__$1);
return statearr_52803;
})();if(inst_52768)
{var statearr_52804_52831 = state_52798__$1;(statearr_52804_52831[(1)] = (5));
} else
{var statearr_52805_52832 = state_52798__$1;(statearr_52805_52832[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (15)))
{var inst_52788 = (state_52798[(2)]);var state_52798__$1 = state_52798;var statearr_52806_52833 = state_52798__$1;(statearr_52806_52833[(2)] = inst_52788);
(statearr_52806_52833[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (13)))
{var state_52798__$1 = state_52798;var statearr_52807_52834 = state_52798__$1;(statearr_52807_52834[(2)] = null);
(statearr_52807_52834[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (6)))
{var inst_52763 = (state_52798[(8)]);var inst_52784 = (inst_52763 > (0));var state_52798__$1 = state_52798;if(cljs.core.truth_(inst_52784))
{var statearr_52808_52835 = state_52798__$1;(statearr_52808_52835[(1)] = (12));
} else
{var statearr_52809_52836 = state_52798__$1;(statearr_52809_52836[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (3)))
{var inst_52796 = (state_52798[(2)]);var state_52798__$1 = state_52798;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52798__$1,inst_52796);
} else
{if((state_val_52799 === (12)))
{var inst_52762 = (state_52798[(7)]);var inst_52786 = cljs.core.vec.call(null,inst_52762);var state_52798__$1 = state_52798;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52798__$1,(15),out,inst_52786);
} else
{if((state_val_52799 === (2)))
{var state_52798__$1 = state_52798;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52798__$1,(4),ch);
} else
{if((state_val_52799 === (11)))
{var inst_52778 = (state_52798[(2)]);var inst_52779 = (new Array(n));var inst_52762 = inst_52779;var inst_52763 = (0);var state_52798__$1 = (function (){var statearr_52810 = state_52798;(statearr_52810[(10)] = inst_52778);
(statearr_52810[(7)] = inst_52762);
(statearr_52810[(8)] = inst_52763);
return statearr_52810;
})();var statearr_52811_52837 = state_52798__$1;(statearr_52811_52837[(2)] = null);
(statearr_52811_52837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (9)))
{var inst_52762 = (state_52798[(7)]);var inst_52776 = cljs.core.vec.call(null,inst_52762);var state_52798__$1 = state_52798;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52798__$1,(11),out,inst_52776);
} else
{if((state_val_52799 === (5)))
{var inst_52766 = (state_52798[(9)]);var inst_52762 = (state_52798[(7)]);var inst_52771 = (state_52798[(11)]);var inst_52763 = (state_52798[(8)]);var inst_52770 = (inst_52762[inst_52763] = inst_52766);var inst_52771__$1 = (inst_52763 + (1));var inst_52772 = (inst_52771__$1 < n);var state_52798__$1 = (function (){var statearr_52812 = state_52798;(statearr_52812[(11)] = inst_52771__$1);
(statearr_52812[(12)] = inst_52770);
return statearr_52812;
})();if(cljs.core.truth_(inst_52772))
{var statearr_52813_52838 = state_52798__$1;(statearr_52813_52838[(1)] = (8));
} else
{var statearr_52814_52839 = state_52798__$1;(statearr_52814_52839[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (14)))
{var inst_52791 = (state_52798[(2)]);var inst_52792 = cljs.core.async.close_BANG_.call(null,out);var state_52798__$1 = (function (){var statearr_52816 = state_52798;(statearr_52816[(13)] = inst_52791);
return statearr_52816;
})();var statearr_52817_52840 = state_52798__$1;(statearr_52817_52840[(2)] = inst_52792);
(statearr_52817_52840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (10)))
{var inst_52782 = (state_52798[(2)]);var state_52798__$1 = state_52798;var statearr_52818_52841 = state_52798__$1;(statearr_52818_52841[(2)] = inst_52782);
(statearr_52818_52841[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52799 === (8)))
{var inst_52762 = (state_52798[(7)]);var inst_52771 = (state_52798[(11)]);var tmp52815 = inst_52762;var inst_52762__$1 = tmp52815;var inst_52763 = inst_52771;var state_52798__$1 = (function (){var statearr_52819 = state_52798;(statearr_52819[(7)] = inst_52762__$1);
(statearr_52819[(8)] = inst_52763);
return statearr_52819;
})();var statearr_52820_52842 = state_52798__$1;(statearr_52820_52842[(2)] = null);
(statearr_52820_52842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___52828,out))
;return ((function (switch__5678__auto__,c__5693__auto___52828,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52824[(0)] = state_machine__5679__auto__);
(statearr_52824[(1)] = (1));
return statearr_52824;
});
var state_machine__5679__auto____1 = (function (state_52798){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52798);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52825){if((e52825 instanceof Object))
{var ex__5682__auto__ = e52825;var statearr_52826_52843 = state_52798;(statearr_52826_52843[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52798);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52825;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52844 = state_52798;
state_52798 = G__52844;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52798){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52828,out))
})();var state__5695__auto__ = (function (){var statearr_52827 = f__5694__auto__.call(null);(statearr_52827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52828);
return statearr_52827;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52828,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52987,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52987,out){
return (function (state_52957){var state_val_52958 = (state_52957[(1)]);if((state_val_52958 === (7)))
{var inst_52953 = (state_52957[(2)]);var state_52957__$1 = state_52957;var statearr_52959_52988 = state_52957__$1;(statearr_52959_52988[(2)] = inst_52953);
(statearr_52959_52988[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (1)))
{var inst_52916 = [];var inst_52917 = inst_52916;var inst_52918 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_52957__$1 = (function (){var statearr_52960 = state_52957;(statearr_52960[(7)] = inst_52918);
(statearr_52960[(8)] = inst_52917);
return statearr_52960;
})();var statearr_52961_52989 = state_52957__$1;(statearr_52961_52989[(2)] = null);
(statearr_52961_52989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (4)))
{var inst_52921 = (state_52957[(9)]);var inst_52921__$1 = (state_52957[(2)]);var inst_52922 = (inst_52921__$1 == null);var inst_52923 = cljs.core.not.call(null,inst_52922);var state_52957__$1 = (function (){var statearr_52962 = state_52957;(statearr_52962[(9)] = inst_52921__$1);
return statearr_52962;
})();if(inst_52923)
{var statearr_52963_52990 = state_52957__$1;(statearr_52963_52990[(1)] = (5));
} else
{var statearr_52964_52991 = state_52957__$1;(statearr_52964_52991[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (15)))
{var inst_52947 = (state_52957[(2)]);var state_52957__$1 = state_52957;var statearr_52965_52992 = state_52957__$1;(statearr_52965_52992[(2)] = inst_52947);
(statearr_52965_52992[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (13)))
{var state_52957__$1 = state_52957;var statearr_52966_52993 = state_52957__$1;(statearr_52966_52993[(2)] = null);
(statearr_52966_52993[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (6)))
{var inst_52917 = (state_52957[(8)]);var inst_52942 = inst_52917.length;var inst_52943 = (inst_52942 > (0));var state_52957__$1 = state_52957;if(cljs.core.truth_(inst_52943))
{var statearr_52967_52994 = state_52957__$1;(statearr_52967_52994[(1)] = (12));
} else
{var statearr_52968_52995 = state_52957__$1;(statearr_52968_52995[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (3)))
{var inst_52955 = (state_52957[(2)]);var state_52957__$1 = state_52957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52957__$1,inst_52955);
} else
{if((state_val_52958 === (12)))
{var inst_52917 = (state_52957[(8)]);var inst_52945 = cljs.core.vec.call(null,inst_52917);var state_52957__$1 = state_52957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52957__$1,(15),out,inst_52945);
} else
{if((state_val_52958 === (2)))
{var state_52957__$1 = state_52957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52957__$1,(4),ch);
} else
{if((state_val_52958 === (11)))
{var inst_52921 = (state_52957[(9)]);var inst_52925 = (state_52957[(10)]);var inst_52935 = (state_52957[(2)]);var inst_52936 = [];var inst_52937 = inst_52936.push(inst_52921);var inst_52917 = inst_52936;var inst_52918 = inst_52925;var state_52957__$1 = (function (){var statearr_52969 = state_52957;(statearr_52969[(11)] = inst_52935);
(statearr_52969[(12)] = inst_52937);
(statearr_52969[(7)] = inst_52918);
(statearr_52969[(8)] = inst_52917);
return statearr_52969;
})();var statearr_52970_52996 = state_52957__$1;(statearr_52970_52996[(2)] = null);
(statearr_52970_52996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (9)))
{var inst_52917 = (state_52957[(8)]);var inst_52933 = cljs.core.vec.call(null,inst_52917);var state_52957__$1 = state_52957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52957__$1,(11),out,inst_52933);
} else
{if((state_val_52958 === (5)))
{var inst_52918 = (state_52957[(7)]);var inst_52921 = (state_52957[(9)]);var inst_52925 = (state_52957[(10)]);var inst_52925__$1 = f.call(null,inst_52921);var inst_52926 = cljs.core._EQ_.call(null,inst_52925__$1,inst_52918);var inst_52927 = cljs.core.keyword_identical_QMARK_.call(null,inst_52918,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_52928 = (inst_52926) || (inst_52927);var state_52957__$1 = (function (){var statearr_52971 = state_52957;(statearr_52971[(10)] = inst_52925__$1);
return statearr_52971;
})();if(cljs.core.truth_(inst_52928))
{var statearr_52972_52997 = state_52957__$1;(statearr_52972_52997[(1)] = (8));
} else
{var statearr_52973_52998 = state_52957__$1;(statearr_52973_52998[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (14)))
{var inst_52950 = (state_52957[(2)]);var inst_52951 = cljs.core.async.close_BANG_.call(null,out);var state_52957__$1 = (function (){var statearr_52975 = state_52957;(statearr_52975[(13)] = inst_52950);
return statearr_52975;
})();var statearr_52976_52999 = state_52957__$1;(statearr_52976_52999[(2)] = inst_52951);
(statearr_52976_52999[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (10)))
{var inst_52940 = (state_52957[(2)]);var state_52957__$1 = state_52957;var statearr_52977_53000 = state_52957__$1;(statearr_52977_53000[(2)] = inst_52940);
(statearr_52977_53000[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52958 === (8)))
{var inst_52921 = (state_52957[(9)]);var inst_52917 = (state_52957[(8)]);var inst_52925 = (state_52957[(10)]);var inst_52930 = inst_52917.push(inst_52921);var tmp52974 = inst_52917;var inst_52917__$1 = tmp52974;var inst_52918 = inst_52925;var state_52957__$1 = (function (){var statearr_52978 = state_52957;(statearr_52978[(7)] = inst_52918);
(statearr_52978[(8)] = inst_52917__$1);
(statearr_52978[(14)] = inst_52930);
return statearr_52978;
})();var statearr_52979_53001 = state_52957__$1;(statearr_52979_53001[(2)] = null);
(statearr_52979_53001[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__5693__auto___52987,out))
;return ((function (switch__5678__auto__,c__5693__auto___52987,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52983[(0)] = state_machine__5679__auto__);
(statearr_52983[(1)] = (1));
return statearr_52983;
});
var state_machine__5679__auto____1 = (function (state_52957){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52957);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52984){if((e52984 instanceof Object))
{var ex__5682__auto__ = e52984;var statearr_52985_53002 = state_52957;(statearr_52985_53002[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52957);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53003 = state_52957;
state_52957 = G__53003;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52957){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52987,out))
})();var state__5695__auto__ = (function (){var statearr_52986 = f__5694__auto__.call(null);(statearr_52986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52987);
return statearr_52986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52987,out))
);
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