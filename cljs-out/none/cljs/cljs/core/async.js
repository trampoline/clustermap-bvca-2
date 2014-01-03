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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16850 = (function (f,fn_handler,meta16851){
this.f = f;
this.fn_handler = fn_handler;
this.meta16851 = meta16851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16850.cljs$lang$type = true;
cljs.core.async.t16850.cljs$lang$ctorStr = "cljs.core.async/t16850";
cljs.core.async.t16850.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16850");
});
cljs.core.async.t16850.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16852){var self__ = this;
var _16852__$1 = this;return self__.meta16851;
});
cljs.core.async.t16850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16852,meta16851__$1){var self__ = this;
var _16852__$1 = this;return (new cljs.core.async.t16850(self__.f,self__.fn_handler,meta16851__$1));
});
cljs.core.async.__GT_t16850 = (function __GT_t16850(f__$1,fn_handler__$1,meta16851){return (new cljs.core.async.t16850(f__$1,fn_handler__$1,meta16851));
});
}
return (new cljs.core.async.t16850(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16854 = buff;if(G__16854)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__16854.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16854.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16854);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16854);
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
{var val_16855 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16855);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_16855);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___16856 = n;var x_16857 = 0;while(true){
if((x_16857 < n__4114__auto___16856))
{(a[x_16857] = 0);
{
var G__16858 = (x_16857 + 1);
x_16857 = G__16858;
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
var G__16859 = (i + 1);
i = G__16859;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16863 = (function (flag,alt_flag,meta16864){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16864 = meta16864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16863.cljs$lang$type = true;
cljs.core.async.t16863.cljs$lang$ctorStr = "cljs.core.async/t16863";
cljs.core.async.t16863.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16863");
});
cljs.core.async.t16863.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t16863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t16863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16865){var self__ = this;
var _16865__$1 = this;return self__.meta16864;
});
cljs.core.async.t16863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16865,meta16864__$1){var self__ = this;
var _16865__$1 = this;return (new cljs.core.async.t16863(self__.flag,self__.alt_flag,meta16864__$1));
});
cljs.core.async.__GT_t16863 = (function __GT_t16863(flag__$1,alt_flag__$1,meta16864){return (new cljs.core.async.t16863(flag__$1,alt_flag__$1,meta16864));
});
}
return (new cljs.core.async.t16863(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16869 = (function (cb,flag,alt_handler,meta16870){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16870 = meta16870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16869.cljs$lang$type = true;
cljs.core.async.t16869.cljs$lang$ctorStr = "cljs.core.async/t16869";
cljs.core.async.t16869.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16869");
});
cljs.core.async.t16869.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16871){var self__ = this;
var _16871__$1 = this;return self__.meta16870;
});
cljs.core.async.t16869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16871,meta16870__$1){var self__ = this;
var _16871__$1 = this;return (new cljs.core.async.t16869(self__.cb,self__.flag,self__.alt_handler,meta16870__$1));
});
cljs.core.async.__GT_t16869 = (function __GT_t16869(cb__$1,flag__$1,alt_handler__$1,meta16870){return (new cljs.core.async.t16869(cb__$1,flag__$1,alt_handler__$1,meta16870));
});
}
return (new cljs.core.async.t16869(cb,flag,alt_handler,null));
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
return (function (p1__16872_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16872_SHARP_,port], null));
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
var G__16873 = (i + 1);
i = G__16873;
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
var alts_BANG___delegate = function (ports,p__16874){var map__16876 = p__16874;var map__16876__$1 = ((cljs.core.seq_QMARK_.call(null,map__16876))?cljs.core.apply.call(null,cljs.core.hash_map,map__16876):map__16876);var opts = map__16876__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16874 = null;if (arguments.length > 1) {
  p__16874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16874);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16877){
var ports = cljs.core.first(arglist__16877);
var p__16874 = cljs.core.rest(arglist__16877);
return alts_BANG___delegate(ports,p__16874);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16885 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16885 = (function (ch,f,map_LT_,meta16886){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16886 = meta16886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16885.cljs$lang$type = true;
cljs.core.async.t16885.cljs$lang$ctorStr = "cljs.core.async/t16885";
cljs.core.async.t16885.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16885");
});
cljs.core.async.t16885.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t16885.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16888 = (function (fn1,_,meta16886,ch,f,map_LT_,meta16889){
this.fn1 = fn1;
this._ = _;
this.meta16886 = meta16886;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16889 = meta16889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16888.cljs$lang$type = true;
cljs.core.async.t16888.cljs$lang$ctorStr = "cljs.core.async/t16888";
cljs.core.async.t16888.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16888");
});
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__16878_SHARP_){return f1.call(null,(((p1__16878_SHARP_ == null))?null:self__.f.call(null,p1__16878_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t16888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16890){var self__ = this;
var _16890__$1 = this;return self__.meta16889;
});
cljs.core.async.t16888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16890,meta16889__$1){var self__ = this;
var _16890__$1 = this;return (new cljs.core.async.t16888(self__.fn1,self__._,self__.meta16886,self__.ch,self__.f,self__.map_LT_,meta16889__$1));
});
cljs.core.async.__GT_t16888 = (function __GT_t16888(fn1__$1,___$2,meta16886__$1,ch__$2,f__$2,map_LT___$2,meta16889){return (new cljs.core.async.t16888(fn1__$1,___$2,meta16886__$1,ch__$2,f__$2,map_LT___$2,meta16889));
});
}
return (new cljs.core.async.t16888(fn1,___$1,self__.meta16886,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t16885.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16887){var self__ = this;
var _16887__$1 = this;return self__.meta16886;
});
cljs.core.async.t16885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16887,meta16886__$1){var self__ = this;
var _16887__$1 = this;return (new cljs.core.async.t16885(self__.ch,self__.f,self__.map_LT_,meta16886__$1));
});
cljs.core.async.__GT_t16885 = (function __GT_t16885(ch__$1,f__$1,map_LT___$1,meta16886){return (new cljs.core.async.t16885(ch__$1,f__$1,map_LT___$1,meta16886));
});
}
return (new cljs.core.async.t16885(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16894 = (function (ch,f,map_GT_,meta16895){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16895 = meta16895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16894.cljs$lang$type = true;
cljs.core.async.t16894.cljs$lang$ctorStr = "cljs.core.async/t16894";
cljs.core.async.t16894.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16894");
});
cljs.core.async.t16894.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t16894.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16894.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16896){var self__ = this;
var _16896__$1 = this;return self__.meta16895;
});
cljs.core.async.t16894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16896,meta16895__$1){var self__ = this;
var _16896__$1 = this;return (new cljs.core.async.t16894(self__.ch,self__.f,self__.map_GT_,meta16895__$1));
});
cljs.core.async.__GT_t16894 = (function __GT_t16894(ch__$1,f__$1,map_GT___$1,meta16895){return (new cljs.core.async.t16894(ch__$1,f__$1,map_GT___$1,meta16895));
});
}
return (new cljs.core.async.t16894(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16900 = (function (ch,p,filter_GT_,meta16901){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16901 = meta16901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16900.cljs$lang$type = true;
cljs.core.async.t16900.cljs$lang$ctorStr = "cljs.core.async/t16900";
cljs.core.async.t16900.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16900");
});
cljs.core.async.t16900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t16900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16900.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16902){var self__ = this;
var _16902__$1 = this;return self__.meta16901;
});
cljs.core.async.t16900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16902,meta16901__$1){var self__ = this;
var _16902__$1 = this;return (new cljs.core.async.t16900(self__.ch,self__.p,self__.filter_GT_,meta16901__$1));
});
cljs.core.async.__GT_t16900 = (function __GT_t16900(ch__$1,p__$1,filter_GT___$1,meta16901){return (new cljs.core.async.t16900(ch__$1,p__$1,filter_GT___$1,meta16901));
});
}
return (new cljs.core.async.t16900(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___16985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_16964){var state_val_16965 = (state_16964[1]);if((state_val_16965 === 1))
{var state_16964__$1 = state_16964;var statearr_16966_16986 = state_16964__$1;(statearr_16966_16986[2] = null);
(statearr_16966_16986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16965 === 2))
{var state_16964__$1 = state_16964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16964__$1,4,ch);
} else
{if((state_val_16965 === 3))
{var inst_16962 = (state_16964[2]);var state_16964__$1 = state_16964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16964__$1,inst_16962);
} else
{if((state_val_16965 === 4))
{var inst_16946 = (state_16964[7]);var inst_16946__$1 = (state_16964[2]);var inst_16947 = (inst_16946__$1 == null);var state_16964__$1 = (function (){var statearr_16967 = state_16964;(statearr_16967[7] = inst_16946__$1);
return statearr_16967;
})();if(cljs.core.truth_(inst_16947))
{var statearr_16968_16987 = state_16964__$1;(statearr_16968_16987[1] = 5);
} else
{var statearr_16969_16988 = state_16964__$1;(statearr_16969_16988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16965 === 5))
{var inst_16949 = cljs.core.async.close_BANG_.call(null,out);var state_16964__$1 = state_16964;var statearr_16970_16989 = state_16964__$1;(statearr_16970_16989[2] = inst_16949);
(statearr_16970_16989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16965 === 6))
{var inst_16946 = (state_16964[7]);var inst_16951 = p.call(null,inst_16946);var state_16964__$1 = state_16964;if(cljs.core.truth_(inst_16951))
{var statearr_16971_16990 = state_16964__$1;(statearr_16971_16990[1] = 8);
} else
{var statearr_16972_16991 = state_16964__$1;(statearr_16972_16991[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16965 === 7))
{var inst_16960 = (state_16964[2]);var state_16964__$1 = state_16964;var statearr_16973_16992 = state_16964__$1;(statearr_16973_16992[2] = inst_16960);
(statearr_16973_16992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16965 === 8))
{var inst_16946 = (state_16964[7]);var state_16964__$1 = state_16964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16964__$1,11,out,inst_16946);
} else
{if((state_val_16965 === 9))
{var state_16964__$1 = state_16964;var statearr_16974_16993 = state_16964__$1;(statearr_16974_16993[2] = null);
(statearr_16974_16993[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16965 === 10))
{var inst_16957 = (state_16964[2]);var state_16964__$1 = (function (){var statearr_16975 = state_16964;(statearr_16975[8] = inst_16957);
return statearr_16975;
})();var statearr_16976_16994 = state_16964__$1;(statearr_16976_16994[2] = null);
(statearr_16976_16994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16965 === 11))
{var inst_16954 = (state_16964[2]);var state_16964__$1 = state_16964;var statearr_16977_16995 = state_16964__$1;(statearr_16977_16995[2] = inst_16954);
(statearr_16977_16995[1] = 10);
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
var state_machine__5792__auto____0 = (function (){var statearr_16981 = (new Array(9));(statearr_16981[0] = state_machine__5792__auto__);
(statearr_16981[1] = 1);
return statearr_16981;
});
var state_machine__5792__auto____1 = (function (state_16964){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_16964);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e16982){if((e16982 instanceof Object))
{var ex__5795__auto__ = e16982;var statearr_16983_16996 = state_16964;(statearr_16983_16996[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16997 = state_16964;
state_16964 = G__16997;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_16964){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_16964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_16984 = f__5862__auto__.call(null);(statearr_16984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___16985);
return statearr_16984;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17149){var state_val_17150 = (state_17149[1]);if((state_val_17150 === 1))
{var state_17149__$1 = state_17149;var statearr_17151_17188 = state_17149__$1;(statearr_17151_17188[2] = null);
(statearr_17151_17188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 2))
{var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17149__$1,4,in$);
} else
{if((state_val_17150 === 3))
{var inst_17147 = (state_17149[2]);var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17149__$1,inst_17147);
} else
{if((state_val_17150 === 4))
{var inst_17095 = (state_17149[7]);var inst_17095__$1 = (state_17149[2]);var inst_17096 = (inst_17095__$1 == null);var state_17149__$1 = (function (){var statearr_17152 = state_17149;(statearr_17152[7] = inst_17095__$1);
return statearr_17152;
})();if(cljs.core.truth_(inst_17096))
{var statearr_17153_17189 = state_17149__$1;(statearr_17153_17189[1] = 5);
} else
{var statearr_17154_17190 = state_17149__$1;(statearr_17154_17190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 5))
{var inst_17098 = cljs.core.async.close_BANG_.call(null,out);var state_17149__$1 = state_17149;var statearr_17155_17191 = state_17149__$1;(statearr_17155_17191[2] = inst_17098);
(statearr_17155_17191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 6))
{var inst_17095 = (state_17149[7]);var inst_17100 = f.call(null,inst_17095);var inst_17105 = cljs.core.seq.call(null,inst_17100);var inst_17106 = inst_17105;var inst_17107 = null;var inst_17108 = 0;var inst_17109 = 0;var state_17149__$1 = (function (){var statearr_17156 = state_17149;(statearr_17156[8] = inst_17109);
(statearr_17156[9] = inst_17108);
(statearr_17156[10] = inst_17107);
(statearr_17156[11] = inst_17106);
return statearr_17156;
})();var statearr_17157_17192 = state_17149__$1;(statearr_17157_17192[2] = null);
(statearr_17157_17192[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 7))
{var inst_17145 = (state_17149[2]);var state_17149__$1 = state_17149;var statearr_17158_17193 = state_17149__$1;(statearr_17158_17193[2] = inst_17145);
(statearr_17158_17193[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 8))
{var inst_17109 = (state_17149[8]);var inst_17108 = (state_17149[9]);var inst_17111 = (inst_17109 < inst_17108);var inst_17112 = inst_17111;var state_17149__$1 = state_17149;if(cljs.core.truth_(inst_17112))
{var statearr_17159_17194 = state_17149__$1;(statearr_17159_17194[1] = 10);
} else
{var statearr_17160_17195 = state_17149__$1;(statearr_17160_17195[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 9))
{var inst_17142 = (state_17149[2]);var state_17149__$1 = (function (){var statearr_17161 = state_17149;(statearr_17161[12] = inst_17142);
return statearr_17161;
})();var statearr_17162_17196 = state_17149__$1;(statearr_17162_17196[2] = null);
(statearr_17162_17196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 10))
{var inst_17109 = (state_17149[8]);var inst_17107 = (state_17149[10]);var inst_17114 = cljs.core._nth.call(null,inst_17107,inst_17109);var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17149__$1,13,out,inst_17114);
} else
{if((state_val_17150 === 11))
{var inst_17120 = (state_17149[13]);var inst_17106 = (state_17149[11]);var inst_17120__$1 = cljs.core.seq.call(null,inst_17106);var state_17149__$1 = (function (){var statearr_17166 = state_17149;(statearr_17166[13] = inst_17120__$1);
return statearr_17166;
})();if(inst_17120__$1)
{var statearr_17167_17197 = state_17149__$1;(statearr_17167_17197[1] = 14);
} else
{var statearr_17168_17198 = state_17149__$1;(statearr_17168_17198[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 12))
{var inst_17140 = (state_17149[2]);var state_17149__$1 = state_17149;var statearr_17169_17199 = state_17149__$1;(statearr_17169_17199[2] = inst_17140);
(statearr_17169_17199[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 13))
{var inst_17109 = (state_17149[8]);var inst_17108 = (state_17149[9]);var inst_17107 = (state_17149[10]);var inst_17106 = (state_17149[11]);var inst_17116 = (state_17149[2]);var inst_17117 = (inst_17109 + 1);var tmp17163 = inst_17108;var tmp17164 = inst_17107;var tmp17165 = inst_17106;var inst_17106__$1 = tmp17165;var inst_17107__$1 = tmp17164;var inst_17108__$1 = tmp17163;var inst_17109__$1 = inst_17117;var state_17149__$1 = (function (){var statearr_17170 = state_17149;(statearr_17170[14] = inst_17116);
(statearr_17170[8] = inst_17109__$1);
(statearr_17170[9] = inst_17108__$1);
(statearr_17170[10] = inst_17107__$1);
(statearr_17170[11] = inst_17106__$1);
return statearr_17170;
})();var statearr_17171_17200 = state_17149__$1;(statearr_17171_17200[2] = null);
(statearr_17171_17200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 14))
{var inst_17120 = (state_17149[13]);var inst_17122 = cljs.core.chunked_seq_QMARK_.call(null,inst_17120);var state_17149__$1 = state_17149;if(inst_17122)
{var statearr_17172_17201 = state_17149__$1;(statearr_17172_17201[1] = 17);
} else
{var statearr_17173_17202 = state_17149__$1;(statearr_17173_17202[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 15))
{var state_17149__$1 = state_17149;var statearr_17174_17203 = state_17149__$1;(statearr_17174_17203[2] = null);
(statearr_17174_17203[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 16))
{var inst_17138 = (state_17149[2]);var state_17149__$1 = state_17149;var statearr_17175_17204 = state_17149__$1;(statearr_17175_17204[2] = inst_17138);
(statearr_17175_17204[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 17))
{var inst_17120 = (state_17149[13]);var inst_17124 = cljs.core.chunk_first.call(null,inst_17120);var inst_17125 = cljs.core.chunk_rest.call(null,inst_17120);var inst_17126 = cljs.core.count.call(null,inst_17124);var inst_17106 = inst_17125;var inst_17107 = inst_17124;var inst_17108 = inst_17126;var inst_17109 = 0;var state_17149__$1 = (function (){var statearr_17176 = state_17149;(statearr_17176[8] = inst_17109);
(statearr_17176[9] = inst_17108);
(statearr_17176[10] = inst_17107);
(statearr_17176[11] = inst_17106);
return statearr_17176;
})();var statearr_17177_17205 = state_17149__$1;(statearr_17177_17205[2] = null);
(statearr_17177_17205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 18))
{var inst_17120 = (state_17149[13]);var inst_17129 = cljs.core.first.call(null,inst_17120);var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17149__$1,20,out,inst_17129);
} else
{if((state_val_17150 === 19))
{var inst_17135 = (state_17149[2]);var state_17149__$1 = state_17149;var statearr_17178_17206 = state_17149__$1;(statearr_17178_17206[2] = inst_17135);
(statearr_17178_17206[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17150 === 20))
{var inst_17120 = (state_17149[13]);var inst_17131 = (state_17149[2]);var inst_17132 = cljs.core.next.call(null,inst_17120);var inst_17106 = inst_17132;var inst_17107 = null;var inst_17108 = 0;var inst_17109 = 0;var state_17149__$1 = (function (){var statearr_17179 = state_17149;(statearr_17179[8] = inst_17109);
(statearr_17179[9] = inst_17108);
(statearr_17179[15] = inst_17131);
(statearr_17179[10] = inst_17107);
(statearr_17179[11] = inst_17106);
return statearr_17179;
})();var statearr_17180_17207 = state_17149__$1;(statearr_17180_17207[2] = null);
(statearr_17180_17207[1] = 8);
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
var state_machine__5792__auto____0 = (function (){var statearr_17184 = (new Array(16));(statearr_17184[0] = state_machine__5792__auto__);
(statearr_17184[1] = 1);
return statearr_17184;
});
var state_machine__5792__auto____1 = (function (state_17149){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17149);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17185){if((e17185 instanceof Object))
{var ex__5795__auto__ = e17185;var statearr_17186_17208 = state_17149;(statearr_17186_17208[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17209 = state_17149;
state_17149 = G__17209;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17149){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17187 = f__5862__auto__.call(null);(statearr_17187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_17187;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5861__auto___17290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17269){var state_val_17270 = (state_17269[1]);if((state_val_17270 === 1))
{var state_17269__$1 = state_17269;var statearr_17271_17291 = state_17269__$1;(statearr_17271_17291[2] = null);
(statearr_17271_17291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 2))
{var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17269__$1,4,from);
} else
{if((state_val_17270 === 3))
{var inst_17267 = (state_17269[2]);var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17269__$1,inst_17267);
} else
{if((state_val_17270 === 4))
{var inst_17252 = (state_17269[7]);var inst_17252__$1 = (state_17269[2]);var inst_17253 = (inst_17252__$1 == null);var state_17269__$1 = (function (){var statearr_17272 = state_17269;(statearr_17272[7] = inst_17252__$1);
return statearr_17272;
})();if(cljs.core.truth_(inst_17253))
{var statearr_17273_17292 = state_17269__$1;(statearr_17273_17292[1] = 5);
} else
{var statearr_17274_17293 = state_17269__$1;(statearr_17274_17293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 5))
{var state_17269__$1 = state_17269;if(cljs.core.truth_(close_QMARK_))
{var statearr_17275_17294 = state_17269__$1;(statearr_17275_17294[1] = 8);
} else
{var statearr_17276_17295 = state_17269__$1;(statearr_17276_17295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 6))
{var inst_17252 = (state_17269[7]);var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17269__$1,11,to,inst_17252);
} else
{if((state_val_17270 === 7))
{var inst_17265 = (state_17269[2]);var state_17269__$1 = state_17269;var statearr_17277_17296 = state_17269__$1;(statearr_17277_17296[2] = inst_17265);
(statearr_17277_17296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 8))
{var inst_17256 = cljs.core.async.close_BANG_.call(null,to);var state_17269__$1 = state_17269;var statearr_17278_17297 = state_17269__$1;(statearr_17278_17297[2] = inst_17256);
(statearr_17278_17297[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 9))
{var state_17269__$1 = state_17269;var statearr_17279_17298 = state_17269__$1;(statearr_17279_17298[2] = null);
(statearr_17279_17298[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 10))
{var inst_17259 = (state_17269[2]);var state_17269__$1 = state_17269;var statearr_17280_17299 = state_17269__$1;(statearr_17280_17299[2] = inst_17259);
(statearr_17280_17299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 11))
{var inst_17262 = (state_17269[2]);var state_17269__$1 = (function (){var statearr_17281 = state_17269;(statearr_17281[8] = inst_17262);
return statearr_17281;
})();var statearr_17282_17300 = state_17269__$1;(statearr_17282_17300[2] = null);
(statearr_17282_17300[1] = 2);
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
var state_machine__5792__auto____0 = (function (){var statearr_17286 = (new Array(9));(statearr_17286[0] = state_machine__5792__auto__);
(statearr_17286[1] = 1);
return statearr_17286;
});
var state_machine__5792__auto____1 = (function (state_17269){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17287){if((e17287 instanceof Object))
{var ex__5795__auto__ = e17287;var statearr_17288_17301 = state_17269;(statearr_17288_17301[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17302 = state_17269;
state_17269 = G__17302;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17289 = f__5862__auto__.call(null);(statearr_17289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17290);
return statearr_17289;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5861__auto___17389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17367){var state_val_17368 = (state_17367[1]);if((state_val_17368 === 1))
{var state_17367__$1 = state_17367;var statearr_17369_17390 = state_17367__$1;(statearr_17369_17390[2] = null);
(statearr_17369_17390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 2))
{var state_17367__$1 = state_17367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17367__$1,4,ch);
} else
{if((state_val_17368 === 3))
{var inst_17365 = (state_17367[2]);var state_17367__$1 = state_17367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17367__$1,inst_17365);
} else
{if((state_val_17368 === 4))
{var inst_17348 = (state_17367[7]);var inst_17348__$1 = (state_17367[2]);var inst_17349 = (inst_17348__$1 == null);var state_17367__$1 = (function (){var statearr_17370 = state_17367;(statearr_17370[7] = inst_17348__$1);
return statearr_17370;
})();if(cljs.core.truth_(inst_17349))
{var statearr_17371_17391 = state_17367__$1;(statearr_17371_17391[1] = 5);
} else
{var statearr_17372_17392 = state_17367__$1;(statearr_17372_17392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 5))
{var inst_17351 = cljs.core.async.close_BANG_.call(null,tc);var inst_17352 = cljs.core.async.close_BANG_.call(null,fc);var state_17367__$1 = (function (){var statearr_17373 = state_17367;(statearr_17373[8] = inst_17351);
return statearr_17373;
})();var statearr_17374_17393 = state_17367__$1;(statearr_17374_17393[2] = inst_17352);
(statearr_17374_17393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 6))
{var inst_17348 = (state_17367[7]);var inst_17354 = p.call(null,inst_17348);var state_17367__$1 = state_17367;if(cljs.core.truth_(inst_17354))
{var statearr_17375_17394 = state_17367__$1;(statearr_17375_17394[1] = 9);
} else
{var statearr_17376_17395 = state_17367__$1;(statearr_17376_17395[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 7))
{var inst_17363 = (state_17367[2]);var state_17367__$1 = state_17367;var statearr_17377_17396 = state_17367__$1;(statearr_17377_17396[2] = inst_17363);
(statearr_17377_17396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 8))
{var inst_17360 = (state_17367[2]);var state_17367__$1 = (function (){var statearr_17378 = state_17367;(statearr_17378[9] = inst_17360);
return statearr_17378;
})();var statearr_17379_17397 = state_17367__$1;(statearr_17379_17397[2] = null);
(statearr_17379_17397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 9))
{var state_17367__$1 = state_17367;var statearr_17380_17398 = state_17367__$1;(statearr_17380_17398[2] = tc);
(statearr_17380_17398[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 10))
{var state_17367__$1 = state_17367;var statearr_17381_17399 = state_17367__$1;(statearr_17381_17399[2] = fc);
(statearr_17381_17399[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17368 === 11))
{var inst_17348 = (state_17367[7]);var inst_17358 = (state_17367[2]);var state_17367__$1 = state_17367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17367__$1,8,inst_17358,inst_17348);
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
var state_machine__5792__auto____0 = (function (){var statearr_17385 = (new Array(10));(statearr_17385[0] = state_machine__5792__auto__);
(statearr_17385[1] = 1);
return statearr_17385;
});
var state_machine__5792__auto____1 = (function (state_17367){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17386){if((e17386 instanceof Object))
{var ex__5795__auto__ = e17386;var statearr_17387_17400 = state_17367;(statearr_17387_17400[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17401 = state_17367;
state_17367 = G__17401;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17367){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17388 = f__5862__auto__.call(null);(statearr_17388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___17389);
return statearr_17388;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17448){var state_val_17449 = (state_17448[1]);if((state_val_17449 === 7))
{var inst_17444 = (state_17448[2]);var state_17448__$1 = state_17448;var statearr_17450_17466 = state_17448__$1;(statearr_17450_17466[2] = inst_17444);
(statearr_17450_17466[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 6))
{var inst_17434 = (state_17448[7]);var inst_17437 = (state_17448[8]);var inst_17441 = f.call(null,inst_17434,inst_17437);var inst_17434__$1 = inst_17441;var state_17448__$1 = (function (){var statearr_17451 = state_17448;(statearr_17451[7] = inst_17434__$1);
return statearr_17451;
})();var statearr_17452_17467 = state_17448__$1;(statearr_17452_17467[2] = null);
(statearr_17452_17467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 5))
{var inst_17434 = (state_17448[7]);var state_17448__$1 = state_17448;var statearr_17453_17468 = state_17448__$1;(statearr_17453_17468[2] = inst_17434);
(statearr_17453_17468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 4))
{var inst_17437 = (state_17448[8]);var inst_17437__$1 = (state_17448[2]);var inst_17438 = (inst_17437__$1 == null);var state_17448__$1 = (function (){var statearr_17454 = state_17448;(statearr_17454[8] = inst_17437__$1);
return statearr_17454;
})();if(cljs.core.truth_(inst_17438))
{var statearr_17455_17469 = state_17448__$1;(statearr_17455_17469[1] = 5);
} else
{var statearr_17456_17470 = state_17448__$1;(statearr_17456_17470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17449 === 3))
{var inst_17446 = (state_17448[2]);var state_17448__$1 = state_17448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17448__$1,inst_17446);
} else
{if((state_val_17449 === 2))
{var state_17448__$1 = state_17448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17448__$1,4,ch);
} else
{if((state_val_17449 === 1))
{var inst_17434 = init;var state_17448__$1 = (function (){var statearr_17457 = state_17448;(statearr_17457[7] = inst_17434);
return statearr_17457;
})();var statearr_17458_17471 = state_17448__$1;(statearr_17458_17471[2] = null);
(statearr_17458_17471[1] = 2);
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
var state_machine__5792__auto____0 = (function (){var statearr_17462 = (new Array(9));(statearr_17462[0] = state_machine__5792__auto__);
(statearr_17462[1] = 1);
return statearr_17462;
});
var state_machine__5792__auto____1 = (function (state_17448){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17463){if((e17463 instanceof Object))
{var ex__5795__auto__ = e17463;var statearr_17464_17472 = state_17448;(statearr_17464_17472[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17473 = state_17448;
state_17448 = G__17473;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17448){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17465 = f__5862__auto__.call(null);(statearr_17465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_17465;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17535){var state_val_17536 = (state_17535[1]);if((state_val_17536 === 1))
{var inst_17515 = cljs.core.seq.call(null,coll);var inst_17516 = inst_17515;var state_17535__$1 = (function (){var statearr_17537 = state_17535;(statearr_17537[7] = inst_17516);
return statearr_17537;
})();var statearr_17538_17556 = state_17535__$1;(statearr_17538_17556[2] = null);
(statearr_17538_17556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17536 === 2))
{var inst_17516 = (state_17535[7]);var state_17535__$1 = state_17535;if(cljs.core.truth_(inst_17516))
{var statearr_17539_17557 = state_17535__$1;(statearr_17539_17557[1] = 4);
} else
{var statearr_17540_17558 = state_17535__$1;(statearr_17540_17558[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17536 === 3))
{var inst_17533 = (state_17535[2]);var state_17535__$1 = state_17535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17535__$1,inst_17533);
} else
{if((state_val_17536 === 4))
{var inst_17516 = (state_17535[7]);var inst_17519 = cljs.core.first.call(null,inst_17516);var state_17535__$1 = state_17535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17535__$1,7,ch,inst_17519);
} else
{if((state_val_17536 === 5))
{var state_17535__$1 = state_17535;if(cljs.core.truth_(close_QMARK_))
{var statearr_17541_17559 = state_17535__$1;(statearr_17541_17559[1] = 8);
} else
{var statearr_17542_17560 = state_17535__$1;(statearr_17542_17560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17536 === 6))
{var inst_17531 = (state_17535[2]);var state_17535__$1 = state_17535;var statearr_17543_17561 = state_17535__$1;(statearr_17543_17561[2] = inst_17531);
(statearr_17543_17561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17536 === 7))
{var inst_17516 = (state_17535[7]);var inst_17521 = (state_17535[2]);var inst_17522 = cljs.core.next.call(null,inst_17516);var inst_17516__$1 = inst_17522;var state_17535__$1 = (function (){var statearr_17544 = state_17535;(statearr_17544[8] = inst_17521);
(statearr_17544[7] = inst_17516__$1);
return statearr_17544;
})();var statearr_17545_17562 = state_17535__$1;(statearr_17545_17562[2] = null);
(statearr_17545_17562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17536 === 8))
{var inst_17526 = cljs.core.async.close_BANG_.call(null,ch);var state_17535__$1 = state_17535;var statearr_17546_17563 = state_17535__$1;(statearr_17546_17563[2] = inst_17526);
(statearr_17546_17563[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17536 === 9))
{var state_17535__$1 = state_17535;var statearr_17547_17564 = state_17535__$1;(statearr_17547_17564[2] = null);
(statearr_17547_17564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17536 === 10))
{var inst_17529 = (state_17535[2]);var state_17535__$1 = state_17535;var statearr_17548_17565 = state_17535__$1;(statearr_17548_17565[2] = inst_17529);
(statearr_17548_17565[1] = 6);
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
var state_machine__5792__auto____0 = (function (){var statearr_17552 = (new Array(9));(statearr_17552[0] = state_machine__5792__auto__);
(statearr_17552[1] = 1);
return statearr_17552;
});
var state_machine__5792__auto____1 = (function (state_17535){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e17553){if((e17553 instanceof Object))
{var ex__5795__auto__ = e17553;var statearr_17554_17566 = state_17535;(statearr_17554_17566[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17567 = state_17535;
state_17535 = G__17567;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17535){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_17555 = f__5862__auto__.call(null);(statearr_17555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_17555;
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
cljs.core.async.Mux = (function (){var obj17569 = {};return obj17569;
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
cljs.core.async.Mult = (function (){var obj17571 = {};return obj17571;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17795 = (function (cs,ch,mult,meta17796){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17796 = meta17796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17795.cljs$lang$type = true;
cljs.core.async.t17795.cljs$lang$ctorStr = "cljs.core.async/t17795";
cljs.core.async.t17795.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17795");
});})(cs))
;
cljs.core.async.t17795.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17795.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17795.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17795.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17795.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17797){var self__ = this;
var _17797__$1 = this;return self__.meta17796;
});})(cs))
;
cljs.core.async.t17795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17797,meta17796__$1){var self__ = this;
var _17797__$1 = this;return (new cljs.core.async.t17795(self__.cs,self__.ch,self__.mult,meta17796__$1));
});})(cs))
;
cljs.core.async.__GT_t17795 = ((function (cs){
return (function __GT_t17795(cs__$1,ch__$1,mult__$1,meta17796){return (new cljs.core.async.t17795(cs__$1,ch__$1,mult__$1,meta17796));
});})(cs))
;
}
return (new cljs.core.async.t17795(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5861__auto___18018 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_17932){var state_val_17933 = (state_17932[1]);if((state_val_17933 === 32))
{var inst_17800 = (state_17932[7]);var inst_17876 = (state_17932[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17932,31,Object,null,30);var inst_17883 = cljs.core.async.put_BANG_.call(null,inst_17876,inst_17800,done);var state_17932__$1 = state_17932;var statearr_17934_18019 = state_17932__$1;(statearr_17934_18019[2] = inst_17883);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 1))
{var state_17932__$1 = state_17932;var statearr_17935_18020 = state_17932__$1;(statearr_17935_18020[2] = null);
(statearr_17935_18020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 33))
{var inst_17889 = (state_17932[9]);var inst_17891 = cljs.core.chunked_seq_QMARK_.call(null,inst_17889);var state_17932__$1 = state_17932;if(inst_17891)
{var statearr_17936_18021 = state_17932__$1;(statearr_17936_18021[1] = 36);
} else
{var statearr_17937_18022 = state_17932__$1;(statearr_17937_18022[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 2))
{var state_17932__$1 = state_17932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17932__$1,4,ch);
} else
{if((state_val_17933 === 34))
{var state_17932__$1 = state_17932;var statearr_17938_18023 = state_17932__$1;(statearr_17938_18023[2] = null);
(statearr_17938_18023[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 3))
{var inst_17930 = (state_17932[2]);var state_17932__$1 = state_17932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17932__$1,inst_17930);
} else
{if((state_val_17933 === 35))
{var inst_17914 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17939_18024 = state_17932__$1;(statearr_17939_18024[2] = inst_17914);
(statearr_17939_18024[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 4))
{var inst_17800 = (state_17932[7]);var inst_17800__$1 = (state_17932[2]);var inst_17801 = (inst_17800__$1 == null);var state_17932__$1 = (function (){var statearr_17940 = state_17932;(statearr_17940[7] = inst_17800__$1);
return statearr_17940;
})();if(cljs.core.truth_(inst_17801))
{var statearr_17941_18025 = state_17932__$1;(statearr_17941_18025[1] = 5);
} else
{var statearr_17942_18026 = state_17932__$1;(statearr_17942_18026[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 36))
{var inst_17889 = (state_17932[9]);var inst_17893 = cljs.core.chunk_first.call(null,inst_17889);var inst_17894 = cljs.core.chunk_rest.call(null,inst_17889);var inst_17895 = cljs.core.count.call(null,inst_17893);var inst_17868 = inst_17894;var inst_17869 = inst_17893;var inst_17870 = inst_17895;var inst_17871 = 0;var state_17932__$1 = (function (){var statearr_17943 = state_17932;(statearr_17943[10] = inst_17871);
(statearr_17943[11] = inst_17870);
(statearr_17943[12] = inst_17869);
(statearr_17943[13] = inst_17868);
return statearr_17943;
})();var statearr_17944_18027 = state_17932__$1;(statearr_17944_18027[2] = null);
(statearr_17944_18027[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 5))
{var inst_17807 = cljs.core.deref.call(null,cs);var inst_17808 = cljs.core.seq.call(null,inst_17807);var inst_17809 = inst_17808;var inst_17810 = null;var inst_17811 = 0;var inst_17812 = 0;var state_17932__$1 = (function (){var statearr_17945 = state_17932;(statearr_17945[14] = inst_17809);
(statearr_17945[15] = inst_17812);
(statearr_17945[16] = inst_17811);
(statearr_17945[17] = inst_17810);
return statearr_17945;
})();var statearr_17946_18028 = state_17932__$1;(statearr_17946_18028[2] = null);
(statearr_17946_18028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 37))
{var inst_17889 = (state_17932[9]);var inst_17898 = cljs.core.first.call(null,inst_17889);var state_17932__$1 = (function (){var statearr_17947 = state_17932;(statearr_17947[18] = inst_17898);
return statearr_17947;
})();var statearr_17948_18029 = state_17932__$1;(statearr_17948_18029[2] = null);
(statearr_17948_18029[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 6))
{var inst_17860 = (state_17932[19]);var inst_17859 = cljs.core.deref.call(null,cs);var inst_17860__$1 = cljs.core.keys.call(null,inst_17859);var inst_17861 = cljs.core.count.call(null,inst_17860__$1);var inst_17862 = cljs.core.reset_BANG_.call(null,dctr,inst_17861);var inst_17867 = cljs.core.seq.call(null,inst_17860__$1);var inst_17868 = inst_17867;var inst_17869 = null;var inst_17870 = 0;var inst_17871 = 0;var state_17932__$1 = (function (){var statearr_17949 = state_17932;(statearr_17949[10] = inst_17871);
(statearr_17949[11] = inst_17870);
(statearr_17949[12] = inst_17869);
(statearr_17949[13] = inst_17868);
(statearr_17949[20] = inst_17862);
(statearr_17949[19] = inst_17860__$1);
return statearr_17949;
})();var statearr_17950_18030 = state_17932__$1;(statearr_17950_18030[2] = null);
(statearr_17950_18030[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 38))
{var inst_17911 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17951_18031 = state_17932__$1;(statearr_17951_18031[2] = inst_17911);
(statearr_17951_18031[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 7))
{var inst_17928 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17952_18032 = state_17932__$1;(statearr_17952_18032[2] = inst_17928);
(statearr_17952_18032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 39))
{var inst_17889 = (state_17932[9]);var inst_17907 = (state_17932[2]);var inst_17908 = cljs.core.next.call(null,inst_17889);var inst_17868 = inst_17908;var inst_17869 = null;var inst_17870 = 0;var inst_17871 = 0;var state_17932__$1 = (function (){var statearr_17953 = state_17932;(statearr_17953[10] = inst_17871);
(statearr_17953[11] = inst_17870);
(statearr_17953[12] = inst_17869);
(statearr_17953[21] = inst_17907);
(statearr_17953[13] = inst_17868);
return statearr_17953;
})();var statearr_17954_18033 = state_17932__$1;(statearr_17954_18033[2] = null);
(statearr_17954_18033[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 8))
{var inst_17812 = (state_17932[15]);var inst_17811 = (state_17932[16]);var inst_17814 = (inst_17812 < inst_17811);var inst_17815 = inst_17814;var state_17932__$1 = state_17932;if(cljs.core.truth_(inst_17815))
{var statearr_17955_18034 = state_17932__$1;(statearr_17955_18034[1] = 10);
} else
{var statearr_17956_18035 = state_17932__$1;(statearr_17956_18035[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 40))
{var inst_17898 = (state_17932[18]);var inst_17899 = (state_17932[2]);var inst_17900 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17901 = cljs.core.async.untap_STAR_.call(null,m,inst_17898);var state_17932__$1 = (function (){var statearr_17957 = state_17932;(statearr_17957[22] = inst_17900);
(statearr_17957[23] = inst_17899);
return statearr_17957;
})();var statearr_17958_18036 = state_17932__$1;(statearr_17958_18036[2] = inst_17901);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 9))
{var inst_17857 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17959_18037 = state_17932__$1;(statearr_17959_18037[2] = inst_17857);
(statearr_17959_18037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 41))
{var inst_17800 = (state_17932[7]);var inst_17898 = (state_17932[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17932,40,Object,null,39);var inst_17905 = cljs.core.async.put_BANG_.call(null,inst_17898,inst_17800,done);var state_17932__$1 = state_17932;var statearr_17960_18038 = state_17932__$1;(statearr_17960_18038[2] = inst_17905);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 10))
{var inst_17812 = (state_17932[15]);var inst_17810 = (state_17932[17]);var inst_17818 = cljs.core._nth.call(null,inst_17810,inst_17812);var inst_17819 = cljs.core.nth.call(null,inst_17818,0,null);var inst_17820 = cljs.core.nth.call(null,inst_17818,1,null);var state_17932__$1 = (function (){var statearr_17961 = state_17932;(statearr_17961[24] = inst_17819);
return statearr_17961;
})();if(cljs.core.truth_(inst_17820))
{var statearr_17962_18039 = state_17932__$1;(statearr_17962_18039[1] = 13);
} else
{var statearr_17963_18040 = state_17932__$1;(statearr_17963_18040[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 42))
{var state_17932__$1 = state_17932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17932__$1,45,dchan);
} else
{if((state_val_17933 === 11))
{var inst_17809 = (state_17932[14]);var inst_17829 = (state_17932[25]);var inst_17829__$1 = cljs.core.seq.call(null,inst_17809);var state_17932__$1 = (function (){var statearr_17964 = state_17932;(statearr_17964[25] = inst_17829__$1);
return statearr_17964;
})();if(inst_17829__$1)
{var statearr_17965_18041 = state_17932__$1;(statearr_17965_18041[1] = 16);
} else
{var statearr_17966_18042 = state_17932__$1;(statearr_17966_18042[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 43))
{var state_17932__$1 = state_17932;var statearr_17967_18043 = state_17932__$1;(statearr_17967_18043[2] = null);
(statearr_17967_18043[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 12))
{var inst_17855 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17968_18044 = state_17932__$1;(statearr_17968_18044[2] = inst_17855);
(statearr_17968_18044[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 44))
{var inst_17925 = (state_17932[2]);var state_17932__$1 = (function (){var statearr_17969 = state_17932;(statearr_17969[26] = inst_17925);
return statearr_17969;
})();var statearr_17970_18045 = state_17932__$1;(statearr_17970_18045[2] = null);
(statearr_17970_18045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 13))
{var inst_17819 = (state_17932[24]);var inst_17822 = cljs.core.async.close_BANG_.call(null,inst_17819);var state_17932__$1 = state_17932;var statearr_17971_18046 = state_17932__$1;(statearr_17971_18046[2] = inst_17822);
(statearr_17971_18046[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 45))
{var inst_17922 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17975_18047 = state_17932__$1;(statearr_17975_18047[2] = inst_17922);
(statearr_17975_18047[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 14))
{var state_17932__$1 = state_17932;var statearr_17976_18048 = state_17932__$1;(statearr_17976_18048[2] = null);
(statearr_17976_18048[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 15))
{var inst_17809 = (state_17932[14]);var inst_17812 = (state_17932[15]);var inst_17811 = (state_17932[16]);var inst_17810 = (state_17932[17]);var inst_17825 = (state_17932[2]);var inst_17826 = (inst_17812 + 1);var tmp17972 = inst_17809;var tmp17973 = inst_17811;var tmp17974 = inst_17810;var inst_17809__$1 = tmp17972;var inst_17810__$1 = tmp17974;var inst_17811__$1 = tmp17973;var inst_17812__$1 = inst_17826;var state_17932__$1 = (function (){var statearr_17977 = state_17932;(statearr_17977[14] = inst_17809__$1);
(statearr_17977[27] = inst_17825);
(statearr_17977[15] = inst_17812__$1);
(statearr_17977[16] = inst_17811__$1);
(statearr_17977[17] = inst_17810__$1);
return statearr_17977;
})();var statearr_17978_18049 = state_17932__$1;(statearr_17978_18049[2] = null);
(statearr_17978_18049[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 16))
{var inst_17829 = (state_17932[25]);var inst_17831 = cljs.core.chunked_seq_QMARK_.call(null,inst_17829);var state_17932__$1 = state_17932;if(inst_17831)
{var statearr_17979_18050 = state_17932__$1;(statearr_17979_18050[1] = 19);
} else
{var statearr_17980_18051 = state_17932__$1;(statearr_17980_18051[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 17))
{var state_17932__$1 = state_17932;var statearr_17981_18052 = state_17932__$1;(statearr_17981_18052[2] = null);
(statearr_17981_18052[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 18))
{var inst_17853 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17982_18053 = state_17932__$1;(statearr_17982_18053[2] = inst_17853);
(statearr_17982_18053[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 19))
{var inst_17829 = (state_17932[25]);var inst_17833 = cljs.core.chunk_first.call(null,inst_17829);var inst_17834 = cljs.core.chunk_rest.call(null,inst_17829);var inst_17835 = cljs.core.count.call(null,inst_17833);var inst_17809 = inst_17834;var inst_17810 = inst_17833;var inst_17811 = inst_17835;var inst_17812 = 0;var state_17932__$1 = (function (){var statearr_17983 = state_17932;(statearr_17983[14] = inst_17809);
(statearr_17983[15] = inst_17812);
(statearr_17983[16] = inst_17811);
(statearr_17983[17] = inst_17810);
return statearr_17983;
})();var statearr_17984_18054 = state_17932__$1;(statearr_17984_18054[2] = null);
(statearr_17984_18054[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 20))
{var inst_17829 = (state_17932[25]);var inst_17839 = cljs.core.first.call(null,inst_17829);var inst_17840 = cljs.core.nth.call(null,inst_17839,0,null);var inst_17841 = cljs.core.nth.call(null,inst_17839,1,null);var state_17932__$1 = (function (){var statearr_17985 = state_17932;(statearr_17985[28] = inst_17840);
return statearr_17985;
})();if(cljs.core.truth_(inst_17841))
{var statearr_17986_18055 = state_17932__$1;(statearr_17986_18055[1] = 22);
} else
{var statearr_17987_18056 = state_17932__$1;(statearr_17987_18056[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 21))
{var inst_17850 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_17988_18057 = state_17932__$1;(statearr_17988_18057[2] = inst_17850);
(statearr_17988_18057[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 22))
{var inst_17840 = (state_17932[28]);var inst_17843 = cljs.core.async.close_BANG_.call(null,inst_17840);var state_17932__$1 = state_17932;var statearr_17989_18058 = state_17932__$1;(statearr_17989_18058[2] = inst_17843);
(statearr_17989_18058[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 23))
{var state_17932__$1 = state_17932;var statearr_17990_18059 = state_17932__$1;(statearr_17990_18059[2] = null);
(statearr_17990_18059[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 24))
{var inst_17829 = (state_17932[25]);var inst_17846 = (state_17932[2]);var inst_17847 = cljs.core.next.call(null,inst_17829);var inst_17809 = inst_17847;var inst_17810 = null;var inst_17811 = 0;var inst_17812 = 0;var state_17932__$1 = (function (){var statearr_17991 = state_17932;(statearr_17991[14] = inst_17809);
(statearr_17991[29] = inst_17846);
(statearr_17991[15] = inst_17812);
(statearr_17991[16] = inst_17811);
(statearr_17991[17] = inst_17810);
return statearr_17991;
})();var statearr_17992_18060 = state_17932__$1;(statearr_17992_18060[2] = null);
(statearr_17992_18060[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 25))
{var inst_17871 = (state_17932[10]);var inst_17870 = (state_17932[11]);var inst_17873 = (inst_17871 < inst_17870);var inst_17874 = inst_17873;var state_17932__$1 = state_17932;if(cljs.core.truth_(inst_17874))
{var statearr_17993_18061 = state_17932__$1;(statearr_17993_18061[1] = 27);
} else
{var statearr_17994_18062 = state_17932__$1;(statearr_17994_18062[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 26))
{var inst_17860 = (state_17932[19]);var inst_17918 = (state_17932[2]);var inst_17919 = cljs.core.seq.call(null,inst_17860);var state_17932__$1 = (function (){var statearr_17995 = state_17932;(statearr_17995[30] = inst_17918);
return statearr_17995;
})();if(inst_17919)
{var statearr_17996_18063 = state_17932__$1;(statearr_17996_18063[1] = 42);
} else
{var statearr_17997_18064 = state_17932__$1;(statearr_17997_18064[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 27))
{var inst_17871 = (state_17932[10]);var inst_17869 = (state_17932[12]);var inst_17876 = cljs.core._nth.call(null,inst_17869,inst_17871);var state_17932__$1 = (function (){var statearr_17998 = state_17932;(statearr_17998[8] = inst_17876);
return statearr_17998;
})();var statearr_17999_18065 = state_17932__$1;(statearr_17999_18065[2] = null);
(statearr_17999_18065[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 28))
{var inst_17889 = (state_17932[9]);var inst_17868 = (state_17932[13]);var inst_17889__$1 = cljs.core.seq.call(null,inst_17868);var state_17932__$1 = (function (){var statearr_18003 = state_17932;(statearr_18003[9] = inst_17889__$1);
return statearr_18003;
})();if(inst_17889__$1)
{var statearr_18004_18066 = state_17932__$1;(statearr_18004_18066[1] = 33);
} else
{var statearr_18005_18067 = state_17932__$1;(statearr_18005_18067[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 29))
{var inst_17916 = (state_17932[2]);var state_17932__$1 = state_17932;var statearr_18006_18068 = state_17932__$1;(statearr_18006_18068[2] = inst_17916);
(statearr_18006_18068[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 30))
{var inst_17871 = (state_17932[10]);var inst_17870 = (state_17932[11]);var inst_17869 = (state_17932[12]);var inst_17868 = (state_17932[13]);var inst_17885 = (state_17932[2]);var inst_17886 = (inst_17871 + 1);var tmp18000 = inst_17870;var tmp18001 = inst_17869;var tmp18002 = inst_17868;var inst_17868__$1 = tmp18002;var inst_17869__$1 = tmp18001;var inst_17870__$1 = tmp18000;var inst_17871__$1 = inst_17886;var state_17932__$1 = (function (){var statearr_18007 = state_17932;(statearr_18007[10] = inst_17871__$1);
(statearr_18007[11] = inst_17870__$1);
(statearr_18007[31] = inst_17885);
(statearr_18007[12] = inst_17869__$1);
(statearr_18007[13] = inst_17868__$1);
return statearr_18007;
})();var statearr_18008_18069 = state_17932__$1;(statearr_18008_18069[2] = null);
(statearr_18008_18069[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17933 === 31))
{var inst_17876 = (state_17932[8]);var inst_17877 = (state_17932[2]);var inst_17878 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17879 = cljs.core.async.untap_STAR_.call(null,m,inst_17876);var state_17932__$1 = (function (){var statearr_18009 = state_17932;(statearr_18009[32] = inst_17878);
(statearr_18009[33] = inst_17877);
return statearr_18009;
})();var statearr_18010_18070 = state_17932__$1;(statearr_18010_18070[2] = inst_17879);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17932__$1);
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
var state_machine__5792__auto____0 = (function (){var statearr_18014 = (new Array(34));(statearr_18014[0] = state_machine__5792__auto__);
(statearr_18014[1] = 1);
return statearr_18014;
});
var state_machine__5792__auto____1 = (function (state_17932){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_17932);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18015){if((e18015 instanceof Object))
{var ex__5795__auto__ = e18015;var statearr_18016_18071 = state_17932;(statearr_18016_18071[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18072 = state_17932;
state_17932 = G__18072;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_17932){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_17932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18017 = f__5862__auto__.call(null);(statearr_18017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18018);
return statearr_18017;
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
cljs.core.async.Mix = (function (){var obj18074 = {};return obj18074;
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
;var m = (function (){if(typeof cljs.core.async.t18184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18184 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta18185){
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
this.meta18185 = meta18185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18184.cljs$lang$type = true;
cljs.core.async.t18184.cljs$lang$ctorStr = "cljs.core.async/t18184";
cljs.core.async.t18184.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t18184");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18184.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18186){var self__ = this;
var _18186__$1 = this;return self__.meta18185;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18186,meta18185__$1){var self__ = this;
var _18186__$1 = this;return (new cljs.core.async.t18184(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta18185__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18184 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18184(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18185){return (new cljs.core.async.t18184(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18185));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18184(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5861__auto___18293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18251){var state_val_18252 = (state_18251[1]);if((state_val_18252 === 1))
{var inst_18190 = (state_18251[7]);var inst_18190__$1 = calc_state.call(null);var inst_18191 = cljs.core.seq_QMARK_.call(null,inst_18190__$1);var state_18251__$1 = (function (){var statearr_18253 = state_18251;(statearr_18253[7] = inst_18190__$1);
return statearr_18253;
})();if(inst_18191)
{var statearr_18254_18294 = state_18251__$1;(statearr_18254_18294[1] = 2);
} else
{var statearr_18255_18295 = state_18251__$1;(statearr_18255_18295[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 2))
{var inst_18190 = (state_18251[7]);var inst_18193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18190);var state_18251__$1 = state_18251;var statearr_18256_18296 = state_18251__$1;(statearr_18256_18296[2] = inst_18193);
(statearr_18256_18296[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 3))
{var inst_18190 = (state_18251[7]);var state_18251__$1 = state_18251;var statearr_18257_18297 = state_18251__$1;(statearr_18257_18297[2] = inst_18190);
(statearr_18257_18297[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 4))
{var inst_18190 = (state_18251[7]);var inst_18196 = (state_18251[2]);var inst_18197 = cljs.core.get.call(null,inst_18196,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18198 = cljs.core.get.call(null,inst_18196,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18199 = cljs.core.get.call(null,inst_18196,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_18200 = inst_18190;var state_18251__$1 = (function (){var statearr_18258 = state_18251;(statearr_18258[8] = inst_18197);
(statearr_18258[9] = inst_18200);
(statearr_18258[10] = inst_18199);
(statearr_18258[11] = inst_18198);
return statearr_18258;
})();var statearr_18259_18298 = state_18251__$1;(statearr_18259_18298[2] = null);
(statearr_18259_18298[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 5))
{var inst_18200 = (state_18251[9]);var inst_18203 = cljs.core.seq_QMARK_.call(null,inst_18200);var state_18251__$1 = state_18251;if(inst_18203)
{var statearr_18260_18299 = state_18251__$1;(statearr_18260_18299[1] = 7);
} else
{var statearr_18261_18300 = state_18251__$1;(statearr_18261_18300[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 6))
{var inst_18249 = (state_18251[2]);var state_18251__$1 = state_18251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18251__$1,inst_18249);
} else
{if((state_val_18252 === 7))
{var inst_18200 = (state_18251[9]);var inst_18205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18200);var state_18251__$1 = state_18251;var statearr_18262_18301 = state_18251__$1;(statearr_18262_18301[2] = inst_18205);
(statearr_18262_18301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 8))
{var inst_18200 = (state_18251[9]);var state_18251__$1 = state_18251;var statearr_18263_18302 = state_18251__$1;(statearr_18263_18302[2] = inst_18200);
(statearr_18263_18302[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 9))
{var inst_18208 = (state_18251[12]);var inst_18208__$1 = (state_18251[2]);var inst_18209 = cljs.core.get.call(null,inst_18208__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18210 = cljs.core.get.call(null,inst_18208__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18211 = cljs.core.get.call(null,inst_18208__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_18251__$1 = (function (){var statearr_18264 = state_18251;(statearr_18264[13] = inst_18210);
(statearr_18264[12] = inst_18208__$1);
(statearr_18264[14] = inst_18211);
return statearr_18264;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18251__$1,10,inst_18209);
} else
{if((state_val_18252 === 10))
{var inst_18215 = (state_18251[15]);var inst_18216 = (state_18251[16]);var inst_18214 = (state_18251[2]);var inst_18215__$1 = cljs.core.nth.call(null,inst_18214,0,null);var inst_18216__$1 = cljs.core.nth.call(null,inst_18214,1,null);var inst_18217 = (inst_18215__$1 == null);var inst_18218 = cljs.core._EQ_.call(null,inst_18216__$1,change);var inst_18219 = (inst_18217) || (inst_18218);var state_18251__$1 = (function (){var statearr_18265 = state_18251;(statearr_18265[15] = inst_18215__$1);
(statearr_18265[16] = inst_18216__$1);
return statearr_18265;
})();if(cljs.core.truth_(inst_18219))
{var statearr_18266_18303 = state_18251__$1;(statearr_18266_18303[1] = 11);
} else
{var statearr_18267_18304 = state_18251__$1;(statearr_18267_18304[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 11))
{var inst_18215 = (state_18251[15]);var inst_18221 = (inst_18215 == null);var state_18251__$1 = state_18251;if(cljs.core.truth_(inst_18221))
{var statearr_18268_18305 = state_18251__$1;(statearr_18268_18305[1] = 14);
} else
{var statearr_18269_18306 = state_18251__$1;(statearr_18269_18306[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 12))
{var inst_18230 = (state_18251[17]);var inst_18216 = (state_18251[16]);var inst_18211 = (state_18251[14]);var inst_18230__$1 = inst_18211.call(null,inst_18216);var state_18251__$1 = (function (){var statearr_18270 = state_18251;(statearr_18270[17] = inst_18230__$1);
return statearr_18270;
})();if(cljs.core.truth_(inst_18230__$1))
{var statearr_18271_18307 = state_18251__$1;(statearr_18271_18307[1] = 17);
} else
{var statearr_18272_18308 = state_18251__$1;(statearr_18272_18308[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 13))
{var inst_18247 = (state_18251[2]);var state_18251__$1 = state_18251;var statearr_18273_18309 = state_18251__$1;(statearr_18273_18309[2] = inst_18247);
(statearr_18273_18309[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 14))
{var inst_18216 = (state_18251[16]);var inst_18223 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18216);var state_18251__$1 = state_18251;var statearr_18274_18310 = state_18251__$1;(statearr_18274_18310[2] = inst_18223);
(statearr_18274_18310[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 15))
{var state_18251__$1 = state_18251;var statearr_18275_18311 = state_18251__$1;(statearr_18275_18311[2] = null);
(statearr_18275_18311[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 16))
{var inst_18226 = (state_18251[2]);var inst_18227 = calc_state.call(null);var inst_18200 = inst_18227;var state_18251__$1 = (function (){var statearr_18276 = state_18251;(statearr_18276[9] = inst_18200);
(statearr_18276[18] = inst_18226);
return statearr_18276;
})();var statearr_18277_18312 = state_18251__$1;(statearr_18277_18312[2] = null);
(statearr_18277_18312[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 17))
{var inst_18230 = (state_18251[17]);var state_18251__$1 = state_18251;var statearr_18278_18313 = state_18251__$1;(statearr_18278_18313[2] = inst_18230);
(statearr_18278_18313[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 18))
{var inst_18216 = (state_18251[16]);var inst_18210 = (state_18251[13]);var inst_18211 = (state_18251[14]);var inst_18233 = cljs.core.empty_QMARK_.call(null,inst_18211);var inst_18234 = inst_18210.call(null,inst_18216);var inst_18235 = cljs.core.not.call(null,inst_18234);var inst_18236 = (inst_18233) && (inst_18235);var state_18251__$1 = state_18251;var statearr_18279_18314 = state_18251__$1;(statearr_18279_18314[2] = inst_18236);
(statearr_18279_18314[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 19))
{var inst_18238 = (state_18251[2]);var state_18251__$1 = state_18251;if(cljs.core.truth_(inst_18238))
{var statearr_18280_18315 = state_18251__$1;(statearr_18280_18315[1] = 20);
} else
{var statearr_18281_18316 = state_18251__$1;(statearr_18281_18316[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 20))
{var inst_18215 = (state_18251[15]);var state_18251__$1 = state_18251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18251__$1,23,out,inst_18215);
} else
{if((state_val_18252 === 21))
{var state_18251__$1 = state_18251;var statearr_18282_18317 = state_18251__$1;(statearr_18282_18317[2] = null);
(statearr_18282_18317[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 22))
{var inst_18208 = (state_18251[12]);var inst_18244 = (state_18251[2]);var inst_18200 = inst_18208;var state_18251__$1 = (function (){var statearr_18283 = state_18251;(statearr_18283[9] = inst_18200);
(statearr_18283[19] = inst_18244);
return statearr_18283;
})();var statearr_18284_18318 = state_18251__$1;(statearr_18284_18318[2] = null);
(statearr_18284_18318[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18252 === 23))
{var inst_18241 = (state_18251[2]);var state_18251__$1 = state_18251;var statearr_18285_18319 = state_18251__$1;(statearr_18285_18319[2] = inst_18241);
(statearr_18285_18319[1] = 22);
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
var state_machine__5792__auto____0 = (function (){var statearr_18289 = (new Array(20));(statearr_18289[0] = state_machine__5792__auto__);
(statearr_18289[1] = 1);
return statearr_18289;
});
var state_machine__5792__auto____1 = (function (state_18251){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18290){if((e18290 instanceof Object))
{var ex__5795__auto__ = e18290;var statearr_18291_18320 = state_18251;(statearr_18291_18320[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18321 = state_18251;
state_18251 = G__18321;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18251){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18292 = f__5862__auto__.call(null);(statearr_18292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18293);
return statearr_18292;
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
cljs.core.async.Pub = (function (){var obj18323 = {};return obj18323;
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
return (function (p1__18324_SHARP_){if(cljs.core.truth_(p1__18324_SHARP_.call(null,topic)))
{return p1__18324_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18324_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18449 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18449 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18450){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18450 = meta18450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18449.cljs$lang$type = true;
cljs.core.async.t18449.cljs$lang$ctorStr = "cljs.core.async/t18449";
cljs.core.async.t18449.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t18449");
});})(mults,ensure_mult))
;
cljs.core.async.t18449.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18449.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18451){var self__ = this;
var _18451__$1 = this;return self__.meta18450;
});})(mults,ensure_mult))
;
cljs.core.async.t18449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18451,meta18450__$1){var self__ = this;
var _18451__$1 = this;return (new cljs.core.async.t18449(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18450__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18449 = ((function (mults,ensure_mult){
return (function __GT_t18449(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18450){return (new cljs.core.async.t18449(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18450));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18449(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5861__auto___18573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18525){var state_val_18526 = (state_18525[1]);if((state_val_18526 === 1))
{var state_18525__$1 = state_18525;var statearr_18527_18574 = state_18525__$1;(statearr_18527_18574[2] = null);
(statearr_18527_18574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 2))
{var state_18525__$1 = state_18525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18525__$1,4,ch);
} else
{if((state_val_18526 === 3))
{var inst_18523 = (state_18525[2]);var state_18525__$1 = state_18525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18525__$1,inst_18523);
} else
{if((state_val_18526 === 4))
{var inst_18454 = (state_18525[7]);var inst_18454__$1 = (state_18525[2]);var inst_18455 = (inst_18454__$1 == null);var state_18525__$1 = (function (){var statearr_18528 = state_18525;(statearr_18528[7] = inst_18454__$1);
return statearr_18528;
})();if(cljs.core.truth_(inst_18455))
{var statearr_18529_18575 = state_18525__$1;(statearr_18529_18575[1] = 5);
} else
{var statearr_18530_18576 = state_18525__$1;(statearr_18530_18576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 5))
{var inst_18461 = cljs.core.deref.call(null,mults);var inst_18462 = cljs.core.vals.call(null,inst_18461);var inst_18463 = cljs.core.seq.call(null,inst_18462);var inst_18464 = inst_18463;var inst_18465 = null;var inst_18466 = 0;var inst_18467 = 0;var state_18525__$1 = (function (){var statearr_18531 = state_18525;(statearr_18531[8] = inst_18466);
(statearr_18531[9] = inst_18467);
(statearr_18531[10] = inst_18465);
(statearr_18531[11] = inst_18464);
return statearr_18531;
})();var statearr_18532_18577 = state_18525__$1;(statearr_18532_18577[2] = null);
(statearr_18532_18577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 6))
{var inst_18454 = (state_18525[7]);var inst_18502 = (state_18525[12]);var inst_18504 = (state_18525[13]);var inst_18502__$1 = topic_fn.call(null,inst_18454);var inst_18503 = cljs.core.deref.call(null,mults);var inst_18504__$1 = cljs.core.get.call(null,inst_18503,inst_18502__$1);var state_18525__$1 = (function (){var statearr_18533 = state_18525;(statearr_18533[12] = inst_18502__$1);
(statearr_18533[13] = inst_18504__$1);
return statearr_18533;
})();if(cljs.core.truth_(inst_18504__$1))
{var statearr_18534_18578 = state_18525__$1;(statearr_18534_18578[1] = 19);
} else
{var statearr_18535_18579 = state_18525__$1;(statearr_18535_18579[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 7))
{var inst_18521 = (state_18525[2]);var state_18525__$1 = state_18525;var statearr_18536_18580 = state_18525__$1;(statearr_18536_18580[2] = inst_18521);
(statearr_18536_18580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 8))
{var inst_18466 = (state_18525[8]);var inst_18467 = (state_18525[9]);var inst_18469 = (inst_18467 < inst_18466);var inst_18470 = inst_18469;var state_18525__$1 = state_18525;if(cljs.core.truth_(inst_18470))
{var statearr_18540_18581 = state_18525__$1;(statearr_18540_18581[1] = 10);
} else
{var statearr_18541_18582 = state_18525__$1;(statearr_18541_18582[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 9))
{var inst_18500 = (state_18525[2]);var state_18525__$1 = state_18525;var statearr_18542_18583 = state_18525__$1;(statearr_18542_18583[2] = inst_18500);
(statearr_18542_18583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 10))
{var inst_18466 = (state_18525[8]);var inst_18467 = (state_18525[9]);var inst_18465 = (state_18525[10]);var inst_18464 = (state_18525[11]);var inst_18472 = cljs.core._nth.call(null,inst_18465,inst_18467);var inst_18473 = cljs.core.async.muxch_STAR_.call(null,inst_18472);var inst_18474 = cljs.core.async.close_BANG_.call(null,inst_18473);var inst_18475 = (inst_18467 + 1);var tmp18537 = inst_18466;var tmp18538 = inst_18465;var tmp18539 = inst_18464;var inst_18464__$1 = tmp18539;var inst_18465__$1 = tmp18538;var inst_18466__$1 = tmp18537;var inst_18467__$1 = inst_18475;var state_18525__$1 = (function (){var statearr_18543 = state_18525;(statearr_18543[8] = inst_18466__$1);
(statearr_18543[9] = inst_18467__$1);
(statearr_18543[10] = inst_18465__$1);
(statearr_18543[11] = inst_18464__$1);
(statearr_18543[14] = inst_18474);
return statearr_18543;
})();var statearr_18544_18584 = state_18525__$1;(statearr_18544_18584[2] = null);
(statearr_18544_18584[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 11))
{var inst_18464 = (state_18525[11]);var inst_18478 = (state_18525[15]);var inst_18478__$1 = cljs.core.seq.call(null,inst_18464);var state_18525__$1 = (function (){var statearr_18545 = state_18525;(statearr_18545[15] = inst_18478__$1);
return statearr_18545;
})();if(inst_18478__$1)
{var statearr_18546_18585 = state_18525__$1;(statearr_18546_18585[1] = 13);
} else
{var statearr_18547_18586 = state_18525__$1;(statearr_18547_18586[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 12))
{var inst_18498 = (state_18525[2]);var state_18525__$1 = state_18525;var statearr_18548_18587 = state_18525__$1;(statearr_18548_18587[2] = inst_18498);
(statearr_18548_18587[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 13))
{var inst_18478 = (state_18525[15]);var inst_18480 = cljs.core.chunked_seq_QMARK_.call(null,inst_18478);var state_18525__$1 = state_18525;if(inst_18480)
{var statearr_18549_18588 = state_18525__$1;(statearr_18549_18588[1] = 16);
} else
{var statearr_18550_18589 = state_18525__$1;(statearr_18550_18589[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 14))
{var state_18525__$1 = state_18525;var statearr_18551_18590 = state_18525__$1;(statearr_18551_18590[2] = null);
(statearr_18551_18590[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 15))
{var inst_18496 = (state_18525[2]);var state_18525__$1 = state_18525;var statearr_18552_18591 = state_18525__$1;(statearr_18552_18591[2] = inst_18496);
(statearr_18552_18591[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 16))
{var inst_18478 = (state_18525[15]);var inst_18482 = cljs.core.chunk_first.call(null,inst_18478);var inst_18483 = cljs.core.chunk_rest.call(null,inst_18478);var inst_18484 = cljs.core.count.call(null,inst_18482);var inst_18464 = inst_18483;var inst_18465 = inst_18482;var inst_18466 = inst_18484;var inst_18467 = 0;var state_18525__$1 = (function (){var statearr_18553 = state_18525;(statearr_18553[8] = inst_18466);
(statearr_18553[9] = inst_18467);
(statearr_18553[10] = inst_18465);
(statearr_18553[11] = inst_18464);
return statearr_18553;
})();var statearr_18554_18592 = state_18525__$1;(statearr_18554_18592[2] = null);
(statearr_18554_18592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 17))
{var inst_18478 = (state_18525[15]);var inst_18487 = cljs.core.first.call(null,inst_18478);var inst_18488 = cljs.core.async.muxch_STAR_.call(null,inst_18487);var inst_18489 = cljs.core.async.close_BANG_.call(null,inst_18488);var inst_18490 = cljs.core.next.call(null,inst_18478);var inst_18464 = inst_18490;var inst_18465 = null;var inst_18466 = 0;var inst_18467 = 0;var state_18525__$1 = (function (){var statearr_18555 = state_18525;(statearr_18555[16] = inst_18489);
(statearr_18555[8] = inst_18466);
(statearr_18555[9] = inst_18467);
(statearr_18555[10] = inst_18465);
(statearr_18555[11] = inst_18464);
return statearr_18555;
})();var statearr_18556_18593 = state_18525__$1;(statearr_18556_18593[2] = null);
(statearr_18556_18593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 18))
{var inst_18493 = (state_18525[2]);var state_18525__$1 = state_18525;var statearr_18557_18594 = state_18525__$1;(statearr_18557_18594[2] = inst_18493);
(statearr_18557_18594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 19))
{var state_18525__$1 = state_18525;var statearr_18558_18595 = state_18525__$1;(statearr_18558_18595[2] = null);
(statearr_18558_18595[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 20))
{var state_18525__$1 = state_18525;var statearr_18559_18596 = state_18525__$1;(statearr_18559_18596[2] = null);
(statearr_18559_18596[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 21))
{var inst_18518 = (state_18525[2]);var state_18525__$1 = (function (){var statearr_18560 = state_18525;(statearr_18560[17] = inst_18518);
return statearr_18560;
})();var statearr_18561_18597 = state_18525__$1;(statearr_18561_18597[2] = null);
(statearr_18561_18597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 22))
{var inst_18515 = (state_18525[2]);var state_18525__$1 = state_18525;var statearr_18562_18598 = state_18525__$1;(statearr_18562_18598[2] = inst_18515);
(statearr_18562_18598[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 23))
{var inst_18502 = (state_18525[12]);var inst_18506 = (state_18525[2]);var inst_18507 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18502);var state_18525__$1 = (function (){var statearr_18563 = state_18525;(statearr_18563[18] = inst_18506);
return statearr_18563;
})();var statearr_18564_18599 = state_18525__$1;(statearr_18564_18599[2] = inst_18507);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18526 === 24))
{var inst_18454 = (state_18525[7]);var inst_18504 = (state_18525[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18525,23,Object,null,22);var inst_18511 = cljs.core.async.muxch_STAR_.call(null,inst_18504);var state_18525__$1 = state_18525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18525__$1,25,inst_18511,inst_18454);
} else
{if((state_val_18526 === 25))
{var inst_18513 = (state_18525[2]);var state_18525__$1 = state_18525;var statearr_18565_18600 = state_18525__$1;(statearr_18565_18600[2] = inst_18513);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18525__$1);
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
var state_machine__5792__auto____0 = (function (){var statearr_18569 = (new Array(19));(statearr_18569[0] = state_machine__5792__auto__);
(statearr_18569[1] = 1);
return statearr_18569;
});
var state_machine__5792__auto____1 = (function (state_18525){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18570){if((e18570 instanceof Object))
{var ex__5795__auto__ = e18570;var statearr_18571_18601 = state_18525;(statearr_18571_18601[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18602 = state_18525;
state_18525 = G__18602;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18525){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18572 = f__5862__auto__.call(null);(statearr_18572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18573);
return statearr_18572;
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
,cljs.core.range.call(null,cnt));var c__5861__auto___18739 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18709){var state_val_18710 = (state_18709[1]);if((state_val_18710 === 1))
{var state_18709__$1 = state_18709;var statearr_18711_18740 = state_18709__$1;(statearr_18711_18740[2] = null);
(statearr_18711_18740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 2))
{var inst_18672 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18673 = 0;var state_18709__$1 = (function (){var statearr_18712 = state_18709;(statearr_18712[7] = inst_18672);
(statearr_18712[8] = inst_18673);
return statearr_18712;
})();var statearr_18713_18741 = state_18709__$1;(statearr_18713_18741[2] = null);
(statearr_18713_18741[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 3))
{var inst_18707 = (state_18709[2]);var state_18709__$1 = state_18709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18709__$1,inst_18707);
} else
{if((state_val_18710 === 4))
{var inst_18673 = (state_18709[8]);var inst_18675 = (inst_18673 < cnt);var state_18709__$1 = state_18709;if(cljs.core.truth_(inst_18675))
{var statearr_18714_18742 = state_18709__$1;(statearr_18714_18742[1] = 6);
} else
{var statearr_18715_18743 = state_18709__$1;(statearr_18715_18743[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 5))
{var inst_18693 = (state_18709[2]);var state_18709__$1 = (function (){var statearr_18716 = state_18709;(statearr_18716[9] = inst_18693);
return statearr_18716;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18709__$1,12,dchan);
} else
{if((state_val_18710 === 6))
{var state_18709__$1 = state_18709;var statearr_18717_18744 = state_18709__$1;(statearr_18717_18744[2] = null);
(statearr_18717_18744[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 7))
{var state_18709__$1 = state_18709;var statearr_18718_18745 = state_18709__$1;(statearr_18718_18745[2] = null);
(statearr_18718_18745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 8))
{var inst_18691 = (state_18709[2]);var state_18709__$1 = state_18709;var statearr_18719_18746 = state_18709__$1;(statearr_18719_18746[2] = inst_18691);
(statearr_18719_18746[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 9))
{var inst_18673 = (state_18709[8]);var inst_18686 = (state_18709[2]);var inst_18687 = (inst_18673 + 1);var inst_18673__$1 = inst_18687;var state_18709__$1 = (function (){var statearr_18720 = state_18709;(statearr_18720[10] = inst_18686);
(statearr_18720[8] = inst_18673__$1);
return statearr_18720;
})();var statearr_18721_18747 = state_18709__$1;(statearr_18721_18747[2] = null);
(statearr_18721_18747[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 10))
{var inst_18677 = (state_18709[2]);var inst_18678 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18709__$1 = (function (){var statearr_18722 = state_18709;(statearr_18722[11] = inst_18677);
return statearr_18722;
})();var statearr_18723_18748 = state_18709__$1;(statearr_18723_18748[2] = inst_18678);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 11))
{var inst_18673 = (state_18709[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18709,10,Object,null,9);var inst_18682 = chs__$1.call(null,inst_18673);var inst_18683 = done.call(null,inst_18673);var inst_18684 = cljs.core.async.take_BANG_.call(null,inst_18682,inst_18683);var state_18709__$1 = state_18709;var statearr_18724_18749 = state_18709__$1;(statearr_18724_18749[2] = inst_18684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 12))
{var inst_18695 = (state_18709[12]);var inst_18695__$1 = (state_18709[2]);var inst_18696 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18695__$1);var state_18709__$1 = (function (){var statearr_18725 = state_18709;(statearr_18725[12] = inst_18695__$1);
return statearr_18725;
})();if(cljs.core.truth_(inst_18696))
{var statearr_18726_18750 = state_18709__$1;(statearr_18726_18750[1] = 13);
} else
{var statearr_18727_18751 = state_18709__$1;(statearr_18727_18751[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 13))
{var inst_18698 = cljs.core.async.close_BANG_.call(null,out);var state_18709__$1 = state_18709;var statearr_18728_18752 = state_18709__$1;(statearr_18728_18752[2] = inst_18698);
(statearr_18728_18752[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 14))
{var inst_18695 = (state_18709[12]);var inst_18700 = cljs.core.apply.call(null,f,inst_18695);var state_18709__$1 = state_18709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18709__$1,16,out,inst_18700);
} else
{if((state_val_18710 === 15))
{var inst_18705 = (state_18709[2]);var state_18709__$1 = state_18709;var statearr_18729_18753 = state_18709__$1;(statearr_18729_18753[2] = inst_18705);
(statearr_18729_18753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18710 === 16))
{var inst_18702 = (state_18709[2]);var state_18709__$1 = (function (){var statearr_18730 = state_18709;(statearr_18730[13] = inst_18702);
return statearr_18730;
})();var statearr_18731_18754 = state_18709__$1;(statearr_18731_18754[2] = null);
(statearr_18731_18754[1] = 2);
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
var state_machine__5792__auto____0 = (function (){var statearr_18735 = (new Array(14));(statearr_18735[0] = state_machine__5792__auto__);
(statearr_18735[1] = 1);
return statearr_18735;
});
var state_machine__5792__auto____1 = (function (state_18709){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18736){if((e18736 instanceof Object))
{var ex__5795__auto__ = e18736;var statearr_18737_18755 = state_18709;(statearr_18737_18755[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18756 = state_18709;
state_18709 = G__18756;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18709){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18738 = f__5862__auto__.call(null);(statearr_18738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18739);
return statearr_18738;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___18864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18840){var state_val_18841 = (state_18840[1]);if((state_val_18841 === 1))
{var inst_18811 = cljs.core.vec.call(null,chs);var inst_18812 = inst_18811;var state_18840__$1 = (function (){var statearr_18842 = state_18840;(statearr_18842[7] = inst_18812);
return statearr_18842;
})();var statearr_18843_18865 = state_18840__$1;(statearr_18843_18865[2] = null);
(statearr_18843_18865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18841 === 2))
{var inst_18812 = (state_18840[7]);var inst_18814 = cljs.core.count.call(null,inst_18812);var inst_18815 = (inst_18814 > 0);var state_18840__$1 = state_18840;if(cljs.core.truth_(inst_18815))
{var statearr_18844_18866 = state_18840__$1;(statearr_18844_18866[1] = 4);
} else
{var statearr_18845_18867 = state_18840__$1;(statearr_18845_18867[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18841 === 3))
{var inst_18838 = (state_18840[2]);var state_18840__$1 = state_18840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18840__$1,inst_18838);
} else
{if((state_val_18841 === 4))
{var inst_18812 = (state_18840[7]);var state_18840__$1 = state_18840;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18840__$1,7,inst_18812);
} else
{if((state_val_18841 === 5))
{var inst_18834 = cljs.core.async.close_BANG_.call(null,out);var state_18840__$1 = state_18840;var statearr_18846_18868 = state_18840__$1;(statearr_18846_18868[2] = inst_18834);
(statearr_18846_18868[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18841 === 6))
{var inst_18836 = (state_18840[2]);var state_18840__$1 = state_18840;var statearr_18847_18869 = state_18840__$1;(statearr_18847_18869[2] = inst_18836);
(statearr_18847_18869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18841 === 7))
{var inst_18819 = (state_18840[8]);var inst_18820 = (state_18840[9]);var inst_18819__$1 = (state_18840[2]);var inst_18820__$1 = cljs.core.nth.call(null,inst_18819__$1,0,null);var inst_18821 = cljs.core.nth.call(null,inst_18819__$1,1,null);var inst_18822 = (inst_18820__$1 == null);var state_18840__$1 = (function (){var statearr_18848 = state_18840;(statearr_18848[8] = inst_18819__$1);
(statearr_18848[9] = inst_18820__$1);
(statearr_18848[10] = inst_18821);
return statearr_18848;
})();if(cljs.core.truth_(inst_18822))
{var statearr_18849_18870 = state_18840__$1;(statearr_18849_18870[1] = 8);
} else
{var statearr_18850_18871 = state_18840__$1;(statearr_18850_18871[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18841 === 8))
{var inst_18819 = (state_18840[8]);var inst_18812 = (state_18840[7]);var inst_18820 = (state_18840[9]);var inst_18821 = (state_18840[10]);var inst_18824 = (function (){var c = inst_18821;var v = inst_18820;var vec__18817 = inst_18819;var cs = inst_18812;return ((function (c,v,vec__18817,cs,inst_18819,inst_18812,inst_18820,inst_18821,state_val_18841){
return (function (p1__18757_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18757_SHARP_);
});
;})(c,v,vec__18817,cs,inst_18819,inst_18812,inst_18820,inst_18821,state_val_18841))
})();var inst_18825 = cljs.core.filterv.call(null,inst_18824,inst_18812);var inst_18812__$1 = inst_18825;var state_18840__$1 = (function (){var statearr_18851 = state_18840;(statearr_18851[7] = inst_18812__$1);
return statearr_18851;
})();var statearr_18852_18872 = state_18840__$1;(statearr_18852_18872[2] = null);
(statearr_18852_18872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18841 === 9))
{var inst_18820 = (state_18840[9]);var state_18840__$1 = state_18840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18840__$1,11,out,inst_18820);
} else
{if((state_val_18841 === 10))
{var inst_18832 = (state_18840[2]);var state_18840__$1 = state_18840;var statearr_18854_18873 = state_18840__$1;(statearr_18854_18873[2] = inst_18832);
(statearr_18854_18873[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18841 === 11))
{var inst_18812 = (state_18840[7]);var inst_18829 = (state_18840[2]);var tmp18853 = inst_18812;var inst_18812__$1 = tmp18853;var state_18840__$1 = (function (){var statearr_18855 = state_18840;(statearr_18855[7] = inst_18812__$1);
(statearr_18855[11] = inst_18829);
return statearr_18855;
})();var statearr_18856_18874 = state_18840__$1;(statearr_18856_18874[2] = null);
(statearr_18856_18874[1] = 2);
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
var state_machine__5792__auto____0 = (function (){var statearr_18860 = (new Array(12));(statearr_18860[0] = state_machine__5792__auto__);
(statearr_18860[1] = 1);
return statearr_18860;
});
var state_machine__5792__auto____1 = (function (state_18840){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18861){if((e18861 instanceof Object))
{var ex__5795__auto__ = e18861;var statearr_18862_18875 = state_18840;(statearr_18862_18875[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18876 = state_18840;
state_18840 = G__18876;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18840){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18863 = f__5862__auto__.call(null);(statearr_18863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18864);
return statearr_18863;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___18969 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_18946){var state_val_18947 = (state_18946[1]);if((state_val_18947 === 1))
{var inst_18923 = 0;var state_18946__$1 = (function (){var statearr_18948 = state_18946;(statearr_18948[7] = inst_18923);
return statearr_18948;
})();var statearr_18949_18970 = state_18946__$1;(statearr_18949_18970[2] = null);
(statearr_18949_18970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18947 === 2))
{var inst_18923 = (state_18946[7]);var inst_18925 = (inst_18923 < n);var state_18946__$1 = state_18946;if(cljs.core.truth_(inst_18925))
{var statearr_18950_18971 = state_18946__$1;(statearr_18950_18971[1] = 4);
} else
{var statearr_18951_18972 = state_18946__$1;(statearr_18951_18972[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18947 === 3))
{var inst_18943 = (state_18946[2]);var inst_18944 = cljs.core.async.close_BANG_.call(null,out);var state_18946__$1 = (function (){var statearr_18952 = state_18946;(statearr_18952[8] = inst_18943);
return statearr_18952;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18946__$1,inst_18944);
} else
{if((state_val_18947 === 4))
{var state_18946__$1 = state_18946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18946__$1,7,ch);
} else
{if((state_val_18947 === 5))
{var state_18946__$1 = state_18946;var statearr_18953_18973 = state_18946__$1;(statearr_18953_18973[2] = null);
(statearr_18953_18973[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18947 === 6))
{var inst_18941 = (state_18946[2]);var state_18946__$1 = state_18946;var statearr_18954_18974 = state_18946__$1;(statearr_18954_18974[2] = inst_18941);
(statearr_18954_18974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18947 === 7))
{var inst_18928 = (state_18946[9]);var inst_18928__$1 = (state_18946[2]);var inst_18929 = (inst_18928__$1 == null);var inst_18930 = cljs.core.not.call(null,inst_18929);var state_18946__$1 = (function (){var statearr_18955 = state_18946;(statearr_18955[9] = inst_18928__$1);
return statearr_18955;
})();if(inst_18930)
{var statearr_18956_18975 = state_18946__$1;(statearr_18956_18975[1] = 8);
} else
{var statearr_18957_18976 = state_18946__$1;(statearr_18957_18976[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18947 === 8))
{var inst_18928 = (state_18946[9]);var state_18946__$1 = state_18946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18946__$1,11,out,inst_18928);
} else
{if((state_val_18947 === 9))
{var state_18946__$1 = state_18946;var statearr_18958_18977 = state_18946__$1;(statearr_18958_18977[2] = null);
(statearr_18958_18977[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18947 === 10))
{var inst_18938 = (state_18946[2]);var state_18946__$1 = state_18946;var statearr_18959_18978 = state_18946__$1;(statearr_18959_18978[2] = inst_18938);
(statearr_18959_18978[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18947 === 11))
{var inst_18923 = (state_18946[7]);var inst_18933 = (state_18946[2]);var inst_18934 = (inst_18923 + 1);var inst_18923__$1 = inst_18934;var state_18946__$1 = (function (){var statearr_18960 = state_18946;(statearr_18960[10] = inst_18933);
(statearr_18960[7] = inst_18923__$1);
return statearr_18960;
})();var statearr_18961_18979 = state_18946__$1;(statearr_18961_18979[2] = null);
(statearr_18961_18979[1] = 2);
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
var state_machine__5792__auto____0 = (function (){var statearr_18965 = (new Array(11));(statearr_18965[0] = state_machine__5792__auto__);
(statearr_18965[1] = 1);
return statearr_18965;
});
var state_machine__5792__auto____1 = (function (state_18946){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_18946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e18966){if((e18966 instanceof Object))
{var ex__5795__auto__ = e18966;var statearr_18967_18980 = state_18946;(statearr_18967_18980[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18981 = state_18946;
state_18946 = G__18981;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_18946){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_18946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_18968 = f__5862__auto__.call(null);(statearr_18968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___18969);
return statearr_18968;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___19078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_19053){var state_val_19054 = (state_19053[1]);if((state_val_19054 === 1))
{var inst_19030 = null;var state_19053__$1 = (function (){var statearr_19055 = state_19053;(statearr_19055[7] = inst_19030);
return statearr_19055;
})();var statearr_19056_19079 = state_19053__$1;(statearr_19056_19079[2] = null);
(statearr_19056_19079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 2))
{var state_19053__$1 = state_19053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19053__$1,4,ch);
} else
{if((state_val_19054 === 3))
{var inst_19050 = (state_19053[2]);var inst_19051 = cljs.core.async.close_BANG_.call(null,out);var state_19053__$1 = (function (){var statearr_19057 = state_19053;(statearr_19057[8] = inst_19050);
return statearr_19057;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19053__$1,inst_19051);
} else
{if((state_val_19054 === 4))
{var inst_19033 = (state_19053[9]);var inst_19033__$1 = (state_19053[2]);var inst_19034 = (inst_19033__$1 == null);var inst_19035 = cljs.core.not.call(null,inst_19034);var state_19053__$1 = (function (){var statearr_19058 = state_19053;(statearr_19058[9] = inst_19033__$1);
return statearr_19058;
})();if(inst_19035)
{var statearr_19059_19080 = state_19053__$1;(statearr_19059_19080[1] = 5);
} else
{var statearr_19060_19081 = state_19053__$1;(statearr_19060_19081[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 5))
{var inst_19030 = (state_19053[7]);var inst_19033 = (state_19053[9]);var inst_19037 = cljs.core._EQ_.call(null,inst_19033,inst_19030);var state_19053__$1 = state_19053;if(inst_19037)
{var statearr_19061_19082 = state_19053__$1;(statearr_19061_19082[1] = 8);
} else
{var statearr_19062_19083 = state_19053__$1;(statearr_19062_19083[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 6))
{var state_19053__$1 = state_19053;var statearr_19064_19084 = state_19053__$1;(statearr_19064_19084[2] = null);
(statearr_19064_19084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 7))
{var inst_19048 = (state_19053[2]);var state_19053__$1 = state_19053;var statearr_19065_19085 = state_19053__$1;(statearr_19065_19085[2] = inst_19048);
(statearr_19065_19085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 8))
{var inst_19030 = (state_19053[7]);var tmp19063 = inst_19030;var inst_19030__$1 = tmp19063;var state_19053__$1 = (function (){var statearr_19066 = state_19053;(statearr_19066[7] = inst_19030__$1);
return statearr_19066;
})();var statearr_19067_19086 = state_19053__$1;(statearr_19067_19086[2] = null);
(statearr_19067_19086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 9))
{var inst_19033 = (state_19053[9]);var state_19053__$1 = state_19053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19053__$1,11,out,inst_19033);
} else
{if((state_val_19054 === 10))
{var inst_19045 = (state_19053[2]);var state_19053__$1 = state_19053;var statearr_19068_19087 = state_19053__$1;(statearr_19068_19087[2] = inst_19045);
(statearr_19068_19087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19054 === 11))
{var inst_19033 = (state_19053[9]);var inst_19042 = (state_19053[2]);var inst_19030 = inst_19033;var state_19053__$1 = (function (){var statearr_19069 = state_19053;(statearr_19069[10] = inst_19042);
(statearr_19069[7] = inst_19030);
return statearr_19069;
})();var statearr_19070_19088 = state_19053__$1;(statearr_19070_19088[2] = null);
(statearr_19070_19088[1] = 2);
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
var state_machine__5792__auto____0 = (function (){var statearr_19074 = (new Array(11));(statearr_19074[0] = state_machine__5792__auto__);
(statearr_19074[1] = 1);
return statearr_19074;
});
var state_machine__5792__auto____1 = (function (state_19053){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_19053);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e19075){if((e19075 instanceof Object))
{var ex__5795__auto__ = e19075;var statearr_19076_19089 = state_19053;(statearr_19076_19089[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19090 = state_19053;
state_19053 = G__19090;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_19053){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_19053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_19077 = f__5862__auto__.call(null);(statearr_19077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19078);
return statearr_19077;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___19225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_19195){var state_val_19196 = (state_19195[1]);if((state_val_19196 === 1))
{var inst_19158 = (new Array(n));var inst_19159 = inst_19158;var inst_19160 = 0;var state_19195__$1 = (function (){var statearr_19197 = state_19195;(statearr_19197[7] = inst_19160);
(statearr_19197[8] = inst_19159);
return statearr_19197;
})();var statearr_19198_19226 = state_19195__$1;(statearr_19198_19226[2] = null);
(statearr_19198_19226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 2))
{var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19195__$1,4,ch);
} else
{if((state_val_19196 === 3))
{var inst_19193 = (state_19195[2]);var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19195__$1,inst_19193);
} else
{if((state_val_19196 === 4))
{var inst_19163 = (state_19195[9]);var inst_19163__$1 = (state_19195[2]);var inst_19164 = (inst_19163__$1 == null);var inst_19165 = cljs.core.not.call(null,inst_19164);var state_19195__$1 = (function (){var statearr_19199 = state_19195;(statearr_19199[9] = inst_19163__$1);
return statearr_19199;
})();if(inst_19165)
{var statearr_19200_19227 = state_19195__$1;(statearr_19200_19227[1] = 5);
} else
{var statearr_19201_19228 = state_19195__$1;(statearr_19201_19228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 5))
{var inst_19160 = (state_19195[7]);var inst_19163 = (state_19195[9]);var inst_19159 = (state_19195[8]);var inst_19168 = (state_19195[10]);var inst_19167 = (inst_19159[inst_19160] = inst_19163);var inst_19168__$1 = (inst_19160 + 1);var inst_19169 = (inst_19168__$1 < n);var state_19195__$1 = (function (){var statearr_19202 = state_19195;(statearr_19202[11] = inst_19167);
(statearr_19202[10] = inst_19168__$1);
return statearr_19202;
})();if(cljs.core.truth_(inst_19169))
{var statearr_19203_19229 = state_19195__$1;(statearr_19203_19229[1] = 8);
} else
{var statearr_19204_19230 = state_19195__$1;(statearr_19204_19230[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 6))
{var inst_19160 = (state_19195[7]);var inst_19181 = (inst_19160 > 0);var state_19195__$1 = state_19195;if(cljs.core.truth_(inst_19181))
{var statearr_19206_19231 = state_19195__$1;(statearr_19206_19231[1] = 12);
} else
{var statearr_19207_19232 = state_19195__$1;(statearr_19207_19232[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 7))
{var inst_19191 = (state_19195[2]);var state_19195__$1 = state_19195;var statearr_19208_19233 = state_19195__$1;(statearr_19208_19233[2] = inst_19191);
(statearr_19208_19233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 8))
{var inst_19159 = (state_19195[8]);var inst_19168 = (state_19195[10]);var tmp19205 = inst_19159;var inst_19159__$1 = tmp19205;var inst_19160 = inst_19168;var state_19195__$1 = (function (){var statearr_19209 = state_19195;(statearr_19209[7] = inst_19160);
(statearr_19209[8] = inst_19159__$1);
return statearr_19209;
})();var statearr_19210_19234 = state_19195__$1;(statearr_19210_19234[2] = null);
(statearr_19210_19234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 9))
{var inst_19159 = (state_19195[8]);var inst_19173 = cljs.core.vec.call(null,inst_19159);var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19195__$1,11,out,inst_19173);
} else
{if((state_val_19196 === 10))
{var inst_19179 = (state_19195[2]);var state_19195__$1 = state_19195;var statearr_19211_19235 = state_19195__$1;(statearr_19211_19235[2] = inst_19179);
(statearr_19211_19235[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 11))
{var inst_19175 = (state_19195[2]);var inst_19176 = (new Array(n));var inst_19159 = inst_19176;var inst_19160 = 0;var state_19195__$1 = (function (){var statearr_19212 = state_19195;(statearr_19212[7] = inst_19160);
(statearr_19212[8] = inst_19159);
(statearr_19212[12] = inst_19175);
return statearr_19212;
})();var statearr_19213_19236 = state_19195__$1;(statearr_19213_19236[2] = null);
(statearr_19213_19236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 12))
{var inst_19159 = (state_19195[8]);var inst_19183 = cljs.core.vec.call(null,inst_19159);var state_19195__$1 = state_19195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19195__$1,15,out,inst_19183);
} else
{if((state_val_19196 === 13))
{var state_19195__$1 = state_19195;var statearr_19214_19237 = state_19195__$1;(statearr_19214_19237[2] = null);
(statearr_19214_19237[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 14))
{var inst_19188 = (state_19195[2]);var inst_19189 = cljs.core.async.close_BANG_.call(null,out);var state_19195__$1 = (function (){var statearr_19215 = state_19195;(statearr_19215[13] = inst_19188);
return statearr_19215;
})();var statearr_19216_19238 = state_19195__$1;(statearr_19216_19238[2] = inst_19189);
(statearr_19216_19238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19196 === 15))
{var inst_19185 = (state_19195[2]);var state_19195__$1 = state_19195;var statearr_19217_19239 = state_19195__$1;(statearr_19217_19239[2] = inst_19185);
(statearr_19217_19239[1] = 14);
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
var state_machine__5792__auto____0 = (function (){var statearr_19221 = (new Array(14));(statearr_19221[0] = state_machine__5792__auto__);
(statearr_19221[1] = 1);
return statearr_19221;
});
var state_machine__5792__auto____1 = (function (state_19195){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_19195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e19222){if((e19222 instanceof Object))
{var ex__5795__auto__ = e19222;var statearr_19223_19240 = state_19195;(statearr_19223_19240[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19241 = state_19195;
state_19195 = G__19241;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_19195){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_19195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_19224 = f__5862__auto__.call(null);(statearr_19224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19225);
return statearr_19224;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___19384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_19354){var state_val_19355 = (state_19354[1]);if((state_val_19355 === 1))
{var inst_19313 = (new Array(0));var inst_19314 = inst_19313;var inst_19315 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_19354__$1 = (function (){var statearr_19356 = state_19354;(statearr_19356[7] = inst_19315);
(statearr_19356[8] = inst_19314);
return statearr_19356;
})();var statearr_19357_19385 = state_19354__$1;(statearr_19357_19385[2] = null);
(statearr_19357_19385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 2))
{var state_19354__$1 = state_19354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19354__$1,4,ch);
} else
{if((state_val_19355 === 3))
{var inst_19352 = (state_19354[2]);var state_19354__$1 = state_19354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19354__$1,inst_19352);
} else
{if((state_val_19355 === 4))
{var inst_19318 = (state_19354[9]);var inst_19318__$1 = (state_19354[2]);var inst_19319 = (inst_19318__$1 == null);var inst_19320 = cljs.core.not.call(null,inst_19319);var state_19354__$1 = (function (){var statearr_19358 = state_19354;(statearr_19358[9] = inst_19318__$1);
return statearr_19358;
})();if(inst_19320)
{var statearr_19359_19386 = state_19354__$1;(statearr_19359_19386[1] = 5);
} else
{var statearr_19360_19387 = state_19354__$1;(statearr_19360_19387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 5))
{var inst_19315 = (state_19354[7]);var inst_19318 = (state_19354[9]);var inst_19322 = (state_19354[10]);var inst_19322__$1 = f.call(null,inst_19318);var inst_19323 = cljs.core._EQ_.call(null,inst_19322__$1,inst_19315);var inst_19324 = cljs.core.keyword_identical_QMARK_.call(null,inst_19315,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_19325 = (inst_19323) || (inst_19324);var state_19354__$1 = (function (){var statearr_19361 = state_19354;(statearr_19361[10] = inst_19322__$1);
return statearr_19361;
})();if(cljs.core.truth_(inst_19325))
{var statearr_19362_19388 = state_19354__$1;(statearr_19362_19388[1] = 8);
} else
{var statearr_19363_19389 = state_19354__$1;(statearr_19363_19389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 6))
{var inst_19314 = (state_19354[8]);var inst_19339 = inst_19314.length;var inst_19340 = (inst_19339 > 0);var state_19354__$1 = state_19354;if(cljs.core.truth_(inst_19340))
{var statearr_19365_19390 = state_19354__$1;(statearr_19365_19390[1] = 12);
} else
{var statearr_19366_19391 = state_19354__$1;(statearr_19366_19391[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 7))
{var inst_19350 = (state_19354[2]);var state_19354__$1 = state_19354;var statearr_19367_19392 = state_19354__$1;(statearr_19367_19392[2] = inst_19350);
(statearr_19367_19392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 8))
{var inst_19314 = (state_19354[8]);var inst_19318 = (state_19354[9]);var inst_19322 = (state_19354[10]);var inst_19327 = inst_19314.push(inst_19318);var tmp19364 = inst_19314;var inst_19314__$1 = tmp19364;var inst_19315 = inst_19322;var state_19354__$1 = (function (){var statearr_19368 = state_19354;(statearr_19368[7] = inst_19315);
(statearr_19368[8] = inst_19314__$1);
(statearr_19368[11] = inst_19327);
return statearr_19368;
})();var statearr_19369_19393 = state_19354__$1;(statearr_19369_19393[2] = null);
(statearr_19369_19393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 9))
{var inst_19314 = (state_19354[8]);var inst_19330 = cljs.core.vec.call(null,inst_19314);var state_19354__$1 = state_19354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19354__$1,11,out,inst_19330);
} else
{if((state_val_19355 === 10))
{var inst_19337 = (state_19354[2]);var state_19354__$1 = state_19354;var statearr_19370_19394 = state_19354__$1;(statearr_19370_19394[2] = inst_19337);
(statearr_19370_19394[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 11))
{var inst_19318 = (state_19354[9]);var inst_19322 = (state_19354[10]);var inst_19332 = (state_19354[2]);var inst_19333 = (new Array(0));var inst_19334 = inst_19333.push(inst_19318);var inst_19314 = inst_19333;var inst_19315 = inst_19322;var state_19354__$1 = (function (){var statearr_19371 = state_19354;(statearr_19371[12] = inst_19332);
(statearr_19371[13] = inst_19334);
(statearr_19371[7] = inst_19315);
(statearr_19371[8] = inst_19314);
return statearr_19371;
})();var statearr_19372_19395 = state_19354__$1;(statearr_19372_19395[2] = null);
(statearr_19372_19395[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 12))
{var inst_19314 = (state_19354[8]);var inst_19342 = cljs.core.vec.call(null,inst_19314);var state_19354__$1 = state_19354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19354__$1,15,out,inst_19342);
} else
{if((state_val_19355 === 13))
{var state_19354__$1 = state_19354;var statearr_19373_19396 = state_19354__$1;(statearr_19373_19396[2] = null);
(statearr_19373_19396[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 14))
{var inst_19347 = (state_19354[2]);var inst_19348 = cljs.core.async.close_BANG_.call(null,out);var state_19354__$1 = (function (){var statearr_19374 = state_19354;(statearr_19374[14] = inst_19347);
return statearr_19374;
})();var statearr_19375_19397 = state_19354__$1;(statearr_19375_19397[2] = inst_19348);
(statearr_19375_19397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19355 === 15))
{var inst_19344 = (state_19354[2]);var state_19354__$1 = state_19354;var statearr_19376_19398 = state_19354__$1;(statearr_19376_19398[2] = inst_19344);
(statearr_19376_19398[1] = 14);
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
var state_machine__5792__auto____0 = (function (){var statearr_19380 = (new Array(15));(statearr_19380[0] = state_machine__5792__auto__);
(statearr_19380[1] = 1);
return statearr_19380;
});
var state_machine__5792__auto____1 = (function (state_19354){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_19354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e19381){if((e19381 instanceof Object))
{var ex__5795__auto__ = e19381;var statearr_19382_19399 = state_19354;(statearr_19382_19399[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19400 = state_19354;
state_19354 = G__19400;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_19354){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_19354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_19383 = f__5862__auto__.call(null);(statearr_19383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___19384);
return statearr_19383;
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

//# sourceMappingURL=async.js.map