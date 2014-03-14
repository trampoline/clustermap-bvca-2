// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t46908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46908 = (function (f,fn_handler,meta46909){
this.f = f;
this.fn_handler = fn_handler;
this.meta46909 = meta46909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46908.cljs$lang$type = true;
cljs.core.async.t46908.cljs$lang$ctorStr = "cljs.core.async/t46908";
cljs.core.async.t46908.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46908");
});
cljs.core.async.t46908.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t46908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t46908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46910){var self__ = this;
var _46910__$1 = this;return self__.meta46909;
});
cljs.core.async.t46908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46910,meta46909__$1){var self__ = this;
var _46910__$1 = this;return (new cljs.core.async.t46908(self__.f,self__.fn_handler,meta46909__$1));
});
cljs.core.async.__GT_t46908 = (function __GT_t46908(f__$1,fn_handler__$1,meta46909){return (new cljs.core.async.t46908(f__$1,fn_handler__$1,meta46909));
});
}
return (new cljs.core.async.t46908(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__46912 = buff;if(G__46912)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__46912.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__46912.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__46912);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__46912);
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
{var val_46913 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_46913);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_46913);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___46914 = n;var x_46915 = 0;while(true){
if((x_46915 < n__4289__auto___46914))
{(a[x_46915] = 0);
{
var G__46916 = (x_46915 + 1);
x_46915 = G__46916;
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
var G__46917 = (i + 1);
i = G__46917;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t46921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46921 = (function (flag,alt_flag,meta46922){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta46922 = meta46922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46921.cljs$lang$type = true;
cljs.core.async.t46921.cljs$lang$ctorStr = "cljs.core.async/t46921";
cljs.core.async.t46921.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46921");
});
cljs.core.async.t46921.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t46921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t46921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46923){var self__ = this;
var _46923__$1 = this;return self__.meta46922;
});
cljs.core.async.t46921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46923,meta46922__$1){var self__ = this;
var _46923__$1 = this;return (new cljs.core.async.t46921(self__.flag,self__.alt_flag,meta46922__$1));
});
cljs.core.async.__GT_t46921 = (function __GT_t46921(flag__$1,alt_flag__$1,meta46922){return (new cljs.core.async.t46921(flag__$1,alt_flag__$1,meta46922));
});
}
return (new cljs.core.async.t46921(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t46927 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46927 = (function (cb,flag,alt_handler,meta46928){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta46928 = meta46928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46927.cljs$lang$type = true;
cljs.core.async.t46927.cljs$lang$ctorStr = "cljs.core.async/t46927";
cljs.core.async.t46927.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46927");
});
cljs.core.async.t46927.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t46927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t46927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46929){var self__ = this;
var _46929__$1 = this;return self__.meta46928;
});
cljs.core.async.t46927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46929,meta46928__$1){var self__ = this;
var _46929__$1 = this;return (new cljs.core.async.t46927(self__.cb,self__.flag,self__.alt_handler,meta46928__$1));
});
cljs.core.async.__GT_t46927 = (function __GT_t46927(cb__$1,flag__$1,alt_handler__$1,meta46928){return (new cljs.core.async.t46927(cb__$1,flag__$1,alt_handler__$1,meta46928));
});
}
return (new cljs.core.async.t46927(cb,flag,alt_handler,null));
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
return (function (p1__46930_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46930_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__46931 = (i + 1);
i = G__46931;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
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
var alts_BANG___delegate = function (ports,p__46932){var map__46934 = p__46932;var map__46934__$1 = ((cljs.core.seq_QMARK_.call(null,map__46934))?cljs.core.apply.call(null,cljs.core.hash_map,map__46934):map__46934);var opts = map__46934__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__46932 = null;if (arguments.length > 1) {
  p__46932 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__46932);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__46935){
var ports = cljs.core.first(arglist__46935);
var p__46932 = cljs.core.rest(arglist__46935);
return alts_BANG___delegate(ports,p__46932);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t46943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46943 = (function (ch,f,map_LT_,meta46944){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46944 = meta46944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46943.cljs$lang$type = true;
cljs.core.async.t46943.cljs$lang$ctorStr = "cljs.core.async/t46943";
cljs.core.async.t46943.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46943");
});
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t46946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46946 = (function (fn1,_,meta46944,ch,f,map_LT_,meta46947){
this.fn1 = fn1;
this._ = _;
this.meta46944 = meta46944;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta46947 = meta46947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46946.cljs$lang$type = true;
cljs.core.async.t46946.cljs$lang$ctorStr = "cljs.core.async/t46946";
cljs.core.async.t46946.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46946");
});
cljs.core.async.t46946.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t46946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t46946.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t46946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__46936_SHARP_){return f1.call(null,(((p1__46936_SHARP_ == null))?null:self__.f.call(null,p1__46936_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t46946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46948){var self__ = this;
var _46948__$1 = this;return self__.meta46947;
});
cljs.core.async.t46946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46948,meta46947__$1){var self__ = this;
var _46948__$1 = this;return (new cljs.core.async.t46946(self__.fn1,self__._,self__.meta46944,self__.ch,self__.f,self__.map_LT_,meta46947__$1));
});
cljs.core.async.__GT_t46946 = (function __GT_t46946(fn1__$1,___$2,meta46944__$1,ch__$2,f__$2,map_LT___$2,meta46947){return (new cljs.core.async.t46946(fn1__$1,___$2,meta46944__$1,ch__$2,f__$2,map_LT___$2,meta46947));
});
}
return (new cljs.core.async.t46946(fn1,___$1,self__.meta46944,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46945){var self__ = this;
var _46945__$1 = this;return self__.meta46944;
});
cljs.core.async.t46943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46945,meta46944__$1){var self__ = this;
var _46945__$1 = this;return (new cljs.core.async.t46943(self__.ch,self__.f,self__.map_LT_,meta46944__$1));
});
cljs.core.async.__GT_t46943 = (function __GT_t46943(ch__$1,f__$1,map_LT___$1,meta46944){return (new cljs.core.async.t46943(ch__$1,f__$1,map_LT___$1,meta46944));
});
}
return (new cljs.core.async.t46943(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t46952 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46952 = (function (ch,f,map_GT_,meta46953){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta46953 = meta46953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46952.cljs$lang$type = true;
cljs.core.async.t46952.cljs$lang$ctorStr = "cljs.core.async/t46952";
cljs.core.async.t46952.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46952");
});
cljs.core.async.t46952.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t46952.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t46952.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46954){var self__ = this;
var _46954__$1 = this;return self__.meta46953;
});
cljs.core.async.t46952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46954,meta46953__$1){var self__ = this;
var _46954__$1 = this;return (new cljs.core.async.t46952(self__.ch,self__.f,self__.map_GT_,meta46953__$1));
});
cljs.core.async.__GT_t46952 = (function __GT_t46952(ch__$1,f__$1,map_GT___$1,meta46953){return (new cljs.core.async.t46952(ch__$1,f__$1,map_GT___$1,meta46953));
});
}
return (new cljs.core.async.t46952(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t46958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t46958 = (function (ch,p,filter_GT_,meta46959){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta46959 = meta46959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46958.cljs$lang$type = true;
cljs.core.async.t46958.cljs$lang$ctorStr = "cljs.core.async/t46958";
cljs.core.async.t46958.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t46958");
});
cljs.core.async.t46958.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t46958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t46958.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t46958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t46958.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t46958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t46958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46960){var self__ = this;
var _46960__$1 = this;return self__.meta46959;
});
cljs.core.async.t46958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46960,meta46959__$1){var self__ = this;
var _46960__$1 = this;return (new cljs.core.async.t46958(self__.ch,self__.p,self__.filter_GT_,meta46959__$1));
});
cljs.core.async.__GT_t46958 = (function __GT_t46958(ch__$1,p__$1,filter_GT___$1,meta46959){return (new cljs.core.async.t46958(ch__$1,p__$1,filter_GT___$1,meta46959));
});
}
return (new cljs.core.async.t46958(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___47043 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47022){var state_val_47023 = (state_47022[1]);if((state_val_47023 === 1))
{var state_47022__$1 = state_47022;var statearr_47024_47044 = state_47022__$1;(statearr_47024_47044[2] = null);
(statearr_47024_47044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47023 === 2))
{var state_47022__$1 = state_47022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47022__$1,4,ch);
} else
{if((state_val_47023 === 3))
{var inst_47020 = (state_47022[2]);var state_47022__$1 = state_47022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47022__$1,inst_47020);
} else
{if((state_val_47023 === 4))
{var inst_47004 = (state_47022[7]);var inst_47004__$1 = (state_47022[2]);var inst_47005 = (inst_47004__$1 == null);var state_47022__$1 = (function (){var statearr_47025 = state_47022;(statearr_47025[7] = inst_47004__$1);
return statearr_47025;
})();if(cljs.core.truth_(inst_47005))
{var statearr_47026_47045 = state_47022__$1;(statearr_47026_47045[1] = 5);
} else
{var statearr_47027_47046 = state_47022__$1;(statearr_47027_47046[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47023 === 5))
{var inst_47007 = cljs.core.async.close_BANG_.call(null,out);var state_47022__$1 = state_47022;var statearr_47028_47047 = state_47022__$1;(statearr_47028_47047[2] = inst_47007);
(statearr_47028_47047[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47023 === 6))
{var inst_47004 = (state_47022[7]);var inst_47009 = p.call(null,inst_47004);var state_47022__$1 = state_47022;if(cljs.core.truth_(inst_47009))
{var statearr_47029_47048 = state_47022__$1;(statearr_47029_47048[1] = 8);
} else
{var statearr_47030_47049 = state_47022__$1;(statearr_47030_47049[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47023 === 7))
{var inst_47018 = (state_47022[2]);var state_47022__$1 = state_47022;var statearr_47031_47050 = state_47022__$1;(statearr_47031_47050[2] = inst_47018);
(statearr_47031_47050[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47023 === 8))
{var inst_47004 = (state_47022[7]);var state_47022__$1 = state_47022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47022__$1,11,out,inst_47004);
} else
{if((state_val_47023 === 9))
{var state_47022__$1 = state_47022;var statearr_47032_47051 = state_47022__$1;(statearr_47032_47051[2] = null);
(statearr_47032_47051[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47023 === 10))
{var inst_47015 = (state_47022[2]);var state_47022__$1 = (function (){var statearr_47033 = state_47022;(statearr_47033[8] = inst_47015);
return statearr_47033;
})();var statearr_47034_47052 = state_47022__$1;(statearr_47034_47052[2] = null);
(statearr_47034_47052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47023 === 11))
{var inst_47012 = (state_47022[2]);var state_47022__$1 = state_47022;var statearr_47035_47053 = state_47022__$1;(statearr_47035_47053[2] = inst_47012);
(statearr_47035_47053[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47039 = [null,null,null,null,null,null,null,null,null];(statearr_47039[0] = state_machine__5548__auto__);
(statearr_47039[1] = 1);
return statearr_47039;
});
var state_machine__5548__auto____1 = (function (state_47022){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47022);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47040){if((e47040 instanceof Object))
{var ex__5551__auto__ = e47040;var statearr_47041_47054 = state_47022;(statearr_47041_47054[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47055 = state_47022;
state_47022 = G__47055;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47022){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47042 = f__5563__auto__.call(null);(statearr_47042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47043);
return statearr_47042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47207){var state_val_47208 = (state_47207[1]);if((state_val_47208 === 1))
{var state_47207__$1 = state_47207;var statearr_47209_47246 = state_47207__$1;(statearr_47209_47246[2] = null);
(statearr_47209_47246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 2))
{var state_47207__$1 = state_47207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47207__$1,4,in$);
} else
{if((state_val_47208 === 3))
{var inst_47205 = (state_47207[2]);var state_47207__$1 = state_47207;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47207__$1,inst_47205);
} else
{if((state_val_47208 === 4))
{var inst_47153 = (state_47207[7]);var inst_47153__$1 = (state_47207[2]);var inst_47154 = (inst_47153__$1 == null);var state_47207__$1 = (function (){var statearr_47210 = state_47207;(statearr_47210[7] = inst_47153__$1);
return statearr_47210;
})();if(cljs.core.truth_(inst_47154))
{var statearr_47211_47247 = state_47207__$1;(statearr_47211_47247[1] = 5);
} else
{var statearr_47212_47248 = state_47207__$1;(statearr_47212_47248[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 5))
{var inst_47156 = cljs.core.async.close_BANG_.call(null,out);var state_47207__$1 = state_47207;var statearr_47213_47249 = state_47207__$1;(statearr_47213_47249[2] = inst_47156);
(statearr_47213_47249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 6))
{var inst_47153 = (state_47207[7]);var inst_47158 = f.call(null,inst_47153);var inst_47163 = cljs.core.seq.call(null,inst_47158);var inst_47164 = inst_47163;var inst_47165 = null;var inst_47166 = 0;var inst_47167 = 0;var state_47207__$1 = (function (){var statearr_47214 = state_47207;(statearr_47214[8] = inst_47167);
(statearr_47214[9] = inst_47165);
(statearr_47214[10] = inst_47166);
(statearr_47214[11] = inst_47164);
return statearr_47214;
})();var statearr_47215_47250 = state_47207__$1;(statearr_47215_47250[2] = null);
(statearr_47215_47250[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 7))
{var inst_47203 = (state_47207[2]);var state_47207__$1 = state_47207;var statearr_47216_47251 = state_47207__$1;(statearr_47216_47251[2] = inst_47203);
(statearr_47216_47251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 8))
{var inst_47167 = (state_47207[8]);var inst_47166 = (state_47207[10]);var inst_47169 = (inst_47167 < inst_47166);var inst_47170 = inst_47169;var state_47207__$1 = state_47207;if(cljs.core.truth_(inst_47170))
{var statearr_47217_47252 = state_47207__$1;(statearr_47217_47252[1] = 10);
} else
{var statearr_47218_47253 = state_47207__$1;(statearr_47218_47253[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 9))
{var inst_47200 = (state_47207[2]);var state_47207__$1 = (function (){var statearr_47219 = state_47207;(statearr_47219[12] = inst_47200);
return statearr_47219;
})();var statearr_47220_47254 = state_47207__$1;(statearr_47220_47254[2] = null);
(statearr_47220_47254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 10))
{var inst_47167 = (state_47207[8]);var inst_47165 = (state_47207[9]);var inst_47172 = cljs.core._nth.call(null,inst_47165,inst_47167);var state_47207__$1 = state_47207;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47207__$1,13,out,inst_47172);
} else
{if((state_val_47208 === 11))
{var inst_47164 = (state_47207[11]);var inst_47178 = (state_47207[13]);var inst_47178__$1 = cljs.core.seq.call(null,inst_47164);var state_47207__$1 = (function (){var statearr_47224 = state_47207;(statearr_47224[13] = inst_47178__$1);
return statearr_47224;
})();if(inst_47178__$1)
{var statearr_47225_47255 = state_47207__$1;(statearr_47225_47255[1] = 14);
} else
{var statearr_47226_47256 = state_47207__$1;(statearr_47226_47256[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 12))
{var inst_47198 = (state_47207[2]);var state_47207__$1 = state_47207;var statearr_47227_47257 = state_47207__$1;(statearr_47227_47257[2] = inst_47198);
(statearr_47227_47257[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 13))
{var inst_47167 = (state_47207[8]);var inst_47165 = (state_47207[9]);var inst_47166 = (state_47207[10]);var inst_47164 = (state_47207[11]);var inst_47174 = (state_47207[2]);var inst_47175 = (inst_47167 + 1);var tmp47221 = inst_47165;var tmp47222 = inst_47166;var tmp47223 = inst_47164;var inst_47164__$1 = tmp47223;var inst_47165__$1 = tmp47221;var inst_47166__$1 = tmp47222;var inst_47167__$1 = inst_47175;var state_47207__$1 = (function (){var statearr_47228 = state_47207;(statearr_47228[8] = inst_47167__$1);
(statearr_47228[9] = inst_47165__$1);
(statearr_47228[10] = inst_47166__$1);
(statearr_47228[11] = inst_47164__$1);
(statearr_47228[14] = inst_47174);
return statearr_47228;
})();var statearr_47229_47258 = state_47207__$1;(statearr_47229_47258[2] = null);
(statearr_47229_47258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 14))
{var inst_47178 = (state_47207[13]);var inst_47180 = cljs.core.chunked_seq_QMARK_.call(null,inst_47178);var state_47207__$1 = state_47207;if(inst_47180)
{var statearr_47230_47259 = state_47207__$1;(statearr_47230_47259[1] = 17);
} else
{var statearr_47231_47260 = state_47207__$1;(statearr_47231_47260[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 15))
{var state_47207__$1 = state_47207;var statearr_47232_47261 = state_47207__$1;(statearr_47232_47261[2] = null);
(statearr_47232_47261[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 16))
{var inst_47196 = (state_47207[2]);var state_47207__$1 = state_47207;var statearr_47233_47262 = state_47207__$1;(statearr_47233_47262[2] = inst_47196);
(statearr_47233_47262[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 17))
{var inst_47178 = (state_47207[13]);var inst_47182 = cljs.core.chunk_first.call(null,inst_47178);var inst_47183 = cljs.core.chunk_rest.call(null,inst_47178);var inst_47184 = cljs.core.count.call(null,inst_47182);var inst_47164 = inst_47183;var inst_47165 = inst_47182;var inst_47166 = inst_47184;var inst_47167 = 0;var state_47207__$1 = (function (){var statearr_47234 = state_47207;(statearr_47234[8] = inst_47167);
(statearr_47234[9] = inst_47165);
(statearr_47234[10] = inst_47166);
(statearr_47234[11] = inst_47164);
return statearr_47234;
})();var statearr_47235_47263 = state_47207__$1;(statearr_47235_47263[2] = null);
(statearr_47235_47263[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 18))
{var inst_47178 = (state_47207[13]);var inst_47187 = cljs.core.first.call(null,inst_47178);var state_47207__$1 = state_47207;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47207__$1,20,out,inst_47187);
} else
{if((state_val_47208 === 19))
{var inst_47193 = (state_47207[2]);var state_47207__$1 = state_47207;var statearr_47236_47264 = state_47207__$1;(statearr_47236_47264[2] = inst_47193);
(statearr_47236_47264[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47208 === 20))
{var inst_47178 = (state_47207[13]);var inst_47189 = (state_47207[2]);var inst_47190 = cljs.core.next.call(null,inst_47178);var inst_47164 = inst_47190;var inst_47165 = null;var inst_47166 = 0;var inst_47167 = 0;var state_47207__$1 = (function (){var statearr_47237 = state_47207;(statearr_47237[8] = inst_47167);
(statearr_47237[9] = inst_47165);
(statearr_47237[10] = inst_47166);
(statearr_47237[11] = inst_47164);
(statearr_47237[15] = inst_47189);
return statearr_47237;
})();var statearr_47238_47265 = state_47207__$1;(statearr_47238_47265[2] = null);
(statearr_47238_47265[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47242[0] = state_machine__5548__auto__);
(statearr_47242[1] = 1);
return statearr_47242;
});
var state_machine__5548__auto____1 = (function (state_47207){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47207);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47243){if((e47243 instanceof Object))
{var ex__5551__auto__ = e47243;var statearr_47244_47266 = state_47207;(statearr_47244_47266[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47207);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47267 = state_47207;
state_47207 = G__47267;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47207){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47245 = f__5563__auto__.call(null);(statearr_47245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___47348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47327){var state_val_47328 = (state_47327[1]);if((state_val_47328 === 1))
{var state_47327__$1 = state_47327;var statearr_47329_47349 = state_47327__$1;(statearr_47329_47349[2] = null);
(statearr_47329_47349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47328 === 2))
{var state_47327__$1 = state_47327;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47327__$1,4,from);
} else
{if((state_val_47328 === 3))
{var inst_47325 = (state_47327[2]);var state_47327__$1 = state_47327;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47327__$1,inst_47325);
} else
{if((state_val_47328 === 4))
{var inst_47310 = (state_47327[7]);var inst_47310__$1 = (state_47327[2]);var inst_47311 = (inst_47310__$1 == null);var state_47327__$1 = (function (){var statearr_47330 = state_47327;(statearr_47330[7] = inst_47310__$1);
return statearr_47330;
})();if(cljs.core.truth_(inst_47311))
{var statearr_47331_47350 = state_47327__$1;(statearr_47331_47350[1] = 5);
} else
{var statearr_47332_47351 = state_47327__$1;(statearr_47332_47351[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47328 === 5))
{var state_47327__$1 = state_47327;if(cljs.core.truth_(close_QMARK_))
{var statearr_47333_47352 = state_47327__$1;(statearr_47333_47352[1] = 8);
} else
{var statearr_47334_47353 = state_47327__$1;(statearr_47334_47353[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47328 === 6))
{var inst_47310 = (state_47327[7]);var state_47327__$1 = state_47327;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47327__$1,11,to,inst_47310);
} else
{if((state_val_47328 === 7))
{var inst_47323 = (state_47327[2]);var state_47327__$1 = state_47327;var statearr_47335_47354 = state_47327__$1;(statearr_47335_47354[2] = inst_47323);
(statearr_47335_47354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47328 === 8))
{var inst_47314 = cljs.core.async.close_BANG_.call(null,to);var state_47327__$1 = state_47327;var statearr_47336_47355 = state_47327__$1;(statearr_47336_47355[2] = inst_47314);
(statearr_47336_47355[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47328 === 9))
{var state_47327__$1 = state_47327;var statearr_47337_47356 = state_47327__$1;(statearr_47337_47356[2] = null);
(statearr_47337_47356[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47328 === 10))
{var inst_47317 = (state_47327[2]);var state_47327__$1 = state_47327;var statearr_47338_47357 = state_47327__$1;(statearr_47338_47357[2] = inst_47317);
(statearr_47338_47357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47328 === 11))
{var inst_47320 = (state_47327[2]);var state_47327__$1 = (function (){var statearr_47339 = state_47327;(statearr_47339[8] = inst_47320);
return statearr_47339;
})();var statearr_47340_47358 = state_47327__$1;(statearr_47340_47358[2] = null);
(statearr_47340_47358[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47344 = [null,null,null,null,null,null,null,null,null];(statearr_47344[0] = state_machine__5548__auto__);
(statearr_47344[1] = 1);
return statearr_47344;
});
var state_machine__5548__auto____1 = (function (state_47327){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47327);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47345){if((e47345 instanceof Object))
{var ex__5551__auto__ = e47345;var statearr_47346_47359 = state_47327;(statearr_47346_47359[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47327);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47360 = state_47327;
state_47327 = G__47360;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47327){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47347 = f__5563__auto__.call(null);(statearr_47347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47348);
return statearr_47347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___47447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47425){var state_val_47426 = (state_47425[1]);if((state_val_47426 === 1))
{var state_47425__$1 = state_47425;var statearr_47427_47448 = state_47425__$1;(statearr_47427_47448[2] = null);
(statearr_47427_47448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 2))
{var state_47425__$1 = state_47425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47425__$1,4,ch);
} else
{if((state_val_47426 === 3))
{var inst_47423 = (state_47425[2]);var state_47425__$1 = state_47425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47425__$1,inst_47423);
} else
{if((state_val_47426 === 4))
{var inst_47406 = (state_47425[7]);var inst_47406__$1 = (state_47425[2]);var inst_47407 = (inst_47406__$1 == null);var state_47425__$1 = (function (){var statearr_47428 = state_47425;(statearr_47428[7] = inst_47406__$1);
return statearr_47428;
})();if(cljs.core.truth_(inst_47407))
{var statearr_47429_47449 = state_47425__$1;(statearr_47429_47449[1] = 5);
} else
{var statearr_47430_47450 = state_47425__$1;(statearr_47430_47450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 5))
{var inst_47409 = cljs.core.async.close_BANG_.call(null,tc);var inst_47410 = cljs.core.async.close_BANG_.call(null,fc);var state_47425__$1 = (function (){var statearr_47431 = state_47425;(statearr_47431[8] = inst_47409);
return statearr_47431;
})();var statearr_47432_47451 = state_47425__$1;(statearr_47432_47451[2] = inst_47410);
(statearr_47432_47451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 6))
{var inst_47406 = (state_47425[7]);var inst_47412 = p.call(null,inst_47406);var state_47425__$1 = state_47425;if(cljs.core.truth_(inst_47412))
{var statearr_47433_47452 = state_47425__$1;(statearr_47433_47452[1] = 9);
} else
{var statearr_47434_47453 = state_47425__$1;(statearr_47434_47453[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 7))
{var inst_47421 = (state_47425[2]);var state_47425__$1 = state_47425;var statearr_47435_47454 = state_47425__$1;(statearr_47435_47454[2] = inst_47421);
(statearr_47435_47454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 8))
{var inst_47418 = (state_47425[2]);var state_47425__$1 = (function (){var statearr_47436 = state_47425;(statearr_47436[9] = inst_47418);
return statearr_47436;
})();var statearr_47437_47455 = state_47425__$1;(statearr_47437_47455[2] = null);
(statearr_47437_47455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 9))
{var state_47425__$1 = state_47425;var statearr_47438_47456 = state_47425__$1;(statearr_47438_47456[2] = tc);
(statearr_47438_47456[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 10))
{var state_47425__$1 = state_47425;var statearr_47439_47457 = state_47425__$1;(statearr_47439_47457[2] = fc);
(statearr_47439_47457[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47426 === 11))
{var inst_47406 = (state_47425[7]);var inst_47416 = (state_47425[2]);var state_47425__$1 = state_47425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47425__$1,8,inst_47416,inst_47406);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47443 = [null,null,null,null,null,null,null,null,null,null];(statearr_47443[0] = state_machine__5548__auto__);
(statearr_47443[1] = 1);
return statearr_47443;
});
var state_machine__5548__auto____1 = (function (state_47425){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47425);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47444){if((e47444 instanceof Object))
{var ex__5551__auto__ = e47444;var statearr_47445_47458 = state_47425;(statearr_47445_47458[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47459 = state_47425;
state_47425 = G__47459;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47425){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47446 = f__5563__auto__.call(null);(statearr_47446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47447);
return statearr_47446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47506){var state_val_47507 = (state_47506[1]);if((state_val_47507 === 7))
{var inst_47502 = (state_47506[2]);var state_47506__$1 = state_47506;var statearr_47508_47524 = state_47506__$1;(statearr_47508_47524[2] = inst_47502);
(statearr_47508_47524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47507 === 6))
{var inst_47495 = (state_47506[7]);var inst_47492 = (state_47506[8]);var inst_47499 = f.call(null,inst_47492,inst_47495);var inst_47492__$1 = inst_47499;var state_47506__$1 = (function (){var statearr_47509 = state_47506;(statearr_47509[8] = inst_47492__$1);
return statearr_47509;
})();var statearr_47510_47525 = state_47506__$1;(statearr_47510_47525[2] = null);
(statearr_47510_47525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47507 === 5))
{var inst_47492 = (state_47506[8]);var state_47506__$1 = state_47506;var statearr_47511_47526 = state_47506__$1;(statearr_47511_47526[2] = inst_47492);
(statearr_47511_47526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47507 === 4))
{var inst_47495 = (state_47506[7]);var inst_47495__$1 = (state_47506[2]);var inst_47496 = (inst_47495__$1 == null);var state_47506__$1 = (function (){var statearr_47512 = state_47506;(statearr_47512[7] = inst_47495__$1);
return statearr_47512;
})();if(cljs.core.truth_(inst_47496))
{var statearr_47513_47527 = state_47506__$1;(statearr_47513_47527[1] = 5);
} else
{var statearr_47514_47528 = state_47506__$1;(statearr_47514_47528[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47507 === 3))
{var inst_47504 = (state_47506[2]);var state_47506__$1 = state_47506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47506__$1,inst_47504);
} else
{if((state_val_47507 === 2))
{var state_47506__$1 = state_47506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47506__$1,4,ch);
} else
{if((state_val_47507 === 1))
{var inst_47492 = init;var state_47506__$1 = (function (){var statearr_47515 = state_47506;(statearr_47515[8] = inst_47492);
return statearr_47515;
})();var statearr_47516_47529 = state_47506__$1;(statearr_47516_47529[2] = null);
(statearr_47516_47529[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47520 = [null,null,null,null,null,null,null,null,null];(statearr_47520[0] = state_machine__5548__auto__);
(statearr_47520[1] = 1);
return statearr_47520;
});
var state_machine__5548__auto____1 = (function (state_47506){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47506);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47521){if((e47521 instanceof Object))
{var ex__5551__auto__ = e47521;var statearr_47522_47530 = state_47506;(statearr_47522_47530[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47531 = state_47506;
state_47506 = G__47531;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47506){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47523 = f__5563__auto__.call(null);(statearr_47523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47523;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47593){var state_val_47594 = (state_47593[1]);if((state_val_47594 === 1))
{var inst_47573 = cljs.core.seq.call(null,coll);var inst_47574 = inst_47573;var state_47593__$1 = (function (){var statearr_47595 = state_47593;(statearr_47595[7] = inst_47574);
return statearr_47595;
})();var statearr_47596_47614 = state_47593__$1;(statearr_47596_47614[2] = null);
(statearr_47596_47614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47594 === 2))
{var inst_47574 = (state_47593[7]);var state_47593__$1 = state_47593;if(cljs.core.truth_(inst_47574))
{var statearr_47597_47615 = state_47593__$1;(statearr_47597_47615[1] = 4);
} else
{var statearr_47598_47616 = state_47593__$1;(statearr_47598_47616[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47594 === 3))
{var inst_47591 = (state_47593[2]);var state_47593__$1 = state_47593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47593__$1,inst_47591);
} else
{if((state_val_47594 === 4))
{var inst_47574 = (state_47593[7]);var inst_47577 = cljs.core.first.call(null,inst_47574);var state_47593__$1 = state_47593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47593__$1,7,ch,inst_47577);
} else
{if((state_val_47594 === 5))
{var state_47593__$1 = state_47593;if(cljs.core.truth_(close_QMARK_))
{var statearr_47599_47617 = state_47593__$1;(statearr_47599_47617[1] = 8);
} else
{var statearr_47600_47618 = state_47593__$1;(statearr_47600_47618[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47594 === 6))
{var inst_47589 = (state_47593[2]);var state_47593__$1 = state_47593;var statearr_47601_47619 = state_47593__$1;(statearr_47601_47619[2] = inst_47589);
(statearr_47601_47619[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47594 === 7))
{var inst_47574 = (state_47593[7]);var inst_47579 = (state_47593[2]);var inst_47580 = cljs.core.next.call(null,inst_47574);var inst_47574__$1 = inst_47580;var state_47593__$1 = (function (){var statearr_47602 = state_47593;(statearr_47602[7] = inst_47574__$1);
(statearr_47602[8] = inst_47579);
return statearr_47602;
})();var statearr_47603_47620 = state_47593__$1;(statearr_47603_47620[2] = null);
(statearr_47603_47620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47594 === 8))
{var inst_47584 = cljs.core.async.close_BANG_.call(null,ch);var state_47593__$1 = state_47593;var statearr_47604_47621 = state_47593__$1;(statearr_47604_47621[2] = inst_47584);
(statearr_47604_47621[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47594 === 9))
{var state_47593__$1 = state_47593;var statearr_47605_47622 = state_47593__$1;(statearr_47605_47622[2] = null);
(statearr_47605_47622[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47594 === 10))
{var inst_47587 = (state_47593[2]);var state_47593__$1 = state_47593;var statearr_47606_47623 = state_47593__$1;(statearr_47606_47623[2] = inst_47587);
(statearr_47606_47623[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_47610 = [null,null,null,null,null,null,null,null,null];(statearr_47610[0] = state_machine__5548__auto__);
(statearr_47610[1] = 1);
return statearr_47610;
});
var state_machine__5548__auto____1 = (function (state_47593){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47593);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47611){if((e47611 instanceof Object))
{var ex__5551__auto__ = e47611;var statearr_47612_47624 = state_47593;(statearr_47612_47624[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47625 = state_47593;
state_47593 = G__47625;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47593){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47613 = f__5563__auto__.call(null);(statearr_47613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj47627 = {};return obj47627;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj47629 = {};return obj47629;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t47853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47853 = (function (cs,ch,mult,meta47854){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta47854 = meta47854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47853.cljs$lang$type = true;
cljs.core.async.t47853.cljs$lang$ctorStr = "cljs.core.async/t47853";
cljs.core.async.t47853.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47853");
});})(cs))
;
cljs.core.async.t47853.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t47853.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t47853.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t47853.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t47853.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t47853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t47853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47855){var self__ = this;
var _47855__$1 = this;return self__.meta47854;
});})(cs))
;
cljs.core.async.t47853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47855,meta47854__$1){var self__ = this;
var _47855__$1 = this;return (new cljs.core.async.t47853(self__.cs,self__.ch,self__.mult,meta47854__$1));
});})(cs))
;
cljs.core.async.__GT_t47853 = ((function (cs){
return (function __GT_t47853(cs__$1,ch__$1,mult__$1,meta47854){return (new cljs.core.async.t47853(cs__$1,ch__$1,mult__$1,meta47854));
});})(cs))
;
}
return (new cljs.core.async.t47853(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___48076 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47990){var state_val_47991 = (state_47990[1]);if((state_val_47991 === 32))
{var inst_47934 = (state_47990[7]);var inst_47858 = (state_47990[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47990,31,Object,null,30);var inst_47941 = cljs.core.async.put_BANG_.call(null,inst_47934,inst_47858,done);var state_47990__$1 = state_47990;var statearr_47992_48077 = state_47990__$1;(statearr_47992_48077[2] = inst_47941);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47990__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 1))
{var state_47990__$1 = state_47990;var statearr_47993_48078 = state_47990__$1;(statearr_47993_48078[2] = null);
(statearr_47993_48078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 33))
{var inst_47947 = (state_47990[9]);var inst_47949 = cljs.core.chunked_seq_QMARK_.call(null,inst_47947);var state_47990__$1 = state_47990;if(inst_47949)
{var statearr_47994_48079 = state_47990__$1;(statearr_47994_48079[1] = 36);
} else
{var statearr_47995_48080 = state_47990__$1;(statearr_47995_48080[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 2))
{var state_47990__$1 = state_47990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47990__$1,4,ch);
} else
{if((state_val_47991 === 34))
{var state_47990__$1 = state_47990;var statearr_47996_48081 = state_47990__$1;(statearr_47996_48081[2] = null);
(statearr_47996_48081[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 3))
{var inst_47988 = (state_47990[2]);var state_47990__$1 = state_47990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47990__$1,inst_47988);
} else
{if((state_val_47991 === 35))
{var inst_47972 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_47997_48082 = state_47990__$1;(statearr_47997_48082[2] = inst_47972);
(statearr_47997_48082[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 4))
{var inst_47858 = (state_47990[8]);var inst_47858__$1 = (state_47990[2]);var inst_47859 = (inst_47858__$1 == null);var state_47990__$1 = (function (){var statearr_47998 = state_47990;(statearr_47998[8] = inst_47858__$1);
return statearr_47998;
})();if(cljs.core.truth_(inst_47859))
{var statearr_47999_48083 = state_47990__$1;(statearr_47999_48083[1] = 5);
} else
{var statearr_48000_48084 = state_47990__$1;(statearr_48000_48084[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 36))
{var inst_47947 = (state_47990[9]);var inst_47951 = cljs.core.chunk_first.call(null,inst_47947);var inst_47952 = cljs.core.chunk_rest.call(null,inst_47947);var inst_47953 = cljs.core.count.call(null,inst_47951);var inst_47926 = inst_47952;var inst_47927 = inst_47951;var inst_47928 = inst_47953;var inst_47929 = 0;var state_47990__$1 = (function (){var statearr_48001 = state_47990;(statearr_48001[10] = inst_47926);
(statearr_48001[11] = inst_47928);
(statearr_48001[12] = inst_47927);
(statearr_48001[13] = inst_47929);
return statearr_48001;
})();var statearr_48002_48085 = state_47990__$1;(statearr_48002_48085[2] = null);
(statearr_48002_48085[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 5))
{var inst_47865 = cljs.core.deref.call(null,cs);var inst_47866 = cljs.core.seq.call(null,inst_47865);var inst_47867 = inst_47866;var inst_47868 = null;var inst_47869 = 0;var inst_47870 = 0;var state_47990__$1 = (function (){var statearr_48003 = state_47990;(statearr_48003[14] = inst_47870);
(statearr_48003[15] = inst_47867);
(statearr_48003[16] = inst_47868);
(statearr_48003[17] = inst_47869);
return statearr_48003;
})();var statearr_48004_48086 = state_47990__$1;(statearr_48004_48086[2] = null);
(statearr_48004_48086[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 37))
{var inst_47947 = (state_47990[9]);var inst_47956 = cljs.core.first.call(null,inst_47947);var state_47990__$1 = (function (){var statearr_48005 = state_47990;(statearr_48005[18] = inst_47956);
return statearr_48005;
})();var statearr_48006_48087 = state_47990__$1;(statearr_48006_48087[2] = null);
(statearr_48006_48087[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 6))
{var inst_47918 = (state_47990[19]);var inst_47917 = cljs.core.deref.call(null,cs);var inst_47918__$1 = cljs.core.keys.call(null,inst_47917);var inst_47919 = cljs.core.count.call(null,inst_47918__$1);var inst_47920 = cljs.core.reset_BANG_.call(null,dctr,inst_47919);var inst_47925 = cljs.core.seq.call(null,inst_47918__$1);var inst_47926 = inst_47925;var inst_47927 = null;var inst_47928 = 0;var inst_47929 = 0;var state_47990__$1 = (function (){var statearr_48007 = state_47990;(statearr_48007[10] = inst_47926);
(statearr_48007[11] = inst_47928);
(statearr_48007[12] = inst_47927);
(statearr_48007[20] = inst_47920);
(statearr_48007[13] = inst_47929);
(statearr_48007[19] = inst_47918__$1);
return statearr_48007;
})();var statearr_48008_48088 = state_47990__$1;(statearr_48008_48088[2] = null);
(statearr_48008_48088[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 38))
{var inst_47969 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48009_48089 = state_47990__$1;(statearr_48009_48089[2] = inst_47969);
(statearr_48009_48089[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 7))
{var inst_47986 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48010_48090 = state_47990__$1;(statearr_48010_48090[2] = inst_47986);
(statearr_48010_48090[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 39))
{var inst_47947 = (state_47990[9]);var inst_47965 = (state_47990[2]);var inst_47966 = cljs.core.next.call(null,inst_47947);var inst_47926 = inst_47966;var inst_47927 = null;var inst_47928 = 0;var inst_47929 = 0;var state_47990__$1 = (function (){var statearr_48011 = state_47990;(statearr_48011[10] = inst_47926);
(statearr_48011[11] = inst_47928);
(statearr_48011[12] = inst_47927);
(statearr_48011[13] = inst_47929);
(statearr_48011[21] = inst_47965);
return statearr_48011;
})();var statearr_48012_48091 = state_47990__$1;(statearr_48012_48091[2] = null);
(statearr_48012_48091[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 8))
{var inst_47870 = (state_47990[14]);var inst_47869 = (state_47990[17]);var inst_47872 = (inst_47870 < inst_47869);var inst_47873 = inst_47872;var state_47990__$1 = state_47990;if(cljs.core.truth_(inst_47873))
{var statearr_48013_48092 = state_47990__$1;(statearr_48013_48092[1] = 10);
} else
{var statearr_48014_48093 = state_47990__$1;(statearr_48014_48093[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 40))
{var inst_47956 = (state_47990[18]);var inst_47957 = (state_47990[2]);var inst_47958 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_47959 = cljs.core.async.untap_STAR_.call(null,m,inst_47956);var state_47990__$1 = (function (){var statearr_48015 = state_47990;(statearr_48015[22] = inst_47957);
(statearr_48015[23] = inst_47958);
return statearr_48015;
})();var statearr_48016_48094 = state_47990__$1;(statearr_48016_48094[2] = inst_47959);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47990__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 9))
{var inst_47915 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48017_48095 = state_47990__$1;(statearr_48017_48095[2] = inst_47915);
(statearr_48017_48095[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 41))
{var inst_47956 = (state_47990[18]);var inst_47858 = (state_47990[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47990,40,Object,null,39);var inst_47963 = cljs.core.async.put_BANG_.call(null,inst_47956,inst_47858,done);var state_47990__$1 = state_47990;var statearr_48018_48096 = state_47990__$1;(statearr_48018_48096[2] = inst_47963);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47990__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 10))
{var inst_47870 = (state_47990[14]);var inst_47868 = (state_47990[16]);var inst_47876 = cljs.core._nth.call(null,inst_47868,inst_47870);var inst_47877 = cljs.core.nth.call(null,inst_47876,0,null);var inst_47878 = cljs.core.nth.call(null,inst_47876,1,null);var state_47990__$1 = (function (){var statearr_48019 = state_47990;(statearr_48019[24] = inst_47877);
return statearr_48019;
})();if(cljs.core.truth_(inst_47878))
{var statearr_48020_48097 = state_47990__$1;(statearr_48020_48097[1] = 13);
} else
{var statearr_48021_48098 = state_47990__$1;(statearr_48021_48098[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 42))
{var state_47990__$1 = state_47990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47990__$1,45,dchan);
} else
{if((state_val_47991 === 11))
{var inst_47887 = (state_47990[25]);var inst_47867 = (state_47990[15]);var inst_47887__$1 = cljs.core.seq.call(null,inst_47867);var state_47990__$1 = (function (){var statearr_48022 = state_47990;(statearr_48022[25] = inst_47887__$1);
return statearr_48022;
})();if(inst_47887__$1)
{var statearr_48023_48099 = state_47990__$1;(statearr_48023_48099[1] = 16);
} else
{var statearr_48024_48100 = state_47990__$1;(statearr_48024_48100[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 43))
{var state_47990__$1 = state_47990;var statearr_48025_48101 = state_47990__$1;(statearr_48025_48101[2] = null);
(statearr_48025_48101[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 12))
{var inst_47913 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48026_48102 = state_47990__$1;(statearr_48026_48102[2] = inst_47913);
(statearr_48026_48102[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 44))
{var inst_47983 = (state_47990[2]);var state_47990__$1 = (function (){var statearr_48027 = state_47990;(statearr_48027[26] = inst_47983);
return statearr_48027;
})();var statearr_48028_48103 = state_47990__$1;(statearr_48028_48103[2] = null);
(statearr_48028_48103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 13))
{var inst_47877 = (state_47990[24]);var inst_47880 = cljs.core.async.close_BANG_.call(null,inst_47877);var state_47990__$1 = state_47990;var statearr_48029_48104 = state_47990__$1;(statearr_48029_48104[2] = inst_47880);
(statearr_48029_48104[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 45))
{var inst_47980 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48033_48105 = state_47990__$1;(statearr_48033_48105[2] = inst_47980);
(statearr_48033_48105[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 14))
{var state_47990__$1 = state_47990;var statearr_48034_48106 = state_47990__$1;(statearr_48034_48106[2] = null);
(statearr_48034_48106[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 15))
{var inst_47870 = (state_47990[14]);var inst_47867 = (state_47990[15]);var inst_47868 = (state_47990[16]);var inst_47869 = (state_47990[17]);var inst_47883 = (state_47990[2]);var inst_47884 = (inst_47870 + 1);var tmp48030 = inst_47867;var tmp48031 = inst_47868;var tmp48032 = inst_47869;var inst_47867__$1 = tmp48030;var inst_47868__$1 = tmp48031;var inst_47869__$1 = tmp48032;var inst_47870__$1 = inst_47884;var state_47990__$1 = (function (){var statearr_48035 = state_47990;(statearr_48035[14] = inst_47870__$1);
(statearr_48035[27] = inst_47883);
(statearr_48035[15] = inst_47867__$1);
(statearr_48035[16] = inst_47868__$1);
(statearr_48035[17] = inst_47869__$1);
return statearr_48035;
})();var statearr_48036_48107 = state_47990__$1;(statearr_48036_48107[2] = null);
(statearr_48036_48107[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 16))
{var inst_47887 = (state_47990[25]);var inst_47889 = cljs.core.chunked_seq_QMARK_.call(null,inst_47887);var state_47990__$1 = state_47990;if(inst_47889)
{var statearr_48037_48108 = state_47990__$1;(statearr_48037_48108[1] = 19);
} else
{var statearr_48038_48109 = state_47990__$1;(statearr_48038_48109[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 17))
{var state_47990__$1 = state_47990;var statearr_48039_48110 = state_47990__$1;(statearr_48039_48110[2] = null);
(statearr_48039_48110[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 18))
{var inst_47911 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48040_48111 = state_47990__$1;(statearr_48040_48111[2] = inst_47911);
(statearr_48040_48111[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 19))
{var inst_47887 = (state_47990[25]);var inst_47891 = cljs.core.chunk_first.call(null,inst_47887);var inst_47892 = cljs.core.chunk_rest.call(null,inst_47887);var inst_47893 = cljs.core.count.call(null,inst_47891);var inst_47867 = inst_47892;var inst_47868 = inst_47891;var inst_47869 = inst_47893;var inst_47870 = 0;var state_47990__$1 = (function (){var statearr_48041 = state_47990;(statearr_48041[14] = inst_47870);
(statearr_48041[15] = inst_47867);
(statearr_48041[16] = inst_47868);
(statearr_48041[17] = inst_47869);
return statearr_48041;
})();var statearr_48042_48112 = state_47990__$1;(statearr_48042_48112[2] = null);
(statearr_48042_48112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 20))
{var inst_47887 = (state_47990[25]);var inst_47897 = cljs.core.first.call(null,inst_47887);var inst_47898 = cljs.core.nth.call(null,inst_47897,0,null);var inst_47899 = cljs.core.nth.call(null,inst_47897,1,null);var state_47990__$1 = (function (){var statearr_48043 = state_47990;(statearr_48043[28] = inst_47898);
return statearr_48043;
})();if(cljs.core.truth_(inst_47899))
{var statearr_48044_48113 = state_47990__$1;(statearr_48044_48113[1] = 22);
} else
{var statearr_48045_48114 = state_47990__$1;(statearr_48045_48114[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 21))
{var inst_47908 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48046_48115 = state_47990__$1;(statearr_48046_48115[2] = inst_47908);
(statearr_48046_48115[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 22))
{var inst_47898 = (state_47990[28]);var inst_47901 = cljs.core.async.close_BANG_.call(null,inst_47898);var state_47990__$1 = state_47990;var statearr_48047_48116 = state_47990__$1;(statearr_48047_48116[2] = inst_47901);
(statearr_48047_48116[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 23))
{var state_47990__$1 = state_47990;var statearr_48048_48117 = state_47990__$1;(statearr_48048_48117[2] = null);
(statearr_48048_48117[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 24))
{var inst_47887 = (state_47990[25]);var inst_47904 = (state_47990[2]);var inst_47905 = cljs.core.next.call(null,inst_47887);var inst_47867 = inst_47905;var inst_47868 = null;var inst_47869 = 0;var inst_47870 = 0;var state_47990__$1 = (function (){var statearr_48049 = state_47990;(statearr_48049[14] = inst_47870);
(statearr_48049[15] = inst_47867);
(statearr_48049[16] = inst_47868);
(statearr_48049[17] = inst_47869);
(statearr_48049[29] = inst_47904);
return statearr_48049;
})();var statearr_48050_48118 = state_47990__$1;(statearr_48050_48118[2] = null);
(statearr_48050_48118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 25))
{var inst_47928 = (state_47990[11]);var inst_47929 = (state_47990[13]);var inst_47931 = (inst_47929 < inst_47928);var inst_47932 = inst_47931;var state_47990__$1 = state_47990;if(cljs.core.truth_(inst_47932))
{var statearr_48051_48119 = state_47990__$1;(statearr_48051_48119[1] = 27);
} else
{var statearr_48052_48120 = state_47990__$1;(statearr_48052_48120[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 26))
{var inst_47918 = (state_47990[19]);var inst_47976 = (state_47990[2]);var inst_47977 = cljs.core.seq.call(null,inst_47918);var state_47990__$1 = (function (){var statearr_48053 = state_47990;(statearr_48053[30] = inst_47976);
return statearr_48053;
})();if(inst_47977)
{var statearr_48054_48121 = state_47990__$1;(statearr_48054_48121[1] = 42);
} else
{var statearr_48055_48122 = state_47990__$1;(statearr_48055_48122[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 27))
{var inst_47927 = (state_47990[12]);var inst_47929 = (state_47990[13]);var inst_47934 = cljs.core._nth.call(null,inst_47927,inst_47929);var state_47990__$1 = (function (){var statearr_48056 = state_47990;(statearr_48056[7] = inst_47934);
return statearr_48056;
})();var statearr_48057_48123 = state_47990__$1;(statearr_48057_48123[2] = null);
(statearr_48057_48123[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 28))
{var inst_47926 = (state_47990[10]);var inst_47947 = (state_47990[9]);var inst_47947__$1 = cljs.core.seq.call(null,inst_47926);var state_47990__$1 = (function (){var statearr_48061 = state_47990;(statearr_48061[9] = inst_47947__$1);
return statearr_48061;
})();if(inst_47947__$1)
{var statearr_48062_48124 = state_47990__$1;(statearr_48062_48124[1] = 33);
} else
{var statearr_48063_48125 = state_47990__$1;(statearr_48063_48125[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 29))
{var inst_47974 = (state_47990[2]);var state_47990__$1 = state_47990;var statearr_48064_48126 = state_47990__$1;(statearr_48064_48126[2] = inst_47974);
(statearr_48064_48126[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 30))
{var inst_47926 = (state_47990[10]);var inst_47928 = (state_47990[11]);var inst_47927 = (state_47990[12]);var inst_47929 = (state_47990[13]);var inst_47943 = (state_47990[2]);var inst_47944 = (inst_47929 + 1);var tmp48058 = inst_47926;var tmp48059 = inst_47928;var tmp48060 = inst_47927;var inst_47926__$1 = tmp48058;var inst_47927__$1 = tmp48060;var inst_47928__$1 = tmp48059;var inst_47929__$1 = inst_47944;var state_47990__$1 = (function (){var statearr_48065 = state_47990;(statearr_48065[10] = inst_47926__$1);
(statearr_48065[11] = inst_47928__$1);
(statearr_48065[12] = inst_47927__$1);
(statearr_48065[13] = inst_47929__$1);
(statearr_48065[31] = inst_47943);
return statearr_48065;
})();var statearr_48066_48127 = state_47990__$1;(statearr_48066_48127[2] = null);
(statearr_48066_48127[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47991 === 31))
{var inst_47934 = (state_47990[7]);var inst_47935 = (state_47990[2]);var inst_47936 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_47937 = cljs.core.async.untap_STAR_.call(null,m,inst_47934);var state_47990__$1 = (function (){var statearr_48067 = state_47990;(statearr_48067[32] = inst_47936);
(statearr_48067[33] = inst_47935);
return statearr_48067;
})();var statearr_48068_48128 = state_47990__$1;(statearr_48068_48128[2] = inst_47937);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47990__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48072[0] = state_machine__5548__auto__);
(statearr_48072[1] = 1);
return statearr_48072;
});
var state_machine__5548__auto____1 = (function (state_47990){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47990);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48073){if((e48073 instanceof Object))
{var ex__5551__auto__ = e48073;var statearr_48074_48129 = state_47990;(statearr_48074_48129[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47990);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48130 = state_47990;
state_47990 = G__48130;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47990){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48075 = f__5563__auto__.call(null);(statearr_48075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48076);
return statearr_48075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj48132 = {};return obj48132;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t48242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48242 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta48243){
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
this.meta48243 = meta48243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48242.cljs$lang$type = true;
cljs.core.async.t48242.cljs$lang$ctorStr = "cljs.core.async/t48242";
cljs.core.async.t48242.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48242");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48242.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48244){var self__ = this;
var _48244__$1 = this;return self__.meta48243;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48244,meta48243__$1){var self__ = this;
var _48244__$1 = this;return (new cljs.core.async.t48242(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta48243__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48242 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48242(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48243){return (new cljs.core.async.t48242(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48243));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48242(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___48351 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48309){var state_val_48310 = (state_48309[1]);if((state_val_48310 === 1))
{var inst_48248 = (state_48309[7]);var inst_48248__$1 = calc_state.call(null);var inst_48249 = cljs.core.seq_QMARK_.call(null,inst_48248__$1);var state_48309__$1 = (function (){var statearr_48311 = state_48309;(statearr_48311[7] = inst_48248__$1);
return statearr_48311;
})();if(inst_48249)
{var statearr_48312_48352 = state_48309__$1;(statearr_48312_48352[1] = 2);
} else
{var statearr_48313_48353 = state_48309__$1;(statearr_48313_48353[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 2))
{var inst_48248 = (state_48309[7]);var inst_48251 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48248);var state_48309__$1 = state_48309;var statearr_48314_48354 = state_48309__$1;(statearr_48314_48354[2] = inst_48251);
(statearr_48314_48354[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 3))
{var inst_48248 = (state_48309[7]);var state_48309__$1 = state_48309;var statearr_48315_48355 = state_48309__$1;(statearr_48315_48355[2] = inst_48248);
(statearr_48315_48355[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 4))
{var inst_48248 = (state_48309[7]);var inst_48254 = (state_48309[2]);var inst_48255 = cljs.core.get.call(null,inst_48254,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48256 = cljs.core.get.call(null,inst_48254,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48257 = cljs.core.get.call(null,inst_48254,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48258 = inst_48248;var state_48309__$1 = (function (){var statearr_48316 = state_48309;(statearr_48316[8] = inst_48258);
(statearr_48316[9] = inst_48256);
(statearr_48316[10] = inst_48257);
(statearr_48316[11] = inst_48255);
return statearr_48316;
})();var statearr_48317_48356 = state_48309__$1;(statearr_48317_48356[2] = null);
(statearr_48317_48356[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 5))
{var inst_48258 = (state_48309[8]);var inst_48261 = cljs.core.seq_QMARK_.call(null,inst_48258);var state_48309__$1 = state_48309;if(inst_48261)
{var statearr_48318_48357 = state_48309__$1;(statearr_48318_48357[1] = 7);
} else
{var statearr_48319_48358 = state_48309__$1;(statearr_48319_48358[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 6))
{var inst_48307 = (state_48309[2]);var state_48309__$1 = state_48309;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48309__$1,inst_48307);
} else
{if((state_val_48310 === 7))
{var inst_48258 = (state_48309[8]);var inst_48263 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48258);var state_48309__$1 = state_48309;var statearr_48320_48359 = state_48309__$1;(statearr_48320_48359[2] = inst_48263);
(statearr_48320_48359[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 8))
{var inst_48258 = (state_48309[8]);var state_48309__$1 = state_48309;var statearr_48321_48360 = state_48309__$1;(statearr_48321_48360[2] = inst_48258);
(statearr_48321_48360[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 9))
{var inst_48266 = (state_48309[12]);var inst_48266__$1 = (state_48309[2]);var inst_48267 = cljs.core.get.call(null,inst_48266__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48268 = cljs.core.get.call(null,inst_48266__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48269 = cljs.core.get.call(null,inst_48266__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_48309__$1 = (function (){var statearr_48322 = state_48309;(statearr_48322[13] = inst_48268);
(statearr_48322[12] = inst_48266__$1);
(statearr_48322[14] = inst_48269);
return statearr_48322;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48309__$1,10,inst_48267);
} else
{if((state_val_48310 === 10))
{var inst_48273 = (state_48309[15]);var inst_48274 = (state_48309[16]);var inst_48272 = (state_48309[2]);var inst_48273__$1 = cljs.core.nth.call(null,inst_48272,0,null);var inst_48274__$1 = cljs.core.nth.call(null,inst_48272,1,null);var inst_48275 = (inst_48273__$1 == null);var inst_48276 = cljs.core._EQ_.call(null,inst_48274__$1,change);var inst_48277 = (inst_48275) || (inst_48276);var state_48309__$1 = (function (){var statearr_48323 = state_48309;(statearr_48323[15] = inst_48273__$1);
(statearr_48323[16] = inst_48274__$1);
return statearr_48323;
})();if(cljs.core.truth_(inst_48277))
{var statearr_48324_48361 = state_48309__$1;(statearr_48324_48361[1] = 11);
} else
{var statearr_48325_48362 = state_48309__$1;(statearr_48325_48362[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 11))
{var inst_48273 = (state_48309[15]);var inst_48279 = (inst_48273 == null);var state_48309__$1 = state_48309;if(cljs.core.truth_(inst_48279))
{var statearr_48326_48363 = state_48309__$1;(statearr_48326_48363[1] = 14);
} else
{var statearr_48327_48364 = state_48309__$1;(statearr_48327_48364[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 12))
{var inst_48288 = (state_48309[17]);var inst_48269 = (state_48309[14]);var inst_48274 = (state_48309[16]);var inst_48288__$1 = inst_48269.call(null,inst_48274);var state_48309__$1 = (function (){var statearr_48328 = state_48309;(statearr_48328[17] = inst_48288__$1);
return statearr_48328;
})();if(cljs.core.truth_(inst_48288__$1))
{var statearr_48329_48365 = state_48309__$1;(statearr_48329_48365[1] = 17);
} else
{var statearr_48330_48366 = state_48309__$1;(statearr_48330_48366[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 13))
{var inst_48305 = (state_48309[2]);var state_48309__$1 = state_48309;var statearr_48331_48367 = state_48309__$1;(statearr_48331_48367[2] = inst_48305);
(statearr_48331_48367[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 14))
{var inst_48274 = (state_48309[16]);var inst_48281 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48274);var state_48309__$1 = state_48309;var statearr_48332_48368 = state_48309__$1;(statearr_48332_48368[2] = inst_48281);
(statearr_48332_48368[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 15))
{var state_48309__$1 = state_48309;var statearr_48333_48369 = state_48309__$1;(statearr_48333_48369[2] = null);
(statearr_48333_48369[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 16))
{var inst_48284 = (state_48309[2]);var inst_48285 = calc_state.call(null);var inst_48258 = inst_48285;var state_48309__$1 = (function (){var statearr_48334 = state_48309;(statearr_48334[18] = inst_48284);
(statearr_48334[8] = inst_48258);
return statearr_48334;
})();var statearr_48335_48370 = state_48309__$1;(statearr_48335_48370[2] = null);
(statearr_48335_48370[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 17))
{var inst_48288 = (state_48309[17]);var state_48309__$1 = state_48309;var statearr_48336_48371 = state_48309__$1;(statearr_48336_48371[2] = inst_48288);
(statearr_48336_48371[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 18))
{var inst_48268 = (state_48309[13]);var inst_48269 = (state_48309[14]);var inst_48274 = (state_48309[16]);var inst_48291 = cljs.core.empty_QMARK_.call(null,inst_48269);var inst_48292 = inst_48268.call(null,inst_48274);var inst_48293 = cljs.core.not.call(null,inst_48292);var inst_48294 = (inst_48291) && (inst_48293);var state_48309__$1 = state_48309;var statearr_48337_48372 = state_48309__$1;(statearr_48337_48372[2] = inst_48294);
(statearr_48337_48372[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 19))
{var inst_48296 = (state_48309[2]);var state_48309__$1 = state_48309;if(cljs.core.truth_(inst_48296))
{var statearr_48338_48373 = state_48309__$1;(statearr_48338_48373[1] = 20);
} else
{var statearr_48339_48374 = state_48309__$1;(statearr_48339_48374[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 20))
{var inst_48273 = (state_48309[15]);var state_48309__$1 = state_48309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48309__$1,23,out,inst_48273);
} else
{if((state_val_48310 === 21))
{var state_48309__$1 = state_48309;var statearr_48340_48375 = state_48309__$1;(statearr_48340_48375[2] = null);
(statearr_48340_48375[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 22))
{var inst_48266 = (state_48309[12]);var inst_48302 = (state_48309[2]);var inst_48258 = inst_48266;var state_48309__$1 = (function (){var statearr_48341 = state_48309;(statearr_48341[8] = inst_48258);
(statearr_48341[19] = inst_48302);
return statearr_48341;
})();var statearr_48342_48376 = state_48309__$1;(statearr_48342_48376[2] = null);
(statearr_48342_48376[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48310 === 23))
{var inst_48299 = (state_48309[2]);var state_48309__$1 = state_48309;var statearr_48343_48377 = state_48309__$1;(statearr_48343_48377[2] = inst_48299);
(statearr_48343_48377[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48347[0] = state_machine__5548__auto__);
(statearr_48347[1] = 1);
return statearr_48347;
});
var state_machine__5548__auto____1 = (function (state_48309){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48309);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48348){if((e48348 instanceof Object))
{var ex__5551__auto__ = e48348;var statearr_48349_48378 = state_48309;(statearr_48349_48378[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48309);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48379 = state_48309;
state_48309 = G__48379;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48309){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48350 = f__5563__auto__.call(null);(statearr_48350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48351);
return statearr_48350;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj48381 = {};return obj48381;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__48382_SHARP_){if(cljs.core.truth_(p1__48382_SHARP_.call(null,topic)))
{return p1__48382_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__48382_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t48507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48507 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta48508){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta48508 = meta48508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48507.cljs$lang$type = true;
cljs.core.async.t48507.cljs$lang$ctorStr = "cljs.core.async/t48507";
cljs.core.async.t48507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48507");
});})(mults,ensure_mult))
;
cljs.core.async.t48507.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t48507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t48507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t48507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t48507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t48507.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t48507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48509){var self__ = this;
var _48509__$1 = this;return self__.meta48508;
});})(mults,ensure_mult))
;
cljs.core.async.t48507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48509,meta48508__$1){var self__ = this;
var _48509__$1 = this;return (new cljs.core.async.t48507(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta48508__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t48507 = ((function (mults,ensure_mult){
return (function __GT_t48507(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48508){return (new cljs.core.async.t48507(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48508));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t48507(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___48631 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48583){var state_val_48584 = (state_48583[1]);if((state_val_48584 === 1))
{var state_48583__$1 = state_48583;var statearr_48585_48632 = state_48583__$1;(statearr_48585_48632[2] = null);
(statearr_48585_48632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 2))
{var state_48583__$1 = state_48583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48583__$1,4,ch);
} else
{if((state_val_48584 === 3))
{var inst_48581 = (state_48583[2]);var state_48583__$1 = state_48583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48583__$1,inst_48581);
} else
{if((state_val_48584 === 4))
{var inst_48512 = (state_48583[7]);var inst_48512__$1 = (state_48583[2]);var inst_48513 = (inst_48512__$1 == null);var state_48583__$1 = (function (){var statearr_48586 = state_48583;(statearr_48586[7] = inst_48512__$1);
return statearr_48586;
})();if(cljs.core.truth_(inst_48513))
{var statearr_48587_48633 = state_48583__$1;(statearr_48587_48633[1] = 5);
} else
{var statearr_48588_48634 = state_48583__$1;(statearr_48588_48634[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 5))
{var inst_48519 = cljs.core.deref.call(null,mults);var inst_48520 = cljs.core.vals.call(null,inst_48519);var inst_48521 = cljs.core.seq.call(null,inst_48520);var inst_48522 = inst_48521;var inst_48523 = null;var inst_48524 = 0;var inst_48525 = 0;var state_48583__$1 = (function (){var statearr_48589 = state_48583;(statearr_48589[8] = inst_48525);
(statearr_48589[9] = inst_48524);
(statearr_48589[10] = inst_48523);
(statearr_48589[11] = inst_48522);
return statearr_48589;
})();var statearr_48590_48635 = state_48583__$1;(statearr_48590_48635[2] = null);
(statearr_48590_48635[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 6))
{var inst_48562 = (state_48583[12]);var inst_48560 = (state_48583[13]);var inst_48512 = (state_48583[7]);var inst_48560__$1 = topic_fn.call(null,inst_48512);var inst_48561 = cljs.core.deref.call(null,mults);var inst_48562__$1 = cljs.core.get.call(null,inst_48561,inst_48560__$1);var state_48583__$1 = (function (){var statearr_48591 = state_48583;(statearr_48591[12] = inst_48562__$1);
(statearr_48591[13] = inst_48560__$1);
return statearr_48591;
})();if(cljs.core.truth_(inst_48562__$1))
{var statearr_48592_48636 = state_48583__$1;(statearr_48592_48636[1] = 19);
} else
{var statearr_48593_48637 = state_48583__$1;(statearr_48593_48637[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 7))
{var inst_48579 = (state_48583[2]);var state_48583__$1 = state_48583;var statearr_48594_48638 = state_48583__$1;(statearr_48594_48638[2] = inst_48579);
(statearr_48594_48638[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 8))
{var inst_48525 = (state_48583[8]);var inst_48524 = (state_48583[9]);var inst_48527 = (inst_48525 < inst_48524);var inst_48528 = inst_48527;var state_48583__$1 = state_48583;if(cljs.core.truth_(inst_48528))
{var statearr_48598_48639 = state_48583__$1;(statearr_48598_48639[1] = 10);
} else
{var statearr_48599_48640 = state_48583__$1;(statearr_48599_48640[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 9))
{var inst_48558 = (state_48583[2]);var state_48583__$1 = state_48583;var statearr_48600_48641 = state_48583__$1;(statearr_48600_48641[2] = inst_48558);
(statearr_48600_48641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 10))
{var inst_48525 = (state_48583[8]);var inst_48524 = (state_48583[9]);var inst_48523 = (state_48583[10]);var inst_48522 = (state_48583[11]);var inst_48530 = cljs.core._nth.call(null,inst_48523,inst_48525);var inst_48531 = cljs.core.async.muxch_STAR_.call(null,inst_48530);var inst_48532 = cljs.core.async.close_BANG_.call(null,inst_48531);var inst_48533 = (inst_48525 + 1);var tmp48595 = inst_48524;var tmp48596 = inst_48523;var tmp48597 = inst_48522;var inst_48522__$1 = tmp48597;var inst_48523__$1 = tmp48596;var inst_48524__$1 = tmp48595;var inst_48525__$1 = inst_48533;var state_48583__$1 = (function (){var statearr_48601 = state_48583;(statearr_48601[14] = inst_48532);
(statearr_48601[8] = inst_48525__$1);
(statearr_48601[9] = inst_48524__$1);
(statearr_48601[10] = inst_48523__$1);
(statearr_48601[11] = inst_48522__$1);
return statearr_48601;
})();var statearr_48602_48642 = state_48583__$1;(statearr_48602_48642[2] = null);
(statearr_48602_48642[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 11))
{var inst_48536 = (state_48583[15]);var inst_48522 = (state_48583[11]);var inst_48536__$1 = cljs.core.seq.call(null,inst_48522);var state_48583__$1 = (function (){var statearr_48603 = state_48583;(statearr_48603[15] = inst_48536__$1);
return statearr_48603;
})();if(inst_48536__$1)
{var statearr_48604_48643 = state_48583__$1;(statearr_48604_48643[1] = 13);
} else
{var statearr_48605_48644 = state_48583__$1;(statearr_48605_48644[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 12))
{var inst_48556 = (state_48583[2]);var state_48583__$1 = state_48583;var statearr_48606_48645 = state_48583__$1;(statearr_48606_48645[2] = inst_48556);
(statearr_48606_48645[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 13))
{var inst_48536 = (state_48583[15]);var inst_48538 = cljs.core.chunked_seq_QMARK_.call(null,inst_48536);var state_48583__$1 = state_48583;if(inst_48538)
{var statearr_48607_48646 = state_48583__$1;(statearr_48607_48646[1] = 16);
} else
{var statearr_48608_48647 = state_48583__$1;(statearr_48608_48647[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 14))
{var state_48583__$1 = state_48583;var statearr_48609_48648 = state_48583__$1;(statearr_48609_48648[2] = null);
(statearr_48609_48648[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 15))
{var inst_48554 = (state_48583[2]);var state_48583__$1 = state_48583;var statearr_48610_48649 = state_48583__$1;(statearr_48610_48649[2] = inst_48554);
(statearr_48610_48649[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 16))
{var inst_48536 = (state_48583[15]);var inst_48540 = cljs.core.chunk_first.call(null,inst_48536);var inst_48541 = cljs.core.chunk_rest.call(null,inst_48536);var inst_48542 = cljs.core.count.call(null,inst_48540);var inst_48522 = inst_48541;var inst_48523 = inst_48540;var inst_48524 = inst_48542;var inst_48525 = 0;var state_48583__$1 = (function (){var statearr_48611 = state_48583;(statearr_48611[8] = inst_48525);
(statearr_48611[9] = inst_48524);
(statearr_48611[10] = inst_48523);
(statearr_48611[11] = inst_48522);
return statearr_48611;
})();var statearr_48612_48650 = state_48583__$1;(statearr_48612_48650[2] = null);
(statearr_48612_48650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 17))
{var inst_48536 = (state_48583[15]);var inst_48545 = cljs.core.first.call(null,inst_48536);var inst_48546 = cljs.core.async.muxch_STAR_.call(null,inst_48545);var inst_48547 = cljs.core.async.close_BANG_.call(null,inst_48546);var inst_48548 = cljs.core.next.call(null,inst_48536);var inst_48522 = inst_48548;var inst_48523 = null;var inst_48524 = 0;var inst_48525 = 0;var state_48583__$1 = (function (){var statearr_48613 = state_48583;(statearr_48613[8] = inst_48525);
(statearr_48613[9] = inst_48524);
(statearr_48613[10] = inst_48523);
(statearr_48613[11] = inst_48522);
(statearr_48613[16] = inst_48547);
return statearr_48613;
})();var statearr_48614_48651 = state_48583__$1;(statearr_48614_48651[2] = null);
(statearr_48614_48651[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 18))
{var inst_48551 = (state_48583[2]);var state_48583__$1 = state_48583;var statearr_48615_48652 = state_48583__$1;(statearr_48615_48652[2] = inst_48551);
(statearr_48615_48652[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 19))
{var state_48583__$1 = state_48583;var statearr_48616_48653 = state_48583__$1;(statearr_48616_48653[2] = null);
(statearr_48616_48653[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 20))
{var state_48583__$1 = state_48583;var statearr_48617_48654 = state_48583__$1;(statearr_48617_48654[2] = null);
(statearr_48617_48654[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 21))
{var inst_48576 = (state_48583[2]);var state_48583__$1 = (function (){var statearr_48618 = state_48583;(statearr_48618[17] = inst_48576);
return statearr_48618;
})();var statearr_48619_48655 = state_48583__$1;(statearr_48619_48655[2] = null);
(statearr_48619_48655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 22))
{var inst_48573 = (state_48583[2]);var state_48583__$1 = state_48583;var statearr_48620_48656 = state_48583__$1;(statearr_48620_48656[2] = inst_48573);
(statearr_48620_48656[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 23))
{var inst_48560 = (state_48583[13]);var inst_48564 = (state_48583[2]);var inst_48565 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48560);var state_48583__$1 = (function (){var statearr_48621 = state_48583;(statearr_48621[18] = inst_48564);
return statearr_48621;
})();var statearr_48622_48657 = state_48583__$1;(statearr_48622_48657[2] = inst_48565);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48583__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48584 === 24))
{var inst_48562 = (state_48583[12]);var inst_48512 = (state_48583[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48583,23,Object,null,22);var inst_48569 = cljs.core.async.muxch_STAR_.call(null,inst_48562);var state_48583__$1 = state_48583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48583__$1,25,inst_48569,inst_48512);
} else
{if((state_val_48584 === 25))
{var inst_48571 = (state_48583[2]);var state_48583__$1 = state_48583;var statearr_48623_48658 = state_48583__$1;(statearr_48623_48658[2] = inst_48571);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48583__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48627[0] = state_machine__5548__auto__);
(statearr_48627[1] = 1);
return statearr_48627;
});
var state_machine__5548__auto____1 = (function (state_48583){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48583);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48628){if((e48628 instanceof Object))
{var ex__5551__auto__ = e48628;var statearr_48629_48659 = state_48583;(statearr_48629_48659[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48660 = state_48583;
state_48583 = G__48660;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48583){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48630 = f__5563__auto__.call(null);(statearr_48630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48631);
return statearr_48630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
,cljs.core.range.call(null,cnt));var c__5562__auto___48797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48767){var state_val_48768 = (state_48767[1]);if((state_val_48768 === 1))
{var state_48767__$1 = state_48767;var statearr_48769_48798 = state_48767__$1;(statearr_48769_48798[2] = null);
(statearr_48769_48798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 2))
{var inst_48730 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_48731 = 0;var state_48767__$1 = (function (){var statearr_48770 = state_48767;(statearr_48770[7] = inst_48731);
(statearr_48770[8] = inst_48730);
return statearr_48770;
})();var statearr_48771_48799 = state_48767__$1;(statearr_48771_48799[2] = null);
(statearr_48771_48799[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 3))
{var inst_48765 = (state_48767[2]);var state_48767__$1 = state_48767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48767__$1,inst_48765);
} else
{if((state_val_48768 === 4))
{var inst_48731 = (state_48767[7]);var inst_48733 = (inst_48731 < cnt);var state_48767__$1 = state_48767;if(cljs.core.truth_(inst_48733))
{var statearr_48772_48800 = state_48767__$1;(statearr_48772_48800[1] = 6);
} else
{var statearr_48773_48801 = state_48767__$1;(statearr_48773_48801[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 5))
{var inst_48751 = (state_48767[2]);var state_48767__$1 = (function (){var statearr_48774 = state_48767;(statearr_48774[9] = inst_48751);
return statearr_48774;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48767__$1,12,dchan);
} else
{if((state_val_48768 === 6))
{var state_48767__$1 = state_48767;var statearr_48775_48802 = state_48767__$1;(statearr_48775_48802[2] = null);
(statearr_48775_48802[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 7))
{var state_48767__$1 = state_48767;var statearr_48776_48803 = state_48767__$1;(statearr_48776_48803[2] = null);
(statearr_48776_48803[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 8))
{var inst_48749 = (state_48767[2]);var state_48767__$1 = state_48767;var statearr_48777_48804 = state_48767__$1;(statearr_48777_48804[2] = inst_48749);
(statearr_48777_48804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 9))
{var inst_48731 = (state_48767[7]);var inst_48744 = (state_48767[2]);var inst_48745 = (inst_48731 + 1);var inst_48731__$1 = inst_48745;var state_48767__$1 = (function (){var statearr_48778 = state_48767;(statearr_48778[7] = inst_48731__$1);
(statearr_48778[10] = inst_48744);
return statearr_48778;
})();var statearr_48779_48805 = state_48767__$1;(statearr_48779_48805[2] = null);
(statearr_48779_48805[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 10))
{var inst_48735 = (state_48767[2]);var inst_48736 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_48767__$1 = (function (){var statearr_48780 = state_48767;(statearr_48780[11] = inst_48735);
return statearr_48780;
})();var statearr_48781_48806 = state_48767__$1;(statearr_48781_48806[2] = inst_48736);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48767__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 11))
{var inst_48731 = (state_48767[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48767,10,Object,null,9);var inst_48740 = chs__$1.call(null,inst_48731);var inst_48741 = done.call(null,inst_48731);var inst_48742 = cljs.core.async.take_BANG_.call(null,inst_48740,inst_48741);var state_48767__$1 = state_48767;var statearr_48782_48807 = state_48767__$1;(statearr_48782_48807[2] = inst_48742);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48767__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 12))
{var inst_48753 = (state_48767[12]);var inst_48753__$1 = (state_48767[2]);var inst_48754 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48753__$1);var state_48767__$1 = (function (){var statearr_48783 = state_48767;(statearr_48783[12] = inst_48753__$1);
return statearr_48783;
})();if(cljs.core.truth_(inst_48754))
{var statearr_48784_48808 = state_48767__$1;(statearr_48784_48808[1] = 13);
} else
{var statearr_48785_48809 = state_48767__$1;(statearr_48785_48809[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 13))
{var inst_48756 = cljs.core.async.close_BANG_.call(null,out);var state_48767__$1 = state_48767;var statearr_48786_48810 = state_48767__$1;(statearr_48786_48810[2] = inst_48756);
(statearr_48786_48810[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 14))
{var inst_48753 = (state_48767[12]);var inst_48758 = cljs.core.apply.call(null,f,inst_48753);var state_48767__$1 = state_48767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48767__$1,16,out,inst_48758);
} else
{if((state_val_48768 === 15))
{var inst_48763 = (state_48767[2]);var state_48767__$1 = state_48767;var statearr_48787_48811 = state_48767__$1;(statearr_48787_48811[2] = inst_48763);
(statearr_48787_48811[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48768 === 16))
{var inst_48760 = (state_48767[2]);var state_48767__$1 = (function (){var statearr_48788 = state_48767;(statearr_48788[13] = inst_48760);
return statearr_48788;
})();var statearr_48789_48812 = state_48767__$1;(statearr_48789_48812[2] = null);
(statearr_48789_48812[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48793[0] = state_machine__5548__auto__);
(statearr_48793[1] = 1);
return statearr_48793;
});
var state_machine__5548__auto____1 = (function (state_48767){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48767);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48794){if((e48794 instanceof Object))
{var ex__5551__auto__ = e48794;var statearr_48795_48813 = state_48767;(statearr_48795_48813[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48814 = state_48767;
state_48767 = G__48814;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48767){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48796 = f__5563__auto__.call(null);(statearr_48796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48797);
return statearr_48796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___48922 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48898){var state_val_48899 = (state_48898[1]);if((state_val_48899 === 1))
{var inst_48869 = cljs.core.vec.call(null,chs);var inst_48870 = inst_48869;var state_48898__$1 = (function (){var statearr_48900 = state_48898;(statearr_48900[7] = inst_48870);
return statearr_48900;
})();var statearr_48901_48923 = state_48898__$1;(statearr_48901_48923[2] = null);
(statearr_48901_48923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48899 === 2))
{var inst_48870 = (state_48898[7]);var inst_48872 = cljs.core.count.call(null,inst_48870);var inst_48873 = (inst_48872 > 0);var state_48898__$1 = state_48898;if(cljs.core.truth_(inst_48873))
{var statearr_48902_48924 = state_48898__$1;(statearr_48902_48924[1] = 4);
} else
{var statearr_48903_48925 = state_48898__$1;(statearr_48903_48925[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48899 === 3))
{var inst_48896 = (state_48898[2]);var state_48898__$1 = state_48898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48898__$1,inst_48896);
} else
{if((state_val_48899 === 4))
{var inst_48870 = (state_48898[7]);var state_48898__$1 = state_48898;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48898__$1,7,inst_48870);
} else
{if((state_val_48899 === 5))
{var inst_48892 = cljs.core.async.close_BANG_.call(null,out);var state_48898__$1 = state_48898;var statearr_48904_48926 = state_48898__$1;(statearr_48904_48926[2] = inst_48892);
(statearr_48904_48926[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48899 === 6))
{var inst_48894 = (state_48898[2]);var state_48898__$1 = state_48898;var statearr_48905_48927 = state_48898__$1;(statearr_48905_48927[2] = inst_48894);
(statearr_48905_48927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48899 === 7))
{var inst_48878 = (state_48898[8]);var inst_48877 = (state_48898[9]);var inst_48877__$1 = (state_48898[2]);var inst_48878__$1 = cljs.core.nth.call(null,inst_48877__$1,0,null);var inst_48879 = cljs.core.nth.call(null,inst_48877__$1,1,null);var inst_48880 = (inst_48878__$1 == null);var state_48898__$1 = (function (){var statearr_48906 = state_48898;(statearr_48906[8] = inst_48878__$1);
(statearr_48906[10] = inst_48879);
(statearr_48906[9] = inst_48877__$1);
return statearr_48906;
})();if(cljs.core.truth_(inst_48880))
{var statearr_48907_48928 = state_48898__$1;(statearr_48907_48928[1] = 8);
} else
{var statearr_48908_48929 = state_48898__$1;(statearr_48908_48929[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48899 === 8))
{var inst_48878 = (state_48898[8]);var inst_48879 = (state_48898[10]);var inst_48877 = (state_48898[9]);var inst_48870 = (state_48898[7]);var inst_48882 = (function (){var c = inst_48879;var v = inst_48878;var vec__48875 = inst_48877;var cs = inst_48870;return ((function (c,v,vec__48875,cs,inst_48878,inst_48879,inst_48877,inst_48870,state_val_48899){
return (function (p1__48815_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__48815_SHARP_);
});
;})(c,v,vec__48875,cs,inst_48878,inst_48879,inst_48877,inst_48870,state_val_48899))
})();var inst_48883 = cljs.core.filterv.call(null,inst_48882,inst_48870);var inst_48870__$1 = inst_48883;var state_48898__$1 = (function (){var statearr_48909 = state_48898;(statearr_48909[7] = inst_48870__$1);
return statearr_48909;
})();var statearr_48910_48930 = state_48898__$1;(statearr_48910_48930[2] = null);
(statearr_48910_48930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48899 === 9))
{var inst_48878 = (state_48898[8]);var state_48898__$1 = state_48898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48898__$1,11,out,inst_48878);
} else
{if((state_val_48899 === 10))
{var inst_48890 = (state_48898[2]);var state_48898__$1 = state_48898;var statearr_48912_48931 = state_48898__$1;(statearr_48912_48931[2] = inst_48890);
(statearr_48912_48931[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48899 === 11))
{var inst_48870 = (state_48898[7]);var inst_48887 = (state_48898[2]);var tmp48911 = inst_48870;var inst_48870__$1 = tmp48911;var state_48898__$1 = (function (){var statearr_48913 = state_48898;(statearr_48913[11] = inst_48887);
(statearr_48913[7] = inst_48870__$1);
return statearr_48913;
})();var statearr_48914_48932 = state_48898__$1;(statearr_48914_48932[2] = null);
(statearr_48914_48932[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_48918 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48918[0] = state_machine__5548__auto__);
(statearr_48918[1] = 1);
return statearr_48918;
});
var state_machine__5548__auto____1 = (function (state_48898){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48919){if((e48919 instanceof Object))
{var ex__5551__auto__ = e48919;var statearr_48920_48933 = state_48898;(statearr_48920_48933[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48934 = state_48898;
state_48898 = G__48934;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48898){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48921 = f__5563__auto__.call(null);(statearr_48921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48922);
return statearr_48921;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49027 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49004){var state_val_49005 = (state_49004[1]);if((state_val_49005 === 1))
{var inst_48981 = 0;var state_49004__$1 = (function (){var statearr_49006 = state_49004;(statearr_49006[7] = inst_48981);
return statearr_49006;
})();var statearr_49007_49028 = state_49004__$1;(statearr_49007_49028[2] = null);
(statearr_49007_49028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49005 === 2))
{var inst_48981 = (state_49004[7]);var inst_48983 = (inst_48981 < n);var state_49004__$1 = state_49004;if(cljs.core.truth_(inst_48983))
{var statearr_49008_49029 = state_49004__$1;(statearr_49008_49029[1] = 4);
} else
{var statearr_49009_49030 = state_49004__$1;(statearr_49009_49030[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49005 === 3))
{var inst_49001 = (state_49004[2]);var inst_49002 = cljs.core.async.close_BANG_.call(null,out);var state_49004__$1 = (function (){var statearr_49010 = state_49004;(statearr_49010[8] = inst_49001);
return statearr_49010;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49004__$1,inst_49002);
} else
{if((state_val_49005 === 4))
{var state_49004__$1 = state_49004;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49004__$1,7,ch);
} else
{if((state_val_49005 === 5))
{var state_49004__$1 = state_49004;var statearr_49011_49031 = state_49004__$1;(statearr_49011_49031[2] = null);
(statearr_49011_49031[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49005 === 6))
{var inst_48999 = (state_49004[2]);var state_49004__$1 = state_49004;var statearr_49012_49032 = state_49004__$1;(statearr_49012_49032[2] = inst_48999);
(statearr_49012_49032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49005 === 7))
{var inst_48986 = (state_49004[9]);var inst_48986__$1 = (state_49004[2]);var inst_48987 = (inst_48986__$1 == null);var inst_48988 = cljs.core.not.call(null,inst_48987);var state_49004__$1 = (function (){var statearr_49013 = state_49004;(statearr_49013[9] = inst_48986__$1);
return statearr_49013;
})();if(inst_48988)
{var statearr_49014_49033 = state_49004__$1;(statearr_49014_49033[1] = 8);
} else
{var statearr_49015_49034 = state_49004__$1;(statearr_49015_49034[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49005 === 8))
{var inst_48986 = (state_49004[9]);var state_49004__$1 = state_49004;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49004__$1,11,out,inst_48986);
} else
{if((state_val_49005 === 9))
{var state_49004__$1 = state_49004;var statearr_49016_49035 = state_49004__$1;(statearr_49016_49035[2] = null);
(statearr_49016_49035[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49005 === 10))
{var inst_48996 = (state_49004[2]);var state_49004__$1 = state_49004;var statearr_49017_49036 = state_49004__$1;(statearr_49017_49036[2] = inst_48996);
(statearr_49017_49036[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49005 === 11))
{var inst_48981 = (state_49004[7]);var inst_48991 = (state_49004[2]);var inst_48992 = (inst_48981 + 1);var inst_48981__$1 = inst_48992;var state_49004__$1 = (function (){var statearr_49018 = state_49004;(statearr_49018[7] = inst_48981__$1);
(statearr_49018[10] = inst_48991);
return statearr_49018;
})();var statearr_49019_49037 = state_49004__$1;(statearr_49019_49037[2] = null);
(statearr_49019_49037[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_49023 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49023[0] = state_machine__5548__auto__);
(statearr_49023[1] = 1);
return statearr_49023;
});
var state_machine__5548__auto____1 = (function (state_49004){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49004);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49024){if((e49024 instanceof Object))
{var ex__5551__auto__ = e49024;var statearr_49025_49038 = state_49004;(statearr_49025_49038[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49004);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49039 = state_49004;
state_49004 = G__49039;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49004){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49026 = f__5563__auto__.call(null);(statearr_49026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49027);
return statearr_49026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49136 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49111){var state_val_49112 = (state_49111[1]);if((state_val_49112 === 1))
{var inst_49088 = null;var state_49111__$1 = (function (){var statearr_49113 = state_49111;(statearr_49113[7] = inst_49088);
return statearr_49113;
})();var statearr_49114_49137 = state_49111__$1;(statearr_49114_49137[2] = null);
(statearr_49114_49137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49112 === 2))
{var state_49111__$1 = state_49111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49111__$1,4,ch);
} else
{if((state_val_49112 === 3))
{var inst_49108 = (state_49111[2]);var inst_49109 = cljs.core.async.close_BANG_.call(null,out);var state_49111__$1 = (function (){var statearr_49115 = state_49111;(statearr_49115[8] = inst_49108);
return statearr_49115;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49111__$1,inst_49109);
} else
{if((state_val_49112 === 4))
{var inst_49091 = (state_49111[9]);var inst_49091__$1 = (state_49111[2]);var inst_49092 = (inst_49091__$1 == null);var inst_49093 = cljs.core.not.call(null,inst_49092);var state_49111__$1 = (function (){var statearr_49116 = state_49111;(statearr_49116[9] = inst_49091__$1);
return statearr_49116;
})();if(inst_49093)
{var statearr_49117_49138 = state_49111__$1;(statearr_49117_49138[1] = 5);
} else
{var statearr_49118_49139 = state_49111__$1;(statearr_49118_49139[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49112 === 5))
{var inst_49091 = (state_49111[9]);var inst_49088 = (state_49111[7]);var inst_49095 = cljs.core._EQ_.call(null,inst_49091,inst_49088);var state_49111__$1 = state_49111;if(inst_49095)
{var statearr_49119_49140 = state_49111__$1;(statearr_49119_49140[1] = 8);
} else
{var statearr_49120_49141 = state_49111__$1;(statearr_49120_49141[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49112 === 6))
{var state_49111__$1 = state_49111;var statearr_49122_49142 = state_49111__$1;(statearr_49122_49142[2] = null);
(statearr_49122_49142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49112 === 7))
{var inst_49106 = (state_49111[2]);var state_49111__$1 = state_49111;var statearr_49123_49143 = state_49111__$1;(statearr_49123_49143[2] = inst_49106);
(statearr_49123_49143[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49112 === 8))
{var inst_49088 = (state_49111[7]);var tmp49121 = inst_49088;var inst_49088__$1 = tmp49121;var state_49111__$1 = (function (){var statearr_49124 = state_49111;(statearr_49124[7] = inst_49088__$1);
return statearr_49124;
})();var statearr_49125_49144 = state_49111__$1;(statearr_49125_49144[2] = null);
(statearr_49125_49144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49112 === 9))
{var inst_49091 = (state_49111[9]);var state_49111__$1 = state_49111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49111__$1,11,out,inst_49091);
} else
{if((state_val_49112 === 10))
{var inst_49103 = (state_49111[2]);var state_49111__$1 = state_49111;var statearr_49126_49145 = state_49111__$1;(statearr_49126_49145[2] = inst_49103);
(statearr_49126_49145[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49112 === 11))
{var inst_49091 = (state_49111[9]);var inst_49100 = (state_49111[2]);var inst_49088 = inst_49091;var state_49111__$1 = (function (){var statearr_49127 = state_49111;(statearr_49127[10] = inst_49100);
(statearr_49127[7] = inst_49088);
return statearr_49127;
})();var statearr_49128_49146 = state_49111__$1;(statearr_49128_49146[2] = null);
(statearr_49128_49146[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_49132 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49132[0] = state_machine__5548__auto__);
(statearr_49132[1] = 1);
return statearr_49132;
});
var state_machine__5548__auto____1 = (function (state_49111){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49111);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49133){if((e49133 instanceof Object))
{var ex__5551__auto__ = e49133;var statearr_49134_49147 = state_49111;(statearr_49134_49147[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49111);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49133;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49148 = state_49111;
state_49111 = G__49148;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49111){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49135 = f__5563__auto__.call(null);(statearr_49135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49136);
return statearr_49135;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49283 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49253){var state_val_49254 = (state_49253[1]);if((state_val_49254 === 1))
{var inst_49216 = (new Array(n));var inst_49217 = inst_49216;var inst_49218 = 0;var state_49253__$1 = (function (){var statearr_49255 = state_49253;(statearr_49255[7] = inst_49218);
(statearr_49255[8] = inst_49217);
return statearr_49255;
})();var statearr_49256_49284 = state_49253__$1;(statearr_49256_49284[2] = null);
(statearr_49256_49284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 2))
{var state_49253__$1 = state_49253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49253__$1,4,ch);
} else
{if((state_val_49254 === 3))
{var inst_49251 = (state_49253[2]);var state_49253__$1 = state_49253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49253__$1,inst_49251);
} else
{if((state_val_49254 === 4))
{var inst_49221 = (state_49253[9]);var inst_49221__$1 = (state_49253[2]);var inst_49222 = (inst_49221__$1 == null);var inst_49223 = cljs.core.not.call(null,inst_49222);var state_49253__$1 = (function (){var statearr_49257 = state_49253;(statearr_49257[9] = inst_49221__$1);
return statearr_49257;
})();if(inst_49223)
{var statearr_49258_49285 = state_49253__$1;(statearr_49258_49285[1] = 5);
} else
{var statearr_49259_49286 = state_49253__$1;(statearr_49259_49286[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 5))
{var inst_49226 = (state_49253[10]);var inst_49218 = (state_49253[7]);var inst_49217 = (state_49253[8]);var inst_49221 = (state_49253[9]);var inst_49225 = (inst_49217[inst_49218] = inst_49221);var inst_49226__$1 = (inst_49218 + 1);var inst_49227 = (inst_49226__$1 < n);var state_49253__$1 = (function (){var statearr_49260 = state_49253;(statearr_49260[10] = inst_49226__$1);
(statearr_49260[11] = inst_49225);
return statearr_49260;
})();if(cljs.core.truth_(inst_49227))
{var statearr_49261_49287 = state_49253__$1;(statearr_49261_49287[1] = 8);
} else
{var statearr_49262_49288 = state_49253__$1;(statearr_49262_49288[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 6))
{var inst_49218 = (state_49253[7]);var inst_49239 = (inst_49218 > 0);var state_49253__$1 = state_49253;if(cljs.core.truth_(inst_49239))
{var statearr_49264_49289 = state_49253__$1;(statearr_49264_49289[1] = 12);
} else
{var statearr_49265_49290 = state_49253__$1;(statearr_49265_49290[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 7))
{var inst_49249 = (state_49253[2]);var state_49253__$1 = state_49253;var statearr_49266_49291 = state_49253__$1;(statearr_49266_49291[2] = inst_49249);
(statearr_49266_49291[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 8))
{var inst_49226 = (state_49253[10]);var inst_49217 = (state_49253[8]);var tmp49263 = inst_49217;var inst_49217__$1 = tmp49263;var inst_49218 = inst_49226;var state_49253__$1 = (function (){var statearr_49267 = state_49253;(statearr_49267[7] = inst_49218);
(statearr_49267[8] = inst_49217__$1);
return statearr_49267;
})();var statearr_49268_49292 = state_49253__$1;(statearr_49268_49292[2] = null);
(statearr_49268_49292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 9))
{var inst_49217 = (state_49253[8]);var inst_49231 = cljs.core.vec.call(null,inst_49217);var state_49253__$1 = state_49253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49253__$1,11,out,inst_49231);
} else
{if((state_val_49254 === 10))
{var inst_49237 = (state_49253[2]);var state_49253__$1 = state_49253;var statearr_49269_49293 = state_49253__$1;(statearr_49269_49293[2] = inst_49237);
(statearr_49269_49293[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 11))
{var inst_49233 = (state_49253[2]);var inst_49234 = (new Array(n));var inst_49217 = inst_49234;var inst_49218 = 0;var state_49253__$1 = (function (){var statearr_49270 = state_49253;(statearr_49270[7] = inst_49218);
(statearr_49270[8] = inst_49217);
(statearr_49270[12] = inst_49233);
return statearr_49270;
})();var statearr_49271_49294 = state_49253__$1;(statearr_49271_49294[2] = null);
(statearr_49271_49294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 12))
{var inst_49217 = (state_49253[8]);var inst_49241 = cljs.core.vec.call(null,inst_49217);var state_49253__$1 = state_49253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49253__$1,15,out,inst_49241);
} else
{if((state_val_49254 === 13))
{var state_49253__$1 = state_49253;var statearr_49272_49295 = state_49253__$1;(statearr_49272_49295[2] = null);
(statearr_49272_49295[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 14))
{var inst_49246 = (state_49253[2]);var inst_49247 = cljs.core.async.close_BANG_.call(null,out);var state_49253__$1 = (function (){var statearr_49273 = state_49253;(statearr_49273[13] = inst_49246);
return statearr_49273;
})();var statearr_49274_49296 = state_49253__$1;(statearr_49274_49296[2] = inst_49247);
(statearr_49274_49296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49254 === 15))
{var inst_49243 = (state_49253[2]);var state_49253__$1 = state_49253;var statearr_49275_49297 = state_49253__$1;(statearr_49275_49297[2] = inst_49243);
(statearr_49275_49297[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_49279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49279[0] = state_machine__5548__auto__);
(statearr_49279[1] = 1);
return statearr_49279;
});
var state_machine__5548__auto____1 = (function (state_49253){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49253);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49280){if((e49280 instanceof Object))
{var ex__5551__auto__ = e49280;var statearr_49281_49298 = state_49253;(statearr_49281_49298[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49253);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49299 = state_49253;
state_49253 = G__49299;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49253){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49282 = f__5563__auto__.call(null);(statearr_49282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49283);
return statearr_49282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49442 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49412){var state_val_49413 = (state_49412[1]);if((state_val_49413 === 1))
{var inst_49371 = [];var inst_49372 = inst_49371;var inst_49373 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_49412__$1 = (function (){var statearr_49414 = state_49412;(statearr_49414[7] = inst_49373);
(statearr_49414[8] = inst_49372);
return statearr_49414;
})();var statearr_49415_49443 = state_49412__$1;(statearr_49415_49443[2] = null);
(statearr_49415_49443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 2))
{var state_49412__$1 = state_49412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49412__$1,4,ch);
} else
{if((state_val_49413 === 3))
{var inst_49410 = (state_49412[2]);var state_49412__$1 = state_49412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49412__$1,inst_49410);
} else
{if((state_val_49413 === 4))
{var inst_49376 = (state_49412[9]);var inst_49376__$1 = (state_49412[2]);var inst_49377 = (inst_49376__$1 == null);var inst_49378 = cljs.core.not.call(null,inst_49377);var state_49412__$1 = (function (){var statearr_49416 = state_49412;(statearr_49416[9] = inst_49376__$1);
return statearr_49416;
})();if(inst_49378)
{var statearr_49417_49444 = state_49412__$1;(statearr_49417_49444[1] = 5);
} else
{var statearr_49418_49445 = state_49412__$1;(statearr_49418_49445[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 5))
{var inst_49376 = (state_49412[9]);var inst_49373 = (state_49412[7]);var inst_49380 = (state_49412[10]);var inst_49380__$1 = f.call(null,inst_49376);var inst_49381 = cljs.core._EQ_.call(null,inst_49380__$1,inst_49373);var inst_49382 = cljs.core.keyword_identical_QMARK_.call(null,inst_49373,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_49383 = (inst_49381) || (inst_49382);var state_49412__$1 = (function (){var statearr_49419 = state_49412;(statearr_49419[10] = inst_49380__$1);
return statearr_49419;
})();if(cljs.core.truth_(inst_49383))
{var statearr_49420_49446 = state_49412__$1;(statearr_49420_49446[1] = 8);
} else
{var statearr_49421_49447 = state_49412__$1;(statearr_49421_49447[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 6))
{var inst_49372 = (state_49412[8]);var inst_49397 = inst_49372.length;var inst_49398 = (inst_49397 > 0);var state_49412__$1 = state_49412;if(cljs.core.truth_(inst_49398))
{var statearr_49423_49448 = state_49412__$1;(statearr_49423_49448[1] = 12);
} else
{var statearr_49424_49449 = state_49412__$1;(statearr_49424_49449[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 7))
{var inst_49408 = (state_49412[2]);var state_49412__$1 = state_49412;var statearr_49425_49450 = state_49412__$1;(statearr_49425_49450[2] = inst_49408);
(statearr_49425_49450[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 8))
{var inst_49376 = (state_49412[9]);var inst_49372 = (state_49412[8]);var inst_49380 = (state_49412[10]);var inst_49385 = inst_49372.push(inst_49376);var tmp49422 = inst_49372;var inst_49372__$1 = tmp49422;var inst_49373 = inst_49380;var state_49412__$1 = (function (){var statearr_49426 = state_49412;(statearr_49426[7] = inst_49373);
(statearr_49426[8] = inst_49372__$1);
(statearr_49426[11] = inst_49385);
return statearr_49426;
})();var statearr_49427_49451 = state_49412__$1;(statearr_49427_49451[2] = null);
(statearr_49427_49451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 9))
{var inst_49372 = (state_49412[8]);var inst_49388 = cljs.core.vec.call(null,inst_49372);var state_49412__$1 = state_49412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49412__$1,11,out,inst_49388);
} else
{if((state_val_49413 === 10))
{var inst_49395 = (state_49412[2]);var state_49412__$1 = state_49412;var statearr_49428_49452 = state_49412__$1;(statearr_49428_49452[2] = inst_49395);
(statearr_49428_49452[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 11))
{var inst_49376 = (state_49412[9]);var inst_49380 = (state_49412[10]);var inst_49390 = (state_49412[2]);var inst_49391 = [];var inst_49392 = inst_49391.push(inst_49376);var inst_49372 = inst_49391;var inst_49373 = inst_49380;var state_49412__$1 = (function (){var statearr_49429 = state_49412;(statearr_49429[7] = inst_49373);
(statearr_49429[8] = inst_49372);
(statearr_49429[12] = inst_49390);
(statearr_49429[13] = inst_49392);
return statearr_49429;
})();var statearr_49430_49453 = state_49412__$1;(statearr_49430_49453[2] = null);
(statearr_49430_49453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 12))
{var inst_49372 = (state_49412[8]);var inst_49400 = cljs.core.vec.call(null,inst_49372);var state_49412__$1 = state_49412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49412__$1,15,out,inst_49400);
} else
{if((state_val_49413 === 13))
{var state_49412__$1 = state_49412;var statearr_49431_49454 = state_49412__$1;(statearr_49431_49454[2] = null);
(statearr_49431_49454[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 14))
{var inst_49405 = (state_49412[2]);var inst_49406 = cljs.core.async.close_BANG_.call(null,out);var state_49412__$1 = (function (){var statearr_49432 = state_49412;(statearr_49432[14] = inst_49405);
return statearr_49432;
})();var statearr_49433_49455 = state_49412__$1;(statearr_49433_49455[2] = inst_49406);
(statearr_49433_49455[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49413 === 15))
{var inst_49402 = (state_49412[2]);var state_49412__$1 = state_49412;var statearr_49434_49456 = state_49412__$1;(statearr_49434_49456[2] = inst_49402);
(statearr_49434_49456[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_49438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49438[0] = state_machine__5548__auto__);
(statearr_49438[1] = 1);
return statearr_49438;
});
var state_machine__5548__auto____1 = (function (state_49412){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49439){if((e49439 instanceof Object))
{var ex__5551__auto__ = e49439;var statearr_49440_49457 = state_49412;(statearr_49440_49457[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49458 = state_49412;
state_49412 = G__49458;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49412){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49441 = f__5563__auto__.call(null);(statearr_49441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49442);
return statearr_49441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
