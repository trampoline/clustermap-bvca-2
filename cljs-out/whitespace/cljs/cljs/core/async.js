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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34850 = (function (f,fn_handler,meta34851){
this.f = f;
this.fn_handler = fn_handler;
this.meta34851 = meta34851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34850.cljs$lang$type = true;
cljs.core.async.t34850.cljs$lang$ctorStr = "cljs.core.async/t34850";
cljs.core.async.t34850.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34850");
});
cljs.core.async.t34850.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34850.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34850.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34852){var self__ = this;
var _34852__$1 = this;return self__.meta34851;
});
cljs.core.async.t34850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34852,meta34851__$1){var self__ = this;
var _34852__$1 = this;return (new cljs.core.async.t34850(self__.f,self__.fn_handler,meta34851__$1));
});
cljs.core.async.__GT_t34850 = (function __GT_t34850(f__$1,fn_handler__$1,meta34851){return (new cljs.core.async.t34850(f__$1,fn_handler__$1,meta34851));
});
}
return (new cljs.core.async.t34850(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34854 = buff;if(G__34854)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34854.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34854.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34854);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34854);
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
{var val_34855 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34855);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34855);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34856 = n;var x_34857 = 0;while(true){
if((x_34857 < n__4248__auto___34856))
{(a[x_34857] = 0);
{
var G__34858 = (x_34857 + 1);
x_34857 = G__34858;
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
var G__34859 = (i + 1);
i = G__34859;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34863 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34863 = (function (flag,alt_flag,meta34864){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34864 = meta34864;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34863.cljs$lang$type = true;
cljs.core.async.t34863.cljs$lang$ctorStr = "cljs.core.async/t34863";
cljs.core.async.t34863.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34863");
});
cljs.core.async.t34863.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34865){var self__ = this;
var _34865__$1 = this;return self__.meta34864;
});
cljs.core.async.t34863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34865,meta34864__$1){var self__ = this;
var _34865__$1 = this;return (new cljs.core.async.t34863(self__.flag,self__.alt_flag,meta34864__$1));
});
cljs.core.async.__GT_t34863 = (function __GT_t34863(flag__$1,alt_flag__$1,meta34864){return (new cljs.core.async.t34863(flag__$1,alt_flag__$1,meta34864));
});
}
return (new cljs.core.async.t34863(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34869 = (function (cb,flag,alt_handler,meta34870){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34870 = meta34870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34869.cljs$lang$type = true;
cljs.core.async.t34869.cljs$lang$ctorStr = "cljs.core.async/t34869";
cljs.core.async.t34869.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34869");
});
cljs.core.async.t34869.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34871){var self__ = this;
var _34871__$1 = this;return self__.meta34870;
});
cljs.core.async.t34869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34871,meta34870__$1){var self__ = this;
var _34871__$1 = this;return (new cljs.core.async.t34869(self__.cb,self__.flag,self__.alt_handler,meta34870__$1));
});
cljs.core.async.__GT_t34869 = (function __GT_t34869(cb__$1,flag__$1,alt_handler__$1,meta34870){return (new cljs.core.async.t34869(cb__$1,flag__$1,alt_handler__$1,meta34870));
});
}
return (new cljs.core.async.t34869(cb,flag,alt_handler,null));
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
return (function (p1__34872_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34872_SHARP_,port], null));
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
var G__34873 = (i + 1);
i = G__34873;
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
var alts_BANG___delegate = function (ports,p__34874){var map__34876 = p__34874;var map__34876__$1 = ((cljs.core.seq_QMARK_.call(null,map__34876))?cljs.core.apply.call(null,cljs.core.hash_map,map__34876):map__34876);var opts = map__34876__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34874 = null;if (arguments.length > 1) {
  p__34874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34874);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34877){
var ports = cljs.core.first(arglist__34877);
var p__34874 = cljs.core.rest(arglist__34877);
return alts_BANG___delegate(ports,p__34874);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34885 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34885 = (function (ch,f,map_LT_,meta34886){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34886 = meta34886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34885.cljs$lang$type = true;
cljs.core.async.t34885.cljs$lang$ctorStr = "cljs.core.async/t34885";
cljs.core.async.t34885.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34885");
});
cljs.core.async.t34885.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34885.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34888 = (function (fn1,_,meta34886,ch,f,map_LT_,meta34889){
this.fn1 = fn1;
this._ = _;
this.meta34886 = meta34886;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34889 = meta34889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34888.cljs$lang$type = true;
cljs.core.async.t34888.cljs$lang$ctorStr = "cljs.core.async/t34888";
cljs.core.async.t34888.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34888");
});
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34878_SHARP_){return f1.call(null,(((p1__34878_SHARP_ == null))?null:self__.f.call(null,p1__34878_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34890){var self__ = this;
var _34890__$1 = this;return self__.meta34889;
});
cljs.core.async.t34888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34890,meta34889__$1){var self__ = this;
var _34890__$1 = this;return (new cljs.core.async.t34888(self__.fn1,self__._,self__.meta34886,self__.ch,self__.f,self__.map_LT_,meta34889__$1));
});
cljs.core.async.__GT_t34888 = (function __GT_t34888(fn1__$1,___$2,meta34886__$1,ch__$2,f__$2,map_LT___$2,meta34889){return (new cljs.core.async.t34888(fn1__$1,___$2,meta34886__$1,ch__$2,f__$2,map_LT___$2,meta34889));
});
}
return (new cljs.core.async.t34888(fn1,___$1,self__.meta34886,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34885.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34887){var self__ = this;
var _34887__$1 = this;return self__.meta34886;
});
cljs.core.async.t34885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34887,meta34886__$1){var self__ = this;
var _34887__$1 = this;return (new cljs.core.async.t34885(self__.ch,self__.f,self__.map_LT_,meta34886__$1));
});
cljs.core.async.__GT_t34885 = (function __GT_t34885(ch__$1,f__$1,map_LT___$1,meta34886){return (new cljs.core.async.t34885(ch__$1,f__$1,map_LT___$1,meta34886));
});
}
return (new cljs.core.async.t34885(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34894 = (function (ch,f,map_GT_,meta34895){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34895 = meta34895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34894.cljs$lang$type = true;
cljs.core.async.t34894.cljs$lang$ctorStr = "cljs.core.async/t34894";
cljs.core.async.t34894.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34894");
});
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34896){var self__ = this;
var _34896__$1 = this;return self__.meta34895;
});
cljs.core.async.t34894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34896,meta34895__$1){var self__ = this;
var _34896__$1 = this;return (new cljs.core.async.t34894(self__.ch,self__.f,self__.map_GT_,meta34895__$1));
});
cljs.core.async.__GT_t34894 = (function __GT_t34894(ch__$1,f__$1,map_GT___$1,meta34895){return (new cljs.core.async.t34894(ch__$1,f__$1,map_GT___$1,meta34895));
});
}
return (new cljs.core.async.t34894(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34900 = (function (ch,p,filter_GT_,meta34901){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34901 = meta34901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34900.cljs$lang$type = true;
cljs.core.async.t34900.cljs$lang$ctorStr = "cljs.core.async/t34900";
cljs.core.async.t34900.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34900");
});
cljs.core.async.t34900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34900.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34902){var self__ = this;
var _34902__$1 = this;return self__.meta34901;
});
cljs.core.async.t34900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34902,meta34901__$1){var self__ = this;
var _34902__$1 = this;return (new cljs.core.async.t34900(self__.ch,self__.p,self__.filter_GT_,meta34901__$1));
});
cljs.core.async.__GT_t34900 = (function __GT_t34900(ch__$1,p__$1,filter_GT___$1,meta34901){return (new cljs.core.async.t34900(ch__$1,p__$1,filter_GT___$1,meta34901));
});
}
return (new cljs.core.async.t34900(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34964){var state_val_34965 = (state_34964[1]);if((state_val_34965 === 1))
{var state_34964__$1 = state_34964;var statearr_34966_34986 = state_34964__$1;(statearr_34966_34986[2] = null);
(statearr_34966_34986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34965 === 2))
{var state_34964__$1 = state_34964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34964__$1,4,ch);
} else
{if((state_val_34965 === 3))
{var inst_34962 = (state_34964[2]);var state_34964__$1 = state_34964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34964__$1,inst_34962);
} else
{if((state_val_34965 === 4))
{var inst_34946 = (state_34964[7]);var inst_34946__$1 = (state_34964[2]);var inst_34947 = (inst_34946__$1 == null);var state_34964__$1 = (function (){var statearr_34967 = state_34964;(statearr_34967[7] = inst_34946__$1);
return statearr_34967;
})();if(cljs.core.truth_(inst_34947))
{var statearr_34968_34987 = state_34964__$1;(statearr_34968_34987[1] = 5);
} else
{var statearr_34969_34988 = state_34964__$1;(statearr_34969_34988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34965 === 5))
{var inst_34949 = cljs.core.async.close_BANG_.call(null,out);var state_34964__$1 = state_34964;var statearr_34970_34989 = state_34964__$1;(statearr_34970_34989[2] = inst_34949);
(statearr_34970_34989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34965 === 6))
{var inst_34946 = (state_34964[7]);var inst_34951 = p.call(null,inst_34946);var state_34964__$1 = state_34964;if(cljs.core.truth_(inst_34951))
{var statearr_34971_34990 = state_34964__$1;(statearr_34971_34990[1] = 8);
} else
{var statearr_34972_34991 = state_34964__$1;(statearr_34972_34991[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34965 === 7))
{var inst_34960 = (state_34964[2]);var state_34964__$1 = state_34964;var statearr_34973_34992 = state_34964__$1;(statearr_34973_34992[2] = inst_34960);
(statearr_34973_34992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34965 === 8))
{var inst_34946 = (state_34964[7]);var state_34964__$1 = state_34964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34964__$1,11,out,inst_34946);
} else
{if((state_val_34965 === 9))
{var state_34964__$1 = state_34964;var statearr_34974_34993 = state_34964__$1;(statearr_34974_34993[2] = null);
(statearr_34974_34993[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34965 === 10))
{var inst_34957 = (state_34964[2]);var state_34964__$1 = (function (){var statearr_34975 = state_34964;(statearr_34975[8] = inst_34957);
return statearr_34975;
})();var statearr_34976_34994 = state_34964__$1;(statearr_34976_34994[2] = null);
(statearr_34976_34994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34965 === 11))
{var inst_34954 = (state_34964[2]);var state_34964__$1 = state_34964;var statearr_34977_34995 = state_34964__$1;(statearr_34977_34995[2] = inst_34954);
(statearr_34977_34995[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34981 = [null,null,null,null,null,null,null,null,null];(statearr_34981[0] = state_machine__5507__auto__);
(statearr_34981[1] = 1);
return statearr_34981;
});
var state_machine__5507__auto____1 = (function (state_34964){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34964);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34982){if((e34982 instanceof Object))
{var ex__5510__auto__ = e34982;var statearr_34983_34996 = state_34964;(statearr_34983_34996[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34997 = state_34964;
state_34964 = G__34997;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34964){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34984 = f__5522__auto__.call(null);(statearr_34984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34985);
return statearr_34984;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35149){var state_val_35150 = (state_35149[1]);if((state_val_35150 === 1))
{var state_35149__$1 = state_35149;var statearr_35151_35188 = state_35149__$1;(statearr_35151_35188[2] = null);
(statearr_35151_35188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 2))
{var state_35149__$1 = state_35149;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35149__$1,4,in$);
} else
{if((state_val_35150 === 3))
{var inst_35147 = (state_35149[2]);var state_35149__$1 = state_35149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35149__$1,inst_35147);
} else
{if((state_val_35150 === 4))
{var inst_35095 = (state_35149[7]);var inst_35095__$1 = (state_35149[2]);var inst_35096 = (inst_35095__$1 == null);var state_35149__$1 = (function (){var statearr_35152 = state_35149;(statearr_35152[7] = inst_35095__$1);
return statearr_35152;
})();if(cljs.core.truth_(inst_35096))
{var statearr_35153_35189 = state_35149__$1;(statearr_35153_35189[1] = 5);
} else
{var statearr_35154_35190 = state_35149__$1;(statearr_35154_35190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 5))
{var inst_35098 = cljs.core.async.close_BANG_.call(null,out);var state_35149__$1 = state_35149;var statearr_35155_35191 = state_35149__$1;(statearr_35155_35191[2] = inst_35098);
(statearr_35155_35191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 6))
{var inst_35095 = (state_35149[7]);var inst_35100 = f.call(null,inst_35095);var inst_35105 = cljs.core.seq.call(null,inst_35100);var inst_35106 = inst_35105;var inst_35107 = null;var inst_35108 = 0;var inst_35109 = 0;var state_35149__$1 = (function (){var statearr_35156 = state_35149;(statearr_35156[8] = inst_35106);
(statearr_35156[9] = inst_35107);
(statearr_35156[10] = inst_35108);
(statearr_35156[11] = inst_35109);
return statearr_35156;
})();var statearr_35157_35192 = state_35149__$1;(statearr_35157_35192[2] = null);
(statearr_35157_35192[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 7))
{var inst_35145 = (state_35149[2]);var state_35149__$1 = state_35149;var statearr_35158_35193 = state_35149__$1;(statearr_35158_35193[2] = inst_35145);
(statearr_35158_35193[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 8))
{var inst_35108 = (state_35149[10]);var inst_35109 = (state_35149[11]);var inst_35111 = (inst_35109 < inst_35108);var inst_35112 = inst_35111;var state_35149__$1 = state_35149;if(cljs.core.truth_(inst_35112))
{var statearr_35159_35194 = state_35149__$1;(statearr_35159_35194[1] = 10);
} else
{var statearr_35160_35195 = state_35149__$1;(statearr_35160_35195[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 9))
{var inst_35142 = (state_35149[2]);var state_35149__$1 = (function (){var statearr_35161 = state_35149;(statearr_35161[12] = inst_35142);
return statearr_35161;
})();var statearr_35162_35196 = state_35149__$1;(statearr_35162_35196[2] = null);
(statearr_35162_35196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 10))
{var inst_35107 = (state_35149[9]);var inst_35109 = (state_35149[11]);var inst_35114 = cljs.core._nth.call(null,inst_35107,inst_35109);var state_35149__$1 = state_35149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35149__$1,13,out,inst_35114);
} else
{if((state_val_35150 === 11))
{var inst_35120 = (state_35149[13]);var inst_35106 = (state_35149[8]);var inst_35120__$1 = cljs.core.seq.call(null,inst_35106);var state_35149__$1 = (function (){var statearr_35166 = state_35149;(statearr_35166[13] = inst_35120__$1);
return statearr_35166;
})();if(inst_35120__$1)
{var statearr_35167_35197 = state_35149__$1;(statearr_35167_35197[1] = 14);
} else
{var statearr_35168_35198 = state_35149__$1;(statearr_35168_35198[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 12))
{var inst_35140 = (state_35149[2]);var state_35149__$1 = state_35149;var statearr_35169_35199 = state_35149__$1;(statearr_35169_35199[2] = inst_35140);
(statearr_35169_35199[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 13))
{var inst_35106 = (state_35149[8]);var inst_35107 = (state_35149[9]);var inst_35108 = (state_35149[10]);var inst_35109 = (state_35149[11]);var inst_35116 = (state_35149[2]);var inst_35117 = (inst_35109 + 1);var tmp35163 = inst_35106;var tmp35164 = inst_35107;var tmp35165 = inst_35108;var inst_35106__$1 = tmp35163;var inst_35107__$1 = tmp35164;var inst_35108__$1 = tmp35165;var inst_35109__$1 = inst_35117;var state_35149__$1 = (function (){var statearr_35170 = state_35149;(statearr_35170[8] = inst_35106__$1);
(statearr_35170[14] = inst_35116);
(statearr_35170[9] = inst_35107__$1);
(statearr_35170[10] = inst_35108__$1);
(statearr_35170[11] = inst_35109__$1);
return statearr_35170;
})();var statearr_35171_35200 = state_35149__$1;(statearr_35171_35200[2] = null);
(statearr_35171_35200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 14))
{var inst_35120 = (state_35149[13]);var inst_35122 = cljs.core.chunked_seq_QMARK_.call(null,inst_35120);var state_35149__$1 = state_35149;if(inst_35122)
{var statearr_35172_35201 = state_35149__$1;(statearr_35172_35201[1] = 17);
} else
{var statearr_35173_35202 = state_35149__$1;(statearr_35173_35202[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 15))
{var state_35149__$1 = state_35149;var statearr_35174_35203 = state_35149__$1;(statearr_35174_35203[2] = null);
(statearr_35174_35203[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 16))
{var inst_35138 = (state_35149[2]);var state_35149__$1 = state_35149;var statearr_35175_35204 = state_35149__$1;(statearr_35175_35204[2] = inst_35138);
(statearr_35175_35204[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 17))
{var inst_35120 = (state_35149[13]);var inst_35124 = cljs.core.chunk_first.call(null,inst_35120);var inst_35125 = cljs.core.chunk_rest.call(null,inst_35120);var inst_35126 = cljs.core.count.call(null,inst_35124);var inst_35106 = inst_35125;var inst_35107 = inst_35124;var inst_35108 = inst_35126;var inst_35109 = 0;var state_35149__$1 = (function (){var statearr_35176 = state_35149;(statearr_35176[8] = inst_35106);
(statearr_35176[9] = inst_35107);
(statearr_35176[10] = inst_35108);
(statearr_35176[11] = inst_35109);
return statearr_35176;
})();var statearr_35177_35205 = state_35149__$1;(statearr_35177_35205[2] = null);
(statearr_35177_35205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 18))
{var inst_35120 = (state_35149[13]);var inst_35129 = cljs.core.first.call(null,inst_35120);var state_35149__$1 = state_35149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35149__$1,20,out,inst_35129);
} else
{if((state_val_35150 === 19))
{var inst_35135 = (state_35149[2]);var state_35149__$1 = state_35149;var statearr_35178_35206 = state_35149__$1;(statearr_35178_35206[2] = inst_35135);
(statearr_35178_35206[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35150 === 20))
{var inst_35120 = (state_35149[13]);var inst_35131 = (state_35149[2]);var inst_35132 = cljs.core.next.call(null,inst_35120);var inst_35106 = inst_35132;var inst_35107 = null;var inst_35108 = 0;var inst_35109 = 0;var state_35149__$1 = (function (){var statearr_35179 = state_35149;(statearr_35179[15] = inst_35131);
(statearr_35179[8] = inst_35106);
(statearr_35179[9] = inst_35107);
(statearr_35179[10] = inst_35108);
(statearr_35179[11] = inst_35109);
return statearr_35179;
})();var statearr_35180_35207 = state_35149__$1;(statearr_35180_35207[2] = null);
(statearr_35180_35207[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_35184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35184[0] = state_machine__5507__auto__);
(statearr_35184[1] = 1);
return statearr_35184;
});
var state_machine__5507__auto____1 = (function (state_35149){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35149);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35185){if((e35185 instanceof Object))
{var ex__5510__auto__ = e35185;var statearr_35186_35208 = state_35149;(statearr_35186_35208[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35149);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35209 = state_35149;
state_35149 = G__35209;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35149){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35187 = f__5522__auto__.call(null);(statearr_35187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35187;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___35290 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35269){var state_val_35270 = (state_35269[1]);if((state_val_35270 === 1))
{var state_35269__$1 = state_35269;var statearr_35271_35291 = state_35269__$1;(statearr_35271_35291[2] = null);
(statearr_35271_35291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35270 === 2))
{var state_35269__$1 = state_35269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35269__$1,4,from);
} else
{if((state_val_35270 === 3))
{var inst_35267 = (state_35269[2]);var state_35269__$1 = state_35269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35269__$1,inst_35267);
} else
{if((state_val_35270 === 4))
{var inst_35252 = (state_35269[7]);var inst_35252__$1 = (state_35269[2]);var inst_35253 = (inst_35252__$1 == null);var state_35269__$1 = (function (){var statearr_35272 = state_35269;(statearr_35272[7] = inst_35252__$1);
return statearr_35272;
})();if(cljs.core.truth_(inst_35253))
{var statearr_35273_35292 = state_35269__$1;(statearr_35273_35292[1] = 5);
} else
{var statearr_35274_35293 = state_35269__$1;(statearr_35274_35293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35270 === 5))
{var state_35269__$1 = state_35269;if(cljs.core.truth_(close_QMARK_))
{var statearr_35275_35294 = state_35269__$1;(statearr_35275_35294[1] = 8);
} else
{var statearr_35276_35295 = state_35269__$1;(statearr_35276_35295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35270 === 6))
{var inst_35252 = (state_35269[7]);var state_35269__$1 = state_35269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35269__$1,11,to,inst_35252);
} else
{if((state_val_35270 === 7))
{var inst_35265 = (state_35269[2]);var state_35269__$1 = state_35269;var statearr_35277_35296 = state_35269__$1;(statearr_35277_35296[2] = inst_35265);
(statearr_35277_35296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35270 === 8))
{var inst_35256 = cljs.core.async.close_BANG_.call(null,to);var state_35269__$1 = state_35269;var statearr_35278_35297 = state_35269__$1;(statearr_35278_35297[2] = inst_35256);
(statearr_35278_35297[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35270 === 9))
{var state_35269__$1 = state_35269;var statearr_35279_35298 = state_35269__$1;(statearr_35279_35298[2] = null);
(statearr_35279_35298[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35270 === 10))
{var inst_35259 = (state_35269[2]);var state_35269__$1 = state_35269;var statearr_35280_35299 = state_35269__$1;(statearr_35280_35299[2] = inst_35259);
(statearr_35280_35299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35270 === 11))
{var inst_35262 = (state_35269[2]);var state_35269__$1 = (function (){var statearr_35281 = state_35269;(statearr_35281[8] = inst_35262);
return statearr_35281;
})();var statearr_35282_35300 = state_35269__$1;(statearr_35282_35300[2] = null);
(statearr_35282_35300[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35286 = [null,null,null,null,null,null,null,null,null];(statearr_35286[0] = state_machine__5507__auto__);
(statearr_35286[1] = 1);
return statearr_35286;
});
var state_machine__5507__auto____1 = (function (state_35269){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35287){if((e35287 instanceof Object))
{var ex__5510__auto__ = e35287;var statearr_35288_35301 = state_35269;(statearr_35288_35301[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35302 = state_35269;
state_35269 = G__35302;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35269){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35289 = f__5522__auto__.call(null);(statearr_35289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35290);
return statearr_35289;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35367){var state_val_35368 = (state_35367[1]);if((state_val_35368 === 1))
{var state_35367__$1 = state_35367;var statearr_35369_35390 = state_35367__$1;(statearr_35369_35390[2] = null);
(statearr_35369_35390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 2))
{var state_35367__$1 = state_35367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35367__$1,4,ch);
} else
{if((state_val_35368 === 3))
{var inst_35365 = (state_35367[2]);var state_35367__$1 = state_35367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35367__$1,inst_35365);
} else
{if((state_val_35368 === 4))
{var inst_35348 = (state_35367[7]);var inst_35348__$1 = (state_35367[2]);var inst_35349 = (inst_35348__$1 == null);var state_35367__$1 = (function (){var statearr_35370 = state_35367;(statearr_35370[7] = inst_35348__$1);
return statearr_35370;
})();if(cljs.core.truth_(inst_35349))
{var statearr_35371_35391 = state_35367__$1;(statearr_35371_35391[1] = 5);
} else
{var statearr_35372_35392 = state_35367__$1;(statearr_35372_35392[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 5))
{var inst_35351 = cljs.core.async.close_BANG_.call(null,tc);var inst_35352 = cljs.core.async.close_BANG_.call(null,fc);var state_35367__$1 = (function (){var statearr_35373 = state_35367;(statearr_35373[8] = inst_35351);
return statearr_35373;
})();var statearr_35374_35393 = state_35367__$1;(statearr_35374_35393[2] = inst_35352);
(statearr_35374_35393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 6))
{var inst_35348 = (state_35367[7]);var inst_35354 = p.call(null,inst_35348);var state_35367__$1 = state_35367;if(cljs.core.truth_(inst_35354))
{var statearr_35375_35394 = state_35367__$1;(statearr_35375_35394[1] = 9);
} else
{var statearr_35376_35395 = state_35367__$1;(statearr_35376_35395[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 7))
{var inst_35363 = (state_35367[2]);var state_35367__$1 = state_35367;var statearr_35377_35396 = state_35367__$1;(statearr_35377_35396[2] = inst_35363);
(statearr_35377_35396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 8))
{var inst_35360 = (state_35367[2]);var state_35367__$1 = (function (){var statearr_35378 = state_35367;(statearr_35378[9] = inst_35360);
return statearr_35378;
})();var statearr_35379_35397 = state_35367__$1;(statearr_35379_35397[2] = null);
(statearr_35379_35397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 9))
{var state_35367__$1 = state_35367;var statearr_35380_35398 = state_35367__$1;(statearr_35380_35398[2] = tc);
(statearr_35380_35398[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 10))
{var state_35367__$1 = state_35367;var statearr_35381_35399 = state_35367__$1;(statearr_35381_35399[2] = fc);
(statearr_35381_35399[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35368 === 11))
{var inst_35348 = (state_35367[7]);var inst_35358 = (state_35367[2]);var state_35367__$1 = state_35367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35367__$1,8,inst_35358,inst_35348);
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
var state_machine__5507__auto____0 = (function (){var statearr_35385 = [null,null,null,null,null,null,null,null,null,null];(statearr_35385[0] = state_machine__5507__auto__);
(statearr_35385[1] = 1);
return statearr_35385;
});
var state_machine__5507__auto____1 = (function (state_35367){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35386){if((e35386 instanceof Object))
{var ex__5510__auto__ = e35386;var statearr_35387_35400 = state_35367;(statearr_35387_35400[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35401 = state_35367;
state_35367 = G__35401;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35367){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35388 = f__5522__auto__.call(null);(statearr_35388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35389);
return statearr_35388;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35448){var state_val_35449 = (state_35448[1]);if((state_val_35449 === 7))
{var inst_35444 = (state_35448[2]);var state_35448__$1 = state_35448;var statearr_35450_35466 = state_35448__$1;(statearr_35450_35466[2] = inst_35444);
(statearr_35450_35466[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35449 === 6))
{var inst_35437 = (state_35448[7]);var inst_35434 = (state_35448[8]);var inst_35441 = f.call(null,inst_35434,inst_35437);var inst_35434__$1 = inst_35441;var state_35448__$1 = (function (){var statearr_35451 = state_35448;(statearr_35451[8] = inst_35434__$1);
return statearr_35451;
})();var statearr_35452_35467 = state_35448__$1;(statearr_35452_35467[2] = null);
(statearr_35452_35467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35449 === 5))
{var inst_35434 = (state_35448[8]);var state_35448__$1 = state_35448;var statearr_35453_35468 = state_35448__$1;(statearr_35453_35468[2] = inst_35434);
(statearr_35453_35468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35449 === 4))
{var inst_35437 = (state_35448[7]);var inst_35437__$1 = (state_35448[2]);var inst_35438 = (inst_35437__$1 == null);var state_35448__$1 = (function (){var statearr_35454 = state_35448;(statearr_35454[7] = inst_35437__$1);
return statearr_35454;
})();if(cljs.core.truth_(inst_35438))
{var statearr_35455_35469 = state_35448__$1;(statearr_35455_35469[1] = 5);
} else
{var statearr_35456_35470 = state_35448__$1;(statearr_35456_35470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35449 === 3))
{var inst_35446 = (state_35448[2]);var state_35448__$1 = state_35448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35448__$1,inst_35446);
} else
{if((state_val_35449 === 2))
{var state_35448__$1 = state_35448;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35448__$1,4,ch);
} else
{if((state_val_35449 === 1))
{var inst_35434 = init;var state_35448__$1 = (function (){var statearr_35457 = state_35448;(statearr_35457[8] = inst_35434);
return statearr_35457;
})();var statearr_35458_35471 = state_35448__$1;(statearr_35458_35471[2] = null);
(statearr_35458_35471[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35462 = [null,null,null,null,null,null,null,null,null];(statearr_35462[0] = state_machine__5507__auto__);
(statearr_35462[1] = 1);
return statearr_35462;
});
var state_machine__5507__auto____1 = (function (state_35448){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35448);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35463){if((e35463 instanceof Object))
{var ex__5510__auto__ = e35463;var statearr_35464_35472 = state_35448;(statearr_35464_35472[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35473 = state_35448;
state_35448 = G__35473;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35448){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35465 = f__5522__auto__.call(null);(statearr_35465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35465;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35535){var state_val_35536 = (state_35535[1]);if((state_val_35536 === 1))
{var inst_35515 = cljs.core.seq.call(null,coll);var inst_35516 = inst_35515;var state_35535__$1 = (function (){var statearr_35537 = state_35535;(statearr_35537[7] = inst_35516);
return statearr_35537;
})();var statearr_35538_35556 = state_35535__$1;(statearr_35538_35556[2] = null);
(statearr_35538_35556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35536 === 2))
{var inst_35516 = (state_35535[7]);var state_35535__$1 = state_35535;if(cljs.core.truth_(inst_35516))
{var statearr_35539_35557 = state_35535__$1;(statearr_35539_35557[1] = 4);
} else
{var statearr_35540_35558 = state_35535__$1;(statearr_35540_35558[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35536 === 3))
{var inst_35533 = (state_35535[2]);var state_35535__$1 = state_35535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35535__$1,inst_35533);
} else
{if((state_val_35536 === 4))
{var inst_35516 = (state_35535[7]);var inst_35519 = cljs.core.first.call(null,inst_35516);var state_35535__$1 = state_35535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35535__$1,7,ch,inst_35519);
} else
{if((state_val_35536 === 5))
{var state_35535__$1 = state_35535;if(cljs.core.truth_(close_QMARK_))
{var statearr_35541_35559 = state_35535__$1;(statearr_35541_35559[1] = 8);
} else
{var statearr_35542_35560 = state_35535__$1;(statearr_35542_35560[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35536 === 6))
{var inst_35531 = (state_35535[2]);var state_35535__$1 = state_35535;var statearr_35543_35561 = state_35535__$1;(statearr_35543_35561[2] = inst_35531);
(statearr_35543_35561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35536 === 7))
{var inst_35516 = (state_35535[7]);var inst_35521 = (state_35535[2]);var inst_35522 = cljs.core.next.call(null,inst_35516);var inst_35516__$1 = inst_35522;var state_35535__$1 = (function (){var statearr_35544 = state_35535;(statearr_35544[8] = inst_35521);
(statearr_35544[7] = inst_35516__$1);
return statearr_35544;
})();var statearr_35545_35562 = state_35535__$1;(statearr_35545_35562[2] = null);
(statearr_35545_35562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35536 === 8))
{var inst_35526 = cljs.core.async.close_BANG_.call(null,ch);var state_35535__$1 = state_35535;var statearr_35546_35563 = state_35535__$1;(statearr_35546_35563[2] = inst_35526);
(statearr_35546_35563[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35536 === 9))
{var state_35535__$1 = state_35535;var statearr_35547_35564 = state_35535__$1;(statearr_35547_35564[2] = null);
(statearr_35547_35564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35536 === 10))
{var inst_35529 = (state_35535[2]);var state_35535__$1 = state_35535;var statearr_35548_35565 = state_35535__$1;(statearr_35548_35565[2] = inst_35529);
(statearr_35548_35565[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35552 = [null,null,null,null,null,null,null,null,null];(statearr_35552[0] = state_machine__5507__auto__);
(statearr_35552[1] = 1);
return statearr_35552;
});
var state_machine__5507__auto____1 = (function (state_35535){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35553){if((e35553 instanceof Object))
{var ex__5510__auto__ = e35553;var statearr_35554_35566 = state_35535;(statearr_35554_35566[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35567 = state_35535;
state_35535 = G__35567;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35535){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35555 = f__5522__auto__.call(null);(statearr_35555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35555;
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
cljs.core.async.Mux = (function (){var obj35569 = {};return obj35569;
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
cljs.core.async.Mult = (function (){var obj35571 = {};return obj35571;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35795 = (function (cs,ch,mult,meta35796){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35796 = meta35796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35795.cljs$lang$type = true;
cljs.core.async.t35795.cljs$lang$ctorStr = "cljs.core.async/t35795";
cljs.core.async.t35795.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35795");
});})(cs))
;
cljs.core.async.t35795.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35795.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35795.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35795.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35795.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35797){var self__ = this;
var _35797__$1 = this;return self__.meta35796;
});})(cs))
;
cljs.core.async.t35795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35797,meta35796__$1){var self__ = this;
var _35797__$1 = this;return (new cljs.core.async.t35795(self__.cs,self__.ch,self__.mult,meta35796__$1));
});})(cs))
;
cljs.core.async.__GT_t35795 = ((function (cs){
return (function __GT_t35795(cs__$1,ch__$1,mult__$1,meta35796){return (new cljs.core.async.t35795(cs__$1,ch__$1,mult__$1,meta35796));
});})(cs))
;
}
return (new cljs.core.async.t35795(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___36018 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35932){var state_val_35933 = (state_35932[1]);if((state_val_35933 === 32))
{var inst_35800 = (state_35932[7]);var inst_35876 = (state_35932[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35932,31,Object,null,30);var inst_35883 = cljs.core.async.put_BANG_.call(null,inst_35876,inst_35800,done);var state_35932__$1 = state_35932;var statearr_35934_36019 = state_35932__$1;(statearr_35934_36019[2] = inst_35883);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 1))
{var state_35932__$1 = state_35932;var statearr_35935_36020 = state_35932__$1;(statearr_35935_36020[2] = null);
(statearr_35935_36020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 33))
{var inst_35889 = (state_35932[9]);var inst_35891 = cljs.core.chunked_seq_QMARK_.call(null,inst_35889);var state_35932__$1 = state_35932;if(inst_35891)
{var statearr_35936_36021 = state_35932__$1;(statearr_35936_36021[1] = 36);
} else
{var statearr_35937_36022 = state_35932__$1;(statearr_35937_36022[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 2))
{var state_35932__$1 = state_35932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35932__$1,4,ch);
} else
{if((state_val_35933 === 34))
{var state_35932__$1 = state_35932;var statearr_35938_36023 = state_35932__$1;(statearr_35938_36023[2] = null);
(statearr_35938_36023[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 3))
{var inst_35930 = (state_35932[2]);var state_35932__$1 = state_35932;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35932__$1,inst_35930);
} else
{if((state_val_35933 === 35))
{var inst_35914 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35939_36024 = state_35932__$1;(statearr_35939_36024[2] = inst_35914);
(statearr_35939_36024[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 4))
{var inst_35800 = (state_35932[7]);var inst_35800__$1 = (state_35932[2]);var inst_35801 = (inst_35800__$1 == null);var state_35932__$1 = (function (){var statearr_35940 = state_35932;(statearr_35940[7] = inst_35800__$1);
return statearr_35940;
})();if(cljs.core.truth_(inst_35801))
{var statearr_35941_36025 = state_35932__$1;(statearr_35941_36025[1] = 5);
} else
{var statearr_35942_36026 = state_35932__$1;(statearr_35942_36026[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 36))
{var inst_35889 = (state_35932[9]);var inst_35893 = cljs.core.chunk_first.call(null,inst_35889);var inst_35894 = cljs.core.chunk_rest.call(null,inst_35889);var inst_35895 = cljs.core.count.call(null,inst_35893);var inst_35868 = inst_35894;var inst_35869 = inst_35893;var inst_35870 = inst_35895;var inst_35871 = 0;var state_35932__$1 = (function (){var statearr_35943 = state_35932;(statearr_35943[10] = inst_35869);
(statearr_35943[11] = inst_35870);
(statearr_35943[12] = inst_35871);
(statearr_35943[13] = inst_35868);
return statearr_35943;
})();var statearr_35944_36027 = state_35932__$1;(statearr_35944_36027[2] = null);
(statearr_35944_36027[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 5))
{var inst_35807 = cljs.core.deref.call(null,cs);var inst_35808 = cljs.core.seq.call(null,inst_35807);var inst_35809 = inst_35808;var inst_35810 = null;var inst_35811 = 0;var inst_35812 = 0;var state_35932__$1 = (function (){var statearr_35945 = state_35932;(statearr_35945[14] = inst_35810);
(statearr_35945[15] = inst_35811);
(statearr_35945[16] = inst_35812);
(statearr_35945[17] = inst_35809);
return statearr_35945;
})();var statearr_35946_36028 = state_35932__$1;(statearr_35946_36028[2] = null);
(statearr_35946_36028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 37))
{var inst_35889 = (state_35932[9]);var inst_35898 = cljs.core.first.call(null,inst_35889);var state_35932__$1 = (function (){var statearr_35947 = state_35932;(statearr_35947[18] = inst_35898);
return statearr_35947;
})();var statearr_35948_36029 = state_35932__$1;(statearr_35948_36029[2] = null);
(statearr_35948_36029[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 6))
{var inst_35860 = (state_35932[19]);var inst_35859 = cljs.core.deref.call(null,cs);var inst_35860__$1 = cljs.core.keys.call(null,inst_35859);var inst_35861 = cljs.core.count.call(null,inst_35860__$1);var inst_35862 = cljs.core.reset_BANG_.call(null,dctr,inst_35861);var inst_35867 = cljs.core.seq.call(null,inst_35860__$1);var inst_35868 = inst_35867;var inst_35869 = null;var inst_35870 = 0;var inst_35871 = 0;var state_35932__$1 = (function (){var statearr_35949 = state_35932;(statearr_35949[10] = inst_35869);
(statearr_35949[20] = inst_35862);
(statearr_35949[19] = inst_35860__$1);
(statearr_35949[11] = inst_35870);
(statearr_35949[12] = inst_35871);
(statearr_35949[13] = inst_35868);
return statearr_35949;
})();var statearr_35950_36030 = state_35932__$1;(statearr_35950_36030[2] = null);
(statearr_35950_36030[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 38))
{var inst_35911 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35951_36031 = state_35932__$1;(statearr_35951_36031[2] = inst_35911);
(statearr_35951_36031[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 7))
{var inst_35928 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35952_36032 = state_35932__$1;(statearr_35952_36032[2] = inst_35928);
(statearr_35952_36032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 39))
{var inst_35889 = (state_35932[9]);var inst_35907 = (state_35932[2]);var inst_35908 = cljs.core.next.call(null,inst_35889);var inst_35868 = inst_35908;var inst_35869 = null;var inst_35870 = 0;var inst_35871 = 0;var state_35932__$1 = (function (){var statearr_35953 = state_35932;(statearr_35953[10] = inst_35869);
(statearr_35953[21] = inst_35907);
(statearr_35953[11] = inst_35870);
(statearr_35953[12] = inst_35871);
(statearr_35953[13] = inst_35868);
return statearr_35953;
})();var statearr_35954_36033 = state_35932__$1;(statearr_35954_36033[2] = null);
(statearr_35954_36033[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 8))
{var inst_35811 = (state_35932[15]);var inst_35812 = (state_35932[16]);var inst_35814 = (inst_35812 < inst_35811);var inst_35815 = inst_35814;var state_35932__$1 = state_35932;if(cljs.core.truth_(inst_35815))
{var statearr_35955_36034 = state_35932__$1;(statearr_35955_36034[1] = 10);
} else
{var statearr_35956_36035 = state_35932__$1;(statearr_35956_36035[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 40))
{var inst_35898 = (state_35932[18]);var inst_35899 = (state_35932[2]);var inst_35900 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35901 = cljs.core.async.untap_STAR_.call(null,m,inst_35898);var state_35932__$1 = (function (){var statearr_35957 = state_35932;(statearr_35957[22] = inst_35899);
(statearr_35957[23] = inst_35900);
return statearr_35957;
})();var statearr_35958_36036 = state_35932__$1;(statearr_35958_36036[2] = inst_35901);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 9))
{var inst_35857 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35959_36037 = state_35932__$1;(statearr_35959_36037[2] = inst_35857);
(statearr_35959_36037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 41))
{var inst_35898 = (state_35932[18]);var inst_35800 = (state_35932[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35932,40,Object,null,39);var inst_35905 = cljs.core.async.put_BANG_.call(null,inst_35898,inst_35800,done);var state_35932__$1 = state_35932;var statearr_35960_36038 = state_35932__$1;(statearr_35960_36038[2] = inst_35905);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35932__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 10))
{var inst_35810 = (state_35932[14]);var inst_35812 = (state_35932[16]);var inst_35818 = cljs.core._nth.call(null,inst_35810,inst_35812);var inst_35819 = cljs.core.nth.call(null,inst_35818,0,null);var inst_35820 = cljs.core.nth.call(null,inst_35818,1,null);var state_35932__$1 = (function (){var statearr_35961 = state_35932;(statearr_35961[24] = inst_35819);
return statearr_35961;
})();if(cljs.core.truth_(inst_35820))
{var statearr_35962_36039 = state_35932__$1;(statearr_35962_36039[1] = 13);
} else
{var statearr_35963_36040 = state_35932__$1;(statearr_35963_36040[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 42))
{var state_35932__$1 = state_35932;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35932__$1,45,dchan);
} else
{if((state_val_35933 === 11))
{var inst_35829 = (state_35932[25]);var inst_35809 = (state_35932[17]);var inst_35829__$1 = cljs.core.seq.call(null,inst_35809);var state_35932__$1 = (function (){var statearr_35964 = state_35932;(statearr_35964[25] = inst_35829__$1);
return statearr_35964;
})();if(inst_35829__$1)
{var statearr_35965_36041 = state_35932__$1;(statearr_35965_36041[1] = 16);
} else
{var statearr_35966_36042 = state_35932__$1;(statearr_35966_36042[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 43))
{var state_35932__$1 = state_35932;var statearr_35967_36043 = state_35932__$1;(statearr_35967_36043[2] = null);
(statearr_35967_36043[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 12))
{var inst_35855 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35968_36044 = state_35932__$1;(statearr_35968_36044[2] = inst_35855);
(statearr_35968_36044[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 44))
{var inst_35925 = (state_35932[2]);var state_35932__$1 = (function (){var statearr_35969 = state_35932;(statearr_35969[26] = inst_35925);
return statearr_35969;
})();var statearr_35970_36045 = state_35932__$1;(statearr_35970_36045[2] = null);
(statearr_35970_36045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 13))
{var inst_35819 = (state_35932[24]);var inst_35822 = cljs.core.async.close_BANG_.call(null,inst_35819);var state_35932__$1 = state_35932;var statearr_35971_36046 = state_35932__$1;(statearr_35971_36046[2] = inst_35822);
(statearr_35971_36046[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 45))
{var inst_35922 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35975_36047 = state_35932__$1;(statearr_35975_36047[2] = inst_35922);
(statearr_35975_36047[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 14))
{var state_35932__$1 = state_35932;var statearr_35976_36048 = state_35932__$1;(statearr_35976_36048[2] = null);
(statearr_35976_36048[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 15))
{var inst_35810 = (state_35932[14]);var inst_35811 = (state_35932[15]);var inst_35812 = (state_35932[16]);var inst_35809 = (state_35932[17]);var inst_35825 = (state_35932[2]);var inst_35826 = (inst_35812 + 1);var tmp35972 = inst_35810;var tmp35973 = inst_35811;var tmp35974 = inst_35809;var inst_35809__$1 = tmp35974;var inst_35810__$1 = tmp35972;var inst_35811__$1 = tmp35973;var inst_35812__$1 = inst_35826;var state_35932__$1 = (function (){var statearr_35977 = state_35932;(statearr_35977[27] = inst_35825);
(statearr_35977[14] = inst_35810__$1);
(statearr_35977[15] = inst_35811__$1);
(statearr_35977[16] = inst_35812__$1);
(statearr_35977[17] = inst_35809__$1);
return statearr_35977;
})();var statearr_35978_36049 = state_35932__$1;(statearr_35978_36049[2] = null);
(statearr_35978_36049[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 16))
{var inst_35829 = (state_35932[25]);var inst_35831 = cljs.core.chunked_seq_QMARK_.call(null,inst_35829);var state_35932__$1 = state_35932;if(inst_35831)
{var statearr_35979_36050 = state_35932__$1;(statearr_35979_36050[1] = 19);
} else
{var statearr_35980_36051 = state_35932__$1;(statearr_35980_36051[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 17))
{var state_35932__$1 = state_35932;var statearr_35981_36052 = state_35932__$1;(statearr_35981_36052[2] = null);
(statearr_35981_36052[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 18))
{var inst_35853 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35982_36053 = state_35932__$1;(statearr_35982_36053[2] = inst_35853);
(statearr_35982_36053[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 19))
{var inst_35829 = (state_35932[25]);var inst_35833 = cljs.core.chunk_first.call(null,inst_35829);var inst_35834 = cljs.core.chunk_rest.call(null,inst_35829);var inst_35835 = cljs.core.count.call(null,inst_35833);var inst_35809 = inst_35834;var inst_35810 = inst_35833;var inst_35811 = inst_35835;var inst_35812 = 0;var state_35932__$1 = (function (){var statearr_35983 = state_35932;(statearr_35983[14] = inst_35810);
(statearr_35983[15] = inst_35811);
(statearr_35983[16] = inst_35812);
(statearr_35983[17] = inst_35809);
return statearr_35983;
})();var statearr_35984_36054 = state_35932__$1;(statearr_35984_36054[2] = null);
(statearr_35984_36054[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 20))
{var inst_35829 = (state_35932[25]);var inst_35839 = cljs.core.first.call(null,inst_35829);var inst_35840 = cljs.core.nth.call(null,inst_35839,0,null);var inst_35841 = cljs.core.nth.call(null,inst_35839,1,null);var state_35932__$1 = (function (){var statearr_35985 = state_35932;(statearr_35985[28] = inst_35840);
return statearr_35985;
})();if(cljs.core.truth_(inst_35841))
{var statearr_35986_36055 = state_35932__$1;(statearr_35986_36055[1] = 22);
} else
{var statearr_35987_36056 = state_35932__$1;(statearr_35987_36056[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 21))
{var inst_35850 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_35988_36057 = state_35932__$1;(statearr_35988_36057[2] = inst_35850);
(statearr_35988_36057[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 22))
{var inst_35840 = (state_35932[28]);var inst_35843 = cljs.core.async.close_BANG_.call(null,inst_35840);var state_35932__$1 = state_35932;var statearr_35989_36058 = state_35932__$1;(statearr_35989_36058[2] = inst_35843);
(statearr_35989_36058[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 23))
{var state_35932__$1 = state_35932;var statearr_35990_36059 = state_35932__$1;(statearr_35990_36059[2] = null);
(statearr_35990_36059[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 24))
{var inst_35829 = (state_35932[25]);var inst_35846 = (state_35932[2]);var inst_35847 = cljs.core.next.call(null,inst_35829);var inst_35809 = inst_35847;var inst_35810 = null;var inst_35811 = 0;var inst_35812 = 0;var state_35932__$1 = (function (){var statearr_35991 = state_35932;(statearr_35991[14] = inst_35810);
(statearr_35991[15] = inst_35811);
(statearr_35991[16] = inst_35812);
(statearr_35991[29] = inst_35846);
(statearr_35991[17] = inst_35809);
return statearr_35991;
})();var statearr_35992_36060 = state_35932__$1;(statearr_35992_36060[2] = null);
(statearr_35992_36060[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 25))
{var inst_35870 = (state_35932[11]);var inst_35871 = (state_35932[12]);var inst_35873 = (inst_35871 < inst_35870);var inst_35874 = inst_35873;var state_35932__$1 = state_35932;if(cljs.core.truth_(inst_35874))
{var statearr_35993_36061 = state_35932__$1;(statearr_35993_36061[1] = 27);
} else
{var statearr_35994_36062 = state_35932__$1;(statearr_35994_36062[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 26))
{var inst_35860 = (state_35932[19]);var inst_35918 = (state_35932[2]);var inst_35919 = cljs.core.seq.call(null,inst_35860);var state_35932__$1 = (function (){var statearr_35995 = state_35932;(statearr_35995[30] = inst_35918);
return statearr_35995;
})();if(inst_35919)
{var statearr_35996_36063 = state_35932__$1;(statearr_35996_36063[1] = 42);
} else
{var statearr_35997_36064 = state_35932__$1;(statearr_35997_36064[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 27))
{var inst_35869 = (state_35932[10]);var inst_35871 = (state_35932[12]);var inst_35876 = cljs.core._nth.call(null,inst_35869,inst_35871);var state_35932__$1 = (function (){var statearr_35998 = state_35932;(statearr_35998[8] = inst_35876);
return statearr_35998;
})();var statearr_35999_36065 = state_35932__$1;(statearr_35999_36065[2] = null);
(statearr_35999_36065[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 28))
{var inst_35889 = (state_35932[9]);var inst_35868 = (state_35932[13]);var inst_35889__$1 = cljs.core.seq.call(null,inst_35868);var state_35932__$1 = (function (){var statearr_36003 = state_35932;(statearr_36003[9] = inst_35889__$1);
return statearr_36003;
})();if(inst_35889__$1)
{var statearr_36004_36066 = state_35932__$1;(statearr_36004_36066[1] = 33);
} else
{var statearr_36005_36067 = state_35932__$1;(statearr_36005_36067[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 29))
{var inst_35916 = (state_35932[2]);var state_35932__$1 = state_35932;var statearr_36006_36068 = state_35932__$1;(statearr_36006_36068[2] = inst_35916);
(statearr_36006_36068[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 30))
{var inst_35869 = (state_35932[10]);var inst_35870 = (state_35932[11]);var inst_35871 = (state_35932[12]);var inst_35868 = (state_35932[13]);var inst_35885 = (state_35932[2]);var inst_35886 = (inst_35871 + 1);var tmp36000 = inst_35869;var tmp36001 = inst_35870;var tmp36002 = inst_35868;var inst_35868__$1 = tmp36002;var inst_35869__$1 = tmp36000;var inst_35870__$1 = tmp36001;var inst_35871__$1 = inst_35886;var state_35932__$1 = (function (){var statearr_36007 = state_35932;(statearr_36007[10] = inst_35869__$1);
(statearr_36007[11] = inst_35870__$1);
(statearr_36007[12] = inst_35871__$1);
(statearr_36007[31] = inst_35885);
(statearr_36007[13] = inst_35868__$1);
return statearr_36007;
})();var statearr_36008_36069 = state_35932__$1;(statearr_36008_36069[2] = null);
(statearr_36008_36069[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35933 === 31))
{var inst_35876 = (state_35932[8]);var inst_35877 = (state_35932[2]);var inst_35878 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35879 = cljs.core.async.untap_STAR_.call(null,m,inst_35876);var state_35932__$1 = (function (){var statearr_36009 = state_35932;(statearr_36009[32] = inst_35877);
(statearr_36009[33] = inst_35878);
return statearr_36009;
})();var statearr_36010_36070 = state_35932__$1;(statearr_36010_36070[2] = inst_35879);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35932__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36014[0] = state_machine__5507__auto__);
(statearr_36014[1] = 1);
return statearr_36014;
});
var state_machine__5507__auto____1 = (function (state_35932){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35932);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36015){if((e36015 instanceof Object))
{var ex__5510__auto__ = e36015;var statearr_36016_36071 = state_35932;(statearr_36016_36071[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35932);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36072 = state_35932;
state_35932 = G__36072;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35932){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36017 = f__5522__auto__.call(null);(statearr_36017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36018);
return statearr_36017;
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
cljs.core.async.Mix = (function (){var obj36074 = {};return obj36074;
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
;var m = (function (){if(typeof cljs.core.async.t36184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36184 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36185){
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
this.meta36185 = meta36185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36184.cljs$lang$type = true;
cljs.core.async.t36184.cljs$lang$ctorStr = "cljs.core.async/t36184";
cljs.core.async.t36184.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36184");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36184.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36186){var self__ = this;
var _36186__$1 = this;return self__.meta36185;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36186,meta36185__$1){var self__ = this;
var _36186__$1 = this;return (new cljs.core.async.t36184(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36185__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36184 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36184(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36185){return (new cljs.core.async.t36184(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36185));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36184(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___36293 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36251){var state_val_36252 = (state_36251[1]);if((state_val_36252 === 1))
{var inst_36190 = (state_36251[7]);var inst_36190__$1 = calc_state.call(null);var inst_36191 = cljs.core.seq_QMARK_.call(null,inst_36190__$1);var state_36251__$1 = (function (){var statearr_36253 = state_36251;(statearr_36253[7] = inst_36190__$1);
return statearr_36253;
})();if(inst_36191)
{var statearr_36254_36294 = state_36251__$1;(statearr_36254_36294[1] = 2);
} else
{var statearr_36255_36295 = state_36251__$1;(statearr_36255_36295[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 2))
{var inst_36190 = (state_36251[7]);var inst_36193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36190);var state_36251__$1 = state_36251;var statearr_36256_36296 = state_36251__$1;(statearr_36256_36296[2] = inst_36193);
(statearr_36256_36296[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 3))
{var inst_36190 = (state_36251[7]);var state_36251__$1 = state_36251;var statearr_36257_36297 = state_36251__$1;(statearr_36257_36297[2] = inst_36190);
(statearr_36257_36297[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 4))
{var inst_36190 = (state_36251[7]);var inst_36196 = (state_36251[2]);var inst_36197 = cljs.core.get.call(null,inst_36196,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36198 = cljs.core.get.call(null,inst_36196,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36199 = cljs.core.get.call(null,inst_36196,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36200 = inst_36190;var state_36251__$1 = (function (){var statearr_36258 = state_36251;(statearr_36258[8] = inst_36198);
(statearr_36258[9] = inst_36199);
(statearr_36258[10] = inst_36197);
(statearr_36258[11] = inst_36200);
return statearr_36258;
})();var statearr_36259_36298 = state_36251__$1;(statearr_36259_36298[2] = null);
(statearr_36259_36298[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 5))
{var inst_36200 = (state_36251[11]);var inst_36203 = cljs.core.seq_QMARK_.call(null,inst_36200);var state_36251__$1 = state_36251;if(inst_36203)
{var statearr_36260_36299 = state_36251__$1;(statearr_36260_36299[1] = 7);
} else
{var statearr_36261_36300 = state_36251__$1;(statearr_36261_36300[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 6))
{var inst_36249 = (state_36251[2]);var state_36251__$1 = state_36251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36251__$1,inst_36249);
} else
{if((state_val_36252 === 7))
{var inst_36200 = (state_36251[11]);var inst_36205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36200);var state_36251__$1 = state_36251;var statearr_36262_36301 = state_36251__$1;(statearr_36262_36301[2] = inst_36205);
(statearr_36262_36301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 8))
{var inst_36200 = (state_36251[11]);var state_36251__$1 = state_36251;var statearr_36263_36302 = state_36251__$1;(statearr_36263_36302[2] = inst_36200);
(statearr_36263_36302[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 9))
{var inst_36208 = (state_36251[12]);var inst_36208__$1 = (state_36251[2]);var inst_36209 = cljs.core.get.call(null,inst_36208__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36210 = cljs.core.get.call(null,inst_36208__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36211 = cljs.core.get.call(null,inst_36208__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36251__$1 = (function (){var statearr_36264 = state_36251;(statearr_36264[12] = inst_36208__$1);
(statearr_36264[13] = inst_36211);
(statearr_36264[14] = inst_36210);
return statearr_36264;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36251__$1,10,inst_36209);
} else
{if((state_val_36252 === 10))
{var inst_36216 = (state_36251[15]);var inst_36215 = (state_36251[16]);var inst_36214 = (state_36251[2]);var inst_36215__$1 = cljs.core.nth.call(null,inst_36214,0,null);var inst_36216__$1 = cljs.core.nth.call(null,inst_36214,1,null);var inst_36217 = (inst_36215__$1 == null);var inst_36218 = cljs.core._EQ_.call(null,inst_36216__$1,change);var inst_36219 = (inst_36217) || (inst_36218);var state_36251__$1 = (function (){var statearr_36265 = state_36251;(statearr_36265[15] = inst_36216__$1);
(statearr_36265[16] = inst_36215__$1);
return statearr_36265;
})();if(cljs.core.truth_(inst_36219))
{var statearr_36266_36303 = state_36251__$1;(statearr_36266_36303[1] = 11);
} else
{var statearr_36267_36304 = state_36251__$1;(statearr_36267_36304[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 11))
{var inst_36215 = (state_36251[16]);var inst_36221 = (inst_36215 == null);var state_36251__$1 = state_36251;if(cljs.core.truth_(inst_36221))
{var statearr_36268_36305 = state_36251__$1;(statearr_36268_36305[1] = 14);
} else
{var statearr_36269_36306 = state_36251__$1;(statearr_36269_36306[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 12))
{var inst_36230 = (state_36251[17]);var inst_36216 = (state_36251[15]);var inst_36211 = (state_36251[13]);var inst_36230__$1 = inst_36211.call(null,inst_36216);var state_36251__$1 = (function (){var statearr_36270 = state_36251;(statearr_36270[17] = inst_36230__$1);
return statearr_36270;
})();if(cljs.core.truth_(inst_36230__$1))
{var statearr_36271_36307 = state_36251__$1;(statearr_36271_36307[1] = 17);
} else
{var statearr_36272_36308 = state_36251__$1;(statearr_36272_36308[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 13))
{var inst_36247 = (state_36251[2]);var state_36251__$1 = state_36251;var statearr_36273_36309 = state_36251__$1;(statearr_36273_36309[2] = inst_36247);
(statearr_36273_36309[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 14))
{var inst_36216 = (state_36251[15]);var inst_36223 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36216);var state_36251__$1 = state_36251;var statearr_36274_36310 = state_36251__$1;(statearr_36274_36310[2] = inst_36223);
(statearr_36274_36310[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 15))
{var state_36251__$1 = state_36251;var statearr_36275_36311 = state_36251__$1;(statearr_36275_36311[2] = null);
(statearr_36275_36311[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 16))
{var inst_36226 = (state_36251[2]);var inst_36227 = calc_state.call(null);var inst_36200 = inst_36227;var state_36251__$1 = (function (){var statearr_36276 = state_36251;(statearr_36276[18] = inst_36226);
(statearr_36276[11] = inst_36200);
return statearr_36276;
})();var statearr_36277_36312 = state_36251__$1;(statearr_36277_36312[2] = null);
(statearr_36277_36312[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 17))
{var inst_36230 = (state_36251[17]);var state_36251__$1 = state_36251;var statearr_36278_36313 = state_36251__$1;(statearr_36278_36313[2] = inst_36230);
(statearr_36278_36313[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 18))
{var inst_36216 = (state_36251[15]);var inst_36211 = (state_36251[13]);var inst_36210 = (state_36251[14]);var inst_36233 = cljs.core.empty_QMARK_.call(null,inst_36211);var inst_36234 = inst_36210.call(null,inst_36216);var inst_36235 = cljs.core.not.call(null,inst_36234);var inst_36236 = (inst_36233) && (inst_36235);var state_36251__$1 = state_36251;var statearr_36279_36314 = state_36251__$1;(statearr_36279_36314[2] = inst_36236);
(statearr_36279_36314[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 19))
{var inst_36238 = (state_36251[2]);var state_36251__$1 = state_36251;if(cljs.core.truth_(inst_36238))
{var statearr_36280_36315 = state_36251__$1;(statearr_36280_36315[1] = 20);
} else
{var statearr_36281_36316 = state_36251__$1;(statearr_36281_36316[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 20))
{var inst_36215 = (state_36251[16]);var state_36251__$1 = state_36251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36251__$1,23,out,inst_36215);
} else
{if((state_val_36252 === 21))
{var state_36251__$1 = state_36251;var statearr_36282_36317 = state_36251__$1;(statearr_36282_36317[2] = null);
(statearr_36282_36317[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 22))
{var inst_36208 = (state_36251[12]);var inst_36244 = (state_36251[2]);var inst_36200 = inst_36208;var state_36251__$1 = (function (){var statearr_36283 = state_36251;(statearr_36283[19] = inst_36244);
(statearr_36283[11] = inst_36200);
return statearr_36283;
})();var statearr_36284_36318 = state_36251__$1;(statearr_36284_36318[2] = null);
(statearr_36284_36318[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36252 === 23))
{var inst_36241 = (state_36251[2]);var state_36251__$1 = state_36251;var statearr_36285_36319 = state_36251__$1;(statearr_36285_36319[2] = inst_36241);
(statearr_36285_36319[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_36289 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36289[0] = state_machine__5507__auto__);
(statearr_36289[1] = 1);
return statearr_36289;
});
var state_machine__5507__auto____1 = (function (state_36251){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36290){if((e36290 instanceof Object))
{var ex__5510__auto__ = e36290;var statearr_36291_36320 = state_36251;(statearr_36291_36320[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36321 = state_36251;
state_36251 = G__36321;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36251){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36292 = f__5522__auto__.call(null);(statearr_36292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36293);
return statearr_36292;
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
cljs.core.async.Pub = (function (){var obj36323 = {};return obj36323;
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
return (function (p1__36324_SHARP_){if(cljs.core.truth_(p1__36324_SHARP_.call(null,topic)))
{return p1__36324_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36324_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36449 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36449 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36450){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36450 = meta36450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36449.cljs$lang$type = true;
cljs.core.async.t36449.cljs$lang$ctorStr = "cljs.core.async/t36449";
cljs.core.async.t36449.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36449");
});})(mults,ensure_mult))
;
cljs.core.async.t36449.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36449.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36449.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36449.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36449.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36451){var self__ = this;
var _36451__$1 = this;return self__.meta36450;
});})(mults,ensure_mult))
;
cljs.core.async.t36449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36451,meta36450__$1){var self__ = this;
var _36451__$1 = this;return (new cljs.core.async.t36449(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36450__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36449 = ((function (mults,ensure_mult){
return (function __GT_t36449(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36450){return (new cljs.core.async.t36449(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36450));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36449(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36525){var state_val_36526 = (state_36525[1]);if((state_val_36526 === 1))
{var state_36525__$1 = state_36525;var statearr_36527_36574 = state_36525__$1;(statearr_36527_36574[2] = null);
(statearr_36527_36574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 2))
{var state_36525__$1 = state_36525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36525__$1,4,ch);
} else
{if((state_val_36526 === 3))
{var inst_36523 = (state_36525[2]);var state_36525__$1 = state_36525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36525__$1,inst_36523);
} else
{if((state_val_36526 === 4))
{var inst_36454 = (state_36525[7]);var inst_36454__$1 = (state_36525[2]);var inst_36455 = (inst_36454__$1 == null);var state_36525__$1 = (function (){var statearr_36528 = state_36525;(statearr_36528[7] = inst_36454__$1);
return statearr_36528;
})();if(cljs.core.truth_(inst_36455))
{var statearr_36529_36575 = state_36525__$1;(statearr_36529_36575[1] = 5);
} else
{var statearr_36530_36576 = state_36525__$1;(statearr_36530_36576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 5))
{var inst_36461 = cljs.core.deref.call(null,mults);var inst_36462 = cljs.core.vals.call(null,inst_36461);var inst_36463 = cljs.core.seq.call(null,inst_36462);var inst_36464 = inst_36463;var inst_36465 = null;var inst_36466 = 0;var inst_36467 = 0;var state_36525__$1 = (function (){var statearr_36531 = state_36525;(statearr_36531[8] = inst_36464);
(statearr_36531[9] = inst_36465);
(statearr_36531[10] = inst_36467);
(statearr_36531[11] = inst_36466);
return statearr_36531;
})();var statearr_36532_36577 = state_36525__$1;(statearr_36532_36577[2] = null);
(statearr_36532_36577[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 6))
{var inst_36504 = (state_36525[12]);var inst_36502 = (state_36525[13]);var inst_36454 = (state_36525[7]);var inst_36502__$1 = topic_fn.call(null,inst_36454);var inst_36503 = cljs.core.deref.call(null,mults);var inst_36504__$1 = cljs.core.get.call(null,inst_36503,inst_36502__$1);var state_36525__$1 = (function (){var statearr_36533 = state_36525;(statearr_36533[12] = inst_36504__$1);
(statearr_36533[13] = inst_36502__$1);
return statearr_36533;
})();if(cljs.core.truth_(inst_36504__$1))
{var statearr_36534_36578 = state_36525__$1;(statearr_36534_36578[1] = 19);
} else
{var statearr_36535_36579 = state_36525__$1;(statearr_36535_36579[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 7))
{var inst_36521 = (state_36525[2]);var state_36525__$1 = state_36525;var statearr_36536_36580 = state_36525__$1;(statearr_36536_36580[2] = inst_36521);
(statearr_36536_36580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 8))
{var inst_36467 = (state_36525[10]);var inst_36466 = (state_36525[11]);var inst_36469 = (inst_36467 < inst_36466);var inst_36470 = inst_36469;var state_36525__$1 = state_36525;if(cljs.core.truth_(inst_36470))
{var statearr_36540_36581 = state_36525__$1;(statearr_36540_36581[1] = 10);
} else
{var statearr_36541_36582 = state_36525__$1;(statearr_36541_36582[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 9))
{var inst_36500 = (state_36525[2]);var state_36525__$1 = state_36525;var statearr_36542_36583 = state_36525__$1;(statearr_36542_36583[2] = inst_36500);
(statearr_36542_36583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 10))
{var inst_36464 = (state_36525[8]);var inst_36465 = (state_36525[9]);var inst_36467 = (state_36525[10]);var inst_36466 = (state_36525[11]);var inst_36472 = cljs.core._nth.call(null,inst_36465,inst_36467);var inst_36473 = cljs.core.async.muxch_STAR_.call(null,inst_36472);var inst_36474 = cljs.core.async.close_BANG_.call(null,inst_36473);var inst_36475 = (inst_36467 + 1);var tmp36537 = inst_36464;var tmp36538 = inst_36465;var tmp36539 = inst_36466;var inst_36464__$1 = tmp36537;var inst_36465__$1 = tmp36538;var inst_36466__$1 = tmp36539;var inst_36467__$1 = inst_36475;var state_36525__$1 = (function (){var statearr_36543 = state_36525;(statearr_36543[8] = inst_36464__$1);
(statearr_36543[9] = inst_36465__$1);
(statearr_36543[14] = inst_36474);
(statearr_36543[10] = inst_36467__$1);
(statearr_36543[11] = inst_36466__$1);
return statearr_36543;
})();var statearr_36544_36584 = state_36525__$1;(statearr_36544_36584[2] = null);
(statearr_36544_36584[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 11))
{var inst_36464 = (state_36525[8]);var inst_36478 = (state_36525[15]);var inst_36478__$1 = cljs.core.seq.call(null,inst_36464);var state_36525__$1 = (function (){var statearr_36545 = state_36525;(statearr_36545[15] = inst_36478__$1);
return statearr_36545;
})();if(inst_36478__$1)
{var statearr_36546_36585 = state_36525__$1;(statearr_36546_36585[1] = 13);
} else
{var statearr_36547_36586 = state_36525__$1;(statearr_36547_36586[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 12))
{var inst_36498 = (state_36525[2]);var state_36525__$1 = state_36525;var statearr_36548_36587 = state_36525__$1;(statearr_36548_36587[2] = inst_36498);
(statearr_36548_36587[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 13))
{var inst_36478 = (state_36525[15]);var inst_36480 = cljs.core.chunked_seq_QMARK_.call(null,inst_36478);var state_36525__$1 = state_36525;if(inst_36480)
{var statearr_36549_36588 = state_36525__$1;(statearr_36549_36588[1] = 16);
} else
{var statearr_36550_36589 = state_36525__$1;(statearr_36550_36589[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 14))
{var state_36525__$1 = state_36525;var statearr_36551_36590 = state_36525__$1;(statearr_36551_36590[2] = null);
(statearr_36551_36590[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 15))
{var inst_36496 = (state_36525[2]);var state_36525__$1 = state_36525;var statearr_36552_36591 = state_36525__$1;(statearr_36552_36591[2] = inst_36496);
(statearr_36552_36591[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 16))
{var inst_36478 = (state_36525[15]);var inst_36482 = cljs.core.chunk_first.call(null,inst_36478);var inst_36483 = cljs.core.chunk_rest.call(null,inst_36478);var inst_36484 = cljs.core.count.call(null,inst_36482);var inst_36464 = inst_36483;var inst_36465 = inst_36482;var inst_36466 = inst_36484;var inst_36467 = 0;var state_36525__$1 = (function (){var statearr_36553 = state_36525;(statearr_36553[8] = inst_36464);
(statearr_36553[9] = inst_36465);
(statearr_36553[10] = inst_36467);
(statearr_36553[11] = inst_36466);
return statearr_36553;
})();var statearr_36554_36592 = state_36525__$1;(statearr_36554_36592[2] = null);
(statearr_36554_36592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 17))
{var inst_36478 = (state_36525[15]);var inst_36487 = cljs.core.first.call(null,inst_36478);var inst_36488 = cljs.core.async.muxch_STAR_.call(null,inst_36487);var inst_36489 = cljs.core.async.close_BANG_.call(null,inst_36488);var inst_36490 = cljs.core.next.call(null,inst_36478);var inst_36464 = inst_36490;var inst_36465 = null;var inst_36466 = 0;var inst_36467 = 0;var state_36525__$1 = (function (){var statearr_36555 = state_36525;(statearr_36555[8] = inst_36464);
(statearr_36555[9] = inst_36465);
(statearr_36555[10] = inst_36467);
(statearr_36555[11] = inst_36466);
(statearr_36555[16] = inst_36489);
return statearr_36555;
})();var statearr_36556_36593 = state_36525__$1;(statearr_36556_36593[2] = null);
(statearr_36556_36593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 18))
{var inst_36493 = (state_36525[2]);var state_36525__$1 = state_36525;var statearr_36557_36594 = state_36525__$1;(statearr_36557_36594[2] = inst_36493);
(statearr_36557_36594[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 19))
{var state_36525__$1 = state_36525;var statearr_36558_36595 = state_36525__$1;(statearr_36558_36595[2] = null);
(statearr_36558_36595[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 20))
{var state_36525__$1 = state_36525;var statearr_36559_36596 = state_36525__$1;(statearr_36559_36596[2] = null);
(statearr_36559_36596[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 21))
{var inst_36518 = (state_36525[2]);var state_36525__$1 = (function (){var statearr_36560 = state_36525;(statearr_36560[17] = inst_36518);
return statearr_36560;
})();var statearr_36561_36597 = state_36525__$1;(statearr_36561_36597[2] = null);
(statearr_36561_36597[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 22))
{var inst_36515 = (state_36525[2]);var state_36525__$1 = state_36525;var statearr_36562_36598 = state_36525__$1;(statearr_36562_36598[2] = inst_36515);
(statearr_36562_36598[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 23))
{var inst_36502 = (state_36525[13]);var inst_36506 = (state_36525[2]);var inst_36507 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36502);var state_36525__$1 = (function (){var statearr_36563 = state_36525;(statearr_36563[18] = inst_36506);
return statearr_36563;
})();var statearr_36564_36599 = state_36525__$1;(statearr_36564_36599[2] = inst_36507);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36525__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36526 === 24))
{var inst_36504 = (state_36525[12]);var inst_36454 = (state_36525[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36525,23,Object,null,22);var inst_36511 = cljs.core.async.muxch_STAR_.call(null,inst_36504);var state_36525__$1 = state_36525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36525__$1,25,inst_36511,inst_36454);
} else
{if((state_val_36526 === 25))
{var inst_36513 = (state_36525[2]);var state_36525__$1 = state_36525;var statearr_36565_36600 = state_36525__$1;(statearr_36565_36600[2] = inst_36513);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36525__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36569[0] = state_machine__5507__auto__);
(statearr_36569[1] = 1);
return statearr_36569;
});
var state_machine__5507__auto____1 = (function (state_36525){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36570){if((e36570 instanceof Object))
{var ex__5510__auto__ = e36570;var statearr_36571_36601 = state_36525;(statearr_36571_36601[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36570;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36602 = state_36525;
state_36525 = G__36602;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36525){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36572 = f__5522__auto__.call(null);(statearr_36572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36573);
return statearr_36572;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36739 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36709){var state_val_36710 = (state_36709[1]);if((state_val_36710 === 1))
{var state_36709__$1 = state_36709;var statearr_36711_36740 = state_36709__$1;(statearr_36711_36740[2] = null);
(statearr_36711_36740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 2))
{var inst_36672 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36673 = 0;var state_36709__$1 = (function (){var statearr_36712 = state_36709;(statearr_36712[7] = inst_36673);
(statearr_36712[8] = inst_36672);
return statearr_36712;
})();var statearr_36713_36741 = state_36709__$1;(statearr_36713_36741[2] = null);
(statearr_36713_36741[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 3))
{var inst_36707 = (state_36709[2]);var state_36709__$1 = state_36709;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36709__$1,inst_36707);
} else
{if((state_val_36710 === 4))
{var inst_36673 = (state_36709[7]);var inst_36675 = (inst_36673 < cnt);var state_36709__$1 = state_36709;if(cljs.core.truth_(inst_36675))
{var statearr_36714_36742 = state_36709__$1;(statearr_36714_36742[1] = 6);
} else
{var statearr_36715_36743 = state_36709__$1;(statearr_36715_36743[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 5))
{var inst_36693 = (state_36709[2]);var state_36709__$1 = (function (){var statearr_36716 = state_36709;(statearr_36716[9] = inst_36693);
return statearr_36716;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36709__$1,12,dchan);
} else
{if((state_val_36710 === 6))
{var state_36709__$1 = state_36709;var statearr_36717_36744 = state_36709__$1;(statearr_36717_36744[2] = null);
(statearr_36717_36744[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 7))
{var state_36709__$1 = state_36709;var statearr_36718_36745 = state_36709__$1;(statearr_36718_36745[2] = null);
(statearr_36718_36745[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 8))
{var inst_36691 = (state_36709[2]);var state_36709__$1 = state_36709;var statearr_36719_36746 = state_36709__$1;(statearr_36719_36746[2] = inst_36691);
(statearr_36719_36746[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 9))
{var inst_36673 = (state_36709[7]);var inst_36686 = (state_36709[2]);var inst_36687 = (inst_36673 + 1);var inst_36673__$1 = inst_36687;var state_36709__$1 = (function (){var statearr_36720 = state_36709;(statearr_36720[7] = inst_36673__$1);
(statearr_36720[10] = inst_36686);
return statearr_36720;
})();var statearr_36721_36747 = state_36709__$1;(statearr_36721_36747[2] = null);
(statearr_36721_36747[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 10))
{var inst_36677 = (state_36709[2]);var inst_36678 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36709__$1 = (function (){var statearr_36722 = state_36709;(statearr_36722[11] = inst_36677);
return statearr_36722;
})();var statearr_36723_36748 = state_36709__$1;(statearr_36723_36748[2] = inst_36678);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 11))
{var inst_36673 = (state_36709[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36709,10,Object,null,9);var inst_36682 = chs__$1.call(null,inst_36673);var inst_36683 = done.call(null,inst_36673);var inst_36684 = cljs.core.async.take_BANG_.call(null,inst_36682,inst_36683);var state_36709__$1 = state_36709;var statearr_36724_36749 = state_36709__$1;(statearr_36724_36749[2] = inst_36684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36709__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 12))
{var inst_36695 = (state_36709[12]);var inst_36695__$1 = (state_36709[2]);var inst_36696 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36695__$1);var state_36709__$1 = (function (){var statearr_36725 = state_36709;(statearr_36725[12] = inst_36695__$1);
return statearr_36725;
})();if(cljs.core.truth_(inst_36696))
{var statearr_36726_36750 = state_36709__$1;(statearr_36726_36750[1] = 13);
} else
{var statearr_36727_36751 = state_36709__$1;(statearr_36727_36751[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 13))
{var inst_36698 = cljs.core.async.close_BANG_.call(null,out);var state_36709__$1 = state_36709;var statearr_36728_36752 = state_36709__$1;(statearr_36728_36752[2] = inst_36698);
(statearr_36728_36752[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 14))
{var inst_36695 = (state_36709[12]);var inst_36700 = cljs.core.apply.call(null,f,inst_36695);var state_36709__$1 = state_36709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36709__$1,16,out,inst_36700);
} else
{if((state_val_36710 === 15))
{var inst_36705 = (state_36709[2]);var state_36709__$1 = state_36709;var statearr_36729_36753 = state_36709__$1;(statearr_36729_36753[2] = inst_36705);
(statearr_36729_36753[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36710 === 16))
{var inst_36702 = (state_36709[2]);var state_36709__$1 = (function (){var statearr_36730 = state_36709;(statearr_36730[13] = inst_36702);
return statearr_36730;
})();var statearr_36731_36754 = state_36709__$1;(statearr_36731_36754[2] = null);
(statearr_36731_36754[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36735[0] = state_machine__5507__auto__);
(statearr_36735[1] = 1);
return statearr_36735;
});
var state_machine__5507__auto____1 = (function (state_36709){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36709);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36736){if((e36736 instanceof Object))
{var ex__5510__auto__ = e36736;var statearr_36737_36755 = state_36709;(statearr_36737_36755[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36756 = state_36709;
state_36709 = G__36756;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36709){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36738 = f__5522__auto__.call(null);(statearr_36738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36739);
return statearr_36738;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36840){var state_val_36841 = (state_36840[1]);if((state_val_36841 === 1))
{var inst_36811 = cljs.core.vec.call(null,chs);var inst_36812 = inst_36811;var state_36840__$1 = (function (){var statearr_36842 = state_36840;(statearr_36842[7] = inst_36812);
return statearr_36842;
})();var statearr_36843_36865 = state_36840__$1;(statearr_36843_36865[2] = null);
(statearr_36843_36865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36841 === 2))
{var inst_36812 = (state_36840[7]);var inst_36814 = cljs.core.count.call(null,inst_36812);var inst_36815 = (inst_36814 > 0);var state_36840__$1 = state_36840;if(cljs.core.truth_(inst_36815))
{var statearr_36844_36866 = state_36840__$1;(statearr_36844_36866[1] = 4);
} else
{var statearr_36845_36867 = state_36840__$1;(statearr_36845_36867[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36841 === 3))
{var inst_36838 = (state_36840[2]);var state_36840__$1 = state_36840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36840__$1,inst_36838);
} else
{if((state_val_36841 === 4))
{var inst_36812 = (state_36840[7]);var state_36840__$1 = state_36840;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36840__$1,7,inst_36812);
} else
{if((state_val_36841 === 5))
{var inst_36834 = cljs.core.async.close_BANG_.call(null,out);var state_36840__$1 = state_36840;var statearr_36846_36868 = state_36840__$1;(statearr_36846_36868[2] = inst_36834);
(statearr_36846_36868[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36841 === 6))
{var inst_36836 = (state_36840[2]);var state_36840__$1 = state_36840;var statearr_36847_36869 = state_36840__$1;(statearr_36847_36869[2] = inst_36836);
(statearr_36847_36869[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36841 === 7))
{var inst_36820 = (state_36840[8]);var inst_36819 = (state_36840[9]);var inst_36819__$1 = (state_36840[2]);var inst_36820__$1 = cljs.core.nth.call(null,inst_36819__$1,0,null);var inst_36821 = cljs.core.nth.call(null,inst_36819__$1,1,null);var inst_36822 = (inst_36820__$1 == null);var state_36840__$1 = (function (){var statearr_36848 = state_36840;(statearr_36848[10] = inst_36821);
(statearr_36848[8] = inst_36820__$1);
(statearr_36848[9] = inst_36819__$1);
return statearr_36848;
})();if(cljs.core.truth_(inst_36822))
{var statearr_36849_36870 = state_36840__$1;(statearr_36849_36870[1] = 8);
} else
{var statearr_36850_36871 = state_36840__$1;(statearr_36850_36871[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36841 === 8))
{var inst_36821 = (state_36840[10]);var inst_36812 = (state_36840[7]);var inst_36820 = (state_36840[8]);var inst_36819 = (state_36840[9]);var inst_36824 = (function (){var c = inst_36821;var v = inst_36820;var vec__36817 = inst_36819;var cs = inst_36812;return ((function (c,v,vec__36817,cs,inst_36821,inst_36812,inst_36820,inst_36819,state_val_36841){
return (function (p1__36757_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36757_SHARP_);
});
;})(c,v,vec__36817,cs,inst_36821,inst_36812,inst_36820,inst_36819,state_val_36841))
})();var inst_36825 = cljs.core.filterv.call(null,inst_36824,inst_36812);var inst_36812__$1 = inst_36825;var state_36840__$1 = (function (){var statearr_36851 = state_36840;(statearr_36851[7] = inst_36812__$1);
return statearr_36851;
})();var statearr_36852_36872 = state_36840__$1;(statearr_36852_36872[2] = null);
(statearr_36852_36872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36841 === 9))
{var inst_36820 = (state_36840[8]);var state_36840__$1 = state_36840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36840__$1,11,out,inst_36820);
} else
{if((state_val_36841 === 10))
{var inst_36832 = (state_36840[2]);var state_36840__$1 = state_36840;var statearr_36854_36873 = state_36840__$1;(statearr_36854_36873[2] = inst_36832);
(statearr_36854_36873[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36841 === 11))
{var inst_36812 = (state_36840[7]);var inst_36829 = (state_36840[2]);var tmp36853 = inst_36812;var inst_36812__$1 = tmp36853;var state_36840__$1 = (function (){var statearr_36855 = state_36840;(statearr_36855[7] = inst_36812__$1);
(statearr_36855[11] = inst_36829);
return statearr_36855;
})();var statearr_36856_36874 = state_36840__$1;(statearr_36856_36874[2] = null);
(statearr_36856_36874[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36860 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36860[0] = state_machine__5507__auto__);
(statearr_36860[1] = 1);
return statearr_36860;
});
var state_machine__5507__auto____1 = (function (state_36840){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36861){if((e36861 instanceof Object))
{var ex__5510__auto__ = e36861;var statearr_36862_36875 = state_36840;(statearr_36862_36875[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36876 = state_36840;
state_36840 = G__36876;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36840){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36863 = f__5522__auto__.call(null);(statearr_36863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36864);
return statearr_36863;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36969 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36946){var state_val_36947 = (state_36946[1]);if((state_val_36947 === 1))
{var inst_36923 = 0;var state_36946__$1 = (function (){var statearr_36948 = state_36946;(statearr_36948[7] = inst_36923);
return statearr_36948;
})();var statearr_36949_36970 = state_36946__$1;(statearr_36949_36970[2] = null);
(statearr_36949_36970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36947 === 2))
{var inst_36923 = (state_36946[7]);var inst_36925 = (inst_36923 < n);var state_36946__$1 = state_36946;if(cljs.core.truth_(inst_36925))
{var statearr_36950_36971 = state_36946__$1;(statearr_36950_36971[1] = 4);
} else
{var statearr_36951_36972 = state_36946__$1;(statearr_36951_36972[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36947 === 3))
{var inst_36943 = (state_36946[2]);var inst_36944 = cljs.core.async.close_BANG_.call(null,out);var state_36946__$1 = (function (){var statearr_36952 = state_36946;(statearr_36952[8] = inst_36943);
return statearr_36952;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36946__$1,inst_36944);
} else
{if((state_val_36947 === 4))
{var state_36946__$1 = state_36946;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36946__$1,7,ch);
} else
{if((state_val_36947 === 5))
{var state_36946__$1 = state_36946;var statearr_36953_36973 = state_36946__$1;(statearr_36953_36973[2] = null);
(statearr_36953_36973[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36947 === 6))
{var inst_36941 = (state_36946[2]);var state_36946__$1 = state_36946;var statearr_36954_36974 = state_36946__$1;(statearr_36954_36974[2] = inst_36941);
(statearr_36954_36974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36947 === 7))
{var inst_36928 = (state_36946[9]);var inst_36928__$1 = (state_36946[2]);var inst_36929 = (inst_36928__$1 == null);var inst_36930 = cljs.core.not.call(null,inst_36929);var state_36946__$1 = (function (){var statearr_36955 = state_36946;(statearr_36955[9] = inst_36928__$1);
return statearr_36955;
})();if(inst_36930)
{var statearr_36956_36975 = state_36946__$1;(statearr_36956_36975[1] = 8);
} else
{var statearr_36957_36976 = state_36946__$1;(statearr_36957_36976[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36947 === 8))
{var inst_36928 = (state_36946[9]);var state_36946__$1 = state_36946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36946__$1,11,out,inst_36928);
} else
{if((state_val_36947 === 9))
{var state_36946__$1 = state_36946;var statearr_36958_36977 = state_36946__$1;(statearr_36958_36977[2] = null);
(statearr_36958_36977[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36947 === 10))
{var inst_36938 = (state_36946[2]);var state_36946__$1 = state_36946;var statearr_36959_36978 = state_36946__$1;(statearr_36959_36978[2] = inst_36938);
(statearr_36959_36978[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36947 === 11))
{var inst_36923 = (state_36946[7]);var inst_36933 = (state_36946[2]);var inst_36934 = (inst_36923 + 1);var inst_36923__$1 = inst_36934;var state_36946__$1 = (function (){var statearr_36960 = state_36946;(statearr_36960[10] = inst_36933);
(statearr_36960[7] = inst_36923__$1);
return statearr_36960;
})();var statearr_36961_36979 = state_36946__$1;(statearr_36961_36979[2] = null);
(statearr_36961_36979[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36965 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36965[0] = state_machine__5507__auto__);
(statearr_36965[1] = 1);
return statearr_36965;
});
var state_machine__5507__auto____1 = (function (state_36946){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36946);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36966){if((e36966 instanceof Object))
{var ex__5510__auto__ = e36966;var statearr_36967_36980 = state_36946;(statearr_36967_36980[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36981 = state_36946;
state_36946 = G__36981;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36946){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36968 = f__5522__auto__.call(null);(statearr_36968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36969);
return statearr_36968;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37053){var state_val_37054 = (state_37053[1]);if((state_val_37054 === 1))
{var inst_37030 = null;var state_37053__$1 = (function (){var statearr_37055 = state_37053;(statearr_37055[7] = inst_37030);
return statearr_37055;
})();var statearr_37056_37079 = state_37053__$1;(statearr_37056_37079[2] = null);
(statearr_37056_37079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37054 === 2))
{var state_37053__$1 = state_37053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37053__$1,4,ch);
} else
{if((state_val_37054 === 3))
{var inst_37050 = (state_37053[2]);var inst_37051 = cljs.core.async.close_BANG_.call(null,out);var state_37053__$1 = (function (){var statearr_37057 = state_37053;(statearr_37057[8] = inst_37050);
return statearr_37057;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37053__$1,inst_37051);
} else
{if((state_val_37054 === 4))
{var inst_37033 = (state_37053[9]);var inst_37033__$1 = (state_37053[2]);var inst_37034 = (inst_37033__$1 == null);var inst_37035 = cljs.core.not.call(null,inst_37034);var state_37053__$1 = (function (){var statearr_37058 = state_37053;(statearr_37058[9] = inst_37033__$1);
return statearr_37058;
})();if(inst_37035)
{var statearr_37059_37080 = state_37053__$1;(statearr_37059_37080[1] = 5);
} else
{var statearr_37060_37081 = state_37053__$1;(statearr_37060_37081[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37054 === 5))
{var inst_37030 = (state_37053[7]);var inst_37033 = (state_37053[9]);var inst_37037 = cljs.core._EQ_.call(null,inst_37033,inst_37030);var state_37053__$1 = state_37053;if(inst_37037)
{var statearr_37061_37082 = state_37053__$1;(statearr_37061_37082[1] = 8);
} else
{var statearr_37062_37083 = state_37053__$1;(statearr_37062_37083[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37054 === 6))
{var state_37053__$1 = state_37053;var statearr_37064_37084 = state_37053__$1;(statearr_37064_37084[2] = null);
(statearr_37064_37084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37054 === 7))
{var inst_37048 = (state_37053[2]);var state_37053__$1 = state_37053;var statearr_37065_37085 = state_37053__$1;(statearr_37065_37085[2] = inst_37048);
(statearr_37065_37085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37054 === 8))
{var inst_37030 = (state_37053[7]);var tmp37063 = inst_37030;var inst_37030__$1 = tmp37063;var state_37053__$1 = (function (){var statearr_37066 = state_37053;(statearr_37066[7] = inst_37030__$1);
return statearr_37066;
})();var statearr_37067_37086 = state_37053__$1;(statearr_37067_37086[2] = null);
(statearr_37067_37086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37054 === 9))
{var inst_37033 = (state_37053[9]);var state_37053__$1 = state_37053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37053__$1,11,out,inst_37033);
} else
{if((state_val_37054 === 10))
{var inst_37045 = (state_37053[2]);var state_37053__$1 = state_37053;var statearr_37068_37087 = state_37053__$1;(statearr_37068_37087[2] = inst_37045);
(statearr_37068_37087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37054 === 11))
{var inst_37033 = (state_37053[9]);var inst_37042 = (state_37053[2]);var inst_37030 = inst_37033;var state_37053__$1 = (function (){var statearr_37069 = state_37053;(statearr_37069[7] = inst_37030);
(statearr_37069[10] = inst_37042);
return statearr_37069;
})();var statearr_37070_37088 = state_37053__$1;(statearr_37070_37088[2] = null);
(statearr_37070_37088[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37074 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37074[0] = state_machine__5507__auto__);
(statearr_37074[1] = 1);
return statearr_37074;
});
var state_machine__5507__auto____1 = (function (state_37053){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37053);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37075){if((e37075 instanceof Object))
{var ex__5510__auto__ = e37075;var statearr_37076_37089 = state_37053;(statearr_37076_37089[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37053);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37090 = state_37053;
state_37053 = G__37090;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37053){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37077 = f__5522__auto__.call(null);(statearr_37077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37078);
return statearr_37077;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37195){var state_val_37196 = (state_37195[1]);if((state_val_37196 === 1))
{var inst_37158 = (new Array(n));var inst_37159 = inst_37158;var inst_37160 = 0;var state_37195__$1 = (function (){var statearr_37197 = state_37195;(statearr_37197[7] = inst_37159);
(statearr_37197[8] = inst_37160);
return statearr_37197;
})();var statearr_37198_37226 = state_37195__$1;(statearr_37198_37226[2] = null);
(statearr_37198_37226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 2))
{var state_37195__$1 = state_37195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37195__$1,4,ch);
} else
{if((state_val_37196 === 3))
{var inst_37193 = (state_37195[2]);var state_37195__$1 = state_37195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37195__$1,inst_37193);
} else
{if((state_val_37196 === 4))
{var inst_37163 = (state_37195[9]);var inst_37163__$1 = (state_37195[2]);var inst_37164 = (inst_37163__$1 == null);var inst_37165 = cljs.core.not.call(null,inst_37164);var state_37195__$1 = (function (){var statearr_37199 = state_37195;(statearr_37199[9] = inst_37163__$1);
return statearr_37199;
})();if(inst_37165)
{var statearr_37200_37227 = state_37195__$1;(statearr_37200_37227[1] = 5);
} else
{var statearr_37201_37228 = state_37195__$1;(statearr_37201_37228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 5))
{var inst_37168 = (state_37195[10]);var inst_37163 = (state_37195[9]);var inst_37159 = (state_37195[7]);var inst_37160 = (state_37195[8]);var inst_37167 = (inst_37159[inst_37160] = inst_37163);var inst_37168__$1 = (inst_37160 + 1);var inst_37169 = (inst_37168__$1 < n);var state_37195__$1 = (function (){var statearr_37202 = state_37195;(statearr_37202[10] = inst_37168__$1);
(statearr_37202[11] = inst_37167);
return statearr_37202;
})();if(cljs.core.truth_(inst_37169))
{var statearr_37203_37229 = state_37195__$1;(statearr_37203_37229[1] = 8);
} else
{var statearr_37204_37230 = state_37195__$1;(statearr_37204_37230[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 6))
{var inst_37160 = (state_37195[8]);var inst_37181 = (inst_37160 > 0);var state_37195__$1 = state_37195;if(cljs.core.truth_(inst_37181))
{var statearr_37206_37231 = state_37195__$1;(statearr_37206_37231[1] = 12);
} else
{var statearr_37207_37232 = state_37195__$1;(statearr_37207_37232[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 7))
{var inst_37191 = (state_37195[2]);var state_37195__$1 = state_37195;var statearr_37208_37233 = state_37195__$1;(statearr_37208_37233[2] = inst_37191);
(statearr_37208_37233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 8))
{var inst_37168 = (state_37195[10]);var inst_37159 = (state_37195[7]);var tmp37205 = inst_37159;var inst_37159__$1 = tmp37205;var inst_37160 = inst_37168;var state_37195__$1 = (function (){var statearr_37209 = state_37195;(statearr_37209[7] = inst_37159__$1);
(statearr_37209[8] = inst_37160);
return statearr_37209;
})();var statearr_37210_37234 = state_37195__$1;(statearr_37210_37234[2] = null);
(statearr_37210_37234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 9))
{var inst_37159 = (state_37195[7]);var inst_37173 = cljs.core.vec.call(null,inst_37159);var state_37195__$1 = state_37195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37195__$1,11,out,inst_37173);
} else
{if((state_val_37196 === 10))
{var inst_37179 = (state_37195[2]);var state_37195__$1 = state_37195;var statearr_37211_37235 = state_37195__$1;(statearr_37211_37235[2] = inst_37179);
(statearr_37211_37235[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 11))
{var inst_37175 = (state_37195[2]);var inst_37176 = (new Array(n));var inst_37159 = inst_37176;var inst_37160 = 0;var state_37195__$1 = (function (){var statearr_37212 = state_37195;(statearr_37212[7] = inst_37159);
(statearr_37212[8] = inst_37160);
(statearr_37212[12] = inst_37175);
return statearr_37212;
})();var statearr_37213_37236 = state_37195__$1;(statearr_37213_37236[2] = null);
(statearr_37213_37236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 12))
{var inst_37159 = (state_37195[7]);var inst_37183 = cljs.core.vec.call(null,inst_37159);var state_37195__$1 = state_37195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37195__$1,15,out,inst_37183);
} else
{if((state_val_37196 === 13))
{var state_37195__$1 = state_37195;var statearr_37214_37237 = state_37195__$1;(statearr_37214_37237[2] = null);
(statearr_37214_37237[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 14))
{var inst_37188 = (state_37195[2]);var inst_37189 = cljs.core.async.close_BANG_.call(null,out);var state_37195__$1 = (function (){var statearr_37215 = state_37195;(statearr_37215[13] = inst_37188);
return statearr_37215;
})();var statearr_37216_37238 = state_37195__$1;(statearr_37216_37238[2] = inst_37189);
(statearr_37216_37238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37196 === 15))
{var inst_37185 = (state_37195[2]);var state_37195__$1 = state_37195;var statearr_37217_37239 = state_37195__$1;(statearr_37217_37239[2] = inst_37185);
(statearr_37217_37239[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37221[0] = state_machine__5507__auto__);
(statearr_37221[1] = 1);
return statearr_37221;
});
var state_machine__5507__auto____1 = (function (state_37195){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37222){if((e37222 instanceof Object))
{var ex__5510__auto__ = e37222;var statearr_37223_37240 = state_37195;(statearr_37223_37240[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37241 = state_37195;
state_37195 = G__37241;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37195){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37224 = f__5522__auto__.call(null);(statearr_37224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37225);
return statearr_37224;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37354){var state_val_37355 = (state_37354[1]);if((state_val_37355 === 1))
{var inst_37313 = [];var inst_37314 = inst_37313;var inst_37315 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37354__$1 = (function (){var statearr_37356 = state_37354;(statearr_37356[7] = inst_37315);
(statearr_37356[8] = inst_37314);
return statearr_37356;
})();var statearr_37357_37385 = state_37354__$1;(statearr_37357_37385[2] = null);
(statearr_37357_37385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 2))
{var state_37354__$1 = state_37354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37354__$1,4,ch);
} else
{if((state_val_37355 === 3))
{var inst_37352 = (state_37354[2]);var state_37354__$1 = state_37354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37354__$1,inst_37352);
} else
{if((state_val_37355 === 4))
{var inst_37318 = (state_37354[9]);var inst_37318__$1 = (state_37354[2]);var inst_37319 = (inst_37318__$1 == null);var inst_37320 = cljs.core.not.call(null,inst_37319);var state_37354__$1 = (function (){var statearr_37358 = state_37354;(statearr_37358[9] = inst_37318__$1);
return statearr_37358;
})();if(inst_37320)
{var statearr_37359_37386 = state_37354__$1;(statearr_37359_37386[1] = 5);
} else
{var statearr_37360_37387 = state_37354__$1;(statearr_37360_37387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 5))
{var inst_37318 = (state_37354[9]);var inst_37322 = (state_37354[10]);var inst_37315 = (state_37354[7]);var inst_37322__$1 = f.call(null,inst_37318);var inst_37323 = cljs.core._EQ_.call(null,inst_37322__$1,inst_37315);var inst_37324 = cljs.core.keyword_identical_QMARK_.call(null,inst_37315,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37325 = (inst_37323) || (inst_37324);var state_37354__$1 = (function (){var statearr_37361 = state_37354;(statearr_37361[10] = inst_37322__$1);
return statearr_37361;
})();if(cljs.core.truth_(inst_37325))
{var statearr_37362_37388 = state_37354__$1;(statearr_37362_37388[1] = 8);
} else
{var statearr_37363_37389 = state_37354__$1;(statearr_37363_37389[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 6))
{var inst_37314 = (state_37354[8]);var inst_37339 = inst_37314.length;var inst_37340 = (inst_37339 > 0);var state_37354__$1 = state_37354;if(cljs.core.truth_(inst_37340))
{var statearr_37365_37390 = state_37354__$1;(statearr_37365_37390[1] = 12);
} else
{var statearr_37366_37391 = state_37354__$1;(statearr_37366_37391[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 7))
{var inst_37350 = (state_37354[2]);var state_37354__$1 = state_37354;var statearr_37367_37392 = state_37354__$1;(statearr_37367_37392[2] = inst_37350);
(statearr_37367_37392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 8))
{var inst_37318 = (state_37354[9]);var inst_37322 = (state_37354[10]);var inst_37314 = (state_37354[8]);var inst_37327 = inst_37314.push(inst_37318);var tmp37364 = inst_37314;var inst_37314__$1 = tmp37364;var inst_37315 = inst_37322;var state_37354__$1 = (function (){var statearr_37368 = state_37354;(statearr_37368[11] = inst_37327);
(statearr_37368[7] = inst_37315);
(statearr_37368[8] = inst_37314__$1);
return statearr_37368;
})();var statearr_37369_37393 = state_37354__$1;(statearr_37369_37393[2] = null);
(statearr_37369_37393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 9))
{var inst_37314 = (state_37354[8]);var inst_37330 = cljs.core.vec.call(null,inst_37314);var state_37354__$1 = state_37354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37354__$1,11,out,inst_37330);
} else
{if((state_val_37355 === 10))
{var inst_37337 = (state_37354[2]);var state_37354__$1 = state_37354;var statearr_37370_37394 = state_37354__$1;(statearr_37370_37394[2] = inst_37337);
(statearr_37370_37394[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 11))
{var inst_37318 = (state_37354[9]);var inst_37322 = (state_37354[10]);var inst_37332 = (state_37354[2]);var inst_37333 = [];var inst_37334 = inst_37333.push(inst_37318);var inst_37314 = inst_37333;var inst_37315 = inst_37322;var state_37354__$1 = (function (){var statearr_37371 = state_37354;(statearr_37371[7] = inst_37315);
(statearr_37371[8] = inst_37314);
(statearr_37371[12] = inst_37334);
(statearr_37371[13] = inst_37332);
return statearr_37371;
})();var statearr_37372_37395 = state_37354__$1;(statearr_37372_37395[2] = null);
(statearr_37372_37395[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 12))
{var inst_37314 = (state_37354[8]);var inst_37342 = cljs.core.vec.call(null,inst_37314);var state_37354__$1 = state_37354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37354__$1,15,out,inst_37342);
} else
{if((state_val_37355 === 13))
{var state_37354__$1 = state_37354;var statearr_37373_37396 = state_37354__$1;(statearr_37373_37396[2] = null);
(statearr_37373_37396[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 14))
{var inst_37347 = (state_37354[2]);var inst_37348 = cljs.core.async.close_BANG_.call(null,out);var state_37354__$1 = (function (){var statearr_37374 = state_37354;(statearr_37374[14] = inst_37347);
return statearr_37374;
})();var statearr_37375_37397 = state_37354__$1;(statearr_37375_37397[2] = inst_37348);
(statearr_37375_37397[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37355 === 15))
{var inst_37344 = (state_37354[2]);var state_37354__$1 = state_37354;var statearr_37376_37398 = state_37354__$1;(statearr_37376_37398[2] = inst_37344);
(statearr_37376_37398[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37380[0] = state_machine__5507__auto__);
(statearr_37380[1] = 1);
return statearr_37380;
});
var state_machine__5507__auto____1 = (function (state_37354){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37381){if((e37381 instanceof Object))
{var ex__5510__auto__ = e37381;var statearr_37382_37399 = state_37354;(statearr_37382_37399[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37400 = state_37354;
state_37354 = G__37400;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37354){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37383 = f__5522__auto__.call(null);(statearr_37383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37384);
return statearr_37383;
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
