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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12416 = (function (f,fn_handler,meta12417){
this.f = f;
this.fn_handler = fn_handler;
this.meta12417 = meta12417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12416.cljs$lang$type = true;
cljs.core.async.t12416.cljs$lang$ctorStr = "cljs.core.async/t12416";
cljs.core.async.t12416.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12416");
});
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12418){var self__ = this;
var _12418__$1 = this;return self__.meta12417;
});
cljs.core.async.t12416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12418,meta12417__$1){var self__ = this;
var _12418__$1 = this;return (new cljs.core.async.t12416(self__.f,self__.fn_handler,meta12417__$1));
});
cljs.core.async.__GT_t12416 = (function __GT_t12416(f__$1,fn_handler__$1,meta12417){return (new cljs.core.async.t12416(f__$1,fn_handler__$1,meta12417));
});
}
return (new cljs.core.async.t12416(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12420 = buff;if(G__12420)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12420.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12420.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12420);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12420);
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
{var val_12421 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12421);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12421);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12422 = n;var x_12423 = 0;while(true){
if((x_12423 < n__4248__auto___12422))
{(a[x_12423] = 0);
{
var G__12424 = (x_12423 + 1);
x_12423 = G__12424;
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
var G__12425 = (i + 1);
i = G__12425;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12429 = (function (flag,alt_flag,meta12430){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12430 = meta12430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12429.cljs$lang$type = true;
cljs.core.async.t12429.cljs$lang$ctorStr = "cljs.core.async/t12429";
cljs.core.async.t12429.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12429");
});
cljs.core.async.t12429.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12431){var self__ = this;
var _12431__$1 = this;return self__.meta12430;
});
cljs.core.async.t12429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12431,meta12430__$1){var self__ = this;
var _12431__$1 = this;return (new cljs.core.async.t12429(self__.flag,self__.alt_flag,meta12430__$1));
});
cljs.core.async.__GT_t12429 = (function __GT_t12429(flag__$1,alt_flag__$1,meta12430){return (new cljs.core.async.t12429(flag__$1,alt_flag__$1,meta12430));
});
}
return (new cljs.core.async.t12429(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12435 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12435 = (function (cb,flag,alt_handler,meta12436){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12436 = meta12436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12435.cljs$lang$type = true;
cljs.core.async.t12435.cljs$lang$ctorStr = "cljs.core.async/t12435";
cljs.core.async.t12435.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12435");
});
cljs.core.async.t12435.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12437){var self__ = this;
var _12437__$1 = this;return self__.meta12436;
});
cljs.core.async.t12435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12437,meta12436__$1){var self__ = this;
var _12437__$1 = this;return (new cljs.core.async.t12435(self__.cb,self__.flag,self__.alt_handler,meta12436__$1));
});
cljs.core.async.__GT_t12435 = (function __GT_t12435(cb__$1,flag__$1,alt_handler__$1,meta12436){return (new cljs.core.async.t12435(cb__$1,flag__$1,alt_handler__$1,meta12436));
});
}
return (new cljs.core.async.t12435(cb,flag,alt_handler,null));
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
return (function (p1__12438_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12438_SHARP_,port], null));
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
var G__12439 = (i + 1);
i = G__12439;
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
var alts_BANG___delegate = function (ports,p__12440){var map__12442 = p__12440;var map__12442__$1 = ((cljs.core.seq_QMARK_.call(null,map__12442))?cljs.core.apply.call(null,cljs.core.hash_map,map__12442):map__12442);var opts = map__12442__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12440 = null;if (arguments.length > 1) {
  p__12440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12440);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12443){
var ports = cljs.core.first(arglist__12443);
var p__12440 = cljs.core.rest(arglist__12443);
return alts_BANG___delegate(ports,p__12440);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12451 = (function (ch,f,map_LT_,meta12452){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12452 = meta12452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12451.cljs$lang$type = true;
cljs.core.async.t12451.cljs$lang$ctorStr = "cljs.core.async/t12451";
cljs.core.async.t12451.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12451");
});
cljs.core.async.t12451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12454 = (function (fn1,_,meta12452,ch,f,map_LT_,meta12455){
this.fn1 = fn1;
this._ = _;
this.meta12452 = meta12452;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12455 = meta12455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12454.cljs$lang$type = true;
cljs.core.async.t12454.cljs$lang$ctorStr = "cljs.core.async/t12454";
cljs.core.async.t12454.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12454");
});
cljs.core.async.t12454.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12454.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12444_SHARP_){return f1.call(null,(((p1__12444_SHARP_ == null))?null:self__.f.call(null,p1__12444_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12456){var self__ = this;
var _12456__$1 = this;return self__.meta12455;
});
cljs.core.async.t12454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12456,meta12455__$1){var self__ = this;
var _12456__$1 = this;return (new cljs.core.async.t12454(self__.fn1,self__._,self__.meta12452,self__.ch,self__.f,self__.map_LT_,meta12455__$1));
});
cljs.core.async.__GT_t12454 = (function __GT_t12454(fn1__$1,___$2,meta12452__$1,ch__$2,f__$2,map_LT___$2,meta12455){return (new cljs.core.async.t12454(fn1__$1,___$2,meta12452__$1,ch__$2,f__$2,map_LT___$2,meta12455));
});
}
return (new cljs.core.async.t12454(fn1,___$1,self__.meta12452,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12451.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12453){var self__ = this;
var _12453__$1 = this;return self__.meta12452;
});
cljs.core.async.t12451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12453,meta12452__$1){var self__ = this;
var _12453__$1 = this;return (new cljs.core.async.t12451(self__.ch,self__.f,self__.map_LT_,meta12452__$1));
});
cljs.core.async.__GT_t12451 = (function __GT_t12451(ch__$1,f__$1,map_LT___$1,meta12452){return (new cljs.core.async.t12451(ch__$1,f__$1,map_LT___$1,meta12452));
});
}
return (new cljs.core.async.t12451(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12460 = (function (ch,f,map_GT_,meta12461){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12461 = meta12461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12460.cljs$lang$type = true;
cljs.core.async.t12460.cljs$lang$ctorStr = "cljs.core.async/t12460";
cljs.core.async.t12460.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12460");
});
cljs.core.async.t12460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12460.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12462){var self__ = this;
var _12462__$1 = this;return self__.meta12461;
});
cljs.core.async.t12460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12462,meta12461__$1){var self__ = this;
var _12462__$1 = this;return (new cljs.core.async.t12460(self__.ch,self__.f,self__.map_GT_,meta12461__$1));
});
cljs.core.async.__GT_t12460 = (function __GT_t12460(ch__$1,f__$1,map_GT___$1,meta12461){return (new cljs.core.async.t12460(ch__$1,f__$1,map_GT___$1,meta12461));
});
}
return (new cljs.core.async.t12460(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12466 = (function (ch,p,filter_GT_,meta12467){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12467 = meta12467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12466.cljs$lang$type = true;
cljs.core.async.t12466.cljs$lang$ctorStr = "cljs.core.async/t12466";
cljs.core.async.t12466.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12466");
});
cljs.core.async.t12466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12466.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12468){var self__ = this;
var _12468__$1 = this;return self__.meta12467;
});
cljs.core.async.t12466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12468,meta12467__$1){var self__ = this;
var _12468__$1 = this;return (new cljs.core.async.t12466(self__.ch,self__.p,self__.filter_GT_,meta12467__$1));
});
cljs.core.async.__GT_t12466 = (function __GT_t12466(ch__$1,p__$1,filter_GT___$1,meta12467){return (new cljs.core.async.t12466(ch__$1,p__$1,filter_GT___$1,meta12467));
});
}
return (new cljs.core.async.t12466(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12551 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12530){var state_val_12531 = (state_12530[1]);if((state_val_12531 === 1))
{var state_12530__$1 = state_12530;var statearr_12532_12552 = state_12530__$1;(statearr_12532_12552[2] = null);
(statearr_12532_12552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 2))
{var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12530__$1,4,ch);
} else
{if((state_val_12531 === 3))
{var inst_12528 = (state_12530[2]);var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12530__$1,inst_12528);
} else
{if((state_val_12531 === 4))
{var inst_12512 = (state_12530[7]);var inst_12512__$1 = (state_12530[2]);var inst_12513 = (inst_12512__$1 == null);var state_12530__$1 = (function (){var statearr_12533 = state_12530;(statearr_12533[7] = inst_12512__$1);
return statearr_12533;
})();if(cljs.core.truth_(inst_12513))
{var statearr_12534_12553 = state_12530__$1;(statearr_12534_12553[1] = 5);
} else
{var statearr_12535_12554 = state_12530__$1;(statearr_12535_12554[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 5))
{var inst_12515 = cljs.core.async.close_BANG_.call(null,out);var state_12530__$1 = state_12530;var statearr_12536_12555 = state_12530__$1;(statearr_12536_12555[2] = inst_12515);
(statearr_12536_12555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 6))
{var inst_12512 = (state_12530[7]);var inst_12517 = p.call(null,inst_12512);var state_12530__$1 = state_12530;if(cljs.core.truth_(inst_12517))
{var statearr_12537_12556 = state_12530__$1;(statearr_12537_12556[1] = 8);
} else
{var statearr_12538_12557 = state_12530__$1;(statearr_12538_12557[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 7))
{var inst_12526 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12539_12558 = state_12530__$1;(statearr_12539_12558[2] = inst_12526);
(statearr_12539_12558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 8))
{var inst_12512 = (state_12530[7]);var state_12530__$1 = state_12530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12530__$1,11,out,inst_12512);
} else
{if((state_val_12531 === 9))
{var state_12530__$1 = state_12530;var statearr_12540_12559 = state_12530__$1;(statearr_12540_12559[2] = null);
(statearr_12540_12559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 10))
{var inst_12523 = (state_12530[2]);var state_12530__$1 = (function (){var statearr_12541 = state_12530;(statearr_12541[8] = inst_12523);
return statearr_12541;
})();var statearr_12542_12560 = state_12530__$1;(statearr_12542_12560[2] = null);
(statearr_12542_12560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12531 === 11))
{var inst_12520 = (state_12530[2]);var state_12530__$1 = state_12530;var statearr_12543_12561 = state_12530__$1;(statearr_12543_12561[2] = inst_12520);
(statearr_12543_12561[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12547 = [null,null,null,null,null,null,null,null,null];(statearr_12547[0] = state_machine__5507__auto__);
(statearr_12547[1] = 1);
return statearr_12547;
});
var state_machine__5507__auto____1 = (function (state_12530){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12530);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12548){if((e12548 instanceof Object))
{var ex__5510__auto__ = e12548;var statearr_12549_12562 = state_12530;(statearr_12549_12562[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12563 = state_12530;
state_12530 = G__12563;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12530){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12550 = f__5522__auto__.call(null);(statearr_12550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12551);
return statearr_12550;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12715){var state_val_12716 = (state_12715[1]);if((state_val_12716 === 1))
{var state_12715__$1 = state_12715;var statearr_12717_12754 = state_12715__$1;(statearr_12717_12754[2] = null);
(statearr_12717_12754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 2))
{var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12715__$1,4,in$);
} else
{if((state_val_12716 === 3))
{var inst_12713 = (state_12715[2]);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12715__$1,inst_12713);
} else
{if((state_val_12716 === 4))
{var inst_12661 = (state_12715[7]);var inst_12661__$1 = (state_12715[2]);var inst_12662 = (inst_12661__$1 == null);var state_12715__$1 = (function (){var statearr_12718 = state_12715;(statearr_12718[7] = inst_12661__$1);
return statearr_12718;
})();if(cljs.core.truth_(inst_12662))
{var statearr_12719_12755 = state_12715__$1;(statearr_12719_12755[1] = 5);
} else
{var statearr_12720_12756 = state_12715__$1;(statearr_12720_12756[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 5))
{var inst_12664 = cljs.core.async.close_BANG_.call(null,out);var state_12715__$1 = state_12715;var statearr_12721_12757 = state_12715__$1;(statearr_12721_12757[2] = inst_12664);
(statearr_12721_12757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 6))
{var inst_12661 = (state_12715[7]);var inst_12666 = f.call(null,inst_12661);var inst_12671 = cljs.core.seq.call(null,inst_12666);var inst_12672 = inst_12671;var inst_12673 = null;var inst_12674 = 0;var inst_12675 = 0;var state_12715__$1 = (function (){var statearr_12722 = state_12715;(statearr_12722[8] = inst_12675);
(statearr_12722[9] = inst_12674);
(statearr_12722[10] = inst_12673);
(statearr_12722[11] = inst_12672);
return statearr_12722;
})();var statearr_12723_12758 = state_12715__$1;(statearr_12723_12758[2] = null);
(statearr_12723_12758[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 7))
{var inst_12711 = (state_12715[2]);var state_12715__$1 = state_12715;var statearr_12724_12759 = state_12715__$1;(statearr_12724_12759[2] = inst_12711);
(statearr_12724_12759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 8))
{var inst_12675 = (state_12715[8]);var inst_12674 = (state_12715[9]);var inst_12677 = (inst_12675 < inst_12674);var inst_12678 = inst_12677;var state_12715__$1 = state_12715;if(cljs.core.truth_(inst_12678))
{var statearr_12725_12760 = state_12715__$1;(statearr_12725_12760[1] = 10);
} else
{var statearr_12726_12761 = state_12715__$1;(statearr_12726_12761[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 9))
{var inst_12708 = (state_12715[2]);var state_12715__$1 = (function (){var statearr_12727 = state_12715;(statearr_12727[12] = inst_12708);
return statearr_12727;
})();var statearr_12728_12762 = state_12715__$1;(statearr_12728_12762[2] = null);
(statearr_12728_12762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 10))
{var inst_12675 = (state_12715[8]);var inst_12673 = (state_12715[10]);var inst_12680 = cljs.core._nth.call(null,inst_12673,inst_12675);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12715__$1,13,out,inst_12680);
} else
{if((state_val_12716 === 11))
{var inst_12672 = (state_12715[11]);var inst_12686 = (state_12715[13]);var inst_12686__$1 = cljs.core.seq.call(null,inst_12672);var state_12715__$1 = (function (){var statearr_12732 = state_12715;(statearr_12732[13] = inst_12686__$1);
return statearr_12732;
})();if(inst_12686__$1)
{var statearr_12733_12763 = state_12715__$1;(statearr_12733_12763[1] = 14);
} else
{var statearr_12734_12764 = state_12715__$1;(statearr_12734_12764[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 12))
{var inst_12706 = (state_12715[2]);var state_12715__$1 = state_12715;var statearr_12735_12765 = state_12715__$1;(statearr_12735_12765[2] = inst_12706);
(statearr_12735_12765[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 13))
{var inst_12675 = (state_12715[8]);var inst_12674 = (state_12715[9]);var inst_12673 = (state_12715[10]);var inst_12672 = (state_12715[11]);var inst_12682 = (state_12715[2]);var inst_12683 = (inst_12675 + 1);var tmp12729 = inst_12674;var tmp12730 = inst_12673;var tmp12731 = inst_12672;var inst_12672__$1 = tmp12731;var inst_12673__$1 = tmp12730;var inst_12674__$1 = tmp12729;var inst_12675__$1 = inst_12683;var state_12715__$1 = (function (){var statearr_12736 = state_12715;(statearr_12736[8] = inst_12675__$1);
(statearr_12736[9] = inst_12674__$1);
(statearr_12736[10] = inst_12673__$1);
(statearr_12736[11] = inst_12672__$1);
(statearr_12736[14] = inst_12682);
return statearr_12736;
})();var statearr_12737_12766 = state_12715__$1;(statearr_12737_12766[2] = null);
(statearr_12737_12766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 14))
{var inst_12686 = (state_12715[13]);var inst_12688 = cljs.core.chunked_seq_QMARK_.call(null,inst_12686);var state_12715__$1 = state_12715;if(inst_12688)
{var statearr_12738_12767 = state_12715__$1;(statearr_12738_12767[1] = 17);
} else
{var statearr_12739_12768 = state_12715__$1;(statearr_12739_12768[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 15))
{var state_12715__$1 = state_12715;var statearr_12740_12769 = state_12715__$1;(statearr_12740_12769[2] = null);
(statearr_12740_12769[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 16))
{var inst_12704 = (state_12715[2]);var state_12715__$1 = state_12715;var statearr_12741_12770 = state_12715__$1;(statearr_12741_12770[2] = inst_12704);
(statearr_12741_12770[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 17))
{var inst_12686 = (state_12715[13]);var inst_12690 = cljs.core.chunk_first.call(null,inst_12686);var inst_12691 = cljs.core.chunk_rest.call(null,inst_12686);var inst_12692 = cljs.core.count.call(null,inst_12690);var inst_12672 = inst_12691;var inst_12673 = inst_12690;var inst_12674 = inst_12692;var inst_12675 = 0;var state_12715__$1 = (function (){var statearr_12742 = state_12715;(statearr_12742[8] = inst_12675);
(statearr_12742[9] = inst_12674);
(statearr_12742[10] = inst_12673);
(statearr_12742[11] = inst_12672);
return statearr_12742;
})();var statearr_12743_12771 = state_12715__$1;(statearr_12743_12771[2] = null);
(statearr_12743_12771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 18))
{var inst_12686 = (state_12715[13]);var inst_12695 = cljs.core.first.call(null,inst_12686);var state_12715__$1 = state_12715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12715__$1,20,out,inst_12695);
} else
{if((state_val_12716 === 19))
{var inst_12701 = (state_12715[2]);var state_12715__$1 = state_12715;var statearr_12744_12772 = state_12715__$1;(statearr_12744_12772[2] = inst_12701);
(statearr_12744_12772[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12716 === 20))
{var inst_12686 = (state_12715[13]);var inst_12697 = (state_12715[2]);var inst_12698 = cljs.core.next.call(null,inst_12686);var inst_12672 = inst_12698;var inst_12673 = null;var inst_12674 = 0;var inst_12675 = 0;var state_12715__$1 = (function (){var statearr_12745 = state_12715;(statearr_12745[8] = inst_12675);
(statearr_12745[9] = inst_12674);
(statearr_12745[10] = inst_12673);
(statearr_12745[11] = inst_12672);
(statearr_12745[15] = inst_12697);
return statearr_12745;
})();var statearr_12746_12773 = state_12715__$1;(statearr_12746_12773[2] = null);
(statearr_12746_12773[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12750[0] = state_machine__5507__auto__);
(statearr_12750[1] = 1);
return statearr_12750;
});
var state_machine__5507__auto____1 = (function (state_12715){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12715);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12751){if((e12751 instanceof Object))
{var ex__5510__auto__ = e12751;var statearr_12752_12774 = state_12715;(statearr_12752_12774[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12715);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12775 = state_12715;
state_12715 = G__12775;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12715){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12753 = f__5522__auto__.call(null);(statearr_12753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12753;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12856 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12835){var state_val_12836 = (state_12835[1]);if((state_val_12836 === 1))
{var state_12835__$1 = state_12835;var statearr_12837_12857 = state_12835__$1;(statearr_12837_12857[2] = null);
(statearr_12837_12857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 2))
{var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12835__$1,4,from);
} else
{if((state_val_12836 === 3))
{var inst_12833 = (state_12835[2]);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12835__$1,inst_12833);
} else
{if((state_val_12836 === 4))
{var inst_12818 = (state_12835[7]);var inst_12818__$1 = (state_12835[2]);var inst_12819 = (inst_12818__$1 == null);var state_12835__$1 = (function (){var statearr_12838 = state_12835;(statearr_12838[7] = inst_12818__$1);
return statearr_12838;
})();if(cljs.core.truth_(inst_12819))
{var statearr_12839_12858 = state_12835__$1;(statearr_12839_12858[1] = 5);
} else
{var statearr_12840_12859 = state_12835__$1;(statearr_12840_12859[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 5))
{var state_12835__$1 = state_12835;if(cljs.core.truth_(close_QMARK_))
{var statearr_12841_12860 = state_12835__$1;(statearr_12841_12860[1] = 8);
} else
{var statearr_12842_12861 = state_12835__$1;(statearr_12842_12861[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 6))
{var inst_12818 = (state_12835[7]);var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12835__$1,11,to,inst_12818);
} else
{if((state_val_12836 === 7))
{var inst_12831 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12843_12862 = state_12835__$1;(statearr_12843_12862[2] = inst_12831);
(statearr_12843_12862[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 8))
{var inst_12822 = cljs.core.async.close_BANG_.call(null,to);var state_12835__$1 = state_12835;var statearr_12844_12863 = state_12835__$1;(statearr_12844_12863[2] = inst_12822);
(statearr_12844_12863[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 9))
{var state_12835__$1 = state_12835;var statearr_12845_12864 = state_12835__$1;(statearr_12845_12864[2] = null);
(statearr_12845_12864[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 10))
{var inst_12825 = (state_12835[2]);var state_12835__$1 = state_12835;var statearr_12846_12865 = state_12835__$1;(statearr_12846_12865[2] = inst_12825);
(statearr_12846_12865[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12836 === 11))
{var inst_12828 = (state_12835[2]);var state_12835__$1 = (function (){var statearr_12847 = state_12835;(statearr_12847[8] = inst_12828);
return statearr_12847;
})();var statearr_12848_12866 = state_12835__$1;(statearr_12848_12866[2] = null);
(statearr_12848_12866[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12852 = [null,null,null,null,null,null,null,null,null];(statearr_12852[0] = state_machine__5507__auto__);
(statearr_12852[1] = 1);
return statearr_12852;
});
var state_machine__5507__auto____1 = (function (state_12835){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12835);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12853){if((e12853 instanceof Object))
{var ex__5510__auto__ = e12853;var statearr_12854_12867 = state_12835;(statearr_12854_12867[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12868 = state_12835;
state_12835 = G__12868;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12835){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12855 = f__5522__auto__.call(null);(statearr_12855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12856);
return statearr_12855;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12955 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12933){var state_val_12934 = (state_12933[1]);if((state_val_12934 === 1))
{var state_12933__$1 = state_12933;var statearr_12935_12956 = state_12933__$1;(statearr_12935_12956[2] = null);
(statearr_12935_12956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 2))
{var state_12933__$1 = state_12933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12933__$1,4,ch);
} else
{if((state_val_12934 === 3))
{var inst_12931 = (state_12933[2]);var state_12933__$1 = state_12933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12933__$1,inst_12931);
} else
{if((state_val_12934 === 4))
{var inst_12914 = (state_12933[7]);var inst_12914__$1 = (state_12933[2]);var inst_12915 = (inst_12914__$1 == null);var state_12933__$1 = (function (){var statearr_12936 = state_12933;(statearr_12936[7] = inst_12914__$1);
return statearr_12936;
})();if(cljs.core.truth_(inst_12915))
{var statearr_12937_12957 = state_12933__$1;(statearr_12937_12957[1] = 5);
} else
{var statearr_12938_12958 = state_12933__$1;(statearr_12938_12958[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 5))
{var inst_12917 = cljs.core.async.close_BANG_.call(null,tc);var inst_12918 = cljs.core.async.close_BANG_.call(null,fc);var state_12933__$1 = (function (){var statearr_12939 = state_12933;(statearr_12939[8] = inst_12917);
return statearr_12939;
})();var statearr_12940_12959 = state_12933__$1;(statearr_12940_12959[2] = inst_12918);
(statearr_12940_12959[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 6))
{var inst_12914 = (state_12933[7]);var inst_12920 = p.call(null,inst_12914);var state_12933__$1 = state_12933;if(cljs.core.truth_(inst_12920))
{var statearr_12941_12960 = state_12933__$1;(statearr_12941_12960[1] = 9);
} else
{var statearr_12942_12961 = state_12933__$1;(statearr_12942_12961[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 7))
{var inst_12929 = (state_12933[2]);var state_12933__$1 = state_12933;var statearr_12943_12962 = state_12933__$1;(statearr_12943_12962[2] = inst_12929);
(statearr_12943_12962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 8))
{var inst_12926 = (state_12933[2]);var state_12933__$1 = (function (){var statearr_12944 = state_12933;(statearr_12944[9] = inst_12926);
return statearr_12944;
})();var statearr_12945_12963 = state_12933__$1;(statearr_12945_12963[2] = null);
(statearr_12945_12963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 9))
{var state_12933__$1 = state_12933;var statearr_12946_12964 = state_12933__$1;(statearr_12946_12964[2] = tc);
(statearr_12946_12964[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 10))
{var state_12933__$1 = state_12933;var statearr_12947_12965 = state_12933__$1;(statearr_12947_12965[2] = fc);
(statearr_12947_12965[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12934 === 11))
{var inst_12914 = (state_12933[7]);var inst_12924 = (state_12933[2]);var state_12933__$1 = state_12933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12933__$1,8,inst_12924,inst_12914);
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
var state_machine__5507__auto____0 = (function (){var statearr_12951 = [null,null,null,null,null,null,null,null,null,null];(statearr_12951[0] = state_machine__5507__auto__);
(statearr_12951[1] = 1);
return statearr_12951;
});
var state_machine__5507__auto____1 = (function (state_12933){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12952){if((e12952 instanceof Object))
{var ex__5510__auto__ = e12952;var statearr_12953_12966 = state_12933;(statearr_12953_12966[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12952;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12967 = state_12933;
state_12933 = G__12967;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12933){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12954 = f__5522__auto__.call(null);(statearr_12954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12955);
return statearr_12954;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13014){var state_val_13015 = (state_13014[1]);if((state_val_13015 === 7))
{var inst_13010 = (state_13014[2]);var state_13014__$1 = state_13014;var statearr_13016_13032 = state_13014__$1;(statearr_13016_13032[2] = inst_13010);
(statearr_13016_13032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13015 === 6))
{var inst_13003 = (state_13014[7]);var inst_13000 = (state_13014[8]);var inst_13007 = f.call(null,inst_13000,inst_13003);var inst_13000__$1 = inst_13007;var state_13014__$1 = (function (){var statearr_13017 = state_13014;(statearr_13017[8] = inst_13000__$1);
return statearr_13017;
})();var statearr_13018_13033 = state_13014__$1;(statearr_13018_13033[2] = null);
(statearr_13018_13033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13015 === 5))
{var inst_13000 = (state_13014[8]);var state_13014__$1 = state_13014;var statearr_13019_13034 = state_13014__$1;(statearr_13019_13034[2] = inst_13000);
(statearr_13019_13034[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13015 === 4))
{var inst_13003 = (state_13014[7]);var inst_13003__$1 = (state_13014[2]);var inst_13004 = (inst_13003__$1 == null);var state_13014__$1 = (function (){var statearr_13020 = state_13014;(statearr_13020[7] = inst_13003__$1);
return statearr_13020;
})();if(cljs.core.truth_(inst_13004))
{var statearr_13021_13035 = state_13014__$1;(statearr_13021_13035[1] = 5);
} else
{var statearr_13022_13036 = state_13014__$1;(statearr_13022_13036[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13015 === 3))
{var inst_13012 = (state_13014[2]);var state_13014__$1 = state_13014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13014__$1,inst_13012);
} else
{if((state_val_13015 === 2))
{var state_13014__$1 = state_13014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13014__$1,4,ch);
} else
{if((state_val_13015 === 1))
{var inst_13000 = init;var state_13014__$1 = (function (){var statearr_13023 = state_13014;(statearr_13023[8] = inst_13000);
return statearr_13023;
})();var statearr_13024_13037 = state_13014__$1;(statearr_13024_13037[2] = null);
(statearr_13024_13037[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13028 = [null,null,null,null,null,null,null,null,null];(statearr_13028[0] = state_machine__5507__auto__);
(statearr_13028[1] = 1);
return statearr_13028;
});
var state_machine__5507__auto____1 = (function (state_13014){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13014);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13029){if((e13029 instanceof Object))
{var ex__5510__auto__ = e13029;var statearr_13030_13038 = state_13014;(statearr_13030_13038[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13014);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13039 = state_13014;
state_13014 = G__13039;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13014){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13031 = f__5522__auto__.call(null);(statearr_13031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13031;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13101){var state_val_13102 = (state_13101[1]);if((state_val_13102 === 1))
{var inst_13081 = cljs.core.seq.call(null,coll);var inst_13082 = inst_13081;var state_13101__$1 = (function (){var statearr_13103 = state_13101;(statearr_13103[7] = inst_13082);
return statearr_13103;
})();var statearr_13104_13122 = state_13101__$1;(statearr_13104_13122[2] = null);
(statearr_13104_13122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 2))
{var inst_13082 = (state_13101[7]);var state_13101__$1 = state_13101;if(cljs.core.truth_(inst_13082))
{var statearr_13105_13123 = state_13101__$1;(statearr_13105_13123[1] = 4);
} else
{var statearr_13106_13124 = state_13101__$1;(statearr_13106_13124[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 3))
{var inst_13099 = (state_13101[2]);var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13101__$1,inst_13099);
} else
{if((state_val_13102 === 4))
{var inst_13082 = (state_13101[7]);var inst_13085 = cljs.core.first.call(null,inst_13082);var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13101__$1,7,ch,inst_13085);
} else
{if((state_val_13102 === 5))
{var state_13101__$1 = state_13101;if(cljs.core.truth_(close_QMARK_))
{var statearr_13107_13125 = state_13101__$1;(statearr_13107_13125[1] = 8);
} else
{var statearr_13108_13126 = state_13101__$1;(statearr_13108_13126[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 6))
{var inst_13097 = (state_13101[2]);var state_13101__$1 = state_13101;var statearr_13109_13127 = state_13101__$1;(statearr_13109_13127[2] = inst_13097);
(statearr_13109_13127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 7))
{var inst_13082 = (state_13101[7]);var inst_13087 = (state_13101[2]);var inst_13088 = cljs.core.next.call(null,inst_13082);var inst_13082__$1 = inst_13088;var state_13101__$1 = (function (){var statearr_13110 = state_13101;(statearr_13110[8] = inst_13087);
(statearr_13110[7] = inst_13082__$1);
return statearr_13110;
})();var statearr_13111_13128 = state_13101__$1;(statearr_13111_13128[2] = null);
(statearr_13111_13128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 8))
{var inst_13092 = cljs.core.async.close_BANG_.call(null,ch);var state_13101__$1 = state_13101;var statearr_13112_13129 = state_13101__$1;(statearr_13112_13129[2] = inst_13092);
(statearr_13112_13129[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 9))
{var state_13101__$1 = state_13101;var statearr_13113_13130 = state_13101__$1;(statearr_13113_13130[2] = null);
(statearr_13113_13130[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13102 === 10))
{var inst_13095 = (state_13101[2]);var state_13101__$1 = state_13101;var statearr_13114_13131 = state_13101__$1;(statearr_13114_13131[2] = inst_13095);
(statearr_13114_13131[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13118 = [null,null,null,null,null,null,null,null,null];(statearr_13118[0] = state_machine__5507__auto__);
(statearr_13118[1] = 1);
return statearr_13118;
});
var state_machine__5507__auto____1 = (function (state_13101){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13119){if((e13119 instanceof Object))
{var ex__5510__auto__ = e13119;var statearr_13120_13132 = state_13101;(statearr_13120_13132[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13133 = state_13101;
state_13101 = G__13133;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13101){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13121 = f__5522__auto__.call(null);(statearr_13121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13121;
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
cljs.core.async.Mux = (function (){var obj13135 = {};return obj13135;
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
cljs.core.async.Mult = (function (){var obj13137 = {};return obj13137;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13361 = (function (cs,ch,mult,meta13362){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13362 = meta13362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13361.cljs$lang$type = true;
cljs.core.async.t13361.cljs$lang$ctorStr = "cljs.core.async/t13361";
cljs.core.async.t13361.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13361");
});})(cs))
;
cljs.core.async.t13361.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13361.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13361.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13361.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13361.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13363){var self__ = this;
var _13363__$1 = this;return self__.meta13362;
});})(cs))
;
cljs.core.async.t13361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13363,meta13362__$1){var self__ = this;
var _13363__$1 = this;return (new cljs.core.async.t13361(self__.cs,self__.ch,self__.mult,meta13362__$1));
});})(cs))
;
cljs.core.async.__GT_t13361 = ((function (cs){
return (function __GT_t13361(cs__$1,ch__$1,mult__$1,meta13362){return (new cljs.core.async.t13361(cs__$1,ch__$1,mult__$1,meta13362));
});})(cs))
;
}
return (new cljs.core.async.t13361(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13498){var state_val_13499 = (state_13498[1]);if((state_val_13499 === 32))
{var inst_13366 = (state_13498[7]);var inst_13442 = (state_13498[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13498,31,Object,null,30);var inst_13449 = cljs.core.async.put_BANG_.call(null,inst_13442,inst_13366,done);var state_13498__$1 = state_13498;var statearr_13500_13585 = state_13498__$1;(statearr_13500_13585[2] = inst_13449);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13498__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 1))
{var state_13498__$1 = state_13498;var statearr_13501_13586 = state_13498__$1;(statearr_13501_13586[2] = null);
(statearr_13501_13586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 33))
{var inst_13455 = (state_13498[9]);var inst_13457 = cljs.core.chunked_seq_QMARK_.call(null,inst_13455);var state_13498__$1 = state_13498;if(inst_13457)
{var statearr_13502_13587 = state_13498__$1;(statearr_13502_13587[1] = 36);
} else
{var statearr_13503_13588 = state_13498__$1;(statearr_13503_13588[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 2))
{var state_13498__$1 = state_13498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13498__$1,4,ch);
} else
{if((state_val_13499 === 34))
{var state_13498__$1 = state_13498;var statearr_13504_13589 = state_13498__$1;(statearr_13504_13589[2] = null);
(statearr_13504_13589[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 3))
{var inst_13496 = (state_13498[2]);var state_13498__$1 = state_13498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13498__$1,inst_13496);
} else
{if((state_val_13499 === 35))
{var inst_13480 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13505_13590 = state_13498__$1;(statearr_13505_13590[2] = inst_13480);
(statearr_13505_13590[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 4))
{var inst_13366 = (state_13498[7]);var inst_13366__$1 = (state_13498[2]);var inst_13367 = (inst_13366__$1 == null);var state_13498__$1 = (function (){var statearr_13506 = state_13498;(statearr_13506[7] = inst_13366__$1);
return statearr_13506;
})();if(cljs.core.truth_(inst_13367))
{var statearr_13507_13591 = state_13498__$1;(statearr_13507_13591[1] = 5);
} else
{var statearr_13508_13592 = state_13498__$1;(statearr_13508_13592[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 36))
{var inst_13455 = (state_13498[9]);var inst_13459 = cljs.core.chunk_first.call(null,inst_13455);var inst_13460 = cljs.core.chunk_rest.call(null,inst_13455);var inst_13461 = cljs.core.count.call(null,inst_13459);var inst_13434 = inst_13460;var inst_13435 = inst_13459;var inst_13436 = inst_13461;var inst_13437 = 0;var state_13498__$1 = (function (){var statearr_13509 = state_13498;(statearr_13509[10] = inst_13436);
(statearr_13509[11] = inst_13437);
(statearr_13509[12] = inst_13435);
(statearr_13509[13] = inst_13434);
return statearr_13509;
})();var statearr_13510_13593 = state_13498__$1;(statearr_13510_13593[2] = null);
(statearr_13510_13593[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 5))
{var inst_13373 = cljs.core.deref.call(null,cs);var inst_13374 = cljs.core.seq.call(null,inst_13373);var inst_13375 = inst_13374;var inst_13376 = null;var inst_13377 = 0;var inst_13378 = 0;var state_13498__$1 = (function (){var statearr_13511 = state_13498;(statearr_13511[14] = inst_13375);
(statearr_13511[15] = inst_13376);
(statearr_13511[16] = inst_13378);
(statearr_13511[17] = inst_13377);
return statearr_13511;
})();var statearr_13512_13594 = state_13498__$1;(statearr_13512_13594[2] = null);
(statearr_13512_13594[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 37))
{var inst_13455 = (state_13498[9]);var inst_13464 = cljs.core.first.call(null,inst_13455);var state_13498__$1 = (function (){var statearr_13513 = state_13498;(statearr_13513[18] = inst_13464);
return statearr_13513;
})();var statearr_13514_13595 = state_13498__$1;(statearr_13514_13595[2] = null);
(statearr_13514_13595[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 6))
{var inst_13426 = (state_13498[19]);var inst_13425 = cljs.core.deref.call(null,cs);var inst_13426__$1 = cljs.core.keys.call(null,inst_13425);var inst_13427 = cljs.core.count.call(null,inst_13426__$1);var inst_13428 = cljs.core.reset_BANG_.call(null,dctr,inst_13427);var inst_13433 = cljs.core.seq.call(null,inst_13426__$1);var inst_13434 = inst_13433;var inst_13435 = null;var inst_13436 = 0;var inst_13437 = 0;var state_13498__$1 = (function (){var statearr_13515 = state_13498;(statearr_13515[10] = inst_13436);
(statearr_13515[11] = inst_13437);
(statearr_13515[12] = inst_13435);
(statearr_13515[13] = inst_13434);
(statearr_13515[19] = inst_13426__$1);
(statearr_13515[20] = inst_13428);
return statearr_13515;
})();var statearr_13516_13596 = state_13498__$1;(statearr_13516_13596[2] = null);
(statearr_13516_13596[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 38))
{var inst_13477 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13517_13597 = state_13498__$1;(statearr_13517_13597[2] = inst_13477);
(statearr_13517_13597[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 7))
{var inst_13494 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13518_13598 = state_13498__$1;(statearr_13518_13598[2] = inst_13494);
(statearr_13518_13598[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 39))
{var inst_13455 = (state_13498[9]);var inst_13473 = (state_13498[2]);var inst_13474 = cljs.core.next.call(null,inst_13455);var inst_13434 = inst_13474;var inst_13435 = null;var inst_13436 = 0;var inst_13437 = 0;var state_13498__$1 = (function (){var statearr_13519 = state_13498;(statearr_13519[21] = inst_13473);
(statearr_13519[10] = inst_13436);
(statearr_13519[11] = inst_13437);
(statearr_13519[12] = inst_13435);
(statearr_13519[13] = inst_13434);
return statearr_13519;
})();var statearr_13520_13599 = state_13498__$1;(statearr_13520_13599[2] = null);
(statearr_13520_13599[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 8))
{var inst_13378 = (state_13498[16]);var inst_13377 = (state_13498[17]);var inst_13380 = (inst_13378 < inst_13377);var inst_13381 = inst_13380;var state_13498__$1 = state_13498;if(cljs.core.truth_(inst_13381))
{var statearr_13521_13600 = state_13498__$1;(statearr_13521_13600[1] = 10);
} else
{var statearr_13522_13601 = state_13498__$1;(statearr_13522_13601[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 40))
{var inst_13464 = (state_13498[18]);var inst_13465 = (state_13498[2]);var inst_13466 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13467 = cljs.core.async.untap_STAR_.call(null,m,inst_13464);var state_13498__$1 = (function (){var statearr_13523 = state_13498;(statearr_13523[22] = inst_13466);
(statearr_13523[23] = inst_13465);
return statearr_13523;
})();var statearr_13524_13602 = state_13498__$1;(statearr_13524_13602[2] = inst_13467);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13498__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 9))
{var inst_13423 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13525_13603 = state_13498__$1;(statearr_13525_13603[2] = inst_13423);
(statearr_13525_13603[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 41))
{var inst_13366 = (state_13498[7]);var inst_13464 = (state_13498[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13498,40,Object,null,39);var inst_13471 = cljs.core.async.put_BANG_.call(null,inst_13464,inst_13366,done);var state_13498__$1 = state_13498;var statearr_13526_13604 = state_13498__$1;(statearr_13526_13604[2] = inst_13471);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13498__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 10))
{var inst_13376 = (state_13498[15]);var inst_13378 = (state_13498[16]);var inst_13384 = cljs.core._nth.call(null,inst_13376,inst_13378);var inst_13385 = cljs.core.nth.call(null,inst_13384,0,null);var inst_13386 = cljs.core.nth.call(null,inst_13384,1,null);var state_13498__$1 = (function (){var statearr_13527 = state_13498;(statearr_13527[24] = inst_13385);
return statearr_13527;
})();if(cljs.core.truth_(inst_13386))
{var statearr_13528_13605 = state_13498__$1;(statearr_13528_13605[1] = 13);
} else
{var statearr_13529_13606 = state_13498__$1;(statearr_13529_13606[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 42))
{var state_13498__$1 = state_13498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13498__$1,45,dchan);
} else
{if((state_val_13499 === 11))
{var inst_13395 = (state_13498[25]);var inst_13375 = (state_13498[14]);var inst_13395__$1 = cljs.core.seq.call(null,inst_13375);var state_13498__$1 = (function (){var statearr_13530 = state_13498;(statearr_13530[25] = inst_13395__$1);
return statearr_13530;
})();if(inst_13395__$1)
{var statearr_13531_13607 = state_13498__$1;(statearr_13531_13607[1] = 16);
} else
{var statearr_13532_13608 = state_13498__$1;(statearr_13532_13608[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 43))
{var state_13498__$1 = state_13498;var statearr_13533_13609 = state_13498__$1;(statearr_13533_13609[2] = null);
(statearr_13533_13609[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 12))
{var inst_13421 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13534_13610 = state_13498__$1;(statearr_13534_13610[2] = inst_13421);
(statearr_13534_13610[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 44))
{var inst_13491 = (state_13498[2]);var state_13498__$1 = (function (){var statearr_13535 = state_13498;(statearr_13535[26] = inst_13491);
return statearr_13535;
})();var statearr_13536_13611 = state_13498__$1;(statearr_13536_13611[2] = null);
(statearr_13536_13611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 13))
{var inst_13385 = (state_13498[24]);var inst_13388 = cljs.core.async.close_BANG_.call(null,inst_13385);var state_13498__$1 = state_13498;var statearr_13537_13612 = state_13498__$1;(statearr_13537_13612[2] = inst_13388);
(statearr_13537_13612[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 45))
{var inst_13488 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13541_13613 = state_13498__$1;(statearr_13541_13613[2] = inst_13488);
(statearr_13541_13613[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 14))
{var state_13498__$1 = state_13498;var statearr_13542_13614 = state_13498__$1;(statearr_13542_13614[2] = null);
(statearr_13542_13614[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 15))
{var inst_13375 = (state_13498[14]);var inst_13376 = (state_13498[15]);var inst_13378 = (state_13498[16]);var inst_13377 = (state_13498[17]);var inst_13391 = (state_13498[2]);var inst_13392 = (inst_13378 + 1);var tmp13538 = inst_13375;var tmp13539 = inst_13376;var tmp13540 = inst_13377;var inst_13375__$1 = tmp13538;var inst_13376__$1 = tmp13539;var inst_13377__$1 = tmp13540;var inst_13378__$1 = inst_13392;var state_13498__$1 = (function (){var statearr_13543 = state_13498;(statearr_13543[27] = inst_13391);
(statearr_13543[14] = inst_13375__$1);
(statearr_13543[15] = inst_13376__$1);
(statearr_13543[16] = inst_13378__$1);
(statearr_13543[17] = inst_13377__$1);
return statearr_13543;
})();var statearr_13544_13615 = state_13498__$1;(statearr_13544_13615[2] = null);
(statearr_13544_13615[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 16))
{var inst_13395 = (state_13498[25]);var inst_13397 = cljs.core.chunked_seq_QMARK_.call(null,inst_13395);var state_13498__$1 = state_13498;if(inst_13397)
{var statearr_13545_13616 = state_13498__$1;(statearr_13545_13616[1] = 19);
} else
{var statearr_13546_13617 = state_13498__$1;(statearr_13546_13617[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 17))
{var state_13498__$1 = state_13498;var statearr_13547_13618 = state_13498__$1;(statearr_13547_13618[2] = null);
(statearr_13547_13618[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 18))
{var inst_13419 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13548_13619 = state_13498__$1;(statearr_13548_13619[2] = inst_13419);
(statearr_13548_13619[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 19))
{var inst_13395 = (state_13498[25]);var inst_13399 = cljs.core.chunk_first.call(null,inst_13395);var inst_13400 = cljs.core.chunk_rest.call(null,inst_13395);var inst_13401 = cljs.core.count.call(null,inst_13399);var inst_13375 = inst_13400;var inst_13376 = inst_13399;var inst_13377 = inst_13401;var inst_13378 = 0;var state_13498__$1 = (function (){var statearr_13549 = state_13498;(statearr_13549[14] = inst_13375);
(statearr_13549[15] = inst_13376);
(statearr_13549[16] = inst_13378);
(statearr_13549[17] = inst_13377);
return statearr_13549;
})();var statearr_13550_13620 = state_13498__$1;(statearr_13550_13620[2] = null);
(statearr_13550_13620[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 20))
{var inst_13395 = (state_13498[25]);var inst_13405 = cljs.core.first.call(null,inst_13395);var inst_13406 = cljs.core.nth.call(null,inst_13405,0,null);var inst_13407 = cljs.core.nth.call(null,inst_13405,1,null);var state_13498__$1 = (function (){var statearr_13551 = state_13498;(statearr_13551[28] = inst_13406);
return statearr_13551;
})();if(cljs.core.truth_(inst_13407))
{var statearr_13552_13621 = state_13498__$1;(statearr_13552_13621[1] = 22);
} else
{var statearr_13553_13622 = state_13498__$1;(statearr_13553_13622[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 21))
{var inst_13416 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13554_13623 = state_13498__$1;(statearr_13554_13623[2] = inst_13416);
(statearr_13554_13623[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 22))
{var inst_13406 = (state_13498[28]);var inst_13409 = cljs.core.async.close_BANG_.call(null,inst_13406);var state_13498__$1 = state_13498;var statearr_13555_13624 = state_13498__$1;(statearr_13555_13624[2] = inst_13409);
(statearr_13555_13624[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 23))
{var state_13498__$1 = state_13498;var statearr_13556_13625 = state_13498__$1;(statearr_13556_13625[2] = null);
(statearr_13556_13625[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 24))
{var inst_13395 = (state_13498[25]);var inst_13412 = (state_13498[2]);var inst_13413 = cljs.core.next.call(null,inst_13395);var inst_13375 = inst_13413;var inst_13376 = null;var inst_13377 = 0;var inst_13378 = 0;var state_13498__$1 = (function (){var statearr_13557 = state_13498;(statearr_13557[14] = inst_13375);
(statearr_13557[15] = inst_13376);
(statearr_13557[29] = inst_13412);
(statearr_13557[16] = inst_13378);
(statearr_13557[17] = inst_13377);
return statearr_13557;
})();var statearr_13558_13626 = state_13498__$1;(statearr_13558_13626[2] = null);
(statearr_13558_13626[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 25))
{var inst_13436 = (state_13498[10]);var inst_13437 = (state_13498[11]);var inst_13439 = (inst_13437 < inst_13436);var inst_13440 = inst_13439;var state_13498__$1 = state_13498;if(cljs.core.truth_(inst_13440))
{var statearr_13559_13627 = state_13498__$1;(statearr_13559_13627[1] = 27);
} else
{var statearr_13560_13628 = state_13498__$1;(statearr_13560_13628[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 26))
{var inst_13426 = (state_13498[19]);var inst_13484 = (state_13498[2]);var inst_13485 = cljs.core.seq.call(null,inst_13426);var state_13498__$1 = (function (){var statearr_13561 = state_13498;(statearr_13561[30] = inst_13484);
return statearr_13561;
})();if(inst_13485)
{var statearr_13562_13629 = state_13498__$1;(statearr_13562_13629[1] = 42);
} else
{var statearr_13563_13630 = state_13498__$1;(statearr_13563_13630[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 27))
{var inst_13437 = (state_13498[11]);var inst_13435 = (state_13498[12]);var inst_13442 = cljs.core._nth.call(null,inst_13435,inst_13437);var state_13498__$1 = (function (){var statearr_13564 = state_13498;(statearr_13564[8] = inst_13442);
return statearr_13564;
})();var statearr_13565_13631 = state_13498__$1;(statearr_13565_13631[2] = null);
(statearr_13565_13631[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 28))
{var inst_13434 = (state_13498[13]);var inst_13455 = (state_13498[9]);var inst_13455__$1 = cljs.core.seq.call(null,inst_13434);var state_13498__$1 = (function (){var statearr_13569 = state_13498;(statearr_13569[9] = inst_13455__$1);
return statearr_13569;
})();if(inst_13455__$1)
{var statearr_13570_13632 = state_13498__$1;(statearr_13570_13632[1] = 33);
} else
{var statearr_13571_13633 = state_13498__$1;(statearr_13571_13633[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 29))
{var inst_13482 = (state_13498[2]);var state_13498__$1 = state_13498;var statearr_13572_13634 = state_13498__$1;(statearr_13572_13634[2] = inst_13482);
(statearr_13572_13634[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 30))
{var inst_13436 = (state_13498[10]);var inst_13437 = (state_13498[11]);var inst_13435 = (state_13498[12]);var inst_13434 = (state_13498[13]);var inst_13451 = (state_13498[2]);var inst_13452 = (inst_13437 + 1);var tmp13566 = inst_13436;var tmp13567 = inst_13435;var tmp13568 = inst_13434;var inst_13434__$1 = tmp13568;var inst_13435__$1 = tmp13567;var inst_13436__$1 = tmp13566;var inst_13437__$1 = inst_13452;var state_13498__$1 = (function (){var statearr_13573 = state_13498;(statearr_13573[10] = inst_13436__$1);
(statearr_13573[11] = inst_13437__$1);
(statearr_13573[12] = inst_13435__$1);
(statearr_13573[13] = inst_13434__$1);
(statearr_13573[31] = inst_13451);
return statearr_13573;
})();var statearr_13574_13635 = state_13498__$1;(statearr_13574_13635[2] = null);
(statearr_13574_13635[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13499 === 31))
{var inst_13442 = (state_13498[8]);var inst_13443 = (state_13498[2]);var inst_13444 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13445 = cljs.core.async.untap_STAR_.call(null,m,inst_13442);var state_13498__$1 = (function (){var statearr_13575 = state_13498;(statearr_13575[32] = inst_13444);
(statearr_13575[33] = inst_13443);
return statearr_13575;
})();var statearr_13576_13636 = state_13498__$1;(statearr_13576_13636[2] = inst_13445);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13498__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13580[0] = state_machine__5507__auto__);
(statearr_13580[1] = 1);
return statearr_13580;
});
var state_machine__5507__auto____1 = (function (state_13498){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13581){if((e13581 instanceof Object))
{var ex__5510__auto__ = e13581;var statearr_13582_13637 = state_13498;(statearr_13582_13637[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13638 = state_13498;
state_13498 = G__13638;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13498){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13583 = f__5522__auto__.call(null);(statearr_13583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13584);
return statearr_13583;
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
cljs.core.async.Mix = (function (){var obj13640 = {};return obj13640;
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
;var m = (function (){if(typeof cljs.core.async.t13750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13750 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13751){
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
this.meta13751 = meta13751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13750.cljs$lang$type = true;
cljs.core.async.t13750.cljs$lang$ctorStr = "cljs.core.async/t13750";
cljs.core.async.t13750.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13750");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13750.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13752){var self__ = this;
var _13752__$1 = this;return self__.meta13751;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13752,meta13751__$1){var self__ = this;
var _13752__$1 = this;return (new cljs.core.async.t13750(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13751__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13750 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13750(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13751){return (new cljs.core.async.t13750(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13751));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13750(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13859 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13817){var state_val_13818 = (state_13817[1]);if((state_val_13818 === 1))
{var inst_13756 = (state_13817[7]);var inst_13756__$1 = calc_state.call(null);var inst_13757 = cljs.core.seq_QMARK_.call(null,inst_13756__$1);var state_13817__$1 = (function (){var statearr_13819 = state_13817;(statearr_13819[7] = inst_13756__$1);
return statearr_13819;
})();if(inst_13757)
{var statearr_13820_13860 = state_13817__$1;(statearr_13820_13860[1] = 2);
} else
{var statearr_13821_13861 = state_13817__$1;(statearr_13821_13861[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 2))
{var inst_13756 = (state_13817[7]);var inst_13759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13756);var state_13817__$1 = state_13817;var statearr_13822_13862 = state_13817__$1;(statearr_13822_13862[2] = inst_13759);
(statearr_13822_13862[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 3))
{var inst_13756 = (state_13817[7]);var state_13817__$1 = state_13817;var statearr_13823_13863 = state_13817__$1;(statearr_13823_13863[2] = inst_13756);
(statearr_13823_13863[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 4))
{var inst_13756 = (state_13817[7]);var inst_13762 = (state_13817[2]);var inst_13763 = cljs.core.get.call(null,inst_13762,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13764 = cljs.core.get.call(null,inst_13762,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13765 = cljs.core.get.call(null,inst_13762,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13766 = inst_13756;var state_13817__$1 = (function (){var statearr_13824 = state_13817;(statearr_13824[8] = inst_13765);
(statearr_13824[9] = inst_13764);
(statearr_13824[10] = inst_13763);
(statearr_13824[11] = inst_13766);
return statearr_13824;
})();var statearr_13825_13864 = state_13817__$1;(statearr_13825_13864[2] = null);
(statearr_13825_13864[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 5))
{var inst_13766 = (state_13817[11]);var inst_13769 = cljs.core.seq_QMARK_.call(null,inst_13766);var state_13817__$1 = state_13817;if(inst_13769)
{var statearr_13826_13865 = state_13817__$1;(statearr_13826_13865[1] = 7);
} else
{var statearr_13827_13866 = state_13817__$1;(statearr_13827_13866[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 6))
{var inst_13815 = (state_13817[2]);var state_13817__$1 = state_13817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13817__$1,inst_13815);
} else
{if((state_val_13818 === 7))
{var inst_13766 = (state_13817[11]);var inst_13771 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13766);var state_13817__$1 = state_13817;var statearr_13828_13867 = state_13817__$1;(statearr_13828_13867[2] = inst_13771);
(statearr_13828_13867[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 8))
{var inst_13766 = (state_13817[11]);var state_13817__$1 = state_13817;var statearr_13829_13868 = state_13817__$1;(statearr_13829_13868[2] = inst_13766);
(statearr_13829_13868[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 9))
{var inst_13774 = (state_13817[12]);var inst_13774__$1 = (state_13817[2]);var inst_13775 = cljs.core.get.call(null,inst_13774__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13776 = cljs.core.get.call(null,inst_13774__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13777 = cljs.core.get.call(null,inst_13774__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13817__$1 = (function (){var statearr_13830 = state_13817;(statearr_13830[13] = inst_13777);
(statearr_13830[14] = inst_13776);
(statearr_13830[12] = inst_13774__$1);
return statearr_13830;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13817__$1,10,inst_13775);
} else
{if((state_val_13818 === 10))
{var inst_13782 = (state_13817[15]);var inst_13781 = (state_13817[16]);var inst_13780 = (state_13817[2]);var inst_13781__$1 = cljs.core.nth.call(null,inst_13780,0,null);var inst_13782__$1 = cljs.core.nth.call(null,inst_13780,1,null);var inst_13783 = (inst_13781__$1 == null);var inst_13784 = cljs.core._EQ_.call(null,inst_13782__$1,change);var inst_13785 = (inst_13783) || (inst_13784);var state_13817__$1 = (function (){var statearr_13831 = state_13817;(statearr_13831[15] = inst_13782__$1);
(statearr_13831[16] = inst_13781__$1);
return statearr_13831;
})();if(cljs.core.truth_(inst_13785))
{var statearr_13832_13869 = state_13817__$1;(statearr_13832_13869[1] = 11);
} else
{var statearr_13833_13870 = state_13817__$1;(statearr_13833_13870[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 11))
{var inst_13781 = (state_13817[16]);var inst_13787 = (inst_13781 == null);var state_13817__$1 = state_13817;if(cljs.core.truth_(inst_13787))
{var statearr_13834_13871 = state_13817__$1;(statearr_13834_13871[1] = 14);
} else
{var statearr_13835_13872 = state_13817__$1;(statearr_13835_13872[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 12))
{var inst_13796 = (state_13817[17]);var inst_13777 = (state_13817[13]);var inst_13782 = (state_13817[15]);var inst_13796__$1 = inst_13777.call(null,inst_13782);var state_13817__$1 = (function (){var statearr_13836 = state_13817;(statearr_13836[17] = inst_13796__$1);
return statearr_13836;
})();if(cljs.core.truth_(inst_13796__$1))
{var statearr_13837_13873 = state_13817__$1;(statearr_13837_13873[1] = 17);
} else
{var statearr_13838_13874 = state_13817__$1;(statearr_13838_13874[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 13))
{var inst_13813 = (state_13817[2]);var state_13817__$1 = state_13817;var statearr_13839_13875 = state_13817__$1;(statearr_13839_13875[2] = inst_13813);
(statearr_13839_13875[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 14))
{var inst_13782 = (state_13817[15]);var inst_13789 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13782);var state_13817__$1 = state_13817;var statearr_13840_13876 = state_13817__$1;(statearr_13840_13876[2] = inst_13789);
(statearr_13840_13876[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 15))
{var state_13817__$1 = state_13817;var statearr_13841_13877 = state_13817__$1;(statearr_13841_13877[2] = null);
(statearr_13841_13877[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 16))
{var inst_13792 = (state_13817[2]);var inst_13793 = calc_state.call(null);var inst_13766 = inst_13793;var state_13817__$1 = (function (){var statearr_13842 = state_13817;(statearr_13842[18] = inst_13792);
(statearr_13842[11] = inst_13766);
return statearr_13842;
})();var statearr_13843_13878 = state_13817__$1;(statearr_13843_13878[2] = null);
(statearr_13843_13878[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 17))
{var inst_13796 = (state_13817[17]);var state_13817__$1 = state_13817;var statearr_13844_13879 = state_13817__$1;(statearr_13844_13879[2] = inst_13796);
(statearr_13844_13879[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 18))
{var inst_13777 = (state_13817[13]);var inst_13782 = (state_13817[15]);var inst_13776 = (state_13817[14]);var inst_13799 = cljs.core.empty_QMARK_.call(null,inst_13777);var inst_13800 = inst_13776.call(null,inst_13782);var inst_13801 = cljs.core.not.call(null,inst_13800);var inst_13802 = (inst_13799) && (inst_13801);var state_13817__$1 = state_13817;var statearr_13845_13880 = state_13817__$1;(statearr_13845_13880[2] = inst_13802);
(statearr_13845_13880[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 19))
{var inst_13804 = (state_13817[2]);var state_13817__$1 = state_13817;if(cljs.core.truth_(inst_13804))
{var statearr_13846_13881 = state_13817__$1;(statearr_13846_13881[1] = 20);
} else
{var statearr_13847_13882 = state_13817__$1;(statearr_13847_13882[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 20))
{var inst_13781 = (state_13817[16]);var state_13817__$1 = state_13817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13817__$1,23,out,inst_13781);
} else
{if((state_val_13818 === 21))
{var state_13817__$1 = state_13817;var statearr_13848_13883 = state_13817__$1;(statearr_13848_13883[2] = null);
(statearr_13848_13883[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 22))
{var inst_13774 = (state_13817[12]);var inst_13810 = (state_13817[2]);var inst_13766 = inst_13774;var state_13817__$1 = (function (){var statearr_13849 = state_13817;(statearr_13849[19] = inst_13810);
(statearr_13849[11] = inst_13766);
return statearr_13849;
})();var statearr_13850_13884 = state_13817__$1;(statearr_13850_13884[2] = null);
(statearr_13850_13884[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 23))
{var inst_13807 = (state_13817[2]);var state_13817__$1 = state_13817;var statearr_13851_13885 = state_13817__$1;(statearr_13851_13885[2] = inst_13807);
(statearr_13851_13885[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13855[0] = state_machine__5507__auto__);
(statearr_13855[1] = 1);
return statearr_13855;
});
var state_machine__5507__auto____1 = (function (state_13817){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13817);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13856){if((e13856 instanceof Object))
{var ex__5510__auto__ = e13856;var statearr_13857_13886 = state_13817;(statearr_13857_13886[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13887 = state_13817;
state_13817 = G__13887;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13817){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13858 = f__5522__auto__.call(null);(statearr_13858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13859);
return statearr_13858;
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
cljs.core.async.Pub = (function (){var obj13889 = {};return obj13889;
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
return (function (p1__13890_SHARP_){if(cljs.core.truth_(p1__13890_SHARP_.call(null,topic)))
{return p1__13890_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13890_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14015 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14016){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14016 = meta14016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14015.cljs$lang$type = true;
cljs.core.async.t14015.cljs$lang$ctorStr = "cljs.core.async/t14015";
cljs.core.async.t14015.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14015");
});})(mults,ensure_mult))
;
cljs.core.async.t14015.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14015.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14017){var self__ = this;
var _14017__$1 = this;return self__.meta14016;
});})(mults,ensure_mult))
;
cljs.core.async.t14015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14017,meta14016__$1){var self__ = this;
var _14017__$1 = this;return (new cljs.core.async.t14015(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14016__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14015 = ((function (mults,ensure_mult){
return (function __GT_t14015(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14016){return (new cljs.core.async.t14015(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14016));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14015(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14091){var state_val_14092 = (state_14091[1]);if((state_val_14092 === 1))
{var state_14091__$1 = state_14091;var statearr_14093_14140 = state_14091__$1;(statearr_14093_14140[2] = null);
(statearr_14093_14140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 2))
{var state_14091__$1 = state_14091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14091__$1,4,ch);
} else
{if((state_val_14092 === 3))
{var inst_14089 = (state_14091[2]);var state_14091__$1 = state_14091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14091__$1,inst_14089);
} else
{if((state_val_14092 === 4))
{var inst_14020 = (state_14091[7]);var inst_14020__$1 = (state_14091[2]);var inst_14021 = (inst_14020__$1 == null);var state_14091__$1 = (function (){var statearr_14094 = state_14091;(statearr_14094[7] = inst_14020__$1);
return statearr_14094;
})();if(cljs.core.truth_(inst_14021))
{var statearr_14095_14141 = state_14091__$1;(statearr_14095_14141[1] = 5);
} else
{var statearr_14096_14142 = state_14091__$1;(statearr_14096_14142[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 5))
{var inst_14027 = cljs.core.deref.call(null,mults);var inst_14028 = cljs.core.vals.call(null,inst_14027);var inst_14029 = cljs.core.seq.call(null,inst_14028);var inst_14030 = inst_14029;var inst_14031 = null;var inst_14032 = 0;var inst_14033 = 0;var state_14091__$1 = (function (){var statearr_14097 = state_14091;(statearr_14097[8] = inst_14033);
(statearr_14097[9] = inst_14030);
(statearr_14097[10] = inst_14032);
(statearr_14097[11] = inst_14031);
return statearr_14097;
})();var statearr_14098_14143 = state_14091__$1;(statearr_14098_14143[2] = null);
(statearr_14098_14143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 6))
{var inst_14070 = (state_14091[12]);var inst_14068 = (state_14091[13]);var inst_14020 = (state_14091[7]);var inst_14068__$1 = topic_fn.call(null,inst_14020);var inst_14069 = cljs.core.deref.call(null,mults);var inst_14070__$1 = cljs.core.get.call(null,inst_14069,inst_14068__$1);var state_14091__$1 = (function (){var statearr_14099 = state_14091;(statearr_14099[12] = inst_14070__$1);
(statearr_14099[13] = inst_14068__$1);
return statearr_14099;
})();if(cljs.core.truth_(inst_14070__$1))
{var statearr_14100_14144 = state_14091__$1;(statearr_14100_14144[1] = 19);
} else
{var statearr_14101_14145 = state_14091__$1;(statearr_14101_14145[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 7))
{var inst_14087 = (state_14091[2]);var state_14091__$1 = state_14091;var statearr_14102_14146 = state_14091__$1;(statearr_14102_14146[2] = inst_14087);
(statearr_14102_14146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 8))
{var inst_14033 = (state_14091[8]);var inst_14032 = (state_14091[10]);var inst_14035 = (inst_14033 < inst_14032);var inst_14036 = inst_14035;var state_14091__$1 = state_14091;if(cljs.core.truth_(inst_14036))
{var statearr_14106_14147 = state_14091__$1;(statearr_14106_14147[1] = 10);
} else
{var statearr_14107_14148 = state_14091__$1;(statearr_14107_14148[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 9))
{var inst_14066 = (state_14091[2]);var state_14091__$1 = state_14091;var statearr_14108_14149 = state_14091__$1;(statearr_14108_14149[2] = inst_14066);
(statearr_14108_14149[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 10))
{var inst_14033 = (state_14091[8]);var inst_14030 = (state_14091[9]);var inst_14032 = (state_14091[10]);var inst_14031 = (state_14091[11]);var inst_14038 = cljs.core._nth.call(null,inst_14031,inst_14033);var inst_14039 = cljs.core.async.muxch_STAR_.call(null,inst_14038);var inst_14040 = cljs.core.async.close_BANG_.call(null,inst_14039);var inst_14041 = (inst_14033 + 1);var tmp14103 = inst_14030;var tmp14104 = inst_14032;var tmp14105 = inst_14031;var inst_14030__$1 = tmp14103;var inst_14031__$1 = tmp14105;var inst_14032__$1 = tmp14104;var inst_14033__$1 = inst_14041;var state_14091__$1 = (function (){var statearr_14109 = state_14091;(statearr_14109[14] = inst_14040);
(statearr_14109[8] = inst_14033__$1);
(statearr_14109[9] = inst_14030__$1);
(statearr_14109[10] = inst_14032__$1);
(statearr_14109[11] = inst_14031__$1);
return statearr_14109;
})();var statearr_14110_14150 = state_14091__$1;(statearr_14110_14150[2] = null);
(statearr_14110_14150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 11))
{var inst_14044 = (state_14091[15]);var inst_14030 = (state_14091[9]);var inst_14044__$1 = cljs.core.seq.call(null,inst_14030);var state_14091__$1 = (function (){var statearr_14111 = state_14091;(statearr_14111[15] = inst_14044__$1);
return statearr_14111;
})();if(inst_14044__$1)
{var statearr_14112_14151 = state_14091__$1;(statearr_14112_14151[1] = 13);
} else
{var statearr_14113_14152 = state_14091__$1;(statearr_14113_14152[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 12))
{var inst_14064 = (state_14091[2]);var state_14091__$1 = state_14091;var statearr_14114_14153 = state_14091__$1;(statearr_14114_14153[2] = inst_14064);
(statearr_14114_14153[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 13))
{var inst_14044 = (state_14091[15]);var inst_14046 = cljs.core.chunked_seq_QMARK_.call(null,inst_14044);var state_14091__$1 = state_14091;if(inst_14046)
{var statearr_14115_14154 = state_14091__$1;(statearr_14115_14154[1] = 16);
} else
{var statearr_14116_14155 = state_14091__$1;(statearr_14116_14155[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 14))
{var state_14091__$1 = state_14091;var statearr_14117_14156 = state_14091__$1;(statearr_14117_14156[2] = null);
(statearr_14117_14156[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 15))
{var inst_14062 = (state_14091[2]);var state_14091__$1 = state_14091;var statearr_14118_14157 = state_14091__$1;(statearr_14118_14157[2] = inst_14062);
(statearr_14118_14157[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 16))
{var inst_14044 = (state_14091[15]);var inst_14048 = cljs.core.chunk_first.call(null,inst_14044);var inst_14049 = cljs.core.chunk_rest.call(null,inst_14044);var inst_14050 = cljs.core.count.call(null,inst_14048);var inst_14030 = inst_14049;var inst_14031 = inst_14048;var inst_14032 = inst_14050;var inst_14033 = 0;var state_14091__$1 = (function (){var statearr_14119 = state_14091;(statearr_14119[8] = inst_14033);
(statearr_14119[9] = inst_14030);
(statearr_14119[10] = inst_14032);
(statearr_14119[11] = inst_14031);
return statearr_14119;
})();var statearr_14120_14158 = state_14091__$1;(statearr_14120_14158[2] = null);
(statearr_14120_14158[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 17))
{var inst_14044 = (state_14091[15]);var inst_14053 = cljs.core.first.call(null,inst_14044);var inst_14054 = cljs.core.async.muxch_STAR_.call(null,inst_14053);var inst_14055 = cljs.core.async.close_BANG_.call(null,inst_14054);var inst_14056 = cljs.core.next.call(null,inst_14044);var inst_14030 = inst_14056;var inst_14031 = null;var inst_14032 = 0;var inst_14033 = 0;var state_14091__$1 = (function (){var statearr_14121 = state_14091;(statearr_14121[16] = inst_14055);
(statearr_14121[8] = inst_14033);
(statearr_14121[9] = inst_14030);
(statearr_14121[10] = inst_14032);
(statearr_14121[11] = inst_14031);
return statearr_14121;
})();var statearr_14122_14159 = state_14091__$1;(statearr_14122_14159[2] = null);
(statearr_14122_14159[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 18))
{var inst_14059 = (state_14091[2]);var state_14091__$1 = state_14091;var statearr_14123_14160 = state_14091__$1;(statearr_14123_14160[2] = inst_14059);
(statearr_14123_14160[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 19))
{var state_14091__$1 = state_14091;var statearr_14124_14161 = state_14091__$1;(statearr_14124_14161[2] = null);
(statearr_14124_14161[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 20))
{var state_14091__$1 = state_14091;var statearr_14125_14162 = state_14091__$1;(statearr_14125_14162[2] = null);
(statearr_14125_14162[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 21))
{var inst_14084 = (state_14091[2]);var state_14091__$1 = (function (){var statearr_14126 = state_14091;(statearr_14126[17] = inst_14084);
return statearr_14126;
})();var statearr_14127_14163 = state_14091__$1;(statearr_14127_14163[2] = null);
(statearr_14127_14163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 22))
{var inst_14081 = (state_14091[2]);var state_14091__$1 = state_14091;var statearr_14128_14164 = state_14091__$1;(statearr_14128_14164[2] = inst_14081);
(statearr_14128_14164[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 23))
{var inst_14068 = (state_14091[13]);var inst_14072 = (state_14091[2]);var inst_14073 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14068);var state_14091__$1 = (function (){var statearr_14129 = state_14091;(statearr_14129[18] = inst_14072);
return statearr_14129;
})();var statearr_14130_14165 = state_14091__$1;(statearr_14130_14165[2] = inst_14073);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14091__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14092 === 24))
{var inst_14070 = (state_14091[12]);var inst_14020 = (state_14091[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14091,23,Object,null,22);var inst_14077 = cljs.core.async.muxch_STAR_.call(null,inst_14070);var state_14091__$1 = state_14091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14091__$1,25,inst_14077,inst_14020);
} else
{if((state_val_14092 === 25))
{var inst_14079 = (state_14091[2]);var state_14091__$1 = state_14091;var statearr_14131_14166 = state_14091__$1;(statearr_14131_14166[2] = inst_14079);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14091__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14135[0] = state_machine__5507__auto__);
(statearr_14135[1] = 1);
return statearr_14135;
});
var state_machine__5507__auto____1 = (function (state_14091){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14091);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14136){if((e14136 instanceof Object))
{var ex__5510__auto__ = e14136;var statearr_14137_14167 = state_14091;(statearr_14137_14167[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14168 = state_14091;
state_14091 = G__14168;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14091){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14138 = f__5522__auto__.call(null);(statearr_14138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14139);
return statearr_14138;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14305 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14275){var state_val_14276 = (state_14275[1]);if((state_val_14276 === 1))
{var state_14275__$1 = state_14275;var statearr_14277_14306 = state_14275__$1;(statearr_14277_14306[2] = null);
(statearr_14277_14306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 2))
{var inst_14238 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14239 = 0;var state_14275__$1 = (function (){var statearr_14278 = state_14275;(statearr_14278[7] = inst_14239);
(statearr_14278[8] = inst_14238);
return statearr_14278;
})();var statearr_14279_14307 = state_14275__$1;(statearr_14279_14307[2] = null);
(statearr_14279_14307[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 3))
{var inst_14273 = (state_14275[2]);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14275__$1,inst_14273);
} else
{if((state_val_14276 === 4))
{var inst_14239 = (state_14275[7]);var inst_14241 = (inst_14239 < cnt);var state_14275__$1 = state_14275;if(cljs.core.truth_(inst_14241))
{var statearr_14280_14308 = state_14275__$1;(statearr_14280_14308[1] = 6);
} else
{var statearr_14281_14309 = state_14275__$1;(statearr_14281_14309[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 5))
{var inst_14259 = (state_14275[2]);var state_14275__$1 = (function (){var statearr_14282 = state_14275;(statearr_14282[9] = inst_14259);
return statearr_14282;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,12,dchan);
} else
{if((state_val_14276 === 6))
{var state_14275__$1 = state_14275;var statearr_14283_14310 = state_14275__$1;(statearr_14283_14310[2] = null);
(statearr_14283_14310[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 7))
{var state_14275__$1 = state_14275;var statearr_14284_14311 = state_14275__$1;(statearr_14284_14311[2] = null);
(statearr_14284_14311[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 8))
{var inst_14257 = (state_14275[2]);var state_14275__$1 = state_14275;var statearr_14285_14312 = state_14275__$1;(statearr_14285_14312[2] = inst_14257);
(statearr_14285_14312[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 9))
{var inst_14239 = (state_14275[7]);var inst_14252 = (state_14275[2]);var inst_14253 = (inst_14239 + 1);var inst_14239__$1 = inst_14253;var state_14275__$1 = (function (){var statearr_14286 = state_14275;(statearr_14286[7] = inst_14239__$1);
(statearr_14286[10] = inst_14252);
return statearr_14286;
})();var statearr_14287_14313 = state_14275__$1;(statearr_14287_14313[2] = null);
(statearr_14287_14313[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 10))
{var inst_14243 = (state_14275[2]);var inst_14244 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14275__$1 = (function (){var statearr_14288 = state_14275;(statearr_14288[11] = inst_14243);
return statearr_14288;
})();var statearr_14289_14314 = state_14275__$1;(statearr_14289_14314[2] = inst_14244);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14275__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 11))
{var inst_14239 = (state_14275[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14275,10,Object,null,9);var inst_14248 = chs__$1.call(null,inst_14239);var inst_14249 = done.call(null,inst_14239);var inst_14250 = cljs.core.async.take_BANG_.call(null,inst_14248,inst_14249);var state_14275__$1 = state_14275;var statearr_14290_14315 = state_14275__$1;(statearr_14290_14315[2] = inst_14250);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14275__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 12))
{var inst_14261 = (state_14275[12]);var inst_14261__$1 = (state_14275[2]);var inst_14262 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14261__$1);var state_14275__$1 = (function (){var statearr_14291 = state_14275;(statearr_14291[12] = inst_14261__$1);
return statearr_14291;
})();if(cljs.core.truth_(inst_14262))
{var statearr_14292_14316 = state_14275__$1;(statearr_14292_14316[1] = 13);
} else
{var statearr_14293_14317 = state_14275__$1;(statearr_14293_14317[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 13))
{var inst_14264 = cljs.core.async.close_BANG_.call(null,out);var state_14275__$1 = state_14275;var statearr_14294_14318 = state_14275__$1;(statearr_14294_14318[2] = inst_14264);
(statearr_14294_14318[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 14))
{var inst_14261 = (state_14275[12]);var inst_14266 = cljs.core.apply.call(null,f,inst_14261);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14275__$1,16,out,inst_14266);
} else
{if((state_val_14276 === 15))
{var inst_14271 = (state_14275[2]);var state_14275__$1 = state_14275;var statearr_14295_14319 = state_14275__$1;(statearr_14295_14319[2] = inst_14271);
(statearr_14295_14319[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 16))
{var inst_14268 = (state_14275[2]);var state_14275__$1 = (function (){var statearr_14296 = state_14275;(statearr_14296[13] = inst_14268);
return statearr_14296;
})();var statearr_14297_14320 = state_14275__$1;(statearr_14297_14320[2] = null);
(statearr_14297_14320[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14301[0] = state_machine__5507__auto__);
(statearr_14301[1] = 1);
return statearr_14301;
});
var state_machine__5507__auto____1 = (function (state_14275){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14275);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14302){if((e14302 instanceof Object))
{var ex__5510__auto__ = e14302;var statearr_14303_14321 = state_14275;(statearr_14303_14321[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14322 = state_14275;
state_14275 = G__14322;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14275){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14304 = f__5522__auto__.call(null);(statearr_14304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14305);
return statearr_14304;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14430 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14406){var state_val_14407 = (state_14406[1]);if((state_val_14407 === 1))
{var inst_14377 = cljs.core.vec.call(null,chs);var inst_14378 = inst_14377;var state_14406__$1 = (function (){var statearr_14408 = state_14406;(statearr_14408[7] = inst_14378);
return statearr_14408;
})();var statearr_14409_14431 = state_14406__$1;(statearr_14409_14431[2] = null);
(statearr_14409_14431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 2))
{var inst_14378 = (state_14406[7]);var inst_14380 = cljs.core.count.call(null,inst_14378);var inst_14381 = (inst_14380 > 0);var state_14406__$1 = state_14406;if(cljs.core.truth_(inst_14381))
{var statearr_14410_14432 = state_14406__$1;(statearr_14410_14432[1] = 4);
} else
{var statearr_14411_14433 = state_14406__$1;(statearr_14411_14433[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 3))
{var inst_14404 = (state_14406[2]);var state_14406__$1 = state_14406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14406__$1,inst_14404);
} else
{if((state_val_14407 === 4))
{var inst_14378 = (state_14406[7]);var state_14406__$1 = state_14406;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14406__$1,7,inst_14378);
} else
{if((state_val_14407 === 5))
{var inst_14400 = cljs.core.async.close_BANG_.call(null,out);var state_14406__$1 = state_14406;var statearr_14412_14434 = state_14406__$1;(statearr_14412_14434[2] = inst_14400);
(statearr_14412_14434[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 6))
{var inst_14402 = (state_14406[2]);var state_14406__$1 = state_14406;var statearr_14413_14435 = state_14406__$1;(statearr_14413_14435[2] = inst_14402);
(statearr_14413_14435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 7))
{var inst_14385 = (state_14406[8]);var inst_14386 = (state_14406[9]);var inst_14385__$1 = (state_14406[2]);var inst_14386__$1 = cljs.core.nth.call(null,inst_14385__$1,0,null);var inst_14387 = cljs.core.nth.call(null,inst_14385__$1,1,null);var inst_14388 = (inst_14386__$1 == null);var state_14406__$1 = (function (){var statearr_14414 = state_14406;(statearr_14414[10] = inst_14387);
(statearr_14414[8] = inst_14385__$1);
(statearr_14414[9] = inst_14386__$1);
return statearr_14414;
})();if(cljs.core.truth_(inst_14388))
{var statearr_14415_14436 = state_14406__$1;(statearr_14415_14436[1] = 8);
} else
{var statearr_14416_14437 = state_14406__$1;(statearr_14416_14437[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 8))
{var inst_14378 = (state_14406[7]);var inst_14387 = (state_14406[10]);var inst_14385 = (state_14406[8]);var inst_14386 = (state_14406[9]);var inst_14390 = (function (){var c = inst_14387;var v = inst_14386;var vec__14383 = inst_14385;var cs = inst_14378;return ((function (c,v,vec__14383,cs,inst_14378,inst_14387,inst_14385,inst_14386,state_val_14407){
return (function (p1__14323_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14323_SHARP_);
});
;})(c,v,vec__14383,cs,inst_14378,inst_14387,inst_14385,inst_14386,state_val_14407))
})();var inst_14391 = cljs.core.filterv.call(null,inst_14390,inst_14378);var inst_14378__$1 = inst_14391;var state_14406__$1 = (function (){var statearr_14417 = state_14406;(statearr_14417[7] = inst_14378__$1);
return statearr_14417;
})();var statearr_14418_14438 = state_14406__$1;(statearr_14418_14438[2] = null);
(statearr_14418_14438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 9))
{var inst_14386 = (state_14406[9]);var state_14406__$1 = state_14406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14406__$1,11,out,inst_14386);
} else
{if((state_val_14407 === 10))
{var inst_14398 = (state_14406[2]);var state_14406__$1 = state_14406;var statearr_14420_14439 = state_14406__$1;(statearr_14420_14439[2] = inst_14398);
(statearr_14420_14439[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14407 === 11))
{var inst_14378 = (state_14406[7]);var inst_14395 = (state_14406[2]);var tmp14419 = inst_14378;var inst_14378__$1 = tmp14419;var state_14406__$1 = (function (){var statearr_14421 = state_14406;(statearr_14421[7] = inst_14378__$1);
(statearr_14421[11] = inst_14395);
return statearr_14421;
})();var statearr_14422_14440 = state_14406__$1;(statearr_14422_14440[2] = null);
(statearr_14422_14440[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14426 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14426[0] = state_machine__5507__auto__);
(statearr_14426[1] = 1);
return statearr_14426;
});
var state_machine__5507__auto____1 = (function (state_14406){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14427){if((e14427 instanceof Object))
{var ex__5510__auto__ = e14427;var statearr_14428_14441 = state_14406;(statearr_14428_14441[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14442 = state_14406;
state_14406 = G__14442;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14406){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14429 = f__5522__auto__.call(null);(statearr_14429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14430);
return statearr_14429;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14535 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14512){var state_val_14513 = (state_14512[1]);if((state_val_14513 === 1))
{var inst_14489 = 0;var state_14512__$1 = (function (){var statearr_14514 = state_14512;(statearr_14514[7] = inst_14489);
return statearr_14514;
})();var statearr_14515_14536 = state_14512__$1;(statearr_14515_14536[2] = null);
(statearr_14515_14536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14513 === 2))
{var inst_14489 = (state_14512[7]);var inst_14491 = (inst_14489 < n);var state_14512__$1 = state_14512;if(cljs.core.truth_(inst_14491))
{var statearr_14516_14537 = state_14512__$1;(statearr_14516_14537[1] = 4);
} else
{var statearr_14517_14538 = state_14512__$1;(statearr_14517_14538[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14513 === 3))
{var inst_14509 = (state_14512[2]);var inst_14510 = cljs.core.async.close_BANG_.call(null,out);var state_14512__$1 = (function (){var statearr_14518 = state_14512;(statearr_14518[8] = inst_14509);
return statearr_14518;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14512__$1,inst_14510);
} else
{if((state_val_14513 === 4))
{var state_14512__$1 = state_14512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14512__$1,7,ch);
} else
{if((state_val_14513 === 5))
{var state_14512__$1 = state_14512;var statearr_14519_14539 = state_14512__$1;(statearr_14519_14539[2] = null);
(statearr_14519_14539[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14513 === 6))
{var inst_14507 = (state_14512[2]);var state_14512__$1 = state_14512;var statearr_14520_14540 = state_14512__$1;(statearr_14520_14540[2] = inst_14507);
(statearr_14520_14540[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14513 === 7))
{var inst_14494 = (state_14512[9]);var inst_14494__$1 = (state_14512[2]);var inst_14495 = (inst_14494__$1 == null);var inst_14496 = cljs.core.not.call(null,inst_14495);var state_14512__$1 = (function (){var statearr_14521 = state_14512;(statearr_14521[9] = inst_14494__$1);
return statearr_14521;
})();if(inst_14496)
{var statearr_14522_14541 = state_14512__$1;(statearr_14522_14541[1] = 8);
} else
{var statearr_14523_14542 = state_14512__$1;(statearr_14523_14542[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14513 === 8))
{var inst_14494 = (state_14512[9]);var state_14512__$1 = state_14512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14512__$1,11,out,inst_14494);
} else
{if((state_val_14513 === 9))
{var state_14512__$1 = state_14512;var statearr_14524_14543 = state_14512__$1;(statearr_14524_14543[2] = null);
(statearr_14524_14543[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14513 === 10))
{var inst_14504 = (state_14512[2]);var state_14512__$1 = state_14512;var statearr_14525_14544 = state_14512__$1;(statearr_14525_14544[2] = inst_14504);
(statearr_14525_14544[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14513 === 11))
{var inst_14489 = (state_14512[7]);var inst_14499 = (state_14512[2]);var inst_14500 = (inst_14489 + 1);var inst_14489__$1 = inst_14500;var state_14512__$1 = (function (){var statearr_14526 = state_14512;(statearr_14526[10] = inst_14499);
(statearr_14526[7] = inst_14489__$1);
return statearr_14526;
})();var statearr_14527_14545 = state_14512__$1;(statearr_14527_14545[2] = null);
(statearr_14527_14545[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14531 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14531[0] = state_machine__5507__auto__);
(statearr_14531[1] = 1);
return statearr_14531;
});
var state_machine__5507__auto____1 = (function (state_14512){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14512);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14532){if((e14532 instanceof Object))
{var ex__5510__auto__ = e14532;var statearr_14533_14546 = state_14512;(statearr_14533_14546[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14547 = state_14512;
state_14512 = G__14547;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14512){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14534 = f__5522__auto__.call(null);(statearr_14534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14535);
return statearr_14534;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14619){var state_val_14620 = (state_14619[1]);if((state_val_14620 === 1))
{var inst_14596 = null;var state_14619__$1 = (function (){var statearr_14621 = state_14619;(statearr_14621[7] = inst_14596);
return statearr_14621;
})();var statearr_14622_14645 = state_14619__$1;(statearr_14622_14645[2] = null);
(statearr_14622_14645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14620 === 2))
{var state_14619__$1 = state_14619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14619__$1,4,ch);
} else
{if((state_val_14620 === 3))
{var inst_14616 = (state_14619[2]);var inst_14617 = cljs.core.async.close_BANG_.call(null,out);var state_14619__$1 = (function (){var statearr_14623 = state_14619;(statearr_14623[8] = inst_14616);
return statearr_14623;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14619__$1,inst_14617);
} else
{if((state_val_14620 === 4))
{var inst_14599 = (state_14619[9]);var inst_14599__$1 = (state_14619[2]);var inst_14600 = (inst_14599__$1 == null);var inst_14601 = cljs.core.not.call(null,inst_14600);var state_14619__$1 = (function (){var statearr_14624 = state_14619;(statearr_14624[9] = inst_14599__$1);
return statearr_14624;
})();if(inst_14601)
{var statearr_14625_14646 = state_14619__$1;(statearr_14625_14646[1] = 5);
} else
{var statearr_14626_14647 = state_14619__$1;(statearr_14626_14647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14620 === 5))
{var inst_14599 = (state_14619[9]);var inst_14596 = (state_14619[7]);var inst_14603 = cljs.core._EQ_.call(null,inst_14599,inst_14596);var state_14619__$1 = state_14619;if(inst_14603)
{var statearr_14627_14648 = state_14619__$1;(statearr_14627_14648[1] = 8);
} else
{var statearr_14628_14649 = state_14619__$1;(statearr_14628_14649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14620 === 6))
{var state_14619__$1 = state_14619;var statearr_14630_14650 = state_14619__$1;(statearr_14630_14650[2] = null);
(statearr_14630_14650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14620 === 7))
{var inst_14614 = (state_14619[2]);var state_14619__$1 = state_14619;var statearr_14631_14651 = state_14619__$1;(statearr_14631_14651[2] = inst_14614);
(statearr_14631_14651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14620 === 8))
{var inst_14596 = (state_14619[7]);var tmp14629 = inst_14596;var inst_14596__$1 = tmp14629;var state_14619__$1 = (function (){var statearr_14632 = state_14619;(statearr_14632[7] = inst_14596__$1);
return statearr_14632;
})();var statearr_14633_14652 = state_14619__$1;(statearr_14633_14652[2] = null);
(statearr_14633_14652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14620 === 9))
{var inst_14599 = (state_14619[9]);var state_14619__$1 = state_14619;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14619__$1,11,out,inst_14599);
} else
{if((state_val_14620 === 10))
{var inst_14611 = (state_14619[2]);var state_14619__$1 = state_14619;var statearr_14634_14653 = state_14619__$1;(statearr_14634_14653[2] = inst_14611);
(statearr_14634_14653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14620 === 11))
{var inst_14599 = (state_14619[9]);var inst_14608 = (state_14619[2]);var inst_14596 = inst_14599;var state_14619__$1 = (function (){var statearr_14635 = state_14619;(statearr_14635[7] = inst_14596);
(statearr_14635[10] = inst_14608);
return statearr_14635;
})();var statearr_14636_14654 = state_14619__$1;(statearr_14636_14654[2] = null);
(statearr_14636_14654[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14640 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14640[0] = state_machine__5507__auto__);
(statearr_14640[1] = 1);
return statearr_14640;
});
var state_machine__5507__auto____1 = (function (state_14619){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14619);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14641){if((e14641 instanceof Object))
{var ex__5510__auto__ = e14641;var statearr_14642_14655 = state_14619;(statearr_14642_14655[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14619);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14656 = state_14619;
state_14619 = G__14656;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14619){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14643 = f__5522__auto__.call(null);(statearr_14643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14644);
return statearr_14643;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14761){var state_val_14762 = (state_14761[1]);if((state_val_14762 === 1))
{var inst_14724 = (new Array(n));var inst_14725 = inst_14724;var inst_14726 = 0;var state_14761__$1 = (function (){var statearr_14763 = state_14761;(statearr_14763[7] = inst_14725);
(statearr_14763[8] = inst_14726);
return statearr_14763;
})();var statearr_14764_14792 = state_14761__$1;(statearr_14764_14792[2] = null);
(statearr_14764_14792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 2))
{var state_14761__$1 = state_14761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14761__$1,4,ch);
} else
{if((state_val_14762 === 3))
{var inst_14759 = (state_14761[2]);var state_14761__$1 = state_14761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14761__$1,inst_14759);
} else
{if((state_val_14762 === 4))
{var inst_14729 = (state_14761[9]);var inst_14729__$1 = (state_14761[2]);var inst_14730 = (inst_14729__$1 == null);var inst_14731 = cljs.core.not.call(null,inst_14730);var state_14761__$1 = (function (){var statearr_14765 = state_14761;(statearr_14765[9] = inst_14729__$1);
return statearr_14765;
})();if(inst_14731)
{var statearr_14766_14793 = state_14761__$1;(statearr_14766_14793[1] = 5);
} else
{var statearr_14767_14794 = state_14761__$1;(statearr_14767_14794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 5))
{var inst_14725 = (state_14761[7]);var inst_14726 = (state_14761[8]);var inst_14729 = (state_14761[9]);var inst_14734 = (state_14761[10]);var inst_14733 = (inst_14725[inst_14726] = inst_14729);var inst_14734__$1 = (inst_14726 + 1);var inst_14735 = (inst_14734__$1 < n);var state_14761__$1 = (function (){var statearr_14768 = state_14761;(statearr_14768[11] = inst_14733);
(statearr_14768[10] = inst_14734__$1);
return statearr_14768;
})();if(cljs.core.truth_(inst_14735))
{var statearr_14769_14795 = state_14761__$1;(statearr_14769_14795[1] = 8);
} else
{var statearr_14770_14796 = state_14761__$1;(statearr_14770_14796[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 6))
{var inst_14726 = (state_14761[8]);var inst_14747 = (inst_14726 > 0);var state_14761__$1 = state_14761;if(cljs.core.truth_(inst_14747))
{var statearr_14772_14797 = state_14761__$1;(statearr_14772_14797[1] = 12);
} else
{var statearr_14773_14798 = state_14761__$1;(statearr_14773_14798[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 7))
{var inst_14757 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14774_14799 = state_14761__$1;(statearr_14774_14799[2] = inst_14757);
(statearr_14774_14799[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 8))
{var inst_14725 = (state_14761[7]);var inst_14734 = (state_14761[10]);var tmp14771 = inst_14725;var inst_14725__$1 = tmp14771;var inst_14726 = inst_14734;var state_14761__$1 = (function (){var statearr_14775 = state_14761;(statearr_14775[7] = inst_14725__$1);
(statearr_14775[8] = inst_14726);
return statearr_14775;
})();var statearr_14776_14800 = state_14761__$1;(statearr_14776_14800[2] = null);
(statearr_14776_14800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 9))
{var inst_14725 = (state_14761[7]);var inst_14739 = cljs.core.vec.call(null,inst_14725);var state_14761__$1 = state_14761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14761__$1,11,out,inst_14739);
} else
{if((state_val_14762 === 10))
{var inst_14745 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14777_14801 = state_14761__$1;(statearr_14777_14801[2] = inst_14745);
(statearr_14777_14801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 11))
{var inst_14741 = (state_14761[2]);var inst_14742 = (new Array(n));var inst_14725 = inst_14742;var inst_14726 = 0;var state_14761__$1 = (function (){var statearr_14778 = state_14761;(statearr_14778[7] = inst_14725);
(statearr_14778[8] = inst_14726);
(statearr_14778[12] = inst_14741);
return statearr_14778;
})();var statearr_14779_14802 = state_14761__$1;(statearr_14779_14802[2] = null);
(statearr_14779_14802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 12))
{var inst_14725 = (state_14761[7]);var inst_14749 = cljs.core.vec.call(null,inst_14725);var state_14761__$1 = state_14761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14761__$1,15,out,inst_14749);
} else
{if((state_val_14762 === 13))
{var state_14761__$1 = state_14761;var statearr_14780_14803 = state_14761__$1;(statearr_14780_14803[2] = null);
(statearr_14780_14803[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 14))
{var inst_14754 = (state_14761[2]);var inst_14755 = cljs.core.async.close_BANG_.call(null,out);var state_14761__$1 = (function (){var statearr_14781 = state_14761;(statearr_14781[13] = inst_14754);
return statearr_14781;
})();var statearr_14782_14804 = state_14761__$1;(statearr_14782_14804[2] = inst_14755);
(statearr_14782_14804[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14762 === 15))
{var inst_14751 = (state_14761[2]);var state_14761__$1 = state_14761;var statearr_14783_14805 = state_14761__$1;(statearr_14783_14805[2] = inst_14751);
(statearr_14783_14805[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14787[0] = state_machine__5507__auto__);
(statearr_14787[1] = 1);
return statearr_14787;
});
var state_machine__5507__auto____1 = (function (state_14761){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14761);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14788){if((e14788 instanceof Object))
{var ex__5510__auto__ = e14788;var statearr_14789_14806 = state_14761;(statearr_14789_14806[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14761);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14807 = state_14761;
state_14761 = G__14807;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14761){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14790 = f__5522__auto__.call(null);(statearr_14790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14791);
return statearr_14790;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14920){var state_val_14921 = (state_14920[1]);if((state_val_14921 === 1))
{var inst_14879 = [];var inst_14880 = inst_14879;var inst_14881 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14920__$1 = (function (){var statearr_14922 = state_14920;(statearr_14922[7] = inst_14880);
(statearr_14922[8] = inst_14881);
return statearr_14922;
})();var statearr_14923_14951 = state_14920__$1;(statearr_14923_14951[2] = null);
(statearr_14923_14951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 2))
{var state_14920__$1 = state_14920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14920__$1,4,ch);
} else
{if((state_val_14921 === 3))
{var inst_14918 = (state_14920[2]);var state_14920__$1 = state_14920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14920__$1,inst_14918);
} else
{if((state_val_14921 === 4))
{var inst_14884 = (state_14920[9]);var inst_14884__$1 = (state_14920[2]);var inst_14885 = (inst_14884__$1 == null);var inst_14886 = cljs.core.not.call(null,inst_14885);var state_14920__$1 = (function (){var statearr_14924 = state_14920;(statearr_14924[9] = inst_14884__$1);
return statearr_14924;
})();if(inst_14886)
{var statearr_14925_14952 = state_14920__$1;(statearr_14925_14952[1] = 5);
} else
{var statearr_14926_14953 = state_14920__$1;(statearr_14926_14953[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 5))
{var inst_14881 = (state_14920[8]);var inst_14888 = (state_14920[10]);var inst_14884 = (state_14920[9]);var inst_14888__$1 = f.call(null,inst_14884);var inst_14889 = cljs.core._EQ_.call(null,inst_14888__$1,inst_14881);var inst_14890 = cljs.core.keyword_identical_QMARK_.call(null,inst_14881,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14891 = (inst_14889) || (inst_14890);var state_14920__$1 = (function (){var statearr_14927 = state_14920;(statearr_14927[10] = inst_14888__$1);
return statearr_14927;
})();if(cljs.core.truth_(inst_14891))
{var statearr_14928_14954 = state_14920__$1;(statearr_14928_14954[1] = 8);
} else
{var statearr_14929_14955 = state_14920__$1;(statearr_14929_14955[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 6))
{var inst_14880 = (state_14920[7]);var inst_14905 = inst_14880.length;var inst_14906 = (inst_14905 > 0);var state_14920__$1 = state_14920;if(cljs.core.truth_(inst_14906))
{var statearr_14931_14956 = state_14920__$1;(statearr_14931_14956[1] = 12);
} else
{var statearr_14932_14957 = state_14920__$1;(statearr_14932_14957[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 7))
{var inst_14916 = (state_14920[2]);var state_14920__$1 = state_14920;var statearr_14933_14958 = state_14920__$1;(statearr_14933_14958[2] = inst_14916);
(statearr_14933_14958[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 8))
{var inst_14880 = (state_14920[7]);var inst_14888 = (state_14920[10]);var inst_14884 = (state_14920[9]);var inst_14893 = inst_14880.push(inst_14884);var tmp14930 = inst_14880;var inst_14880__$1 = tmp14930;var inst_14881 = inst_14888;var state_14920__$1 = (function (){var statearr_14934 = state_14920;(statearr_14934[7] = inst_14880__$1);
(statearr_14934[8] = inst_14881);
(statearr_14934[11] = inst_14893);
return statearr_14934;
})();var statearr_14935_14959 = state_14920__$1;(statearr_14935_14959[2] = null);
(statearr_14935_14959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 9))
{var inst_14880 = (state_14920[7]);var inst_14896 = cljs.core.vec.call(null,inst_14880);var state_14920__$1 = state_14920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14920__$1,11,out,inst_14896);
} else
{if((state_val_14921 === 10))
{var inst_14903 = (state_14920[2]);var state_14920__$1 = state_14920;var statearr_14936_14960 = state_14920__$1;(statearr_14936_14960[2] = inst_14903);
(statearr_14936_14960[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 11))
{var inst_14888 = (state_14920[10]);var inst_14884 = (state_14920[9]);var inst_14898 = (state_14920[2]);var inst_14899 = [];var inst_14900 = inst_14899.push(inst_14884);var inst_14880 = inst_14899;var inst_14881 = inst_14888;var state_14920__$1 = (function (){var statearr_14937 = state_14920;(statearr_14937[7] = inst_14880);
(statearr_14937[8] = inst_14881);
(statearr_14937[12] = inst_14898);
(statearr_14937[13] = inst_14900);
return statearr_14937;
})();var statearr_14938_14961 = state_14920__$1;(statearr_14938_14961[2] = null);
(statearr_14938_14961[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 12))
{var inst_14880 = (state_14920[7]);var inst_14908 = cljs.core.vec.call(null,inst_14880);var state_14920__$1 = state_14920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14920__$1,15,out,inst_14908);
} else
{if((state_val_14921 === 13))
{var state_14920__$1 = state_14920;var statearr_14939_14962 = state_14920__$1;(statearr_14939_14962[2] = null);
(statearr_14939_14962[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 14))
{var inst_14913 = (state_14920[2]);var inst_14914 = cljs.core.async.close_BANG_.call(null,out);var state_14920__$1 = (function (){var statearr_14940 = state_14920;(statearr_14940[14] = inst_14913);
return statearr_14940;
})();var statearr_14941_14963 = state_14920__$1;(statearr_14941_14963[2] = inst_14914);
(statearr_14941_14963[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14921 === 15))
{var inst_14910 = (state_14920[2]);var state_14920__$1 = state_14920;var statearr_14942_14964 = state_14920__$1;(statearr_14942_14964[2] = inst_14910);
(statearr_14942_14964[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14946[0] = state_machine__5507__auto__);
(statearr_14946[1] = 1);
return statearr_14946;
});
var state_machine__5507__auto____1 = (function (state_14920){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14920);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14947){if((e14947 instanceof Object))
{var ex__5510__auto__ = e14947;var statearr_14948_14965 = state_14920;(statearr_14948_14965[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14966 = state_14920;
state_14920 = G__14966;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14920){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14949 = f__5522__auto__.call(null);(statearr_14949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14950);
return statearr_14949;
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