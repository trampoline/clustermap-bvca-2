// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t30761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30761 = (function (f,fn_handler,meta30762){
this.f = f;
this.fn_handler = fn_handler;
this.meta30762 = meta30762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30761.cljs$lang$type = true;
cljs.core.async.t30761.cljs$lang$ctorStr = "cljs.core.async/t30761";
cljs.core.async.t30761.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30761");
});
cljs.core.async.t30761.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t30761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t30761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30763){var self__ = this;
var _30763__$1 = this;return self__.meta30762;
});
cljs.core.async.t30761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30763,meta30762__$1){var self__ = this;
var _30763__$1 = this;return (new cljs.core.async.t30761(self__.f,self__.fn_handler,meta30762__$1));
});
cljs.core.async.__GT_t30761 = (function __GT_t30761(f__$1,fn_handler__$1,meta30762){return (new cljs.core.async.t30761(f__$1,fn_handler__$1,meta30762));
});
}
return (new cljs.core.async.t30761(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__30765 = buff;if(G__30765)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__30765.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__30765.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30765);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30765);
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
{var val_30766 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_30766);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_30766);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___30767 = n;var x_30768 = 0;while(true){
if((x_30768 < n__4114__auto___30767))
{(a[x_30768] = 0);
{
var G__30769 = (x_30768 + 1);
x_30768 = G__30769;
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
var G__30770 = (i + 1);
i = G__30770;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t30774 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30774 = (function (flag,alt_flag,meta30775){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30775 = meta30775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30774.cljs$lang$type = true;
cljs.core.async.t30774.cljs$lang$ctorStr = "cljs.core.async/t30774";
cljs.core.async.t30774.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30774");
});
cljs.core.async.t30774.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30774.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t30774.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t30774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30776){var self__ = this;
var _30776__$1 = this;return self__.meta30775;
});
cljs.core.async.t30774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30776,meta30775__$1){var self__ = this;
var _30776__$1 = this;return (new cljs.core.async.t30774(self__.flag,self__.alt_flag,meta30775__$1));
});
cljs.core.async.__GT_t30774 = (function __GT_t30774(flag__$1,alt_flag__$1,meta30775){return (new cljs.core.async.t30774(flag__$1,alt_flag__$1,meta30775));
});
}
return (new cljs.core.async.t30774(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t30780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30780 = (function (cb,flag,alt_handler,meta30781){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30781 = meta30781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30780.cljs$lang$type = true;
cljs.core.async.t30780.cljs$lang$ctorStr = "cljs.core.async/t30780";
cljs.core.async.t30780.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30780");
});
cljs.core.async.t30780.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t30780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t30780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30782){var self__ = this;
var _30782__$1 = this;return self__.meta30781;
});
cljs.core.async.t30780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30782,meta30781__$1){var self__ = this;
var _30782__$1 = this;return (new cljs.core.async.t30780(self__.cb,self__.flag,self__.alt_handler,meta30781__$1));
});
cljs.core.async.__GT_t30780 = (function __GT_t30780(cb__$1,flag__$1,alt_handler__$1,meta30781){return (new cljs.core.async.t30780(cb__$1,flag__$1,alt_handler__$1,meta30781));
});
}
return (new cljs.core.async.t30780(cb,flag,alt_handler,null));
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
return (function (p1__30783_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30783_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__30784 = (i + 1);
i = G__30784;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3279__auto__;
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
var alts_BANG___delegate = function (ports,p__30785){var map__30787 = p__30785;var map__30787__$1 = ((cljs.core.seq_QMARK_.call(null,map__30787))?cljs.core.apply.call(null,cljs.core.hash_map,map__30787):map__30787);var opts = map__30787__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__30785 = null;if (arguments.length > 1) {
  p__30785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__30785);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30788){
var ports = cljs.core.first(arglist__30788);
var p__30785 = cljs.core.rest(arglist__30788);
return alts_BANG___delegate(ports,p__30785);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30796 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30796 = (function (ch,f,map_LT_,meta30797){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30797 = meta30797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30796.cljs$lang$type = true;
cljs.core.async.t30796.cljs$lang$ctorStr = "cljs.core.async/t30796";
cljs.core.async.t30796.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30796");
});
cljs.core.async.t30796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t30796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30799 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30799 = (function (fn1,_,meta30797,ch,f,map_LT_,meta30800){
this.fn1 = fn1;
this._ = _;
this.meta30797 = meta30797;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30800 = meta30800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30799.cljs$lang$type = true;
cljs.core.async.t30799.cljs$lang$ctorStr = "cljs.core.async/t30799";
cljs.core.async.t30799.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30799");
});
cljs.core.async.t30799.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t30799.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t30799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__30789_SHARP_){return f1.call(null,(((p1__30789_SHARP_ == null))?null:self__.f.call(null,p1__30789_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t30799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30801){var self__ = this;
var _30801__$1 = this;return self__.meta30800;
});
cljs.core.async.t30799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30801,meta30800__$1){var self__ = this;
var _30801__$1 = this;return (new cljs.core.async.t30799(self__.fn1,self__._,self__.meta30797,self__.ch,self__.f,self__.map_LT_,meta30800__$1));
});
cljs.core.async.__GT_t30799 = (function __GT_t30799(fn1__$1,___$2,meta30797__$1,ch__$2,f__$2,map_LT___$2,meta30800){return (new cljs.core.async.t30799(fn1__$1,___$2,meta30797__$1,ch__$2,f__$2,map_LT___$2,meta30800));
});
}
return (new cljs.core.async.t30799(fn1,___$1,self__.meta30797,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t30796.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30798){var self__ = this;
var _30798__$1 = this;return self__.meta30797;
});
cljs.core.async.t30796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30798,meta30797__$1){var self__ = this;
var _30798__$1 = this;return (new cljs.core.async.t30796(self__.ch,self__.f,self__.map_LT_,meta30797__$1));
});
cljs.core.async.__GT_t30796 = (function __GT_t30796(ch__$1,f__$1,map_LT___$1,meta30797){return (new cljs.core.async.t30796(ch__$1,f__$1,map_LT___$1,meta30797));
});
}
return (new cljs.core.async.t30796(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30805 = (function (ch,f,map_GT_,meta30806){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30806 = meta30806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30805.cljs$lang$type = true;
cljs.core.async.t30805.cljs$lang$ctorStr = "cljs.core.async/t30805";
cljs.core.async.t30805.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30805");
});
cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30807){var self__ = this;
var _30807__$1 = this;return self__.meta30806;
});
cljs.core.async.t30805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30807,meta30806__$1){var self__ = this;
var _30807__$1 = this;return (new cljs.core.async.t30805(self__.ch,self__.f,self__.map_GT_,meta30806__$1));
});
cljs.core.async.__GT_t30805 = (function __GT_t30805(ch__$1,f__$1,map_GT___$1,meta30806){return (new cljs.core.async.t30805(ch__$1,f__$1,map_GT___$1,meta30806));
});
}
return (new cljs.core.async.t30805(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30811 = (function (ch,p,filter_GT_,meta30812){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30812 = meta30812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30811.cljs$lang$type = true;
cljs.core.async.t30811.cljs$lang$ctorStr = "cljs.core.async/t30811";
cljs.core.async.t30811.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30811");
});
cljs.core.async.t30811.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t30811.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30811.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30813){var self__ = this;
var _30813__$1 = this;return self__.meta30812;
});
cljs.core.async.t30811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30813,meta30812__$1){var self__ = this;
var _30813__$1 = this;return (new cljs.core.async.t30811(self__.ch,self__.p,self__.filter_GT_,meta30812__$1));
});
cljs.core.async.__GT_t30811 = (function __GT_t30811(ch__$1,p__$1,filter_GT___$1,meta30812){return (new cljs.core.async.t30811(ch__$1,p__$1,filter_GT___$1,meta30812));
});
}
return (new cljs.core.async.t30811(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___30896 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_30875){var state_val_30876 = (state_30875[1]);if((state_val_30876 === 1))
{var state_30875__$1 = state_30875;var statearr_30877_30897 = state_30875__$1;(statearr_30877_30897[2] = null);
(statearr_30877_30897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30876 === 2))
{var state_30875__$1 = state_30875;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,4,ch);
} else
{if((state_val_30876 === 3))
{var inst_30873 = (state_30875[2]);var state_30875__$1 = state_30875;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30875__$1,inst_30873);
} else
{if((state_val_30876 === 4))
{var inst_30857 = (state_30875[7]);var inst_30857__$1 = (state_30875[2]);var inst_30858 = (inst_30857__$1 == null);var state_30875__$1 = (function (){var statearr_30878 = state_30875;(statearr_30878[7] = inst_30857__$1);
return statearr_30878;
})();if(cljs.core.truth_(inst_30858))
{var statearr_30879_30898 = state_30875__$1;(statearr_30879_30898[1] = 5);
} else
{var statearr_30880_30899 = state_30875__$1;(statearr_30880_30899[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30876 === 5))
{var inst_30860 = cljs.core.async.close_BANG_.call(null,out);var state_30875__$1 = state_30875;var statearr_30881_30900 = state_30875__$1;(statearr_30881_30900[2] = inst_30860);
(statearr_30881_30900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30876 === 6))
{var inst_30857 = (state_30875[7]);var inst_30862 = p.call(null,inst_30857);var state_30875__$1 = state_30875;if(cljs.core.truth_(inst_30862))
{var statearr_30882_30901 = state_30875__$1;(statearr_30882_30901[1] = 8);
} else
{var statearr_30883_30902 = state_30875__$1;(statearr_30883_30902[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30876 === 7))
{var inst_30871 = (state_30875[2]);var state_30875__$1 = state_30875;var statearr_30884_30903 = state_30875__$1;(statearr_30884_30903[2] = inst_30871);
(statearr_30884_30903[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30876 === 8))
{var inst_30857 = (state_30875[7]);var state_30875__$1 = state_30875;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30875__$1,11,out,inst_30857);
} else
{if((state_val_30876 === 9))
{var state_30875__$1 = state_30875;var statearr_30885_30904 = state_30875__$1;(statearr_30885_30904[2] = null);
(statearr_30885_30904[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30876 === 10))
{var inst_30868 = (state_30875[2]);var state_30875__$1 = (function (){var statearr_30886 = state_30875;(statearr_30886[8] = inst_30868);
return statearr_30886;
})();var statearr_30887_30905 = state_30875__$1;(statearr_30887_30905[2] = null);
(statearr_30887_30905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30876 === 11))
{var inst_30865 = (state_30875[2]);var state_30875__$1 = state_30875;var statearr_30888_30906 = state_30875__$1;(statearr_30888_30906[2] = inst_30865);
(statearr_30888_30906[1] = 10);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_30892 = (new Array(9));(statearr_30892[0] = state_machine__5792__auto__);
(statearr_30892[1] = 1);
return statearr_30892;
});
var state_machine__5792__auto____1 = (function (state_30875){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_30875);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e30893){if((e30893 instanceof Object))
{var ex__5795__auto__ = e30893;var statearr_30894_30907 = state_30875;(statearr_30894_30907[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30875);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30908 = state_30875;
state_30875 = G__30908;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_30895 = f__5862__auto__.call(null);(statearr_30895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___30896);
return statearr_30895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31060){var state_val_31061 = (state_31060[1]);if((state_val_31061 === 1))
{var state_31060__$1 = state_31060;var statearr_31062_31099 = state_31060__$1;(statearr_31062_31099[2] = null);
(statearr_31062_31099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 2))
{var state_31060__$1 = state_31060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,4,in$);
} else
{if((state_val_31061 === 3))
{var inst_31058 = (state_31060[2]);var state_31060__$1 = state_31060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else
{if((state_val_31061 === 4))
{var inst_31006 = (state_31060[7]);var inst_31006__$1 = (state_31060[2]);var inst_31007 = (inst_31006__$1 == null);var state_31060__$1 = (function (){var statearr_31063 = state_31060;(statearr_31063[7] = inst_31006__$1);
return statearr_31063;
})();if(cljs.core.truth_(inst_31007))
{var statearr_31064_31100 = state_31060__$1;(statearr_31064_31100[1] = 5);
} else
{var statearr_31065_31101 = state_31060__$1;(statearr_31065_31101[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 5))
{var inst_31009 = cljs.core.async.close_BANG_.call(null,out);var state_31060__$1 = state_31060;var statearr_31066_31102 = state_31060__$1;(statearr_31066_31102[2] = inst_31009);
(statearr_31066_31102[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 6))
{var inst_31006 = (state_31060[7]);var inst_31011 = f.call(null,inst_31006);var inst_31016 = cljs.core.seq.call(null,inst_31011);var inst_31017 = inst_31016;var inst_31018 = null;var inst_31019 = 0;var inst_31020 = 0;var state_31060__$1 = (function (){var statearr_31067 = state_31060;(statearr_31067[8] = inst_31017);
(statearr_31067[9] = inst_31020);
(statearr_31067[10] = inst_31019);
(statearr_31067[11] = inst_31018);
return statearr_31067;
})();var statearr_31068_31103 = state_31060__$1;(statearr_31068_31103[2] = null);
(statearr_31068_31103[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 7))
{var inst_31056 = (state_31060[2]);var state_31060__$1 = state_31060;var statearr_31069_31104 = state_31060__$1;(statearr_31069_31104[2] = inst_31056);
(statearr_31069_31104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 8))
{var inst_31020 = (state_31060[9]);var inst_31019 = (state_31060[10]);var inst_31022 = (inst_31020 < inst_31019);var inst_31023 = inst_31022;var state_31060__$1 = state_31060;if(cljs.core.truth_(inst_31023))
{var statearr_31070_31105 = state_31060__$1;(statearr_31070_31105[1] = 10);
} else
{var statearr_31071_31106 = state_31060__$1;(statearr_31071_31106[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 9))
{var inst_31053 = (state_31060[2]);var state_31060__$1 = (function (){var statearr_31072 = state_31060;(statearr_31072[12] = inst_31053);
return statearr_31072;
})();var statearr_31073_31107 = state_31060__$1;(statearr_31073_31107[2] = null);
(statearr_31073_31107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 10))
{var inst_31020 = (state_31060[9]);var inst_31018 = (state_31060[11]);var inst_31025 = cljs.core._nth.call(null,inst_31018,inst_31020);var state_31060__$1 = state_31060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31060__$1,13,out,inst_31025);
} else
{if((state_val_31061 === 11))
{var inst_31017 = (state_31060[8]);var inst_31031 = (state_31060[13]);var inst_31031__$1 = cljs.core.seq.call(null,inst_31017);var state_31060__$1 = (function (){var statearr_31077 = state_31060;(statearr_31077[13] = inst_31031__$1);
return statearr_31077;
})();if(inst_31031__$1)
{var statearr_31078_31108 = state_31060__$1;(statearr_31078_31108[1] = 14);
} else
{var statearr_31079_31109 = state_31060__$1;(statearr_31079_31109[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 12))
{var inst_31051 = (state_31060[2]);var state_31060__$1 = state_31060;var statearr_31080_31110 = state_31060__$1;(statearr_31080_31110[2] = inst_31051);
(statearr_31080_31110[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 13))
{var inst_31017 = (state_31060[8]);var inst_31020 = (state_31060[9]);var inst_31019 = (state_31060[10]);var inst_31018 = (state_31060[11]);var inst_31027 = (state_31060[2]);var inst_31028 = (inst_31020 + 1);var tmp31074 = inst_31017;var tmp31075 = inst_31019;var tmp31076 = inst_31018;var inst_31017__$1 = tmp31074;var inst_31018__$1 = tmp31076;var inst_31019__$1 = tmp31075;var inst_31020__$1 = inst_31028;var state_31060__$1 = (function (){var statearr_31081 = state_31060;(statearr_31081[8] = inst_31017__$1);
(statearr_31081[9] = inst_31020__$1);
(statearr_31081[10] = inst_31019__$1);
(statearr_31081[11] = inst_31018__$1);
(statearr_31081[14] = inst_31027);
return statearr_31081;
})();var statearr_31082_31111 = state_31060__$1;(statearr_31082_31111[2] = null);
(statearr_31082_31111[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 14))
{var inst_31031 = (state_31060[13]);var inst_31033 = cljs.core.chunked_seq_QMARK_.call(null,inst_31031);var state_31060__$1 = state_31060;if(inst_31033)
{var statearr_31083_31112 = state_31060__$1;(statearr_31083_31112[1] = 17);
} else
{var statearr_31084_31113 = state_31060__$1;(statearr_31084_31113[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 15))
{var state_31060__$1 = state_31060;var statearr_31085_31114 = state_31060__$1;(statearr_31085_31114[2] = null);
(statearr_31085_31114[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 16))
{var inst_31049 = (state_31060[2]);var state_31060__$1 = state_31060;var statearr_31086_31115 = state_31060__$1;(statearr_31086_31115[2] = inst_31049);
(statearr_31086_31115[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 17))
{var inst_31031 = (state_31060[13]);var inst_31035 = cljs.core.chunk_first.call(null,inst_31031);var inst_31036 = cljs.core.chunk_rest.call(null,inst_31031);var inst_31037 = cljs.core.count.call(null,inst_31035);var inst_31017 = inst_31036;var inst_31018 = inst_31035;var inst_31019 = inst_31037;var inst_31020 = 0;var state_31060__$1 = (function (){var statearr_31087 = state_31060;(statearr_31087[8] = inst_31017);
(statearr_31087[9] = inst_31020);
(statearr_31087[10] = inst_31019);
(statearr_31087[11] = inst_31018);
return statearr_31087;
})();var statearr_31088_31116 = state_31060__$1;(statearr_31088_31116[2] = null);
(statearr_31088_31116[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 18))
{var inst_31031 = (state_31060[13]);var inst_31040 = cljs.core.first.call(null,inst_31031);var state_31060__$1 = state_31060;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31060__$1,20,out,inst_31040);
} else
{if((state_val_31061 === 19))
{var inst_31046 = (state_31060[2]);var state_31060__$1 = state_31060;var statearr_31089_31117 = state_31060__$1;(statearr_31089_31117[2] = inst_31046);
(statearr_31089_31117[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31061 === 20))
{var inst_31031 = (state_31060[13]);var inst_31042 = (state_31060[2]);var inst_31043 = cljs.core.next.call(null,inst_31031);var inst_31017 = inst_31043;var inst_31018 = null;var inst_31019 = 0;var inst_31020 = 0;var state_31060__$1 = (function (){var statearr_31090 = state_31060;(statearr_31090[8] = inst_31017);
(statearr_31090[9] = inst_31020);
(statearr_31090[10] = inst_31019);
(statearr_31090[11] = inst_31018);
(statearr_31090[15] = inst_31042);
return statearr_31090;
})();var statearr_31091_31118 = state_31060__$1;(statearr_31091_31118[2] = null);
(statearr_31091_31118[1] = 8);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31095 = (new Array(16));(statearr_31095[0] = state_machine__5792__auto__);
(statearr_31095[1] = 1);
return statearr_31095;
});
var state_machine__5792__auto____1 = (function (state_31060){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31060);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31096){if((e31096 instanceof Object))
{var ex__5795__auto__ = e31096;var statearr_31097_31119 = state_31060;(statearr_31097_31119[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31120 = state_31060;
state_31060 = G__31120;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31098 = f__5862__auto__.call(null);(statearr_31098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_31098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5861__auto___31201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31180){var state_val_31181 = (state_31180[1]);if((state_val_31181 === 1))
{var state_31180__$1 = state_31180;var statearr_31182_31202 = state_31180__$1;(statearr_31182_31202[2] = null);
(statearr_31182_31202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31181 === 2))
{var state_31180__$1 = state_31180;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31180__$1,4,from);
} else
{if((state_val_31181 === 3))
{var inst_31178 = (state_31180[2]);var state_31180__$1 = state_31180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31180__$1,inst_31178);
} else
{if((state_val_31181 === 4))
{var inst_31163 = (state_31180[7]);var inst_31163__$1 = (state_31180[2]);var inst_31164 = (inst_31163__$1 == null);var state_31180__$1 = (function (){var statearr_31183 = state_31180;(statearr_31183[7] = inst_31163__$1);
return statearr_31183;
})();if(cljs.core.truth_(inst_31164))
{var statearr_31184_31203 = state_31180__$1;(statearr_31184_31203[1] = 5);
} else
{var statearr_31185_31204 = state_31180__$1;(statearr_31185_31204[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31181 === 5))
{var state_31180__$1 = state_31180;if(cljs.core.truth_(close_QMARK_))
{var statearr_31186_31205 = state_31180__$1;(statearr_31186_31205[1] = 8);
} else
{var statearr_31187_31206 = state_31180__$1;(statearr_31187_31206[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31181 === 6))
{var inst_31163 = (state_31180[7]);var state_31180__$1 = state_31180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31180__$1,11,to,inst_31163);
} else
{if((state_val_31181 === 7))
{var inst_31176 = (state_31180[2]);var state_31180__$1 = state_31180;var statearr_31188_31207 = state_31180__$1;(statearr_31188_31207[2] = inst_31176);
(statearr_31188_31207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31181 === 8))
{var inst_31167 = cljs.core.async.close_BANG_.call(null,to);var state_31180__$1 = state_31180;var statearr_31189_31208 = state_31180__$1;(statearr_31189_31208[2] = inst_31167);
(statearr_31189_31208[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31181 === 9))
{var state_31180__$1 = state_31180;var statearr_31190_31209 = state_31180__$1;(statearr_31190_31209[2] = null);
(statearr_31190_31209[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31181 === 10))
{var inst_31170 = (state_31180[2]);var state_31180__$1 = state_31180;var statearr_31191_31210 = state_31180__$1;(statearr_31191_31210[2] = inst_31170);
(statearr_31191_31210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31181 === 11))
{var inst_31173 = (state_31180[2]);var state_31180__$1 = (function (){var statearr_31192 = state_31180;(statearr_31192[8] = inst_31173);
return statearr_31192;
})();var statearr_31193_31211 = state_31180__$1;(statearr_31193_31211[2] = null);
(statearr_31193_31211[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31197 = (new Array(9));(statearr_31197[0] = state_machine__5792__auto__);
(statearr_31197[1] = 1);
return statearr_31197;
});
var state_machine__5792__auto____1 = (function (state_31180){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31180);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31198){if((e31198 instanceof Object))
{var ex__5795__auto__ = e31198;var statearr_31199_31212 = state_31180;(statearr_31199_31212[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31180);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31213 = state_31180;
state_31180 = G__31213;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31180){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31200 = f__5862__auto__.call(null);(statearr_31200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___31201);
return statearr_31200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5861__auto___31300 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31278){var state_val_31279 = (state_31278[1]);if((state_val_31279 === 1))
{var state_31278__$1 = state_31278;var statearr_31280_31301 = state_31278__$1;(statearr_31280_31301[2] = null);
(statearr_31280_31301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 2))
{var state_31278__$1 = state_31278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31278__$1,4,ch);
} else
{if((state_val_31279 === 3))
{var inst_31276 = (state_31278[2]);var state_31278__$1 = state_31278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31278__$1,inst_31276);
} else
{if((state_val_31279 === 4))
{var inst_31259 = (state_31278[7]);var inst_31259__$1 = (state_31278[2]);var inst_31260 = (inst_31259__$1 == null);var state_31278__$1 = (function (){var statearr_31281 = state_31278;(statearr_31281[7] = inst_31259__$1);
return statearr_31281;
})();if(cljs.core.truth_(inst_31260))
{var statearr_31282_31302 = state_31278__$1;(statearr_31282_31302[1] = 5);
} else
{var statearr_31283_31303 = state_31278__$1;(statearr_31283_31303[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 5))
{var inst_31262 = cljs.core.async.close_BANG_.call(null,tc);var inst_31263 = cljs.core.async.close_BANG_.call(null,fc);var state_31278__$1 = (function (){var statearr_31284 = state_31278;(statearr_31284[8] = inst_31262);
return statearr_31284;
})();var statearr_31285_31304 = state_31278__$1;(statearr_31285_31304[2] = inst_31263);
(statearr_31285_31304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 6))
{var inst_31259 = (state_31278[7]);var inst_31265 = p.call(null,inst_31259);var state_31278__$1 = state_31278;if(cljs.core.truth_(inst_31265))
{var statearr_31286_31305 = state_31278__$1;(statearr_31286_31305[1] = 9);
} else
{var statearr_31287_31306 = state_31278__$1;(statearr_31287_31306[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 7))
{var inst_31274 = (state_31278[2]);var state_31278__$1 = state_31278;var statearr_31288_31307 = state_31278__$1;(statearr_31288_31307[2] = inst_31274);
(statearr_31288_31307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 8))
{var inst_31271 = (state_31278[2]);var state_31278__$1 = (function (){var statearr_31289 = state_31278;(statearr_31289[9] = inst_31271);
return statearr_31289;
})();var statearr_31290_31308 = state_31278__$1;(statearr_31290_31308[2] = null);
(statearr_31290_31308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 9))
{var state_31278__$1 = state_31278;var statearr_31291_31309 = state_31278__$1;(statearr_31291_31309[2] = tc);
(statearr_31291_31309[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 10))
{var state_31278__$1 = state_31278;var statearr_31292_31310 = state_31278__$1;(statearr_31292_31310[2] = fc);
(statearr_31292_31310[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31279 === 11))
{var inst_31259 = (state_31278[7]);var inst_31269 = (state_31278[2]);var state_31278__$1 = state_31278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31278__$1,8,inst_31269,inst_31259);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31296 = (new Array(10));(statearr_31296[0] = state_machine__5792__auto__);
(statearr_31296[1] = 1);
return statearr_31296;
});
var state_machine__5792__auto____1 = (function (state_31278){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31278);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31297){if((e31297 instanceof Object))
{var ex__5795__auto__ = e31297;var statearr_31298_31311 = state_31278;(statearr_31298_31311[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31278);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31312 = state_31278;
state_31278 = G__31312;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31278){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31299 = f__5862__auto__.call(null);(statearr_31299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___31300);
return statearr_31299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31359){var state_val_31360 = (state_31359[1]);if((state_val_31360 === 7))
{var inst_31355 = (state_31359[2]);var state_31359__$1 = state_31359;var statearr_31361_31377 = state_31359__$1;(statearr_31361_31377[2] = inst_31355);
(statearr_31361_31377[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31360 === 6))
{var inst_31348 = (state_31359[7]);var inst_31345 = (state_31359[8]);var inst_31352 = f.call(null,inst_31345,inst_31348);var inst_31345__$1 = inst_31352;var state_31359__$1 = (function (){var statearr_31362 = state_31359;(statearr_31362[8] = inst_31345__$1);
return statearr_31362;
})();var statearr_31363_31378 = state_31359__$1;(statearr_31363_31378[2] = null);
(statearr_31363_31378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31360 === 5))
{var inst_31345 = (state_31359[8]);var state_31359__$1 = state_31359;var statearr_31364_31379 = state_31359__$1;(statearr_31364_31379[2] = inst_31345);
(statearr_31364_31379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31360 === 4))
{var inst_31348 = (state_31359[7]);var inst_31348__$1 = (state_31359[2]);var inst_31349 = (inst_31348__$1 == null);var state_31359__$1 = (function (){var statearr_31365 = state_31359;(statearr_31365[7] = inst_31348__$1);
return statearr_31365;
})();if(cljs.core.truth_(inst_31349))
{var statearr_31366_31380 = state_31359__$1;(statearr_31366_31380[1] = 5);
} else
{var statearr_31367_31381 = state_31359__$1;(statearr_31367_31381[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31360 === 3))
{var inst_31357 = (state_31359[2]);var state_31359__$1 = state_31359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31359__$1,inst_31357);
} else
{if((state_val_31360 === 2))
{var state_31359__$1 = state_31359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31359__$1,4,ch);
} else
{if((state_val_31360 === 1))
{var inst_31345 = init;var state_31359__$1 = (function (){var statearr_31368 = state_31359;(statearr_31368[8] = inst_31345);
return statearr_31368;
})();var statearr_31369_31382 = state_31359__$1;(statearr_31369_31382[2] = null);
(statearr_31369_31382[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31373 = (new Array(9));(statearr_31373[0] = state_machine__5792__auto__);
(statearr_31373[1] = 1);
return statearr_31373;
});
var state_machine__5792__auto____1 = (function (state_31359){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31359);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31374){if((e31374 instanceof Object))
{var ex__5795__auto__ = e31374;var statearr_31375_31383 = state_31359;(statearr_31375_31383[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31384 = state_31359;
state_31359 = G__31384;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31359){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31376 = f__5862__auto__.call(null);(statearr_31376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_31376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31446){var state_val_31447 = (state_31446[1]);if((state_val_31447 === 1))
{var inst_31426 = cljs.core.seq.call(null,coll);var inst_31427 = inst_31426;var state_31446__$1 = (function (){var statearr_31448 = state_31446;(statearr_31448[7] = inst_31427);
return statearr_31448;
})();var statearr_31449_31467 = state_31446__$1;(statearr_31449_31467[2] = null);
(statearr_31449_31467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31447 === 2))
{var inst_31427 = (state_31446[7]);var state_31446__$1 = state_31446;if(cljs.core.truth_(inst_31427))
{var statearr_31450_31468 = state_31446__$1;(statearr_31450_31468[1] = 4);
} else
{var statearr_31451_31469 = state_31446__$1;(statearr_31451_31469[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31447 === 3))
{var inst_31444 = (state_31446[2]);var state_31446__$1 = state_31446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31446__$1,inst_31444);
} else
{if((state_val_31447 === 4))
{var inst_31427 = (state_31446[7]);var inst_31430 = cljs.core.first.call(null,inst_31427);var state_31446__$1 = state_31446;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31446__$1,7,ch,inst_31430);
} else
{if((state_val_31447 === 5))
{var state_31446__$1 = state_31446;if(cljs.core.truth_(close_QMARK_))
{var statearr_31452_31470 = state_31446__$1;(statearr_31452_31470[1] = 8);
} else
{var statearr_31453_31471 = state_31446__$1;(statearr_31453_31471[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31447 === 6))
{var inst_31442 = (state_31446[2]);var state_31446__$1 = state_31446;var statearr_31454_31472 = state_31446__$1;(statearr_31454_31472[2] = inst_31442);
(statearr_31454_31472[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31447 === 7))
{var inst_31427 = (state_31446[7]);var inst_31432 = (state_31446[2]);var inst_31433 = cljs.core.next.call(null,inst_31427);var inst_31427__$1 = inst_31433;var state_31446__$1 = (function (){var statearr_31455 = state_31446;(statearr_31455[7] = inst_31427__$1);
(statearr_31455[8] = inst_31432);
return statearr_31455;
})();var statearr_31456_31473 = state_31446__$1;(statearr_31456_31473[2] = null);
(statearr_31456_31473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31447 === 8))
{var inst_31437 = cljs.core.async.close_BANG_.call(null,ch);var state_31446__$1 = state_31446;var statearr_31457_31474 = state_31446__$1;(statearr_31457_31474[2] = inst_31437);
(statearr_31457_31474[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31447 === 9))
{var state_31446__$1 = state_31446;var statearr_31458_31475 = state_31446__$1;(statearr_31458_31475[2] = null);
(statearr_31458_31475[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31447 === 10))
{var inst_31440 = (state_31446[2]);var state_31446__$1 = state_31446;var statearr_31459_31476 = state_31446__$1;(statearr_31459_31476[2] = inst_31440);
(statearr_31459_31476[1] = 6);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31463 = (new Array(9));(statearr_31463[0] = state_machine__5792__auto__);
(statearr_31463[1] = 1);
return statearr_31463;
});
var state_machine__5792__auto____1 = (function (state_31446){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31446);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31464){if((e31464 instanceof Object))
{var ex__5795__auto__ = e31464;var statearr_31465_31477 = state_31446;(statearr_31465_31477[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31446);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31478 = state_31446;
state_31446 = G__31478;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31446){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31466 = f__5862__auto__.call(null);(statearr_31466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_31466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
cljs.core.async.Mux = (function (){var obj31480 = {};return obj31480;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj31482 = {};return obj31482;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t31706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31706 = (function (cs,ch,mult,meta31707){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31707 = meta31707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31706.cljs$lang$type = true;
cljs.core.async.t31706.cljs$lang$ctorStr = "cljs.core.async/t31706";
cljs.core.async.t31706.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31706");
});})(cs))
;
cljs.core.async.t31706.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t31706.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t31706.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t31706.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t31706.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t31706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31708){var self__ = this;
var _31708__$1 = this;return self__.meta31707;
});})(cs))
;
cljs.core.async.t31706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31708,meta31707__$1){var self__ = this;
var _31708__$1 = this;return (new cljs.core.async.t31706(self__.cs,self__.ch,self__.mult,meta31707__$1));
});})(cs))
;
cljs.core.async.__GT_t31706 = ((function (cs){
return (function __GT_t31706(cs__$1,ch__$1,mult__$1,meta31707){return (new cljs.core.async.t31706(cs__$1,ch__$1,mult__$1,meta31707));
});})(cs))
;
}
return (new cljs.core.async.t31706(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5861__auto___31929 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31843){var state_val_31844 = (state_31843[1]);if((state_val_31844 === 32))
{var inst_31711 = (state_31843[7]);var inst_31787 = (state_31843[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31843,31,Object,null,30);var inst_31794 = cljs.core.async.put_BANG_.call(null,inst_31787,inst_31711,done);var state_31843__$1 = state_31843;var statearr_31845_31930 = state_31843__$1;(statearr_31845_31930[2] = inst_31794);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31843__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 1))
{var state_31843__$1 = state_31843;var statearr_31846_31931 = state_31843__$1;(statearr_31846_31931[2] = null);
(statearr_31846_31931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 33))
{var inst_31800 = (state_31843[9]);var inst_31802 = cljs.core.chunked_seq_QMARK_.call(null,inst_31800);var state_31843__$1 = state_31843;if(inst_31802)
{var statearr_31847_31932 = state_31843__$1;(statearr_31847_31932[1] = 36);
} else
{var statearr_31848_31933 = state_31843__$1;(statearr_31848_31933[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 2))
{var state_31843__$1 = state_31843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31843__$1,4,ch);
} else
{if((state_val_31844 === 34))
{var state_31843__$1 = state_31843;var statearr_31849_31934 = state_31843__$1;(statearr_31849_31934[2] = null);
(statearr_31849_31934[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 3))
{var inst_31841 = (state_31843[2]);var state_31843__$1 = state_31843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31843__$1,inst_31841);
} else
{if((state_val_31844 === 35))
{var inst_31825 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31850_31935 = state_31843__$1;(statearr_31850_31935[2] = inst_31825);
(statearr_31850_31935[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 4))
{var inst_31711 = (state_31843[7]);var inst_31711__$1 = (state_31843[2]);var inst_31712 = (inst_31711__$1 == null);var state_31843__$1 = (function (){var statearr_31851 = state_31843;(statearr_31851[7] = inst_31711__$1);
return statearr_31851;
})();if(cljs.core.truth_(inst_31712))
{var statearr_31852_31936 = state_31843__$1;(statearr_31852_31936[1] = 5);
} else
{var statearr_31853_31937 = state_31843__$1;(statearr_31853_31937[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 36))
{var inst_31800 = (state_31843[9]);var inst_31804 = cljs.core.chunk_first.call(null,inst_31800);var inst_31805 = cljs.core.chunk_rest.call(null,inst_31800);var inst_31806 = cljs.core.count.call(null,inst_31804);var inst_31779 = inst_31805;var inst_31780 = inst_31804;var inst_31781 = inst_31806;var inst_31782 = 0;var state_31843__$1 = (function (){var statearr_31854 = state_31843;(statearr_31854[10] = inst_31782);
(statearr_31854[11] = inst_31781);
(statearr_31854[12] = inst_31780);
(statearr_31854[13] = inst_31779);
return statearr_31854;
})();var statearr_31855_31938 = state_31843__$1;(statearr_31855_31938[2] = null);
(statearr_31855_31938[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 5))
{var inst_31718 = cljs.core.deref.call(null,cs);var inst_31719 = cljs.core.seq.call(null,inst_31718);var inst_31720 = inst_31719;var inst_31721 = null;var inst_31722 = 0;var inst_31723 = 0;var state_31843__$1 = (function (){var statearr_31856 = state_31843;(statearr_31856[14] = inst_31720);
(statearr_31856[15] = inst_31721);
(statearr_31856[16] = inst_31723);
(statearr_31856[17] = inst_31722);
return statearr_31856;
})();var statearr_31857_31939 = state_31843__$1;(statearr_31857_31939[2] = null);
(statearr_31857_31939[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 37))
{var inst_31800 = (state_31843[9]);var inst_31809 = cljs.core.first.call(null,inst_31800);var state_31843__$1 = (function (){var statearr_31858 = state_31843;(statearr_31858[18] = inst_31809);
return statearr_31858;
})();var statearr_31859_31940 = state_31843__$1;(statearr_31859_31940[2] = null);
(statearr_31859_31940[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 6))
{var inst_31771 = (state_31843[19]);var inst_31770 = cljs.core.deref.call(null,cs);var inst_31771__$1 = cljs.core.keys.call(null,inst_31770);var inst_31772 = cljs.core.count.call(null,inst_31771__$1);var inst_31773 = cljs.core.reset_BANG_.call(null,dctr,inst_31772);var inst_31778 = cljs.core.seq.call(null,inst_31771__$1);var inst_31779 = inst_31778;var inst_31780 = null;var inst_31781 = 0;var inst_31782 = 0;var state_31843__$1 = (function (){var statearr_31860 = state_31843;(statearr_31860[20] = inst_31773);
(statearr_31860[10] = inst_31782);
(statearr_31860[11] = inst_31781);
(statearr_31860[12] = inst_31780);
(statearr_31860[19] = inst_31771__$1);
(statearr_31860[13] = inst_31779);
return statearr_31860;
})();var statearr_31861_31941 = state_31843__$1;(statearr_31861_31941[2] = null);
(statearr_31861_31941[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 38))
{var inst_31822 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31862_31942 = state_31843__$1;(statearr_31862_31942[2] = inst_31822);
(statearr_31862_31942[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 7))
{var inst_31839 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31863_31943 = state_31843__$1;(statearr_31863_31943[2] = inst_31839);
(statearr_31863_31943[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 39))
{var inst_31800 = (state_31843[9]);var inst_31818 = (state_31843[2]);var inst_31819 = cljs.core.next.call(null,inst_31800);var inst_31779 = inst_31819;var inst_31780 = null;var inst_31781 = 0;var inst_31782 = 0;var state_31843__$1 = (function (){var statearr_31864 = state_31843;(statearr_31864[10] = inst_31782);
(statearr_31864[11] = inst_31781);
(statearr_31864[12] = inst_31780);
(statearr_31864[21] = inst_31818);
(statearr_31864[13] = inst_31779);
return statearr_31864;
})();var statearr_31865_31944 = state_31843__$1;(statearr_31865_31944[2] = null);
(statearr_31865_31944[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 8))
{var inst_31723 = (state_31843[16]);var inst_31722 = (state_31843[17]);var inst_31725 = (inst_31723 < inst_31722);var inst_31726 = inst_31725;var state_31843__$1 = state_31843;if(cljs.core.truth_(inst_31726))
{var statearr_31866_31945 = state_31843__$1;(statearr_31866_31945[1] = 10);
} else
{var statearr_31867_31946 = state_31843__$1;(statearr_31867_31946[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 40))
{var inst_31809 = (state_31843[18]);var inst_31810 = (state_31843[2]);var inst_31811 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31812 = cljs.core.async.untap_STAR_.call(null,m,inst_31809);var state_31843__$1 = (function (){var statearr_31868 = state_31843;(statearr_31868[22] = inst_31811);
(statearr_31868[23] = inst_31810);
return statearr_31868;
})();var statearr_31869_31947 = state_31843__$1;(statearr_31869_31947[2] = inst_31812);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31843__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 9))
{var inst_31768 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31870_31948 = state_31843__$1;(statearr_31870_31948[2] = inst_31768);
(statearr_31870_31948[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 41))
{var inst_31711 = (state_31843[7]);var inst_31809 = (state_31843[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31843,40,Object,null,39);var inst_31816 = cljs.core.async.put_BANG_.call(null,inst_31809,inst_31711,done);var state_31843__$1 = state_31843;var statearr_31871_31949 = state_31843__$1;(statearr_31871_31949[2] = inst_31816);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31843__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 10))
{var inst_31721 = (state_31843[15]);var inst_31723 = (state_31843[16]);var inst_31729 = cljs.core._nth.call(null,inst_31721,inst_31723);var inst_31730 = cljs.core.nth.call(null,inst_31729,0,null);var inst_31731 = cljs.core.nth.call(null,inst_31729,1,null);var state_31843__$1 = (function (){var statearr_31872 = state_31843;(statearr_31872[24] = inst_31730);
return statearr_31872;
})();if(cljs.core.truth_(inst_31731))
{var statearr_31873_31950 = state_31843__$1;(statearr_31873_31950[1] = 13);
} else
{var statearr_31874_31951 = state_31843__$1;(statearr_31874_31951[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 42))
{var state_31843__$1 = state_31843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31843__$1,45,dchan);
} else
{if((state_val_31844 === 11))
{var inst_31720 = (state_31843[14]);var inst_31740 = (state_31843[25]);var inst_31740__$1 = cljs.core.seq.call(null,inst_31720);var state_31843__$1 = (function (){var statearr_31875 = state_31843;(statearr_31875[25] = inst_31740__$1);
return statearr_31875;
})();if(inst_31740__$1)
{var statearr_31876_31952 = state_31843__$1;(statearr_31876_31952[1] = 16);
} else
{var statearr_31877_31953 = state_31843__$1;(statearr_31877_31953[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 43))
{var state_31843__$1 = state_31843;var statearr_31878_31954 = state_31843__$1;(statearr_31878_31954[2] = null);
(statearr_31878_31954[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 12))
{var inst_31766 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31879_31955 = state_31843__$1;(statearr_31879_31955[2] = inst_31766);
(statearr_31879_31955[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 44))
{var inst_31836 = (state_31843[2]);var state_31843__$1 = (function (){var statearr_31880 = state_31843;(statearr_31880[26] = inst_31836);
return statearr_31880;
})();var statearr_31881_31956 = state_31843__$1;(statearr_31881_31956[2] = null);
(statearr_31881_31956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 13))
{var inst_31730 = (state_31843[24]);var inst_31733 = cljs.core.async.close_BANG_.call(null,inst_31730);var state_31843__$1 = state_31843;var statearr_31882_31957 = state_31843__$1;(statearr_31882_31957[2] = inst_31733);
(statearr_31882_31957[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 45))
{var inst_31833 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31886_31958 = state_31843__$1;(statearr_31886_31958[2] = inst_31833);
(statearr_31886_31958[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 14))
{var state_31843__$1 = state_31843;var statearr_31887_31959 = state_31843__$1;(statearr_31887_31959[2] = null);
(statearr_31887_31959[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 15))
{var inst_31720 = (state_31843[14]);var inst_31721 = (state_31843[15]);var inst_31723 = (state_31843[16]);var inst_31722 = (state_31843[17]);var inst_31736 = (state_31843[2]);var inst_31737 = (inst_31723 + 1);var tmp31883 = inst_31720;var tmp31884 = inst_31721;var tmp31885 = inst_31722;var inst_31720__$1 = tmp31883;var inst_31721__$1 = tmp31884;var inst_31722__$1 = tmp31885;var inst_31723__$1 = inst_31737;var state_31843__$1 = (function (){var statearr_31888 = state_31843;(statearr_31888[14] = inst_31720__$1);
(statearr_31888[15] = inst_31721__$1);
(statearr_31888[16] = inst_31723__$1);
(statearr_31888[17] = inst_31722__$1);
(statearr_31888[27] = inst_31736);
return statearr_31888;
})();var statearr_31889_31960 = state_31843__$1;(statearr_31889_31960[2] = null);
(statearr_31889_31960[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 16))
{var inst_31740 = (state_31843[25]);var inst_31742 = cljs.core.chunked_seq_QMARK_.call(null,inst_31740);var state_31843__$1 = state_31843;if(inst_31742)
{var statearr_31890_31961 = state_31843__$1;(statearr_31890_31961[1] = 19);
} else
{var statearr_31891_31962 = state_31843__$1;(statearr_31891_31962[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 17))
{var state_31843__$1 = state_31843;var statearr_31892_31963 = state_31843__$1;(statearr_31892_31963[2] = null);
(statearr_31892_31963[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 18))
{var inst_31764 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31893_31964 = state_31843__$1;(statearr_31893_31964[2] = inst_31764);
(statearr_31893_31964[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 19))
{var inst_31740 = (state_31843[25]);var inst_31744 = cljs.core.chunk_first.call(null,inst_31740);var inst_31745 = cljs.core.chunk_rest.call(null,inst_31740);var inst_31746 = cljs.core.count.call(null,inst_31744);var inst_31720 = inst_31745;var inst_31721 = inst_31744;var inst_31722 = inst_31746;var inst_31723 = 0;var state_31843__$1 = (function (){var statearr_31894 = state_31843;(statearr_31894[14] = inst_31720);
(statearr_31894[15] = inst_31721);
(statearr_31894[16] = inst_31723);
(statearr_31894[17] = inst_31722);
return statearr_31894;
})();var statearr_31895_31965 = state_31843__$1;(statearr_31895_31965[2] = null);
(statearr_31895_31965[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 20))
{var inst_31740 = (state_31843[25]);var inst_31750 = cljs.core.first.call(null,inst_31740);var inst_31751 = cljs.core.nth.call(null,inst_31750,0,null);var inst_31752 = cljs.core.nth.call(null,inst_31750,1,null);var state_31843__$1 = (function (){var statearr_31896 = state_31843;(statearr_31896[28] = inst_31751);
return statearr_31896;
})();if(cljs.core.truth_(inst_31752))
{var statearr_31897_31966 = state_31843__$1;(statearr_31897_31966[1] = 22);
} else
{var statearr_31898_31967 = state_31843__$1;(statearr_31898_31967[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 21))
{var inst_31761 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31899_31968 = state_31843__$1;(statearr_31899_31968[2] = inst_31761);
(statearr_31899_31968[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 22))
{var inst_31751 = (state_31843[28]);var inst_31754 = cljs.core.async.close_BANG_.call(null,inst_31751);var state_31843__$1 = state_31843;var statearr_31900_31969 = state_31843__$1;(statearr_31900_31969[2] = inst_31754);
(statearr_31900_31969[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 23))
{var state_31843__$1 = state_31843;var statearr_31901_31970 = state_31843__$1;(statearr_31901_31970[2] = null);
(statearr_31901_31970[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 24))
{var inst_31740 = (state_31843[25]);var inst_31757 = (state_31843[2]);var inst_31758 = cljs.core.next.call(null,inst_31740);var inst_31720 = inst_31758;var inst_31721 = null;var inst_31722 = 0;var inst_31723 = 0;var state_31843__$1 = (function (){var statearr_31902 = state_31843;(statearr_31902[29] = inst_31757);
(statearr_31902[14] = inst_31720);
(statearr_31902[15] = inst_31721);
(statearr_31902[16] = inst_31723);
(statearr_31902[17] = inst_31722);
return statearr_31902;
})();var statearr_31903_31971 = state_31843__$1;(statearr_31903_31971[2] = null);
(statearr_31903_31971[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 25))
{var inst_31782 = (state_31843[10]);var inst_31781 = (state_31843[11]);var inst_31784 = (inst_31782 < inst_31781);var inst_31785 = inst_31784;var state_31843__$1 = state_31843;if(cljs.core.truth_(inst_31785))
{var statearr_31904_31972 = state_31843__$1;(statearr_31904_31972[1] = 27);
} else
{var statearr_31905_31973 = state_31843__$1;(statearr_31905_31973[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 26))
{var inst_31771 = (state_31843[19]);var inst_31829 = (state_31843[2]);var inst_31830 = cljs.core.seq.call(null,inst_31771);var state_31843__$1 = (function (){var statearr_31906 = state_31843;(statearr_31906[30] = inst_31829);
return statearr_31906;
})();if(inst_31830)
{var statearr_31907_31974 = state_31843__$1;(statearr_31907_31974[1] = 42);
} else
{var statearr_31908_31975 = state_31843__$1;(statearr_31908_31975[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 27))
{var inst_31782 = (state_31843[10]);var inst_31780 = (state_31843[12]);var inst_31787 = cljs.core._nth.call(null,inst_31780,inst_31782);var state_31843__$1 = (function (){var statearr_31909 = state_31843;(statearr_31909[8] = inst_31787);
return statearr_31909;
})();var statearr_31910_31976 = state_31843__$1;(statearr_31910_31976[2] = null);
(statearr_31910_31976[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 28))
{var inst_31800 = (state_31843[9]);var inst_31779 = (state_31843[13]);var inst_31800__$1 = cljs.core.seq.call(null,inst_31779);var state_31843__$1 = (function (){var statearr_31914 = state_31843;(statearr_31914[9] = inst_31800__$1);
return statearr_31914;
})();if(inst_31800__$1)
{var statearr_31915_31977 = state_31843__$1;(statearr_31915_31977[1] = 33);
} else
{var statearr_31916_31978 = state_31843__$1;(statearr_31916_31978[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 29))
{var inst_31827 = (state_31843[2]);var state_31843__$1 = state_31843;var statearr_31917_31979 = state_31843__$1;(statearr_31917_31979[2] = inst_31827);
(statearr_31917_31979[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 30))
{var inst_31782 = (state_31843[10]);var inst_31781 = (state_31843[11]);var inst_31780 = (state_31843[12]);var inst_31779 = (state_31843[13]);var inst_31796 = (state_31843[2]);var inst_31797 = (inst_31782 + 1);var tmp31911 = inst_31781;var tmp31912 = inst_31780;var tmp31913 = inst_31779;var inst_31779__$1 = tmp31913;var inst_31780__$1 = tmp31912;var inst_31781__$1 = tmp31911;var inst_31782__$1 = inst_31797;var state_31843__$1 = (function (){var statearr_31918 = state_31843;(statearr_31918[10] = inst_31782__$1);
(statearr_31918[11] = inst_31781__$1);
(statearr_31918[12] = inst_31780__$1);
(statearr_31918[31] = inst_31796);
(statearr_31918[13] = inst_31779__$1);
return statearr_31918;
})();var statearr_31919_31980 = state_31843__$1;(statearr_31919_31980[2] = null);
(statearr_31919_31980[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31844 === 31))
{var inst_31787 = (state_31843[8]);var inst_31788 = (state_31843[2]);var inst_31789 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31790 = cljs.core.async.untap_STAR_.call(null,m,inst_31787);var state_31843__$1 = (function (){var statearr_31920 = state_31843;(statearr_31920[32] = inst_31789);
(statearr_31920[33] = inst_31788);
return statearr_31920;
})();var statearr_31921_31981 = state_31843__$1;(statearr_31921_31981[2] = inst_31790);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31843__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31925 = (new Array(34));(statearr_31925[0] = state_machine__5792__auto__);
(statearr_31925[1] = 1);
return statearr_31925;
});
var state_machine__5792__auto____1 = (function (state_31843){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31843);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31926){if((e31926 instanceof Object))
{var ex__5795__auto__ = e31926;var statearr_31927_31982 = state_31843;(statearr_31927_31982[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31843);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31926;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31983 = state_31843;
state_31843 = G__31983;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31843){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31928 = f__5862__auto__.call(null);(statearr_31928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___31929);
return statearr_31928;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.Mix = (function (){var obj31985 = {};return obj31985;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t32095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32095 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32096){
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
this.meta32096 = meta32096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32095.cljs$lang$type = true;
cljs.core.async.t32095.cljs$lang$ctorStr = "cljs.core.async/t32095";
cljs.core.async.t32095.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t32095");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32097){var self__ = this;
var _32097__$1 = this;return self__.meta32096;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32097,meta32096__$1){var self__ = this;
var _32097__$1 = this;return (new cljs.core.async.t32095(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32096__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32095 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32095(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32096){return (new cljs.core.async.t32095(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32096));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32095(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5861__auto___32204 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32162){var state_val_32163 = (state_32162[1]);if((state_val_32163 === 1))
{var inst_32101 = (state_32162[7]);var inst_32101__$1 = calc_state.call(null);var inst_32102 = cljs.core.seq_QMARK_.call(null,inst_32101__$1);var state_32162__$1 = (function (){var statearr_32164 = state_32162;(statearr_32164[7] = inst_32101__$1);
return statearr_32164;
})();if(inst_32102)
{var statearr_32165_32205 = state_32162__$1;(statearr_32165_32205[1] = 2);
} else
{var statearr_32166_32206 = state_32162__$1;(statearr_32166_32206[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 2))
{var inst_32101 = (state_32162[7]);var inst_32104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32101);var state_32162__$1 = state_32162;var statearr_32167_32207 = state_32162__$1;(statearr_32167_32207[2] = inst_32104);
(statearr_32167_32207[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 3))
{var inst_32101 = (state_32162[7]);var state_32162__$1 = state_32162;var statearr_32168_32208 = state_32162__$1;(statearr_32168_32208[2] = inst_32101);
(statearr_32168_32208[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 4))
{var inst_32101 = (state_32162[7]);var inst_32107 = (state_32162[2]);var inst_32108 = cljs.core.get.call(null,inst_32107,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32109 = cljs.core.get.call(null,inst_32107,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32110 = cljs.core.get.call(null,inst_32107,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32111 = inst_32101;var state_32162__$1 = (function (){var statearr_32169 = state_32162;(statearr_32169[8] = inst_32111);
(statearr_32169[9] = inst_32110);
(statearr_32169[10] = inst_32108);
(statearr_32169[11] = inst_32109);
return statearr_32169;
})();var statearr_32170_32209 = state_32162__$1;(statearr_32170_32209[2] = null);
(statearr_32170_32209[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 5))
{var inst_32111 = (state_32162[8]);var inst_32114 = cljs.core.seq_QMARK_.call(null,inst_32111);var state_32162__$1 = state_32162;if(inst_32114)
{var statearr_32171_32210 = state_32162__$1;(statearr_32171_32210[1] = 7);
} else
{var statearr_32172_32211 = state_32162__$1;(statearr_32172_32211[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 6))
{var inst_32160 = (state_32162[2]);var state_32162__$1 = state_32162;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32162__$1,inst_32160);
} else
{if((state_val_32163 === 7))
{var inst_32111 = (state_32162[8]);var inst_32116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32111);var state_32162__$1 = state_32162;var statearr_32173_32212 = state_32162__$1;(statearr_32173_32212[2] = inst_32116);
(statearr_32173_32212[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 8))
{var inst_32111 = (state_32162[8]);var state_32162__$1 = state_32162;var statearr_32174_32213 = state_32162__$1;(statearr_32174_32213[2] = inst_32111);
(statearr_32174_32213[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 9))
{var inst_32119 = (state_32162[12]);var inst_32119__$1 = (state_32162[2]);var inst_32120 = cljs.core.get.call(null,inst_32119__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32121 = cljs.core.get.call(null,inst_32119__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32122 = cljs.core.get.call(null,inst_32119__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_32162__$1 = (function (){var statearr_32175 = state_32162;(statearr_32175[12] = inst_32119__$1);
(statearr_32175[13] = inst_32122);
(statearr_32175[14] = inst_32121);
return statearr_32175;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32162__$1,10,inst_32120);
} else
{if((state_val_32163 === 10))
{var inst_32126 = (state_32162[15]);var inst_32127 = (state_32162[16]);var inst_32125 = (state_32162[2]);var inst_32126__$1 = cljs.core.nth.call(null,inst_32125,0,null);var inst_32127__$1 = cljs.core.nth.call(null,inst_32125,1,null);var inst_32128 = (inst_32126__$1 == null);var inst_32129 = cljs.core._EQ_.call(null,inst_32127__$1,change);var inst_32130 = (inst_32128) || (inst_32129);var state_32162__$1 = (function (){var statearr_32176 = state_32162;(statearr_32176[15] = inst_32126__$1);
(statearr_32176[16] = inst_32127__$1);
return statearr_32176;
})();if(cljs.core.truth_(inst_32130))
{var statearr_32177_32214 = state_32162__$1;(statearr_32177_32214[1] = 11);
} else
{var statearr_32178_32215 = state_32162__$1;(statearr_32178_32215[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 11))
{var inst_32126 = (state_32162[15]);var inst_32132 = (inst_32126 == null);var state_32162__$1 = state_32162;if(cljs.core.truth_(inst_32132))
{var statearr_32179_32216 = state_32162__$1;(statearr_32179_32216[1] = 14);
} else
{var statearr_32180_32217 = state_32162__$1;(statearr_32180_32217[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 12))
{var inst_32141 = (state_32162[17]);var inst_32127 = (state_32162[16]);var inst_32122 = (state_32162[13]);var inst_32141__$1 = inst_32122.call(null,inst_32127);var state_32162__$1 = (function (){var statearr_32181 = state_32162;(statearr_32181[17] = inst_32141__$1);
return statearr_32181;
})();if(cljs.core.truth_(inst_32141__$1))
{var statearr_32182_32218 = state_32162__$1;(statearr_32182_32218[1] = 17);
} else
{var statearr_32183_32219 = state_32162__$1;(statearr_32183_32219[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 13))
{var inst_32158 = (state_32162[2]);var state_32162__$1 = state_32162;var statearr_32184_32220 = state_32162__$1;(statearr_32184_32220[2] = inst_32158);
(statearr_32184_32220[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 14))
{var inst_32127 = (state_32162[16]);var inst_32134 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32127);var state_32162__$1 = state_32162;var statearr_32185_32221 = state_32162__$1;(statearr_32185_32221[2] = inst_32134);
(statearr_32185_32221[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 15))
{var state_32162__$1 = state_32162;var statearr_32186_32222 = state_32162__$1;(statearr_32186_32222[2] = null);
(statearr_32186_32222[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 16))
{var inst_32137 = (state_32162[2]);var inst_32138 = calc_state.call(null);var inst_32111 = inst_32138;var state_32162__$1 = (function (){var statearr_32187 = state_32162;(statearr_32187[8] = inst_32111);
(statearr_32187[18] = inst_32137);
return statearr_32187;
})();var statearr_32188_32223 = state_32162__$1;(statearr_32188_32223[2] = null);
(statearr_32188_32223[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 17))
{var inst_32141 = (state_32162[17]);var state_32162__$1 = state_32162;var statearr_32189_32224 = state_32162__$1;(statearr_32189_32224[2] = inst_32141);
(statearr_32189_32224[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 18))
{var inst_32127 = (state_32162[16]);var inst_32122 = (state_32162[13]);var inst_32121 = (state_32162[14]);var inst_32144 = cljs.core.empty_QMARK_.call(null,inst_32122);var inst_32145 = inst_32121.call(null,inst_32127);var inst_32146 = cljs.core.not.call(null,inst_32145);var inst_32147 = (inst_32144) && (inst_32146);var state_32162__$1 = state_32162;var statearr_32190_32225 = state_32162__$1;(statearr_32190_32225[2] = inst_32147);
(statearr_32190_32225[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 19))
{var inst_32149 = (state_32162[2]);var state_32162__$1 = state_32162;if(cljs.core.truth_(inst_32149))
{var statearr_32191_32226 = state_32162__$1;(statearr_32191_32226[1] = 20);
} else
{var statearr_32192_32227 = state_32162__$1;(statearr_32192_32227[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 20))
{var inst_32126 = (state_32162[15]);var state_32162__$1 = state_32162;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32162__$1,23,out,inst_32126);
} else
{if((state_val_32163 === 21))
{var state_32162__$1 = state_32162;var statearr_32193_32228 = state_32162__$1;(statearr_32193_32228[2] = null);
(statearr_32193_32228[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 22))
{var inst_32119 = (state_32162[12]);var inst_32155 = (state_32162[2]);var inst_32111 = inst_32119;var state_32162__$1 = (function (){var statearr_32194 = state_32162;(statearr_32194[8] = inst_32111);
(statearr_32194[19] = inst_32155);
return statearr_32194;
})();var statearr_32195_32229 = state_32162__$1;(statearr_32195_32229[2] = null);
(statearr_32195_32229[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32163 === 23))
{var inst_32152 = (state_32162[2]);var state_32162__$1 = state_32162;var statearr_32196_32230 = state_32162__$1;(statearr_32196_32230[2] = inst_32152);
(statearr_32196_32230[1] = 22);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32200 = (new Array(20));(statearr_32200[0] = state_machine__5792__auto__);
(statearr_32200[1] = 1);
return statearr_32200;
});
var state_machine__5792__auto____1 = (function (state_32162){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32162);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32201){if((e32201 instanceof Object))
{var ex__5795__auto__ = e32201;var statearr_32202_32231 = state_32162;(statearr_32202_32231[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32162);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32201;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32232 = state_32162;
state_32162 = G__32232;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32162){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32203 = f__5862__auto__.call(null);(statearr_32203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32204);
return statearr_32203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.Pub = (function (){var obj32234 = {};return obj32234;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3291__auto__,mults){
return (function (p1__32235_SHARP_){if(cljs.core.truth_(p1__32235_SHARP_.call(null,topic)))
{return p1__32235_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32235_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32360 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32361){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32361 = meta32361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32360.cljs$lang$type = true;
cljs.core.async.t32360.cljs$lang$ctorStr = "cljs.core.async/t32360";
cljs.core.async.t32360.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t32360");
});})(mults,ensure_mult))
;
cljs.core.async.t32360.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32360.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32360.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32360.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32360.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32360.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32362){var self__ = this;
var _32362__$1 = this;return self__.meta32361;
});})(mults,ensure_mult))
;
cljs.core.async.t32360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32362,meta32361__$1){var self__ = this;
var _32362__$1 = this;return (new cljs.core.async.t32360(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32361__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32360 = ((function (mults,ensure_mult){
return (function __GT_t32360(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32361){return (new cljs.core.async.t32360(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32361));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32360(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5861__auto___32484 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32436){var state_val_32437 = (state_32436[1]);if((state_val_32437 === 1))
{var state_32436__$1 = state_32436;var statearr_32438_32485 = state_32436__$1;(statearr_32438_32485[2] = null);
(statearr_32438_32485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 2))
{var state_32436__$1 = state_32436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32436__$1,4,ch);
} else
{if((state_val_32437 === 3))
{var inst_32434 = (state_32436[2]);var state_32436__$1 = state_32436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32436__$1,inst_32434);
} else
{if((state_val_32437 === 4))
{var inst_32365 = (state_32436[7]);var inst_32365__$1 = (state_32436[2]);var inst_32366 = (inst_32365__$1 == null);var state_32436__$1 = (function (){var statearr_32439 = state_32436;(statearr_32439[7] = inst_32365__$1);
return statearr_32439;
})();if(cljs.core.truth_(inst_32366))
{var statearr_32440_32486 = state_32436__$1;(statearr_32440_32486[1] = 5);
} else
{var statearr_32441_32487 = state_32436__$1;(statearr_32441_32487[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 5))
{var inst_32372 = cljs.core.deref.call(null,mults);var inst_32373 = cljs.core.vals.call(null,inst_32372);var inst_32374 = cljs.core.seq.call(null,inst_32373);var inst_32375 = inst_32374;var inst_32376 = null;var inst_32377 = 0;var inst_32378 = 0;var state_32436__$1 = (function (){var statearr_32442 = state_32436;(statearr_32442[8] = inst_32378);
(statearr_32442[9] = inst_32377);
(statearr_32442[10] = inst_32376);
(statearr_32442[11] = inst_32375);
return statearr_32442;
})();var statearr_32443_32488 = state_32436__$1;(statearr_32443_32488[2] = null);
(statearr_32443_32488[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 6))
{var inst_32413 = (state_32436[12]);var inst_32415 = (state_32436[13]);var inst_32365 = (state_32436[7]);var inst_32413__$1 = topic_fn.call(null,inst_32365);var inst_32414 = cljs.core.deref.call(null,mults);var inst_32415__$1 = cljs.core.get.call(null,inst_32414,inst_32413__$1);var state_32436__$1 = (function (){var statearr_32444 = state_32436;(statearr_32444[12] = inst_32413__$1);
(statearr_32444[13] = inst_32415__$1);
return statearr_32444;
})();if(cljs.core.truth_(inst_32415__$1))
{var statearr_32445_32489 = state_32436__$1;(statearr_32445_32489[1] = 19);
} else
{var statearr_32446_32490 = state_32436__$1;(statearr_32446_32490[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 7))
{var inst_32432 = (state_32436[2]);var state_32436__$1 = state_32436;var statearr_32447_32491 = state_32436__$1;(statearr_32447_32491[2] = inst_32432);
(statearr_32447_32491[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 8))
{var inst_32378 = (state_32436[8]);var inst_32377 = (state_32436[9]);var inst_32380 = (inst_32378 < inst_32377);var inst_32381 = inst_32380;var state_32436__$1 = state_32436;if(cljs.core.truth_(inst_32381))
{var statearr_32451_32492 = state_32436__$1;(statearr_32451_32492[1] = 10);
} else
{var statearr_32452_32493 = state_32436__$1;(statearr_32452_32493[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 9))
{var inst_32411 = (state_32436[2]);var state_32436__$1 = state_32436;var statearr_32453_32494 = state_32436__$1;(statearr_32453_32494[2] = inst_32411);
(statearr_32453_32494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 10))
{var inst_32378 = (state_32436[8]);var inst_32377 = (state_32436[9]);var inst_32376 = (state_32436[10]);var inst_32375 = (state_32436[11]);var inst_32383 = cljs.core._nth.call(null,inst_32376,inst_32378);var inst_32384 = cljs.core.async.muxch_STAR_.call(null,inst_32383);var inst_32385 = cljs.core.async.close_BANG_.call(null,inst_32384);var inst_32386 = (inst_32378 + 1);var tmp32448 = inst_32377;var tmp32449 = inst_32376;var tmp32450 = inst_32375;var inst_32375__$1 = tmp32450;var inst_32376__$1 = tmp32449;var inst_32377__$1 = tmp32448;var inst_32378__$1 = inst_32386;var state_32436__$1 = (function (){var statearr_32454 = state_32436;(statearr_32454[8] = inst_32378__$1);
(statearr_32454[14] = inst_32385);
(statearr_32454[9] = inst_32377__$1);
(statearr_32454[10] = inst_32376__$1);
(statearr_32454[11] = inst_32375__$1);
return statearr_32454;
})();var statearr_32455_32495 = state_32436__$1;(statearr_32455_32495[2] = null);
(statearr_32455_32495[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 11))
{var inst_32389 = (state_32436[15]);var inst_32375 = (state_32436[11]);var inst_32389__$1 = cljs.core.seq.call(null,inst_32375);var state_32436__$1 = (function (){var statearr_32456 = state_32436;(statearr_32456[15] = inst_32389__$1);
return statearr_32456;
})();if(inst_32389__$1)
{var statearr_32457_32496 = state_32436__$1;(statearr_32457_32496[1] = 13);
} else
{var statearr_32458_32497 = state_32436__$1;(statearr_32458_32497[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 12))
{var inst_32409 = (state_32436[2]);var state_32436__$1 = state_32436;var statearr_32459_32498 = state_32436__$1;(statearr_32459_32498[2] = inst_32409);
(statearr_32459_32498[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 13))
{var inst_32389 = (state_32436[15]);var inst_32391 = cljs.core.chunked_seq_QMARK_.call(null,inst_32389);var state_32436__$1 = state_32436;if(inst_32391)
{var statearr_32460_32499 = state_32436__$1;(statearr_32460_32499[1] = 16);
} else
{var statearr_32461_32500 = state_32436__$1;(statearr_32461_32500[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 14))
{var state_32436__$1 = state_32436;var statearr_32462_32501 = state_32436__$1;(statearr_32462_32501[2] = null);
(statearr_32462_32501[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 15))
{var inst_32407 = (state_32436[2]);var state_32436__$1 = state_32436;var statearr_32463_32502 = state_32436__$1;(statearr_32463_32502[2] = inst_32407);
(statearr_32463_32502[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 16))
{var inst_32389 = (state_32436[15]);var inst_32393 = cljs.core.chunk_first.call(null,inst_32389);var inst_32394 = cljs.core.chunk_rest.call(null,inst_32389);var inst_32395 = cljs.core.count.call(null,inst_32393);var inst_32375 = inst_32394;var inst_32376 = inst_32393;var inst_32377 = inst_32395;var inst_32378 = 0;var state_32436__$1 = (function (){var statearr_32464 = state_32436;(statearr_32464[8] = inst_32378);
(statearr_32464[9] = inst_32377);
(statearr_32464[10] = inst_32376);
(statearr_32464[11] = inst_32375);
return statearr_32464;
})();var statearr_32465_32503 = state_32436__$1;(statearr_32465_32503[2] = null);
(statearr_32465_32503[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 17))
{var inst_32389 = (state_32436[15]);var inst_32398 = cljs.core.first.call(null,inst_32389);var inst_32399 = cljs.core.async.muxch_STAR_.call(null,inst_32398);var inst_32400 = cljs.core.async.close_BANG_.call(null,inst_32399);var inst_32401 = cljs.core.next.call(null,inst_32389);var inst_32375 = inst_32401;var inst_32376 = null;var inst_32377 = 0;var inst_32378 = 0;var state_32436__$1 = (function (){var statearr_32466 = state_32436;(statearr_32466[8] = inst_32378);
(statearr_32466[16] = inst_32400);
(statearr_32466[9] = inst_32377);
(statearr_32466[10] = inst_32376);
(statearr_32466[11] = inst_32375);
return statearr_32466;
})();var statearr_32467_32504 = state_32436__$1;(statearr_32467_32504[2] = null);
(statearr_32467_32504[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 18))
{var inst_32404 = (state_32436[2]);var state_32436__$1 = state_32436;var statearr_32468_32505 = state_32436__$1;(statearr_32468_32505[2] = inst_32404);
(statearr_32468_32505[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 19))
{var state_32436__$1 = state_32436;var statearr_32469_32506 = state_32436__$1;(statearr_32469_32506[2] = null);
(statearr_32469_32506[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 20))
{var state_32436__$1 = state_32436;var statearr_32470_32507 = state_32436__$1;(statearr_32470_32507[2] = null);
(statearr_32470_32507[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 21))
{var inst_32429 = (state_32436[2]);var state_32436__$1 = (function (){var statearr_32471 = state_32436;(statearr_32471[17] = inst_32429);
return statearr_32471;
})();var statearr_32472_32508 = state_32436__$1;(statearr_32472_32508[2] = null);
(statearr_32472_32508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 22))
{var inst_32426 = (state_32436[2]);var state_32436__$1 = state_32436;var statearr_32473_32509 = state_32436__$1;(statearr_32473_32509[2] = inst_32426);
(statearr_32473_32509[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 23))
{var inst_32413 = (state_32436[12]);var inst_32417 = (state_32436[2]);var inst_32418 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32413);var state_32436__$1 = (function (){var statearr_32474 = state_32436;(statearr_32474[18] = inst_32417);
return statearr_32474;
})();var statearr_32475_32510 = state_32436__$1;(statearr_32475_32510[2] = inst_32418);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32436__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32437 === 24))
{var inst_32415 = (state_32436[13]);var inst_32365 = (state_32436[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32436,23,Object,null,22);var inst_32422 = cljs.core.async.muxch_STAR_.call(null,inst_32415);var state_32436__$1 = state_32436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32436__$1,25,inst_32422,inst_32365);
} else
{if((state_val_32437 === 25))
{var inst_32424 = (state_32436[2]);var state_32436__$1 = state_32436;var statearr_32476_32511 = state_32436__$1;(statearr_32476_32511[2] = inst_32424);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32436__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32480 = (new Array(19));(statearr_32480[0] = state_machine__5792__auto__);
(statearr_32480[1] = 1);
return statearr_32480;
});
var state_machine__5792__auto____1 = (function (state_32436){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32436);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32481){if((e32481 instanceof Object))
{var ex__5795__auto__ = e32481;var statearr_32482_32512 = state_32436;(statearr_32482_32512[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32513 = state_32436;
state_32436 = G__32513;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32436){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32483 = f__5862__auto__.call(null);(statearr_32483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32484);
return statearr_32483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
,cljs.core.range.call(null,cnt));var c__5861__auto___32650 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32620){var state_val_32621 = (state_32620[1]);if((state_val_32621 === 1))
{var state_32620__$1 = state_32620;var statearr_32622_32651 = state_32620__$1;(statearr_32622_32651[2] = null);
(statearr_32622_32651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 2))
{var inst_32583 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32584 = 0;var state_32620__$1 = (function (){var statearr_32623 = state_32620;(statearr_32623[7] = inst_32584);
(statearr_32623[8] = inst_32583);
return statearr_32623;
})();var statearr_32624_32652 = state_32620__$1;(statearr_32624_32652[2] = null);
(statearr_32624_32652[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 3))
{var inst_32618 = (state_32620[2]);var state_32620__$1 = state_32620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32620__$1,inst_32618);
} else
{if((state_val_32621 === 4))
{var inst_32584 = (state_32620[7]);var inst_32586 = (inst_32584 < cnt);var state_32620__$1 = state_32620;if(cljs.core.truth_(inst_32586))
{var statearr_32625_32653 = state_32620__$1;(statearr_32625_32653[1] = 6);
} else
{var statearr_32626_32654 = state_32620__$1;(statearr_32626_32654[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 5))
{var inst_32604 = (state_32620[2]);var state_32620__$1 = (function (){var statearr_32627 = state_32620;(statearr_32627[9] = inst_32604);
return statearr_32627;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32620__$1,12,dchan);
} else
{if((state_val_32621 === 6))
{var state_32620__$1 = state_32620;var statearr_32628_32655 = state_32620__$1;(statearr_32628_32655[2] = null);
(statearr_32628_32655[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 7))
{var state_32620__$1 = state_32620;var statearr_32629_32656 = state_32620__$1;(statearr_32629_32656[2] = null);
(statearr_32629_32656[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 8))
{var inst_32602 = (state_32620[2]);var state_32620__$1 = state_32620;var statearr_32630_32657 = state_32620__$1;(statearr_32630_32657[2] = inst_32602);
(statearr_32630_32657[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 9))
{var inst_32584 = (state_32620[7]);var inst_32597 = (state_32620[2]);var inst_32598 = (inst_32584 + 1);var inst_32584__$1 = inst_32598;var state_32620__$1 = (function (){var statearr_32631 = state_32620;(statearr_32631[10] = inst_32597);
(statearr_32631[7] = inst_32584__$1);
return statearr_32631;
})();var statearr_32632_32658 = state_32620__$1;(statearr_32632_32658[2] = null);
(statearr_32632_32658[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 10))
{var inst_32588 = (state_32620[2]);var inst_32589 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_32620__$1 = (function (){var statearr_32633 = state_32620;(statearr_32633[11] = inst_32588);
return statearr_32633;
})();var statearr_32634_32659 = state_32620__$1;(statearr_32634_32659[2] = inst_32589);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 11))
{var inst_32584 = (state_32620[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32620,10,Object,null,9);var inst_32593 = chs__$1.call(null,inst_32584);var inst_32594 = done.call(null,inst_32584);var inst_32595 = cljs.core.async.take_BANG_.call(null,inst_32593,inst_32594);var state_32620__$1 = state_32620;var statearr_32635_32660 = state_32620__$1;(statearr_32635_32660[2] = inst_32595);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 12))
{var inst_32606 = (state_32620[12]);var inst_32606__$1 = (state_32620[2]);var inst_32607 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32606__$1);var state_32620__$1 = (function (){var statearr_32636 = state_32620;(statearr_32636[12] = inst_32606__$1);
return statearr_32636;
})();if(cljs.core.truth_(inst_32607))
{var statearr_32637_32661 = state_32620__$1;(statearr_32637_32661[1] = 13);
} else
{var statearr_32638_32662 = state_32620__$1;(statearr_32638_32662[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 13))
{var inst_32609 = cljs.core.async.close_BANG_.call(null,out);var state_32620__$1 = state_32620;var statearr_32639_32663 = state_32620__$1;(statearr_32639_32663[2] = inst_32609);
(statearr_32639_32663[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 14))
{var inst_32606 = (state_32620[12]);var inst_32611 = cljs.core.apply.call(null,f,inst_32606);var state_32620__$1 = state_32620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32620__$1,16,out,inst_32611);
} else
{if((state_val_32621 === 15))
{var inst_32616 = (state_32620[2]);var state_32620__$1 = state_32620;var statearr_32640_32664 = state_32620__$1;(statearr_32640_32664[2] = inst_32616);
(statearr_32640_32664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32621 === 16))
{var inst_32613 = (state_32620[2]);var state_32620__$1 = (function (){var statearr_32641 = state_32620;(statearr_32641[13] = inst_32613);
return statearr_32641;
})();var statearr_32642_32665 = state_32620__$1;(statearr_32642_32665[2] = null);
(statearr_32642_32665[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32646 = (new Array(14));(statearr_32646[0] = state_machine__5792__auto__);
(statearr_32646[1] = 1);
return statearr_32646;
});
var state_machine__5792__auto____1 = (function (state_32620){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32647){if((e32647 instanceof Object))
{var ex__5795__auto__ = e32647;var statearr_32648_32666 = state_32620;(statearr_32648_32666[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32667 = state_32620;
state_32620 = G__32667;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32620){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32649 = f__5862__auto__.call(null);(statearr_32649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32650);
return statearr_32649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___32775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32751){var state_val_32752 = (state_32751[1]);if((state_val_32752 === 1))
{var inst_32722 = cljs.core.vec.call(null,chs);var inst_32723 = inst_32722;var state_32751__$1 = (function (){var statearr_32753 = state_32751;(statearr_32753[7] = inst_32723);
return statearr_32753;
})();var statearr_32754_32776 = state_32751__$1;(statearr_32754_32776[2] = null);
(statearr_32754_32776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32752 === 2))
{var inst_32723 = (state_32751[7]);var inst_32725 = cljs.core.count.call(null,inst_32723);var inst_32726 = (inst_32725 > 0);var state_32751__$1 = state_32751;if(cljs.core.truth_(inst_32726))
{var statearr_32755_32777 = state_32751__$1;(statearr_32755_32777[1] = 4);
} else
{var statearr_32756_32778 = state_32751__$1;(statearr_32756_32778[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32752 === 3))
{var inst_32749 = (state_32751[2]);var state_32751__$1 = state_32751;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32751__$1,inst_32749);
} else
{if((state_val_32752 === 4))
{var inst_32723 = (state_32751[7]);var state_32751__$1 = state_32751;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32751__$1,7,inst_32723);
} else
{if((state_val_32752 === 5))
{var inst_32745 = cljs.core.async.close_BANG_.call(null,out);var state_32751__$1 = state_32751;var statearr_32757_32779 = state_32751__$1;(statearr_32757_32779[2] = inst_32745);
(statearr_32757_32779[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32752 === 6))
{var inst_32747 = (state_32751[2]);var state_32751__$1 = state_32751;var statearr_32758_32780 = state_32751__$1;(statearr_32758_32780[2] = inst_32747);
(statearr_32758_32780[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32752 === 7))
{var inst_32730 = (state_32751[8]);var inst_32731 = (state_32751[9]);var inst_32730__$1 = (state_32751[2]);var inst_32731__$1 = cljs.core.nth.call(null,inst_32730__$1,0,null);var inst_32732 = cljs.core.nth.call(null,inst_32730__$1,1,null);var inst_32733 = (inst_32731__$1 == null);var state_32751__$1 = (function (){var statearr_32759 = state_32751;(statearr_32759[8] = inst_32730__$1);
(statearr_32759[9] = inst_32731__$1);
(statearr_32759[10] = inst_32732);
return statearr_32759;
})();if(cljs.core.truth_(inst_32733))
{var statearr_32760_32781 = state_32751__$1;(statearr_32760_32781[1] = 8);
} else
{var statearr_32761_32782 = state_32751__$1;(statearr_32761_32782[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32752 === 8))
{var inst_32723 = (state_32751[7]);var inst_32730 = (state_32751[8]);var inst_32731 = (state_32751[9]);var inst_32732 = (state_32751[10]);var inst_32735 = (function (){var c = inst_32732;var v = inst_32731;var vec__32728 = inst_32730;var cs = inst_32723;return ((function (c,v,vec__32728,cs,inst_32723,inst_32730,inst_32731,inst_32732,state_val_32752){
return (function (p1__32668_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__32668_SHARP_);
});
;})(c,v,vec__32728,cs,inst_32723,inst_32730,inst_32731,inst_32732,state_val_32752))
})();var inst_32736 = cljs.core.filterv.call(null,inst_32735,inst_32723);var inst_32723__$1 = inst_32736;var state_32751__$1 = (function (){var statearr_32762 = state_32751;(statearr_32762[7] = inst_32723__$1);
return statearr_32762;
})();var statearr_32763_32783 = state_32751__$1;(statearr_32763_32783[2] = null);
(statearr_32763_32783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32752 === 9))
{var inst_32731 = (state_32751[9]);var state_32751__$1 = state_32751;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32751__$1,11,out,inst_32731);
} else
{if((state_val_32752 === 10))
{var inst_32743 = (state_32751[2]);var state_32751__$1 = state_32751;var statearr_32765_32784 = state_32751__$1;(statearr_32765_32784[2] = inst_32743);
(statearr_32765_32784[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32752 === 11))
{var inst_32723 = (state_32751[7]);var inst_32740 = (state_32751[2]);var tmp32764 = inst_32723;var inst_32723__$1 = tmp32764;var state_32751__$1 = (function (){var statearr_32766 = state_32751;(statearr_32766[7] = inst_32723__$1);
(statearr_32766[11] = inst_32740);
return statearr_32766;
})();var statearr_32767_32785 = state_32751__$1;(statearr_32767_32785[2] = null);
(statearr_32767_32785[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32771 = (new Array(12));(statearr_32771[0] = state_machine__5792__auto__);
(statearr_32771[1] = 1);
return statearr_32771;
});
var state_machine__5792__auto____1 = (function (state_32751){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32751);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32772){if((e32772 instanceof Object))
{var ex__5795__auto__ = e32772;var statearr_32773_32786 = state_32751;(statearr_32773_32786[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32751);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32787 = state_32751;
state_32751 = G__32787;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32751){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32774 = f__5862__auto__.call(null);(statearr_32774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32775);
return statearr_32774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___32880 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32857){var state_val_32858 = (state_32857[1]);if((state_val_32858 === 1))
{var inst_32834 = 0;var state_32857__$1 = (function (){var statearr_32859 = state_32857;(statearr_32859[7] = inst_32834);
return statearr_32859;
})();var statearr_32860_32881 = state_32857__$1;(statearr_32860_32881[2] = null);
(statearr_32860_32881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32858 === 2))
{var inst_32834 = (state_32857[7]);var inst_32836 = (inst_32834 < n);var state_32857__$1 = state_32857;if(cljs.core.truth_(inst_32836))
{var statearr_32861_32882 = state_32857__$1;(statearr_32861_32882[1] = 4);
} else
{var statearr_32862_32883 = state_32857__$1;(statearr_32862_32883[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32858 === 3))
{var inst_32854 = (state_32857[2]);var inst_32855 = cljs.core.async.close_BANG_.call(null,out);var state_32857__$1 = (function (){var statearr_32863 = state_32857;(statearr_32863[8] = inst_32854);
return statearr_32863;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32857__$1,inst_32855);
} else
{if((state_val_32858 === 4))
{var state_32857__$1 = state_32857;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32857__$1,7,ch);
} else
{if((state_val_32858 === 5))
{var state_32857__$1 = state_32857;var statearr_32864_32884 = state_32857__$1;(statearr_32864_32884[2] = null);
(statearr_32864_32884[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32858 === 6))
{var inst_32852 = (state_32857[2]);var state_32857__$1 = state_32857;var statearr_32865_32885 = state_32857__$1;(statearr_32865_32885[2] = inst_32852);
(statearr_32865_32885[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32858 === 7))
{var inst_32839 = (state_32857[9]);var inst_32839__$1 = (state_32857[2]);var inst_32840 = (inst_32839__$1 == null);var inst_32841 = cljs.core.not.call(null,inst_32840);var state_32857__$1 = (function (){var statearr_32866 = state_32857;(statearr_32866[9] = inst_32839__$1);
return statearr_32866;
})();if(inst_32841)
{var statearr_32867_32886 = state_32857__$1;(statearr_32867_32886[1] = 8);
} else
{var statearr_32868_32887 = state_32857__$1;(statearr_32868_32887[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32858 === 8))
{var inst_32839 = (state_32857[9]);var state_32857__$1 = state_32857;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32857__$1,11,out,inst_32839);
} else
{if((state_val_32858 === 9))
{var state_32857__$1 = state_32857;var statearr_32869_32888 = state_32857__$1;(statearr_32869_32888[2] = null);
(statearr_32869_32888[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32858 === 10))
{var inst_32849 = (state_32857[2]);var state_32857__$1 = state_32857;var statearr_32870_32889 = state_32857__$1;(statearr_32870_32889[2] = inst_32849);
(statearr_32870_32889[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32858 === 11))
{var inst_32834 = (state_32857[7]);var inst_32844 = (state_32857[2]);var inst_32845 = (inst_32834 + 1);var inst_32834__$1 = inst_32845;var state_32857__$1 = (function (){var statearr_32871 = state_32857;(statearr_32871[7] = inst_32834__$1);
(statearr_32871[10] = inst_32844);
return statearr_32871;
})();var statearr_32872_32890 = state_32857__$1;(statearr_32872_32890[2] = null);
(statearr_32872_32890[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32876 = (new Array(11));(statearr_32876[0] = state_machine__5792__auto__);
(statearr_32876[1] = 1);
return statearr_32876;
});
var state_machine__5792__auto____1 = (function (state_32857){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32857);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object))
{var ex__5795__auto__ = e32877;var statearr_32878_32891 = state_32857;(statearr_32878_32891[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32857);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32892 = state_32857;
state_32857 = G__32892;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32857){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32879 = f__5862__auto__.call(null);(statearr_32879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32880);
return statearr_32879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___32989 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32964){var state_val_32965 = (state_32964[1]);if((state_val_32965 === 1))
{var inst_32941 = null;var state_32964__$1 = (function (){var statearr_32966 = state_32964;(statearr_32966[7] = inst_32941);
return statearr_32966;
})();var statearr_32967_32990 = state_32964__$1;(statearr_32967_32990[2] = null);
(statearr_32967_32990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32965 === 2))
{var state_32964__$1 = state_32964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32964__$1,4,ch);
} else
{if((state_val_32965 === 3))
{var inst_32961 = (state_32964[2]);var inst_32962 = cljs.core.async.close_BANG_.call(null,out);var state_32964__$1 = (function (){var statearr_32968 = state_32964;(statearr_32968[8] = inst_32961);
return statearr_32968;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32964__$1,inst_32962);
} else
{if((state_val_32965 === 4))
{var inst_32944 = (state_32964[9]);var inst_32944__$1 = (state_32964[2]);var inst_32945 = (inst_32944__$1 == null);var inst_32946 = cljs.core.not.call(null,inst_32945);var state_32964__$1 = (function (){var statearr_32969 = state_32964;(statearr_32969[9] = inst_32944__$1);
return statearr_32969;
})();if(inst_32946)
{var statearr_32970_32991 = state_32964__$1;(statearr_32970_32991[1] = 5);
} else
{var statearr_32971_32992 = state_32964__$1;(statearr_32971_32992[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32965 === 5))
{var inst_32941 = (state_32964[7]);var inst_32944 = (state_32964[9]);var inst_32948 = cljs.core._EQ_.call(null,inst_32944,inst_32941);var state_32964__$1 = state_32964;if(inst_32948)
{var statearr_32972_32993 = state_32964__$1;(statearr_32972_32993[1] = 8);
} else
{var statearr_32973_32994 = state_32964__$1;(statearr_32973_32994[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32965 === 6))
{var state_32964__$1 = state_32964;var statearr_32975_32995 = state_32964__$1;(statearr_32975_32995[2] = null);
(statearr_32975_32995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32965 === 7))
{var inst_32959 = (state_32964[2]);var state_32964__$1 = state_32964;var statearr_32976_32996 = state_32964__$1;(statearr_32976_32996[2] = inst_32959);
(statearr_32976_32996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32965 === 8))
{var inst_32941 = (state_32964[7]);var tmp32974 = inst_32941;var inst_32941__$1 = tmp32974;var state_32964__$1 = (function (){var statearr_32977 = state_32964;(statearr_32977[7] = inst_32941__$1);
return statearr_32977;
})();var statearr_32978_32997 = state_32964__$1;(statearr_32978_32997[2] = null);
(statearr_32978_32997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32965 === 9))
{var inst_32944 = (state_32964[9]);var state_32964__$1 = state_32964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32964__$1,11,out,inst_32944);
} else
{if((state_val_32965 === 10))
{var inst_32956 = (state_32964[2]);var state_32964__$1 = state_32964;var statearr_32979_32998 = state_32964__$1;(statearr_32979_32998[2] = inst_32956);
(statearr_32979_32998[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32965 === 11))
{var inst_32944 = (state_32964[9]);var inst_32953 = (state_32964[2]);var inst_32941 = inst_32944;var state_32964__$1 = (function (){var statearr_32980 = state_32964;(statearr_32980[7] = inst_32941);
(statearr_32980[10] = inst_32953);
return statearr_32980;
})();var statearr_32981_32999 = state_32964__$1;(statearr_32981_32999[2] = null);
(statearr_32981_32999[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32985 = (new Array(11));(statearr_32985[0] = state_machine__5792__auto__);
(statearr_32985[1] = 1);
return statearr_32985;
});
var state_machine__5792__auto____1 = (function (state_32964){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32964);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32986){if((e32986 instanceof Object))
{var ex__5795__auto__ = e32986;var statearr_32987_33000 = state_32964;(statearr_32987_33000[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33001 = state_32964;
state_32964 = G__33001;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32964){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32988 = f__5862__auto__.call(null);(statearr_32988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32989);
return statearr_32988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___33136 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33106){var state_val_33107 = (state_33106[1]);if((state_val_33107 === 1))
{var inst_33069 = (new Array(n));var inst_33070 = inst_33069;var inst_33071 = 0;var state_33106__$1 = (function (){var statearr_33108 = state_33106;(statearr_33108[7] = inst_33071);
(statearr_33108[8] = inst_33070);
return statearr_33108;
})();var statearr_33109_33137 = state_33106__$1;(statearr_33109_33137[2] = null);
(statearr_33109_33137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 2))
{var state_33106__$1 = state_33106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33106__$1,4,ch);
} else
{if((state_val_33107 === 3))
{var inst_33104 = (state_33106[2]);var state_33106__$1 = state_33106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33106__$1,inst_33104);
} else
{if((state_val_33107 === 4))
{var inst_33074 = (state_33106[9]);var inst_33074__$1 = (state_33106[2]);var inst_33075 = (inst_33074__$1 == null);var inst_33076 = cljs.core.not.call(null,inst_33075);var state_33106__$1 = (function (){var statearr_33110 = state_33106;(statearr_33110[9] = inst_33074__$1);
return statearr_33110;
})();if(inst_33076)
{var statearr_33111_33138 = state_33106__$1;(statearr_33111_33138[1] = 5);
} else
{var statearr_33112_33139 = state_33106__$1;(statearr_33112_33139[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 5))
{var inst_33074 = (state_33106[9]);var inst_33071 = (state_33106[7]);var inst_33070 = (state_33106[8]);var inst_33079 = (state_33106[10]);var inst_33078 = (inst_33070[inst_33071] = inst_33074);var inst_33079__$1 = (inst_33071 + 1);var inst_33080 = (inst_33079__$1 < n);var state_33106__$1 = (function (){var statearr_33113 = state_33106;(statearr_33113[10] = inst_33079__$1);
(statearr_33113[11] = inst_33078);
return statearr_33113;
})();if(cljs.core.truth_(inst_33080))
{var statearr_33114_33140 = state_33106__$1;(statearr_33114_33140[1] = 8);
} else
{var statearr_33115_33141 = state_33106__$1;(statearr_33115_33141[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 6))
{var inst_33071 = (state_33106[7]);var inst_33092 = (inst_33071 > 0);var state_33106__$1 = state_33106;if(cljs.core.truth_(inst_33092))
{var statearr_33117_33142 = state_33106__$1;(statearr_33117_33142[1] = 12);
} else
{var statearr_33118_33143 = state_33106__$1;(statearr_33118_33143[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 7))
{var inst_33102 = (state_33106[2]);var state_33106__$1 = state_33106;var statearr_33119_33144 = state_33106__$1;(statearr_33119_33144[2] = inst_33102);
(statearr_33119_33144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 8))
{var inst_33070 = (state_33106[8]);var inst_33079 = (state_33106[10]);var tmp33116 = inst_33070;var inst_33070__$1 = tmp33116;var inst_33071 = inst_33079;var state_33106__$1 = (function (){var statearr_33120 = state_33106;(statearr_33120[7] = inst_33071);
(statearr_33120[8] = inst_33070__$1);
return statearr_33120;
})();var statearr_33121_33145 = state_33106__$1;(statearr_33121_33145[2] = null);
(statearr_33121_33145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 9))
{var inst_33070 = (state_33106[8]);var inst_33084 = cljs.core.vec.call(null,inst_33070);var state_33106__$1 = state_33106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33106__$1,11,out,inst_33084);
} else
{if((state_val_33107 === 10))
{var inst_33090 = (state_33106[2]);var state_33106__$1 = state_33106;var statearr_33122_33146 = state_33106__$1;(statearr_33122_33146[2] = inst_33090);
(statearr_33122_33146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 11))
{var inst_33086 = (state_33106[2]);var inst_33087 = (new Array(n));var inst_33070 = inst_33087;var inst_33071 = 0;var state_33106__$1 = (function (){var statearr_33123 = state_33106;(statearr_33123[7] = inst_33071);
(statearr_33123[8] = inst_33070);
(statearr_33123[12] = inst_33086);
return statearr_33123;
})();var statearr_33124_33147 = state_33106__$1;(statearr_33124_33147[2] = null);
(statearr_33124_33147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 12))
{var inst_33070 = (state_33106[8]);var inst_33094 = cljs.core.vec.call(null,inst_33070);var state_33106__$1 = state_33106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33106__$1,15,out,inst_33094);
} else
{if((state_val_33107 === 13))
{var state_33106__$1 = state_33106;var statearr_33125_33148 = state_33106__$1;(statearr_33125_33148[2] = null);
(statearr_33125_33148[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 14))
{var inst_33099 = (state_33106[2]);var inst_33100 = cljs.core.async.close_BANG_.call(null,out);var state_33106__$1 = (function (){var statearr_33126 = state_33106;(statearr_33126[13] = inst_33099);
return statearr_33126;
})();var statearr_33127_33149 = state_33106__$1;(statearr_33127_33149[2] = inst_33100);
(statearr_33127_33149[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33107 === 15))
{var inst_33096 = (state_33106[2]);var state_33106__$1 = state_33106;var statearr_33128_33150 = state_33106__$1;(statearr_33128_33150[2] = inst_33096);
(statearr_33128_33150[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33132 = (new Array(14));(statearr_33132[0] = state_machine__5792__auto__);
(statearr_33132[1] = 1);
return statearr_33132;
});
var state_machine__5792__auto____1 = (function (state_33106){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33106);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33133){if((e33133 instanceof Object))
{var ex__5795__auto__ = e33133;var statearr_33134_33151 = state_33106;(statearr_33134_33151[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33152 = state_33106;
state_33106 = G__33152;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33106){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33135 = f__5862__auto__.call(null);(statearr_33135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33136);
return statearr_33135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___33295 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33265){var state_val_33266 = (state_33265[1]);if((state_val_33266 === 1))
{var inst_33224 = (new Array(0));var inst_33225 = inst_33224;var inst_33226 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_33265__$1 = (function (){var statearr_33267 = state_33265;(statearr_33267[7] = inst_33225);
(statearr_33267[8] = inst_33226);
return statearr_33267;
})();var statearr_33268_33296 = state_33265__$1;(statearr_33268_33296[2] = null);
(statearr_33268_33296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 2))
{var state_33265__$1 = state_33265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33265__$1,4,ch);
} else
{if((state_val_33266 === 3))
{var inst_33263 = (state_33265[2]);var state_33265__$1 = state_33265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33265__$1,inst_33263);
} else
{if((state_val_33266 === 4))
{var inst_33229 = (state_33265[9]);var inst_33229__$1 = (state_33265[2]);var inst_33230 = (inst_33229__$1 == null);var inst_33231 = cljs.core.not.call(null,inst_33230);var state_33265__$1 = (function (){var statearr_33269 = state_33265;(statearr_33269[9] = inst_33229__$1);
return statearr_33269;
})();if(inst_33231)
{var statearr_33270_33297 = state_33265__$1;(statearr_33270_33297[1] = 5);
} else
{var statearr_33271_33298 = state_33265__$1;(statearr_33271_33298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 5))
{var inst_33226 = (state_33265[8]);var inst_33233 = (state_33265[10]);var inst_33229 = (state_33265[9]);var inst_33233__$1 = f.call(null,inst_33229);var inst_33234 = cljs.core._EQ_.call(null,inst_33233__$1,inst_33226);var inst_33235 = cljs.core.keyword_identical_QMARK_.call(null,inst_33226,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_33236 = (inst_33234) || (inst_33235);var state_33265__$1 = (function (){var statearr_33272 = state_33265;(statearr_33272[10] = inst_33233__$1);
return statearr_33272;
})();if(cljs.core.truth_(inst_33236))
{var statearr_33273_33299 = state_33265__$1;(statearr_33273_33299[1] = 8);
} else
{var statearr_33274_33300 = state_33265__$1;(statearr_33274_33300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 6))
{var inst_33225 = (state_33265[7]);var inst_33250 = inst_33225.length;var inst_33251 = (inst_33250 > 0);var state_33265__$1 = state_33265;if(cljs.core.truth_(inst_33251))
{var statearr_33276_33301 = state_33265__$1;(statearr_33276_33301[1] = 12);
} else
{var statearr_33277_33302 = state_33265__$1;(statearr_33277_33302[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 7))
{var inst_33261 = (state_33265[2]);var state_33265__$1 = state_33265;var statearr_33278_33303 = state_33265__$1;(statearr_33278_33303[2] = inst_33261);
(statearr_33278_33303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 8))
{var inst_33225 = (state_33265[7]);var inst_33233 = (state_33265[10]);var inst_33229 = (state_33265[9]);var inst_33238 = inst_33225.push(inst_33229);var tmp33275 = inst_33225;var inst_33225__$1 = tmp33275;var inst_33226 = inst_33233;var state_33265__$1 = (function (){var statearr_33279 = state_33265;(statearr_33279[11] = inst_33238);
(statearr_33279[7] = inst_33225__$1);
(statearr_33279[8] = inst_33226);
return statearr_33279;
})();var statearr_33280_33304 = state_33265__$1;(statearr_33280_33304[2] = null);
(statearr_33280_33304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 9))
{var inst_33225 = (state_33265[7]);var inst_33241 = cljs.core.vec.call(null,inst_33225);var state_33265__$1 = state_33265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33265__$1,11,out,inst_33241);
} else
{if((state_val_33266 === 10))
{var inst_33248 = (state_33265[2]);var state_33265__$1 = state_33265;var statearr_33281_33305 = state_33265__$1;(statearr_33281_33305[2] = inst_33248);
(statearr_33281_33305[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 11))
{var inst_33233 = (state_33265[10]);var inst_33229 = (state_33265[9]);var inst_33243 = (state_33265[2]);var inst_33244 = (new Array(0));var inst_33245 = inst_33244.push(inst_33229);var inst_33225 = inst_33244;var inst_33226 = inst_33233;var state_33265__$1 = (function (){var statearr_33282 = state_33265;(statearr_33282[12] = inst_33245);
(statearr_33282[13] = inst_33243);
(statearr_33282[7] = inst_33225);
(statearr_33282[8] = inst_33226);
return statearr_33282;
})();var statearr_33283_33306 = state_33265__$1;(statearr_33283_33306[2] = null);
(statearr_33283_33306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 12))
{var inst_33225 = (state_33265[7]);var inst_33253 = cljs.core.vec.call(null,inst_33225);var state_33265__$1 = state_33265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33265__$1,15,out,inst_33253);
} else
{if((state_val_33266 === 13))
{var state_33265__$1 = state_33265;var statearr_33284_33307 = state_33265__$1;(statearr_33284_33307[2] = null);
(statearr_33284_33307[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 14))
{var inst_33258 = (state_33265[2]);var inst_33259 = cljs.core.async.close_BANG_.call(null,out);var state_33265__$1 = (function (){var statearr_33285 = state_33265;(statearr_33285[14] = inst_33258);
return statearr_33285;
})();var statearr_33286_33308 = state_33265__$1;(statearr_33286_33308[2] = inst_33259);
(statearr_33286_33308[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33266 === 15))
{var inst_33255 = (state_33265[2]);var state_33265__$1 = state_33265;var statearr_33287_33309 = state_33265__$1;(statearr_33287_33309[2] = inst_33255);
(statearr_33287_33309[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33291 = (new Array(15));(statearr_33291[0] = state_machine__5792__auto__);
(statearr_33291[1] = 1);
return statearr_33291;
});
var state_machine__5792__auto____1 = (function (state_33265){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33292){if((e33292 instanceof Object))
{var ex__5795__auto__ = e33292;var statearr_33293_33310 = state_33265;(statearr_33293_33310[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33292;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33311 = state_33265;
state_33265 = G__33311;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33265){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33294 = f__5862__auto__.call(null);(statearr_33294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33295);
return statearr_33294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
