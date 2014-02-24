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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34856 = (function (f,fn_handler,meta34857){
this.f = f;
this.fn_handler = fn_handler;
this.meta34857 = meta34857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34856.cljs$lang$type = true;
cljs.core.async.t34856.cljs$lang$ctorStr = "cljs.core.async/t34856";
cljs.core.async.t34856.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34856");
});
cljs.core.async.t34856.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34858){var self__ = this;
var _34858__$1 = this;return self__.meta34857;
});
cljs.core.async.t34856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34858,meta34857__$1){var self__ = this;
var _34858__$1 = this;return (new cljs.core.async.t34856(self__.f,self__.fn_handler,meta34857__$1));
});
cljs.core.async.__GT_t34856 = (function __GT_t34856(f__$1,fn_handler__$1,meta34857){return (new cljs.core.async.t34856(f__$1,fn_handler__$1,meta34857));
});
}
return (new cljs.core.async.t34856(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34860 = buff;if(G__34860)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34860.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34860.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34860);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34860);
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
{var val_34861 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34861);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34861);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34862 = n;var x_34863 = 0;while(true){
if((x_34863 < n__4248__auto___34862))
{(a[x_34863] = 0);
{
var G__34864 = (x_34863 + 1);
x_34863 = G__34864;
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
var G__34865 = (i + 1);
i = G__34865;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34869 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34869 = (function (flag,alt_flag,meta34870){
this.flag = flag;
this.alt_flag = alt_flag;
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
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34871){var self__ = this;
var _34871__$1 = this;return self__.meta34870;
});
cljs.core.async.t34869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34871,meta34870__$1){var self__ = this;
var _34871__$1 = this;return (new cljs.core.async.t34869(self__.flag,self__.alt_flag,meta34870__$1));
});
cljs.core.async.__GT_t34869 = (function __GT_t34869(flag__$1,alt_flag__$1,meta34870){return (new cljs.core.async.t34869(flag__$1,alt_flag__$1,meta34870));
});
}
return (new cljs.core.async.t34869(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34875 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34875 = (function (cb,flag,alt_handler,meta34876){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34876 = meta34876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34875.cljs$lang$type = true;
cljs.core.async.t34875.cljs$lang$ctorStr = "cljs.core.async/t34875";
cljs.core.async.t34875.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34875");
});
cljs.core.async.t34875.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34877){var self__ = this;
var _34877__$1 = this;return self__.meta34876;
});
cljs.core.async.t34875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34877,meta34876__$1){var self__ = this;
var _34877__$1 = this;return (new cljs.core.async.t34875(self__.cb,self__.flag,self__.alt_handler,meta34876__$1));
});
cljs.core.async.__GT_t34875 = (function __GT_t34875(cb__$1,flag__$1,alt_handler__$1,meta34876){return (new cljs.core.async.t34875(cb__$1,flag__$1,alt_handler__$1,meta34876));
});
}
return (new cljs.core.async.t34875(cb,flag,alt_handler,null));
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
return (function (p1__34878_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34878_SHARP_,port], null));
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
var G__34879 = (i + 1);
i = G__34879;
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
var alts_BANG___delegate = function (ports,p__34880){var map__34882 = p__34880;var map__34882__$1 = ((cljs.core.seq_QMARK_.call(null,map__34882))?cljs.core.apply.call(null,cljs.core.hash_map,map__34882):map__34882);var opts = map__34882__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34880 = null;if (arguments.length > 1) {
  p__34880 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34880);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34883){
var ports = cljs.core.first(arglist__34883);
var p__34880 = cljs.core.rest(arglist__34883);
return alts_BANG___delegate(ports,p__34880);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34891 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34891 = (function (ch,f,map_LT_,meta34892){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34892 = meta34892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34891.cljs$lang$type = true;
cljs.core.async.t34891.cljs$lang$ctorStr = "cljs.core.async/t34891";
cljs.core.async.t34891.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34891");
});
cljs.core.async.t34891.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34891.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34894 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34894 = (function (fn1,_,meta34892,ch,f,map_LT_,meta34895){
this.fn1 = fn1;
this._ = _;
this.meta34892 = meta34892;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34895 = meta34895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34894.cljs$lang$type = true;
cljs.core.async.t34894.cljs$lang$ctorStr = "cljs.core.async/t34894";
cljs.core.async.t34894.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34894");
});
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34884_SHARP_){return f1.call(null,(((p1__34884_SHARP_ == null))?null:self__.f.call(null,p1__34884_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34896){var self__ = this;
var _34896__$1 = this;return self__.meta34895;
});
cljs.core.async.t34894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34896,meta34895__$1){var self__ = this;
var _34896__$1 = this;return (new cljs.core.async.t34894(self__.fn1,self__._,self__.meta34892,self__.ch,self__.f,self__.map_LT_,meta34895__$1));
});
cljs.core.async.__GT_t34894 = (function __GT_t34894(fn1__$1,___$2,meta34892__$1,ch__$2,f__$2,map_LT___$2,meta34895){return (new cljs.core.async.t34894(fn1__$1,___$2,meta34892__$1,ch__$2,f__$2,map_LT___$2,meta34895));
});
}
return (new cljs.core.async.t34894(fn1,___$1,self__.meta34892,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34891.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34893){var self__ = this;
var _34893__$1 = this;return self__.meta34892;
});
cljs.core.async.t34891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34893,meta34892__$1){var self__ = this;
var _34893__$1 = this;return (new cljs.core.async.t34891(self__.ch,self__.f,self__.map_LT_,meta34892__$1));
});
cljs.core.async.__GT_t34891 = (function __GT_t34891(ch__$1,f__$1,map_LT___$1,meta34892){return (new cljs.core.async.t34891(ch__$1,f__$1,map_LT___$1,meta34892));
});
}
return (new cljs.core.async.t34891(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34900 = (function (ch,f,map_GT_,meta34901){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
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
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
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
var _34902__$1 = this;return (new cljs.core.async.t34900(self__.ch,self__.f,self__.map_GT_,meta34901__$1));
});
cljs.core.async.__GT_t34900 = (function __GT_t34900(ch__$1,f__$1,map_GT___$1,meta34901){return (new cljs.core.async.t34900(ch__$1,f__$1,map_GT___$1,meta34901));
});
}
return (new cljs.core.async.t34900(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34906 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34906 = (function (ch,p,filter_GT_,meta34907){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34907 = meta34907;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34906.cljs$lang$type = true;
cljs.core.async.t34906.cljs$lang$ctorStr = "cljs.core.async/t34906";
cljs.core.async.t34906.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34906");
});
cljs.core.async.t34906.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34906.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34906.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34908){var self__ = this;
var _34908__$1 = this;return self__.meta34907;
});
cljs.core.async.t34906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34908,meta34907__$1){var self__ = this;
var _34908__$1 = this;return (new cljs.core.async.t34906(self__.ch,self__.p,self__.filter_GT_,meta34907__$1));
});
cljs.core.async.__GT_t34906 = (function __GT_t34906(ch__$1,p__$1,filter_GT___$1,meta34907){return (new cljs.core.async.t34906(ch__$1,p__$1,filter_GT___$1,meta34907));
});
}
return (new cljs.core.async.t34906(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34991 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34970){var state_val_34971 = (state_34970[1]);if((state_val_34971 === 1))
{var state_34970__$1 = state_34970;var statearr_34972_34992 = state_34970__$1;(statearr_34972_34992[2] = null);
(statearr_34972_34992[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34971 === 2))
{var state_34970__$1 = state_34970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34970__$1,4,ch);
} else
{if((state_val_34971 === 3))
{var inst_34968 = (state_34970[2]);var state_34970__$1 = state_34970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34970__$1,inst_34968);
} else
{if((state_val_34971 === 4))
{var inst_34952 = (state_34970[7]);var inst_34952__$1 = (state_34970[2]);var inst_34953 = (inst_34952__$1 == null);var state_34970__$1 = (function (){var statearr_34973 = state_34970;(statearr_34973[7] = inst_34952__$1);
return statearr_34973;
})();if(cljs.core.truth_(inst_34953))
{var statearr_34974_34993 = state_34970__$1;(statearr_34974_34993[1] = 5);
} else
{var statearr_34975_34994 = state_34970__$1;(statearr_34975_34994[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34971 === 5))
{var inst_34955 = cljs.core.async.close_BANG_.call(null,out);var state_34970__$1 = state_34970;var statearr_34976_34995 = state_34970__$1;(statearr_34976_34995[2] = inst_34955);
(statearr_34976_34995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34971 === 6))
{var inst_34952 = (state_34970[7]);var inst_34957 = p.call(null,inst_34952);var state_34970__$1 = state_34970;if(cljs.core.truth_(inst_34957))
{var statearr_34977_34996 = state_34970__$1;(statearr_34977_34996[1] = 8);
} else
{var statearr_34978_34997 = state_34970__$1;(statearr_34978_34997[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34971 === 7))
{var inst_34966 = (state_34970[2]);var state_34970__$1 = state_34970;var statearr_34979_34998 = state_34970__$1;(statearr_34979_34998[2] = inst_34966);
(statearr_34979_34998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34971 === 8))
{var inst_34952 = (state_34970[7]);var state_34970__$1 = state_34970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34970__$1,11,out,inst_34952);
} else
{if((state_val_34971 === 9))
{var state_34970__$1 = state_34970;var statearr_34980_34999 = state_34970__$1;(statearr_34980_34999[2] = null);
(statearr_34980_34999[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34971 === 10))
{var inst_34963 = (state_34970[2]);var state_34970__$1 = (function (){var statearr_34981 = state_34970;(statearr_34981[8] = inst_34963);
return statearr_34981;
})();var statearr_34982_35000 = state_34970__$1;(statearr_34982_35000[2] = null);
(statearr_34982_35000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34971 === 11))
{var inst_34960 = (state_34970[2]);var state_34970__$1 = state_34970;var statearr_34983_35001 = state_34970__$1;(statearr_34983_35001[2] = inst_34960);
(statearr_34983_35001[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34987 = [null,null,null,null,null,null,null,null,null];(statearr_34987[0] = state_machine__5507__auto__);
(statearr_34987[1] = 1);
return statearr_34987;
});
var state_machine__5507__auto____1 = (function (state_34970){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34988){if((e34988 instanceof Object))
{var ex__5510__auto__ = e34988;var statearr_34989_35002 = state_34970;(statearr_34989_35002[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34988;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35003 = state_34970;
state_34970 = G__35003;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34970){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34990 = f__5522__auto__.call(null);(statearr_34990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34991);
return statearr_34990;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35155){var state_val_35156 = (state_35155[1]);if((state_val_35156 === 1))
{var state_35155__$1 = state_35155;var statearr_35157_35194 = state_35155__$1;(statearr_35157_35194[2] = null);
(statearr_35157_35194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 2))
{var state_35155__$1 = state_35155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35155__$1,4,in$);
} else
{if((state_val_35156 === 3))
{var inst_35153 = (state_35155[2]);var state_35155__$1 = state_35155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35155__$1,inst_35153);
} else
{if((state_val_35156 === 4))
{var inst_35101 = (state_35155[7]);var inst_35101__$1 = (state_35155[2]);var inst_35102 = (inst_35101__$1 == null);var state_35155__$1 = (function (){var statearr_35158 = state_35155;(statearr_35158[7] = inst_35101__$1);
return statearr_35158;
})();if(cljs.core.truth_(inst_35102))
{var statearr_35159_35195 = state_35155__$1;(statearr_35159_35195[1] = 5);
} else
{var statearr_35160_35196 = state_35155__$1;(statearr_35160_35196[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 5))
{var inst_35104 = cljs.core.async.close_BANG_.call(null,out);var state_35155__$1 = state_35155;var statearr_35161_35197 = state_35155__$1;(statearr_35161_35197[2] = inst_35104);
(statearr_35161_35197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 6))
{var inst_35101 = (state_35155[7]);var inst_35106 = f.call(null,inst_35101);var inst_35111 = cljs.core.seq.call(null,inst_35106);var inst_35112 = inst_35111;var inst_35113 = null;var inst_35114 = 0;var inst_35115 = 0;var state_35155__$1 = (function (){var statearr_35162 = state_35155;(statearr_35162[8] = inst_35112);
(statearr_35162[9] = inst_35115);
(statearr_35162[10] = inst_35114);
(statearr_35162[11] = inst_35113);
return statearr_35162;
})();var statearr_35163_35198 = state_35155__$1;(statearr_35163_35198[2] = null);
(statearr_35163_35198[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 7))
{var inst_35151 = (state_35155[2]);var state_35155__$1 = state_35155;var statearr_35164_35199 = state_35155__$1;(statearr_35164_35199[2] = inst_35151);
(statearr_35164_35199[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 8))
{var inst_35115 = (state_35155[9]);var inst_35114 = (state_35155[10]);var inst_35117 = (inst_35115 < inst_35114);var inst_35118 = inst_35117;var state_35155__$1 = state_35155;if(cljs.core.truth_(inst_35118))
{var statearr_35165_35200 = state_35155__$1;(statearr_35165_35200[1] = 10);
} else
{var statearr_35166_35201 = state_35155__$1;(statearr_35166_35201[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 9))
{var inst_35148 = (state_35155[2]);var state_35155__$1 = (function (){var statearr_35167 = state_35155;(statearr_35167[12] = inst_35148);
return statearr_35167;
})();var statearr_35168_35202 = state_35155__$1;(statearr_35168_35202[2] = null);
(statearr_35168_35202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 10))
{var inst_35115 = (state_35155[9]);var inst_35113 = (state_35155[11]);var inst_35120 = cljs.core._nth.call(null,inst_35113,inst_35115);var state_35155__$1 = state_35155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35155__$1,13,out,inst_35120);
} else
{if((state_val_35156 === 11))
{var inst_35112 = (state_35155[8]);var inst_35126 = (state_35155[13]);var inst_35126__$1 = cljs.core.seq.call(null,inst_35112);var state_35155__$1 = (function (){var statearr_35172 = state_35155;(statearr_35172[13] = inst_35126__$1);
return statearr_35172;
})();if(inst_35126__$1)
{var statearr_35173_35203 = state_35155__$1;(statearr_35173_35203[1] = 14);
} else
{var statearr_35174_35204 = state_35155__$1;(statearr_35174_35204[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 12))
{var inst_35146 = (state_35155[2]);var state_35155__$1 = state_35155;var statearr_35175_35205 = state_35155__$1;(statearr_35175_35205[2] = inst_35146);
(statearr_35175_35205[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 13))
{var inst_35112 = (state_35155[8]);var inst_35115 = (state_35155[9]);var inst_35114 = (state_35155[10]);var inst_35113 = (state_35155[11]);var inst_35122 = (state_35155[2]);var inst_35123 = (inst_35115 + 1);var tmp35169 = inst_35112;var tmp35170 = inst_35114;var tmp35171 = inst_35113;var inst_35112__$1 = tmp35169;var inst_35113__$1 = tmp35171;var inst_35114__$1 = tmp35170;var inst_35115__$1 = inst_35123;var state_35155__$1 = (function (){var statearr_35176 = state_35155;(statearr_35176[8] = inst_35112__$1);
(statearr_35176[14] = inst_35122);
(statearr_35176[9] = inst_35115__$1);
(statearr_35176[10] = inst_35114__$1);
(statearr_35176[11] = inst_35113__$1);
return statearr_35176;
})();var statearr_35177_35206 = state_35155__$1;(statearr_35177_35206[2] = null);
(statearr_35177_35206[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 14))
{var inst_35126 = (state_35155[13]);var inst_35128 = cljs.core.chunked_seq_QMARK_.call(null,inst_35126);var state_35155__$1 = state_35155;if(inst_35128)
{var statearr_35178_35207 = state_35155__$1;(statearr_35178_35207[1] = 17);
} else
{var statearr_35179_35208 = state_35155__$1;(statearr_35179_35208[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 15))
{var state_35155__$1 = state_35155;var statearr_35180_35209 = state_35155__$1;(statearr_35180_35209[2] = null);
(statearr_35180_35209[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 16))
{var inst_35144 = (state_35155[2]);var state_35155__$1 = state_35155;var statearr_35181_35210 = state_35155__$1;(statearr_35181_35210[2] = inst_35144);
(statearr_35181_35210[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 17))
{var inst_35126 = (state_35155[13]);var inst_35130 = cljs.core.chunk_first.call(null,inst_35126);var inst_35131 = cljs.core.chunk_rest.call(null,inst_35126);var inst_35132 = cljs.core.count.call(null,inst_35130);var inst_35112 = inst_35131;var inst_35113 = inst_35130;var inst_35114 = inst_35132;var inst_35115 = 0;var state_35155__$1 = (function (){var statearr_35182 = state_35155;(statearr_35182[8] = inst_35112);
(statearr_35182[9] = inst_35115);
(statearr_35182[10] = inst_35114);
(statearr_35182[11] = inst_35113);
return statearr_35182;
})();var statearr_35183_35211 = state_35155__$1;(statearr_35183_35211[2] = null);
(statearr_35183_35211[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 18))
{var inst_35126 = (state_35155[13]);var inst_35135 = cljs.core.first.call(null,inst_35126);var state_35155__$1 = state_35155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35155__$1,20,out,inst_35135);
} else
{if((state_val_35156 === 19))
{var inst_35141 = (state_35155[2]);var state_35155__$1 = state_35155;var statearr_35184_35212 = state_35155__$1;(statearr_35184_35212[2] = inst_35141);
(statearr_35184_35212[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35156 === 20))
{var inst_35126 = (state_35155[13]);var inst_35137 = (state_35155[2]);var inst_35138 = cljs.core.next.call(null,inst_35126);var inst_35112 = inst_35138;var inst_35113 = null;var inst_35114 = 0;var inst_35115 = 0;var state_35155__$1 = (function (){var statearr_35185 = state_35155;(statearr_35185[15] = inst_35137);
(statearr_35185[8] = inst_35112);
(statearr_35185[9] = inst_35115);
(statearr_35185[10] = inst_35114);
(statearr_35185[11] = inst_35113);
return statearr_35185;
})();var statearr_35186_35213 = state_35155__$1;(statearr_35186_35213[2] = null);
(statearr_35186_35213[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_35190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35190[0] = state_machine__5507__auto__);
(statearr_35190[1] = 1);
return statearr_35190;
});
var state_machine__5507__auto____1 = (function (state_35155){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35155);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35191){if((e35191 instanceof Object))
{var ex__5510__auto__ = e35191;var statearr_35192_35214 = state_35155;(statearr_35192_35214[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35155);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35215 = state_35155;
state_35155 = G__35215;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35155){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35193 = f__5522__auto__.call(null);(statearr_35193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35193;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___35296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35275){var state_val_35276 = (state_35275[1]);if((state_val_35276 === 1))
{var state_35275__$1 = state_35275;var statearr_35277_35297 = state_35275__$1;(statearr_35277_35297[2] = null);
(statearr_35277_35297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35276 === 2))
{var state_35275__$1 = state_35275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35275__$1,4,from);
} else
{if((state_val_35276 === 3))
{var inst_35273 = (state_35275[2]);var state_35275__$1 = state_35275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35275__$1,inst_35273);
} else
{if((state_val_35276 === 4))
{var inst_35258 = (state_35275[7]);var inst_35258__$1 = (state_35275[2]);var inst_35259 = (inst_35258__$1 == null);var state_35275__$1 = (function (){var statearr_35278 = state_35275;(statearr_35278[7] = inst_35258__$1);
return statearr_35278;
})();if(cljs.core.truth_(inst_35259))
{var statearr_35279_35298 = state_35275__$1;(statearr_35279_35298[1] = 5);
} else
{var statearr_35280_35299 = state_35275__$1;(statearr_35280_35299[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35276 === 5))
{var state_35275__$1 = state_35275;if(cljs.core.truth_(close_QMARK_))
{var statearr_35281_35300 = state_35275__$1;(statearr_35281_35300[1] = 8);
} else
{var statearr_35282_35301 = state_35275__$1;(statearr_35282_35301[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35276 === 6))
{var inst_35258 = (state_35275[7]);var state_35275__$1 = state_35275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35275__$1,11,to,inst_35258);
} else
{if((state_val_35276 === 7))
{var inst_35271 = (state_35275[2]);var state_35275__$1 = state_35275;var statearr_35283_35302 = state_35275__$1;(statearr_35283_35302[2] = inst_35271);
(statearr_35283_35302[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35276 === 8))
{var inst_35262 = cljs.core.async.close_BANG_.call(null,to);var state_35275__$1 = state_35275;var statearr_35284_35303 = state_35275__$1;(statearr_35284_35303[2] = inst_35262);
(statearr_35284_35303[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35276 === 9))
{var state_35275__$1 = state_35275;var statearr_35285_35304 = state_35275__$1;(statearr_35285_35304[2] = null);
(statearr_35285_35304[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35276 === 10))
{var inst_35265 = (state_35275[2]);var state_35275__$1 = state_35275;var statearr_35286_35305 = state_35275__$1;(statearr_35286_35305[2] = inst_35265);
(statearr_35286_35305[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35276 === 11))
{var inst_35268 = (state_35275[2]);var state_35275__$1 = (function (){var statearr_35287 = state_35275;(statearr_35287[8] = inst_35268);
return statearr_35287;
})();var statearr_35288_35306 = state_35275__$1;(statearr_35288_35306[2] = null);
(statearr_35288_35306[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35292 = [null,null,null,null,null,null,null,null,null];(statearr_35292[0] = state_machine__5507__auto__);
(statearr_35292[1] = 1);
return statearr_35292;
});
var state_machine__5507__auto____1 = (function (state_35275){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35275);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35293){if((e35293 instanceof Object))
{var ex__5510__auto__ = e35293;var statearr_35294_35307 = state_35275;(statearr_35294_35307[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35308 = state_35275;
state_35275 = G__35308;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35275){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35295 = f__5522__auto__.call(null);(statearr_35295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35296);
return statearr_35295;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35373){var state_val_35374 = (state_35373[1]);if((state_val_35374 === 1))
{var state_35373__$1 = state_35373;var statearr_35375_35396 = state_35373__$1;(statearr_35375_35396[2] = null);
(statearr_35375_35396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 2))
{var state_35373__$1 = state_35373;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35373__$1,4,ch);
} else
{if((state_val_35374 === 3))
{var inst_35371 = (state_35373[2]);var state_35373__$1 = state_35373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35373__$1,inst_35371);
} else
{if((state_val_35374 === 4))
{var inst_35354 = (state_35373[7]);var inst_35354__$1 = (state_35373[2]);var inst_35355 = (inst_35354__$1 == null);var state_35373__$1 = (function (){var statearr_35376 = state_35373;(statearr_35376[7] = inst_35354__$1);
return statearr_35376;
})();if(cljs.core.truth_(inst_35355))
{var statearr_35377_35397 = state_35373__$1;(statearr_35377_35397[1] = 5);
} else
{var statearr_35378_35398 = state_35373__$1;(statearr_35378_35398[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 5))
{var inst_35357 = cljs.core.async.close_BANG_.call(null,tc);var inst_35358 = cljs.core.async.close_BANG_.call(null,fc);var state_35373__$1 = (function (){var statearr_35379 = state_35373;(statearr_35379[8] = inst_35357);
return statearr_35379;
})();var statearr_35380_35399 = state_35373__$1;(statearr_35380_35399[2] = inst_35358);
(statearr_35380_35399[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 6))
{var inst_35354 = (state_35373[7]);var inst_35360 = p.call(null,inst_35354);var state_35373__$1 = state_35373;if(cljs.core.truth_(inst_35360))
{var statearr_35381_35400 = state_35373__$1;(statearr_35381_35400[1] = 9);
} else
{var statearr_35382_35401 = state_35373__$1;(statearr_35382_35401[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 7))
{var inst_35369 = (state_35373[2]);var state_35373__$1 = state_35373;var statearr_35383_35402 = state_35373__$1;(statearr_35383_35402[2] = inst_35369);
(statearr_35383_35402[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 8))
{var inst_35366 = (state_35373[2]);var state_35373__$1 = (function (){var statearr_35384 = state_35373;(statearr_35384[9] = inst_35366);
return statearr_35384;
})();var statearr_35385_35403 = state_35373__$1;(statearr_35385_35403[2] = null);
(statearr_35385_35403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 9))
{var state_35373__$1 = state_35373;var statearr_35386_35404 = state_35373__$1;(statearr_35386_35404[2] = tc);
(statearr_35386_35404[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 10))
{var state_35373__$1 = state_35373;var statearr_35387_35405 = state_35373__$1;(statearr_35387_35405[2] = fc);
(statearr_35387_35405[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35374 === 11))
{var inst_35354 = (state_35373[7]);var inst_35364 = (state_35373[2]);var state_35373__$1 = state_35373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35373__$1,8,inst_35364,inst_35354);
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
var state_machine__5507__auto____0 = (function (){var statearr_35391 = [null,null,null,null,null,null,null,null,null,null];(statearr_35391[0] = state_machine__5507__auto__);
(statearr_35391[1] = 1);
return statearr_35391;
});
var state_machine__5507__auto____1 = (function (state_35373){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35373);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35392){if((e35392 instanceof Object))
{var ex__5510__auto__ = e35392;var statearr_35393_35406 = state_35373;(statearr_35393_35406[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35407 = state_35373;
state_35373 = G__35407;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35373){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35394 = f__5522__auto__.call(null);(statearr_35394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35395);
return statearr_35394;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35454){var state_val_35455 = (state_35454[1]);if((state_val_35455 === 7))
{var inst_35450 = (state_35454[2]);var state_35454__$1 = state_35454;var statearr_35456_35472 = state_35454__$1;(statearr_35456_35472[2] = inst_35450);
(statearr_35456_35472[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35455 === 6))
{var inst_35443 = (state_35454[7]);var inst_35440 = (state_35454[8]);var inst_35447 = f.call(null,inst_35440,inst_35443);var inst_35440__$1 = inst_35447;var state_35454__$1 = (function (){var statearr_35457 = state_35454;(statearr_35457[8] = inst_35440__$1);
return statearr_35457;
})();var statearr_35458_35473 = state_35454__$1;(statearr_35458_35473[2] = null);
(statearr_35458_35473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35455 === 5))
{var inst_35440 = (state_35454[8]);var state_35454__$1 = state_35454;var statearr_35459_35474 = state_35454__$1;(statearr_35459_35474[2] = inst_35440);
(statearr_35459_35474[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35455 === 4))
{var inst_35443 = (state_35454[7]);var inst_35443__$1 = (state_35454[2]);var inst_35444 = (inst_35443__$1 == null);var state_35454__$1 = (function (){var statearr_35460 = state_35454;(statearr_35460[7] = inst_35443__$1);
return statearr_35460;
})();if(cljs.core.truth_(inst_35444))
{var statearr_35461_35475 = state_35454__$1;(statearr_35461_35475[1] = 5);
} else
{var statearr_35462_35476 = state_35454__$1;(statearr_35462_35476[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35455 === 3))
{var inst_35452 = (state_35454[2]);var state_35454__$1 = state_35454;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35454__$1,inst_35452);
} else
{if((state_val_35455 === 2))
{var state_35454__$1 = state_35454;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35454__$1,4,ch);
} else
{if((state_val_35455 === 1))
{var inst_35440 = init;var state_35454__$1 = (function (){var statearr_35463 = state_35454;(statearr_35463[8] = inst_35440);
return statearr_35463;
})();var statearr_35464_35477 = state_35454__$1;(statearr_35464_35477[2] = null);
(statearr_35464_35477[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35468 = [null,null,null,null,null,null,null,null,null];(statearr_35468[0] = state_machine__5507__auto__);
(statearr_35468[1] = 1);
return statearr_35468;
});
var state_machine__5507__auto____1 = (function (state_35454){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35454);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35469){if((e35469 instanceof Object))
{var ex__5510__auto__ = e35469;var statearr_35470_35478 = state_35454;(statearr_35470_35478[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35454);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35479 = state_35454;
state_35454 = G__35479;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35454){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35471 = f__5522__auto__.call(null);(statearr_35471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35471;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35541){var state_val_35542 = (state_35541[1]);if((state_val_35542 === 1))
{var inst_35521 = cljs.core.seq.call(null,coll);var inst_35522 = inst_35521;var state_35541__$1 = (function (){var statearr_35543 = state_35541;(statearr_35543[7] = inst_35522);
return statearr_35543;
})();var statearr_35544_35562 = state_35541__$1;(statearr_35544_35562[2] = null);
(statearr_35544_35562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 2))
{var inst_35522 = (state_35541[7]);var state_35541__$1 = state_35541;if(cljs.core.truth_(inst_35522))
{var statearr_35545_35563 = state_35541__$1;(statearr_35545_35563[1] = 4);
} else
{var statearr_35546_35564 = state_35541__$1;(statearr_35546_35564[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 3))
{var inst_35539 = (state_35541[2]);var state_35541__$1 = state_35541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35541__$1,inst_35539);
} else
{if((state_val_35542 === 4))
{var inst_35522 = (state_35541[7]);var inst_35525 = cljs.core.first.call(null,inst_35522);var state_35541__$1 = state_35541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35541__$1,7,ch,inst_35525);
} else
{if((state_val_35542 === 5))
{var state_35541__$1 = state_35541;if(cljs.core.truth_(close_QMARK_))
{var statearr_35547_35565 = state_35541__$1;(statearr_35547_35565[1] = 8);
} else
{var statearr_35548_35566 = state_35541__$1;(statearr_35548_35566[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 6))
{var inst_35537 = (state_35541[2]);var state_35541__$1 = state_35541;var statearr_35549_35567 = state_35541__$1;(statearr_35549_35567[2] = inst_35537);
(statearr_35549_35567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 7))
{var inst_35522 = (state_35541[7]);var inst_35527 = (state_35541[2]);var inst_35528 = cljs.core.next.call(null,inst_35522);var inst_35522__$1 = inst_35528;var state_35541__$1 = (function (){var statearr_35550 = state_35541;(statearr_35550[8] = inst_35527);
(statearr_35550[7] = inst_35522__$1);
return statearr_35550;
})();var statearr_35551_35568 = state_35541__$1;(statearr_35551_35568[2] = null);
(statearr_35551_35568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 8))
{var inst_35532 = cljs.core.async.close_BANG_.call(null,ch);var state_35541__$1 = state_35541;var statearr_35552_35569 = state_35541__$1;(statearr_35552_35569[2] = inst_35532);
(statearr_35552_35569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 9))
{var state_35541__$1 = state_35541;var statearr_35553_35570 = state_35541__$1;(statearr_35553_35570[2] = null);
(statearr_35553_35570[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 10))
{var inst_35535 = (state_35541[2]);var state_35541__$1 = state_35541;var statearr_35554_35571 = state_35541__$1;(statearr_35554_35571[2] = inst_35535);
(statearr_35554_35571[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35558 = [null,null,null,null,null,null,null,null,null];(statearr_35558[0] = state_machine__5507__auto__);
(statearr_35558[1] = 1);
return statearr_35558;
});
var state_machine__5507__auto____1 = (function (state_35541){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35541);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35559){if((e35559 instanceof Object))
{var ex__5510__auto__ = e35559;var statearr_35560_35572 = state_35541;(statearr_35560_35572[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35573 = state_35541;
state_35541 = G__35573;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35541){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35561 = f__5522__auto__.call(null);(statearr_35561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35561;
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
cljs.core.async.Mux = (function (){var obj35575 = {};return obj35575;
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
cljs.core.async.Mult = (function (){var obj35577 = {};return obj35577;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35801 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35801 = (function (cs,ch,mult,meta35802){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35802 = meta35802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35801.cljs$lang$type = true;
cljs.core.async.t35801.cljs$lang$ctorStr = "cljs.core.async/t35801";
cljs.core.async.t35801.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35801");
});})(cs))
;
cljs.core.async.t35801.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35801.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35801.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35801.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35801.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35803){var self__ = this;
var _35803__$1 = this;return self__.meta35802;
});})(cs))
;
cljs.core.async.t35801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35803,meta35802__$1){var self__ = this;
var _35803__$1 = this;return (new cljs.core.async.t35801(self__.cs,self__.ch,self__.mult,meta35802__$1));
});})(cs))
;
cljs.core.async.__GT_t35801 = ((function (cs){
return (function __GT_t35801(cs__$1,ch__$1,mult__$1,meta35802){return (new cljs.core.async.t35801(cs__$1,ch__$1,mult__$1,meta35802));
});})(cs))
;
}
return (new cljs.core.async.t35801(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___36024 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35938){var state_val_35939 = (state_35938[1]);if((state_val_35939 === 32))
{var inst_35806 = (state_35938[7]);var inst_35882 = (state_35938[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35938,31,Object,null,30);var inst_35889 = cljs.core.async.put_BANG_.call(null,inst_35882,inst_35806,done);var state_35938__$1 = state_35938;var statearr_35940_36025 = state_35938__$1;(statearr_35940_36025[2] = inst_35889);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 1))
{var state_35938__$1 = state_35938;var statearr_35941_36026 = state_35938__$1;(statearr_35941_36026[2] = null);
(statearr_35941_36026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 33))
{var inst_35895 = (state_35938[9]);var inst_35897 = cljs.core.chunked_seq_QMARK_.call(null,inst_35895);var state_35938__$1 = state_35938;if(inst_35897)
{var statearr_35942_36027 = state_35938__$1;(statearr_35942_36027[1] = 36);
} else
{var statearr_35943_36028 = state_35938__$1;(statearr_35943_36028[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 2))
{var state_35938__$1 = state_35938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35938__$1,4,ch);
} else
{if((state_val_35939 === 34))
{var state_35938__$1 = state_35938;var statearr_35944_36029 = state_35938__$1;(statearr_35944_36029[2] = null);
(statearr_35944_36029[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 3))
{var inst_35936 = (state_35938[2]);var state_35938__$1 = state_35938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35938__$1,inst_35936);
} else
{if((state_val_35939 === 35))
{var inst_35920 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35945_36030 = state_35938__$1;(statearr_35945_36030[2] = inst_35920);
(statearr_35945_36030[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 4))
{var inst_35806 = (state_35938[7]);var inst_35806__$1 = (state_35938[2]);var inst_35807 = (inst_35806__$1 == null);var state_35938__$1 = (function (){var statearr_35946 = state_35938;(statearr_35946[7] = inst_35806__$1);
return statearr_35946;
})();if(cljs.core.truth_(inst_35807))
{var statearr_35947_36031 = state_35938__$1;(statearr_35947_36031[1] = 5);
} else
{var statearr_35948_36032 = state_35938__$1;(statearr_35948_36032[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 36))
{var inst_35895 = (state_35938[9]);var inst_35899 = cljs.core.chunk_first.call(null,inst_35895);var inst_35900 = cljs.core.chunk_rest.call(null,inst_35895);var inst_35901 = cljs.core.count.call(null,inst_35899);var inst_35874 = inst_35900;var inst_35875 = inst_35899;var inst_35876 = inst_35901;var inst_35877 = 0;var state_35938__$1 = (function (){var statearr_35949 = state_35938;(statearr_35949[10] = inst_35876);
(statearr_35949[11] = inst_35877);
(statearr_35949[12] = inst_35875);
(statearr_35949[13] = inst_35874);
return statearr_35949;
})();var statearr_35950_36033 = state_35938__$1;(statearr_35950_36033[2] = null);
(statearr_35950_36033[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 5))
{var inst_35813 = cljs.core.deref.call(null,cs);var inst_35814 = cljs.core.seq.call(null,inst_35813);var inst_35815 = inst_35814;var inst_35816 = null;var inst_35817 = 0;var inst_35818 = 0;var state_35938__$1 = (function (){var statearr_35951 = state_35938;(statearr_35951[14] = inst_35815);
(statearr_35951[15] = inst_35817);
(statearr_35951[16] = inst_35816);
(statearr_35951[17] = inst_35818);
return statearr_35951;
})();var statearr_35952_36034 = state_35938__$1;(statearr_35952_36034[2] = null);
(statearr_35952_36034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 37))
{var inst_35895 = (state_35938[9]);var inst_35904 = cljs.core.first.call(null,inst_35895);var state_35938__$1 = (function (){var statearr_35953 = state_35938;(statearr_35953[18] = inst_35904);
return statearr_35953;
})();var statearr_35954_36035 = state_35938__$1;(statearr_35954_36035[2] = null);
(statearr_35954_36035[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 6))
{var inst_35866 = (state_35938[19]);var inst_35865 = cljs.core.deref.call(null,cs);var inst_35866__$1 = cljs.core.keys.call(null,inst_35865);var inst_35867 = cljs.core.count.call(null,inst_35866__$1);var inst_35868 = cljs.core.reset_BANG_.call(null,dctr,inst_35867);var inst_35873 = cljs.core.seq.call(null,inst_35866__$1);var inst_35874 = inst_35873;var inst_35875 = null;var inst_35876 = 0;var inst_35877 = 0;var state_35938__$1 = (function (){var statearr_35955 = state_35938;(statearr_35955[10] = inst_35876);
(statearr_35955[11] = inst_35877);
(statearr_35955[12] = inst_35875);
(statearr_35955[19] = inst_35866__$1);
(statearr_35955[13] = inst_35874);
(statearr_35955[20] = inst_35868);
return statearr_35955;
})();var statearr_35956_36036 = state_35938__$1;(statearr_35956_36036[2] = null);
(statearr_35956_36036[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 38))
{var inst_35917 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35957_36037 = state_35938__$1;(statearr_35957_36037[2] = inst_35917);
(statearr_35957_36037[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 7))
{var inst_35934 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35958_36038 = state_35938__$1;(statearr_35958_36038[2] = inst_35934);
(statearr_35958_36038[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 39))
{var inst_35895 = (state_35938[9]);var inst_35913 = (state_35938[2]);var inst_35914 = cljs.core.next.call(null,inst_35895);var inst_35874 = inst_35914;var inst_35875 = null;var inst_35876 = 0;var inst_35877 = 0;var state_35938__$1 = (function (){var statearr_35959 = state_35938;(statearr_35959[21] = inst_35913);
(statearr_35959[10] = inst_35876);
(statearr_35959[11] = inst_35877);
(statearr_35959[12] = inst_35875);
(statearr_35959[13] = inst_35874);
return statearr_35959;
})();var statearr_35960_36039 = state_35938__$1;(statearr_35960_36039[2] = null);
(statearr_35960_36039[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 8))
{var inst_35817 = (state_35938[15]);var inst_35818 = (state_35938[17]);var inst_35820 = (inst_35818 < inst_35817);var inst_35821 = inst_35820;var state_35938__$1 = state_35938;if(cljs.core.truth_(inst_35821))
{var statearr_35961_36040 = state_35938__$1;(statearr_35961_36040[1] = 10);
} else
{var statearr_35962_36041 = state_35938__$1;(statearr_35962_36041[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 40))
{var inst_35904 = (state_35938[18]);var inst_35905 = (state_35938[2]);var inst_35906 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35907 = cljs.core.async.untap_STAR_.call(null,m,inst_35904);var state_35938__$1 = (function (){var statearr_35963 = state_35938;(statearr_35963[22] = inst_35905);
(statearr_35963[23] = inst_35906);
return statearr_35963;
})();var statearr_35964_36042 = state_35938__$1;(statearr_35964_36042[2] = inst_35907);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 9))
{var inst_35863 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35965_36043 = state_35938__$1;(statearr_35965_36043[2] = inst_35863);
(statearr_35965_36043[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 41))
{var inst_35904 = (state_35938[18]);var inst_35806 = (state_35938[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35938,40,Object,null,39);var inst_35911 = cljs.core.async.put_BANG_.call(null,inst_35904,inst_35806,done);var state_35938__$1 = state_35938;var statearr_35966_36044 = state_35938__$1;(statearr_35966_36044[2] = inst_35911);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 10))
{var inst_35816 = (state_35938[16]);var inst_35818 = (state_35938[17]);var inst_35824 = cljs.core._nth.call(null,inst_35816,inst_35818);var inst_35825 = cljs.core.nth.call(null,inst_35824,0,null);var inst_35826 = cljs.core.nth.call(null,inst_35824,1,null);var state_35938__$1 = (function (){var statearr_35967 = state_35938;(statearr_35967[24] = inst_35825);
return statearr_35967;
})();if(cljs.core.truth_(inst_35826))
{var statearr_35968_36045 = state_35938__$1;(statearr_35968_36045[1] = 13);
} else
{var statearr_35969_36046 = state_35938__$1;(statearr_35969_36046[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 42))
{var state_35938__$1 = state_35938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35938__$1,45,dchan);
} else
{if((state_val_35939 === 11))
{var inst_35835 = (state_35938[25]);var inst_35815 = (state_35938[14]);var inst_35835__$1 = cljs.core.seq.call(null,inst_35815);var state_35938__$1 = (function (){var statearr_35970 = state_35938;(statearr_35970[25] = inst_35835__$1);
return statearr_35970;
})();if(inst_35835__$1)
{var statearr_35971_36047 = state_35938__$1;(statearr_35971_36047[1] = 16);
} else
{var statearr_35972_36048 = state_35938__$1;(statearr_35972_36048[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 43))
{var state_35938__$1 = state_35938;var statearr_35973_36049 = state_35938__$1;(statearr_35973_36049[2] = null);
(statearr_35973_36049[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 12))
{var inst_35861 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35974_36050 = state_35938__$1;(statearr_35974_36050[2] = inst_35861);
(statearr_35974_36050[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 44))
{var inst_35931 = (state_35938[2]);var state_35938__$1 = (function (){var statearr_35975 = state_35938;(statearr_35975[26] = inst_35931);
return statearr_35975;
})();var statearr_35976_36051 = state_35938__$1;(statearr_35976_36051[2] = null);
(statearr_35976_36051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 13))
{var inst_35825 = (state_35938[24]);var inst_35828 = cljs.core.async.close_BANG_.call(null,inst_35825);var state_35938__$1 = state_35938;var statearr_35977_36052 = state_35938__$1;(statearr_35977_36052[2] = inst_35828);
(statearr_35977_36052[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 45))
{var inst_35928 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35981_36053 = state_35938__$1;(statearr_35981_36053[2] = inst_35928);
(statearr_35981_36053[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 14))
{var state_35938__$1 = state_35938;var statearr_35982_36054 = state_35938__$1;(statearr_35982_36054[2] = null);
(statearr_35982_36054[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 15))
{var inst_35815 = (state_35938[14]);var inst_35817 = (state_35938[15]);var inst_35816 = (state_35938[16]);var inst_35818 = (state_35938[17]);var inst_35831 = (state_35938[2]);var inst_35832 = (inst_35818 + 1);var tmp35978 = inst_35815;var tmp35979 = inst_35817;var tmp35980 = inst_35816;var inst_35815__$1 = tmp35978;var inst_35816__$1 = tmp35980;var inst_35817__$1 = tmp35979;var inst_35818__$1 = inst_35832;var state_35938__$1 = (function (){var statearr_35983 = state_35938;(statearr_35983[14] = inst_35815__$1);
(statearr_35983[15] = inst_35817__$1);
(statearr_35983[16] = inst_35816__$1);
(statearr_35983[27] = inst_35831);
(statearr_35983[17] = inst_35818__$1);
return statearr_35983;
})();var statearr_35984_36055 = state_35938__$1;(statearr_35984_36055[2] = null);
(statearr_35984_36055[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 16))
{var inst_35835 = (state_35938[25]);var inst_35837 = cljs.core.chunked_seq_QMARK_.call(null,inst_35835);var state_35938__$1 = state_35938;if(inst_35837)
{var statearr_35985_36056 = state_35938__$1;(statearr_35985_36056[1] = 19);
} else
{var statearr_35986_36057 = state_35938__$1;(statearr_35986_36057[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 17))
{var state_35938__$1 = state_35938;var statearr_35987_36058 = state_35938__$1;(statearr_35987_36058[2] = null);
(statearr_35987_36058[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 18))
{var inst_35859 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35988_36059 = state_35938__$1;(statearr_35988_36059[2] = inst_35859);
(statearr_35988_36059[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 19))
{var inst_35835 = (state_35938[25]);var inst_35839 = cljs.core.chunk_first.call(null,inst_35835);var inst_35840 = cljs.core.chunk_rest.call(null,inst_35835);var inst_35841 = cljs.core.count.call(null,inst_35839);var inst_35815 = inst_35840;var inst_35816 = inst_35839;var inst_35817 = inst_35841;var inst_35818 = 0;var state_35938__$1 = (function (){var statearr_35989 = state_35938;(statearr_35989[14] = inst_35815);
(statearr_35989[15] = inst_35817);
(statearr_35989[16] = inst_35816);
(statearr_35989[17] = inst_35818);
return statearr_35989;
})();var statearr_35990_36060 = state_35938__$1;(statearr_35990_36060[2] = null);
(statearr_35990_36060[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 20))
{var inst_35835 = (state_35938[25]);var inst_35845 = cljs.core.first.call(null,inst_35835);var inst_35846 = cljs.core.nth.call(null,inst_35845,0,null);var inst_35847 = cljs.core.nth.call(null,inst_35845,1,null);var state_35938__$1 = (function (){var statearr_35991 = state_35938;(statearr_35991[28] = inst_35846);
return statearr_35991;
})();if(cljs.core.truth_(inst_35847))
{var statearr_35992_36061 = state_35938__$1;(statearr_35992_36061[1] = 22);
} else
{var statearr_35993_36062 = state_35938__$1;(statearr_35993_36062[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 21))
{var inst_35856 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_35994_36063 = state_35938__$1;(statearr_35994_36063[2] = inst_35856);
(statearr_35994_36063[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 22))
{var inst_35846 = (state_35938[28]);var inst_35849 = cljs.core.async.close_BANG_.call(null,inst_35846);var state_35938__$1 = state_35938;var statearr_35995_36064 = state_35938__$1;(statearr_35995_36064[2] = inst_35849);
(statearr_35995_36064[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 23))
{var state_35938__$1 = state_35938;var statearr_35996_36065 = state_35938__$1;(statearr_35996_36065[2] = null);
(statearr_35996_36065[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 24))
{var inst_35835 = (state_35938[25]);var inst_35852 = (state_35938[2]);var inst_35853 = cljs.core.next.call(null,inst_35835);var inst_35815 = inst_35853;var inst_35816 = null;var inst_35817 = 0;var inst_35818 = 0;var state_35938__$1 = (function (){var statearr_35997 = state_35938;(statearr_35997[29] = inst_35852);
(statearr_35997[14] = inst_35815);
(statearr_35997[15] = inst_35817);
(statearr_35997[16] = inst_35816);
(statearr_35997[17] = inst_35818);
return statearr_35997;
})();var statearr_35998_36066 = state_35938__$1;(statearr_35998_36066[2] = null);
(statearr_35998_36066[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 25))
{var inst_35876 = (state_35938[10]);var inst_35877 = (state_35938[11]);var inst_35879 = (inst_35877 < inst_35876);var inst_35880 = inst_35879;var state_35938__$1 = state_35938;if(cljs.core.truth_(inst_35880))
{var statearr_35999_36067 = state_35938__$1;(statearr_35999_36067[1] = 27);
} else
{var statearr_36000_36068 = state_35938__$1;(statearr_36000_36068[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 26))
{var inst_35866 = (state_35938[19]);var inst_35924 = (state_35938[2]);var inst_35925 = cljs.core.seq.call(null,inst_35866);var state_35938__$1 = (function (){var statearr_36001 = state_35938;(statearr_36001[30] = inst_35924);
return statearr_36001;
})();if(inst_35925)
{var statearr_36002_36069 = state_35938__$1;(statearr_36002_36069[1] = 42);
} else
{var statearr_36003_36070 = state_35938__$1;(statearr_36003_36070[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 27))
{var inst_35877 = (state_35938[11]);var inst_35875 = (state_35938[12]);var inst_35882 = cljs.core._nth.call(null,inst_35875,inst_35877);var state_35938__$1 = (function (){var statearr_36004 = state_35938;(statearr_36004[8] = inst_35882);
return statearr_36004;
})();var statearr_36005_36071 = state_35938__$1;(statearr_36005_36071[2] = null);
(statearr_36005_36071[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 28))
{var inst_35895 = (state_35938[9]);var inst_35874 = (state_35938[13]);var inst_35895__$1 = cljs.core.seq.call(null,inst_35874);var state_35938__$1 = (function (){var statearr_36009 = state_35938;(statearr_36009[9] = inst_35895__$1);
return statearr_36009;
})();if(inst_35895__$1)
{var statearr_36010_36072 = state_35938__$1;(statearr_36010_36072[1] = 33);
} else
{var statearr_36011_36073 = state_35938__$1;(statearr_36011_36073[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 29))
{var inst_35922 = (state_35938[2]);var state_35938__$1 = state_35938;var statearr_36012_36074 = state_35938__$1;(statearr_36012_36074[2] = inst_35922);
(statearr_36012_36074[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 30))
{var inst_35876 = (state_35938[10]);var inst_35877 = (state_35938[11]);var inst_35875 = (state_35938[12]);var inst_35874 = (state_35938[13]);var inst_35891 = (state_35938[2]);var inst_35892 = (inst_35877 + 1);var tmp36006 = inst_35876;var tmp36007 = inst_35875;var tmp36008 = inst_35874;var inst_35874__$1 = tmp36008;var inst_35875__$1 = tmp36007;var inst_35876__$1 = tmp36006;var inst_35877__$1 = inst_35892;var state_35938__$1 = (function (){var statearr_36013 = state_35938;(statearr_36013[31] = inst_35891);
(statearr_36013[10] = inst_35876__$1);
(statearr_36013[11] = inst_35877__$1);
(statearr_36013[12] = inst_35875__$1);
(statearr_36013[13] = inst_35874__$1);
return statearr_36013;
})();var statearr_36014_36075 = state_35938__$1;(statearr_36014_36075[2] = null);
(statearr_36014_36075[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35939 === 31))
{var inst_35882 = (state_35938[8]);var inst_35883 = (state_35938[2]);var inst_35884 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35885 = cljs.core.async.untap_STAR_.call(null,m,inst_35882);var state_35938__$1 = (function (){var statearr_36015 = state_35938;(statearr_36015[32] = inst_35884);
(statearr_36015[33] = inst_35883);
return statearr_36015;
})();var statearr_36016_36076 = state_35938__$1;(statearr_36016_36076[2] = inst_35885);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36020[0] = state_machine__5507__auto__);
(statearr_36020[1] = 1);
return statearr_36020;
});
var state_machine__5507__auto____1 = (function (state_35938){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35938);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36021){if((e36021 instanceof Object))
{var ex__5510__auto__ = e36021;var statearr_36022_36077 = state_35938;(statearr_36022_36077[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35938);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36078 = state_35938;
state_35938 = G__36078;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35938){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36023 = f__5522__auto__.call(null);(statearr_36023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36024);
return statearr_36023;
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
cljs.core.async.Mix = (function (){var obj36080 = {};return obj36080;
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
;var m = (function (){if(typeof cljs.core.async.t36190 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36190 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36191){
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
this.meta36191 = meta36191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36190.cljs$lang$type = true;
cljs.core.async.t36190.cljs$lang$ctorStr = "cljs.core.async/t36190";
cljs.core.async.t36190.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36190");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36190.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36192){var self__ = this;
var _36192__$1 = this;return self__.meta36191;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36192,meta36191__$1){var self__ = this;
var _36192__$1 = this;return (new cljs.core.async.t36190(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36191__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36190 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36190(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36191){return (new cljs.core.async.t36190(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36191));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36190(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___36299 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36257){var state_val_36258 = (state_36257[1]);if((state_val_36258 === 1))
{var inst_36196 = (state_36257[7]);var inst_36196__$1 = calc_state.call(null);var inst_36197 = cljs.core.seq_QMARK_.call(null,inst_36196__$1);var state_36257__$1 = (function (){var statearr_36259 = state_36257;(statearr_36259[7] = inst_36196__$1);
return statearr_36259;
})();if(inst_36197)
{var statearr_36260_36300 = state_36257__$1;(statearr_36260_36300[1] = 2);
} else
{var statearr_36261_36301 = state_36257__$1;(statearr_36261_36301[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 2))
{var inst_36196 = (state_36257[7]);var inst_36199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36196);var state_36257__$1 = state_36257;var statearr_36262_36302 = state_36257__$1;(statearr_36262_36302[2] = inst_36199);
(statearr_36262_36302[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 3))
{var inst_36196 = (state_36257[7]);var state_36257__$1 = state_36257;var statearr_36263_36303 = state_36257__$1;(statearr_36263_36303[2] = inst_36196);
(statearr_36263_36303[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 4))
{var inst_36196 = (state_36257[7]);var inst_36202 = (state_36257[2]);var inst_36203 = cljs.core.get.call(null,inst_36202,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36204 = cljs.core.get.call(null,inst_36202,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36205 = cljs.core.get.call(null,inst_36202,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36206 = inst_36196;var state_36257__$1 = (function (){var statearr_36264 = state_36257;(statearr_36264[8] = inst_36206);
(statearr_36264[9] = inst_36205);
(statearr_36264[10] = inst_36204);
(statearr_36264[11] = inst_36203);
return statearr_36264;
})();var statearr_36265_36304 = state_36257__$1;(statearr_36265_36304[2] = null);
(statearr_36265_36304[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 5))
{var inst_36206 = (state_36257[8]);var inst_36209 = cljs.core.seq_QMARK_.call(null,inst_36206);var state_36257__$1 = state_36257;if(inst_36209)
{var statearr_36266_36305 = state_36257__$1;(statearr_36266_36305[1] = 7);
} else
{var statearr_36267_36306 = state_36257__$1;(statearr_36267_36306[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 6))
{var inst_36255 = (state_36257[2]);var state_36257__$1 = state_36257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36257__$1,inst_36255);
} else
{if((state_val_36258 === 7))
{var inst_36206 = (state_36257[8]);var inst_36211 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36206);var state_36257__$1 = state_36257;var statearr_36268_36307 = state_36257__$1;(statearr_36268_36307[2] = inst_36211);
(statearr_36268_36307[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 8))
{var inst_36206 = (state_36257[8]);var state_36257__$1 = state_36257;var statearr_36269_36308 = state_36257__$1;(statearr_36269_36308[2] = inst_36206);
(statearr_36269_36308[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 9))
{var inst_36214 = (state_36257[12]);var inst_36214__$1 = (state_36257[2]);var inst_36215 = cljs.core.get.call(null,inst_36214__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36216 = cljs.core.get.call(null,inst_36214__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36217 = cljs.core.get.call(null,inst_36214__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36257__$1 = (function (){var statearr_36270 = state_36257;(statearr_36270[13] = inst_36217);
(statearr_36270[14] = inst_36216);
(statearr_36270[12] = inst_36214__$1);
return statearr_36270;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36257__$1,10,inst_36215);
} else
{if((state_val_36258 === 10))
{var inst_36222 = (state_36257[15]);var inst_36221 = (state_36257[16]);var inst_36220 = (state_36257[2]);var inst_36221__$1 = cljs.core.nth.call(null,inst_36220,0,null);var inst_36222__$1 = cljs.core.nth.call(null,inst_36220,1,null);var inst_36223 = (inst_36221__$1 == null);var inst_36224 = cljs.core._EQ_.call(null,inst_36222__$1,change);var inst_36225 = (inst_36223) || (inst_36224);var state_36257__$1 = (function (){var statearr_36271 = state_36257;(statearr_36271[15] = inst_36222__$1);
(statearr_36271[16] = inst_36221__$1);
return statearr_36271;
})();if(cljs.core.truth_(inst_36225))
{var statearr_36272_36309 = state_36257__$1;(statearr_36272_36309[1] = 11);
} else
{var statearr_36273_36310 = state_36257__$1;(statearr_36273_36310[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 11))
{var inst_36221 = (state_36257[16]);var inst_36227 = (inst_36221 == null);var state_36257__$1 = state_36257;if(cljs.core.truth_(inst_36227))
{var statearr_36274_36311 = state_36257__$1;(statearr_36274_36311[1] = 14);
} else
{var statearr_36275_36312 = state_36257__$1;(statearr_36275_36312[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 12))
{var inst_36222 = (state_36257[15]);var inst_36236 = (state_36257[17]);var inst_36217 = (state_36257[13]);var inst_36236__$1 = inst_36217.call(null,inst_36222);var state_36257__$1 = (function (){var statearr_36276 = state_36257;(statearr_36276[17] = inst_36236__$1);
return statearr_36276;
})();if(cljs.core.truth_(inst_36236__$1))
{var statearr_36277_36313 = state_36257__$1;(statearr_36277_36313[1] = 17);
} else
{var statearr_36278_36314 = state_36257__$1;(statearr_36278_36314[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 13))
{var inst_36253 = (state_36257[2]);var state_36257__$1 = state_36257;var statearr_36279_36315 = state_36257__$1;(statearr_36279_36315[2] = inst_36253);
(statearr_36279_36315[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 14))
{var inst_36222 = (state_36257[15]);var inst_36229 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36222);var state_36257__$1 = state_36257;var statearr_36280_36316 = state_36257__$1;(statearr_36280_36316[2] = inst_36229);
(statearr_36280_36316[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 15))
{var state_36257__$1 = state_36257;var statearr_36281_36317 = state_36257__$1;(statearr_36281_36317[2] = null);
(statearr_36281_36317[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 16))
{var inst_36232 = (state_36257[2]);var inst_36233 = calc_state.call(null);var inst_36206 = inst_36233;var state_36257__$1 = (function (){var statearr_36282 = state_36257;(statearr_36282[18] = inst_36232);
(statearr_36282[8] = inst_36206);
return statearr_36282;
})();var statearr_36283_36318 = state_36257__$1;(statearr_36283_36318[2] = null);
(statearr_36283_36318[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 17))
{var inst_36236 = (state_36257[17]);var state_36257__$1 = state_36257;var statearr_36284_36319 = state_36257__$1;(statearr_36284_36319[2] = inst_36236);
(statearr_36284_36319[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 18))
{var inst_36222 = (state_36257[15]);var inst_36217 = (state_36257[13]);var inst_36216 = (state_36257[14]);var inst_36239 = cljs.core.empty_QMARK_.call(null,inst_36217);var inst_36240 = inst_36216.call(null,inst_36222);var inst_36241 = cljs.core.not.call(null,inst_36240);var inst_36242 = (inst_36239) && (inst_36241);var state_36257__$1 = state_36257;var statearr_36285_36320 = state_36257__$1;(statearr_36285_36320[2] = inst_36242);
(statearr_36285_36320[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 19))
{var inst_36244 = (state_36257[2]);var state_36257__$1 = state_36257;if(cljs.core.truth_(inst_36244))
{var statearr_36286_36321 = state_36257__$1;(statearr_36286_36321[1] = 20);
} else
{var statearr_36287_36322 = state_36257__$1;(statearr_36287_36322[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 20))
{var inst_36221 = (state_36257[16]);var state_36257__$1 = state_36257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36257__$1,23,out,inst_36221);
} else
{if((state_val_36258 === 21))
{var state_36257__$1 = state_36257;var statearr_36288_36323 = state_36257__$1;(statearr_36288_36323[2] = null);
(statearr_36288_36323[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 22))
{var inst_36214 = (state_36257[12]);var inst_36250 = (state_36257[2]);var inst_36206 = inst_36214;var state_36257__$1 = (function (){var statearr_36289 = state_36257;(statearr_36289[8] = inst_36206);
(statearr_36289[19] = inst_36250);
return statearr_36289;
})();var statearr_36290_36324 = state_36257__$1;(statearr_36290_36324[2] = null);
(statearr_36290_36324[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36258 === 23))
{var inst_36247 = (state_36257[2]);var state_36257__$1 = state_36257;var statearr_36291_36325 = state_36257__$1;(statearr_36291_36325[2] = inst_36247);
(statearr_36291_36325[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_36295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36295[0] = state_machine__5507__auto__);
(statearr_36295[1] = 1);
return statearr_36295;
});
var state_machine__5507__auto____1 = (function (state_36257){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36257);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36296){if((e36296 instanceof Object))
{var ex__5510__auto__ = e36296;var statearr_36297_36326 = state_36257;(statearr_36297_36326[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36257);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36327 = state_36257;
state_36257 = G__36327;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36257){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36298 = f__5522__auto__.call(null);(statearr_36298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36299);
return statearr_36298;
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
cljs.core.async.Pub = (function (){var obj36329 = {};return obj36329;
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
return (function (p1__36330_SHARP_){if(cljs.core.truth_(p1__36330_SHARP_.call(null,topic)))
{return p1__36330_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36330_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36455 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36456){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36456 = meta36456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36455.cljs$lang$type = true;
cljs.core.async.t36455.cljs$lang$ctorStr = "cljs.core.async/t36455";
cljs.core.async.t36455.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36455");
});})(mults,ensure_mult))
;
cljs.core.async.t36455.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36455.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36455.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36455.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36455.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36455.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36457){var self__ = this;
var _36457__$1 = this;return self__.meta36456;
});})(mults,ensure_mult))
;
cljs.core.async.t36455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36457,meta36456__$1){var self__ = this;
var _36457__$1 = this;return (new cljs.core.async.t36455(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36456__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36455 = ((function (mults,ensure_mult){
return (function __GT_t36455(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36456){return (new cljs.core.async.t36455(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36456));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36455(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36579 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36531){var state_val_36532 = (state_36531[1]);if((state_val_36532 === 1))
{var state_36531__$1 = state_36531;var statearr_36533_36580 = state_36531__$1;(statearr_36533_36580[2] = null);
(statearr_36533_36580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 2))
{var state_36531__$1 = state_36531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36531__$1,4,ch);
} else
{if((state_val_36532 === 3))
{var inst_36529 = (state_36531[2]);var state_36531__$1 = state_36531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36531__$1,inst_36529);
} else
{if((state_val_36532 === 4))
{var inst_36460 = (state_36531[7]);var inst_36460__$1 = (state_36531[2]);var inst_36461 = (inst_36460__$1 == null);var state_36531__$1 = (function (){var statearr_36534 = state_36531;(statearr_36534[7] = inst_36460__$1);
return statearr_36534;
})();if(cljs.core.truth_(inst_36461))
{var statearr_36535_36581 = state_36531__$1;(statearr_36535_36581[1] = 5);
} else
{var statearr_36536_36582 = state_36531__$1;(statearr_36536_36582[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 5))
{var inst_36467 = cljs.core.deref.call(null,mults);var inst_36468 = cljs.core.vals.call(null,inst_36467);var inst_36469 = cljs.core.seq.call(null,inst_36468);var inst_36470 = inst_36469;var inst_36471 = null;var inst_36472 = 0;var inst_36473 = 0;var state_36531__$1 = (function (){var statearr_36537 = state_36531;(statearr_36537[8] = inst_36473);
(statearr_36537[9] = inst_36470);
(statearr_36537[10] = inst_36472);
(statearr_36537[11] = inst_36471);
return statearr_36537;
})();var statearr_36538_36583 = state_36531__$1;(statearr_36538_36583[2] = null);
(statearr_36538_36583[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 6))
{var inst_36510 = (state_36531[12]);var inst_36460 = (state_36531[7]);var inst_36508 = (state_36531[13]);var inst_36508__$1 = topic_fn.call(null,inst_36460);var inst_36509 = cljs.core.deref.call(null,mults);var inst_36510__$1 = cljs.core.get.call(null,inst_36509,inst_36508__$1);var state_36531__$1 = (function (){var statearr_36539 = state_36531;(statearr_36539[12] = inst_36510__$1);
(statearr_36539[13] = inst_36508__$1);
return statearr_36539;
})();if(cljs.core.truth_(inst_36510__$1))
{var statearr_36540_36584 = state_36531__$1;(statearr_36540_36584[1] = 19);
} else
{var statearr_36541_36585 = state_36531__$1;(statearr_36541_36585[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 7))
{var inst_36527 = (state_36531[2]);var state_36531__$1 = state_36531;var statearr_36542_36586 = state_36531__$1;(statearr_36542_36586[2] = inst_36527);
(statearr_36542_36586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 8))
{var inst_36473 = (state_36531[8]);var inst_36472 = (state_36531[10]);var inst_36475 = (inst_36473 < inst_36472);var inst_36476 = inst_36475;var state_36531__$1 = state_36531;if(cljs.core.truth_(inst_36476))
{var statearr_36546_36587 = state_36531__$1;(statearr_36546_36587[1] = 10);
} else
{var statearr_36547_36588 = state_36531__$1;(statearr_36547_36588[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 9))
{var inst_36506 = (state_36531[2]);var state_36531__$1 = state_36531;var statearr_36548_36589 = state_36531__$1;(statearr_36548_36589[2] = inst_36506);
(statearr_36548_36589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 10))
{var inst_36473 = (state_36531[8]);var inst_36470 = (state_36531[9]);var inst_36472 = (state_36531[10]);var inst_36471 = (state_36531[11]);var inst_36478 = cljs.core._nth.call(null,inst_36471,inst_36473);var inst_36479 = cljs.core.async.muxch_STAR_.call(null,inst_36478);var inst_36480 = cljs.core.async.close_BANG_.call(null,inst_36479);var inst_36481 = (inst_36473 + 1);var tmp36543 = inst_36470;var tmp36544 = inst_36472;var tmp36545 = inst_36471;var inst_36470__$1 = tmp36543;var inst_36471__$1 = tmp36545;var inst_36472__$1 = tmp36544;var inst_36473__$1 = inst_36481;var state_36531__$1 = (function (){var statearr_36549 = state_36531;(statearr_36549[8] = inst_36473__$1);
(statearr_36549[9] = inst_36470__$1);
(statearr_36549[10] = inst_36472__$1);
(statearr_36549[11] = inst_36471__$1);
(statearr_36549[14] = inst_36480);
return statearr_36549;
})();var statearr_36550_36590 = state_36531__$1;(statearr_36550_36590[2] = null);
(statearr_36550_36590[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 11))
{var inst_36470 = (state_36531[9]);var inst_36484 = (state_36531[15]);var inst_36484__$1 = cljs.core.seq.call(null,inst_36470);var state_36531__$1 = (function (){var statearr_36551 = state_36531;(statearr_36551[15] = inst_36484__$1);
return statearr_36551;
})();if(inst_36484__$1)
{var statearr_36552_36591 = state_36531__$1;(statearr_36552_36591[1] = 13);
} else
{var statearr_36553_36592 = state_36531__$1;(statearr_36553_36592[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 12))
{var inst_36504 = (state_36531[2]);var state_36531__$1 = state_36531;var statearr_36554_36593 = state_36531__$1;(statearr_36554_36593[2] = inst_36504);
(statearr_36554_36593[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 13))
{var inst_36484 = (state_36531[15]);var inst_36486 = cljs.core.chunked_seq_QMARK_.call(null,inst_36484);var state_36531__$1 = state_36531;if(inst_36486)
{var statearr_36555_36594 = state_36531__$1;(statearr_36555_36594[1] = 16);
} else
{var statearr_36556_36595 = state_36531__$1;(statearr_36556_36595[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 14))
{var state_36531__$1 = state_36531;var statearr_36557_36596 = state_36531__$1;(statearr_36557_36596[2] = null);
(statearr_36557_36596[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 15))
{var inst_36502 = (state_36531[2]);var state_36531__$1 = state_36531;var statearr_36558_36597 = state_36531__$1;(statearr_36558_36597[2] = inst_36502);
(statearr_36558_36597[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 16))
{var inst_36484 = (state_36531[15]);var inst_36488 = cljs.core.chunk_first.call(null,inst_36484);var inst_36489 = cljs.core.chunk_rest.call(null,inst_36484);var inst_36490 = cljs.core.count.call(null,inst_36488);var inst_36470 = inst_36489;var inst_36471 = inst_36488;var inst_36472 = inst_36490;var inst_36473 = 0;var state_36531__$1 = (function (){var statearr_36559 = state_36531;(statearr_36559[8] = inst_36473);
(statearr_36559[9] = inst_36470);
(statearr_36559[10] = inst_36472);
(statearr_36559[11] = inst_36471);
return statearr_36559;
})();var statearr_36560_36598 = state_36531__$1;(statearr_36560_36598[2] = null);
(statearr_36560_36598[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 17))
{var inst_36484 = (state_36531[15]);var inst_36493 = cljs.core.first.call(null,inst_36484);var inst_36494 = cljs.core.async.muxch_STAR_.call(null,inst_36493);var inst_36495 = cljs.core.async.close_BANG_.call(null,inst_36494);var inst_36496 = cljs.core.next.call(null,inst_36484);var inst_36470 = inst_36496;var inst_36471 = null;var inst_36472 = 0;var inst_36473 = 0;var state_36531__$1 = (function (){var statearr_36561 = state_36531;(statearr_36561[8] = inst_36473);
(statearr_36561[9] = inst_36470);
(statearr_36561[10] = inst_36472);
(statearr_36561[11] = inst_36471);
(statearr_36561[16] = inst_36495);
return statearr_36561;
})();var statearr_36562_36599 = state_36531__$1;(statearr_36562_36599[2] = null);
(statearr_36562_36599[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 18))
{var inst_36499 = (state_36531[2]);var state_36531__$1 = state_36531;var statearr_36563_36600 = state_36531__$1;(statearr_36563_36600[2] = inst_36499);
(statearr_36563_36600[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 19))
{var state_36531__$1 = state_36531;var statearr_36564_36601 = state_36531__$1;(statearr_36564_36601[2] = null);
(statearr_36564_36601[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 20))
{var state_36531__$1 = state_36531;var statearr_36565_36602 = state_36531__$1;(statearr_36565_36602[2] = null);
(statearr_36565_36602[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 21))
{var inst_36524 = (state_36531[2]);var state_36531__$1 = (function (){var statearr_36566 = state_36531;(statearr_36566[17] = inst_36524);
return statearr_36566;
})();var statearr_36567_36603 = state_36531__$1;(statearr_36567_36603[2] = null);
(statearr_36567_36603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 22))
{var inst_36521 = (state_36531[2]);var state_36531__$1 = state_36531;var statearr_36568_36604 = state_36531__$1;(statearr_36568_36604[2] = inst_36521);
(statearr_36568_36604[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 23))
{var inst_36508 = (state_36531[13]);var inst_36512 = (state_36531[2]);var inst_36513 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36508);var state_36531__$1 = (function (){var statearr_36569 = state_36531;(statearr_36569[18] = inst_36512);
return statearr_36569;
})();var statearr_36570_36605 = state_36531__$1;(statearr_36570_36605[2] = inst_36513);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36531__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36532 === 24))
{var inst_36510 = (state_36531[12]);var inst_36460 = (state_36531[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36531,23,Object,null,22);var inst_36517 = cljs.core.async.muxch_STAR_.call(null,inst_36510);var state_36531__$1 = state_36531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36531__$1,25,inst_36517,inst_36460);
} else
{if((state_val_36532 === 25))
{var inst_36519 = (state_36531[2]);var state_36531__$1 = state_36531;var statearr_36571_36606 = state_36531__$1;(statearr_36571_36606[2] = inst_36519);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36531__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36575[0] = state_machine__5507__auto__);
(statearr_36575[1] = 1);
return statearr_36575;
});
var state_machine__5507__auto____1 = (function (state_36531){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36531);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36576){if((e36576 instanceof Object))
{var ex__5510__auto__ = e36576;var statearr_36577_36607 = state_36531;(statearr_36577_36607[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36608 = state_36531;
state_36531 = G__36608;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36531){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36578 = f__5522__auto__.call(null);(statearr_36578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36579);
return statearr_36578;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36745 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36715){var state_val_36716 = (state_36715[1]);if((state_val_36716 === 1))
{var state_36715__$1 = state_36715;var statearr_36717_36746 = state_36715__$1;(statearr_36717_36746[2] = null);
(statearr_36717_36746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 2))
{var inst_36678 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36679 = 0;var state_36715__$1 = (function (){var statearr_36718 = state_36715;(statearr_36718[7] = inst_36678);
(statearr_36718[8] = inst_36679);
return statearr_36718;
})();var statearr_36719_36747 = state_36715__$1;(statearr_36719_36747[2] = null);
(statearr_36719_36747[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 3))
{var inst_36713 = (state_36715[2]);var state_36715__$1 = state_36715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36715__$1,inst_36713);
} else
{if((state_val_36716 === 4))
{var inst_36679 = (state_36715[8]);var inst_36681 = (inst_36679 < cnt);var state_36715__$1 = state_36715;if(cljs.core.truth_(inst_36681))
{var statearr_36720_36748 = state_36715__$1;(statearr_36720_36748[1] = 6);
} else
{var statearr_36721_36749 = state_36715__$1;(statearr_36721_36749[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 5))
{var inst_36699 = (state_36715[2]);var state_36715__$1 = (function (){var statearr_36722 = state_36715;(statearr_36722[9] = inst_36699);
return statearr_36722;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36715__$1,12,dchan);
} else
{if((state_val_36716 === 6))
{var state_36715__$1 = state_36715;var statearr_36723_36750 = state_36715__$1;(statearr_36723_36750[2] = null);
(statearr_36723_36750[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 7))
{var state_36715__$1 = state_36715;var statearr_36724_36751 = state_36715__$1;(statearr_36724_36751[2] = null);
(statearr_36724_36751[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 8))
{var inst_36697 = (state_36715[2]);var state_36715__$1 = state_36715;var statearr_36725_36752 = state_36715__$1;(statearr_36725_36752[2] = inst_36697);
(statearr_36725_36752[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 9))
{var inst_36679 = (state_36715[8]);var inst_36692 = (state_36715[2]);var inst_36693 = (inst_36679 + 1);var inst_36679__$1 = inst_36693;var state_36715__$1 = (function (){var statearr_36726 = state_36715;(statearr_36726[8] = inst_36679__$1);
(statearr_36726[10] = inst_36692);
return statearr_36726;
})();var statearr_36727_36753 = state_36715__$1;(statearr_36727_36753[2] = null);
(statearr_36727_36753[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 10))
{var inst_36683 = (state_36715[2]);var inst_36684 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36715__$1 = (function (){var statearr_36728 = state_36715;(statearr_36728[11] = inst_36683);
return statearr_36728;
})();var statearr_36729_36754 = state_36715__$1;(statearr_36729_36754[2] = inst_36684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36715__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 11))
{var inst_36679 = (state_36715[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36715,10,Object,null,9);var inst_36688 = chs__$1.call(null,inst_36679);var inst_36689 = done.call(null,inst_36679);var inst_36690 = cljs.core.async.take_BANG_.call(null,inst_36688,inst_36689);var state_36715__$1 = state_36715;var statearr_36730_36755 = state_36715__$1;(statearr_36730_36755[2] = inst_36690);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36715__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 12))
{var inst_36701 = (state_36715[12]);var inst_36701__$1 = (state_36715[2]);var inst_36702 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36701__$1);var state_36715__$1 = (function (){var statearr_36731 = state_36715;(statearr_36731[12] = inst_36701__$1);
return statearr_36731;
})();if(cljs.core.truth_(inst_36702))
{var statearr_36732_36756 = state_36715__$1;(statearr_36732_36756[1] = 13);
} else
{var statearr_36733_36757 = state_36715__$1;(statearr_36733_36757[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 13))
{var inst_36704 = cljs.core.async.close_BANG_.call(null,out);var state_36715__$1 = state_36715;var statearr_36734_36758 = state_36715__$1;(statearr_36734_36758[2] = inst_36704);
(statearr_36734_36758[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 14))
{var inst_36701 = (state_36715[12]);var inst_36706 = cljs.core.apply.call(null,f,inst_36701);var state_36715__$1 = state_36715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36715__$1,16,out,inst_36706);
} else
{if((state_val_36716 === 15))
{var inst_36711 = (state_36715[2]);var state_36715__$1 = state_36715;var statearr_36735_36759 = state_36715__$1;(statearr_36735_36759[2] = inst_36711);
(statearr_36735_36759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36716 === 16))
{var inst_36708 = (state_36715[2]);var state_36715__$1 = (function (){var statearr_36736 = state_36715;(statearr_36736[13] = inst_36708);
return statearr_36736;
})();var statearr_36737_36760 = state_36715__$1;(statearr_36737_36760[2] = null);
(statearr_36737_36760[1] = 2);
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
{var ex__5510__auto__ = e36742;var statearr_36743_36761 = state_36715;(statearr_36743_36761[5] = ex__5510__auto__);
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
var G__36762 = state_36715;
state_36715 = G__36762;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36846){var state_val_36847 = (state_36846[1]);if((state_val_36847 === 1))
{var inst_36817 = cljs.core.vec.call(null,chs);var inst_36818 = inst_36817;var state_36846__$1 = (function (){var statearr_36848 = state_36846;(statearr_36848[7] = inst_36818);
return statearr_36848;
})();var statearr_36849_36871 = state_36846__$1;(statearr_36849_36871[2] = null);
(statearr_36849_36871[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36847 === 2))
{var inst_36818 = (state_36846[7]);var inst_36820 = cljs.core.count.call(null,inst_36818);var inst_36821 = (inst_36820 > 0);var state_36846__$1 = state_36846;if(cljs.core.truth_(inst_36821))
{var statearr_36850_36872 = state_36846__$1;(statearr_36850_36872[1] = 4);
} else
{var statearr_36851_36873 = state_36846__$1;(statearr_36851_36873[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36847 === 3))
{var inst_36844 = (state_36846[2]);var state_36846__$1 = state_36846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36846__$1,inst_36844);
} else
{if((state_val_36847 === 4))
{var inst_36818 = (state_36846[7]);var state_36846__$1 = state_36846;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36846__$1,7,inst_36818);
} else
{if((state_val_36847 === 5))
{var inst_36840 = cljs.core.async.close_BANG_.call(null,out);var state_36846__$1 = state_36846;var statearr_36852_36874 = state_36846__$1;(statearr_36852_36874[2] = inst_36840);
(statearr_36852_36874[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36847 === 6))
{var inst_36842 = (state_36846[2]);var state_36846__$1 = state_36846;var statearr_36853_36875 = state_36846__$1;(statearr_36853_36875[2] = inst_36842);
(statearr_36853_36875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36847 === 7))
{var inst_36825 = (state_36846[8]);var inst_36826 = (state_36846[9]);var inst_36825__$1 = (state_36846[2]);var inst_36826__$1 = cljs.core.nth.call(null,inst_36825__$1,0,null);var inst_36827 = cljs.core.nth.call(null,inst_36825__$1,1,null);var inst_36828 = (inst_36826__$1 == null);var state_36846__$1 = (function (){var statearr_36854 = state_36846;(statearr_36854[8] = inst_36825__$1);
(statearr_36854[10] = inst_36827);
(statearr_36854[9] = inst_36826__$1);
return statearr_36854;
})();if(cljs.core.truth_(inst_36828))
{var statearr_36855_36876 = state_36846__$1;(statearr_36855_36876[1] = 8);
} else
{var statearr_36856_36877 = state_36846__$1;(statearr_36856_36877[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36847 === 8))
{var inst_36825 = (state_36846[8]);var inst_36818 = (state_36846[7]);var inst_36827 = (state_36846[10]);var inst_36826 = (state_36846[9]);var inst_36830 = (function (){var c = inst_36827;var v = inst_36826;var vec__36823 = inst_36825;var cs = inst_36818;return ((function (c,v,vec__36823,cs,inst_36825,inst_36818,inst_36827,inst_36826,state_val_36847){
return (function (p1__36763_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36763_SHARP_);
});
;})(c,v,vec__36823,cs,inst_36825,inst_36818,inst_36827,inst_36826,state_val_36847))
})();var inst_36831 = cljs.core.filterv.call(null,inst_36830,inst_36818);var inst_36818__$1 = inst_36831;var state_36846__$1 = (function (){var statearr_36857 = state_36846;(statearr_36857[7] = inst_36818__$1);
return statearr_36857;
})();var statearr_36858_36878 = state_36846__$1;(statearr_36858_36878[2] = null);
(statearr_36858_36878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36847 === 9))
{var inst_36826 = (state_36846[9]);var state_36846__$1 = state_36846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36846__$1,11,out,inst_36826);
} else
{if((state_val_36847 === 10))
{var inst_36838 = (state_36846[2]);var state_36846__$1 = state_36846;var statearr_36860_36879 = state_36846__$1;(statearr_36860_36879[2] = inst_36838);
(statearr_36860_36879[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36847 === 11))
{var inst_36818 = (state_36846[7]);var inst_36835 = (state_36846[2]);var tmp36859 = inst_36818;var inst_36818__$1 = tmp36859;var state_36846__$1 = (function (){var statearr_36861 = state_36846;(statearr_36861[7] = inst_36818__$1);
(statearr_36861[11] = inst_36835);
return statearr_36861;
})();var statearr_36862_36880 = state_36846__$1;(statearr_36862_36880[2] = null);
(statearr_36862_36880[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36866 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36866[0] = state_machine__5507__auto__);
(statearr_36866[1] = 1);
return statearr_36866;
});
var state_machine__5507__auto____1 = (function (state_36846){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36846);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36867){if((e36867 instanceof Object))
{var ex__5510__auto__ = e36867;var statearr_36868_36881 = state_36846;(statearr_36868_36881[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36882 = state_36846;
state_36846 = G__36882;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36846){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36869 = f__5522__auto__.call(null);(statearr_36869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36870);
return statearr_36869;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36975 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36952){var state_val_36953 = (state_36952[1]);if((state_val_36953 === 1))
{var inst_36929 = 0;var state_36952__$1 = (function (){var statearr_36954 = state_36952;(statearr_36954[7] = inst_36929);
return statearr_36954;
})();var statearr_36955_36976 = state_36952__$1;(statearr_36955_36976[2] = null);
(statearr_36955_36976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36953 === 2))
{var inst_36929 = (state_36952[7]);var inst_36931 = (inst_36929 < n);var state_36952__$1 = state_36952;if(cljs.core.truth_(inst_36931))
{var statearr_36956_36977 = state_36952__$1;(statearr_36956_36977[1] = 4);
} else
{var statearr_36957_36978 = state_36952__$1;(statearr_36957_36978[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36953 === 3))
{var inst_36949 = (state_36952[2]);var inst_36950 = cljs.core.async.close_BANG_.call(null,out);var state_36952__$1 = (function (){var statearr_36958 = state_36952;(statearr_36958[8] = inst_36949);
return statearr_36958;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36952__$1,inst_36950);
} else
{if((state_val_36953 === 4))
{var state_36952__$1 = state_36952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,7,ch);
} else
{if((state_val_36953 === 5))
{var state_36952__$1 = state_36952;var statearr_36959_36979 = state_36952__$1;(statearr_36959_36979[2] = null);
(statearr_36959_36979[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36953 === 6))
{var inst_36947 = (state_36952[2]);var state_36952__$1 = state_36952;var statearr_36960_36980 = state_36952__$1;(statearr_36960_36980[2] = inst_36947);
(statearr_36960_36980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36953 === 7))
{var inst_36934 = (state_36952[9]);var inst_36934__$1 = (state_36952[2]);var inst_36935 = (inst_36934__$1 == null);var inst_36936 = cljs.core.not.call(null,inst_36935);var state_36952__$1 = (function (){var statearr_36961 = state_36952;(statearr_36961[9] = inst_36934__$1);
return statearr_36961;
})();if(inst_36936)
{var statearr_36962_36981 = state_36952__$1;(statearr_36962_36981[1] = 8);
} else
{var statearr_36963_36982 = state_36952__$1;(statearr_36963_36982[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36953 === 8))
{var inst_36934 = (state_36952[9]);var state_36952__$1 = state_36952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36952__$1,11,out,inst_36934);
} else
{if((state_val_36953 === 9))
{var state_36952__$1 = state_36952;var statearr_36964_36983 = state_36952__$1;(statearr_36964_36983[2] = null);
(statearr_36964_36983[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36953 === 10))
{var inst_36944 = (state_36952[2]);var state_36952__$1 = state_36952;var statearr_36965_36984 = state_36952__$1;(statearr_36965_36984[2] = inst_36944);
(statearr_36965_36984[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36953 === 11))
{var inst_36929 = (state_36952[7]);var inst_36939 = (state_36952[2]);var inst_36940 = (inst_36929 + 1);var inst_36929__$1 = inst_36940;var state_36952__$1 = (function (){var statearr_36966 = state_36952;(statearr_36966[7] = inst_36929__$1);
(statearr_36966[10] = inst_36939);
return statearr_36966;
})();var statearr_36967_36985 = state_36952__$1;(statearr_36967_36985[2] = null);
(statearr_36967_36985[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36971 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36971[0] = state_machine__5507__auto__);
(statearr_36971[1] = 1);
return statearr_36971;
});
var state_machine__5507__auto____1 = (function (state_36952){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36952);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36972){if((e36972 instanceof Object))
{var ex__5510__auto__ = e36972;var statearr_36973_36986 = state_36952;(statearr_36973_36986[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36952);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36972;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36987 = state_36952;
state_36952 = G__36987;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36952){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36974 = f__5522__auto__.call(null);(statearr_36974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36975);
return statearr_36974;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37084 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37059){var state_val_37060 = (state_37059[1]);if((state_val_37060 === 1))
{var inst_37036 = null;var state_37059__$1 = (function (){var statearr_37061 = state_37059;(statearr_37061[7] = inst_37036);
return statearr_37061;
})();var statearr_37062_37085 = state_37059__$1;(statearr_37062_37085[2] = null);
(statearr_37062_37085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37060 === 2))
{var state_37059__$1 = state_37059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37059__$1,4,ch);
} else
{if((state_val_37060 === 3))
{var inst_37056 = (state_37059[2]);var inst_37057 = cljs.core.async.close_BANG_.call(null,out);var state_37059__$1 = (function (){var statearr_37063 = state_37059;(statearr_37063[8] = inst_37056);
return statearr_37063;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37059__$1,inst_37057);
} else
{if((state_val_37060 === 4))
{var inst_37039 = (state_37059[9]);var inst_37039__$1 = (state_37059[2]);var inst_37040 = (inst_37039__$1 == null);var inst_37041 = cljs.core.not.call(null,inst_37040);var state_37059__$1 = (function (){var statearr_37064 = state_37059;(statearr_37064[9] = inst_37039__$1);
return statearr_37064;
})();if(inst_37041)
{var statearr_37065_37086 = state_37059__$1;(statearr_37065_37086[1] = 5);
} else
{var statearr_37066_37087 = state_37059__$1;(statearr_37066_37087[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37060 === 5))
{var inst_37036 = (state_37059[7]);var inst_37039 = (state_37059[9]);var inst_37043 = cljs.core._EQ_.call(null,inst_37039,inst_37036);var state_37059__$1 = state_37059;if(inst_37043)
{var statearr_37067_37088 = state_37059__$1;(statearr_37067_37088[1] = 8);
} else
{var statearr_37068_37089 = state_37059__$1;(statearr_37068_37089[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37060 === 6))
{var state_37059__$1 = state_37059;var statearr_37070_37090 = state_37059__$1;(statearr_37070_37090[2] = null);
(statearr_37070_37090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37060 === 7))
{var inst_37054 = (state_37059[2]);var state_37059__$1 = state_37059;var statearr_37071_37091 = state_37059__$1;(statearr_37071_37091[2] = inst_37054);
(statearr_37071_37091[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37060 === 8))
{var inst_37036 = (state_37059[7]);var tmp37069 = inst_37036;var inst_37036__$1 = tmp37069;var state_37059__$1 = (function (){var statearr_37072 = state_37059;(statearr_37072[7] = inst_37036__$1);
return statearr_37072;
})();var statearr_37073_37092 = state_37059__$1;(statearr_37073_37092[2] = null);
(statearr_37073_37092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37060 === 9))
{var inst_37039 = (state_37059[9]);var state_37059__$1 = state_37059;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37059__$1,11,out,inst_37039);
} else
{if((state_val_37060 === 10))
{var inst_37051 = (state_37059[2]);var state_37059__$1 = state_37059;var statearr_37074_37093 = state_37059__$1;(statearr_37074_37093[2] = inst_37051);
(statearr_37074_37093[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37060 === 11))
{var inst_37039 = (state_37059[9]);var inst_37048 = (state_37059[2]);var inst_37036 = inst_37039;var state_37059__$1 = (function (){var statearr_37075 = state_37059;(statearr_37075[7] = inst_37036);
(statearr_37075[10] = inst_37048);
return statearr_37075;
})();var statearr_37076_37094 = state_37059__$1;(statearr_37076_37094[2] = null);
(statearr_37076_37094[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37080 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37080[0] = state_machine__5507__auto__);
(statearr_37080[1] = 1);
return statearr_37080;
});
var state_machine__5507__auto____1 = (function (state_37059){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37059);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37081){if((e37081 instanceof Object))
{var ex__5510__auto__ = e37081;var statearr_37082_37095 = state_37059;(statearr_37082_37095[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37059);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37096 = state_37059;
state_37059 = G__37096;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37059){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37083 = f__5522__auto__.call(null);(statearr_37083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37084);
return statearr_37083;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37201){var state_val_37202 = (state_37201[1]);if((state_val_37202 === 1))
{var inst_37164 = (new Array(n));var inst_37165 = inst_37164;var inst_37166 = 0;var state_37201__$1 = (function (){var statearr_37203 = state_37201;(statearr_37203[7] = inst_37166);
(statearr_37203[8] = inst_37165);
return statearr_37203;
})();var statearr_37204_37232 = state_37201__$1;(statearr_37204_37232[2] = null);
(statearr_37204_37232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 2))
{var state_37201__$1 = state_37201;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37201__$1,4,ch);
} else
{if((state_val_37202 === 3))
{var inst_37199 = (state_37201[2]);var state_37201__$1 = state_37201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37201__$1,inst_37199);
} else
{if((state_val_37202 === 4))
{var inst_37169 = (state_37201[9]);var inst_37169__$1 = (state_37201[2]);var inst_37170 = (inst_37169__$1 == null);var inst_37171 = cljs.core.not.call(null,inst_37170);var state_37201__$1 = (function (){var statearr_37205 = state_37201;(statearr_37205[9] = inst_37169__$1);
return statearr_37205;
})();if(inst_37171)
{var statearr_37206_37233 = state_37201__$1;(statearr_37206_37233[1] = 5);
} else
{var statearr_37207_37234 = state_37201__$1;(statearr_37207_37234[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 5))
{var inst_37169 = (state_37201[9]);var inst_37166 = (state_37201[7]);var inst_37165 = (state_37201[8]);var inst_37174 = (state_37201[10]);var inst_37173 = (inst_37165[inst_37166] = inst_37169);var inst_37174__$1 = (inst_37166 + 1);var inst_37175 = (inst_37174__$1 < n);var state_37201__$1 = (function (){var statearr_37208 = state_37201;(statearr_37208[10] = inst_37174__$1);
(statearr_37208[11] = inst_37173);
return statearr_37208;
})();if(cljs.core.truth_(inst_37175))
{var statearr_37209_37235 = state_37201__$1;(statearr_37209_37235[1] = 8);
} else
{var statearr_37210_37236 = state_37201__$1;(statearr_37210_37236[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 6))
{var inst_37166 = (state_37201[7]);var inst_37187 = (inst_37166 > 0);var state_37201__$1 = state_37201;if(cljs.core.truth_(inst_37187))
{var statearr_37212_37237 = state_37201__$1;(statearr_37212_37237[1] = 12);
} else
{var statearr_37213_37238 = state_37201__$1;(statearr_37213_37238[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 7))
{var inst_37197 = (state_37201[2]);var state_37201__$1 = state_37201;var statearr_37214_37239 = state_37201__$1;(statearr_37214_37239[2] = inst_37197);
(statearr_37214_37239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 8))
{var inst_37165 = (state_37201[8]);var inst_37174 = (state_37201[10]);var tmp37211 = inst_37165;var inst_37165__$1 = tmp37211;var inst_37166 = inst_37174;var state_37201__$1 = (function (){var statearr_37215 = state_37201;(statearr_37215[7] = inst_37166);
(statearr_37215[8] = inst_37165__$1);
return statearr_37215;
})();var statearr_37216_37240 = state_37201__$1;(statearr_37216_37240[2] = null);
(statearr_37216_37240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 9))
{var inst_37165 = (state_37201[8]);var inst_37179 = cljs.core.vec.call(null,inst_37165);var state_37201__$1 = state_37201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37201__$1,11,out,inst_37179);
} else
{if((state_val_37202 === 10))
{var inst_37185 = (state_37201[2]);var state_37201__$1 = state_37201;var statearr_37217_37241 = state_37201__$1;(statearr_37217_37241[2] = inst_37185);
(statearr_37217_37241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 11))
{var inst_37181 = (state_37201[2]);var inst_37182 = (new Array(n));var inst_37165 = inst_37182;var inst_37166 = 0;var state_37201__$1 = (function (){var statearr_37218 = state_37201;(statearr_37218[12] = inst_37181);
(statearr_37218[7] = inst_37166);
(statearr_37218[8] = inst_37165);
return statearr_37218;
})();var statearr_37219_37242 = state_37201__$1;(statearr_37219_37242[2] = null);
(statearr_37219_37242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 12))
{var inst_37165 = (state_37201[8]);var inst_37189 = cljs.core.vec.call(null,inst_37165);var state_37201__$1 = state_37201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37201__$1,15,out,inst_37189);
} else
{if((state_val_37202 === 13))
{var state_37201__$1 = state_37201;var statearr_37220_37243 = state_37201__$1;(statearr_37220_37243[2] = null);
(statearr_37220_37243[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 14))
{var inst_37194 = (state_37201[2]);var inst_37195 = cljs.core.async.close_BANG_.call(null,out);var state_37201__$1 = (function (){var statearr_37221 = state_37201;(statearr_37221[13] = inst_37194);
return statearr_37221;
})();var statearr_37222_37244 = state_37201__$1;(statearr_37222_37244[2] = inst_37195);
(statearr_37222_37244[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37202 === 15))
{var inst_37191 = (state_37201[2]);var state_37201__$1 = state_37201;var statearr_37223_37245 = state_37201__$1;(statearr_37223_37245[2] = inst_37191);
(statearr_37223_37245[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37227[0] = state_machine__5507__auto__);
(statearr_37227[1] = 1);
return statearr_37227;
});
var state_machine__5507__auto____1 = (function (state_37201){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37201);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37228){if((e37228 instanceof Object))
{var ex__5510__auto__ = e37228;var statearr_37229_37246 = state_37201;(statearr_37229_37246[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37247 = state_37201;
state_37201 = G__37247;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37201){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37230 = f__5522__auto__.call(null);(statearr_37230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37231);
return statearr_37230;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37390 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37360){var state_val_37361 = (state_37360[1]);if((state_val_37361 === 1))
{var inst_37319 = [];var inst_37320 = inst_37319;var inst_37321 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37360__$1 = (function (){var statearr_37362 = state_37360;(statearr_37362[7] = inst_37320);
(statearr_37362[8] = inst_37321);
return statearr_37362;
})();var statearr_37363_37391 = state_37360__$1;(statearr_37363_37391[2] = null);
(statearr_37363_37391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 2))
{var state_37360__$1 = state_37360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37360__$1,4,ch);
} else
{if((state_val_37361 === 3))
{var inst_37358 = (state_37360[2]);var state_37360__$1 = state_37360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37360__$1,inst_37358);
} else
{if((state_val_37361 === 4))
{var inst_37324 = (state_37360[9]);var inst_37324__$1 = (state_37360[2]);var inst_37325 = (inst_37324__$1 == null);var inst_37326 = cljs.core.not.call(null,inst_37325);var state_37360__$1 = (function (){var statearr_37364 = state_37360;(statearr_37364[9] = inst_37324__$1);
return statearr_37364;
})();if(inst_37326)
{var statearr_37365_37392 = state_37360__$1;(statearr_37365_37392[1] = 5);
} else
{var statearr_37366_37393 = state_37360__$1;(statearr_37366_37393[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 5))
{var inst_37324 = (state_37360[9]);var inst_37321 = (state_37360[8]);var inst_37328 = (state_37360[10]);var inst_37328__$1 = f.call(null,inst_37324);var inst_37329 = cljs.core._EQ_.call(null,inst_37328__$1,inst_37321);var inst_37330 = cljs.core.keyword_identical_QMARK_.call(null,inst_37321,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37331 = (inst_37329) || (inst_37330);var state_37360__$1 = (function (){var statearr_37367 = state_37360;(statearr_37367[10] = inst_37328__$1);
return statearr_37367;
})();if(cljs.core.truth_(inst_37331))
{var statearr_37368_37394 = state_37360__$1;(statearr_37368_37394[1] = 8);
} else
{var statearr_37369_37395 = state_37360__$1;(statearr_37369_37395[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 6))
{var inst_37320 = (state_37360[7]);var inst_37345 = inst_37320.length;var inst_37346 = (inst_37345 > 0);var state_37360__$1 = state_37360;if(cljs.core.truth_(inst_37346))
{var statearr_37371_37396 = state_37360__$1;(statearr_37371_37396[1] = 12);
} else
{var statearr_37372_37397 = state_37360__$1;(statearr_37372_37397[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 7))
{var inst_37356 = (state_37360[2]);var state_37360__$1 = state_37360;var statearr_37373_37398 = state_37360__$1;(statearr_37373_37398[2] = inst_37356);
(statearr_37373_37398[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 8))
{var inst_37324 = (state_37360[9]);var inst_37320 = (state_37360[7]);var inst_37328 = (state_37360[10]);var inst_37333 = inst_37320.push(inst_37324);var tmp37370 = inst_37320;var inst_37320__$1 = tmp37370;var inst_37321 = inst_37328;var state_37360__$1 = (function (){var statearr_37374 = state_37360;(statearr_37374[7] = inst_37320__$1);
(statearr_37374[8] = inst_37321);
(statearr_37374[11] = inst_37333);
return statearr_37374;
})();var statearr_37375_37399 = state_37360__$1;(statearr_37375_37399[2] = null);
(statearr_37375_37399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 9))
{var inst_37320 = (state_37360[7]);var inst_37336 = cljs.core.vec.call(null,inst_37320);var state_37360__$1 = state_37360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37360__$1,11,out,inst_37336);
} else
{if((state_val_37361 === 10))
{var inst_37343 = (state_37360[2]);var state_37360__$1 = state_37360;var statearr_37376_37400 = state_37360__$1;(statearr_37376_37400[2] = inst_37343);
(statearr_37376_37400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 11))
{var inst_37324 = (state_37360[9]);var inst_37328 = (state_37360[10]);var inst_37338 = (state_37360[2]);var inst_37339 = [];var inst_37340 = inst_37339.push(inst_37324);var inst_37320 = inst_37339;var inst_37321 = inst_37328;var state_37360__$1 = (function (){var statearr_37377 = state_37360;(statearr_37377[7] = inst_37320);
(statearr_37377[8] = inst_37321);
(statearr_37377[12] = inst_37338);
(statearr_37377[13] = inst_37340);
return statearr_37377;
})();var statearr_37378_37401 = state_37360__$1;(statearr_37378_37401[2] = null);
(statearr_37378_37401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 12))
{var inst_37320 = (state_37360[7]);var inst_37348 = cljs.core.vec.call(null,inst_37320);var state_37360__$1 = state_37360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37360__$1,15,out,inst_37348);
} else
{if((state_val_37361 === 13))
{var state_37360__$1 = state_37360;var statearr_37379_37402 = state_37360__$1;(statearr_37379_37402[2] = null);
(statearr_37379_37402[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 14))
{var inst_37353 = (state_37360[2]);var inst_37354 = cljs.core.async.close_BANG_.call(null,out);var state_37360__$1 = (function (){var statearr_37380 = state_37360;(statearr_37380[14] = inst_37353);
return statearr_37380;
})();var statearr_37381_37403 = state_37360__$1;(statearr_37381_37403[2] = inst_37354);
(statearr_37381_37403[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37361 === 15))
{var inst_37350 = (state_37360[2]);var state_37360__$1 = state_37360;var statearr_37382_37404 = state_37360__$1;(statearr_37382_37404[2] = inst_37350);
(statearr_37382_37404[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37386[0] = state_machine__5507__auto__);
(statearr_37386[1] = 1);
return statearr_37386;
});
var state_machine__5507__auto____1 = (function (state_37360){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37387){if((e37387 instanceof Object))
{var ex__5510__auto__ = e37387;var statearr_37388_37405 = state_37360;(statearr_37388_37405[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37406 = state_37360;
state_37360 = G__37406;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37360){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37389 = f__5522__auto__.call(null);(statearr_37389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37390);
return statearr_37389;
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
