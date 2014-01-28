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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22774 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22774 = (function (f,fn_handler,meta22775){
this.f = f;
this.fn_handler = fn_handler;
this.meta22775 = meta22775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22774.cljs$lang$type = true;
cljs.core.async.t22774.cljs$lang$ctorStr = "cljs.core.async/t22774";
cljs.core.async.t22774.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22774");
});
cljs.core.async.t22774.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22776){var self__ = this;
var _22776__$1 = this;return self__.meta22775;
});
cljs.core.async.t22774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22776,meta22775__$1){var self__ = this;
var _22776__$1 = this;return (new cljs.core.async.t22774(self__.f,self__.fn_handler,meta22775__$1));
});
cljs.core.async.__GT_t22774 = (function __GT_t22774(f__$1,fn_handler__$1,meta22775){return (new cljs.core.async.t22774(f__$1,fn_handler__$1,meta22775));
});
}
return (new cljs.core.async.t22774(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22778 = buff;if(G__22778)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__22778.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22778.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22778);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22778);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_22779 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22779) : fn1.call(null,val_22779));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22779) : fn1.call(null,val_22779));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___22780 = n;var x_22781 = 0;while(true){
if((x_22781 < n__4248__auto___22780))
{(a[x_22781] = 0);
{
var G__22782 = (x_22781 + 1);
x_22781 = G__22782;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__22783 = (i + 1);
i = G__22783;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22787 = (function (flag,alt_flag,meta22788){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22788 = meta22788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22787.cljs$lang$type = true;
cljs.core.async.t22787.cljs$lang$ctorStr = "cljs.core.async/t22787";
cljs.core.async.t22787.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22787");
});
cljs.core.async.t22787.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t22787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t22787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22789){var self__ = this;
var _22789__$1 = this;return self__.meta22788;
});
cljs.core.async.t22787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22789,meta22788__$1){var self__ = this;
var _22789__$1 = this;return (new cljs.core.async.t22787(self__.flag,self__.alt_flag,meta22788__$1));
});
cljs.core.async.__GT_t22787 = (function __GT_t22787(flag__$1,alt_flag__$1,meta22788){return (new cljs.core.async.t22787(flag__$1,alt_flag__$1,meta22788));
});
}
return (new cljs.core.async.t22787(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22793 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22793 = (function (cb,flag,alt_handler,meta22794){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22794 = meta22794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22793.cljs$lang$type = true;
cljs.core.async.t22793.cljs$lang$ctorStr = "cljs.core.async/t22793";
cljs.core.async.t22793.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22793");
});
cljs.core.async.t22793.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22795){var self__ = this;
var _22795__$1 = this;return self__.meta22794;
});
cljs.core.async.t22793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22795,meta22794__$1){var self__ = this;
var _22795__$1 = this;return (new cljs.core.async.t22793(self__.cb,self__.flag,self__.alt_handler,meta22794__$1));
});
cljs.core.async.__GT_t22793 = (function __GT_t22793(cb__$1,flag__$1,alt_handler__$1,meta22794){return (new cljs.core.async.t22793(cb__$1,flag__$1,alt_handler__$1,meta22794));
});
}
return (new cljs.core.async.t22793(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$199.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22796_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22796_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22796_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22797 = (i + 1);
i = G__22797;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$183))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$183], null));
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
var alts_BANG___delegate = function (ports,p__22798){var map__22800 = p__22798;var map__22800__$1 = ((cljs.core.seq_QMARK_(map__22800))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22800):map__22800);var opts = map__22800__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22798 = null;if (arguments.length > 1) {
  p__22798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22798);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22801){
var ports = cljs.core.first(arglist__22801);
var p__22798 = cljs.core.rest(arglist__22801);
return alts_BANG___delegate(ports,p__22798);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22809 = (function (ch,f,map_LT_,meta22810){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22810 = meta22810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22809.cljs$lang$type = true;
cljs.core.async.t22809.cljs$lang$ctorStr = "cljs.core.async/t22809";
cljs.core.async.t22809.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22809");
});
cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22812 = (function (fn1,_,meta22810,ch,f,map_LT_,meta22813){
this.fn1 = fn1;
this._ = _;
this.meta22810 = meta22810;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22813 = meta22813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22812.cljs$lang$type = true;
cljs.core.async.t22812.cljs$lang$ctorStr = "cljs.core.async/t22812";
cljs.core.async.t22812.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22812");
});
cljs.core.async.t22812.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t22812.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t22812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__22802_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22802_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22802_SHARP_) : self__.f.call(null,p1__22802_SHARP_)))) : f1.call(null,(((p1__22802_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22802_SHARP_) : self__.f.call(null,p1__22802_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t22812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22814){var self__ = this;
var _22814__$1 = this;return self__.meta22813;
});
cljs.core.async.t22812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22814,meta22813__$1){var self__ = this;
var _22814__$1 = this;return (new cljs.core.async.t22812(self__.fn1,self__._,self__.meta22810,self__.ch,self__.f,self__.map_LT_,meta22813__$1));
});
cljs.core.async.__GT_t22812 = (function __GT_t22812(fn1__$1,___$2,meta22810__$1,ch__$2,f__$2,map_LT___$2,meta22813){return (new cljs.core.async.t22812(fn1__$1,___$2,meta22810__$1,ch__$2,f__$2,map_LT___$2,meta22813));
});
}
return (new cljs.core.async.t22812(fn1,___$1,self__.meta22810,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22811){var self__ = this;
var _22811__$1 = this;return self__.meta22810;
});
cljs.core.async.t22809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22811,meta22810__$1){var self__ = this;
var _22811__$1 = this;return (new cljs.core.async.t22809(self__.ch,self__.f,self__.map_LT_,meta22810__$1));
});
cljs.core.async.__GT_t22809 = (function __GT_t22809(ch__$1,f__$1,map_LT___$1,meta22810){return (new cljs.core.async.t22809(ch__$1,f__$1,map_LT___$1,meta22810));
});
}
return (new cljs.core.async.t22809(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22818 = (function (ch,f,map_GT_,meta22819){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22819 = meta22819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22818.cljs$lang$type = true;
cljs.core.async.t22818.cljs$lang$ctorStr = "cljs.core.async/t22818";
cljs.core.async.t22818.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22818");
});
cljs.core.async.t22818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t22818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22818.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22820){var self__ = this;
var _22820__$1 = this;return self__.meta22819;
});
cljs.core.async.t22818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22820,meta22819__$1){var self__ = this;
var _22820__$1 = this;return (new cljs.core.async.t22818(self__.ch,self__.f,self__.map_GT_,meta22819__$1));
});
cljs.core.async.__GT_t22818 = (function __GT_t22818(ch__$1,f__$1,map_GT___$1,meta22819){return (new cljs.core.async.t22818(ch__$1,f__$1,map_GT___$1,meta22819));
});
}
return (new cljs.core.async.t22818(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22824 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22824 = (function (ch,p,filter_GT_,meta22825){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22825 = meta22825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22824.cljs$lang$type = true;
cljs.core.async.t22824.cljs$lang$ctorStr = "cljs.core.async/t22824";
cljs.core.async.t22824.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t22824");
});
cljs.core.async.t22824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t22824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22824.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22826){var self__ = this;
var _22826__$1 = this;return self__.meta22825;
});
cljs.core.async.t22824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22826,meta22825__$1){var self__ = this;
var _22826__$1 = this;return (new cljs.core.async.t22824(self__.ch,self__.p,self__.filter_GT_,meta22825__$1));
});
cljs.core.async.__GT_t22824 = (function __GT_t22824(ch__$1,p__$1,filter_GT___$1,meta22825){return (new cljs.core.async.t22824(ch__$1,p__$1,filter_GT___$1,meta22825));
});
}
return (new cljs.core.async.t22824(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___22909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22888){var state_val_22889 = (state_22888[1]);if((state_val_22889 === 1))
{var state_22888__$1 = state_22888;var statearr_22890_22910 = state_22888__$1;(statearr_22890_22910[2] = null);
(statearr_22890_22910[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_22889 === 2))
{var state_22888__$1 = state_22888;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22888__$1,4,ch);
} else
{if((state_val_22889 === 3))
{var inst_22886 = (state_22888[2]);var state_22888__$1 = state_22888;return cljs.core.async.impl.ioc_helpers.return_chan(state_22888__$1,inst_22886);
} else
{if((state_val_22889 === 4))
{var inst_22870 = (state_22888[7]);var inst_22870__$1 = (state_22888[2]);var inst_22871 = (inst_22870__$1 == null);var state_22888__$1 = (function (){var statearr_22891 = state_22888;(statearr_22891[7] = inst_22870__$1);
return statearr_22891;
})();if(cljs.core.truth_(inst_22871))
{var statearr_22892_22911 = state_22888__$1;(statearr_22892_22911[1] = 5);
} else
{var statearr_22893_22912 = state_22888__$1;(statearr_22893_22912[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_22889 === 5))
{var inst_22873 = cljs.core.async.close_BANG_(out);var state_22888__$1 = state_22888;var statearr_22894_22913 = state_22888__$1;(statearr_22894_22913[2] = inst_22873);
(statearr_22894_22913[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_22889 === 6))
{var inst_22870 = (state_22888[7]);var inst_22875 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22870) : p.call(null,inst_22870));var state_22888__$1 = state_22888;if(cljs.core.truth_(inst_22875))
{var statearr_22895_22914 = state_22888__$1;(statearr_22895_22914[1] = 8);
} else
{var statearr_22896_22915 = state_22888__$1;(statearr_22896_22915[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_22889 === 7))
{var inst_22884 = (state_22888[2]);var state_22888__$1 = state_22888;var statearr_22897_22916 = state_22888__$1;(statearr_22897_22916[2] = inst_22884);
(statearr_22897_22916[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_22889 === 8))
{var inst_22870 = (state_22888[7]);var state_22888__$1 = state_22888;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22888__$1,11,out,inst_22870);
} else
{if((state_val_22889 === 9))
{var state_22888__$1 = state_22888;var statearr_22898_22917 = state_22888__$1;(statearr_22898_22917[2] = null);
(statearr_22898_22917[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_22889 === 10))
{var inst_22881 = (state_22888[2]);var state_22888__$1 = (function (){var statearr_22899 = state_22888;(statearr_22899[8] = inst_22881);
return statearr_22899;
})();var statearr_22900_22918 = state_22888__$1;(statearr_22900_22918[2] = null);
(statearr_22900_22918[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_22889 === 11))
{var inst_22878 = (state_22888[2]);var state_22888__$1 = state_22888;var statearr_22901_22919 = state_22888__$1;(statearr_22901_22919[2] = inst_22878);
(statearr_22901_22919[1] = 10);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_22905 = [null,null,null,null,null,null,null,null,null];(statearr_22905[0] = state_machine__5507__auto__);
(statearr_22905[1] = 1);
return statearr_22905;
});
var state_machine__5507__auto____1 = (function (state_22888){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22888);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22906){if((e22906 instanceof Object))
{var ex__5510__auto__ = e22906;var statearr_22907_22920 = state_22888;(statearr_22907_22920[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22888);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e22906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__22921 = state_22888;
state_22888 = G__22921;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22888){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22908 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___22909);
return statearr_22908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23073){var state_val_23074 = (state_23073[1]);if((state_val_23074 === 1))
{var state_23073__$1 = state_23073;var statearr_23075_23112 = state_23073__$1;(statearr_23075_23112[2] = null);
(statearr_23075_23112[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 2))
{var state_23073__$1 = state_23073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23073__$1,4,in$);
} else
{if((state_val_23074 === 3))
{var inst_23071 = (state_23073[2]);var state_23073__$1 = state_23073;return cljs.core.async.impl.ioc_helpers.return_chan(state_23073__$1,inst_23071);
} else
{if((state_val_23074 === 4))
{var inst_23019 = (state_23073[7]);var inst_23019__$1 = (state_23073[2]);var inst_23020 = (inst_23019__$1 == null);var state_23073__$1 = (function (){var statearr_23076 = state_23073;(statearr_23076[7] = inst_23019__$1);
return statearr_23076;
})();if(cljs.core.truth_(inst_23020))
{var statearr_23077_23113 = state_23073__$1;(statearr_23077_23113[1] = 5);
} else
{var statearr_23078_23114 = state_23073__$1;(statearr_23078_23114[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 5))
{var inst_23022 = cljs.core.async.close_BANG_(out);var state_23073__$1 = state_23073;var statearr_23079_23115 = state_23073__$1;(statearr_23079_23115[2] = inst_23022);
(statearr_23079_23115[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 6))
{var inst_23019 = (state_23073[7]);var inst_23024 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23019) : f.call(null,inst_23019));var inst_23029 = cljs.core.seq(inst_23024);var inst_23030 = inst_23029;var inst_23031 = null;var inst_23032 = 0;var inst_23033 = 0;var state_23073__$1 = (function (){var statearr_23080 = state_23073;(statearr_23080[8] = inst_23033);
(statearr_23080[9] = inst_23031);
(statearr_23080[10] = inst_23032);
(statearr_23080[11] = inst_23030);
return statearr_23080;
})();var statearr_23081_23116 = state_23073__$1;(statearr_23081_23116[2] = null);
(statearr_23081_23116[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 7))
{var inst_23069 = (state_23073[2]);var state_23073__$1 = state_23073;var statearr_23082_23117 = state_23073__$1;(statearr_23082_23117[2] = inst_23069);
(statearr_23082_23117[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 8))
{var inst_23033 = (state_23073[8]);var inst_23032 = (state_23073[10]);var inst_23035 = (inst_23033 < inst_23032);var inst_23036 = inst_23035;var state_23073__$1 = state_23073;if(cljs.core.truth_(inst_23036))
{var statearr_23083_23118 = state_23073__$1;(statearr_23083_23118[1] = 10);
} else
{var statearr_23084_23119 = state_23073__$1;(statearr_23084_23119[1] = 11);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 9))
{var inst_23066 = (state_23073[2]);var state_23073__$1 = (function (){var statearr_23085 = state_23073;(statearr_23085[12] = inst_23066);
return statearr_23085;
})();var statearr_23086_23120 = state_23073__$1;(statearr_23086_23120[2] = null);
(statearr_23086_23120[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 10))
{var inst_23033 = (state_23073[8]);var inst_23031 = (state_23073[9]);var inst_23038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23031,inst_23033);var state_23073__$1 = state_23073;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23073__$1,13,out,inst_23038);
} else
{if((state_val_23074 === 11))
{var inst_23030 = (state_23073[11]);var inst_23044 = (state_23073[13]);var inst_23044__$1 = cljs.core.seq(inst_23030);var state_23073__$1 = (function (){var statearr_23090 = state_23073;(statearr_23090[13] = inst_23044__$1);
return statearr_23090;
})();if(inst_23044__$1)
{var statearr_23091_23121 = state_23073__$1;(statearr_23091_23121[1] = 14);
} else
{var statearr_23092_23122 = state_23073__$1;(statearr_23092_23122[1] = 15);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 12))
{var inst_23064 = (state_23073[2]);var state_23073__$1 = state_23073;var statearr_23093_23123 = state_23073__$1;(statearr_23093_23123[2] = inst_23064);
(statearr_23093_23123[1] = 9);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 13))
{var inst_23033 = (state_23073[8]);var inst_23031 = (state_23073[9]);var inst_23032 = (state_23073[10]);var inst_23030 = (state_23073[11]);var inst_23040 = (state_23073[2]);var inst_23041 = (inst_23033 + 1);var tmp23087 = inst_23031;var tmp23088 = inst_23032;var tmp23089 = inst_23030;var inst_23030__$1 = tmp23089;var inst_23031__$1 = tmp23087;var inst_23032__$1 = tmp23088;var inst_23033__$1 = inst_23041;var state_23073__$1 = (function (){var statearr_23094 = state_23073;(statearr_23094[8] = inst_23033__$1);
(statearr_23094[9] = inst_23031__$1);
(statearr_23094[10] = inst_23032__$1);
(statearr_23094[11] = inst_23030__$1);
(statearr_23094[14] = inst_23040);
return statearr_23094;
})();var statearr_23095_23124 = state_23073__$1;(statearr_23095_23124[2] = null);
(statearr_23095_23124[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 14))
{var inst_23044 = (state_23073[13]);var inst_23046 = cljs.core.chunked_seq_QMARK_(inst_23044);var state_23073__$1 = state_23073;if(inst_23046)
{var statearr_23096_23125 = state_23073__$1;(statearr_23096_23125[1] = 17);
} else
{var statearr_23097_23126 = state_23073__$1;(statearr_23097_23126[1] = 18);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 15))
{var state_23073__$1 = state_23073;var statearr_23098_23127 = state_23073__$1;(statearr_23098_23127[2] = null);
(statearr_23098_23127[1] = 16);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 16))
{var inst_23062 = (state_23073[2]);var state_23073__$1 = state_23073;var statearr_23099_23128 = state_23073__$1;(statearr_23099_23128[2] = inst_23062);
(statearr_23099_23128[1] = 12);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 17))
{var inst_23044 = (state_23073[13]);var inst_23048 = cljs.core.chunk_first(inst_23044);var inst_23049 = cljs.core.chunk_rest(inst_23044);var inst_23050 = cljs.core.count(inst_23048);var inst_23030 = inst_23049;var inst_23031 = inst_23048;var inst_23032 = inst_23050;var inst_23033 = 0;var state_23073__$1 = (function (){var statearr_23100 = state_23073;(statearr_23100[8] = inst_23033);
(statearr_23100[9] = inst_23031);
(statearr_23100[10] = inst_23032);
(statearr_23100[11] = inst_23030);
return statearr_23100;
})();var statearr_23101_23129 = state_23073__$1;(statearr_23101_23129[2] = null);
(statearr_23101_23129[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 18))
{var inst_23044 = (state_23073[13]);var inst_23053 = cljs.core.first(inst_23044);var state_23073__$1 = state_23073;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23073__$1,20,out,inst_23053);
} else
{if((state_val_23074 === 19))
{var inst_23059 = (state_23073[2]);var state_23073__$1 = state_23073;var statearr_23102_23130 = state_23073__$1;(statearr_23102_23130[2] = inst_23059);
(statearr_23102_23130[1] = 16);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23074 === 20))
{var inst_23044 = (state_23073[13]);var inst_23055 = (state_23073[2]);var inst_23056 = cljs.core.next(inst_23044);var inst_23030 = inst_23056;var inst_23031 = null;var inst_23032 = 0;var inst_23033 = 0;var state_23073__$1 = (function (){var statearr_23103 = state_23073;(statearr_23103[8] = inst_23033);
(statearr_23103[9] = inst_23031);
(statearr_23103[10] = inst_23032);
(statearr_23103[11] = inst_23030);
(statearr_23103[15] = inst_23055);
return statearr_23103;
})();var statearr_23104_23131 = state_23073__$1;(statearr_23104_23131[2] = null);
(statearr_23104_23131[1] = 8);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_23108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23108[0] = state_machine__5507__auto__);
(statearr_23108[1] = 1);
return statearr_23108;
});
var state_machine__5507__auto____1 = (function (state_23073){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23073);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23109){if((e23109 instanceof Object))
{var ex__5510__auto__ = e23109;var statearr_23110_23132 = state_23073;(statearr_23110_23132[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23073);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e23109;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__23133 = state_23073;
state_23073 = G__23133;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23073){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23111 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23111;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___23214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23193){var state_val_23194 = (state_23193[1]);if((state_val_23194 === 1))
{var state_23193__$1 = state_23193;var statearr_23195_23215 = state_23193__$1;(statearr_23195_23215[2] = null);
(statearr_23195_23215[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23194 === 2))
{var state_23193__$1 = state_23193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23193__$1,4,from);
} else
{if((state_val_23194 === 3))
{var inst_23191 = (state_23193[2]);var state_23193__$1 = state_23193;return cljs.core.async.impl.ioc_helpers.return_chan(state_23193__$1,inst_23191);
} else
{if((state_val_23194 === 4))
{var inst_23176 = (state_23193[7]);var inst_23176__$1 = (state_23193[2]);var inst_23177 = (inst_23176__$1 == null);var state_23193__$1 = (function (){var statearr_23196 = state_23193;(statearr_23196[7] = inst_23176__$1);
return statearr_23196;
})();if(cljs.core.truth_(inst_23177))
{var statearr_23197_23216 = state_23193__$1;(statearr_23197_23216[1] = 5);
} else
{var statearr_23198_23217 = state_23193__$1;(statearr_23198_23217[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23194 === 5))
{var state_23193__$1 = state_23193;if(cljs.core.truth_(close_QMARK_))
{var statearr_23199_23218 = state_23193__$1;(statearr_23199_23218[1] = 8);
} else
{var statearr_23200_23219 = state_23193__$1;(statearr_23200_23219[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23194 === 6))
{var inst_23176 = (state_23193[7]);var state_23193__$1 = state_23193;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23193__$1,11,to,inst_23176);
} else
{if((state_val_23194 === 7))
{var inst_23189 = (state_23193[2]);var state_23193__$1 = state_23193;var statearr_23201_23220 = state_23193__$1;(statearr_23201_23220[2] = inst_23189);
(statearr_23201_23220[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23194 === 8))
{var inst_23180 = cljs.core.async.close_BANG_(to);var state_23193__$1 = state_23193;var statearr_23202_23221 = state_23193__$1;(statearr_23202_23221[2] = inst_23180);
(statearr_23202_23221[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23194 === 9))
{var state_23193__$1 = state_23193;var statearr_23203_23222 = state_23193__$1;(statearr_23203_23222[2] = null);
(statearr_23203_23222[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23194 === 10))
{var inst_23183 = (state_23193[2]);var state_23193__$1 = state_23193;var statearr_23204_23223 = state_23193__$1;(statearr_23204_23223[2] = inst_23183);
(statearr_23204_23223[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23194 === 11))
{var inst_23186 = (state_23193[2]);var state_23193__$1 = (function (){var statearr_23205 = state_23193;(statearr_23205[8] = inst_23186);
return statearr_23205;
})();var statearr_23206_23224 = state_23193__$1;(statearr_23206_23224[2] = null);
(statearr_23206_23224[1] = 2);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_23210 = [null,null,null,null,null,null,null,null,null];(statearr_23210[0] = state_machine__5507__auto__);
(statearr_23210[1] = 1);
return statearr_23210;
});
var state_machine__5507__auto____1 = (function (state_23193){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23193);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23211){if((e23211 instanceof Object))
{var ex__5510__auto__ = e23211;var statearr_23212_23225 = state_23193;(statearr_23212_23225[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23193);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e23211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__23226 = state_23193;
state_23193 = G__23226;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23193){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23213 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23214);
return statearr_23213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___23313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23291){var state_val_23292 = (state_23291[1]);if((state_val_23292 === 1))
{var state_23291__$1 = state_23291;var statearr_23293_23314 = state_23291__$1;(statearr_23293_23314[2] = null);
(statearr_23293_23314[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 2))
{var state_23291__$1 = state_23291;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23291__$1,4,ch);
} else
{if((state_val_23292 === 3))
{var inst_23289 = (state_23291[2]);var state_23291__$1 = state_23291;return cljs.core.async.impl.ioc_helpers.return_chan(state_23291__$1,inst_23289);
} else
{if((state_val_23292 === 4))
{var inst_23272 = (state_23291[7]);var inst_23272__$1 = (state_23291[2]);var inst_23273 = (inst_23272__$1 == null);var state_23291__$1 = (function (){var statearr_23294 = state_23291;(statearr_23294[7] = inst_23272__$1);
return statearr_23294;
})();if(cljs.core.truth_(inst_23273))
{var statearr_23295_23315 = state_23291__$1;(statearr_23295_23315[1] = 5);
} else
{var statearr_23296_23316 = state_23291__$1;(statearr_23296_23316[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 5))
{var inst_23275 = cljs.core.async.close_BANG_(tc);var inst_23276 = cljs.core.async.close_BANG_(fc);var state_23291__$1 = (function (){var statearr_23297 = state_23291;(statearr_23297[8] = inst_23275);
return statearr_23297;
})();var statearr_23298_23317 = state_23291__$1;(statearr_23298_23317[2] = inst_23276);
(statearr_23298_23317[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 6))
{var inst_23272 = (state_23291[7]);var inst_23278 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23272) : p.call(null,inst_23272));var state_23291__$1 = state_23291;if(cljs.core.truth_(inst_23278))
{var statearr_23299_23318 = state_23291__$1;(statearr_23299_23318[1] = 9);
} else
{var statearr_23300_23319 = state_23291__$1;(statearr_23300_23319[1] = 10);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 7))
{var inst_23287 = (state_23291[2]);var state_23291__$1 = state_23291;var statearr_23301_23320 = state_23291__$1;(statearr_23301_23320[2] = inst_23287);
(statearr_23301_23320[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 8))
{var inst_23284 = (state_23291[2]);var state_23291__$1 = (function (){var statearr_23302 = state_23291;(statearr_23302[9] = inst_23284);
return statearr_23302;
})();var statearr_23303_23321 = state_23291__$1;(statearr_23303_23321[2] = null);
(statearr_23303_23321[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 9))
{var state_23291__$1 = state_23291;var statearr_23304_23322 = state_23291__$1;(statearr_23304_23322[2] = tc);
(statearr_23304_23322[1] = 11);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 10))
{var state_23291__$1 = state_23291;var statearr_23305_23323 = state_23291__$1;(statearr_23305_23323[2] = fc);
(statearr_23305_23323[1] = 11);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23292 === 11))
{var inst_23272 = (state_23291[7]);var inst_23282 = (state_23291[2]);var state_23291__$1 = state_23291;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23291__$1,8,inst_23282,inst_23272);
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
var state_machine__5507__auto____0 = (function (){var statearr_23309 = [null,null,null,null,null,null,null,null,null,null];(statearr_23309[0] = state_machine__5507__auto__);
(statearr_23309[1] = 1);
return statearr_23309;
});
var state_machine__5507__auto____1 = (function (state_23291){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23291);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23310){if((e23310 instanceof Object))
{var ex__5510__auto__ = e23310;var statearr_23311_23324 = state_23291;(statearr_23311_23324[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23291);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e23310;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__23325 = state_23291;
state_23291 = G__23325;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23291){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23312 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23313);
return statearr_23312;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23372){var state_val_23373 = (state_23372[1]);if((state_val_23373 === 7))
{var inst_23368 = (state_23372[2]);var state_23372__$1 = state_23372;var statearr_23374_23390 = state_23372__$1;(statearr_23374_23390[2] = inst_23368);
(statearr_23374_23390[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23373 === 6))
{var inst_23358 = (state_23372[7]);var inst_23361 = (state_23372[8]);var inst_23365 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23358,inst_23361) : f.call(null,inst_23358,inst_23361));var inst_23358__$1 = inst_23365;var state_23372__$1 = (function (){var statearr_23375 = state_23372;(statearr_23375[7] = inst_23358__$1);
return statearr_23375;
})();var statearr_23376_23391 = state_23372__$1;(statearr_23376_23391[2] = null);
(statearr_23376_23391[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23373 === 5))
{var inst_23358 = (state_23372[7]);var state_23372__$1 = state_23372;var statearr_23377_23392 = state_23372__$1;(statearr_23377_23392[2] = inst_23358);
(statearr_23377_23392[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23373 === 4))
{var inst_23361 = (state_23372[8]);var inst_23361__$1 = (state_23372[2]);var inst_23362 = (inst_23361__$1 == null);var state_23372__$1 = (function (){var statearr_23378 = state_23372;(statearr_23378[8] = inst_23361__$1);
return statearr_23378;
})();if(cljs.core.truth_(inst_23362))
{var statearr_23379_23393 = state_23372__$1;(statearr_23379_23393[1] = 5);
} else
{var statearr_23380_23394 = state_23372__$1;(statearr_23380_23394[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23373 === 3))
{var inst_23370 = (state_23372[2]);var state_23372__$1 = state_23372;return cljs.core.async.impl.ioc_helpers.return_chan(state_23372__$1,inst_23370);
} else
{if((state_val_23373 === 2))
{var state_23372__$1 = state_23372;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23372__$1,4,ch);
} else
{if((state_val_23373 === 1))
{var inst_23358 = init;var state_23372__$1 = (function (){var statearr_23381 = state_23372;(statearr_23381[7] = inst_23358);
return statearr_23381;
})();var statearr_23382_23395 = state_23372__$1;(statearr_23382_23395[2] = null);
(statearr_23382_23395[1] = 2);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_23386 = [null,null,null,null,null,null,null,null,null];(statearr_23386[0] = state_machine__5507__auto__);
(statearr_23386[1] = 1);
return statearr_23386;
});
var state_machine__5507__auto____1 = (function (state_23372){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23372);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23387){if((e23387 instanceof Object))
{var ex__5510__auto__ = e23387;var statearr_23388_23396 = state_23372;(statearr_23388_23396[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23372);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e23387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__23397 = state_23372;
state_23372 = G__23397;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23372){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23389 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23459){var state_val_23460 = (state_23459[1]);if((state_val_23460 === 1))
{var inst_23439 = cljs.core.seq(coll);var inst_23440 = inst_23439;var state_23459__$1 = (function (){var statearr_23461 = state_23459;(statearr_23461[7] = inst_23440);
return statearr_23461;
})();var statearr_23462_23480 = state_23459__$1;(statearr_23462_23480[2] = null);
(statearr_23462_23480[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23460 === 2))
{var inst_23440 = (state_23459[7]);var state_23459__$1 = state_23459;if(cljs.core.truth_(inst_23440))
{var statearr_23463_23481 = state_23459__$1;(statearr_23463_23481[1] = 4);
} else
{var statearr_23464_23482 = state_23459__$1;(statearr_23464_23482[1] = 5);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23460 === 3))
{var inst_23457 = (state_23459[2]);var state_23459__$1 = state_23459;return cljs.core.async.impl.ioc_helpers.return_chan(state_23459__$1,inst_23457);
} else
{if((state_val_23460 === 4))
{var inst_23440 = (state_23459[7]);var inst_23443 = cljs.core.first(inst_23440);var state_23459__$1 = state_23459;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23459__$1,7,ch,inst_23443);
} else
{if((state_val_23460 === 5))
{var state_23459__$1 = state_23459;if(cljs.core.truth_(close_QMARK_))
{var statearr_23465_23483 = state_23459__$1;(statearr_23465_23483[1] = 8);
} else
{var statearr_23466_23484 = state_23459__$1;(statearr_23466_23484[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23460 === 6))
{var inst_23455 = (state_23459[2]);var state_23459__$1 = state_23459;var statearr_23467_23485 = state_23459__$1;(statearr_23467_23485[2] = inst_23455);
(statearr_23467_23485[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23460 === 7))
{var inst_23440 = (state_23459[7]);var inst_23445 = (state_23459[2]);var inst_23446 = cljs.core.next(inst_23440);var inst_23440__$1 = inst_23446;var state_23459__$1 = (function (){var statearr_23468 = state_23459;(statearr_23468[8] = inst_23445);
(statearr_23468[7] = inst_23440__$1);
return statearr_23468;
})();var statearr_23469_23486 = state_23459__$1;(statearr_23469_23486[2] = null);
(statearr_23469_23486[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23460 === 8))
{var inst_23450 = cljs.core.async.close_BANG_(ch);var state_23459__$1 = state_23459;var statearr_23470_23487 = state_23459__$1;(statearr_23470_23487[2] = inst_23450);
(statearr_23470_23487[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23460 === 9))
{var state_23459__$1 = state_23459;var statearr_23471_23488 = state_23459__$1;(statearr_23471_23488[2] = null);
(statearr_23471_23488[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23460 === 10))
{var inst_23453 = (state_23459[2]);var state_23459__$1 = state_23459;var statearr_23472_23489 = state_23459__$1;(statearr_23472_23489[2] = inst_23453);
(statearr_23472_23489[1] = 6);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_23476 = [null,null,null,null,null,null,null,null,null];(statearr_23476[0] = state_machine__5507__auto__);
(statearr_23476[1] = 1);
return statearr_23476;
});
var state_machine__5507__auto____1 = (function (state_23459){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23459);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23477){if((e23477 instanceof Object))
{var ex__5510__auto__ = e23477;var statearr_23478_23490 = state_23459;(statearr_23478_23490[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23459);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e23477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__23491 = state_23459;
state_23459 = G__23491;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23459){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23479 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_23479;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj23493 = {};return obj23493;
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
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23495 = {};return obj23495;
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
{throw cljs.core.missing_protocol("Mult.tap*",m);
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
{throw cljs.core.missing_protocol("Mult.untap*",m);
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
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23719 = (function (cs,ch,mult,meta23720){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23720 = meta23720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23719.cljs$lang$type = true;
cljs.core.async.t23719.cljs$lang$ctorStr = "cljs.core.async/t23719";
cljs.core.async.t23719.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t23719");
});})(cs))
;
cljs.core.async.t23719.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23719.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23719.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23719.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23719.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23721){var self__ = this;
var _23721__$1 = this;return self__.meta23720;
});})(cs))
;
cljs.core.async.t23719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23721,meta23720__$1){var self__ = this;
var _23721__$1 = this;return (new cljs.core.async.t23719(self__.cs,self__.ch,self__.mult,meta23720__$1));
});})(cs))
;
cljs.core.async.__GT_t23719 = ((function (cs){
return (function __GT_t23719(cs__$1,ch__$1,mult__$1,meta23720){return (new cljs.core.async.t23719(cs__$1,ch__$1,mult__$1,meta23720));
});})(cs))
;
}
return (new cljs.core.async.t23719(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___23942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_23856){var state_val_23857 = (state_23856[1]);if((state_val_23857 === 32))
{var inst_23800 = (state_23856[7]);var inst_23724 = (state_23856[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23856,31,Object,null,30);var inst_23807 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23800,inst_23724,done);var state_23856__$1 = state_23856;var statearr_23858_23943 = state_23856__$1;(statearr_23858_23943[2] = inst_23807);
cljs.core.async.impl.ioc_helpers.process_exception(state_23856__$1);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 1))
{var state_23856__$1 = state_23856;var statearr_23859_23944 = state_23856__$1;(statearr_23859_23944[2] = null);
(statearr_23859_23944[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 33))
{var inst_23813 = (state_23856[9]);var inst_23815 = cljs.core.chunked_seq_QMARK_(inst_23813);var state_23856__$1 = state_23856;if(inst_23815)
{var statearr_23860_23945 = state_23856__$1;(statearr_23860_23945[1] = 36);
} else
{var statearr_23861_23946 = state_23856__$1;(statearr_23861_23946[1] = 37);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 2))
{var state_23856__$1 = state_23856;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23856__$1,4,ch);
} else
{if((state_val_23857 === 34))
{var state_23856__$1 = state_23856;var statearr_23862_23947 = state_23856__$1;(statearr_23862_23947[2] = null);
(statearr_23862_23947[1] = 35);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 3))
{var inst_23854 = (state_23856[2]);var state_23856__$1 = state_23856;return cljs.core.async.impl.ioc_helpers.return_chan(state_23856__$1,inst_23854);
} else
{if((state_val_23857 === 35))
{var inst_23838 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23863_23948 = state_23856__$1;(statearr_23863_23948[2] = inst_23838);
(statearr_23863_23948[1] = 29);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 4))
{var inst_23724 = (state_23856[8]);var inst_23724__$1 = (state_23856[2]);var inst_23725 = (inst_23724__$1 == null);var state_23856__$1 = (function (){var statearr_23864 = state_23856;(statearr_23864[8] = inst_23724__$1);
return statearr_23864;
})();if(cljs.core.truth_(inst_23725))
{var statearr_23865_23949 = state_23856__$1;(statearr_23865_23949[1] = 5);
} else
{var statearr_23866_23950 = state_23856__$1;(statearr_23866_23950[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 36))
{var inst_23813 = (state_23856[9]);var inst_23817 = cljs.core.chunk_first(inst_23813);var inst_23818 = cljs.core.chunk_rest(inst_23813);var inst_23819 = cljs.core.count(inst_23817);var inst_23792 = inst_23818;var inst_23793 = inst_23817;var inst_23794 = inst_23819;var inst_23795 = 0;var state_23856__$1 = (function (){var statearr_23867 = state_23856;(statearr_23867[10] = inst_23792);
(statearr_23867[11] = inst_23793);
(statearr_23867[12] = inst_23795);
(statearr_23867[13] = inst_23794);
return statearr_23867;
})();var statearr_23868_23951 = state_23856__$1;(statearr_23868_23951[2] = null);
(statearr_23868_23951[1] = 25);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 5))
{var inst_23731 = cljs.core.deref(cs);var inst_23732 = cljs.core.seq(inst_23731);var inst_23733 = inst_23732;var inst_23734 = null;var inst_23735 = 0;var inst_23736 = 0;var state_23856__$1 = (function (){var statearr_23869 = state_23856;(statearr_23869[14] = inst_23736);
(statearr_23869[15] = inst_23733);
(statearr_23869[16] = inst_23734);
(statearr_23869[17] = inst_23735);
return statearr_23869;
})();var statearr_23870_23952 = state_23856__$1;(statearr_23870_23952[2] = null);
(statearr_23870_23952[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 37))
{var inst_23813 = (state_23856[9]);var inst_23822 = cljs.core.first(inst_23813);var state_23856__$1 = (function (){var statearr_23871 = state_23856;(statearr_23871[18] = inst_23822);
return statearr_23871;
})();var statearr_23872_23953 = state_23856__$1;(statearr_23872_23953[2] = null);
(statearr_23872_23953[1] = 41);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 6))
{var inst_23784 = (state_23856[19]);var inst_23783 = cljs.core.deref(cs);var inst_23784__$1 = cljs.core.keys(inst_23783);var inst_23785 = cljs.core.count(inst_23784__$1);var inst_23786 = cljs.core.reset_BANG_(dctr,inst_23785);var inst_23791 = cljs.core.seq(inst_23784__$1);var inst_23792 = inst_23791;var inst_23793 = null;var inst_23794 = 0;var inst_23795 = 0;var state_23856__$1 = (function (){var statearr_23873 = state_23856;(statearr_23873[10] = inst_23792);
(statearr_23873[11] = inst_23793);
(statearr_23873[12] = inst_23795);
(statearr_23873[13] = inst_23794);
(statearr_23873[20] = inst_23786);
(statearr_23873[19] = inst_23784__$1);
return statearr_23873;
})();var statearr_23874_23954 = state_23856__$1;(statearr_23874_23954[2] = null);
(statearr_23874_23954[1] = 25);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 38))
{var inst_23835 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23875_23955 = state_23856__$1;(statearr_23875_23955[2] = inst_23835);
(statearr_23875_23955[1] = 35);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 7))
{var inst_23852 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23876_23956 = state_23856__$1;(statearr_23876_23956[2] = inst_23852);
(statearr_23876_23956[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 39))
{var inst_23813 = (state_23856[9]);var inst_23831 = (state_23856[2]);var inst_23832 = cljs.core.next(inst_23813);var inst_23792 = inst_23832;var inst_23793 = null;var inst_23794 = 0;var inst_23795 = 0;var state_23856__$1 = (function (){var statearr_23877 = state_23856;(statearr_23877[10] = inst_23792);
(statearr_23877[11] = inst_23793);
(statearr_23877[21] = inst_23831);
(statearr_23877[12] = inst_23795);
(statearr_23877[13] = inst_23794);
return statearr_23877;
})();var statearr_23878_23957 = state_23856__$1;(statearr_23878_23957[2] = null);
(statearr_23878_23957[1] = 25);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 8))
{var inst_23736 = (state_23856[14]);var inst_23735 = (state_23856[17]);var inst_23738 = (inst_23736 < inst_23735);var inst_23739 = inst_23738;var state_23856__$1 = state_23856;if(cljs.core.truth_(inst_23739))
{var statearr_23879_23958 = state_23856__$1;(statearr_23879_23958[1] = 10);
} else
{var statearr_23880_23959 = state_23856__$1;(statearr_23880_23959[1] = 11);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 40))
{var inst_23822 = (state_23856[18]);var inst_23823 = (state_23856[2]);var inst_23824 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23825 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23822);var state_23856__$1 = (function (){var statearr_23881 = state_23856;(statearr_23881[22] = inst_23823);
(statearr_23881[23] = inst_23824);
return statearr_23881;
})();var statearr_23882_23960 = state_23856__$1;(statearr_23882_23960[2] = inst_23825);
cljs.core.async.impl.ioc_helpers.process_exception(state_23856__$1);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 9))
{var inst_23781 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23883_23961 = state_23856__$1;(statearr_23883_23961[2] = inst_23781);
(statearr_23883_23961[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 41))
{var inst_23822 = (state_23856[18]);var inst_23724 = (state_23856[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23856,40,Object,null,39);var inst_23829 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23822,inst_23724,done);var state_23856__$1 = state_23856;var statearr_23884_23962 = state_23856__$1;(statearr_23884_23962[2] = inst_23829);
cljs.core.async.impl.ioc_helpers.process_exception(state_23856__$1);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 10))
{var inst_23736 = (state_23856[14]);var inst_23734 = (state_23856[16]);var inst_23742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23734,inst_23736);var inst_23743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23742,0,null);var inst_23744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23742,1,null);var state_23856__$1 = (function (){var statearr_23885 = state_23856;(statearr_23885[24] = inst_23743);
return statearr_23885;
})();if(cljs.core.truth_(inst_23744))
{var statearr_23886_23963 = state_23856__$1;(statearr_23886_23963[1] = 13);
} else
{var statearr_23887_23964 = state_23856__$1;(statearr_23887_23964[1] = 14);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 42))
{var state_23856__$1 = state_23856;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23856__$1,45,dchan);
} else
{if((state_val_23857 === 11))
{var inst_23753 = (state_23856[25]);var inst_23733 = (state_23856[15]);var inst_23753__$1 = cljs.core.seq(inst_23733);var state_23856__$1 = (function (){var statearr_23888 = state_23856;(statearr_23888[25] = inst_23753__$1);
return statearr_23888;
})();if(inst_23753__$1)
{var statearr_23889_23965 = state_23856__$1;(statearr_23889_23965[1] = 16);
} else
{var statearr_23890_23966 = state_23856__$1;(statearr_23890_23966[1] = 17);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 43))
{var state_23856__$1 = state_23856;var statearr_23891_23967 = state_23856__$1;(statearr_23891_23967[2] = null);
(statearr_23891_23967[1] = 44);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 12))
{var inst_23779 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23892_23968 = state_23856__$1;(statearr_23892_23968[2] = inst_23779);
(statearr_23892_23968[1] = 9);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 44))
{var inst_23849 = (state_23856[2]);var state_23856__$1 = (function (){var statearr_23893 = state_23856;(statearr_23893[26] = inst_23849);
return statearr_23893;
})();var statearr_23894_23969 = state_23856__$1;(statearr_23894_23969[2] = null);
(statearr_23894_23969[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 13))
{var inst_23743 = (state_23856[24]);var inst_23746 = cljs.core.async.close_BANG_(inst_23743);var state_23856__$1 = state_23856;var statearr_23895_23970 = state_23856__$1;(statearr_23895_23970[2] = inst_23746);
(statearr_23895_23970[1] = 15);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 45))
{var inst_23846 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23899_23971 = state_23856__$1;(statearr_23899_23971[2] = inst_23846);
(statearr_23899_23971[1] = 44);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 14))
{var state_23856__$1 = state_23856;var statearr_23900_23972 = state_23856__$1;(statearr_23900_23972[2] = null);
(statearr_23900_23972[1] = 15);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 15))
{var inst_23736 = (state_23856[14]);var inst_23733 = (state_23856[15]);var inst_23734 = (state_23856[16]);var inst_23735 = (state_23856[17]);var inst_23749 = (state_23856[2]);var inst_23750 = (inst_23736 + 1);var tmp23896 = inst_23733;var tmp23897 = inst_23734;var tmp23898 = inst_23735;var inst_23733__$1 = tmp23896;var inst_23734__$1 = tmp23897;var inst_23735__$1 = tmp23898;var inst_23736__$1 = inst_23750;var state_23856__$1 = (function (){var statearr_23901 = state_23856;(statearr_23901[14] = inst_23736__$1);
(statearr_23901[27] = inst_23749);
(statearr_23901[15] = inst_23733__$1);
(statearr_23901[16] = inst_23734__$1);
(statearr_23901[17] = inst_23735__$1);
return statearr_23901;
})();var statearr_23902_23973 = state_23856__$1;(statearr_23902_23973[2] = null);
(statearr_23902_23973[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 16))
{var inst_23753 = (state_23856[25]);var inst_23755 = cljs.core.chunked_seq_QMARK_(inst_23753);var state_23856__$1 = state_23856;if(inst_23755)
{var statearr_23903_23974 = state_23856__$1;(statearr_23903_23974[1] = 19);
} else
{var statearr_23904_23975 = state_23856__$1;(statearr_23904_23975[1] = 20);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 17))
{var state_23856__$1 = state_23856;var statearr_23905_23976 = state_23856__$1;(statearr_23905_23976[2] = null);
(statearr_23905_23976[1] = 18);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 18))
{var inst_23777 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23906_23977 = state_23856__$1;(statearr_23906_23977[2] = inst_23777);
(statearr_23906_23977[1] = 12);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 19))
{var inst_23753 = (state_23856[25]);var inst_23757 = cljs.core.chunk_first(inst_23753);var inst_23758 = cljs.core.chunk_rest(inst_23753);var inst_23759 = cljs.core.count(inst_23757);var inst_23733 = inst_23758;var inst_23734 = inst_23757;var inst_23735 = inst_23759;var inst_23736 = 0;var state_23856__$1 = (function (){var statearr_23907 = state_23856;(statearr_23907[14] = inst_23736);
(statearr_23907[15] = inst_23733);
(statearr_23907[16] = inst_23734);
(statearr_23907[17] = inst_23735);
return statearr_23907;
})();var statearr_23908_23978 = state_23856__$1;(statearr_23908_23978[2] = null);
(statearr_23908_23978[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 20))
{var inst_23753 = (state_23856[25]);var inst_23763 = cljs.core.first(inst_23753);var inst_23764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23763,0,null);var inst_23765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23763,1,null);var state_23856__$1 = (function (){var statearr_23909 = state_23856;(statearr_23909[28] = inst_23764);
return statearr_23909;
})();if(cljs.core.truth_(inst_23765))
{var statearr_23910_23979 = state_23856__$1;(statearr_23910_23979[1] = 22);
} else
{var statearr_23911_23980 = state_23856__$1;(statearr_23911_23980[1] = 23);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 21))
{var inst_23774 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23912_23981 = state_23856__$1;(statearr_23912_23981[2] = inst_23774);
(statearr_23912_23981[1] = 18);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 22))
{var inst_23764 = (state_23856[28]);var inst_23767 = cljs.core.async.close_BANG_(inst_23764);var state_23856__$1 = state_23856;var statearr_23913_23982 = state_23856__$1;(statearr_23913_23982[2] = inst_23767);
(statearr_23913_23982[1] = 24);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 23))
{var state_23856__$1 = state_23856;var statearr_23914_23983 = state_23856__$1;(statearr_23914_23983[2] = null);
(statearr_23914_23983[1] = 24);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 24))
{var inst_23753 = (state_23856[25]);var inst_23770 = (state_23856[2]);var inst_23771 = cljs.core.next(inst_23753);var inst_23733 = inst_23771;var inst_23734 = null;var inst_23735 = 0;var inst_23736 = 0;var state_23856__$1 = (function (){var statearr_23915 = state_23856;(statearr_23915[14] = inst_23736);
(statearr_23915[29] = inst_23770);
(statearr_23915[15] = inst_23733);
(statearr_23915[16] = inst_23734);
(statearr_23915[17] = inst_23735);
return statearr_23915;
})();var statearr_23916_23984 = state_23856__$1;(statearr_23916_23984[2] = null);
(statearr_23916_23984[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 25))
{var inst_23795 = (state_23856[12]);var inst_23794 = (state_23856[13]);var inst_23797 = (inst_23795 < inst_23794);var inst_23798 = inst_23797;var state_23856__$1 = state_23856;if(cljs.core.truth_(inst_23798))
{var statearr_23917_23985 = state_23856__$1;(statearr_23917_23985[1] = 27);
} else
{var statearr_23918_23986 = state_23856__$1;(statearr_23918_23986[1] = 28);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 26))
{var inst_23784 = (state_23856[19]);var inst_23842 = (state_23856[2]);var inst_23843 = cljs.core.seq(inst_23784);var state_23856__$1 = (function (){var statearr_23919 = state_23856;(statearr_23919[30] = inst_23842);
return statearr_23919;
})();if(inst_23843)
{var statearr_23920_23987 = state_23856__$1;(statearr_23920_23987[1] = 42);
} else
{var statearr_23921_23988 = state_23856__$1;(statearr_23921_23988[1] = 43);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 27))
{var inst_23793 = (state_23856[11]);var inst_23795 = (state_23856[12]);var inst_23800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23793,inst_23795);var state_23856__$1 = (function (){var statearr_23922 = state_23856;(statearr_23922[7] = inst_23800);
return statearr_23922;
})();var statearr_23923_23989 = state_23856__$1;(statearr_23923_23989[2] = null);
(statearr_23923_23989[1] = 32);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 28))
{var inst_23792 = (state_23856[10]);var inst_23813 = (state_23856[9]);var inst_23813__$1 = cljs.core.seq(inst_23792);var state_23856__$1 = (function (){var statearr_23927 = state_23856;(statearr_23927[9] = inst_23813__$1);
return statearr_23927;
})();if(inst_23813__$1)
{var statearr_23928_23990 = state_23856__$1;(statearr_23928_23990[1] = 33);
} else
{var statearr_23929_23991 = state_23856__$1;(statearr_23929_23991[1] = 34);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 29))
{var inst_23840 = (state_23856[2]);var state_23856__$1 = state_23856;var statearr_23930_23992 = state_23856__$1;(statearr_23930_23992[2] = inst_23840);
(statearr_23930_23992[1] = 26);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 30))
{var inst_23792 = (state_23856[10]);var inst_23793 = (state_23856[11]);var inst_23795 = (state_23856[12]);var inst_23794 = (state_23856[13]);var inst_23809 = (state_23856[2]);var inst_23810 = (inst_23795 + 1);var tmp23924 = inst_23792;var tmp23925 = inst_23793;var tmp23926 = inst_23794;var inst_23792__$1 = tmp23924;var inst_23793__$1 = tmp23925;var inst_23794__$1 = tmp23926;var inst_23795__$1 = inst_23810;var state_23856__$1 = (function (){var statearr_23931 = state_23856;(statearr_23931[10] = inst_23792__$1);
(statearr_23931[11] = inst_23793__$1);
(statearr_23931[31] = inst_23809);
(statearr_23931[12] = inst_23795__$1);
(statearr_23931[13] = inst_23794__$1);
return statearr_23931;
})();var statearr_23932_23993 = state_23856__$1;(statearr_23932_23993[2] = null);
(statearr_23932_23993[1] = 25);
return cljs.core.constant$keyword$193;
} else
{if((state_val_23857 === 31))
{var inst_23800 = (state_23856[7]);var inst_23801 = (state_23856[2]);var inst_23802 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23803 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23800);var state_23856__$1 = (function (){var statearr_23933 = state_23856;(statearr_23933[32] = inst_23802);
(statearr_23933[33] = inst_23801);
return statearr_23933;
})();var statearr_23934_23994 = state_23856__$1;(statearr_23934_23994[2] = inst_23803);
cljs.core.async.impl.ioc_helpers.process_exception(state_23856__$1);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_23938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23938[0] = state_machine__5507__auto__);
(statearr_23938[1] = 1);
return statearr_23938;
});
var state_machine__5507__auto____1 = (function (state_23856){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_23856);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e23939){if((e23939 instanceof Object))
{var ex__5510__auto__ = e23939;var statearr_23940_23995 = state_23856;(statearr_23940_23995[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23856);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e23939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__23996 = state_23856;
state_23856 = G__23996;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_23856){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_23856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_23941 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_23941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___23942);
return statearr_23941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj23998 = {};return obj23998;
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
{throw cljs.core.missing_protocol("Mix.admix*",m);
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
{throw cljs.core.missing_protocol("Mix.unmix*",m);
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
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol("Mix.toggle*",m);
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
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$200,null,cljs.core.constant$keyword$201,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$202);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$201);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$202,chs);var pauses = pick(cljs.core.constant$keyword$200,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$203,solos,cljs.core.constant$keyword$204,pick(cljs.core.constant$keyword$201,chs),cljs.core.constant$keyword$205,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$200)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24108 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24109){
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
this.meta24109 = meta24109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24108.cljs$lang$type = true;
cljs.core.async.t24108.cljs$lang$ctorStr = "cljs.core.async/t24108";
cljs.core.async.t24108.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24108");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24108.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24108.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24110){var self__ = this;
var _24110__$1 = this;return self__.meta24109;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24110,meta24109__$1){var self__ = this;
var _24110__$1 = this;return (new cljs.core.async.t24108(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24109__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24108 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24108(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24109){return (new cljs.core.async.t24108(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24109));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24108(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___24217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24175){var state_val_24176 = (state_24175[1]);if((state_val_24176 === 1))
{var inst_24114 = (state_24175[7]);var inst_24114__$1 = calc_state();var inst_24115 = cljs.core.seq_QMARK_(inst_24114__$1);var state_24175__$1 = (function (){var statearr_24177 = state_24175;(statearr_24177[7] = inst_24114__$1);
return statearr_24177;
})();if(inst_24115)
{var statearr_24178_24218 = state_24175__$1;(statearr_24178_24218[1] = 2);
} else
{var statearr_24179_24219 = state_24175__$1;(statearr_24179_24219[1] = 3);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 2))
{var inst_24114 = (state_24175[7]);var inst_24117 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24114);var state_24175__$1 = state_24175;var statearr_24180_24220 = state_24175__$1;(statearr_24180_24220[2] = inst_24117);
(statearr_24180_24220[1] = 4);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 3))
{var inst_24114 = (state_24175[7]);var state_24175__$1 = state_24175;var statearr_24181_24221 = state_24175__$1;(statearr_24181_24221[2] = inst_24114);
(statearr_24181_24221[1] = 4);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 4))
{var inst_24114 = (state_24175[7]);var inst_24120 = (state_24175[2]);var inst_24121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24120,cljs.core.constant$keyword$205);var inst_24122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24120,cljs.core.constant$keyword$204);var inst_24123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24120,cljs.core.constant$keyword$203);var inst_24124 = inst_24114;var state_24175__$1 = (function (){var statearr_24182 = state_24175;(statearr_24182[8] = inst_24122);
(statearr_24182[9] = inst_24123);
(statearr_24182[10] = inst_24121);
(statearr_24182[11] = inst_24124);
return statearr_24182;
})();var statearr_24183_24222 = state_24175__$1;(statearr_24183_24222[2] = null);
(statearr_24183_24222[1] = 5);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 5))
{var inst_24124 = (state_24175[11]);var inst_24127 = cljs.core.seq_QMARK_(inst_24124);var state_24175__$1 = state_24175;if(inst_24127)
{var statearr_24184_24223 = state_24175__$1;(statearr_24184_24223[1] = 7);
} else
{var statearr_24185_24224 = state_24175__$1;(statearr_24185_24224[1] = 8);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 6))
{var inst_24173 = (state_24175[2]);var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.return_chan(state_24175__$1,inst_24173);
} else
{if((state_val_24176 === 7))
{var inst_24124 = (state_24175[11]);var inst_24129 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24124);var state_24175__$1 = state_24175;var statearr_24186_24225 = state_24175__$1;(statearr_24186_24225[2] = inst_24129);
(statearr_24186_24225[1] = 9);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 8))
{var inst_24124 = (state_24175[11]);var state_24175__$1 = state_24175;var statearr_24187_24226 = state_24175__$1;(statearr_24187_24226[2] = inst_24124);
(statearr_24187_24226[1] = 9);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 9))
{var inst_24132 = (state_24175[12]);var inst_24132__$1 = (state_24175[2]);var inst_24133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24132__$1,cljs.core.constant$keyword$205);var inst_24134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24132__$1,cljs.core.constant$keyword$204);var inst_24135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24132__$1,cljs.core.constant$keyword$203);var state_24175__$1 = (function (){var statearr_24188 = state_24175;(statearr_24188[13] = inst_24135);
(statearr_24188[14] = inst_24134);
(statearr_24188[12] = inst_24132__$1);
return statearr_24188;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24175__$1,10,inst_24133);
} else
{if((state_val_24176 === 10))
{var inst_24140 = (state_24175[15]);var inst_24139 = (state_24175[16]);var inst_24138 = (state_24175[2]);var inst_24139__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24138,0,null);var inst_24140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24138,1,null);var inst_24141 = (inst_24139__$1 == null);var inst_24142 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24140__$1,change);var inst_24143 = (inst_24141) || (inst_24142);var state_24175__$1 = (function (){var statearr_24189 = state_24175;(statearr_24189[15] = inst_24140__$1);
(statearr_24189[16] = inst_24139__$1);
return statearr_24189;
})();if(cljs.core.truth_(inst_24143))
{var statearr_24190_24227 = state_24175__$1;(statearr_24190_24227[1] = 11);
} else
{var statearr_24191_24228 = state_24175__$1;(statearr_24191_24228[1] = 12);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 11))
{var inst_24139 = (state_24175[16]);var inst_24145 = (inst_24139 == null);var state_24175__$1 = state_24175;if(cljs.core.truth_(inst_24145))
{var statearr_24192_24229 = state_24175__$1;(statearr_24192_24229[1] = 14);
} else
{var statearr_24193_24230 = state_24175__$1;(statearr_24193_24230[1] = 15);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 12))
{var inst_24135 = (state_24175[13]);var inst_24140 = (state_24175[15]);var inst_24154 = (state_24175[17]);var inst_24154__$1 = (inst_24135.cljs$core$IFn$_invoke$arity$1 ? inst_24135.cljs$core$IFn$_invoke$arity$1(inst_24140) : inst_24135.call(null,inst_24140));var state_24175__$1 = (function (){var statearr_24194 = state_24175;(statearr_24194[17] = inst_24154__$1);
return statearr_24194;
})();if(cljs.core.truth_(inst_24154__$1))
{var statearr_24195_24231 = state_24175__$1;(statearr_24195_24231[1] = 17);
} else
{var statearr_24196_24232 = state_24175__$1;(statearr_24196_24232[1] = 18);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 13))
{var inst_24171 = (state_24175[2]);var state_24175__$1 = state_24175;var statearr_24197_24233 = state_24175__$1;(statearr_24197_24233[2] = inst_24171);
(statearr_24197_24233[1] = 6);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 14))
{var inst_24140 = (state_24175[15]);var inst_24147 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24140);var state_24175__$1 = state_24175;var statearr_24198_24234 = state_24175__$1;(statearr_24198_24234[2] = inst_24147);
(statearr_24198_24234[1] = 16);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 15))
{var state_24175__$1 = state_24175;var statearr_24199_24235 = state_24175__$1;(statearr_24199_24235[2] = null);
(statearr_24199_24235[1] = 16);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 16))
{var inst_24150 = (state_24175[2]);var inst_24151 = calc_state();var inst_24124 = inst_24151;var state_24175__$1 = (function (){var statearr_24200 = state_24175;(statearr_24200[11] = inst_24124);
(statearr_24200[18] = inst_24150);
return statearr_24200;
})();var statearr_24201_24236 = state_24175__$1;(statearr_24201_24236[2] = null);
(statearr_24201_24236[1] = 5);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 17))
{var inst_24154 = (state_24175[17]);var state_24175__$1 = state_24175;var statearr_24202_24237 = state_24175__$1;(statearr_24202_24237[2] = inst_24154);
(statearr_24202_24237[1] = 19);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 18))
{var inst_24135 = (state_24175[13]);var inst_24134 = (state_24175[14]);var inst_24140 = (state_24175[15]);var inst_24157 = cljs.core.empty_QMARK_(inst_24135);var inst_24158 = (inst_24134.cljs$core$IFn$_invoke$arity$1 ? inst_24134.cljs$core$IFn$_invoke$arity$1(inst_24140) : inst_24134.call(null,inst_24140));var inst_24159 = cljs.core.not(inst_24158);var inst_24160 = (inst_24157) && (inst_24159);var state_24175__$1 = state_24175;var statearr_24203_24238 = state_24175__$1;(statearr_24203_24238[2] = inst_24160);
(statearr_24203_24238[1] = 19);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 19))
{var inst_24162 = (state_24175[2]);var state_24175__$1 = state_24175;if(cljs.core.truth_(inst_24162))
{var statearr_24204_24239 = state_24175__$1;(statearr_24204_24239[1] = 20);
} else
{var statearr_24205_24240 = state_24175__$1;(statearr_24205_24240[1] = 21);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 20))
{var inst_24139 = (state_24175[16]);var state_24175__$1 = state_24175;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24175__$1,23,out,inst_24139);
} else
{if((state_val_24176 === 21))
{var state_24175__$1 = state_24175;var statearr_24206_24241 = state_24175__$1;(statearr_24206_24241[2] = null);
(statearr_24206_24241[1] = 22);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 22))
{var inst_24132 = (state_24175[12]);var inst_24168 = (state_24175[2]);var inst_24124 = inst_24132;var state_24175__$1 = (function (){var statearr_24207 = state_24175;(statearr_24207[11] = inst_24124);
(statearr_24207[19] = inst_24168);
return statearr_24207;
})();var statearr_24208_24242 = state_24175__$1;(statearr_24208_24242[2] = null);
(statearr_24208_24242[1] = 5);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24176 === 23))
{var inst_24165 = (state_24175[2]);var state_24175__$1 = state_24175;var statearr_24209_24243 = state_24175__$1;(statearr_24209_24243[2] = inst_24165);
(statearr_24209_24243[1] = 22);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_24213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24213[0] = state_machine__5507__auto__);
(statearr_24213[1] = 1);
return statearr_24213;
});
var state_machine__5507__auto____1 = (function (state_24175){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24175);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24214){if((e24214 instanceof Object))
{var ex__5510__auto__ = e24214;var statearr_24215_24244 = state_24175;(statearr_24215_24244[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24175);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e24214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__24245 = state_24175;
state_24175 = G__24245;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24216 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24217);
return statearr_24216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj24247 = {};return obj24247;
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
{throw cljs.core.missing_protocol("Pub.sub*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3406__auto__,mults){
return (function (p1__24248_SHARP_){if(cljs.core.truth_((p1__24248_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24248_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24248_SHARP_.call(null,topic))))
{return p1__24248_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24248_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24373 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24373 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24374){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24374 = meta24374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24373.cljs$lang$type = true;
cljs.core.async.t24373.cljs$lang$ctorStr = "cljs.core.async/t24373";
cljs.core.async.t24373.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24373");
});})(mults,ensure_mult))
;
cljs.core.async.t24373.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24373.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24373.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24373.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24373.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24373.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24375){var self__ = this;
var _24375__$1 = this;return self__.meta24374;
});})(mults,ensure_mult))
;
cljs.core.async.t24373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24375,meta24374__$1){var self__ = this;
var _24375__$1 = this;return (new cljs.core.async.t24373(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24374__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24373 = ((function (mults,ensure_mult){
return (function __GT_t24373(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24374){return (new cljs.core.async.t24373(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24374));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24373(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___24497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24449){var state_val_24450 = (state_24449[1]);if((state_val_24450 === 1))
{var state_24449__$1 = state_24449;var statearr_24451_24498 = state_24449__$1;(statearr_24451_24498[2] = null);
(statearr_24451_24498[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 2))
{var state_24449__$1 = state_24449;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24449__$1,4,ch);
} else
{if((state_val_24450 === 3))
{var inst_24447 = (state_24449[2]);var state_24449__$1 = state_24449;return cljs.core.async.impl.ioc_helpers.return_chan(state_24449__$1,inst_24447);
} else
{if((state_val_24450 === 4))
{var inst_24378 = (state_24449[7]);var inst_24378__$1 = (state_24449[2]);var inst_24379 = (inst_24378__$1 == null);var state_24449__$1 = (function (){var statearr_24452 = state_24449;(statearr_24452[7] = inst_24378__$1);
return statearr_24452;
})();if(cljs.core.truth_(inst_24379))
{var statearr_24453_24499 = state_24449__$1;(statearr_24453_24499[1] = 5);
} else
{var statearr_24454_24500 = state_24449__$1;(statearr_24454_24500[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 5))
{var inst_24385 = cljs.core.deref(mults);var inst_24386 = cljs.core.vals(inst_24385);var inst_24387 = cljs.core.seq(inst_24386);var inst_24388 = inst_24387;var inst_24389 = null;var inst_24390 = 0;var inst_24391 = 0;var state_24449__$1 = (function (){var statearr_24455 = state_24449;(statearr_24455[8] = inst_24390);
(statearr_24455[9] = inst_24391);
(statearr_24455[10] = inst_24389);
(statearr_24455[11] = inst_24388);
return statearr_24455;
})();var statearr_24456_24501 = state_24449__$1;(statearr_24456_24501[2] = null);
(statearr_24456_24501[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 6))
{var inst_24378 = (state_24449[7]);var inst_24426 = (state_24449[12]);var inst_24428 = (state_24449[13]);var inst_24426__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24378) : topic_fn.call(null,inst_24378));var inst_24427 = cljs.core.deref(mults);var inst_24428__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24427,inst_24426__$1);var state_24449__$1 = (function (){var statearr_24457 = state_24449;(statearr_24457[12] = inst_24426__$1);
(statearr_24457[13] = inst_24428__$1);
return statearr_24457;
})();if(cljs.core.truth_(inst_24428__$1))
{var statearr_24458_24502 = state_24449__$1;(statearr_24458_24502[1] = 19);
} else
{var statearr_24459_24503 = state_24449__$1;(statearr_24459_24503[1] = 20);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 7))
{var inst_24445 = (state_24449[2]);var state_24449__$1 = state_24449;var statearr_24460_24504 = state_24449__$1;(statearr_24460_24504[2] = inst_24445);
(statearr_24460_24504[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 8))
{var inst_24390 = (state_24449[8]);var inst_24391 = (state_24449[9]);var inst_24393 = (inst_24391 < inst_24390);var inst_24394 = inst_24393;var state_24449__$1 = state_24449;if(cljs.core.truth_(inst_24394))
{var statearr_24464_24505 = state_24449__$1;(statearr_24464_24505[1] = 10);
} else
{var statearr_24465_24506 = state_24449__$1;(statearr_24465_24506[1] = 11);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 9))
{var inst_24424 = (state_24449[2]);var state_24449__$1 = state_24449;var statearr_24466_24507 = state_24449__$1;(statearr_24466_24507[2] = inst_24424);
(statearr_24466_24507[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 10))
{var inst_24390 = (state_24449[8]);var inst_24391 = (state_24449[9]);var inst_24389 = (state_24449[10]);var inst_24388 = (state_24449[11]);var inst_24396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24389,inst_24391);var inst_24397 = cljs.core.async.muxch_STAR_(inst_24396);var inst_24398 = cljs.core.async.close_BANG_(inst_24397);var inst_24399 = (inst_24391 + 1);var tmp24461 = inst_24390;var tmp24462 = inst_24389;var tmp24463 = inst_24388;var inst_24388__$1 = tmp24463;var inst_24389__$1 = tmp24462;var inst_24390__$1 = tmp24461;var inst_24391__$1 = inst_24399;var state_24449__$1 = (function (){var statearr_24467 = state_24449;(statearr_24467[8] = inst_24390__$1);
(statearr_24467[14] = inst_24398);
(statearr_24467[9] = inst_24391__$1);
(statearr_24467[10] = inst_24389__$1);
(statearr_24467[11] = inst_24388__$1);
return statearr_24467;
})();var statearr_24468_24508 = state_24449__$1;(statearr_24468_24508[2] = null);
(statearr_24468_24508[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 11))
{var inst_24402 = (state_24449[15]);var inst_24388 = (state_24449[11]);var inst_24402__$1 = cljs.core.seq(inst_24388);var state_24449__$1 = (function (){var statearr_24469 = state_24449;(statearr_24469[15] = inst_24402__$1);
return statearr_24469;
})();if(inst_24402__$1)
{var statearr_24470_24509 = state_24449__$1;(statearr_24470_24509[1] = 13);
} else
{var statearr_24471_24510 = state_24449__$1;(statearr_24471_24510[1] = 14);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 12))
{var inst_24422 = (state_24449[2]);var state_24449__$1 = state_24449;var statearr_24472_24511 = state_24449__$1;(statearr_24472_24511[2] = inst_24422);
(statearr_24472_24511[1] = 9);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 13))
{var inst_24402 = (state_24449[15]);var inst_24404 = cljs.core.chunked_seq_QMARK_(inst_24402);var state_24449__$1 = state_24449;if(inst_24404)
{var statearr_24473_24512 = state_24449__$1;(statearr_24473_24512[1] = 16);
} else
{var statearr_24474_24513 = state_24449__$1;(statearr_24474_24513[1] = 17);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 14))
{var state_24449__$1 = state_24449;var statearr_24475_24514 = state_24449__$1;(statearr_24475_24514[2] = null);
(statearr_24475_24514[1] = 15);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 15))
{var inst_24420 = (state_24449[2]);var state_24449__$1 = state_24449;var statearr_24476_24515 = state_24449__$1;(statearr_24476_24515[2] = inst_24420);
(statearr_24476_24515[1] = 12);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 16))
{var inst_24402 = (state_24449[15]);var inst_24406 = cljs.core.chunk_first(inst_24402);var inst_24407 = cljs.core.chunk_rest(inst_24402);var inst_24408 = cljs.core.count(inst_24406);var inst_24388 = inst_24407;var inst_24389 = inst_24406;var inst_24390 = inst_24408;var inst_24391 = 0;var state_24449__$1 = (function (){var statearr_24477 = state_24449;(statearr_24477[8] = inst_24390);
(statearr_24477[9] = inst_24391);
(statearr_24477[10] = inst_24389);
(statearr_24477[11] = inst_24388);
return statearr_24477;
})();var statearr_24478_24516 = state_24449__$1;(statearr_24478_24516[2] = null);
(statearr_24478_24516[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 17))
{var inst_24402 = (state_24449[15]);var inst_24411 = cljs.core.first(inst_24402);var inst_24412 = cljs.core.async.muxch_STAR_(inst_24411);var inst_24413 = cljs.core.async.close_BANG_(inst_24412);var inst_24414 = cljs.core.next(inst_24402);var inst_24388 = inst_24414;var inst_24389 = null;var inst_24390 = 0;var inst_24391 = 0;var state_24449__$1 = (function (){var statearr_24479 = state_24449;(statearr_24479[8] = inst_24390);
(statearr_24479[16] = inst_24413);
(statearr_24479[9] = inst_24391);
(statearr_24479[10] = inst_24389);
(statearr_24479[11] = inst_24388);
return statearr_24479;
})();var statearr_24480_24517 = state_24449__$1;(statearr_24480_24517[2] = null);
(statearr_24480_24517[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 18))
{var inst_24417 = (state_24449[2]);var state_24449__$1 = state_24449;var statearr_24481_24518 = state_24449__$1;(statearr_24481_24518[2] = inst_24417);
(statearr_24481_24518[1] = 15);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 19))
{var state_24449__$1 = state_24449;var statearr_24482_24519 = state_24449__$1;(statearr_24482_24519[2] = null);
(statearr_24482_24519[1] = 24);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 20))
{var state_24449__$1 = state_24449;var statearr_24483_24520 = state_24449__$1;(statearr_24483_24520[2] = null);
(statearr_24483_24520[1] = 21);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 21))
{var inst_24442 = (state_24449[2]);var state_24449__$1 = (function (){var statearr_24484 = state_24449;(statearr_24484[17] = inst_24442);
return statearr_24484;
})();var statearr_24485_24521 = state_24449__$1;(statearr_24485_24521[2] = null);
(statearr_24485_24521[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 22))
{var inst_24439 = (state_24449[2]);var state_24449__$1 = state_24449;var statearr_24486_24522 = state_24449__$1;(statearr_24486_24522[2] = inst_24439);
(statearr_24486_24522[1] = 21);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 23))
{var inst_24426 = (state_24449[12]);var inst_24430 = (state_24449[2]);var inst_24431 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24426);var state_24449__$1 = (function (){var statearr_24487 = state_24449;(statearr_24487[18] = inst_24430);
return statearr_24487;
})();var statearr_24488_24523 = state_24449__$1;(statearr_24488_24523[2] = inst_24431);
cljs.core.async.impl.ioc_helpers.process_exception(state_24449__$1);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24450 === 24))
{var inst_24378 = (state_24449[7]);var inst_24428 = (state_24449[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24449,23,Object,null,22);var inst_24435 = cljs.core.async.muxch_STAR_(inst_24428);var state_24449__$1 = state_24449;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24449__$1,25,inst_24435,inst_24378);
} else
{if((state_val_24450 === 25))
{var inst_24437 = (state_24449[2]);var state_24449__$1 = state_24449;var statearr_24489_24524 = state_24449__$1;(statearr_24489_24524[2] = inst_24437);
cljs.core.async.impl.ioc_helpers.process_exception(state_24449__$1);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_24493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24493[0] = state_machine__5507__auto__);
(statearr_24493[1] = 1);
return statearr_24493;
});
var state_machine__5507__auto____1 = (function (state_24449){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24449);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24494){if((e24494 instanceof Object))
{var ex__5510__auto__ = e24494;var statearr_24495_24525 = state_24449;(statearr_24495_24525[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24449);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e24494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__24526 = state_24449;
state_24449 = G__24526;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24449){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24496 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24497);
return statearr_24496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___24663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24633){var state_val_24634 = (state_24633[1]);if((state_val_24634 === 1))
{var state_24633__$1 = state_24633;var statearr_24635_24664 = state_24633__$1;(statearr_24635_24664[2] = null);
(statearr_24635_24664[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 2))
{var inst_24596 = cljs.core.reset_BANG_(dctr,cnt);var inst_24597 = 0;var state_24633__$1 = (function (){var statearr_24636 = state_24633;(statearr_24636[7] = inst_24597);
(statearr_24636[8] = inst_24596);
return statearr_24636;
})();var statearr_24637_24665 = state_24633__$1;(statearr_24637_24665[2] = null);
(statearr_24637_24665[1] = 4);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 3))
{var inst_24631 = (state_24633[2]);var state_24633__$1 = state_24633;return cljs.core.async.impl.ioc_helpers.return_chan(state_24633__$1,inst_24631);
} else
{if((state_val_24634 === 4))
{var inst_24597 = (state_24633[7]);var inst_24599 = (inst_24597 < cnt);var state_24633__$1 = state_24633;if(cljs.core.truth_(inst_24599))
{var statearr_24638_24666 = state_24633__$1;(statearr_24638_24666[1] = 6);
} else
{var statearr_24639_24667 = state_24633__$1;(statearr_24639_24667[1] = 7);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 5))
{var inst_24617 = (state_24633[2]);var state_24633__$1 = (function (){var statearr_24640 = state_24633;(statearr_24640[9] = inst_24617);
return statearr_24640;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24633__$1,12,dchan);
} else
{if((state_val_24634 === 6))
{var state_24633__$1 = state_24633;var statearr_24641_24668 = state_24633__$1;(statearr_24641_24668[2] = null);
(statearr_24641_24668[1] = 11);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 7))
{var state_24633__$1 = state_24633;var statearr_24642_24669 = state_24633__$1;(statearr_24642_24669[2] = null);
(statearr_24642_24669[1] = 8);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 8))
{var inst_24615 = (state_24633[2]);var state_24633__$1 = state_24633;var statearr_24643_24670 = state_24633__$1;(statearr_24643_24670[2] = inst_24615);
(statearr_24643_24670[1] = 5);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 9))
{var inst_24597 = (state_24633[7]);var inst_24610 = (state_24633[2]);var inst_24611 = (inst_24597 + 1);var inst_24597__$1 = inst_24611;var state_24633__$1 = (function (){var statearr_24644 = state_24633;(statearr_24644[10] = inst_24610);
(statearr_24644[7] = inst_24597__$1);
return statearr_24644;
})();var statearr_24645_24671 = state_24633__$1;(statearr_24645_24671[2] = null);
(statearr_24645_24671[1] = 4);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 10))
{var inst_24601 = (state_24633[2]);var inst_24602 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24633__$1 = (function (){var statearr_24646 = state_24633;(statearr_24646[11] = inst_24601);
return statearr_24646;
})();var statearr_24647_24672 = state_24633__$1;(statearr_24647_24672[2] = inst_24602);
cljs.core.async.impl.ioc_helpers.process_exception(state_24633__$1);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 11))
{var inst_24597 = (state_24633[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24633,10,Object,null,9);var inst_24606 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24597) : chs__$1.call(null,inst_24597));var inst_24607 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24597) : done.call(null,inst_24597));var inst_24608 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24606,inst_24607);var state_24633__$1 = state_24633;var statearr_24648_24673 = state_24633__$1;(statearr_24648_24673[2] = inst_24608);
cljs.core.async.impl.ioc_helpers.process_exception(state_24633__$1);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 12))
{var inst_24619 = (state_24633[12]);var inst_24619__$1 = (state_24633[2]);var inst_24620 = cljs.core.some(cljs.core.nil_QMARK_,inst_24619__$1);var state_24633__$1 = (function (){var statearr_24649 = state_24633;(statearr_24649[12] = inst_24619__$1);
return statearr_24649;
})();if(cljs.core.truth_(inst_24620))
{var statearr_24650_24674 = state_24633__$1;(statearr_24650_24674[1] = 13);
} else
{var statearr_24651_24675 = state_24633__$1;(statearr_24651_24675[1] = 14);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 13))
{var inst_24622 = cljs.core.async.close_BANG_(out);var state_24633__$1 = state_24633;var statearr_24652_24676 = state_24633__$1;(statearr_24652_24676[2] = inst_24622);
(statearr_24652_24676[1] = 15);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 14))
{var inst_24619 = (state_24633[12]);var inst_24624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24619);var state_24633__$1 = state_24633;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24633__$1,16,out,inst_24624);
} else
{if((state_val_24634 === 15))
{var inst_24629 = (state_24633[2]);var state_24633__$1 = state_24633;var statearr_24653_24677 = state_24633__$1;(statearr_24653_24677[2] = inst_24629);
(statearr_24653_24677[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24634 === 16))
{var inst_24626 = (state_24633[2]);var state_24633__$1 = (function (){var statearr_24654 = state_24633;(statearr_24654[13] = inst_24626);
return statearr_24654;
})();var statearr_24655_24678 = state_24633__$1;(statearr_24655_24678[2] = null);
(statearr_24655_24678[1] = 2);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_24659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24659[0] = state_machine__5507__auto__);
(statearr_24659[1] = 1);
return statearr_24659;
});
var state_machine__5507__auto____1 = (function (state_24633){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24633);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24660){if((e24660 instanceof Object))
{var ex__5510__auto__ = e24660;var statearr_24661_24679 = state_24633;(statearr_24661_24679[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24633);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e24660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__24680 = state_24633;
state_24633 = G__24680;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24633){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24662 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24663);
return statearr_24662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24764){var state_val_24765 = (state_24764[1]);if((state_val_24765 === 1))
{var inst_24735 = cljs.core.vec(chs);var inst_24736 = inst_24735;var state_24764__$1 = (function (){var statearr_24766 = state_24764;(statearr_24766[7] = inst_24736);
return statearr_24766;
})();var statearr_24767_24789 = state_24764__$1;(statearr_24767_24789[2] = null);
(statearr_24767_24789[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24765 === 2))
{var inst_24736 = (state_24764[7]);var inst_24738 = cljs.core.count(inst_24736);var inst_24739 = (inst_24738 > 0);var state_24764__$1 = state_24764;if(cljs.core.truth_(inst_24739))
{var statearr_24768_24790 = state_24764__$1;(statearr_24768_24790[1] = 4);
} else
{var statearr_24769_24791 = state_24764__$1;(statearr_24769_24791[1] = 5);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24765 === 3))
{var inst_24762 = (state_24764[2]);var state_24764__$1 = state_24764;return cljs.core.async.impl.ioc_helpers.return_chan(state_24764__$1,inst_24762);
} else
{if((state_val_24765 === 4))
{var inst_24736 = (state_24764[7]);var state_24764__$1 = state_24764;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24764__$1,7,inst_24736);
} else
{if((state_val_24765 === 5))
{var inst_24758 = cljs.core.async.close_BANG_(out);var state_24764__$1 = state_24764;var statearr_24770_24792 = state_24764__$1;(statearr_24770_24792[2] = inst_24758);
(statearr_24770_24792[1] = 6);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24765 === 6))
{var inst_24760 = (state_24764[2]);var state_24764__$1 = state_24764;var statearr_24771_24793 = state_24764__$1;(statearr_24771_24793[2] = inst_24760);
(statearr_24771_24793[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24765 === 7))
{var inst_24744 = (state_24764[8]);var inst_24743 = (state_24764[9]);var inst_24743__$1 = (state_24764[2]);var inst_24744__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24743__$1,0,null);var inst_24745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24743__$1,1,null);var inst_24746 = (inst_24744__$1 == null);var state_24764__$1 = (function (){var statearr_24772 = state_24764;(statearr_24772[8] = inst_24744__$1);
(statearr_24772[10] = inst_24745);
(statearr_24772[9] = inst_24743__$1);
return statearr_24772;
})();if(cljs.core.truth_(inst_24746))
{var statearr_24773_24794 = state_24764__$1;(statearr_24773_24794[1] = 8);
} else
{var statearr_24774_24795 = state_24764__$1;(statearr_24774_24795[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24765 === 8))
{var inst_24744 = (state_24764[8]);var inst_24745 = (state_24764[10]);var inst_24743 = (state_24764[9]);var inst_24736 = (state_24764[7]);var inst_24748 = (function (){var c = inst_24745;var v = inst_24744;var vec__24741 = inst_24743;var cs = inst_24736;return ((function (c,v,vec__24741,cs,inst_24744,inst_24745,inst_24743,inst_24736,state_val_24765){
return (function (p1__24681_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24681_SHARP_);
});
;})(c,v,vec__24741,cs,inst_24744,inst_24745,inst_24743,inst_24736,state_val_24765))
})();var inst_24749 = cljs.core.filterv(inst_24748,inst_24736);var inst_24736__$1 = inst_24749;var state_24764__$1 = (function (){var statearr_24775 = state_24764;(statearr_24775[7] = inst_24736__$1);
return statearr_24775;
})();var statearr_24776_24796 = state_24764__$1;(statearr_24776_24796[2] = null);
(statearr_24776_24796[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24765 === 9))
{var inst_24744 = (state_24764[8]);var state_24764__$1 = state_24764;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24764__$1,11,out,inst_24744);
} else
{if((state_val_24765 === 10))
{var inst_24756 = (state_24764[2]);var state_24764__$1 = state_24764;var statearr_24778_24797 = state_24764__$1;(statearr_24778_24797[2] = inst_24756);
(statearr_24778_24797[1] = 6);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24765 === 11))
{var inst_24736 = (state_24764[7]);var inst_24753 = (state_24764[2]);var tmp24777 = inst_24736;var inst_24736__$1 = tmp24777;var state_24764__$1 = (function (){var statearr_24779 = state_24764;(statearr_24779[11] = inst_24753);
(statearr_24779[7] = inst_24736__$1);
return statearr_24779;
})();var statearr_24780_24798 = state_24764__$1;(statearr_24780_24798[2] = null);
(statearr_24780_24798[1] = 2);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_24784 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24784[0] = state_machine__5507__auto__);
(statearr_24784[1] = 1);
return statearr_24784;
});
var state_machine__5507__auto____1 = (function (state_24764){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24764);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24785){if((e24785 instanceof Object))
{var ex__5510__auto__ = e24785;var statearr_24786_24799 = state_24764;(statearr_24786_24799[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24764);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e24785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__24800 = state_24764;
state_24764 = G__24800;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24764){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24787 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24788);
return statearr_24787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24870){var state_val_24871 = (state_24870[1]);if((state_val_24871 === 1))
{var inst_24847 = 0;var state_24870__$1 = (function (){var statearr_24872 = state_24870;(statearr_24872[7] = inst_24847);
return statearr_24872;
})();var statearr_24873_24894 = state_24870__$1;(statearr_24873_24894[2] = null);
(statearr_24873_24894[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24871 === 2))
{var inst_24847 = (state_24870[7]);var inst_24849 = (inst_24847 < n);var state_24870__$1 = state_24870;if(cljs.core.truth_(inst_24849))
{var statearr_24874_24895 = state_24870__$1;(statearr_24874_24895[1] = 4);
} else
{var statearr_24875_24896 = state_24870__$1;(statearr_24875_24896[1] = 5);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24871 === 3))
{var inst_24867 = (state_24870[2]);var inst_24868 = cljs.core.async.close_BANG_(out);var state_24870__$1 = (function (){var statearr_24876 = state_24870;(statearr_24876[8] = inst_24867);
return statearr_24876;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24870__$1,inst_24868);
} else
{if((state_val_24871 === 4))
{var state_24870__$1 = state_24870;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24870__$1,7,ch);
} else
{if((state_val_24871 === 5))
{var state_24870__$1 = state_24870;var statearr_24877_24897 = state_24870__$1;(statearr_24877_24897[2] = null);
(statearr_24877_24897[1] = 6);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24871 === 6))
{var inst_24865 = (state_24870[2]);var state_24870__$1 = state_24870;var statearr_24878_24898 = state_24870__$1;(statearr_24878_24898[2] = inst_24865);
(statearr_24878_24898[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24871 === 7))
{var inst_24852 = (state_24870[9]);var inst_24852__$1 = (state_24870[2]);var inst_24853 = (inst_24852__$1 == null);var inst_24854 = cljs.core.not(inst_24853);var state_24870__$1 = (function (){var statearr_24879 = state_24870;(statearr_24879[9] = inst_24852__$1);
return statearr_24879;
})();if(inst_24854)
{var statearr_24880_24899 = state_24870__$1;(statearr_24880_24899[1] = 8);
} else
{var statearr_24881_24900 = state_24870__$1;(statearr_24881_24900[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24871 === 8))
{var inst_24852 = (state_24870[9]);var state_24870__$1 = state_24870;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24870__$1,11,out,inst_24852);
} else
{if((state_val_24871 === 9))
{var state_24870__$1 = state_24870;var statearr_24882_24901 = state_24870__$1;(statearr_24882_24901[2] = null);
(statearr_24882_24901[1] = 10);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24871 === 10))
{var inst_24862 = (state_24870[2]);var state_24870__$1 = state_24870;var statearr_24883_24902 = state_24870__$1;(statearr_24883_24902[2] = inst_24862);
(statearr_24883_24902[1] = 6);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24871 === 11))
{var inst_24847 = (state_24870[7]);var inst_24857 = (state_24870[2]);var inst_24858 = (inst_24847 + 1);var inst_24847__$1 = inst_24858;var state_24870__$1 = (function (){var statearr_24884 = state_24870;(statearr_24884[7] = inst_24847__$1);
(statearr_24884[10] = inst_24857);
return statearr_24884;
})();var statearr_24885_24903 = state_24870__$1;(statearr_24885_24903[2] = null);
(statearr_24885_24903[1] = 2);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_24889 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24889[0] = state_machine__5507__auto__);
(statearr_24889[1] = 1);
return statearr_24889;
});
var state_machine__5507__auto____1 = (function (state_24870){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24870);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24890){if((e24890 instanceof Object))
{var ex__5510__auto__ = e24890;var statearr_24891_24904 = state_24870;(statearr_24891_24904[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24870);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e24890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__24905 = state_24870;
state_24870 = G__24905;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24870){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24892 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24893);
return statearr_24892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24977){var state_val_24978 = (state_24977[1]);if((state_val_24978 === 1))
{var inst_24954 = null;var state_24977__$1 = (function (){var statearr_24979 = state_24977;(statearr_24979[7] = inst_24954);
return statearr_24979;
})();var statearr_24980_25003 = state_24977__$1;(statearr_24980_25003[2] = null);
(statearr_24980_25003[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24978 === 2))
{var state_24977__$1 = state_24977;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24977__$1,4,ch);
} else
{if((state_val_24978 === 3))
{var inst_24974 = (state_24977[2]);var inst_24975 = cljs.core.async.close_BANG_(out);var state_24977__$1 = (function (){var statearr_24981 = state_24977;(statearr_24981[8] = inst_24974);
return statearr_24981;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_24977__$1,inst_24975);
} else
{if((state_val_24978 === 4))
{var inst_24957 = (state_24977[9]);var inst_24957__$1 = (state_24977[2]);var inst_24958 = (inst_24957__$1 == null);var inst_24959 = cljs.core.not(inst_24958);var state_24977__$1 = (function (){var statearr_24982 = state_24977;(statearr_24982[9] = inst_24957__$1);
return statearr_24982;
})();if(inst_24959)
{var statearr_24983_25004 = state_24977__$1;(statearr_24983_25004[1] = 5);
} else
{var statearr_24984_25005 = state_24977__$1;(statearr_24984_25005[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24978 === 5))
{var inst_24954 = (state_24977[7]);var inst_24957 = (state_24977[9]);var inst_24961 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24957,inst_24954);var state_24977__$1 = state_24977;if(inst_24961)
{var statearr_24985_25006 = state_24977__$1;(statearr_24985_25006[1] = 8);
} else
{var statearr_24986_25007 = state_24977__$1;(statearr_24986_25007[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_24978 === 6))
{var state_24977__$1 = state_24977;var statearr_24988_25008 = state_24977__$1;(statearr_24988_25008[2] = null);
(statearr_24988_25008[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24978 === 7))
{var inst_24972 = (state_24977[2]);var state_24977__$1 = state_24977;var statearr_24989_25009 = state_24977__$1;(statearr_24989_25009[2] = inst_24972);
(statearr_24989_25009[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24978 === 8))
{var inst_24954 = (state_24977[7]);var tmp24987 = inst_24954;var inst_24954__$1 = tmp24987;var state_24977__$1 = (function (){var statearr_24990 = state_24977;(statearr_24990[7] = inst_24954__$1);
return statearr_24990;
})();var statearr_24991_25010 = state_24977__$1;(statearr_24991_25010[2] = null);
(statearr_24991_25010[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24978 === 9))
{var inst_24957 = (state_24977[9]);var state_24977__$1 = state_24977;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24977__$1,11,out,inst_24957);
} else
{if((state_val_24978 === 10))
{var inst_24969 = (state_24977[2]);var state_24977__$1 = state_24977;var statearr_24992_25011 = state_24977__$1;(statearr_24992_25011[2] = inst_24969);
(statearr_24992_25011[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_24978 === 11))
{var inst_24957 = (state_24977[9]);var inst_24966 = (state_24977[2]);var inst_24954 = inst_24957;var state_24977__$1 = (function (){var statearr_24993 = state_24977;(statearr_24993[10] = inst_24966);
(statearr_24993[7] = inst_24954);
return statearr_24993;
})();var statearr_24994_25012 = state_24977__$1;(statearr_24994_25012[2] = null);
(statearr_24994_25012[1] = 2);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_24998 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24998[0] = state_machine__5507__auto__);
(statearr_24998[1] = 1);
return statearr_24998;
});
var state_machine__5507__auto____1 = (function (state_24977){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24977);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24999){if((e24999 instanceof Object))
{var ex__5510__auto__ = e24999;var statearr_25000_25013 = state_24977;(statearr_25000_25013[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24977);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e24999;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__25014 = state_24977;
state_24977 = G__25014;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24977){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25001 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25002);
return statearr_25001;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25119){var state_val_25120 = (state_25119[1]);if((state_val_25120 === 1))
{var inst_25082 = (new Array(n));var inst_25083 = inst_25082;var inst_25084 = 0;var state_25119__$1 = (function (){var statearr_25121 = state_25119;(statearr_25121[7] = inst_25083);
(statearr_25121[8] = inst_25084);
return statearr_25121;
})();var statearr_25122_25150 = state_25119__$1;(statearr_25122_25150[2] = null);
(statearr_25122_25150[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 2))
{var state_25119__$1 = state_25119;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25119__$1,4,ch);
} else
{if((state_val_25120 === 3))
{var inst_25117 = (state_25119[2]);var state_25119__$1 = state_25119;return cljs.core.async.impl.ioc_helpers.return_chan(state_25119__$1,inst_25117);
} else
{if((state_val_25120 === 4))
{var inst_25087 = (state_25119[9]);var inst_25087__$1 = (state_25119[2]);var inst_25088 = (inst_25087__$1 == null);var inst_25089 = cljs.core.not(inst_25088);var state_25119__$1 = (function (){var statearr_25123 = state_25119;(statearr_25123[9] = inst_25087__$1);
return statearr_25123;
})();if(inst_25089)
{var statearr_25124_25151 = state_25119__$1;(statearr_25124_25151[1] = 5);
} else
{var statearr_25125_25152 = state_25119__$1;(statearr_25125_25152[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 5))
{var inst_25083 = (state_25119[7]);var inst_25092 = (state_25119[10]);var inst_25084 = (state_25119[8]);var inst_25087 = (state_25119[9]);var inst_25091 = (inst_25083[inst_25084] = inst_25087);var inst_25092__$1 = (inst_25084 + 1);var inst_25093 = (inst_25092__$1 < n);var state_25119__$1 = (function (){var statearr_25126 = state_25119;(statearr_25126[11] = inst_25091);
(statearr_25126[10] = inst_25092__$1);
return statearr_25126;
})();if(cljs.core.truth_(inst_25093))
{var statearr_25127_25153 = state_25119__$1;(statearr_25127_25153[1] = 8);
} else
{var statearr_25128_25154 = state_25119__$1;(statearr_25128_25154[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 6))
{var inst_25084 = (state_25119[8]);var inst_25105 = (inst_25084 > 0);var state_25119__$1 = state_25119;if(cljs.core.truth_(inst_25105))
{var statearr_25130_25155 = state_25119__$1;(statearr_25130_25155[1] = 12);
} else
{var statearr_25131_25156 = state_25119__$1;(statearr_25131_25156[1] = 13);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 7))
{var inst_25115 = (state_25119[2]);var state_25119__$1 = state_25119;var statearr_25132_25157 = state_25119__$1;(statearr_25132_25157[2] = inst_25115);
(statearr_25132_25157[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 8))
{var inst_25083 = (state_25119[7]);var inst_25092 = (state_25119[10]);var tmp25129 = inst_25083;var inst_25083__$1 = tmp25129;var inst_25084 = inst_25092;var state_25119__$1 = (function (){var statearr_25133 = state_25119;(statearr_25133[7] = inst_25083__$1);
(statearr_25133[8] = inst_25084);
return statearr_25133;
})();var statearr_25134_25158 = state_25119__$1;(statearr_25134_25158[2] = null);
(statearr_25134_25158[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 9))
{var inst_25083 = (state_25119[7]);var inst_25097 = cljs.core.vec(inst_25083);var state_25119__$1 = state_25119;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25119__$1,11,out,inst_25097);
} else
{if((state_val_25120 === 10))
{var inst_25103 = (state_25119[2]);var state_25119__$1 = state_25119;var statearr_25135_25159 = state_25119__$1;(statearr_25135_25159[2] = inst_25103);
(statearr_25135_25159[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 11))
{var inst_25099 = (state_25119[2]);var inst_25100 = (new Array(n));var inst_25083 = inst_25100;var inst_25084 = 0;var state_25119__$1 = (function (){var statearr_25136 = state_25119;(statearr_25136[12] = inst_25099);
(statearr_25136[7] = inst_25083);
(statearr_25136[8] = inst_25084);
return statearr_25136;
})();var statearr_25137_25160 = state_25119__$1;(statearr_25137_25160[2] = null);
(statearr_25137_25160[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 12))
{var inst_25083 = (state_25119[7]);var inst_25107 = cljs.core.vec(inst_25083);var state_25119__$1 = state_25119;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25119__$1,15,out,inst_25107);
} else
{if((state_val_25120 === 13))
{var state_25119__$1 = state_25119;var statearr_25138_25161 = state_25119__$1;(statearr_25138_25161[2] = null);
(statearr_25138_25161[1] = 14);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 14))
{var inst_25112 = (state_25119[2]);var inst_25113 = cljs.core.async.close_BANG_(out);var state_25119__$1 = (function (){var statearr_25139 = state_25119;(statearr_25139[13] = inst_25112);
return statearr_25139;
})();var statearr_25140_25162 = state_25119__$1;(statearr_25140_25162[2] = inst_25113);
(statearr_25140_25162[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25120 === 15))
{var inst_25109 = (state_25119[2]);var state_25119__$1 = state_25119;var statearr_25141_25163 = state_25119__$1;(statearr_25141_25163[2] = inst_25109);
(statearr_25141_25163[1] = 14);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_25145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25145[0] = state_machine__5507__auto__);
(statearr_25145[1] = 1);
return statearr_25145;
});
var state_machine__5507__auto____1 = (function (state_25119){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25119);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25146){if((e25146 instanceof Object))
{var ex__5510__auto__ = e25146;var statearr_25147_25164 = state_25119;(statearr_25147_25164[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25119);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e25146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__25165 = state_25119;
state_25119 = G__25165;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25119){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25148 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25149);
return statearr_25148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___25308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25278){var state_val_25279 = (state_25278[1]);if((state_val_25279 === 1))
{var inst_25237 = [];var inst_25238 = inst_25237;var inst_25239 = cljs.core.constant$keyword$206;var state_25278__$1 = (function (){var statearr_25280 = state_25278;(statearr_25280[7] = inst_25239);
(statearr_25280[8] = inst_25238);
return statearr_25280;
})();var statearr_25281_25309 = state_25278__$1;(statearr_25281_25309[2] = null);
(statearr_25281_25309[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 2))
{var state_25278__$1 = state_25278;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25278__$1,4,ch);
} else
{if((state_val_25279 === 3))
{var inst_25276 = (state_25278[2]);var state_25278__$1 = state_25278;return cljs.core.async.impl.ioc_helpers.return_chan(state_25278__$1,inst_25276);
} else
{if((state_val_25279 === 4))
{var inst_25242 = (state_25278[9]);var inst_25242__$1 = (state_25278[2]);var inst_25243 = (inst_25242__$1 == null);var inst_25244 = cljs.core.not(inst_25243);var state_25278__$1 = (function (){var statearr_25282 = state_25278;(statearr_25282[9] = inst_25242__$1);
return statearr_25282;
})();if(inst_25244)
{var statearr_25283_25310 = state_25278__$1;(statearr_25283_25310[1] = 5);
} else
{var statearr_25284_25311 = state_25278__$1;(statearr_25284_25311[1] = 6);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 5))
{var inst_25239 = (state_25278[7]);var inst_25246 = (state_25278[10]);var inst_25242 = (state_25278[9]);var inst_25246__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25242) : f.call(null,inst_25242));var inst_25247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25246__$1,inst_25239);var inst_25248 = cljs.core.keyword_identical_QMARK_(inst_25239,cljs.core.constant$keyword$206);var inst_25249 = (inst_25247) || (inst_25248);var state_25278__$1 = (function (){var statearr_25285 = state_25278;(statearr_25285[10] = inst_25246__$1);
return statearr_25285;
})();if(cljs.core.truth_(inst_25249))
{var statearr_25286_25312 = state_25278__$1;(statearr_25286_25312[1] = 8);
} else
{var statearr_25287_25313 = state_25278__$1;(statearr_25287_25313[1] = 9);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 6))
{var inst_25238 = (state_25278[8]);var inst_25263 = inst_25238.length;var inst_25264 = (inst_25263 > 0);var state_25278__$1 = state_25278;if(cljs.core.truth_(inst_25264))
{var statearr_25289_25314 = state_25278__$1;(statearr_25289_25314[1] = 12);
} else
{var statearr_25290_25315 = state_25278__$1;(statearr_25290_25315[1] = 13);
}
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 7))
{var inst_25274 = (state_25278[2]);var state_25278__$1 = state_25278;var statearr_25291_25316 = state_25278__$1;(statearr_25291_25316[2] = inst_25274);
(statearr_25291_25316[1] = 3);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 8))
{var inst_25246 = (state_25278[10]);var inst_25242 = (state_25278[9]);var inst_25238 = (state_25278[8]);var inst_25251 = inst_25238.push(inst_25242);var tmp25288 = inst_25238;var inst_25238__$1 = tmp25288;var inst_25239 = inst_25246;var state_25278__$1 = (function (){var statearr_25292 = state_25278;(statearr_25292[11] = inst_25251);
(statearr_25292[7] = inst_25239);
(statearr_25292[8] = inst_25238__$1);
return statearr_25292;
})();var statearr_25293_25317 = state_25278__$1;(statearr_25293_25317[2] = null);
(statearr_25293_25317[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 9))
{var inst_25238 = (state_25278[8]);var inst_25254 = cljs.core.vec(inst_25238);var state_25278__$1 = state_25278;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25278__$1,11,out,inst_25254);
} else
{if((state_val_25279 === 10))
{var inst_25261 = (state_25278[2]);var state_25278__$1 = state_25278;var statearr_25294_25318 = state_25278__$1;(statearr_25294_25318[2] = inst_25261);
(statearr_25294_25318[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 11))
{var inst_25246 = (state_25278[10]);var inst_25242 = (state_25278[9]);var inst_25256 = (state_25278[2]);var inst_25257 = [];var inst_25258 = inst_25257.push(inst_25242);var inst_25238 = inst_25257;var inst_25239 = inst_25246;var state_25278__$1 = (function (){var statearr_25295 = state_25278;(statearr_25295[12] = inst_25256);
(statearr_25295[13] = inst_25258);
(statearr_25295[7] = inst_25239);
(statearr_25295[8] = inst_25238);
return statearr_25295;
})();var statearr_25296_25319 = state_25278__$1;(statearr_25296_25319[2] = null);
(statearr_25296_25319[1] = 2);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 12))
{var inst_25238 = (state_25278[8]);var inst_25266 = cljs.core.vec(inst_25238);var state_25278__$1 = state_25278;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25278__$1,15,out,inst_25266);
} else
{if((state_val_25279 === 13))
{var state_25278__$1 = state_25278;var statearr_25297_25320 = state_25278__$1;(statearr_25297_25320[2] = null);
(statearr_25297_25320[1] = 14);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 14))
{var inst_25271 = (state_25278[2]);var inst_25272 = cljs.core.async.close_BANG_(out);var state_25278__$1 = (function (){var statearr_25298 = state_25278;(statearr_25298[14] = inst_25271);
return statearr_25298;
})();var statearr_25299_25321 = state_25278__$1;(statearr_25299_25321[2] = inst_25272);
(statearr_25299_25321[1] = 7);
return cljs.core.constant$keyword$193;
} else
{if((state_val_25279 === 15))
{var inst_25268 = (state_25278[2]);var state_25278__$1 = state_25278;var statearr_25300_25322 = state_25278__$1;(statearr_25300_25322[2] = inst_25268);
(statearr_25300_25322[1] = 14);
return cljs.core.constant$keyword$193;
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
var state_machine__5507__auto____0 = (function (){var statearr_25304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25304[0] = state_machine__5507__auto__);
(statearr_25304[1] = 1);
return statearr_25304;
});
var state_machine__5507__auto____1 = (function (state_25278){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25278);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$193))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25305){if((e25305 instanceof Object))
{var ex__5510__auto__ = e25305;var statearr_25306_25323 = state_25278;(statearr_25306_25323[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25278);
return cljs.core.constant$keyword$193;
} else
{if(cljs.core.constant$keyword$182)
{throw e25305;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$193))
{{
var G__25324 = state_25278;
state_25278 = G__25324;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25278){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25307 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25308);
return statearr_25307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
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
