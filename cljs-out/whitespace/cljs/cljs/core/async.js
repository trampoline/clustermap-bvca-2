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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33037 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33037 = (function (f,fn_handler,meta33038){
this.f = f;
this.fn_handler = fn_handler;
this.meta33038 = meta33038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33037.cljs$lang$type = true;
cljs.core.async.t33037.cljs$lang$ctorStr = "cljs.core.async/t33037";
cljs.core.async.t33037.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33037");
});
cljs.core.async.t33037.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33039){var self__ = this;
var _33039__$1 = this;return self__.meta33038;
});
cljs.core.async.t33037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33039,meta33038__$1){var self__ = this;
var _33039__$1 = this;return (new cljs.core.async.t33037(self__.f,self__.fn_handler,meta33038__$1));
});
cljs.core.async.__GT_t33037 = (function __GT_t33037(f__$1,fn_handler__$1,meta33038){return (new cljs.core.async.t33037(f__$1,fn_handler__$1,meta33038));
});
}
return (new cljs.core.async.t33037(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33041 = buff;if(G__33041)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33041.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33041.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33041);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33041);
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
{var val_33042 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33042);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33042);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33043 = n;var x_33044 = 0;while(true){
if((x_33044 < n__4248__auto___33043))
{(a[x_33044] = 0);
{
var G__33045 = (x_33044 + 1);
x_33044 = G__33045;
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
var G__33046 = (i + 1);
i = G__33046;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33050 = (function (flag,alt_flag,meta33051){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33051 = meta33051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33050.cljs$lang$type = true;
cljs.core.async.t33050.cljs$lang$ctorStr = "cljs.core.async/t33050";
cljs.core.async.t33050.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33050");
});
cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33052){var self__ = this;
var _33052__$1 = this;return self__.meta33051;
});
cljs.core.async.t33050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33052,meta33051__$1){var self__ = this;
var _33052__$1 = this;return (new cljs.core.async.t33050(self__.flag,self__.alt_flag,meta33051__$1));
});
cljs.core.async.__GT_t33050 = (function __GT_t33050(flag__$1,alt_flag__$1,meta33051){return (new cljs.core.async.t33050(flag__$1,alt_flag__$1,meta33051));
});
}
return (new cljs.core.async.t33050(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33056 = (function (cb,flag,alt_handler,meta33057){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33057 = meta33057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33056.cljs$lang$type = true;
cljs.core.async.t33056.cljs$lang$ctorStr = "cljs.core.async/t33056";
cljs.core.async.t33056.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33056");
});
cljs.core.async.t33056.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33058){var self__ = this;
var _33058__$1 = this;return self__.meta33057;
});
cljs.core.async.t33056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33058,meta33057__$1){var self__ = this;
var _33058__$1 = this;return (new cljs.core.async.t33056(self__.cb,self__.flag,self__.alt_handler,meta33057__$1));
});
cljs.core.async.__GT_t33056 = (function __GT_t33056(cb__$1,flag__$1,alt_handler__$1,meta33057){return (new cljs.core.async.t33056(cb__$1,flag__$1,alt_handler__$1,meta33057));
});
}
return (new cljs.core.async.t33056(cb,flag,alt_handler,null));
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
return (function (p1__33059_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33059_SHARP_,port], null));
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
var G__33060 = (i + 1);
i = G__33060;
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
var alts_BANG___delegate = function (ports,p__33061){var map__33063 = p__33061;var map__33063__$1 = ((cljs.core.seq_QMARK_.call(null,map__33063))?cljs.core.apply.call(null,cljs.core.hash_map,map__33063):map__33063);var opts = map__33063__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33061 = null;if (arguments.length > 1) {
  p__33061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33061);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33064){
var ports = cljs.core.first(arglist__33064);
var p__33061 = cljs.core.rest(arglist__33064);
return alts_BANG___delegate(ports,p__33061);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33072 = (function (ch,f,map_LT_,meta33073){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33073 = meta33073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33072.cljs$lang$type = true;
cljs.core.async.t33072.cljs$lang$ctorStr = "cljs.core.async/t33072";
cljs.core.async.t33072.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33072");
});
cljs.core.async.t33072.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33072.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33075 = (function (fn1,_,meta33073,ch,f,map_LT_,meta33076){
this.fn1 = fn1;
this._ = _;
this.meta33073 = meta33073;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33076 = meta33076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33075.cljs$lang$type = true;
cljs.core.async.t33075.cljs$lang$ctorStr = "cljs.core.async/t33075";
cljs.core.async.t33075.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33075");
});
cljs.core.async.t33075.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33075.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33065_SHARP_){return f1.call(null,(((p1__33065_SHARP_ == null))?null:self__.f.call(null,p1__33065_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33077){var self__ = this;
var _33077__$1 = this;return self__.meta33076;
});
cljs.core.async.t33075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33077,meta33076__$1){var self__ = this;
var _33077__$1 = this;return (new cljs.core.async.t33075(self__.fn1,self__._,self__.meta33073,self__.ch,self__.f,self__.map_LT_,meta33076__$1));
});
cljs.core.async.__GT_t33075 = (function __GT_t33075(fn1__$1,___$2,meta33073__$1,ch__$2,f__$2,map_LT___$2,meta33076){return (new cljs.core.async.t33075(fn1__$1,___$2,meta33073__$1,ch__$2,f__$2,map_LT___$2,meta33076));
});
}
return (new cljs.core.async.t33075(fn1,___$1,self__.meta33073,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33072.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33074){var self__ = this;
var _33074__$1 = this;return self__.meta33073;
});
cljs.core.async.t33072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33074,meta33073__$1){var self__ = this;
var _33074__$1 = this;return (new cljs.core.async.t33072(self__.ch,self__.f,self__.map_LT_,meta33073__$1));
});
cljs.core.async.__GT_t33072 = (function __GT_t33072(ch__$1,f__$1,map_LT___$1,meta33073){return (new cljs.core.async.t33072(ch__$1,f__$1,map_LT___$1,meta33073));
});
}
return (new cljs.core.async.t33072(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33081 = (function (ch,f,map_GT_,meta33082){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33082 = meta33082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33081.cljs$lang$type = true;
cljs.core.async.t33081.cljs$lang$ctorStr = "cljs.core.async/t33081";
cljs.core.async.t33081.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33081");
});
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33083){var self__ = this;
var _33083__$1 = this;return self__.meta33082;
});
cljs.core.async.t33081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33083,meta33082__$1){var self__ = this;
var _33083__$1 = this;return (new cljs.core.async.t33081(self__.ch,self__.f,self__.map_GT_,meta33082__$1));
});
cljs.core.async.__GT_t33081 = (function __GT_t33081(ch__$1,f__$1,map_GT___$1,meta33082){return (new cljs.core.async.t33081(ch__$1,f__$1,map_GT___$1,meta33082));
});
}
return (new cljs.core.async.t33081(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33087 = (function (ch,p,filter_GT_,meta33088){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33088 = meta33088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33087.cljs$lang$type = true;
cljs.core.async.t33087.cljs$lang$ctorStr = "cljs.core.async/t33087";
cljs.core.async.t33087.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33087");
});
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33089){var self__ = this;
var _33089__$1 = this;return self__.meta33088;
});
cljs.core.async.t33087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33089,meta33088__$1){var self__ = this;
var _33089__$1 = this;return (new cljs.core.async.t33087(self__.ch,self__.p,self__.filter_GT_,meta33088__$1));
});
cljs.core.async.__GT_t33087 = (function __GT_t33087(ch__$1,p__$1,filter_GT___$1,meta33088){return (new cljs.core.async.t33087(ch__$1,p__$1,filter_GT___$1,meta33088));
});
}
return (new cljs.core.async.t33087(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33172 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33151){var state_val_33152 = (state_33151[1]);if((state_val_33152 === 1))
{var state_33151__$1 = state_33151;var statearr_33153_33173 = state_33151__$1;(statearr_33153_33173[2] = null);
(statearr_33153_33173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33152 === 2))
{var state_33151__$1 = state_33151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33151__$1,4,ch);
} else
{if((state_val_33152 === 3))
{var inst_33149 = (state_33151[2]);var state_33151__$1 = state_33151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33151__$1,inst_33149);
} else
{if((state_val_33152 === 4))
{var inst_33133 = (state_33151[7]);var inst_33133__$1 = (state_33151[2]);var inst_33134 = (inst_33133__$1 == null);var state_33151__$1 = (function (){var statearr_33154 = state_33151;(statearr_33154[7] = inst_33133__$1);
return statearr_33154;
})();if(cljs.core.truth_(inst_33134))
{var statearr_33155_33174 = state_33151__$1;(statearr_33155_33174[1] = 5);
} else
{var statearr_33156_33175 = state_33151__$1;(statearr_33156_33175[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33152 === 5))
{var inst_33136 = cljs.core.async.close_BANG_.call(null,out);var state_33151__$1 = state_33151;var statearr_33157_33176 = state_33151__$1;(statearr_33157_33176[2] = inst_33136);
(statearr_33157_33176[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33152 === 6))
{var inst_33133 = (state_33151[7]);var inst_33138 = p.call(null,inst_33133);var state_33151__$1 = state_33151;if(cljs.core.truth_(inst_33138))
{var statearr_33158_33177 = state_33151__$1;(statearr_33158_33177[1] = 8);
} else
{var statearr_33159_33178 = state_33151__$1;(statearr_33159_33178[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33152 === 7))
{var inst_33147 = (state_33151[2]);var state_33151__$1 = state_33151;var statearr_33160_33179 = state_33151__$1;(statearr_33160_33179[2] = inst_33147);
(statearr_33160_33179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33152 === 8))
{var inst_33133 = (state_33151[7]);var state_33151__$1 = state_33151;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33151__$1,11,out,inst_33133);
} else
{if((state_val_33152 === 9))
{var state_33151__$1 = state_33151;var statearr_33161_33180 = state_33151__$1;(statearr_33161_33180[2] = null);
(statearr_33161_33180[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33152 === 10))
{var inst_33144 = (state_33151[2]);var state_33151__$1 = (function (){var statearr_33162 = state_33151;(statearr_33162[8] = inst_33144);
return statearr_33162;
})();var statearr_33163_33181 = state_33151__$1;(statearr_33163_33181[2] = null);
(statearr_33163_33181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33152 === 11))
{var inst_33141 = (state_33151[2]);var state_33151__$1 = state_33151;var statearr_33164_33182 = state_33151__$1;(statearr_33164_33182[2] = inst_33141);
(statearr_33164_33182[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33168 = [null,null,null,null,null,null,null,null,null];(statearr_33168[0] = state_machine__5507__auto__);
(statearr_33168[1] = 1);
return statearr_33168;
});
var state_machine__5507__auto____1 = (function (state_33151){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33151);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33169){if((e33169 instanceof Object))
{var ex__5510__auto__ = e33169;var statearr_33170_33183 = state_33151;(statearr_33170_33183[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33184 = state_33151;
state_33151 = G__33184;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33151){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33171 = f__5522__auto__.call(null);(statearr_33171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33172);
return statearr_33171;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33336){var state_val_33337 = (state_33336[1]);if((state_val_33337 === 1))
{var state_33336__$1 = state_33336;var statearr_33338_33375 = state_33336__$1;(statearr_33338_33375[2] = null);
(statearr_33338_33375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 2))
{var state_33336__$1 = state_33336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33336__$1,4,in$);
} else
{if((state_val_33337 === 3))
{var inst_33334 = (state_33336[2]);var state_33336__$1 = state_33336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33336__$1,inst_33334);
} else
{if((state_val_33337 === 4))
{var inst_33282 = (state_33336[7]);var inst_33282__$1 = (state_33336[2]);var inst_33283 = (inst_33282__$1 == null);var state_33336__$1 = (function (){var statearr_33339 = state_33336;(statearr_33339[7] = inst_33282__$1);
return statearr_33339;
})();if(cljs.core.truth_(inst_33283))
{var statearr_33340_33376 = state_33336__$1;(statearr_33340_33376[1] = 5);
} else
{var statearr_33341_33377 = state_33336__$1;(statearr_33341_33377[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 5))
{var inst_33285 = cljs.core.async.close_BANG_.call(null,out);var state_33336__$1 = state_33336;var statearr_33342_33378 = state_33336__$1;(statearr_33342_33378[2] = inst_33285);
(statearr_33342_33378[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 6))
{var inst_33282 = (state_33336[7]);var inst_33287 = f.call(null,inst_33282);var inst_33292 = cljs.core.seq.call(null,inst_33287);var inst_33293 = inst_33292;var inst_33294 = null;var inst_33295 = 0;var inst_33296 = 0;var state_33336__$1 = (function (){var statearr_33343 = state_33336;(statearr_33343[8] = inst_33296);
(statearr_33343[9] = inst_33294);
(statearr_33343[10] = inst_33295);
(statearr_33343[11] = inst_33293);
return statearr_33343;
})();var statearr_33344_33379 = state_33336__$1;(statearr_33344_33379[2] = null);
(statearr_33344_33379[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 7))
{var inst_33332 = (state_33336[2]);var state_33336__$1 = state_33336;var statearr_33345_33380 = state_33336__$1;(statearr_33345_33380[2] = inst_33332);
(statearr_33345_33380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 8))
{var inst_33296 = (state_33336[8]);var inst_33295 = (state_33336[10]);var inst_33298 = (inst_33296 < inst_33295);var inst_33299 = inst_33298;var state_33336__$1 = state_33336;if(cljs.core.truth_(inst_33299))
{var statearr_33346_33381 = state_33336__$1;(statearr_33346_33381[1] = 10);
} else
{var statearr_33347_33382 = state_33336__$1;(statearr_33347_33382[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 9))
{var inst_33329 = (state_33336[2]);var state_33336__$1 = (function (){var statearr_33348 = state_33336;(statearr_33348[12] = inst_33329);
return statearr_33348;
})();var statearr_33349_33383 = state_33336__$1;(statearr_33349_33383[2] = null);
(statearr_33349_33383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 10))
{var inst_33296 = (state_33336[8]);var inst_33294 = (state_33336[9]);var inst_33301 = cljs.core._nth.call(null,inst_33294,inst_33296);var state_33336__$1 = state_33336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33336__$1,13,out,inst_33301);
} else
{if((state_val_33337 === 11))
{var inst_33307 = (state_33336[13]);var inst_33293 = (state_33336[11]);var inst_33307__$1 = cljs.core.seq.call(null,inst_33293);var state_33336__$1 = (function (){var statearr_33353 = state_33336;(statearr_33353[13] = inst_33307__$1);
return statearr_33353;
})();if(inst_33307__$1)
{var statearr_33354_33384 = state_33336__$1;(statearr_33354_33384[1] = 14);
} else
{var statearr_33355_33385 = state_33336__$1;(statearr_33355_33385[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 12))
{var inst_33327 = (state_33336[2]);var state_33336__$1 = state_33336;var statearr_33356_33386 = state_33336__$1;(statearr_33356_33386[2] = inst_33327);
(statearr_33356_33386[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 13))
{var inst_33296 = (state_33336[8]);var inst_33294 = (state_33336[9]);var inst_33295 = (state_33336[10]);var inst_33293 = (state_33336[11]);var inst_33303 = (state_33336[2]);var inst_33304 = (inst_33296 + 1);var tmp33350 = inst_33294;var tmp33351 = inst_33295;var tmp33352 = inst_33293;var inst_33293__$1 = tmp33352;var inst_33294__$1 = tmp33350;var inst_33295__$1 = tmp33351;var inst_33296__$1 = inst_33304;var state_33336__$1 = (function (){var statearr_33357 = state_33336;(statearr_33357[14] = inst_33303);
(statearr_33357[8] = inst_33296__$1);
(statearr_33357[9] = inst_33294__$1);
(statearr_33357[10] = inst_33295__$1);
(statearr_33357[11] = inst_33293__$1);
return statearr_33357;
})();var statearr_33358_33387 = state_33336__$1;(statearr_33358_33387[2] = null);
(statearr_33358_33387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 14))
{var inst_33307 = (state_33336[13]);var inst_33309 = cljs.core.chunked_seq_QMARK_.call(null,inst_33307);var state_33336__$1 = state_33336;if(inst_33309)
{var statearr_33359_33388 = state_33336__$1;(statearr_33359_33388[1] = 17);
} else
{var statearr_33360_33389 = state_33336__$1;(statearr_33360_33389[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 15))
{var state_33336__$1 = state_33336;var statearr_33361_33390 = state_33336__$1;(statearr_33361_33390[2] = null);
(statearr_33361_33390[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 16))
{var inst_33325 = (state_33336[2]);var state_33336__$1 = state_33336;var statearr_33362_33391 = state_33336__$1;(statearr_33362_33391[2] = inst_33325);
(statearr_33362_33391[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 17))
{var inst_33307 = (state_33336[13]);var inst_33311 = cljs.core.chunk_first.call(null,inst_33307);var inst_33312 = cljs.core.chunk_rest.call(null,inst_33307);var inst_33313 = cljs.core.count.call(null,inst_33311);var inst_33293 = inst_33312;var inst_33294 = inst_33311;var inst_33295 = inst_33313;var inst_33296 = 0;var state_33336__$1 = (function (){var statearr_33363 = state_33336;(statearr_33363[8] = inst_33296);
(statearr_33363[9] = inst_33294);
(statearr_33363[10] = inst_33295);
(statearr_33363[11] = inst_33293);
return statearr_33363;
})();var statearr_33364_33392 = state_33336__$1;(statearr_33364_33392[2] = null);
(statearr_33364_33392[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 18))
{var inst_33307 = (state_33336[13]);var inst_33316 = cljs.core.first.call(null,inst_33307);var state_33336__$1 = state_33336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33336__$1,20,out,inst_33316);
} else
{if((state_val_33337 === 19))
{var inst_33322 = (state_33336[2]);var state_33336__$1 = state_33336;var statearr_33365_33393 = state_33336__$1;(statearr_33365_33393[2] = inst_33322);
(statearr_33365_33393[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33337 === 20))
{var inst_33307 = (state_33336[13]);var inst_33318 = (state_33336[2]);var inst_33319 = cljs.core.next.call(null,inst_33307);var inst_33293 = inst_33319;var inst_33294 = null;var inst_33295 = 0;var inst_33296 = 0;var state_33336__$1 = (function (){var statearr_33366 = state_33336;(statearr_33366[8] = inst_33296);
(statearr_33366[9] = inst_33294);
(statearr_33366[10] = inst_33295);
(statearr_33366[11] = inst_33293);
(statearr_33366[15] = inst_33318);
return statearr_33366;
})();var statearr_33367_33394 = state_33336__$1;(statearr_33367_33394[2] = null);
(statearr_33367_33394[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33371[0] = state_machine__5507__auto__);
(statearr_33371[1] = 1);
return statearr_33371;
});
var state_machine__5507__auto____1 = (function (state_33336){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33336);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33372){if((e33372 instanceof Object))
{var ex__5510__auto__ = e33372;var statearr_33373_33395 = state_33336;(statearr_33373_33395[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33336);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33396 = state_33336;
state_33336 = G__33396;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33336){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33374 = f__5522__auto__.call(null);(statearr_33374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33374;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33477 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33456){var state_val_33457 = (state_33456[1]);if((state_val_33457 === 1))
{var state_33456__$1 = state_33456;var statearr_33458_33478 = state_33456__$1;(statearr_33458_33478[2] = null);
(statearr_33458_33478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33457 === 2))
{var state_33456__$1 = state_33456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33456__$1,4,from);
} else
{if((state_val_33457 === 3))
{var inst_33454 = (state_33456[2]);var state_33456__$1 = state_33456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33456__$1,inst_33454);
} else
{if((state_val_33457 === 4))
{var inst_33439 = (state_33456[7]);var inst_33439__$1 = (state_33456[2]);var inst_33440 = (inst_33439__$1 == null);var state_33456__$1 = (function (){var statearr_33459 = state_33456;(statearr_33459[7] = inst_33439__$1);
return statearr_33459;
})();if(cljs.core.truth_(inst_33440))
{var statearr_33460_33479 = state_33456__$1;(statearr_33460_33479[1] = 5);
} else
{var statearr_33461_33480 = state_33456__$1;(statearr_33461_33480[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33457 === 5))
{var state_33456__$1 = state_33456;if(cljs.core.truth_(close_QMARK_))
{var statearr_33462_33481 = state_33456__$1;(statearr_33462_33481[1] = 8);
} else
{var statearr_33463_33482 = state_33456__$1;(statearr_33463_33482[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33457 === 6))
{var inst_33439 = (state_33456[7]);var state_33456__$1 = state_33456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33456__$1,11,to,inst_33439);
} else
{if((state_val_33457 === 7))
{var inst_33452 = (state_33456[2]);var state_33456__$1 = state_33456;var statearr_33464_33483 = state_33456__$1;(statearr_33464_33483[2] = inst_33452);
(statearr_33464_33483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33457 === 8))
{var inst_33443 = cljs.core.async.close_BANG_.call(null,to);var state_33456__$1 = state_33456;var statearr_33465_33484 = state_33456__$1;(statearr_33465_33484[2] = inst_33443);
(statearr_33465_33484[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33457 === 9))
{var state_33456__$1 = state_33456;var statearr_33466_33485 = state_33456__$1;(statearr_33466_33485[2] = null);
(statearr_33466_33485[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33457 === 10))
{var inst_33446 = (state_33456[2]);var state_33456__$1 = state_33456;var statearr_33467_33486 = state_33456__$1;(statearr_33467_33486[2] = inst_33446);
(statearr_33467_33486[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33457 === 11))
{var inst_33449 = (state_33456[2]);var state_33456__$1 = (function (){var statearr_33468 = state_33456;(statearr_33468[8] = inst_33449);
return statearr_33468;
})();var statearr_33469_33487 = state_33456__$1;(statearr_33469_33487[2] = null);
(statearr_33469_33487[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33473 = [null,null,null,null,null,null,null,null,null];(statearr_33473[0] = state_machine__5507__auto__);
(statearr_33473[1] = 1);
return statearr_33473;
});
var state_machine__5507__auto____1 = (function (state_33456){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33456);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33474){if((e33474 instanceof Object))
{var ex__5510__auto__ = e33474;var statearr_33475_33488 = state_33456;(statearr_33475_33488[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33456);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33489 = state_33456;
state_33456 = G__33489;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33456){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33476 = f__5522__auto__.call(null);(statearr_33476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33477);
return statearr_33476;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33576 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33554){var state_val_33555 = (state_33554[1]);if((state_val_33555 === 1))
{var state_33554__$1 = state_33554;var statearr_33556_33577 = state_33554__$1;(statearr_33556_33577[2] = null);
(statearr_33556_33577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 2))
{var state_33554__$1 = state_33554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33554__$1,4,ch);
} else
{if((state_val_33555 === 3))
{var inst_33552 = (state_33554[2]);var state_33554__$1 = state_33554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33554__$1,inst_33552);
} else
{if((state_val_33555 === 4))
{var inst_33535 = (state_33554[7]);var inst_33535__$1 = (state_33554[2]);var inst_33536 = (inst_33535__$1 == null);var state_33554__$1 = (function (){var statearr_33557 = state_33554;(statearr_33557[7] = inst_33535__$1);
return statearr_33557;
})();if(cljs.core.truth_(inst_33536))
{var statearr_33558_33578 = state_33554__$1;(statearr_33558_33578[1] = 5);
} else
{var statearr_33559_33579 = state_33554__$1;(statearr_33559_33579[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 5))
{var inst_33538 = cljs.core.async.close_BANG_.call(null,tc);var inst_33539 = cljs.core.async.close_BANG_.call(null,fc);var state_33554__$1 = (function (){var statearr_33560 = state_33554;(statearr_33560[8] = inst_33538);
return statearr_33560;
})();var statearr_33561_33580 = state_33554__$1;(statearr_33561_33580[2] = inst_33539);
(statearr_33561_33580[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 6))
{var inst_33535 = (state_33554[7]);var inst_33541 = p.call(null,inst_33535);var state_33554__$1 = state_33554;if(cljs.core.truth_(inst_33541))
{var statearr_33562_33581 = state_33554__$1;(statearr_33562_33581[1] = 9);
} else
{var statearr_33563_33582 = state_33554__$1;(statearr_33563_33582[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 7))
{var inst_33550 = (state_33554[2]);var state_33554__$1 = state_33554;var statearr_33564_33583 = state_33554__$1;(statearr_33564_33583[2] = inst_33550);
(statearr_33564_33583[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 8))
{var inst_33547 = (state_33554[2]);var state_33554__$1 = (function (){var statearr_33565 = state_33554;(statearr_33565[9] = inst_33547);
return statearr_33565;
})();var statearr_33566_33584 = state_33554__$1;(statearr_33566_33584[2] = null);
(statearr_33566_33584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 9))
{var state_33554__$1 = state_33554;var statearr_33567_33585 = state_33554__$1;(statearr_33567_33585[2] = tc);
(statearr_33567_33585[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 10))
{var state_33554__$1 = state_33554;var statearr_33568_33586 = state_33554__$1;(statearr_33568_33586[2] = fc);
(statearr_33568_33586[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33555 === 11))
{var inst_33535 = (state_33554[7]);var inst_33545 = (state_33554[2]);var state_33554__$1 = state_33554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33554__$1,8,inst_33545,inst_33535);
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
var state_machine__5507__auto____0 = (function (){var statearr_33572 = [null,null,null,null,null,null,null,null,null,null];(statearr_33572[0] = state_machine__5507__auto__);
(statearr_33572[1] = 1);
return statearr_33572;
});
var state_machine__5507__auto____1 = (function (state_33554){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33573){if((e33573 instanceof Object))
{var ex__5510__auto__ = e33573;var statearr_33574_33587 = state_33554;(statearr_33574_33587[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33588 = state_33554;
state_33554 = G__33588;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33554){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33575 = f__5522__auto__.call(null);(statearr_33575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33576);
return statearr_33575;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33635){var state_val_33636 = (state_33635[1]);if((state_val_33636 === 7))
{var inst_33631 = (state_33635[2]);var state_33635__$1 = state_33635;var statearr_33637_33653 = state_33635__$1;(statearr_33637_33653[2] = inst_33631);
(statearr_33637_33653[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33636 === 6))
{var inst_33621 = (state_33635[7]);var inst_33624 = (state_33635[8]);var inst_33628 = f.call(null,inst_33621,inst_33624);var inst_33621__$1 = inst_33628;var state_33635__$1 = (function (){var statearr_33638 = state_33635;(statearr_33638[7] = inst_33621__$1);
return statearr_33638;
})();var statearr_33639_33654 = state_33635__$1;(statearr_33639_33654[2] = null);
(statearr_33639_33654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33636 === 5))
{var inst_33621 = (state_33635[7]);var state_33635__$1 = state_33635;var statearr_33640_33655 = state_33635__$1;(statearr_33640_33655[2] = inst_33621);
(statearr_33640_33655[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33636 === 4))
{var inst_33624 = (state_33635[8]);var inst_33624__$1 = (state_33635[2]);var inst_33625 = (inst_33624__$1 == null);var state_33635__$1 = (function (){var statearr_33641 = state_33635;(statearr_33641[8] = inst_33624__$1);
return statearr_33641;
})();if(cljs.core.truth_(inst_33625))
{var statearr_33642_33656 = state_33635__$1;(statearr_33642_33656[1] = 5);
} else
{var statearr_33643_33657 = state_33635__$1;(statearr_33643_33657[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33636 === 3))
{var inst_33633 = (state_33635[2]);var state_33635__$1 = state_33635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33635__$1,inst_33633);
} else
{if((state_val_33636 === 2))
{var state_33635__$1 = state_33635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33635__$1,4,ch);
} else
{if((state_val_33636 === 1))
{var inst_33621 = init;var state_33635__$1 = (function (){var statearr_33644 = state_33635;(statearr_33644[7] = inst_33621);
return statearr_33644;
})();var statearr_33645_33658 = state_33635__$1;(statearr_33645_33658[2] = null);
(statearr_33645_33658[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33649 = [null,null,null,null,null,null,null,null,null];(statearr_33649[0] = state_machine__5507__auto__);
(statearr_33649[1] = 1);
return statearr_33649;
});
var state_machine__5507__auto____1 = (function (state_33635){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33635);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33650){if((e33650 instanceof Object))
{var ex__5510__auto__ = e33650;var statearr_33651_33659 = state_33635;(statearr_33651_33659[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33660 = state_33635;
state_33635 = G__33660;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33635){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33652 = f__5522__auto__.call(null);(statearr_33652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33652;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33722){var state_val_33723 = (state_33722[1]);if((state_val_33723 === 1))
{var inst_33702 = cljs.core.seq.call(null,coll);var inst_33703 = inst_33702;var state_33722__$1 = (function (){var statearr_33724 = state_33722;(statearr_33724[7] = inst_33703);
return statearr_33724;
})();var statearr_33725_33743 = state_33722__$1;(statearr_33725_33743[2] = null);
(statearr_33725_33743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33723 === 2))
{var inst_33703 = (state_33722[7]);var state_33722__$1 = state_33722;if(cljs.core.truth_(inst_33703))
{var statearr_33726_33744 = state_33722__$1;(statearr_33726_33744[1] = 4);
} else
{var statearr_33727_33745 = state_33722__$1;(statearr_33727_33745[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33723 === 3))
{var inst_33720 = (state_33722[2]);var state_33722__$1 = state_33722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33722__$1,inst_33720);
} else
{if((state_val_33723 === 4))
{var inst_33703 = (state_33722[7]);var inst_33706 = cljs.core.first.call(null,inst_33703);var state_33722__$1 = state_33722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33722__$1,7,ch,inst_33706);
} else
{if((state_val_33723 === 5))
{var state_33722__$1 = state_33722;if(cljs.core.truth_(close_QMARK_))
{var statearr_33728_33746 = state_33722__$1;(statearr_33728_33746[1] = 8);
} else
{var statearr_33729_33747 = state_33722__$1;(statearr_33729_33747[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33723 === 6))
{var inst_33718 = (state_33722[2]);var state_33722__$1 = state_33722;var statearr_33730_33748 = state_33722__$1;(statearr_33730_33748[2] = inst_33718);
(statearr_33730_33748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33723 === 7))
{var inst_33703 = (state_33722[7]);var inst_33708 = (state_33722[2]);var inst_33709 = cljs.core.next.call(null,inst_33703);var inst_33703__$1 = inst_33709;var state_33722__$1 = (function (){var statearr_33731 = state_33722;(statearr_33731[7] = inst_33703__$1);
(statearr_33731[8] = inst_33708);
return statearr_33731;
})();var statearr_33732_33749 = state_33722__$1;(statearr_33732_33749[2] = null);
(statearr_33732_33749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33723 === 8))
{var inst_33713 = cljs.core.async.close_BANG_.call(null,ch);var state_33722__$1 = state_33722;var statearr_33733_33750 = state_33722__$1;(statearr_33733_33750[2] = inst_33713);
(statearr_33733_33750[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33723 === 9))
{var state_33722__$1 = state_33722;var statearr_33734_33751 = state_33722__$1;(statearr_33734_33751[2] = null);
(statearr_33734_33751[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33723 === 10))
{var inst_33716 = (state_33722[2]);var state_33722__$1 = state_33722;var statearr_33735_33752 = state_33722__$1;(statearr_33735_33752[2] = inst_33716);
(statearr_33735_33752[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33739 = [null,null,null,null,null,null,null,null,null];(statearr_33739[0] = state_machine__5507__auto__);
(statearr_33739[1] = 1);
return statearr_33739;
});
var state_machine__5507__auto____1 = (function (state_33722){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33722);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33740){if((e33740 instanceof Object))
{var ex__5510__auto__ = e33740;var statearr_33741_33753 = state_33722;(statearr_33741_33753[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33722);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33754 = state_33722;
state_33722 = G__33754;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33722){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33742 = f__5522__auto__.call(null);(statearr_33742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33742;
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
cljs.core.async.Mux = (function (){var obj33756 = {};return obj33756;
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
cljs.core.async.Mult = (function (){var obj33758 = {};return obj33758;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33982 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33982 = (function (cs,ch,mult,meta33983){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33983 = meta33983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33982.cljs$lang$type = true;
cljs.core.async.t33982.cljs$lang$ctorStr = "cljs.core.async/t33982";
cljs.core.async.t33982.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33982");
});})(cs))
;
cljs.core.async.t33982.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33982.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33982.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33982.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33982.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33984){var self__ = this;
var _33984__$1 = this;return self__.meta33983;
});})(cs))
;
cljs.core.async.t33982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33984,meta33983__$1){var self__ = this;
var _33984__$1 = this;return (new cljs.core.async.t33982(self__.cs,self__.ch,self__.mult,meta33983__$1));
});})(cs))
;
cljs.core.async.__GT_t33982 = ((function (cs){
return (function __GT_t33982(cs__$1,ch__$1,mult__$1,meta33983){return (new cljs.core.async.t33982(cs__$1,ch__$1,mult__$1,meta33983));
});})(cs))
;
}
return (new cljs.core.async.t33982(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34205 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34119){var state_val_34120 = (state_34119[1]);if((state_val_34120 === 32))
{var inst_33987 = (state_34119[7]);var inst_34063 = (state_34119[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34119,31,Object,null,30);var inst_34070 = cljs.core.async.put_BANG_.call(null,inst_34063,inst_33987,done);var state_34119__$1 = state_34119;var statearr_34121_34206 = state_34119__$1;(statearr_34121_34206[2] = inst_34070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34119__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 1))
{var state_34119__$1 = state_34119;var statearr_34122_34207 = state_34119__$1;(statearr_34122_34207[2] = null);
(statearr_34122_34207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 33))
{var inst_34076 = (state_34119[9]);var inst_34078 = cljs.core.chunked_seq_QMARK_.call(null,inst_34076);var state_34119__$1 = state_34119;if(inst_34078)
{var statearr_34123_34208 = state_34119__$1;(statearr_34123_34208[1] = 36);
} else
{var statearr_34124_34209 = state_34119__$1;(statearr_34124_34209[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 2))
{var state_34119__$1 = state_34119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34119__$1,4,ch);
} else
{if((state_val_34120 === 34))
{var state_34119__$1 = state_34119;var statearr_34125_34210 = state_34119__$1;(statearr_34125_34210[2] = null);
(statearr_34125_34210[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 3))
{var inst_34117 = (state_34119[2]);var state_34119__$1 = state_34119;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34119__$1,inst_34117);
} else
{if((state_val_34120 === 35))
{var inst_34101 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34126_34211 = state_34119__$1;(statearr_34126_34211[2] = inst_34101);
(statearr_34126_34211[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 4))
{var inst_33987 = (state_34119[7]);var inst_33987__$1 = (state_34119[2]);var inst_33988 = (inst_33987__$1 == null);var state_34119__$1 = (function (){var statearr_34127 = state_34119;(statearr_34127[7] = inst_33987__$1);
return statearr_34127;
})();if(cljs.core.truth_(inst_33988))
{var statearr_34128_34212 = state_34119__$1;(statearr_34128_34212[1] = 5);
} else
{var statearr_34129_34213 = state_34119__$1;(statearr_34129_34213[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 36))
{var inst_34076 = (state_34119[9]);var inst_34080 = cljs.core.chunk_first.call(null,inst_34076);var inst_34081 = cljs.core.chunk_rest.call(null,inst_34076);var inst_34082 = cljs.core.count.call(null,inst_34080);var inst_34055 = inst_34081;var inst_34056 = inst_34080;var inst_34057 = inst_34082;var inst_34058 = 0;var state_34119__$1 = (function (){var statearr_34130 = state_34119;(statearr_34130[10] = inst_34058);
(statearr_34130[11] = inst_34057);
(statearr_34130[12] = inst_34055);
(statearr_34130[13] = inst_34056);
return statearr_34130;
})();var statearr_34131_34214 = state_34119__$1;(statearr_34131_34214[2] = null);
(statearr_34131_34214[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 5))
{var inst_33994 = cljs.core.deref.call(null,cs);var inst_33995 = cljs.core.seq.call(null,inst_33994);var inst_33996 = inst_33995;var inst_33997 = null;var inst_33998 = 0;var inst_33999 = 0;var state_34119__$1 = (function (){var statearr_34132 = state_34119;(statearr_34132[14] = inst_33996);
(statearr_34132[15] = inst_33997);
(statearr_34132[16] = inst_33998);
(statearr_34132[17] = inst_33999);
return statearr_34132;
})();var statearr_34133_34215 = state_34119__$1;(statearr_34133_34215[2] = null);
(statearr_34133_34215[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 37))
{var inst_34076 = (state_34119[9]);var inst_34085 = cljs.core.first.call(null,inst_34076);var state_34119__$1 = (function (){var statearr_34134 = state_34119;(statearr_34134[18] = inst_34085);
return statearr_34134;
})();var statearr_34135_34216 = state_34119__$1;(statearr_34135_34216[2] = null);
(statearr_34135_34216[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 6))
{var inst_34047 = (state_34119[19]);var inst_34046 = cljs.core.deref.call(null,cs);var inst_34047__$1 = cljs.core.keys.call(null,inst_34046);var inst_34048 = cljs.core.count.call(null,inst_34047__$1);var inst_34049 = cljs.core.reset_BANG_.call(null,dctr,inst_34048);var inst_34054 = cljs.core.seq.call(null,inst_34047__$1);var inst_34055 = inst_34054;var inst_34056 = null;var inst_34057 = 0;var inst_34058 = 0;var state_34119__$1 = (function (){var statearr_34136 = state_34119;(statearr_34136[10] = inst_34058);
(statearr_34136[11] = inst_34057);
(statearr_34136[12] = inst_34055);
(statearr_34136[13] = inst_34056);
(statearr_34136[20] = inst_34049);
(statearr_34136[19] = inst_34047__$1);
return statearr_34136;
})();var statearr_34137_34217 = state_34119__$1;(statearr_34137_34217[2] = null);
(statearr_34137_34217[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 38))
{var inst_34098 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34138_34218 = state_34119__$1;(statearr_34138_34218[2] = inst_34098);
(statearr_34138_34218[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 7))
{var inst_34115 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34139_34219 = state_34119__$1;(statearr_34139_34219[2] = inst_34115);
(statearr_34139_34219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 39))
{var inst_34076 = (state_34119[9]);var inst_34094 = (state_34119[2]);var inst_34095 = cljs.core.next.call(null,inst_34076);var inst_34055 = inst_34095;var inst_34056 = null;var inst_34057 = 0;var inst_34058 = 0;var state_34119__$1 = (function (){var statearr_34140 = state_34119;(statearr_34140[10] = inst_34058);
(statearr_34140[11] = inst_34057);
(statearr_34140[12] = inst_34055);
(statearr_34140[13] = inst_34056);
(statearr_34140[21] = inst_34094);
return statearr_34140;
})();var statearr_34141_34220 = state_34119__$1;(statearr_34141_34220[2] = null);
(statearr_34141_34220[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 8))
{var inst_33998 = (state_34119[16]);var inst_33999 = (state_34119[17]);var inst_34001 = (inst_33999 < inst_33998);var inst_34002 = inst_34001;var state_34119__$1 = state_34119;if(cljs.core.truth_(inst_34002))
{var statearr_34142_34221 = state_34119__$1;(statearr_34142_34221[1] = 10);
} else
{var statearr_34143_34222 = state_34119__$1;(statearr_34143_34222[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 40))
{var inst_34085 = (state_34119[18]);var inst_34086 = (state_34119[2]);var inst_34087 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34088 = cljs.core.async.untap_STAR_.call(null,m,inst_34085);var state_34119__$1 = (function (){var statearr_34144 = state_34119;(statearr_34144[22] = inst_34086);
(statearr_34144[23] = inst_34087);
return statearr_34144;
})();var statearr_34145_34223 = state_34119__$1;(statearr_34145_34223[2] = inst_34088);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34119__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 9))
{var inst_34044 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34146_34224 = state_34119__$1;(statearr_34146_34224[2] = inst_34044);
(statearr_34146_34224[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 41))
{var inst_34085 = (state_34119[18]);var inst_33987 = (state_34119[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34119,40,Object,null,39);var inst_34092 = cljs.core.async.put_BANG_.call(null,inst_34085,inst_33987,done);var state_34119__$1 = state_34119;var statearr_34147_34225 = state_34119__$1;(statearr_34147_34225[2] = inst_34092);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34119__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 10))
{var inst_33997 = (state_34119[15]);var inst_33999 = (state_34119[17]);var inst_34005 = cljs.core._nth.call(null,inst_33997,inst_33999);var inst_34006 = cljs.core.nth.call(null,inst_34005,0,null);var inst_34007 = cljs.core.nth.call(null,inst_34005,1,null);var state_34119__$1 = (function (){var statearr_34148 = state_34119;(statearr_34148[24] = inst_34006);
return statearr_34148;
})();if(cljs.core.truth_(inst_34007))
{var statearr_34149_34226 = state_34119__$1;(statearr_34149_34226[1] = 13);
} else
{var statearr_34150_34227 = state_34119__$1;(statearr_34150_34227[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 42))
{var state_34119__$1 = state_34119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34119__$1,45,dchan);
} else
{if((state_val_34120 === 11))
{var inst_34016 = (state_34119[25]);var inst_33996 = (state_34119[14]);var inst_34016__$1 = cljs.core.seq.call(null,inst_33996);var state_34119__$1 = (function (){var statearr_34151 = state_34119;(statearr_34151[25] = inst_34016__$1);
return statearr_34151;
})();if(inst_34016__$1)
{var statearr_34152_34228 = state_34119__$1;(statearr_34152_34228[1] = 16);
} else
{var statearr_34153_34229 = state_34119__$1;(statearr_34153_34229[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 43))
{var state_34119__$1 = state_34119;var statearr_34154_34230 = state_34119__$1;(statearr_34154_34230[2] = null);
(statearr_34154_34230[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 12))
{var inst_34042 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34155_34231 = state_34119__$1;(statearr_34155_34231[2] = inst_34042);
(statearr_34155_34231[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 44))
{var inst_34112 = (state_34119[2]);var state_34119__$1 = (function (){var statearr_34156 = state_34119;(statearr_34156[26] = inst_34112);
return statearr_34156;
})();var statearr_34157_34232 = state_34119__$1;(statearr_34157_34232[2] = null);
(statearr_34157_34232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 13))
{var inst_34006 = (state_34119[24]);var inst_34009 = cljs.core.async.close_BANG_.call(null,inst_34006);var state_34119__$1 = state_34119;var statearr_34158_34233 = state_34119__$1;(statearr_34158_34233[2] = inst_34009);
(statearr_34158_34233[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 45))
{var inst_34109 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34162_34234 = state_34119__$1;(statearr_34162_34234[2] = inst_34109);
(statearr_34162_34234[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 14))
{var state_34119__$1 = state_34119;var statearr_34163_34235 = state_34119__$1;(statearr_34163_34235[2] = null);
(statearr_34163_34235[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 15))
{var inst_33996 = (state_34119[14]);var inst_33997 = (state_34119[15]);var inst_33998 = (state_34119[16]);var inst_33999 = (state_34119[17]);var inst_34012 = (state_34119[2]);var inst_34013 = (inst_33999 + 1);var tmp34159 = inst_33996;var tmp34160 = inst_33997;var tmp34161 = inst_33998;var inst_33996__$1 = tmp34159;var inst_33997__$1 = tmp34160;var inst_33998__$1 = tmp34161;var inst_33999__$1 = inst_34013;var state_34119__$1 = (function (){var statearr_34164 = state_34119;(statearr_34164[14] = inst_33996__$1);
(statearr_34164[15] = inst_33997__$1);
(statearr_34164[16] = inst_33998__$1);
(statearr_34164[27] = inst_34012);
(statearr_34164[17] = inst_33999__$1);
return statearr_34164;
})();var statearr_34165_34236 = state_34119__$1;(statearr_34165_34236[2] = null);
(statearr_34165_34236[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 16))
{var inst_34016 = (state_34119[25]);var inst_34018 = cljs.core.chunked_seq_QMARK_.call(null,inst_34016);var state_34119__$1 = state_34119;if(inst_34018)
{var statearr_34166_34237 = state_34119__$1;(statearr_34166_34237[1] = 19);
} else
{var statearr_34167_34238 = state_34119__$1;(statearr_34167_34238[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 17))
{var state_34119__$1 = state_34119;var statearr_34168_34239 = state_34119__$1;(statearr_34168_34239[2] = null);
(statearr_34168_34239[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 18))
{var inst_34040 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34169_34240 = state_34119__$1;(statearr_34169_34240[2] = inst_34040);
(statearr_34169_34240[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 19))
{var inst_34016 = (state_34119[25]);var inst_34020 = cljs.core.chunk_first.call(null,inst_34016);var inst_34021 = cljs.core.chunk_rest.call(null,inst_34016);var inst_34022 = cljs.core.count.call(null,inst_34020);var inst_33996 = inst_34021;var inst_33997 = inst_34020;var inst_33998 = inst_34022;var inst_33999 = 0;var state_34119__$1 = (function (){var statearr_34170 = state_34119;(statearr_34170[14] = inst_33996);
(statearr_34170[15] = inst_33997);
(statearr_34170[16] = inst_33998);
(statearr_34170[17] = inst_33999);
return statearr_34170;
})();var statearr_34171_34241 = state_34119__$1;(statearr_34171_34241[2] = null);
(statearr_34171_34241[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 20))
{var inst_34016 = (state_34119[25]);var inst_34026 = cljs.core.first.call(null,inst_34016);var inst_34027 = cljs.core.nth.call(null,inst_34026,0,null);var inst_34028 = cljs.core.nth.call(null,inst_34026,1,null);var state_34119__$1 = (function (){var statearr_34172 = state_34119;(statearr_34172[28] = inst_34027);
return statearr_34172;
})();if(cljs.core.truth_(inst_34028))
{var statearr_34173_34242 = state_34119__$1;(statearr_34173_34242[1] = 22);
} else
{var statearr_34174_34243 = state_34119__$1;(statearr_34174_34243[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 21))
{var inst_34037 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34175_34244 = state_34119__$1;(statearr_34175_34244[2] = inst_34037);
(statearr_34175_34244[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 22))
{var inst_34027 = (state_34119[28]);var inst_34030 = cljs.core.async.close_BANG_.call(null,inst_34027);var state_34119__$1 = state_34119;var statearr_34176_34245 = state_34119__$1;(statearr_34176_34245[2] = inst_34030);
(statearr_34176_34245[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 23))
{var state_34119__$1 = state_34119;var statearr_34177_34246 = state_34119__$1;(statearr_34177_34246[2] = null);
(statearr_34177_34246[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 24))
{var inst_34016 = (state_34119[25]);var inst_34033 = (state_34119[2]);var inst_34034 = cljs.core.next.call(null,inst_34016);var inst_33996 = inst_34034;var inst_33997 = null;var inst_33998 = 0;var inst_33999 = 0;var state_34119__$1 = (function (){var statearr_34178 = state_34119;(statearr_34178[14] = inst_33996);
(statearr_34178[15] = inst_33997);
(statearr_34178[16] = inst_33998);
(statearr_34178[29] = inst_34033);
(statearr_34178[17] = inst_33999);
return statearr_34178;
})();var statearr_34179_34247 = state_34119__$1;(statearr_34179_34247[2] = null);
(statearr_34179_34247[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 25))
{var inst_34058 = (state_34119[10]);var inst_34057 = (state_34119[11]);var inst_34060 = (inst_34058 < inst_34057);var inst_34061 = inst_34060;var state_34119__$1 = state_34119;if(cljs.core.truth_(inst_34061))
{var statearr_34180_34248 = state_34119__$1;(statearr_34180_34248[1] = 27);
} else
{var statearr_34181_34249 = state_34119__$1;(statearr_34181_34249[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 26))
{var inst_34047 = (state_34119[19]);var inst_34105 = (state_34119[2]);var inst_34106 = cljs.core.seq.call(null,inst_34047);var state_34119__$1 = (function (){var statearr_34182 = state_34119;(statearr_34182[30] = inst_34105);
return statearr_34182;
})();if(inst_34106)
{var statearr_34183_34250 = state_34119__$1;(statearr_34183_34250[1] = 42);
} else
{var statearr_34184_34251 = state_34119__$1;(statearr_34184_34251[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 27))
{var inst_34058 = (state_34119[10]);var inst_34056 = (state_34119[13]);var inst_34063 = cljs.core._nth.call(null,inst_34056,inst_34058);var state_34119__$1 = (function (){var statearr_34185 = state_34119;(statearr_34185[8] = inst_34063);
return statearr_34185;
})();var statearr_34186_34252 = state_34119__$1;(statearr_34186_34252[2] = null);
(statearr_34186_34252[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 28))
{var inst_34055 = (state_34119[12]);var inst_34076 = (state_34119[9]);var inst_34076__$1 = cljs.core.seq.call(null,inst_34055);var state_34119__$1 = (function (){var statearr_34190 = state_34119;(statearr_34190[9] = inst_34076__$1);
return statearr_34190;
})();if(inst_34076__$1)
{var statearr_34191_34253 = state_34119__$1;(statearr_34191_34253[1] = 33);
} else
{var statearr_34192_34254 = state_34119__$1;(statearr_34192_34254[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 29))
{var inst_34103 = (state_34119[2]);var state_34119__$1 = state_34119;var statearr_34193_34255 = state_34119__$1;(statearr_34193_34255[2] = inst_34103);
(statearr_34193_34255[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 30))
{var inst_34058 = (state_34119[10]);var inst_34057 = (state_34119[11]);var inst_34055 = (state_34119[12]);var inst_34056 = (state_34119[13]);var inst_34072 = (state_34119[2]);var inst_34073 = (inst_34058 + 1);var tmp34187 = inst_34057;var tmp34188 = inst_34055;var tmp34189 = inst_34056;var inst_34055__$1 = tmp34188;var inst_34056__$1 = tmp34189;var inst_34057__$1 = tmp34187;var inst_34058__$1 = inst_34073;var state_34119__$1 = (function (){var statearr_34194 = state_34119;(statearr_34194[10] = inst_34058__$1);
(statearr_34194[11] = inst_34057__$1);
(statearr_34194[12] = inst_34055__$1);
(statearr_34194[13] = inst_34056__$1);
(statearr_34194[31] = inst_34072);
return statearr_34194;
})();var statearr_34195_34256 = state_34119__$1;(statearr_34195_34256[2] = null);
(statearr_34195_34256[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34120 === 31))
{var inst_34063 = (state_34119[8]);var inst_34064 = (state_34119[2]);var inst_34065 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34066 = cljs.core.async.untap_STAR_.call(null,m,inst_34063);var state_34119__$1 = (function (){var statearr_34196 = state_34119;(statearr_34196[32] = inst_34064);
(statearr_34196[33] = inst_34065);
return statearr_34196;
})();var statearr_34197_34257 = state_34119__$1;(statearr_34197_34257[2] = inst_34066);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34119__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34201[0] = state_machine__5507__auto__);
(statearr_34201[1] = 1);
return statearr_34201;
});
var state_machine__5507__auto____1 = (function (state_34119){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34202){if((e34202 instanceof Object))
{var ex__5510__auto__ = e34202;var statearr_34203_34258 = state_34119;(statearr_34203_34258[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34259 = state_34119;
state_34119 = G__34259;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34119){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34204 = f__5522__auto__.call(null);(statearr_34204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34205);
return statearr_34204;
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
cljs.core.async.Mix = (function (){var obj34261 = {};return obj34261;
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
;var m = (function (){if(typeof cljs.core.async.t34371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34371 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34372){
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
this.meta34372 = meta34372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34371.cljs$lang$type = true;
cljs.core.async.t34371.cljs$lang$ctorStr = "cljs.core.async/t34371";
cljs.core.async.t34371.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34371");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34373){var self__ = this;
var _34373__$1 = this;return self__.meta34372;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34373,meta34372__$1){var self__ = this;
var _34373__$1 = this;return (new cljs.core.async.t34371(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34372__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34371 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34371(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34372){return (new cljs.core.async.t34371(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34372));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34371(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34480 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34438){var state_val_34439 = (state_34438[1]);if((state_val_34439 === 1))
{var inst_34377 = (state_34438[7]);var inst_34377__$1 = calc_state.call(null);var inst_34378 = cljs.core.seq_QMARK_.call(null,inst_34377__$1);var state_34438__$1 = (function (){var statearr_34440 = state_34438;(statearr_34440[7] = inst_34377__$1);
return statearr_34440;
})();if(inst_34378)
{var statearr_34441_34481 = state_34438__$1;(statearr_34441_34481[1] = 2);
} else
{var statearr_34442_34482 = state_34438__$1;(statearr_34442_34482[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 2))
{var inst_34377 = (state_34438[7]);var inst_34380 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34377);var state_34438__$1 = state_34438;var statearr_34443_34483 = state_34438__$1;(statearr_34443_34483[2] = inst_34380);
(statearr_34443_34483[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 3))
{var inst_34377 = (state_34438[7]);var state_34438__$1 = state_34438;var statearr_34444_34484 = state_34438__$1;(statearr_34444_34484[2] = inst_34377);
(statearr_34444_34484[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 4))
{var inst_34377 = (state_34438[7]);var inst_34383 = (state_34438[2]);var inst_34384 = cljs.core.get.call(null,inst_34383,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34385 = cljs.core.get.call(null,inst_34383,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34386 = cljs.core.get.call(null,inst_34383,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34387 = inst_34377;var state_34438__$1 = (function (){var statearr_34445 = state_34438;(statearr_34445[8] = inst_34385);
(statearr_34445[9] = inst_34386);
(statearr_34445[10] = inst_34384);
(statearr_34445[11] = inst_34387);
return statearr_34445;
})();var statearr_34446_34485 = state_34438__$1;(statearr_34446_34485[2] = null);
(statearr_34446_34485[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 5))
{var inst_34387 = (state_34438[11]);var inst_34390 = cljs.core.seq_QMARK_.call(null,inst_34387);var state_34438__$1 = state_34438;if(inst_34390)
{var statearr_34447_34486 = state_34438__$1;(statearr_34447_34486[1] = 7);
} else
{var statearr_34448_34487 = state_34438__$1;(statearr_34448_34487[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 6))
{var inst_34436 = (state_34438[2]);var state_34438__$1 = state_34438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34438__$1,inst_34436);
} else
{if((state_val_34439 === 7))
{var inst_34387 = (state_34438[11]);var inst_34392 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34387);var state_34438__$1 = state_34438;var statearr_34449_34488 = state_34438__$1;(statearr_34449_34488[2] = inst_34392);
(statearr_34449_34488[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 8))
{var inst_34387 = (state_34438[11]);var state_34438__$1 = state_34438;var statearr_34450_34489 = state_34438__$1;(statearr_34450_34489[2] = inst_34387);
(statearr_34450_34489[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 9))
{var inst_34395 = (state_34438[12]);var inst_34395__$1 = (state_34438[2]);var inst_34396 = cljs.core.get.call(null,inst_34395__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34397 = cljs.core.get.call(null,inst_34395__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34398 = cljs.core.get.call(null,inst_34395__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34438__$1 = (function (){var statearr_34451 = state_34438;(statearr_34451[13] = inst_34398);
(statearr_34451[14] = inst_34397);
(statearr_34451[12] = inst_34395__$1);
return statearr_34451;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34438__$1,10,inst_34396);
} else
{if((state_val_34439 === 10))
{var inst_34402 = (state_34438[15]);var inst_34403 = (state_34438[16]);var inst_34401 = (state_34438[2]);var inst_34402__$1 = cljs.core.nth.call(null,inst_34401,0,null);var inst_34403__$1 = cljs.core.nth.call(null,inst_34401,1,null);var inst_34404 = (inst_34402__$1 == null);var inst_34405 = cljs.core._EQ_.call(null,inst_34403__$1,change);var inst_34406 = (inst_34404) || (inst_34405);var state_34438__$1 = (function (){var statearr_34452 = state_34438;(statearr_34452[15] = inst_34402__$1);
(statearr_34452[16] = inst_34403__$1);
return statearr_34452;
})();if(cljs.core.truth_(inst_34406))
{var statearr_34453_34490 = state_34438__$1;(statearr_34453_34490[1] = 11);
} else
{var statearr_34454_34491 = state_34438__$1;(statearr_34454_34491[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 11))
{var inst_34402 = (state_34438[15]);var inst_34408 = (inst_34402 == null);var state_34438__$1 = state_34438;if(cljs.core.truth_(inst_34408))
{var statearr_34455_34492 = state_34438__$1;(statearr_34455_34492[1] = 14);
} else
{var statearr_34456_34493 = state_34438__$1;(statearr_34456_34493[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 12))
{var inst_34417 = (state_34438[17]);var inst_34403 = (state_34438[16]);var inst_34398 = (state_34438[13]);var inst_34417__$1 = inst_34398.call(null,inst_34403);var state_34438__$1 = (function (){var statearr_34457 = state_34438;(statearr_34457[17] = inst_34417__$1);
return statearr_34457;
})();if(cljs.core.truth_(inst_34417__$1))
{var statearr_34458_34494 = state_34438__$1;(statearr_34458_34494[1] = 17);
} else
{var statearr_34459_34495 = state_34438__$1;(statearr_34459_34495[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 13))
{var inst_34434 = (state_34438[2]);var state_34438__$1 = state_34438;var statearr_34460_34496 = state_34438__$1;(statearr_34460_34496[2] = inst_34434);
(statearr_34460_34496[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 14))
{var inst_34403 = (state_34438[16]);var inst_34410 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34403);var state_34438__$1 = state_34438;var statearr_34461_34497 = state_34438__$1;(statearr_34461_34497[2] = inst_34410);
(statearr_34461_34497[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 15))
{var state_34438__$1 = state_34438;var statearr_34462_34498 = state_34438__$1;(statearr_34462_34498[2] = null);
(statearr_34462_34498[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 16))
{var inst_34413 = (state_34438[2]);var inst_34414 = calc_state.call(null);var inst_34387 = inst_34414;var state_34438__$1 = (function (){var statearr_34463 = state_34438;(statearr_34463[18] = inst_34413);
(statearr_34463[11] = inst_34387);
return statearr_34463;
})();var statearr_34464_34499 = state_34438__$1;(statearr_34464_34499[2] = null);
(statearr_34464_34499[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 17))
{var inst_34417 = (state_34438[17]);var state_34438__$1 = state_34438;var statearr_34465_34500 = state_34438__$1;(statearr_34465_34500[2] = inst_34417);
(statearr_34465_34500[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 18))
{var inst_34403 = (state_34438[16]);var inst_34398 = (state_34438[13]);var inst_34397 = (state_34438[14]);var inst_34420 = cljs.core.empty_QMARK_.call(null,inst_34398);var inst_34421 = inst_34397.call(null,inst_34403);var inst_34422 = cljs.core.not.call(null,inst_34421);var inst_34423 = (inst_34420) && (inst_34422);var state_34438__$1 = state_34438;var statearr_34466_34501 = state_34438__$1;(statearr_34466_34501[2] = inst_34423);
(statearr_34466_34501[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 19))
{var inst_34425 = (state_34438[2]);var state_34438__$1 = state_34438;if(cljs.core.truth_(inst_34425))
{var statearr_34467_34502 = state_34438__$1;(statearr_34467_34502[1] = 20);
} else
{var statearr_34468_34503 = state_34438__$1;(statearr_34468_34503[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 20))
{var inst_34402 = (state_34438[15]);var state_34438__$1 = state_34438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34438__$1,23,out,inst_34402);
} else
{if((state_val_34439 === 21))
{var state_34438__$1 = state_34438;var statearr_34469_34504 = state_34438__$1;(statearr_34469_34504[2] = null);
(statearr_34469_34504[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 22))
{var inst_34395 = (state_34438[12]);var inst_34431 = (state_34438[2]);var inst_34387 = inst_34395;var state_34438__$1 = (function (){var statearr_34470 = state_34438;(statearr_34470[19] = inst_34431);
(statearr_34470[11] = inst_34387);
return statearr_34470;
})();var statearr_34471_34505 = state_34438__$1;(statearr_34471_34505[2] = null);
(statearr_34471_34505[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34439 === 23))
{var inst_34428 = (state_34438[2]);var state_34438__$1 = state_34438;var statearr_34472_34506 = state_34438__$1;(statearr_34472_34506[2] = inst_34428);
(statearr_34472_34506[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34476[0] = state_machine__5507__auto__);
(statearr_34476[1] = 1);
return statearr_34476;
});
var state_machine__5507__auto____1 = (function (state_34438){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34438);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34477){if((e34477 instanceof Object))
{var ex__5510__auto__ = e34477;var statearr_34478_34507 = state_34438;(statearr_34478_34507[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34477;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34508 = state_34438;
state_34438 = G__34508;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34438){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34479 = f__5522__auto__.call(null);(statearr_34479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34480);
return statearr_34479;
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
cljs.core.async.Pub = (function (){var obj34510 = {};return obj34510;
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
return (function (p1__34511_SHARP_){if(cljs.core.truth_(p1__34511_SHARP_.call(null,topic)))
{return p1__34511_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34511_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34636 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34637){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34637 = meta34637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34636.cljs$lang$type = true;
cljs.core.async.t34636.cljs$lang$ctorStr = "cljs.core.async/t34636";
cljs.core.async.t34636.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34636");
});})(mults,ensure_mult))
;
cljs.core.async.t34636.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34636.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34636.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34636.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34636.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34636.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34638){var self__ = this;
var _34638__$1 = this;return self__.meta34637;
});})(mults,ensure_mult))
;
cljs.core.async.t34636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34638,meta34637__$1){var self__ = this;
var _34638__$1 = this;return (new cljs.core.async.t34636(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34637__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34636 = ((function (mults,ensure_mult){
return (function __GT_t34636(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34637){return (new cljs.core.async.t34636(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34637));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34636(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34712){var state_val_34713 = (state_34712[1]);if((state_val_34713 === 1))
{var state_34712__$1 = state_34712;var statearr_34714_34761 = state_34712__$1;(statearr_34714_34761[2] = null);
(statearr_34714_34761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 2))
{var state_34712__$1 = state_34712;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34712__$1,4,ch);
} else
{if((state_val_34713 === 3))
{var inst_34710 = (state_34712[2]);var state_34712__$1 = state_34712;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34712__$1,inst_34710);
} else
{if((state_val_34713 === 4))
{var inst_34641 = (state_34712[7]);var inst_34641__$1 = (state_34712[2]);var inst_34642 = (inst_34641__$1 == null);var state_34712__$1 = (function (){var statearr_34715 = state_34712;(statearr_34715[7] = inst_34641__$1);
return statearr_34715;
})();if(cljs.core.truth_(inst_34642))
{var statearr_34716_34762 = state_34712__$1;(statearr_34716_34762[1] = 5);
} else
{var statearr_34717_34763 = state_34712__$1;(statearr_34717_34763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 5))
{var inst_34648 = cljs.core.deref.call(null,mults);var inst_34649 = cljs.core.vals.call(null,inst_34648);var inst_34650 = cljs.core.seq.call(null,inst_34649);var inst_34651 = inst_34650;var inst_34652 = null;var inst_34653 = 0;var inst_34654 = 0;var state_34712__$1 = (function (){var statearr_34718 = state_34712;(statearr_34718[8] = inst_34654);
(statearr_34718[9] = inst_34653);
(statearr_34718[10] = inst_34652);
(statearr_34718[11] = inst_34651);
return statearr_34718;
})();var statearr_34719_34764 = state_34712__$1;(statearr_34719_34764[2] = null);
(statearr_34719_34764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 6))
{var inst_34689 = (state_34712[12]);var inst_34691 = (state_34712[13]);var inst_34641 = (state_34712[7]);var inst_34689__$1 = topic_fn.call(null,inst_34641);var inst_34690 = cljs.core.deref.call(null,mults);var inst_34691__$1 = cljs.core.get.call(null,inst_34690,inst_34689__$1);var state_34712__$1 = (function (){var statearr_34720 = state_34712;(statearr_34720[12] = inst_34689__$1);
(statearr_34720[13] = inst_34691__$1);
return statearr_34720;
})();if(cljs.core.truth_(inst_34691__$1))
{var statearr_34721_34765 = state_34712__$1;(statearr_34721_34765[1] = 19);
} else
{var statearr_34722_34766 = state_34712__$1;(statearr_34722_34766[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 7))
{var inst_34708 = (state_34712[2]);var state_34712__$1 = state_34712;var statearr_34723_34767 = state_34712__$1;(statearr_34723_34767[2] = inst_34708);
(statearr_34723_34767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 8))
{var inst_34654 = (state_34712[8]);var inst_34653 = (state_34712[9]);var inst_34656 = (inst_34654 < inst_34653);var inst_34657 = inst_34656;var state_34712__$1 = state_34712;if(cljs.core.truth_(inst_34657))
{var statearr_34727_34768 = state_34712__$1;(statearr_34727_34768[1] = 10);
} else
{var statearr_34728_34769 = state_34712__$1;(statearr_34728_34769[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 9))
{var inst_34687 = (state_34712[2]);var state_34712__$1 = state_34712;var statearr_34729_34770 = state_34712__$1;(statearr_34729_34770[2] = inst_34687);
(statearr_34729_34770[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 10))
{var inst_34654 = (state_34712[8]);var inst_34653 = (state_34712[9]);var inst_34652 = (state_34712[10]);var inst_34651 = (state_34712[11]);var inst_34659 = cljs.core._nth.call(null,inst_34652,inst_34654);var inst_34660 = cljs.core.async.muxch_STAR_.call(null,inst_34659);var inst_34661 = cljs.core.async.close_BANG_.call(null,inst_34660);var inst_34662 = (inst_34654 + 1);var tmp34724 = inst_34653;var tmp34725 = inst_34652;var tmp34726 = inst_34651;var inst_34651__$1 = tmp34726;var inst_34652__$1 = tmp34725;var inst_34653__$1 = tmp34724;var inst_34654__$1 = inst_34662;var state_34712__$1 = (function (){var statearr_34730 = state_34712;(statearr_34730[8] = inst_34654__$1);
(statearr_34730[9] = inst_34653__$1);
(statearr_34730[10] = inst_34652__$1);
(statearr_34730[11] = inst_34651__$1);
(statearr_34730[14] = inst_34661);
return statearr_34730;
})();var statearr_34731_34771 = state_34712__$1;(statearr_34731_34771[2] = null);
(statearr_34731_34771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 11))
{var inst_34651 = (state_34712[11]);var inst_34665 = (state_34712[15]);var inst_34665__$1 = cljs.core.seq.call(null,inst_34651);var state_34712__$1 = (function (){var statearr_34732 = state_34712;(statearr_34732[15] = inst_34665__$1);
return statearr_34732;
})();if(inst_34665__$1)
{var statearr_34733_34772 = state_34712__$1;(statearr_34733_34772[1] = 13);
} else
{var statearr_34734_34773 = state_34712__$1;(statearr_34734_34773[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 12))
{var inst_34685 = (state_34712[2]);var state_34712__$1 = state_34712;var statearr_34735_34774 = state_34712__$1;(statearr_34735_34774[2] = inst_34685);
(statearr_34735_34774[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 13))
{var inst_34665 = (state_34712[15]);var inst_34667 = cljs.core.chunked_seq_QMARK_.call(null,inst_34665);var state_34712__$1 = state_34712;if(inst_34667)
{var statearr_34736_34775 = state_34712__$1;(statearr_34736_34775[1] = 16);
} else
{var statearr_34737_34776 = state_34712__$1;(statearr_34737_34776[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 14))
{var state_34712__$1 = state_34712;var statearr_34738_34777 = state_34712__$1;(statearr_34738_34777[2] = null);
(statearr_34738_34777[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 15))
{var inst_34683 = (state_34712[2]);var state_34712__$1 = state_34712;var statearr_34739_34778 = state_34712__$1;(statearr_34739_34778[2] = inst_34683);
(statearr_34739_34778[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 16))
{var inst_34665 = (state_34712[15]);var inst_34669 = cljs.core.chunk_first.call(null,inst_34665);var inst_34670 = cljs.core.chunk_rest.call(null,inst_34665);var inst_34671 = cljs.core.count.call(null,inst_34669);var inst_34651 = inst_34670;var inst_34652 = inst_34669;var inst_34653 = inst_34671;var inst_34654 = 0;var state_34712__$1 = (function (){var statearr_34740 = state_34712;(statearr_34740[8] = inst_34654);
(statearr_34740[9] = inst_34653);
(statearr_34740[10] = inst_34652);
(statearr_34740[11] = inst_34651);
return statearr_34740;
})();var statearr_34741_34779 = state_34712__$1;(statearr_34741_34779[2] = null);
(statearr_34741_34779[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 17))
{var inst_34665 = (state_34712[15]);var inst_34674 = cljs.core.first.call(null,inst_34665);var inst_34675 = cljs.core.async.muxch_STAR_.call(null,inst_34674);var inst_34676 = cljs.core.async.close_BANG_.call(null,inst_34675);var inst_34677 = cljs.core.next.call(null,inst_34665);var inst_34651 = inst_34677;var inst_34652 = null;var inst_34653 = 0;var inst_34654 = 0;var state_34712__$1 = (function (){var statearr_34742 = state_34712;(statearr_34742[8] = inst_34654);
(statearr_34742[9] = inst_34653);
(statearr_34742[10] = inst_34652);
(statearr_34742[11] = inst_34651);
(statearr_34742[16] = inst_34676);
return statearr_34742;
})();var statearr_34743_34780 = state_34712__$1;(statearr_34743_34780[2] = null);
(statearr_34743_34780[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 18))
{var inst_34680 = (state_34712[2]);var state_34712__$1 = state_34712;var statearr_34744_34781 = state_34712__$1;(statearr_34744_34781[2] = inst_34680);
(statearr_34744_34781[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 19))
{var state_34712__$1 = state_34712;var statearr_34745_34782 = state_34712__$1;(statearr_34745_34782[2] = null);
(statearr_34745_34782[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 20))
{var state_34712__$1 = state_34712;var statearr_34746_34783 = state_34712__$1;(statearr_34746_34783[2] = null);
(statearr_34746_34783[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 21))
{var inst_34705 = (state_34712[2]);var state_34712__$1 = (function (){var statearr_34747 = state_34712;(statearr_34747[17] = inst_34705);
return statearr_34747;
})();var statearr_34748_34784 = state_34712__$1;(statearr_34748_34784[2] = null);
(statearr_34748_34784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 22))
{var inst_34702 = (state_34712[2]);var state_34712__$1 = state_34712;var statearr_34749_34785 = state_34712__$1;(statearr_34749_34785[2] = inst_34702);
(statearr_34749_34785[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 23))
{var inst_34689 = (state_34712[12]);var inst_34693 = (state_34712[2]);var inst_34694 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34689);var state_34712__$1 = (function (){var statearr_34750 = state_34712;(statearr_34750[18] = inst_34693);
return statearr_34750;
})();var statearr_34751_34786 = state_34712__$1;(statearr_34751_34786[2] = inst_34694);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34712__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34713 === 24))
{var inst_34691 = (state_34712[13]);var inst_34641 = (state_34712[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34712,23,Object,null,22);var inst_34698 = cljs.core.async.muxch_STAR_.call(null,inst_34691);var state_34712__$1 = state_34712;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34712__$1,25,inst_34698,inst_34641);
} else
{if((state_val_34713 === 25))
{var inst_34700 = (state_34712[2]);var state_34712__$1 = state_34712;var statearr_34752_34787 = state_34712__$1;(statearr_34752_34787[2] = inst_34700);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34712__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34756[0] = state_machine__5507__auto__);
(statearr_34756[1] = 1);
return statearr_34756;
});
var state_machine__5507__auto____1 = (function (state_34712){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34712);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34757){if((e34757 instanceof Object))
{var ex__5510__auto__ = e34757;var statearr_34758_34788 = state_34712;(statearr_34758_34788[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34712);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34789 = state_34712;
state_34712 = G__34789;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34712){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34759 = f__5522__auto__.call(null);(statearr_34759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34760);
return statearr_34759;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34926 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34896){var state_val_34897 = (state_34896[1]);if((state_val_34897 === 1))
{var state_34896__$1 = state_34896;var statearr_34898_34927 = state_34896__$1;(statearr_34898_34927[2] = null);
(statearr_34898_34927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 2))
{var inst_34859 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34860 = 0;var state_34896__$1 = (function (){var statearr_34899 = state_34896;(statearr_34899[7] = inst_34859);
(statearr_34899[8] = inst_34860);
return statearr_34899;
})();var statearr_34900_34928 = state_34896__$1;(statearr_34900_34928[2] = null);
(statearr_34900_34928[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 3))
{var inst_34894 = (state_34896[2]);var state_34896__$1 = state_34896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34896__$1,inst_34894);
} else
{if((state_val_34897 === 4))
{var inst_34860 = (state_34896[8]);var inst_34862 = (inst_34860 < cnt);var state_34896__$1 = state_34896;if(cljs.core.truth_(inst_34862))
{var statearr_34901_34929 = state_34896__$1;(statearr_34901_34929[1] = 6);
} else
{var statearr_34902_34930 = state_34896__$1;(statearr_34902_34930[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 5))
{var inst_34880 = (state_34896[2]);var state_34896__$1 = (function (){var statearr_34903 = state_34896;(statearr_34903[9] = inst_34880);
return statearr_34903;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34896__$1,12,dchan);
} else
{if((state_val_34897 === 6))
{var state_34896__$1 = state_34896;var statearr_34904_34931 = state_34896__$1;(statearr_34904_34931[2] = null);
(statearr_34904_34931[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 7))
{var state_34896__$1 = state_34896;var statearr_34905_34932 = state_34896__$1;(statearr_34905_34932[2] = null);
(statearr_34905_34932[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 8))
{var inst_34878 = (state_34896[2]);var state_34896__$1 = state_34896;var statearr_34906_34933 = state_34896__$1;(statearr_34906_34933[2] = inst_34878);
(statearr_34906_34933[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 9))
{var inst_34860 = (state_34896[8]);var inst_34873 = (state_34896[2]);var inst_34874 = (inst_34860 + 1);var inst_34860__$1 = inst_34874;var state_34896__$1 = (function (){var statearr_34907 = state_34896;(statearr_34907[10] = inst_34873);
(statearr_34907[8] = inst_34860__$1);
return statearr_34907;
})();var statearr_34908_34934 = state_34896__$1;(statearr_34908_34934[2] = null);
(statearr_34908_34934[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 10))
{var inst_34864 = (state_34896[2]);var inst_34865 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34896__$1 = (function (){var statearr_34909 = state_34896;(statearr_34909[11] = inst_34864);
return statearr_34909;
})();var statearr_34910_34935 = state_34896__$1;(statearr_34910_34935[2] = inst_34865);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34896__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 11))
{var inst_34860 = (state_34896[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34896,10,Object,null,9);var inst_34869 = chs__$1.call(null,inst_34860);var inst_34870 = done.call(null,inst_34860);var inst_34871 = cljs.core.async.take_BANG_.call(null,inst_34869,inst_34870);var state_34896__$1 = state_34896;var statearr_34911_34936 = state_34896__$1;(statearr_34911_34936[2] = inst_34871);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34896__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 12))
{var inst_34882 = (state_34896[12]);var inst_34882__$1 = (state_34896[2]);var inst_34883 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34882__$1);var state_34896__$1 = (function (){var statearr_34912 = state_34896;(statearr_34912[12] = inst_34882__$1);
return statearr_34912;
})();if(cljs.core.truth_(inst_34883))
{var statearr_34913_34937 = state_34896__$1;(statearr_34913_34937[1] = 13);
} else
{var statearr_34914_34938 = state_34896__$1;(statearr_34914_34938[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 13))
{var inst_34885 = cljs.core.async.close_BANG_.call(null,out);var state_34896__$1 = state_34896;var statearr_34915_34939 = state_34896__$1;(statearr_34915_34939[2] = inst_34885);
(statearr_34915_34939[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 14))
{var inst_34882 = (state_34896[12]);var inst_34887 = cljs.core.apply.call(null,f,inst_34882);var state_34896__$1 = state_34896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34896__$1,16,out,inst_34887);
} else
{if((state_val_34897 === 15))
{var inst_34892 = (state_34896[2]);var state_34896__$1 = state_34896;var statearr_34916_34940 = state_34896__$1;(statearr_34916_34940[2] = inst_34892);
(statearr_34916_34940[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34897 === 16))
{var inst_34889 = (state_34896[2]);var state_34896__$1 = (function (){var statearr_34917 = state_34896;(statearr_34917[13] = inst_34889);
return statearr_34917;
})();var statearr_34918_34941 = state_34896__$1;(statearr_34918_34941[2] = null);
(statearr_34918_34941[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34922[0] = state_machine__5507__auto__);
(statearr_34922[1] = 1);
return statearr_34922;
});
var state_machine__5507__auto____1 = (function (state_34896){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34896);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34923){if((e34923 instanceof Object))
{var ex__5510__auto__ = e34923;var statearr_34924_34942 = state_34896;(statearr_34924_34942[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34896);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34923;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34943 = state_34896;
state_34896 = G__34943;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34896){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34925 = f__5522__auto__.call(null);(statearr_34925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34926);
return statearr_34925;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35051 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35027){var state_val_35028 = (state_35027[1]);if((state_val_35028 === 1))
{var inst_34998 = cljs.core.vec.call(null,chs);var inst_34999 = inst_34998;var state_35027__$1 = (function (){var statearr_35029 = state_35027;(statearr_35029[7] = inst_34999);
return statearr_35029;
})();var statearr_35030_35052 = state_35027__$1;(statearr_35030_35052[2] = null);
(statearr_35030_35052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35028 === 2))
{var inst_34999 = (state_35027[7]);var inst_35001 = cljs.core.count.call(null,inst_34999);var inst_35002 = (inst_35001 > 0);var state_35027__$1 = state_35027;if(cljs.core.truth_(inst_35002))
{var statearr_35031_35053 = state_35027__$1;(statearr_35031_35053[1] = 4);
} else
{var statearr_35032_35054 = state_35027__$1;(statearr_35032_35054[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35028 === 3))
{var inst_35025 = (state_35027[2]);var state_35027__$1 = state_35027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35027__$1,inst_35025);
} else
{if((state_val_35028 === 4))
{var inst_34999 = (state_35027[7]);var state_35027__$1 = state_35027;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35027__$1,7,inst_34999);
} else
{if((state_val_35028 === 5))
{var inst_35021 = cljs.core.async.close_BANG_.call(null,out);var state_35027__$1 = state_35027;var statearr_35033_35055 = state_35027__$1;(statearr_35033_35055[2] = inst_35021);
(statearr_35033_35055[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35028 === 6))
{var inst_35023 = (state_35027[2]);var state_35027__$1 = state_35027;var statearr_35034_35056 = state_35027__$1;(statearr_35034_35056[2] = inst_35023);
(statearr_35034_35056[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35028 === 7))
{var inst_35007 = (state_35027[8]);var inst_35006 = (state_35027[9]);var inst_35006__$1 = (state_35027[2]);var inst_35007__$1 = cljs.core.nth.call(null,inst_35006__$1,0,null);var inst_35008 = cljs.core.nth.call(null,inst_35006__$1,1,null);var inst_35009 = (inst_35007__$1 == null);var state_35027__$1 = (function (){var statearr_35035 = state_35027;(statearr_35035[8] = inst_35007__$1);
(statearr_35035[10] = inst_35008);
(statearr_35035[9] = inst_35006__$1);
return statearr_35035;
})();if(cljs.core.truth_(inst_35009))
{var statearr_35036_35057 = state_35027__$1;(statearr_35036_35057[1] = 8);
} else
{var statearr_35037_35058 = state_35027__$1;(statearr_35037_35058[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35028 === 8))
{var inst_35007 = (state_35027[8]);var inst_35008 = (state_35027[10]);var inst_34999 = (state_35027[7]);var inst_35006 = (state_35027[9]);var inst_35011 = (function (){var c = inst_35008;var v = inst_35007;var vec__35004 = inst_35006;var cs = inst_34999;return ((function (c,v,vec__35004,cs,inst_35007,inst_35008,inst_34999,inst_35006,state_val_35028){
return (function (p1__34944_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34944_SHARP_);
});
;})(c,v,vec__35004,cs,inst_35007,inst_35008,inst_34999,inst_35006,state_val_35028))
})();var inst_35012 = cljs.core.filterv.call(null,inst_35011,inst_34999);var inst_34999__$1 = inst_35012;var state_35027__$1 = (function (){var statearr_35038 = state_35027;(statearr_35038[7] = inst_34999__$1);
return statearr_35038;
})();var statearr_35039_35059 = state_35027__$1;(statearr_35039_35059[2] = null);
(statearr_35039_35059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35028 === 9))
{var inst_35007 = (state_35027[8]);var state_35027__$1 = state_35027;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35027__$1,11,out,inst_35007);
} else
{if((state_val_35028 === 10))
{var inst_35019 = (state_35027[2]);var state_35027__$1 = state_35027;var statearr_35041_35060 = state_35027__$1;(statearr_35041_35060[2] = inst_35019);
(statearr_35041_35060[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35028 === 11))
{var inst_34999 = (state_35027[7]);var inst_35016 = (state_35027[2]);var tmp35040 = inst_34999;var inst_34999__$1 = tmp35040;var state_35027__$1 = (function (){var statearr_35042 = state_35027;(statearr_35042[11] = inst_35016);
(statearr_35042[7] = inst_34999__$1);
return statearr_35042;
})();var statearr_35043_35061 = state_35027__$1;(statearr_35043_35061[2] = null);
(statearr_35043_35061[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35047 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35047[0] = state_machine__5507__auto__);
(statearr_35047[1] = 1);
return statearr_35047;
});
var state_machine__5507__auto____1 = (function (state_35027){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35027);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35048){if((e35048 instanceof Object))
{var ex__5510__auto__ = e35048;var statearr_35049_35062 = state_35027;(statearr_35049_35062[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35027);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35063 = state_35027;
state_35027 = G__35063;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35027){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35050 = f__5522__auto__.call(null);(statearr_35050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35051);
return statearr_35050;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35156 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35133){var state_val_35134 = (state_35133[1]);if((state_val_35134 === 1))
{var inst_35110 = 0;var state_35133__$1 = (function (){var statearr_35135 = state_35133;(statearr_35135[7] = inst_35110);
return statearr_35135;
})();var statearr_35136_35157 = state_35133__$1;(statearr_35136_35157[2] = null);
(statearr_35136_35157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35134 === 2))
{var inst_35110 = (state_35133[7]);var inst_35112 = (inst_35110 < n);var state_35133__$1 = state_35133;if(cljs.core.truth_(inst_35112))
{var statearr_35137_35158 = state_35133__$1;(statearr_35137_35158[1] = 4);
} else
{var statearr_35138_35159 = state_35133__$1;(statearr_35138_35159[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35134 === 3))
{var inst_35130 = (state_35133[2]);var inst_35131 = cljs.core.async.close_BANG_.call(null,out);var state_35133__$1 = (function (){var statearr_35139 = state_35133;(statearr_35139[8] = inst_35130);
return statearr_35139;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35133__$1,inst_35131);
} else
{if((state_val_35134 === 4))
{var state_35133__$1 = state_35133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35133__$1,7,ch);
} else
{if((state_val_35134 === 5))
{var state_35133__$1 = state_35133;var statearr_35140_35160 = state_35133__$1;(statearr_35140_35160[2] = null);
(statearr_35140_35160[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35134 === 6))
{var inst_35128 = (state_35133[2]);var state_35133__$1 = state_35133;var statearr_35141_35161 = state_35133__$1;(statearr_35141_35161[2] = inst_35128);
(statearr_35141_35161[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35134 === 7))
{var inst_35115 = (state_35133[9]);var inst_35115__$1 = (state_35133[2]);var inst_35116 = (inst_35115__$1 == null);var inst_35117 = cljs.core.not.call(null,inst_35116);var state_35133__$1 = (function (){var statearr_35142 = state_35133;(statearr_35142[9] = inst_35115__$1);
return statearr_35142;
})();if(inst_35117)
{var statearr_35143_35162 = state_35133__$1;(statearr_35143_35162[1] = 8);
} else
{var statearr_35144_35163 = state_35133__$1;(statearr_35144_35163[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35134 === 8))
{var inst_35115 = (state_35133[9]);var state_35133__$1 = state_35133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35133__$1,11,out,inst_35115);
} else
{if((state_val_35134 === 9))
{var state_35133__$1 = state_35133;var statearr_35145_35164 = state_35133__$1;(statearr_35145_35164[2] = null);
(statearr_35145_35164[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35134 === 10))
{var inst_35125 = (state_35133[2]);var state_35133__$1 = state_35133;var statearr_35146_35165 = state_35133__$1;(statearr_35146_35165[2] = inst_35125);
(statearr_35146_35165[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35134 === 11))
{var inst_35110 = (state_35133[7]);var inst_35120 = (state_35133[2]);var inst_35121 = (inst_35110 + 1);var inst_35110__$1 = inst_35121;var state_35133__$1 = (function (){var statearr_35147 = state_35133;(statearr_35147[7] = inst_35110__$1);
(statearr_35147[10] = inst_35120);
return statearr_35147;
})();var statearr_35148_35166 = state_35133__$1;(statearr_35148_35166[2] = null);
(statearr_35148_35166[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35152 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35152[0] = state_machine__5507__auto__);
(statearr_35152[1] = 1);
return statearr_35152;
});
var state_machine__5507__auto____1 = (function (state_35133){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35133);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35153){if((e35153 instanceof Object))
{var ex__5510__auto__ = e35153;var statearr_35154_35167 = state_35133;(statearr_35154_35167[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35133);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35153;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35168 = state_35133;
state_35133 = G__35168;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35133){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35155 = f__5522__auto__.call(null);(statearr_35155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35156);
return statearr_35155;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35240){var state_val_35241 = (state_35240[1]);if((state_val_35241 === 1))
{var inst_35217 = null;var state_35240__$1 = (function (){var statearr_35242 = state_35240;(statearr_35242[7] = inst_35217);
return statearr_35242;
})();var statearr_35243_35266 = state_35240__$1;(statearr_35243_35266[2] = null);
(statearr_35243_35266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 2))
{var state_35240__$1 = state_35240;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35240__$1,4,ch);
} else
{if((state_val_35241 === 3))
{var inst_35237 = (state_35240[2]);var inst_35238 = cljs.core.async.close_BANG_.call(null,out);var state_35240__$1 = (function (){var statearr_35244 = state_35240;(statearr_35244[8] = inst_35237);
return statearr_35244;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35240__$1,inst_35238);
} else
{if((state_val_35241 === 4))
{var inst_35220 = (state_35240[9]);var inst_35220__$1 = (state_35240[2]);var inst_35221 = (inst_35220__$1 == null);var inst_35222 = cljs.core.not.call(null,inst_35221);var state_35240__$1 = (function (){var statearr_35245 = state_35240;(statearr_35245[9] = inst_35220__$1);
return statearr_35245;
})();if(inst_35222)
{var statearr_35246_35267 = state_35240__$1;(statearr_35246_35267[1] = 5);
} else
{var statearr_35247_35268 = state_35240__$1;(statearr_35247_35268[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 5))
{var inst_35217 = (state_35240[7]);var inst_35220 = (state_35240[9]);var inst_35224 = cljs.core._EQ_.call(null,inst_35220,inst_35217);var state_35240__$1 = state_35240;if(inst_35224)
{var statearr_35248_35269 = state_35240__$1;(statearr_35248_35269[1] = 8);
} else
{var statearr_35249_35270 = state_35240__$1;(statearr_35249_35270[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 6))
{var state_35240__$1 = state_35240;var statearr_35251_35271 = state_35240__$1;(statearr_35251_35271[2] = null);
(statearr_35251_35271[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 7))
{var inst_35235 = (state_35240[2]);var state_35240__$1 = state_35240;var statearr_35252_35272 = state_35240__$1;(statearr_35252_35272[2] = inst_35235);
(statearr_35252_35272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 8))
{var inst_35217 = (state_35240[7]);var tmp35250 = inst_35217;var inst_35217__$1 = tmp35250;var state_35240__$1 = (function (){var statearr_35253 = state_35240;(statearr_35253[7] = inst_35217__$1);
return statearr_35253;
})();var statearr_35254_35273 = state_35240__$1;(statearr_35254_35273[2] = null);
(statearr_35254_35273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 9))
{var inst_35220 = (state_35240[9]);var state_35240__$1 = state_35240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35240__$1,11,out,inst_35220);
} else
{if((state_val_35241 === 10))
{var inst_35232 = (state_35240[2]);var state_35240__$1 = state_35240;var statearr_35255_35274 = state_35240__$1;(statearr_35255_35274[2] = inst_35232);
(statearr_35255_35274[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35241 === 11))
{var inst_35220 = (state_35240[9]);var inst_35229 = (state_35240[2]);var inst_35217 = inst_35220;var state_35240__$1 = (function (){var statearr_35256 = state_35240;(statearr_35256[7] = inst_35217);
(statearr_35256[10] = inst_35229);
return statearr_35256;
})();var statearr_35257_35275 = state_35240__$1;(statearr_35257_35275[2] = null);
(statearr_35257_35275[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35261 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35261[0] = state_machine__5507__auto__);
(statearr_35261[1] = 1);
return statearr_35261;
});
var state_machine__5507__auto____1 = (function (state_35240){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35240);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35262){if((e35262 instanceof Object))
{var ex__5510__auto__ = e35262;var statearr_35263_35276 = state_35240;(statearr_35263_35276[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35277 = state_35240;
state_35240 = G__35277;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35240){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35264 = f__5522__auto__.call(null);(statearr_35264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35265);
return statearr_35264;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35412 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35382){var state_val_35383 = (state_35382[1]);if((state_val_35383 === 1))
{var inst_35345 = (new Array(n));var inst_35346 = inst_35345;var inst_35347 = 0;var state_35382__$1 = (function (){var statearr_35384 = state_35382;(statearr_35384[7] = inst_35347);
(statearr_35384[8] = inst_35346);
return statearr_35384;
})();var statearr_35385_35413 = state_35382__$1;(statearr_35385_35413[2] = null);
(statearr_35385_35413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 2))
{var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35382__$1,4,ch);
} else
{if((state_val_35383 === 3))
{var inst_35380 = (state_35382[2]);var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35382__$1,inst_35380);
} else
{if((state_val_35383 === 4))
{var inst_35350 = (state_35382[9]);var inst_35350__$1 = (state_35382[2]);var inst_35351 = (inst_35350__$1 == null);var inst_35352 = cljs.core.not.call(null,inst_35351);var state_35382__$1 = (function (){var statearr_35386 = state_35382;(statearr_35386[9] = inst_35350__$1);
return statearr_35386;
})();if(inst_35352)
{var statearr_35387_35414 = state_35382__$1;(statearr_35387_35414[1] = 5);
} else
{var statearr_35388_35415 = state_35382__$1;(statearr_35388_35415[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 5))
{var inst_35347 = (state_35382[7]);var inst_35346 = (state_35382[8]);var inst_35350 = (state_35382[9]);var inst_35355 = (state_35382[10]);var inst_35354 = (inst_35346[inst_35347] = inst_35350);var inst_35355__$1 = (inst_35347 + 1);var inst_35356 = (inst_35355__$1 < n);var state_35382__$1 = (function (){var statearr_35389 = state_35382;(statearr_35389[11] = inst_35354);
(statearr_35389[10] = inst_35355__$1);
return statearr_35389;
})();if(cljs.core.truth_(inst_35356))
{var statearr_35390_35416 = state_35382__$1;(statearr_35390_35416[1] = 8);
} else
{var statearr_35391_35417 = state_35382__$1;(statearr_35391_35417[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 6))
{var inst_35347 = (state_35382[7]);var inst_35368 = (inst_35347 > 0);var state_35382__$1 = state_35382;if(cljs.core.truth_(inst_35368))
{var statearr_35393_35418 = state_35382__$1;(statearr_35393_35418[1] = 12);
} else
{var statearr_35394_35419 = state_35382__$1;(statearr_35394_35419[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 7))
{var inst_35378 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35395_35420 = state_35382__$1;(statearr_35395_35420[2] = inst_35378);
(statearr_35395_35420[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 8))
{var inst_35346 = (state_35382[8]);var inst_35355 = (state_35382[10]);var tmp35392 = inst_35346;var inst_35346__$1 = tmp35392;var inst_35347 = inst_35355;var state_35382__$1 = (function (){var statearr_35396 = state_35382;(statearr_35396[7] = inst_35347);
(statearr_35396[8] = inst_35346__$1);
return statearr_35396;
})();var statearr_35397_35421 = state_35382__$1;(statearr_35397_35421[2] = null);
(statearr_35397_35421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 9))
{var inst_35346 = (state_35382[8]);var inst_35360 = cljs.core.vec.call(null,inst_35346);var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35382__$1,11,out,inst_35360);
} else
{if((state_val_35383 === 10))
{var inst_35366 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35398_35422 = state_35382__$1;(statearr_35398_35422[2] = inst_35366);
(statearr_35398_35422[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 11))
{var inst_35362 = (state_35382[2]);var inst_35363 = (new Array(n));var inst_35346 = inst_35363;var inst_35347 = 0;var state_35382__$1 = (function (){var statearr_35399 = state_35382;(statearr_35399[7] = inst_35347);
(statearr_35399[8] = inst_35346);
(statearr_35399[12] = inst_35362);
return statearr_35399;
})();var statearr_35400_35423 = state_35382__$1;(statearr_35400_35423[2] = null);
(statearr_35400_35423[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 12))
{var inst_35346 = (state_35382[8]);var inst_35370 = cljs.core.vec.call(null,inst_35346);var state_35382__$1 = state_35382;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35382__$1,15,out,inst_35370);
} else
{if((state_val_35383 === 13))
{var state_35382__$1 = state_35382;var statearr_35401_35424 = state_35382__$1;(statearr_35401_35424[2] = null);
(statearr_35401_35424[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 14))
{var inst_35375 = (state_35382[2]);var inst_35376 = cljs.core.async.close_BANG_.call(null,out);var state_35382__$1 = (function (){var statearr_35402 = state_35382;(statearr_35402[13] = inst_35375);
return statearr_35402;
})();var statearr_35403_35425 = state_35382__$1;(statearr_35403_35425[2] = inst_35376);
(statearr_35403_35425[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35383 === 15))
{var inst_35372 = (state_35382[2]);var state_35382__$1 = state_35382;var statearr_35404_35426 = state_35382__$1;(statearr_35404_35426[2] = inst_35372);
(statearr_35404_35426[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35408[0] = state_machine__5507__auto__);
(statearr_35408[1] = 1);
return statearr_35408;
});
var state_machine__5507__auto____1 = (function (state_35382){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35382);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35409){if((e35409 instanceof Object))
{var ex__5510__auto__ = e35409;var statearr_35410_35427 = state_35382;(statearr_35410_35427[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35382);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35428 = state_35382;
state_35382 = G__35428;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35382){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35411 = f__5522__auto__.call(null);(statearr_35411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35412);
return statearr_35411;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35571 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35541){var state_val_35542 = (state_35541[1]);if((state_val_35542 === 1))
{var inst_35500 = [];var inst_35501 = inst_35500;var inst_35502 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35541__$1 = (function (){var statearr_35543 = state_35541;(statearr_35543[7] = inst_35501);
(statearr_35543[8] = inst_35502);
return statearr_35543;
})();var statearr_35544_35572 = state_35541__$1;(statearr_35544_35572[2] = null);
(statearr_35544_35572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 2))
{var state_35541__$1 = state_35541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35541__$1,4,ch);
} else
{if((state_val_35542 === 3))
{var inst_35539 = (state_35541[2]);var state_35541__$1 = state_35541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35541__$1,inst_35539);
} else
{if((state_val_35542 === 4))
{var inst_35505 = (state_35541[9]);var inst_35505__$1 = (state_35541[2]);var inst_35506 = (inst_35505__$1 == null);var inst_35507 = cljs.core.not.call(null,inst_35506);var state_35541__$1 = (function (){var statearr_35545 = state_35541;(statearr_35545[9] = inst_35505__$1);
return statearr_35545;
})();if(inst_35507)
{var statearr_35546_35573 = state_35541__$1;(statearr_35546_35573[1] = 5);
} else
{var statearr_35547_35574 = state_35541__$1;(statearr_35547_35574[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 5))
{var inst_35509 = (state_35541[10]);var inst_35502 = (state_35541[8]);var inst_35505 = (state_35541[9]);var inst_35509__$1 = f.call(null,inst_35505);var inst_35510 = cljs.core._EQ_.call(null,inst_35509__$1,inst_35502);var inst_35511 = cljs.core.keyword_identical_QMARK_.call(null,inst_35502,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35512 = (inst_35510) || (inst_35511);var state_35541__$1 = (function (){var statearr_35548 = state_35541;(statearr_35548[10] = inst_35509__$1);
return statearr_35548;
})();if(cljs.core.truth_(inst_35512))
{var statearr_35549_35575 = state_35541__$1;(statearr_35549_35575[1] = 8);
} else
{var statearr_35550_35576 = state_35541__$1;(statearr_35550_35576[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 6))
{var inst_35501 = (state_35541[7]);var inst_35526 = inst_35501.length;var inst_35527 = (inst_35526 > 0);var state_35541__$1 = state_35541;if(cljs.core.truth_(inst_35527))
{var statearr_35552_35577 = state_35541__$1;(statearr_35552_35577[1] = 12);
} else
{var statearr_35553_35578 = state_35541__$1;(statearr_35553_35578[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 7))
{var inst_35537 = (state_35541[2]);var state_35541__$1 = state_35541;var statearr_35554_35579 = state_35541__$1;(statearr_35554_35579[2] = inst_35537);
(statearr_35554_35579[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 8))
{var inst_35509 = (state_35541[10]);var inst_35501 = (state_35541[7]);var inst_35505 = (state_35541[9]);var inst_35514 = inst_35501.push(inst_35505);var tmp35551 = inst_35501;var inst_35501__$1 = tmp35551;var inst_35502 = inst_35509;var state_35541__$1 = (function (){var statearr_35555 = state_35541;(statearr_35555[7] = inst_35501__$1);
(statearr_35555[11] = inst_35514);
(statearr_35555[8] = inst_35502);
return statearr_35555;
})();var statearr_35556_35580 = state_35541__$1;(statearr_35556_35580[2] = null);
(statearr_35556_35580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 9))
{var inst_35501 = (state_35541[7]);var inst_35517 = cljs.core.vec.call(null,inst_35501);var state_35541__$1 = state_35541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35541__$1,11,out,inst_35517);
} else
{if((state_val_35542 === 10))
{var inst_35524 = (state_35541[2]);var state_35541__$1 = state_35541;var statearr_35557_35581 = state_35541__$1;(statearr_35557_35581[2] = inst_35524);
(statearr_35557_35581[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 11))
{var inst_35509 = (state_35541[10]);var inst_35505 = (state_35541[9]);var inst_35519 = (state_35541[2]);var inst_35520 = [];var inst_35521 = inst_35520.push(inst_35505);var inst_35501 = inst_35520;var inst_35502 = inst_35509;var state_35541__$1 = (function (){var statearr_35558 = state_35541;(statearr_35558[7] = inst_35501);
(statearr_35558[12] = inst_35519);
(statearr_35558[13] = inst_35521);
(statearr_35558[8] = inst_35502);
return statearr_35558;
})();var statearr_35559_35582 = state_35541__$1;(statearr_35559_35582[2] = null);
(statearr_35559_35582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 12))
{var inst_35501 = (state_35541[7]);var inst_35529 = cljs.core.vec.call(null,inst_35501);var state_35541__$1 = state_35541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35541__$1,15,out,inst_35529);
} else
{if((state_val_35542 === 13))
{var state_35541__$1 = state_35541;var statearr_35560_35583 = state_35541__$1;(statearr_35560_35583[2] = null);
(statearr_35560_35583[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 14))
{var inst_35534 = (state_35541[2]);var inst_35535 = cljs.core.async.close_BANG_.call(null,out);var state_35541__$1 = (function (){var statearr_35561 = state_35541;(statearr_35561[14] = inst_35534);
return statearr_35561;
})();var statearr_35562_35584 = state_35541__$1;(statearr_35562_35584[2] = inst_35535);
(statearr_35562_35584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35542 === 15))
{var inst_35531 = (state_35541[2]);var state_35541__$1 = state_35541;var statearr_35563_35585 = state_35541__$1;(statearr_35563_35585[2] = inst_35531);
(statearr_35563_35585[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35567[0] = state_machine__5507__auto__);
(statearr_35567[1] = 1);
return statearr_35567;
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
}catch (e35568){if((e35568 instanceof Object))
{var ex__5510__auto__ = e35568;var statearr_35569_35586 = state_35541;(statearr_35569_35586[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35587 = state_35541;
state_35541 = G__35587;
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
})();var state__5523__auto__ = (function (){var statearr_35570 = f__5522__auto__.call(null);(statearr_35570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35571);
return statearr_35570;
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
