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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14508 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14508 = (function (f,fn_handler,meta14509){
this.f = f;
this.fn_handler = fn_handler;
this.meta14509 = meta14509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14508.cljs$lang$type = true;
cljs.core.async.t14508.cljs$lang$ctorStr = "cljs.core.async/t14508";
cljs.core.async.t14508.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14508");
});
cljs.core.async.t14508.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14510){var self__ = this;
var _14510__$1 = this;return self__.meta14509;
});
cljs.core.async.t14508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14510,meta14509__$1){var self__ = this;
var _14510__$1 = this;return (new cljs.core.async.t14508(self__.f,self__.fn_handler,meta14509__$1));
});
cljs.core.async.__GT_t14508 = (function __GT_t14508(f__$1,fn_handler__$1,meta14509){return (new cljs.core.async.t14508(f__$1,fn_handler__$1,meta14509));
});
}
return (new cljs.core.async.t14508(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14512 = buff;if(G__14512)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__14512.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14512.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14512);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14512);
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
{var val_14513 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14513);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14513,ret){
return (function (){return fn1.call(null,val_14513);
});})(val_14513,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___14514 = n;var x_14515 = (0);while(true){
if((x_14515 < n__4399__auto___14514))
{(a[x_14515] = (0));
{
var G__14516 = (x_14515 + (1));
x_14515 = G__14516;
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
var G__14517 = (i + (1));
i = G__14517;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14521 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14521 = (function (flag,alt_flag,meta14522){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14522 = meta14522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14521.cljs$lang$type = true;
cljs.core.async.t14521.cljs$lang$ctorStr = "cljs.core.async/t14521";
cljs.core.async.t14521.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14521");
});})(flag))
;
cljs.core.async.t14521.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14523){var self__ = this;
var _14523__$1 = this;return self__.meta14522;
});})(flag))
;
cljs.core.async.t14521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14523,meta14522__$1){var self__ = this;
var _14523__$1 = this;return (new cljs.core.async.t14521(self__.flag,self__.alt_flag,meta14522__$1));
});})(flag))
;
cljs.core.async.__GT_t14521 = ((function (flag){
return (function __GT_t14521(flag__$1,alt_flag__$1,meta14522){return (new cljs.core.async.t14521(flag__$1,alt_flag__$1,meta14522));
});})(flag))
;
}
return (new cljs.core.async.t14521(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14527 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14527 = (function (cb,flag,alt_handler,meta14528){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14528 = meta14528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14527.cljs$lang$type = true;
cljs.core.async.t14527.cljs$lang$ctorStr = "cljs.core.async/t14527";
cljs.core.async.t14527.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14527");
});
cljs.core.async.t14527.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14529){var self__ = this;
var _14529__$1 = this;return self__.meta14528;
});
cljs.core.async.t14527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14529,meta14528__$1){var self__ = this;
var _14529__$1 = this;return (new cljs.core.async.t14527(self__.cb,self__.flag,self__.alt_handler,meta14528__$1));
});
cljs.core.async.__GT_t14527 = (function __GT_t14527(cb__$1,flag__$1,alt_handler__$1,meta14528){return (new cljs.core.async.t14527(cb__$1,flag__$1,alt_handler__$1,meta14528));
});
}
return (new cljs.core.async.t14527(cb,flag,alt_handler,null));
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
return (function (p1__14530_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14530_SHARP_,port], null));
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
var G__14531 = (i + (1));
i = G__14531;
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
var alts_BANG___delegate = function (ports,p__14532){var map__14534 = p__14532;var map__14534__$1 = ((cljs.core.seq_QMARK_.call(null,map__14534))?cljs.core.apply.call(null,cljs.core.hash_map,map__14534):map__14534);var opts = map__14534__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14532 = null;if (arguments.length > 1) {
  p__14532 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14532);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14535){
var ports = cljs.core.first(arglist__14535);
var p__14532 = cljs.core.rest(arglist__14535);
return alts_BANG___delegate(ports,p__14532);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14543 = (function (ch,f,map_LT_,meta14544){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14544 = meta14544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14543.cljs$lang$type = true;
cljs.core.async.t14543.cljs$lang$ctorStr = "cljs.core.async/t14543";
cljs.core.async.t14543.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14543");
});
cljs.core.async.t14543.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14543.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14543.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14543.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14546 = (function (fn1,_,meta14544,ch,f,map_LT_,meta14547){
this.fn1 = fn1;
this._ = _;
this.meta14544 = meta14544;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14547 = meta14547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14546.cljs$lang$type = true;
cljs.core.async.t14546.cljs$lang$ctorStr = "cljs.core.async/t14546";
cljs.core.async.t14546.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14546");
});})(___$1))
;
cljs.core.async.t14546.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14546.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14536_SHARP_){return f1.call(null,(((p1__14536_SHARP_ == null))?null:self__.f.call(null,p1__14536_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14548){var self__ = this;
var _14548__$1 = this;return self__.meta14547;
});})(___$1))
;
cljs.core.async.t14546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14548,meta14547__$1){var self__ = this;
var _14548__$1 = this;return (new cljs.core.async.t14546(self__.fn1,self__._,self__.meta14544,self__.ch,self__.f,self__.map_LT_,meta14547__$1));
});})(___$1))
;
cljs.core.async.__GT_t14546 = ((function (___$1){
return (function __GT_t14546(fn1__$1,___$2,meta14544__$1,ch__$2,f__$2,map_LT___$2,meta14547){return (new cljs.core.async.t14546(fn1__$1,___$2,meta14544__$1,ch__$2,f__$2,map_LT___$2,meta14547));
});})(___$1))
;
}
return (new cljs.core.async.t14546(fn1,___$1,self__.meta14544,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14543.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14543.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14545){var self__ = this;
var _14545__$1 = this;return self__.meta14544;
});
cljs.core.async.t14543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14545,meta14544__$1){var self__ = this;
var _14545__$1 = this;return (new cljs.core.async.t14543(self__.ch,self__.f,self__.map_LT_,meta14544__$1));
});
cljs.core.async.__GT_t14543 = (function __GT_t14543(ch__$1,f__$1,map_LT___$1,meta14544){return (new cljs.core.async.t14543(ch__$1,f__$1,map_LT___$1,meta14544));
});
}
return (new cljs.core.async.t14543(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14552 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14552 = (function (ch,f,map_GT_,meta14553){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14553 = meta14553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14552.cljs$lang$type = true;
cljs.core.async.t14552.cljs$lang$ctorStr = "cljs.core.async/t14552";
cljs.core.async.t14552.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14552");
});
cljs.core.async.t14552.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14552.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14552.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14554){var self__ = this;
var _14554__$1 = this;return self__.meta14553;
});
cljs.core.async.t14552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14554,meta14553__$1){var self__ = this;
var _14554__$1 = this;return (new cljs.core.async.t14552(self__.ch,self__.f,self__.map_GT_,meta14553__$1));
});
cljs.core.async.__GT_t14552 = (function __GT_t14552(ch__$1,f__$1,map_GT___$1,meta14553){return (new cljs.core.async.t14552(ch__$1,f__$1,map_GT___$1,meta14553));
});
}
return (new cljs.core.async.t14552(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14558 = (function (ch,p,filter_GT_,meta14559){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14559 = meta14559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14558.cljs$lang$type = true;
cljs.core.async.t14558.cljs$lang$ctorStr = "cljs.core.async/t14558";
cljs.core.async.t14558.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14558");
});
cljs.core.async.t14558.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14558.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14558.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14560){var self__ = this;
var _14560__$1 = this;return self__.meta14559;
});
cljs.core.async.t14558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14560,meta14559__$1){var self__ = this;
var _14560__$1 = this;return (new cljs.core.async.t14558(self__.ch,self__.p,self__.filter_GT_,meta14559__$1));
});
cljs.core.async.__GT_t14558 = (function __GT_t14558(ch__$1,p__$1,filter_GT___$1,meta14559){return (new cljs.core.async.t14558(ch__$1,p__$1,filter_GT___$1,meta14559));
});
}
return (new cljs.core.async.t14558(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___14643 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___14643,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___14643,out){
return (function (state_14622){var state_val_14623 = (state_14622[(1)]);if((state_val_14623 === (7)))
{var inst_14618 = (state_14622[(2)]);var state_14622__$1 = state_14622;var statearr_14624_14644 = state_14622__$1;(statearr_14624_14644[(2)] = inst_14618);
(statearr_14624_14644[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (1)))
{var state_14622__$1 = state_14622;var statearr_14625_14645 = state_14622__$1;(statearr_14625_14645[(2)] = null);
(statearr_14625_14645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (4)))
{var inst_14604 = (state_14622[(7)]);var inst_14604__$1 = (state_14622[(2)]);var inst_14605 = (inst_14604__$1 == null);var state_14622__$1 = (function (){var statearr_14626 = state_14622;(statearr_14626[(7)] = inst_14604__$1);
return statearr_14626;
})();if(cljs.core.truth_(inst_14605))
{var statearr_14627_14646 = state_14622__$1;(statearr_14627_14646[(1)] = (5));
} else
{var statearr_14628_14647 = state_14622__$1;(statearr_14628_14647[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (6)))
{var inst_14604 = (state_14622[(7)]);var inst_14609 = p.call(null,inst_14604);var state_14622__$1 = state_14622;if(cljs.core.truth_(inst_14609))
{var statearr_14629_14648 = state_14622__$1;(statearr_14629_14648[(1)] = (8));
} else
{var statearr_14630_14649 = state_14622__$1;(statearr_14630_14649[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (3)))
{var inst_14620 = (state_14622[(2)]);var state_14622__$1 = state_14622;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14622__$1,inst_14620);
} else
{if((state_val_14623 === (2)))
{var state_14622__$1 = state_14622;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14622__$1,(4),ch);
} else
{if((state_val_14623 === (11)))
{var inst_14612 = (state_14622[(2)]);var state_14622__$1 = state_14622;var statearr_14631_14650 = state_14622__$1;(statearr_14631_14650[(2)] = inst_14612);
(statearr_14631_14650[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (9)))
{var state_14622__$1 = state_14622;var statearr_14632_14651 = state_14622__$1;(statearr_14632_14651[(2)] = null);
(statearr_14632_14651[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (5)))
{var inst_14607 = cljs.core.async.close_BANG_.call(null,out);var state_14622__$1 = state_14622;var statearr_14633_14652 = state_14622__$1;(statearr_14633_14652[(2)] = inst_14607);
(statearr_14633_14652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (10)))
{var inst_14615 = (state_14622[(2)]);var state_14622__$1 = (function (){var statearr_14634 = state_14622;(statearr_14634[(8)] = inst_14615);
return statearr_14634;
})();var statearr_14635_14653 = state_14622__$1;(statearr_14635_14653[(2)] = null);
(statearr_14635_14653[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14623 === (8)))
{var inst_14604 = (state_14622[(7)]);var state_14622__$1 = state_14622;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14622__$1,(11),out,inst_14604);
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
});})(c__5693__auto___14643,out))
;return ((function (switch__5678__auto__,c__5693__auto___14643,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_14639 = [null,null,null,null,null,null,null,null,null];(statearr_14639[(0)] = state_machine__5679__auto__);
(statearr_14639[(1)] = (1));
return statearr_14639;
});
var state_machine__5679__auto____1 = (function (state_14622){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14622);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14640){if((e14640 instanceof Object))
{var ex__5682__auto__ = e14640;var statearr_14641_14654 = state_14622;(statearr_14641_14654[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14622);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14640;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14655 = state_14622;
state_14622 = G__14655;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14622){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___14643,out))
})();var state__5695__auto__ = (function (){var statearr_14642 = f__5694__auto__.call(null);(statearr_14642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___14643);
return statearr_14642;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___14643,out))
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
return (function (state_14807){var state_val_14808 = (state_14807[(1)]);if((state_val_14808 === (7)))
{var inst_14803 = (state_14807[(2)]);var state_14807__$1 = state_14807;var statearr_14809_14846 = state_14807__$1;(statearr_14809_14846[(2)] = inst_14803);
(statearr_14809_14846[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (20)))
{var inst_14778 = (state_14807[(7)]);var inst_14789 = (state_14807[(2)]);var inst_14790 = cljs.core.next.call(null,inst_14778);var inst_14764 = inst_14790;var inst_14765 = null;var inst_14766 = (0);var inst_14767 = (0);var state_14807__$1 = (function (){var statearr_14810 = state_14807;(statearr_14810[(8)] = inst_14767);
(statearr_14810[(9)] = inst_14789);
(statearr_14810[(10)] = inst_14765);
(statearr_14810[(11)] = inst_14764);
(statearr_14810[(12)] = inst_14766);
return statearr_14810;
})();var statearr_14811_14847 = state_14807__$1;(statearr_14811_14847[(2)] = null);
(statearr_14811_14847[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (1)))
{var state_14807__$1 = state_14807;var statearr_14812_14848 = state_14807__$1;(statearr_14812_14848[(2)] = null);
(statearr_14812_14848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (4)))
{var inst_14753 = (state_14807[(13)]);var inst_14753__$1 = (state_14807[(2)]);var inst_14754 = (inst_14753__$1 == null);var state_14807__$1 = (function (){var statearr_14816 = state_14807;(statearr_14816[(13)] = inst_14753__$1);
return statearr_14816;
})();if(cljs.core.truth_(inst_14754))
{var statearr_14817_14849 = state_14807__$1;(statearr_14817_14849[(1)] = (5));
} else
{var statearr_14818_14850 = state_14807__$1;(statearr_14818_14850[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (15)))
{var state_14807__$1 = state_14807;var statearr_14819_14851 = state_14807__$1;(statearr_14819_14851[(2)] = null);
(statearr_14819_14851[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (13)))
{var inst_14767 = (state_14807[(8)]);var inst_14765 = (state_14807[(10)]);var inst_14764 = (state_14807[(11)]);var inst_14766 = (state_14807[(12)]);var inst_14774 = (state_14807[(2)]);var inst_14775 = (inst_14767 + (1));var tmp14813 = inst_14765;var tmp14814 = inst_14764;var tmp14815 = inst_14766;var inst_14764__$1 = tmp14814;var inst_14765__$1 = tmp14813;var inst_14766__$1 = tmp14815;var inst_14767__$1 = inst_14775;var state_14807__$1 = (function (){var statearr_14820 = state_14807;(statearr_14820[(14)] = inst_14774);
(statearr_14820[(8)] = inst_14767__$1);
(statearr_14820[(10)] = inst_14765__$1);
(statearr_14820[(11)] = inst_14764__$1);
(statearr_14820[(12)] = inst_14766__$1);
return statearr_14820;
})();var statearr_14821_14852 = state_14807__$1;(statearr_14821_14852[(2)] = null);
(statearr_14821_14852[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (6)))
{var inst_14753 = (state_14807[(13)]);var inst_14758 = f.call(null,inst_14753);var inst_14763 = cljs.core.seq.call(null,inst_14758);var inst_14764 = inst_14763;var inst_14765 = null;var inst_14766 = (0);var inst_14767 = (0);var state_14807__$1 = (function (){var statearr_14822 = state_14807;(statearr_14822[(8)] = inst_14767);
(statearr_14822[(10)] = inst_14765);
(statearr_14822[(11)] = inst_14764);
(statearr_14822[(12)] = inst_14766);
return statearr_14822;
})();var statearr_14823_14853 = state_14807__$1;(statearr_14823_14853[(2)] = null);
(statearr_14823_14853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (17)))
{var inst_14778 = (state_14807[(7)]);var inst_14782 = cljs.core.chunk_first.call(null,inst_14778);var inst_14783 = cljs.core.chunk_rest.call(null,inst_14778);var inst_14784 = cljs.core.count.call(null,inst_14782);var inst_14764 = inst_14783;var inst_14765 = inst_14782;var inst_14766 = inst_14784;var inst_14767 = (0);var state_14807__$1 = (function (){var statearr_14824 = state_14807;(statearr_14824[(8)] = inst_14767);
(statearr_14824[(10)] = inst_14765);
(statearr_14824[(11)] = inst_14764);
(statearr_14824[(12)] = inst_14766);
return statearr_14824;
})();var statearr_14825_14854 = state_14807__$1;(statearr_14825_14854[(2)] = null);
(statearr_14825_14854[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (3)))
{var inst_14805 = (state_14807[(2)]);var state_14807__$1 = state_14807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14807__$1,inst_14805);
} else
{if((state_val_14808 === (12)))
{var inst_14798 = (state_14807[(2)]);var state_14807__$1 = state_14807;var statearr_14826_14855 = state_14807__$1;(statearr_14826_14855[(2)] = inst_14798);
(statearr_14826_14855[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (2)))
{var state_14807__$1 = state_14807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14807__$1,(4),in$);
} else
{if((state_val_14808 === (19)))
{var inst_14793 = (state_14807[(2)]);var state_14807__$1 = state_14807;var statearr_14827_14856 = state_14807__$1;(statearr_14827_14856[(2)] = inst_14793);
(statearr_14827_14856[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (11)))
{var inst_14778 = (state_14807[(7)]);var inst_14764 = (state_14807[(11)]);var inst_14778__$1 = cljs.core.seq.call(null,inst_14764);var state_14807__$1 = (function (){var statearr_14828 = state_14807;(statearr_14828[(7)] = inst_14778__$1);
return statearr_14828;
})();if(inst_14778__$1)
{var statearr_14829_14857 = state_14807__$1;(statearr_14829_14857[(1)] = (14));
} else
{var statearr_14830_14858 = state_14807__$1;(statearr_14830_14858[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (9)))
{var inst_14800 = (state_14807[(2)]);var state_14807__$1 = (function (){var statearr_14831 = state_14807;(statearr_14831[(15)] = inst_14800);
return statearr_14831;
})();var statearr_14832_14859 = state_14807__$1;(statearr_14832_14859[(2)] = null);
(statearr_14832_14859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (5)))
{var inst_14756 = cljs.core.async.close_BANG_.call(null,out);var state_14807__$1 = state_14807;var statearr_14833_14860 = state_14807__$1;(statearr_14833_14860[(2)] = inst_14756);
(statearr_14833_14860[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (14)))
{var inst_14778 = (state_14807[(7)]);var inst_14780 = cljs.core.chunked_seq_QMARK_.call(null,inst_14778);var state_14807__$1 = state_14807;if(inst_14780)
{var statearr_14834_14861 = state_14807__$1;(statearr_14834_14861[(1)] = (17));
} else
{var statearr_14835_14862 = state_14807__$1;(statearr_14835_14862[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (16)))
{var inst_14796 = (state_14807[(2)]);var state_14807__$1 = state_14807;var statearr_14836_14863 = state_14807__$1;(statearr_14836_14863[(2)] = inst_14796);
(statearr_14836_14863[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14808 === (10)))
{var inst_14767 = (state_14807[(8)]);var inst_14765 = (state_14807[(10)]);var inst_14772 = cljs.core._nth.call(null,inst_14765,inst_14767);var state_14807__$1 = state_14807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14807__$1,(13),out,inst_14772);
} else
{if((state_val_14808 === (18)))
{var inst_14778 = (state_14807[(7)]);var inst_14787 = cljs.core.first.call(null,inst_14778);var state_14807__$1 = state_14807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14807__$1,(20),out,inst_14787);
} else
{if((state_val_14808 === (8)))
{var inst_14767 = (state_14807[(8)]);var inst_14766 = (state_14807[(12)]);var inst_14769 = (inst_14767 < inst_14766);var inst_14770 = inst_14769;var state_14807__$1 = state_14807;if(cljs.core.truth_(inst_14770))
{var statearr_14837_14864 = state_14807__$1;(statearr_14837_14864[(1)] = (10));
} else
{var statearr_14838_14865 = state_14807__$1;(statearr_14838_14865[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_14842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14842[(0)] = state_machine__5679__auto__);
(statearr_14842[(1)] = (1));
return statearr_14842;
});
var state_machine__5679__auto____1 = (function (state_14807){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14807);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14843){if((e14843 instanceof Object))
{var ex__5682__auto__ = e14843;var statearr_14844_14866 = state_14807;(statearr_14844_14866[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14867 = state_14807;
state_14807 = G__14867;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14807){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_14845 = f__5694__auto__.call(null);(statearr_14845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_14845;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___14948 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___14948){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___14948){
return (function (state_14927){var state_val_14928 = (state_14927[(1)]);if((state_val_14928 === (7)))
{var inst_14923 = (state_14927[(2)]);var state_14927__$1 = state_14927;var statearr_14929_14949 = state_14927__$1;(statearr_14929_14949[(2)] = inst_14923);
(statearr_14929_14949[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14928 === (1)))
{var state_14927__$1 = state_14927;var statearr_14930_14950 = state_14927__$1;(statearr_14930_14950[(2)] = null);
(statearr_14930_14950[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14928 === (4)))
{var inst_14910 = (state_14927[(7)]);var inst_14910__$1 = (state_14927[(2)]);var inst_14911 = (inst_14910__$1 == null);var state_14927__$1 = (function (){var statearr_14931 = state_14927;(statearr_14931[(7)] = inst_14910__$1);
return statearr_14931;
})();if(cljs.core.truth_(inst_14911))
{var statearr_14932_14951 = state_14927__$1;(statearr_14932_14951[(1)] = (5));
} else
{var statearr_14933_14952 = state_14927__$1;(statearr_14933_14952[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14928 === (6)))
{var inst_14910 = (state_14927[(7)]);var state_14927__$1 = state_14927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14927__$1,(11),to,inst_14910);
} else
{if((state_val_14928 === (3)))
{var inst_14925 = (state_14927[(2)]);var state_14927__$1 = state_14927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14927__$1,inst_14925);
} else
{if((state_val_14928 === (2)))
{var state_14927__$1 = state_14927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14927__$1,(4),from);
} else
{if((state_val_14928 === (11)))
{var inst_14920 = (state_14927[(2)]);var state_14927__$1 = (function (){var statearr_14934 = state_14927;(statearr_14934[(8)] = inst_14920);
return statearr_14934;
})();var statearr_14935_14953 = state_14927__$1;(statearr_14935_14953[(2)] = null);
(statearr_14935_14953[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14928 === (9)))
{var state_14927__$1 = state_14927;var statearr_14936_14954 = state_14927__$1;(statearr_14936_14954[(2)] = null);
(statearr_14936_14954[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14928 === (5)))
{var state_14927__$1 = state_14927;if(cljs.core.truth_(close_QMARK_))
{var statearr_14937_14955 = state_14927__$1;(statearr_14937_14955[(1)] = (8));
} else
{var statearr_14938_14956 = state_14927__$1;(statearr_14938_14956[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14928 === (10)))
{var inst_14917 = (state_14927[(2)]);var state_14927__$1 = state_14927;var statearr_14939_14957 = state_14927__$1;(statearr_14939_14957[(2)] = inst_14917);
(statearr_14939_14957[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14928 === (8)))
{var inst_14914 = cljs.core.async.close_BANG_.call(null,to);var state_14927__$1 = state_14927;var statearr_14940_14958 = state_14927__$1;(statearr_14940_14958[(2)] = inst_14914);
(statearr_14940_14958[(1)] = (10));
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
});})(c__5693__auto___14948))
;return ((function (switch__5678__auto__,c__5693__auto___14948){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_14944 = [null,null,null,null,null,null,null,null,null];(statearr_14944[(0)] = state_machine__5679__auto__);
(statearr_14944[(1)] = (1));
return statearr_14944;
});
var state_machine__5679__auto____1 = (function (state_14927){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_14927);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e14945){if((e14945 instanceof Object))
{var ex__5682__auto__ = e14945;var statearr_14946_14959 = state_14927;(statearr_14946_14959[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14927);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14960 = state_14927;
state_14927 = G__14960;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_14927){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_14927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___14948))
})();var state__5695__auto__ = (function (){var statearr_14947 = f__5694__auto__.call(null);(statearr_14947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___14948);
return statearr_14947;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___14948))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___15047 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15047,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15047,tc,fc){
return (function (state_15025){var state_val_15026 = (state_15025[(1)]);if((state_val_15026 === (7)))
{var inst_15021 = (state_15025[(2)]);var state_15025__$1 = state_15025;var statearr_15027_15048 = state_15025__$1;(statearr_15027_15048[(2)] = inst_15021);
(statearr_15027_15048[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15026 === (1)))
{var state_15025__$1 = state_15025;var statearr_15028_15049 = state_15025__$1;(statearr_15028_15049[(2)] = null);
(statearr_15028_15049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15026 === (4)))
{var inst_15006 = (state_15025[(7)]);var inst_15006__$1 = (state_15025[(2)]);var inst_15007 = (inst_15006__$1 == null);var state_15025__$1 = (function (){var statearr_15029 = state_15025;(statearr_15029[(7)] = inst_15006__$1);
return statearr_15029;
})();if(cljs.core.truth_(inst_15007))
{var statearr_15030_15050 = state_15025__$1;(statearr_15030_15050[(1)] = (5));
} else
{var statearr_15031_15051 = state_15025__$1;(statearr_15031_15051[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15026 === (6)))
{var inst_15006 = (state_15025[(7)]);var inst_15012 = p.call(null,inst_15006);var state_15025__$1 = state_15025;if(cljs.core.truth_(inst_15012))
{var statearr_15032_15052 = state_15025__$1;(statearr_15032_15052[(1)] = (9));
} else
{var statearr_15033_15053 = state_15025__$1;(statearr_15033_15053[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15026 === (3)))
{var inst_15023 = (state_15025[(2)]);var state_15025__$1 = state_15025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15025__$1,inst_15023);
} else
{if((state_val_15026 === (2)))
{var state_15025__$1 = state_15025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15025__$1,(4),ch);
} else
{if((state_val_15026 === (11)))
{var inst_15006 = (state_15025[(7)]);var inst_15016 = (state_15025[(2)]);var state_15025__$1 = state_15025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15025__$1,(8),inst_15016,inst_15006);
} else
{if((state_val_15026 === (9)))
{var state_15025__$1 = state_15025;var statearr_15034_15054 = state_15025__$1;(statearr_15034_15054[(2)] = tc);
(statearr_15034_15054[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15026 === (5)))
{var inst_15009 = cljs.core.async.close_BANG_.call(null,tc);var inst_15010 = cljs.core.async.close_BANG_.call(null,fc);var state_15025__$1 = (function (){var statearr_15035 = state_15025;(statearr_15035[(8)] = inst_15009);
return statearr_15035;
})();var statearr_15036_15055 = state_15025__$1;(statearr_15036_15055[(2)] = inst_15010);
(statearr_15036_15055[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15026 === (10)))
{var state_15025__$1 = state_15025;var statearr_15037_15056 = state_15025__$1;(statearr_15037_15056[(2)] = fc);
(statearr_15037_15056[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15026 === (8)))
{var inst_15018 = (state_15025[(2)]);var state_15025__$1 = (function (){var statearr_15038 = state_15025;(statearr_15038[(9)] = inst_15018);
return statearr_15038;
})();var statearr_15039_15057 = state_15025__$1;(statearr_15039_15057[(2)] = null);
(statearr_15039_15057[(1)] = (2));
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
});})(c__5693__auto___15047,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___15047,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15043 = [null,null,null,null,null,null,null,null,null,null];(statearr_15043[(0)] = state_machine__5679__auto__);
(statearr_15043[(1)] = (1));
return statearr_15043;
});
var state_machine__5679__auto____1 = (function (state_15025){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15025);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15044){if((e15044 instanceof Object))
{var ex__5682__auto__ = e15044;var statearr_15045_15058 = state_15025;(statearr_15045_15058[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15059 = state_15025;
state_15025 = G__15059;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15025){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15047,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_15046 = f__5694__auto__.call(null);(statearr_15046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15047);
return statearr_15046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15047,tc,fc))
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
return (function (state_15106){var state_val_15107 = (state_15106[(1)]);if((state_val_15107 === (7)))
{var inst_15102 = (state_15106[(2)]);var state_15106__$1 = state_15106;var statearr_15108_15124 = state_15106__$1;(statearr_15108_15124[(2)] = inst_15102);
(statearr_15108_15124[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15107 === (6)))
{var inst_15095 = (state_15106[(7)]);var inst_15092 = (state_15106[(8)]);var inst_15099 = f.call(null,inst_15092,inst_15095);var inst_15092__$1 = inst_15099;var state_15106__$1 = (function (){var statearr_15109 = state_15106;(statearr_15109[(8)] = inst_15092__$1);
return statearr_15109;
})();var statearr_15110_15125 = state_15106__$1;(statearr_15110_15125[(2)] = null);
(statearr_15110_15125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15107 === (5)))
{var inst_15092 = (state_15106[(8)]);var state_15106__$1 = state_15106;var statearr_15111_15126 = state_15106__$1;(statearr_15111_15126[(2)] = inst_15092);
(statearr_15111_15126[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15107 === (4)))
{var inst_15095 = (state_15106[(7)]);var inst_15095__$1 = (state_15106[(2)]);var inst_15096 = (inst_15095__$1 == null);var state_15106__$1 = (function (){var statearr_15112 = state_15106;(statearr_15112[(7)] = inst_15095__$1);
return statearr_15112;
})();if(cljs.core.truth_(inst_15096))
{var statearr_15113_15127 = state_15106__$1;(statearr_15113_15127[(1)] = (5));
} else
{var statearr_15114_15128 = state_15106__$1;(statearr_15114_15128[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15107 === (3)))
{var inst_15104 = (state_15106[(2)]);var state_15106__$1 = state_15106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15106__$1,inst_15104);
} else
{if((state_val_15107 === (2)))
{var state_15106__$1 = state_15106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15106__$1,(4),ch);
} else
{if((state_val_15107 === (1)))
{var inst_15092 = init;var state_15106__$1 = (function (){var statearr_15115 = state_15106;(statearr_15115[(8)] = inst_15092);
return statearr_15115;
})();var statearr_15116_15129 = state_15106__$1;(statearr_15116_15129[(2)] = null);
(statearr_15116_15129[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_15120 = [null,null,null,null,null,null,null,null,null];(statearr_15120[(0)] = state_machine__5679__auto__);
(statearr_15120[(1)] = (1));
return statearr_15120;
});
var state_machine__5679__auto____1 = (function (state_15106){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15106);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15121){if((e15121 instanceof Object))
{var ex__5682__auto__ = e15121;var statearr_15122_15130 = state_15106;(statearr_15122_15130[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15121;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15131 = state_15106;
state_15106 = G__15131;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15106){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15123 = f__5694__auto__.call(null);(statearr_15123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15123;
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
return (function (state_15193){var state_val_15194 = (state_15193[(1)]);if((state_val_15194 === (7)))
{var inst_15174 = (state_15193[(7)]);var inst_15179 = (state_15193[(2)]);var inst_15180 = cljs.core.next.call(null,inst_15174);var inst_15174__$1 = inst_15180;var state_15193__$1 = (function (){var statearr_15195 = state_15193;(statearr_15195[(7)] = inst_15174__$1);
(statearr_15195[(8)] = inst_15179);
return statearr_15195;
})();var statearr_15196_15214 = state_15193__$1;(statearr_15196_15214[(2)] = null);
(statearr_15196_15214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15194 === (1)))
{var inst_15173 = cljs.core.seq.call(null,coll);var inst_15174 = inst_15173;var state_15193__$1 = (function (){var statearr_15197 = state_15193;(statearr_15197[(7)] = inst_15174);
return statearr_15197;
})();var statearr_15198_15215 = state_15193__$1;(statearr_15198_15215[(2)] = null);
(statearr_15198_15215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15194 === (4)))
{var inst_15174 = (state_15193[(7)]);var inst_15177 = cljs.core.first.call(null,inst_15174);var state_15193__$1 = state_15193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15193__$1,(7),ch,inst_15177);
} else
{if((state_val_15194 === (6)))
{var inst_15189 = (state_15193[(2)]);var state_15193__$1 = state_15193;var statearr_15199_15216 = state_15193__$1;(statearr_15199_15216[(2)] = inst_15189);
(statearr_15199_15216[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15194 === (3)))
{var inst_15191 = (state_15193[(2)]);var state_15193__$1 = state_15193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15193__$1,inst_15191);
} else
{if((state_val_15194 === (2)))
{var inst_15174 = (state_15193[(7)]);var state_15193__$1 = state_15193;if(cljs.core.truth_(inst_15174))
{var statearr_15200_15217 = state_15193__$1;(statearr_15200_15217[(1)] = (4));
} else
{var statearr_15201_15218 = state_15193__$1;(statearr_15201_15218[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15194 === (9)))
{var state_15193__$1 = state_15193;var statearr_15202_15219 = state_15193__$1;(statearr_15202_15219[(2)] = null);
(statearr_15202_15219[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15194 === (5)))
{var state_15193__$1 = state_15193;if(cljs.core.truth_(close_QMARK_))
{var statearr_15203_15220 = state_15193__$1;(statearr_15203_15220[(1)] = (8));
} else
{var statearr_15204_15221 = state_15193__$1;(statearr_15204_15221[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15194 === (10)))
{var inst_15187 = (state_15193[(2)]);var state_15193__$1 = state_15193;var statearr_15205_15222 = state_15193__$1;(statearr_15205_15222[(2)] = inst_15187);
(statearr_15205_15222[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15194 === (8)))
{var inst_15184 = cljs.core.async.close_BANG_.call(null,ch);var state_15193__$1 = state_15193;var statearr_15206_15223 = state_15193__$1;(statearr_15206_15223[(2)] = inst_15184);
(statearr_15206_15223[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_15210 = [null,null,null,null,null,null,null,null,null];(statearr_15210[(0)] = state_machine__5679__auto__);
(statearr_15210[(1)] = (1));
return statearr_15210;
});
var state_machine__5679__auto____1 = (function (state_15193){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15193);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15211){if((e15211 instanceof Object))
{var ex__5682__auto__ = e15211;var statearr_15212_15224 = state_15193;(statearr_15212_15224[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15225 = state_15193;
state_15193 = G__15225;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15193){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15213 = f__5694__auto__.call(null);(statearr_15213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15213;
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
cljs.core.async.Mux = (function (){var obj15227 = {};return obj15227;
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
cljs.core.async.Mult = (function (){var obj15229 = {};return obj15229;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15453 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15453 = (function (cs,ch,mult,meta15454){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15454 = meta15454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15453.cljs$lang$type = true;
cljs.core.async.t15453.cljs$lang$ctorStr = "cljs.core.async/t15453";
cljs.core.async.t15453.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15453");
});})(cs))
;
cljs.core.async.t15453.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15453.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15453.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15453.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15453.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15455){var self__ = this;
var _15455__$1 = this;return self__.meta15454;
});})(cs))
;
cljs.core.async.t15453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15455,meta15454__$1){var self__ = this;
var _15455__$1 = this;return (new cljs.core.async.t15453(self__.cs,self__.ch,self__.mult,meta15454__$1));
});})(cs))
;
cljs.core.async.__GT_t15453 = ((function (cs){
return (function __GT_t15453(cs__$1,ch__$1,mult__$1,meta15454){return (new cljs.core.async.t15453(cs__$1,ch__$1,mult__$1,meta15454));
});})(cs))
;
}
return (new cljs.core.async.t15453(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___15676 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15676,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15676,cs,m,dchan,dctr,done){
return (function (state_15590){var state_val_15591 = (state_15590[(1)]);if((state_val_15591 === (7)))
{var inst_15586 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15592_15677 = state_15590__$1;(statearr_15592_15677[(2)] = inst_15586);
(statearr_15592_15677[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (20)))
{var inst_15487 = (state_15590[(7)]);var inst_15497 = cljs.core.first.call(null,inst_15487);var inst_15498 = cljs.core.nth.call(null,inst_15497,(0),null);var inst_15499 = cljs.core.nth.call(null,inst_15497,(1),null);var state_15590__$1 = (function (){var statearr_15593 = state_15590;(statearr_15593[(8)] = inst_15498);
return statearr_15593;
})();if(cljs.core.truth_(inst_15499))
{var statearr_15594_15678 = state_15590__$1;(statearr_15594_15678[(1)] = (22));
} else
{var statearr_15595_15679 = state_15590__$1;(statearr_15595_15679[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (27)))
{var inst_15527 = (state_15590[(9)]);var inst_15529 = (state_15590[(10)]);var inst_15534 = cljs.core._nth.call(null,inst_15527,inst_15529);var state_15590__$1 = (function (){var statearr_15596 = state_15590;(statearr_15596[(11)] = inst_15534);
return statearr_15596;
})();var statearr_15597_15680 = state_15590__$1;(statearr_15597_15680[(2)] = null);
(statearr_15597_15680[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (1)))
{var state_15590__$1 = state_15590;var statearr_15598_15681 = state_15590__$1;(statearr_15598_15681[(2)] = null);
(statearr_15598_15681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (24)))
{var inst_15487 = (state_15590[(7)]);var inst_15504 = (state_15590[(2)]);var inst_15505 = cljs.core.next.call(null,inst_15487);var inst_15467 = inst_15505;var inst_15468 = null;var inst_15469 = (0);var inst_15470 = (0);var state_15590__$1 = (function (){var statearr_15599 = state_15590;(statearr_15599[(12)] = inst_15470);
(statearr_15599[(13)] = inst_15467);
(statearr_15599[(14)] = inst_15504);
(statearr_15599[(15)] = inst_15469);
(statearr_15599[(16)] = inst_15468);
return statearr_15599;
})();var statearr_15600_15682 = state_15590__$1;(statearr_15600_15682[(2)] = null);
(statearr_15600_15682[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (39)))
{var inst_15547 = (state_15590[(17)]);var inst_15565 = (state_15590[(2)]);var inst_15566 = cljs.core.next.call(null,inst_15547);var inst_15526 = inst_15566;var inst_15527 = null;var inst_15528 = (0);var inst_15529 = (0);var state_15590__$1 = (function (){var statearr_15604 = state_15590;(statearr_15604[(9)] = inst_15527);
(statearr_15604[(18)] = inst_15565);
(statearr_15604[(19)] = inst_15528);
(statearr_15604[(10)] = inst_15529);
(statearr_15604[(20)] = inst_15526);
return statearr_15604;
})();var statearr_15605_15683 = state_15590__$1;(statearr_15605_15683[(2)] = null);
(statearr_15605_15683[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (4)))
{var inst_15458 = (state_15590[(21)]);var inst_15458__$1 = (state_15590[(2)]);var inst_15459 = (inst_15458__$1 == null);var state_15590__$1 = (function (){var statearr_15606 = state_15590;(statearr_15606[(21)] = inst_15458__$1);
return statearr_15606;
})();if(cljs.core.truth_(inst_15459))
{var statearr_15607_15684 = state_15590__$1;(statearr_15607_15684[(1)] = (5));
} else
{var statearr_15608_15685 = state_15590__$1;(statearr_15608_15685[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (15)))
{var inst_15470 = (state_15590[(12)]);var inst_15467 = (state_15590[(13)]);var inst_15469 = (state_15590[(15)]);var inst_15468 = (state_15590[(16)]);var inst_15483 = (state_15590[(2)]);var inst_15484 = (inst_15470 + (1));var tmp15601 = inst_15467;var tmp15602 = inst_15469;var tmp15603 = inst_15468;var inst_15467__$1 = tmp15601;var inst_15468__$1 = tmp15603;var inst_15469__$1 = tmp15602;var inst_15470__$1 = inst_15484;var state_15590__$1 = (function (){var statearr_15609 = state_15590;(statearr_15609[(12)] = inst_15470__$1);
(statearr_15609[(13)] = inst_15467__$1);
(statearr_15609[(22)] = inst_15483);
(statearr_15609[(15)] = inst_15469__$1);
(statearr_15609[(16)] = inst_15468__$1);
return statearr_15609;
})();var statearr_15610_15686 = state_15590__$1;(statearr_15610_15686[(2)] = null);
(statearr_15610_15686[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (21)))
{var inst_15508 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15611_15687 = state_15590__$1;(statearr_15611_15687[(2)] = inst_15508);
(statearr_15611_15687[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (31)))
{var inst_15534 = (state_15590[(11)]);var inst_15535 = (state_15590[(2)]);var inst_15536 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15537 = cljs.core.async.untap_STAR_.call(null,m,inst_15534);var state_15590__$1 = (function (){var statearr_15612 = state_15590;(statearr_15612[(23)] = inst_15536);
(statearr_15612[(24)] = inst_15535);
return statearr_15612;
})();var statearr_15613_15688 = state_15590__$1;(statearr_15613_15688[(2)] = inst_15537);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15590__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (32)))
{var inst_15458 = (state_15590[(21)]);var inst_15534 = (state_15590[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15590,(31),Object,null,(30));var inst_15541 = cljs.core.async.put_BANG_.call(null,inst_15534,inst_15458,done);var state_15590__$1 = state_15590;var statearr_15614_15689 = state_15590__$1;(statearr_15614_15689[(2)] = inst_15541);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15590__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (40)))
{var inst_15556 = (state_15590[(25)]);var inst_15557 = (state_15590[(2)]);var inst_15558 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15559 = cljs.core.async.untap_STAR_.call(null,m,inst_15556);var state_15590__$1 = (function (){var statearr_15615 = state_15590;(statearr_15615[(26)] = inst_15558);
(statearr_15615[(27)] = inst_15557);
return statearr_15615;
})();var statearr_15616_15690 = state_15590__$1;(statearr_15616_15690[(2)] = inst_15559);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15590__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (33)))
{var inst_15547 = (state_15590[(17)]);var inst_15549 = cljs.core.chunked_seq_QMARK_.call(null,inst_15547);var state_15590__$1 = state_15590;if(inst_15549)
{var statearr_15617_15691 = state_15590__$1;(statearr_15617_15691[(1)] = (36));
} else
{var statearr_15618_15692 = state_15590__$1;(statearr_15618_15692[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (13)))
{var inst_15477 = (state_15590[(28)]);var inst_15480 = cljs.core.async.close_BANG_.call(null,inst_15477);var state_15590__$1 = state_15590;var statearr_15619_15693 = state_15590__$1;(statearr_15619_15693[(2)] = inst_15480);
(statearr_15619_15693[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (22)))
{var inst_15498 = (state_15590[(8)]);var inst_15501 = cljs.core.async.close_BANG_.call(null,inst_15498);var state_15590__$1 = state_15590;var statearr_15620_15694 = state_15590__$1;(statearr_15620_15694[(2)] = inst_15501);
(statearr_15620_15694[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (36)))
{var inst_15547 = (state_15590[(17)]);var inst_15551 = cljs.core.chunk_first.call(null,inst_15547);var inst_15552 = cljs.core.chunk_rest.call(null,inst_15547);var inst_15553 = cljs.core.count.call(null,inst_15551);var inst_15526 = inst_15552;var inst_15527 = inst_15551;var inst_15528 = inst_15553;var inst_15529 = (0);var state_15590__$1 = (function (){var statearr_15621 = state_15590;(statearr_15621[(9)] = inst_15527);
(statearr_15621[(19)] = inst_15528);
(statearr_15621[(10)] = inst_15529);
(statearr_15621[(20)] = inst_15526);
return statearr_15621;
})();var statearr_15622_15695 = state_15590__$1;(statearr_15622_15695[(2)] = null);
(statearr_15622_15695[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (41)))
{var inst_15556 = (state_15590[(25)]);var inst_15458 = (state_15590[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15590,(40),Object,null,(39));var inst_15563 = cljs.core.async.put_BANG_.call(null,inst_15556,inst_15458,done);var state_15590__$1 = state_15590;var statearr_15623_15696 = state_15590__$1;(statearr_15623_15696[(2)] = inst_15563);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15590__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (43)))
{var state_15590__$1 = state_15590;var statearr_15624_15697 = state_15590__$1;(statearr_15624_15697[(2)] = null);
(statearr_15624_15697[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (29)))
{var inst_15574 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15625_15698 = state_15590__$1;(statearr_15625_15698[(2)] = inst_15574);
(statearr_15625_15698[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (44)))
{var inst_15583 = (state_15590[(2)]);var state_15590__$1 = (function (){var statearr_15626 = state_15590;(statearr_15626[(29)] = inst_15583);
return statearr_15626;
})();var statearr_15627_15699 = state_15590__$1;(statearr_15627_15699[(2)] = null);
(statearr_15627_15699[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (6)))
{var inst_15518 = (state_15590[(30)]);var inst_15517 = cljs.core.deref.call(null,cs);var inst_15518__$1 = cljs.core.keys.call(null,inst_15517);var inst_15519 = cljs.core.count.call(null,inst_15518__$1);var inst_15520 = cljs.core.reset_BANG_.call(null,dctr,inst_15519);var inst_15525 = cljs.core.seq.call(null,inst_15518__$1);var inst_15526 = inst_15525;var inst_15527 = null;var inst_15528 = (0);var inst_15529 = (0);var state_15590__$1 = (function (){var statearr_15628 = state_15590;(statearr_15628[(9)] = inst_15527);
(statearr_15628[(19)] = inst_15528);
(statearr_15628[(10)] = inst_15529);
(statearr_15628[(31)] = inst_15520);
(statearr_15628[(20)] = inst_15526);
(statearr_15628[(30)] = inst_15518__$1);
return statearr_15628;
})();var statearr_15629_15700 = state_15590__$1;(statearr_15629_15700[(2)] = null);
(statearr_15629_15700[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (28)))
{var inst_15547 = (state_15590[(17)]);var inst_15526 = (state_15590[(20)]);var inst_15547__$1 = cljs.core.seq.call(null,inst_15526);var state_15590__$1 = (function (){var statearr_15630 = state_15590;(statearr_15630[(17)] = inst_15547__$1);
return statearr_15630;
})();if(inst_15547__$1)
{var statearr_15631_15701 = state_15590__$1;(statearr_15631_15701[(1)] = (33));
} else
{var statearr_15632_15702 = state_15590__$1;(statearr_15632_15702[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (25)))
{var inst_15528 = (state_15590[(19)]);var inst_15529 = (state_15590[(10)]);var inst_15531 = (inst_15529 < inst_15528);var inst_15532 = inst_15531;var state_15590__$1 = state_15590;if(cljs.core.truth_(inst_15532))
{var statearr_15633_15703 = state_15590__$1;(statearr_15633_15703[(1)] = (27));
} else
{var statearr_15634_15704 = state_15590__$1;(statearr_15634_15704[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (34)))
{var state_15590__$1 = state_15590;var statearr_15635_15705 = state_15590__$1;(statearr_15635_15705[(2)] = null);
(statearr_15635_15705[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (17)))
{var state_15590__$1 = state_15590;var statearr_15636_15706 = state_15590__$1;(statearr_15636_15706[(2)] = null);
(statearr_15636_15706[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (3)))
{var inst_15588 = (state_15590[(2)]);var state_15590__$1 = state_15590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15590__$1,inst_15588);
} else
{if((state_val_15591 === (12)))
{var inst_15513 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15637_15707 = state_15590__$1;(statearr_15637_15707[(2)] = inst_15513);
(statearr_15637_15707[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (2)))
{var state_15590__$1 = state_15590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15590__$1,(4),ch);
} else
{if((state_val_15591 === (23)))
{var state_15590__$1 = state_15590;var statearr_15638_15708 = state_15590__$1;(statearr_15638_15708[(2)] = null);
(statearr_15638_15708[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (35)))
{var inst_15572 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15639_15709 = state_15590__$1;(statearr_15639_15709[(2)] = inst_15572);
(statearr_15639_15709[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (19)))
{var inst_15487 = (state_15590[(7)]);var inst_15491 = cljs.core.chunk_first.call(null,inst_15487);var inst_15492 = cljs.core.chunk_rest.call(null,inst_15487);var inst_15493 = cljs.core.count.call(null,inst_15491);var inst_15467 = inst_15492;var inst_15468 = inst_15491;var inst_15469 = inst_15493;var inst_15470 = (0);var state_15590__$1 = (function (){var statearr_15640 = state_15590;(statearr_15640[(12)] = inst_15470);
(statearr_15640[(13)] = inst_15467);
(statearr_15640[(15)] = inst_15469);
(statearr_15640[(16)] = inst_15468);
return statearr_15640;
})();var statearr_15641_15710 = state_15590__$1;(statearr_15641_15710[(2)] = null);
(statearr_15641_15710[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (11)))
{var inst_15467 = (state_15590[(13)]);var inst_15487 = (state_15590[(7)]);var inst_15487__$1 = cljs.core.seq.call(null,inst_15467);var state_15590__$1 = (function (){var statearr_15642 = state_15590;(statearr_15642[(7)] = inst_15487__$1);
return statearr_15642;
})();if(inst_15487__$1)
{var statearr_15643_15711 = state_15590__$1;(statearr_15643_15711[(1)] = (16));
} else
{var statearr_15644_15712 = state_15590__$1;(statearr_15644_15712[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (9)))
{var inst_15515 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15645_15713 = state_15590__$1;(statearr_15645_15713[(2)] = inst_15515);
(statearr_15645_15713[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (5)))
{var inst_15465 = cljs.core.deref.call(null,cs);var inst_15466 = cljs.core.seq.call(null,inst_15465);var inst_15467 = inst_15466;var inst_15468 = null;var inst_15469 = (0);var inst_15470 = (0);var state_15590__$1 = (function (){var statearr_15646 = state_15590;(statearr_15646[(12)] = inst_15470);
(statearr_15646[(13)] = inst_15467);
(statearr_15646[(15)] = inst_15469);
(statearr_15646[(16)] = inst_15468);
return statearr_15646;
})();var statearr_15647_15714 = state_15590__$1;(statearr_15647_15714[(2)] = null);
(statearr_15647_15714[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (14)))
{var state_15590__$1 = state_15590;var statearr_15648_15715 = state_15590__$1;(statearr_15648_15715[(2)] = null);
(statearr_15648_15715[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (45)))
{var inst_15580 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15649_15716 = state_15590__$1;(statearr_15649_15716[(2)] = inst_15580);
(statearr_15649_15716[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (26)))
{var inst_15518 = (state_15590[(30)]);var inst_15576 = (state_15590[(2)]);var inst_15577 = cljs.core.seq.call(null,inst_15518);var state_15590__$1 = (function (){var statearr_15650 = state_15590;(statearr_15650[(32)] = inst_15576);
return statearr_15650;
})();if(inst_15577)
{var statearr_15651_15717 = state_15590__$1;(statearr_15651_15717[(1)] = (42));
} else
{var statearr_15652_15718 = state_15590__$1;(statearr_15652_15718[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (16)))
{var inst_15487 = (state_15590[(7)]);var inst_15489 = cljs.core.chunked_seq_QMARK_.call(null,inst_15487);var state_15590__$1 = state_15590;if(inst_15489)
{var statearr_15656_15719 = state_15590__$1;(statearr_15656_15719[(1)] = (19));
} else
{var statearr_15657_15720 = state_15590__$1;(statearr_15657_15720[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (38)))
{var inst_15569 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15658_15721 = state_15590__$1;(statearr_15658_15721[(2)] = inst_15569);
(statearr_15658_15721[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (30)))
{var inst_15527 = (state_15590[(9)]);var inst_15528 = (state_15590[(19)]);var inst_15529 = (state_15590[(10)]);var inst_15526 = (state_15590[(20)]);var inst_15543 = (state_15590[(2)]);var inst_15544 = (inst_15529 + (1));var tmp15653 = inst_15527;var tmp15654 = inst_15528;var tmp15655 = inst_15526;var inst_15526__$1 = tmp15655;var inst_15527__$1 = tmp15653;var inst_15528__$1 = tmp15654;var inst_15529__$1 = inst_15544;var state_15590__$1 = (function (){var statearr_15659 = state_15590;(statearr_15659[(9)] = inst_15527__$1);
(statearr_15659[(19)] = inst_15528__$1);
(statearr_15659[(10)] = inst_15529__$1);
(statearr_15659[(33)] = inst_15543);
(statearr_15659[(20)] = inst_15526__$1);
return statearr_15659;
})();var statearr_15660_15722 = state_15590__$1;(statearr_15660_15722[(2)] = null);
(statearr_15660_15722[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (10)))
{var inst_15470 = (state_15590[(12)]);var inst_15468 = (state_15590[(16)]);var inst_15476 = cljs.core._nth.call(null,inst_15468,inst_15470);var inst_15477 = cljs.core.nth.call(null,inst_15476,(0),null);var inst_15478 = cljs.core.nth.call(null,inst_15476,(1),null);var state_15590__$1 = (function (){var statearr_15661 = state_15590;(statearr_15661[(28)] = inst_15477);
return statearr_15661;
})();if(cljs.core.truth_(inst_15478))
{var statearr_15662_15723 = state_15590__$1;(statearr_15662_15723[(1)] = (13));
} else
{var statearr_15663_15724 = state_15590__$1;(statearr_15663_15724[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (18)))
{var inst_15511 = (state_15590[(2)]);var state_15590__$1 = state_15590;var statearr_15664_15725 = state_15590__$1;(statearr_15664_15725[(2)] = inst_15511);
(statearr_15664_15725[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (42)))
{var state_15590__$1 = state_15590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15590__$1,(45),dchan);
} else
{if((state_val_15591 === (37)))
{var inst_15547 = (state_15590[(17)]);var inst_15556 = cljs.core.first.call(null,inst_15547);var state_15590__$1 = (function (){var statearr_15665 = state_15590;(statearr_15665[(25)] = inst_15556);
return statearr_15665;
})();var statearr_15666_15726 = state_15590__$1;(statearr_15666_15726[(2)] = null);
(statearr_15666_15726[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15591 === (8)))
{var inst_15470 = (state_15590[(12)]);var inst_15469 = (state_15590[(15)]);var inst_15472 = (inst_15470 < inst_15469);var inst_15473 = inst_15472;var state_15590__$1 = state_15590;if(cljs.core.truth_(inst_15473))
{var statearr_15667_15727 = state_15590__$1;(statearr_15667_15727[(1)] = (10));
} else
{var statearr_15668_15728 = state_15590__$1;(statearr_15668_15728[(1)] = (11));
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
});})(c__5693__auto___15676,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___15676,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15672[(0)] = state_machine__5679__auto__);
(statearr_15672[(1)] = (1));
return statearr_15672;
});
var state_machine__5679__auto____1 = (function (state_15590){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15590);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15673){if((e15673 instanceof Object))
{var ex__5682__auto__ = e15673;var statearr_15674_15729 = state_15590;(statearr_15674_15729[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15730 = state_15590;
state_15590 = G__15730;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15590){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15676,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_15675 = f__5694__auto__.call(null);(statearr_15675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15676);
return statearr_15675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15676,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj15732 = {};return obj15732;
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
;var m = (function (){if(typeof cljs.core.async.t15842 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15842 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15843){
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
this.meta15843 = meta15843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15842.cljs$lang$type = true;
cljs.core.async.t15842.cljs$lang$ctorStr = "cljs.core.async/t15842";
cljs.core.async.t15842.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15842");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15842.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15844){var self__ = this;
var _15844__$1 = this;return self__.meta15843;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15844,meta15843__$1){var self__ = this;
var _15844__$1 = this;return (new cljs.core.async.t15842(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15843__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15842 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15842(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15843){return (new cljs.core.async.t15842(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15843));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15842(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___15951 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15909){var state_val_15910 = (state_15909[(1)]);if((state_val_15910 === (7)))
{var inst_15858 = (state_15909[(7)]);var inst_15863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15858);var state_15909__$1 = state_15909;var statearr_15911_15952 = state_15909__$1;(statearr_15911_15952[(2)] = inst_15863);
(statearr_15911_15952[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (20)))
{var inst_15873 = (state_15909[(8)]);var state_15909__$1 = state_15909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15909__$1,(23),out,inst_15873);
} else
{if((state_val_15910 === (1)))
{var inst_15848 = (state_15909[(9)]);var inst_15848__$1 = calc_state.call(null);var inst_15849 = cljs.core.seq_QMARK_.call(null,inst_15848__$1);var state_15909__$1 = (function (){var statearr_15912 = state_15909;(statearr_15912[(9)] = inst_15848__$1);
return statearr_15912;
})();if(inst_15849)
{var statearr_15913_15953 = state_15909__$1;(statearr_15913_15953[(1)] = (2));
} else
{var statearr_15914_15954 = state_15909__$1;(statearr_15914_15954[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (4)))
{var inst_15848 = (state_15909[(9)]);var inst_15854 = (state_15909[(2)]);var inst_15855 = cljs.core.get.call(null,inst_15854,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15856 = cljs.core.get.call(null,inst_15854,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15857 = cljs.core.get.call(null,inst_15854,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15858 = inst_15848;var state_15909__$1 = (function (){var statearr_15915 = state_15909;(statearr_15915[(7)] = inst_15858);
(statearr_15915[(10)] = inst_15855);
(statearr_15915[(11)] = inst_15857);
(statearr_15915[(12)] = inst_15856);
return statearr_15915;
})();var statearr_15916_15955 = state_15909__$1;(statearr_15916_15955[(2)] = null);
(statearr_15916_15955[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (15)))
{var state_15909__$1 = state_15909;var statearr_15917_15956 = state_15909__$1;(statearr_15917_15956[(2)] = null);
(statearr_15917_15956[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (21)))
{var state_15909__$1 = state_15909;var statearr_15918_15957 = state_15909__$1;(statearr_15918_15957[(2)] = null);
(statearr_15918_15957[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (13)))
{var inst_15905 = (state_15909[(2)]);var state_15909__$1 = state_15909;var statearr_15919_15958 = state_15909__$1;(statearr_15919_15958[(2)] = inst_15905);
(statearr_15919_15958[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (22)))
{var inst_15866 = (state_15909[(13)]);var inst_15902 = (state_15909[(2)]);var inst_15858 = inst_15866;var state_15909__$1 = (function (){var statearr_15920 = state_15909;(statearr_15920[(7)] = inst_15858);
(statearr_15920[(14)] = inst_15902);
return statearr_15920;
})();var statearr_15921_15959 = state_15909__$1;(statearr_15921_15959[(2)] = null);
(statearr_15921_15959[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (6)))
{var inst_15907 = (state_15909[(2)]);var state_15909__$1 = state_15909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15909__$1,inst_15907);
} else
{if((state_val_15910 === (17)))
{var inst_15888 = (state_15909[(15)]);var state_15909__$1 = state_15909;var statearr_15922_15960 = state_15909__$1;(statearr_15922_15960[(2)] = inst_15888);
(statearr_15922_15960[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (3)))
{var inst_15848 = (state_15909[(9)]);var state_15909__$1 = state_15909;var statearr_15923_15961 = state_15909__$1;(statearr_15923_15961[(2)] = inst_15848);
(statearr_15923_15961[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (12)))
{var inst_15888 = (state_15909[(15)]);var inst_15869 = (state_15909[(16)]);var inst_15874 = (state_15909[(17)]);var inst_15888__$1 = inst_15869.call(null,inst_15874);var state_15909__$1 = (function (){var statearr_15924 = state_15909;(statearr_15924[(15)] = inst_15888__$1);
return statearr_15924;
})();if(cljs.core.truth_(inst_15888__$1))
{var statearr_15925_15962 = state_15909__$1;(statearr_15925_15962[(1)] = (17));
} else
{var statearr_15926_15963 = state_15909__$1;(statearr_15926_15963[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (2)))
{var inst_15848 = (state_15909[(9)]);var inst_15851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15848);var state_15909__$1 = state_15909;var statearr_15927_15964 = state_15909__$1;(statearr_15927_15964[(2)] = inst_15851);
(statearr_15927_15964[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (23)))
{var inst_15899 = (state_15909[(2)]);var state_15909__$1 = state_15909;var statearr_15928_15965 = state_15909__$1;(statearr_15928_15965[(2)] = inst_15899);
(statearr_15928_15965[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (19)))
{var inst_15896 = (state_15909[(2)]);var state_15909__$1 = state_15909;if(cljs.core.truth_(inst_15896))
{var statearr_15929_15966 = state_15909__$1;(statearr_15929_15966[(1)] = (20));
} else
{var statearr_15930_15967 = state_15909__$1;(statearr_15930_15967[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (11)))
{var inst_15873 = (state_15909[(8)]);var inst_15879 = (inst_15873 == null);var state_15909__$1 = state_15909;if(cljs.core.truth_(inst_15879))
{var statearr_15931_15968 = state_15909__$1;(statearr_15931_15968[(1)] = (14));
} else
{var statearr_15932_15969 = state_15909__$1;(statearr_15932_15969[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (9)))
{var inst_15866 = (state_15909[(13)]);var inst_15866__$1 = (state_15909[(2)]);var inst_15867 = cljs.core.get.call(null,inst_15866__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15868 = cljs.core.get.call(null,inst_15866__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15869 = cljs.core.get.call(null,inst_15866__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15909__$1 = (function (){var statearr_15933 = state_15909;(statearr_15933[(13)] = inst_15866__$1);
(statearr_15933[(16)] = inst_15869);
(statearr_15933[(18)] = inst_15868);
return statearr_15933;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15909__$1,(10),inst_15867);
} else
{if((state_val_15910 === (5)))
{var inst_15858 = (state_15909[(7)]);var inst_15861 = cljs.core.seq_QMARK_.call(null,inst_15858);var state_15909__$1 = state_15909;if(inst_15861)
{var statearr_15934_15970 = state_15909__$1;(statearr_15934_15970[(1)] = (7));
} else
{var statearr_15935_15971 = state_15909__$1;(statearr_15935_15971[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (14)))
{var inst_15874 = (state_15909[(17)]);var inst_15881 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15874);var state_15909__$1 = state_15909;var statearr_15936_15972 = state_15909__$1;(statearr_15936_15972[(2)] = inst_15881);
(statearr_15936_15972[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (16)))
{var inst_15884 = (state_15909[(2)]);var inst_15885 = calc_state.call(null);var inst_15858 = inst_15885;var state_15909__$1 = (function (){var statearr_15937 = state_15909;(statearr_15937[(7)] = inst_15858);
(statearr_15937[(19)] = inst_15884);
return statearr_15937;
})();var statearr_15938_15973 = state_15909__$1;(statearr_15938_15973[(2)] = null);
(statearr_15938_15973[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (10)))
{var inst_15873 = (state_15909[(8)]);var inst_15874 = (state_15909[(17)]);var inst_15872 = (state_15909[(2)]);var inst_15873__$1 = cljs.core.nth.call(null,inst_15872,(0),null);var inst_15874__$1 = cljs.core.nth.call(null,inst_15872,(1),null);var inst_15875 = (inst_15873__$1 == null);var inst_15876 = cljs.core._EQ_.call(null,inst_15874__$1,change);var inst_15877 = (inst_15875) || (inst_15876);var state_15909__$1 = (function (){var statearr_15939 = state_15909;(statearr_15939[(8)] = inst_15873__$1);
(statearr_15939[(17)] = inst_15874__$1);
return statearr_15939;
})();if(cljs.core.truth_(inst_15877))
{var statearr_15940_15974 = state_15909__$1;(statearr_15940_15974[(1)] = (11));
} else
{var statearr_15941_15975 = state_15909__$1;(statearr_15941_15975[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (18)))
{var inst_15869 = (state_15909[(16)]);var inst_15874 = (state_15909[(17)]);var inst_15868 = (state_15909[(18)]);var inst_15891 = cljs.core.empty_QMARK_.call(null,inst_15869);var inst_15892 = inst_15868.call(null,inst_15874);var inst_15893 = cljs.core.not.call(null,inst_15892);var inst_15894 = (inst_15891) && (inst_15893);var state_15909__$1 = state_15909;var statearr_15942_15976 = state_15909__$1;(statearr_15942_15976[(2)] = inst_15894);
(statearr_15942_15976[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15910 === (8)))
{var inst_15858 = (state_15909[(7)]);var state_15909__$1 = state_15909;var statearr_15943_15977 = state_15909__$1;(statearr_15943_15977[(2)] = inst_15858);
(statearr_15943_15977[(1)] = (9));
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
});})(c__5693__auto___15951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___15951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15947[(0)] = state_machine__5679__auto__);
(statearr_15947[(1)] = (1));
return statearr_15947;
});
var state_machine__5679__auto____1 = (function (state_15909){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15909);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15948){if((e15948 instanceof Object))
{var ex__5682__auto__ = e15948;var statearr_15949_15978 = state_15909;(statearr_15949_15978[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15909);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15948;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15979 = state_15909;
state_15909 = G__15979;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15909){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_15950 = f__5694__auto__.call(null);(statearr_15950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15951);
return statearr_15950;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15951,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj15981 = {};return obj15981;
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
return (function (p1__15982_SHARP_){if(cljs.core.truth_(p1__15982_SHARP_.call(null,topic)))
{return p1__15982_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15982_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16107 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16108){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16108 = meta16108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16107.cljs$lang$type = true;
cljs.core.async.t16107.cljs$lang$ctorStr = "cljs.core.async/t16107";
cljs.core.async.t16107.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16107");
});})(mults,ensure_mult))
;
cljs.core.async.t16107.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16107.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16107.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16107.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16107.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16109){var self__ = this;
var _16109__$1 = this;return self__.meta16108;
});})(mults,ensure_mult))
;
cljs.core.async.t16107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16109,meta16108__$1){var self__ = this;
var _16109__$1 = this;return (new cljs.core.async.t16107(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16108__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16107 = ((function (mults,ensure_mult){
return (function __GT_t16107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16108){return (new cljs.core.async.t16107(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16108));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16107(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___16231 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16231,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16231,mults,ensure_mult,p){
return (function (state_16183){var state_val_16184 = (state_16183[(1)]);if((state_val_16184 === (7)))
{var inst_16179 = (state_16183[(2)]);var state_16183__$1 = state_16183;var statearr_16185_16232 = state_16183__$1;(statearr_16185_16232[(2)] = inst_16179);
(statearr_16185_16232[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (20)))
{var state_16183__$1 = state_16183;var statearr_16186_16233 = state_16183__$1;(statearr_16186_16233[(2)] = null);
(statearr_16186_16233[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (1)))
{var state_16183__$1 = state_16183;var statearr_16187_16234 = state_16183__$1;(statearr_16187_16234[(2)] = null);
(statearr_16187_16234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (24)))
{var inst_16162 = (state_16183[(7)]);var inst_16112 = (state_16183[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16183,(23),Object,null,(22));var inst_16169 = cljs.core.async.muxch_STAR_.call(null,inst_16162);var state_16183__$1 = state_16183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16183__$1,(25),inst_16169,inst_16112);
} else
{if((state_val_16184 === (4)))
{var inst_16112 = (state_16183[(8)]);var inst_16112__$1 = (state_16183[(2)]);var inst_16113 = (inst_16112__$1 == null);var state_16183__$1 = (function (){var statearr_16188 = state_16183;(statearr_16188[(8)] = inst_16112__$1);
return statearr_16188;
})();if(cljs.core.truth_(inst_16113))
{var statearr_16189_16235 = state_16183__$1;(statearr_16189_16235[(1)] = (5));
} else
{var statearr_16190_16236 = state_16183__$1;(statearr_16190_16236[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (15)))
{var inst_16154 = (state_16183[(2)]);var state_16183__$1 = state_16183;var statearr_16191_16237 = state_16183__$1;(statearr_16191_16237[(2)] = inst_16154);
(statearr_16191_16237[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (21)))
{var inst_16176 = (state_16183[(2)]);var state_16183__$1 = (function (){var statearr_16192 = state_16183;(statearr_16192[(9)] = inst_16176);
return statearr_16192;
})();var statearr_16193_16238 = state_16183__$1;(statearr_16193_16238[(2)] = null);
(statearr_16193_16238[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (13)))
{var inst_16136 = (state_16183[(10)]);var inst_16138 = cljs.core.chunked_seq_QMARK_.call(null,inst_16136);var state_16183__$1 = state_16183;if(inst_16138)
{var statearr_16194_16239 = state_16183__$1;(statearr_16194_16239[(1)] = (16));
} else
{var statearr_16195_16240 = state_16183__$1;(statearr_16195_16240[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (22)))
{var inst_16173 = (state_16183[(2)]);var state_16183__$1 = state_16183;var statearr_16196_16241 = state_16183__$1;(statearr_16196_16241[(2)] = inst_16173);
(statearr_16196_16241[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (6)))
{var inst_16162 = (state_16183[(7)]);var inst_16112 = (state_16183[(8)]);var inst_16160 = (state_16183[(11)]);var inst_16160__$1 = topic_fn.call(null,inst_16112);var inst_16161 = cljs.core.deref.call(null,mults);var inst_16162__$1 = cljs.core.get.call(null,inst_16161,inst_16160__$1);var state_16183__$1 = (function (){var statearr_16197 = state_16183;(statearr_16197[(7)] = inst_16162__$1);
(statearr_16197[(11)] = inst_16160__$1);
return statearr_16197;
})();if(cljs.core.truth_(inst_16162__$1))
{var statearr_16198_16242 = state_16183__$1;(statearr_16198_16242[(1)] = (19));
} else
{var statearr_16199_16243 = state_16183__$1;(statearr_16199_16243[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (25)))
{var inst_16171 = (state_16183[(2)]);var state_16183__$1 = state_16183;var statearr_16200_16244 = state_16183__$1;(statearr_16200_16244[(2)] = inst_16171);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16183__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (17)))
{var inst_16136 = (state_16183[(10)]);var inst_16145 = cljs.core.first.call(null,inst_16136);var inst_16146 = cljs.core.async.muxch_STAR_.call(null,inst_16145);var inst_16147 = cljs.core.async.close_BANG_.call(null,inst_16146);var inst_16148 = cljs.core.next.call(null,inst_16136);var inst_16122 = inst_16148;var inst_16123 = null;var inst_16124 = (0);var inst_16125 = (0);var state_16183__$1 = (function (){var statearr_16201 = state_16183;(statearr_16201[(12)] = inst_16123);
(statearr_16201[(13)] = inst_16125);
(statearr_16201[(14)] = inst_16122);
(statearr_16201[(15)] = inst_16124);
(statearr_16201[(16)] = inst_16147);
return statearr_16201;
})();var statearr_16202_16245 = state_16183__$1;(statearr_16202_16245[(2)] = null);
(statearr_16202_16245[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (3)))
{var inst_16181 = (state_16183[(2)]);var state_16183__$1 = state_16183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16183__$1,inst_16181);
} else
{if((state_val_16184 === (12)))
{var inst_16156 = (state_16183[(2)]);var state_16183__$1 = state_16183;var statearr_16203_16246 = state_16183__$1;(statearr_16203_16246[(2)] = inst_16156);
(statearr_16203_16246[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (2)))
{var state_16183__$1 = state_16183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16183__$1,(4),ch);
} else
{if((state_val_16184 === (23)))
{var inst_16160 = (state_16183[(11)]);var inst_16164 = (state_16183[(2)]);var inst_16165 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16160);var state_16183__$1 = (function (){var statearr_16204 = state_16183;(statearr_16204[(17)] = inst_16164);
return statearr_16204;
})();var statearr_16205_16247 = state_16183__$1;(statearr_16205_16247[(2)] = inst_16165);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16183__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (19)))
{var state_16183__$1 = state_16183;var statearr_16206_16248 = state_16183__$1;(statearr_16206_16248[(2)] = null);
(statearr_16206_16248[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (11)))
{var inst_16122 = (state_16183[(14)]);var inst_16136 = (state_16183[(10)]);var inst_16136__$1 = cljs.core.seq.call(null,inst_16122);var state_16183__$1 = (function (){var statearr_16207 = state_16183;(statearr_16207[(10)] = inst_16136__$1);
return statearr_16207;
})();if(inst_16136__$1)
{var statearr_16208_16249 = state_16183__$1;(statearr_16208_16249[(1)] = (13));
} else
{var statearr_16209_16250 = state_16183__$1;(statearr_16209_16250[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (9)))
{var inst_16158 = (state_16183[(2)]);var state_16183__$1 = state_16183;var statearr_16210_16251 = state_16183__$1;(statearr_16210_16251[(2)] = inst_16158);
(statearr_16210_16251[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (5)))
{var inst_16119 = cljs.core.deref.call(null,mults);var inst_16120 = cljs.core.vals.call(null,inst_16119);var inst_16121 = cljs.core.seq.call(null,inst_16120);var inst_16122 = inst_16121;var inst_16123 = null;var inst_16124 = (0);var inst_16125 = (0);var state_16183__$1 = (function (){var statearr_16211 = state_16183;(statearr_16211[(12)] = inst_16123);
(statearr_16211[(13)] = inst_16125);
(statearr_16211[(14)] = inst_16122);
(statearr_16211[(15)] = inst_16124);
return statearr_16211;
})();var statearr_16212_16252 = state_16183__$1;(statearr_16212_16252[(2)] = null);
(statearr_16212_16252[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (14)))
{var state_16183__$1 = state_16183;var statearr_16216_16253 = state_16183__$1;(statearr_16216_16253[(2)] = null);
(statearr_16216_16253[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (16)))
{var inst_16136 = (state_16183[(10)]);var inst_16140 = cljs.core.chunk_first.call(null,inst_16136);var inst_16141 = cljs.core.chunk_rest.call(null,inst_16136);var inst_16142 = cljs.core.count.call(null,inst_16140);var inst_16122 = inst_16141;var inst_16123 = inst_16140;var inst_16124 = inst_16142;var inst_16125 = (0);var state_16183__$1 = (function (){var statearr_16217 = state_16183;(statearr_16217[(12)] = inst_16123);
(statearr_16217[(13)] = inst_16125);
(statearr_16217[(14)] = inst_16122);
(statearr_16217[(15)] = inst_16124);
return statearr_16217;
})();var statearr_16218_16254 = state_16183__$1;(statearr_16218_16254[(2)] = null);
(statearr_16218_16254[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (10)))
{var inst_16123 = (state_16183[(12)]);var inst_16125 = (state_16183[(13)]);var inst_16122 = (state_16183[(14)]);var inst_16124 = (state_16183[(15)]);var inst_16130 = cljs.core._nth.call(null,inst_16123,inst_16125);var inst_16131 = cljs.core.async.muxch_STAR_.call(null,inst_16130);var inst_16132 = cljs.core.async.close_BANG_.call(null,inst_16131);var inst_16133 = (inst_16125 + (1));var tmp16213 = inst_16123;var tmp16214 = inst_16122;var tmp16215 = inst_16124;var inst_16122__$1 = tmp16214;var inst_16123__$1 = tmp16213;var inst_16124__$1 = tmp16215;var inst_16125__$1 = inst_16133;var state_16183__$1 = (function (){var statearr_16219 = state_16183;(statearr_16219[(12)] = inst_16123__$1);
(statearr_16219[(13)] = inst_16125__$1);
(statearr_16219[(14)] = inst_16122__$1);
(statearr_16219[(15)] = inst_16124__$1);
(statearr_16219[(18)] = inst_16132);
return statearr_16219;
})();var statearr_16220_16255 = state_16183__$1;(statearr_16220_16255[(2)] = null);
(statearr_16220_16255[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (18)))
{var inst_16151 = (state_16183[(2)]);var state_16183__$1 = state_16183;var statearr_16221_16256 = state_16183__$1;(statearr_16221_16256[(2)] = inst_16151);
(statearr_16221_16256[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16184 === (8)))
{var inst_16125 = (state_16183[(13)]);var inst_16124 = (state_16183[(15)]);var inst_16127 = (inst_16125 < inst_16124);var inst_16128 = inst_16127;var state_16183__$1 = state_16183;if(cljs.core.truth_(inst_16128))
{var statearr_16222_16257 = state_16183__$1;(statearr_16222_16257[(1)] = (10));
} else
{var statearr_16223_16258 = state_16183__$1;(statearr_16223_16258[(1)] = (11));
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
});})(c__5693__auto___16231,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___16231,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16227[(0)] = state_machine__5679__auto__);
(statearr_16227[(1)] = (1));
return statearr_16227;
});
var state_machine__5679__auto____1 = (function (state_16183){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16183);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16228){if((e16228 instanceof Object))
{var ex__5682__auto__ = e16228;var statearr_16229_16259 = state_16183;(statearr_16229_16259[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16260 = state_16183;
state_16183 = G__16260;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16183){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16231,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_16230 = f__5694__auto__.call(null);(statearr_16230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16231);
return statearr_16230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16231,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___16397 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16367){var state_val_16368 = (state_16367[(1)]);if((state_val_16368 === (7)))
{var state_16367__$1 = state_16367;var statearr_16369_16398 = state_16367__$1;(statearr_16369_16398[(2)] = null);
(statearr_16369_16398[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (1)))
{var state_16367__$1 = state_16367;var statearr_16370_16399 = state_16367__$1;(statearr_16370_16399[(2)] = null);
(statearr_16370_16399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (4)))
{var inst_16331 = (state_16367[(7)]);var inst_16333 = (inst_16331 < cnt);var state_16367__$1 = state_16367;if(cljs.core.truth_(inst_16333))
{var statearr_16371_16400 = state_16367__$1;(statearr_16371_16400[(1)] = (6));
} else
{var statearr_16372_16401 = state_16367__$1;(statearr_16372_16401[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (15)))
{var inst_16363 = (state_16367[(2)]);var state_16367__$1 = state_16367;var statearr_16373_16402 = state_16367__$1;(statearr_16373_16402[(2)] = inst_16363);
(statearr_16373_16402[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (13)))
{var inst_16356 = cljs.core.async.close_BANG_.call(null,out);var state_16367__$1 = state_16367;var statearr_16374_16403 = state_16367__$1;(statearr_16374_16403[(2)] = inst_16356);
(statearr_16374_16403[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (6)))
{var state_16367__$1 = state_16367;var statearr_16375_16404 = state_16367__$1;(statearr_16375_16404[(2)] = null);
(statearr_16375_16404[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (3)))
{var inst_16365 = (state_16367[(2)]);var state_16367__$1 = state_16367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16367__$1,inst_16365);
} else
{if((state_val_16368 === (12)))
{var inst_16353 = (state_16367[(8)]);var inst_16353__$1 = (state_16367[(2)]);var inst_16354 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16353__$1);var state_16367__$1 = (function (){var statearr_16376 = state_16367;(statearr_16376[(8)] = inst_16353__$1);
return statearr_16376;
})();if(cljs.core.truth_(inst_16354))
{var statearr_16377_16405 = state_16367__$1;(statearr_16377_16405[(1)] = (13));
} else
{var statearr_16378_16406 = state_16367__$1;(statearr_16378_16406[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (2)))
{var inst_16330 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16331 = (0);var state_16367__$1 = (function (){var statearr_16379 = state_16367;(statearr_16379[(9)] = inst_16330);
(statearr_16379[(7)] = inst_16331);
return statearr_16379;
})();var statearr_16380_16407 = state_16367__$1;(statearr_16380_16407[(2)] = null);
(statearr_16380_16407[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (11)))
{var inst_16331 = (state_16367[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16367,(10),Object,null,(9));var inst_16340 = chs__$1.call(null,inst_16331);var inst_16341 = done.call(null,inst_16331);var inst_16342 = cljs.core.async.take_BANG_.call(null,inst_16340,inst_16341);var state_16367__$1 = state_16367;var statearr_16381_16408 = state_16367__$1;(statearr_16381_16408[(2)] = inst_16342);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16367__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (9)))
{var inst_16331 = (state_16367[(7)]);var inst_16344 = (state_16367[(2)]);var inst_16345 = (inst_16331 + (1));var inst_16331__$1 = inst_16345;var state_16367__$1 = (function (){var statearr_16382 = state_16367;(statearr_16382[(7)] = inst_16331__$1);
(statearr_16382[(10)] = inst_16344);
return statearr_16382;
})();var statearr_16383_16409 = state_16367__$1;(statearr_16383_16409[(2)] = null);
(statearr_16383_16409[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (5)))
{var inst_16351 = (state_16367[(2)]);var state_16367__$1 = (function (){var statearr_16384 = state_16367;(statearr_16384[(11)] = inst_16351);
return statearr_16384;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16367__$1,(12),dchan);
} else
{if((state_val_16368 === (14)))
{var inst_16353 = (state_16367[(8)]);var inst_16358 = cljs.core.apply.call(null,f,inst_16353);var state_16367__$1 = state_16367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16367__$1,(16),out,inst_16358);
} else
{if((state_val_16368 === (16)))
{var inst_16360 = (state_16367[(2)]);var state_16367__$1 = (function (){var statearr_16385 = state_16367;(statearr_16385[(12)] = inst_16360);
return statearr_16385;
})();var statearr_16386_16410 = state_16367__$1;(statearr_16386_16410[(2)] = null);
(statearr_16386_16410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (10)))
{var inst_16335 = (state_16367[(2)]);var inst_16336 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16367__$1 = (function (){var statearr_16387 = state_16367;(statearr_16387[(13)] = inst_16335);
return statearr_16387;
})();var statearr_16388_16411 = state_16367__$1;(statearr_16388_16411[(2)] = inst_16336);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16367__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16368 === (8)))
{var inst_16349 = (state_16367[(2)]);var state_16367__$1 = state_16367;var statearr_16389_16412 = state_16367__$1;(statearr_16389_16412[(2)] = inst_16349);
(statearr_16389_16412[(1)] = (5));
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
});})(c__5693__auto___16397,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16393[(0)] = state_machine__5679__auto__);
(statearr_16393[(1)] = (1));
return statearr_16393;
});
var state_machine__5679__auto____1 = (function (state_16367){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16394){if((e16394 instanceof Object))
{var ex__5682__auto__ = e16394;var statearr_16395_16413 = state_16367;(statearr_16395_16413[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16414 = state_16367;
state_16367 = G__16414;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16367){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16397,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16396 = f__5694__auto__.call(null);(statearr_16396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16397);
return statearr_16396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16397,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16522 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16522,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16522,out){
return (function (state_16498){var state_val_16499 = (state_16498[(1)]);if((state_val_16499 === (7)))
{var inst_16478 = (state_16498[(7)]);var inst_16477 = (state_16498[(8)]);var inst_16477__$1 = (state_16498[(2)]);var inst_16478__$1 = cljs.core.nth.call(null,inst_16477__$1,(0),null);var inst_16479 = cljs.core.nth.call(null,inst_16477__$1,(1),null);var inst_16480 = (inst_16478__$1 == null);var state_16498__$1 = (function (){var statearr_16500 = state_16498;(statearr_16500[(9)] = inst_16479);
(statearr_16500[(7)] = inst_16478__$1);
(statearr_16500[(8)] = inst_16477__$1);
return statearr_16500;
})();if(cljs.core.truth_(inst_16480))
{var statearr_16501_16523 = state_16498__$1;(statearr_16501_16523[(1)] = (8));
} else
{var statearr_16502_16524 = state_16498__$1;(statearr_16502_16524[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (1)))
{var inst_16469 = cljs.core.vec.call(null,chs);var inst_16470 = inst_16469;var state_16498__$1 = (function (){var statearr_16503 = state_16498;(statearr_16503[(10)] = inst_16470);
return statearr_16503;
})();var statearr_16504_16525 = state_16498__$1;(statearr_16504_16525[(2)] = null);
(statearr_16504_16525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (4)))
{var inst_16470 = (state_16498[(10)]);var state_16498__$1 = state_16498;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16498__$1,(7),inst_16470);
} else
{if((state_val_16499 === (6)))
{var inst_16494 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16505_16526 = state_16498__$1;(statearr_16505_16526[(2)] = inst_16494);
(statearr_16505_16526[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (3)))
{var inst_16496 = (state_16498[(2)]);var state_16498__$1 = state_16498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16498__$1,inst_16496);
} else
{if((state_val_16499 === (2)))
{var inst_16470 = (state_16498[(10)]);var inst_16472 = cljs.core.count.call(null,inst_16470);var inst_16473 = (inst_16472 > (0));var state_16498__$1 = state_16498;if(cljs.core.truth_(inst_16473))
{var statearr_16507_16527 = state_16498__$1;(statearr_16507_16527[(1)] = (4));
} else
{var statearr_16508_16528 = state_16498__$1;(statearr_16508_16528[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (11)))
{var inst_16470 = (state_16498[(10)]);var inst_16487 = (state_16498[(2)]);var tmp16506 = inst_16470;var inst_16470__$1 = tmp16506;var state_16498__$1 = (function (){var statearr_16509 = state_16498;(statearr_16509[(10)] = inst_16470__$1);
(statearr_16509[(11)] = inst_16487);
return statearr_16509;
})();var statearr_16510_16529 = state_16498__$1;(statearr_16510_16529[(2)] = null);
(statearr_16510_16529[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (9)))
{var inst_16478 = (state_16498[(7)]);var state_16498__$1 = state_16498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16498__$1,(11),out,inst_16478);
} else
{if((state_val_16499 === (5)))
{var inst_16492 = cljs.core.async.close_BANG_.call(null,out);var state_16498__$1 = state_16498;var statearr_16511_16530 = state_16498__$1;(statearr_16511_16530[(2)] = inst_16492);
(statearr_16511_16530[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (10)))
{var inst_16490 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16512_16531 = state_16498__$1;(statearr_16512_16531[(2)] = inst_16490);
(statearr_16512_16531[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (8)))
{var inst_16470 = (state_16498[(10)]);var inst_16479 = (state_16498[(9)]);var inst_16478 = (state_16498[(7)]);var inst_16477 = (state_16498[(8)]);var inst_16482 = (function (){var c = inst_16479;var v = inst_16478;var vec__16475 = inst_16477;var cs = inst_16470;return ((function (c,v,vec__16475,cs,inst_16470,inst_16479,inst_16478,inst_16477,state_val_16499,c__5693__auto___16522,out){
return (function (p1__16415_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16415_SHARP_);
});
;})(c,v,vec__16475,cs,inst_16470,inst_16479,inst_16478,inst_16477,state_val_16499,c__5693__auto___16522,out))
})();var inst_16483 = cljs.core.filterv.call(null,inst_16482,inst_16470);var inst_16470__$1 = inst_16483;var state_16498__$1 = (function (){var statearr_16513 = state_16498;(statearr_16513[(10)] = inst_16470__$1);
return statearr_16513;
})();var statearr_16514_16532 = state_16498__$1;(statearr_16514_16532[(2)] = null);
(statearr_16514_16532[(1)] = (2));
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
});})(c__5693__auto___16522,out))
;return ((function (switch__5678__auto__,c__5693__auto___16522,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16518 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16518[(0)] = state_machine__5679__auto__);
(statearr_16518[(1)] = (1));
return statearr_16518;
});
var state_machine__5679__auto____1 = (function (state_16498){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16519){if((e16519 instanceof Object))
{var ex__5682__auto__ = e16519;var statearr_16520_16533 = state_16498;(statearr_16520_16533[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16534 = state_16498;
state_16498 = G__16534;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16522,out))
})();var state__5695__auto__ = (function (){var statearr_16521 = f__5694__auto__.call(null);(statearr_16521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16522);
return statearr_16521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16522,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16627 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16627,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16627,out){
return (function (state_16604){var state_val_16605 = (state_16604[(1)]);if((state_val_16605 === (7)))
{var inst_16586 = (state_16604[(7)]);var inst_16586__$1 = (state_16604[(2)]);var inst_16587 = (inst_16586__$1 == null);var inst_16588 = cljs.core.not.call(null,inst_16587);var state_16604__$1 = (function (){var statearr_16606 = state_16604;(statearr_16606[(7)] = inst_16586__$1);
return statearr_16606;
})();if(inst_16588)
{var statearr_16607_16628 = state_16604__$1;(statearr_16607_16628[(1)] = (8));
} else
{var statearr_16608_16629 = state_16604__$1;(statearr_16608_16629[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (1)))
{var inst_16581 = (0);var state_16604__$1 = (function (){var statearr_16609 = state_16604;(statearr_16609[(8)] = inst_16581);
return statearr_16609;
})();var statearr_16610_16630 = state_16604__$1;(statearr_16610_16630[(2)] = null);
(statearr_16610_16630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (4)))
{var state_16604__$1 = state_16604;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16604__$1,(7),ch);
} else
{if((state_val_16605 === (6)))
{var inst_16599 = (state_16604[(2)]);var state_16604__$1 = state_16604;var statearr_16611_16631 = state_16604__$1;(statearr_16611_16631[(2)] = inst_16599);
(statearr_16611_16631[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (3)))
{var inst_16601 = (state_16604[(2)]);var inst_16602 = cljs.core.async.close_BANG_.call(null,out);var state_16604__$1 = (function (){var statearr_16612 = state_16604;(statearr_16612[(9)] = inst_16601);
return statearr_16612;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16604__$1,inst_16602);
} else
{if((state_val_16605 === (2)))
{var inst_16581 = (state_16604[(8)]);var inst_16583 = (inst_16581 < n);var state_16604__$1 = state_16604;if(cljs.core.truth_(inst_16583))
{var statearr_16613_16632 = state_16604__$1;(statearr_16613_16632[(1)] = (4));
} else
{var statearr_16614_16633 = state_16604__$1;(statearr_16614_16633[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (11)))
{var inst_16581 = (state_16604[(8)]);var inst_16591 = (state_16604[(2)]);var inst_16592 = (inst_16581 + (1));var inst_16581__$1 = inst_16592;var state_16604__$1 = (function (){var statearr_16615 = state_16604;(statearr_16615[(8)] = inst_16581__$1);
(statearr_16615[(10)] = inst_16591);
return statearr_16615;
})();var statearr_16616_16634 = state_16604__$1;(statearr_16616_16634[(2)] = null);
(statearr_16616_16634[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (9)))
{var state_16604__$1 = state_16604;var statearr_16617_16635 = state_16604__$1;(statearr_16617_16635[(2)] = null);
(statearr_16617_16635[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (5)))
{var state_16604__$1 = state_16604;var statearr_16618_16636 = state_16604__$1;(statearr_16618_16636[(2)] = null);
(statearr_16618_16636[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (10)))
{var inst_16596 = (state_16604[(2)]);var state_16604__$1 = state_16604;var statearr_16619_16637 = state_16604__$1;(statearr_16619_16637[(2)] = inst_16596);
(statearr_16619_16637[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16605 === (8)))
{var inst_16586 = (state_16604[(7)]);var state_16604__$1 = state_16604;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16604__$1,(11),out,inst_16586);
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
});})(c__5693__auto___16627,out))
;return ((function (switch__5678__auto__,c__5693__auto___16627,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16623 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16623[(0)] = state_machine__5679__auto__);
(statearr_16623[(1)] = (1));
return statearr_16623;
});
var state_machine__5679__auto____1 = (function (state_16604){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16604);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16624){if((e16624 instanceof Object))
{var ex__5682__auto__ = e16624;var statearr_16625_16638 = state_16604;(statearr_16625_16638[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16604);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16639 = state_16604;
state_16604 = G__16639;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16604){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16627,out))
})();var state__5695__auto__ = (function (){var statearr_16626 = f__5694__auto__.call(null);(statearr_16626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16627);
return statearr_16626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16627,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16736 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16736,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16736,out){
return (function (state_16711){var state_val_16712 = (state_16711[(1)]);if((state_val_16712 === (7)))
{var inst_16706 = (state_16711[(2)]);var state_16711__$1 = state_16711;var statearr_16713_16737 = state_16711__$1;(statearr_16713_16737[(2)] = inst_16706);
(statearr_16713_16737[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16712 === (1)))
{var inst_16688 = null;var state_16711__$1 = (function (){var statearr_16714 = state_16711;(statearr_16714[(7)] = inst_16688);
return statearr_16714;
})();var statearr_16715_16738 = state_16711__$1;(statearr_16715_16738[(2)] = null);
(statearr_16715_16738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16712 === (4)))
{var inst_16691 = (state_16711[(8)]);var inst_16691__$1 = (state_16711[(2)]);var inst_16692 = (inst_16691__$1 == null);var inst_16693 = cljs.core.not.call(null,inst_16692);var state_16711__$1 = (function (){var statearr_16716 = state_16711;(statearr_16716[(8)] = inst_16691__$1);
return statearr_16716;
})();if(inst_16693)
{var statearr_16717_16739 = state_16711__$1;(statearr_16717_16739[(1)] = (5));
} else
{var statearr_16718_16740 = state_16711__$1;(statearr_16718_16740[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16712 === (6)))
{var state_16711__$1 = state_16711;var statearr_16719_16741 = state_16711__$1;(statearr_16719_16741[(2)] = null);
(statearr_16719_16741[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16712 === (3)))
{var inst_16708 = (state_16711[(2)]);var inst_16709 = cljs.core.async.close_BANG_.call(null,out);var state_16711__$1 = (function (){var statearr_16720 = state_16711;(statearr_16720[(9)] = inst_16708);
return statearr_16720;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16711__$1,inst_16709);
} else
{if((state_val_16712 === (2)))
{var state_16711__$1 = state_16711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16711__$1,(4),ch);
} else
{if((state_val_16712 === (11)))
{var inst_16691 = (state_16711[(8)]);var inst_16700 = (state_16711[(2)]);var inst_16688 = inst_16691;var state_16711__$1 = (function (){var statearr_16721 = state_16711;(statearr_16721[(7)] = inst_16688);
(statearr_16721[(10)] = inst_16700);
return statearr_16721;
})();var statearr_16722_16742 = state_16711__$1;(statearr_16722_16742[(2)] = null);
(statearr_16722_16742[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16712 === (9)))
{var inst_16691 = (state_16711[(8)]);var state_16711__$1 = state_16711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16711__$1,(11),out,inst_16691);
} else
{if((state_val_16712 === (5)))
{var inst_16688 = (state_16711[(7)]);var inst_16691 = (state_16711[(8)]);var inst_16695 = cljs.core._EQ_.call(null,inst_16691,inst_16688);var state_16711__$1 = state_16711;if(inst_16695)
{var statearr_16724_16743 = state_16711__$1;(statearr_16724_16743[(1)] = (8));
} else
{var statearr_16725_16744 = state_16711__$1;(statearr_16725_16744[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16712 === (10)))
{var inst_16703 = (state_16711[(2)]);var state_16711__$1 = state_16711;var statearr_16726_16745 = state_16711__$1;(statearr_16726_16745[(2)] = inst_16703);
(statearr_16726_16745[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16712 === (8)))
{var inst_16688 = (state_16711[(7)]);var tmp16723 = inst_16688;var inst_16688__$1 = tmp16723;var state_16711__$1 = (function (){var statearr_16727 = state_16711;(statearr_16727[(7)] = inst_16688__$1);
return statearr_16727;
})();var statearr_16728_16746 = state_16711__$1;(statearr_16728_16746[(2)] = null);
(statearr_16728_16746[(1)] = (2));
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
});})(c__5693__auto___16736,out))
;return ((function (switch__5678__auto__,c__5693__auto___16736,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16732 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16732[(0)] = state_machine__5679__auto__);
(statearr_16732[(1)] = (1));
return statearr_16732;
});
var state_machine__5679__auto____1 = (function (state_16711){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16711);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16733){if((e16733 instanceof Object))
{var ex__5682__auto__ = e16733;var statearr_16734_16747 = state_16711;(statearr_16734_16747[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16711);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16748 = state_16711;
state_16711 = G__16748;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16711){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16736,out))
})();var state__5695__auto__ = (function (){var statearr_16735 = f__5694__auto__.call(null);(statearr_16735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16736);
return statearr_16735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16736,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16883 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16883,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16883,out){
return (function (state_16853){var state_val_16854 = (state_16853[(1)]);if((state_val_16854 === (7)))
{var inst_16849 = (state_16853[(2)]);var state_16853__$1 = state_16853;var statearr_16855_16884 = state_16853__$1;(statearr_16855_16884[(2)] = inst_16849);
(statearr_16855_16884[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (1)))
{var inst_16816 = (new Array(n));var inst_16817 = inst_16816;var inst_16818 = (0);var state_16853__$1 = (function (){var statearr_16856 = state_16853;(statearr_16856[(7)] = inst_16817);
(statearr_16856[(8)] = inst_16818);
return statearr_16856;
})();var statearr_16857_16885 = state_16853__$1;(statearr_16857_16885[(2)] = null);
(statearr_16857_16885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (4)))
{var inst_16821 = (state_16853[(9)]);var inst_16821__$1 = (state_16853[(2)]);var inst_16822 = (inst_16821__$1 == null);var inst_16823 = cljs.core.not.call(null,inst_16822);var state_16853__$1 = (function (){var statearr_16858 = state_16853;(statearr_16858[(9)] = inst_16821__$1);
return statearr_16858;
})();if(inst_16823)
{var statearr_16859_16886 = state_16853__$1;(statearr_16859_16886[(1)] = (5));
} else
{var statearr_16860_16887 = state_16853__$1;(statearr_16860_16887[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (15)))
{var inst_16843 = (state_16853[(2)]);var state_16853__$1 = state_16853;var statearr_16861_16888 = state_16853__$1;(statearr_16861_16888[(2)] = inst_16843);
(statearr_16861_16888[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (13)))
{var state_16853__$1 = state_16853;var statearr_16862_16889 = state_16853__$1;(statearr_16862_16889[(2)] = null);
(statearr_16862_16889[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (6)))
{var inst_16818 = (state_16853[(8)]);var inst_16839 = (inst_16818 > (0));var state_16853__$1 = state_16853;if(cljs.core.truth_(inst_16839))
{var statearr_16863_16890 = state_16853__$1;(statearr_16863_16890[(1)] = (12));
} else
{var statearr_16864_16891 = state_16853__$1;(statearr_16864_16891[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (3)))
{var inst_16851 = (state_16853[(2)]);var state_16853__$1 = state_16853;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16853__$1,inst_16851);
} else
{if((state_val_16854 === (12)))
{var inst_16817 = (state_16853[(7)]);var inst_16841 = cljs.core.vec.call(null,inst_16817);var state_16853__$1 = state_16853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16853__$1,(15),out,inst_16841);
} else
{if((state_val_16854 === (2)))
{var state_16853__$1 = state_16853;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16853__$1,(4),ch);
} else
{if((state_val_16854 === (11)))
{var inst_16833 = (state_16853[(2)]);var inst_16834 = (new Array(n));var inst_16817 = inst_16834;var inst_16818 = (0);var state_16853__$1 = (function (){var statearr_16865 = state_16853;(statearr_16865[(10)] = inst_16833);
(statearr_16865[(7)] = inst_16817);
(statearr_16865[(8)] = inst_16818);
return statearr_16865;
})();var statearr_16866_16892 = state_16853__$1;(statearr_16866_16892[(2)] = null);
(statearr_16866_16892[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (9)))
{var inst_16817 = (state_16853[(7)]);var inst_16831 = cljs.core.vec.call(null,inst_16817);var state_16853__$1 = state_16853;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16853__$1,(11),out,inst_16831);
} else
{if((state_val_16854 === (5)))
{var inst_16821 = (state_16853[(9)]);var inst_16817 = (state_16853[(7)]);var inst_16818 = (state_16853[(8)]);var inst_16826 = (state_16853[(11)]);var inst_16825 = (inst_16817[inst_16818] = inst_16821);var inst_16826__$1 = (inst_16818 + (1));var inst_16827 = (inst_16826__$1 < n);var state_16853__$1 = (function (){var statearr_16867 = state_16853;(statearr_16867[(12)] = inst_16825);
(statearr_16867[(11)] = inst_16826__$1);
return statearr_16867;
})();if(cljs.core.truth_(inst_16827))
{var statearr_16868_16893 = state_16853__$1;(statearr_16868_16893[(1)] = (8));
} else
{var statearr_16869_16894 = state_16853__$1;(statearr_16869_16894[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (14)))
{var inst_16846 = (state_16853[(2)]);var inst_16847 = cljs.core.async.close_BANG_.call(null,out);var state_16853__$1 = (function (){var statearr_16871 = state_16853;(statearr_16871[(13)] = inst_16846);
return statearr_16871;
})();var statearr_16872_16895 = state_16853__$1;(statearr_16872_16895[(2)] = inst_16847);
(statearr_16872_16895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (10)))
{var inst_16837 = (state_16853[(2)]);var state_16853__$1 = state_16853;var statearr_16873_16896 = state_16853__$1;(statearr_16873_16896[(2)] = inst_16837);
(statearr_16873_16896[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16854 === (8)))
{var inst_16817 = (state_16853[(7)]);var inst_16826 = (state_16853[(11)]);var tmp16870 = inst_16817;var inst_16817__$1 = tmp16870;var inst_16818 = inst_16826;var state_16853__$1 = (function (){var statearr_16874 = state_16853;(statearr_16874[(7)] = inst_16817__$1);
(statearr_16874[(8)] = inst_16818);
return statearr_16874;
})();var statearr_16875_16897 = state_16853__$1;(statearr_16875_16897[(2)] = null);
(statearr_16875_16897[(1)] = (2));
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
});})(c__5693__auto___16883,out))
;return ((function (switch__5678__auto__,c__5693__auto___16883,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16879[(0)] = state_machine__5679__auto__);
(statearr_16879[(1)] = (1));
return statearr_16879;
});
var state_machine__5679__auto____1 = (function (state_16853){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16853);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16880){if((e16880 instanceof Object))
{var ex__5682__auto__ = e16880;var statearr_16881_16898 = state_16853;(statearr_16881_16898[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16853);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16899 = state_16853;
state_16853 = G__16899;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16853){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16883,out))
})();var state__5695__auto__ = (function (){var statearr_16882 = f__5694__auto__.call(null);(statearr_16882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16883);
return statearr_16882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16883,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17042 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17042,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17042,out){
return (function (state_17012){var state_val_17013 = (state_17012[(1)]);if((state_val_17013 === (7)))
{var inst_17008 = (state_17012[(2)]);var state_17012__$1 = state_17012;var statearr_17014_17043 = state_17012__$1;(statearr_17014_17043[(2)] = inst_17008);
(statearr_17014_17043[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (1)))
{var inst_16971 = [];var inst_16972 = inst_16971;var inst_16973 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17012__$1 = (function (){var statearr_17015 = state_17012;(statearr_17015[(7)] = inst_16973);
(statearr_17015[(8)] = inst_16972);
return statearr_17015;
})();var statearr_17016_17044 = state_17012__$1;(statearr_17016_17044[(2)] = null);
(statearr_17016_17044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (4)))
{var inst_16976 = (state_17012[(9)]);var inst_16976__$1 = (state_17012[(2)]);var inst_16977 = (inst_16976__$1 == null);var inst_16978 = cljs.core.not.call(null,inst_16977);var state_17012__$1 = (function (){var statearr_17017 = state_17012;(statearr_17017[(9)] = inst_16976__$1);
return statearr_17017;
})();if(inst_16978)
{var statearr_17018_17045 = state_17012__$1;(statearr_17018_17045[(1)] = (5));
} else
{var statearr_17019_17046 = state_17012__$1;(statearr_17019_17046[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (15)))
{var inst_17002 = (state_17012[(2)]);var state_17012__$1 = state_17012;var statearr_17020_17047 = state_17012__$1;(statearr_17020_17047[(2)] = inst_17002);
(statearr_17020_17047[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (13)))
{var state_17012__$1 = state_17012;var statearr_17021_17048 = state_17012__$1;(statearr_17021_17048[(2)] = null);
(statearr_17021_17048[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (6)))
{var inst_16972 = (state_17012[(8)]);var inst_16997 = inst_16972.length;var inst_16998 = (inst_16997 > (0));var state_17012__$1 = state_17012;if(cljs.core.truth_(inst_16998))
{var statearr_17022_17049 = state_17012__$1;(statearr_17022_17049[(1)] = (12));
} else
{var statearr_17023_17050 = state_17012__$1;(statearr_17023_17050[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (3)))
{var inst_17010 = (state_17012[(2)]);var state_17012__$1 = state_17012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17012__$1,inst_17010);
} else
{if((state_val_17013 === (12)))
{var inst_16972 = (state_17012[(8)]);var inst_17000 = cljs.core.vec.call(null,inst_16972);var state_17012__$1 = state_17012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17012__$1,(15),out,inst_17000);
} else
{if((state_val_17013 === (2)))
{var state_17012__$1 = state_17012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17012__$1,(4),ch);
} else
{if((state_val_17013 === (11)))
{var inst_16976 = (state_17012[(9)]);var inst_16980 = (state_17012[(10)]);var inst_16990 = (state_17012[(2)]);var inst_16991 = [];var inst_16992 = inst_16991.push(inst_16976);var inst_16972 = inst_16991;var inst_16973 = inst_16980;var state_17012__$1 = (function (){var statearr_17024 = state_17012;(statearr_17024[(7)] = inst_16973);
(statearr_17024[(11)] = inst_16992);
(statearr_17024[(8)] = inst_16972);
(statearr_17024[(12)] = inst_16990);
return statearr_17024;
})();var statearr_17025_17051 = state_17012__$1;(statearr_17025_17051[(2)] = null);
(statearr_17025_17051[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (9)))
{var inst_16972 = (state_17012[(8)]);var inst_16988 = cljs.core.vec.call(null,inst_16972);var state_17012__$1 = state_17012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17012__$1,(11),out,inst_16988);
} else
{if((state_val_17013 === (5)))
{var inst_16976 = (state_17012[(9)]);var inst_16973 = (state_17012[(7)]);var inst_16980 = (state_17012[(10)]);var inst_16980__$1 = f.call(null,inst_16976);var inst_16981 = cljs.core._EQ_.call(null,inst_16980__$1,inst_16973);var inst_16982 = cljs.core.keyword_identical_QMARK_.call(null,inst_16973,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16983 = (inst_16981) || (inst_16982);var state_17012__$1 = (function (){var statearr_17026 = state_17012;(statearr_17026[(10)] = inst_16980__$1);
return statearr_17026;
})();if(cljs.core.truth_(inst_16983))
{var statearr_17027_17052 = state_17012__$1;(statearr_17027_17052[(1)] = (8));
} else
{var statearr_17028_17053 = state_17012__$1;(statearr_17028_17053[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (14)))
{var inst_17005 = (state_17012[(2)]);var inst_17006 = cljs.core.async.close_BANG_.call(null,out);var state_17012__$1 = (function (){var statearr_17030 = state_17012;(statearr_17030[(13)] = inst_17005);
return statearr_17030;
})();var statearr_17031_17054 = state_17012__$1;(statearr_17031_17054[(2)] = inst_17006);
(statearr_17031_17054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (10)))
{var inst_16995 = (state_17012[(2)]);var state_17012__$1 = state_17012;var statearr_17032_17055 = state_17012__$1;(statearr_17032_17055[(2)] = inst_16995);
(statearr_17032_17055[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17013 === (8)))
{var inst_16976 = (state_17012[(9)]);var inst_16980 = (state_17012[(10)]);var inst_16972 = (state_17012[(8)]);var inst_16985 = inst_16972.push(inst_16976);var tmp17029 = inst_16972;var inst_16972__$1 = tmp17029;var inst_16973 = inst_16980;var state_17012__$1 = (function (){var statearr_17033 = state_17012;(statearr_17033[(7)] = inst_16973);
(statearr_17033[(14)] = inst_16985);
(statearr_17033[(8)] = inst_16972__$1);
return statearr_17033;
})();var statearr_17034_17056 = state_17012__$1;(statearr_17034_17056[(2)] = null);
(statearr_17034_17056[(1)] = (2));
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
});})(c__5693__auto___17042,out))
;return ((function (switch__5678__auto__,c__5693__auto___17042,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17038[(0)] = state_machine__5679__auto__);
(statearr_17038[(1)] = (1));
return statearr_17038;
});
var state_machine__5679__auto____1 = (function (state_17012){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17012);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17039){if((e17039 instanceof Object))
{var ex__5682__auto__ = e17039;var statearr_17040_17057 = state_17012;(statearr_17040_17057[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17058 = state_17012;
state_17012 = G__17058;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17012){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17042,out))
})();var state__5695__auto__ = (function (){var statearr_17041 = f__5694__auto__.call(null);(statearr_17041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17042);
return statearr_17041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17042,out))
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
